import { useState } from "react";
import { cellphoneData, tvData } from "../Mock";
import { IProduct } from "../Interface";

export const useHandleProductsHook = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [countData, setCcountData] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const paginateData = (data: IProduct[], pageSize: number, pageNumber: number) => {
    setCcountData(Math.ceil(data.length / pageSize));
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, data.length);
    return data.slice(startIndex, endIndex);
  }

  const handleChangeCurrentPage = (page: number) => setCurrentPage(page)

  const handleChangePage = (event: any, pageNumber: any) => handleChangeCurrentPage(pageNumber);

  const changeCategory = (categoryId: number) => {
    if(categoryId === 1) setData(paginateData(tvData, pageSize, currentPage));
    else setData(paginateData(cellphoneData, pageSize, currentPage));
  };
  
  return {
    data,
    countData,
    currentPage,
    handleChangePage,
    handleChangeCurrentPage,
    changeCategory,
  }
};