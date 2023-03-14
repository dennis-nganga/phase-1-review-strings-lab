// Write your code in this file!
const currentUser = "Alice";
let welcomeMessage = "Welcome to Flatbook!";
welcomeMessage = `${welcomeMessage.slice(0, -1)}, ${currentUser}!`;
const excitedWelcomeMessage = `${welcomeMessage.toUpperCase()}, We are exited to have you!`
const shortGreeting =`Welcome, ${currentUser.slice(0, 1)}!`;