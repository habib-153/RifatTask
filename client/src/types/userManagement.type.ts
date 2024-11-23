export type TUser = {
  _id: string;
  userId: string;
  email: string;
  dept?:string
  fullName?: string
  name: TName
  needsPasswordChange: boolean;
  role: string;
  status: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TName = {
  firstName: string;
  middleName: string;
  lastName: string;
  _id: string;
};