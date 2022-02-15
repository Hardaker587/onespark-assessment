import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Icon from "../components/ui/ui.icon";
import { onespark } from "../data/icons";

const Home: NextPage = () => {
  return (
    <div className="row">
      <div className="col-6">
        <Icon path={onespark} width={200} height={50}/>
      </div>
      <div className="col-6">form</div>
    </div>
  );
};

export default Home;
