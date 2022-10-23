import getConfig from "next/config";

import Layout from "@/components/Layout";
import { User } from "@/components/User";
import { Track } from "@/components/Track";
const { publicRuntimeConfig } = getConfig();
const { name } = publicRuntimeConfig.site;

const Home = () => {
  return (
    <Layout>
      <User />

      <Track id="0gkVD2tr14wCfJhqhdE94L" />
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1> {name}</h1>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
