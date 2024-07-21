import { FiordColorGLStyleAeroWayArea } from "./layers/AeroWayArea";
import { FiordColorGLStyleAeroWayRunWay } from "./layers/AeroWayRunWay";
import { FiordColorGLStyleAeroWayRunWayCasing } from "./layers/AeroWayRunWayCasing";
import { FiordColorGLStyleAeroWayTaxiWay } from "./layers/AeroWayTaxiWay";
import { FiordColorGLStyleBackground } from "./layers/Background";
import { FiordColorGLStyleBoundaryCountryFromZ0ToZ4 } from "./layers/BoundaryCountryFromZ0ToZ4";
import { FiordColorGLStyleBoundaryCountryFromZ5ToMax } from "./layers/BoundaryCountryFromZ5ToMax";
import { FiordColorGLStyleBoundaryState } from "./layers/BoundaryState";
import { FiordColorGLStyleBuilding } from "./layers/Building";
import { FiordColorGLStyleHighWayMajorCasing } from "./layers/HighWayMajorCasing";
import { FiordColorGLStyleHighWayMajorInner } from "./layers/HighWayMajorInner";
import { FiordColorGLStyleHighWayMajorSubtle } from "./layers/HighWayMajorSubtle";
import { FiordColorGLStyleHighWayMinor } from "./layers/HighWayMinor";
import { FiordColorGLStyleHighWayMotorWayCasing } from "./layers/HighWayMotorWayCasing";
import { FiordColorGLStyleHighWayMotorWayInner } from "./layers/HighWayMotorWayInner";
import { FiordColorGLStyleHighWayMotorWaySubtle } from "./layers/HighWayMotorWaySubtle";
import { FiordColorGLStyleHighWayNameOther } from "./layers/HighWayNameOther";
import { FiordColorGLStyleHighWayPath } from "./layers/HighWayPath";
import { FiordColorGLStyleHighWayRef } from "./layers/HighWayRef";
import { FiordColorGLStyleLandCoverIceShelf } from "./layers/LandCoverIceShelf";
import { FiordColorGLStyleLandCoverWood } from "./layers/LandCoverWood";
import { FiordColorGLStyleLandUseResidential } from "./layers/LandUseResidential";
import { FiordColorGLStylePark } from "./layers/Park";
import { FiordColorGLStyleParkOutline } from "./layers/ParkOutline";
import { FiordColorGLStylePlaceCity } from "./layers/PlaceCity";
import { FiordColorGLStylePlaceCityLarge } from "./layers/PlaceCityLarge";
import { FiordColorGLStylePlaceContinent } from "./layers/PlaceContinent";
import { FiordColorGLStylePlaceCountryMajor } from "./layers/PlaceCountryMajor";
import { FiordColorGLStylePlaceCountryMinor } from "./layers/PlaceCountryMinor";
import { FiordColorGLStylePlaceCountryOther } from "./layers/PlaceCountryOther";
import { FiordColorGLStylePlaceOther } from "./layers/PlaceOther";
import { FiordColorGLStylePlaceState } from "./layers/PlaceState";
import { FiordColorGLStylePlaceSuburb } from "./layers/PlaceSuburb";
import { FiordColorGLStylePlaceTown } from "./layers/PlaceTown";
import { FiordColorGLStylePlaceVillage } from "./layers/PlaceVillage";
import { FiordColorGLStyleRailWay } from "./layers/RailWay";
import { FiordColorGLStyleRailWayDashLine } from "./layers/RailWayDashLine";
import { FiordColorGLStyleRailWayService } from "./layers/RailWayService";
import { FiordColorGLStyleRailWayServiceDashLine } from "./layers/RailWayServiceDashLine";
import { FiordColorGLStyleRailWayTransit } from "./layers/RailWayTransit";
import { FiordColorGLStyleRailWayTransitDashLine } from "./layers/RailWayTransitDashLine";
import { FiordColorGLStyleRoadAreaPier } from "./layers/RoadAreaPier";
import { FiordColorGLStyleRoadPier } from "./layers/RoadPier";
import { FiordColorGLStyleTunnelMotorWayCasing } from "./layers/TunnelMotorWayCasing";
import { FiordColorGLStyleTunnelMotorWayInner } from "./layers/TunnelMotorWayInner";
import { FiordColorGLStyleWater } from "./layers/Water";
import { FiordColorGLStyleWaterName } from "./layers/WaterName";
import { FiordColorGLStyleWaterWay } from "./layers/WaterWay";

export const FiordColorGLStyleLayers = [
  <FiordColorGLStyleBackground key="background" />,
  <FiordColorGLStyleWater key="water" />,
  <FiordColorGLStyleLandCoverIceShelf key="landcover-ice-shelf" />,
  <FiordColorGLStyleLandUseResidential key="landuse-residential" />,
  <FiordColorGLStyleLandCoverWood key="landcover-wood" />,
  <FiordColorGLStylePark key="park" />,
  <FiordColorGLStyleParkOutline key="park-outline" />,
  <FiordColorGLStyleWaterWay key="waterway" />,
  <FiordColorGLStyleBuilding key="building" />,
  <FiordColorGLStyleTunnelMotorWayCasing key="tunnel-motorway-casing" />,
  <FiordColorGLStyleTunnelMotorWayInner key="tunnel-motorway-inner" />,
  <FiordColorGLStyleAeroWayTaxiWay key="aeroway-taxiway" />,
  <FiordColorGLStyleAeroWayRunWayCasing key="aeroway-runway-casing" />,
  <FiordColorGLStyleAeroWayArea key="aeroway-area" />,
  <FiordColorGLStyleAeroWayRunWay key="aeroway-runway" />,
  <FiordColorGLStyleRoadAreaPier key="road-area-pier" />,
  <FiordColorGLStyleRoadPier key="road-pier" />,
  <FiordColorGLStyleHighWayPath key="highway-path" />,
  <FiordColorGLStyleHighWayMinor key="highway-minor" />,
  <FiordColorGLStyleHighWayMajorCasing key="highway-major-casing" />,
  <FiordColorGLStyleHighWayMajorInner key="highway-major-inner" />,
  <FiordColorGLStyleHighWayMajorSubtle key="highway-major-subtle" />,
  <FiordColorGLStyleHighWayMotorWayCasing key="highway-motorway-casing" />,
  <FiordColorGLStyleHighWayMotorWayInner key="highway-motorway-inner" />,
  <FiordColorGLStyleHighWayMotorWaySubtle key="highway-motorway-subtle" />,
  <FiordColorGLStyleRailWayTransit key="railway-transit" />,
  <FiordColorGLStyleRailWayTransitDashLine key="railway-transit-dash-line" />,
  <FiordColorGLStyleRailWayService key="railway-service" />,
  <FiordColorGLStyleRailWayServiceDashLine key="railway-service-dash-line" />,
  <FiordColorGLStyleRailWay key="railway" />,
  <FiordColorGLStyleRailWayDashLine key="railway-dash-line" />,
  <FiordColorGLStyleWaterName key="water-name" />,
  <FiordColorGLStyleHighWayNameOther key="highway-name-other" />,
  <FiordColorGLStyleHighWayRef key="highway-ref" />,
  <FiordColorGLStyleBoundaryState key="boundary-state" />,
  <FiordColorGLStyleBoundaryCountryFromZ0ToZ4 key="boundary-country-from-z0-to-z4" />,
  <FiordColorGLStyleBoundaryCountryFromZ5ToMax key="boundary-country-from-z5-to-max" />,
  <FiordColorGLStylePlaceOther key="place-other" />,
  <FiordColorGLStylePlaceSuburb key="place-suburb" />,
  <FiordColorGLStylePlaceVillage key="place-village" />,
  <FiordColorGLStylePlaceTown key="place-town" />,
  <FiordColorGLStylePlaceCity key="place-city" />,
  <FiordColorGLStylePlaceCityLarge key="place-city-large" />,
  <FiordColorGLStylePlaceState key="place-state" />,
  <FiordColorGLStylePlaceCountryOther key="place-country-other" />,
  <FiordColorGLStylePlaceCountryMinor key="place-country-minor" />,
  <FiordColorGLStylePlaceCountryMajor key="place-country-major" />,
  <FiordColorGLStylePlaceContinent key="place-continent" />,
];
