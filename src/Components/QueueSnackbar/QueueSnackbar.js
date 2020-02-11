let queue = [];
let showing = 0;
let maxSnack = 2;

const QueueSnackbar = barFunc => {
  // Add snackbar function to queue
  queue.push(barFunc);
  if (showing === 0) {
    console.log(showing)
    showQueueItems()};
};

const showQueueItems = () => {
  console.log("in showqueue")
  if (queue.length > 0 && showing < maxSnack) {
    if (queue[showing]) {
      queue[showing]();
      shiftQueue();
      showing++;
    }
  }
};

const shiftQueue = () => {
  setTimeout(() => {
    queue.shift();
    showing--;
    if (showing < maxSnack) {
      console.log("calling showQ")
      showQueueItems();
    }
  }, 4500);
};

export default QueueSnackbar;