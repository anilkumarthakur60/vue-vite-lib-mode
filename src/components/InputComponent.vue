<script lang="ts" setup>
import { inject, onMounted, ref, type Ref } from "vue";
import type { Props } from "../types/pluginType";

withDefaults(defineProps<Props>(), {
  label: "Input label",
  textType: "text",
});

const emit = defineEmits(["update:modelValue"]);

const input: Ref<HTMLInputElement | null> = ref(null);

onMounted(() => {
  if (input.value?.hasAttribute("autofocus")) {
    input.value.focus();
  }
});

defineExpose({ focus: () => input.value?.focus() });

const handleInput = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};

const injectedData = inject("InputPluginOptions");
</script>

<template>
  <div class="anyClass">
    <div class="">
      Input Component Model Value {{ modelValue }}
    </div>
    <input ref="input" class="inputClass" :value="modelValue" :type="textType" @input="handleInput" />
  </div>

  <div>
    <br />
    plugin default options:
    <pre>
  {{ injectedData }}
  </pre>
  </div>
</template>
