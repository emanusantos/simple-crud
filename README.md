# Simple CRUD Application

This is an application that I made so I could get more used to back-end development and MySQL. It is built with CRUD (Create, Read, Update, Delete) principles.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [How to run](#how-to-run)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

The app consists in an clientside and serverside version. This repository shows the clientside. For more information about the serverside, you can find it here, on my github.
For this clientside, I used ReactJS, NodeJS, Styled Components, MySQL, Axios and Express. In the index, the user can find some inputs and fill them. When the 'Add employee' 
button is clicked, the information typed on the input fields are storaged on a MySQL table, and the user can see it by clicking in the 'Show employees' button.

### How to run

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Screenshot

![Screenshot](https://i.ibb.co/KW32sQg/crud.jpg)

## My process

### Built with

- [React](https://reactjs.org/) - JavaSript library
- [Node](https://nodejs.org/en/) - NodeJS
- [Express](https://expressjs.com/pt-br/) - Express
- [Axios](https://www.npmjs.com/package/axios) - Axios
- [Styled-components](https://styled-components.com/) - Styled Components
- [MySQL](https://www.mysql.com/) - MySQL


### What I learned

This was my first experience with Axios, MySQL database and a backend built by myself.


```Proud of this snippet:

   const addEmployee = () => {
    Axios.post('http://localhost:3001/create', {
      name: name, 
      age: age, 
      country: country, 
      position: position, 
      wage: wage
    }).then(() => {
      setEmployeeList([...employeeList, 
        {
        name: name, 
        age: age, 
        country: country, 
        position: position, 
        wage: wage
      },
      ]);
    })
  }

  const getEmployees = () => {
    Axios.get('http://localhost:3001/employees').then((response) => {
      setEmployeeList(response.data);
    })
  }

```

### Continued development

I hope to keep going building my own backend and using databases more often.

## Author

- [LinkedIn](https://www.linkedin.com/in/emanuelmsantos)