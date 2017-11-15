
module.exports = { ShowCountDown }


function ShowCountDown(year,month,day) { // (2019,2,1)
    var now = new Date();
    var endDate = new Date(year, month - 1, day);
    var leftTime = endDate.getTime() - now.getTime();
    var leftsecond = parseInt(leftTime / 1000);
    var dayTime = Math.floor(leftsecond / (60 * 60 * 24));
    var hour = Math.floor((leftsecond - dayTime * 24 * 60 * 60) / 3600);

    var minute = Math.floor((leftsecond - dayTime * 24 * 60 * 60 - hour * 3600) / 60);
    var second = Math.floor(leftsecond - dayTime * 24 * 60 * 60 - hour * 3600 - minute * 60);
    return {
    	dayTime: dayTime,
    	hour: AddZero(hour),
    	minute: AddZero(minute),
    	second: AddZero(second)
    }
}

function AddZero(val, len){ //判定一个数字

  val = String(val);
  len = len || 2;
  while (val.length < len) {
    val = '0' + val;
  }
  return val;

}
