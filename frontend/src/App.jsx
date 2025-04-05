import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  CssBaseline,
} from '@mui/material';

import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import AdminDashboard from './components/AdminDashboard';

const App = () => {
  return (
    <Router>
      <CssBaseline /> {/* Apply MUI baseline styling */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 'bold',
            }}
          >
            User Management Dashboard
          </Typography>
          <Button color="inherit" component={RouterLink} to="/signup">
            Sign Up
          </Button>
          <Button color="inherit" component={RouterLink} to="/login">
            Login
          </Button>
          <Button color="inherit" component={RouterLink} to="/admin">
            Admin Dashboard
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 6 }}>
        <Routes>
          <Route
            path="/"
            element={
              <Box textAlign="center">
                <Typography variant="h4" gutterBottom>
                  Welcome to My App!
                </Typography>
              </Box>
            }
          />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
