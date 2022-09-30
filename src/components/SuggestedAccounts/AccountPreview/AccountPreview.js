import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/60858e391453b6c718e36faf2228e197~c5_100x100.jpeg?x-expires=1664524800&x-signature=opcjcG%2FzhQXrZx873q4dd%2FDa1xk%3D"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary small>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>ltuyen</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Lương Tố Uyên</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2m </strong>
                    <span className={cx('label')}>Follower</span>
                    <strong className={cx('value')}>1.2m </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
