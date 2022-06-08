var solwrapper=document.getElementById('wrapper')
// var herocontainer=document.getElementById('sol-container')
for(ii=0;ii<studentsolArr.length;ii++){
    var it=studentsolArr[ii]
    var id=it.id
    var title=it.title
    var text=it.text
    var img=it.img
    // var solSection=document.createElement('div')
    // solSection.setAttribute('class','section-hero-'+id)
    // console.log(solSection)
    var solContainer=document.createElement('div')
    solContainer.setAttribute('class','container')
    solContainer.setAttribute('id',"sol-container")
    var solRow=document.createElement('div')
    solRow.setAttribute('class','row flex-lg-row-reverse align-items-center g-5 py-5')
    ///////////////////////////
    ///create solcol
    var solCol=document.createElement("div")
    solCol.setAttribute('class','col-10 col-sm-8 col-lg-6')
    solCol.setAttribute('id','container')
    // create solImg  
    var solImg=document.createElement('img')
    solImg.setAttribute('src',img)
    solImg.setAttribute('class','d-block mx-lg-auto img-fluid')
    solImg.setAttribute('width','700')
    solImg.setAttribute('height','500')
    solImg.setAttribute('loading',"lazy")
    ///////////////////////////
    //////create solbody
    var solbody=document.createElement('div')
    solbody.setAttribute('class','col-lg-6')
    solbody.setAttribute('id','container')
    var solbodytitle=document.createElement('h1')
    solbodytitle.setAttribute('class','display-5 fw-bold lh-1 mb-3')
    var titleContent=document.createTextNode(title)
    var solbodytext=document.createElement('p')
    solbodytext.setAttribute('class','lead')
    var textContent=document.createTextNode(text)
    solbodytext.append(textContent)
    solbodytitle.append(titleContent)
    solbody.append(solbodytitle)
    solbody.append(solbodytext)
    solCol.append(solImg)

    if (ii%2==0) {
        solRow.append(solCol)
        solRow.append(solbody)
    } else {
        solRow.append(solbody)
        solRow.append(solCol)
    }

    solContainer.append(solRow)
    // solSection.append(solContainer)
    solwrapper.append(solContainer)
    // solwrapper.append(herocontainer)
}
