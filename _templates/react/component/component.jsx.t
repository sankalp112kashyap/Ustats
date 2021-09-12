---
to: <%= `${h.getDestinationPath(path, name) + h.getFileName(name)}.jsx` %>
---

import React from 'react';
import { <%= h.getComponentName(name) + 'Wrapper' %> } from './styled';

const <%= h.getComponentName(name) %> = () => (
  <<%= h.getComponentName(name) + 'Wrapper' %>> Your Code goes here </<%= h.getComponentName(name) + 'Wrapper' %>>
)

export default <%= h.getComponentName(name) %>;
