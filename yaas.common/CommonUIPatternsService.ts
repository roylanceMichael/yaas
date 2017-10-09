import {ICommonUIPatternsService} from "./All";
export class CommonUIPatternsService implements ICommonUIPatternsService {
    deleteChildFromParent(controller:any,
                          parent:any,
                          child:any,
                          selectedChildNameInController:string,
                          childArrayNameInParent:string) {

        if (!parent || !controller[selectedChildNameInController] || !parent[childArrayNameInParent]) {
            return;
        }

        const index = parent[childArrayNameInParent].indexOf(child);

        if (index < 0) {
            return;
        }

        parent[childArrayNameInParent].splice(index, 1);
        controller[selectedChildNameInController] = null;

        if (parent[childArrayNameInParent].length > 0 && index - 1 > 0) {
            controller[selectedChildNameInController] = parent[childArrayNameInParent][index - 1];
        }
        else if (parent[childArrayNameInParent].length > 0) {
            controller[selectedChildNameInController]  = parent[childArrayNameInParent][0];
        }

    }
}