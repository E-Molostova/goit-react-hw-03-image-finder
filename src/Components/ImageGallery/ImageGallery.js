import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import style from './ImageGallery.module.css';

const ImageGallery = ({ gallery, openImg }) => {
  return (
    <ul className={style.ImageGallery}>
      {gallery.map(image => (
        <ImageGalleryItem key={image.id} image={image} openImg={openImg} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.object),
  openImg: PropTypes.func,
};

export default ImageGallery;
