import { initialUserData } from "../data/Data";


const initialState = initialUserData;

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_APPOINTMENT':
            return [...state, {
                id: Math.floor(Math.random() * 99999999),
                name: action.payload.name,
                typeValue: action.payload.typeValue,
                timeValue: action.payload.timeValue,
                doctor: 'Dr.Doctor',
                place: 'NSP',
                cancel: false,
                date:action.payload.date?action.payload.date:new Date()
            }]
        case 'UPDATE_APPOINTMENT':
            return state.map(el => {
               return el.id === action.payload.id ?action.payload :el
                }
            )

        default:
            return state
    }
}

export default Reducer;