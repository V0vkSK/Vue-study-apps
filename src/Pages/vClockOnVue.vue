<template>
  <div class="container">

    <div id="time">

      <div class="circle" style="--color:#ff2972">
        <div class="dots h_dot"></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70" id="hh"></circle>
        </svg>
        <div class="hours">{{ hours }}
          <br /><span>Hours</span>
        </div>
      </div>

      <div class="circle" style="--color:#fee800">
        <div class="dots m_dot"></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70" id="mm"></circle>
        </svg>
        <div class="minutes">{{ minutes }}
          <br /><span>Minutes</span>
        </div>
      </div>

      <div class="circle" style="--color:#04fc43">
        <div class="dots s_dot"></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70" id="ss"></circle>
        </svg>
        <div class="seconds">{{ seconds }}
          <br /><span>Seconds</span>
        </div>
      </div>
      <div class="ap">
        <div id="ampm">{{ ap }}</div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name:
    'vClockOnVue',
  data() {
    return {
      hours: '',
      minutes: '',
      seconds: '',
      ap: ''
    }
  },
  computed: {

  },
  methods: {
    getTime() {
      // digits time indicator
      let hh = document.getElementById('hh');
      let mm = document.getElementById('mm');
      let ss = document.getElementById('ss');
      // dot time indicator
      let dotH = document.querySelector('.h_dot');
      let dotM = document.querySelector('.m_dot');
      let dotS = document.querySelector('.s_dot');

      this.hours = new Date().getHours();
      this.minutes = new Date().getMinutes();
      this.seconds = new Date().getSeconds();
      this.ap = this.hours >= 12 ? 'PM' : 'AM';


      // convert to 12 hour format
      if (this.hours > 12) {
        this.hours = this.hours - 12;
      }

      // add 0 before single digit
      this.hours = this.hours < 10 ? '0' + this.hours : this.hours;
      this.minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
      this.seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;

      // set time circular indicator
      hh.style.strokeDashoffset = 440 - (440 * this.hours) / 12;
      mm.style.strokeDashoffset = 440 - (440 * this.minutes) / 60;
      ss.style.strokeDashoffset = 440 - (440 * this.seconds) / 60;

      // set dot time position indicator
      dotH.style.transform = `rotate(${this.hours * 30}deg)`;
      dotM.style.transform = `rotate(${this.minutes * 6}deg)`;
      dotS.style.transform = `rotate(${this.seconds * 6}deg)`;
    }
  },
  created() {
    setInterval(this.getTime, 1000)
  },
  // unmounted: {

  // }
}


</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 100px;
  background: #2f363e;
}

#time {
  display: flex;
  gap: 40px;
  color: #fff;
}

#time .circle {
  position: relative;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#time .circle svg {
  position: relative;
  width: 150px;
  height: 150px;
  transform: rotate(270deg);
}

#time .circle svg circle {
  width: 100%;
  height: 100%;
  fill: transparent;
  stroke: #191919;
  stroke-width: 4px;
  transform: translate(5px, 5px);
}

#time .circle svg circle:nth-child(2) {
  stroke: var(--color);
  stroke-dasharray: 440;
}

#time div {
  position: absolute;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
}

#time div span {
  position: absolute;
  transform: translate(-50%, 0px);
  font-size: 0.5rem;
  font-weight: 300;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
}

#time .ap {
  position: relative;
  font-size: 1rem;
  transform: translate(-20px);
}

.dots {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  z-index: 10;
}

.dots::before {
  content: '';
  position: absolute;
  top: -3px;
  width: 15px;
  height: 15px;
  background: var(--color);
  border-radius: 50%;
  box-shadow: 0 0 20px var(--color), 0 0 60px var(--color);
}
</style>