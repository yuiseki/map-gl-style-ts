import { Layer } from "react-map-gl/maplibre";

export const FiordColorGLStylePlaceOther: React.FC = () => {
  return (
    <Layer
      id="place-other"
      key="place-other"
      type="symbol"
      source="openmaptiles"
      source-layer="place"
      maxzoom={14}
      filter={[
        "all",
        ["in", "class", "hamlet", "neighbourhood", "isolated_dwelling"],
        ["==", "$type", "Point"],
      ]}
      layout={{
        "text-anchor": "center",
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-font": ["Metropolis Regular", "Noto Sans Regular"],
        "text-justify": "center",
        "text-offset": [0.5, 0],
        "text-size": 10,
        "text-transform": "uppercase",
        visibility: "visible",
      }}
      paint={{
        "text-color": "hsl(195, 37%, 73%)",
        "text-halo-blur": 1,
        "text-halo-color": "hsla(228, 60%, 21%, 0.7)",
        "text-halo-width": 1,
        "text-opacity": 0.6,
      }}
    />
  );
};
