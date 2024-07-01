

import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faSignIn, faEllipsisVertical, faEarthAsia, faKeyboard, faCircleQuestion, faCoins, faVideo, faGear, faSignOut, faPlus   } from '@fortawesome/free-solid-svg-icons';
import {  faBookmark, faLightbulb, faMessage, faMoon, faPaperPlane, faUser,  } from '@fortawesome/free-regular-svg-icons';
import { InboxIcon, MessageIcon, SearchIcon, ProfileIcon, CoinIcon, SettingsIcon, LanguageIcon, HelpIcon, ShortcutsIcon, LogoutIcon, Favorite, FavoriteIcon, LiveStudioIcon, LiveCreatorIcon, DarkModeIcon, PlusIcon, MoreIcon } from '~/components/Icons';

import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 

import Button from '~/components/Button';
import { wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss'
import images from '~/assets/images';
import AccountsItem from '~/components/AccountItem'
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind (styles)
const MENU_ITEMS = [
    {
        icon : <LiveCreatorIcon/>,
        title: 'Live Creator hub',
        to:'/live/creator'

    },
    {
        icon : <LanguageIcon/>,
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
            ]
        }
    },
    {
        icon : <HelpIcon/>,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon : <ShortcutsIcon/>,
        title: 'keyboard shortcuts',
    },
    {
        icon : <DarkModeIcon/>,
        title: 'Dark mode',
    },
];
function Header() {

    const[searchResults, setsearchResults] =useState([]);
    
    const currentUser = true;
    

    useEffect(() =>{
        setTimeout(() =>{
            setsearchResults([1,2,3])//thay [1,2,3] = [] để làm logic
        },[])
    }
)
//handle logic
const handleMenuChange = (menuItem) =>{
    switch (menuItem.type) {
        case 'Language':
            console.log(menuItem.code)
            break;
        default:
            break;
    }
}
    const userMenu = [
        {
            icon : <ProfileIcon/>,
            title: 'Your Profile',
            to:'/@Recon'
        },
        {
            icon : <FavoriteIcon/>,
            title: 'Favorite',
            to:'/favorite'

        },
        {
            icon : <CoinIcon/>,
            title: 'Get Coins',
            to:'/coin'

        },
        {
            icon : <SettingsIcon/>,
            title: 'Settings',
            to:'/setting'

        },
        {
            icon : <LiveStudioIcon/>,
            title: 'Live Studio',
            to:'/live'

        },
        
        ...MENU_ITEMS,
        
        {
            icon : <LogoutIcon/>,
            title: 'Log Out',
            separate: true,
        },
    ]
    return  (
        <header className= {cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo" />
                </div>
                <HeadlessTippy
                    interactive
                    // visible = {searchResults.length >0}
                    render={attrs =>(
                        <div className={cx('search-results')} tabIndex= "-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>
                                    Accounts    
                                </h4> 
                                <AccountsItem/>
                            </PopperWrapper>
                        </div>
                    )}
                >
                <div className={cx('search')}>
                    <input placeholder="search for anything" spellCheck="false"/>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark}/>
                    </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>
                    
                        <button className={cx('search-btn')}>
                        <SearchIcon/>
                        </button>
                </div>
                </HeadlessTippy>

                <div className={cx('action')}>
                {currentUser ? (
                    <>
                        <Button upload leftIcon={<PlusIcon/>}>Upload</Button>
                        <Tippy delay={[0, 100]} content="Send Messenger" placement='bottom'>
                            <button className={cx('action-btn')}>
                                <MessageIcon/>
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 100]} content="Notice" placement='bottom'>
                            <button className={cx('action-btn')}>
                                <InboxIcon/>
                            </button>
                        </Tippy>
                    </>
                ) : (
                    <>
                        <Button upload leftIcon={<PlusIcon/>}>Upload</Button>
                        <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn}/>}>login</Button>
                    </>
                )}
                <Menu items = {currentUser ? userMenu : MENU_ITEMS} onChange = {handleMenuChange}>
                    {currentUser ? (
                        <img 
                            className={cx('user-avatar')} 
                            src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-1/338479225_1935339326810050_5136619892256188683_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=kb0PlhSBPNsQ7kNvgF1xNRn&_nc_ht=scontent.fhan14-1.fna&oh=00_AYA_PGdPneKKQlAheMxtFRxvAbDxph3Ynx1J87pwZwcYuA&oe=6682C39A" 
                            alt='Recon VuVer'
                        />
                    ) : (
                        <button className={cx('more-btn')}>
                            <MoreIcon/>
                        </button>
                    )}
                    
                </Menu>
                </div>
            </div>
        </header>
    );
        
}

export default Header;