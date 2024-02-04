const Picture = (props) => {
  return (
    <div>
      <h2>{props.alt_description}</h2>
      <img src={props.urls.small} alt="" />
      <p>{props.description}</p>
    </div>
  );
};

export default Picture;
