# User Authentication
<img src="./images/authentication.png" alt="Finger print authentication photo." width="600px" />

## If you write backend code, there are many issues to consider.
- Middleware, CSRF, hashing credentials, security vulnerabilities
- JWT tokens, cross-site cookies, session storage, local storage 
- Database architecture
- Querying methods
- Data validation
- Error handling
- API routes

## The list goes on...

---

# With Firebase, authentication is really simple!
Let's get started!

## Navigate to your dashboard and click on your project
<img src="./images/User_auth/1.png" alt="Firebase dashboard." width="600px" />

<br>

### Open the ```Build``` according menu and select ```Authentication```
<img src="./images/User_auth/2.png" alt="Firebase project dashboard." width="600px" />

<br>

### Click the ```Set up sign-in method``` button
<img src="./images/User_auth/3.png" alt="Firebase project menu." width="600px" />

<br>

## Look through all of the options
For this tutorial, we are going to select ```Google```.
<img src="./images/User_auth/4.png" alt="Firebase authentication options." width="600px" />

<br>

### Toggle the ```Enable``` option in the upper right corner
Once you see it highlighted in blue, there will be two inputs to fill in.
<br>

<img src="./images/User_auth/5.png" alt="Firebase authentication options." width="600px" />

<br>


### Create a name for the ```Project public-facing name``` section.
<img src="./images/User_auth/6.png" alt="Firebase authentication options." width="600px" />

<br>


### Also, fill out the ```Project support email```.
<img src="./images/User_auth/7.png" alt="Firebase authentication options." width="600px" />

<br>

### There are two optional settings:
Skip these if you are just practicing.
- ```Safelist client IDs from external projects```
- ```Web SDK configuration```

<br>

## Firebase will automatically generate a clientID and a secret key for you.
<br>
If you are employing Node.js, you cannot integrate the Firebase JavaScript SDK.

<br>

You need to read this document and follow the steps if you have not initialized a project already:
- [Google authentication SDK](https://developers.google.com/identity/sign-in/web/sign-in)
<br>

If you have a Google API account and already have a clientID and key, find it here:
- [Google Developer Console](https://console.cloud.google.com/projectselector2/apis/dashboard?pli=1&supportedpurview=project).


<br>

### * These are basically for integrating a Firebase project as a microservice or if you are developing with Node.js or a similar non-browser environment.

---

<br>

## Once this is all set up, we can move to authentication in the React app.










# Helpful links:
[Firestore authentication](https://firebase.google.com/docs/auth)
[Firestore Google auth](https://firebase.google.com/docs/auth/web/google-signin)
[Google authentication SDK](https://developers.google.com/identity/sign-in/web/sign-in)
