import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/topics/4/articles')
      .then(response => response.json())
      .then(topics => setTopics(topics.data));
  }, []);

  return (
    <div className="App">
      Topics

      {topics.map(topic => <div key={topic.id}>
        <h1>{topic.title}</h1>
        <p>{topic.content}</p>
      </div>)}
    </div>
    // <Routes>
    //   <Route exact path="/topics" componet="fals;kdjf">
    //   <Route default component={<Homepage />}
    // </Routes>
  );
}

export default App;
