"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const zod_1 = require("zod");
const user_constant_1 = require("./user.constant");
const userValidationSchema = zod_1.z.object({
    password: zod_1.z.string({
        invalid_type_error: 'Password must be a string'
    }).max(20, { message: "password can not be more than 20 char" }).optional(),
});
const changeStatusValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        status: zod_1.z.enum([...user_constant_1.USER_STATUS])
    })
});
exports.userValidation = {
    userValidationSchema,
    changeStatusValidationSchema
};
