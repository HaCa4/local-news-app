# Local News App

It's a prototype for a single page app which can be used just like twitter. 
Users can create, edit or delete their own posts. Also make comments for posted contents. 
Login/Register is needed to create a post. Tt's only readible without user authentication

## Stack
### React

It is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components, simple routing and virtual DOM etc. There are thousands of libraries compatible with react for developing better UI/UX.

### Firebase

It's developed by google and helps us creating full-stack apps by prebuilded backend services such as database and authentication. 

In this app it is used for minimizing boiler plate for state management and user authentication/authorization. I used two of it's services: Firestore and Authentication
#### Firestore
Firestore is a cloud server which can store the high amounts of data. It is used for storing user informations, posts and comments posted by users.

#### Authentication
Firebase auth has a simple but effective usage for developers. It handles authentication and authorization. I handle authorization by comparing user id and content owners id. If these two match together than user is able to edit or delete the content otherwise contents are readible only.





