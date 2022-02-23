// Bootstrap index in order to Module Federation to be able to load shared dependencies before loading the index
import('./bootstrap').catch((err) => console.error(err));