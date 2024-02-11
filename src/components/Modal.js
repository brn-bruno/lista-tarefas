import React from 'react';
import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import Button from './Button';

function Modal({type, title, name, changeName, description, changeDescription, completed, changeCompleted, isOpen, onClose}) {
    let showHideModal = isOpen;

    // const [nameTask, setNameTask] = useState(name);

    // function fnNameTask(param) {
    //     setNameTask(param);
    //     console.log('------------'+'nameTask '+nameTask+' name '+name);
    //     return param;
    // }

    // console.log('------------'+'nameTask '+nameTask+' name '+name);
    // const [descriptionTask, setDescriptionTask] = useState(description);
    // const [statusTask, setStatusTask] = useState(completed);
    
    if (!showHideModal) { 
        return null 
    }

    return(
        // estrutura e estilizacao de modal encontrada em W3Schools (https://www.w3schools.com/howto/howto_css_modals.asp), ambas adaptadas para o projeto com
        // controles de abertura e fechamento com uso de React.useState.
        <div id="myModal" className={styles.modalBackground}>

            {/* se for exclusao os inputs ficarão desabilitados */}
            {type == 'delete' 
            ? (
            //  Modal content 
            <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                    <h3>{title}</h3>
                </div>

                <div className={styles.modalBody}>
                    <p> 
                        Nome da tarefa: <br/> <input type='text' value={name} disabled></input>
                    </p>
                    <p>
                        Descrição da tarefa:  <br/> <textarea value={description} cols='30' rows='5' disabled></textarea>
                    </p>
                    <p>
                        Status:  <br/> <input id="checkStatus" value="1" type="checkbox" checked={completed} disabled/> <label for="checkStatus">Concluído?</label>
                    </p>
                    <p ></p>
                </div>

                <div className={styles.modalFooter}>
                    <span onClick={() => onClose(false)}><Button text='Não'></Button></span>
                    <span><Button text='Sim'></Button></span>
                </div>
            </div>
            ) 
            : (
            //  Modal content 
            <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                    <h3>{title}</h3>
                </div>

                <div className={styles.modalBody}>
                    <p> 
                        Nome da tarefa: <br/> <input type='text' value={name} onChange={(e) => changeName(e.target.value)}></input>
                    </p>
                    <p>
                        Descrição da tarefa: <br/> <textarea value={description} onChange={(e) => changeDescription(e.target.value)} cols='30' rows='5'></textarea>
                    </p>
                    <p>
                        Status: <br/> <input id="checkStatus" type="checkbox" checked={completed} onChange={(e) => changeCompleted(e.target.checked)} /> <label for="checkStatus">Concluído?</label>
                    </p>
                </div>

                <div className={styles.modalFooter}>
                    <span onClick={() => onClose(false)}><Button text='Não'></Button></span>
                    <span><Button text='Sim'></Button></span>
                </div>
            </div>
            ) }

        </div>
    )
}

export default Modal;