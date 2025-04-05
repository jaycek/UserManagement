import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
  Container,
  Stack
} from "@mui/material";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", username: "" });

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`http://localhost:3000/users/${id}`);
        setUsers(users.filter((user) => user._id !== id));
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user._id);
    setFormData({ name: user.name, email: user.email, username: user.username });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const saveUser = async (id) => {
    try {
      await axios.patch(`http://localhost:3000/users/${id}`, formData);
      setEditingUser(null);
      getUsers();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom color="primary">
        Admin Dashboard
      </Typography>
      <Grid container spacing={4}>
        {users.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user._id}>
            <Card sx={{ backgroundColor: "#1e1e1e", color: "white" }}>
              <CardContent>
                {editingUser === user._id ? (
                  <Box>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      margin="normal"
                      variant="outlined"
                      InputLabelProps={{ style: { color: "#fff" } }}
                      InputProps={{ style: { color: "#fff" } }}
                    />
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      margin="normal"
                      variant="outlined"
                      InputLabelProps={{ style: { color: "#fff" } }}
                      InputProps={{ style: { color: "#fff" } }}
                    />
                    <TextField
                      fullWidth
                      label="Username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      margin="normal"
                      variant="outlined"
                      InputLabelProps={{ style: { color: "#fff" } }}
                      InputProps={{ style: { color: "#fff" } }}
                    />
                    <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                      <Button variant="contained" color="success" onClick={() => saveUser(user._id)}>
                        Save
                      </Button>
                      <Button variant="outlined" color="inherit" onClick={() => setEditingUser(null)}>
                        Cancel
                      </Button>
                    </Stack>
                  </Box>
                ) : (
                  <Box>
                    <Typography variant="h6">{user.name}</Typography>
                    <Typography variant="body2">Email: {user.email}</Typography>
                    <Typography variant="body2">Username: {user.username}</Typography>
                    <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                      <Button variant="contained" onClick={() => handleEdit(user)}>
                        Edit
                      </Button>
                      <Button variant="contained" color="error" onClick={() => deleteUser(user._id)}>
                        Delete
                      </Button>
                    </Stack>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AdminDashboard;
