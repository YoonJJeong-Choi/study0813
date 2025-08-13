import './App.css';
import MainLayout from './layouts/MainLayout';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, theme } from './theme';
import { useSelector } from 'react-redux';
function App() {
  const { isDark } = useSelector((state) => {
    return state.theme;
  });

  return (
    <ThemeProvider theme={isDark ? darkTheme : theme}>
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
