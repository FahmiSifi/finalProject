import {Alert} from 'react-bootstrap'
function Error({children}) {
    return (
      <Alert  variant="danger">
        {children}
      </Alert>
    );
}

export default Error
