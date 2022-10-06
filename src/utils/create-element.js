export function createElement(tag, props, children) {
  const element = document.createElement(tag);

  if (props !== undefined)
    Object.keys(props).forEach(key => {
      element[key] = props[key];
    });

  if (children !== undefined)
    if (Array.isArray(children))
      children.forEach(child => element.appendChild(child));
    else element.appendChild(children);

  return element;
}
