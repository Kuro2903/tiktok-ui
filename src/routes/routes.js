import config from '~/config';

//layout
import { HeaderOnly } from '~/layouts';
//

//page layout
import Home from '~/pages/Home';
import Follow from '~/pages/Follow';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
//public for all
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Follow },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];
// just for login
const privateRoutes = [];

export { privateRoutes, publicRoutes };
