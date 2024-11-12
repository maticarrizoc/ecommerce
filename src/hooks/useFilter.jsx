import { useState, useEffect } from 'react';

export const useFilter = (items, property, filter) => {
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (filter) {
      const filtered = items.filter((item) => item[property] === filter);
      setFilteredItems(filtered);
    } else {
      setFilteredItems(items);
    }
  }, [filter, items]);

  return filteredItems;
};