import { Image } from "@chakra-ui/react";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Background = () => {
  const { width, height } = useWindowDimensions();
  const img = `https://source.unsplash.com/random/${width}x${height}`;
  return (
    <Image
      position="fixed"
      top="0"
      left="0"
      bottom="0"
      right="0"
      zIndex="1"
      src={img}
      alt="bg"
    />
  );
};

export default Background;
