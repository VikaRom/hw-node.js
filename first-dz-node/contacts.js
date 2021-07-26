const fs = require('fs').promises;
const path = require('path');
const contactsPath = path.resolve('db', 'contacts.json');

const contacts = require('./db/contacts.json');




// const listContacts = () => content = fs.readFileSync(contactsPath, 'utf-8');


// console.log("My result data onto file ", listContacts());


const listContacts = async () => {
    const data = await fs.readFile(contactsPath, { encoding: 'utf-8' })
    return JSON.parse(data)
}
// listContacts()
//2
const getContactById = async (id) => {
    const data = await listContacts();
    return (data.find(el => el.id === id))
}
// console.log(getContactById(2))

//3
const removeContact = async (id) => {
    const data = await listContacts();
    const result = data.filter(el => el.id != id)
    const jsonText = JSON.stringify(result)
    await fs.writeFile(contactsPath, jsonText)
}
// removeContact(2).then(() => console.log(1))

//4
const addContact = async (name, email, phone) => {
    const data = await listContacts();
    const newContact = {
        id: data[data.length - 1].id + 1,
        name,
        email,
        phone,
    }
    data.push(newContact)
    const result = JSON.stringify(data)
    await fs.writeFile(contactsPath, result)
}



const read = async ()=>{
  await addContact('vasya', 'pupin@hbhb', '76454856')

 const res = await listContacts()
 console.log(res)
    
}

module.exports = {listContacts, addContact, getContactById, removeContact}