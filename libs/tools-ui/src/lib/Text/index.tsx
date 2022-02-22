import React from 'react';
import { textRecipe, TextVariants } from './styles.css';
import { Box } from '../Box';

export type Props = {
  children: React.ReactNode;
} & TextVariants;

const Text = ({ kind, children }: Props) => {
  return <Box className={textRecipe({ kind })}>{children}</Box>;
};

export default Text;
