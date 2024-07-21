import { Layer } from "react-map-gl/maplibre";

export const PositronGLStyleHighWayMajorSubtle: React.FC = () => {
  return (
    <Layer
      id="highway-major-subtle"
      key="highway-major-subtle"
      type="line"
      source="openmaptiles"
      source-layer="transportation"
      minzoom={11}
      filter={[
        "all",
        ["==", "$type", "LineString"],
        ["in", "class", "primary", "secondary", "tertiary", "trunk"],
      ]}
      layout={{
        "line-cap": "butt",
        "line-join": "miter",
        visibility: "visible",
      }}
      paint={{
        "line-color": "hsla(0, 0%, 85%, 0.69)",
        "line-width": 2,
      }}
    />
  );
};
