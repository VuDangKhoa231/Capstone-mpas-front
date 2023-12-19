import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Dialog, DialogContent, DialogTitle, FormControl, Grid, IconButton, Input, LinearProgress, MenuItem, Modal, Select, Slide, Stack, TextField, Typography } from '@mui/material';
import React, { forwardRef, useRef, useState } from 'react';
import { getHistoryByLicencePlate } from '../api/plo';
import themes from '../theme/themes';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from './../firebase/messaging_init_in_sw'
import { uniqueId } from 'lodash';
const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function DialogWithdrawal({ open, handleClose, confirm, data, handleConfirm }) {
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <Box p={'20px'}>
                <DialogTitle p={'20px'} sx={{ display: 'flex', textAlign: 'center', mb: '30px' }}>
                    <Typography variant='h4' sx={{ fontWeight: 'bold' }} >{confirm === true ? 'Chấp nhận' : 'Từ chối'}  yêu cầu rút tiền của {data && data.fullName}</Typography>
                </DialogTitle>
                <DialogContent>
                    <Typography variant='h6'>Tên bãi: {data && data.fullName}</Typography>
                    <Typography variant='h6'>Số tiền rút: {data && data.depositAmount} VNĐ</Typography>
                </DialogContent>
                <Box display={'flex'} m={'30px'} justifyContent={'space-between'} width={'500px'}>
                    <Button sx={{ width: '130px', backgroundColor: themes.palette.grey.dark, border: '1px solid transparent', color: 'white', ':hover': { borderColor: themes.palette.grey.dark, color: themes.palette.grey.dark } }} onClick={handleClose}> Hủy</Button>
                    <Button sx={{ width: '130px', backgroundColor: confirm ? themes.palette.green.light : themes.palette.red.light, border: '1px solid transparent', color: 'white', ':hover': { borderColor: confirm ? themes.palette.green.light : themes.palette.red.light, color: confirm ? themes.palette.green.light : themes.palette.red.light } }} onClick={() => { handleConfirm(); handleClose() }}> {confirm ? "Chấp nhận" : 'Từ chối'}</Button>
                </Box>
            </Box>
        </Dialog>
    )
}

function DialogBrowse({ accept, open, handleClose, data, url, setUrl, selectedValue, setSelectedValue, handleConfirm }) {
    const [error, setError] = useState('');

    // const handleInputChange = (event) => {
    //     setUrl(event.target.value);
    // };

    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const [fileKey, setFileKey] = useState(0);
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'application/pdf') {
            setError(null);
            setSelectedFile(file);
            setFileName(file.name);
            setFileKey((prevKey) => prevKey + 1);

        } else {
            setFileName('Lỗi File rồi')
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };
    const [showSpinning, setShowSpinning] = useState(false);
    const handleConfirmAction = () => {
        setShowSpinning(true);
        setTimeout(() => {
            setShowSpinning(false);
            handleCloseDialog();
        }, 1000);
    };

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleApproval = () => {
        if (selectedFile) {
            const imageRef = ref(storage, `Contract/${fileName.slice(0, -4) + uniqueId()}.pdf`)
            uploadBytes(imageRef, selectedFile).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((downloadURL) => {
                    setUrl(downloadURL);
                    handleConfirmAction();
                }).catch((error) => {
                    console.error('Lỗi khi lấy đường dẫn download URL:', error);
                })
            }).catch((error) => {
                console.error('Lỗi khi upload file:', error);
            })
        } else {
            setError('Bắt buộc phải chọn file')
        }
    }

    const iframeRef = useRef(null);
    const [isFullScreen, setIsFullScreen] = useState(false);

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };


    //Close 
    const handleCloseDialog = () => {
        handleClose();
        setSelectedFile(null);
        setFileName(null);
        setError(null);
    }

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleCloseDialog}
            aria-describedby="alert-dialog-slide-description"
        >
            <Box p={'20px'}>
                <DialogTitle p={'20px'} sx={{ display: 'flex', textAlign: 'center', mb: '30px' }}>
                    <Typography variant='h4' sx={{ fontWeight: 'bold' }}> {accept ? 'Xác nhận phê duyệt hồ sơ thành chủ bãi xe?' : 'Hủy yêu cầu phê duyệt bãi đỗ do không đạt yêu cầu?'}</Typography>
                </DialogTitle>
                <DialogContent>
                    <Typography variant='h6'>Tên chủ bãi: {data && data.fullName}</Typography>
                    <Typography variant='h6'>Tên bãi: {data && data.parkingName}</Typography>

                    {accept &&
                        <>
                            {selectedFile && (
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        {isFullScreen && (
                                            <div
                                                style={{
                                                    top: 0,
                                                    left: 0,
                                                    width: '100%',
                                                    height: '100%',
                                                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                                    zIndex: 1000,
                                                }}
                                                onClick={toggleFullScreen}
                                            ></div>
                                        )}
                                        <iframe
                                            title="Selected PDF"
                                            src={URL.createObjectURL(selectedFile)}
                                            width="90%"
                                            key={fileKey}
                                            height={'350px'}
                                            ref={iframeRef}
                                        ></iframe>
                                        {!isFullScreen && (
                                            <div
                                                style={{
                                                    bottom: 10,
                                                    right: 10,
                                                    cursor: 'pointer',
                                                    color: 'red',
                                                }}
                                                onClick={toggleFullScreen}
                                            >
                                                Xem Full Màn Hình
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                            <Box textAlign={'center'} mt={1.5}>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept=".pdf"
                                    onChange={handleFileChange}
                                    style={{ display: 'none' }}
                                />
                                {fileName ? <p>File PDF được chọn: {fileName}</p> : fileName === 'Lỗi File rồi' ? 'File lỗi' : null}
                                <Button
                                    variant="contained"
                                    startIcon={<CloudUploadIcon />}
                                    onClick={handleButtonClick}
                                >
                                    Upload
                                </Button>
                                {error && <Typography variant='body1' color={'red'}>{error}</Typography>}
                            </Box>
                            <Box alignItems={'center'} mt={'10px'} display={'flex'} justifyContent={'space-between'}>
                                <Typography variant='h6'>Hạn của hợp đồng (Tháng) : </Typography>
                                <FormControl>
                                    <Select
                                        defaultValue={selectedValue}
                                        labelId="select-label"
                                        id="select"
                                        value={selectedValue}
                                        size='small'
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={6}>6</MenuItem>
                                        <MenuItem value={12}>12</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </>}
                </DialogContent>
                <Box display={'flex'} m={'30px'} mt={'10px'} justifyContent={'space-between'} width={'500px'}>
                    <Button sx={{ width: '130px', backgroundColor: themes.palette.grey.dark, border: '1px solid transparent', color: 'white', ':hover': { borderColor: themes.palette.grey.dark, color: themes.palette.grey.dark } }} onClick={handleCloseDialog}> Hủy</Button>

                    <Button sx={{ width: '130px', backgroundColor: accept ? themes.palette.green.light : themes.palette.red.light, border: '1px solid transparent', color: 'white', ':hover': { borderColor: accept ? themes.palette.green.light : themes.palette.red.light, color: accept ? themes.palette.green.light : themes.palette.red.light } }} onClick={() => accept ? handleApproval() : handleConfirm()}> {accept ? 'Chấp nhận' : 'Từ chối'}</Button>
                </Box>
                <Box sx={{ width: '100%' }}>
                    {showSpinning && <LinearProgress size={20} />}
                </Box>
            </Box>
        </Dialog>
    )
}

function DialogCustom2({ open, setOpen, accessToken }) {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
        setSearchValue('');
        setData(null);
        setError(null);
    }

    const handleSearch = async (e) => {
        if (searchValue) {
            getHistoryByLicencePlate(searchValue, accessToken).then((res) => {
                console.log('res1', res);
                if (res == 1 || res == 2) {
                    setData(null);
                    setError(res);
                } else {
                    setData(res)
                    setError(null);
                }
                setSearchResult(searchValue);
            })
        }
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 800, // Adjust the width as needed
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    borderRadius: '8px',
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Typography variant="h4" sx={{ fontWeight: 'bold' }} id="modal-title">
                    Tra cứu lịch sử đỗ xe
                </Typography>
                <Box display="flex" alignItems="center" mt={2}>
                    <TextField
                        color="primary"
                        sx={{ flexGrow: 1, mr: 2 }}
                        label="Nhập biển số xe"
                        variant="outlined"
                        size="small"
                        value={searchValue}
                        onChange={handleInputChange}
                    />
                    <IconButton onClick={handleSearch}>
                        <SearchIcon />
                    </IconButton>
                </Box>
                <Box mt={2}>
                    {data === null ? (
                        <Box textAlign="center" alignSelf="center" height="200px">
                            {error === null ? (<Typography variant="h5">Hiện chưa nhập biển số</Typography>) : (<Typography variant="h5">{error == 1 ? `Không tìm thấy biển ${searchResult} trong hệ thống!` : `Biển só ${searchResult} chưa có thông tin đặt chỗ nào!`}</Typography>)}
                        </Box>
                    ) : (
                        <Box height={'300px'}>
                            <Box display={'flex'} justifyContent={'space-between'}>
                                <Typography variant="h6">
                                    Biển số xe: {searchResult}
                                </Typography>
                                <Typography variant="h6">
                                    Khách hàng: {data?.customerName}{' '}
                                </Typography>
                                <Typography variant="h6">
                                    Tổng đặt chỗ: {data?.customerName === "Khách Vãng Lai" ?  data && data?.reservationHistory.length : data?.totalBooking}{' '}
                                </Typography>
                            </Box>


                            <Grid container mt={2} maxHeight={'300px'} pr={2}>
                                <Grid item xs={1} >
                                    <Typography variant='body1'>STT</Typography>
                                </Grid>
                                <Grid item xs={5}>
                                    <Typography variant='body1'>Tên bãi đỗ</Typography>
                                </Grid>
                                <Grid item xs={3} textAlign={'end'}>
                                    <Typography variant='body1'>Thời gian vào bãi</Typography>
                                </Grid>
                                <Grid item xs={3} textAlign={'end'}>
                                    <Typography variant='body1'>Thời gian ra bãi</Typography>
                                </Grid>
                            </Grid>
                            <Stack direction="column" sx={{ maxHeight: '250px', overflowY: 'auto' }}>
                                {data && data?.reservationHistory.map((item, index) => (
                                    <Grid container key={index} width={'100%'} py={1} sx={{ backgroundColor: index % 2 !== 0 ? themes.palette.grey.light : 'transparent' }}>
                                        <Grid item xs={1} pl={1}>
                                            <Typography variant='body1'>{index + 1}</Typography>
                                        </Grid>
                                        <Grid item xs={5}>
                                            <Typography variant='body1'>{item.ploName}</Typography>
                                        </Grid>
                                        <Grid item xs={3} textAlign="end">
                                            <Typography variant='body1'>{item.checkIn}</Typography>
                                        </Grid>
                                        <Grid item xs={3} textAlign="end">
                                            <Typography variant='body1'>{item.checkOut}</Typography>
                                        </Grid>
                                    </Grid>
                                ))}
                            </Stack>

                        </Box>
                    )}
                </Box>
            </Box>
        </Modal>
    )
}

export { DialogBrowse, DialogCustom2, DialogWithdrawal };
