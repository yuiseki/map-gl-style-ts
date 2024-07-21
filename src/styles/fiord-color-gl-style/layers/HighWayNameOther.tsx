import { Layer } from "react-map-gl";

export const FiordColorGLStyleHighWayNameOther: React.FC = () => {
  return (
    <Layer
      id="highway-name-other"
      key="highway-name-other"
      type="symbol"
      source="openmaptiles"
      source-layer="transportation_name"
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
        "text-color": "hsl(223, 31%, 61%)",
        "text-halo-blur": 0,
        "text-halo-color": "hsl(232, 9%, 23%)",
        "text-halo-width": 2,
        "text-opacity": 1,
        "text-translate": [0, 0],
      }}
    />
  );
};
