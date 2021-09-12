---
to: <%= `${h.getDestinationPath(path, name)}index.jsx` %>
---

export { default as <%= h.getComponentName(name) %> } from './<%= h.getFileName(name) %>';
