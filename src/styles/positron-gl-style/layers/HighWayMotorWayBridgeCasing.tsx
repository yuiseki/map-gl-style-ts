import { Layer } from "react-map-gl/maplibre";

export const PositronGLStyleHighWayMotorWayBridgeCasing: React.FC = () => {
  return (
    <Layer
      id="highway-motorway-bridge-casing"
      key="highway-motorway-bridge-casing"
      type="line"
      source="openmaptiles"
      source-layer="transportation"
      minzoom={6}
      filter={[
        "all",
        ["==", "$type", "LineString"],
        ["all", ["==", "brunnel", "bridge"], ["==", "class", "motorway"]],
      ]}
      layout={{
        "line-cap": "butt",
        "line-join": "miter",
        visibility: "visible",
      }}
      paint={{
        "line-color": "rgb(213, 213, 213)",
        "line-dasharray": [2, 0],
        "line-opacity": 1,
        "line-width": {
          base: 1.4,
          stops: [
            [5.8, 0],
            [6, 5],
            [20, 45],
          ],
        },
      }}
    />
  );
};
