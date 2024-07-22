import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/431955462_3713259912270009_5896747619293848744_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeE7Z0wuKdo6Sj3ucgG1gAnkAN51W_rohUwA3nVb-uiFTHkldiKsxS9SscS0IvGWanKTl6dApfXzuDiDrFPnEkI7&_nc_ohc=2DiE65qKZu0Q7kNvgGIA1XZ&_nc_ht=scontent.fhan14-3.fna&oh=00_AYDVm2hfguvaqPd9r61rsJfh0kcDatUzfhGq7YkWEwG7EQ&oe=669EA9FE"
                        alt="lecaophuonglinh"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>lecaophuonglinh</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Phương Linh</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
