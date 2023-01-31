import React from "react";

function Header({filters, filter, onFilterChange}) {
  return (
    <header>
      <ul>
        {filters.map((filter, index) => 
          <li key={index}><button onClick={() => onFilterChange(filter)}>{filter}</button></li>
        )}
      </ul>
    </header>
  );
}
export default Header;
