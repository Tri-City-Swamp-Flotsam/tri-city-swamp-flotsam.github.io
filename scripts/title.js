// Animate document title
const frames = ["T-c-s-f","t-C-s-f","t-c-S-f","t-c-s-F","t-c-s-f","t-c-s-f","t-c-s-f"];
var current_frame = 0;

const setTitle = async () => {
    document.title = frames[current_frame];
    current_frame++;
    await sleep(.5);
}

setInterval(function () {setTitle; if (current_frame > 7){current_frame = 0;}}, 500);