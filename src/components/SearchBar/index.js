import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    if (city.trim() !== '') { // Kiểm tra xem thành phần nhập liệu có dữ liệu hay không
      onSearch(city);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && city.trim() !== '') { // Xử lý khi nhấn phím Enter
      onSearch(city);
    }
  };

  return (
    <div className='searchbar-form'>
      <input 
        type="text" 
        placeholder="Nhập vị trí" 
        value={city}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress} // Xử lý sự kiện nhấn phím
      />
      <button onClick={handleSearch}><i class="fa-brands fa-searchengin"></i></button>
    </div>
  );
};

export default SearchBar;
