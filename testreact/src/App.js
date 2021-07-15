
import './App.css';
import {NavBar} from './components/navBar/navBar'
import {Greetings} from './components/navBar/itemListContainer'
import {ItemCount} from  './components/contador'
import {GetData} from './components/ajax'

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
        <ItemCount/>
        <GetData/>
      </main>
    </div>
  </>;
}

export default App;
