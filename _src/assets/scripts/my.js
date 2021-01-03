// Lazyload Disqus
function loadDisqus(target) {
    if (target[0].isIntersecting) {
        var disqus_config = function () {
            this.page.url = target[0].target.dataset.disqusUrl;
            this.page.identifier = target[0].target.dataset.disqusUrl;
        };

        (function () {
            var d = document, s = d.createElement('script');

            s.src = `https://${ target[0].target.dataset.disqusShortname }.disqus.com/embed.js`;

            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        })();
    }
}

const observer = new IntersectionObserver(loadDisqus);
const target = document.querySelector('[data-disqus]');
if (target !== null) {
    observer.observe(target);
}