import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

export default function Button(props) {
    
    const { label, action } = props;

    return (
        <View>

            <TouchableOpacity style={styles.btn}
                onPress={action}>
                <Text style={styles.btnTxt}>{label}</Text>
            </TouchableOpacity>

        </View>
    )
}

Button.PropTypes = {
    label: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
}

const styles = StyleSheet.create({    
    btn: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1'
    },
    btnTxt: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold'
    }
});

// 

