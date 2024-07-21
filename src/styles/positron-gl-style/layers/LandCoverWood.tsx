import { Layer } from "react-map-gl/maplibre";

export const PositronGLStyleLandCoverWood: React.FC = () => {
  return (
    <Layer
      id="landcover-wood"
      key="landcover-wood"
      type="fill"
      source="openmaptiles"
      source-layer="landcover"
      maxzoom={10}
      filter={["all", ["==", "$type", "Polygon"], ["==", "class", "wood"]]}
      layout={{ visibility: "visible" }}
      paint={{
        "fill-color": "rgb(220,224,220)",
        "fill-opacity": {"base": 1, "stops": [[8, 0], [12, 1]]}
      }}
    />
  );
}