import { Layer } from "react-map-gl/maplibre";

export const FiordColorGLStyleHighWayMotorWaySubtle: React.FC = () => {
  return (
    <Layer
      id="highway-motorway-subtle"
      key="highway-motorway-subtle"
      type="line"
      source="openmaptiles"
      source-layer="transportation"
      maxzoom={6}
      filter={[
        "all",
        ["==", "$type", "LineString"],
        ["==", "class", "motorway"],
      ]}
      layout={{
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      }}
      paint={{
        "line-color": "hsla(239, 45%, 69%, 0.2)",
        "line-width": {
          base: 1.4,
          stops: [
            [4, 2],
            [6, 1.3],
          ],
        },
      }}
    />
  );
};
