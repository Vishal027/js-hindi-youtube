#project relatedto DOM

## project link

(
    https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html
)

#solution code

##project 1

```javascript
console.log("MP3 :) First project with Hitesh:")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

//adding onClick event to all buttons
//Why did the other function not work>?
for (let i = 0; i < buttons.length; i++) {
  const buttonColor = buttons[i].id;
  //buttons[i].onclick = addingClick(buttonColor);
  buttons[i].onclick = function () {
    console.log(buttons[i].id, ' is clicked!');
    body.style.backgroundColor = buttons[i].id;
  };
}


```

'''javascript
##project 2

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.getElementById('height').value);
  const weight = parseInt(document.getElementById('weight').value);
  const results = document.querySelector('#results');

  if (
    height == 0 ||
    height < 0 ||
    isNaN(height) ||
    weight == 0 ||
    weight < 0 ||
    isNaN(weight)
  ) {
    results.innerHTML = 'Invalid Inputs, please check';
  } else {
    results.innerHTML = ((weight / ((height * height) / 10000)).toFixed(2));
  }
});

'''


'''Javascript 
##Project 3

const clockTimer = document.getElementById('clock');
let timerInSeconds = 0;

setInterval(() => {
  const date = new Date();
  clockTimer.innerHTML = date.toLocaleTimeString();
}, 1000);

'''
#solution code:

##Project 4
'''javascript
let x = Math.floor(Math.random() * 100 + 1);
const submitBtn = document.getElementById('subt');

submitBtn.onclick = (e) => {
  e.preventDefault();

  const textBox = parseInt(document.getElementById('guessField').value);
  let remaGuesses = parseInt(
    document.getElementsByClassName('lastResult')[0].innerHTML
  );
  let prevGuesses = document.getElementsByClassName('guesses')[0].innerHTML;

  console.log(textBox);
  console.log(remaGuesses);
  console.log('previous:', prevGuesses);

  if (remaGuesses > 0) {
    console.log('1');
    if (x != textBox) {
      console.log('2');

      //add the trial to the previous guess

      document.getElementsByClassName('guesses')[0].innerHTML =
        prevGuesses + ' ' + String(textBox);

      //reduce the trial count and replace it in the html
      remaGuesses = remaGuesses - 1;
      document.getElementsByClassName('lastResult')[0].innerHTML =
        String(remaGuesses);
      document.getElementById('guessField').value = '';
    } else {
      console.log('Done bhaai Done!!');
    }
  }
};


'''
