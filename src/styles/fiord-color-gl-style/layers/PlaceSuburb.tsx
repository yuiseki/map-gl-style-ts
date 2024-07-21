import { Layer } from "react-map-gl";

export const FiordColorGLStylePlaceSuburb: React.FC = () => {
  return (
    <Layer
      id="place-suburb"
      key="place-suburb"
      type="symbol"
      source="openmaptiles"
      source-layer="place"
      maxzoom={15}
      filter={["all", ["==", "$type", "Point"], ["==", "class", "suburb"]]}
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
        "text-color": "hsl(195, 41%, 49%)",
        "text-halo-blur": 1,
        "text-halo-color": "hsla(228, 60%, 21%, 0.7)",
        "text-halo-width": 1,
      }}
    />
  );
};
