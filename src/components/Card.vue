<template>
  <div class="card">
    <div class="card-header text-white p-2 text-center border-b pb-2">
      <h4 class="text-2xl mt-4 font-bold">
        Client testimonail
      </h4>
      <p class="text mx-auto mt-4 px-4">
        <q>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </q>
      </p>
    </div>
    <div class="card-body text-center">
      <div class="rank p-4">
        <font-awesome-icon
          class="text-secondary"
          :icon="[rank >= 1 ? 'fas' : 'far', 'star']"
        />
        <font-awesome-icon
          class="text-secondary"
          :icon="[rank >= 2 ? 'fas' : 'far', 'star']"
        />
        <font-awesome-icon
          class="text-secondary"
          :icon="[rank >= 3 ? 'fas' : 'far', 'star']"
        />
        <font-awesome-icon
          class="text-secondary"
          :icon="[rank >= 4 ? 'fas' : 'far', 'star']"
        />
        <font-awesome-icon
          class="text-secondary"
          :icon="[rank >= 5 ? 'fas' : 'far', 'star']"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rank: 3,
    }
  },
}
</script>

<style scoped lang="scss">
.card {
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 2rem auto;
  max-width: 500px;
  .card-header {
    background: linear-gradient(to right, #43cea2, #185a9d);
    position: relative;
    p {
      max-width: 300px;
    }
    // img {
    //   width: 80px;
    //   height: 80px;
    //   border-radius: 50%;
    //   position: absolute;
    //   left: 50%;
    //   transform: translateX(-50%);
    //   bottom: -40px;
    //   padding: 5px;
    //   background: white;
    //   border: 1px solid #888;
    // }
  }
}
</style>
