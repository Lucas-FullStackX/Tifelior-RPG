import * as styles from './Button.module.css';

export const Type = {
  primary: 'primary',
  regular: 'regular',
  success: 'success',
  warning: 'warning',
  error: 'error',
};
function Button({children, type}) {
  const validType = type => {
    switch (type) {
      case Type.primary:
        return styles.is_primary;
      case Type.regular:
        return styles.regular;
      case Type.success:
        return styles.success;
      case Type.warning:
        return styles.warning;
      case Type.error:
        return styles.error;
      default:
        return styles.regular;
    }
  };
  const style = validType(type);
  return <button className={`${styles.nes_btn} ${style}`}>{children}</button>;
}

export default Button;
