import React, { useCallback, useRef } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  height: "100%",
  width: "auto",
};

const places = [
  { info: "info1", location: { lat: 43.048225, lng: 141.49701 } },
  { info: "info2", location: { lat: 44.048225, lng: 142.49701 } },
];

const map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_googleMapsApiKey,
    // ここにAPIキーを入力します。今回は.envに保存しています。
    libraries,
  });

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);
  //API読み込み後に再レンダーを引き起こさないため、useStateを使わず、useRefとuseCallbackを使っています。

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";
  return (
    <>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={12} // デフォルトズーム倍率を指定します。
        center={{
          lat: 36.55705590299319,
          lng: 138.46427651234865,
        }} // 札幌周辺にデフォルトのセンターを指定しました。
        // options={options}
        onLoad={onMapLoad}
      ></GoogleMap>
      {places.map((marker) => (
        <Marker
          key={`${marker.location.lat * marker.location.lng}`}
          position={{
            lat: marker.location.lat,
            lng: marker.location.lng,
          }}
          onMouseOver={() => {
            setSelected(marker);
            // マウスオーバーで<InfoWindow>が描画されます。
          }}
          icon={{
            url: "url of icon",
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15),
            scaledSize: new window.google.maps.Size(30, 30),
            // ここでアイコン表示の設定ができます。
          }}
        />
      ))}
    </>
  );
};

export default map;
