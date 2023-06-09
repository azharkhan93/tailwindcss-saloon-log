import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  phone_number: { type: String, required: true },
  cs_age: { type: Number, required: true },
  cs_amount: { type: Number, required: true },
  cs_gender: { type: String, enum: ['male', 'female'], required: true },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;





