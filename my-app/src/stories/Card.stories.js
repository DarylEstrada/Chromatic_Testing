import Card from '../components/Card';
import '../components/Card.css'

export default {

  title: 'Components/Card',
  component: Card,
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 4 }
  }

};

const Template = ({ numberOfChildren, ...args }) =>
  <Card {...args}>

    {[...Array(numberOfChildren).keys()].map(n => (
      <Card>
        <div className="card-container">

          <div className="image-container">
            <img src='https://media.tenor.com/NICoVNbKVGYAAAAC/profile-picture.gif' alt='' />
          </div>

          <div className="card-content">
            <div className="card-title">
              <h3>Lorem ipsum</h3>
            </div>

            <div className="card-body">
              <p>OKAY</p>
            </div>
          </div>

          <div className="btn">
            <button>
              <a>
                View More
              </a>
            </button>
          </div>
        </div>

      </Card>
    ))}

  </Card>

export const CardLoremIpsum = Template.bind({})
CardLoremIpsum.args = {
  title: 'Lorem ipsum',
  imageUrl: 'https://media.tenor.com/NICoVNbKVGYAAAAC/profile-picture.gif',
  body: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
  direction: "row",
  spacing: 2,
  wrap: false,
}
CardLoremIpsum.storyName = 'Card Lorem Ipsum'