import styled from 'styled-components'

import {Z_INDEX_LEVEL_2} from "consts/index.ts";
import colors from 'consts/colors'

export const Wrapper = styled.div`
  border-radius: 14px 20px;
  height: 40px;
  display: flex;
  align-items: center;
  transition: margin 0.2s ease-out;
  background-color: ${colors.primary};
  min-height: 52px;
  z-index: ${Z_INDEX_LEVEL_2};
  color: #fff;
`