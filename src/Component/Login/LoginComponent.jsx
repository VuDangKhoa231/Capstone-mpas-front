import { yupResolver } from '@hookform/resolvers/yup';
import AppleIcon from '@mui/icons-material/Apple';
import { Alert, AlertTitle, Box, Button, CircularProgress, FormControl, FormHelperText, Grid, Paper, TextField, Typography } from '@mui/material';
import { React, useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { loginUser } from '../../api/login';
const schema = yup.object().shape({
    username: yup.string().required('username là bắt buộc'),
    password: yup.string().required('Mật khẩu là bắt buộc'),
});

export default function LoginComponent() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth)

    const { register, handleSubmit, formState: { errors }, getValues } = useForm({
        resolver: yupResolver(schema),
    });

    // const dispatch = useDispatch();
    const onSubmit = async (e) => {

        const data = {
            id: getValues('username'),
            password: getValues('password'),
        }
        loginUser(data, dispatch, navigate);
        console.log(user.login.error);
    };

    return (
        <Box sx={{ backgroundColor: "#6EC2F7", width: '100%', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>

            <Grid container width={'100%'} height={'100%'} alignContent={'center'} textAlign={'center'} display={'flex'} >
                <Grid item xs={5} color='white'>
                    <Typography variant='h3'> Welcome To</Typography>
                    <AppleIcon sx={{ fontSize: '500px' }} />
                    <Typography variant='h3'> PARCO</Typography>
                </Grid>
                <Grid item xs={2} />
                <Grid item xs={5}>
                    <Paper elevation={8} sx={{ p: '20px', height: '90%', borderRadius: '10px', width: '60%' }}>
                        <AppleIcon sx={{ fontSize: '200px', mb: '20px' }} />
                        {user?.login.error &&
                            <Alert severity="error">Sai tài khoản hoặc mật khẩu</Alert>
                        }

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                                fullWidth
                                sx={{ mt: '20px' }}
                                variant="outlined"
                                label="Username"

                                {...register('username')}
                                error={!!errors.username}
                                helperText={errors.username ? errors.username.message : ''}
                            />

                            <TextField
                                fullWidth
                                sx={{ mt: '20px' }}
                                variant="outlined"
                                label="Password"
                                type="password"
                                {...register('password')}
                                error={!!errors.password}

                                helperText={errors.password ? errors.password.message : ''}
                            />
                            {user.login.isFetching ? (
                                <Button fullWidth sx={{ mt: '50px' }} variant="contained" color="primary" disabled>
                                    <CircularProgress size={'25px'} />
                                </Button>
                            ) : (
                                <Button fullWidth sx={{ mt: '50px' }} type="submit" variant="contained" color="primary">
                                    Đăng nhập
                                </Button>
                            )}
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}
