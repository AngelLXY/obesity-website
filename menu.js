var navbarContainer=document.getElementById('navbar container')
var navbartarget=document.getElementById('navbar-target')
console.log(navbarArr, navbarArr.length)
for(ii=0;ii<navbarArr.length;ii++){
    var it=navbarArr[ii]
    var link=it.link
    var id=it.id
    var title=it.title
    var navDiv=document.createElement('div')
    navDiv.setAttribute('class','section')
    navDiv.setAttribute('id','nav-'+id)
    var navlink=document.createElement('a')
    navlink.setAttribute('class','nav-link')
    // navlink.setAttribute('data-bs-toggle','dropdown')
    navlink.setAttribute('href',link)
    navlink.setAttribute('role','button')
    navlink.setAttribute('aria-expanded','false')
    var navlinkTitle=document.createTextNode(title)
    
    navlink.append(navlinkTitle)
    navDiv.append(navlink)
    navbartarget.append(navDiv)
}
