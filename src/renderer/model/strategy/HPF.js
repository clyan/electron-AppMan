const HPF = data => {
  const list = data.sort((a, b) => {
    return b.priority - a.priority;
  });
  return list;
};
export default HPF;
