import User from './auth.schema';

interface RegisterUserData {
  name: string;
  email: string;
  password: string;
}

export const registerUser = async (userData: RegisterUserData) => {
  const user = await User.create(userData);

  return user;
};