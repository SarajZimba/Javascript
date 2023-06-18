const display_msg = (id, msg, color) => {
    document.getElementById(id).innerHTML = msg
    document.getElementById(id).style.color = color
}

const name_validate = () =>{
    let name = document.getElementById('name').value
    if(!name.match(/^[a-zA-Z]+$/)){
        display_msg('name-msg', "Name must contain only alphabets", "red")
        return false
    }
    else if(!name.match(/^.{3,30}$/)){
        display_msg('name-msg', "Name must be at least 3 characters and maximu of 30 characters", "red")
        return false
    }
    else{
        display_msg('name-msg', "Name is valid", "green")
        return true
    }
}
const age_validate = () =>{
    let age = document.getElementById('age').value
    if(!age.match(/^[0-9]+$/)){
        display_msg('age-msg', "Age must contain only numbers", "red")
        return false
    }
    else if(age<18){
        display_msg('age-msg', "You are not eligible to view this", "red")
        return false
    }
    else{
        display_msg('age-msg', "Age is valid", "green")
        return true
    }
}

document.getElementById('name').addEventListener('keyup', name_validate)
document.getElementById('age').addEventListener('keyup', age_validate)