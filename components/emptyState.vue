<template>
    <div id="empty-state">
        <v-img src="img/empty-state.png" contain />
        <h3>No results found!</h3>
    </div>
</template>

<style lang="scss">
    #empty-state {
        max-width: 500px;
        margin: auto;

        h3 {
           text-align: center;
           color: grey;
           font-size: 2em;
        }
    }
</style>