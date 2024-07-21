import { Layer } from "react-map-gl/maplibre";

export const FiordColorGLStyleHighWayRef: React.FC = () => {
  return (
    <Layer
      id="highway-ref"
      key="highway-ref"
      type="symbol"
      source="openmaptiles"
      source-layer="transportation_name"
      filter={[
        "all",
        ["==", "$type", "LineString"],
        ["==", "class", "motorway"],
      ]}
      layout={{
        "symbol-placement": "line",
        "symbol-spacing": 350,
        "text-field": "{ref}",
        "text-font": ["Metropolis Light", "Noto Sans Regular"],
        "text-pitch-alignment": "viewport",
        "text-rotation-alignment": "viewport",
        "text-size": 10,
        visibility: "none",
      }}
      paint={{
        "text-color": "hsl(215, 57%, 77%)",
        "text-halo-blur": 1,
        "text-halo-color": "hsl(209, 64%, 19%)",
        "text-halo-width": 1,
        "text-opacity": 1,
        "text-translate": [0, 2],
      }}
    />
  );
};
