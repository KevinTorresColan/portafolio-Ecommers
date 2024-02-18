/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { createContext, FC, useEffect, useState } from "react";
import { IItemBuy, IItemCart, IProduct } from "../Interface";

const initialValue = {
  itemsCart: [{
    id: 0,
    brand: '',
    name: '',
    price: 0,
    img: '',
    quantity: 0,
  }],
  itemsBuy: [{
    id: 0,
    brand: '',
    name: '',
    price: 0,
    img: '',
    quantity: 0,
    date: '',
  }],
  addItemCart: (item: IProduct) => {},
  removeItemCart: (itemId: number) => {},
  increaseQuantity: (itemId: number) => {},
  decreaseQuantity: (itemId: number) => {},
  totalPrice: 0,
  buyItems: (date: string) => {},
};

const ShoppingCartContext = createContext(initialValue);

const ShoppingCartProvider: FC<React.PropsWithChildren> = ({ children }) => {
  const [itemsCart, setItemsCart] = useState<IItemCart[]>([]);
  const [itemsBuy, setItemsBuy] = useState<IItemBuy[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const addItemCart = (item: IProduct) => {
    const existingItemIndex = itemsCart.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...itemsCart];
      updatedCart[existingItemIndex].quantity += 1;
      setItemsCart(updatedCart);
    } else {
      const newItem = { ...item, quantity: 1 };
      setItemsCart([...itemsCart, newItem]);
    }
  };

  const removeItemCart = (itemId: number) => {
    const updatedCart = itemsCart.filter((item) => item.id !== itemId);
    setItemsCart(updatedCart);
  };

  const increaseQuantity = (itemId: number) => {
    const updatedCart = itemsCart.map((item) => item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item);
    setItemsCart(updatedCart);
  };

  const decreaseQuantity = (itemId: number) => {
    const updatedCart = itemsCart.map((item) => item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item);
    setItemsCart(updatedCart);
  };

  const calculateTotalPrice = () => {
    let totalPriceItems = 0;
    itemsCart?.forEach((item) => {
      totalPriceItems += item.price * item.quantity;
    });
    setTotalPrice(totalPriceItems)
  };

  const buyItems = async (date: string) => {
    const buyItem = itemsCart?.map((item) => ({ ...item, date }));
    
    setItemsBuy([...itemsBuy, ...buyItem]);
    setItemsCart([]);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [itemsCart]);

  const values = {
    itemsCart,
    addItemCart,
    removeItemCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
    itemsBuy,
    buyItems
  }

  return (
    <ShoppingCartContext.Provider value={values}>{children}</ShoppingCartContext.Provider>
  );
}

export { ShoppingCartContext };
export default ShoppingCartProvider;