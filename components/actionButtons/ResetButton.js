import React, { Fragment} from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ActionButton(props) {
    const { reset, plus } = props;
    
    return (
        <>
            <Fragment>
                <TouchableOpacity
                    onPress={reset}
                    style={styles.btnReset}>
                    <Text style={styles.btnTxt}>Reset</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={plus}
                    style={styles.btnReset}>
                    <Text style={styles.btnTxt}>+10</Text>
                </TouchableOpacity>
            </Fragment>
        </>
    )
}

const styles = StyleSheet.create({
    btnReset: {
        height: 60,
        width: 150,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginHorizontal: 4
    },
    btn: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
        
    },
    btnTxt: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold'
    }
})