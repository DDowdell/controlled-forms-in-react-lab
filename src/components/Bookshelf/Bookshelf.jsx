import { useState } from "react";

const Bookshelf = () => {

const [books, setBooks] = useState([
  {title: 'Harry Potter', author: 'J.K. Rowling'},
  {title: 'Fourth Wing', author: 'Rebecca Yarros'},
]);

const [newBook, setNewBook] = useState({
    title: '',
    author: '',
});

const handleInputChange = (event) => {
    setNewBook({
        ...currentBook, [event.target.name]: event.target.value,
    });
};

const handleSubmit = (event) => {
    event.preventDefault();
    setBooks({...books, newBook}),
    setNewBook({title: '', author: ''})
};

return (
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    {/* Form will go here */}
  </div>
  <div className="bookCardsDiv">{/* Book cards will display here */}</div>
</div>
)
}

export default Bookshelf;