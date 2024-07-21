import { Layer } from "react-map-gl/maplibre";

export const PositronGLStyleRailWayDashLine: React.FC = () => {
  return (
    <Layer
      id="railway-dashline"
      key="railway-dashline"
      type="line"
      source="openmaptiles"
      source-layer="transportation"
      minzoom={16}
      filter={[
        "all",
        ["==", "$type", "LineString"],
        ["all", ["!has", "service"], ["==", "class", "rail"]],
      ]}
      layout={{
        "line-join": "round",
        visibility: "visible",
      }}
      paint={{
        "line-color": "#fafafa",
        "line-dasharray": [3, 3],
        "line-width": {
          base: 1.3,
          stops: [
            [16, 2],
            [20, 6],
          ],
        },
      }}
    />
  );
};
