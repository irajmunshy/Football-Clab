import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Information from './components/Information/Information';

function App() {
  return (
    <div>
      <div className="header">
        <div>
          <h2>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMXB56z4J50JKzzW-KvdwRjLbGEhVeDlYy1w&usqp=CAU" alt=""/>
            LiverPool
          </h2>
        </div>

        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">contact</a>
        </nav>
      </div>

      <div className="club-name">
        <h1>LiverPool Football Club</h1>
      </div>

      <div className="container">
        <Information></Information>
      </div>
    </div>
  );
}

export default App;
