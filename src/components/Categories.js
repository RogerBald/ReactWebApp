import React from 'react';

function Categories({ categories, onSelectCategory }) {
  return (
    <div className="categories">
      <select onChange={(e) => onSelectCategory(e.target.value)}>
        <option value="">Selecione uma categoria</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Categories;