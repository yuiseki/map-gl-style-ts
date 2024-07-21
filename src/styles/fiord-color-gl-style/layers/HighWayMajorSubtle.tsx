import { Layer } from "react-map-gl/maplibre";

export const FiordColorGLStyleHighWayMajorSubtle: React.FC = () => {
  return (
    <Layer
      id="highway-major-subtle"
      key="highway-major-subtle"
      type="line"
      source="openmaptiles"
      source-layer="transportation"
      maxzoom={11}
      filter={["all", ["==", "$type", "LineString"], ["in", "class", "primary", "secondary", "tertiary", "trunk"]]}
      layout={{ "line-cap": "round",
"line-join": "round",visibility: "visible" }}
      paint={{
"line-color": "#3D4355",
"line-opacity": 0.6,
"line-width": 2
}}
    />
  );
}