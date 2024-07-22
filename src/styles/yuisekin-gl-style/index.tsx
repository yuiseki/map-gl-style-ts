import { Layer } from "react-map-gl/maplibre";

export const YuisekinGLStyleLayers = [
  <Layer
    id="background"
    key="background"
    type="background"
    paint={{
      "background-color": "#45516E",
    }}
  />,
  <Layer
    id="water"
    key="water"
    type="fill"
    source="openmaptiles"
    source-layer="water"
    filter={["==", "$type", "Polygon"]}
    paint={{
      "fill-color": "#38435C",
    }}
  />,
  <Layer
    id="landcover-wood"
    key="landcover-wood"
    type="fill"
    source="openmaptiles"
    source-layer="landcover"
    filter={[
      "all",
      ["==", "$type", "Polygon"],
      ["==", "class", "wood"]
    ]}
    paint={{
      "fill-color": "hsla(232, 18%, 30%, 0.57)",
      "fill-opacity": 0.8,
    }}
  />,
    <Layer
      id="landuse-residential"
      key="landuse-residential"
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
    />,
  <Layer
      id="park"
      key="park"
      type="fill"
      source="openmaptiles"
      source-layer="park"
      filter={["==", "$type", "Polygon"]}
      paint={{
        "fill-color": "hsl(204, 17%, 35%)",
        "fill-opacity": 0.8,
      }}
    />,
        <Layer
      id="park-outline"
      key="park-outline"
      type="line"
      source="openmaptiles"
      source-layer="park"
      filter={["==", "$type", "Polygon"]}
      paint={{
        "line-color": "hsl(205, 49%, 31%)",
        "line-dasharray": [2, 2],
      }}
    />,
    <Layer
      id="waterway"
      key="waterway"
      type="line"
      source="openmaptiles"
      source-layer="waterway"
      filter={["==", "$type", "LineString"]}
      layout={{ visibility: "visible" }}
      paint={{
        "line-color": "hsl(232, 23%, 28%)",
        "line-opacity": 0.8,
      }}
    />,
    <Layer
      id="building"
      key="building"
      type="fill"
      source="openmaptiles"
      source-layer="building"
      filter={["==", "$type", "Polygon"]}
      paint={{
        "fill-color": "hsla(232, 47%, 18%, 0.65)",
        "fill-opacity": 0.5,
      }}
    />

];
