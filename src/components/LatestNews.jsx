import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useEffect,useState } from 'react';

const LatestNews = () => {
    
    const [slider, setSlider] = useState()
    useEffect(() => {
      const fetchData = async() => {
        const response = await fetch('../data.json')
        const data =  await response.json()
  console.log(data.slider[0]);
        setSlider(data?.slider) 
      }
      fetchData()
    },[])
  
    console.log(slider);
  

    return(
        <div className="container">
            <h1></h1>
            <p></p>
            <div className="d-flex mx-5 my-5">
            <Card style={{ width: '22rem', height: '30rem' }} className="mx-3">
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="dark">Read More</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '22rem', height: '30rem' }} className="mx-3">
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="dark">Read More</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '22rem', height: '30rem' }} className="mx-3">
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="dark">Read More</Button>
                </Card.Body>
            </Card>
          </div> 
        </div>
    )
  
}

export default LatestNews;






