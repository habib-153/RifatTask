"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_constant_1 = require("./user.constant");
const user_validation_1 = require("./user.validation");
const router = express_1.default.Router();
router.post('/create-user', (0, auth_1.default)(user_constant_1.USER_ROLE.admin), (0, validateRequest_1.default)(user_validation_1.userValidation.userValidationSchema), user_controller_1.UserControllers.createUser);
router.post('/change-status/:id', (0, auth_1.default)(user_constant_1.USER_ROLE.admin), (0, validateRequest_1.default)(user_validation_1.userValidation.changeStatusValidationSchema), user_controller_1.UserControllers.changeStatus);
router.get('/me', (0, auth_1.default)('admin', 'user'), user_controller_1.UserControllers.getMe);
router.get('/', user_controller_1.UserControllers.getAllUsers);
router.get('/:id', user_controller_1.UserControllers.getSingleUser);
router.patch('/:id', (0, auth_1.default)(user_constant_1.USER_ROLE.admin), user_controller_1.UserControllers.updateUser);
router.delete('/:id', (0, auth_1.default)(user_constant_1.USER_ROLE.admin), user_controller_1.UserControllers.deleteUser);
exports.userRoutes = router;
