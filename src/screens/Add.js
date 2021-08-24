import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { AppointmentType, radioButtonsData, slotTimeMrng,slotTimeEvng } from '../data/Data';
import DatePicker from 'react-native-date-picker';
import RadioGroup from 'react-native-radio-buttons-group';
import { connect } from 'react-redux';
import { AddAppoint } from '../redux/Action';


const Add = (props) => {
    const [openType, setOpenType] = useState(false);
    const [openTime, setOpenTime] = useState(false);
    const [typeValue, setTypeValue] = useState(null);
    const [timeValue, setTimeValue] = useState(null);
    const [items, setItems] = useState(AppointmentType);
    const [date, setDate] = useState(new Date());
    const [radioButtons, setRadioButtons] = useState(radioButtonsData);
    const [time,setTime] = useState([]);
    const [slot,setSlot] = useState('');
    const [name,setName] = useState('')

    function onPressRadioButton(radioButtonsArray) {
        // setRadioButtons(radioButtonsArray);
        radioButtonsArray.map(el=>{
            if(el.selected){
                setSlot(el.value)
            }
        })
    }
    //console.log({date})
    const onAddHandler = () =>{
        //console.log(name,timeValue,typeValue,date)
        props.AddData({name,timeValue,typeValue,date})
        props.navigation.navigate('Appointment')
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Take An Appointment</Text>
            </View>
            <Text style={styles.textStyle}>Name:</Text>
            <TextInput
                placeholder='Enter Your Name'
                style={styles.input}
                value={name}
                onChangeText={setName}
            />
            <Text style={styles.textStyle}>Type:</Text>
            <DropDownPicker
                containerStyle={{ width: 300, alignSelf: 'center' }}
                textStyle={{ fontSize: 20, color: 'green', }}
                open={openType}
                value={typeValue}
                items={items}
                setOpen={setOpenType}
                setValue={setTypeValue}
                setItems={setItems}
            />
            <View style={{ marginBottom: 10 }} />
            <Text style={[styles.textStyle]}>Date:</Text>
            <DatePicker
                style={{ height: 60, alignSelf: 'center', backgroundColor: 'lightgrey' }}
                date={date}
                mode='date'
                minimumDate={new Date()}
                maximumDate={new Date("2021-12-31")}
                onDateChange={setDate}
                textColor='purple'
            />
            <Text style={[styles.textStyle,{marginTop:10}]}>Slot:</Text>
            <RadioGroup
                containerStyle={{alignSelf:'flex-start',marginBottom:10,}}
                radioButtons={radioButtons}
                onPress={onPressRadioButton}
            />
            <DropDownPicker
                containerStyle={{ width: 300, alignSelf: 'center' }}
                textStyle={{ fontSize: 20, color: 'green', }}
                open={openTime}
                value={timeValue}
                items={slot==='morning'?slotTimeMrng:slotTimeEvng}
                setOpen={setOpenTime}
                setValue={setTimeValue}
                setItems={setTime}
            />
            <TouchableOpacity style={styles.btn} onPress={onAddHandler}>
                <Text style={styles.btnText}>Book</Text>
            </TouchableOpacity>
        </View>
    );
}

const mapDispatchToProps = dispatch =>{
    return{
        AddData : (data) => dispatch(AddAppoint(data))
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 10
    },
    headerText: {
        fontSize: 24,
        color: 'green'
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingLeft: 10,
        fontSize: 18,
        marginBottom: 10
    },
    textStyle: {
        fontSize: 20,
        paddingBottom: 5,
        fontWeight: 'bold'
    },
    btn:{
        backgroundColor:'#fff',
        marginTop:40,
        height:50,
        borderRadius:10,
        width:300,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
    },
    btnText:{
        fontSize:20,
        
    }
})

export default connect(null,mapDispatchToProps)(Add);