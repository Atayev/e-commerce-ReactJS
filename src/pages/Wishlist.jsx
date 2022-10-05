import { useSelector } from 'react-redux';
import WishlistItem from '../components/WishlistItem';
import { BiShoppingBag } from 'react-icons/bi'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import {Link} from 'react-router-dom'
const Wishlist = () => { 
  const state = useSelector(state => state.cart)
  return (

    <><div className="about text-center">
      <p className='pt-5 fs-1'>Wishlist</p>
      <div className='text-center d-flex justify-content-center pb-3'>
      <Breadcrumb>
                    <Link href="#" className='px-2 text-decoration-none aboutTitle text-uppercase ' >Home </Link>{" / "}
                      <Link className='px-2 text-decoration-none  aboutTitle text-uppercase '>Wishlist</Link>
      </Breadcrumb>
      </div>
    </div><div className='container'>
        <div className='d-md-flex flex-wrap justify-content-center my-5'>

          {state.wishList?.length > 0 ? state?.wishList?.map((wish) => (
            <WishlistItem
              id={wish.id}
              name={wish.name}
              images={wish.images}
              price={wish.price}
              category={wish.category} />
          )) : <div className='text-center'><BiShoppingBag className='iconSett mt-5 mb-3'/><p className='fs-4'>There are no products in your wishlist!</p></div>}
        </div>
      </div></>

  )
}

export default Wishlist