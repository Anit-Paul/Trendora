import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
    },
    cardData: {
      type: Object,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

const userModel = model("User", userSchema);

export default userModel;
