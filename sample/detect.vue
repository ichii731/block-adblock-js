<script lang="ts">
import AdDetect from "block-adblock-js";

export default defineComponent({
  mounted() {
    if (AdDetect.check()) {
      alert("Adblock is enabled");
    } else {
      alert("Adblock is disabled or not installed");
    }
  },
});
</script>