import { Box } from '@mono-playground/tools-ui';
import React from 'react';
import { container } from './styles.css';

const CommonHeader = (props) => {
  return (
    <Box background="gray-100" className={container}>
      Im a common header
    </Box>
  );
};

export default CommonHeader;
