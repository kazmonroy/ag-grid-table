import styles from './ButtonIcon.module.css';

function Icon({ children, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Icon;
