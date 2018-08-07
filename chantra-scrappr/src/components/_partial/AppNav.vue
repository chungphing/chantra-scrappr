<template>
  <div class="container">
      <div class="header">
      <router-link to="/"  class="header-branding"><span>Chantra</span></router-link>
      <div class="header-list">
            <router-link class="header-item" to="/about">Laptops</router-link>
            <router-link class="header-item" to="/resume">PC</router-link>
            <router-link class="header-item" to="/portfolio">PC Parts</router-link>
            <router-link class="header-item" to="/blog">Used</router-link>
        </div>
      <button aria-label="main menu" class="hamburger hamburger--collapse" type="button">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-nav',
  props: {
    showTopMenu: true
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*start header */
a {
  text-decoration: none;
}
.container {
    justify-content: center;
    align-items: center;
    display: flex;

}
.header{
    width: 100%;
    z-index: 10;
    padding: 0 10px;
    margin: 18px 0;
    max-width: 1280px;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #fafafa;
}
.header-branding{
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 3px;
  text-align: center;
}
.header-item {
    font-size: .8rem;
    vertical-align: middle;
    letter-spacing: 2px;
    transition: box-shadow .1s ease-in-out;
}
.header-item:hover{
    color: #adadad;
    cursor: pointer;
    box-shadow: inset 0px -1px 0px 0px #128ee0;
}
.active-item {
    color: #4b4a4a;
}

.header-list{
  align-items: center;
}
.header-list a{
      padding: 10px 18px;
}
.header-branding > *{
  vertical-align: middle;
}
.header-branding {
  margin: 6px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.hamburger{
  display: none;
  z-index: 100;
  color: #4b4a4a;
  align-self: flex-start;
}
.hamburger-box{
  color: #4b4a4a;
}
.header,
.header-branding,
.header-item{
  color: #4b4a4a;
}

@media only screen and (max-width: 767px) {
  .header-list,
  .header-branding {
    display: none;
  }
  .hamburger {
    display: flex;
  }
}
</style>
