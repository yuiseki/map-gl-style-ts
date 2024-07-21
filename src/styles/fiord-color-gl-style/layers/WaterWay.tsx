import { Layer } from "react-map-gl/maplibre";

export const FiordColorGLStyleWaterWay: React.FC = () => {
  return (
    <Layer
      id="waterway"
      key="waterway"
      type="line"
      source="openmaptiles"
      source-layer="waterway"
      filter={["==", "$type", "LineString"]}
      layout={{ visibility: "visible" }}
      paint={{
        "line-color": "hsl(232, 23%, 28%)",
        "line-opacity": 0.6,
      }}
    />
  );
};
