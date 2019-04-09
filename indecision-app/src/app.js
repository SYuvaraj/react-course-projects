console.log('App.js is running!');

//create app object title/subtitle
//user title/subtitle in template
//render template

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'
};

//JSX - JavaScript XM!
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item onee</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name: 'Yuvaraj',
    age: 26,
    location: 'Bangalore'
}
var userName = 'Mike';
var userAge = 27;
var userLocation = 'Bangalore';
var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);