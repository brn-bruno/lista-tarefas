import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li>Organização</li>
                <li>Tarefas</li>
            </ul>
        </nav>
    )
}

export default Navbar;