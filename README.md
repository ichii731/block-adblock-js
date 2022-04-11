# block-adblock-js

Ultra-simple and ultra-lightweight (700 bytes) adblock detection library.

- Enhanced detection over BlockAdblock
- TypeScript support
- Ultra-lightweight file of only **700 bytes**

## HowTo

### npm/yarn

```shell
npm i block-adblock-js
```

```javascript
import AdDetect from "block-adblock-js";

if (AdDetect.check()) {
    // with adblock enabled
}
```

### CDN

jsdelivr: **https://cdn.jsdelivr.net/npm/block-adblock-js**

```html
<script type="module" defer>
    // Using defer, below scripts run when the DOM is completely built.
    import AdDetect from 'https://cdn.jsdelivr.net/npm/block-adblock-js';
    if (AdDetect.check()) {
        // with adblock enabled
    }
</script>
```

## Sample

### Vue

```vue
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
```

