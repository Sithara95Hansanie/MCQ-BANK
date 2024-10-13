import { lazy } from 'react';

import Loadable  from '../components/Loadable';
import MinimalLayout from '../layout/MinimalLayout';


const AuthRegister = Loadable(lazy(()=>import('../pages/authentication/register')));

const LoginRoutes = {
    path:'/',
    element:<MinimalLayout/>,
    children:[
        {
            path:'/register',
            element:<AuthRegister/>
        }
    ]
}
export default LoginRoutes;
