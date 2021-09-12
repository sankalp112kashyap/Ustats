---
to: <%= `${h.getDestinationPath(path, name)}styled.jsx` %>
---

import styled from 'styled-components';

export const <%= h.getComponentName(name) + 'Wrapper' %> = styled.div`
  display: flex;
`;

