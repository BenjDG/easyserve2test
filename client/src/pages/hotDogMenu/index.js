import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Grid, Paper } from '@material-ui/core';
import API from '../../services/API';
import ButtonPiece from '../../components/buttonPiece';

const useStyles = makeStyles((theme) => ({
  orderView: {
    padding: theme.spacing(2, 2),
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  buttonView: {
    padding: theme.spacing(2, 2)
    // height: 200,
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'flex-start'
  }
}));

function HotDog () {
  const classes = useStyles();
  const [hotdogs, setHotdogs] = useState([]);
  // const [hotdogsList, setHotdogsList] = useState([]);
  // const [error, setError] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    API.getHotdogs()
      .then((res) => {
        setHotdogs(res.data);
      })
      .catch((err) => {
        console.error(err);
        // const error = new Error(err);
        // setError(error.message + ' - Please login');
      });
  };

  // function handleClick (orderId, itemId, title, price) {
  //   setHotdogsList({ orderId, itemId, title, price });
  // }

  return (
    <Grid container>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Box m={2}>
          <Grid item container direction='column'>
            <Grid item>
              <Paper elevation={3} className={classes.orderView}>
                {/* {error}{hotdogsList} */}
              </Paper>
            </Grid>
            <Grid
              item
              container
              direction='row'
              justify='center'
              alignItems='center'
              className={classes.buttonView}
              spacing={4}
            >
              {hotdogs.map((item) => {
                console.log(item);
                return <Grid item xs={3} key={item.id}><ButtonPiece itemId={item.id} title={item.title} click='' price={item.price} /></Grid>;
              })}

              <Grid item xs={3}>
                <Button href='/' variant='outlined'>Submit</Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
}

export default HotDog;
