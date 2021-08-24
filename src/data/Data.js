export const AppointmentType = [
    { label: 'Maternity', value: 'maternity' },
    { label: 'General', value: 'general' },
    { label:'Dentist', value: 'dentist'}
];


export const radioButtonsData = [{
    id: '1',
    label: 'Morning',
    value: 'morning'
}, {
    id: '2',
    label: 'Evening',
    value: 'Evening',
}];


export const slotTimeMrng = [
    { label: '10:30 AM', value: '10:30 AM' },
    { label: '11:00 AM', value: '11:00 AM' },
    { label: '11:30 AM', value: '11:30 AM'},
    { label: '12:00 AM', value: '12:00 AM'},
    { label: '12:30 AM', value: '12:30 AM'},
];


export const slotTimeEvng = [
    { label: '02:30 PM', value: '02:30 PM' },
    { label: '03:00 PM', value: '03:00 PM' },
    { label: '03:30 PM', value: '03:30 PM'},
    { label: '04:00 PM', value: '04:00 PM'},
    { label: '04:30 PM', value: '04:30 PM'},
];

export const initialUserData =[
    {
        id:1,
        name:'koushik',
        typeValue:'general',
        timeValue:'11:00 AM',
        doctor: 'Dr.Doctor',
        place:'NSP',
        cancel:true,
        date:new Date(),
    },
    {
        id:2,
        name:'teja',
        typeValue:'general',
        timeValue:'11:00 AM',
        doctor: 'Dr.Doctor',
        place:'NSP',
        cancel:false,
        date:new Date(),
    },
    {
        id:3,
        name:'satya',
        typeValue:'general',
        timeValue:'11:00 AM',
        doctor: 'Dr.Doctor',
        place:'NSP',
        cancel:false,
        date:new Date(),
    },
    {
        id:4,
        name:'roja',
        typeValue:'general',
        timeValue:'11:00 AM',
        doctor: 'Dr.Doctor',
        place:'NSP',
        cancel:false,
        date:new Date(),
    }
]