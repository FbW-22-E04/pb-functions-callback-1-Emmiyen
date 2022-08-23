
// const cd = () => 'Good orning'
function greetMessage (str) {
    console.log('Good Morning,', str);
}
greetMessage('John')

function greetUsers(arr,cb) {
 arr.forEach(item => {
    // console.log(item);
    cb(item)
 });
}
greetUsers(['John', 'Peter', 'Mark'], greetMessage)