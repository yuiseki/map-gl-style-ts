import { Layer } from "react-map-gl/maplibre";

export const FiordColorGLStyleRoadPier: React.FC = () => {
  return (
    <Layer
      id="road-pier"
      key="road-pier"
      type="line"
      source="openmaptiles"
      source-layer="transportation"
      filter={["all", ["==", "$type", "LineString"], ["==", "class", "pier"]]}
      layout={{
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      }}
      paint={{
        "line-color": "#45516E",
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
