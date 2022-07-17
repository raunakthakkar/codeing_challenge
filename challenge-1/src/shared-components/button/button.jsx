import PropTypes from 'prop-types'
import styles from './button.module.scss'
import cx from 'classnames';

 const Button=({text,type,className})=>{

    return(
        <button className={` ${className} ${styles[`button_${type}`]}`}>{text}</button>
    )
}
Button.propTypes={
    text:PropTypes.string,
    type:PropTypes.oneOf(['primary','secondary']).isRequired,
    className:PropTypes.string.isRequired
}
export {Button}