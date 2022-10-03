import { useSelector } from 'react-redux';
import WishlistItem from '../components/WishlistItem';
import { BiShoppingBag } from 'react-icons/bi'
const Wishlist = () => { 
  const state = useSelector(state => state.cart)
  return (

    <><div className="wish about">
      <p className='text-center py-5 fs-1'>Wishlist</p>
    </div><div className='container'>
        <div className='d-md-flex flex-wrap justify-content-center'>

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