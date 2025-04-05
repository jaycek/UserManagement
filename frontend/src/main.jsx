import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFD700', // Golden yellow for accents (like buttons, headers)
    },
    background: {
      default: '#121212', // Deep dark background
      paper: '#1e1e1e', // Slightly lighter card background
    },
    text: {
      primary: '#ffffff', // White text
      secondary: '#cccccc', // Slightly muted white
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
