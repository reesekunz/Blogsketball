function CardLayout() {
  var cardArticleRows = document.querySelectorAll(".article-row");
  for (var i = 0; i < cardArticleRows.length; i += 1) {
    cardArticleRows[i].style.display = "flex";
    cardArticleRows[i].style.flexDirection = "row";
    cardArticleRows[i].style.justifyContent = "space-evenly";
    cardArticleRows[i].style.marginLeft = "0";
    cardArticleRows[i].style.marginRight = "0";
    cardArticleRows[i].style.marginTop = "5%";
    cardArticleRows[i].style.color = "red";
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

function ShowBettingHistory() {
  var AGGrid = document.querySelector(".ag-grid");
  AGGrid.style.display = "flex";
  AGGrid.style.justifyContent = "center";
  AGGrid.style.marginTop = "400px";

  AGGrid.style.position = "absolute";
  AGGrid.style.width = "100%";

  var Column1 = document.querySelector(".column1");
  Column1.style.filter = "blur(4px)";

  var Column2 = document.querySelector(".column2");
  Column2.style.filter = "blur(4px)";

  var Column3 = document.querySelector(".column3");
  Column3.style.filter = "blur(4px)";
}

function CloseButton() {
  var AGGrid = document.querySelector(".ag-grid");
  AGGrid.style.display = "none";

  var Column1 = document.querySelector(".column1");
  Column1.style.filter = "none";

  var Column2 = document.querySelector(".column2");
  Column2.style.filter = "none";

  var Column3 = document.querySelector(".column3");
  Column3.style.filter = "none";
}



let myButton = document.querySelector("#myButton");
function NBARankArticles() {
  myButton.style.color = "yellow"
}
if(myButton) {
myButton.addEventListener("click", myButton) }


// function NBARankArticles() {
//   var button = document.querySelector("#myButton")
//   if(button) {
//     button.addEventListener("click", NBARankArticles);
//     alert ("ITS WORKING!");
//   }
// }


export default {
  CardLayout,
  PageReload,
  ShowBettingHistory,
  CloseButton,
  NBARankArticles
};
