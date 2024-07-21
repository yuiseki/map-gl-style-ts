import { Layer } from "react-map-gl/maplibre";

export const PositronGLStylePlaceOther: React.FC = () => {
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
        [
          "in",
          "class",
          "continent",
          "hamlet",
          "neighbourhood",
          "isolated_dwelling",
        ],
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
        "text-color": "rgb(117, 129, 145)",
        "text-halo-blur": 1,
        "text-halo-color": "rgb(242,243,240)",
        "text-halo-width": 1,
      }}
    />
  );
};
