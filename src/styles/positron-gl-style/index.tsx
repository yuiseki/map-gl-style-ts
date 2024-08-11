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
export const PositronGLStyleLayers = (
  <>
    <PositronGLStyleBackground />
    <PositronGLStylePark />
    <PositronGLStyleWater />
    <PositronGLStyleLandCoverIceShelf />
    <PositronGLStyleLandCoverGlacier />
    <PositronGLStyleLandUseResidential />
    <PositronGLStyleLandCoverWood />
    <PositronGLStyleWaterWay />
    <PositronGLStyleWaterName />
    <PositronGLStyleBuilding />
    <PositronGLStyleTunnelMotorWayCasing />
    <PositronGLStyleTunnelMotorWayInner />
    <PositronGLStyleAeroWayTaxiWay />
    <PositronGLStyleAeroWayRunwayCasing />
    <PositronGLStyleAeroWayArea />
    <PositronGLStyleAeroWayRunway />
    <PositronGLStyleRoadAreaPier />
    <PositronGLStyleRoadPier />
    <PositronGLStyleHighWayPath />
    <PositronGLStyleHighWayMinor />
    <PositronGLStyleHighWayMajorCasing />
    <PositronGLStyleHighWayMajorInner />
    <PositronGLStyleHighWayMajorSubtle />
    <PositronGLStyleHighWayMotorWayCasing />
    <PositronGLStyleHighWayMotorWayInner />
    <PositronGLStyleRailWayTransit />
    <PositronGLStyleRailWayTransitDashLine />
    <PositronGLStyleRailWayService />
    <PositronGLStyleRailWayServiceDashLine />
    <PositronGLStyleRailWay />
    <PositronGLStyleRailWayDashLine />
    <PositronGLStyleHighWayMotorWayBridgeCasing />
    <PositronGLStyleHighWayMotorWayBridgeInner />
    <PositronGLStyleHighWayNameOther />
    <PositronGLStyleHighWayNameMotorWay />
    <PositronGLStyleBoundaryState />
    <PositronGLStyleBoundaryCountryFromZ0ToZ4 />
    <PositronGLStyleBoundaryCountryFromZ5ToMax />
    <PositronGLStylePlaceOther />
    <PositronGLStylePlaceSuburb />
    <PositronGLStylePlaceVillage />
    <PositronGLStylePlaceTown />
    <PositronGLStylePlaceCity />
    <PositronGLStylePlaceCapital />
    <PositronGLStylePlaceCityLarge />
    <PositronGLStylePlaceState />
    <PositronGLStylePlaceCountryOther />
    <PositronGLStylePlaceCountryMinor />
    <PositronGLStylePlaceCountryMajor />
  </>
);
