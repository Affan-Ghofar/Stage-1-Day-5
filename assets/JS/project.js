// Global Array
let Project = []

// Function Get Data from HTML use DOM / Mengambil Data dari tag HTML dengan DOM
function getData(event) {
    // Method PreventDefault untuk mencegah web refresh ketika klik submit
    event.preventDefault()

    // Declaration variable and Method DOM
    let name = document.getElementById("name").value
    let startDate = document.getElementById("start-date").value
    let endDate = document.getElementById("end-date").value
    let description = document.getElementById("description").value
    let tech1 = document.getElementById("tech1").checked
    let tech2 = document.getElementById("tech2").checked
    let tech3 = document.getElementById("tech3").checked
    let tech4 = document.getElementById("tech4").checked
    let upload = document.getElementById("upload").files

    // Manipulaton Duration (from input Start Date & End Date)
    startDate = new Date(startDate)
    endDate = new Date(endDate)
    let duration = endDate - startDate

    // Conditional duration use if else
    // Cara Pertama
    if(duration < 0) {
        alert("Duration Failed")
    } else {
        let durationYear = Math.floor(duration / (12 * 30 * 24 * 60 * 60 * 1000))
        if(durationYear > 0) {
            duration = durationYear + " Tahun"
        } else {
            let durationMonth = Math.floor(duration / (30 * 24 * 60 * 60 * 1000))
            if(durationMonth > 0) {
                duration = durationMonth + " Bulan"
            } else {
                let durationWeek = Math.floor(duration / (7 * 24 * 60 * 60 * 1000))
                if(durationWeek > 0) {
                    duration = durationWeek + " Minggu"
                } else {
                    let durationDay = Math.floor(duration / (24 * 60 * 60 * 1000))
                    if(durationDay > 0) {
                        duration = durationDay + " Hari"
                    }
                }
            }
        }
    }


    // Cara Kedua
    // if(duration < 0 ) {
    //     alert("Duration Invalid")
    // } else {
    //     let durationYear = Math.floor(duration / (12 * 30 * 24 * 60 * 60 * 1000))
    //     let durationMonth = Math.floor(duration / (30 * 24 * 60 * 60 * 1000))
    //     let durationWeek = Math.floor(duration / (7 * 24 * 60 * 60 * 1000))
    //     let durationDay = Math.floor(duration / (24 * 60 * 60 * 1000))

    //     if(durationYear > 0) {
    //         duration = durationYear + " Years"
    //     } else if(durationMonth > 0) {
    //         duration = durationMonth + " Months"
    //     } else if(durationWeek > 0) {
    //         duration = durationWeek + " Weeks"
    //     } else if(durationDay > 0) {
    //         duration = durationDay + " Days"
    //     }

    // }
    
    
    // Convert image to bloob object
    upload = URL.createObjectURL(upload[0])

    // Store Data to Object
    let projectData = {
        name,
        startDate,
        endDate,
        duration,
        description,
        tech1,
        tech2,
        tech3,
        tech4,
        upload
    }

    console.log(projectData)
    // Method .push() Menambah/Menyimpan data object kedalam Array 
    // Project(Variable Array/Global Array), projectData(Data Object)
    Project.push(projectData)
    showData()
}

// Function Show Data
function showData() {
    document.getElementById("cardProject").innerHTML = ""

    // Looping use (for Loop) for show Card Project 
    for(let i = 0; i < Project.length; i++) {
        document.getElementById("cardProject").innerHTML += `
        <div class="list-project">
          <img src="${Project[i].upload}" />
          <a href="projectDetail.html" class="title-content">
            <h3>${Project[i].name}</h3>
          </a>
  
          <div class="title-durasi">
            <p>Durasi : ${Project[i].duration}</p>
          </div>
  
          <div class="desc-content">
            <p>
              ${Project[i].description}
            </p>
          </div>
  
          <div class="icons">
            <div class="icon1">
            <!--Using Ternary Operator (condition ? exprIfTrue : exprIfFalse)-->
            ${Project[i].tech1 ? `<i class="fa-brands fa-node-js fa-2x"></i>` : ``} 
            </div>
            <div class="icon1">
            ${Project[i].tech2 ? `<i class="fa-brands fa-react fa-2x"></i>` : ``} 
            </div>
            <div class="icon1">
            ${Project[i].tech3 ? `<i class="fa-brands fa-golang fa-2x"></i>` : ``} 
            </div>
            <div class="icon1">
            ${Project[i].tech4 ? `<i class="fa-brands fa-square-js fa-2x"></i>` : ``} 
            </div>
          </div>
  
          <div class="form-btn">
            <div class="btn-edit">
              <button type="button">Edit</button>
            </div>
  
            <div class="btn-delete">
              <button type="button">Delete</button>
            </div>
          </div>
        </div>
        `
    }
}