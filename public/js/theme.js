const theme = localStorage.getItem(`set-theme`);
if(theme){
  document.documentElement.setAttribute(`data-set-theme`,theme);
} else {
//   document.documentElement.setAttribute(`data-set-theme`,`light`);
}
