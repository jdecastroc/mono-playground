import { Box } from '@mono-playground/tools-ui';
import { container } from './styles.css';
import React, { useCallback } from 'react';

const SideMenu = (props) => {
  const onSetIndex = useCallback(() => props.onSetWorkspace('index'), []);
  const onSetAsterix = useCallback(() => props.onSetWorkspace('asterix'), []);
  const onSetObelix = useCallback(() => props.onSetWorkspace('obelix'), [])

  return (
    <Box
      padding="4x"
      display="flex"
      flexDirection="column"
      className={container}
      background="gray-100"
    >
      <Box display="flex" flexDirection="column">
        <Box onClick={onSetIndex}> Set Index </Box>
        <Box onClick={onSetAsterix}>Set Asterix</Box>
        <Box onClick={onSetObelix}>Set Obelix</Box>
      </Box>
    </Box>
  );
};

export default SideMenu;
