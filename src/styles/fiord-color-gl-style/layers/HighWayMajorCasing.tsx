import { Layer } from "react-map-gl";

export const FiordColorGLStyleHighWayMajorCasing: React.FC = () => {
  return (
    <Layer
      id="highway-major-casing"
      key="highway-major-casing"
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
        "line-color": "hsl(224, 22%, 45%)",
        "line-dasharray": [12, 0],
        "line-width": {
          base: 1.3,
          stops: [
            [10, 3],
            [20, 23],
          ],
        },
      }}
    />
  );
};
