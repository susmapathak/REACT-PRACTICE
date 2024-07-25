import React from 'react';
import { useState, useEffect} from 'react';

const ClubList = () => {
  const [clubs, setClubs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/clubs", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setClubs(data);
    });
  }, []);

  const onClick = (clubId) => {
    console.log(clubId);
    const url = "http://localhost:8000/api/" + clubId + "/delete"
    fetch(url, {
      method: "DELETE"
    }).then((res) => {
      if (res.status===200) {
        let currentClubs = [...clubs]
        let remainingClubs = []
        currentClubs.forEach((club) => {
          if (club.id !== clubId) {
            remainingClubs.push(club)
          }
        })
        setClubs(remainingClubs);
      }
    });
  }

  return (
    <div>
      <h2>Club List found in your area</h2><br /><br />
      {clubs.map((club) => (
        <div key={club.id}>
          <p>{club.title}</p>
          <img src={club.photoUrl} alt='' />
          <button onClick={() => onClick(club.id)}>DELETE</button>
          <br /><br />
        </div>
      ))}

    </div>
  );
}

export default ClubList;
// 21794038
// 4g/atLs9