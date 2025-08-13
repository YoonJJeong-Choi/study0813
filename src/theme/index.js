import { createTheme } from '@mui/material/styles';
import { paletteDark, paletteLight } from './palette';

const theme = createTheme({
  palette: paletteLight,
});

const darkTheme = createTheme({
  palette: paletteDark,
});

export { theme, darkTheme };
