<script setup>
import { onMounted, ref, shallowRef } from 'vue';
import { useResizeObserver } from '@vueuse/core'
import * as Blockly from 'blockly/core';
import * as En from 'blockly/msg/en';
import 'blockly/blocks';

const toolbox = ref({
    kind: 'flyoutToolbox',
    contents: [
        {
            kind: 'block',
            type: 'controls_if',
        },
        {
            kind: 'block',
            type: 'logic_compare',
        },
        {
            kind: 'block',
            type: 'math_number',
            fields: { NUM: 123 },
        },
    ],
})
const blocklyContainer = ref();
const blocklyDiv = ref();
const workspace = shallowRef();

const onresize = () => {
    if (workspace.value) {
        Blockly.svgResize(workspace.value);
    }
};

onMounted(() => {
    Blockly.setLocale(En)
    workspace.value = Blockly.inject(blocklyDiv.value, {
        toolbox: toolbox.value
    });
});

useResizeObserver(blocklyContainer, (entries) => {
    console.log("useResize")
    onresize()
})
</script>

<template>
    <section id="blocklyContainer" ref="blocklyContainer">
        <div id="blocklyDiv" ref="blocklyDiv"></div>
    </section>
</template>

<style scoped>
#blocklyContainer {
    position: relative;
    width: 100%;
    height: 100%;
}

#blocklyDiv {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>