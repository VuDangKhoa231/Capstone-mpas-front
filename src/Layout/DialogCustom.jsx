import { Box, Button, Dialog, DialogContent, DialogTitle, Slide, Typography } from '@mui/material';
import React, { forwardRef } from 'react';
import themes from '../theme/themes';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function  DialogCustom({ open, handleClose, confirm, data, status }) {
   
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
                            <Typography variant='h4' sx={{ fontWeight: 'bold' }} >Xác nhận phê duyệt hồ sơ thành chủ gửi xe?</Typography>
                        </DialogTitle>
                        <DialogContent>
                            <Typography variant='h6'>Tên chủ bãi: {data && data.owner}</Typography>
                            <Typography variant='h6'>Tên bãi: {data && data.name}</Typography>
                        </DialogContent>
                    </>) : (<>
                        <DialogTitle p={'20px'} sx={{ display: 'flex', textAlign: 'center', mb: '30px' }}>
                            <Typography variant='h4' sx={{ fontWeight: 'bold' }} >{confirm === true ? 'Chấp nhận' : 'Từ chối'}  yêu cầu rút tiền của {data && data.owner}</Typography>
                        </DialogTitle>
                        <DialogContent>
                            <Typography variant='h6'>Tên bãi: {data && data.name}</Typography>
                            <Typography variant='h6'>Số tiền rút: {data && data.requestedAmount}</Typography>
                        </DialogContent>
                    </>)}

                <Box display={'flex'} m={'30px'} justifyContent={'space-between'} width={'500px'}>
                    <Button sx={{ width: '130px', backgroundColor: themes.palette.grey.dark, border: '1px solid transparent', color: 'white', ':hover': { borderColor: themes.palette.grey.dark, color: themes.palette.grey.dark } }} onClick={handleClose}> Hủy</Button>
                    {confirm === true ? (<>
                        <Button sx={{ width: '130px', backgroundColor: themes.palette.green.light, border: '1px solid transparent', color: 'white', ':hover': { borderColor: themes.palette.green.light, color: themes.palette.green.light } }} onClick={handleClose}> Chấp nhận</Button>                    
                    </>) : (<>
                        <Button sx={{ width: '130px', backgroundColor: themes.palette.red.light, border: '1px solid transparent', color: 'white', ':hover': { borderColor: themes.palette.red.light, color: themes.palette.red.light } }} onClick={handleClose}> Từ chối</Button>
                    </>)}
                </Box>
            </Box>
        </Dialog>
    )
}

export default DialogCustom;