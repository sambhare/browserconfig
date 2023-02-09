function zapFonts() {
    const newFont = prompt('Font','Open Sans');
    const xzCss = '@import url(`https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/' + newFont.toLocaleLowerCase().replace(' ','-') + '.min.css`);';
    const gFontsCss = '@import url(`https://fonts.googleapis.com/css?family=' + newFont.replace(' ','+') + '&display=swap`);';
    const newCss = xzCss + gFontsCss + '*{font-family:' + newFont +'!important}code,pre,tt{font-family:monospace!important;}';
    const a = document.createElement('link');
    a.rel = 'stylesheet';
    a.href = 'data:text/css,' + encodeURI(newCss);
    document.getElementsByTagName('head')[0].appendChild(a);
}
javascript:(function zapFonts(){const newFont=prompt('Font','Open Sans');const xzCss='@import url(`https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/'+newFont.toLocaleLowerCase().replace(' ','-')+'.min.css`);';const gFontsCss='@import url(`https://fonts.googleapis.com/css?family='+newFont.replace(' ','+')+'&display=swap`);';const newCss=xzCss+gFontsCss+'*{font-family:'+newFont+'!important}code,pre,tt{font-family:monospace!important;}';const a=document.createElement('link');a.rel='stylesheet';a.href='data:text/css,'+encodeURI(newCss);document.getElementsByTagName('head')[0].appendChild(a);})();
