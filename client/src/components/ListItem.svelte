<script>
    /**
     * @type {'lost' | 'found'}
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
      background-color: #f0f0f0;
      padding: 10px;
      border-radius: 20px; 
      margin: 10px 0;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      width: 100%; 
    }
  
    .item-header {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
  
    .item-header h2 {
      margin-left: 10px;
      flex-grow: 1;
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
      width: 100%;
      height: 200px; 
      overflow: hidden;
      margin-bottom: 10px;
      position: relative;
      border-radius: 20px;
    }
  
    .image-container img {
      width: 100%;
      height: 100%;
      object-fit: cover; 
      border-radius: 20px; 
    }
  
    .description {
      max-height: 50px;
      overflow: hidden;
      cursor: pointer;
    }
  
    .status-chip {
      display: inline-block;
      padding: 5px 10px;
      color: white;
      border-radius: 5px;
      font-weight: bold;
      margin-right: 10px;
    }
  
    .lost {
      background-color: #ffa500;
    }
  
    .found {
      background-color: #800080;
    }
  </style>
  
  <div class="item-container">
    <div class="item-header">
      <div class="status-chip {status}">
        {status.toUpperCase()}
      </div>
      <h2>{title}</h2>
    </div>
    <div class="two-column-container">
      <div class="column">
        {#if description}
          <p class="description">{description}</p>
        {/if}
      </div>
      {#if imageUrl}
        <div class="column">
          <div class="image-container">
            <img src={imageUrl} alt={title} />
          </div>
        </div>
      {/if}
    </div>
  </div>
  