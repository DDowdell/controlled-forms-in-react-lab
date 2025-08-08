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
    <form onSubmit={handleSubmit}>
        <input 
            id="title"
            name="title"
            type="text"
            value={newBook.title}
            onChange={handleInputChange}
        />
        <input
            id="author"
            name="author"
            type="text"
            value={newBook.author}
            onChange={handleSubmit}
        />
        <button type="submit">Submit</button>
    </form>
  </div>
  <div className="bookCardsDiv">{/* Book cards will display here */}</div>
</div>
)
}

export default Bookshelf;