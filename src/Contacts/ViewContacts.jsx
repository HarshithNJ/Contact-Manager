import React, { useEffect, useState } from 'react'
import "./styles/view.css"
import axios from 'axios'
import Print from './Print'
import { FadeLoader } from 'react-spinners'

const ViewContacts = () => {

  let [state, setState] = useState(null)

  let fetchData = async()=> {

    let contact = await axios.get(`http://localhost:4001/contacts`)

    setState(contact.data)

  }

  useEffect(()=> {
    fetchData();

  })

  return (
    <div>
      {
        state == null? (
            <FadeLoader />
        ) : (
          state.map((user)=> {

            return(
              <Print key ={user.id} {...user}></Print>
            )
          })
        )
      }
    </div>
  )
}

export default ViewContacts