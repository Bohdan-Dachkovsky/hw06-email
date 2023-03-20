const fs = require('fs')
const path = require('path')
const { v4: uuidv4 } = require('uuid')
const id = uuidv4().toString()
const textFile = 'db/contacts.json'
function listContacts() {
  fs.readFile(path.join(__dirname, textFile), 'utf8', function (error, data) {
    try {
      console.log(data)
    } catch {
      throw Error('404')
      console.log(`Sorry, file have ${error.message}`)
    }
  })
}

function getContactById(contactId) {
  fs.readFile(path.join(__dirname, textFile), (err, data) => {
    if (err) console.log(err)
    else if (data.length) {
      console.log('\nCurrent directory filenames:')

      const parsedObj = JSON.parse(data)

      const found = parsedObj.find((number) => Number(number.id) === contactId)
      console.log(found)
    }
  })
}

function removeContact(contactId) {
  fs.readFile(path.join(__dirname, textFile), (err, data) => {
    if (err) console.log(err)
    else {
      console.log('\nCurrent directory filenames:')

      const parsedObj = JSON.parse(data)
      const dltObject = parsedObj.find(
        (number) => Number(number.id) !== contactId,
      )
      delete parsedObj[dltObject]

      console.log(parsedObj)
    }
  })
}

function addContact(name, email, phone) {
  const textEL = new Error('Sorry, contact didnt’t implement')
  fs.readFile(path.join(__dirname, textFile), (err, data) => {
    if (err) console.log(err)
    else {
      console.log('\nCurrent directory filenames:')

      const parsedObj = JSON.parse(data)

      parsedObj.push({
        id: id,
        name: name,
        email: email,
        phone: phone,
      })
      console.log(parsedObj)
    }
  })
}
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
}
