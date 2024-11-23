import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AdminControllers } from './admin.controller';
import { createAdminValidationSchema, updateAdminValidationSchema } from './admin.validation';
import { USER_ROLE } from '../user/user.constant';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/create-admin',
 // auth(USER_ROLE.admin),
  validateRequest(createAdminValidationSchema),
  AdminControllers.createAdmin,
);

router.get('/', AdminControllers.getAllAdmins);

router.get('/:id', AdminControllers.getSingleAdmin);

router.patch(
  '/:id',
  auth(USER_ROLE.admin),
  validateRequest(updateAdminValidationSchema),
  AdminControllers.updateAdmin,
);

router.delete('/:id', auth(USER_ROLE.admin), AdminControllers.deleteAdmin);

export const AdminRoutes = router;