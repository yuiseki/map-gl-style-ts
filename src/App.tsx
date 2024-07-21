import { useEffect } from "react";
import maplibregl from "maplibre-gl";
import { Map, Source } from "react-map-gl/maplibre";
import { Protocol } from "pmtiles";

import "maplibre-gl/dist/maplibre-gl.css";
import { PositronGLStyleBackground } from "./styles/positron-gl-style/layers/Background";
import { PositronGLStylePark } from "./styles/positron-gl-style/layers/Park";
import { PositronGLStyleWater } from "./styles/positron-gl-style/layers/Water";
import { PositronGLStyleLandCoverIceShelf } from "./styles/positron-gl-style/layers/LandCoverIceShelf";
import { PositronGLStyleLandCoverGlacier } from "./styles/positron-gl-style/layers/LandCoverGlacier";
import { PositronGLStyleLandUseResidential } from "./styles/positron-gl-style/layers/LandUseResidential";
import { PositronGLStyleLandCoverWood } from "./styles/positron-gl-style/layers/LandCoverWood";
import { PositronGLStyleWaterWay } from "./styles/positron-gl-style/layers/WaterWay";
import { PositronGLStyleWaterName } from "./styles/positron-gl-style/layers/WaterName";
import { PositronGLStyleBuilding } from "./styles/positron-gl-style/layers/Building";
import { PositronGLStyleTunnelMotorWayCasing } from "./styles/positron-gl-style/layers/TunnelMotorWayCasing";
import { PositronGLStyleTunnelMotorWayInner } from "./styles/positron-gl-style/layers/TunnelMotorWayInner";
import { PositronGLStyleAeroWayTaxiWay } from "./styles/positron-gl-style/layers/AeroWayTaxiWay";
import { PositronGLStyleAeroWayRunwayCasing } from "./styles/positron-gl-style/layers/AeroWayRunwayCasing";
import { PositronGLStyleAeroWayArea } from "./styles/positron-gl-style/layers/AeroWayArea";
import { PositronGLStyleAeroWayRunway } from "./styles/positron-gl-style/layers/AeroWayRunway";
import { PositronGLStyleRoadAreaPier } from "./styles/positron-gl-style/layers/RoadAreaPier";
import { PositronGLStyleRoadPier } from "./styles/positron-gl-style/layers/RoadPier";
import { PositronGLStyleHighWayPath } from "./styles/positron-gl-style/layers/HighWayPath";
import { PositronGLStyleHighWayMinor } from "./styles/positron-gl-style/layers/HighWayMinor";
import { PositronGLStyleHighWayMajorCasing } from "./styles/positron-gl-style/layers/HighWayMajorCasing";
import { PositronGLStyleHighWayMajorInner } from "./styles/positron-gl-style/layers/HighWayMajorInner";
import { PositronGLStyleHighWayMajorSubtle } from "./styles/positron-gl-style/layers/HighWayMajorSubtle";
import { PositronGLStyleHighWayMotorWayCasing } from "./styles/positron-gl-style/layers/HighWayMotorWayCasing";
import { PositronGLStyleHighWayMotorWayInner } from "./styles/positron-gl-style/layers/HighWayMotorWayInner";
import { PositronGLStyleRailWayTransit } from "./styles/positron-gl-style/layers/RailWayTransit";
import { PositronGLStyleRailWayTransitDashLine } from "./styles/positron-gl-style/layers/RailWayTransitDashLine";
import { PositronGLStyleRailWayService } from "./styles/positron-gl-style/layers/RailWayService";
import { PositronGLStyleRailWayServiceDashLine } from "./styles/positron-gl-style/layers/RailWayServiceDashLine";
import { PositronGLStyleRailWay } from "./styles/positron-gl-style/layers/RailWay";
import { PositronGLStyleRailWayDashLine } from "./styles/positron-gl-style/layers/RailWayDashLine";
import { PositronGLStyleHighWayMotorWayBridgeCasing } from "./styles/positron-gl-style/layers/HighWayMotorWayBridgeCasing";
import { PositronGLStyleHighWayMotorWayBridgeInner } from "./styles/positron-gl-style/layers/HighWayMotorWayBridgeInner";
import { PositronGLStyleHighWayNameOther } from "./styles/positron-gl-style/layers/HighWayNameOther";
import { PositronGLStyleHighWayNameMotorWay } from "./styles/positron-gl-style/layers/HighWayNameMotorWay";
import { PositronGLStyleBoundaryState } from "./styles/positron-gl-style/layers/BoundaryState";
import { PositronGLStyleBoundaryCountryFromZ0ToZ4 } from "./styles/positron-gl-style/layers/BoundaryCountryFromZ0ToZ4";
import { PositronGLStyleBoundaryCountryFromZ5ToMax } from "./styles/positron-gl-style/layers/BoundaryCountryFromZ5ToMax";
import { PositronGLStylePlaceOther } from "./styles/positron-gl-style/layers/PlaceOther";
import { PositronGLStylePlaceSuburb } from "./styles/positron-gl-style/layers/PlaceSuburb";
import { PositronGLStylePlaceVillage } from "./styles/positron-gl-style/layers/PlaceVillage";
import { PositronGLStylePlaceTown } from "./styles/positron-gl-style/layers/PlaceTown";
import { PositronGLStylePlaceCity } from "./styles/positron-gl-style/layers/PlaceCity";
import { PositronGLStylePlaceCapital } from "./styles/positron-gl-style/layers/PlaceCapital";
import { PositronGLStylePlaceCityLarge } from "./styles/positron-gl-style/layers/PlaceCityLarge";
import { PositronGLStylePlaceState } from "./styles/positron-gl-style/layers/PlaceState";
import { PositronGLStylePlaceCountryOther } from "./styles/positron-gl-style/layers/PlaceCountryOther";
import { PositronGLStylePlaceCountryMinor } from "./styles/positron-gl-style/layers/PlaceCountryMinor";
import { PositronGLStylePlaceCountryMajor } from "./styles/positron-gl-style/layers/PlaceCountryMajor";

// order is important!!
const layers = [
  <PositronGLStyleBackground key="background" />,
  <PositronGLStylePark key="park" />,
  <PositronGLStyleWater key="water" />,
  <PositronGLStyleLandCoverIceShelf key="landcover-ice-shelf" />,
  <PositronGLStyleLandCoverGlacier key="landcover-glacier" />,
  <PositronGLStyleLandUseResidential key="landuse-residential" />,
  <PositronGLStyleLandCoverWood key="landcover-wood" />,
  <PositronGLStyleWaterWay key="waterway" />,
  <PositronGLStyleWaterName key="water-name" />,
  <PositronGLStyleBuilding key="building" />,
  <PositronGLStyleTunnelMotorWayCasing key="tunnel-motorway-casing" />,
  <PositronGLStyleTunnelMotorWayInner key="tunnel-motorway-inner" />,
  <PositronGLStyleAeroWayTaxiWay key="aeroway-taxiway" />,
  <PositronGLStyleAeroWayRunwayCasing key="aeroway-runway-casing" />,
  <PositronGLStyleAeroWayArea key="aeroway-area" />,
  <PositronGLStyleAeroWayRunway key="aeroway-runway" />,
  <PositronGLStyleRoadAreaPier key="road-area-pier" />,
  <PositronGLStyleRoadPier key="road-pier" />,
  <PositronGLStyleHighWayPath key="highway-path" />,
  <PositronGLStyleHighWayMinor key="highway-minor" />,
  <PositronGLStyleHighWayMajorCasing key="highway-major-casing" />,
  <PositronGLStyleHighWayMajorInner key="highway-major-inner" />,
  <PositronGLStyleHighWayMajorSubtle key="highway-major-subtle" />,
  <PositronGLStyleHighWayMotorWayCasing key="highway-motorway-casing" />,
  <PositronGLStyleHighWayMotorWayInner key="highway-motorway-inner" />,
  <PositronGLStyleRailWayTransit key="railway-transit" />,
  <PositronGLStyleRailWayTransitDashLine key="railway-transit-dashline" />,
  <PositronGLStyleRailWayService key="railway-service" />,
  <PositronGLStyleRailWayServiceDashLine key="railway-service-dashline" />,
  <PositronGLStyleRailWay key="railway" />,
  <PositronGLStyleRailWayDashLine key="railway-dashline" />,
  <PositronGLStyleHighWayMotorWayBridgeCasing key="highway-motorway-bridge-casing" />,
  <PositronGLStyleHighWayMotorWayBridgeInner key="highway-motorway-bridge-inner" />,
  <PositronGLStyleHighWayNameOther key="highway-name-other" />,
  <PositronGLStyleHighWayNameMotorWay key="highway-name-motorway" />,
  <PositronGLStyleBoundaryState key="boundary-state" />,
  <PositronGLStyleBoundaryCountryFromZ0ToZ4 key="boundary-country-z0-z4" />,
  <PositronGLStyleBoundaryCountryFromZ5ToMax key="boundary-country-z5-max" />,
  <PositronGLStylePlaceOther key="place-other" />,
  <PositronGLStylePlaceSuburb key="place-suburb" />,
  <PositronGLStylePlaceVillage key="place-village" />,
  <PositronGLStylePlaceTown key="place-town" />,
  <PositronGLStylePlaceCity key="place-city" />,
  <PositronGLStylePlaceCapital key="place-capital" />,
  <PositronGLStylePlaceCityLarge key="place-city-large" />,
  <PositronGLStylePlaceState key="place-state" />,
  <PositronGLStylePlaceCountryOther key="place-country-other" />,
  <PositronGLStylePlaceCountryMinor key="place-country-minor" />,
  <PositronGLStylePlaceCountryMajor key="place-country-major" />,
];

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
