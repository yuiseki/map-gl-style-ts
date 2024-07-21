import { Layer } from "react-map-gl/maplibre";

export const PositronGLStyleHighWayPath: React.FC = () => {
  return (
    <Layer
      id="highway-path"
      key="highway-path"
      type="line"
      source="openmaptiles"
      source-layer="transportation"
      minzoom={12}
      filter={["all", ["==", "$type", "LineString"], ["==", "class", "path"]]}
      layout={{
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      }}
      paint={{
        "line-color": "rgb(234, 234, 234)",
        "line-opacity": 0.9,
        "line-width": {
          base: 1.2,
          stops: [
            [13, 1],
            [20, 10],
          ],
        },
      }}
    />
  );
};
