export default function loadScript(url, callback = function() {}, attr = {}) {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    Object.entries(attr).forEach(m => {
        script.setAttribute(m[0], m[1]);
    });
    if (script.readyState) {
        // IE
        script.onreadystatechange = function() {
            if (
                script.readyState == 'loaded' ||
                script.readyState == 'complete'
            ) {
                script.onreadystatechange = null;
                callback(true);
            } else {
                callback(false);
            }
        };
    } else {
        // Others
        script.onload = function() {
            callback(true);
        };
        script.onerror = function() {
            callback(false);
        };
    }
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}
