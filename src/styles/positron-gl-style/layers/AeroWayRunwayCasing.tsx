import { Layer } from "react-map-gl/maplibre";

export const PositronGLStyleAeroWayRunwayCasing: React.FC = () => {
  return (
    <Layer
      id="aeroway-runway-casing"
      key="aeroway-runway-casing"
      type="line"
      source="openmaptiles"
      source-layer="aeroway"
      minzoom={12}
      filter={["all", ["in", "class", "runway"]]}
      layout={{
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      }}
      paint={{
        "line-color": "hsl(0, 0%, 88%)",
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
