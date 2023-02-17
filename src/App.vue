<template>
    <div id="app">
        <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/list">List</router-link>
    </nav> -->
        <router-view />
    </div>
</template>

<style lang="less">
#app {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: #f2f2f2;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    //   text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
