import { Layer } from "react-map-gl/maplibre";

export const PositronGLStyleRoadAreaPier: React.FC = () => {
  return (
    <Layer
      id="road-area-pier"
      key="road-area-pier"
      type="fill"
      source="openmaptiles"
      source-layer="transportation"
      minzoom={13}
      filter={["all", ["==", "$type", "Polygon"], ["==", "class", "pier"]]}
      layout={{"visibility": "visible"}}
      paint={{"fill-antialias": true, "fill-color": "rgb(242,243,240)"}}
    />
  );
};
