# Live-It-Up
Live-It-Up is SCPC's internal web app for managing volunteers and events within the organization. It's current focus is on maintaining an up-to-date list of all events and members, including each member's current standing regarding the fulfillment of their volunteering requirements. Future iterations of Live-It-Up aim may assist in volunteer coordination, alumni records, etc.

## Development Technologies
Live-It-Up is developed using the popular MERN stack. MERN is an acronym for the four core frameworks used to build the entire web stack for the app: MongoDB, Express, React, and Node.js. These are popular open-source JavaScript frameworks that allow for the various components of the project (frontend, backend, database) to be developed and interoperate more easily. Each piece of the MERN stack is used for a core piece of the application:
### Node.js
Node.js is a JavaScript runtime environment that allows users to easily implement server environment. It is the most poular server framework for JavaScript, and has an extensive series of powerful packages built for it that developers can take advantage of. It can be interacted with using the Node Package Manager (NPM), similar to PIP for Python or Apt for Debian-based Linux, etc.
### MongoDB
MongoDB is a non-relational (NoSQL) database. This means that it employs a looser, document-based structure than a traditional database, and as a result is faster and more scalable than a traditional SQL DB (document schemas can be more easily modified or used without a schema entirely). Developers define a 'schema' for a document (think of this as a table), which define the expected objects and their associated data types using key / value pairs. Objects are stored in JSON format within a document.
### Express
Express is the backend framework used in MERN. It supports various middlewares that allow developers to define 'routes' that let Node.js code interact with the MongoDB database. Routes use traditional HTTP requests, and allow the developer to define algorithms or operations to be performed on a given request before it is fed to or after it is pulled from the database.
### React
React is the Facebook developed framework used for developing the frontend. Rather than having developers write HTML, CSS, and JavaScript files as they would for a traditional website, it allows them to define the aspects of a given webpage almost entirely in JavaScript. Individual parts of a given webpage are defined as 'components' and can be updated in a dynamic, modular way. It has various other design paradigms that increase speed and efficiency, including the use of a virutal Document Object Manager (DOM) and JavaScript XML (JSX) used to define components.

## Installation
- Live-It-Up can be run on Linux, MacOS, or Windows, but is intended to be run in a Linux server environment. To install and run the application, developers must first download and run the following development tools and frameworks:
    - Git
    - NPM / Node.js
    - MongoDB
    - Postman (Recommended, GUI tool for sending HTTP requests to the server)
    - VS Code (Recommended, text editor with various helpful plugins for MERN development)
- These can be installed from your Linux package manager or Homebrew on MacOS. On Windows they need to be installed individually from the provider's website. You may want to look into using Windows Subsystem for Linux (WSL) to run and develop for Live-It-Up.

- First, clone the repo from the Georgia Tech Github repository:
```bash
git clone https://github.gatech.edu/scpc/live-it-up.git
```
- It is recommended you setup a Github SSH key for the Georgia Tech Github so you you can securely pull and push to the repo without having to enter your credentials each time.

- Next, we'll install the necessary packages needed to run Live-It-Up. A 'package' is a 3rd part library that defines a specific functionality that is compatible with Node.js. We'll use many such libraries in Live-It-Up, and they'll all be installed and updated using NPM. To do this, run the following command at the root of the live-it-up repository:
```bash
npm install
```
- You'll notice this will create a new folder called `node_modules`. This contains the source and binary code used for the NPM packages we want to use. How did NPM know which packages to install? These packages, along with their respective versions, are defined in the file `package-lock.json`. If you want to install a new package as you develop, you can run `npm install {NEW_PACKAGE_NAME}` and it will be automatically added to the `package-lock.json` file. Then, when you push your change to this file to the Github and your fellow SCPC devs pull it, when they run `npm install` the command will also pull in your newly specified package. Pretty helpful!

- Another file to take note of at this level is the file `package.json`. This file is required for any Node.js project. It signifies to NPM that the given directory is the top-level directory of an NPM project, and specifies various attributes of hte project like its name, version, and scripts that can be used to interact with it.

- Once your top-level NPM package dependencies have been installed, take a look at the other contents of this directory. You'll notice a subdirectory called `client`, and another called `server`. These are the subfolders containing the frontend and backend source code, respectively. Each is formatted as its own sub-NPM project, and both directories contain their own `package.json` and `package-lock.json` files that specifies the specific packages needed for their components of the project. Navigate to both of these subdirectories, and in each one run the installation command again:
```bash
npm install
```

- Now Live-It-Up is fully installed, but we need to setup a database for it to interact with. The MacOS / Linux process for doing so is outlined below. For additional detail, refer to MongoDB's official setup instructions for [Linux](https://docs.mongodb.com/manual/administration/install-on-linux/), or refer to their [Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/) guide if you use that OS.
- In your root directory, create the following two nested directories where your MongoDB documents and metadata will live when you test locally on your machine (this will require super user permissions):
```bash
/data/db
```
- Note: You can create your MongoDB data directory in another location that doesn't require super user permission (like your Home dir) with some additional steps if desired. Refer to the linked MongoDB guides.
- Start the MongoDB daemon using the below command. Ensure it starts successfully without error, and runs waiting for input. Note this daemon needs to persist separately from the terminal used to interact with Live-It-Up, so either run it in a 2nd terminal tab or headlessly.
```bash
sudo mongod
```
- Now that Live-It-Up is installed and MongoDB is waiting for input, you can run the application! To do this, run the following command to start the application:
```bash
npm run dev
```
This will run two NPM servers: the client on port 3000, and the backend on port 3001. Check that the backend successfully connects to the database in the terminal, and that the frontend launches in your default browser. Now Live-It-Up is up and running!

## Backend
The contents of the backend are contained within the `server` directory. As stated above, note the presence of the `package.json` and `package-lock.json` files that define the backend NPM project and NPM package dependencies, respectively. Also note the file `server.js` - this is the first file that is inspected when the server is started, and does the job of initializing the backend Node server, connecting to the database, and defining the top-level route (more on routes below).

Two subdirectories are also present: `app` and `config`. `config` contains database configuration files used for when Live-It-Up is deployed in a production environment, don't worry about that for now. `app` is more important, and contains the source code for the backend server. The contents of this directory are explained below.

### Models
Model files are contained in the directory `/server/app/models`, and define the schemas used by the Live-It-Up database. A schema defines the key/pair relations for a given MongoDB document (remember, documents are like tables in a non-relational DB). This specifies the name of the document category (e.g. volunteers), along with each possible value in the document, its type, and other additional properties per value (Is it required? Can there be duplicates? etc). Each schema is given its own model file named using the convention `{SCHEMA_NAME.models.js}`. The library Mongoose is used to define the key/value pair mappings, and exports these models so they can be viewed by the rest of the backend.

### Routes
Routes are contained in the directory `/server/app/routes/api`, and define the different ways in which our frontend can communicate with the database. These routes make up the core of the backend, and are where we put any logic that needs to be applied to a request to / from the database. Routes are grouped by the type of MongoDB model they primarily interact with (e.g. volunteers) and contained in files named using the convention `DOCUMENT_TYPE.js`.

Each route file defines a variable called `router`, which is an Express object that contains helper methods used to make calls to the database. Additionally, each will define one or more variables that import a specific schema from our `models` directory using Mongoose. These allow us to interact with the fields defined in our database schemas.

Routes are how the frontend interacts with the backend and database. If the frontend needs to get a specific piece of data, it will call a route that it knows will retrieve this data from the backend. The logic that performs this action is defined for one of these routes by you, and associated with a unique route string. For example, if our frontend needed to access a specific volunteer's data, our backend could implement a route that uses the routing string `{URL:PORT}/api/v1/users/{USER_ID}` and a lambda function that finds this specific volunteer and returns their data. The frontend would make a call using this string, which would be matched against your route definitions to see if one exists that implements this string. If it does, the associated logic is performed.

The Express `router` object discussed above is how you will define these routes. The `route` object contains helper methods for each of the four HTTP requests: `get`, `post`, `put`, and `delete`. These do what you would expect: a `get` call gets data from MongoDB, a `put` call adds new data, etc. Each of these Express calls take in two arguments: a string that defines how to call that particular route, and a lambda function that contains the logic for the route given the HTTP request method being used.

The first argument to an Express HTTP request is the route string. This string defines the unique 'name' of the given route, and is what the frontend will use to call it. Routes will always start with `{URL:PORT}/api/v1`; your custom route parameter will define the concatentation to this base string that is unique to your call. This lets you define multiple ways of interacting with the database that are logical and visible to the frontend. For example, you could define `/user` as a route to get all volunteer entries from the volunteers document, `user/:uid` to get a specific user, etc. Note: Using the character `:` denotes a paremter that will be a part of the route definition that isn't hardcoded. For example, the route definition `/user/:uid` would need to be called with an actual user ID, like `localhost:3001/api/v1/user/swalsh38`.

The second argument to an express route is a lambda function. These are self-contained functions that can be passed into a parent function like a variable, and define the logic to be performed for your route. Here you can read the content of the frontend's request, perform any logic you want, query data from the MongoDB database, perform any given logic on the results, and return something back to the frontend (either your DB query or some answer given this query). Lambda functions will take in two parameters, `req` and `res`. `req` is the frontend request, and `res` is the response you will return. When returning a resonse, in addition to any data you wish to return you must send an HTTP response code (e.g. 200 for success, 400 for a query error, 500 for a server error, etc).

### Helpers
Helpers are found under the directory `/server/app/helpers`. These contain custom middlewares / helper functions that the backend may need. They don't define a specific grouping of routes, and instead implement general backend logic that may or may not need to access the database. These are usually called by logic used in the lambda function of a route.

## Frontend
The contents of the frontend are contained in the top-level `client` directory. Again, the files `package.json` and `package-lock.json` define this directory as its own NPM project and its dependencies. Notice several new subdirectories: `locale`, `public`, and `src`. `public` contains the globally visible public files a user can see when they 'inspect element' on Live-It-Up's root page, and `global` contains config information that can be intially ignored. `src` contains the source code for the frontend, and is where you will be working.

Many of the subdirectories within `src` don't need to be modified during regular development. `include` contains various React package dependency imports, `images` contains images to be displayed, and `middleware` is currently deprecated. The two important subdirectories for development are `components` and `redux`.

### Components
React uses a design paradigm where developers define 'components'. Components make up the pages of Live-It-Up, along with nested subcomponents that modularly implement specific parts of a given page. These are implemented using but JSX and CSS files; the top-level component is `App.jsx` (think of it like a main or index file), and subcomponents are implemented in relevantly-named subdirectories (e.g. 'calendar' for the calendar page). Components are able to update dynamically and independently of each other, without the need to refresh the entire page.

### Redux
Live-It-Up pairs its use of React with another library called Redux. Redux allows us to define a single, global store that all components will depend on, and is the single source of truth for the state of the frontend on a given client. Within the `redux` directory are the subdirectories `actions` and `reducers`. `actions` define actions that React components can invoke, and are where we define the calls to the backend routes. `reducers` are where global store state changes are defined when an action updates the state of the application.