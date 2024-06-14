
import { useNavigate } from "react-router-dom"


const Contact = () => {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }
  return (
    <>
    <section>
      <h1>Contact Page</h1>
      <button className="rewind" onClick={goBack}>Go back</button>
    </section>
    </>
  )
}

export default Contact