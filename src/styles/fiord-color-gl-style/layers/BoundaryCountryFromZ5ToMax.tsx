import { Layer } from "react-map-gl/maplibre";

export const FiordColorGLStyleBoundaryCountryFromZ5ToMax: React.FC = () => {
  return (
    <Layer
      id="boundary-country-z5-max"
      key="boundary-country-z5-max"
      type="line"
      source="openmaptiles"
      source-layer="boundary"
      minzoom={5}
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
        "line-color": "hsl(214, 63%, 76%)",
        "line-opacity": 0.56,
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
