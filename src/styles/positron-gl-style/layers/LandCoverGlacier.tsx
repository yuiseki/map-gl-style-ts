import { Layer } from "react-map-gl/maplibre";

export const PositronGLStyleLandCoverGlacier: React.FC = () => {
  return (
    <Layer
      id="landcover-glacier"
      key="landcover-glacier"
      type="fill"
      source="openmaptiles"
      source-layer="landcover"
      maxzoom={8}
      filter={["all", ["==", "$type", "Polygon"], ["==", "subclass", "glacier"]]}
      layout={{ visibility: "visible" }}
      paint={{
        "fill-color": "hsl(0, 0%, 98%)",
        "fill-opacity": {"base": 1, "stops": [[0, 1], [8, 0.5]]}
      }}
    />
  );
}