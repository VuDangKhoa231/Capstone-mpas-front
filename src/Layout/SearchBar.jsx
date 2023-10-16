import React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({searchValue, setSearchValue}) {
   
    const handleChange = (e) => {
        setSearchValue(e.target.value)
        console.log(e.target.value);
    }

    return (
        <div style={{ width: '500px', display: 'flex', alignItems: 'center' }}>
            <TextField
                sx={{ width: '100%' }}
                label="Tìm kiếm"
                variant="outlined"
                size="small"
                value={searchValue}
                onChange={handleChange}
                // InputProps={{
                //     endAdornment: (
                //         <IconButton onClick={handleChange}>
                //             <SearchIcon />
                //         </IconButton>
                //     ),
                // }}
            />
        </div>
    );
}