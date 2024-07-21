import { PositronGLStyleAeroWayArea } from "./layers/AeroWayArea";
import { PositronGLStyleAeroWayRunway } from "./layers/AeroWayRunway";
import { PositronGLStyleAeroWayRunwayCasing } from "./layers/AeroWayRunwayCasing";
import { PositronGLStyleAeroWayTaxiWay } from "./layers/AeroWayTaxiWay";
import { PositronGLStyleBackground } from "./layers/Background";
import { PositronGLStyleBoundaryCountryFromZ0ToZ4 } from "./layers/BoundaryCountryFromZ0ToZ4";
import { PositronGLStyleBoundaryCountryFromZ5ToMax } from "./layers/BoundaryCountryFromZ5ToMax";
import { PositronGLStyleBoundaryState } from "./layers/BoundaryState";
import { PositronGLStyleBuilding } from "./layers/Building";
import { PositronGLStyleHighWayMajorCasing } from "./layers/HighWayMajorCasing";
import { PositronGLStyleHighWayMajorInner } from "./layers/HighWayMajorInner";
import { PositronGLStyleHighWayMajorSubtle } from "./layers/HighWayMajorSubtle";
import { PositronGLStyleHighWayMinor } from "./layers/HighWayMinor";
import { PositronGLStyleHighWayMotorWayBridgeCasing } from "./layers/HighWayMotorWayBridgeCasing";
import { PositronGLStyleHighWayMotorWayBridgeInner } from "./layers/HighWayMotorWayBridgeInner";
import { PositronGLStyleHighWayMotorWayCasing } from "./layers/HighWayMotorWayCasing";
import { PositronGLStyleHighWayMotorWayInner } from "./layers/HighWayMotorWayInner";
import { PositronGLStyleHighWayNameMotorWay } from "./layers/HighWayNameMotorWay";
import { PositronGLStyleHighWayNameOther } from "./layers/HighWayNameOther";
import { PositronGLStyleHighWayPath } from "./layers/HighWayPath";
import { PositronGLStyleLandCoverGlacier } from "./layers/LandCoverGlacier";
import { PositronGLStyleLandCoverIceShelf } from "./layers/LandCoverIceShelf";
import { PositronGLStyleLandCoverWood } from "./layers/LandCoverWood";
import { PositronGLStyleLandUseResidential } from "./layers/LandUseResidential";
import { PositronGLStylePark } from "./layers/Park";
import { PositronGLStylePlaceCapital } from "./layers/PlaceCapital";
import { PositronGLStylePlaceCity } from "./layers/PlaceCity";
import { PositronGLStylePlaceCityLarge } from "./layers/PlaceCityLarge";
import { PositronGLStylePlaceCountryMajor } from "./layers/PlaceCountryMajor";
import { PositronGLStylePlaceCountryMinor } from "./layers/PlaceCountryMinor";
import { PositronGLStylePlaceCountryOther } from "./layers/PlaceCountryOther";
import { PositronGLStylePlaceOther } from "./layers/PlaceOther";
import { PositronGLStylePlaceState } from "./layers/PlaceState";
import { PositronGLStylePlaceSuburb } from "./layers/PlaceSuburb";
import { PositronGLStylePlaceTown } from "./layers/PlaceTown";
import { PositronGLStylePlaceVillage } from "./layers/PlaceVillage";
import { PositronGLStyleRailWay } from "./layers/RailWay";
import { PositronGLStyleRailWayDashLine } from "./layers/RailWayDashLine";
import { PositronGLStyleRailWayService } from "./layers/RailWayService";
import { PositronGLStyleRailWayServiceDashLine } from "./layers/RailWayServiceDashLine";
import { PositronGLStyleRailWayTransit } from "./layers/RailWayTransit";
import { PositronGLStyleRailWayTransitDashLine } from "./layers/RailWayTransitDashLine";
import { PositronGLStyleRoadAreaPier } from "./layers/RoadAreaPier";
import { PositronGLStyleRoadPier } from "./layers/RoadPier";
import { PositronGLStyleTunnelMotorWayCasing } from "./layers/TunnelMotorWayCasing";
import { PositronGLStyleTunnelMotorWayInner } from "./layers/TunnelMotorWayInner";
import { PositronGLStyleWater } from "./layers/Water";
import { PositronGLStyleWaterName } from "./layers/WaterName";
import { PositronGLStyleWaterWay } from "./layers/WaterWay";


// order is important!!
export const PositronGLStyleLayers = [
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
