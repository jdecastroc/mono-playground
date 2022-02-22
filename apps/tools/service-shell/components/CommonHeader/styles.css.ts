import { atoms } from '@mono-playground/tools-ui/atoms';
import { style } from '@vanilla-extract/css';

export const container = style([
  atoms({
    display: 'flex',
    padding: '4x',
  }),
]);
