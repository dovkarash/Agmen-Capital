<template>
  <div class="menu">
    <router-link to="/" class="logo-wrap">
      <img src="../assets/white-logo.svg" height="" width="" />
    </router-link>
    <div class="menu-links-wrap" :class="{ open: openSideBar }">
      <div @click="openSideBar = false" href="" class="bgl-close-menu-btn">
        <img src="../assets/close.svg" height="" width="" />
      </div>
      <a @click="toggle" href="/#fund" class="nav-link">Our Firm</a>
      <router-link to="/team" class="nav-link">Team</router-link>

      <a @click="toggle" href="/#portfolio" class="nav-link"
        >Portfolio Companies</a
      >
      <a @click="toggle" href="/#contact" class="nav-link">Contact Us</a>
      <a
        @click="toggle"
        target="_blank"
        type="button"
        class="cta"
        href="https://www.navconsulting.net/NAVPortal/default.aspx"
        >Investor Login</a
      >
    </div>

    <div class="manu-background" @click="openSideBar = false" />
    <button @click="openSideBar = true" class="menu-btn">
      <img src="../assets/menu.svg" height="" width="" />
    </button>
  </div>
</template>

<script>
export default {
  name: "topnav",
  data: () => ({
    openSideBar: false,
  }),
  methods: {
    toggle() {
      if (this.openSideBar) this.openSideBar = false;
    },
  },
  watch: {
    "$route.fullPath"() {
      this.toggle();
    },
  },
};
</script>

<style scoped>
.manu-background {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: all ease 0.2s;
}
.open + .manu-background {
  display: block;
  animation: fadein 0.2s linear;
  background-color: rgba(0, 0, 0, 0.7);
}
@keyframes fadein {
  from {
    background-color: rgba(0, 0, 0, 0);
  }
  to {
    background-color: rgba(0, 0, 0, 0.7);
  }
}
</style>
