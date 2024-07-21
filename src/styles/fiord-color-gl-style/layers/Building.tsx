import { Layer } from "react-map-gl/maplibre";

export const FiordColorGLStyleBuilding: React.FC = () => {
  return (
    <Layer
      id="building"
      key="building"
      type="fill"
      source="openmaptiles"
      source-layer="building"
      minzoom={12}
      filter={["==", "$type", "Polygon"]}
      layout={{ visibility: "visible" }}
      paint={{
"fill-antialias": false,
"fill-color": "hsla(232, 47%, 18%, 0.65)",
"fill-opacity": 0.25
}}
    />
  );
}