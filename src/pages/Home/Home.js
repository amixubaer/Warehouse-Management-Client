import React from "react";
import Banner from "./Banner/Banner";
import Chart from "./Chart/Chart";
import FeaturedItems from "./FeaturedItems/FeaturedItems";
import StockOut from "./StockOut/StockOut";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const Home = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Banner></Banner>
      <FeaturedItems></FeaturedItems>
      <StockOut></StockOut>
      <Chart></Chart>
    </div>
  );
};

export default Home;
