declare module "@dbml/core" {
    interface FieldType {
        type_name: string;
        args: any | null;
    }

    class Element {

    }

    class Database extends Element {
        dbState: DbState;
        id: number;
        hasDefaultSchema: boolean;
        note?: string;
        name?: string;
        databaseType: string;
        schemas: Schema[];
    }

    class DbState extends Element {
        dbId: number;
        schemaId: number;
        enumId: number;
        tableGroupId: number;
        refId: number;
        tableId: number;
        enumValueId: number;
        endpointId: number;
        indexId: number;
        fieldId: number;
        indexColumnId: number;
    }

    class Schema extends Element {
        tables: Table[];
        enums: Enum[];
        refs: Ref[];
        tableGroups: TableGroup[];
        name: string;
        note?: string;
        alias?: string;
        database: Database;
        dbState: DbState;
        id: number;
    }

    export class Table extends Element {
        name: string;
        alias?: string;
        note?: string;
        fields: Field[];
        indexes: Index[];
        schema: Schema;
        dbState: DbState;
        id: number;
    }

    class Enum extends Element {

    }

    class Ref extends Element {
        dbState: DbState;
        endpoints: [Endpoint];
        name: string | null;
        onDelete?: string;
        onUpdate?: string;
        schema: Schema;
    }

    class TableGroup extends Element {

    }

    export class Field extends Element {
        dbState: DbState;
        dbdefault?: any;
        endpoints: Endpoint[];
        id: number;
        increment?: boolean;
        name: string;
        not_null?: boolean;
        note?: boolean;
        pk?: boolean;
        table: Table;
        type?: FieldType;
        unique?: boolean;
    }

    class Index extends Element {
        name?: string;
        note?: string;
        columns: IndexColumn[];
        pk?: boolean;
        unique?: boolean;
        dbState: DbState;
        table: Table;
    }

    class IndexColumn extends Element {
        dbState: DbState;
        id: number;
        index: Index;
        type: string;
        value: string;
    }

    class Endpoint extends Element {
        dbState: DbState;
        field: Field;
        fieldName: string;
        id: number;
        ref: Ref;
        relation: string;
        schemaName: string;
        tableName: string;
    }

    export class Parser {
        static parse(str: string, format: string) : Database;
    }
}