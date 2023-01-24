import styled from 'styled-components'
import { breakpoints } from '../../utils/constants'

const Footer = () => (
  <Paragraph>
    © 2023 by{' '}
    <a href="https://github.com/lapaset" title="Liisa's github repository">
      Liisa Lahti
    </a>{' '}
    (they/them) based on artwork by{' '}
    <a href="https://www.ollikilpi.com/" title="Olli's portfolio">
      Olli Kilpi
    </a>{' '}
    (he/him)
  </Paragraph>
)

export default Footer

const Paragraph = styled.p`
  margin: 36px 40px 0;
  text-align: center;

  @media only screen and (max-width: ${breakpoints.mobile}px) {
    margin: 24px 40px 0;
  }
`
