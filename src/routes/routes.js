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
import Live from '~/pages/Live';
import Explore from '~/pages/Explore';
import Friends from '~/pages/Friends';
import Favorite from '~/pages/Favorite';
import Setting from '~/pages/Setting';

//public for all
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Follow },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.explore, component: Explore },
    { path: config.routes.friends, component: Friends },
    { path: config.routes.favorite, component: Favorite },
    { path: config.routes.live, component: Live },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.setting, component: Setting, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];
// just for login
const privateRoutes = [];

export { privateRoutes, publicRoutes };
