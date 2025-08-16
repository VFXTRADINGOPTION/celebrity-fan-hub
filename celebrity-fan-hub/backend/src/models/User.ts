import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  favoriteCelebrity: {
    type: Schema.Types.ObjectId,
    ref: 'Celebrity',
  },
  membershipStatus: {
    type: String,
    enum: ['free', 'premium'],
    default: 'free',
  },
}, { timestamps: true });

const User = model('User', userSchema);

export default User;