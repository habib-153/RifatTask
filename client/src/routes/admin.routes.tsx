import AdminDashboard from '../pages/admin/AdminDashboard';
import CreateAdmin from '../pages/admin/userManagement/CreateAdmin';
import CreateUser from '../pages/admin/userManagement/CreateUser';
import UserData from '../pages/admin/userManagement/userData';


export const adminPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <AdminDashboard />,
  },
  {
    name: 'User Management',
    children: [
      {
        name: 'Create Admin',
        path: 'create-admin',
        element: <CreateAdmin />,
      },
      {
        name: 'Create User',
        path: 'create-user',
        element: <CreateUser />,
      },
      {
        name: 'Users',
        path: 'user-data',
        element: <UserData />,
      },
    ],
  },
];