const Image = ({ url }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w1280${url}`;

  return <img src={imageUrl} alt="" />;
};

export default Image;
