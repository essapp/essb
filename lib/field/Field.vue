<template>
  <component :is="com" v-bind="rest.itemProps"></component>
</template>

<script setup lang="ts">
import { type Component } from "vue";
import {
  Button,
  Check,
  Date,
  Image,
  Input,
  Number,
  Radio,
  Select,
  Switch,
  Text,
  Time,
} from "..";
import type { FieldProps } from ".";

const props = defineProps<FieldProps>();
// const event = defineEmits(["onEvent"]);
const { itemType, ...rest } = props;
const com: Component =
  itemType === "button"
    ? Button
    : itemType === "check"
      ? Check
      : itemType === "date"
        ? Date
        : itemType === "image"
          ? Image
          : itemType === "input"
            ? Input
            : itemType === "number"
              ? Number
              : itemType === "radio"
                ? Radio
                : itemType === "select"
                  ? Select
                  : itemType === "switch"
                    ? Switch
                    : itemType === "time"
                      ? Time
                      : Text;
// const com: Component = (itemType: string) => {
//   switch (itemType) {
//     case "button":
//       // return [Button, "click"];
//       return EButton;
//     case "check":
//       // return [Checkbox, "change"];
//       return ECheck;
//     case "date":
//       // return [DatePicker, "ok"];
//       return EDate;
//     case "image":
//       // return [Image, ""];
//       return EImage;
//     case "input":
//       // return [Input, "change"];
//       return ERadio;
//     case "number":
//       // return [InputNumber, "change"];
//       return ENumber;
//     case "radio":
//       // return [Radio, "change"];
//       return ERadio;
//     case "select":
//       // return [Select, "change"];
//       return ESelect;
//     case "switch":
//       // return [Switch, "change"];
//       return ESwitch;
//     case "time":
//       // return [TimePicker, "change"];
//       return ETime;
//     case "text":
//       return EText;
//     default:
//       // return [Input, "change"];
//       return EInput;
//   }
// };
</script>
