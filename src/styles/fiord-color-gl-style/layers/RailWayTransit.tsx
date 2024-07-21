import { Layer } from "react-map-gl/maplibre";

export const FiordColorGLStyleRailWayTransit: React.FC = () => {
  return (
    <Layer
      id="railway-transit"
      key="railway-transit"
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
        "line-color": "hsl(200, 65%, 11%)",
        "line-width": 3,
      }}
    />
  );
};
