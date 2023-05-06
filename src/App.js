import './App.css';
import Album from './components/Album';
import { albumData } from './data';

function App() {
  return (
    <div className="App">
      <h1>My Music Album Collection</h1>
      <div className="album-collection">
        <Album data={albumData[0]} />
        <Album data={albumData[1]} />
        <Album data={albumData[2]} />
        <Album data={albumData[3]} />
      </div>
    </div>
  );
}

export default App;
