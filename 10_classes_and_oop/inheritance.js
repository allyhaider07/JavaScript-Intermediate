class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username} is loggedIn`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const myUser = new Teacher("Haider", "chai@teacher.com", "123")
myUser.addCourse()
myUser.logMe()

const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(myUser instanceof Teacher);
console.log(myUser instanceof User);