// export const createProject = (project) => {
//     return {
//         type: 'ADD_PPROJECT',
//         payload: project
//     }
// }

// Thunk allows us to return a function. withExtraArgument() allows us to add an extra argument to this function.
export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // Make async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Haasin',
            authorLastName: 'Farooq',
            authorId: 12345,
            createdAt: new Date()
        })
        .then(() => {
            dispatch({
                type: 'CREATE_PROJECT',
                payload: project
            });
        })
        .catch((error) => {
            dispatch({
                type: 'CREATE_PROJECT_ERROR',
                payload: error
            })
        });
    } 
};