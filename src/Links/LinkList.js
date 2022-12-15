import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { config } from '../config';
import { UserContext } from '../UserContext';

function LinkList() {
  const { links, setLinks} = useContext(UserContext);
    const { user} = useContext(UserContext);

    useEffect(() => {
        fetchData();
      }, []);
    
      let fetchData = async () => {
        try {
          const linkList = await axios.get(`${config.api}/linklist/${user._id}`);
          setLinks(linkList.data);
        } catch (error) {
          alert("Error");
        }
      };

      
  let deleteUser = async (linkId) =>{
    try{
      await axios.delete(`${config.api}/delete/${linkId}`)
     alert("Link Deleted Successfully")
     fetchData()
    }
    catch (error){
      alert("Link Can't Deleted")
    }
  }


  return (
<div className="row">
        {
        links.map((link) => {
        return(
        <div className="col-lg-4">
          <div className="card border-secondary mb-3" style={{ maxWidth: "18rem",height:"18rem" }}>
            <div className="card-header">Total Click :{link.count}</div>
            <div className="card-body text-secondary">
              <h6 className="card-title">
                <a
                href={`${config.api}/${link.shortUrl}`}
                > {config.api}/{link.shortUrl}
                </a>
              </h6>
              <p className="card-text">{link.longUrl}</p>
              <button onClick={() => deleteUser(link._id)} className ="btn btn-danger mt-5">
                        Remove
                      </button>
            </div>
          </div>
        </div>
        )
         })}
       </div>
   
  
  )
}

export default LinkList