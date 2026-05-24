import bcrypt from 'bcrypt';
import User from './auth.schema';

interface RegisterUserData {
  name: string;
  email: string;
  password: string;
}

export const registerUser = async (userData: RegisterUserData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const user = await User.create({
    ...userData,
    password: hashedPassword,
  });

  return user;
};