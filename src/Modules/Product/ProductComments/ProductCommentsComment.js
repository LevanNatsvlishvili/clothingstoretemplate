import React from 'react';
import { makeStyles } from '@material-ui/styles';


const ProductCommentsComment = () => {
  const classes = useStyles();
  return (
    <div className={classes.comment}>
      <div className={classes.commentHead}>
        <img src="/icons/user/userGrey.svg" alt="user" />
        <h4>Jondo Bondo</h4>
      </div>
      <div className="my-1">
        <p className={classes.reviewed}>Reviewed on 06.06.2020</p>
        <p className={classes.commentText}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quas accusantium ea, officiis, odit quidem voluptatum provident rerum sed fugiat amet laborum! Quo optio facere eius esse. Alias, libero eius. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quas accusantium ea, officiis, odit quidem voluptatum provident rerum sed fugiat amet laborum! Quo optio facere eius esse. Alias, libero eius. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quas accusantium ea, officiis, odit quidem voluptatum provident rerum sed fugiat amet laborum! Quo optio facere eius esse. Alias, libero eius.
            </p>
      </div>
    </div>
  )
}

export default ProductCommentsComment;


const useStyles = makeStyles((theme) => ({
  comment: {
    background: '#fff',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  commentHead: {
    display: 'flex',
    '& img': {
      width: '30px',
      marginRight: '8px'
    },
    '& h4': {
      color: theme.colors.darkGrey
    },
  },
  reviewed: {
    color: theme.colors.darkGrey,
    fontSize: '12px',
  },
  commentText: {
    color: theme.colors.black
  }
}));