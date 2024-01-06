import React, { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import axios from "axios";

const legalIcon = new Icon({
  iconUrl: "/location.png",
  iconSize: [35, 35], // size of the icon
});

export const MapComponent: React.FC = () => {
  const [{ lat, lng }, setPosition] = useState({
    lat: 35.691713857071676,
    lng: 411.39953613281256,
  });

  const geoRevertAddress = async (lat: number, lng: number) => {
    try {
      const result = await axios.get(
        `https://map.ir/reverse?lat=${lat}&lon=${lng}`,
        {
          headers: {
            "x-api-key":
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjFhZDdlZWZkNTdkZDljYWMzZDQ0MDkzYWRkMTQzNGY2MWUxZTE3MjhmNGMwZDNjZjc1NmZmYjY3MjNiZDk4NTNkODE0MjA1NDM2MzI2ZTA5In0.eyJhdWQiOiIyNTYxMyIsImp0aSI6IjFhZDdlZWZkNTdkZDljYWMzZDQ0MDkzYWRkMTQzNGY2MWUxZTE3MjhmNGMwZDNjZjc1NmZmYjY3MjNiZDk4NTNkODE0MjA1NDM2MzI2ZTA5IiwiaWF0IjoxNzA0MTkxNjA5LCJuYmYiOjE3MDQxOTE2MDksImV4cCI6MTcwNjY5NzIwOSwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.Qou-QPNso-ALvjyssb7RP4bX4ZA2xsyoHk5Shl-H-3Q7iXBXf7hlmj62FisHo88SKgQmqJZUCkjPC2dAxyOIxGDUvhQvvJKdlAeKhApT3G-Ua3_84lAAdbUa7Ao64ZuVgTjO2fYdcN76T3G18BM5-BsSfcpetUi-ppHZwtMS7_p438JEi7ddm2Q4nKprTS-INjGTmueThieQzOvjBBc5xzo5LdTG4jmxEAW7XEK8m2cjLnWHZjbJky1H3PTPetwZjjWBg1zB32mVItlJU5Jlv21LVcS1GlbB-hYlOaKa2iUrpMACMb8i1Hn_krSdaxCRYQA1Ot0l4_TWOEQg5cFAsA",
          },
        },
      );
      if (result.request.data.status !== 200) {
        throw new Error("مشکلی پیش امده");
      }
      return result.data;
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  useEffect(() => {
    const res = geoRevertAddress(lat, lng);
    console.log(res);
  }, [lat, lng]);
  console.log(lat, lng);

  return (
    <MapContainer
      className="map-container"
      center={[lat, lng]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ width: "100%", height: "60vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={legalIcon}>
        <Popup>شما اینجا هستید</Popup>
      </Marker>
      <DetectClick setPosition={setPosition} />
    </MapContainer>
  );
};

interface DetectClickProps {
  setPosition: React.Dispatch<
    React.SetStateAction<{ lat: number; lng: number }>
  >;
}

function DetectClick({ setPosition }: DetectClickProps) {
  useMapEvents({
    click: (e) => {
      console.log(e);

      setPosition({ lat: e.latlng.lat, lng: e.latlng.lng });
    },
  });
  return null;
}
