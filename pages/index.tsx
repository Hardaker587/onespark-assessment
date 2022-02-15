import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="row">
      <div className="col-6">image</div>
      <div className="col-6">form</div>
    </div>
  );
};

export default Home;
