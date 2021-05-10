import React, { useEffect, useState } from 'react';
import { makeStyles, Button, Modal, Backdrop, Fade, Box, Typography, TextField } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import { useSelector, } from 'react-redux';
import { selectLoggedInUserId, selectLoggedInUserInfo } from '../../redux/selectors';
import { db } from '../../config/config';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: 'center',
    minHeight: "130px",
    maxWidth: "50%",
    backgroundColor: theme.palette.background.paper,
    zIndex: 999,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    alignItems: 'center',
    '& .MuiTextField-root': {
      marginBottom: theme.spacing(3),
    },
  },
  link: {
    margin: "0 10px",
    color: "#94c93d",
  },
}));

const TourBook = (props) => {
  let { id } = useParams();
  const uId = useSelector(selectLoggedInUserId);
  const userInfo = useSelector(selectLoggedInUserInfo) || {};
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(1);
  const [error, setError] = useState(false);
  const [maxPeop, setmaxPeop] = useState();

  const [dataTour, setDataTour] = useState([]);

  useEffect(() => {
    const response = db.collection('tours');
    const dataArr = [];
    response.get().then((data) => {
      data.forEach(item => {
        dataArr.push(item.data())
      })
      for (let i = 0; i < dataArr.length; i++) {
        if (dataArr[i].id === id) {
          setmaxPeop(dataArr[i].maxPeople);
          setDataTour(dataArr[i]);
        }
      }
    });
  }, [id]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const confirm = async (event) => {

    event.preventDefault();
    if (!error && dataTour) {
      try {
        await db.collection("users").doc(uId)
          .set({
            ...userInfo,
            toursList: dataTour
          });
      } catch (error) {
        console.log("error")
      }
      setOpen(false);
    }
  };

  const countHandle = (e) => {
    if (e.target.value <= maxPeop) {
      setCount(e.target.value);
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Book Now
            </Button>
      <Modal className={classes.modal} open={open} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Fade in={open}>
          {userInfo ?
            <Box className={classes.paper}>
              <TextField fullWidth={true} variant="outlined" disabled value={userInfo.firstName} />
              <TextField fullWidth={true} variant="outlined" disabled value={userInfo.lastName} />
              <TextField fullWidth={true} variant="outlined" required label="Mardkanc qanak@" type="number"
                value={count}
                onChange={countHandle}
                InputProps={{ inputProps: { min: 1, } }}
                error={error}
                helperText={error ? `Aravelaguyn qanakn e ${maxPeop}` : null}
              />
              <Button variant="contained" color="primary" onClick={confirm}>
                Confirm
              </Button>
            </Box>
            :
            <Box className={classes.paper}>
              <Typography variant="h4">
                Book anelu hamar
                <Link className={classes.link} to="/signin" variant="contained" color="primary">Login</Link>
                exeq ete grancvac cheq
                <Link className={classes.link} to="/signup" variant="outlined" color="primary">Sign Up</Link>
              </Typography>
            </Box>
          }
        </Fade>
      </Modal>
    </div>
  )
}


export default TourBook;