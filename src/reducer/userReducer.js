const initState = {
    // users: [
    //     { firstName: 'aaa', lastName: 'bbb', email: "aaa-bbb@gmail.com", password: 123456 },
    //     { firstName: 'ccc', lastName: 'ddd', email: "ccc-ddd@gmail.com", password: 357753 },
    //     { firstName: 'eee', lastName: 'fff', email: "eee-fff@gmail.com", password: 111111 },
    // ]
}


const userRedeucer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_USER':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.error)
            return state;
        default:
            return state
    }
}

export default userRedeucer