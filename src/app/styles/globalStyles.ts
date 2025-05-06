import { CSSObject } from '@mantine/styles';

export const globalStyles: Record<string, CSSObject> = {
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  html: {
    height: '100%',
  },
  body: {
    margin: 0,
    padding: 0,
    height: '100%',
    width: '100%',
    overflowX: 'hidden',
  },
  a: {
    textDecoration: 'none',
  },
  main: {
    flexGrow: 1,
  },
  ul: {
    listStyleType: 'none',
  },
};
