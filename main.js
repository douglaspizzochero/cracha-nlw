// variaveis: let ou const (dá pra alterar posteriommente apenas se não for const)
// Agora alteraremos os links do html pro script

alert('Foguete não tem freio, concorda? Clique em "OK" e vamos juntos!')

const linksSocialMedia = {
  github: 'douglaspizzochero',
  youtube: 'rocketseat',
  facebook: 'douglas.pizzochero.14',
  instagram: 'dpizzochero',
  twitter: 'rocketseat'
}

function changeSocialMediaLinks() {
  //laço de repetição:
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

    //alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userPhoto.src = data.avatar_url
    })

  //ARROW FUNCTION

  //alert(url)
}

getGitHubProfileInfos()
