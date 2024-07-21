import { Layer } from "react-map-gl/maplibre";

export const PositronGLStyleBoundaryCountryFromZ5ToMax: React.FC = () => {
  return (
    <Layer
      id="boundary-country"
      key="boundary-country"
      type="line"
      source="openmaptiles"
      source-layer="boundary"
      minzoom={5}
      maxzoom={24}
      filter={["==", "admin_level", 2]}
      layout={{
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      }}
      paint={{
        "line-blur": {
          base: 1,
          stops: [
            [0, 0.4],
            [22, 4],
          ],
        },
        "line-color": "rgb(230, 204, 207)",
        "line-opacity": 1,
        "line-width": {
          base: 1.1,
          stops: [
            [3, 1],
            [22, 20],
          ],
        },
      }}
    />
  );
};
