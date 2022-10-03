/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';


const EllipsisHorizpontal = ({ size, ...rest }) => {
    return (

        <svg 
        width={size} height={size} {...rest} xmlns="http://www.w3.org/2000/svg"
         fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
      
    );}

const MyIcon = ({ name, size, ...rest }) => {
  const icons = {
  dotted:EllipsisHorizpontal
  };

  const Component = icons[name];
  return <Component size={size} {...rest} />;
};

MyIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number
};

MyIcon.defaultProps = {
  size: 16
};

export { MyIcon };