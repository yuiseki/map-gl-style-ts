import { Layer } from "react-map-gl/maplibre";

export const PositronGLStyleBackground: React.FC = () => {
  return (
    <Layer
      id="background"
      key="background"
      type="background"
      paint={{ "background-color": "rgb(242, 243, 240)" }}
    />
  );
}