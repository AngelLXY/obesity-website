var heroWrapper=document.getElementById('wrapper')
for(ii=0;ii<BytheNumbersArr.length;ii++){
    var it=BytheNumbersArr[ii]
    var id=it.id
    var title=it.title
    var text=it.text
    var link=it.link
    var heroSection=document.createElement('div')
    heroSection.setAttribute('class','section-hero-'+id)
    var herodiv=document.createElement('div')
    herodiv.setAttribute('class','px-4 py-5 my-5 text-center hero')
    herodiv.setAttribute('id','hero-'+id)
    var heroTitle=document.createElement('h1')
    heroTitle.setAttribute('class','display-5 fw-bold')
    var heroTitleText=document.createTextNode(title)
    var heroBody=document.createElement('div')
    heroBody.setAttribute('class','col-lg-6 mx-auto')
    var heroBodyText=document.createElement('p')
    heroBodyText.setAttribute('class','lead mb-4')
    var heroBodyTextContent=document.createTextNode(text)
    var btnDiv=document.createElement('div')
    btnDiv.setAttribute('class','lead mb-4')
    var btn=document.createElement('a')
    btn.setAttribute('class','btn btn-primary btn-lg px-4 gap-3')
    btn.setAttribute('href',link)
    var btnText=document.createTextNode('More')
    btn.append(btnText)
    btnDiv.append(btn)
    heroTitle.append(heroTitleText)
    heroBodyText.append(heroBodyTextContent)
    heroBody.append(heroBodyText)
    heroBody.append(btnDiv)
    herodiv.append(heroTitle)
    herodiv.append(heroBody)
    heroSection.append(herodiv)
    heroWrapper.append(heroSection)
}