import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import API from '../../services/API';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  }
}));

function Drinks () {
  const classes = useStyles();
  const [data, setdata] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    API.getDrinks()
      .then((res) => {
        console.log(res.data);

        setdata(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Grid container>
      <Grid item container>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Typography className={classes.root}>
            <Link href='/' color='inherit'>
              Home
            </Link>
            <Link href='/test' color='inherit'>
              McTesty
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={2} />
      </Grid>
      <Grid item container>
        <ul>
          {data.map((item) => {
            return <li>{item.title}</li>;
          })}
        </ul>
      </Grid>
    </Grid>
  );
}

export default Drinks;
