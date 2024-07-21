import { Layer } from "react-map-gl/maplibre";

export const FiordColorGLStyleRailWayService: React.FC = () => {
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
      layout={{ "line-join": "round", visibility: "visible" }}
      paint={{
        "line-color": "hsl(200, 65%, 11%)",
        "line-width": 3,
      }}
    />
  );
};
