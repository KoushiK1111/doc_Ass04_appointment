import moment from 'moment';
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { UpdateAppoint } from '../redux/Action';

const Past = (props) => {

    const Updatedata = (data) => {
        //console.log(data)
        props.update(data)
    }

    //console.log(props.appointments)
    return (
        <View style={styles.container}>
            <View style={{ paddingVertical: 10 }}>
                <FlatList
                    data={props.appointments}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View>
                            {item.cancel && <View style={styles.card}>
                                <View style={[styles.rowContainer, styles.border]}>
                                    <View >
                                        <Text style={styles.header}>date</Text>
                                        <Text style={styles.subHeader}>{moment(item.date).format('DD MMM YY')}</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.header}>type</Text>
                                        <Text style={styles.subHeader}>{item.typeValue}</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.header}>time</Text>
                                        <Text style={styles.subHeader}>{item.timeValue}</Text>
                                    </View>
                                </View>
                                <View style={[styles.rowContainer, styles.border]}>
                                    <View>
                                        <Text style={styles.header}>Name</Text>
                                        <Text style={styles.subHeader}>{item.name}</Text>
                                    </View>
                                    <View >
                                        <Text style={styles.header}>Dr Name</Text>
                                        <Text style={styles.subHeader}>{item.doctor}</Text>
                                    </View>
                                    <View style={{ right: 25 }}>
                                        <Text style={[styles.header]}>place</Text>
                                        <Text style={styles.subHeader}>{item.place}</Text>
                                    </View>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <View>
                                        <TouchableOpacity style={[styles.btn, { backgroundColor: 'pink' }]} onPress={() => Updatedata({ id: item.id, name: item.name, timeValue: item.timeValue, typeValue: item.typeValue, doctor: 'Dr.Doctor', place: 'narsapuram', cancel: false })} >
                                            <Text style={styles.btnText}>Reschedule</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>}
                        </View>
                    )}
                />
            </View>
        </View>
    );
}

const mapStateToProps = state => {
    return {
        appointments: state.Reducer
    }
};

const mapDispatchToProps = dispatch => {
    return {
        update: (data) => dispatch(UpdateAppoint(data))
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        backgroundColor: 'lightgrey',
        margin: 8,
        marginHorizontal: 15,
        padding: 10,
        elevation: 0.9,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 15
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    }, btn: {
        backgroundColor: '#2478ff',
        width: 120,
        height: 35,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        fontSize: 20,

    },
    border: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: 'grey',
        paddingBottom: 10,
    },
    header: {
        color: 'grey',
        paddingBottom: 2,
        fontSize: 16
    },
    subHeader: {
        fontSize: 16
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Past);