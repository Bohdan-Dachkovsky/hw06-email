const fs = require('fs')
const path = require('path')
// fs.readFile('data.txt', 'utf8', function (err, data) {
//   console.log(data)
// })
// console.log('readFile called')
function listContacts(textFile) {
  fs.readFile(path.join(__dirname, textFile), 'utf8', function (error, data) {
    try {
      console.log(data)
    } catch {
      throw Error('404')
      console.log(`Sorry, file have ${error.message}`)
    }
  })
}

function getContactById(textFile, contactId) {
  fs.readFile(path.join(__dirname, textFile), (err, data) => {
    if (err) console.log(err)
    else {
      console.log('\nCurrent directory filenames:')
      const parsedObj = JSON.parse(data)
      console.log(contactId.toString())
      parsedObj.find((number) => {
        return number.id === contactId.toString()
      })
    }
  })
}

// function removeContact(contactId) {}

// function addContact(name, email, phone) {}
module.exports = {
  listContacts,
  getContactById,
}
// removeContact,
// addContact,
