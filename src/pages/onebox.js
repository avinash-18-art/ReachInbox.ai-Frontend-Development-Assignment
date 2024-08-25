import React, { useState, useEffect } from 'react';
import axios from '../services/api';
import OneBoxItem from '../components/OneBoxItem';
import ThemeToggle from '../components/ThemeToggle';
import styles from '../styles/onebox.module.css';

const OneBox = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('/onebox/list')
      .then((response) => setItems(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className={styles.container}>
      <ThemeToggle />
      <div className={styles.itemList}>
        {items.map((item) => (
          <OneBoxItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default OneBox;
