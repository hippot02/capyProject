<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h4>Ceci est un site projet pour découvrir le Javascript avec VueJS.</h4>
    <h4>Il consiste en la création de plusieurs mini-jeu différents pour découvrir et s'entrainer en JS.</h4>
    <h4>L'aspect visuel sera donc travailler une fois les jeux terminés.</h4>

  </div>
  <div class="main">
      <section class="game-list">
        <h2>Nos Jeux</h2>
        <div class="game">
          <img src="https://t1.ea.ltmcdn.com/fr/posts/5/2/5/comment_prendre_soin_d_un_capybara_525_600.jpg" alt="New game" class="game-image" />
          <h3>CapyPendu</h3>
          <p>Jeu du pendu</p>
          <a href="" class="cta cta-buy">Jouer</a>
        </div>
        <div class="game">
          <img src="https://t1.ea.ltmcdn.com/fr/posts/5/2/5/comment_prendre_soin_d_un_capybara_525_600.jpg" alt="New game" class="game-image" />
          <h3>CapyPendu</h3>
          <p>Jeu du pendu</p>
          <a href="" class="cta cta-buy">Jouer</a>
        </div>
        <div class="game">
          <img src="https://t1.ea.ltmcdn.com/fr/posts/5/2/5/comment_prendre_soin_d_un_capybara_525_600.jpg" alt="New game" class="game-image" />
          <h3>CapyPendu</h3>
          <p>Jeu du pendu</p>
          <a href="" class="cta cta-buy">Jouer</a>
        </div>
        <div class="game">
          <img src="https://t1.ea.ltmcdn.com/fr/posts/5/2/5/comment_prendre_soin_d_un_capybara_525_600.jpg" alt="New game" class="game-image" />
          <h3>CapyPendu</h3>
          <p>Jeu du pendu</p>
          <a href="" class="cta cta-buy">Jouer</a>
        </div>
        <div class="game">
          <img src="https://t1.ea.ltmcdn.com/fr/posts/5/2/5/comment_prendre_soin_d_un_capybara_525_600.jpg" alt="New game" class="game-image" />
          <h3>CapyPendu</h3>
          <p>Jeu du pendu</p>
          <a href="" class="cta cta-buy">Jouer</a>
        </div>
        <div class="game">
          <img src="https://t1.ea.ltmcdn.com/fr/posts/5/2/5/comment_prendre_soin_d_un_capybara_525_600.jpg" alt="New game" class="game-image" />
          <h3>CapyPendu</h3>
          <p>Jeu du pendu</p>
          <a href="" class="cta cta-buy">Jouer</a>
        </div>
        </section>
      </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.main {
  background-color: white;
  padding: 20px;

  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
}
.cta {
  background-color: #eb8510;
  color: #000000;
  font-size: 16px;
  font-weight: 800;
  text-decoration: none;
  margin-left: auto;
  border-radius: 5px;
  text-transform: uppercase;
  padding: 5px 30px;
}

.cta-new {
  background-color: #eb8510;
  color: #000000;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  border-radius: 5px;
  text-transform: uppercase;
  text-align: center;
  padding: 5px 20px;
  padding: 5px 9px;
  height: 20px;
  width: 115px;
  overflow: hidden;
}

.cta-used {
  background-color: #298739;
  color: #ffff;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  text-align: center;
  border-radius: 5px;
  text-transform: uppercase;
  padding: 5px 20px;
  padding: 5px 9px;
  height: 20px;
  width: 115px;
  overflow: hidden;
}

.cta-trade {
  background-color: #298739;
  color: #ffff;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  text-align: center;
  border-radius: 5px;
  text-transform: uppercase;
  padding: 5px 9px;
  height: 20px;
  width: 115px;
  overflow: hidden;
}


.form-wrapper .cta {
  background-color: #eb8510;
  color: #000000;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 7px;
  text-transform: uppercase;
  cursor: pointer;
  max-width: 200px;

}

.game-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10%;
  background-color: white;
  padding: 20px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
  margin-bottom: 200px;
  align-items: center;
}

.game {
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: 5px 5px 10px ;
  background-color: #ffff;
  align-items: center;
}

.game .cta {
  grid-column: 2;
  margin-right: 5px;
  
}

.game h3,
.game p {
  grid-column: 1;
  padding-left: 4px;
}

.game-list img {
  width: 100%;
  grid-column: -1/1;
}

.game-list h2 {
  grid-column: -1/1;
  font-family: "Raleway", sans-serif, Verdana, Geneva, Tahoma, sans-serif;
  margin-bottom: -40px;
  text-transform: uppercase;
}
</style>
