import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <div className="app__body">
      {/* contains wtsapp sidebar*/}
      <Sidebar/>
       {/* also contains wtsapp chat window open*/}
      </div>
    </div>
  );
}

export default App;
