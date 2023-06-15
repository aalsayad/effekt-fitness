import React from 'react';

function LogoComponent({ width }) {
  return (
    <svg width={width} height='126' viewBox='0 0 126 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.9214 18.3968L18.3968 18.9214C17.1512 20.167 16.2582 21.0588 15.4958 21.6862C14.7432 22.3056 14.184 22.6099 13.6269 22.7367C12.9857 22.8825 12.3199 22.8825 11.6787 22.7366C11.1216 22.6099 10.5624 22.3056 9.80983 21.6862C9.04742 21.0588 8.15437 20.167 6.90876 18.9214C5.66316 17.6758 4.77138 16.7827 4.14394 16.0203C3.52461 15.2678 3.22022 14.7086 3.09352 14.1515C2.94768 13.5103 2.94768 12.8445 3.09352 12.2032C3.22022 11.6462 3.52461 11.087 4.14394 10.3344C4.77139 9.57199 5.66316 8.67894 6.90876 7.43333L7.43333 6.90876C8.67894 5.66315 9.57199 4.77138 10.3344 4.14394C11.087 3.52461 11.6462 3.22022 12.2032 3.09351C12.8445 2.94768 13.5103 2.94768 14.1515 3.09351C14.7086 3.22022 15.2678 3.52461 16.0203 4.14394C16.7827 4.77138 17.6758 5.66315 18.9214 6.90876C20.167 8.15436 21.0588 9.04742 21.6862 9.80983C22.3056 10.5624 22.61 11.1216 22.7367 11.6787C22.8825 12.3199 22.8825 12.9857 22.7367 13.6269C22.61 14.184 22.3056 14.7432 21.6862 15.4958C21.0588 16.2582 20.167 17.1512 18.9214 18.3968ZM2.29044 12.0206C2.62418 10.5532 3.85825 9.31911 6.3264 6.85097L6.85097 6.3264C9.31912 3.85825 10.5532 2.62418 12.0206 2.29044C12.7821 2.11726 13.5727 2.11726 14.3341 2.29044C15.8016 2.62418 17.0356 3.85825 19.5038 6.3264C21.9719 8.79454 23.206 10.0286 23.5397 11.496C23.7129 12.2575 23.7129 13.0481 23.5397 13.8096C23.206 15.277 21.9719 16.511 19.5038 18.9792L18.9792 19.5038C16.5111 21.9719 15.277 23.206 13.8096 23.5397C13.0481 23.7129 12.2575 23.7129 11.496 23.5397C10.0286 23.206 8.79454 21.9719 6.3264 19.5038C3.85825 17.0356 2.62418 15.8015 2.29044 14.3341C2.11726 13.5727 2.11726 12.7821 2.29044 12.0206Z'
        fill='#E7C057'
      />
      <path
        d='M13.1494 7.81297C13.0472 7.61456 12.7636 7.61456 12.6613 7.81297L12.0643 8.97188C11.4102 10.2418 10.376 11.2759 9.10617 11.93L7.94726 12.5271C7.74885 12.6293 7.74885 12.9129 7.94726 13.0152L9.10617 13.6122C10.376 14.2663 11.4102 15.3005 12.0643 16.5703L12.6613 17.7292C12.7636 17.9277 13.0472 17.9277 13.1494 17.7292L13.7465 16.5703C14.4006 15.3005 15.4347 14.2663 16.7046 13.6122L17.8635 13.0152C18.0619 12.9129 18.0619 12.6293 17.8635 12.5271L16.7046 11.93C15.4347 11.2759 14.4006 10.2418 13.7465 8.97188L13.1494 7.81297Z'
        fill='#E7C057'
      />
      <path
        d='M38.5261 10.222C41.1101 10.222 42.1742 11.9549 42.1742 14.2957C42.1742 14.5085 42.159 14.7974 42.1438 15.0406H36.5804C36.7172 16.515 37.3708 17.047 38.5261 17.047C39.4533 17.047 40.0005 16.6974 40.2133 16.0438H42.0374C41.7334 17.6854 40.4717 18.6279 38.4653 18.6279C35.9572 18.6279 34.6651 17.199 34.6651 14.4629C34.6651 11.8181 35.8964 10.222 38.5261 10.222ZM36.5956 13.5965H40.2741C40.1373 12.3045 39.4685 11.8029 38.4501 11.8029C37.3708 11.8029 36.7324 12.2589 36.5956 13.5965ZM46.468 7.10591C46.8632 7.10591 47.1672 7.12111 47.5016 7.18191V8.71716C46.0727 8.51956 45.7079 8.94517 45.7079 9.842V10.4652H47.3496V11.9853H45.7079V18.4151H43.8687V11.9853H42.9567V10.4652H43.8687V9.9484C43.8687 9.70519 43.8687 9.52279 43.8839 9.23398C43.9751 7.97234 44.7047 7.10591 46.468 7.10591ZM51.5892 7.10591C51.9844 7.10591 52.2884 7.12111 52.6228 7.18191V8.71716C51.194 8.51956 50.8292 8.94517 50.8292 9.842V10.4652H52.4708V11.9853H50.8292V18.4151H48.9899V11.9853H48.0779V10.4652H48.9899V9.9484C48.9899 9.70519 48.9899 9.52279 49.0051 9.23398C49.0963 7.97234 49.826 7.10591 51.5892 7.10591ZM57.0368 10.222C59.6209 10.222 60.6849 11.9549 60.6849 14.2957C60.6849 14.5085 60.6697 14.7974 60.6545 15.0406H55.0911C55.228 16.515 55.8816 17.047 57.0368 17.047C57.964 17.047 58.5113 16.6974 58.7241 16.0438H60.5481C60.2441 17.6854 58.9825 18.6279 56.976 18.6279C54.4679 18.6279 53.1759 17.199 53.1759 14.4629C53.1759 11.8181 54.4071 10.222 57.0368 10.222ZM55.1063 13.5965H58.7849C58.6481 12.3045 57.9792 11.8029 56.9608 11.8029C55.8816 11.8029 55.2432 12.2589 55.1063 13.5965ZM69.477 10.4348L66.5889 13.5509L69.629 18.4151H67.4249L65.1296 14.7062L63.9896 15.8462V18.4151H62.1503V7.31872H63.9896V14.2197L67.4705 10.4348H69.477ZM73.1924 15.755C73.1924 16.9862 73.4508 17.0774 74.9253 16.9862V18.4911C74.4693 18.5519 74.0741 18.5823 73.4508 18.5823C71.9612 18.5823 71.4596 17.9743 71.3836 17.0014C71.3532 16.5758 71.3532 16.2566 71.3532 15.8006V11.9853H70.2283V10.4652H71.3532V8.09394H73.1924V10.4652H74.9861V11.9853H73.1924V15.755ZM77.1774 18.6279C76.463 18.6279 75.8854 18.0503 75.8854 17.3358C75.8854 16.6214 76.463 16.0438 77.1774 16.0438C77.8919 16.0438 78.4695 16.6214 78.4695 17.3358C78.4695 18.0503 77.8919 18.6279 77.1774 18.6279ZM81.8318 15.755C81.8318 16.9862 82.0902 17.0774 83.5646 16.9862V18.4911C83.1086 18.5519 82.7134 18.5823 82.0902 18.5823C80.6005 18.5823 80.0989 17.9743 80.0229 17.0014C79.9925 16.5758 79.9925 16.2566 79.9925 15.8006V11.9853H78.8677V10.4652H79.9925V8.09394H81.8318V10.4652H83.6254V11.9853H81.8318V15.755ZM88.9336 10.222C89.192 10.222 89.3744 10.222 89.5416 10.2676V11.8029C87.6872 11.6205 86.7903 12.5477 86.7903 14.9342V18.4151H84.9511V10.4348H86.6383L86.7143 11.8941C86.8511 10.754 87.748 10.222 88.9336 10.222ZM93.7112 10.222C95.9456 10.222 96.8273 11.2252 96.9337 12.6237C96.9641 13.0341 96.9793 13.3837 96.9793 13.8397V18.4151H95.3072L95.216 17.3966C94.7752 18.4455 93.7416 18.6279 92.6015 18.6279C91.2031 18.6279 90.0327 17.7918 90.0327 16.2566C90.0327 14.1893 91.6287 13.4901 94.7752 13.4901H95.14V13.2469C95.14 12.3805 94.8816 11.8029 93.6352 11.8029C92.5711 11.8029 92.0847 12.1525 91.9783 12.9885H90.3063C90.3671 11.3164 91.3247 10.222 93.7112 10.222ZM91.8871 16.0286C91.8871 16.6822 92.4039 17.047 93.1944 17.047C94.1672 17.047 95.14 16.515 95.14 15.6486V14.9494C93.1488 14.8734 91.8871 15.0254 91.8871 16.0286ZM100.61 10.4348V18.4151H98.771V10.4348H100.61ZM98.6494 8.00274C98.6494 7.42512 99.1054 6.95391 99.6831 6.95391C100.261 6.95391 100.732 7.42512 100.732 8.00274C100.732 8.58036 100.261 9.03637 99.6831 9.03637C99.1054 9.03637 98.6494 8.58036 98.6494 8.00274ZM106.814 10.222C108.47 10.222 109.443 10.8756 109.641 12.3653C109.686 12.7757 109.702 13.1405 109.702 13.7941V18.4151H107.862V13.7941C107.862 12.6085 107.574 11.8333 106.205 11.8333C105.126 11.7877 104.351 12.5325 104.351 14.1893V18.4151H102.512V10.4348H104.199L104.275 11.7117C104.503 10.5564 105.491 10.222 106.814 10.222ZM114.959 10.222C117.543 10.222 118.607 11.9549 118.607 14.2957C118.607 14.5085 118.592 14.7974 118.577 15.0406H113.013C113.15 16.515 113.804 17.047 114.959 17.047C115.886 17.047 116.433 16.6974 116.646 16.0438H118.47C118.166 17.6854 116.905 18.6279 114.898 18.6279C112.39 18.6279 111.098 17.199 111.098 14.4629C111.098 11.8181 112.329 10.222 114.959 10.222ZM113.028 13.5965H116.707C116.57 12.3045 115.901 11.8029 114.883 11.8029C113.804 11.8029 113.165 12.2589 113.028 13.5965ZM124.233 10.222C124.492 10.222 124.674 10.222 124.841 10.2676V11.8029C122.987 11.6205 122.09 12.5477 122.09 14.9342V18.4151H120.251V10.4348H121.938L122.014 11.8941C122.151 10.754 123.048 10.222 124.233 10.222Z'
        fill='white'
      />
    </svg>
  );
}

export default LogoComponent;
