const addBookBtn = document.querySelector("#addBookBtn");
const bookCardContainer = document.querySelector('.bookCardContainer');
const formPopUp = document.querySelector('.form-popup');
const submitForm = document.querySelector('.sumbit-book');
const FormInfo = document.querySelector('.form-container')
const inputTitle = document.querySelector('.inputTitle');
const inputAuthor = document.querySelector('.inputAuthor');

addBookBtn.addEventListener('click', () => {
  formPopUp.style.display = 'flex'
});

function closeForm() {
  formPopUp.style.display = 'none';
};

FormInfo.addEventListener('submit', (event) => {
  event.preventDefault()
  addBook();
  formPopUp.style.display = 'none'
})

const myLibrary = [];

function book(title, author) {
  this.title = title,
    this.author = author,
    myLibrary.push(`Author: ${this.title} Title: ${this.author}`);
};

function addBook() {
  let inputTitle = document.querySelector('.inputTitle');
  let inputAuthor = document.querySelector('.inputAuthor');
  let newBook = (`Title: ${inputTitle.value} Author: ${inputAuthor.value}`);
  formPopUp.style.display = 'none';
  const newContainer = document.createElement('div')
  let removeBtn = document.createElement('button')
  removeBtn.classList.add('close')
  removeBtn.textContent = 'X'
  let h1 = document.createElement('h1')
  let p1 = document.createElement('p')
  let p2 = document.createElement('p')
  newContainer.classList.add('bookContainer')
  bookCardContainer.appendChild(newContainer)
  h1.textContent = `Title: ${inputTitle.value}`;
  p2.textContent = `Author: ${inputAuthor.value}`
  newContainer.appendChild(h1)
  newContainer.appendChild(p1)
  newContainer.appendChild(p2)
  newContainer.appendChild(removeBtn)
  removeBtn.addEventListener('click', () => {
    bookCardContainer.removeChild(newContainer)
  })
  return book(inputTitle.value, inputAuthor.value)
};

function addBookToLibrary() {
  let inputBookTitle = document.querySelector('#inputbook').value
  card1Header.textContent = inputBookTitle
};