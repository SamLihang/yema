<template>
    <div class="main colStartNoWarp">
        <task-bar />
        <task-cell />
    </div>
</template>

<script>
import TaskBar from '../components/TaskBar'
import TaskCell from '../components/TaskCell'
export default {
    name: 'HelloWorld',
    data () {
        return {
        }
    },
    components: {
        TaskBar,
        TaskCell,
    }
}
</script>

<style scoped lang="scss">
    .main{
        width: 100%;
        height: 100%;
        .test{
            width: 100%;
        }
    }
</style>
