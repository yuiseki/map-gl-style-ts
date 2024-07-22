import { Layer } from "react-map-gl/maplibre";

export const FiordColorGLStylePark: React.FC = () => {
  return (
    <Layer
      id="park"
      key="park"
      type="fill"
      source="openmaptiles"
      source-layer="park"
      filter={["==", "$type", "Polygon"]}
      layout={{ visibility: "visible" }}
      paint={{
        "fill-color": "hsl(204, 17%, 35%)",
        "fill-opacity": 0.3,
      }}
    />
  );
};
