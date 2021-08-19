import OriginTypography from './Typography';
import Text from './Text';
import Link from './Link';
import Heading from './Heading';
import Paragraph from './Paragraph';
import Address from './Address';

export type TypographyProps = typeof OriginTypography & {
  Text: typeof Text;
  Link: typeof Link;
  Heading: typeof Heading;
  Paragraph: typeof Paragraph;
  Address: typeof Address;
};

const Typography = OriginTypography as TypographyProps;
Typography.Text = Text;
Typography.Link = Link;
Typography.Heading = Heading;
Typography.Paragraph = Paragraph;
Typography.Address = Address;


export default Typography;

export {
  Typography,
  Text,
  Link,
  Heading,
  Paragraph,
  Address
}
