import React, { useContext } from 'react';
import './itemsComponent.scss';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip'
import { formatNumber } from '../../../../Util';
import { ShoppingCartContext } from '../../../../Context';
import { ICONS } from '../../../../Common';

interface Props {
  className?: string;
}

const ItemsComponent = ({  className }: Props) => {
  const { itemsCart, removeItemCart, increaseQuantity, decreaseQuantity } = useContext(ShoppingCartContext);

  return (
    <section className={`c_items__container ${className}`}>
      {itemsCart.length > 0 ? (
        itemsCart?.map(item => (
          <article className='c_items__item' key={item?.id}>
            <div className='c_items__item_img'>
              <img src={item.img} alt="img" />
            </div>
            <div className='c_items__item_texts'>
              <div>
                <span className='c_items__item_texts-brand'>{item?.brand}</span>
                <h3 className='c_items__item_texts-name'><strong>{item?.name}</strong></h3>
              </div>
              <div className='c_items__item_texts-wrap'>
                <h3 className='c_items__item_texts-price'><strong>{formatNumber(item?.price)}</strong></h3>
                <div className='c_items__item_texts-btns'>
                  <IconButton aria-label="Remover" onClick={() => decreaseQuantity(item?.id)} disabled={item?.quantity <= 1}>
                    <ICONS.REMOVE/>
                  </IconButton>
                  <span>{item?.quantity}</span>
                  <IconButton aria-label="Agregar" onClick={() => increaseQuantity(item?.id)}>
                    <ICONS.ADD/>
                  </IconButton>
                </div>
              </div>
            </div>
            <div className='c_items__item_delete'>
              <Tooltip title="Eliminar">
                <IconButton aria-label="Eliminar" onClick={() => removeItemCart(item?.id)}>
                  <ICONS.DELETE/>
                </IconButton>
              </Tooltip>
            </div>
          </article>
        ))
      ) : (
        <p>No hay productos en tu carrito de compras.</p>
      )}
    </section>
  )
}

export default ItemsComponent;