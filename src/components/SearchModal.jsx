import React, { useEffect , useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaSistrix } from 'react-icons/fa'
import Button from 'react-bootstrap/Button'
import {  useNavigate,Link } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import {searchItem} from '../app/redux/cartSlice'
function SearchModal({ show, showFunc }) {
  const [input,setInput] = useState()
  const navigate = useNavigate()
      const dispatch = useDispatch()
      const [product, setProduct] = useState()
      const [products, setProducts] = useState()
       useEffect(() => {
          const fetchData = async () => {
          const response = await fetch('../data.json')
          const data = await response.json()
          setProducts((Object.values(data?.products))
              .filter((x) => Array.isArray(x))
              .flat()
          )
      }
      fetchData()
      setProduct((products?.filter((prod) => prod.name.toLowerCase().includes(input.toLowerCase()))))
      // eslint-disable-next-line
  }, [input])
  
      const search = () => {
      showFunc(!show)
      dispatch(
        searchItem(
          {
            search: { product }
          }
        )
      )
      navigate('/search')
  } 
  
  return (
    <Modal
    size="lg"
    show={show}
    onHide={() => showFunc()}
    aria-labelledby="example-modal-sizes-title-lg"
    className='myModal'
  >
    <Modal.Header closeButton>
      <Modal.Title id="example-modal-sizes-title-lg">
        Search
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter your search keyword.."
          aria-label=""
          aria-describedby="basic-addon2"
            className='modalInput'
            value={input}
            onChange={(e)=>setInput(e.target.value)}
                      
        />
        <Button className='modalButton' id="button-addon2" onClick={()=>search()}>
          <Link className='modalLink' to='/search' ><FaSistrix /></Link>
        </Button>
      </InputGroup>
    </Modal.Body>
  </Modal>
  )
}

export default SearchModal