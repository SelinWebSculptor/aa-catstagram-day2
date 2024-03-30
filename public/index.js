window.onload = (e) => {
    let catPic;
    let header = document.createElement('h1');
    header.textContent = 'Kitten Pic';
    header.setAttribute('id', 'pageTitle')
    document.body.appendChild(header);
    let button = document.createElement('button');
    button.textContent = 'new kitten';
    button.setAttribute('action','get');
    document.body.appendChild(button);
    button.addEventListener('click', event => {
      document.getElementsByTagName('img').setAttribute = ``;
  }, 1000);

    })
    
    fetch('https://api.thecatapi.com/v1/images/search').then(res => {
      return res.json().then(data => {
        const KittenImg = data[0].url;
        console.log(KittenImg);
        let randomCat = document.createElement('img');
        randomCat.setAttribute('src', KittenImg);
        randomCat.setAttribute('id', 'randomCatImg')
        document.body.appendChild(randomCat);
      });

      
    })
}
