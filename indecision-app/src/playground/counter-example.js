let count = 0;
const someId = 'myidhere'
const addOne = () => {
    count++;
    renderCounterApp();
    console.log('addOne',count);
};
const minusOne = () => {
    count--;
    console.log('minusOne');
    renderCounterApp();
};
const resetBtn = () => {
    console.log('Reset');
    count = 0;
    renderCounterApp();
};

const renderCounterApp = () =>{
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick = {addOne} id={someId} className="button">+1</button>
            <button onClick = {minusOne} className="button">-1</button>
            <button onClick = {resetBtn} className="button">Reset</button>
        </div>
   );
  
}

renderCounterApp();
