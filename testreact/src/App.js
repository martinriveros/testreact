
import './App.css';
import {NavBar} from './components/navBar/navBar.js'
import {Greetings} from './components/navBar/itemListContainer.js'

function App() {
  return <>
    <div className="App-container">
      <header className="App-header">
        <NavBar/>
      </header>
      <main className='silence'>
        <Greetings/>
      </main>
    </div>
  </>;
}

export default App;
