import React from 'react';
import Chip from '@mui/material/Chip';

function ChipCustom({ label, variant, color, width , icon}) {
  return (
    <Chip
      label={label}
      variant={variant}
      icon={icon}
      sx={{ width, padding: 'auto' , backgroundColor: color, color: 'white'}}
    />
  );
}

export default ChipCustom;