import React from 'react';
import Button from '@mui/material/Button';
import { SvgIconProps } from '@mui/material/SvgIcon';

interface MyButtonProps {
  icon: React.ReactElement<SvgIconProps>; // Acepta un icono de MUI
  label: string; // Texto para el botón
}

const IconButton: React.FC<MyButtonProps> = ({ icon, label }) => {
  return (
    <div className="iconButton">
      {icon}
      <span>{label}</span>
    </div>
  );
};

export default IconButton;
