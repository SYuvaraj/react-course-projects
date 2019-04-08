console.log('running');
const template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
        <li>Item one</li>
        <li>Item two</li>
        </ol>
    </div>
);
const templateTwo = (
    <div>
        <h1>Yuvaraj S</h1>
        <p>Age: 29</p>
       <p>Location: Bengaluru</p>
    </div>
);
const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a compute",
    options: ['One','Two']
}
const templateThree = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(templateThree,appRoot);