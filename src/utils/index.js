export function handleBlogTitle(title) {
  if (!title) {
    return title;
  }
  const arr = title.split('//@');
  return arr;
}

export function handleBlogTitle1(title) {
  return title;
}
