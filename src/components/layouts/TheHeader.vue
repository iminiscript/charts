<template>
    <header>
        <h1>
            <router-link to="/">{{ headerTitle }}</router-link>
        </h1>
        <div class="headerBottom">
            <router-link to="/">Home</router-link>
            <router-link to="/fetch-data">Fetch Data</router-link>
        </div>
    </header>
</template>

<script>
    export default {
        props: {
            headerTitle: {
                type: String,
                default: 'Title'
            },
        },
    }
</script>

<style scoped>
header {
    background: rgb(241, 166, 40);
    width: 100%;
    margin-bottom: 40px;
}

h1 {
    font-size: 24px;
    text-align: center;
    padding: 20px;
    color: #ffffff;
}

h1 a {
    font-size: 24px;
    text-align: center;
    padding: 20px;
    color: #ffffff;
    text-decoration: none;
}

.headerBottom {
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 20px;
}

.headerBottom a {
    font-size: 24px;
    color: #ffffff;
    font-weight: 800;
}

.headerBottom a:hover,
.headerBottom a.router-link-active {
    text-decoration: none;
    color: rgb(68, 179, 105);
}


</style>