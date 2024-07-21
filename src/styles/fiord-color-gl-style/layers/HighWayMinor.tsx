import { Layer } from "react-map-gl/maplibre";

export const FiordColorGLStyleHighWayMinor: React.FC = () => {
  return (
    <Layer
      id="highway-minor"
      key="highway-minor"
      type="line"
      source="openmaptiles"
      source-layer="transportation"
      minzoom={8}
      filter={[
        "all",
        ["==", "$type", "LineString"],
        ["in", "class", "minor", "service", "track"],
      ]}
      layout={{
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      }}
      paint={{
        "line-color": "hsl(224, 22%, 45%)",
        "line-opacity": 0.9,
        "line-width": {
          base: 1.55,
          stops: [
            [13, 1.8],
            [20, 20],
          ],
        },
      }}
    />
  );
};
