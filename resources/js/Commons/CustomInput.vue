<template>
  <div>
    <input
      :style="widthCss()"
      :placeholder="placeholder"
      :name="scope + name"
      :type="type"
      v-model="inputValue"
      :disabled="isDisabled"
      :readonly="isReadonly"
      :maxlength="maxlength"
      autocomplete="new-password"
      class="custom-input"
      @input="updateValue"
      @change="updateValue"
    />
    <div
      class="input-group is-danger"
      :class="type == 'number' ? 'danger-input-number' : ''"
      :style="widthCss()"
      role="alert"
    >
      {{ error }}
    </div>
  </div>
</template>
<script>
export default {
  $_veeValidate: {
    name() {
      return this.name;
    },
    value() {
      return this.inputValue;
    },
  },
  data() {
    return {
      inputValue: this.initValue ? this.initValue : this.value,
    };
  },
  props: {
    value: {
      type: String | Number,
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
    type: {
      type: String,
      default: 'text',
    },
    initValue: {
      type: String | Number,
    },
    width: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
    },
    placeholder: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      required: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isReadonly: {
      type: Boolean,
      default: false,
    },
    maxlength: {
      type: Number,
      default: null,
    },
    prefix: {
      type: String,
    },
    updateErrors: {
      required: false,
    },
  },
  computed: {},
  watch: {
    initValue(newVal, oldVal) {
      this.inputValue = newVal;
    },
  },
  updated() {
    if (typeof this.updateErrors === 'function') {
      this.updateErrors(this.scope, this.name, this.error);
    }
  },
  methods: {
    updateValue(e) {
      if (this.prefix) {
        this.inputValue =
          this.inputValue.indexOf(this.prefix) == 0
            ? this.inputValue
            : this.prefix;
      }

      this.$emit('input', this.inputValue);
    },
    widthCss() {
      if (
        window.innerWidth < 1200 &&
        window.innerWidth > 992 &&
        this.type == 'number'
      ) {
        return 'width: 50px;';
      }
      if (window.innerWidth > 1200) {
        return 'width:' + this.width + 'px;';
      }
    },
  },
};
</script>
