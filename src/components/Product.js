import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {  useState } from 'react';
import '../App.css';
import BuyMessage from './BuyMessage';
                                         

function Product(props) {

    const [showMessage, setShowMessage] = useState(false);
    const [like, setLike] = useState(0)

    const handleClick = () => {
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
          }, 3000);
        
      };

    function handleLike () {
        setLike(like+1)
    }



  return (
    <div className="App">
      <Card className={like<=5?"card" : "card2"}>
        <Card.Img variant="top" src={require(`../assets/images/${props.img}`)} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            Description: {props.description}
          </Card.Text>
          <Card.Text>
            Price: {props.price} DT
          </Card.Text>
          <Card.Text>
            Likes : {like}
          </Card.Text>
          <div className="button-container">
          <Button variant="primary" onClick={handleClick}>Buy</Button>
          <Button variant="info" onClick={handleLike}>Like</Button>
        </div>
        </Card.Body>
      </Card>

      {
        showMessage && <BuyMessage />
      }
    </div>
  );
}

export default Product;
