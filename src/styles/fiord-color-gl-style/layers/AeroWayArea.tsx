import { Layer } from "react-map-gl/maplibre";

export const FiordColorGLStyleAeroWayArea: React.FC = () => {
  return (
    <Layer
      id="aeroway-area"
      key="aeroway-area"
      type="fill"
      source="openmaptiles"
      source-layer="aeroway"
      minzoom={4}
      filter={[
        "all",
        ["==", "$type", "Polygon"],
        ["in", "class", "runway", "taxiway"],
      ]}
      layout={{ visibility: "visible" }}
      paint={{
        "fill-color": "hsl(224, 20%, 29%)",
        "fill-opacity": 1,
      }}
    />
  );
};
