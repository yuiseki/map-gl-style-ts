import { Layer } from "react-map-gl/maplibre";

export const PositronGLStyleBoundaryCountryFromZ0ToZ4: React.FC = () => {
  return (
    <Layer
      id="boundary-country-z0-z4"
      key="boundary-country-z0-z4"
      type="line"
      source="openmaptiles"
      source-layer="boundary"
      maxzoom={4}
      filter={["all", ["==", "admin_level", 2], ["!has", "claimed_by"]]}
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
