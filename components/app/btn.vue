<template>
  <button
    :class="[
      {
        '!rounded-none': tile,
        'w-full': block,
        'text-white': dark,
        '!shadow-none ': depressed,
        'rounded-full': rounded,
        'w-10 h-10 !p-0 text-2xl !rounded-full flex justify-center items-center':
          icon,

        'text-sm !py-[6px] !px-7': small,
        '!w-8 !h-8 !px-0 text-[16px]': small && icon,
      },
      text || icon ? `btn-text-${color}` : `btn-${color}`,
      'rounded-[16px]',
      outlined ? `btn-outlined-${color}` : '',
    ]"
    class="px-10 py-2 inline-block relative transition-all"
  >
    <slot v-if="!onlyLoading"></slot>
    <i
      v-if="loading"
      class="bx animate-spin bx-loader-circle text-2xl ml-2 top-1"
      :class="{
        absolute: !icon,
        'ml-0 top-0': icon,
        'text-[16px] ml-1 top-0': small,
        'text-[16px] !ml-0': small && icon,
      }"
    ></i>
  </button>
</template>

<script>
export default {
  props: {
    tile: {
      type: Boolean,
      default: false,
    },

    icon: {
      type: Boolean,
      default: false,
    },

    small: {
      type: Boolean,
      default: false,
    },

    large: {
      type: Boolean,
      default: false,
    },

    outlined: {
      type: Boolean,
      default: false,
    },

    text: {
      type: Boolean,
      default: false,
    },

    rounded: {
      type: Boolean,
      default: false,
    },
    depressed: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "",
    },
  },

  computed: {
    onlyLoading() {
      return this.loading && this.icon;
    },
  },
};
</script>

<style lang="scss" scoped>
// BTN

.btn-primary {
  @apply bg-primary-500 active:bg-primary-400 active:shadow-primary-50 shadow-primary-100 shadow-lg;
}

.btn-secondary {
  @apply bg-secondary-500 active:bg-secondary-400 active:shadow-secondary-50 shadow-secondary-100 shadow-lg;
}

.btn-error {
  @apply bg-error-500 active:bg-error-400 active:shadow-error-50 shadow-error-100 shadow-lg;
}

.btn-success {
  @apply bg-success-500 active:bg-success-400 active:shadow-success-50 shadow-success-100 shadow-lg;
}

.btn-warning {
  @apply bg-warning-400 active:bg-warning-300 active:shadow-warning-50 shadow-warning-100 shadow-lg;
}

.btn-info {
  @apply bg-info-400 active:bg-info-400 active:shadow-info-50 shadow-info-100 shadow-lg;
}

.btn-accent {
  @apply bg-accent-400 active:bg-accent-300 active:shadow-accent-50 shadow-accent-100 shadow-lg;
}

// Text BTN

.btn-text-info {
  @apply bg-info-50 text-info-400 shadow-none active:bg-indigo-100 transition-all;
}

.btn-text-primary {
  @apply bg-primary-50 text-primary-400 shadow-none active:bg-primary-100 transition-all;
}

.btn-text-secondary {
  @apply bg-secondary-50 text-secondary-400 shadow-none active:bg-secondary-100 transition-all;
}

.btn-text-success {
  @apply bg-success-50 text-success-400 shadow-none active:bg-success-100 transition-all;
}

.btn-text-warning {
  @apply bg-warning-50 text-warning-400 shadow-none active:bg-warning-100 transition-all;
}

.btn-text-error {
  @apply bg-error-50 text-error-400 shadow-none active:bg-error-100 transition-all;
}

.btn-text-accent {
  @apply bg-accent-50 text-accent-400 shadow-none active:bg-accent-100 transition-all;
}

.btn-outlined-primary {
  @apply border-[1px] border-primary-500;
}

.btn-outlined-secondary {
  @apply border-[1px] border-secondary-500;
}

.btn-outlined-accent {
  @apply border-[1px] border-accent-500;
}

.btn-outlined-info {
  @apply border-[1px] border-info-500;
}

.btn-outlined-error {
  @apply border-[1px] border-error-500;
}

.btn-outlined-success {
  @apply border-[1px] border-success-500;
}

.btn-outlined-warning {
  @apply border-[1px] border-warning-500;
}
</style>
