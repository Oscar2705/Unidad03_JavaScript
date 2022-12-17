function getUsers(){
    fetch(`http://localhost:9000/api/users`)
    .then(response => response.json())
    .then(data => console.log(data))
}
getUsers()

//Buscar por ID
function buscar(id){
    fetch(`http://localhost:9000/api/users/${id}`)

    .then(response => response.json())
    .then(data => console.log(data))
}
buscar("639cf4e740eeac2173a46837")
