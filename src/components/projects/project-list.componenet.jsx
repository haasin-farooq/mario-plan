import React from 'react';

import ProjectSummary from './project-summary.component';

import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => {
    return (
        <div className="project-list section">
            {
                projects && // If there are any projects, then do the stuff after &&. Otherwise don't.
                projects.map(project => {
                    return (
                        <Link to={`/project/${project.id}`} key={project.id}>
                            <ProjectSummary project={project} />                        
                        </Link>
                    )
                })
            }
        </div>
    );
};

export default ProjectList;