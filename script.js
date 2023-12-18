
var names = ["John", "Jane", "Bob", "Alice", "Jack"];
for (var i = 0; i < names.length; i++) {
    var currentName = names[i];
    if (currentName.charAt(0).toLowerCase() === 'j') {
        console.log("Goodbye " + currentName);
    } else {
        console.log("Hello " + currentName);
    }
}