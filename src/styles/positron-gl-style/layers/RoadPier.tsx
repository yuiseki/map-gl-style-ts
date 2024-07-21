import { Layer } from "react-map-gl/maplibre";

export const PositronGLStyleRoadPier: React.FC = () => {
  return (
    <Layer
      id="road-pier"
      key="road-pier"
      type="line"
      source="openmaptiles"
      source-layer="transportation"
      minzoom={13}
      filter={["all", ["==", "$type", "LineString"], ["in", "class", "pier"]]}
      layout={{
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      }}
      paint={{
        "line-color": "rgb(242,243,240)",
        "line-width": {
          base: 1.2,
          stops: [
            [15, 1],
            [17, 4],
          ],
        },
      }}
    />
  );
};
