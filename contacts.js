const fs = require('fs')
const path = require('path')
import { uuid } from 'uuidv4'
const { uuid } = require('uuidv4')
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

      parsedObj.find((number) => {
        return console.log(Number(number.id) === contactId)
      })
    }
  })
}

function removeContact(contactId) {
  fs.readFile(path.join(__dirname, textFile), (err, data) => {
    if (err) console.log(err)
    else {
      console.log('\nCurrent directory filenames:')

      const parsedObj = JSON.parse(data)

      parsedObj.map((number) => {
        return console.log(Number(number.id) !== contactId)
      })
    }
  })
}

function addContact(name, email, phone) {
  fs.readFile(path.join(__dirname, textFile), (err, data) => {
    if (err) console.log(err)
    else {
      console.log('\nCurrent directory filenames:')

      const parsedObj = JSON.parse(data)

      parsedObj.map((number, idex, array) => {
        return array.push({
          id: uuid().toString(),
          name: name,
          email: email,
          phone: email,
        })
      })
    }
  })
}
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
}
