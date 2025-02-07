import { Request, Response } from 'express';
import User from '../models/user.model';
import crypto from 'crypto';
import asyncHandler from '../utils/AsyncHandler';
import bcrypt from 'bcryptjs';
import {
  requestResetPasswordSchema,
  ResetPasswordSchema,
} from '../validation/validationSchema';
import ApiError from '../utils/ApiError';
import sendEmail from '../utils/sendEmail';
import ApiResponse from '../utils/ApiResponse';

export const requestPasswordReset = asyncHandler(
  async (req: Request, res: Response) => {
    const validationResult = requestResetPasswordSchema.safeParse(req.body);

    if (!validationResult.success) {
      throw new ApiError(
        400,
        'Validation failed',
        validationResult.error.errors
      );
    }

    const { username, email } = validationResult.data;

    //check for the user in the database
    const existingUser = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (!existingUser) {
      throw new ApiError(404, 'User not found');
    }

    const resetToken = await existingUser.generatePasswordResetToken();
    await existingUser.save({ validateBeforeSave: false });

    // Construct reset URL
    const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
    const message = `You requested a password reset. Click the link below to reset your password:\n\n${resetUrl}\n\nThis link is valid for 10 minutes.`;

    try {
      await sendEmail({
        to: existingUser.email,
        subject: 'Password Reset Request',
        text: message,
      });

      res.status(200).json(new ApiResponse(200, 'Password reset email sent'));
    } catch (err) {
      existingUser.resetPasswordToken = null;
      existingUser.resetPasswordExpires = null;
      await existingUser.save({ validateBeforeSave: false });
      throw new ApiError(500, 'Email could not be sent');
    }
  }
);

export const resetPassword = asyncHandler(
  async (req: Request, res: Response) => {
    const validationResult = ResetPasswordSchema.safeParse(req.body);

    if (!validationResult.success) {
      throw new ApiError(
        400,
        'Validation failed',
        validationResult.error.errors
      );
    }

    const { token } = req.params;
    const { password } = validationResult.data;
    if (typeof token !== 'string') {
      throw new ApiError(400, 'Invalid token');
    }

    const hashToken = crypto.createHash('sha256').update(token).digest('hex');

    const user = await User.findOne({
      resetPasswordToken: hashToken,
      resetPasswordExpires: { $gt: new Date() },
    });

    if (!user) {
      throw new ApiError(400, 'Invalid or expired toke');
    }

    // Hash and update password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;

    await user.save();

    res.status(200).json(
      new ApiResponse(200, 'password reset successfully', {
        user: user.username,
      })
    );
  }
);
