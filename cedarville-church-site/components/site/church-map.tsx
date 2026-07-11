"use client";

import { useMemo } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

import { churchInfo } from "@/lib/site-data";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export function ChurchMap() {
  const center = useMemo(
    () => [churchInfo.coordinates.lat, churchInfo.coordinates.lng] as [number, number],
    [],
  );

  return (
    <div className="overflow-hidden rounded-3xl border border-border/70">
      <MapContainer center={center} zoom={14} className="h-[360px] w-full" scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} icon={markerIcon}>
          <Popup>{churchInfo.name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
