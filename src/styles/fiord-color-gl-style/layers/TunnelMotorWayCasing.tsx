import { Layer } from "react-map-gl/maplibre";

export const FiordColorGLStyleTunnelMotorWayCasing: React.FC = () => {
  return (
    <Layer
      id="tunnel_motorway_casing"
      key="tunnel_motorway_casing"
      type="line"
      source="openmaptiles"
      source-layer="transportation"
      minzoom={8}
      filter={[
        "all",
        ["==", "$type", "LineString"],
        ["all", ["==", "brunnel", "tunnel"], ["==", "class", "motorway"]],
      ]}
      layout={{
        "line-cap": "butt",
        "line-join": "miter",
        visibility: "visible",
      }}
      paint={{
        "line-color": "#3C4357",
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
