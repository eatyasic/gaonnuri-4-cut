import { useState, useRef } from "react";
import { Camera } from "react-camera-pro";

const Test = () => {
  const camera = useRef<any>(null);
  const [image, setImage] = useState("0");

  return (
    <Camera
      aspectRatio={"cover"}
      errorMessages={{
        noCameraAccessible:
          "No camera device accessible. Please connect your camera or try a different browser.",
        permissionDenied:
          "Permission denied. Please refresh and give camera permission.",
        switchCamera:
          "It is not possible to switch camera to different one because there is only one video device accessible.",
        canvas: "Canvas is not supported.",
      }}
      ref={camera}
    />
  );
};

export default Test;
