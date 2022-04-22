<template>
    <section>
        <div class="grid">
            <h1>Profile Details</h1>
            <img src="../assets/avatar.png" alt="">
        </div>
        <div class="grid">
            <div class="flex">
                <h3>First Name</h3>
                <input type="text" value="Ravindra" disabled>
            </div>
            <div class="flex">
                <h3>Last Name</h3>
                <input type="text" value="Purohit" disabled>
            </div>
            <div class="flex">
                <h3>iCloudStore Plan</h3>
                <input type="text" value="Unlimited For 30 Days" disabled>
            </div>
            <div class="flex">
                <h3>Phone Number</h3>
                <input type="text" value="+91 8756431062" disabled>
            </div>
            <div class="flex">
                <h3>Email Id</h3>
                <input type="text" value="ravindrapurohit2011@gmail.com" disabled>
            </div>
            <div class="flex">
                <h3>Password</h3>
                <input type="text" value="hc-js47^_3" disabled>
            </div>
            <div class="flex">
                <input type="submit" value="Reguest Edit" disabled>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Profile',
    }
</script>

<style scoped>
    section {
        margin: 8rem auto;
        max-width: 34rem;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 0px 20px;
    }

    section .grid:nth-child(1) {
        justify-content: center;
    }

    h1 {
        text-align: center;
        margin-bottom: 20px;
    }

    h1, h3 {
        color: rgb(50, 50, 50);
    }

    p {
        font-weight: normal;
    }

    .grid {
        padding: 20px 30px;
    }

    .flex {
        align-items: center;
        justify-content: space-between;
    }

    input[type=text], input[type=password] {
        width: 15rem;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        background: -internal-light-dark(rgb(182, 181, 181), rgb(59, 59, 59));
    }

    input[type=text]:hover, input[type=password]:hover, input[type=submit]:hover{
        cursor: no-drop;
    }

    input[type=submit] {
        width: 20rem;
        background-color: #f0ad4e;
        color: white;
        padding: 14px 20px;
        margin: auto;
        margin-top: .7rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    img {
        height: 17rem;
        width: 20rem;
    }
</style>

