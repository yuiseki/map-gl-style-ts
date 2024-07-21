import { Layer } from "react-map-gl/maplibre";

export const FiordColorGLStyleAeroWayRunWay: React.FC = () => {
  return (
    <Layer
      id="aeroway-runway"
      key="aeroway-runway"
      type="line"
      source="openmaptiles"
      source-layer="aeroway"
      filter={["all", ["==", "$type", "LineString"], ["==", "class", "runway"]]}
      layout={{
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      }}
      paint={{
        "line-color": "hsl(224, 20%, 29%)",
        "line-opacity": 1,
        "line-width": {
          base: 1.5,
          stops: [
            [11, 4],
            [17, 50],
          ],
        },
      }}
    />
  );
};
