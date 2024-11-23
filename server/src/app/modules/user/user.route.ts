import express from 'express';
import { UserControllers } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { USER_ROLE } from './user.constant';
import { userValidation } from './user.validation';

const router = express.Router();

router.post(
  '/create-user',
  auth(USER_ROLE.admin),
  validateRequest(userValidation.userValidationSchema),
  UserControllers.createUser,
);

router.post(
  '/change-status/:id',
  auth(USER_ROLE.admin),
  validateRequest(userValidation.changeStatusValidationSchema),
  UserControllers.changeStatus,
);

router.get('/me', auth('admin', 'user'), UserControllers.getMe);

router.get('/', UserControllers.getAllUsers);

router.get('/:id', UserControllers.getSingleUser);

router.patch(
  '/:id',
  auth(USER_ROLE.admin),
  UserControllers.updateUser,
);

router.delete('/:id', auth(USER_ROLE.admin), UserControllers.deleteUser);

export const userRoutes = router;
