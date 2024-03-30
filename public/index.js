let KittenImg;
let randomCat;
let upVotes = 0;
let submittedComment;
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
  button.setAttribute('id', 'new');
  button.textContent = 'new kitten';
  button.setAttribute('action', 'get');
  document.body.appendChild(button);
  button.addEventListener('click', event => {
    changeImg();

  })

  randomCat = document.createElement('img');
  document.body.appendChild(randomCat);
  fetching();
  let results = document.createElement('p');
  results.setAttribute('id', 'voteResults');
  results.textContent = `Total popularity: ${upVotes}`
  document.body.appendChild(results);
  
  let upAndDown = document.createElement('div');
  upAndDown.setAttribute('id', 'upAndDown');
  document.body.appendChild(upAndDown);

  let upvoteButton = document.createElement('button');
  upvoteButton.textContent = 'Like';
  upvoteButton.setAttribute('action', 'submit');
  upvoteButton.setAttribute('id', 'like');
  upAndDown.appendChild(upvoteButton)
  upvoteButton.addEventListener('click', event => {
    upVotes++;
    results.textContent = `Total popularity: ${upVotes}`
  })

  let downVoteButton = document.createElement('button');
  downVoteButton.textContent = 'dislike';
  downVoteButton.setAttribute('action', 'submit');
  downVoteButton.setAttribute('id', 'dislike');
  upAndDown.appendChild(downVoteButton);
  downVoteButton.addEventListener('click', event => {
    if (upVotes !== 0) {
      upVotes--;
      results.textContent = `Total popularity: ${upVotes}`

    }
  })
  //form create
  let form = document.createElement('form');
  form.setAttribute('action', 'submit');
  form.setAttribute('id', 'form');
  document.body.appendChild(form);
  //comment/label create
  let comment = document.createElement('label');
  comment.setAttribute('for', 'comment');
  comment.textContent = 'Comment: '
  form.appendChild(comment);
  //textbox create
  let text = document.createElement('textarea');
  text.setAttribute('name', 'comment');
  text.setAttribute('id', 'user-comment');
  text.setAttribute('cols', '30');
  text.setAttribute('rows', '1');
  comment.appendChild(text);
  //form submit
  let submitForm = document.createElement('button');
  submitForm.setAttribute('action', 'submit');
  submitForm.setAttribute('id', 'form-submit');
  submitForm.textContent = 'Submit';
  form.appendChild(submitForm);
  
  let commentDiv = document.createElement('ul')
  commentDiv.setAttribute('id', 'pic-comments');
  document.body.appendChild(commentDiv);
  
  
  
  submitForm.addEventListener('click', (event) => {
    event.preventDefault();
  submittedComment = document.getElementById('user-comment').value;
  if (submittedComment !== '') {

    let commentLi = document.createElement('li');
    commentLi.setAttribute('class','pic-comment');
    commentLi.textContent = submittedComment;
    commentDiv.appendChild(commentLi);
    
  } else {
    alert('must type a comment.')
  }

  })



}
