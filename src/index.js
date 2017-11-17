var install = function (Vue) {
  if (install.installed) return;
  var VFb = (function () {
    var MAX_DISTANCE = 10;
    var collection   = {};
    var startPos     = {};

    function addClass() {
      var className = this.getAttribute('data-feedback-class');
      this.classList.add(className);
    }

    function removeClass() {
      var className = this.getAttribute('data-feedback-class');
      this.classList.remove(className);
    }

    return {
      generateKey: function () {
        return String(Math.random()).slice(2);
      },

      register: function (el, className) {
        var key         = this.generateKey();
        collection[key] = {el: el};

        el.setAttribute('data-feedback-key', key);
        el.setAttribute('data-feedback-class', className);
        el.addEventListener('mousedown', addClass);
        el.addEventListener('touchstart', addClass);
        el.addEventListener('touchend', removeClass);
        el.addEventListener('touchcancel', removeClass);
        el.addEventListener('mouseup', removeClass);
        return key;
      },

      destroy: function (element) {
        var key = element.getAttribute('data-feedback-key');
        var el  = collection[key].el;
        el.removeEventListener('mousedown', addClass);
        el.removeEventListener('touchstart', addClass);
        el.removeEventListener('touchend', removeClass);
        el.removeEventListener('touchcancel', removeClass);
        el.removeEventListener('mouseup', removeClass);
        removeClass.call(el);
        delete collection[key];
      },

      onDocTouchStart: function (e) {
        var touch        = e.touches[0];
        startPos.screenY = touch.screenY;
        startPos.pageY   = touch.pageY;
      },

      onDocTouchMove: function (e) {
        var touch           = e.touches[0];
        var distanceScreenY = Math.abs(touch.screenY - startPos.screenY);
        var distancePageY   = Math.abs(touch.pageY - startPos.pageY);

        if (Object.keys(collection).length
          && (distanceScreenY > MAX_DISTANCE || distancePageY > MAX_DISTANCE)) {
          for (var key in collection) {
            if (collection.hasOwnProperty(key)) {
              removeClass.call(collection[key].el);
            }
          }
        }
      },
    }
  }());

  document.addEventListener('touchstart', VFb.onDocTouchStart);
  document.addEventListener('touchmove', VFb.onDocTouchMove);

  Vue.directive('feedback', {
    bind: function (el, binding, vnode) {
      VFb.register(vnode.elm, binding.value || 'e-feedback');
    },

    unbind: function (el, binding, vnode) {
      VFb.destroy(vnode.elm);
    }
  });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {install: install};
