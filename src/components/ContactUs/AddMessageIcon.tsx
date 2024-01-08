import { memo, SVGProps } from 'react';

const AddMessageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 51 50' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_1049_5938)'>
      <path
        d='M37.5938 0C31.4788 0 26.3497 3.74272 24.9707 8.76172C23.0837 7.84772 20.7952 8.06016 19.1582 9.41016L14.2656 13H10.5938C10.0408 13 9.59375 13.448 9.59375 14V17.2988C9.57975 17.3098 9.56088 17.3113 9.54688 17.3223L2.95703 22.748C2.72703 22.938 2.59375 23.2225 2.59375 23.5215V46.9883C2.59375 47.5403 3.04075 47.9883 3.59375 47.9883H41.5898C42.1428 47.9883 42.5898 47.5403 42.5898 46.9883V23.5215C42.5898 23.2095 42.4433 22.9156 42.1953 22.7266L41.6641 22.3203C46.8431 20.8113 50.5938 16.5132 50.5938 11.4512C50.5938 5.13717 44.7618 0 37.5938 0ZM37.5938 2C43.6588 2 48.5938 6.24017 48.5938 11.4512C48.5938 16.6632 43.6588 20.9023 37.5938 20.9023C36.6658 20.9023 35.7649 20.7961 34.8379 20.5781C34.4739 20.4911 34.0926 20.6183 33.8496 20.9023C33.4836 21.3303 32.2432 22.5988 30.1992 22.9238C30.6882 22.0568 30.9508 21.3062 31.0898 20.7832C31.2368 20.2412 31.2635 19.9589 31.2695 19.7129C31.2825 19.3689 31.1151 19.0426 30.8301 18.8496C28.1371 17.0276 26.5938 14.3302 26.5938 11.4512C26.5938 6.24017 31.5287 2 37.5938 2ZM37.5938 5.09961C36.9937 5.09961 36.5938 5.49961 36.5938 6.09961V10H32.6934C32.0934 10 31.6934 10.4 31.6934 11C31.6934 11.6 32.0934 12 32.6934 12H36.5938V15.9004C36.5938 16.5004 36.9937 16.9004 37.5938 16.9004C38.1938 16.9004 38.5938 16.5004 38.5938 15.9004V12H42.4941C43.0941 12 43.4941 11.6 43.4941 11C43.4941 10.4 43.0941 10 42.4941 10H38.5938V6.09961C38.5938 5.49961 38.1938 5.09961 37.5938 5.09961ZM22.4883 10.2051C23.237 10.1863 23.992 10.4091 24.627 10.8711C24.616 11.0641 24.5938 11.2552 24.5938 11.4512C24.5938 11.9752 24.6485 12.49 24.7285 13H17.6465L20.3867 10.9883C20.9977 10.4843 21.7395 10.2238 22.4883 10.2051ZM25.2266 14.9453C25.9606 16.9363 27.3115 18.7327 29.1895 20.1387C29.1795 20.1777 29.1683 20.2187 29.1562 20.2637C29.0113 20.8077 28.695 21.6661 28.002 22.6621L27.4668 23.4277C27.2538 23.7337 27.2303 24.1329 27.4023 24.4629C27.5743 24.7929 27.9141 25 28.2871 25H29.2207C31.0817 25 32.5418 24.3878 33.5898 23.7188V29.6133L29.207 33.0332L27.4277 31.6484C24.6247 29.4664 20.5589 29.4664 17.7559 31.6484L15.9785 33.0312L11.5938 29.6113V15H24.957C25.052 15 25.1396 14.9703 25.2266 14.9453ZM9.59375 19.875V28.0508L4.59375 24.1504V23.9922L9.59375 19.875ZM35.5898 22.7402C36.2578 22.8382 36.9277 22.9023 37.5938 22.9023C38.0798 22.9023 38.5592 22.8741 39.0312 22.8281L40.5898 24.0156V24.1504L35.5898 28.0527V22.7402ZM4.59375 26.6875L14.3496 34.2988L4.59375 41.8926V26.6875ZM40.5898 26.6875V41.8926L30.834 34.3008L40.5898 26.6875ZM22.5918 32.0039C23.873 32.0039 25.1542 32.4111 26.1992 33.2246L40.5898 44.4277V45.9883H4.59375V44.4277L18.9844 33.2246C20.0294 32.4111 21.3105 32.0039 22.5918 32.0039Z'
        fill='#DD8560'
      />
    </g>
    <defs>
      <clipPath id='clip0_1049_5938'>
        <rect width={50} height={50} fill='white' transform='translate(0.59375)' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(AddMessageIcon);
export { Memo as AddMessageIcon };