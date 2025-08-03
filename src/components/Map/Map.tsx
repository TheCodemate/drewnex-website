'use client';
import { useCallback, useRef, useState, useEffect } from 'react';
import Image from 'next/image';

// Rzeczywiste współrzędne dla Sułkowice, ul. Wolności 29
const position = { lat: 49.83866, lng: 19.78301 };
const address = 'Drewnex - Grzegorz Pyrtek, ul. Wolności 29, 32-440 Sułkowice';

// Kodowanie adresu dla URL
const encodedAddress = encodeURIComponent(address);

// Limity dla zabezpieczenia przed botami
const CLICK_LIMIT = 5; // Maksymalna liczba kliknięć w krótkim czasie
const CLICK_TIMEOUT = 10000; // Czas resetowania licznika kliknięć (10 sekund)
const THROTTLE_TIME = 2000; // Czas blokady między kliknięciami (2 sekundy)

const Map = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [showAddressTooltip, setShowAddressTooltip] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [isThrottled, setIsThrottled] = useState(false);
  const lastClickTime = useRef<number>(0);

  // Funkcja otwierająca Google Maps z nawigacją z zabezpieczeniem przed botami
  const openGoogleMapsDirections = useCallback(() => {
    const now = Date.now();

    // Sprawdzenie czy nie przekroczono limitu kliknięć
    if (clickCount >= CLICK_LIMIT) {
      console.warn('Zbyt wiele kliknięć w krótkim czasie. Odczekaj chwilę.');
      return;
    }

    // Sprawdzenie czy nie klikamy zbyt szybko (throttling)
    if (isThrottled || now - lastClickTime.current < THROTTLE_TIME) {
      console.warn('Zbyt szybkie kliknięcia. Odczekaj chwilę.');
      return;
    }

    // Aktualizacja licznika kliknięć i czasu ostatniego kliknięcia
    setClickCount((prev) => prev + 1);
    lastClickTime.current = now;
    setIsThrottled(true);

    // Resetowanie throttlingu po określonym czasie
    setTimeout(() => {
      setIsThrottled(false);
    }, THROTTLE_TIME);

    if (typeof window !== 'undefined') {
      const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
      window.open(directionsUrl, '_blank', 'noopener,noreferrer');
    }
  }, [clickCount]);

  // Resetowanie licznika kliknięć po określonym czasie
  useEffect(() => {
    const resetTimer = setTimeout(() => {
      setClickCount(0);
    }, CLICK_TIMEOUT);

    return () => clearTimeout(resetTimer);
  }, [clickCount]);

  const toggleAddressTooltip = useCallback((e: React.MouseEvent) => {
    e.stopPropagation(); // Zapobiega propagacji kliknięcia do warstwy mapy
    setShowAddressTooltip((prev) => !prev);
  }, []);

  // Zamyka tooltip po kliknięciu poza nim
  useEffect(() => {
    const handleClickOutside = () => {
      if (showAddressTooltip) {
        setShowAddressTooltip(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showAddressTooltip]);

  // Obsługa załadowania mapy
  const handleMapLoad = useCallback(() => {
    setMapLoaded(true);
  }, []);

  return (
    <div ref={mapContainerRef} className="relative w-full h-full">
      {/* Używamy dokładnego adresu w URL mapy */}
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1286.6751277090913!2d19.78176!3d49.83866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716a0b7d3b7b8c3%3A0x8bf7f93c9d1c2f26!2zV29sbm_Fm2NpIDI5LCAzMi00NDAgU3XFgmtvd2ljZQ!5e0!3m2!1spl!2spl!4v1689234567890!5m2!1spl!2spl`}
        width="100%"
        height="100%"
        style={{
          border: 'none',
          pointerEvents: 'none', // Blokuje interakcje bezpośrednio w stylach
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa lokalizacji Drewnex"
        onLoad={handleMapLoad}
        className="pointer-events-none" // Blokuje interakcje z iframe
        sandbox="allow-scripts allow-same-origin" // Ogranicza uprawnienia iframe
      />

      {/* Nakładka na mapę, aby ukryć domyślne kontrolki Google Maps i zabezpieczyć przed botami */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        aria-hidden="true"
        onContextMenu={(e) => e.preventDefault()} // Blokuje menu kontekstowe
      />

      {mapLoaded && (
        <>
          {/* Własny marker - zabezpieczony przed botami */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full z-10 cursor-pointer"
            onClick={toggleAddressTooltip}
            title="Kliknij, aby zobaczyć adres"
            onContextMenu={(e) => e.preventDefault()} // Blokuje menu kontekstowe
            data-testid="map-marker" // Identyfikator dla testów, ale utrudnia automatyzację
          >
            <div className="w-8 h-10 bg-red-600 rounded-full rounded-br-none rotate-45 shadow-md flex items-center justify-center">
              <div className="w-3.5 h-3.5 bg-white rounded-full -rotate-45" />
            </div>
          </div>

          {/* Tabliczka z adresem - przesunięta bliżej środka */}
          <div
            className="absolute left-[10%] md:left-[15%] top-1/2 -translate-y-1/2 z-20 bg-secondary p-5 md:p-8 rounded-lg shadow-lg w-[80%] md:w-[350px] lg:w-[400px]"
            onClick={(e) => e.stopPropagation()}
            onContextMenu={(e) => e.preventDefault()} // Blokuje menu kontekstowe
            data-testid="address-card" // Identyfikator dla testów
          >
            <h2 className="font-thin text-xl md:text-2xl lg:text-3xl mb-3 md:mb-4 text-center">
              Adres lokalizacji
            </h2>
            <div className="flex flex-col items-start gap-1 mb-4 md:mb-5">
              <span className="font-bold text-detail text-sm md:text-base">
                Adres
              </span>
              <span className="text-sm md:text-base">
                Drewnex - Grzegorz Pyrtek
              </span>
              <span className="text-sm md:text-base">ul. Wolności 29</span>
              <span className="text-sm md:text-base">32-440 Sułkowice</span>
            </div>
            <button
              onClick={openGoogleMapsDirections}
              className="w-full flex items-center justify-center gap-2 border bg-detail border-detail text-white text-sm md:text-base px-4 md:px-6 py-2 md:py-3 rounded-lg cursor-pointer hover:bg-detailHovered transition-colors font-medium"
              onContextMenu={(e) => e.preventDefault()} // Blokuje menu kontekstowe
              aria-label="Zobacz jak dojechać do Drewnex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-5 md:w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 1.586l-4 4V18.5l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="whitespace-nowrap">
                Wyznacz trasę w Google Maps
              </span>
            </button>
          </div>

          {/* Warstwa do kliknięcia w mapę - zaktualizowana z-index */}
          {/* <div
            className="absolute inset-0 z-[5] cursor-pointer"
            onClick={openGoogleMapsDirections}
            onContextMenu={(e) => e.preventDefault()} // Blokuje menu kontekstowe
            title="Kliknij, aby wyznaczyć trasę"
            aria-label="Kliknij, aby wyznaczyć trasę do Drewnex"
            data-testid="map-click-layer" // Identyfikator dla testów
          /> */}
        </>
      )}
    </div>
  );
};

export default Map;
