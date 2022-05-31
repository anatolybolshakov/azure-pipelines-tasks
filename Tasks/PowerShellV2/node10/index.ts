import tl = require('azure-pipelines-task-lib/task');
import { INodeSpecificLogic } from 'multiplehandlerstask';
import * as MainTaskLogic from "multiplehandlerstask";

class Node6SpecificLogic implements INodeSpecificLogic {
    copyFiles(source: string, dest: string) {
        /**
         * Let's suppose that there are some breaking changes in cp method for node10.
         * We can rework implementation here to align new behavior with existing
         */

        tl.cp(source, dest);
    }
    getPathInput(name: string, required: boolean): string {
        
        return tl.getPathInput(name, required);
    }
} 

async function run() {
    console.log('Using node 10 implementation');

    try {
        const nodeSpecificLogic = new Node6SpecificLogic();
        MainTaskLogic.main(nodeSpecificLogic);

        tl.setResult(tl.TaskResult.Succeeded, 'Task completed successfully');
    } catch (e) {
        tl.setResult(tl.TaskResult.Failed, `Task failed with an error: ${e}`);
    }
}

run();
