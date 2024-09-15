import React from 'react';
import { Autocomplete, TextField, Box } from '@mui/material';

interface SearchProps {
  products: { title: string }[];
  setSearchTerm: (value: string) => void;
}

export const Search: React.FC<SearchProps> = ({ products, setSearchTerm }) => {
  return (
	<Box sx={{ maxWidth: '350px', marginBottom: 2 }}>
	  <Autocomplete
		freeSolo
		id="free-solo-2-demo"
		disableClearable
		options={products.map((option) => option.title)}
		onInputChange={(_, newInputValue) => {
		  setSearchTerm(newInputValue);
		}}
		renderInput={(params) => (
		  <TextField
			{...params}
			label="Search input"
			size="small"
			slotProps={{
			  input: {
				...params.InputProps,
				type: 'search',
			  },
			}}
		  />
		)}
	  />
	</Box>
  );
};
