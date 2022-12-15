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
<div class="row">
        {
        links.map((link) => {
        return(
        <div class="col-lg-4">
          <div class="card border-secondary mb-3" style={{ maxWidth: "18rem" }}>
            <div class="card-header">Total Click :{link.count}</div>
            <div class="card-body text-secondary">
              <h6 class="card-title">
                <a
                href={`http://localhost:3003/${link.shortUrl}`}
                > http://localhost:3003/{link.shortUrl}
                </a>
              </h6>
              <p class="card-text">{link.longUrl}</p>
              <button onClick={() => deleteUser(link._id)} className ="btn btn-danger">
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