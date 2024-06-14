
import { useNavigate } from "react-router-dom";

const About = () => {

  const navigate = useNavigate();
  const agyJao = () => {
    navigate("/services");
  };

  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
    <section>
      <h1>About Page</h1>
      <button className="forward" onClick={agyJao}>Go to Next page</button>
      <button className="rewind" onClick={goBack}>Go back</button>
    </section>
    </>
  );
};

export default About;
