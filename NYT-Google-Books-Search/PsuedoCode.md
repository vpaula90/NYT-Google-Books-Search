01 Stu-FormalReview:
Had to create a React application and then place it into the same folder that the activity was on. From there I had to npm start the application.
    On the form.js file we were capturing the different inputs that the user can enter.
        -First You had to set the state for username and password to an empty string.
        -Then created a handleinput function that will capture the value of the information
        -Additionally created a handleFormSubmit function that will capture the informaiton and pass it when the user submits the information they inputed on the form
        -Render returns the information that was input in the form

03 Stu_AJAX
Created an application where the user can query OMDB API and show the information that is being requested for the movie that was searched for
In this activity I also added a react application to the file and replaced the src file for it
I also had to install the axios library that will be used to make the calls to the OMDB API.
Run npm start
The files are each split up to focus on the different areas: 
    The OMDB Container. js will set up the functions that will be called.
    First set up the state for search adn result and set it to empty string and empty object. 
    ComponentsDidMount function will load the page with the movies that were searched.
    SearchMovies function that will call the movie information using APRI.search. The .then specifyies what exactly it is that we want to be bringing back from searching the API
    HandleInptuChange funtion will handle what is entered into the search and will use that to call the specific information we are requesting
    HandleFormSubmit handle's the submission of the form and the data that is being entered on teh form to request that information. 

04 Stu_ConditionalRender
        In the portfolioContainer.js file besides importing the files and components we set the state for currentPage which is set to default ot home. The handlePageChange function sets the state for the page that can be called, renderPage function has if else statements set up interms of what page the current page is in and what component should be run. So when the home file was created it exported it's function to Home and in this file if when the page is rendered it is Home then it will run <Home/> so anything that was set to run on what was exported from the Home.js file.

06 Stu_PuppsterApp
    Create a React App. And cd into the "Pupster" directory and install Axios. 
    About.js: Imports the different exported data. It runs function About and returns a background image, and some text
    Discover.js also imports exported functions. Also setting the state for image to empty, match to false, and matchcount to zero. Then call the componentDidMount function will run the loadNextDog. So when the page loads it automatically runs that function which will load the next dog right away.
    HandleBtnClick funtion handles when the button is clicked for whether you like the dog or not and runs a math floor to see if the nubmer for the dog matched you to see if the dog likes you back or not. 

    The Search.js file sets the search parameters. Search set to empty string, breeds set to empty array, results set to empty array, and error set to empty string.
        ComponentsDidMount will get baseBreedList and load the results on page load =.
        handleinput change runs through the search and pulls the value for the event
        handleFormSubmit function GetDogsOfbreed from the search and will pull the dogs for the breed that was searched. 
        The Return sets up the search so that you can search by specific breen
        Api.js file has the Axios for the different API's

08 Stu_Recipes
    Using Ajax this application will return recipes.
    Under public the Index.html file will set up the basics for how the app will look when the information is rendered, 
    The components break out the different sections that build out the application. 
    The app.js file imports all of the components that have been built out in the differnet components and exported to be able to be called and used. HandleInputChange function will handle any data that is being entered into the search criteria.
    HandleFormSubmit handles the data in the form that is used to be able to pull the data
    The render section has the build out for the form and where the data is going to be injected.


09 Stu_AJAXBooks
    This application will retrieve books from a database.
    Pages is importing components and setting the state for books to an empty array. It also has the differnet functions that will call the books being searched. Loadbooks function uses and api call for getbooks function and will return the promise for data for the book. 
    Render returns data for inputs requesting a book recommendation. It also has the list of books that are saved to a list
    The API.js file houses the api's for different calls for getbooks, deletebooks, and savebooks. 

10 Stu_AJAXFormDelete
    This activity builds on the Stu_AJAXBooks activity and add functionality for submitting and deleteing books from the database. 
    Books.js file imports different components, the state for books is set to an empty array, title/author/synopsis set to an empty string. 
    The deleteBook function calls the api for deletebooks and will look at the books that have been loaded to pull from the pool for what to delete. 
    The files are modularized so that each houses a certain function or code and the Books.js file when importing the components will use the functions in those files. 

11 Stu_ReactRouter
    Adding to the other book rendering app activities. It will render  the book details page and then if no match it will pull up a 404 error.
    It is pretty much the same as the other application, but there is now two new components, one for details page and one for no Match. 
        Details page, this one has setup a state for book synopsis. It pulls from the returned array of details and points directly to the synopsis data
        No Match file calls a no match function that just posts no match. 

