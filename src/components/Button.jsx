import React from 'react'
import Button from 'react-bootstrap/Button';
const ButtonS = ({value,clickProp}) => {
  
  return (
    <Button className='bg-btn' onClick={clickProp}>
      {value}
    </Button>
  )
}

export default ButtonS