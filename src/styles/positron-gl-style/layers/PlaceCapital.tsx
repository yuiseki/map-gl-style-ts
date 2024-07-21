import { Layer } from "react-map-gl/maplibre";

export const PositronGLStylePlaceCapital: React.FC = () => {
  return (
    <Layer
      id="place-capital"
      key="place-capital"
      type="symbol"
      source="openmaptiles"
      source-layer="place"
      maxzoom={12}
      filter={[
        "all",
        ["==", "$type", "Point"],
        ["all", ["==", "capital", 2], ["==", "class", "city"]],
      ]}
      layout={{
        "icon-image": {
          base: 1,
          stops: [
            [0, "star-11"],
            [8, ""],
          ],
        },
        "icon-size": 1,
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
        "text-size": 14,
        "text-transform": "uppercase",
        visibility: "visible",
      }}
      paint={{
        "icon-opacity": 0.7,
        "text-color": "rgb(117, 129, 145)",
        "text-halo-blur": 1,
        "text-halo-color": "rgb(242,243,240)",
        "text-halo-width": 1,
      }}
    />
  );
};
