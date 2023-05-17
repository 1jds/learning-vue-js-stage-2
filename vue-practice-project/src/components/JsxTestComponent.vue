<!-- // import { defineComponent } from 'vue'

// // default export call: ok

// export default defineComponent({
//     render() {
//         return (
//             <>
//             <div>Test</div>
//             <p>{this.$props.color}</p>
//             </>
//         )
//     }
// }) -->

<!-- <script lang="jsx">
import { defineComponent } from 'vue';

export default defineComponent({
  render() {
    return (
      <div>
        <h1>Hello, there!</h1>
        <p>{this.$props.color}</p>
      </div>
    );
  },
});
</script> -->


<script setup lang="jsx">
import { ref, watchEffect } from 'vue'
const count = ref(0)
const bool = ref(true);

watchEffect(() => console.log("Watch effect re-ran, because what it was watching changed...", count.value))

const FunkyComponent = props => {
  return (
    <div>
      <h1>Hello, there!</h1>
      <p>{props.color}</p>
      <p>{props.practiceDataString}</p>
      <button className={bool.value ? 'mega' : 'boohoo'} onClick={() => { count.value++; bool.value = !bool.value }}>Count is {count.value}</button>
      {bool.value ? (
        <h3>Visible!</h3>
      ) : null
      }
    </div >
  )
}
</script>

<template>
  <FunkyComponent />
</template>