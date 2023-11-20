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


##project 2
'''javascript
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