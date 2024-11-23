"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminValidations = exports.updateAdminValidationSchema = exports.createAdminValidationSchema = void 0;
const zod_1 = require("zod");
const createUserNameValidationSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(1).max(20),
    middleName: zod_1.z.string().max(20).optional(),
    lastName: zod_1.z.string().min(1).max(20),
});
exports.createAdminValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string(),
        name: createUserNameValidationSchema,
        email: zod_1.z.string().email(),
        password: zod_1.z.string().max(20),
        role: zod_1.z.string(),
        profileImg: zod_1.z.string().optional(),
        isDeleted: zod_1.z.boolean(),
    }),
});
const updateUserNameValidationSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(1).max(20).optional(),
    middleName: zod_1.z.string().max(20).optional(),
    lastName: zod_1.z.string().min(1).max(20).optional(),
});
exports.updateAdminValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string().optional(),
        name: updateUserNameValidationSchema,
        email: zod_1.z.string().email().optional(),
        password: zod_1.z.string().max(20).optional(),
        role: zod_1.z.string().optional(),
        profileImg: zod_1.z.string().optional(),
        isDeleted: zod_1.z.boolean().optional(),
    }),
});
exports.AdminValidations = {
    createAdminValidationSchema: exports.createAdminValidationSchema,
    updateAdminValidationSchema: exports.updateAdminValidationSchema,
};
