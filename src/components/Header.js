import React from 'react';

const Header = (props) => {
    return (
      <div>
        <h1>{props.title} test</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
    );
  };

  Header.defaultProps = {
    title: 'Indecision'
  };
  

  export default Header;