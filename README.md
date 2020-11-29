The API was built using Node.js and Express.js to modify a MongoDB database.
Additionally, the API also implement CORS to allow calls from localhost at the same origin.

This API is deployed to Heroku and can access by url
https://dh-react-card.herokuapp.com/all-cards

there are 4 API calls
1. Get all cards (GET)
/all-cards

2. Get a card details (GET)
/detail/:id

3. Create a new card (POST)
/new

4. Delete a card (DELETE)
/delete/:id
