import sidebarData from '@components/Sidebar/SidebarData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    const { t } = useTranslation();
    return (
        <aside className={styles.sidebar}>
            <div className={styles['sidebar-img']}>
                <img src="" alt="sidebar-img" />
            </div>
            <p className={styles.fullname}>{t('fullname')}</p>
            <ul className={styles['sidebar-fields']}>
                {sidebarData.map((sidebarItem) => {
                    const { id, icon, label } = sidebarItem;
                    return (
                        <li key={id}>
                            <span className={styles['icon-container']}>
                                <FontAwesomeIcon
                                    className={styles.icon}
                                    icon={icon}
                                />
                            </span>
                            <span>{t(label)}</span>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
};

export default Sidebar;
