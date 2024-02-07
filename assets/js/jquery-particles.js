(function (tsparticlesEngine) {
    "use strict";
    $.fn.particles = function () {
        var _this = this;
        var baseId = "tsparticles";
        var init = function init(options, callback) {
            _this.each(function (index, element) {
                if (element.id === undefined) {
                    element.id = baseId + Math.floor(tsparticlesEngine.getRandom() * 1e3)
                }
                tsparticlesEngine.tsParticles.load(element.id, options).then(callback)
            })
        };
        var ajax = function ajax(jsonUrl, callback) {
            _this.each(function (index, element) {
                if (element.id === undefined) {
                    element.id = baseId + Math.floor(tsparticlesEngine.getRandom() * 1e3)
                }
                tsparticlesEngine.tsParticles.loadJSON(element.id, jsonUrl).then(callback)
            })
        };
        return {
            init: init,
            ajax: ajax
        }
    }
})(window);
//# sourceMappingURL=jquery.particles.min.js.map