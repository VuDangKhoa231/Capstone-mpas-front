import { Box, Button, Dialog, DialogContent, DialogTitle, Slide, TextField, Typography } from '@mui/material';
import React, { forwardRef } from 'react';
import themes from '../theme/themes';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function DialogCustom({ open, handleClose, confirm, data, status, handleConfirm, url, setUrl, error, setError }) {


    // const handleInputChange = (event) => {
    //     setUrl(event.target.value);
    // };

    // function isEmailValid(email) {
    //     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //     return emailRegex.test(email);
    // }

    // const handleCheckUrl = () => {


    //     if (isEmailValid(url)) {
    //         setError('');
    //     } else {
    //         setError('URL không hợp lệ');
    //     }
    // };

    // const handleBlur = () => {
    //     handleCheckUrl();
    // };



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
                            {/* <TextField
                                label="URL"
                                variant="outlined"
                                fullWidth
                                value={url}
                                onChange={handleInputChange}
                                onBlur={handleBlur} // Kiểm tra URL khi người dùng rời khỏi trường TextField
                                error={error !== ''}
                                helperText={error}
                            /> */}
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
                        <Button  sx={{ width: '130px', backgroundColor: themes.palette.green.light, border: '1px solid transparent', color: 'white', ':hover': { borderColor: themes.palette.green.light, color: themes.palette.green.light } }} onClick={() => { handleConfirm(); handleClose() }}> Chấp nhận</Button>
                    </>) : (<>
                        <Button sx={{ width: '130px', backgroundColor: themes.palette.red.light, border: '1px solid transparent', color: 'white', ':hover': { borderColor: themes.palette.red.light, color: themes.palette.red.light } }} onClick={() => { handleConfirm(); handleClose() }}> Từ chối</Button>
                    </>)}
                </Box>
            </Box>
        </Dialog>
    )
}

export default DialogCustom;