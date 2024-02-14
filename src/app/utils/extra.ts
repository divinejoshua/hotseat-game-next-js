// Check if user has network connection
export function isNetworkAvailable(): boolean {
      return navigator.onLine ? true : false;
  }