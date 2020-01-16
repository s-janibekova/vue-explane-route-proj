<template>
    <div>
        <form @submit="saveProduct">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Enter product name" v-model="name">
                <button class="btn btn-primary btn-block">Save</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'ProductForm',
        data() {
            return {
                name: ''
            }
        },
        methods: {
            saveProduct(e){
                e.preventDefault;
                this.$router.push("/products")
                
            }
        }        
    }
</script>

<style scoped>

</style>