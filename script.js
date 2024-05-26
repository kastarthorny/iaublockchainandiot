function redirectToPage(page) {
    const pages= {
        'js7': 'https://www.youtube.com/watch?v=xXQnn-CmVsg&t=3s',
        'js6': 'https://www.youtube.com/watch?v=jN6YtlVuTow&t=1s',
        'vizyon': 'https://www.youtube.com/watch?v=3qUSvBTIA_I',
    };
   if (pages [page]) {
    window.location.href = pages [page];
   } else {
    console.error ('Page not found');
   }


}