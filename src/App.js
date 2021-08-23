import React from "react";
import "./App.css";
import { connect } from "react-redux";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#80deea",
    textAlign: "center",
    maxWidth: 300,
  },
  media: {
    height: 80,
  },
});

const App = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent className={classes.media}>
          <Typography gutterBottom variant="h6">
            {props.data}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          size="medium"
          onClick={props.fetchData}
        >
          Fetch
        </Button>
      </CardActions>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    fetchData: () => dispatch({ type: "FETCH_DATA" }),
  };
};
export default connect(mapStateToProps, mapDispachToProps)(App);
