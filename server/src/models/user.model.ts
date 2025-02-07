import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';


interface IUser extends Document {
  username: string;
  password: string;
  email:string;
  avatar:string
  resetPasswordToken?: string | null;
  resetPasswordExpires?: Date | null;
  generatePasswordResetToken : ()=>string
  isPasswordValid :()=> boolean
}

const userSchema: Schema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email:{
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    avatar:{
      type:String,
    },
    password: {
      type: String,
      required: true,
      minlength: 8, // Example of password validation for minimum length
    },
    resetPasswordToken: {
      type: String,
      default: null,
    },
    resetPasswordExpires: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

// Hash the password before saving the user
userSchema.pre<IUser>('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err instanceof Error ? err : new Error(String(err)));
  }
});

// Validate the password
userSchema.methods.isPasswordValid =async function (this: IUser, password: string) {
  return bcrypt.compare(password, this.password);
};

userSchema.methods.generatePasswordResetToken = async function() {
  const resetToken = crypto.randomBytes(32).toString('hex');
  this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
  this.resetPasswordExpires = new Date(Date.now() + 10 * 60 * 1000);
  return resetToken
}

const User = mongoose.model<IUser>('User', userSchema);
export default User;