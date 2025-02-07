import { Schema, model, Document } from "mongoose";


export interface ITag extends Document {
  title: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

const tagSchema = new Schema<ITag>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minlength: [3, "Title must be at least 3 characters long"],
      maxlength: [50, "Title cannot exceed 50 characters"],
      unique: true, 
    },
  },
  { timestamps: true }
);

// Create and export the model
export const Tag = model<ITag>("Tag", tagSchema);