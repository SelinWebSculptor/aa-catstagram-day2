let KittenImg;
let randomCat;
let changeImg = () => {
  let img = document.getElementById('randomCatImg');
  fetching();
  randomCat.setAttribute('src', KittenImg);
}

const fetching = () => {
  fetch('https://api.thecatapi.com/v1/images/search?').then(res => {
    return res.json().then(data => {
      KittenImg = data[0].url;
      randomCat.setAttribute('id', 'randomCatImg')
      randomCat.setAttribute('src', KittenImg)
      console.log(randomCat)
      console.log(KittenImg);
    });
  })
}
window.onload = (e) => {
  let header = document.createElement('h1');
  header.textContent = 'Kitten Pic';
  header.setAttribute('id', 'pageTitle')
  document.body.appendChild(header);
  let button = document.createElement('button');
  button.textContent = 'new kitten';
  button.setAttribute('action', 'get');
  document.body.appendChild(button);
  button.addEventListener('click', event => {
    changeImg();
    
  })
  
  randomCat = document.createElement('img');
  document.body.appendChild(randomCat);
  fetching();

  
}
