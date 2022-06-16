import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  name: {
    maxHeight: 30,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  description: {
    maxHeight: 40,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

export function BookItem({
  name,
  desc,
  id,
}: {
  name: string;
  desc: string;
  id: number;
}) {
  const classes = useStyles();

  return (
    <Grid item xs={4} sm={4} className="book-item">
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.name}
              data-test="book-item-name"
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.description}
              data-test="book-item-desc"
            >
              {desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link to={`/books/${id}`} data-test="book-item-link">
              View Details
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
