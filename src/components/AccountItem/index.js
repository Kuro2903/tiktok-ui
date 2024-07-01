
// import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import classNames from "classnames/bind";
// import style from './AccountItem.module.scss'
import Ac1 from "~/components/AccountItem/Account/Ac1";
import Ac2 from "~/components/AccountItem/Account/Ac2";
// const cx = classNames.bind(style);
function AccountsItem() {
    return (
        //     <div className={cx('wrapper')}>
        //         <img className={cx('avatar')} 
        //         src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/c14a92a8e2e23babececab98c0f67fac.jpeg?lk3s=a5d48078&nonce=41734&refresh_token=2b0527c1e25c3f2d84bea2d24903c199&x-expires=1718874000&x-signature=vH7EcA3eKiF49vWOU4ZmRVFCyv8%3D&shp=a5d48078&shcp=b59d6b55" 
        //         alt="VuVer"/>
        //         <div className={cx('infor')}>
        //             <h4 className={cx('name')}>
        //                 <span>Recon</span>
        //                 <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
        //             </h4>
        //             <span className={cx('username')}>MongMer</span>
        //         </div>
        //     </div>
        
        //clone account from folder Account
        <div>
                <Ac1/>
                <Ac2/>
        </div>
        
    )
    //  có cách clone mới thì xóa hết comments và 
    //   <div>
    //      <Ac1/>
    //      <Ac2/>
    //  </div>
}

export default AccountsItem;