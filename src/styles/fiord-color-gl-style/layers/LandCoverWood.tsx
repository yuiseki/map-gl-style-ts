import { Layer } from "react-map-gl/maplibre";

export const FiordColorGLStyleLandCoverWood: React.FC = () => {
  return (
    <Layer
      id="landcover-wood"
      key="landcover-wood"
      type="fill"
      source="openmaptiles"
      source-layer="landcover"
      minzoom={10}
      filter={["all", ["==", "$type", "Polygon"], ["==", "class", "wood"]]}
      layout={{ visibility: "visible" }}
      paint={{
        "fill-color": "hsla(232, 18%, 30%, 0.57)",
        "fill-opacity": {
          base: 1,
          stops: [
            [9, 0],
            [12, 1],
          ],
        },
      }}
    />
  );
};
