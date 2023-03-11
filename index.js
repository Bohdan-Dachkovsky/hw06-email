const argv = require('yargs').argv
const { listContacts } = require('./contacts.js')
const { getContactById } = require('./contact.js')
// const { removeContact } = require('./contact.js')
// const { addContact } = require('./contact.js')
function invokeAction({ action, textFile, id, name, email, phone }) {
  switch (action) {
    case 'list':
      listContacts(textFile)
      break
    case 'get':
      getContactById(textFile, id)
      break
    // case 'add':
    //   removeContact(id)
    //   break

    // case 'remove':
    //   addContact(name, email, phone)
    //   break

    default:
      console.warn('\x1B[31m Unknown action type!')
      break
  }
}

invokeAction(argv)
