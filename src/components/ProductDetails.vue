<template>
    <div>
        <h1>Product Details</h1>
        <div class="card">
            <p>Product {{ $route.params.id }}</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: "ProductDetails"
    }
</script>

<style lang="css" scoped>

</style>