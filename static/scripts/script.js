
const apiUrl = 'http://127.0.0.1:5000/contacts'; // replace with your API URL

// Add contact
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const newContact = { name, email, phone };
    fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newContact)
    })
        .then(response => response.json())
        .then(data => {
            displayContacts();
            document.getElementById('contact-form').reset();
        })
        .catch(error => console.error('Error adding contact:', error));
});

// Display contacts
function displayContacts() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const contactList = document.getElementById('contact-list');
            contactList.innerHTML = '';
            data.forEach((contact) => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${contact.id}</td>
                                 <td>${contact.name}</td>
                                 <td>${contact.email}</td>
                                 <td>${contact.phone}</td>
                                 <td>
                                    <div class="flex-parent jc-center">
                                        <button onclick="updateContact(${contact.id})">Update</button>
                                        <button onclick="deleteContact(${contact.id})">Delete</button>
                                    </div>    
                                 </td>
      `;
                contactList.appendChild(row);
            });
        })
        .catch(error => console.error('Error displaying contacts:', error));
}

// Update contact
function updateContact(id) {
    const contact = {};
    contact.name = prompt('Enter new name:');
    contact.email = prompt('Enter new email:');
    contact.phone = prompt('Enter new phone:');

    // Check if any of the contact fields are empty
    if (!contact.name || !contact.email || !contact.phone) {
        alert('Please fill in all contact fields!');
        return;
    }

    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact)
    })
        .then(response => response.json())
        .then(data => {
            displayContacts();
        })
        .catch(error => console.error('Error updating contact:', error));
}

// Delete contact
function deleteContact(id) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => {
            displayContacts();
        })
        .catch(error => console.error('Error deleting contact:', error));
}

// Initial display of contacts
displayContacts();