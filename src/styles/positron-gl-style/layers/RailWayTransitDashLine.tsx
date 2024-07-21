import { Layer } from "react-map-gl/maplibre";

export const PositronGLStyleRailWayTransitDashLine: React.FC = () => {
  return (
    <Layer
      id="railway-transit-dashline"
      key="railway-transit-dashline"
      type="line"
      source="openmaptiles"
      source-layer="transportation"
      minzoom={16}
      filter={[
        "all",
        ["==", "$type", "LineString"],
        ["all", ["==", "class", "transit"], ["!in", "brunnel", "tunnel"]],
      ]}
      layout={{
        "line-join": "round",
        visibility: "visible",
      }}
      paint={{
        "line-color": "#fafafa",
        "line-dasharray": [3, 3],
        "line-width": 2,
      }}
    />
  );
};
