<template>
    <div class="row">
        <div class="col-4">
             <router-link class="list-group-item list-group-item-action" :to="`/user/${$route.params.id}/profile`" role="tab">Profile</router-link>
            <router-link class="list-group-item list-group-item-action" :to="`/user/${$route.params.id}/posts`"  role="tab">Message</router-link>
            <router-link class="list-group-item list-group-item-action" :to="`/user/${$route.params.id}/messages`" role="tab">Posts</router-link>
        </div>
        <div class="tab-content col-4">
                <router-view></router-view>
        </div>
        </div>
</template>

<script>
    export default {
        name: 'User'
    }
</script>

<style lang="scss" scoped>

</style>