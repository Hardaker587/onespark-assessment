import type { NextPage } from "next";
import LoginForm from "../components/account/account.login-form";
import BaseCard from "../components/base/base.card";

const Home: NextPage = () => {
  return (
    <BaseCard props={{ center: true }}>
      <div className="row justify-center align-center">
        <div className="col-6">
          <img
            className={"w-full"}
            src="/hero-image-security.png"
            alt="Log in"
          />
        </div>
        <div className="col-6">
          <LoginForm />
        </div>
      </div>
    </BaseCard>
  );
};

export default Home;
