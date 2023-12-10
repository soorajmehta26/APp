import Footer from "../components/Footer";
import "./Login.css";
import { useState } from "react";
import { styled } from '@mui/system'; // Use the styled function for styling
import { Box, Typography, TextField, Button, Container, CssBaseline } from '@mui/material';

const StyledTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#8f4048',
    },
    '&:hover fieldset': {
      borderColor: '#8f4048',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
});

const Login = () => {

  const [phoneNumber, setPhoneNumber] = useState('00');
  const [otp, setOtp] = useState('');
  const [showOtpField, setShowOtpField] = useState(false);

  const handleContinue = () => {
    if (phoneNumber) {
      setShowOtpField(true);
    }
  };

  const handleLogin = () => {
    // Add your login logic here
  };
  return (
    <div className="login1">
        <img className="logo-icon" alt="" src="/logo@2x.png" />
      <Footer />
     
      <Container
        maxWidth="xs"
        style={{
          marginTop:'30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          position="absolute"
        
          marginTop="20px"
          padding="20px"
          boxShadow="0px 0px 10px 2px rgba(0,0,0,50)"
          borderRadius="10px"
          backgroundColor= 'rgba(256,256,256,0.9)'
        >
          <Typography style={{marginBottom:'20px' , alignSelf:'center' }} className="login-label" variant="h8" gutterBottom>
            Login/Register
          </Typography>
          <StyledTextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                InputProps={{
                  startAdornment: '+91-',
                }}
                inputProps={{
                  inputMode: 'numeric', // Set input mode to numeric for mobile devices
                  pattern: '[0-9]*', // Specify a pattern to restrict to numeric input
                  maxLength: 10, // Set maximum length of the input to 10 characters
                }}
                autoComplete="new-phone-number"
              />
          {showOtpField && (
            <StyledTextField
            style={{marginTop:'20px'}}
              label="OTP"
              variant="outlined"
              fullWidth
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          )}
          <Button
            style={{marginTop:'20px',marginBottom:"20px"}}
            variant="contained"
            color="success"
            fullWidth
            onClick={showOtpField ? handleLogin : handleContinue}
          >
            {showOtpField ? 'Login' : 'Continue'}
          </Button>
        </Box>
      </Container>

    
    </div>
  );
};

export default Login;