import { Button, TextField } from '@material-ui/core'
import React from 'react'

const Login = () => {
    return (
        <div>
        
        <TextField 
            fullWidth
            variant="filled"
            margin="normal"
            label="enter the name"

            />
            <TextField 
            fullWidth
            variant="filled"
            label="enter the address"
            
            />
            <TextField 
            fullWidth
            variant="filled"
            label="pincode"
            
            />
            <TextField 
            fullWidth
            variant="filled"
            label="Email"
            
            />
            <TextField 
            fullWidth
            variant="filled"
            label="phonenumber"
             />
            <TextField 
            fullWidth
            type="password"
            variant="filled"
            label="enter the password"
            
            />
            <TextField 
            fullWidth
            type="password"
            variant="filled"
            margin="normal"
            label="confirm password"
            />

          <Button 
           color="secondary"
           fullWidth
           variant="contained">Submit</Button>
        </div>
    )
}

export default Login



