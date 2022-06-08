// var navbarContainer=document.getElementById('navbar container')
// var navbartarget=document.getElementById('navbar-target')
// navbarContainer.append(navbartarget)
// console.log(navbarArr, navbarArr.length)
// for(ii=0;ii<navbarArr.length;ii++){
//     var it=navbarArr[ii]
//     var link=it.link
//     var id=it.id
//     var title=it.title
//     var navDiv=document.createElement('div')
//     navDiv.setAttribute('class','section')
//     navDiv.setAttribute('id','nav-'+id)
//     var navlink=document.createElement('a')
//     navlink.setAttribute('class','nav-link')
//     // navlink.setAttribute('data-bs-toggle','dropdown')
//     navlink.setAttribute('href',link)
//     navlink.setAttribute('role','button')
//     navlink.setAttribute('aria-expanded','false')
//     var navlinkTitle=document.createTextNode(title)
    
//     navlink.append(navlinkTitle)
//     navDiv.append(navlink)
//     navbartarget.append(navDiv)

// }





/////internal nav page 1

var causetarget=document.getElementById('causes-cards-target')
// console.log(causetarget)

for(ii=0;ii<causesCardsArr.length;ii++){
    
    var it=causesCardsArr[ii]
    // console.log(it)
    var id=it.id
    var title=it.title
    var text=it.text
    var link=it.link
    var img=it.img
    var btn=it.btn
  
  var cardRow=document.createElement('div')
  cardRow.setAttribute('class','col-4')
  var card=document.createElement('div')////??/)
  card.setAttribute('class','card')
  card.setAttribute('id','causecard-'+id)
  var cardimg=document.createElement('img')
  cardimg.setAttribute('class','card-img-top causeimg')
  cardimg.setAttribute('src',img)
  var cardBody=document.createElement('div')
  cardBody.setAttribute('class','card-body')
  var cardBodyLink=document.createElement('a')
  cardBodyLink.setAttribute('href',link)
  var cardBodyTitle=document.createElement('h5')
  cardBodyTitle.setAttribute('class','card-title')
  var cardTitleText=document.createTextNode(title)
  var cardBodyText=document.createElement('p')
  cardBodyText.setAttribute('class','card-text')
  var cardText=document.createTextNode(text)
//   var cardBodyLink=document.createElement('a')
//   cardBodyLink.setAttribute('href',link)
//   cardBodyLink.setAttribute('class','btn btn-primary')
//   var cardBodyLinkText=document.createTextNode(btn)
//   cardBodyLink.append(cardBodyLinkText)
  cardBodyText.append(cardText)
  cardBodyLink.append(cardBodyTitle)
  cardBodyTitle.append(cardTitleText)
  cardBody.append(cardBodyLink)
  cardBody.append(cardBodyText)
//   cardBody.append(cardBodyLink)
  card.append(cardimg)
  card.append(cardBody)
  cardRow.append(card)
  causetarget.append(cardRow)
  
//   document.append(target)
}

var solutiontarget=document.getElementById('solutions-cards-target')
// console.log(solutiontarget)

for (ii=0;ii<solutionsCardsArr.length;ii++) {
    var it=solutionsCardsArr[ii]
    // console.log(it)
    var id=it.id
    var title=it.title
    var text=it.text
    var link=it.link
  

    var cardRow=document.createElement('div')
    cardRow.setAttribute('class','col-3')
    var card=document.createElement('div')
    card.setAttribute('class','card')
    card.setAttribute('id','sol-'+id)
    var cardBody=document.createElement('a')
    cardBody.setAttribute('class','card-body')
    cardBody.setAttribute('href',link)
    var cardBodyTitle=document.createElement('h5')
    cardBodyTitle.setAttribute('class','card-title')
    var cardBodyTitleText=document.createTextNode(title)
    var cardBodyText=document.createElement('div')///////
    cardBodyText.setAttribute('class','card-text')
    var cardBodyTextContent=document.createTextNode(text)
    cardBodyTitle.append(cardBodyTitleText)
    cardBody.append(cardBodyTitle)
    cardBody.append(cardBodyTextContent)
    card.append(cardBody)
    cardRow.append(card)
    solutiontarget.append(cardRow)
    // console.log(link)
}




