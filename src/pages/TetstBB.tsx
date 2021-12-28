import React from 'react';
import ProjectCard from '../components/ProjectCard';

function TetstBB() {
    return (
        <div>
            <ProjectCard
                status={'inactive'}
                client={'Colaborator'}
                lead={'Kim Novak'}
                manager={'Kim Novak'}
                teamType={'Frontend'}
                startDate={'01-01-2021'}
                endDate={'N/A'}
            />
        </div>
    );
}

export default TetstBB;
