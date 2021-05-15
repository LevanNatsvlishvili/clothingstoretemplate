import ImageGallery from 'react-image-gallery';
import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import { makeStyles } from '@material-ui/styles';
import 'swiper/swiper-bundle.css';

const ProductViewer = (props) => {
  const classes = useStyles();
  const { imgArray } = props;
  const images = [];

  if (imgArray) {
    imgArray.map((img, index) => {
      images.push({
        original: `${process.env.PUBLIC_URL}/images/product/${img}`,
        thumbnail: `${process.env.PUBLIC_URL}/images/product/${img}`,
      })
    })
  }

  return <ImageGallery
    items={images}
    additionalClass={classes.gallery}
    showPlayButton={false}
    thumbnailPosition={'bottom'}
    showNav={false}
    showFullscreenButton={false}
  />;
}

export default ProductViewer;

const useStyles = makeStyles((theme) => ({
  gallery: {
    '& .image-gallery-thumbnails-container': {
      textAlign: 'left',
    },
    '& .image-gallery-image': {
      objectFit: 'cover'
    },
    '& .image-gallery-slides img': {
      height: 500
    },
  },
}));
