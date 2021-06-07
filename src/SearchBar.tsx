import React from 'react';

interface Props {
  onChange: (value: string) => void;
  value: string;
}

export function SearchBar(props: Props) {
  return (
    <input
      type="search"
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      className={'SearchBar'}
    />
  );
}