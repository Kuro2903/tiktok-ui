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
    { path: '/', component: Home },
    { path: '/following', component: Follow },
    { path: '/:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];
// just for login
const privateRoutes = [];

export { privateRoutes, publicRoutes };
