import React from 'react';
import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styles from './Taskslist.module.css';
import { FaPencilAlt, FaRegTrashAlt, FaPlus, FaRegSquare, FaRegCheckSquare } from "react-icons/fa";
import Modal from './Modal';
import { ToastContainer, toast, Slide, Zoom, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Tasklist() {
    const db = [
        { "id": 1, "title": "Exercicios", "description": "Ir para academia fazer exercicios", "completed": true },
        { "id": 2, "title": "Limpar o carro", "description": "Limpar o carro inteiro, de dentro pra fora", "completed": false },
        { "id": 3, "title": "Banho e tosa", "description": "Levar o cachorro ao pet shop", "completed": false },
        { "id": 4, "title": "Limpar quarto", "description": "Limpar toda bagunça que está dentro do quarto", "completed": true },
        { "id": 5, "title": "Trabalhar", "description": "Chegar ao escritorio antes das 20:00", "completed": true },
        { "id": 6, "title": "Ir ao banco", "description": "Chear ao banco antes das 10:00", "completed": false },
        { "id": 7, "title": "Almoçar", "description": "Preparar a comida para a janta", "completed": false },
        { "id": 8, "title": "Jogar volei", "description": "Ir a quadra para jogar volei com os amigos", "completed": true },
        { "id": 9, "title": "Estudar programação", "description": "Entrar na plataforma dos alunos para estudar", "completed": false },
        { "id": 10, "title": "Shopping", "description": "Fazer algumas compras no shopping", "completed": true }
    ]

    function status(param) {
        if (param) {
            return <FaRegCheckSquare color='#F9D1D1'/>
        } else {
            return <FaRegSquare/>
        }
    }

    function fnNotify(text) {
        toast.warn(text, {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
            });
    }

    const [modalIsOpen, setIsOpen] = useState(false);
    function fnOpenModal() {
        setIsOpen(true);
    }
    
    const [typeCRUD, setTypeCRUD] = useState('');
    function fnTypeCRUD(param) {
        setTypeCRUD(param);
    }

    const [titleModal, setTitleModal] = useState('');
    function fnTitleModal(param) {
        setTitleModal(param);
    }

    const [idTask, setIdTask] = useState(0);
    function fnIdTask(param) {
        setIdTask(param);
    }

    const [nameTask, setNameTask] = useState('');
    function fnNameTask(param) {
        setNameTask(param);
    }

    const [descriptionTask, setDescriptionTask] = useState('');
    function fnDescriptionTask(param) {
        setDescriptionTask(param);
        // console.log('descriptionTask: '+descriptionTask);
    }

    const [completedTask, setCompletedTask] = useState(false);
    function fnCompletedTask(param) {
        setCompletedTask(param);
    }

    function renderModal(type, id) {
        if (type == 'delete' || type == 'edit') {
            if (type == 'delete') {
                fnTitleModal('Deseja excluir esse item?');
    
            } else if (type == 'edit') {
                fnTitleModal('Deseja editar esse item?');
    
            }

            for (let i = 0; i < taskList.length; i++) {
                if (taskList[i].id == id) {
                    // console.log('O indice do array e '+ i);
                    fnIdTask(taskList[i].id);
                    fnNameTask(taskList[i].title);
                    fnDescriptionTask(taskList[i].description);
                    fnCompletedTask(taskList[i].completed);
                }
            }
        
        } else {
            let maxId = 0;

            taskList.forEach(ob => {
                if (ob.id > maxId) {
                    maxId = ob.id;
                }
            });

            fnTitleModal('Criar tarefa');
            fnIdTask(maxId + 1);
            fnNameTask('');
            fnDescriptionTask('');
            fnCompletedTask();

        }

        fnTypeCRUD(type);
        fnOpenModal();
    }

    const [taskList, setTaskList] = useState(db);
    function fnTaskList(typeCRUD, id, taskObject) {
        if (typeCRUD == 'add') {
            setTaskList([...taskList, taskObject]);

        } else if (typeCRUD == 'edit') {
            let newArrayEdit = [...taskList];
            let taskIndex = newArrayEdit.findIndex((ob) => {
                return ob.id == id;
            });

            newArrayEdit[taskIndex].title = taskObject.title;
            newArrayEdit[taskIndex].description = taskObject.description;
            newArrayEdit[taskIndex].completed = taskObject.completed;

            setTaskList(newArrayEdit);

        } else if (typeCRUD == 'delete') {
            let tempArray  = [...taskList];
            let newArrayDelete = tempArray.filter(ob => ob.id !== id);
            setTaskList(newArrayDelete);
        
        }
    }

    return (
        
        <div className={styles.tarefas}>
            <ToastContainer />

            <table>
                <thead>
                    <th>Tarefa</th>
                    <th>Status</th>
                    <th>Opções</th>
                </thead>
                <tbody>
                    {
                        taskList.map((item) =>
                            <tr>
                                <td>
                                    {item.title}
                                </td>
                                <td className={styles.tdStatus}>
                                    {status(item.completed, item.id)}
                                </td>
                                <td className={styles.tdOpcoes}>
                                    <div>
                                        <FaPencilAlt className={styles.CRUDButtons} onClick={() => {renderModal('edit', item.id)}} />
                                        <FaRegTrashAlt className={styles.CRUDButtons} onClick={() => {renderModal('delete', item.id)}} />
                                    </div>
                                </td>
                            </tr>
                        )
                    }
                    <tr>
                        <td className={styles.tdNovaTarefa}>
                            Nova tarefa...
                        </td>
                        <td className={styles.tdStatus}>
        
                        </td>
                        <td className={styles.tdOpcoes}>
                            <div>
                                <FaPlus className={styles.CRUDButtons} onClick={() => {renderModal('add')}}/>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <Modal 
                type={typeCRUD} 
                title={titleModal} 
                idTask={idTask}
                name={nameTask} 
                changeName={setNameTask} 
                description={descriptionTask} 
                changeDescription={setDescriptionTask} 
                completed={completedTask} 
                changeCompleted={setCompletedTask}
                refreshTaskList={fnTaskList}
                isOpen={modalIsOpen} 
                onClose={setIsOpen}
                notify={fnNotify} />

        </div>
    )
}

export default Tasklist;