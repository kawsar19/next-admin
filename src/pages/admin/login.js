import React, { useEffect, useState } from 'react';
import { Box, Button, Container, CircularProgress, TextField, Typography } from '@mui/material';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
// import { useDispatch } from 'react-redux';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  // const dispatch = useDispatch();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      if (password.length < 6) {
        toast.error("Please Provide a Valid Password!");
        return false;
      }
      
      setLoading(true); // Start the loader
      
      const data = {
        email,
        password
      };

      const response = await axios.post("http://localhost:5000/api/auth/login", data);
      if (response.data?.login) {
        toast.success("Logged In Successfully!");
        localStorage.setItem("accessToken", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("isLoggedIn", true);
        // dispatch(authActions.setAccessToken(response.data.token));
        // dispatch(authActions.setUser(response.data.user));
        // dispatch(authActions.setIsLoggedIn(true));
        router.push("/admin");
      }
    } catch (error) {
      console.log(error);
      
      if (error.response?.data) {
        toast.error(error.response.data.message);
      } else { 
        toast.error("Server Error!");
      }
    } finally {
      setLoading(false); // Finish the loader
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Container 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          flexDirection:'column'
        }}
      >
        <Box
          sx={{
            width: 400,
            p: 4,
            boxShadow: 1,
            bgcolor: 'background.paper',
          }}
        >
          <Typography variant="h5" component="h1" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLogin}>
            <TextField
              required
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              required
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained" fullWidth disabled={loading}>
              {loading ? (
                <>
                  <CircularProgress size={24} color="inherit" />
                  <span>Loading...</span>
                </>
              ) : (
                'Login'
              )}
            </Button>
          </form>
        </Box> 
        <Box mt={2}>
          <Typography variant="body2">
            Demo User: admin@gmail.com
            <br />
            Password: 111111
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;
