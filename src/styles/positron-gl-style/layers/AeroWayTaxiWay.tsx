import { Layer } from "react-map-gl/maplibre";

export const PositronGLStyleAeroWayTaxiWay: React.FC = () => {
  return (
    <Layer
      id="aeroway-taxiway"
      key="aeroway-taxiway"
      type="line"
      source="openmaptiles"
      source-layer="aeroway"
      minzoom={12}
      filter={["all", ["in", "class", "taxiway"]]}
      layout={{
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      }}
      paint={{
        "line-color": "hsl(0, 0%, 88%)",
        "line-opacity": 1,
        "line-width": {
          base: 1.55,
          stops: [
            [13, 1.8],
            [20, 20],
          ],
        },
      }}
    />
  );
};
