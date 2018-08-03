// console.log("Sanity Check Yo Self")

// Server Request
const oReq = new XMLHttpRequest();
const firstUrl = "https://www.reddit.com/r/corgis.json";
const randomUrl = "https://www.reddit.com/r/creepy.json";
// const getAppUrl = "https://www.reddit.com/r/GetMotivated/";

// Helper Function
const request = (type, url, method, callback) => {
    oReq.addEventListener(type, callback);
    oReq.open(method, url);
    oReq.send();
};

// Create Header
const logo = document.createElement("img");
logo.id = "logo";
logo.src = "./assets/logo.svg";
logo.style.display = "block";
logo.style.margin = "auto";
// header.style.position = "auto"
headerContainer.appendChild(logo);

// const header = document.createElement("img");
// header.id = "header";
// header.src = "./assets/header_bg.svg";
// // header.style.display = "block";
// // header.style.margin = "auto"
// // header.style.position = "absolute"
// document.body.appendChild(header)



// Create Navigation Bar
const navDiv = document.createElement("div");
navDiv.id = "navigation";
navDiv.style.height = "50px";
navDiv.style.width = "auto";
// navDiv.style.margin = "auto";
// navDiv.style.backgroundColor = "white";
headerContainer.appendChild(navDiv);

let random = document.createElement("button");
random.id = "random";
random.innerHTML = "RANDOM";
navDiv.appendChild(random);

let myBoards = document.createElement("button");
myBoards.id = "myBoards";
myBoards.innerHTML = "MY BOARDS";
navDiv.appendChild(myBoards);

let getTheApp = document.createElement("button");
getTheApp.id = "getApp";
getTheApp.innerHTML = "GET THE APP";
navDiv.appendChild(getTheApp);

let getAppButtonEvent = document.getElementById("getApp");
getAppButtonEvent.addEventListener("click", getAppPage);

function getAppPage() {
    window.open("https://www.reddit.com/r/redditmobile/")
}

request("load", firstUrl, "GET", res => {
    const target = JSON.parse(res.currentTarget.response);
    console.log("target", target);
    console.log("target children length", (target.data.children).length)
    for (let i = 0; i < (target.data.children).length; i++) {
        // console.log("Is it looping?")
        let inputBoxes = document.createElement('div');
        inputBoxes.className = "input";
        container.appendChild(inputBoxes);

        let insertTitle = document.createElement('p');
        insertTitle.className = "insertTitle";
        insertTitle.innerHTML = target.data.children[i].data.title;
        inputBoxes.appendChild(insertTitle);

        let insertImage = document.createElement('img');
        insertImage.className = "insertUrl";
        insertImage.src = target.data.children[i].data.thumbnail;
        inputBoxes.appendChild(insertImage);

    }
})

let getMyBoards = document.getElementById("myBoards");
getMyBoards.addEventListener("click", getHomePage);

function getHomePage() {
    let removePrev = document.body;
    let removeThis = document.getElementById("container");
    removePrev.removeChild(removeThis);


    let newContainer = document.createElement("div");
    newContainer.id = "container";
    document.body.appendChild(newContainer);

    request("load", firstUrl, "GET", res => {
        const target = JSON.parse(res.currentTarget.response);
        console.log("target", target);
        console.log("target children length", (target.data.children).length)
        for (let i = 0; i < (target.data.children).length; i++) {
            // console.log("Is it looping?")
            let inputBoxes = document.createElement('div');
            inputBoxes.className = "input";
            container.appendChild(inputBoxes);

            let insertTitle = document.createElement('p');
            insertTitle.className = "insertTitle";
            insertTitle.innerHTML = target.data.children[i].data.title;
            inputBoxes.appendChild(insertTitle);

            let insertImage = document.createElement('img');
            insertImage.className = "insertUrl";
            insertImage.src = target.data.children[i].data.thumbnail;
            inputBoxes.appendChild(insertImage);

        }
    })
}

let randomButtonEvent = document.getElementById("random");
randomButtonEvent.addEventListener("click", randomPage);

function randomPage() {
    // let removePrev = document.getElementsByTagName("body");
    // removePrev.removeChild("container")
    request("load", randomUrl, "GET", res => {
        let removePrev = document.body;
        let removeThis = document.getElementById("container");
        removePrev.removeChild(removeThis);


        let newContainer = document.createElement("div");
        newContainer.id = "container";
        document.body.appendChild(newContainer);
        
        console.log("random nightmares")
        console.log("hello world")
        // homePage = null;
        const target = JSON.parse(res.currentTarget.response);
        console.log("target", target);
        console.log("target children length", (target.data.children).length)
        for (let i = 0; i < (target.data.children).length; i++) {
            // console.log("Is it looping?")
            let inputBoxes = document.createElement('div');
            inputBoxes.className = "input";
            container.appendChild(inputBoxes);

            let insertTitle = document.createElement('p');
            insertTitle.className = "insertTitle";
            insertTitle.innerHTML = target.data.children[i].data.title;
            inputBoxes.appendChild(insertTitle);

            let insertImage = document.createElement('img');
            insertImage.className = "insertUrl";
            insertImage.src = target.data.children[i].data.thumbnail;
            inputBoxes.appendChild(insertImage);

        }
    })
}




