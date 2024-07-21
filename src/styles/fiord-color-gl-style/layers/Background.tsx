import { Layer } from "react-map-gl/maplibre";

export const FiordColorGLStyleBackground: React.FC = () => {
  return (
    <Layer
      id="background"
      key="background"
      type="background"
      paint={{ "background-color": "#45516E" }}
    />
  );
}