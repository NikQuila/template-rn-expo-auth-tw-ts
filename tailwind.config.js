/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins-regular': ['poppins-regular'],
        'poppins-semibold': ['poppins-semibold'],
      },
      colors: {
        'black-dark': '#4F4F4F',
        'black-light': '#122843',
        'blue-dark': '#133963',
        'blue-dark-75': '#6D80A6',
        'blue-dark-50': '#9EAAC3',
        'blue-dark-25': '#CED5E1',
        'blue-dark-5': '#F5F7F9',
        'blue-strong': '#457DF1',
        'blue-strong-75': '#739EF5',
        'blue-strong-50': '#A2BEF8',
        'blue-strong-25': '#D0DFFC',
        'blue-strong-5': ' #F6F9FE',
        'blue-light': '#2068E9',
        'blue-lighter': '#72A1E2',
        'blue-lightest': '#DFECFF',
        'blue-normal': '#008CFF',
        'gray-1': '#4F4F4F',
        'gray-2': '#7B7B7B',
        'gray-3': '#A7A7A7',
        'gray-4': '#D3D3D3',
        'gray-5': '#FAFAFA',
        'gray-6': '#F2F2F2',
        'gray-strong': '#7D7D7D',
        'gray-regular': '#A7A7A7',
        'gray-line': '#D3D3D3',
        'gray-bg': '#F6F6F6',
        'gray-normal': '#AEAEAF',
        'gray-light': '#C4C4C4',
        'gray-lighter': '#CBCBCB',
        'white-normal': '#F4F4F4',
        'white-strong': '#F3F3F3',
        'white-light': '#FBFBFB',
        'white-lighter': '#FDFDFD',
        'green-normal': '#219C70',
        'green-strong': '#75E0CB',
        'green-strong-75': '#98E8D8',
        'green-strong-50': '#BAF0E5',
        'green-strong-25': '#DDF7F2',
        'green-strong-5': '#F8FEFD',
        'orange-strong': '#F79326',
        'orange-light': '#FAAD2E',
        'pink-light': '#FF7575',
        'pink-lighter': '#cd688f',
        'red-error': '#EB5757',
        'red-strong': '#F54D26',
        'red-light': '#F66341',
        salmon: '#FF8970',
        'salmon-75': '#FFA694',
        'salmon-50': '#FFC4B8',
        'salmon-25': '#FFE1DB',
        'salmon-5': '#FFF9F8',
        'completed-timeline-event': '#3FB371',
        'uncompleted-timeline-event': '#F9F9F9',
        'purple-strong': '#BB5EF0',
        'exanutri-purple-normal': '#9760D4',
        'exanutri-purple-light': '#B188DF',
        'exanutri-purple-lighter': '#F5EFFB',
        // ui-kit start
        // https://www.figma.com/file/Jf1RGhjEoldbkT0wxFgkZ0/UI-Kit?node-id=1583%3A1045&t=BjgsY3gvAY4VAEm4-0
        b1: '#263253',
        b3: '#9399A9',
        b4: '#C9CCD4',
        c1: '#457DF1', // blue 100%
        c2: '#739EF5', // blue 75%
        c3: '#A2BEF8', // blue 50%
        c4: '#D0DFFC', // blue 25%
        c5: '#F6F9FE', // blue 5%
        v1: '#75E0CB', // green 100%
        v2: '#98E8D8', // green 75%
        v3: '#BAF0E5', // green 50%
        v4: '#DDF7F2', // green 25%
        v5: '#F8FEFD', // green 5%
        s1: '#FF8970', // red 100%
        s2: '#FFA694', // red 75%
        s3: '#FFC4B8', // red 50%
        s4: '#FFE1DB', // red 25%
        s5: '#FFF9F8', // red 5%
        a1: '#3C5588', // dark blue 100%
        a2: '#6D80A6', // dark blue 75%
        a3: '#9EAAC3', // dark blue 50%
        a4: '#CED5E1', // dark blue 25%
        a5: '#F5F7F9', // dark blue 5%
        g1: '#4F4F4F', // gray 100%
        g2: '#7B7B7B', // gray 75%
        g3: '#A7A7A7', // gray 50%
        g4: '#D3D3D3', // gray 25%
        g5: '#FAFAFA', // gray 5%
        r1: '#BF6071', // rose 100%
        r2: '#F2A7B5', // rose 50%
        r5: '#FFEEEF', // rose 5%
        lg1: '#14BAA7', // light green 100%
        lg2: '#AEEAE3', // light green 50%
        lg5: '#EDFDFD', // light green 5%
        e1: '#4773FF', // blue
        e3: '#A3B9FF',
        e5: '#F6F8FF', // text white 90%
        b2: '#5C657E', // text gray b2
      },
    },
  },
  plugins: [],
};
