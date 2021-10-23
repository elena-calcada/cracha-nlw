const linksSocialMedia = {
  github: 'elena-calcada',
  facebook: 'elena.calcada',
  instagram: 'elena_calcada',
  linkedin: 'in/elena-calcada-evangelista'
}

function changeSocialMediaLinks() {
  socialLinks = document.querySelector('#socialLinks')
  for (let li of socialLinks.children) {
    /* Para cada li referente a cada filho do socialLinks (ul) no HTML */
    const socialName = li.getAttribute('class')
    li.children[0].href = `https://www.${socialName}.com/${linksSocialMedia[socialName]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  //console.log(url)

  fetch(url)
    .then(response => response.json())
    .then(data => {
      //const userName = document.querySelector('#userName')
      userName.textContent = data.name
      console.log(userName.textContent)

      //const userBio = document.querySelector('#userBio')
      userBio.textContent = data.bio

      //const userGithub = document.querySelector('#github')
      userProfile.href = data.html_url

      //const userImage = document.querySelector('#userPhoto')
      userImage.src = data.avatar_url

      //const userLoginGithub = document.querySelector('#userLoginGithub')
      userLoginGithub.textContent = data.login
    })
}

getGitHubProfileInfos()
