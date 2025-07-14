const bookForm = document.getElementById('bookForm')
const bookList = document.getElementById('bookList')
const bookInputTitle = document.getElementById('bookTitle')
const bookInputYear = document.getElementById('bookYear')
const bookInputAuthor = document.getElementById('bookAuthor')

bookForm.addEventListener('submit',(e)=>{
  e . preventDefault()

 
 const bookTitle = bookInputTitle.value 
 const bookYear = bookInputYear.value
 const bookAuthor =bookInputAuthor.value

 if(!bookTitle || !bookAuthor){
    alert('please enter the book Title and Author')
    return
 }

  const li = document.createElement('li')
    li.innerHTML = `
    ${bookTitle}
    ${bookAuthor}
    ${bookYear}
    `

   const deleteBtn = document.createElement('button')
   deleteBtn.textContent = 'delete'
   deleteBtn.classList.add('delete-btn')

   deleteBtn.addEventListener('click', ()=>{
    li.remove()
   }
)


   li.appendChild(deleteBtn) 
  bookList.appendChild(li)
  // Clear the form
  bookInputTitle.value = '';
  bookInputYear.value = '';
  bookInputAuthor.value = '';



}
)