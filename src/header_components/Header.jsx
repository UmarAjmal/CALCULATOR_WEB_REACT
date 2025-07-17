import styles from './Header.module.css'


const Header = (props) => {
  return (
    <div className={styles['Header']}>
      <h1 className={styles['Header-Text']}>Calculator Web</h1>
      {props.children}
    </div>
  );
}

export default Header;