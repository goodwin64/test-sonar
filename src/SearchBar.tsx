import React from 'react';
import debounce from 'lodash/debounce';

interface Props {
  onChange: (value: string) => void;
  value: string;
}

export function SearchBar(props: Props) {
  const [value, setValue] = React.useState('');
  const debounced = React.useCallback(debounce(newValue => props.onChange(newValue), 1000), []);
  return (
    <input
      type="search"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        debounced(e.target.value);
      }}
      className={'SearchBar'}
    />
  );
}