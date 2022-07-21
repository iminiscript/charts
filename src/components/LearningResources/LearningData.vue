<template>
    <ul>
        <li>
            <h3>{{ title }}</h3>
            <p>{{ desc }}</p>
            <a :href="link">Visit the site</a>
            <button @click="deleteResc()">Delete</button>
        </li>
    </ul>
</template>

<script>
    export default {
        props: {
            title: {
                type: String
            },
            desc: {
                type: String
            },
            link: {
                type: String
            },
            id: {
                type: String
            }
        },
        inject: ['deleteResc'],
    }
</script>

<style  scoped>

h3 {
    margin-top: 0;
}
button {
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
}

li {
    margin-bottom: 2rem;
    background-color: #f1f1f1;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: self-start;
    position: relative;
}
</style>