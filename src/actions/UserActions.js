const createUser = (user) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection("users").add({
            ...users,
            createAt: new Date()
        }).then(() => {
            dispatch({ type: "CREATE_USER", user });
        }).catch((error) => {
            dispatch({ type: "CREATE_PROJECT_ERROR", error })
        })

    }
}

export default createUser