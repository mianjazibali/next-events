const ImageLoader = ({ src, width, quality }) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH}/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export default ImageLoader;
