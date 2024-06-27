<template>
  <Row :gutter="[8, 8]"
    ><template v-for="item in items" :key="item.id"
      ><Col v-if="item.label" v-bind="rownum"
        ><Row
          ><Col :span="8"><Label :text="item.label"></Label></Col
          ><Col :span="16"
            ><Field v-bind="item.fieldProps"></Field></Col></Row></Col
      ><Col v-else v-bind="rownum"
        ><Field v-bind="item.fieldProps"></Field></Col></template
  ></Row>
</template>

<script setup lang="ts">
import { Col, Row } from "ant-design-vue";
import { Field, Label } from "..";
import type { HrowProps } from ".";

const props = withDefaults(defineProps<HrowProps>(), {});
const { items } = props;
const rownum = { xs: 24, sm: 12, md: 8, lg: 8, xl: 6, xxl: 4 };
</script>
