/*  Light Dark       */
export default function App() {
  return (
    <div className="wrapper">
      <div className="logo__box">
        <p className="logo">devfinder</p>
        <div className="theme__box">
          <p className="theme">Dark</p>
          <img src="../public/assets/icon-moon.svg" />
        </div>
      </div>

      <section className="input__box">
        <img className="input__icon" src="../public/assets/icon-search.svg" />
        <input
          className="input__search"
          type="text"
          placeholder="Search GitHub username..."
        />
        <button className="input__btn">Search</button>
      </section>

      <section className="user__section">
        <div className="user__details">
          {/* <img className="user__avatar" src="" alt="user avatar" /> */}
          <div className="user__avatar">AVATAR</div>
          <div className="user__text-box">
            <p className="user__name">User Name</p>
            <p className="user__link">@octocat</p>
            <p className="user__joined">Joined date</p>
          </div>
          <p className="user__text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </p>
        </div>

        <div className="follow__section">
          <div className="follow__box">
            <p className="follow__title">Repos</p>
            <span className="follow__number">8</span>
          </div>
          <div className="follow__box">
            <p className="follow__title">Followers</p>
            <span className="follow__number">3938</span>
          </div>
          <div className="follow__box">
            <p className="follow__title">Following</p>
            <span className="follow__number">9</span>
          </div>
        </div>

        <div className="socials__section">
          <div className="socials__box">
            <img
              className="socials__icon"
              src="../public/assets/icon-location.svg"
              alt="icon"
            />
            <p className="socials__link">San Francisco</p>
          </div>

          <div className="socials__box">
            <img
              className="socials__icon"
              src="../public/assets/icon-website.svg"
              alt="icon"
            />
            <p className="socials__link link--github">https://github.blog</p>
          </div>

          <div className="socials__box link--twitter">
            <img
              className="socials__icon"
              src="../public/assets/icon-twitter.svg"
              alt="icon"
            />
            <p className="socials__link link--twitter">Twitter</p>
          </div>

          <div className="socials__box">
            <img
              className="socials__icon"
              src="../public/assets/icon-company.svg"
              alt="icon"
            />
            <p className="socials__link">@github</p>
          </div>
        </div>
      </section>
    </div>
  );
}
