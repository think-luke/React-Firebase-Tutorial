# Welcome to Part 4: CRUD features!
<img src="./images/CRUD/CRUD.png" alt="Icons representing CRUD features." width="700px"/>

---

<br>

# 1: Setting up data validations (security rules)
You definitely don't want to give everyone permission to perform CRUD operations. You want to check authentication status and credentials.
<br>

Let's walk through setting up rules in the Firestore console.

<br>

## Navigate to your Firestore database console
<img src="./images/CRUD/1.png" alt="Firestore database console." width="700px"/>

<br>

## Click on ```Rules``` under the ```Cloud Firestore``` header
The following page with your current rules will load:
<img src="./images/CRUD/2.png" alt="Firestore rules and data validation page." width="700px"/>

<br>

## [Here](https://cloud.google.com/firestore/docs/security/rules-conditions) is a link to the Firestore data validation doc
It is really handy to split your window and follow the official doc side-by-side to check your syntax.

<img src="./images/CRUD/3.png" alt="Screenshot of Firestore rules console on the left and the Firestore official docs for restrictions on new data on the right." width="700px"/>

<br>

## Your security rules can be simple or complex
If this app is just for you, then running it on local host and keeping default settings is ok.
<br>

However, if you want to dig into operators, you can employ ```if("variable" in document_name)```, ```==``` or ```!=``` and chain conditionals in ```&&``` to have more strict rules like this:

<img src="./images/CRUD/4.png" alt="A screenshot of stricter Firestore rules." width="700px"/>

<br>

## Sometimes we learn about new project requirements and need to edit rules

You can check previous security rules for version control and compare them to the latest version for a better debugging experience:

<img src="./images/CRUD/5.png" alt="A screenshot of Firestore's previous security rules panel." width="700px"/>

<br>

## That covers data validation and permissions!
It's so simple in Firestore, but please make sure to also add error handling and data validation in the frontend as well to notify users and add a second layer of defense.

---

<br>

# 2: Sending your first create (POST) request
Sending data to your Firestore database from a React frontend is so simple it's truly wild. If you already have your own form, you are golden. If you just want to set up a quick test, then the ```Create``` directory's ```index.js``` file is ready to go.

Basically, all you have to do is add these imports at the top of the file:
- Fix the import if you have your form nested in a subdirectory within the ```src``` folder.
- ```import { firestore } from "./firebase";```
- ```import { addDoc, collection } from "@firebase/firestore";```

In ```Part 1: Setup```, you initialized a ```firestore``` or ```db``` variable in the ```src``` folder's ```firebase.js``` file so that is a relative import. The ```addDoc()``` and ```collection()``` built-in methods are what we will be employing to define the collection name and send a POST request to Firestore.

--- 

<br>

## Create a reference to pass to the addDoc() method.
- Choose a a name for your new collection - it can be anything you want.
- Next, invoke the collection() built-in method within your functional component.
    - ```const reference = collection(firestore, "enter_a_name_here");```

<br>

--- 

<br>

## Create your asynchronous submission handling function.
You should validate your data in the frontend as well, but this tutorial only includes one text input so that step is left out.

1. Define an object that you want to store in Firestore.
2. i.e. ```let demoData = { userId: sessionUser.id, text };```
3. There are no associations in a NoSQL database, but make sure to pass a session user ID so you can query a collection based on the logged in user.
3. Wrap the ```addDoc()``` method in a try catch block.
4. Invoke ```addDoc()``` by passing the ```reference``` variable and the data object you defined.
5. i.e. ```addDoc(reference, demoData);```
6. Handle anything else you need to do like close a modal or console.log a message, etc.
7. Catch any errors with ```catch(err)``` and a console.log(err) or throw a new error.

<br>

---

<br>

## If you submitted a message with the ```Create``` component provided to you, you will see the following message get printed in your Google Chrome dev tools console:

<br>

### ```"You successfully completed your first POST request to your Firestore database."```

<br>

---

<br>

## Check your Firestore document collection page!

<br>

Upon a successful POST, you will see the collection name you defined with 
- ```const reference = collection(firestore, "enter_a_name_here");```

<br>

You will also see a hashed document name such as:
- ```sCVjleXB2hyiis4Y441V```

<br>

And last but not least, you will see your document data!
- ```text: "Your form input."```
- ```userId: "The session user's ID"```

<br>
The userId below is excluded for security reasons.
<img src="./images/17.png" alt="New Firestore database entry." width="700px"/>

<br>

---

<br>

# <i>Happy hacking! I hope this tutorial was helpful :)</i>

![Tech Hacker gif](https://media.giphy.com/media/KmHueA88mFABT9GkkR/giphy.gif)