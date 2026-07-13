"use client";

import { useMemo } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

import { churchInfo } from "@/lib/site-data";

const markerIcon = L.divIcon({
  className: "church-map-marker-shell",
  html: `
    <div class="church-map-marker-beacon" aria-hidden="true">
      <span class="church-map-marker-core"></span>
      <span class="church-map-marker-ring church-map-marker-ring-one"></span>
      <span class="church-map-marker-ring church-map-marker-ring-two"></span>
    </div>
  `,
  iconSize: [22, 22],
  iconAnchor: [11, 11],
  popupAnchor: [0, -14],
});

type ChurchMapProps = {
  className?: string;
};

export function ChurchMap({ className }: ChurchMapProps) {
  const center = useMemo(
    () => [churchInfo.coordinates.lat, churchInfo.coordinates.lng] as [number, number],
    [],
  );

  return (
    <div className={className ?? "overflow-hidden rounded-3xl border border-border/70"}>
      <MapContainer
        center={center}
        zoom={14}
        className="h-[600px] w-full"
        scrollWheelZoom={false}
        attributionControl={false}
      >
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
