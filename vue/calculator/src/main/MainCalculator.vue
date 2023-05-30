<template>
  <div class="calculator">
    <CalculatorDisplay :value="displayValue"/>
    <CalculatorButton label="AC" triple @onClick="clearMemory"/>
    <CalculatorButton label="/" operation @onClick="setOperation"/>
    <CalculatorButton label="7" @onClick="addDigit"/>
    <CalculatorButton label="8" @onClick="addDigit"/>
    <CalculatorButton label="9" @onClick="addDigit"/>
    <CalculatorButton label="*" operation @onClick="setOperation"/>
    <CalculatorButton label="4" @onClick="addDigit"/>
    <CalculatorButton label="5" @onClick="addDigit"/>
    <CalculatorButton label="6" @onClick="addDigit"/>
    <CalculatorButton label="-" operation @onClick="setOperation"/>
    <CalculatorButton label="1" @onClick="addDigit"/>
    <CalculatorButton label="2" @onClick="addDigit"/>
    <CalculatorButton label="3" @onClick="addDigit"/>
    <CalculatorButton label="+" operation @onClick="setOperation"/>
    <CalculatorButton label="0" double @onClick="addDigit"/>
    <CalculatorButton label="." @onClick="addDigit"/>
    <CalculatorButton label="=" operation @onClick="setOperation"/>
  </div>
</template>

<script>

import CalculatorDisplay from '../components/CalculatorDisplay.vue'
import CalculatorButton from '../components/CalculatorButton.vue'

export default {
    data: function() {
      return {
        displayValue: "0",
        clearDisplay: false,
        operation: null,
        values: [0,0],
        current: 0
      }
    },
    components: {CalculatorButton, CalculatorDisplay},
    methods: {
      clearMemory() {
        Object.assign(this.$data, this.$options.data())
      },
      setOperation(operation) {
        if (this.current === 0) {
          this.operation = operation
          this.current = 1
          this.clearDisplay = true
        } else {
            const equals = operation === "="
            const currentOperation = this.operation

            try {
              this.values[0] = eval(
                `${this.values[0]} ${currentOperation} ${this.values[1]}`
              )
            } catch(e) {
              this.$emit('onError',e)
            }

            this.values[1] = 0
            this.displayValue = this.values[0]
            this.operation = equals ? null : operation
            this.current = equals ? 0 : 1
            this.clearDisplay = !equals
        }
      },
      addDigit(n) {
        if (n === "." && this.displayValue.includes(".")) {
          return
        }

        const clearDisplay = this.displayValue === "0"
          || this.clearDisplay
        const currentValue = clearDisplay ? "" : this.displayValue
        const displayValue = currentValue + n

        this.displayValue = displayValue
        this.clearDisplay = false

        if (n !== ".") {
          const i = this.current
          const newValue = parseFloat(displayValue)
          this.values[i] = newValue
        }
      }
    }
}
</script>

<style>
    .calculator {
        height: 320px;
        width: 235px;
        border-radius: 5px;
        overflow: hidden;

        display: grid;
        grid-template-columns: repeat(4, 25%);
        grid-template-rows: 1fr 48px 48px 48px 48px 48px;
    }
</style>