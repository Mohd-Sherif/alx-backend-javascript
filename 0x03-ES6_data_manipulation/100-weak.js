export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Check if the endpoint is already in the WeakMap
  if (weakMap.has(endpoint)) {
    // Increment the call count
    const count = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, count);
  } else {
    // Initialize the call count
    weakMap.set(endpoint, 1);
  }

  // Check if the count is greater than or equal to 5
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
