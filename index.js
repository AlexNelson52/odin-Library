const addBookBtn = document.querySelector("#addBookBtn");
const bookCardContainer = document.querySelector('.bookCardContainer');
const formPopUp = document.querySelector('.form-popup');
const submitForm = document.querySelector('.sumbit-book');
const FormInfo = document.querySelector('.form-container')
const inputTitle = document.querySelector('.inputTitle');
const inputAuthor = document.querySelector('.inputAuthor');
const inputPages = document.querySelector('.inputPages')

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

function book(title, author, pages) {
  this.title = title,
    this.author = author,
    this.pages = pages,
    myLibrary.push(`Title: ${this.title} Author: ${this.author} Pages: ${this.pages}`),
    myLibrary.forEach((element) => {
      if (element == element) {

        formPopUp.style.display = 'none';
        const newContainer = document.createElement('div');
        let removeBtn = document.createElement('button');
        removeBtn.classList.add('close');
        removeBtn.textContent = 'X';
        let h1 = document.createElement('h1');
        h1.classList.add('bookh1');
        let p1 = document.createElement('p');
        p1.classList.add('bookp1');
        let p2 = document.createElement('p');
        p2.classList.add('bookp2');
        newContainer.classList.add('bookContainer')
        bookCardContainer.appendChild(newContainer)
        h1.textContent = `${this.title}`;
        p1.textContent = `Author: ${this.author}`;
        p2.textContent = `Number of pages: ${this.pages}`;
        newContainer.appendChild(h1);
        newContainer.appendChild(p1);
        newContainer.appendChild(p2);
        newContainer.appendChild(removeBtn);
        removeBtn.addEventListener('click', () => {
          bookCardContainer.removeChild(newContainer)
        })
      }
    })
};

console.log(myLibrary);

function addBook() {
  return book(inputTitle.value, inputAuthor.value, inputPages.value)
};

// myLibrary.forEach((element) => {
//   formPopUp.style.display = 'none';
//   const newContainer = document.createElement('div');
//   let removeBtn = document.createElement('button');
//   removeBtn.classList.add('close');
//   removeBtn.textContent = 'X';
//   let h1 = document.createElement('h1');
//   h1.classList.add('bookh1');
//   let p1 = document.createElement('p');
//   p1.classList.add('bookp1');
//   let p2 = document.createElement('p');
//   p2.classList.add('bookp2');
//   newContainer.classList.add('bookContainer')
//   bookCardContainer.appendChild(newContainer)
//   h1.textContent = `${element}`;
//   p1.textContent = `Author: ${inputAuthor.value}`;
//   p2.textContent = `Number of pages: ${inputPages.value}`;
//   newContainer.appendChild(h1);
//   newContainer.appendChild(p1);
//   newContainer.appendChild(p2);
//   newContainer.appendChild(removeBtn);
//   removeBtn.addEventListener('click', () => {
//     bookCardContainer.removeChild(newContainer)
//   })
// })


// let newBook = (`Title: ${inputTitle.value} Author: ${inputAuthor.value}`);
// formPopUp.style.display = 'none';
// const newContainer = document.createElement('div');
// let removeBtn = document.createElement('button');
// removeBtn.classList.add('close');
// removeBtn.textContent = 'X';
// let h1 = document.createElement('h1');
// h1.classList.add('bookh1');
// let p1 = document.createElement('p');
// p1.classList.add('bookp1');
// let p2 = document.createElement('p');
// p2.classList.add('bookp2');
// newContainer.classList.add('bookContainer')
// bookCardContainer.appendChild(newContainer)
// h1.textContent = `${inputTitle.value}`;
// p1.textContent = `Author: ${inputAuthor.value}`;
// p2.textContent = `Number of pages: ${inputPages.value}`;
// newContainer.appendChild(h1);
// newContainer.appendChild(p1);
// newContainer.appendChild(p2);
// newContainer.appendChild(removeBtn);
// removeBtn.addEventListener('click', () => {
//   bookCardContainer.removeChild(newContainer)
// })
// return book(inputTitle.value, inputAuthor.value, inputPages.value)
// };