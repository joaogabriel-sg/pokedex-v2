import palette from './../palette';

const fonts = ['Ubuntu', 'Helvetica', 'Arial', 'sans-serif'].join(',');

const devices = {
  tablet: '768px',
  mobile: '580px',
};

export const light = {
  title: 'light',
  colors: {
    primary: '#f1f2f6',
    secondary: '#dfe4ea',
    text: '#191919',
    palette,
  },
  fonts,
  devices,
};

export const dark = {
  title: 'dark',
  colors: {
    primary: '#191919',
    secondary: '#2d2d2d',
    text: '#f1f2f6',
    palette,
  },
  fonts,
  devices,
};
