(function () {
    const topNav = document.getElementById("top-nav");
    const dataList = [
        { contentsId:"top-home",src: "https://static-page.kakao.com/static/pc/menu_home.svg?fac7abe73b67dd1eb997d70a2c52d4d0", alt: "홈" },
        { contentsId:"top-webtoon",src: "https://static-page.kakao.com/static/pc/menu_toon.svg?42b75d406ec543b2fcf64e35287f0724", alt: "웹툰/만화" },
        { contentsId:"top-webfiction",src: "https://static-page.kakao.com/static/pc/menu_novel.svg?296e815be15f5e5edcdddb865f9863cd", alt: "웹소설/장르" },
        { contentsId:"top-movie",src: "https://static-page.kakao.com/static/pc/menu_vod.svg?0df7689ed8c083054bd9949aed77c589", alt: "영화" },
        { contentsId:"top-broadcast",src: "https://static-page.kakao.com/static/pc/menu_broadcast.svg?a6b4779526f1fa5dbeb1516607770b16", alt: "예능/드라마" },
        { contentsId:"top-book",src: "https://static-page.kakao.com/static/pc/menu_book.svg?8fd0c5dc69d357fa23dd953d3b7e71aa", alt: "책" },
    ]
    let li = "";
    for (let i = 0; i < dataList.length; i++) {
        let data = dataList[i];
        li += `<li class="top-nav-li"><a onClick="onTopNavClick('${data.contentsId}')"><img src=${data.src} alt=${data.alt}></a></li>`;
    }
    topNav.innerHTML = li;
})();
function onTopNavClick(id) {
    const topContents = document.getElementsByClassName("top-contents");
    for (let i = 0; i < topContents.length; i++) {
        const contents = topContents[i];
        if (contents.id === id) {
            contents.style.display = "block";
        } else {
            contents.style.display = "none";
        }
    }
}