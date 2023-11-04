<script>
  import {goto} from '$app/navigation';

    const goToPage = (itemId)=> {
      goto(`/item/${itemId}`)
      console.log("HIIIII")
    }
    /**
     * @type {"lost" | "found"}
     */
    export let status;
    /**
     * @type {string}
     */
    export let title;
    /**
     * @type {string}
     */
    export let imageUrl;
    /**
     * @type {string}
     */
    export let description;
  </script>
  
  <style>
    .item-container {
      background-color: #fafafa;
      padding: 10px;
      border-radius: 20px; 
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      width: 100%; 
    }
  
    .item-header {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
  
    .two-column-container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap; 
    }

    .column {
      flex-basis: 48%;
    }
  
    .image-container {
      width: 100px;
      height: 100px; 
      overflow: hidden;
      position: relative;
      border-radius: 20px;
      margin-right: 400px;
    }

  
    .status-chip {
      display: inline-block;
      padding: 5px 10px;
      color: white;
      border-radius: 5px;
      font-weight: bold;
      margin-right: 10px;
      height: fit-content;
    }
  
    .lost {
      background-color: #FF8811;
    }
  
    .found {
      background-color: #7556D1;
    }
  </style>
  
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore missing-declaration -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="bg-slate-50 rounded-lg text-blue-900 flex justify-between w-full p-5 hover:cursor-pointer" on:click={() => goToPage(title)}>
    <div class="flex-col justify-start w-full">
      <div class="flex align-center justify-start w-64 md:w-full">
        <div class="status-chip {status}">
          {status.toUpperCase()}
        </div>
        <h2 class="font-semibold text-2xl truncate">{title}</h2>
      </div>
      {#if description}
        <p class="description text-md">{description}</p>
      {/if}
    </div>
    <div class="">
      <div class="column">
      </div>
      {#if imageUrl}
        <div class="column">
          <div class="image-container bg-slate-300">
            <img src={imageUrl} alt={title} class="object-cover" />
          </div>
        </div>
      {/if}
    </div>
  </div>
  