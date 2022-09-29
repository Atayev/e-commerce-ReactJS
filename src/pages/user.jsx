import React from 'react';
import { useEffect,useState } from 'react';
import Col from 'react-bootstrap/Col';
import './user.css';


const User = () => {
    const [user, setUser] = useState()
    useEffect(() => {
      const fetchData = async() => {
        const response = await fetch('../data.json')
        const data =  await response.json()
        setUser(data?.user) 
      }
      fetchData()
    },[])
    
  return (
    <div className="user">
        <Col>
        <ul>
        {user?.map((item,key)=> (
                    <li>
                        <a href="#" className="align-items-center">{item}</a>
                    </li>
                   
        ))}
        </ul> 
          </Col>
    </div>
  )
}

export default User;



    