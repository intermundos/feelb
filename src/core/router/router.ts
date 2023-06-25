// @ts-nocheck

import { createRouter, createWebHistory } from 'vue-router'

const layout = () => import( '@ui/layouts/app.layout.vue' )

const routes = [

    {
        path: '/',
        redirect: '/employer',
    },

    {
        path: '/employer',
        component: layout,
        children: [
            {
                path: '',
                name: 'employer',
                component: () => import('@views/employer/employer.view.vue'),
            },
        ],
    },

    {
        path: '/employee',
        component: layout,
        children: [
            {
                path: '',
                name: 'employees',
                component: () => import('@views/employees/employees.view.vue'),
            },
            {
                path: ':id',
                name: 'employee',
                component: () => import('@views/employee/employee.view.vue'),
            },
        ],
    },

]

const router = createRouter( {
    history: createWebHistory(),
    routes,
    scrollBehavior( to, from, savedPosition ) {
        if ( savedPosition ) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    },
} )


router.afterEach( ( to, from ) => {
    document.body.classList.add( to?.name as string )
    document.body.classList.remove( from?.name as string )
} )

export { router }
