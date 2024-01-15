var iframe = document.getElementById("myIframe");
//OPEN the link when clicked on div
function openFile(fileUrl) {
  if (iframe.style.display === "block" && iframe.src === fileUrl) {
    iframe.style.display = "none";
    iframe.src = "";
  } else {
    iframe.style.display = "block";
    iframe.src = fileUrl;
  }
  resizeIframe();
}
//set the size of iframe according to the height of body
function resizeIframe() {
  iframe.style.height =
    iframe.contentWindow.document.documentElement.scrollHeight + "px";
}
