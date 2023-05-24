# Getting Started with the api

This project was developed by Toshmoney to teach Toshconsult Technologies Inc student the backend development CRUD operations.

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:1000](http://localhost:1000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm start`

Launches the app with the normal node index.js method and this doesn't automatically reload pages when there is any changes. You will need to stop and start the application again.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles Node app in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Creating an account
<h2>EndPoints </h2>

Unless otherwise stated all endpoints will have same base url given below:

`BASE_URL = 'http://localhost:1000/'`

<h3>Sign up new user: /register/</h3>

The following fields are required:

<p>username</p>
<p>password</p>

<p>Sample request</p>

`axios.post(`${BASE_URL}/register/`, { <br />
    username: 'username',<br />
    password: 'password', <br />
})<br />
.then((response) => {<br />
    console.log(response.data) <br />
}) <br />
.catch(error => { <br />
    // handle error as appropriate <br />
})` <br />

Sample success response

`{ <br />
    success: true, <br />
    user: {…} // user details <br />
}` <br />

<h3>Login user: /login/</h3>
Method : Post Required fields:

username <br />
password <br />
Sample request <br />

`axios.post(`${BASE_URL}/login/`, { <br />
    username: 'username', <br />
    password: 'password' <br />
}) <br />
.then((response) => { <br />
    const {data} = response <br />
    console.log(data) <br />
}) <br />
.catch(error => { <br />
    // handle error <br />
})` <br />

Sample success response <br />

`{ <br />
    success: true; <br />
    token: ''; // to be sent along all requests require quthorization <br />
    user: {...} // user details <br />
}` <br />

<h3> GET USER DETAIL: /users/user_id/ </h3> <br />
Method: GET <br />

NB: user_id is a unique identifier for the user which is gotten after a user has logged in <br />

`axios.get(`${BASE_URL}/users/${user_id}/`, { <br />
    headers: { <br />
        'Authorization': `Token ${token}`, <br />
        'Content-Type': 'application/json' <br />
    } <br />
    }) <br />
    .then(response => { <br />
    const {data} = response <br />
    console.log(data) <br />
    }) <br />
    .catch(error => { <br />
    console.log(error); <br />
})` <br />

<h3>GET SINGLE BLOG POST: /:id/</h3>

Method: GET <br />

<p>NB: id is a unique identifier for the user which is gotten after a post has been published.</p>

`axios.get(`${BASE_URL}/${id}/`, {<br />
    headers: {<br />
        'Authorization': `Token ${token}`, <br />
        'Content-Type': 'application/json' <br />
    } <br />
    }) <br />
    .then(response => { <br />
    const {data} = response <br />
    console.log(data) <br />
    }) <br />
    .catch(error => { <br />
    console.log(error); <br />
})` <br />

<h3>GET ALL BLOG POST: /posts/:id/</h3>
Method: GET

<p>NB: id is a unique identifier for the user which is gotten after a post has been published.</p>

`axios.get(`${BASE_URL}/posts/${id}/`, { <br />
    headers: { <br />
        'Authorization': `Token ${token}`, <br />
        'Content-Type': 'application/json' <br />
    } <br />
    }) <br />
    .then(response => { <br />
    const {data} = response <br />
    console.log(data) <br />
    }) <br />
    .catch(error => { <br />
    console.log(error); <br />
})` <br />

