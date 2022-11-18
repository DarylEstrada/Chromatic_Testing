import Card from '../components/Card';
import '../components/Card.css'

export default {

  title: 'Example/Card',
  component: Card,

};

const Template = args => <Card {...args} />

export const CardLoremIpsum = Template.bind({})
CardLoremIpsum.args = {
  title: 'Lorem ipsum',
  imageUrl: 'https://media.tenor.com/NICoVNbKVGYAAAAC/profile-picture.gif',
  body: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'
}
