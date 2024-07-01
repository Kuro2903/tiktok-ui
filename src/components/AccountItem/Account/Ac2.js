
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import style from '../AccountItem.module.scss'

const cx = classNames.bind(style);
function AccountsItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} 
            src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-1/434686503_472429678445783_1664035668697551761_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=106&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=mVliiHEpEPUQ7kNvgE8EZlr&_nc_ht=scontent.fhan14-1.fna&oh=00_AYB0rWbrpq-25I6QOdGdNH6QKMcBN9l-E56e2-_jHzkWDA&oe=6682E479"
            alt="Bray"/>
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Radio Tâm Trạng</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </h4>
                <span className={cx('username')}>Lofi</span>
            </div>
        </div>
    )
}

export default AccountsItem;