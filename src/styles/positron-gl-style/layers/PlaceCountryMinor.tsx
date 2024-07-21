import { Layer } from "react-map-gl/maplibre";

export const PositronGLStylePlaceCountryMinor: React.FC = () => {
  return (
    <Layer
      id="place-country-minor"
      key="place-country-minor"
      type="symbol"
      source="openmaptiles"
      source-layer="place"
      maxzoom={8}
      filter={[
        "all",
        ["==", "$type", "Point"],
        ["==", "class", "country"],
        [">=", "rank", 2],
        ["has", "iso_a2"],
      ]}
      layout={{
        "text-field": "{name:latin}",
        "text-font": ["Metropolis Regular", "Noto Sans Regular"],
        "text-size": {
          base: 1,
          stops: [
            [0, 10],
            [6, 12],
          ],
        },
        "text-transform": "uppercase",
        visibility: "visible",
      }}
      paint={{
        "text-color": {
          base: 1,
          stops: [
            [3, "rgb(157,169,177)"],
            [4, "rgb(153, 153, 153)"],
          ],
        },
        "text-halo-color": "rgba(236,236,234,0.7)",
        "text-halo-width": 1.4,
      }}
    />
  );
};
