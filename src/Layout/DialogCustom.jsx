import { Box, Button, CircularProgress, Dialog, DialogContent, DialogTitle, FormControl, InputLabel, LinearProgress, MenuItem, Select, Slide, Stack, TextField, Typography } from '@mui/material';
import React, { forwardRef, useState } from 'react';
import themes from '../theme/themes';
import { useSelector } from 'react-redux';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function DialogCustom({ open, handleClose, confirm, data, status, handleConfirm, url, setUrl, selectedValue, setSelectedValue }) {
    const [error, setError] = useState('');

    const handleInputChange = (event) => {
        setUrl(event.target.value);
    };


    const [showSpinning, setShowSpinning] = useState(false);

    const handleConfirmAction = () => {
        setShowSpinning(true);
        setTimeout(() => {
            setShowSpinning(false);
            handleClose();
        }, 1000);
    };

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleApproval = () => {
        if (isURLValid(url)) {
            handleConfirm()
            handleConfirmAction()
        } else {
            if (url.trim().length > 0) {
                setError('*Đường dẫn URL không hợp lệ')
            } else {
                setError('*Bắt buộc nhập đường dẫn')
            }
        }
    }

    const isURLValid = (url) => {
        const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
        return urlPattern.test(url);
    };


    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <Box p={'20px'}>
                {status === 1 ?
                    (<>
                        <DialogTitle p={'20px'} sx={{ display: 'flex', textAlign: 'center', mb: '30px' }}>
                            <Typography variant='h4' sx={{ fontWeight: 'bold' }} >Xác nhận phê duyệt hồ sơ thành chủ bãi xe?</Typography>
                        </DialogTitle>
                        <DialogContent>
                            <Typography variant='h6'>Tên chủ bãi: {data && data.fullName}</Typography>
                            <Typography variant='h6'>Tên bãi: {data && data.parkingName}</Typography>
                            <TextField
                                color={error ? 'error' : 'primary'}
                                sx={{ mt: '20px' }}
                                label="Đường dẫn của hợp đồng"
                                variant="outlined"
                                fullWidth
                                value={url}
                                onChange={handleInputChange}
                            />
                            {error && <Typography variant='body1' color={'red'}>{error}</Typography>}
                            <Box alignItems={'center'} mt={'20px'} display={'flex'} justifyContent={'space-between'}>
                                <Typography variant='h6'>Hạn của hợp đồng (Tháng) : </Typography>
                                <FormControl>
                                    <Select
                                        defaultValue={selectedValue}
                                        labelId="select-label"
                                        id="select"
                                        value={selectedValue}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={6}>6</MenuItem>
                                        <MenuItem value={12}>12</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </DialogContent>
                    </>) : (<>
                        <DialogTitle p={'20px'} sx={{ display: 'flex', textAlign: 'center', mb: '30px' }}>
                            <Typography variant='h4' sx={{ fontWeight: 'bold' }} >{confirm === true ? 'Chấp nhận' : 'Từ chối'}  yêu cầu rút tiền của {data && data.fullName}</Typography>
                        </DialogTitle>
                        <DialogContent>
                            <Typography variant='h6'>Tên bãi: {data && data.fullName}</Typography>
                            <Typography variant='h6'>Số tiền rút: {data && data.depositAmount} VNĐ</Typography>
                        </DialogContent>
                    </>)}


                <Box display={'flex'} m={'30px'} justifyContent={'space-between'} width={'500px'}>
                    <Button sx={{ width: '130px', backgroundColor: themes.palette.grey.dark, border: '1px solid transparent', color: 'white', ':hover': { borderColor: themes.palette.grey.dark, color: themes.palette.grey.dark } }} onClick={handleClose}> Hủy</Button>
                    {confirm === true ? (<>
                        {status === 1 ?
                            <Button sx={{ width: '130px', backgroundColor: themes.palette.green.light, border: '1px solid transparent', color: 'white', ':hover': { borderColor: themes.palette.green.light, color: themes.palette.green.light } }} onClick={() => { handleApproval() }}> Chấp nhận</Button>
                            :
                            <Button sx={{ width: '130px', backgroundColor: themes.palette.green.light, border: '1px solid transparent', color: 'white', ':hover': { borderColor: themes.palette.green.light, color: themes.palette.green.light } }} onClick={() => { handleConfirm(); handleConfirmAction() }}> Chấp nhận</Button>
                        }
                    </>) : (<>
                        <Button sx={{ width: '130px', backgroundColor: themes.palette.red.light, border: '1px solid transparent', color: 'white', ':hover': { borderColor: themes.palette.red.light, color: themes.palette.red.light } }} onClick={() => { handleConfirm(); handleConfirmAction() }}> Từ chối</Button>
                    </>)}

                </Box>
                <Box sx={{ width: '100%' }}>
                    {showSpinning && <LinearProgress size={20} />}
                </Box>
            </Box>
        </Dialog>
    )
}

export default DialogCustom;