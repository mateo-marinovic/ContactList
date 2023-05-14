import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

import "./ImageFrame.css";

const ImageFrame = ({ imageUrl }: Props) => {
  const icon = (
    <FontAwesomeIcon
      icon={faUserTie}
      size="3x"
    />
  );

  const photo = (
    <img
      className="img"
      src={imageUrl}
    />
  );

  return <div className="image-frame">{imageUrl ? photo : icon}</div>;
};

type Props = {
  imageUrl: string;
};

export default ImageFrame;
