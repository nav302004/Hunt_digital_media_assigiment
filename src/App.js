import Table from './components/table';
import './App.css';
import Modal from './UI/Modal';

function App() {
  return (
    <div className="App">
      <Modal/>
      {/* Adding main table here */}
      <Table/>
    </div>
  );
}

export default App;
