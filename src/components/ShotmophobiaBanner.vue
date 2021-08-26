<template>
  <div v-if="allowed">
    <div class="flex">
      <TButton
        ref="shotmophobia"
        class="active:bg-gray-700 flex-grow-0 h-100 hover:bg-gray-900 ml-auto"
        :class="{
          'bg-green-900': shotmophobia,
        }"
        @click="shotmophobia = !shotmophobia">
        Shotmophobia mode
      </TButton>
    </div>

    <KeepAlive><Shotmophobia v-if="shotmophobia" /></KeepAlive>
  </div>
</template>

<script>

export default {
  name: 'ShotmophobiaBanner',
  components: {
    Shotmophobia: () => import('@/views/Shotmophobia'),
  },

  data() {
    return {
      allowed: false,
      shotmophobia: false,
    };
  },

  mounted() {
    const storage = localStorage.getItem('ALLOW_SHOTS');

    this.allowed = storage === true;
  },
};
</script>
