import { Layer } from "react-map-gl/maplibre";

export const PositronGLStyleHighWayMajorInner: React.FC = () => {
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
        "line-join": "round",
        "line-cap": "round",
        visibility: "visible",
      }}
      paint={{
        "line-color": "#fff",
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
