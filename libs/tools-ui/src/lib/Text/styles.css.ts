import { recipe } from '@vanilla-extract/recipes';
import { atoms } from '../css/atoms.css';

export const textRecipe = recipe({
  variants: {
    kind: {
      h1: atoms({
        fontSize: '4x',
        fontWeight: 600,
      }),
      h2: atoms({
        fontSize: '3x',
        fontWeight: 400,
      }),
      p: atoms({
        fontSize: '2x',
      }),
    },
  },
});

export type TextVariants = Parameters<typeof textRecipe>[0];
