import React, { useRef, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles, useTheme } from '@material-ui/styles';
import Slider from "react-slick";
import { Link } from "react-router-dom";
import getWindowDimensions from "Utils/getWindowDimensions";


const ProductCarousel = (props) => {
  const classes = useStyles();
  const { width } = getWindowDimensions();
  const { heading, viewMoreAdress, products } = props;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1
  };
  let slidesToShow;

  if (width < 760 && width > 540) {
    slidesToShow = 3;
  } else if (width < 540) {
    slidesToShow = 2;
  } else {
    slidesToShow = 4;
  }

  return (
    <div>
      <div className='d-flex mb-2'>
        <h5 className={classes.headingText}>{heading}</h5>
        <Link to={viewMoreAdress} className={classes.viewMore}>View More</Link>
      </div>
      <Slider
        className={classes.slider}
        slidesToShow={slidesToShow}
        {...settings}
      >
        {products.map((product, index) => (
          <Link key={index} to={product.address}>
            <div className={classes.product}>
              <img src={process.env.PUBLIC_URL + product.img} alt='product' />
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}

export default ProductCarousel;

const useStyles = makeStyles((theme) => ({
  slider: {
    padding: '22.5px 45px 15px 45px',
    background: '#fff',
    borderRadius: '10px',
    '& button:first-child': {
      left: 11.5,
      '&::before': {
        color: theme.colors.black,
        opacity: 1
      }
    },
    '& button:last-child': {
      right: 20,
      '&::before': {
        color: theme.colors.black,
        opacity: 1
      }
    },
    '& button': {
      '&::before': {
        fontSize: 28
      }
    },
  },
  product: {
    height: 180,
    padding: 6,
    '& img': {
      width: '100%',
      height: '100%',
    },
    ['@media (max-width:450px)']: {
      height: 130,
    }
  },
  headingText: {
    fontSize: '22px',
    fontWeight: '500',
    color: theme.colors.black
  },
  viewMore: {
    color: theme.colors.darkGrey,
    marginLeft: 'auto',
    fontWeight: '700'
  },
}));