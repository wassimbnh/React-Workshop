import Alert from 'react-bootstrap/Alert';

function Welcome() {
  return (
    <>
      {[
        'success',
        
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          Hey, Welcome to Our Shop MYStore
        </Alert>
      ))}
    </>
  );
}

export default Welcome;