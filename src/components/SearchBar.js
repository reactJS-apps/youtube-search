import React, { useState } from 'react';

export default function SearchBar({ onFormSubmit }) {
  const [searchTerm, setSearchTerm] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(searchTerm);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={(e) => onSubmit(e)}>
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </div>
      </form>
    </div>
  );
}
