"use strict";

console.log('running');
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Indecision App"
    ),
    React.createElement(
        "p",
        null,
        "This is some info"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        )
    )
);
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Yuvaraj S"
    ),
    React.createElement(
        "p",
        null,
        "Age: 29"
    ),
    React.createElement(
        "p",
        null,
        "Location: Bengaluru"
    )
);
var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a compute",
    options: ['One', 'Two']
};
var templateThree = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateThree, appRoot);
