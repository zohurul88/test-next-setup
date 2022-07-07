import Navbar from "../../layouts/Navbar";
import Header from "../../layouts/Header";
import MainBody from "../../layouts/MainBody";
import AddUserForm from "../../components/forms/AddUserForm";
import UserListTable from "../../components/views/userListTable";

export const Home = () => {
  return (
    <>
      <Header title="Dashboard" />
      <Navbar name="dashboard" />
      <MainBody>
        <AddUserForm />
        <UserListTable />
      </MainBody>
    </>
  );
};

export default Home;
