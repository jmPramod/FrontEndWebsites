import { Height } from '@mui/icons-material';
import { AppBar, Box, Button, Container, Modal, Toolbar } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import DehazeIcon from '@mui/icons-material/Dehaze';
export const styles = {
  navContainer: styled(Container)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  }),
  desktopContainer: styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  }),
  buttonMenuContainer: styled('div')({
    display: 'flex',
    gap: '10px',
  }),
  mobIcon: styled(DehazeIcon)({
    color: 'black',
  }),
  webImageLogo: styled('img')({
    width: '150px',
    Height: '40px',
    cursor: 'pointer',
  }),
  mobileImageLogo: styled('img')({
    width: '60px',
    cursor: 'pointer',
  }),
  toolBar: styled(Toolbar)({
    backgroundColor: 'white',
    padding: '5px 0',
    borderRadius: '20px',
  }),
  appBar: styled(AppBar)({
    backgroundColor: 'transparent',

    width: '90%',
    margin: '0 auto',
    borderRadius: '20px',
  }),
  button: styled(Button)({}),
  modal: styled(Modal)({}),
  box: styled(Box)({
    position: 'absolute',
    width: '60%',
    backgroundColor: 'white',
    height: '100%',
    border: 'none',
    right: '0',
  }),
  closeIcon: styled(CloseIcon)({
    color: 'black',
  }),

  buttonMenu: styled(Button)({
    backgroundColor: 'purple',

    '&:hover': {
      backgroundColor: 'white', // Change the color for the hover effect
      color: 'purple',
    },
  }),
};
