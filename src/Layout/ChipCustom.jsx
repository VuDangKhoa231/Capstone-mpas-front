import React from 'react';
import Chip from '@mui/material/Chip';

function ChipCustom({ label, variant, color, width , icon}) {
  return (
    <Chip
      label={label}
      variant={variant}
      color={color}
      icon={icon}
      sx={{ width, padding: 'auto' }}
    />
  );
}

export default ChipCustom;