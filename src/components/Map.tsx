import dynamic from 'next/dynamic';

// Dynamiczny import komponentu Map - zapobiega błędom związanym z SSR
const DynamicMap = dynamic(() => import('./Map/Map'), {
  ssr: false, // Wyłącza renderowanie po stronie serwera
});

export default DynamicMap;
