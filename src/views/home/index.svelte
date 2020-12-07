<div class="svelte-admin-home">
    home
    counter value: {$counter}
</div>
<script>
import { counter } from '../../store/store'
</script>
<style>
.svelte-admin-home {
    font-size: 14px;
    color: red;
}
</style>