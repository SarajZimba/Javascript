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

const phone_validate = () =>{
    let phone = document.getElementById('phone').value
    if(!phone.match(/^[0-9]+$/)){
        display_msg("phone-msg", "Phone number must contain only numbers ", "red")
        return false
    }

    else if(!phone.match(/^98(6|7|5|4|2).*/)){
        display_msg("phone-msg", "phone numbers must start with 986, 987, 985, 984, 982")
        return false
    }

    else if(!phone.match(/^.{10}$/)){
        display_msg("phone-msg", "Phone numbers must have 10 digits only", "red")
        return false
    }

    else{
        display_msg("phone-msg", "Valid Phone number", "green")
        return true
    }
}

// const phone_validate = () =>{
//     let phone = document.getElementById('phone').value
//     if(!phone.match(/^[0-9]+$/)){
//         display_msg("phone-msg", "Phone numbers must have only numbers", "red")
//     }

//     else if(phone.length < 10 || phone.length > 10){
//         display_msg("phone-msg", "Phone numbers must have 10 numbers", "red")
//     }
//     else{
//         display_msg("phone-msg", "Phone number is valid", "green")
//     }
// }

const email_validate = () =>{
    let email = document.getElementById('email').value

    let email_regex = /^[a-zA-Z][a-zA-Z0-9._]+[@][a-zA-Z]+[.](com)$/

    if(!email.match(email_regex)){
        display_msg("email-msg", "Email format invalid", "red")
        return false
    }
    else{
        display_msg("email-msg", "valid Email", "green")
        return true
    }

    // if(email.match(/^@/)){
    //     display_msg("email-msg", "INvalid email", "red")
    //     return false
    // }
    // else if (email.charAt(email.length - 4) != '.'){
    //     display_msg("email-msg", "INvalid . position", "red")
    //     return false
    // }
    // else{
    //     display_msg("email-msg", "valid email", "green")
    // }

}

// const password_validate = () =>{
//     let password = document.getElementById('pwd').value
//     let confirm_password = document.getElementById('cpwd').value

//     if(!(password == confirm_password)){
//         display_msg("cpwd-msg", "Passwords not matching", "red")
//     }
//     else{
//         display_msg("cpwd-msg", "Passwords matching", "green")
       
//     }
//     if(password.length < 3 || password.length > 20 ){
//         display_msg("pwd-msg", "Passwords must be greater then 3 and not greater than 20", "red")
//     }
//     else{
//         display_msg("pwd-msg", "Passwords valid", "green")
       
//     }

// }

const password_validate = () =>{
    let password = document.getElementById('pwd').value
    if(!password.match(/[a-z]/)){
        display_msg("pwd-msg", "Passwords must contain at least one lowercase character", "red")
        return false
    }
    else if(!password.match(/[A-Z]/)){
        display_msg("pwd-msg", "Passwords must contain at least one uppercase character", "red")
        return false
    }
    else if(!password.match(/[0-9]/)){
        display_msg("pwd-msg", "Passwords must contain at least one number", "red")
        return false
    }
    else if(!password.match(/[!@#$%^_\-+]/)){
        display_msg("pwd-msg", "Passwords must contain at least one special character", "red")
        return false
    }
    else if(password.match(/ /)){
        display_msg("pwd-msg", "Passwords must not contain space ", "red")
        return false
    }
    else{
        display_msg("pwd-msg", "Valid Password", "green")
        return true
    }
}

const form_validate = () =>{
    if(name_validate() && age_validate() && phone_validate() && email_validate() && pasword_validate()){
        return true
    }
    else{
        return false
    }
}

document.getElementById('name').addEventListener('keyup', name_validate)
document.getElementById('age').addEventListener('keyup', age_validate)
document.getElementById('phone').addEventListener('keyup', phone_validate)
document.getElementById('email').addEventListener('keyup', email_validate)
document.getElementById('cpwd').addEventListener('keyup', password_validate)
document.getElementById('pwd').addEventListener('keyup', password_validate)
