const INITIAL_STATE = {
    projects: [
        {
            id: '1',
            title: 'Project 1',
            content: 'Project 1 content'
        },
        {
            id: '2',
            title: 'Project 2',
            content: 'Project 2 content'
        },
        {
            id: '3',
            title: 'Project 3',
            content: 'Project 3 content'
        }
    ]
}

const projectReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            return state
    }
    return state;
}

export default projectReducer;