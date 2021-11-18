// 下载文件，方法一
function downloadFile(url, filename = '') {
  fetch(url, {
    headers: new Headers({
      Origin: location.origin
    }),
    mode: 'cors'
  })
    .then(res => res.blob())
    .then(blob => {
      const blobUrl = window.URL.createObjectURL(blob)
      this.download(blobUrl, filename)
      window.URL.revokeObjectURL(blobUrl)
    })
}Î
function  download(blobUrl, filename) {
  const a = document.createElement('a')
  a.href = blobUrl
  a.target = '_blank'
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
}
// 下载文件，方法二
function downloadFile() {
  const a = document.createElement('a')
  const url = './home.jpeg'
  a.href = url
  a.download = 'a.jpeg'
  a.click()
}