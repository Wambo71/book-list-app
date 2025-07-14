#  Book List App

This is a simple JavaScript project that lets users add and delete books from a list. It focuses on form handling, DOM manipulation, and basic validation.

##  Features

- Add a book with **Title**, **Author**, and **Year**
- Prevents submission if Title or Author is missing
- Delete individual books from the list
- Clears the form automatically after submission

##  Technologies Used

- HTML
- CSS (optional for styling)
- JavaScript

##  How It Works

1. The user fills out the book form.
2. On form submission:
   - If the **Title** or **Author** is missing, an alert prompts the user.
   - If valid, a new list item (`<li>`) is created showing the book details.
   - A **Delete** button is added for each book to remove it from the list.
3. The form is reset after each valid submission.

### Author
   Wambui Karanja,2025


## Sample JavaScript Logic

```javascript
const bookForm = document.getElementById('bookForm');
const bookList = document.getElementById('bookList');
const bookInputTitle = document.getElementById('bookTitle');
const bookInputYear = document.getElementById('bookYear');
const bookInputAuthor = document.getElementById('bookAuthor');

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const bookTitle = bookInputTitle.value;
  const bookYear = bookInputYear.value;
  const bookAuthor = bookInputAuthor.value;

  if (!bookTitle || !bookAuthor) {
    alert('Please enter the book Title and Author');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    ${bookTitle} - ${bookAuthor} (${bookYear})
  `;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');

  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(deleteBtn);
  bookList.appendChild(li);

  // Clear the form
  bookInputTitle.value = '';
  bookInputYear.value = '';
  bookInputAuthor.value = '';
});
# book-list-app
