export function getWindowSize() {
  const { innerWidth } = window;
  return { innerWidth };
}
export function getSizeWindow(setWindowSize) {
  function handleWindowResize() {
    setWindowSize(getWindowSize());
  }
  window.addEventListener("resize", handleWindowResize);
  return () => {
    window.removeEventListener("resize", handleWindowResize);
  };
}
