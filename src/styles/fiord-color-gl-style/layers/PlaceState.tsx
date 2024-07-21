import { Layer } from "react-map-gl/maplibre";

export const FiordColorGLStylePlaceState: React.FC = () => {
  return (
    <Layer
      id="place-state"
      key="place-state"
      type="symbol"
      source="openmaptiles"
      source-layer="place"
      maxzoom={12}
      filter={["all", ["==", "$type", "Point"], ["==", "class", "state"]]}
      layout={{
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-font": ["Metropolis Regular", "Noto Sans Regular"],
        "text-size": 10,
        "text-transform": "uppercase",
        visibility: "visible",
      }}
      paint={{
        "text-color": "rgb(113, 129, 144)",
        "text-halo-blur": 1,
        "text-halo-color": "hsla(228, 60%, 21%, 0.7)",
        "text-halo-width": 1,
      }}
    />
  );
};
