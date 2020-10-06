import React from 'react';
import ProjectList from './project-list.componenet';

const ProjectSummary = ({ project }) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by Haasin</p>
                <p className="grey-text">6th October, 2 PM</p>
            </div>
        </div>
    );
};

export default ProjectSummary;