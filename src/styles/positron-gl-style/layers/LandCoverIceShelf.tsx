import { Layer } from "react-map-gl/maplibre";

export const PositronGLStyleLandCoverIceShelf: React.FC = () => {
  return (
    <Layer
      id="landcover-ice-shelf"
      key="landcover-ice-shelf"
      type="fill"
      source="openmaptiles"
      source-layer="landcover"
      maxzoom={8}
      filter={["all", ["==", "$type", "Polygon"], ["==", "subclass", "ice_shelf"]]}
      layout={{ visibility: "visible" }}
      paint={{"fill-color": "hsl(0, 0%, 98%)", "fill-opacity": 0.7}}
    />
  );
}
