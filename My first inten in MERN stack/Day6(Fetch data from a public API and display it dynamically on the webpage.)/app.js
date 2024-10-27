// app.js

function fetchData() {

    fetch('https://jsonplaceholder.typicode.com/users/')

        .then(response => response.json())

        .then(data => {

            console.log(data);

        })

        .catch(error => {

            console.error('Error:', error);

        });

}

fetchData();

// app.js

function fetchData() {

    fetch('https://jsonplaceholder.typicode.com/users/')

        .then(response => response.json())

        .then(data => {

            displayData(data);

        })

        .catch(error => {

            console.error('Error:', error);

        });

}

function displayData(data) {

    const resultContainer = document.createElement('div');

    resultContainer.innerHTML = `<h2>Title: ${data.title}</h2>

                                <p>Completed: ${data.completed}</p>`;

    document.body.appendChild(resultContainer);

}


// app.js

function fetchDataById(id) {

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

        .then(response => response.json())

        .then(data => {

            displayData(data);

        })

        .catch(error => {

            console.error('Error:', error);

        });

}

function displayData(data) {

    const resultContainer = document.createElement('div');

    resultContainer.innerHTML = `<h2>Title: ${data.title}</h2>

                                <p>Completed: ${data.completed}</p>`;

    document.body.appendChild(resultContainer);

}

const inputId = prompt('Enter task ID:');

fetchDataById(inputId);