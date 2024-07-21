import { Layer } from "react-map-gl/maplibre";

export const PositronGLStyleWaterName: React.FC = () => {
  return (
    <Layer
      id="water-name"
      type="symbol"
      source="openmaptiles"
      source-layer="water_name"
      filter={["==", "$type", "LineString"]}
      layout={{
        "symbol-placement": "line",
        "symbol-spacing": 500,
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-font": ["Metropolis Medium Italic", "Noto Sans Italic"],
        "text-rotation-alignment": "map",
        "text-size": 12
      }}
      paint={{
        "text-color": "rgb(157,169,177)",
        "text-halo-blur": 1,
        "text-halo-color": "rgb(242,243,240)",
        "text-halo-width": 1
      }}
    />
  );
}