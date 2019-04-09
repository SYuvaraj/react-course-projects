'use strict';

console.log('App.js is running!');

//create app object title/subtitle
//user title/subtitle in template
//render template

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'
};

//JSX - JavaScript XM!
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item onee'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var user = {
    name: 'Yuvaraj',
    age: 26,
    location: 'Bangalore'
};
var userName = 'Mike';
var userAge = 27;
var userLocation = 'Bangalore';
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
