import { Router } from "express";
import { userRoutes } from "../modules/user/user.route";
import { AdminRoutes } from "../modules/Admin/admin.route";
import { AuthRoutes } from "../modules/Auth/auth.route";

const router = Router()

const moduleRoutes = [
    {
        path: '/users',
        route: userRoutes
    },
    {
        path: '/admins',
        route: AdminRoutes
    },
    {
        path: '/auth',
        route: AuthRoutes
    },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router
