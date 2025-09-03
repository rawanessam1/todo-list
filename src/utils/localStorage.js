export const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};



// for calendar
export const getEvents = () => {
  const data = localStorage.getItem("events");
  return data ? JSON.parse(data) : [];
};

export const saveEvents = (events) => {
  localStorage.setItem("events", JSON.stringify(events));
};
