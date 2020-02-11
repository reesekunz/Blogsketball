// function ListLayout() {
//   var articleRows = document.querySelectorAll(".article-row");
//   for (var i = 0; i < articleRows.length; i += 1) {
//     articleRows[i].style.display = "flex";
//     articleRows[i].style.flexDirection = "column";
//     articleRows[i].style.justifyContent = "space-evenly";
//     articleRows[i].style.marginLeft = "100px";
//     articleRows[i].style.marginRight = "100px";
//     articleRows[i].style.marginTop = "0";
//   }

//   var articleCards = document.querySelectorAll(".article-card");
//   for (var i = 0; i < articleCards.length; i += 1) {
//     articleCards[i].style.display = "flex";
//     articleCards[i].style.width = "100%";
//     articleCards[i].style.height = "93px";
//     articleCards[i].style.marginTop = "25px";
//     articleCards[i].style.boxShadow = "1px 2px black";
//   }
//   var articleImgContainer = document.querySelectorAll(".article-img-container");
//   for (var i = 0; i < articleImgContainer.length; i += 1) {
//     articleImgContainer[i].style.width = "20%";
//     articleImgContainer[i].style.height = "100%";
//   }

//   var articleImages = document.querySelectorAll(".article-img");
//   for (var i = 0; i < articleImages.length; i += 1) {
//     articleImages[i].style.width = "100%";
//     articleImages[i].style.height = "100%";
//   }
//   var header = document.querySelectorAll(".article-header");
//   for (var i = 0; i < header.length; i += 1) {
//     header[i].style.margin = "0";
//     header[i].style.display = "flex";
//     header[i].style.flexDirection = "column";
//     header[i].style.justifyContent = "center";
//     header[i].style.alignItems = "flex-start";
//     header[i].style.border = "2px solid blue";
//     header[i].style.height = "100%";
//     header[i].style.fontSize = "20px";
//     header[i].style.width = "100%";
//     header[i].style.paddingLeft = "10px";
//     header[i].style.border = "3px solid brown";
//   }
// }

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
    cardArticleCards[i].style.width = "33%";
    cardArticleCards[i].style.marginRight = "15px";
    cardArticleCards[i].style.marginLeft = "15px";

    cardArticleCards[i].style.height = "280px";
    cardArticleCards[i].style.boxShadow = "1px 2px black";
    cardArticleCards[i].style.display = "flex";
    cardArticleCards[i].style.flexDirection = "column";
  }

  var CardArticleImgContainer = document.querySelectorAll(
    ".article-img-container"
  );
  for (var i = 0; i < CardArticleImgContainer.length; i += 1) {
    CardArticleImgContainer[i].style.width = "100%";
    CardArticleImgContainer[i].style.height = "55%";
  }

  var cardArticleImages = document.querySelectorAll(".article-img");
  for (var i = 0; i < cardArticleImages.length; i += 1) {
    cardArticleImages[i].style.width = "100%";
    cardArticleImages[i].style.height = "100%";
  }

  var cardArticleContainer = document.querySelector(".article-container");
  for (var i = 0; i < cardArticleContainer.length; i += 1) {
    cardArticleContainer.style.display = "flex";
    cardArticleContainer.style.flexDirection = "column";
    cardArticleContainer.style.justifyContent = "center";
    cardArticleContainer.style.paddingBottom = "10%";
  }
  var cardHeader = document.querySelectorAll(".article-header");
  for (var i = 0; i < cardHeader.length; i += 1) {
    cardHeader[i].style.position = "relative";
    cardHeader[i].style.marginLeft = "0";
    cardHeader[i].style.height = "100%";
    cardHeader[i].style.width = "95%";
  }
}

function PageReload() {
  document.location.reload();
  return false;
}

export default {
  // ListLayout,
  CardLayout,
  PageReload
};
