import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import {
    ExploreIcon,
    ExploreIconActive,
    FollowingIcon,
    FollowingIconActive,
    FriendIcon,
    FriendIconActive,
    HomeIcon,
    HomeIconActive,
    LiveIcon,
    LiveIconActive,
} from '~/components/Icons';
import Menu, { MenuItem } from './Menu';
import Image from '~/components/Image';
import SuggestedAccounts from '~/components/SuggestedAccounts/SuggestedAccounts';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} iconActive={<HomeIconActive />} />
                <MenuItem
                    title="Explore"
                    to={config.routes.explore}
                    icon={<ExploreIcon />}
                    iconActive={<ExploreIconActive />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<FollowingIcon />}
                    iconActive={<FollowingIconActive />}
                />
                <MenuItem
                    title="Friends"
                    to={config.routes.friends}
                    icon={<FriendIcon />}
                    iconActive={<FriendIconActive />}
                />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} iconActive={<LiveIconActive />} />
                <MenuItem
                    title="Profile"
                    to={'/@Recon'}
                    icon={<Image className={cx('user-avatar')} src="ava.jpg" alt="Recon VuVer" />}
                />
            </Menu>
            <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following accounts" />
        </aside>
    );
}

export default Sidebar;
