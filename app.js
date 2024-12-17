console.warn('error')
console.error('error')
const holding = document.getElementById("holder")
const formatTime = (time) => time < 10 ? `0${time}` : time

function modernClock(params) {
  const currentDate = new Date()
  const hours = formatTime(currentDate.getHours())
  const minutes = formatTime(currentDate.getMinutes())
  const secs = formatTime(currentDate.getSeconds())
  holding.innerHTML = `<p>${hours}:${minutes}:${secs}</p>`
//   console.log()
}
// modernClock()
// console.log(modernClock())
setInterval(modernClock, 1000)
modernClock()