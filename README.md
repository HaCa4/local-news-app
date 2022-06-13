# Local News App

It's a prototype for a single page app which can be used just like twitter. 
Users can create, edit or delete their own posts. Also make comments for posted contents. 
Login/Register is needed to create a post. Tt's only readible without user authentication

## Stack
### React

It is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components, simple routing and virtual DOM etc. There are thousands of libraries compatible with react for developing better UI/UX.

### Firebase

It's developed by google and helps us creating full-stack apps by prebuilt backend services such as database and authentication. 

In this app it is used for minimizing boiler plate codes for database and user authentication/authorization. I used two of it's services: Firestore and Authentication

#### Firestore
Firestore is a cloud server which can store the high amounts of data. It is used for storing user informations, posts and comments posted by users. It has its own functions/hooks for accordingly structuring and storing the data.

#### Authentication
Firebase auth has a simple but effective usage for developers. It handles authentication and authorization. I handle authorization by comparing user id and content owners id. If these two match together than user is able to edit or delete the content otherwise contents are readible only.
Users can use email-password or google accounts for authentication.
Firebase has its own functions/hooks for authentication.

### Material UI

I used MUI's prebuilt styled components and transfrom its props in a way that suits better for the project. 

## App Content

It's a single page app for posting. Which users can create, edit, delete posts and make comments on other users posts.

