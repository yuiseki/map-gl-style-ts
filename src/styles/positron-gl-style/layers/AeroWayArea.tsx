import { Layer } from "react-map-gl/maplibre";

export const PositronGLStyleAeroWayArea: React.FC = () => {
  return (
    <Layer
      id="aeroway-area"
      key="aeroway-area"
      type="fill"
      source="openmaptiles"
      source-layer="aeroway"
      minzoom={4}
      filter={[
        "all",
        ["==", "$type", "Polygon"],
        ["in", "class", "runway", "taxiway"],
      ]}
      layout={{ visibility: "visible" }}
      paint={{
        "fill-color": "rgba(255, 255, 255, 1)",
        "fill-opacity": {
          base: 1,
          stops: [
            [13, 0],
            [14, 1],
          ],
        },
      }}
    />
  );
};
