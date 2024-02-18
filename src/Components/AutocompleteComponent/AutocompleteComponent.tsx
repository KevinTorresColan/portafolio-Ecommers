import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface Props {
  value: {id: number, label: string };
  options: {id: number, label: string }[];
  onChange: (event: React.ChangeEvent<{}>, value: { id: number; label: string; } | null) => void;
}

export const AutocompleteComponent = ({ value, options, onChange }: Props) => {
  return (
    <Autocomplete
      value={value}
      disablePortal
      options={options}
      onChange={onChange}
      size='small'
      renderInput={(params) => <TextField {...params} label="Categorias" />}
    />
  );
}