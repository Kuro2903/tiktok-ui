import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import {
    InboxIcon,
    MessageIcon,
    ProfileIcon,
    CoinIcon,
    SettingsIcon,
    LanguageIcon,
    HelpIcon,
    ShortcutsIcon,
    LogoutIcon,
    FavoriteIcon,
    LiveStudioIcon,
    LiveCreatorIcon,
    DarkModeIcon,
    PlusIcon,
    MoreIcon,
} from '~/components/Icons';

import 'tippy.js/dist/tippy.css';

import config from '~/config';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <LiveCreatorIcon />,
        title: 'Live Creator hub',
        to: '/live/creator',
    },
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            //cấp 2
            title: 'language',
            data: [
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                    //cấp 3
                    // children: {
                    //     title: 'language',
                    //     data: [
                    //         {
                    //             code: 'en',
                    //             title: 'English',
                    //         },],
                    //     },
                },
                {
                    type: 'Language',
                    code: 've',
                    title: 'Vietnamese',
                },
                {
                    type: 'Language',
                    code: 'in',
                    title: 'indian',
                },
                {
                    type: 'Language',
                    code: 'zh',
                    title: 'chinese',
                },
                {
                    type: 'Language',
                    code: 'th',
                    title: 'thai',
                },
                {
                    type: 'Language',
                    code: 'ru',
                    title: 'russian',
                },
            ],
        },
    },
    {
        icon: <HelpIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <ShortcutsIcon />,
        title: 'keyboard shortcuts',
    },
    {
        icon: <DarkModeIcon />,
        title: 'Dark mode',
    },
];
function Header() {
    const currentUser = true;

    //handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'Language':
                console.log(menuItem.code);
                break;
            default:
                break;
        }
    };
    const userMenu = [
        {
            icon: <ProfileIcon />,
            title: 'Your Profile',
            to: '/@Recon',
        },
        {
            icon: <FavoriteIcon />,
            title: 'Favorite',
            to: '/favorite',
        },
        {
            icon: <CoinIcon />,
            title: 'Get Coins',
            to: '/coin',
        },
        {
            icon: <SettingsIcon />,
            title: 'Settings',
            to: '/setting',
        },
        {
            icon: <LiveStudioIcon />,
            title: 'Live Studio',
            to: '/live',
        },

        ...MENU_ITEMS,

        {
            icon: <LogoutIcon />,
            title: 'Log Out',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                {/* search zone */}
                <Search />
                {/* action and menu zone */}
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button upload leftIcon={<PlusIcon />} to={config.routes.upload}>
                                Upload
                            </Button>
                            <Tippy delay={[0, 100]} content="Send Messenger" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} content="Notice" placement="bottom">
                                {/* có thể  thêm 'relative' cạnh action-btn bằng tailwind*/}
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>99+</span>
                                </button>
                            </Tippy>
                            {/* <Button leftIcon={<CoinIcon />}>Get Coin</Button> */}
                        </>
                    ) : (
                        <>
                            <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn} />}>
                                login
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            ((
                                <Button upload leftIcon={<PlusIcon />}>
                                    Upload
                                </Button>
                            ),
                            (<Image className={cx('user-avatar')} src="ava.jpg" alt="Recon VuVer" />))
                        ) : (
                            <button className={cx('more-btn')}>
                                <MoreIcon />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
