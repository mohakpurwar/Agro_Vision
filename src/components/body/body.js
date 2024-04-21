import "../../index.css";
import "./body.css";
import FeatureImg from "../img/feature.png";
import CardBar from "../CardBar/CardBar";
import HelpCard from "../HelpCard/HelpCard";

const Body = () => {
  return (
    <div className="body" style={{ backgroundColor: "black", color: "white" }}>
      <div className="background-image grid place-items-center my-6">
        <div className="">
          <p className="text-2xl  font-bold text-center text-white uppercase mb-4">
            Farmers' Help Center
          </p>
          <p className="text-6xl font-medium text-center text-green-600 max-w-md mb-4">
            AgroVision
          </p>
          <p className="text-2xl font-bold text-center text-white">
            #WeAreFarmer'sVoice
          </p>
        </div>
      </div>
      <CardBar />
      <hr className="my-6" style={{ borderColor: "white" }} />
      <HelpCard />
      <hr className="my-6" style={{ borderColor: "white" }} />
      <section className="flex flex-col py-5">
        <div className="grid place-items-center my-14 ">
          <p className="text-3xl font-bold text-center text-white uppercase mb-2">
            FEATURES EXPLORED
          </p>
          <p className="text-xl font-medium text-center text-white max-w-md">
            {" "}
            Take a look at our features
          </p>
        </div>
        <img src={FeatureImg} alt="features" style={{filter: 'invert(1)'}}></img>
      </section>
    </div>
  );
};

export default Body;
