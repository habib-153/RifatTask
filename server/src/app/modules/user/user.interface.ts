import { Model } from "mongoose";
import { TUserName } from "../Admin/admin.interface";

export interface TUser  {
  userId: string;
  email: string;
  name: TUserName;
  password: string;
  dept: string
  needsPasswordChange: boolean;
  passwordChangedAt?: Date;
  role: string
  profileImg?: string; 
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
};

export interface UserModel extends Model<TUser>{
  isUserExistsByCustomId: (id: string) => Promise<TUser>;

  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;

  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number,
  ): boolean
}