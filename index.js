function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(res => res.json())
    .then(data => {
        const newID = document.createElement('div')
        newID.textContent = data.id;
        document.body.appendChild(newID);
        return data;
    })
    .catch(error => {
        const errorMsg = document.createElement('div');
        errorMsg.textContent = error.message;
        document.body.appendChild(errorMsg);
    });
}

submitData()