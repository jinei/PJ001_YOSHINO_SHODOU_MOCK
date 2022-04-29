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

// 予約キャンセルアラート表示
const reserveCancelSuccessAlertFlag = getParam('reserveCancelComplete');
if (reserveCancelSuccessAlertFlag) {
  $('.success_alert').addClass('active');
}

// 予約完了アラート表示
const reserveSuccessAlertFlag = getParam('reserveComplete');
if (reserveSuccessAlertFlag) {
  $('.success_alert').addClass('active');
}

// 会員編集完了アラート表示
const editSuccessAlertFlag = getParam('editComplete');
if (editSuccessAlertFlag) {
  $('.success_alert').addClass('active');
}

// パスワード更新完了アラート表示
const passwordUpdateSuccessAlertFlag = getParam('passwordUpdateComplete');
if (passwordUpdateSuccessAlertFlag) {
  $('.success_alert').addClass('active');
}

// 予約キャンセルモーダル
$('.cancel_btn').on('click', function () {
  $("#reserveCancelModal").modal({
    fadeDuration: 200,
    showClose: false
  });
});

// 予約確認モーダル
$('.reserve_symbol.available').on('click', function () {
  $("#reserveModal").modal({
    fadeDuration: 200,
    showClose: false
  });
})

// 予約確認モーダル
$('#password_update_btn').on('click', function () {
  $("#passwordUpdateModal").modal({
    fadeDuration: 200,
    showClose: false
  });
})

$('.alert_delete').on('click', function () {
  $(this).parents('.success_alert').removeClass('active');
});