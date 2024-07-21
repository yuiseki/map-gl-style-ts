import { Layer } from "react-map-gl/maplibre";

export const PositronGLStyleBuilding: React.FC = () => {
  return (
    <Layer
      id="building"
      key="building"
      type="fill"
      source="openmaptiles"
      source-layer="building"
      minzoom={12}
      paint={{
        "fill-antialias": true,
        "fill-color": "rgb(234, 234, 229)",
        "fill-outline-color": "rgb(219, 219, 218)"
      }}
    />
  );
}
