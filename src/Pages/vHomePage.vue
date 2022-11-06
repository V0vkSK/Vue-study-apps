<template>
    <div >
  <body>
    <main class="container">
      <!-- Container left -->
      <div class="container-left">
        <img
          class="photo"
          src="../components/assets/Photo.jpg"
          width="100%"
          alt="Volodymyr Kyrylenko"
        />

        <section class="contact">
          <div class="contact-info">
            <svg class="contact-info__icon">
              <use href="../components//assets/home.svg"></use>
            </svg>
            <h2 class="contact-info__title">
              Contact <br />
              information
            </h2>
          </div>
          <div class="contact__line"></div>
          <ul class="contact__adresses">
            <li>Bulgaria</li>
            <li>
              <a href="tel:+359 87-685-38-72" class="link-to"
                >Phone: +359 87-685-38-72</a
              >
            </li>
            <li>
              <a class="link-to" href="mailto: vs.k@gmail.com"
                >e-mail: vs.k@gmail.com</a
              >
            </li>
            <li>
              <a href="git-hub.com/V0vkSK" class="link-to"
                >GitHub: git-hub.com/V0vkSK</a
              >
            </li>
          </ul>
          <div class="languages-info">
            <svg class="languages-info__icon">
              <use href="../components/assets/420px-Globe_icon.svg.png"></use>
            </svg>
            <h2 class="languages-info__title">Languages</h2>
          </div>
          <ul class="lang">
            <li class="lang__item">
              <img
                class="lang-icon"
                src="../components/assets/UkraineFlag.svg"
                alt="Flag of Ukraine"
                width="60"
              />
              <p class="lang-exp">Native</p>
            </li>
            <li class="lang__item">
              <img
                class="lang-icon"
                src="../components/assets/Flag_rus.svg"
                alt="Flag of rus"
                width="60"
              />
              <p class="lang-exp">Native</p>
            </li>
            <li class="lang__item">
              <img
                class="lang-icon-uk"
                src="../components/assets/Flag_UK.svg"
                alt="Flag of UK"
                width="60"
              />
              <p class="lang-exp">Basic</p>
            </li>
            <li class="lang__item">
              <img
                class="lang-icon-uk"
                src="../components/assets/bulgaria.svg"
                alt="Flag of Bulgaria"
                width="60"
              />
              <p class="lang-exp">Basic</p>
            </li>
          </ul>
          <div class="about-me">
            <svg class="about-me__icon">
              <use href="../components/assets/info.svg"></use>
            </svg>
            <h2 class="about-me__title">About me</h2>
          </div>
          <div class="contact__line"></div>
          <p class="text">
            I am looking for a position of a Junior Front-end developer. I have
            done a few study projects using Vue.js and React.js including
            landing website, adaptive, animation etc.
          </p>
        </section>
      </div>
      <!--  Container right -->
      <div class="container-right">
        <div class="name-container">
          <h1 class="name">Volodymyr Kyrylenko</h1>
          <p class="profession">Front-end Developer</p>
        </div>

        <section class="technologies up">
          <h2 class="technologies__title">Technologies</h2>
          <ul class="technologies__list">
            <li class="technologies-item">
              <h3 class="technologies-item__title">HTML & CSS</h3>
              <p class="technologies-item__description">SASS, BEM</p>
              <div class="technologies-item-icons">
                <img
                  class="technologies-item-icons__icon"
                  src="../components/assets/BEM.jpg"
                  alt="BEM"
                />
                <img
                  class="technologies-item-icons__icon"
                  src="../components/assets/Sass.jpg"
                  alt="SASS"
                />
              </div>
            </li>
            <li class="technologies-item">
              <h3 class="technologies-item__title">JavaScript</h3>
              <p class="technologies-item__description">REST API, Axios, DOM</p>
            </li>
            <li class="technologies-item">
              <h3 class="technologies-item__title">Vue.js, REACT</h3>
              <p class="technologies-item__description">
                Vuex, vue-router, Hooks
              </p>
              <div class="technologies-item-icons">
                <img
                  class="technologies-item-icons__icon"
                  src="../components/assets/Vue.png"
                  alt="vue-icon"
                />
                <img
                  class="technologies-item-icons__icon"
                  src="../components/assets/vuex.png"
                  alt="vuex-icon"
                />
                <img
                  class="technologies-item-icons__icon"
                  src="../components/assets/react.svg"
                  alt="react-icon"
                />
              </div>
            </li>
            <li class="technologies-item">
              <h3 class="technologies-item__title">OTHER</h3>
              <p class="technologies-item__description">GIT, NPM, WebPack</p>
              <div class="technologies-item-icons">
                <img
                  class="technologies-item-icons__icon"
                  src="../components/assets/Git.png"
                  alt="Git-icon"
                />
                <img
                  class="technologies-item-icons__icon"
                  src="../components/assets/npm.svg"
                  alt="npm-icon"
                />
                <img
                  class="technologies-item-icons__icon"
                  src="../components/assets/webpack.svg"
                  alt="webpack-icon"
                />
              </div>
            </li>
          </ul>
        </section>
        <section class="projects">
          <h2 class="projects__title">My projects</h2>
          <a href="https://mr_vovk.netlify.app" class="projects__link"
            >App by using "Movie Reviews API" from NY Times </a>
          <a href="https://vovkcv.netlify.app" class="projects__link"
            >This CV https://vovkcv.netlify.app</a>
        </section>
      </div>
    </main> 
  </body>


    </div>
</template>

<script>
    export default {
        name: 'vHomePage'
    }
</script>
<style lang="scss" scoped>

html {
  height: 100vh;
  box-sizing: border-box;
}

body {
  font-family: "Times New Roman", Times, serif;
  box-sizing: inherit;
  background-color: lightgray;
}

li {
  list-style: none;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  flex-direction: row;
  width: 1100px;
  margin-right: auto;
  margin-left: auto;
}

.container-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  background-color: rgb(6, 89, 21);
  color: #fff;
}

.container-right {
  display: flex;
  flex-direction: column;
  width: 700px;
  background-color: #fff;
}

.name-container {
  position: absolute;
  transform: translate(0, 0);
  transition: all 2s ease-in-out;
  width: 700px;
  height: 150px;
  margin-top: 50px;
  margin-left: -50px;
  background-color: rgb(22, 125, 73);
  color: #fff;
}

.name {
  margin: 20px 100px 10px;
  font-size: 50px;
}

.profession {
  font-size: 35px;
  color: rgb(6, 61, 62);
  margin-left: 100px;
}

.photo {
  display: flex;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 30px;
}

.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
}
.contact__adresses {
  list-style: none;
  padding: 20px;
  font-size: 20px;
  line-height: 2;
  margin-bottom: 20px;
}
.contact__line {
  display: block;
  border: 1px;
  background-color: #fff;
  width: 300px;
  height: 1px;
}
.contact .link-to {
  color: #fff;
  align-self: flex-start;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}
.contact .link-to:hover, .contact .link-to:focus {
  color: rgb(49, 219, 30);
}

.contact-info, .languages-info, .about-me {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.contact-info__icon, .languages-info__icon, .about-me__icon {
  display: flex;
  width: 40px;
  height: 40px;
  margin-left: -20px;
  margin-right: 30px;
  fill: #fff;
}
.contact-info__title, .languages-info__title, .about-me__title {
  font-size: 30px;
}

.lang {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 50px;
}
.lang__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
}

.lang-icon-uk {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.text {
  padding: 20px;
  font-size: 18px;
  line-height: 1.4;
}

.technologies, .projects {
  display: flex;
  flex-direction: column;
  color: rgb(6, 61, 62);
  padding: 30px 70px 0;
  align-items: center;
}
.technologies__title, .projects__title {
  color: rgb(7, 153, 95);
  align-self: flex-start;
  margin-bottom: 10px;
}
.technologies__link, .projects__link {
  color: rgb(20,83,38);
  align-self: flex-start;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}
.technologies__link:hover, .technologies__link:focus, .projects__link:hover, .projects__link:focus {
  color: rgb(49, 219, 30);
}

.up {
  margin-top: 180px;
}

.technologies-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
.technologies-item__title {
  display: flex;
  color: rgb(20,83,38);
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 10px;
}
.technologies-item__description {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}
.technologies-item__link {
  align-items: center;
}

.technologies-item-icons__icon {
  width: 70px;
  margin-right: 30px;
} 

</style>


