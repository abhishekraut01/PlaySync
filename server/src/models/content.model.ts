import mongoose, { Document, Schema, model, Types } from 'mongoose';

interface IContent extends Document {
  link: string;
  type: string;
  title: string;
  tags: Types.ObjectId[];
  userId: Types.ObjectId;
  description:string
}

const contentSchema = new Schema<IContent>(
  {
    link: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Tag',
      },
    ],
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

const Content = model<IContent>('Content', contentSchema);
export default Content;
