import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faStreetView } from '@fortawesome/free-solid-svg-icons';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles['sidebar-img']}>
                <img src="" alt="sidebar-img" />
            </div>
            <p className={styles.fullname}>fullname</p>
            <ul className={styles['sidebar-fields']}>
                <li>
                    <FontAwesomeIcon
                        className={styles.icon}
                        icon={faStreetView}
                    />
                    <span>overview</span>
                </li>
                <li>
                    <FontAwesomeIcon className={styles.icon} icon={faIdCard} />
                    <span>profile</span>
                </li>
                <li>
                    <FontAwesomeIcon className={styles.icon} icon={faClock} />
                    <span>timesheet</span>
                </li>
                <li>
                    <FontAwesomeIcon className={styles.icon} icon={faUsers} />
                    <span>people</span>
                </li>
                <li>
                    <FontAwesomeIcon
                        className={styles.icon}
                        icon={faProjectDiagram}
                    />
                    <span>projects</span>
                </li>
                <li>
                    <FontAwesomeIcon
                        className={styles.icon}
                        icon={faChartLine}
                    />
                    <span>stats</span>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
