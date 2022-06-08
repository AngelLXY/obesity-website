var causeSection=document.getElementById('section')
for(ii=0;ii<causeexArr.length;ii++){
    var it=causeexArr[ii]
    var id=it.id
    var title=it.title
    var text=it.text
    var img=it.img
    var btn=it.btn
    var link=it.link
    var causeContainer=document.createElement('div')
    causeContainer.setAttribute('class','container col-xxl-8 px-4 py-5')
    var causeRow=document.createElement('div')
    causeRow.setAttribute('class','row flex-lg-row-reverse align-items-center g-5 py-5')
    var causeCol=document.createElement("div")
    causeCol.setAttribute('class','col-10 col-sm-8 col-lg-6')
    causeCol.setAttribute('id',id)
    var causeImg=document.createElement('img')
    causeImg.setAttribute('src',img)
    causeImg.setAttribute('class','d-block mx-lg-auto img-fluid')
    causeImg.setAttribute('width','700')
    causeImg.setAttribute('height','500')
    causeImg.setAttribute('loading',"lazy")
    var causebody=document.createElement('div')
    causebody.setAttribute('class','col-lg-6')
    var causebodytitle=document.createElement('h1')
    causebodytitle.setAttribute('class','display-5 fw-bold lh-1 mb-3')
    var titleContent=document.createTextNode(title)
    var causebodytext=document.createElement('p')
    causebodytext.setAttribute('class','lead')
    var textContent=document.createTextNode(text)
    // var btnDiv=document.createElement('div')
    // btnDiv.setAttribute('class','d-grid gap-2 d-md-flex justify-content-md-start')
    // var btn=document.createElement('a')
    // btn.setAttribute('type','button')
    // btn.setAttribute('class','btn btn-primary btn-lg px-4 me-md-2')
    // btn.setAttribute('href',link)
    // var btnText=document.createTextNode(btn)
    // btn.append(btnText)
    // btnDiv.append(btn)
    causebodytext.append(textContent)
    causebodytitle.append(titleContent)
    causebody.append(causebodytitle)
    causebody.append(causebodytext)
    // causebody.append(btnDiv)
    causeCol.append(causeImg)
    causeRow.append(causeCol)
    causeRow.append(causebody)
    causeContainer.append(causeRow)
    causeSection.append(causeContainer)
}