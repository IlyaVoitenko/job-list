export function postCreated(dataCreated) {
  const currentDate = new Date();
  const date2 = new Date(dataCreated);
  const daysLag = Math.ceil(
    Math.abs(date2.getTime() - currentDate.getTime()) / (1000 * 3600 * 24)
  );
  let postCreated = 0;
  if (daysLag < 7) {
    postCreated = `${Math.ceil(daysLag / 28)} days ago`;
  }
  if ((daysLag) => 28) {
    postCreated = `${Math.ceil(daysLag / 28)} month ago`;
  }
  if ((daysLag) => 365) {
    postCreated = `${Math.ceil(daysLag / 365)} year ago`;
  }
  return postCreated;
}
