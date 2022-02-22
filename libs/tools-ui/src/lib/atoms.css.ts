import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { vars } from './vars.css';

const responsiveStyles = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex'],
    flexDirection: ['row', 'column'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    justifyContent: ['stretch', 'flex-start', 'center', 'flex-end'],
    gap: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    width: ['100vw', '100%'],
    height: ['100vh', '100%'],
    borderRadius: vars.borderRadius,
    fontFamily: vars.fontFamily,
    fontSize: vars.fontSize,
    fontWeight: [400, 600],
    lineHeight: vars.lineHeight,
    textAlign: ['left', 'center'],
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    placeItems: ['alignItems', 'justifyContent'],
    typeSize: ['fontSize', 'lineHeight'],
  },
});

const colorModeStyles = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'lightMode',
  properties: {
    color: vars.color,
    background: vars.color,
  },
});

export const atoms = createSprinkles(responsiveStyles, colorModeStyles);
