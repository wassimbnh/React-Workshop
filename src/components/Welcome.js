import Alert from 'react-bootstrap/Alert';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

function Welcome() {
const navigate = useNavigate()

const handleClick = () => {
  navigate("/add-product")
}

  return (
    <>
      {[
        'success',
        
      ].map((variant) => (
        <Alert key={variant} variant={variant} style={{ width: "100vw" }}>
          Hey, Welcome to Our Shop MYStore
        </Alert>
      ))}
      <div style={{paddingBottom:"3px", paddingLeft:"3px" , }}>
      <Button onClick={handleClick}>Add Product</Button>
      </div>
      
    </>
  );
}

export default Welcome;