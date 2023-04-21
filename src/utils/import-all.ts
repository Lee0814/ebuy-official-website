export function importAll(requireContext: __WebpackModuleApi.RequireContext) {
  return Array.from(
    new Set(requireContext.keys().map((key) => requireContext.resolve(key)))
  );
}
