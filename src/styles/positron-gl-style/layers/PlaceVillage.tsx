import { Layer } from "react-map-gl/maplibre";

export const PositronGLStylePlaceVillage: React.FC = () => {
  return (
    <Layer
      id="place-village"
      key="place-village"
      type="symbol"
      source="openmaptiles"
      source-layer="place"
      maxzoom={14}
      filter={["all", ["==", "$type", "Point"], ["==", "class", "village"]]}
      layout={{
        "icon-size": 0.4,
        "text-anchor": "left",
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
        "text-color": "rgb(117, 129, 145)",
        "text-halo-blur": 1,
        "text-halo-color": "rgb(242,243,240)",
        "text-halo-width": 1,
      }}
    />
  );
};
