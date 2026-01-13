function calculateTotal(inputAmount, memberType, coupon) {
  if (memberType === 'vip') {
    return inputAmount * 0.9;
  }
  return inputAmount;
}

module.exports = { calculateTotal };
