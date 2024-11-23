import { z } from 'zod';

const createUserNameValidationSchema = z.object({
  firstName: z.string().min(1).max(20),
  middleName: z.string().max(20).optional(),
  lastName: z.string().min(1).max(20),
});

export const createAdminValidationSchema = z.object({
  body: z.object({
    userId: z.string(),
    name: createUserNameValidationSchema,
    email: z.string().email(),
    password: z.string().max(20),
    role: z.string(),
    profileImg: z.string().optional(),
    isDeleted: z.boolean(),
  }),
});

const updateUserNameValidationSchema = z.object({
  firstName: z.string().min(1).max(20).optional(),
  middleName: z.string().max(20).optional(),
  lastName: z.string().min(1).max(20).optional(),
});

export const updateAdminValidationSchema = z.object({
  body: z.object({
    userId: z.string().optional(),
    name: updateUserNameValidationSchema,
    email: z.string().email().optional(),
    password: z.string().max(20).optional(),
    role: z.string().optional(),
    profileImg: z.string().optional(),
    isDeleted: z.boolean().optional(),
  }),
});

export const AdminValidations = {
  createAdminValidationSchema,
  updateAdminValidationSchema,
};