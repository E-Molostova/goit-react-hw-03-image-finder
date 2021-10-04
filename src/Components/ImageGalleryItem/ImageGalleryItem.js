import React from 'react';
import style from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, openImg }) => {
  return (
    <li
      className={style.ImageGalleryItem}
      onClick={() => {
        openImg(image.largeImageURL);
      }}
    >
      <img src={image.webformatURL} alt={image.tags} className={style.ImageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;
