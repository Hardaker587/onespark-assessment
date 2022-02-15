import type { NextPage } from "next";
import LoginForm from "../components/account/account.login-form";

const Home: NextPage = () => {
  return (
    <div className="row justify-center align-center">
      <div className="col-6">
        <img className={"w-full"} src="/hero-image-security.png" alt="Log in" />
      </div>
      <div className="col-6">
        <LoginForm />
      </div>
    </div>
  );
};

export default Home;
