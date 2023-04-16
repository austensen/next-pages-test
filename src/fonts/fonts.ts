import localFont from 'next/font/local'

export const Helvetica = localFont({
  src: [
    {
      path: '../fonts/HelveticaNowText-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/HelveticaNowText-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-helvetica',
});
