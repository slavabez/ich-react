import pic from "../office_picture.jpg";

function ImageComponent() {
  return (
    <img
      className="ImageComponent"
      src={pic}
      alt="office exterior"
    />
  );
}

export default ImageComponent;
