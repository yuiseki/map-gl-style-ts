import { Layer } from "react-map-gl/maplibre";

export const FiordColorGLStyleAeroWayRunWayCasing: React.FC = () => {
  return (
    <Layer
      id="aeroway-runway-casing"
      key="aeroway-runway-casing"
      type="line"
      source="openmaptiles"
      source-layer="aeroway"
      minzoom={11}
      filter={["all", ["in", "class", "runway"]]}
      layout={{
        "line-join": "round",
        "line-cap": "round",
        visibility: "visible",
      }}
      paint={{
        "line-color": "hsl(224, 22%, 45%)",
        "line-opacity": 1,
        "line-width": {
          base: 1.5,
          stops: [
            [11, 6],
            [17, 55],
          ],
        },
      }}
    />
  );
};
