<template>
  <div>
    <!-- <routerview/> -->
    <router-view />
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap');

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  html {
      scroll-behavior: smooth;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    position: relative;
    height: 100%;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  li {
      list-style: none;
  }

  button {
      padding: 10px 15px;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease-in;
      border-radius: 5px;
  }

  .container {
      max-width: 1000px;
      margin: 0 auto;
  }

  .card {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      padding: 10px 30px;
      width: 300px;
  }

  .btn-primary {
      background: #171717;
      color: #FFFFFF;
  }

  .primary:hover {
      background: #0275d8;
      color: #FFFFFF;
  }

  img {
      width: 100%;
  }

  .line {
      border: 1px solid #333;
      width: 100px;
  }

  .flex {
      display: flex;
  }

  .grid {
      display: grid;
  }

  .grid-2 { grid-template-columns: repeat(2, 1fr); }

  .grid-3 { grid-template-columns: repeat(3, 1fr); }

  .grid-4 { grid-template-columns: repeat(4, 1fr); }

  /* margin & padding along y axis */
  .my-1 { margin: 1rem auto; }

  .my-2 { margin: 2rem auto; }

  .my-3 { margin: 3rem auto; }

  .my-4 { margin: 4rem auto; }

  .my-5 { margin: 5rem auto; }

  .py-1 { padding: 1rem auto; }

  .py-2 { padding: 2rem auto; }

  .py-3 { padding: 3rem auto; }

  .py-4 { padding: 4rem auto; }

  /* Margin and padding along x axis */

  .m-1 { margin: 1rem; }

  .m-2 { margin: 2rem; }

  .m-3 { margin: 3rem; }

  .m-4 { margin: 4rem; }

  .m-5 { margin: 5rem; }

  .p-1 { padding: 1rem; }

  .p-2 { padding: 2rem; }

  .p-3 { padding: 3rem; }

  .p-4 { padding: 4rem; }

  .blue {
      background: #0275d8;
      color: #FFFFFF;
  }

  .white {
      background: #FFFFFF;
      color: #0275d8;
      font-weight: 400;
      border: 1px solid rgb(134, 134, 134);
  }
</style>
