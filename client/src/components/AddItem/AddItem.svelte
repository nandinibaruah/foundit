<script>
    import { page } from '$app/stores';
    import Card from '../Card.svelte';
    import FeatureLayout from '../FeatureLayout.svelte';
    let itemId = $page.params.slug;
    export let title;
    export let status;
    export let imageUrl;
    export let description;

    let selectedStatus = null;

    const selectStatus = (status) => {
        selectedStatus = status;
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore missing-declaration -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<FeatureLayout>
    <Card>
        <h1 class="bigTitle">Report Item</h1>
        <div class="flex justify-center items-center space-x-4">
            <div class="{`status-button ${selectedStatus === 'lost' ? 'lost-button' : ''}`}" on:click={() => selectStatus('lost')}>
                LOST
            </div>
            <p class="orText">OR</p>
            <div class="{`status-button ${selectedStatus === 'found' ? 'found-button' : ''}`}" on:click={() => selectStatus('found')}>
                FOUND
            </div>
        </div>
        <div class="flex flex-col space-y-2">
            <label class="heading" for="post-title">Post Title</label>
            <input type="text" id="post-title" bind:value="{title}" placeholder="This is a cool title..." class="border rounded p-2" />
        </div>
        <div class="flex flex-col space-y-2">
            <label class="heading" for="description">Description</label>
            <textarea id="description" bind:value="{description}" placeholder="Enter a description..." class="border rounded p-2"></textarea>
        </div>
        <div class="flex flex-col space-y-2">
            <label class="heading" for="image-url">Image URL</label>
            <input type="text" id="image-url" bind:value="{imageUrl}" placeholder="Enter an image URL..." class="border rounded p-2" />
        </div>
        <button class="flex w-full justify-evenly submit-button">Submit</button>
    </Card>
</FeatureLayout>

<style>
    .status-button {
      display: inline-block;
      padding: 5px 10px;
      color: white;
      border-radius: 5px;
      height: fit-content;
      background-color: grey;
      text-align: center;
      min-width:75px;
      max-width:75px;
    }

    .lost-button {
        background-color: #FF8811;
    }

    .found-button {
        background-color: #7556D1;
    }

    .heading{
        color: grey;
        font-size: 0.8em;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .bigTitle {
        font-size: 2.1em;
        text-align: center;
        color: #452F86;
        font-weight: bold;
        font-family: "Arial";
    }

    .orText {
        font-size: 1em;
        font-weight: bold;
    }

    .submit-button {
        color: white;
        background-color: #7556D1;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        font-size: 1em;
        cursor: pointer;
        width: 100%;
        max-width: 200px;
        margin: auto;
        -ms-flex-align: center;
    }
</style>
