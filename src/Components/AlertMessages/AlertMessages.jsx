import { Alert, Snackbar } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearAlert } from '../../Redux/Actions/AlertAction/clearAlert';

const AlertMessages = () => {
  const dispatch = useDispatch();

  const { message } = useSelector((state) => state.alert);

  const handleClearAlert = () => {
    dispatch(clearAlert());
  };

  return (
    <Snackbar
      open={message}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      autoHideDuration={6000}
      onClose={handleClearAlert}
    >
      <Alert
        onClose={handleClearAlert}
        severity={message?.type}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {message?.msg}
      </Alert>
    </Snackbar>
  );
};

export default AlertMessages;
