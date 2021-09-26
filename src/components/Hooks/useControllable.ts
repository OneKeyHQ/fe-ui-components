export function useControllableProp<T>(prop: T | undefined, state: T) {
  const isControlled = prop !== undefined;
  const value = isControlled && typeof prop !== "undefined" ? prop : state;
  return [isControlled, value] as const;
}
