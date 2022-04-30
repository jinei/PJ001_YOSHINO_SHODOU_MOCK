const weekDayText = ['日', '月', '火', '水', '木', '金', '土'];
let showDate = new Date();

window.onload = function () {
  // カレンダー描画
  renderCalendar(showDate);
};

$('.next_month').on('click', function () {
  // カレンダー描画
  showDate.setDate(showDate.getDate() + 7);
  renderCalendar(showDate);
});

$('.prev_month').on('click', function () {
  // カレンダー描画
  showDate.setDate(showDate.getDate() - 7);
  renderCalendar(showDate);
});

/**
 * パラメータで指定された日付から一週間分の日付データを取得、表示する関数
 *
 * @param  dateObj {Date型} 取得対象の日付
 */
const renderCalendar = (dateObj) => {

  // カレンダー上部の年月更新
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  $('.to_month').text(year + '年' + month + '月');

  const weekDays = 7;
  for (let i = 0; i < weekDays; i++) {
    // 日付データを取得
    const targetDateObj = new Date();
    targetDateObj.setDate(dateObj.getDate() + i);
    const day = targetDateObj.getDate();
    const weekDay = targetDateObj.getDay();

    // カレンダー出力
    const targetCalendarCell = $('#daysRow').find('.date')[i];
    $(targetCalendarCell).find('.day').text(day);
    $(targetCalendarCell).find('.weekday').text('(' + weekDayText[weekDay] + ')');
  }
}