<script setup lang="ts">
// регистрируем загрузку данных до отображения компонента
import {onMounted, ref, shallowRef} from "vue";
import {CategoryScale, Chart as ChartJS, LinearScale, LineController, LineElement, PointElement} from "chart.js";

// регистрируем ChartJS
ChartJS.register(LineController, CategoryScale, LinearScale, PointElement, LineElement)

const canvasRef = ref<HTMLCanvasElement | null>(null)
const chartRef = shallowRef<ChartJS | null>(null)

onMounted(() => {
  const DATA_COUNT = 12;
  const labels = [];
  for (let i = 0; i < DATA_COUNT; ++i) {
    labels.push(i.toString());
  }
  const datapoints = [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170];
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Cubic interpolation (monotone)',
        data: datapoints,
        fill: false,
        cubicInterpolationMode: 'monotone',
        tension: 0.4
      }, {
        label: 'Cubic interpolation',
        data: datapoints,
        fill: false,
        tension: 0.4
      }, {
        label: 'Linear interpolation (default)',
        data: datapoints,
        fill: false
      }
    ]
  };

  const config = {
    type: 'line',
    data: data,

  };

  chartRef.value = new ChartJS(canvasRef.value, config as any)
})

</script>

<template>
  <h2>ChartJS</h2>
  <canvas ref="canvasRef"/>
</template>

<style scoped>

</style>