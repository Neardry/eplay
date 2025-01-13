import styled from 'styled-components'
import { colors } from '../../styles'

import { HashLink } from 'react-router-hash-link'

export const Container = styled.footer`
  background-color: ${colors.gray};
  padding: 32px 0;
  margin-top: 40px;
  font-size: 14px;
`

export const SectionTitle = styled.h4`
  color: ${colors.white};
  font-weigth: bold;
  font-size: 16px;
`

export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`

export const Link = styled(HashLink)`
  color: ${colors.lightgray};
  text-decoration: none;
  margin-right: 8px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
