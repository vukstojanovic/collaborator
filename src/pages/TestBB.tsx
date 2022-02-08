import ProjectCard from '@components/ProjectCard';
import { ProjectStatus } from '@components/ProjectCard/types';

function TestBB() {
    return (
        <div style={{ height: '100vh' }}>
            <ProjectCard
                id={3}
                status={ProjectStatus.inactive}
                client={'Colaborator'}
                lead={'Kim Novak'}
                manager={'Kim Novak'}
                teamType={'Frontend'}
                startDate={'01-01-2021'}
                endDate={'N/A'}
                projectName={'Some Project'}
            />
        </div>
    );
}

export default TestBB;
