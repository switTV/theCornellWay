<script lang="ts">
    import type { LayoutData } from './$types';
    
    export let data: LayoutData;
</script>

<style>
    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :global(button) {
        min-width:40px;
        height: 40px;
        border-radius: 50%;
        border: #fff 2px solid;
        background-color: transparent;
        color: white;
        font-size: 26px;
    }
</style>

<slot></slot>