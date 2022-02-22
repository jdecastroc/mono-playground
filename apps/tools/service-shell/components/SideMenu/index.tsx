import { Box } from '@mono-playground/tools-ui';
import { container } from './styles.css';
import React from 'react';

const SideMenu = (props) => {
  return (
    <Box
      padding="4x"
      display="flex"
      flexDirection="column"
      className={container}
      background="gray-100"
    >
      <Box display="flex" flexDirection="column">
        Im a side menu
      </Box>
    </Box>
  );
};

export default SideMenu;
