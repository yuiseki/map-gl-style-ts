import { Layer } from "react-map-gl/maplibre";

export const FiordColorGLStyleRoadAreaPier: React.FC = () => {
  return (
    <Layer
      id="road-area-pier"
      key="road-area-pier"
      type="fill"
      source="openmaptiles"
      source-layer="transportation"
      filter={["all", ["==", "$type", "Polygon"], ["==", "class", "pier"]]}
      layout={{ visibility: "visible" }}
      paint={{
        "fill-color": "#45516E",
        "fill-outline-color": "#45516E",
      }}
    />
  );
}