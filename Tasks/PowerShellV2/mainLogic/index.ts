/**
 * This file contains high-level task logic.
 * Use such template if task has a lot of high level logic which can be shared accross implementations for specific nodejs versions.
 * For low-level tasks (which tighly depend on NodeJS packages and don't have complex high-level logic) it probably make sense to just copy whole task package for every NodeJS version
 */


/**
 * Interface for all node-specific logic.
 * This should be implemented in node-specific packages.
 * 
 * Used for inversion-of-control between main task logic package and specific for nodejs versions
 */
export interface INodeSpecificLogic {
    copyFiles(source: string, dest: string);
    getPathInput(name: string, required?: boolean): string;
}

/**
 * Main task function 
 * This simple task just copies files from source folder to destination folder
 * @param nodeSpecificLogic Object aggregating node-specific logic
 */
export function main(nodeSpecificLogic: INodeSpecificLogic): void {
    const sourceFolder = nodeSpecificLogic.getPathInput("SourceFolder", true);
    const destFolder = nodeSpecificLogic.getPathInput("DestFolder", true);

    nodeSpecificLogic.copyFiles(sourceFolder, destFolder);
}
