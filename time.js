class Timer {
  constructor() {
    this.isShowColon = true;
  }

  get tpl() {
    const currentDate = new Date();
    return `
      <div id="date">${this._getDate(currentDate)}</div>
      <div id="time">${this._getTime(currentDate)}</div>
    `;
  }

  render(node) {
    const html = this.tpl;
    node.innerHTML = html;
  }

  _padZero(num) {
    let result = String(num);
    return result.length === 1 ? 0 + result : result;
  }

  _getDate(date) {
    return `${this._padZero(date.getMonth() + 1)}月${this._padZero(date.getDate())}`;
  }

  _getTime(date) {
    const time = `${this._padZero(date.getHours())}<span class="${
      this.isShowColon ? 'colon' : 'colon hide'
    }">:</span>${this._padZero(date.getMinutes())}`;
    this.isShowColon = !this.isShowColon;
    return time;
  }
}

const timer = new Timer();

setInterval(() => {
  const root = document.getElementById('root');
  timer.render(root);
}, 1000);
