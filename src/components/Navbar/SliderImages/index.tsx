import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';

const images = [
  {
    url: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1682687221363-72518513620e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8g',
  },
  {
    url: 'https://unsplash.com/photos/a-group-of-palm-trees-on-a-beach-7rXqMiPA48E',
  },
  {
    url: 'https://images.unsplash.com/photo-1702350310771-65ea21568baa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8',
  },
  {
    url: 'https://images.unsplash.com/photo-1682687221080-5cb261c645cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    url: 'https://images.unsplash.com/photo-1702017623971-64da69ced58f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D',
  },
  { url: 'images/7.jpg' },
];
const SliderImages = () => {
  return (
    <SimpleImageSlider
      width={896}
      height={504}
      images={images}
      showBullets={true}
      showNavs={true}
    />
  );
};

export default SliderImages;
