import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useEffect,useState } from 'react';

const LatestNews = () => {
    
    const [news, setNews] = useState()
    useEffect(() => {
      const fetchData = async() => {
        const response = await fetch('../data.json')
        const data =  await response.json()
        setNews(data?.latestnews);
        
      }
      fetchData()
    },[])
  
    console.log(news)
  

    return(
        <div className="container">
            <h3 className='text-center my-3'>Latest news</h3>
            <p></p>
        <div className="d-md-flex mx-5 my-5">
            { news?.map((item,key) => (
                <Card className="mx-3 my-5">
                  <Card.Img variant="top" src={item?.image} />
                    <Card.Body>
                      <Card.Title>{item?.title}</Card.Title>
                        <Card.Text>
                        {item?.description}
                        </Card.Text>
                        <button className='bg-btn'>Read more</button>
                    </Card.Body>
                </Card>
              ))
                }
          </div> 
        </div>
    )
  
}

export default LatestNews;






