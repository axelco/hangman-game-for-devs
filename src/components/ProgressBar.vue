<template>
  <div id="gameProgressContainer">
    <div className="progress">
      <div
        className="progress-bar bg-primary"
        role="progressbar"
        :style="'width:' + calculateProgress + '%'"
        :aria-valuenow="calculateProgress"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    current: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
  },
  computed: {
    calculateProgress() {
      return (this.current / this.max) * 100;
    },
  },
};
</script>
