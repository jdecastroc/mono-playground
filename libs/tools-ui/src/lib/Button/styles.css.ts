import { recipe } from '@vanilla-extract/recipes';
import { atoms } from '../atoms.css';

export const buttonRecipe = recipe({
  variants: {
    kind: {
      primary: atoms({ background: 'green-200' }),
      secondary: atoms({ background: 'gray-200' }),
    },
    size: {
      md: atoms({ fontSize: '3x' }),
      lg: atoms({ fontSize: '4x' }),
    },
  },
});

export type ButtonVariants = Parameters<typeof buttonRecipe>[0];
