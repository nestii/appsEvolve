import Reveal from 'reveal';
import classList from 'reveal/lib/js/classList.js';
import zoom from 'reveal/plugin/zoom-js/zoom.js';

Reveal.initialize({
    controls: false,
    progress: true,
    history: true,
    center: true,
    overview: true,
    touch: true,
    theme: window.Reveal.getQueryHash().theme, // available themes are in /css/theme
    transition: 'cube', // default/cube/page/concave/zoom/linear/fade/none
    dependencies: [
        // do not use it - use system JS instead.
    ]
});

hljs.initHighlighting();

export default Reveal;
