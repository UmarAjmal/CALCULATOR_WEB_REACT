import styles from './Input.module.css'

const Input = ({calVal}) => {
    return (<div>
        <input className={styles['Input-Box']} type='text' value={calVal} readOnly></input></div>
    );
}


export default Input;