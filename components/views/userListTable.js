import { Container, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function UserListTable() {
  const { items } = useSelector((state) => state.user);
  return (
    <Container>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>email</th>
              <th>password</th>
            </tr>
          </thead>
          <tbody>
            {items.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}
