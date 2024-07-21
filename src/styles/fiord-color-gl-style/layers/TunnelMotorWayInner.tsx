import { Layer } from "react-map-gl/maplibre";

export const FiordColorGLStyleTunnelMotorWayInner: React.FC = () => {
  return (
    <Layer
      id="tunnel_motorway_inner"
      key="tunnel_motorway_inner"
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
        "line-color": "hsl(224, 18%, 21%)",
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
