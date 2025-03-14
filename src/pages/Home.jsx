import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState();

  const navigate=useNavigate()
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL)
      .then((response) => {
       
        setPosts(response.data.data);
      
      })
      .catch((err) => {
        setError(err.message);
        
      });
  }, []);
  const goToDetail=(id) => {
  navigate(`/${id}`)
}

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
              <button
              onClick={()=>goToDetail(post.id)}
                 className="btn btn-primary">
                Vai al post
               
              </button>
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

export default Home;
