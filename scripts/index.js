// Animate document title
const frames = ["T-c-s-f","t-C-s-f","t-c-S-f","t-c-s-F","t-c-s-f","t-c-s-f","t-c-s-f"];
var current_frame = 0;

let setTitle = async () => {
    if (current_frame > 7){current_frame = 0;}

    document.title = frames[current_frame];
    current_frame++;
    await sleep(.5);
}

setInterval(setTitle, 500);