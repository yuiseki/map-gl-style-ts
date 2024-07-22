import { Layer } from "react-map-gl/maplibre";

export const FiordColorGLStylePlaceTown: React.FC = () => {
  return (
    <Layer
      id="place-town"
      key="place-town"
      type="symbol"
      source="openmaptiles"
      source-layer="place"
      maxzoom={15}
      filter={["all", ["==", "$type", "Point"], ["==", "class", "town"]]}
      layout={{
        "icon-image": {
          base: 1,
          stops: [
            [0, "circle-11"],
            [9, ""],
          ],
        },
        "icon-size": 0.4,
        "text-anchor": {
          base: 1,
          stops: [
            [0, "left"],
            [8, "center"],
          ],
        },
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-font": ["Metropolis Regular", "Noto Sans Regular"],
        "text-justify": "left",
        "text-offset": [0.5, 0.2],
        "text-size": 10,
        "text-transform": "uppercase",
        visibility: "visible",
      }}
      paint={{
        "icon-opacity": 0.7,
        "text-color": "hsl(195, 25%, 76%)",
        "text-halo-blur": 1,
        "text-halo-color": "hsla(228, 60%, 21%, 0.7)",
        "text-halo-width": 1,
      }}
    />
  );
};
