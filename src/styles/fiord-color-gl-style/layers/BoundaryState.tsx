import { Layer } from "react-map-gl/maplibre";

export const FiordColorGLStyleBoundaryState: React.FC = () => {
  return (
    <Layer
      id="boundary_state"
      key="boundary_state"
      type="line"
      source="openmaptiles"
      source-layer="boundary"
      filter={["==", "admin_level", 4]}
      layout={{
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      }}
      paint={{
        "line-blur": 0.4,
        "line-color": "hsla(195, 47%, 62%, 0.26)",
        "line-dasharray": [2, 2],
        "line-opacity": 1,
        "line-width": {
          base: 1.3,
          stops: [
            [3, 1],
            [22, 15],
          ],
        },
      }}
    />
  );
};
