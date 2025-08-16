import { Schema, model } from 'mongoose';

const celebritySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  biography: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
});

const Celebrity = model('Celebrity', celebritySchema);

export default Celebrity;