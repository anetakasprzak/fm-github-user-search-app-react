import { useState } from "react";

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [query, setQuery] = useState("");

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchUser() {
    try {
      setError(false);
      setIsLoading(true);
      const res = await fetch(`https://api.github.com/users/${query}`);
      const data = await res.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.length < 3) {
      return;
    }

    fetchUser();
  };

  function formatDate(dateFromApi) {
    const date = new Date(dateFromApi);
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    return formattedDate;
  }

  return (
    <div className="wrapper" data-theme={isDarkTheme ? "dark" : "light"}>
      <div className="logo__box">
        <p className="logo">devfinder</p>
        <div
          className="theme__box"
          onClick={() => setIsDarkTheme((theme) => !theme)}
        >
          <p className="theme">{isDarkTheme ? "Light" : "Dark"}</p>
          <div className="theme_icon">
            {isDarkTheme ? (
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.545 6.455c-.9-.9-2.17-1.481-3.545-1.481a4.934 4.934 0 00-3.545 1.481c-.9.9-1.481 2.17-1.481 3.545 0 1.376.582 2.646 1.481 3.545.9.9 2.17 1.481 3.545 1.481a4.934 4.934 0 003.545-1.481c.9-.9 1.481-2.17 1.481-3.545a4.934 4.934 0 00-1.481-3.545zM10 3.413a.7.7 0 00.688-.688V.688A.7.7 0 0010 0a.7.7 0 00-.688.688v2.037a.7.7 0 00.688.688zM15.635 5.344l1.455-1.455a.67.67 0 000-.952.67.67 0 00-.952 0l-1.455 1.455a.67.67 0 000 .952c.238.264.66.264.952 0zM19.312 9.312h-2.037a.7.7 0 00-.688.688.7.7 0 00.688.688h2.037A.7.7 0 0020 10a.7.7 0 00-.688-.688zM15.608 14.656a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455a.67.67 0 00.952 0 .67.67 0 000-.952l-1.455-1.455zM10 16.587a.7.7 0 00-.688.688v2.037A.7.7 0 0010 20a.7.7 0 00.688-.688v-2.037a.7.7 0 00-.688-.688zM4.365 14.656L2.91 16.111a.67.67 0 000 .952.67.67 0 00.952 0l1.455-1.455a.67.67 0 000-.952c-.238-.264-.66-.264-.952 0zM3.413 10a.7.7 0 00-.688-.688H.688A.7.7 0 000 10a.7.7 0 00.688.688h2.037A.7.7 0 003.413 10zM4.365 5.344a.67.67 0 00.952 0 .67.67 0 000-.952L3.862 2.937a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455z" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.5133 11.3967C19.3087 11.3453 19.1041 11.3966 18.9251 11.5251C18.2602 12.0901 17.4929 12.5523 16.649 12.8605C15.8562 13.1687 14.9866 13.3228 14.066 13.3228C11.9944 13.3228 10.1019 12.4753 8.74647 11.1142C7.39102 9.75303 6.54707 7.85258 6.54707 5.77237C6.54707 4.89919 6.70051 4.0517 6.95626 3.28125C7.23758 2.45944 7.64677 1.71467 8.18383 1.07263C8.414 0.790132 8.36285 0.379226 8.08153 0.148091C7.90251 0.0196826 7.69792 -0.0316807 7.49332 0.0196826C5.31949 0.61036 3.42698 1.92012 2.07153 3.66648C0.767234 5.38715 0 7.51872 0 9.83007C0 12.6294 1.12528 15.1719 2.96664 17.0209C4.808 18.87 7.3143 20 10.1275 20C12.4803 20 14.6542 19.1782 16.3932 17.8171C18.1579 16.4303 19.4366 14.4528 19.9737 12.1928C20.076 11.8332 19.8714 11.4737 19.5133 11.3967Z" />
              </svg>
            )}
          </div>
        </div>
      </div>

      <section className="input__box">
        <img className="input__icon" src="./assets/icon-search.svg" />
        <form onSubmit={handleSubmit}>
          <input
            className="input__search"
            type="text"
            placeholder="Search GitHub username..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="input__btn">Search</button>
        </form>
      </section>
      {!user && <p>Start searching user</p>}
      {isLoading && <Loader />}
      {!isLoading && error && <Error />}
      {!isLoading && user && (
        <section className="user__section">
          <div className="user__details">
            <img
              className="user__avatar"
              src={user.avatar_url}
              alt="user avatar"
            />

            <div className="user__text-box">
              <p className="user__name">{user.name}</p>
              <p className="user__link">@{user.login}</p>
              <p className="user__joined">
                Joined {formatDate(user.created_at)}
              </p>
            </div>
            {!user.bio ? (
              <p style={{ opacity: 0.5 }}>Not available</p>
            ) : (
              <p className="user_text">{user.bio}</p>
            )}
          </div>
          <div className="follow__section">
            <div className="follow__box">
              <p className="follow__title">Repos</p>
              <span className="follow__number">{user.public_repos}</span>
            </div>
            <div className="follow__box">
              <p className="follow__title">Followers</p>
              <span className="follow__number">{user.followers}</span>
            </div>
            <div className="follow__box">
              <p className="follow__title">Following</p>
              <span className="follow__number">{user.following}</span>
            </div>
          </div>
          <div className="socials__section">
            <div className="socials__box">
              <img
                className="socials__icon"
                src="./assets/icon-location.svg"
                alt="icon"
              />
              {!user.location ? (
                <p style={{ opacity: 0.5 }}>Not available</p>
              ) : (
                <p className="socials__link">{user.location}</p>
              )}
            </div>

            <div className="socials__box">
              <img
                className="socials__icon"
                src="./assets/icon-website.svg"
                alt="icon"
              />
              {!user.blog ? (
                <p style={{ opacity: 0.5 }}>Not available</p>
              ) : (
                <p className="socials__link link--github">{user.blog}</p>
              )}
            </div>

            <div className="socials__box link--twitter">
              <img
                className="socials__icon"
                src="./assets/icon-twitter.svg"
                alt="icon"
              />
              {!user.twitter_username ? (
                <p style={{ opacity: 0.5 }}>Not available</p>
              ) : (
                <p className="socials__link link--twitter">
                  {user.twitter_username}
                </p>
              )}
            </div>

            <div className="socials__box">
              <img
                className="socials__icon"
                src="./assets/icon-company.svg"
                alt="icon"
              />
              {!user.company ? (
                <p style={{ opacity: 0.5 }}>Not available</p>
              ) : (
                <p className="socials__link">{user.company}</p>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function Loader() {
  return <div className="loader"></div>;
}

function Error() {
  return <p className="error">Upps, there was a problem fetching data..</p>;
}
