# User Authentication
<img src="./images/authentication.png" alt="Finger print authentication photo." width="600px" />

## If you write backend code, there are many issues to consider.
- Middleware, CSRF, hashing credentials, security vulnerabilities
- Tokens, cookies, session storage, local storage 
- Database architecture
- Querying methods
- Data validation
- Error handling
- API routes

## The list goes on...

---

# With Firebase, authentication is really simple!
Let's get started!

## Navigate to your Firebase dashboard

<br>

## Click on your Firebase project

<br>

## Open the ```Build``` according menu and select ```Authentication```

<br>

## Click the ```Set up sign-in method``` button

<br>

## Look through all of the options
For this tutorial, we are going to select ```Google```.

<br>

## Toggle the ```Enable``` option in the upper right corner
Once you see it highlighted as Enabled, there will be a form two inputs to provide.
<br>

Create a name for the ```Project public-facing name``` section.
<br>

Also, fill out the ```Project support email```.

<br>

## There is one optional setting called ```Safelist client IDs from external projects```.
<br>

If you have this set up, navigate to your [Google Developer Console](https://console.cloud.google.com/projectselector2/apis/dashboard?pli=1&supportedpurview=project).
<br>
This is an optional setting, so you can skip this step as well.

<br>

## There is no need to fill out the Google SDK option either.
Firebase will automatically generate a clientID and a secret key for you.
<br>
If you are employing Node.js, you cannot integrate the Firebase JavaScript SDK.
<br>
Unfortunately, you have to pass your Google API ceredentials to Firebase manually.
<br>

You need to read this document and follow the steps if you have not initialized a project already:
- [Google authentication SDK](https://developers.google.com/identity/sign-in/web/sign-in)
<br>

If you have a Google API account and already have a clientID and key, find it here:
- [Google Developer Console](https://console.cloud.google.com/projectselector2/apis/dashboard?pli=1&supportedpurview=project).

<br>

## Once this is all set up, we can move to authentication in the React app.








# Helpful links:
[Firestore authentication](https://firebase.google.com/docs/auth)
[Firestore Google auth](https://firebase.google.com/docs/auth/web/google-signin)
[Google authentication SDK](https://developers.google.com/identity/sign-in/web/sign-in)
