const fs = require('fs')
const path = require('path')
const { v4: uuidv4 } = require('uuid')
const id = uuidv4().toString()
const textFile = 'db/contacts.json'
function listContacts() {
  fs.readFile(path.join(__dirname, textFile), 'utf8', function (error, data) {
    try {
      const objFile = JSON.parse(data)
      console.table(objFile)
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

      const found = parsedObj.find(
        (number) => Number(number.id).toString() === contactId.toString(),
      )
      return console.table(parsedObj)
    }
  })
}

function removeContact(contactId) {
  fs.readFile(path.join(__dirname, textFile), (err, data) => {
    if (err) console.log(err)
    else {
      console.log('\nCurrent directory filenames:')

      const parsedObj = JSON.parse(data)
      const dltObject = parsedObj.filter(
        (number) => Number(number.id).toString() !== contactId,
      )
      return console.log(dltObject)
      // fs.writeFile(textFile, dltObject, (err) => {
      //   if (err) console.log(err)
      //   else {
      //     console.log('File written successfully\n')
      //     console.log('The written has the following contents:')
      //   }
      // });
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

      const newObj = fs.writeFile(textFile, parsedObj, (err) => {
        if (err) console.log(err)
        else {
          console.log('File written successfully\n')
          console.log('The written has the following contents:')
          console.log(fs.readFileSync(textFile, 'utf8'))
        }
      })
      return console.table(newObj, ['name', 'email', 'phone'])
    }
  })
}
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
}
