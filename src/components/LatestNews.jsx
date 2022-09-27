import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useEffect,useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const LatestNews = () => {
    
    const [latestnews, setLatestnews] = useState()
    useEffect(() => {
      const fetchData = async() => {
        const response = await fetch('../data.json')
        const data =  await response.json()
  console.log(data.latestnews[0]);
        setLatestnews(data?.latestnews) 
      }
      fetchData()
    },[])
  
    console.log(latestnews);
  

    return(
      <div className="container my-5 ">
         <h1 className="text-center fw-bold fs-1">Latest News</h1>
          <p className="text-center fs-5 my-3">Torem ipsum dolor sit amet, consectetur adipisicing elitsed do<br/> eiusmo tempor incididunt ut labore</p>
          <Row xs={1} md={3} className="g-4 my-3 " style={{height: '30rem'}}> 
       
      {latestnews?.map((item,key)=> (
          <Col>
            <Card >
              <Card.Img  src={item?.image}/>
                <Card.Body>
                  <Card.Title className="fw-bolder fs-6">{item?.title}</Card.Title>
                    <Card.Text className='mb-3 overflow-hidden py-2'>
                    {item?.description}
                    </Card.Text>
                    <Button variant="dark" className="l-news">Read More</Button>
                </Card.Body>
            </Card>
          </Col>
        ))}
          
          </Row>
        </div>    
    )
  
}

export default LatestNews;






