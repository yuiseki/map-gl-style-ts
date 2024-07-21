import { Layer } from "react-map-gl/maplibre";

export const PositronGLStylePark: React.FC = () => {
  return (
    <Layer
      id="park"
      key="park"
      type="fill"
      source="openmaptiles"
      source-layer="park"
      filter={["==", "$type", "Polygon"]}
      layout={{ visibility: "visible" }}
      paint={{ "fill-color": "rgb(230, 233, 229)" }}
    />
  );
}