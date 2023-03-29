<template>
  <div>
    <textarea
      class="form-control textarea-input text-black"
      :style="widthCss + heightCss"
      :name="scope + name"
      :rows="rowNumber"
      :disabled="isDisabled"
      :placeholder="placeholder"
      v-model="textValue"
      @input="updateValue"
    ></textarea>
    <div class="input-group is-danger" role="alert">{{ error }}</div>
  </div>
</template>

<style scoped>
textarea {
  min-height: 33px;
}
</style>
<script>
export default {
  $_veeValidate: {
    name() {
      return this.name;
    },
    value() {
      return this.value;
    },
  },
  data() {
    return {
      textValue: this.value,
      textName: this.name,
      rowNumber: this.row,
      widthCss: window.innerWidth > 1200 ? `width: ${this.width}px;` : '',
      heightCss: `height: ${this.height}px;`,
    };
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    scope: {
      type: String,
      default: '',
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    initValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    width: {
      type: Number,
      default: 600,
    },
    height: {
      type: Number,
      default: 64,
    },
    row: {
      type: Number,
      default: 5,
    },
    error: {
      type: String,
      required: false,
    },
    updateErrors: {
      required: false,
    },
  },
  methods: {
    updateValue(e) {
      this.$emit('input', e.target.value);
    },
  },
  watch: {
    value: function (newVal, oldVal) {
      this.textValue = newVal;
    },
  },
  updated() {
    if (typeof this.updateErrors === 'function') {
      this.updateErrors(this.scope, this.name, this.error);
    }
  },
};
</script>
