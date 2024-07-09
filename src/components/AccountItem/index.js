import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from './AccountItem.module.scss';
const cx = classNames.bind(style);
// import Ac1 from "~/components/AccountItem/Account/Ac1";
// import Ac2 from "~/components/AccountItem/Account/Ac2";
function AccountsItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <img className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>

        //clone account from folder Account
        // <div>
        //         <Ac1/>
        //         <Ac2/>
        // </div>
    );
    //  có cách clone mới thì xóa hết comments và
    //   <div>
    //      <Ac1/>
    //      <Ac2/>
    //  </div>
}

export default AccountsItem;
