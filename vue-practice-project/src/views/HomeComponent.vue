<template>
    <AddTask v-show="showAddTask" @add-task="addTask" />
    <TasksComponent @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
</template>

<script>
import AddTask from '../components/AddTask.vue';
import TasksComponent from '../components/TasksComponent.vue';

export default {
    name: "HomeComponent",
    props: {
        showAddTask: Boolean,
    },
    components: {
        TasksComponent,
        AddTask,
    },
    data() {
        return {
            tasks: [],
        }
    },
    methods: {
        async addTask(task) {
            const res = await fetch('api/tasks', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(task)
            })
            const data = await res.json();
            this.tasks = [...this.tasks, data]
        },
        async deleteTask(id) {
            if (confirm('Are you sure?')) {
                const res = await fetch(`api/tasks/${id}`, {
                    method: 'DELETE'
                })
                res.status === 200 ? (this.tasks = this.tasks.filter((task) => task.id !== id)) : alert('Error deleting task')
            }
        },
        async toggleReminder(id) {
            const taskToToggle = await this.fetchTask(id)
            console.log(taskToToggle);
            const updTask = {
                ...taskToToggle, reminder: !taskToToggle.reminder
            }
            console.log(updTask)

            const res = await fetch(`api/tasks/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(updTask)
            })
            console.log(res)
            const data = await res.json()
            console.log(data)

            console.log(data.reminder)
            this.tasks = this.tasks.map((task) => task.id === id ? { ...data } : task)
        },
        async fetchTasks() {
            const res = await fetch('api/tasks')
            const data = await res.json()
            return data
        },
        async fetchTask(id) {
            const res = await fetch(`api/tasks/${id}`)
            const data = await res.json()
            return data
        },
    },
    async created() {
        this.tasks = await this.fetchTasks()
    },


}
</script>