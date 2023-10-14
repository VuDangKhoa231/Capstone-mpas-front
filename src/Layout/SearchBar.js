import React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
    const handleSearch = () => {
        // Xử lý tìm kiếm ở đây
        console.log('Tìm kiếm được kích hoạt');
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <TextField
                label="Tìm kiếm"
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                    endAdornment: (
                        <IconButton onClick={handleSearch}>
                            <SearchIcon />
                        </IconButton>
                    ),
                }}
            />
        </div>
    );
}