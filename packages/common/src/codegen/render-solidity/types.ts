export interface AbsoluteImportDatum {
  symbol: string;
  path: string;
}

export interface RelativeImportDatum {
  symbol: string;
  fromPath: string;
  usedInPath: string;
}

export type ImportDatum = AbsoluteImportDatum | RelativeImportDatum;

export interface StaticResourceData {
  /** Name of the table id constant to render. */
  tableIdName: string;
  /** Table namespace string */
  namespace: string;
  /** Table name string */
  name: string;
  /** Whether the table is offchain only (does not use storage) */
  offchainOnly: boolean;
}

export interface RenderType {
  /** Fully-qualified name of the user-defined type (may include a library name as prefix) */
  typeId: string;
  /** Fully-qualified name of the user-defined type (may include a library name as prefix), followed by location (none/memory/storage) */
  typeWithLocation: string;
  /** The name of the enum element in SchemaType to use for schema registration (e.g. "UINT256_ARRAY") */
  enumName: string;
  staticByteLength: number;
  isDynamic: boolean;
  /** Empty for internal types. Custom `wrap` method for user defined types. */
  typeWrap: string;
  /** Empty for internal types. Custom `unwrap` method for user defined types. */
  typeUnwrap: string;
  /** Data to generate the custom wrapper and unwrapper if necessary. */
  typeWrappingData?: RenderFieldTypeWrappingData;
  /** Same as typeId for internal types. The underlying `typeId` for user defined types. */
  internalTypeId: string;
}

export interface RenderKeyTuple extends RenderType {
  name: string;
  isDynamic: false;
}

export interface RenderField extends RenderType {
  arrayElement: RenderType | undefined;
  name: string;
}

export interface RenderStaticField extends RenderField {
  isDynamic: false;
}

export interface RenderDynamicField extends RenderField {
  isDynamic: true;
}

export type RenderFieldTypeWrappingData = {
  kind: "staticArray";
  elementType: string;
  staticLength: number;
};

export interface RenderEnum {
  name: string;
  memberNames: string[];
}
