let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let password = '';

for(var i=0; i<12; i++){
    password = password+character.charAt(Math.floor(Math.random()*character.length));

}
console.log(password);
