import React from 'react'
import { useEffect,useState  } from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
const About = () => {
  const [data,setData] = useState()
  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch('./data.json')
      const data = await response.json()
      setData(data?.about)
    }
    fetchData()
  },[])

  return (
    <div className='about'>
      <p className='text-dark text-center fs-1 pt-5'>About US </p>
      <div className='text-center mb-3  py-3 d-flex justify-content-center '>
        <Breadcrumb>
          <Link href="#" className='px-2 text-decoration-none aboutTitle text-uppercase'>Home </Link>{" / "}
            <Link className='px-2 text-decoration-none  aboutTitle text-uppercase'> About </Link>
          </Breadcrumb>
      </div>
      <div className='aboutSection bg-white px-2 mx-2 py-5 my-5'>
          <p className='text-justify aboutTitle2  px-5'>Furns is a global furniture destination for somethings. We sell cutting-edge furniture and offer a wide variety of fashion-related content.</p>
          <div className='d-md-flex'>
          {data?.map((item) => (
            <Card className='aboutCard col-md-6 mb-2 border-0'>
            <Card.Img variant="top" className='aboutImage my-3 px-3' src={item?.image} />
            <Card.Body>
                <Card.Title className='fw-bold text-uppercase'>{ item?.title }</Card.Title>
                <Card.Text>
                  {item?.description}
              </Card.Text>
            </Card.Body>
          </Card>
          ))}
            
        
        </div>   
      </div>
    </div>
  )
}

export default About;