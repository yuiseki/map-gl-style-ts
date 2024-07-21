import { Layer } from "react-map-gl/maplibre";

export const FiordColorGLStyleLandCoverIceShelf: React.FC = () => {
  return (
    <Layer
      id="landcover_ice_shelf"
      key="landcover_ice_shelf"
      type="fill"
      source="openmaptiles"
      source-layer="landcover"
      maxzoom={8}
      filter={[
        "all",
        ["==", "$type", "Polygon"],
        ["==", "subclass", "ice_shelf"],
      ]}
      layout={{ visibility: "visible" }}
      paint={{
        "fill-color": "hsl(232, 33%, 34%)",
        "fill-opacity": 0.4,
      }}
    />
  );
};
