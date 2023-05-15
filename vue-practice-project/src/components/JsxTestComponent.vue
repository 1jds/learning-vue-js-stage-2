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


<script lang="jsx">
export default function funky(props) {
  return (
    <div>
      <h1>Hello, there!</h1>
      <p>{props.color}</p>
    </div>
  )
}
</script>
