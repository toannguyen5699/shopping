import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import { CartContext } from '../../contexts/Cart';

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products : [{
        "id ": "f47dd9e2-b26d-4e6e-8110-92fd38618599",
        "name": "Pastry - Carrot Muffin - Mini",
        "description": "in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur",
        "imageUrl": "http://dummyimage.com/159x174.png/ff4444/ffffff"
      }, {
        "id ": "fa1114c2-589b-4b57-a0dd-60093888ecbb",
        "name": "Chocolate Bar - Coffee Crisp",
        "description": "vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
        "imageUrl": "http://dummyimage.com/110x142.jpg/cc0000/ffffff"
      }, {
        "id ": "bc11b5c7-256d-47f3-a057-3c5bb6dfaecb",
        "name": "Eggplant - Asian",
        "description": "amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus",
        "imageUrl": "http://dummyimage.com/197x243.bmp/ff4444/ffffff"
      }, {
        "id ": "a307dd3c-4eae-4052-b851-b08fde255a74",
        "name": "Meldea Green Tea Liquor",
        "description": "quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero",
        "imageUrl": "http://dummyimage.com/218x125.png/cc0000/ffffff"
      }, {
        "id ": "0615093d-accf-4432-a585-c7226dcf27a6",
        "name": "Cake - Miini Cheesecake Cherry",
        "description": "id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit",
        "imageUrl": "http://dummyimage.com/177x105.png/cc0000/ffffff"
      }, {
        "id ": "16043dab-8bda-4804-b6be-5bdf4d82b712",
        "name": "Puree - Guava",
        "description": "justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros",
        "imageUrl": "http://dummyimage.com/190x101.bmp/5fa2dd/ffffff"
      }, {
        "id ": "57820945-30fc-455b-ad45-3b46a7e10582",
        "name": "Latex Rubber Gloves Size 9",
        "description": "faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam",
        "imageUrl": "http://dummyimage.com/226x185.jpg/5fa2dd/ffffff"
      }, {
        "id ": "705d73fd-f8eb-4cac-b6bf-5240a83d57b9",
        "name": "Juice - Mango",
        "description": "tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum",
        "imageUrl": "http://dummyimage.com/183x234.bmp/cc0000/ffffff"
      }, {
        "id ": "eea5847f-d068-4416-9d00-a0b0ae1e3fd3",
        "name": "Bread - Mini Hamburger Bun",
        "description": "pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti",
        "imageUrl": "http://dummyimage.com/166x131.bmp/5fa2dd/ffffff"
      }, {
        "id ": "2c8933a2-0f87-4304-bed3-9747e79e66a9",
        "name": "Coconut - Shredded, Sweet",
        "description": "rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede",
        "imageUrl": "http://dummyimage.com/209x173.jpg/dddddd/000000"
      }, {
        "id ": "3a0e86b7-ce73-458f-b25f-2042d95a195b",
        "name": "Rabbit - Whole",
        "description": "commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id",
        "imageUrl": "http://dummyimage.com/117x141.jpg/cc0000/ffffff"
      }, {
        "id ": "9b960c33-e88e-474f-981f-632a69508a33",
        "name": "Napkin White - Starched",
        "description": "et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient",
        "imageUrl": "http://dummyimage.com/133x123.png/dddddd/000000"
      }, {
        "id ": "09d18abb-1d0c-4430-82c5-7a9457251cb3",
        "name": "Pork - Bones",
        "description": "at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum",
        "imageUrl": "http://dummyimage.com/109x151.jpg/ff4444/ffffff"
      }, {
        "id ": "f3c8dbe0-b67c-43c8-a5e2-0f1b5911dd63",
        "name": "Carbonated Water - Peach",
        "description": "lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit",
        "imageUrl": "http://dummyimage.com/135x200.bmp/cc0000/ffffff"
      }, {
        "id ": "12963799-c352-4e31-9463-3434012951a0",
        "name": "Veal - Bones",
        "description": "phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla",
        "imageUrl": "http://dummyimage.com/104x153.jpg/5fa2dd/ffffff"
      }, {
        "id ": "7ccd54e2-f846-45a0-9a82-930adc236a66",
        "name": "Coffee Cup 12oz 5342cd",
        "description": "amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem",
        "imageUrl": "http://dummyimage.com/250x165.jpg/cc0000/ffffff"
      }, {
        "id ": "f1cb6d01-93d0-4ac8-8d6b-ba6f63d7dbdf",
        "name": "Rice Pilaf, Dry,package",
        "description": "faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a",
        "imageUrl": "http://dummyimage.com/235x132.png/ff4444/ffffff"
      }, {
        "id ": "c434e07a-2861-4c9f-b025-786f3bddc1d2",
        "name": "Chicken Breast Halal",
        "description": "nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis",
        "imageUrl": "http://dummyimage.com/170x131.bmp/5fa2dd/ffffff"
      }, {
        "id ": "105cc01d-669c-4ada-b86a-1bc695aa3038",
        "name": "Chicken Giblets",
        "description": "dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero",
        "imageUrl": "http://dummyimage.com/161x202.png/ff4444/ffffff"
      }, {
        "id ": "4efe8cd0-4dd4-4394-8a0a-97d476e34bb7",
        "name": "Pasta - Fusili, Dry",
        "description": "in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat",
        "imageUrl": "http://dummyimage.com/181x228.jpg/dddddd/000000"
      }]

    }
  }
  render() {
    const { products } = this.state;
    return (
    <Container> 
      <h2>Products</h2>
      <Row>
        { products.map(product => (
          <Col sm="4">
            <Card>
            <CardImg 
              top 
              width="100%" 
              src={product.imageUrl}  />
            <CardBody>
              <CardTitle>{product.name}</CardTitle>
              <CardText>{product.description}</CardText>
              <CartContext.Consumer>
              { ({ addToCart }) => <Button onClick={() => addToCart(product)}>Add to Cart</Button> }
              </CartContext.Consumer>
            </CardBody>
          </Card>
        </Col>
        ))}
      </Row>
    </Container>
    );
  }
}

export default Products;