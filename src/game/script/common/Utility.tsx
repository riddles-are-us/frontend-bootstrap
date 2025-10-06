export function getTextShadowString(size: number, color = "#3D3C3B") {
  return `
    -${size}px -${size}px 0 ${color}, 
    ${size}px -${size}px 0 ${color}, 
    -${size}px ${size}px 0 ${color}, 
    ${size}px ${size}px 0 ${color}, 
    0px -${size}px 0 ${color}, 
    0px ${size}px 0 ${color}, 
    -${size}px 0px 0 ${color}, 
    ${size}px 0px 0 ${color}`;
}

export function getTextShadowStyle(size: number, color = "#3D3C3B") {
  return {
    textShadow: getTextShadowString(size, color),
  };
}
