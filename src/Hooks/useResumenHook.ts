import { useState } from "react";

export const useResumenHook = () => {
  const [filteredItems, setFilteredItems] = useState([]);
  
  const handleSearch = (items: any[], dates: any) => {
    const filtered = items?.filter(item => {
      return item?.date >= dates.startDate && item.date <= dates.endDate;
    });
    setFilteredItems(filtered as any);
  };

  return {
    filteredItems,
    handleSearch
  }
};