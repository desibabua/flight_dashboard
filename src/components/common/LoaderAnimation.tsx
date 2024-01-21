import { Container } from "@mui/material";
import Lottie from "react-lottie-player";
import lottieJson from "../../assets/loader.json";
import "./LoaderAnimation.css";

function LoaderAnimation() {
  return (
    <Container className="loader">
      <Lottie
        loop
        animationData={lottieJson}
        play
        speed={2}
        style={{ width: 500, height: 500 }}
      />
    </Container>
  );
}

export default LoaderAnimation;
