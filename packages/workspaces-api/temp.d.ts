import { Glue42Workspaces } from "./workspaces";

export interface Group extends Glue42Workspaces.Group {

     /**
     * Changes the parent of the group to a new column that is added in the place of the group
     */
    public bundleToColumn(): Promise<void>;

    /**
     * Changes the parent of the group to a new row that is added in the place of the group
     */
    public bundleToRow(): Promise<void>;
}