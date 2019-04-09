console.log('App.js is running!');

//create app object title/subtitle
//user title/subtitle in template
//render template

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['option1','option2']
};

//JSX - JavaScript XM!
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
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
const userName = 'Mike';
let userAge = 27;
let userLocation = 'Bangalore';

function getLocation(location){
   if(location)
    return <p>{location}</p>;
}
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        { user.age && user.age >=18 && <p>Age: {user.age}</p> }
        <p>Location: {user.location}</p>
        {getLocation(user.location)}
    </div>
);
const appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);