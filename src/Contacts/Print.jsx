import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Print = ({c_name, email, phone, id}) => {

    let navigate = useNavigate();

    let deleteContact = async()=> {

        if(window.confirm("Are you sure you want to delete this contact?")) {
            
            try{

                await axios.delete(`http://localhost:4001/contacts/${id}`);
    
                alert("Contact Deleted Successfully");
                navigate("/view")
    
            }catch(err){
    
                console.log("Error Deleting The Contact", err);
    
                alert("Failed to Delete the Contact")
                
            }

        }
    }

  return (
    <div className='view'>
        <div className="display">
            <div id="head">
                <h2>{c_name}</h2>
            </div>
            <div id="sub">
                <p>{phone}</p>
                <p>{email}</p>
            </div>
        </div>
        <div className="btns">
            <Link to={`/edit/${id}`}><button><i className="fa-solid fa-pen-to-square"></i></button></Link>
            <button onClick={deleteContact}><i className="fa-solid fa-user-minus"></i></button>
        </div>
    </div>
  )
}

export default Print