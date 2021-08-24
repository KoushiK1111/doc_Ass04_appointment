export const AddAppoint = (data) =>{
    return{
        type:'ADD_APPOINTMENT',
        payload:data
    }
}

export const UpdateAppoint = (data) =>{
    return{
        type:'UPDATE_APPOINTMENT',
        payload:data
    }
}