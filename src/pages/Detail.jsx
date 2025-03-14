import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Detail() {
    const { id } = useParams();
    const [currentPost, setCurrentPost] = useState([]);

    const [error, setError] = useState(null);
    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_URL}${id}`)
            .then((response) => {
          
            
               
          
                setCurrentPost(response.data.post);
    
       
            })
            .catch((err) => {
                setError(err.message);
        
            });
    }, [id]);
console.log(currentPost);

  
    if (error) {
        return <h2>Errore: {error}</h2>;
    }

 

    return (
      
        <>
     {currentPost && currentPost.type.name? <div className="card" style={{ width: '18rem' }}>
        <div className="card-header">
        {currentPost.title}
      </div>
      <div className="card-body">
        <h5 className="card-title">Autore: {currentPost.author}</h5>
        <p className="card-text">{currentPost.content}</p>
        <p className="card-text">
          <strong>Tipo:</strong> {currentPost.type.name}
        </p>

        <div>
          <h6>Tecnologie:</h6>
          <div className="d-flex">
            {currentPost.technologies.map((tech, index) => (
              <span
                key={index}
                className="badge me-2"
                style={{ backgroundColor: tech.color }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
       
      </div>
    </div>  : <h1>caricamento post</h1>}
        
        </>
  );
}

export default Detail;
