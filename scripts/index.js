// Animate document title
const frames = ["T-c-s-f","t-C-s-f","t-c-S-f","t-c-s-F","t-c-s-f","t-c-s-f","t-c-s-f"]
let current_frame = 0

function setTitle(){
    document.title = frames[current_frame]
}

while (true) {
    setTimeout(setTitle,1000*0.5)
    current_frame++

    if (current_frame > frames.length){
        current_frame = 0
    }
}