# Getting Started with Firebase, Firestore and React
<img src="./images/Firebase-React.png" alt="Firebase and React logos."/>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The root directory is called React-Firebase-Tutorial.

# 1: Set up Firebase

Let's start with the [Firebase website](https://firebase.google.com/).

Put simply, Firebase is a cloud-based application platform. It's competitors are Parse, MongoDB, Heroku, AWS Amplify, etc. 

There are many tools and frameworks that Firebase offers, and this walkthrough will cover [Firestore](https://cloud.google.com/firestore/docs#:~:text=Firestore%20is%20a%20NoSQL%20document,describes%20relationships%20between%20data%20objects.).
- Firestore is "a NoSQL document database built for automatic scaling, high performance, and ease of application development." 
- Firestore is serverless - no backend code is needed.

* If you would like to research Firebase's other database solution, <i>Realtime Database</i>, you can learn more [here](https://firebase.google.com/docs/database/rtdb-vs-firestore).

Firestore only executes code when an event is triggered. You can write scripts to interact with other products like Google Sheets and you can also send HTTPS requests to store and retrieve data. It's really fast, convenient and pretty cool!

Alright, now that you're at the website, create an account if you haven't or log in to access the dashboard.

---
## Dashboard

This is what the Firebase dashboard looks like:

<img src="./images/1.png" alt="Firebase dashboard."/>

Begin by clicking the "Add Project" card under Your Firebase Projects.
You will see the following page and you can enter a name for your project:

<img src="./images/2.png" alt="Firebase create project form."/>

Once you click continue, step 2 is confirming your Google Analytics selection. We are going to disable this to quickly move forward. However, please look into Google Analytics depending on your project requirements. Here is a link to [Google Analytics](https://analytics.google.com/analytics/web/provision/#/provision).

<img src="./images/3.png" alt="Firebase Google Analytics selection form."/>

It will take a little bit for the project to get initialized. Now's a good time to fill up on coffee, tea, whatever makes you happy!

<img src="./images/4.png" alt="Firebase Project loading page."/>

---
## Project dashboard
Ok! Once your project is created, you will land on this page.

<img src="./images/5.png" alt="Firebase single project dashboard."/>

There are so many forms and steps involved, but we're almost done with setting up Firebase!
The next thing you need to do is click on the web app ```</>``` button under the "Get started by adding Firebase to your app" header.

The following short form will appear - you just need to give your app a nickname and leave the Firebase Hosting box unchecked for now. If you need Firebase Hosting, check out [this link](https://firebase.google.com/products/hosting?gclid=CjwKCAjws--ZBhAXEiwAv-RNLy56zPOphuzMTXKtA3V11PFk3EwZ8uA2x19qUDrp2rgkbxws2pGWGBoCpe8QAvD_BwE&gclsrc=aw.ds).

<img src="./images/6.png" alt="Firebase register application."/>

Now you will see a page with two blocks of code to copy. The first is the Firebase npm package. The second one has all of your keys and credentials for this Firebase project. This image is edited for security reasons, but you will see all of your credentials in green wrapped in double quotes. You will want to keep them secure in a .env file.

<img src="./images/7.png" alt="Firebase npm and credentials page."/>


Leave this tab open and now let's move on to connecting your Firebase project to your React app!

---
# 2: Connect Firebase to a React app

In your terminal, bootstrap React with:
- ```npx create-react-app <your project name>```.

Otherwise, this repo comes with a directory called React-Firebase-Tutorial. You're good to go with this basic template.

Copy the npm code from the Firebase tab you have open.
If you forgot it, it's here:
- ```npm install firebase```

<img src="./images/7.png" alt="Firebase npm and credentials page."/>

### Step two:
Create a .env file and make sure it is added to your .gitignore file. Don't expose those credentials!
- ```touch .env && code .env```

Make sure to look at the .env.example file to match the keys for your Firebase credentials. Since we are working with React, make sure the keys start with ```REACT_APP_``` followed by the Firebase keys provided to you in the tab you have open.
- Replace the colons ```:``` with an equal sign ```=``` for all keys.
- Remove the double quotes for credentials and do not leave a comma or semi-colon.

Now, create a file called firebase.js in the ```src``` directory.
- ```touch firebase.js && code firebase.js```



Ok perfect! Once the file is open, copy paste the second block of code into this firebase.js file. However, make sure to remove all of your credentials in double quotes with the .env variables.
- It will look like:
```
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
}
```

### Make sure your .env file is good and the firebase.js file looks like this:
<img src="./images/8.png" alt="Firebase.js example file in VSCode."/>

## Fantastic! Now Firebase and your React app are connected. Let's move on!

---

# Add Firestore to your Firebase project.
Since this walkthrough covers Firestore, we need to initialize it within our current Firebase project.

## Go to your Firebase project dashboard.
You will most likely see <u><i>Cloud Firestore</i></u> on this page as a suggested product. If you don't for some reason, click on the menu on the left navbar and select "Firestore Database". They're the same thing.

<img src="./images/9.png" alt="Firestore card in the dashboard."/>
<img src="./images/10.png" alt="Firebase tab in the left navbar."/>

---

## Wait for the banner to load.
Sometime it takes a few seconds for the information within the orange banner to load. Just be patient and you will see the <i>```Create database```</i> button appear.

<img src="./images/11.png" alt="Cloud Firestore dashboard."/>



### Great! We have two more extra lines of code to add here:
#### At the top of the file import ```getFirestore```.
- import { getFirestore } from "@firebase/firestore";
#### At the bottom of the file, export ```firestore```.
- export const firestore = getFirestore(app);




Perfect, we're doing this thing!
---

# Create a new colletion