<template>
    <div class="nav-container">
        <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
export default {
    components: {
        Breadcrumb
    }
}
</script>

<style lang="scss">
.nav-container{
    width: 100%;
    height: 50px;
    background: #fff;
    line-height: 50px;
}
</style>
