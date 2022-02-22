import React from 'react';
import { buttonRecipe, ButtonVariants } from './styles.css';
import { Box } from '../Box';

export type Props = {
  children: React.ReactNode;
} & ButtonVariants;

const Button = ({ children, size = 'md', kind = 'secondary' }: Props) => {
  return (
    <Box as="button" className={buttonRecipe({ size, kind })}>
      {children}
    </Box>
  );
};

export default Button;
