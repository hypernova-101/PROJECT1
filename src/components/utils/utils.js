export function titleSlice(title) {
  if (title.length > 45) {
    return `${title.slice(0, 45)}...`;
  } else {
    return title;
  }
}
