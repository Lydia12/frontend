import Modal from 'react-bootstrap/Modal'

class HistorialPuntos extends React.Component{

render(){
    return(<div>
    <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>PuntosApi.getHistorialPuntos(dni)</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>
</div>);
}
    
}

export default HistorialPuntos;
