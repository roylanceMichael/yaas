"use strict";
exports.__esModule = true;
var CommonUIPatternsService = (function () {
    function CommonUIPatternsService() {
    }
    CommonUIPatternsService.prototype.deleteChildFromParent = function (controller, parent, child, selectedChildNameInController, childArrayNameInParent) {
        if (!parent || !controller[selectedChildNameInController] || !parent[childArrayNameInParent]) {
            return;
        }
        var index = parent[childArrayNameInParent].indexOf(child);
        if (index < 0) {
            return;
        }
        parent[childArrayNameInParent].splice(index, 1);
        controller[selectedChildNameInController] = null;
        if (parent[childArrayNameInParent].length > 0 && index - 1 > 0) {
            controller[selectedChildNameInController] = parent[childArrayNameInParent][index - 1];
        }
        else if (parent[childArrayNameInParent].length > 0) {
            controller[selectedChildNameInController] = parent[childArrayNameInParent][0];
        }
    };
    return CommonUIPatternsService;
}());
exports.CommonUIPatternsService = CommonUIPatternsService;
//# sourceMappingURL=CommonUIPatternsService.js.map