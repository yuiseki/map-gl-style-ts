import { useEffect } from "react";
import maplibregl from "maplibre-gl";
import { Map, Source } from "react-map-gl/maplibre";
import { Protocol } from "pmtiles";

import "maplibre-gl/dist/maplibre-gl.css";
//import { PositronGLStyleLayers } from "./styles/positron-gl-style";
//import { FiordColorGLStyleLayers } from "./styles/fiord-color-gl-style";
import { YuisekinGLStyleLayers } from "./styles/yuisekin-gl-style";

const layers = YuisekinGLStyleLayers;

const App: React.FC = () => {
  useEffect(() => {
    const protocol = new Protocol();
    maplibregl.addProtocol("pmtiles", protocol.tile);
    return () => {
      maplibregl.removeProtocol("pmtiles");
    };
  }, []);
  return (
    <>
      <Map
        initialViewState={{
          longitude: 0,
          latitude: 0,
          zoom: 4,
        }}
        dragPan={true}
        scrollZoom={true}
        hash={false}
        style={{ width: "100%", height: "100%" }}
        mapStyle={{
          version: 8,
          sprite: "https://tile.openstreetmap.jp/styles/osm-bright/sprite",
          glyphs: "https://tile.openstreetmap.jp/fonts/{fontstack}/{range}.pbf",
          sources: {},
          layers: [],
        }}
      >
        <Source
          id="openmaptiles"
          type="vector"
          tiles={[
            "pmtiles://https://tile.openstreetmap.jp/static/planet.pmtiles/{z}/{x}/{y}.pbf",
          ]}
          attribution="OpenStreetMap contributors"
          maxzoom={14}
          minzoom={0}
        >
          {layers?.map((layer) => layer)}
        </Source>
      </Map>
    </>
  );
};

export default App;
