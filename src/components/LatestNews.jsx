import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useEffect,useState } from 'react';

const LatestNews = () => {
    
    const [latestnews, setLatestnews] = useState()
    useEffect(() => {
      const fetchData = async() => {
        const response = await fetch('../data.json')
        const data =  await response.json()
        setLatestnews(data?.latestnews) 
      }
      fetchData()
    },[])
  
  

    return(
      <div className="my-5 about">
         <h1 className="text-center fw-bold fs-1">Latest News</h1>
          <p className="text-center fs-5 my-3">Torem ipsum dolor sit amet, consectetur adipisicing elitsed do<br/> eiusmo tempor incididunt ut labore</p>
          <div className='container d-md-flex'>
        {latestnews?.map((item,key)=> (
          
          <Card className='mx-2 my-2'>
            <Card.Img  src={item?.image}/>
              <Card.Body>
                <Card.Title className="fw-bold">{item?.title}</Card.Title>
                  <Card.Text className='mb-3 overflow-hidden py-2'>
                  {item?.description}
                  </Card.Text>
                  <Button variant="dark" className="l-news">Read More</Button>
              </Card.Body>
          </Card>
      
      ))}
          </div>
        
        </div>    
    )
  
}

export default LatestNews;






