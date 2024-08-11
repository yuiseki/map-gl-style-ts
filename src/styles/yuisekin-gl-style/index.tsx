import { Layer } from "react-map-gl/maplibre";

export const YuisekinGLStyleLayers: React.FC = () => (
  <>
    <Layer
      id="background"
      type="background"
      paint={{
        "background-color": "#45516E",
      }}
    />
    <Layer
      id="water"
      type="fill"
      source="openmaptiles"
      source-layer="water"
      filter={["==", "$type", "Polygon"]}
      paint={{
        "fill-color": "#38435C",
      }}
    />
    <Layer
      id="landcover-wood"
      type="fill"
      source="openmaptiles"
      source-layer="landcover"
      filter={["all", ["==", "$type", "Polygon"], ["==", "class", "wood"]]}
      paint={{
        "fill-color": "hsla(232, 18%, 30%, 0.57)",
        "fill-opacity": 0.8,
      }}
    />
    <Layer
      id="landuse-residential"
      type="fill"
      source="openmaptiles"
      source-layer="landuse"
      filter={[
        "all",
        ["==", "$type", "Polygon"],
        ["==", "class", "residential"],
      ]}
      paint={{
        "fill-color": "rgb(234, 234, 230)",
        "fill-opacity": 0.8,
      }}
    />
    <Layer
      id="park"
      type="fill"
      source="openmaptiles"
      source-layer="park"
      filter={["==", "$type", "Polygon"]}
      paint={{
        "fill-color": "hsl(204, 17%, 35%)",
        "fill-opacity": 0.8,
      }}
    />
    <Layer
      id="park-outline"
      type="line"
      source="openmaptiles"
      source-layer="park"
      filter={["==", "$type", "Polygon"]}
      paint={{
        "line-color": "hsl(205, 49%, 31%)",
        "line-dasharray": [2, 2],
      }}
    />
    <Layer
      id="waterway"
      type="line"
      source="openmaptiles"
      source-layer="waterway"
      filter={["==", "$type", "LineString"]}
      paint={{
        "line-color": "hsl(232, 23%, 28%)",
        "line-opacity": 0.8,
      }}
    />
    <Layer
      id="building"
      type="fill"
      source="openmaptiles"
      source-layer="building"
      filter={["==", "$type", "Polygon"]}
      paint={{
        "fill-color": "hsla(232, 47%, 18%, 0.65)",
        "fill-opacity": 0.5,
      }}
    />
  </>
);
