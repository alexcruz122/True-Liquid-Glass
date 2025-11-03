// small demo: allow quick keyboard tweaks for testing
// Press B to increase blur, N to toggle noise opacity
(() => {
  const root = document.documentElement;
  let blur = 12;
  let noise = 0.06;
  window.addEventListener('keydown', (e) => {
    if(e.key === 'b'){ blur = Math.min(40, blur + 2); root.style.setProperty('--backdrop-blur', blur + 'px'); console.log('blur', blur) }
    if(e.key === 'v'){ blur = Math.max(0, blur - 2); root.style.setProperty('--backdrop-blur', blur + 'px'); console.log('blur', blur) }
    if(e.key === 'n'){ noise = noise ? 0 : 0.06; root.style.setProperty('--noise-opacity', noise); console.log('noise', noise) }
  });
})();
