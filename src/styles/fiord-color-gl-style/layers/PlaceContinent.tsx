import { Layer } from "react-map-gl/maplibre";

export const FiordColorGLStylePlaceContinent: React.FC = () => {
  return (
    <Layer
      id="place-continent"
      key="place-continent"
      type="symbol"
      source="openmaptiles"
      source-layer="place"
      maxzoom={6}
      filter={["all", ["==", "$type", "Point"], ["==", "class", "continent"]]}
      layout={{
        "text-anchor": "center",
        "text-field": "{name:latin}",
        "text-font": ["Metropolis Regular", "Noto Sans Regular"],
        "text-size": {
          base: 1.4,
          stops: [
            [0, 10],
            [3, 12],
            [4, 14],
          ],
        },
        "text-transform": "uppercase",
        visibility: "visible",
      }}
      paint={{
        "text-color": "hsl(0, 0%, 100%)",
        "text-halo-color": "hsla(228, 60%, 21%, 0.7)",
        "text-halo-width": 1.4,
        "text-opacity": {
          base: 1,
          stops: [
            [0, 0.6],
            [3, 0],
          ],
        },
      }}
    />
  );
};
