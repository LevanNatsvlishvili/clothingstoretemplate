import React, { useState, ElementConfig } from 'react';
import { makeStyles } from '@material-ui/styles';
import Select, { components } from 'react-select';

const options = [
  { value: 'newest', label: 'Newest' },
  { value: 'highToLow', label: 'Price: High to Low' },
  { value: 'lowToHigh', label: 'Price: Low to High' },
];

const customStyles = (value) => ({
  option: (provided, state) => ({
    ...provided,
    fontWeight: '600',
    backgroundColor: state.isSelected ? '#D4D3D2!important' : '#e7e7e7!important',
    '&:hover , &:focus': {
      backgroundColor: state.isSelected ? '#e7e7e7' : null,
    },
  }),
  menu: (provided, state) => ({
    ...provided,
    borderRadius: '30px',
  }),
  menuList: (provided, state) => ({
    ...provided,
    borderRadius: '25px',
    padding: 0,
    margin: 0,
    backgroundColor: '#e7e7e7'

  }),
  control: (provided, state) => ({
    ...provided,
    borderRadius: '20px',
    fontWeight: '600',
    backgroundColor: '#E7E7E7',
    border: 'none!important',
    padding: '0 8px',
    boxShadow: 'none'
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    width: 0,
  }),

})

const SearchField = (props) => {
  const { value, handleChange, ...rest } = props;
  return (
    <Select
      value={value}
      styles={customStyles(value)}
      onChange={handleChange}
      components={{ DropdownIndicator }}
      isSearchable={false}
      options={options}
      {...rest}
    />
  )
}

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <img src='/icons/arrow/arrow.svg' alt='chevron' />
    </components.DropdownIndicator>
  );
};


export default SearchField;