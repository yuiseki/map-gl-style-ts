import { Layer } from "react-map-gl/maplibre";

export const PositronGLStyleWater: React.FC = () => {
  return (
    <Layer
      id="water"
      key="water"
      type="fill"
      source="openmaptiles"
      source-layer="water"
      filter={["all", ["==", "$type", "Polygon"], ["!=", "brunnel", "tunnel"]]}
      layout={{ visibility: "visible" }}
      paint={{ "fill-antialias": true, "fill-color": "rgb(194, 200, 202)" }}
    />
  );
}
