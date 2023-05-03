# stev232sBookLookup

## Description


## Acceptance Criteria

GIVEN a book search engine<br>
*WHEN I load the search engine*<br>
__THEN__ I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button<br>
*WHEN I click on the Search for Books menu option*<br>
__THEN__ I am presented with an input field to search for books and a submit button<br>
*WHEN I am not logged in and enter a search term in the input field and click the submit button*<br>
__THEN__ I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site<br>
*WHEN I click on the Login/Signup menu option*<br>
__THEN__ a modal appears on the screen with a toggle between the option to log in or sign up<br>
*WHEN the toggle is set to Signup*<br>
__THEN__ I am presented with three inputs for a username, an email address, and a password, and a signup button<br>
*WHEN the toggle is set to Login*<br>
__THEN__ I am presented with two inputs for an email address and a password and login button<br>
*WHEN I enter a valid email address and create a password and click on the signup button*<br>
__THEN__ my user account is created and I am logged in to the site<br>
*WHEN I enter my account’s email address and password and click on the login button*<br>
__THEN__ I the modal closes and I am logged in to the site<br>
*WHEN I am logged in to the site*<br>
__THEN__ the menu options change to Search for Books, an option to see my saved books, and Logout<br>
*WHEN I am logged in and enter a search term in the input field and click the submit button*<br>
__THEN__ I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account<br>
*WHEN I click on the Save button on a book*<br>
__THEN__ that book’s information is saved to my account<br>
*WHEN I click on the option to see my saved books*<br>
__THEN__ I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account<br>
*WHEN I click on the Remove button on a book*<br>
__THEN__ that book is deleted from my saved books list<br>
*WHEN I click on the Logout button*<br>
__THEN__ I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button <br> 

## Database

* Schemas directory:
    * index.js: Export your typeDefs and resolvers.
    * resolvers.js: Define the query and mutation functionality to work with the Mongoose models.
    * typeDefs.js: Define the necessary Query and Mutation types:
        * Query type:
            * __me__: Which returns a __User__ type.
        * Mutation type:
            * login: Accepts an email and password as parameters; returns an __Auth__ type.
            * addUser: Accepts a username, email, and password as parameters; returns an __Auth__ type.
            * saveBook: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a __User__ type. (Look into creating what's known as an __input_ type to handle all of these parameters!)
            * removeBook: Accepts a book's __bookId__ as a parameter; returns a __User__ type.
        * User type:
            * _id
            * username
            * email
            * bookCount
            * savedBooks (This will be an array of the __Book__ type.)
        * Book type:
            * bookId (Not the **_id**, but the book's __id__ value returned from Google's Book API.)
            * authors (An array of strings, as there may be more than one author.)
            * description
            * title
            * image
            * link
        *  Auth type:
            * token
            * user (References the __User__ type.)