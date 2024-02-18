/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useRef, useState } from 'react'; 
import { categories } from '../../../../Mock';
import { formatNumber } from '../../../../Util';
import './productsComponent.scss';
import { Pagination } from "@mui/material";
import { AutocompleteComponent, ButtonComponent } from '../../../../Components';
import { useHandleProductsHook } from '../../../../Hooks';
import { ShoppingCartContext } from '../../../../Context';

const ProductsComponent = () => {
  const { addItemCart } = useContext(ShoppingCartContext);
  const { data, changeCategory, countData, currentPage, handleChangePage, handleChangeCurrentPage } = useHandleProductsHook();
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const tituloRef = useRef<HTMLHeadingElement>(null);

  const handleChangeCategory = (event: any, value: any) => {
    setSelectedCategory(value);
    handleChangeCurrentPage(1);
  };

  const goToTitulo = () => tituloRef.current && tituloRef.current.scrollIntoView({ behavior: 'smooth', });

  const changePagePagination = (event: any, pageNumber: any) => {
    goToTitulo();
    handleChangePage(event, pageNumber);
  }

  useEffect(() => {
    changeCategory(selectedCategory?.id)
  }, [selectedCategory, currentPage]);

  const loadImage = (entradas: any) => {
    entradas.forEach((entrada: any) => entrada.isIntersecting && entrada.target.classList.add('visible') );
  }
  
  useEffect(() => {
    const products = document.getElementById('products');

    const observador = new IntersectionObserver(loadImage, {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.1
    });

    observador.observe(products as any);
  }, []);

  return (
    <section className={`products`} id='products'>
      <h5 className='products__text' ref={tituloRef} >Compra ahora</h5>
      <div className='products__autocomplete'>
        <AutocompleteComponent 
          value={selectedCategory} 
          options={categories} 
          onChange={handleChangeCategory}
        />
      </div>
      <article className='products__list'>
        {data?.map((product, i: number) => (
          <div className="products__list-card" key={product?.id}>
            <div className='products__list-card-image'>
              <img src={product?.img} alt={product?.brand} />
            </div>
            <span className='products__list-card-brand'>{product?.brand}</span>
            <h3 className='products__list-card-name'><strong>{product?.name}</strong></h3>
            <h3 className='products__list-card-price'><strong>{formatNumber(product?.price)}</strong></h3>
            <div className='products__list-card-btn'>
              <ButtonComponent onClick={() => addItemCart(product)} name='Agregar al carrito'/>
            </div>
          </div>
        ))}
      </article>
      {(<div className='products__pagination'>
        <Pagination
          count={countData}
          color="primary"
          page={currentPage}
          onChange={changePagePagination}
        />
      </div>)}
    </section>
  )
}

export default ProductsComponent;