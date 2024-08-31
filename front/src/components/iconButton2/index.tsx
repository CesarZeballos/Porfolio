import React from 'react';
import { SvgIconProps } from '@mui/material/SvgIcon';

interface MyButtonProps {
  icon: React.ReactElement<SvgIconProps>;
}

const IconButton2: React.FC<MyButtonProps> = ({ icon }) => {
  return (
    <button className="iconButton2">
      {icon}
    </button>
  );
};

export default IconButton2;