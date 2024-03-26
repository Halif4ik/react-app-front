import React from 'react';


function App() {
   return (
       <div className="App">
          {/*<header className="App-header">
             <img src='https://avatars.githubusercontent.com/u/36826663?v=4' style="    width: 100px;"
                  className="w-1/5 h-1/5" alt="logo"/>
             Learn ReactJS
          </header>*/}
          <Todolist/>
          <Todolist/>
          <Todolist/>
       </div>
   );
}

function Todolist() {
   return <div className="border py-2 px-2 rounded m-2 hover:shadow-md hover:bg-gray-100 transition-all">
      <h3> What to learn 1</h3>
      <div><input type="text"/>
         <button>+</button>
      </div>
      <ul>
         <li><input type="checkbox" checked={true}/> <span>HTML+CSS</span></li>
         <li><input type="checkbox" checked={true}/> <span>JS</span></li>
         <li><input type="checkbox" checked={false}/> <span>React</span></li>
      </ul>
      <div>
         <button>All</button>
         <button>Active</button>
         <button>Completed</button>
      </div>
   </div>;
}

export default App;
