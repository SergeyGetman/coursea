import React, { FC } from 'react';
import { GeneralInterface } from '../types/types';
import { useMediaQuery } from '@mui/material';
import { MainInfoAppStyle, MainInfoBlockStyle } from '../AppStyle.style';

const MainAplication: FC<GeneralInterface> = ({ children }) => {
  const isMobile = useMediaQuery('(min-width:600px)');
  return (
    <MainInfoAppStyle mobile={isMobile}>
      <MainInfoBlockStyle mobile={isMobile}>{children}</MainInfoBlockStyle>
    </MainInfoAppStyle>
  );
};

export default MainAplication;
