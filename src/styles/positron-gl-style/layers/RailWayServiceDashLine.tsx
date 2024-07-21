import { Layer } from "react-map-gl/maplibre";

export const PositronGLStyleRailWayServiceDashLine: React.FC = () => {
  return (
    <Layer
      id="railway-service-dashline"
      key="railway-service-dashline"
      type="line"
      source="openmaptiles"
      source-layer="transportation"
      minzoom={16}
      filter={[
        "all",
        ["==", "$type", "LineString"],
        ["all", ["==", "class", "rail"], ["has", "service"]],
      ]}
      layout={{
        "line-join": "round",
        visibility: "visible",
      }}
      paint={{
        "line-color": "#dddddd",
        "line-dasharray": [3, 3],
        "line-width": 2,
      }}
    />
  );
}
