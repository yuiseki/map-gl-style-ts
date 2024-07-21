import { Layer } from "react-map-gl/maplibre";

export const FiordColorGLStyleHighWayPath: React.FC = () => {
  return (
    <Layer
      id="highway-path"
      key="highway-path"
      type="line"
      source="openmaptiles"
      source-layer="transportation"
      filter={["all", ["==", "$type", "LineString"], ["==", "class", "path"]]}
      layout={{
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      }}
      paint={{
        "line-color": "hsl(211, 29%, 38%)",
        "line-dasharray": [2, 2],
        "line-opacity": 1,
        "line-width": {
          base: 1.2,
          stops: [
            [12, 0.5],
            [20, 4],
          ],
        },
      }}
    />
  );
};
