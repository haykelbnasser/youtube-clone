import './App.css';
import Navbar from './components/Navbar'
import SuggestionVideos from './components/Suggestion'


function App() {
  return (
    <div className='container-fluid'>
      <Navbar/>
      <div className="row">
        <SuggestionVideos/>
      </div>
    </div>

  );
}

export default App;
