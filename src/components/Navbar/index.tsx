import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { styles } from './styles';
import Modal from '@mui/material/Modal';
import SliderImages from './SliderImages';
import HomeIcon from '@mui/icons-material/Home';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import InfoIcon from '@mui/icons-material/Info';
import CallEndIcon from '@mui/icons-material/CallEnd';
import VaccinesIcon from '@mui/icons-material/Vaccines';
const Navbar = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down(700));
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let navigate = useNavigate();
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Box>
        <styles.appBar position="static">
          <styles.toolBar>
            {mobile ? (
              <>
                <styles.navContainer>
                  <styles.mobileImageLogo
                    src="/images/moblogo2.png"
                    alt=""
                    onClick={() => navigate('/home')}
                  />
                  <styles.button onClick={handleOpen}>
                    <styles.mobIcon />
                  </styles.button>
                </styles.navContainer>
              </>
            ) : (
              <styles.desktopContainer>
                <styles.webImageLogo
                  src="/images/logo2.png"
                  alt=""
                  onClick={() => navigate('/home')}
                />
                <styles.buttonMenuContainer>
                  <styles.buttonMenu
                    size="small"
                    variant="contained"
                    startIcon={<HomeIcon />}
                    onClick={() => navigate('/home')}
                  >
                    Home
                  </styles.buttonMenu>

                  <styles.buttonMenu
                    size="small"
                    variant="contained"
                    startIcon={<VaccinesIcon />}
                  >
                    Treatments
                  </styles.buttonMenu>

                  <styles.buttonMenu
                    size="small"
                    variant="contained"
                    startIcon={<EmojiEventsIcon />}
                  >
                    Awards
                  </styles.buttonMenu>
                  <styles.buttonMenu
                    size="small"
                    variant="contained"
                    startIcon={<InfoIcon />}
                  >
                    About us
                  </styles.buttonMenu>

                  <styles.buttonMenu
                    size="small"
                    variant="contained"
                    startIcon={<CallEndIcon />}
                  >
                    Contact us{' '}
                  </styles.buttonMenu>
                </styles.buttonMenuContainer>
              </styles.desktopContainer>
            )}
          </styles.toolBar>
        </styles.appBar>
      </Box>
      <Outlet />

      <styles.modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <styles.box>
          <styles.button onClick={handleClose}>
            <styles.closeIcon />
          </styles.button>
        </styles.box>
      </styles.modal>
    </>
  );
};

export default Navbar;
