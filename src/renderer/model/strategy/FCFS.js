const FCFS = data => {
  const list = data.sort((a, b) => {
    return a.arriveTime - b.arriveTime;
  });
  return list;
};

export default FCFS;
