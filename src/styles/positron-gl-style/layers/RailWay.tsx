import { Layer } from "react-map-gl/maplibre";

export const PositronGLStyleRailWay: React.FC = () => {
  return (
    <Layer
      id="railway"
      key="railway"
      type="line"
      source="openmaptiles"
      source-layer="transportation"
      minzoom={13}
      filter={[
        "all",
        ["==", "$type", "LineString"],
        ["all", ["!has", "service"], ["==", "class", "rail"]],
      ]}
      layout={{ "line-join": "round", visibility: "visible" }}
      paint={{
        "line-color": "#dddddd",
        "line-width": {
          base: 1.3,
          stops: [
            [16, 3],
            [20, 7],
          ],
        },
      }}
    />
  );
};
