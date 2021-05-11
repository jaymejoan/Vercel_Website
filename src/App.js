// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <p>My name is Bea!</p>
//       </header>
//     </div>
//   );
// }

// export default App;

// step 10
import React, { useState, useEffect } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';


const App = () => {
  // Initialize state
  const [ projects, setProjects ] = useState([]);

  // Get projects
  useEffect(() => {
    fetch('/api/projects')
          .then(res => res.json())
          .then(projects => setProjects(projects));
  },[]);

  return (
      <div className="App">

          <h1>Hi, my name is Bea</h1>
          <h3>I'm a software engineer</h3>

          <h4>Here are a few of my projects</h4>

          {
              projects.length ? (
                  projects.map((project) => (
                    <div style={{padding: 10}} key={project.name}>
                    <Button 
                        variant="contained"
                        color="secondary"
                        href={project.html_url}>
                        {project.name}
                    </Button>
                </div>
                  ))
              ) : (
                  <div>
                      Loading projects..
                  </div>
              )
          }

        <Button variant="outlined" size="large">Default</Button>
        <Button  variant="outlined" color="primary" size="small">Primary</Button>
        <Button  variant="outlined" color="secondary">Secondary</Button>
        <Button onClick={() => { alert('Heyo, you clicked?') }}>Click me</Button>
      </div>
  );
}

export default App;
