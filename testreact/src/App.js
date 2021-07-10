
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
        <Greetings
              text1="SILENCE!"
              text2="I kill you!"
        />
      </main>
    </div>
  </>;
}

export default App;
