import React from "react";
import PropTypes from "prop-types";
import { FlatList, View, Text, StyleSheet } from "react-native";

Contact.propTypes = {
    name: PropTypes.string,
    phone: PropTypes.string,
};
Contact.defaultProps = {
    name: "",
    phone: "",
};

function Contact(props) {
    const { name, phone } = props;
    return (
        <View style={styles.contact}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{name}</Text>
            <Text>{phone}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    contact: {
        flex: 1,
        margin: 5,
        padding: 5,
        backgroundColor: 'white',
        borderWidth: 1
    }
})

export default Contact;
