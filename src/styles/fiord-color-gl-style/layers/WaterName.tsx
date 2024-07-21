import { Layer } from "react-map-gl/maplibre";

export const FiordColorGLStyleWaterName: React.FC = () => {
  return (
    <Layer
      id="water-name"
      key="water-name"
      type="symbol"
      source="openmaptiles"
      source-layer="water_name"
      minzoom={13}
      filter={["==", "$type", "LineString"]}
      layout={{
        "symbol-placement": "line",
        "symbol-spacing": 500,
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-font": ["Metropolis Medium Italic", "Noto Sans Italic"],
        "text-rotation-alignment": "map",
        "text-size": 12,
        visibility: "visible",
      }}
      paint={{
        "text-color": "hsl(223, 21%, 52%)",
        "text-halo-blur": 0,
        "text-halo-color": "hsl(232, 5%, 19%)",
        "text-halo-width": 1,
      }}
    />
  );
};
