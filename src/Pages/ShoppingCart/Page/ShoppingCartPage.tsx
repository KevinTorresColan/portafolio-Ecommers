import React, { useContext, useEffect } from 'react';
import './shoppingCartPage.scss';
import Layout from '../../../Components/Layout/Layout'
import FooterComponent from '../../../Components/FooterComponent/FooterComponent';
import { ItemsComponent, ResumenComponent } from '../Components';
import { ShoppingCartContext } from '../../../Context';
import { goToTop } from '../../../Util';
import { ActionSection } from '../Sections';

const ShoppingCartPage = () => {
  const { itemsCart, totalPrice, buyItems } = useContext(ShoppingCartContext);

  useEffect(() => {
    goToTop();
  }, [])
  
  return (
    <>
      <Layout className='p_cart__container '>
        <h2 className='p_cart__title'>Carrito de compras</h2>
        <article className='p_cart__wrap'>
          <ItemsComponent className='p_cart__wrap-items'/>
          <ResumenComponent quantityProducts={itemsCart.length} total={totalPrice} className='p_cart__wrap-resumen'/>
        </article>
        <ActionSection buyItems={buyItems} disabled={itemsCart.length === 0} />
      </Layout>
      <FooterComponent/>
    </>
  )
}

export default ShoppingCartPage;