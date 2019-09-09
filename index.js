const axios = require('axios');

let todos;

axios.get('https://hlv7793ve8.execute-api.us-east-1.amazonaws.com/jsontest')
    .then((response) => {
        todos = response.data;
        console.log(todos[0].name);
    })
    .catch((err) => console.log(err));

