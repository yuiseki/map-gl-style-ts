import { Layer } from "react-map-gl/maplibre";

export const PositronGLStyleHighWayMotorWayCasing: React.FC = () => {
  return (
    <Layer
      id="highway-motorway-casing"
      key="highway-motorway-casing"
      type="line"
      source="openmaptiles"
      source-layer="transportation"
      minzoom={6}
      filter={[
        "all",
        ["==", "$type", "LineString"],
        [
          "all",
          ["!in", "brunnel", "bridge", "tunnel"],
          ["==", "class", "motorway"],
        ],
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
            [6, 3],
            [20, 40],
          ],
        },
      }}
    />
  );
};
