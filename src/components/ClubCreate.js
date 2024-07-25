import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ClubCreate = (props) => {
  const [club, setClub] = useState({
    title: "",
    photoUrl: "",
    content: ""
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8000/api/clubs", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(club)
    })
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        setError(res.message)
      }else{
        console.log("here");
        navigate("/clubs");
      }
    })

  }

  const onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    let changedClub = {...club};
    changedClub[name]=value;
    setClub(changedClub);
  }

  return (
    <div>
      <h2>Create your own club</h2>
      <br />

      <span style={{color:"red"}}>{error}</span>
      <form onSubmit={onSubmit}>
        <label>Title:</label>
        <input type="text" name="title" onChange={onChange} />
        <br /><br />

        <label>Photo Url:</label>
        <input type="text" name="photoUrl" onChange={onChange} />
        <br /><br />

        <label>Content:</label>
        <input type="text" name="content" onChange={onChange} />
        <br /><br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ClubCreate;