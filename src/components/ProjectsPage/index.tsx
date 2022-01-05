import ProjectCard from '@components/ProjectCard';
import { ProjectStatus } from '@components/ProjectCard/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './ProjectsPage.module.css';
import { useState } from 'react';

function ProjectsPage() {
    const [projectList, setProjectList] = useState([
        {
            status: 'active',
            client: 'Some guy',
            lead: 'Kim Novak',
            manager: 'Milos Ilic',
            teamType: 'Dedicated',
            startDate: '01-01-2021',
            endDate: 'N/A',
        },
        {
            status: 'cancelled',
            client: 'Batman',
            lead: 'Milos Ilic',
            manager: 'Milos Ilic',
            teamType: 'Backend',
            startDate: '04-01-2021',
            endDate: '14-01-2021',
        },
        {
            status: 'inactive',
            client: 'Ash Williams',
            lead: 'Vuk Stojanovic',
            manager: 'Kim Novak',
            teamType: 'Frontend',
            startDate: '08-01-2021',
            endDate: '16-01-2021',
        },
    ]);

    return (
        <section className={styles['projects-page']}>
            <div className={styles['filter-area']}>
                <h1>Projects</h1>
                <div className={styles['input-container']}>
                    <input type="text" />
                    <FontAwesomeIcon
                        className={styles['fa-search-icon']}
                        icon={faSearch}
                    />
                </div>
                <div className={styles['filter-btns']}>
                    <div className={styles['filter-btn']}>Fixed Price</div>
                    <div className={styles['filter-btn']}>Dedicated</div>
                    <div className={styles['filter-btn']}>In Progress</div>
                    <div className={styles['filter-btn']}>Finished</div>
                    <div className={styles['filter-btn']}>Cancelled</div>
                </div>
                <div className={styles['adjusted-search']}>
                    <div className={styles['adjust-btn']}>
                        Fixed Price <span>X</span>
                    </div>
                </div>
            </div>
            <div className={styles['projects']}>
                <div className={styles['project-card-container']}>
                    <ProjectCard
                        status={ProjectStatus.active}
                        client={'Colaborator'}
                        lead={'Kim Novak'}
                        manager={'Kim Novak'}
                        teamType={'Frontend'}
                        startDate={'01-01-2021'}
                        endDate={'N/A'}
                    />
                </div>
                <div className={styles['project-card-container']}>
                    <ProjectCard
                        status={ProjectStatus.inactive}
                        client={'Colaborator'}
                        lead={'Milos Ilic'}
                        manager={'Milos Ilic'}
                        teamType={'Backend'}
                        startDate={'01-01-2021'}
                        endDate={'N/A'}
                    />
                </div>
                <div className={styles['project-card-container']}>
                    <ProjectCard
                        status={ProjectStatus.inactive}
                        client={'Colaborator'}
                        lead={'Kim Novak'}
                        manager={'Kim Novak'}
                        teamType={'Frontend'}
                        startDate={'01-01-2021'}
                        endDate={'N/A'}
                    />
                </div>
                <div className={styles['project-card-container']}>
                    <ProjectCard
                        status={ProjectStatus.cancelled}
                        client={'Colaborator'}
                        lead={'Aleksandar Stojanovic'}
                        manager={'Aleksandar Stojanovic'}
                        teamType={'Mobile'}
                        startDate={'01-01-2021'}
                        endDate={'N/A'}
                    />
                </div>
                <div className={styles['project-card-container']}>
                    <ProjectCard
                        status={ProjectStatus.inactive}
                        client={'Colaborator'}
                        lead={'Kim Novak'}
                        manager={'Kim Novak'}
                        teamType={'Frontend'}
                        startDate={'01-01-2021'}
                        endDate={'N/A'}
                    />
                </div>
                <div className={styles['project-card-container']}>
                    <ProjectCard
                        status={ProjectStatus.inactive}
                        client={'Colaborator'}
                        lead={'Kim Novak'}
                        manager={'Kim Novak'}
                        teamType={'Frontend'}
                        startDate={'01-01-2021'}
                        endDate={'N/A'}
                    />
                </div>
            </div>
        </section>
    );
}

export default ProjectsPage;
