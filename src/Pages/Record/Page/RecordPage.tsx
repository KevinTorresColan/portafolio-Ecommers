/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import './recordPage.scss';
import { Box } from "@mui/material";
import Layout from '../../../Components/Layout/Layout';
import { getTodayDate, goToTop } from '../../../Util';
import { ShoppingCartContext } from '../../../Context';
import { useResumenHook } from '../../../Hooks';
import { FilterComponent, TableComponent } from '../Components';

const RecordPage = () => {
  const { itemsBuy } = useContext(ShoppingCartContext);
  const { filteredItems, handleSearch } = useResumenHook();
  const [data, setData] = useState({
    startDate: getTodayDate(),
    endDate: getTodayDate(),
  });

  const handleInputChange = ({ target }: any) => {
    setData({ ...data, [target.name]: target.value });
  };

  useEffect(() => {
    goToTop();
  }, []);

  return (
    <Layout>
      <Box className="p_record__contained-view">
        <FilterComponent 
          data={data} 
          handleInputChange={handleInputChange} 
          itemsBuy={itemsBuy} 
          handleSearch={handleSearch}
        />
        <TableComponent filteredItems={filteredItems}/>
      </Box>
    </Layout>
  )
}

export default RecordPage;