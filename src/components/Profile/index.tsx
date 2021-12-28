import styles from './Profile.module.css';

function Profile() {
    return (
        <div className={styles['main-div']}>
            <div className={styles['profile-data']}>
                <div>
                    <label>First name:</label>
                    <p className={styles['border-bottom']}></p>
                </div>
                <div>
                    <label>Last name:</label>
                    <p className={styles['border-bottom']}></p>
                </div>
                <div>
                    <label>Address:</label>
                    <p className={styles['border-bottom']}></p>
                </div>
                <div>
                    <label>Email:</label>
                    <p className={styles['border-bottom']}></p>
                </div>
                <div>
                    <label>Contact number:</label>
                    <p className={styles['border-bottom']}></p>
                </div>
            </div>
            <div className={styles['profile-img-skills']}>
                <div className={styles['img-wrapper']}></div>
                <div className={styles['skills-wrapper']}>
                    <div className={styles['label-add-role-btn-wrapper']}>
                        <label>Skills:</label>
                        <button className={styles['add-role-btn']}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
