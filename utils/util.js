export function showToast(msg) {
  wx.showToast({
    title: msg,
    icon: 'success',
    duration: 2000
  });
}

export function genCouponCode(num = 8) {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  
  return chars.split('').sort((a, b) => {
    return Math.random() > 0.5 ? 1 : -1;
  }).join('').substr(0, num);
}