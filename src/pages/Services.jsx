import { useNavigate } from "react-router-dom";

const Service = () => {
  
  const navigate = useNavigate();
  const agyJao = () => {
    navigate("/contact");
  };

  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <section>
        <h1>Service Page</h1>
        <button className="forward" onClick={() => agyJao()}>
          Go to Next page
        </button>
        <button className="rewind" onClick={goBack}>
          Go back
        </button>
      </section>
    </>
  );
};

export default Service;
