<template>
    <div v-for="task in tasks" :key="task.id">
    <TaskComponent :task="task" />
    </div>
</template>

<script>
import TaskComponent from './TaskComponent.vue';

export default {
    name: "TasksComponent",
    props: {
        tasks: Array,
    },
    components: { TaskComponent }
}
</script>