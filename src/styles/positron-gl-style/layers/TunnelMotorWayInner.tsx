import { Layer } from "react-map-gl/maplibre";

export const PositronGLStyleTunnelMotorWayInner: React.FC = () => {
  return (
    <Layer
      id="tunnel-motorway-inner"
      key="tunnel-motorway-inner"
      type="line"
      source="openmaptiles"
      source-layer="transportation"
      minzoom={6}
      filter={[
        "all",
        ["==", "$type", "LineString"],
        ["all", ["==", "brunnel", "tunnel"], ["==", "class", "motorway"]],
      ]}
      layout={{
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      }}
      paint={{
        "line-color": "rgb(234,234,234)",
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
