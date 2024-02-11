import React from 'react';
import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styles from './Taskslist.module.css';
import { FaPencilAlt, FaRegTrashAlt, FaPlus, FaRegSquare, FaRegCheckSquare } from "react-icons/fa";
import Modal from './Modal';

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

    const [nameTask, setNameTask] = useState('');
    function fnNameTask(param) {
        setNameTask(param);
    }

    const [descriptionTask, setDescriptionTask] = useState('');
    function fnDescriptionTask(param) {
        setDescriptionTask(param);
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

            for (let i = 0; i < db.length; i++) {
                if (db[i].id == id) {
                    // console.log('O indice do array e '+ i);
                    fnNameTask(db[i].title);
                    fnDescriptionTask(db[i].description);
                    fnCompletedTask(db[i].completed);
                }
            }
        
        } else {
            fnTitleModal('Criar tarefa');
            fnNameTask('');
            fnDescriptionTask('');
            fnCompletedTask();

        }

        fnTypeCRUD(type);
        fnOpenModal();
    }

    return (
        
        <div className={styles.tarefas}>
            <table>
                <thead>
                    <th>Tarefa</th>
                    <th>Status</th>
                    <th>Opções</th>
                </thead>
                <tbody>
                    {
                        db.map((item) =>
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
                name={nameTask} 
                changeName={setNameTask} 
                description={descriptionTask} 
                changeDescription={setDescriptionTask} 
                completed={completedTask} 
                changeCompleted={setCompletedTask} 
                isOpen={modalIsOpen} 
                onClose={setIsOpen} />

        </div>
    )
}

export default Tasklist;