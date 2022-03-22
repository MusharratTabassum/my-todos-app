export const addToList = (data) => {
    return {
        type: "ADD",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }

}

export const deleteFromList = (id) => {
    return {
        type: "DELETE",
        id
    }

}

export const removeAllFromList = () => {
    return {
        type: "REMOVE_ALL"
    }

}