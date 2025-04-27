import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./styles/add.css"

const AddContact = () => {

    let navigate = useNavigate()

    let [contact, setContact] = useState({
        c_name : "",
        email : "",
        phone : "",
        dob : ""
    })

    let handleContact = (user)=> {
        let {name, value} = user.target

        setContact({...contact, [name]:value})
    }


    let {c_name, email, phone, dob} = contact
    let handleSubmit = async(user)=>{
        user.preventDefault()

        try{
            let mobile = {c_name, email, phone, dob}
            let data = await axios.post(`http://localhost:4001/contacts`, mobile)

            navigate("/view")

            console.log(data);
            
        }catch(err){
            console.log("Contact Creation Failed");
            
        }
    }
  return (
    <div className='add'>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="c_name">Name : </label>
                <input type="text" name="c_name" id="" required onChange={handleContact}/>
            </div>
            <div>
                <label htmlFor="email">Email : </label>
                <input type="email" name="email" id="" required onChange={handleContact}/>
            </div>
            <div>
                <label htmlFor="phone">Phone Number : </label>
                <input type="number" name="phone" id="" required onChange={handleContact}/>
            </div>
            <div>
                <label htmlFor="dob">Date Of Birth : </label>
                <input type="date" name="dob" id="" onChange={handleContact}/>
            </div>

            <button>Add Contact</button>
        </form>
    </div>
  )
}

export default AddContact