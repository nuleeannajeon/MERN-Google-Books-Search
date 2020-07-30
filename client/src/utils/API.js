require( 'dotenv' ).config();
const axios = require('axios');

// * `/api/books` (get) - Should return all saved books as JSON.

// * `/api/books` (post) - Will be used to save a new book to the database.

// * `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.

export default {
    getGoogleBook: function(bookName){
        return axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${bookName}&printType=books&maxResults=10&key=`, process.env.REACT_APP_GOOGLE_API_KEY
        );
    },
    getBook: function(){
        return axios.get('/api/books');
    },
    saveBook: function(book){
        return axios.post('/api/books', book);
    },
    deleteBook: function(bookId){
        return axios.delete('/api/books/' + bookId);
    }
}