import { Layer } from "react-map-gl/maplibre";

export const PositronGLStyleHighWayNameMotorWay: React.FC = () => {
  return (
    <Layer
      id="highway-name-motorway"
      key="highway-name-motorway"
      type="symbol"
      source="openmaptiles"
      source-layer="transportation_name"
      filter={[
        "all",
        ["==", "$type", "LineString"],
        ["==", "class", "motorway"],
      ]}
      layout={{
        "symbol-placement": "line",
        "symbol-spacing": 350,
        "text-field": "{ref}",
        "text-font": ["Metropolis Light", "Noto Sans Regular"],
        "text-pitch-alignment": "viewport",
        "text-rotation-alignment": "viewport",
        "text-size": 10,
        visibility: "visible",
      }}
      paint={{
        "text-color": "rgb(117, 129, 145)",
        "text-halo-blur": 1,
        "text-halo-color": "hsl(0, 0%, 100%)",
        "text-halo-width": 1,
        "text-translate": [0, 2],
      }}
    />
  );
};
