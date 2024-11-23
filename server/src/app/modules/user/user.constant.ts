export const USER_ROLE = {
    user: 'user',
    admin: 'admin'
} as const

export type TUserRole = keyof typeof USER_ROLE

export const USER_STATUS = ['in-progress', 'blocked']