// Membuat function getData
function getData() {
    // Deklarasi variable DOM
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let subject = document.getElementById('subject').value
    let message = document.getElementById('message').value

    // Kondisi jika inputan kosongan (conditional if else)
    if (name == "") {
        alert("Name Cannot be Empty!")
    } else if (email == "") {
        alert("Email Cannot be Empty!")
    } else if (phone == "") {
        alert("Phone Number Cannot be Empty!")
    } else if (subject == "") {
        alert("Subject Cannot be Empty!")
    } else if (message == "") {
        alert("Message Cannot be Empty!")
    }

    // Deklarasi default email
    const defaultEmail = 'affanghofar35@gmail.com'

    // create a link that opens in the user's email program use mailTo
    let a = document.createElement('a')
    a.href = `mailTo:${defaultEmail}?subject=${subject}&body=Hello My Name ${name}, ${message}, Let's Talk with me on my Number ${phone}`
    // Method to direct/open aplication Mail
    a.click()

    let audience = {
        name,
        email,
        phone,
        subject,
        message
    }

    console.log(audience)
}