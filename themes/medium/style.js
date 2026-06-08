/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return <style jsx global>{`
    
    // 底色
    .dark body{
        background-color: black;
    }
/* 한글 폰트 Pretendard 불러오기 */
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardv
  ariable-dynamic-subset.css");

  /* 1) 폰트 전체 적용 */
  body, button, input, textarea, select, .notion, #theme-medium {
    font-family: "Pretendard Variable", Pretendard, -apple-system,
      system-ui, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif !important;
  }

  /* 2) 본문 읽기 너비 좁혀서 가독성 ↑ (Medium 느낌) */
  #article-wrapper {
    max-width: 720px !important;
    line-height: 1.8;
    padding-bottom: 3rem;
  }

  /* 3) 목록(홈) 영역 너비 */
  #container-inner {
    max-width: 1080px !important;
  }
  `}</style>
}

export { Style }
