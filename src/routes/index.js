import routesConfig from '~/config/routes';

//layout
import { HeaderOnly } from '~/components/Layout';
//

//page layout
import Home from '~/pages/Home';
import Follow from '~/pages/Follow';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
//public for all
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Follow },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];
// just for login
const privateRoutes = [];

export { privateRoutes, publicRoutes };
