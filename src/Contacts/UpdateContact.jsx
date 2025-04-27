import React, { useEffect, useState } from 'react'
import "./styles/add.css"
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const UpdateContact = () => {

  let navigate = useNavigate()

  let [contact, setContact] = useState({
      c_name : "",
      email : "",
      phone : "",
      dob : ""
  })

  let {id} = useParams();

  let {c_name,email,phone,dob} = contact

  let handleContact = (user)=> {
      let {name, value} = user.target

      setContact({...contact, [name]:value})
  }

  useEffect(()=> {

    let editData = async ()=> {

        let data = await axios.get(`http://localhost:4001/contacts/${id}`)
    }
  }, [id])

  let handleSubmit = async(user)=>{
      user.preventDefault()

      try{
          let mobile = {c_name, email, phone, dob}
          let data = await axios.put(`http://localhost:4001/contacts`, mobile)

          navigate("/view")

          console.log(data);
          
      }catch(err){
          console.log("Failed to Update The Contact");
          
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
              <input type="number" name="phone" id="" value={phone} readOnly onChange={handleContact}/>
          </div>
          <div>
              <label htmlFor="dob">Date Of Birth : </label>
              <input type="date" name="dob" id="" onChange={handleContact}/>
          </div>

            <button>UPDATE</button>
      </form>
  </div>
  )
}

export default UpdateContact