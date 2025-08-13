/// <reference types="astro/client" />
/// <reference types="@types/youtube" />

// Tell TypeScript that the global YT object exists
declare var YT: any;

// Tell TypeScript about the function on the window object
interface Window {
  onYouTubeIframeAPIReady?: () => void;
}
