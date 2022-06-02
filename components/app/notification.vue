<template>
  <div
    :class="[
      {
        notification: notification.isShow,
        'notification-close': !notification.isShow,
        'opacity-0': !notification.isActive,
        'opacity-100': notification.isActive,
      },
      notification.type,
    ]"
    class="fixed z-50 text-white w-72 rounded-lg shadow-2xl transition-all hover:cursor-pointer p-2"
  >
    <button
      class="absolute -top-2 -right-2 bg-transparent hover:scale-105 transition-all"
      @click="notification.isShow = false"
    >
      <i class="bx bxs-message-square-x text-3xl"></i>
    </button>
    <p class="text-md font-bold">{{ notification.title }}</p>
    <p class="text-sm">{{ notification.message }}</p>
  </div>
</template>

<script setup lang="ts">
import { useNotification } from "@/stores/notification";

const notification = useNotification();
</script>

<style lang="scss" scoped>
.notification {
  animation-duration: 0.3s;
  animation-name: show;
  animation-timing-function: ease-in-out;
  top: 10px;
  right: 10px;
}

.notification-close {
  animation-duration: 0.3s;
  animation-name: close;
  animation-timing-function: ease-in-out;
  top: calc(-40% + 20px);
  right: calc(-40% + 20px);
}

@keyframes show {
  from {
    top: -40%;
    right: -40%;
  }

  to {
    top: 10px;
    right: 10px;
  }
}

@keyframes close {
  from {
    top: 10px;
    right: 10px;
  }

  to {
    top: -40%;
    right: -40%;
  }
}

.primary {
  @apply bg-primary-500 active:bg-primary-600 active:shadow-primary-300 shadow-primary-600 transition-all shadow-2xl hover:shadow-lg;
}

.secondary {
  @apply bg-secondary-500 active:bg-secondary-600 active:shadow-secondary-300 shadow-secondary-600 transition-all shadow-2xl hover:shadow-lg;
}

.error {
  @apply bg-error-500 active:bg-error-600 active:shadow-error-300 shadow-error-600 transition-all shadow-2xl hover:shadow-lg;
}

.success {
  @apply bg-success-500 active:bg-success-600 active:shadow-success-300 shadow-success-600 transition-all shadow-2xl hover:shadow-lg;
}

.warning {
  @apply bg-warning-500 active:bg-warning-600 active:shadow-warning-300 shadow-warning-600 transition-all shadow-2xl hover:shadow-lg;
}

.info {
  @apply bg-info-400 active:bg-info-600 active:shadow-info-300 shadow-info-600 transition-all shadow-2xl hover:shadow-lg;
}

.accent {
  @apply bg-accent-400 active:bg-accent-600 active:shadow-accent-300 shadow-accent-600 transition-all shadow-2xl hover:shadow-lg;
}
</style>
