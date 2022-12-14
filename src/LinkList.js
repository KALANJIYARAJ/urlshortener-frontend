import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { config } from './config';
import { Link, Navigate, useNavigate } from "react-router-dom";


function LinkList() {
    const[links, setLinks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
      }, []);
    
      let fetchData = async () => {
        try {
          const linkList = await axios.get(`${config.api}/linklist`);
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

  let redirect = async (urlId) =>{
    try{
      const redirect = await axios.get(`${config.api}/${urlId}`)  
      console.log(typeof(redirect.data))
      alert("Link redirect")
      navigate("https://pythontutor.com/visualize.html#mode=edit")
    }
    catch (error){
      alert("Link not redirect")
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
                <Link
                  to={`/${link.shortUrl}`}
                  // target="_blank"
                ><span onClick={() => redirect(link.shortUrl)}>http://localhost:3000/{link.shortUrl}</span>
                
                </Link>
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