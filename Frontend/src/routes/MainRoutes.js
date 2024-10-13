import { lazy } from 'react';
import Dashboard  from '../layout/Dashboard';
import Loadable from '../components/Loadable';


const DashboardDefault = Loadable(lazy(()=>import('../pages/Dashboard')));

const AddBlogPage = Loadable(lazy(()=>import('../pages/AddBlogForm')));
const BlogList = Loadable(lazy(()=>import('../pages/BlogList')));



const MainRoutes = {
    path:'/',
    element:<Dashboard/>,
    children:[
        {
            path:'/',
            element:<DashboardDefault/>
        },
        {
            path:'add-blog',
            element:<AddBlogPage/>
        },
        {
            path:'blog-list',
            element:<BlogList/>
        }
    ]

}
export default MainRoutes;
