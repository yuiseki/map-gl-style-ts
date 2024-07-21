import { Layer } from "react-map-gl/maplibre";

export const FiordColorGLStyleHighWayMajorInner: React.FC = () => {
  return (
    <Layer
      id="highway-major-inner"
      key="highway-major-inner"
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
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      }}
      paint={{
        "line-color": "#3C4357",
        "line-width": {
          base: 1.3,
          stops: [
            [10, 2],
            [20, 20],
          ],
        },
      }}
    />
  );
};
