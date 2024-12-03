import Lottie from "lottie-react";

import animation from "../../shared/assets/animations/loading_main_2.json";
import LoadingPageWrapper from "./LoadingPageWrapper";

const LoadingPage = () => {
  console.log("loading");

  return (
    <LoadingPageWrapper>
      <Lottie animationData={animation} loop autoplay />
    </LoadingPageWrapper>
  );
};

export default LoadingPage;
