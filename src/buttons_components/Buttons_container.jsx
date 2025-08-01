import styles from './buttonscontainer.module.css'


const ButtonsContainer = ({ onButtonClick }) => {

    const buttonslist = ['C', '1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '.', '/', '0', '00', '000', '0000', '='];

    return (

        <div className={styles['Buttons-Container']}>
            {buttonslist.map(buttonslist =>
                (<button className={styles['Button']} onClick={() => onButtonClick(buttonslist)}>{buttonslist}</button>))}
        </div>
    );
}


export default ButtonsContainer;