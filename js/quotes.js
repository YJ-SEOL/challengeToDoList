const quotes = [
    {
        quote: "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
        author: "이드리스 샤흐",
    },
    {
        quote: "절대 어제를 후회하지 마라. 인생은 오늘의 내 안에 있고 내일은 스스로 만드는 것이다.",
        author: "L. 론 허바드",
    },
    {
        quote: "행복은 습관이다, 그것을 몸에 지녀라",
        author: "허버드",
    },
    {
        quote: "1%의 가능성, 그것이 나의 길이다.",
        author: "나폴레옹",
    },
    {
        quote: "마음 만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",
        author: "이소룡",
    },
    {
        quote: "해야 할 것을 하라. 모든 것은 타인의 행복을 위해서, 동시에 특히 나의 행복을 위해서이다.",
        author: "톨스토이",
    },
    {
        quote: "사람이 여행을 하는 것은 도착하기 위해서가 아니라 여행하기 위해서이다.",
        author: "괴테",
    },
    {
        quote: "이미 끝나버린 일을 후회하기 보다는 하고 싶었던 일들을 하지못한 것을 후회하라.",
        author: "탈무드",
    },
    {
        quote: "한 번의 실패와 영원한 실패를 혼동하지 마라.",
        author: "F. 스콧 펫제랄드",
    },
    {
        quote: "자신이 해야 할 일을 결정하는 사람은 세상에서 단 한 사람, 오직 나 자신뿐이다.",
        author: "오손 웰스",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// Math.floor(Math.random()*quotes.length) : 숫자
// Math.random() : 0~1까지의 랜덤한 숫자
// quotes.length : Array의 길이만큼의 숫자 곱해줌
// Math.floor() : 소숫점 내림(9.8->9)
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
