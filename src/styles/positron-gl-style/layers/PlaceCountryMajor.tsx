import { Layer } from "react-map-gl/maplibre";

export const PositronGLStylePlaceCountryMajor: React.FC = () => {
  return (
    <Layer
      id="place-country-major"
      key="place-country-major"
      type="symbol"
      source="openmaptiles"
      source-layer="places"
      maxzoom={6}
      filter={[
        "all",
        ["==", "$type", "Point"],
        ["<=", "rank", 1],
        ["==", "class", "country"],
        ["has", "iso_a2"],
      ]}
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
