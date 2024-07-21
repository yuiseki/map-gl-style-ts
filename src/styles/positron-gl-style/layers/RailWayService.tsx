import { Layer } from "react-map-gl/maplibre";

export const PositronGLStyleRailWayService: React.FC = () => {
  return (
    <Layer
      id="railway-service"
      key="railway-service"
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
        "line-width": 3,
      }}
    />
  );
};
