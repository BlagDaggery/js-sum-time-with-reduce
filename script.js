const timeNodes = [...document.querySelectorAll('[data-time]')];

const totalSeconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
        const [mins, secs] = timeCode.split(':').map(parseFloat);
        return (mins * 60) + secs;
    })
    .reduce((total, videoSeconds) => total + videoSeconds);

let secondsLeft = totalSeconds;

const hours = Math.floor(secondsLeft / 3600);

secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);

secondsLeft = secondsLeft % 60;

console.log('Total time: ', `${hours}:${mins}:${secondsLeft}`);
