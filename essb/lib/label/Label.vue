<template>
  <label
    v-text="props.text"
    :for="props.for"
    :style="{
      color: colorTextLabel,
      fontSize: fontSize,
    }"
  ></label>
</template>

<script lang="ts" setup>
import { theme } from "ant-design-vue";
import type { LabelProps } from ".";

const { colorTextLabel, fontSize } = theme.useToken().token.value;
const props = defineProps<LabelProps>();
</script>
