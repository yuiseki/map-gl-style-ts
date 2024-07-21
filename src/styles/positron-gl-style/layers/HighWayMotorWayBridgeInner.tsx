import { Layer } from "react-map-gl/maplibre";

export const PositronGLStyleHighWayMotorWayBridgeInner: React.FC = () => {
  return (
    <Layer
      id="highway-motorway-bridge-inner"
      key="highway-motorway-bridge-inner"
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
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      }}
      paint={{
        "line-color": {
          base: 1,
          stops: [
            [5.8, "hsla(0, 0%, 85%, 0.53)"],
            [6, "#fff"],
          ],
        },
        "line-width": {
          base: 1.4,
          stops: [
            [4, 2],
            [6, 1.3],
            [20, 30],
          ],
        },
      }}
    />
  );
};
