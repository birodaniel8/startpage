import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Typography,
  FormControlLabel,
  Collapse,
  Switch,
  Link,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));


function NewsFeed() {
  // States:
  const [newsArray, setNewsArray] = useState([]);
  // Styling:
  const classes = useStyles();

  // DidMount useEffect:
  useEffect(() => {
    axios.get("api/get-news").then((response) => {
      setNewsArray(
        response.data.news_list.sort((a, b) =>
          a.published_at > b.published_at
            ? -1
            : b.published_at > a.published_at
            ? 1
            : 0
        )
      );
    });
  }, []);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} align="left">
      <Typography component="h6" variant="h6">
        NewsFeed
      </Typography>
      {/* {newsArray.map((news, index) => (
          <Typography key={index} component="p" variant="body2">
            <Link href={news.url} target="_blank">
              {news.title}
            </Link>
            {" - "}
            {news.published_at}
          </Typography>
        ))} */}
      <List>
        {newsArray.map((news, index) => (
          <ListItem key={index} button component="a" href={news.url} target="_blank">
            <ListItemAvatar>
              <Avatar
                className={classes.small}
                alt={`Avatar n°${index}`}
                src={news.icon}
              />
            </ListItemAvatar>
            <ListItemText id={index} primary={news.title} />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
}

export default NewsFeed;
