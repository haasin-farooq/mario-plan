import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, magni! Officia, veritatis. Sit, suscipit! Porro cum reprehenderit, at sint nemo doloribus quisquam aut, repellat vel, laborum velit ullam ut omnis.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Haasin</div>
                    <div>6th October, 2 PM</div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;