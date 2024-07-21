import { Layer } from "react-map-gl/maplibre";

export const FiordColorGLStyleRailWayServiceDashLine: React.FC = () => {
  return (
    <Layer
      id="railway-service-dash-line"
      key="railway-service-dash-line"
      type="line"
      source="openmaptiles"
      source-layer="transportation"
      minzoom={16}
      filter={[
        "all",
        ["==", "$type", "LineString"],
        ["all", ["==", "class", "rail"], ["has", "service"]],
      ]}
      layout={{ "line-join": "round", visibility: "visible" }}
      paint={{
        "line-color": "hsl(193, 63%, 26%)",
        "line-dasharray": [3, 3],
        "line-width": 2,
      }}
    />
  );
};
