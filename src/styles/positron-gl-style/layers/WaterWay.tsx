import { Layer } from "react-map-gl/maplibre";

export const PositronGLStyleWaterWay: React.FC = () => {
  return (
    <Layer
      id="waterway"
      key="waterway"
      type="line"
      source="openmaptiles"
      source-layer="waterway"
      minzoom={8}
      filter={["==", "$type", "LineString"]}
      layout={{ visibility: "visible" }}
      paint={{"line-color": "hsl(195, 17%, 78%)"}}
    />
  );
}