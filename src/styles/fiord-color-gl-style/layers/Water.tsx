import { Layer } from "react-map-gl/maplibre";

export const FiordColorGLStyleWater: React.FC = () => {
  return (
    <Layer
      id="water"
      key="water"
      type="fill"
      source="openmaptiles"
      source-layer="water"
      filter={["==", "$type", "Polygon"]}
      layout={{ visibility: "visible" }}
      paint={{
        "fill-antialias": false,
        "fill-color": "#38435C",
      }}
    />
  );
};
