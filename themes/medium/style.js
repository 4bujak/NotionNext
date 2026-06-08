/* eslint-disable react/no-unknown-property */
/**
 * 이 스타일은 현재 테마에만 적용됩니다.
 * tailwindCSS의 @apply 구문을 지원하지 않습니다.
 * @returns
 */
const Style = () => {
  return <style jsx global>{`
    
    // bottom color
    .dark body{
        background-color: black;
      }
    `}</style>
  }

  export { Style }
