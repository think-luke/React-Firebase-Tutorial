# Choosing a data structure
<img src="../../images/data_structures.png" alt="Data structures illustration.">

<br>

## There are several ways to structure your Firestore data.
- Documents
- Multiple Collections
- Subcollections within documents

---

<br>

## Let's explore the pros and cons for each.

<br>

---

<br>

## Documents:
In a Firestore document, you can nest objects like arrays or maps.

Your file structure can look like this:
```
users
│   
└─── name:
|        └───  first: George
|        └───   last: Smith
|
└─── dob: 1962
|
|
└─── education:
              └─── 0: Elementary School
              └─── 1: Middle School
              └─── 2: High School
              └─── 3: Undergraduate
              └─── 4: Bootcamp
              └─── 5: Masters
              └─── 6: PhD
```

<br>

## Pros:
If you have fixed, static data that propbably won't change over time, this is a great way to organize information. For example:
- Basic user info.
- Archived data for artworks in museums.
- Discography for music releases on Discogs.

<br>

## Cons:
This structure will make it harder to scale when data grows. If you have a large single document, retrieval times will become slower.

<img src="../../images/slow_loading.png" alt="Slow data loading illustration.">

<br>

---

<br>

## Subcollections
## Helpful links:
[Firestore docs](https://firebase.google.com/docs/firestore/manage-data/structure-data)
