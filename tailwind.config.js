const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./pages/**/*.{js,jsx,css}', './components/**/*.{js,jsx,css}'],

  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'cursive'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        large: '1.8rem',
      },
      width: {
        13: '3.25rem', //52
        13.165: '3.291rem', //52.66
        39.877: '9.969rem', //39.877
        25: '6.25rem', //100
        32.5: '8.125rem', //130
        46.25: '11.563rem', //185
        49.803: '12.451rem', //199.21
        51.428: '12.857rem', //205.71
        51.722: '12.931rem', //206.89
        57.5: '14.375rem', //230
        65.875: '16.469rem', //263.5
        67.25: '16.813rem', //669
        69.74: '17.435rem', //278.96
        70: '17.5rem', //280
        71.175: '17.794rem', //widty 284.7
        71.75: '17.938rem', //287
        71.925: '17.981rem', //287.7
        75.75: '18.938rem', //303
        79.75: '19.938rem', //319button
        83: '20.75rem', //332
        83.192: '20.798rem', //332.77
        88: '22rem', //352
        91.75: '22.938rem', //367
        100: '25rem', //100
        121.25: '30.313rem', //485
        126.25: '31.563rem', //505
        156.5: '39.125rem', //625
        182.5: '45.625rem', //730
        215.75: '53.938rem', //863
        325: '81.25rem', //1300
      },
      height: {
        0.25: '0.063rem', //1
        9.953: '2.488rem', //39.81
        12.563: '3.141rem', //50.25
        13: '3.25rem', //52
        13.338: '3.334rem', //53.35
        13.5: '3.375rem', //54
        15: '3.75rem', //60
        15.75: '3.938rem', //63
        16.1: '4.025rem', //64.4
        17.133: '4.283rem', //68.53
        18.325: '4.581rem', //73.21
        20.405: '5.101rem', //81.62
        25: '6.25rem', //100
        32.5: '8.125rem', //130
        37.75: '9.438rem', //151
        44.25: '11.063rem', //177
        47.86: '11.965rem', //191.44
        64.688: '16.172rem', //258.75
        77.51: '19.378rem', //310.04
        79.75: '19.938rem', //319
        84.987: '21.247rem', //339.95
        83.725: '20.931rem', //height 20.931
        85: '21.25rem', //340
        90: '22.5rem', //360
        95: '23.75rem', //380
        90.975: '22.744rem', //363
        103: '25.75rem', //413
        103.75: '25.938rem', //415
        106.985: '26.746rem', //427.94
        133: '33.25rem', //532
        200: '50rem', //200
        113.828: '28.457rem', //455.31
        136: '34rem', //544
        143: '35.75rem', //572 slika
        154.25: '38.563rem', //617
        186.25: '46.563rem', //745
        225: '56.25rem', //900
        233.75: '58.438rem', //935
        268.438: '67.109rem', //1073.75
        300: '75rem', //1200
        325: '81.25rem', //1300
      },
      inset: {
        24: '6rem', //96
        7.793: '1.948rem', //31.17
        16: '4rem', //64
        22: '5.5rem', //88
        66.142: '16.536rem', //264.57
        23.5: '5.875rem', //94
        25.75: '6.438rem', //103
        33.25: '8.313rem', //133
        24: '6rem', //96
        32: '8rem', //128
        44: '11rem', //176
        48: '12rem', //192
        56: '14rem', //56
        60: '15rem', //240
        60.75: '15.188rem', //243
        68.75: '17.188rem', //275
        74: '18.5rem', //296
        75.5: '18.875rem', //302
        76.75: '19.188rem', //307
        87.5: '21.875rem', //350
        88: '22rem', //352
        96: '24rem', //384
        100: '25rem', //400
        108: '27rem', //432
        108: '27rem', //432
        108.75: '27.188rem', //435
        114.25: '28.563rem', //457
        120: '30rem', //480
        131.5: '32.875rem', //526
      },
      animation: {
        fadeIn: 'fadeIn ease 1s',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
      },

      spacing: {
        '1/3': '33.333337%',
      },
      colors: {
        black: {
          main: '#180510',
          secondary: '#080206',
        },
        blue: {
          main: '#03075E',
        },
        purple: {
          main: ' #79124D',
          secondary: '#6D1945',
          grad: '#4f1449',
          new: '#B200B6',

          
        },
        orange: {
          main: '#EF8A01',
          second: '#AE3C30',
        },
        pink: {
          main: '#FC56FF',
          dark:'#280a19'
        },
        gray: {
          main: '#404E53',
          secondary: '#C4C4C4',
        },
      },
      border: {
        0.25: '0.063rem', //1
      },
      borderRadius: {
        topLeft: '25%',
      },

      padding: {
        0.375: '0.094rem', //1.5
        0.7: '0.175rem',
        1.25: '0.313rem', //5
        1.75: '0.438rem', //7
        4: '1rem', //16
        5: '1.25rem', //20
        6.25: '1.563rem', //25
        6.655: '1.664rem', //26.62
        7.22: '1.805rem', //28.88
        7.25: '1.813rem', //29
        9.313: '2.328rem', //37.25
        9.488: '2.372rem', //37.95
        9.925: '2.481rem', //39.7
        10.27: '2.567rem', //41.08
        11.715: '2.929rem', //46.86
        12.383: '3.096rem', //49.83
        12.75: '3.188rem', //51
        14.14: '3.535rem', //56.56
        16.515: '4.129rem', //66.06
        16.25: '4.063rem', //65
        17.133: '4.283rem', //68.53
        17.427: '4.357rem', //69.71
        20.37: '5.093rem', //81.48
        22.227: '5.557rem', //88.91
        30.922: '7.731rem', //123.69
        39.25: '9.813rem', //157
        40.5: '10.125rem', //162
        49.5: '12.375rem', //198
        54.25: '13.563rem', //217
        68: '17rem', //272
        100: '25rem', //400
        120: '30rem', //480
        '1/3': '33.33333%',
        '2/3': '66.66667%',
      },
      margin: {
        1.25: '0.313rem', //5
        1.67: '0.417rem', //6.68
        1.75: '0.438rem', //7
        3.09: '0.772rem', //12.36
        4: '1rem', //16
        5.315: '1.329rem', //21.26
        5.657: '1.414rem', //22.63
        6: '1.5rem', //24
        6.5: '1.625rem', //26
        9: '2.25rem', //36
        9.918: '2.479rem', //39.67
        10.27: '2.567rem', //41.08
        11.715: '2.929rem', //46.86
        12: '3rem', //48
        13: '3.25rem', //52
        16.515: '4.129rem', //66.06
        17.427: '4.357rem', //69.71
        19.01: '4.753rem', //76.04
        20.37: '5.093rem', //81.48
        22.227: '5.557rem', //88.91
        23.75: '5.938rem', //95
        24: '6rem', //96
        30: '7.5rem', //120
        32: '8rem', //128
        34.25: '8.563rem', //137
        35.25: '8.813rem', //141
        36: '9rem', //144
        37.75: '9.438rem', //151
        52.5: '13.125rem', //210
        54.25: '13.563rem', //217
        55: '13.75rem', //220
        56.75: '14.188rem', ////227
        67.5: '16.875rem', //270
        68.75: '17.188rem', //275
        80: '20rem', //300
        94.75: '23.688rem', //379
        105: '26.25rem', //420
        108: '27rem', //432
        143: '35.75rem', //572
        154: '38.5rem', //616
      },
      backgroundImage: {
        // 'hero-pattern': "url('/assets/frame2.png')",
        // 'scroll-frame': "url('/assets/scroll-frame.png')",
        // 'slow-orb': "url('/assets/slow-orb.webp')",
        // street: "url('/assets/street.png')",
        // nav: "url('/assets/nav-frame.png')",
        crown: "url('/assets/big-crown.png')",
        btn: "url('/assets/button-background.webp')",
        btnShade: "url('/assets/button-shade.webp')",
        pricingFrame: "url('/assets/big-frame-pricing.png')",
        pricingShade: "url('/assets/big-frame-shade.png')",
        girls: "url('/assets/girls.png')",
        accFrame: "url('/assets/acc-frame-big.webp')",
        accShade: "url('/assets/acc-shade-big.webp')",
      },

      fontSize: {
        paragraph: [
          '15px',
          {
            lineHeight: '18px',
          },
        ],
        paragraphTwo: [
          '15px',
          {
            lineHeight: '30px',
            letterSpacing: '2px',
          },
        ],
        gameModeTitle: [
          '17px',
          {
            lineHeight: '21px',
          },
        ],
        footer: [
          '17px',
          {
            lineHeight: '20px',
          },
        ],
        steamParagraph: [
          '20px',
          {
            letterSpacing: '2px',
            lineHeight: '25px',
          },
        ],
        buttonText: [
          '20px',
          {
            lineHeight: '20px',
          },
        ],
        nav: [
          '20px',
          {
            letterSpacing: '3px',
            lineHeight: '33px',
          },
        ],
        cardTitle: [
          '22px',
          {
            lineHeight: '27px',
          },
        ],
        cardSubtitle: [
          '22px',
          {
            lineHeight: '25px',
          },
        ],
        cardContent: [
          '16px',
          {
            lineHeight: '20px',
          },
        ],
        frameTitle: [
          '25px',
          {
            lineHeight: '30px',
          },
        ],
        pricing: [
          '30px',
          {
            letterSpacing: '5px',
            lineHeight: '50px',
          },
        ],
        nums: [
          '32px',
          {
            lineHeight: '43px',
          },
        ],
        subTitle: [
          '33px',
          {
            letterSpacing: '2px',
            lineHeight: '50px',
          },
        ],
        aubreyTitle: [
          '35px',
          {
            lineHeight: '52px',
          },
        ],
        accColapsedTitle: [
          '35px',
          {
            lineHeight: '35.02px',
          },
        ],
        title: [
          '40px',
          {
            letterSpacing: '2px',
            lineHeight: '61px',
          },
        ],
        subTitleBigScreen: [
          '40px',
          {
            letterSpacing: '0px',
            lineHeight: '40px',
          },
        ],
        titleBigScreen: [
          '45px',
          {
            letterSpacing: '2px',
            lineHeight: '50px',
          },
        ],

        steam: [
          '50px',
          {
            letterSpacing: '2px',
            lineHeight: '50px',
          },
        ],
      },
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }
      m: '925px',
      // => @media (min-width: 925px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      x: '1440px',
      // => @media (min-width: 1440px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '5xl': '1850px',
      // => @media (min-width: 1850px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
