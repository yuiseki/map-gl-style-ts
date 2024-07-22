import { Layer } from "react-map-gl/maplibre";

export const FiordColorGLStyleLandUseResidential: React.FC = () => {
  return (
    <Layer
      id="landuse-residential"
      key="landuse-residential"
      type="fill"
      source="openmaptiles"
      source-layer="landuse"
      maxzoom={16}
      filter={[
        "all",
        ["==", "$type", "Polygon"],
        ["==", "class", "residential"],
      ]}
      layout={{ visibility: "visible" }}
      paint={{
        "fill-color": "rgb(234, 234, 230)",
        "fill-opacity": {
          base: 0.6,
          stops: [
            [8, 0.8],
            [9, 0.6],
          ],
        },
      }}
    />
  );
};
