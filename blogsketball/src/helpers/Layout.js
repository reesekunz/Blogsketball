function ListLayout() {
  var articleRows = document.querySelectorAll(".article-row");
  for (var i = 0; i < articleRows.length; i += 1) {
    articleRows[i].style.display = "flex";
    articleRows[i].style.flexDirection = "column";
    articleRows[i].style.marginLeft = "100px";
    articleRows[i].style.marginRight = "100px";
    articleRows[i].style.marginTop = "0";
  }

  var articleCards = document.querySelectorAll(".article-card");
  for (var i = 0; i < articleCards.length; i += 1) {
    articleCards[i].style.display = "flex";
    articleCards[i].style.width = "100%";
    articleCards[i].style.height = "100px";
    articleCards[i].style.marginTop = "25px";
    articleCards[i].style.boxShadow = "1px 2px black";
  }

  var articleImages = document.querySelectorAll(".article-img");
  for (var i = 0; i < articleImages.length; i += 1) {
    articleImages[i].style.width = "20%";
    articleImages[i].style.height = "100%";
    articleImages[i].style.marginRight = "50px";
  }
  var headerWordz = document.querySelectorAll(".article-header-wordz");
  for (var i = 0; i < headerWordz.length; i += 1) {
    headerWordz[i].style.marginLeft = "18%";
    headerWordz[i].style.position = "absolute";
    headerWordz[i].style.display = "flex";
    headerWordz[i].style.flexDirection = "column";
    headerWordz[i].style.justifyContent = "center";
    headerWordz[i].style.alignItems = "center";
    headerWordz[i].style.border = "2px solid blue";
    headerWordz[i].style.height = "93px";
    // headerWordz[i].style.width = "100%";
  }
}

function CardLayout() {
  var cardArticleRows = document.querySelectorAll(".article-row");
  for (var i = 0; i < cardArticleRows.length; i += 1) {
    cardArticleRows[i].style.display = "flex";
    cardArticleRows[i].style.flexDirection = "row";
    cardArticleRows[i].style.justifyContent = "space-evenly";
    cardArticleRows[i].style.marginLeft = "0";
    cardArticleRows[i].style.marginRight = "0";
    cardArticleRows[i].style.marginTop = "5%";
  }
  var cardArticleCards = document.querySelectorAll(".article-card");
  for (var i = 0; i < cardArticleCards.length; i += 1) {
    cardArticleCards[i].style.border = "1px solid black";
    cardArticleCards[i].style.width = "425px";
    cardArticleCards[i].style.height = "280px";
    cardArticleCards[i].style.boxShadow = "1px 2px black";
    cardArticleCards[i].style.display = "flex";
    cardArticleCards[i].style.flexDirection = "column";
  }
  var cardArticleImages = document.querySelectorAll(".article-img");
  for (var i = 0; i < cardArticleImages.length; i += 1) {
    cardArticleImages[i].style.width = "100%";
    cardArticleImages[i].style.height = "55%";
    cardArticleImages[i].style.border = "1px solid black";
  }

  var cardArticleContainer = document.querySelector(".article-container");
  for (var i = 0; i < cardArticleContainer.length; i += 1) {
    cardArticleContainer.style.display = "flex";
    cardArticleContainer.style.flexDirection = "column";
    cardArticleContainer.style.justifyContent = "center";
    cardArticleContainer.style.paddingBottom = "10%";
  }
  var cardHeaderWordz = document.querySelectorAll(".article-header-wordz");
  for (var i = 0; i < cardHeaderWordz.length; i += 1) {
    cardHeaderWordz[i].style.position = "relative";
    cardHeaderWordz[i].style.marginLeft = "0";
    cardHeaderWordz[i].style.height = "100%";
  }
}

export default { ListLayout, CardLayout };
