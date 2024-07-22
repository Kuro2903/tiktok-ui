import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/431955462_3713259912270009_5896747619293848744_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeE7Z0wuKdo6Sj3ucgG1gAnkAN51W_rohUwA3nVb-uiFTHkldiKsxS9SscS0IvGWanKTl6dApfXzuDiDrFPnEkI7&_nc_ohc=2DiE65qKZu0Q7kNvgGIA1XZ&_nc_ht=scontent.fhan14-3.fna&oh=00_AYDVm2hfguvaqPd9r61rsJfh0kcDatUzfhGq7YkWEwG7EQ&oe=669EA9FE"
                    alt="lecaophuonglinh"
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>lecaophuonglinh</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Phương Linh</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
