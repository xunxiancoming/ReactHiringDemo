export function formatTime(date:Date){
  if(!(date instanceof Date)){
    console.warn("please pass a Date formateed text")
    return date
  }
  return date.toLocaleString()
}