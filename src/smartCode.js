/**
 * Beautified SmartCode snippet injected into the page (ASYNC mode).
 * Edit this file — do not put this logic in template literals inside React.
 *
 * Placeholders (replaced after minify at build time):
 *   __WINGIFY_ACCOUNT_ID__
 *   __WINGIFY_SETTINGS_TIMEOUT__
 *   __WINGIFY_HIDE_ELEMENT__
 *   __WINGIFY_HIDE_ELEMENT_STYLE__
 */
window._wingify_code ||
  (function () {
    var account_id = __WINGIFY_ACCOUNT_ID__,
      version = 3.0,
      settings_tolerance = __WINGIFY_SETTINGS_TIMEOUT__,
      hide_element = '__WINGIFY_HIDE_ELEMENT__',
      hide_element_style = '__WINGIFY_HIDE_ELEMENT_STYLE__';
    var n = window,
      i = document;
    if (-1 < i.URL.indexOf('__wingify_disable__') || n._wingify_code) return;
    var t = !1,
      r = i.currentScript,
      e = { sT: settings_tolerance, hES: hide_element_style, hE: hide_element };
    try {
      e = Object.assign(
        e,
        JSON.parse(localStorage.getItem('_wingify_' + account_id + '_config'))
      );
    } catch (e) {}
    var code = {
      script: r,
      nonce: r.nonce,
      settings_tolerance: function () {
        return e.sT;
      },
      hide_element: function () {
        return performance.getEntriesByName('first-contentful-paint')[0]
          ? ''
          : e.hE;
      },
      hide_element_style: function () {
        return '{' + e.hES + '}';
      },
      getVersion: function () {
        return version;
      },
      finish: function () {
        var e;
        !t &&
          (t = !0, e = i.getElementById('_vis_opt_path_hides')) &&
          e.parentNode.removeChild(e);
      },
      finished: function () {
        return t;
      },
      addScript: function (e) {
        var t = i.createElement('script');
        t.src = e;
        r.nonce && t.setAttribute('nonce', r.nonce);
        t.fetchPriority = 'high';
        i.head.appendChild(t);
      },
      init: function () {
        n._settings_timer = setTimeout(function () {
          code.finish();
        }, this.settings_tolerance());
        var e,
          t = this.hide_element();
        t &&
          ((e = i.createElement('style')).id = '_vis_opt_path_hides',
          r.nonce && e.setAttribute('nonce', r.nonce),
          (e.textContent = t + this.hide_element_style()),
          i.head.appendChild(e));
        this.addScript('https://edge.wingify.net/tag/' + account_id + '.js');
      },
    };
    n._wingify_code = code;
    code.init();
  })();
function d() {
  var e;
  t._wingify_code &&
    ((e = d.hidingStyle =
      document.getElementById('_vis_opt_path_hides') || d.hidingStyle),
    t._wingify_code.finished() ||
      _wingify_code.libExecuted ||
      (t.Wingify && Wingify.dNR) ||
      !t._wingify_code.hide_element() ||
      (document.getElementById('_vis_opt_path_hides') ||
        document.getElementsByTagName('head')[0].appendChild(e),
      requestAnimationFrame(d)));
}
var t;
t = window;
d();
