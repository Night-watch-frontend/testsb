<script lang="ts">
  import { getRateCurrency } from "./getRate";
  import { listCurrency } from "./listCurrency";
  let countOne: number;
  let countTwo: number;
  let selectedOne: string;
  let selectedTwo: string;

  const handleChangeOne = async () => {
    if (countOne) {
      const newCount = await getRateCurrency(
        selectedOne,
        selectedTwo,
        countOne
      );
      if (newCount !== null) {
        countTwo = newCount;
      } else {
        console.error("Ошибка при получении курса валют");
        countTwo = 0;
      }
    } else {
      countTwo = 0;
    }
  };

  const handleChangeTwo = async () => {
    if (countTwo) {
      const newCount = await getRateCurrency(
        selectedTwo,
        selectedOne,
        countTwo
      );
      if (newCount !== null) {
        countOne = newCount;
      } else {
        console.error("Ошибка при получении курса валют");
        countOne = 0;
      }
    } else {
      countOne = 0;
    }
  };
</script>

<form>
  <div class="wrapper">
    <label for="input_1">Выберите валюту</label>
    <div>
      <input
        type="number"
        id="input_1"
        placeholder="Введите сумму"
        bind:value={countOne}
        on:input|preventDefault={handleChangeOne}
      />
      <select bind:value={selectedOne}>
        {#each listCurrency as item}
          <option value={item}>{item}</option>
        {/each}
      </select>
    </div>
  </div>
  <div class="wrapper">
    <label for="input_2">Выберите валюту</label>
    <div>
      <input
        type="number"
        id="input_2"
        placeholder="Введите сумму"
        bind:value={countTwo}
        on:input|preventDefault={handleChangeTwo}
      />
      <select bind:value={selectedTwo}>
        {#each listCurrency as item}
          <option value={item}>{item}</option>
        {/each}
      </select>
    </div>
  </div>
</form>

<style>
  .wrapper {
    margin-bottom: 15px;
  }
  label {
    font-size: 20px;
  }
  input {
    padding: 5px 10px;
    width: 250px;
    font-size: 28px;
    color: #000000;
    border-radius: 5px;
    background-color: #ffffff;
  }
  input::placeholder {
    font-size: 20px;
  }
  select {
    padding: 5px 10px;
    font-size: 28px;
    color: #000000;
    border-radius: 5px;
    background-color: #ffffff;
    cursor: pointer;
  }
  option {
    font-size: 28px;
  }
</style>
