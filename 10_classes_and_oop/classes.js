//Class in Js
// class User {
//     constructor(username, email, password){
//       this.username = username;
//       this.email = email;
//       this.password = password;
//     }
   
//    encryptPassword () {
//      return `${this.password}bsdk`
//    }
//    capitalizeUserName () {
//      return `${this.username.toUpperCase()}`
//    }
//    }
   
//    const NewUser = new User("haider", "email", "1234")
//    console.log(NewUser.encryptPassword());
//    console.log(NewUser.capitalizeUserName());



   
// behind the scene - if we don't have "Class"  that's how the things work before "class"
 
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.capitalizeUserName = function(){
    return `${this.username.toUpperCase()}`
}


const NewUser = new User("haider", "email", "1234")
   console.log(NewUser.encryptPassword());
   console.log(NewUser.capitalizeUserName());