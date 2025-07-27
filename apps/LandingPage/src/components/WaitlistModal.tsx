import { useState } from 'react';
import { X } from 'lucide-react';
import Button from './Button';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://playsyncbacked-production.up.railway.app/api/v1/waitlist/joinwaitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, mobile }),
      });

      if (!response.ok) {
        throw new Error('Failed to join waitlist');
      }

      setSuccess(true);
      setTimeout(() => {
        onClose();
        setSuccess(false);
        setEmail('');
        setMobile('');
      }, 2000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-dark-50 rounded-2xl p-6 w-full max-w-md mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-light-50 hover:text-primary transition-colors"
        >
          <X size={24} />
        </button>

        <h3 className="text-2xl font-display font-bold text-light mb-2">Join the Waitlist</h3>
        <p className="text-light-50 mb-6">
          Be among the first to experience synchronized music listening with friends.
        </p>

        {success ? (
          <div className="text-center py-8">
            <div className="text-primary text-xl mb-2">🎉 You're on the list!</div>
            <p className="text-light-50">We'll notify you when PlaySync launches.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-light-50 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-dark rounded-lg border border-dark-50 text-light px-4 py-2 focus:outline-none focus:border-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="mobile" className="block text-light-50 mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full bg-dark rounded-lg border border-dark-50 text-light px-4 py-2 focus:outline-none focus:border-primary"
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button
              type="submit"
              variant="primary"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Joining...' : 'Join Waitlist'}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default WaitlistModal;