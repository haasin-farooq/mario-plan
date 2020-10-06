import React from 'react';

import ProjectSummary from './project-summary.component';

const ProjectList = ({ projects }) => {
    return (
        <div className="project-list section">
            {
                projects && // If there are any projects, then do the stuff after &&. Otherwise don't.
                projects.map(project => {
                    return (
                        <ProjectSummary key={project.id} project={project} />
                    )
                })
            }
        </div>
    );
};

export default ProjectList;