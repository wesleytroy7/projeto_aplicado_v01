export default function getWeightFrom() {
  handleKeyUp.currentTarget.maxLength = 5;
  let value = handleKeyUp.currentTarget.value;
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{3})(\d)/, '$1.$2');
  handleKey.currentTarget.value = value;
}
