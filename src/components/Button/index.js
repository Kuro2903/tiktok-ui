
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Button.module.scss';

const cx = classNames.bind(styles)

function Button({ 
    href, 
    to , 
    upload = false,
    rounded = false, 
    outline = false ,
    primary = false, 
    large = false, 
    small = false, 
    text = false,
    disabled = false,  
    onClick, 
    className,
    leftIcon,
    rightIcon,
    children, 
    ...passProps
}) {
   
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps
    }

    //remove events listeners when btn is disabled
    if(disabled){
        Object.keys(props).forEach((key) =>{
            if (key.startsWith('on') && typeof props[key] === 'function'){
                delete props[key];
            }
        });
    }

    if(to){
        props.to = to
        Comp = Link
    }else if(href){
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
        upload,
    })

    return ( 
        <Comp className={classes} {...props}>
            {leftIcon && <span className = {cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className = {cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;