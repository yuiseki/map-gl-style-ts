import { Layer } from "react-map-gl/maplibre";

export const FiordColorGLStyleParkOutline: React.FC = () => {
  return (
    <Layer
      id="park-outline"
      key="park-outline"
      type="line"
      source="openmaptiles"
      source-layer="park"
      filter={["==", "$type", "Polygon"]}
      layout={{ visibility: "visible" }}
      paint={{
        "line-color": "hsl(205, 49%, 31%)",
        "line-dasharray": [2, 2],
      }}
    />
  );
};
