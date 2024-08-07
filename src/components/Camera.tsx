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
          "카메라 계열 장치에 접근할 수 없습니다. 카메라를 연결하거나 다른 브라우저에서 시도해보세요.",
        permissionDenied:
          "카메라 액세스 권한이 거부되었습니다. 권한을 허용한 뒤 리로드 해보세요.",
        switchCamera:
          "It is not possible to switch camera to different one because there is only one video device accessible.",
        canvas: "Canvas is not supported.",
      }}
      ref={camera}
    />
  );
};

export default Test;
