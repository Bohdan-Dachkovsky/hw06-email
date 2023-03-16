const argv = require('yargs').argv
const { listContacts } = require('./contacts.js')
const { getContactById } = require('./contacts.js')
const { removeContact } = require('./contacts.js')
const { addContact } = require('./contacts.js')
function invokeAction({ action, textFile, id, name, email, phone }) {
  switch (action) {
    case 'list':
      listContacts()
      break
    case 'get':
      getContactById(id)
      break
    case 'remove':
      removeContact(id)
      break

    case 'add':
      addContact(name, email, phone)
      break

    default:
      console.warn('\x1B[31m Unknown action type!')
      break
  }
}

invokeAction(argv)
