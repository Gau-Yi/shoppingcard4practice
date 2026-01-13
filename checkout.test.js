const { calculateTotal } = require('./checkout');

describe('結帳金額計算', () => {
  describe('一般會員', () => {
    it('無優惠券時，輸入金額等於輸出金額', () => {
      const memberType = 'regular';
      const coupon = null;
      const inputAmount = 1000;

      const result = calculateTotal(inputAmount, memberType, coupon);

      expect(result).toBe(1000);
    });
  });

  describe('VIP 會員', () => {
    it('無優惠券時，輸入金額的 9 折等於輸出金額', () => {
      const memberType = 'vip';
      const coupon = null;
      const inputAmount = 1000;

      const result = calculateTotal(inputAmount, memberType, coupon);

      expect(result).toBe(900);
    });
  });
});
