import { Layer } from "react-map-gl/maplibre";

export const PositronGLStyleAeroWayRunway: React.FC = () => {
  return (
    <Layer
      id="aeroway-runway"
      key="aeroway-runway"
      type="line"
      source="openmaptiles"
      source-layer="aeroway"
      minzoom={11}
      filter={["all", ["in", "class", "runway"], ["==", "$type", "LineString"]]}
      layout={{
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      }}
      paint={{
        "line-color": "rgba(255, 255, 255, 1)",
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
