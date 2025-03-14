import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/posts/')
      .then((response) => {
       
        setPosts(response.data.data);
        setLoading(false); // Set loading to false when the data is fetched
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false); // Ensure loading is turned off even on error
      });
  }, []);


  return (
    <>
      <div className="container">
      {
      
       posts.length > 0 ? (
        posts.map((post) => (
          <div className="card" key={post.id}>
            <div className="card-header">{post.title}</div>
            <div className="card-body">
              <h5 className="card-title">{post.author}</h5>
              <p className="card-text">{post.content}</p>
              <a href={post.id} className="btn btn-primary">
                Vai al post
              </a>
            </div>
          </div>
        ))
      ) : (
        <h1>errore nella paginazione dei post</h1> 
        )}
              </div>
    </>
      );

}

export default App;
