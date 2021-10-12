## Contacts-List-React-Native-App
* Create a new React Native application with Expo CLI. 
* Copy the `contacts.js` file into your project and install `react-native-uuid` and `buffer` dependencies. Note that this file has a default export for an array of `contacts`, and two other exported methods: 
  * `compareNames` to sort an array of objects by `name`
  * `generateUUID` to generate a unique ID for contacts
* Create a reusable `Contact` functional-component that displays a single contact (`name` and `phone`). Validate all `props` types.
* Display all contacts in `App` class-component using `ScrollView` component.
* Add a button to `App` to toggle displaying the list of contacts.
* Replace `ScrollView` with `FlatList` component and notice the performance difference with a big number of contacts.
* Add a button to sort the contacts alphabetically, use the `compareNames()` method from `contacts.js`.
* Add a button to display a form for adding a new contact:
  * Create `AddContactForm` functional-component and handle adding the form values (both `name` and `phone`) where `phone` has to be 10 digits number. Validate all `props` types.
