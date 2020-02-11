let queue = [];
let showing = 0;
let maxSnack = 2;

const QueueSnackbar = barFunc => {
  // Add snackbar function to queue
  queue.push(barFunc);
  if (showing < maxSnack) {
    showQueueItems();
  }
};

//Executes queue functions
const showQueueItems = () => {
  if (queue.length > 0 && showing < maxSnack) {
    if (queue[showing]) {
      queue[showing]();
      showing++;
    }
  }
};

// Removes item from queue when snackbar closes
export const shiftQueue = () => {
  queue.shift();
  showing--;
  if (showing < maxSnack && queue.length > 0) {
    showQueueItems();
  }
};

export default QueueSnackbar;
