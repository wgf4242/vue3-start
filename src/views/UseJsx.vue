<script lang="jsx">
// pnpm i @vitejs/plugin-vue-jsx
// vite.config.js
// import vueJsx from "@vitejs/plugin-vue-jsx"
// plugins: [vue(), vueJsx()],

export default {
  props: {
    list: {
      type: Array,
      default: () => [1, 2, 3],
    },
  },
  setup(props) {
    //      return () => (
    //    <script>
    //      <button onClick={event => changName(event, "欢迎关注公众号~WEB前端李志杰~")}>xx</button>
    //    </>
    //  );

    return () => {
      return <ul class="parent list-group">
        {props.list.map(e => <li class="list-group-item" key={e}>{e}</li>)}
      </ul>
    }
  }
}
</script>