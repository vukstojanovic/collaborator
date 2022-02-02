import React from 'react';
import styles from './DropdownMenu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import logout from '@api/logoutService';

type Props = {
    setOpenMenu: (openMenu: boolean) => void;
};

const DropdownMenu: React.FC<Props> = ({ setOpenMenu }) => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleLogout = () => {
        logout();
    };

    const profile = () => {
        navigate('/profile');
    };

    return (
        <section className={styles.dropdown} onClick={() => setOpenMenu(false)}>
            <div>
                <div className={styles.flex}>
                    <div className={styles.profile} onClick={profile}>
                        <FontAwesomeIcon
                            className={styles.icon}
                            icon={faIdCard}
                        />
                        {t('description.profile')}
                    </div>
                    <div className={styles.logout} onClick={handleLogout}>
                        <FontAwesomeIcon
                            className={styles.icon}
                            icon={faSignOutAlt}
                        />
                        {t('description.logout')}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DropdownMenu;
