import { Layer } from "react-map-gl";

export const FiordColorGLStylePlaceCountryOther: React.FC = () => {
  return (
    <Layer
      id="place-country-other"
      key="place-country-other"
      type="symbol"
      source="openmaptiles"
      source-layer="place"
      maxzoom={8}
      filter={[
        "all",
        ["==", "$type", "Point"],
        ["==", "class", "country"],
        ["!has", "iso_a2"],
      ]}
      layout={{
        "text-field": "{name:latin}",
        "text-font": ["Metropolis Light Italic", "Noto Sans Italic"],
        "text-size": {
          base: 1,
          stops: [
            [0, 9],
            [6, 11],
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
        "text-halo-color": "hsla(228, 60%, 21%, 0.7)",
        "text-halo-width": 1.4,
        "text-opacity": 1,
      }}
    />
  );
};
