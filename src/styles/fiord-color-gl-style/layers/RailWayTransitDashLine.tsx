import { Layer } from "react-map-gl/maplibre";

export const FiordColorGLStyleRailWayTransitDashLine: React.FC = () => {
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
      layout={{ "line-join": "round", visibility: "visible" }}
      paint={{
        "line-color": "hsl(193, 63%, 26%)",
        "line-dasharray": [3, 3],
        "line-width": 2,
      }}
    />
  );
};
