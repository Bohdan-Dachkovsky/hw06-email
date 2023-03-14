const fs = require('fs')
const path = require('path')
const { v4: uuidv4 } = require('uuid')
const id = uuidv4()
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

      parsedObj.find((number) => Number(number.id) === contactId)
    }
  })
}

function removeContact(textFile, contactId) {
  fs.readFile(path.join(__dirname, textFile), (err, data) => {
    if (err) console.log(err)
    else {
      console.log('\nCurrent directory filenames:')

      const parsedObj = JSON.parse(data)

      parsedObj.map((number) => Number(number.id) !== contactId)
    }
  })
}

function addContact(textFile, name, email, phone) {
  fs.readFile(path.join(__dirname, textFile), (err, data) => {
    if (err) console.log(err)
    else {
      console.log('\nCurrent directory filenames:')

      const parsedObj = JSON.parse(data)
      console.log(id())
      parsedObj.map((number, idex, array) =>
        array.push({
          id: id,
          name: name,
          email: email,
          phone: phone,
        }),
      )
    }
  })
}
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
}
