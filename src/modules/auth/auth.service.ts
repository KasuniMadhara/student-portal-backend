import bcrypt from 'bcrypt';
import User from './auth.schema';
import jwt from 'jsonwebtoken';

interface RegisterUserData {
  name: string;
  email: string;
  password: string;
}

interface LoginUserData {
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

export const loginUser = async (userData: LoginUserData) => {
  const user = await User.findOne({
    email: userData.email
  });

  if(!user) {
    throw new Error('User not found');
  }

  const isPasswordMatched = await bcrypt.compare(
    userData.password,
    user.password
  );

  if(!isPasswordMatched) {
    throw new Error('Password does not match');
  }

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role
    },
  
    process.env.JWT_SECRET as string,
    {
      expiresIn: '7d'
    }
  );
    
    return{
      token,
      user
    };
};