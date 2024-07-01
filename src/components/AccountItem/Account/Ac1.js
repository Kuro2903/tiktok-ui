
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import style from '../AccountItem.module.scss'

const cx = classNames.bind(style);
function AccountsItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} 
                src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-1/382396118_1042150786820882_7959065220745323543_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-7&_nc_sid=50d2ac&_nc_ohc=MQMBbEqKyZAQ7kNvgGvlQCM&_nc_ht=scontent.fhan14-1.fna&oh=00_AYDHsLvIveD63LsQA2FMo9VlsXfHCm36gwFXlMJpEx05WA&oe=6682B33C" 
                alt="MTP"/>
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Chii nè</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </h4>
                <span className={cx('username')}>Khánh Cheese</span>
            </div>
        </div>
    )
}

export default AccountsItem;