const requestURL = 'https://api.github.com/users/vishalsharma';
const xhr = new XMLHttpRequest();
console.log(xhr.open("GET", requestURL));/
console.log(xhr.send());
