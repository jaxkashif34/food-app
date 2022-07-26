import { View, Text } from "react-native";
import React, { useRef } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import DestinationMarker, { CarIcon } from "./DestinationMarker";
import {
  selectMapData,
  setDuration,
  calculateAngle,
  setFromLocation,
  setIsReady,
} from "../../store/features";
import { useDispatch, useSelector } from "react-redux";
import { COLORS, GOOGLE_API_KEY, SIZES } from "../../constants";

export default function Map({ data }) {
  const mapView = useRef();
  const { region, fromLocation, toLocation, duration, isReady, angle } =
    useSelector(selectMapData);
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapView}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
        style={{ flex: 1 }}
      >
        <MapViewDirections
          origin={fromLocation}
          destination={toLocation}
          apikey={GOOGLE_API_KEY}
          strokeWidth={5}
          strokeColor={COLORS.primary}
          optimizeWaypoints={true} // turns off the default behavior of optimizing the route by looking for the shortest route
          onReady={(results) => {
            dispatch(setDuration(results.duration));

            if (!isReady) {
              mapView.current.fitToCoordinates(results.coordinates, {
                edgePadding: {
                  right: SIZES.width / 20,
                  bottom: SIZES.height / 4,
                  left: SIZES.width / 20,
                  top: SIZES.height / 8,
                },
              });

              const nexLoc = {
                latitude: results.coordinates[0]["latitude"],
                longitude: results.coordinates[0]["longitude"],
              };

              if (results.coordinates.length >= 2) {
                dispatch(calculateAngle({ coordinates: results.coordinates }));
              }

              dispatch(setFromLocation({ nexLoc }));
              dispatch(setIsReady(true));
            }
          }}
        />
        <DestinationMarker data={data} />
        <CarIcon location={data.location} />
      </MapView>
    </View>
  );
}
