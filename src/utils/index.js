export function handleBlogTitle(title) {
  if (!title) {
    return title;
  }
  // 如果是@消息,则拆成数组
  const arr = title.split('//@');
  return arr;
}

export function handleBlogTitle1(title) {
  return title;
}
