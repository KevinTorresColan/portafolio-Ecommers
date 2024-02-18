import React from 'react';
import './resumenComponent.scss';
import { formatNumber } from '../../../../Util';

interface Props {
  quantityProducts: number;
  total: number;
  className?: string;
}

const ResumenComponent = ({ quantityProducts, total, className }: Props) => {
  return (
    <section className={`c_resumen__container ${className}`}>
      <article className='c_resumen__wrap'>
        <div className='c_resumen__thead'>
          <h2>Resumen de pedido</h2>
          <p>{`${quantityProducts} Producto${quantityProducts > 1 ? 's' : '' }`}</p>
        </div>
        <div className='c_resumen__tbody'>
          <p>Total Pedido</p>
          <h2>{ formatNumber(total) }</h2>
        </div>
      </article>
    </section>
  )
}

export default ResumenComponent; 