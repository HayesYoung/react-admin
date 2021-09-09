/**
 *
 * @Young 2021 8.22
 * 路由信息
 * 
 */
import React from 'react'

import Index from '../views/index'
import Login from '../views/login';

const routes = [
    {
        path: "/",
        exact: true,
        component: Login,
    },
    {
        path: "/index",
        component: Index,
        children: [
            {
                path: "/index/123",
                meta: {
                    title: "首页·"
                },
                // exact: true,
                component: Login,
                children: [
                    {
                        path: "/index/123/log",
                        exact: true,
                        component: Login
                    },
                ]
            },
            {
                path: "/index/log",
                exact: true,
                component: Login
            }
        ]

    },
    {
        path: "/login",
        exact: true,
        component: Login
    }

]


export default routes;