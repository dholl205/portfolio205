var Types = document.getElementById("type")
Types.addEventListener("change", load)
first()

function first() {
  var idk = document.getElementsByClassName("projects")[0]
  idk.innerHTML = ""
  fetch("projects.json")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      Array.from(data).forEach((d) => {
        var project = document.createElement("div")
        project.classList.add("project")
        var card = `
            <img class="projImage" src="${d.image}">
            <div class="proj">
              <div class="projName"><a href="${d.link}">${d.name}</a></div>
              <div class="projDesc">${d.desc}</div>
            </div>`
        project.innerHTML = card
        idk.append(project)
      })
    })
    .catch((e) => {
      console.log(e)
    })
}

function load(e) {
  var idk = document.getElementsByClassName("projects")[0]
  idk.innerHTML = ""
  if (e.target.value === "0") {
    fetch("projects.json")
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        Array.from(data).forEach((d) => {
          var project = document.createElement("div")
          project.classList.add("project")
          var card = `
          <img class="projImage" src="${d.image}">
          <div class="proj">
            <div class="projName"><a href="${d.link}">${d.name}</a></div>
            <div class="projDesc">${d.desc}</div>
          </div>`
          project.innerHTML = card
          idk.append(project)
        })
      })
      .catch((e) => {
        console.log(e)
      })
  } else if (e.target.value === "1") {
    fetch("projects.json")
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        Array.from(data).forEach((d) => {
          if (d.type.includes("Python")) {
            var project = document.createElement("div")
            project.classList.add("project")
            var card = `
            <img class="projImage" src="${d.image}">
            <div class="proj">
              <div class="projName"><a href="${d.link}">${d.name}</a></div>
              <div class="projDesc">${d.desc}</div>
            </div>`
            project.innerHTML = card
            idk.append(project)
          }
        })
      })
      .catch((e) => {
        console.log(e)
      })
  } else if (e.target.value === "2") {
    fetch("projects.json")
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        Array.from(data).forEach((d) => {
          if (d.type.includes("Html, CSS")) {
            var project = document.createElement("div")
            project.classList.add("project")
            var card = `
            <img class="projImage" src="${d.image}">
            <div class="proj">
              <div class="projName"><a href="${d.link}">${d.name}</a></div>
              <div class="projDesc">${d.desc}</div>
            </div>`
            project.innerHTML = card
            idk.append(project)
          }
        })
      })
      .catch((e) => {
        console.log(e)
      })
  } else if (e.target.value === "3") {
    fetch("projects.json")
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        Array.from(data).forEach((d) => {
          if (d.type.includes("Java")) {
            var project = document.createElement("div")
            project.classList.add("project")
            var card = `
            <img class="projImage" src="${d.image}">
            <div class="proj">
              <div class="projName"><a href="${d.link}">${d.name}</a></div>
              <div class="projDesc">${d.desc}</div>
            </div>`
            project.innerHTML = card
            idk.append(project)
          }
        })
      })
      .catch((e) => {
        console.log(e)
      })
  } else if (e.target.value === "4") {
    fetch("projects.json")
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        Array.from(data).forEach((d) => {
          if (d.type.includes("JavaScript")) {
            var project = document.createElement("div")
            project.classList.add("project")
            var card = `
            <img class="projImage" src="${d.image}">
            <div class="proj">
              <div class="projName"><a href="${d.link}">${d.name}</a></div>
              <div class="projDesc">${d.desc}</div>
            </div>`
            project.innerHTML = card
            idk.append(project)
          }
        })
      })
      .catch((e) => {
        console.log(e)
      })
  }
}
