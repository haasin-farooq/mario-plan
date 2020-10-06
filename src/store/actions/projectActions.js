// export const createProject = (project) => {
//     return {
//         type: 'ADD_PPROJECT',
//         payload: project
//     }
// }

// Thunk allows us to return a function
export const createProject = (project) => {
    return (dispatch, getState) => {
        // Make async call to database
        dispatch({
            type: 'CREATE_PROJECT',
            payload: project
        });
    } 
};