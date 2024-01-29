<script lang="ts" setup>
import { inject, onMounted, ref, type Ref } from "vue";
import type { Props } from "../types/pluginType";

withDefaults(defineProps<Props>(), {
  label: "Input label",
  textType: "text",
});

const emit = defineEmits(["update:modelValue"]);

const inputRef: Ref<HTMLInputElement | null> = ref(null);

onMounted(() => {
  if (inputRef.value?.hasAttribute("autofocus")) {
    inputRef.value.focus();
  }
});

defineExpose({ focus: () => inputRef.value?.focus() });

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
    <input ref="inputRef" class="inputClass" :value="modelValue" :type="textType" @input="handleInput" />
  </div>

  <div>
    <br />
    plugin default options:
    <pre>
  {{ injectedData }}
  </pre>
  </div>
</template>
<style scoped>
.anyClass {
  color: red;
}

.inputClass {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>