
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Button, Pressable, FlatList, TextInput } from 'react-native';
import CONTACTS, { compareNames, generateUUID } from './contact';
import AddContactForm from './components/AddContactForm'
import Contact from './components/Contact'

export default function App() {
  const [contacts, setContacts] = React.useState(CONTACTS);
  const [showContacts, setShowContacts] = React.useState(true);
  const [showForm, setShowForm] = React.useState(false);
  const showHideContacts = () => {
    setShowContacts(!showContacts);
    setShowForm(false)
  }
  const sortContacts = () => {
    setContacts([...contacts.sort(compareNames)])
  }
  const showHideForm = () => {
    setShowForm(!showForm)
    setShowContacts(false)
  }
  const addNewContact = (newContact) => {
    console.log(newContact)
    setContacts([...contacts, { id: generateUUID(), ...newContact }]);
    setShowForm(false);
    setShowContacts(true)
  }
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={showHideContacts}><Text style={styles.button}>Show/Hide Contacts</Text></Pressable>
      <Pressable onPress={sortContacts}><Text style={styles.button}>Sort Contacts</Text></Pressable>
      <Pressable onPress={showHideForm}><Text style={styles.button}>Add Contact</Text></Pressable>
      {/* {showContacts && <ScrollView>
        {contacts.map(contact => <Contact key={contact.id} {...contact} />)}
      </ScrollView>} */}

      {showContacts && <FlatList
        data={contacts}
        renderItem={({ item }) => <Contact {...item} />}
        keyExtractor={item => item.id}
      />}

      {showForm && <AddContactForm addNewContact={addNewContact} />}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contact: {
    flex: 1,
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 15,
    margin: 5,
    alignSelf: 'center',
    fontSize: 20,
  },
});
