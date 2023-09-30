//Object literals
const user = {
    username: "haierally",
    email: "google@gmail.com",
    loggedIn: 14,

  getUserDetails: function(){
    console.log("User details received from the database.");
    // console.log(`username:${username}`);   //this will not work because the browser/node doesn't understand that which username has to execute that's why we use "this" keyword  :: e.g... below
    console.log(`username: ${this.username}`);  //Note:: "this" keyword refers to current context mean's this whole object.
    console.log(this);
  }

}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);  //in this case we are acessing "this" in global context so we get "empty paranthesis {}" as return  //but if we try to access "this" keyword in browser we get "window object" as return.


//---------- Constructor Function ------------

// --Example of constructor function---Note: it always give us new instances
function User(username, isLoggedIn, loginCount){
    this.username = username;
    this.isLoggedIn = isLoggedIn;
    this.loginCount = loginCount;

    // return this           //there is no need to return this 
}

      //we create as many new function as we want -----like we created below
const userOne = new User("haider", true, 17);
const userTwo = new User("ally", true, 23);
const userThree = new User("haideraally", false, 73);

// console.log(userOne);
// console.log(userTwo);
// console.log(userThree);



