function saveData(){
    var name = document.getElementById('name')
    var roll = document.getElementById('value')
    var student = {
        name : name.value,
        roll : roll.value
    }
    firebase.database().ref('student').set(student)
}

