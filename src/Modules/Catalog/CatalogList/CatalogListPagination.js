import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Pagination from 'react-bootstrap/Pagination';
import clsx from 'clsx';

const CatalogList = (props) => {
  const classes = useStyles();
  const { numberOfPages } = props;

  let PageNum = Math.ceil(numberOfPages / 12);

  const pages = [];
  for (let i = 1; i <= PageNum; i++) {
    pages.push(i);
  }
  return (
    <Pagination className='d-flex justify-content-center'>
      <Pagination.Prev className={clsx(classes.pagination, {
        [classes.prevNext]: true
      })}>
        Previous
      </Pagination.Prev>
      {pages.map((page, index) => (
        <Pagination.Item
          className={clsx(classes.pagination, {
            [classes.item]: true
          })}
          key={index}>
          {page}
        </Pagination.Item>
      ))}
      <Pagination.Next className={clsx(classes.pagination, {
        [classes.prevNext]: true
      })}>
        Next
      </Pagination.Next>
    </Pagination>
  )
}

const products = [

]


const useStyles = makeStyles((theme) => ({
  item: {
    '& a': {
      width: 41,
    }

  },
  pagination: {
    margin: 3,
    '& a': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: theme.colors.transparent,
      fontWeight: '600',
      borderRadius: '6px!important',
      padding: 0,
      height: 36,
      border: '1px solid',
      borderColor: theme.colors.grey,
      color: theme.colors.darkGrey,
      boxShadow: 'none!important'
    }
  },
  prevNext: {
    width: 104
  }
}));

export default CatalogList;