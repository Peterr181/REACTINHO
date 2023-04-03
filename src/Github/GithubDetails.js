import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchUserDetails } from "./fetchUserData";
import "./GithubDetails.css";

const GithubDetails = () => {
  const { user } = useParams();
  const [userDetails, setUserDetails] = useState([]);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { userDetails, repositories } = await fetchUserDetails(user);
        setUserDetails(userDetails);
        setRepositories(repositories);
        console.log(repositories[0].language);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [user]);

  const languages = [];
  for (let i = 0; i < repositories.length; i++) {
    const repo = repositories[i];
    if (repo.language) {
      languages.push(repo.language);
    }
  }
  let mostCommonString = "";
  if (languages.length > 0) {
    const counts = languages.reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});
    mostCommonString = Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    );
  }

  return (
    <div className="githubdetails__container">
      <div className="githubdetails__item">
        <div className="githubdetails__firstrow">
          <div className="githubdetails__left">
            <img src={userDetails.avatar_url} alt="github avatar" />
          </div>
          <div className="githubdetails__right">
            <h2>{userDetails.login}</h2>
            <p>{userDetails.location}</p>
          </div>
        </div>
        {userDetails.bio && (
          <div className="githubdetails__desc">
            <p>{userDetails.bio}</p>
          </div>
        )}
        <div className="githubdetails__followers">
          <span className="followers">Followers: {userDetails.followers}</span>
          <span className="following">Following: {userDetails.following}</span>
          <span className="repos">Repository: {userDetails.public_repos}</span>
        </div>
        <div className="githubdetails__repos">
          {repositories.map((repository) => (
            <a
              href={repository.html_url}
              className="githubdetails__repo repo__name"
              key={repository.id}
            >
              <span>{repository.name}</span>
              <span className="language__hidden">{repository.language}</span>
            </a>
          ))}
        </div>

        <div className="githubdetails__fact">
          <p>I think this guy is {mostCommonString} programmer!</p>
        </div>
        <Link to={`/github`}>
          <button className="githubdetails__button">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GithubDetails;
