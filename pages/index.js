import Navbar from "../layouts/Navbar";
import Header from "../layouts/Header";
import MainBody from "../layouts/MainBody";
import { Plus } from "react-bootstrap-icons";
import Link from "next/link";
import { Row } from "react-bootstrap";
import UserListTable from "../components/views/userListTable";
export const Home = () => {
  return (
    <>
      <Header title="Dashboard" />
      <Navbar name="dashboard" />
      <MainBody>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand"></a>
            <div className="d-flex">
              <Link href="/user/add">
                <a className="btn btn-outline-success me-2">
                  <Plus /> Add
                </a>
              </Link>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <Row>
            <UserListTable />
          </Row>
        </div>
      </MainBody>
    </>
  );
};

export default Home;
