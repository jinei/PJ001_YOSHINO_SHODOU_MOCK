/**
 * Get the URL parameter value
 *
 * @param  name {string} パラメータのキー文字列
 * @return  url {url} 対象のURL文字列（任意）
 */
const getParam = (name) => {
  const url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}


const successAlertFlag = getParam('reserveComplete');
if (successAlertFlag) {
  $('.success_alert').addClass('active');
}


// 予約確認モーダル
$('.reserve_symbol.available').on('click', function () {
  $("#reserveModal").modal({
    fadeDuration: 200,
    showClose: false
  });
})

$('.alert_delete').on('click', function () {
  $(this).parents('.success_alert').removeClass('active');
});