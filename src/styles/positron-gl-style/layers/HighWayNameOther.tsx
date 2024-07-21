import { Layer } from "react-map-gl/maplibre";

export const PositronGLStyleHighWayNameOther: React.FC = () => {
  return (
    <Layer
      id="highway-name-other"
      key="highway-name-other"
      type="symbol"
      source="openmaptiles"
      source-layer="transportation_name"
      minzoom={15}
      filter={[
        "all",
        ["!=", "class", "motorway"],
        ["==", "$type", "LineString"],
      ]}
      layout={{
        "symbol-placement": "line",
        "symbol-spacing": 350,
        "text-field": "{name:latin} {name:nonlatin}",
        "text-font": ["Metropolis Regular", "Noto Sans Regular"],
        "text-max-angle": 30,
        "text-pitch-alignment": "viewport",
        "text-rotation-alignment": "map",
        "text-size": 10,
        "text-transform": "uppercase",
        visibility: "visible",
      }}
      paint={{
        "text-color": "#bbb",
        "text-halo-blur": 1,
        "text-halo-color": "#fff",
        "text-halo-width": 2,
        "text-translate": [0, 0],
      }}
    />
  );
};
