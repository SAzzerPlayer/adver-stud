import { useQuery, UseQueryOptions } from "react-query";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

function fetcher<TData, TVariables>(
  endpoint: string,
  requestInit: RequestInit,
  query: string,
  variables?: TVariables
) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: "POST",
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AvifOptions = {
  lossless?: InputMaybe<Scalars["Boolean"]>;
  quality?: InputMaybe<Scalars["Int"]>;
  speed?: InputMaybe<Scalars["Int"]>;
};

export type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars["Int"]>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  ne?: InputMaybe<Scalars["Boolean"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
};

export type ContentfulAsset = ContentfulReference &
  Node &
  RemoteFile & {
    __typename?: "ContentfulAsset";
    children: Array<Node>;
    contentful_id: Scalars["String"];
    createdAt?: Maybe<Scalars["Date"]>;
    description?: Maybe<Scalars["String"]>;
    file?: Maybe<ContentfulAssetFile>;
    filename: Scalars["String"];
    filesize?: Maybe<Scalars["Int"]>;
    /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
    gatsbyImage?: Maybe<Scalars["JSON"]>;
    gatsbyImageData?: Maybe<Scalars["JSON"]>;
    height?: Maybe<Scalars["Int"]>;
    id: Scalars["ID"];
    internal: Internal;
    mimeType: Scalars["String"];
    node_locale?: Maybe<Scalars["String"]>;
    parent?: Maybe<Node>;
    placeholderUrl?: Maybe<Scalars["String"]>;
    publicUrl: Scalars["String"];
    resize?: Maybe<RemoteFileResize>;
    spaceId?: Maybe<Scalars["String"]>;
    sys?: Maybe<ContentfulAssetSys>;
    title?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["Date"]>;
    url?: Maybe<Scalars["String"]>;
    width?: Maybe<Scalars["Int"]>;
  };

export type ContentfulAssetCreatedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type ContentfulAssetGatsbyImageArgs = {
  aspectRatio?: InputMaybe<Scalars["Float"]>;
  backgroundColor?: InputMaybe<Scalars["String"]>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  formats?: InputMaybe<Array<RemoteFileFormat>>;
  height?: InputMaybe<Scalars["Int"]>;
  layout?: InputMaybe<RemoteFileLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  quality?: InputMaybe<Scalars["Int"]>;
  sizes?: InputMaybe<Scalars["String"]>;
  width?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulAssetGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars["Float"]>;
  backgroundColor?: InputMaybe<Scalars["String"]>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  cornerRadius?: InputMaybe<Scalars["Int"]>;
  cropFocus?: InputMaybe<ContentfulImageCropFocus>;
  formats?: InputMaybe<Array<InputMaybe<GatsbyImageFormat>>>;
  height?: InputMaybe<Scalars["Int"]>;
  jpegProgressive?: InputMaybe<Scalars["Boolean"]>;
  layout?: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  placeholder?: InputMaybe<GatsbyImagePlaceholder>;
  quality?: InputMaybe<Scalars["Int"]>;
  resizingBehavior?: InputMaybe<ImageResizingBehavior>;
  sizes?: InputMaybe<Scalars["String"]>;
  width?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulAssetResizeArgs = {
  aspectRatio?: InputMaybe<Scalars["Float"]>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  height?: InputMaybe<Scalars["Int"]>;
  quality?: InputMaybe<Scalars["Int"]>;
  width?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulAssetUpdatedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type ContentfulAssetConnection = {
  __typename?: "ContentfulAssetConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulAssetEdge>;
  group: Array<ContentfulAssetGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetConnectionGroupArgs = {
  field: ContentfulAssetFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulAssetConnectionMaxArgs = {
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetConnectionMinArgs = {
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetConnectionSumArgs = {
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  __typename?: "ContentfulAssetEdge";
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export enum ContentfulAssetFieldsEnum {
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  ContentfulId = "contentful_id",
  CreatedAt = "createdAt",
  Description = "description",
  FileContentType = "file___contentType",
  FileDetailsImageHeight = "file___details___image___height",
  FileDetailsImageWidth = "file___details___image___width",
  FileDetailsSize = "file___details___size",
  FileFileName = "file___fileName",
  FileUrl = "file___url",
  Filename = "filename",
  Filesize = "filesize",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  GatsbyImage = "gatsbyImage",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  GatsbyImageData = "gatsbyImageData",
  Height = "height",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  MimeType = "mimeType",
  NodeLocale = "node_locale",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PlaceholderUrl = "placeholderUrl",
  PublicUrl = "publicUrl",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeHeight = "resize___height",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeSrc = "resize___src",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeWidth = "resize___width",
  SpaceId = "spaceId",
  SysRevision = "sys___revision",
  SysType = "sys___type",
  Title = "title",
  UpdatedAt = "updatedAt",
  Url = "url",
  Width = "width",
}

export type ContentfulAssetFile = {
  __typename?: "ContentfulAssetFile";
  contentType?: Maybe<Scalars["String"]>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type ContentfulAssetFileDetails = {
  __typename?: "ContentfulAssetFileDetails";
  image?: Maybe<ContentfulAssetFileDetailsImage>;
  size?: Maybe<Scalars["Int"]>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  image?: InputMaybe<ContentfulAssetFileDetailsImageFilterInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileDetailsImage = {
  __typename?: "ContentfulAssetFileDetailsImage";
  height?: Maybe<Scalars["Int"]>;
  width?: Maybe<Scalars["Int"]>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  height?: InputMaybe<IntQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  contentType?: InputMaybe<StringQueryOperatorInput>;
  details?: InputMaybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  file?: InputMaybe<ContentfulAssetFileFilterInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  filesize?: InputMaybe<IntQueryOperatorInput>;
  gatsbyImage?: InputMaybe<JsonQueryOperatorInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  placeholderUrl?: InputMaybe<StringQueryOperatorInput>;
  publicUrl?: InputMaybe<StringQueryOperatorInput>;
  resize?: InputMaybe<RemoteFileResizeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAssetSysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type ContentfulAssetGroupConnection = {
  __typename?: "ContentfulAssetGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulAssetEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<ContentfulAssetGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulAssetGroupConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetGroupConnectionGroupArgs = {
  field: ContentfulAssetFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulAssetGroupConnectionMaxArgs = {
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetGroupConnectionMinArgs = {
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetGroupConnectionSumArgs = {
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulAssetFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulAssetSys = {
  __typename?: "ContentfulAssetSys";
  revision?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["String"]>;
};

export type ContentfulAssetSysFilterInput = {
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulContentType = Node & {
  __typename?: "ContentfulContentType";
  children: Array<Node>;
  description?: Maybe<Scalars["String"]>;
  displayField?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  internal: Internal;
  name?: Maybe<Scalars["String"]>;
  parent?: Maybe<Node>;
  sys?: Maybe<ContentfulContentTypeSys>;
};

export type ContentfulContentTypeConnection = {
  __typename?: "ContentfulContentTypeConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulContentTypeEdge>;
  group: Array<ContentfulContentTypeGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeConnectionGroupArgs = {
  field: ContentfulContentTypeFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulContentTypeConnectionMaxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeConnectionMinArgs = {
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeConnectionSumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  __typename?: "ContentfulContentTypeEdge";
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export enum ContentfulContentTypeFieldsEnum {
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Description = "description",
  DisplayField = "displayField",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Name = "name",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  SysType = "sys___type",
}

export type ContentfulContentTypeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  displayField?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sys?: InputMaybe<ContentfulContentTypeSysFilterInput>;
};

export type ContentfulContentTypeGroupConnection = {
  __typename?: "ContentfulContentTypeGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulContentTypeEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<ContentfulContentTypeGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulContentTypeGroupConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeGroupConnectionGroupArgs = {
  field: ContentfulContentTypeFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulContentTypeGroupConnectionMaxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeGroupConnectionMinArgs = {
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeGroupConnectionSumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulContentTypeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulContentTypeSys = {
  __typename?: "ContentfulContentTypeSys";
  type?: Maybe<Scalars["String"]>;
};

export type ContentfulContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulEntry = {
  children: Array<Node>;
  contentful_id: Scalars["String"];
  id: Scalars["ID"];
  internal: Internal;
  node_locale: Scalars["String"];
  parent?: Maybe<Node>;
};

export type ContentfulEntryConnection = {
  __typename?: "ContentfulEntryConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulEntryEdge>;
  group: Array<ContentfulEntryGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulEntryConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryConnectionGroupArgs = {
  field: ContentfulEntryFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulEntryConnectionMaxArgs = {
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryConnectionMinArgs = {
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryConnectionSumArgs = {
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryEdge = {
  __typename?: "ContentfulEntryEdge";
  next?: Maybe<ContentfulEntry>;
  node: ContentfulEntry;
  previous?: Maybe<ContentfulEntry>;
};

export enum ContentfulEntryFieldsEnum {
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  ContentfulId = "contentful_id",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  NodeLocale = "node_locale",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
}

export type ContentfulEntryFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type ContentfulEntryGroupConnection = {
  __typename?: "ContentfulEntryGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulEntryEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<ContentfulEntryGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulEntryGroupConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryGroupConnectionGroupArgs = {
  field: ContentfulEntryFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulEntryGroupConnectionMaxArgs = {
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryGroupConnectionMinArgs = {
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryGroupConnectionSumArgs = {
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntrySortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulEntryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export enum ContentfulImageCropFocus {
  Bottom = "BOTTOM",
  BottomLeft = "BOTTOM_LEFT",
  BottomRight = "BOTTOM_RIGHT",
  Center = "CENTER",
  Face = "FACE",
  Faces = "FACES",
  Left = "LEFT",
  Right = "RIGHT",
  Top = "TOP",
  TopLeft = "TOP_LEFT",
  TopRight = "TOP_RIGHT",
}

export type ContentfulLink = ContentfulEntry &
  ContentfulReference &
  Node & {
    __typename?: "ContentfulLink";
    /** Returns the first child node of type contentfulLinkUrlTextNode or null if there are no children of given type on this node */
    childContentfulLinkUrlTextNode?: Maybe<ContentfulLinkUrlTextNode>;
    children: Array<Node>;
    /** Returns all children nodes filtered by type contentfulLinkUrlTextNode */
    childrenContentfulLinkUrlTextNode?: Maybe<
      Array<Maybe<ContentfulLinkUrlTextNode>>
    >;
    contentful_id: Scalars["String"];
    contentfulid?: Maybe<Scalars["String"]>;
    createdAt?: Maybe<Scalars["Date"]>;
    id: Scalars["ID"];
    image?: Maybe<ContentfulAsset>;
    internal: Internal;
    node_locale: Scalars["String"];
    options?: Maybe<Array<Maybe<ContentfulOptions>>>;
    parent?: Maybe<Node>;
    spaceId?: Maybe<Scalars["String"]>;
    sys?: Maybe<ContentfulLinkSys>;
    title?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["Date"]>;
    url?: Maybe<ContentfulLinkUrlTextNode>;
  };

export type ContentfulLinkCreatedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type ContentfulLinkUpdatedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type ContentfulLinkConnection = {
  __typename?: "ContentfulLinkConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulLinkEdge>;
  group: Array<ContentfulLinkGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulLink>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulLinkConnectionDistinctArgs = {
  field: ContentfulLinkFieldsEnum;
};

export type ContentfulLinkConnectionGroupArgs = {
  field: ContentfulLinkFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulLinkConnectionMaxArgs = {
  field: ContentfulLinkFieldsEnum;
};

export type ContentfulLinkConnectionMinArgs = {
  field: ContentfulLinkFieldsEnum;
};

export type ContentfulLinkConnectionSumArgs = {
  field: ContentfulLinkFieldsEnum;
};

export type ContentfulLinkEdge = {
  __typename?: "ContentfulLinkEdge";
  next?: Maybe<ContentfulLink>;
  node: ContentfulLink;
  previous?: Maybe<ContentfulLink>;
};

export enum ContentfulLinkFieldsEnum {
  ChildContentfulLinkUrlTextNodeChildMdxBody = "childContentfulLinkUrlTextNode___childMdx___body",
  ChildContentfulLinkUrlTextNodeChildMdxChildren = "childContentfulLinkUrlTextNode___childMdx___children",
  ChildContentfulLinkUrlTextNodeChildMdxChildrenChildren = "childContentfulLinkUrlTextNode___childMdx___children___children",
  ChildContentfulLinkUrlTextNodeChildMdxChildrenId = "childContentfulLinkUrlTextNode___childMdx___children___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildContentfulLinkUrlTextNodeChildMdxExcerpt = "childContentfulLinkUrlTextNode___childMdx___excerpt",
  ChildContentfulLinkUrlTextNodeChildMdxFileAbsolutePath = "childContentfulLinkUrlTextNode___childMdx___fileAbsolutePath",
  ChildContentfulLinkUrlTextNodeChildMdxFrontmatterTitle = "childContentfulLinkUrlTextNode___childMdx___frontmatter___title",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildContentfulLinkUrlTextNodeChildMdxHeadings = "childContentfulLinkUrlTextNode___childMdx___headings",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildContentfulLinkUrlTextNodeChildMdxHeadingsDepth = "childContentfulLinkUrlTextNode___childMdx___headings___depth",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildContentfulLinkUrlTextNodeChildMdxHeadingsValue = "childContentfulLinkUrlTextNode___childMdx___headings___value",
  ChildContentfulLinkUrlTextNodeChildMdxHtml = "childContentfulLinkUrlTextNode___childMdx___html",
  ChildContentfulLinkUrlTextNodeChildMdxId = "childContentfulLinkUrlTextNode___childMdx___id",
  ChildContentfulLinkUrlTextNodeChildMdxInternalContent = "childContentfulLinkUrlTextNode___childMdx___internal___content",
  ChildContentfulLinkUrlTextNodeChildMdxInternalContentDigest = "childContentfulLinkUrlTextNode___childMdx___internal___contentDigest",
  ChildContentfulLinkUrlTextNodeChildMdxInternalDescription = "childContentfulLinkUrlTextNode___childMdx___internal___description",
  ChildContentfulLinkUrlTextNodeChildMdxInternalFieldOwners = "childContentfulLinkUrlTextNode___childMdx___internal___fieldOwners",
  ChildContentfulLinkUrlTextNodeChildMdxInternalIgnoreType = "childContentfulLinkUrlTextNode___childMdx___internal___ignoreType",
  ChildContentfulLinkUrlTextNodeChildMdxInternalMediaType = "childContentfulLinkUrlTextNode___childMdx___internal___mediaType",
  ChildContentfulLinkUrlTextNodeChildMdxInternalOwner = "childContentfulLinkUrlTextNode___childMdx___internal___owner",
  ChildContentfulLinkUrlTextNodeChildMdxInternalType = "childContentfulLinkUrlTextNode___childMdx___internal___type",
  ChildContentfulLinkUrlTextNodeChildMdxMdxAst = "childContentfulLinkUrlTextNode___childMdx___mdxAST",
  ChildContentfulLinkUrlTextNodeChildMdxParentChildren = "childContentfulLinkUrlTextNode___childMdx___parent___children",
  ChildContentfulLinkUrlTextNodeChildMdxParentId = "childContentfulLinkUrlTextNode___childMdx___parent___id",
  ChildContentfulLinkUrlTextNodeChildMdxRawBody = "childContentfulLinkUrlTextNode___childMdx___rawBody",
  ChildContentfulLinkUrlTextNodeChildMdxSlug = "childContentfulLinkUrlTextNode___childMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildContentfulLinkUrlTextNodeChildMdxTableOfContents = "childContentfulLinkUrlTextNode___childMdx___tableOfContents",
  ChildContentfulLinkUrlTextNodeChildMdxTimeToRead = "childContentfulLinkUrlTextNode___childMdx___timeToRead",
  ChildContentfulLinkUrlTextNodeChildMdxWordCountParagraphs = "childContentfulLinkUrlTextNode___childMdx___wordCount___paragraphs",
  ChildContentfulLinkUrlTextNodeChildMdxWordCountSentences = "childContentfulLinkUrlTextNode___childMdx___wordCount___sentences",
  ChildContentfulLinkUrlTextNodeChildMdxWordCountWords = "childContentfulLinkUrlTextNode___childMdx___wordCount___words",
  ChildContentfulLinkUrlTextNodeChildren = "childContentfulLinkUrlTextNode___children",
  ChildContentfulLinkUrlTextNodeChildrenMdx = "childContentfulLinkUrlTextNode___childrenMdx",
  ChildContentfulLinkUrlTextNodeChildrenMdxBody = "childContentfulLinkUrlTextNode___childrenMdx___body",
  ChildContentfulLinkUrlTextNodeChildrenMdxChildren = "childContentfulLinkUrlTextNode___childrenMdx___children",
  ChildContentfulLinkUrlTextNodeChildrenMdxChildrenChildren = "childContentfulLinkUrlTextNode___childrenMdx___children___children",
  ChildContentfulLinkUrlTextNodeChildrenMdxChildrenId = "childContentfulLinkUrlTextNode___childrenMdx___children___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildContentfulLinkUrlTextNodeChildrenMdxExcerpt = "childContentfulLinkUrlTextNode___childrenMdx___excerpt",
  ChildContentfulLinkUrlTextNodeChildrenMdxFileAbsolutePath = "childContentfulLinkUrlTextNode___childrenMdx___fileAbsolutePath",
  ChildContentfulLinkUrlTextNodeChildrenMdxFrontmatterTitle = "childContentfulLinkUrlTextNode___childrenMdx___frontmatter___title",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildContentfulLinkUrlTextNodeChildrenMdxHeadings = "childContentfulLinkUrlTextNode___childrenMdx___headings",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildContentfulLinkUrlTextNodeChildrenMdxHeadingsDepth = "childContentfulLinkUrlTextNode___childrenMdx___headings___depth",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildContentfulLinkUrlTextNodeChildrenMdxHeadingsValue = "childContentfulLinkUrlTextNode___childrenMdx___headings___value",
  ChildContentfulLinkUrlTextNodeChildrenMdxHtml = "childContentfulLinkUrlTextNode___childrenMdx___html",
  ChildContentfulLinkUrlTextNodeChildrenMdxId = "childContentfulLinkUrlTextNode___childrenMdx___id",
  ChildContentfulLinkUrlTextNodeChildrenMdxInternalContent = "childContentfulLinkUrlTextNode___childrenMdx___internal___content",
  ChildContentfulLinkUrlTextNodeChildrenMdxInternalContentDigest = "childContentfulLinkUrlTextNode___childrenMdx___internal___contentDigest",
  ChildContentfulLinkUrlTextNodeChildrenMdxInternalDescription = "childContentfulLinkUrlTextNode___childrenMdx___internal___description",
  ChildContentfulLinkUrlTextNodeChildrenMdxInternalFieldOwners = "childContentfulLinkUrlTextNode___childrenMdx___internal___fieldOwners",
  ChildContentfulLinkUrlTextNodeChildrenMdxInternalIgnoreType = "childContentfulLinkUrlTextNode___childrenMdx___internal___ignoreType",
  ChildContentfulLinkUrlTextNodeChildrenMdxInternalMediaType = "childContentfulLinkUrlTextNode___childrenMdx___internal___mediaType",
  ChildContentfulLinkUrlTextNodeChildrenMdxInternalOwner = "childContentfulLinkUrlTextNode___childrenMdx___internal___owner",
  ChildContentfulLinkUrlTextNodeChildrenMdxInternalType = "childContentfulLinkUrlTextNode___childrenMdx___internal___type",
  ChildContentfulLinkUrlTextNodeChildrenMdxMdxAst = "childContentfulLinkUrlTextNode___childrenMdx___mdxAST",
  ChildContentfulLinkUrlTextNodeChildrenMdxParentChildren = "childContentfulLinkUrlTextNode___childrenMdx___parent___children",
  ChildContentfulLinkUrlTextNodeChildrenMdxParentId = "childContentfulLinkUrlTextNode___childrenMdx___parent___id",
  ChildContentfulLinkUrlTextNodeChildrenMdxRawBody = "childContentfulLinkUrlTextNode___childrenMdx___rawBody",
  ChildContentfulLinkUrlTextNodeChildrenMdxSlug = "childContentfulLinkUrlTextNode___childrenMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildContentfulLinkUrlTextNodeChildrenMdxTableOfContents = "childContentfulLinkUrlTextNode___childrenMdx___tableOfContents",
  ChildContentfulLinkUrlTextNodeChildrenMdxTimeToRead = "childContentfulLinkUrlTextNode___childrenMdx___timeToRead",
  ChildContentfulLinkUrlTextNodeChildrenMdxWordCountParagraphs = "childContentfulLinkUrlTextNode___childrenMdx___wordCount___paragraphs",
  ChildContentfulLinkUrlTextNodeChildrenMdxWordCountSentences = "childContentfulLinkUrlTextNode___childrenMdx___wordCount___sentences",
  ChildContentfulLinkUrlTextNodeChildrenMdxWordCountWords = "childContentfulLinkUrlTextNode___childrenMdx___wordCount___words",
  ChildContentfulLinkUrlTextNodeChildrenChildren = "childContentfulLinkUrlTextNode___children___children",
  ChildContentfulLinkUrlTextNodeChildrenChildrenChildren = "childContentfulLinkUrlTextNode___children___children___children",
  ChildContentfulLinkUrlTextNodeChildrenChildrenId = "childContentfulLinkUrlTextNode___children___children___id",
  ChildContentfulLinkUrlTextNodeChildrenId = "childContentfulLinkUrlTextNode___children___id",
  ChildContentfulLinkUrlTextNodeChildrenInternalContent = "childContentfulLinkUrlTextNode___children___internal___content",
  ChildContentfulLinkUrlTextNodeChildrenInternalContentDigest = "childContentfulLinkUrlTextNode___children___internal___contentDigest",
  ChildContentfulLinkUrlTextNodeChildrenInternalDescription = "childContentfulLinkUrlTextNode___children___internal___description",
  ChildContentfulLinkUrlTextNodeChildrenInternalFieldOwners = "childContentfulLinkUrlTextNode___children___internal___fieldOwners",
  ChildContentfulLinkUrlTextNodeChildrenInternalIgnoreType = "childContentfulLinkUrlTextNode___children___internal___ignoreType",
  ChildContentfulLinkUrlTextNodeChildrenInternalMediaType = "childContentfulLinkUrlTextNode___children___internal___mediaType",
  ChildContentfulLinkUrlTextNodeChildrenInternalOwner = "childContentfulLinkUrlTextNode___children___internal___owner",
  ChildContentfulLinkUrlTextNodeChildrenInternalType = "childContentfulLinkUrlTextNode___children___internal___type",
  ChildContentfulLinkUrlTextNodeChildrenParentChildren = "childContentfulLinkUrlTextNode___children___parent___children",
  ChildContentfulLinkUrlTextNodeChildrenParentId = "childContentfulLinkUrlTextNode___children___parent___id",
  ChildContentfulLinkUrlTextNodeId = "childContentfulLinkUrlTextNode___id",
  ChildContentfulLinkUrlTextNodeInternalContent = "childContentfulLinkUrlTextNode___internal___content",
  ChildContentfulLinkUrlTextNodeInternalContentDigest = "childContentfulLinkUrlTextNode___internal___contentDigest",
  ChildContentfulLinkUrlTextNodeInternalDescription = "childContentfulLinkUrlTextNode___internal___description",
  ChildContentfulLinkUrlTextNodeInternalFieldOwners = "childContentfulLinkUrlTextNode___internal___fieldOwners",
  ChildContentfulLinkUrlTextNodeInternalIgnoreType = "childContentfulLinkUrlTextNode___internal___ignoreType",
  ChildContentfulLinkUrlTextNodeInternalMediaType = "childContentfulLinkUrlTextNode___internal___mediaType",
  ChildContentfulLinkUrlTextNodeInternalOwner = "childContentfulLinkUrlTextNode___internal___owner",
  ChildContentfulLinkUrlTextNodeInternalType = "childContentfulLinkUrlTextNode___internal___type",
  ChildContentfulLinkUrlTextNodeParentChildren = "childContentfulLinkUrlTextNode___parent___children",
  ChildContentfulLinkUrlTextNodeParentChildrenChildren = "childContentfulLinkUrlTextNode___parent___children___children",
  ChildContentfulLinkUrlTextNodeParentChildrenId = "childContentfulLinkUrlTextNode___parent___children___id",
  ChildContentfulLinkUrlTextNodeParentId = "childContentfulLinkUrlTextNode___parent___id",
  ChildContentfulLinkUrlTextNodeParentInternalContent = "childContentfulLinkUrlTextNode___parent___internal___content",
  ChildContentfulLinkUrlTextNodeParentInternalContentDigest = "childContentfulLinkUrlTextNode___parent___internal___contentDigest",
  ChildContentfulLinkUrlTextNodeParentInternalDescription = "childContentfulLinkUrlTextNode___parent___internal___description",
  ChildContentfulLinkUrlTextNodeParentInternalFieldOwners = "childContentfulLinkUrlTextNode___parent___internal___fieldOwners",
  ChildContentfulLinkUrlTextNodeParentInternalIgnoreType = "childContentfulLinkUrlTextNode___parent___internal___ignoreType",
  ChildContentfulLinkUrlTextNodeParentInternalMediaType = "childContentfulLinkUrlTextNode___parent___internal___mediaType",
  ChildContentfulLinkUrlTextNodeParentInternalOwner = "childContentfulLinkUrlTextNode___parent___internal___owner",
  ChildContentfulLinkUrlTextNodeParentInternalType = "childContentfulLinkUrlTextNode___parent___internal___type",
  ChildContentfulLinkUrlTextNodeParentParentChildren = "childContentfulLinkUrlTextNode___parent___parent___children",
  ChildContentfulLinkUrlTextNodeParentParentId = "childContentfulLinkUrlTextNode___parent___parent___id",
  ChildContentfulLinkUrlTextNodeSysType = "childContentfulLinkUrlTextNode___sys___type",
  ChildContentfulLinkUrlTextNodeUrl = "childContentfulLinkUrlTextNode___url",
  Children = "children",
  ChildrenContentfulLinkUrlTextNode = "childrenContentfulLinkUrlTextNode",
  ChildrenContentfulLinkUrlTextNodeChildMdxBody = "childrenContentfulLinkUrlTextNode___childMdx___body",
  ChildrenContentfulLinkUrlTextNodeChildMdxChildren = "childrenContentfulLinkUrlTextNode___childMdx___children",
  ChildrenContentfulLinkUrlTextNodeChildMdxChildrenChildren = "childrenContentfulLinkUrlTextNode___childMdx___children___children",
  ChildrenContentfulLinkUrlTextNodeChildMdxChildrenId = "childrenContentfulLinkUrlTextNode___childMdx___children___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenContentfulLinkUrlTextNodeChildMdxExcerpt = "childrenContentfulLinkUrlTextNode___childMdx___excerpt",
  ChildrenContentfulLinkUrlTextNodeChildMdxFileAbsolutePath = "childrenContentfulLinkUrlTextNode___childMdx___fileAbsolutePath",
  ChildrenContentfulLinkUrlTextNodeChildMdxFrontmatterTitle = "childrenContentfulLinkUrlTextNode___childMdx___frontmatter___title",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenContentfulLinkUrlTextNodeChildMdxHeadings = "childrenContentfulLinkUrlTextNode___childMdx___headings",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenContentfulLinkUrlTextNodeChildMdxHeadingsDepth = "childrenContentfulLinkUrlTextNode___childMdx___headings___depth",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenContentfulLinkUrlTextNodeChildMdxHeadingsValue = "childrenContentfulLinkUrlTextNode___childMdx___headings___value",
  ChildrenContentfulLinkUrlTextNodeChildMdxHtml = "childrenContentfulLinkUrlTextNode___childMdx___html",
  ChildrenContentfulLinkUrlTextNodeChildMdxId = "childrenContentfulLinkUrlTextNode___childMdx___id",
  ChildrenContentfulLinkUrlTextNodeChildMdxInternalContent = "childrenContentfulLinkUrlTextNode___childMdx___internal___content",
  ChildrenContentfulLinkUrlTextNodeChildMdxInternalContentDigest = "childrenContentfulLinkUrlTextNode___childMdx___internal___contentDigest",
  ChildrenContentfulLinkUrlTextNodeChildMdxInternalDescription = "childrenContentfulLinkUrlTextNode___childMdx___internal___description",
  ChildrenContentfulLinkUrlTextNodeChildMdxInternalFieldOwners = "childrenContentfulLinkUrlTextNode___childMdx___internal___fieldOwners",
  ChildrenContentfulLinkUrlTextNodeChildMdxInternalIgnoreType = "childrenContentfulLinkUrlTextNode___childMdx___internal___ignoreType",
  ChildrenContentfulLinkUrlTextNodeChildMdxInternalMediaType = "childrenContentfulLinkUrlTextNode___childMdx___internal___mediaType",
  ChildrenContentfulLinkUrlTextNodeChildMdxInternalOwner = "childrenContentfulLinkUrlTextNode___childMdx___internal___owner",
  ChildrenContentfulLinkUrlTextNodeChildMdxInternalType = "childrenContentfulLinkUrlTextNode___childMdx___internal___type",
  ChildrenContentfulLinkUrlTextNodeChildMdxMdxAst = "childrenContentfulLinkUrlTextNode___childMdx___mdxAST",
  ChildrenContentfulLinkUrlTextNodeChildMdxParentChildren = "childrenContentfulLinkUrlTextNode___childMdx___parent___children",
  ChildrenContentfulLinkUrlTextNodeChildMdxParentId = "childrenContentfulLinkUrlTextNode___childMdx___parent___id",
  ChildrenContentfulLinkUrlTextNodeChildMdxRawBody = "childrenContentfulLinkUrlTextNode___childMdx___rawBody",
  ChildrenContentfulLinkUrlTextNodeChildMdxSlug = "childrenContentfulLinkUrlTextNode___childMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenContentfulLinkUrlTextNodeChildMdxTableOfContents = "childrenContentfulLinkUrlTextNode___childMdx___tableOfContents",
  ChildrenContentfulLinkUrlTextNodeChildMdxTimeToRead = "childrenContentfulLinkUrlTextNode___childMdx___timeToRead",
  ChildrenContentfulLinkUrlTextNodeChildMdxWordCountParagraphs = "childrenContentfulLinkUrlTextNode___childMdx___wordCount___paragraphs",
  ChildrenContentfulLinkUrlTextNodeChildMdxWordCountSentences = "childrenContentfulLinkUrlTextNode___childMdx___wordCount___sentences",
  ChildrenContentfulLinkUrlTextNodeChildMdxWordCountWords = "childrenContentfulLinkUrlTextNode___childMdx___wordCount___words",
  ChildrenContentfulLinkUrlTextNodeChildren = "childrenContentfulLinkUrlTextNode___children",
  ChildrenContentfulLinkUrlTextNodeChildrenMdx = "childrenContentfulLinkUrlTextNode___childrenMdx",
  ChildrenContentfulLinkUrlTextNodeChildrenMdxBody = "childrenContentfulLinkUrlTextNode___childrenMdx___body",
  ChildrenContentfulLinkUrlTextNodeChildrenMdxChildren = "childrenContentfulLinkUrlTextNode___childrenMdx___children",
  ChildrenContentfulLinkUrlTextNodeChildrenMdxChildrenChildren = "childrenContentfulLinkUrlTextNode___childrenMdx___children___children",
  ChildrenContentfulLinkUrlTextNodeChildrenMdxChildrenId = "childrenContentfulLinkUrlTextNode___childrenMdx___children___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenContentfulLinkUrlTextNodeChildrenMdxExcerpt = "childrenContentfulLinkUrlTextNode___childrenMdx___excerpt",
  ChildrenContentfulLinkUrlTextNodeChildrenMdxFileAbsolutePath = "childrenContentfulLinkUrlTextNode___childrenMdx___fileAbsolutePath",
  ChildrenContentfulLinkUrlTextNodeChildrenMdxFrontmatterTitle = "childrenContentfulLinkUrlTextNode___childrenMdx___frontmatter___title",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenContentfulLinkUrlTextNodeChildrenMdxHeadings = "childrenContentfulLinkUrlTextNode___childrenMdx___headings",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenContentfulLinkUrlTextNodeChildrenMdxHeadingsDepth = "childrenContentfulLinkUrlTextNode___childrenMdx___headings___depth",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenContentfulLinkUrlTextNodeChildrenMdxHeadingsValue = "childrenContentfulLinkUrlTextNode___childrenMdx___headings___value",
  ChildrenContentfulLinkUrlTextNodeChildrenMdxHtml = "childrenContentfulLinkUrlTextNode___childrenMdx___html",
  ChildrenContentfulLinkUrlTextNodeChildrenMdxId = "childrenContentfulLinkUrlTextNode___childrenMdx___id",
  ChildrenContentfulLinkUrlTextNodeChildrenMdxInternalContent = "childrenContentfulLinkUrlTextNode___childrenMdx___internal___content",
  ChildrenContentfulLinkUrlTextNodeChildrenMdxInternalContentDigest = "childrenContentfulLinkUrlTextNode___childrenMdx___internal___contentDigest",
  ChildrenContentfulLinkUrlTextNodeChildrenMdxInternalDescription = "childrenContentfulLinkUrlTextNode___childrenMdx___internal___description",
  ChildrenContentfulLinkUrlTextNodeChildrenMdxInternalFieldOwners = "childrenContentfulLinkUrlTextNode___childrenMdx___internal___fieldOwners",
  ChildrenContentfulLinkUrlTextNodeChildrenMdxInternalIgnoreType = "childrenContentfulLinkUrlTextNode___childrenMdx___internal___ignoreType",
  ChildrenContentfulLinkUrlTextNodeChildrenMdxInternalMediaType = "childrenContentfulLinkUrlTextNode___childrenMdx___internal___mediaType",
  ChildrenContentfulLinkUrlTextNodeChildrenMdxInternalOwner = "childrenContentfulLinkUrlTextNode___childrenMdx___internal___owner",
  ChildrenContentfulLinkUrlTextNodeChildrenMdxInternalType = "childrenContentfulLinkUrlTextNode___childrenMdx___internal___type",
  ChildrenContentfulLinkUrlTextNodeChildrenMdxMdxAst = "childrenContentfulLinkUrlTextNode___childrenMdx___mdxAST",
  ChildrenContentfulLinkUrlTextNodeChildrenMdxParentChildren = "childrenContentfulLinkUrlTextNode___childrenMdx___parent___children",
  ChildrenContentfulLinkUrlTextNodeChildrenMdxParentId = "childrenContentfulLinkUrlTextNode___childrenMdx___parent___id",
  ChildrenContentfulLinkUrlTextNodeChildrenMdxRawBody = "childrenContentfulLinkUrlTextNode___childrenMdx___rawBody",
  ChildrenContentfulLinkUrlTextNodeChildrenMdxSlug = "childrenContentfulLinkUrlTextNode___childrenMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenContentfulLinkUrlTextNodeChildrenMdxTableOfContents = "childrenContentfulLinkUrlTextNode___childrenMdx___tableOfContents",
  ChildrenContentfulLinkUrlTextNodeChildrenMdxTimeToRead = "childrenContentfulLinkUrlTextNode___childrenMdx___timeToRead",
  ChildrenContentfulLinkUrlTextNodeChildrenMdxWordCountParagraphs = "childrenContentfulLinkUrlTextNode___childrenMdx___wordCount___paragraphs",
  ChildrenContentfulLinkUrlTextNodeChildrenMdxWordCountSentences = "childrenContentfulLinkUrlTextNode___childrenMdx___wordCount___sentences",
  ChildrenContentfulLinkUrlTextNodeChildrenMdxWordCountWords = "childrenContentfulLinkUrlTextNode___childrenMdx___wordCount___words",
  ChildrenContentfulLinkUrlTextNodeChildrenChildren = "childrenContentfulLinkUrlTextNode___children___children",
  ChildrenContentfulLinkUrlTextNodeChildrenChildrenChildren = "childrenContentfulLinkUrlTextNode___children___children___children",
  ChildrenContentfulLinkUrlTextNodeChildrenChildrenId = "childrenContentfulLinkUrlTextNode___children___children___id",
  ChildrenContentfulLinkUrlTextNodeChildrenId = "childrenContentfulLinkUrlTextNode___children___id",
  ChildrenContentfulLinkUrlTextNodeChildrenInternalContent = "childrenContentfulLinkUrlTextNode___children___internal___content",
  ChildrenContentfulLinkUrlTextNodeChildrenInternalContentDigest = "childrenContentfulLinkUrlTextNode___children___internal___contentDigest",
  ChildrenContentfulLinkUrlTextNodeChildrenInternalDescription = "childrenContentfulLinkUrlTextNode___children___internal___description",
  ChildrenContentfulLinkUrlTextNodeChildrenInternalFieldOwners = "childrenContentfulLinkUrlTextNode___children___internal___fieldOwners",
  ChildrenContentfulLinkUrlTextNodeChildrenInternalIgnoreType = "childrenContentfulLinkUrlTextNode___children___internal___ignoreType",
  ChildrenContentfulLinkUrlTextNodeChildrenInternalMediaType = "childrenContentfulLinkUrlTextNode___children___internal___mediaType",
  ChildrenContentfulLinkUrlTextNodeChildrenInternalOwner = "childrenContentfulLinkUrlTextNode___children___internal___owner",
  ChildrenContentfulLinkUrlTextNodeChildrenInternalType = "childrenContentfulLinkUrlTextNode___children___internal___type",
  ChildrenContentfulLinkUrlTextNodeChildrenParentChildren = "childrenContentfulLinkUrlTextNode___children___parent___children",
  ChildrenContentfulLinkUrlTextNodeChildrenParentId = "childrenContentfulLinkUrlTextNode___children___parent___id",
  ChildrenContentfulLinkUrlTextNodeId = "childrenContentfulLinkUrlTextNode___id",
  ChildrenContentfulLinkUrlTextNodeInternalContent = "childrenContentfulLinkUrlTextNode___internal___content",
  ChildrenContentfulLinkUrlTextNodeInternalContentDigest = "childrenContentfulLinkUrlTextNode___internal___contentDigest",
  ChildrenContentfulLinkUrlTextNodeInternalDescription = "childrenContentfulLinkUrlTextNode___internal___description",
  ChildrenContentfulLinkUrlTextNodeInternalFieldOwners = "childrenContentfulLinkUrlTextNode___internal___fieldOwners",
  ChildrenContentfulLinkUrlTextNodeInternalIgnoreType = "childrenContentfulLinkUrlTextNode___internal___ignoreType",
  ChildrenContentfulLinkUrlTextNodeInternalMediaType = "childrenContentfulLinkUrlTextNode___internal___mediaType",
  ChildrenContentfulLinkUrlTextNodeInternalOwner = "childrenContentfulLinkUrlTextNode___internal___owner",
  ChildrenContentfulLinkUrlTextNodeInternalType = "childrenContentfulLinkUrlTextNode___internal___type",
  ChildrenContentfulLinkUrlTextNodeParentChildren = "childrenContentfulLinkUrlTextNode___parent___children",
  ChildrenContentfulLinkUrlTextNodeParentChildrenChildren = "childrenContentfulLinkUrlTextNode___parent___children___children",
  ChildrenContentfulLinkUrlTextNodeParentChildrenId = "childrenContentfulLinkUrlTextNode___parent___children___id",
  ChildrenContentfulLinkUrlTextNodeParentId = "childrenContentfulLinkUrlTextNode___parent___id",
  ChildrenContentfulLinkUrlTextNodeParentInternalContent = "childrenContentfulLinkUrlTextNode___parent___internal___content",
  ChildrenContentfulLinkUrlTextNodeParentInternalContentDigest = "childrenContentfulLinkUrlTextNode___parent___internal___contentDigest",
  ChildrenContentfulLinkUrlTextNodeParentInternalDescription = "childrenContentfulLinkUrlTextNode___parent___internal___description",
  ChildrenContentfulLinkUrlTextNodeParentInternalFieldOwners = "childrenContentfulLinkUrlTextNode___parent___internal___fieldOwners",
  ChildrenContentfulLinkUrlTextNodeParentInternalIgnoreType = "childrenContentfulLinkUrlTextNode___parent___internal___ignoreType",
  ChildrenContentfulLinkUrlTextNodeParentInternalMediaType = "childrenContentfulLinkUrlTextNode___parent___internal___mediaType",
  ChildrenContentfulLinkUrlTextNodeParentInternalOwner = "childrenContentfulLinkUrlTextNode___parent___internal___owner",
  ChildrenContentfulLinkUrlTextNodeParentInternalType = "childrenContentfulLinkUrlTextNode___parent___internal___type",
  ChildrenContentfulLinkUrlTextNodeParentParentChildren = "childrenContentfulLinkUrlTextNode___parent___parent___children",
  ChildrenContentfulLinkUrlTextNodeParentParentId = "childrenContentfulLinkUrlTextNode___parent___parent___id",
  ChildrenContentfulLinkUrlTextNodeSysType = "childrenContentfulLinkUrlTextNode___sys___type",
  ChildrenContentfulLinkUrlTextNodeUrl = "childrenContentfulLinkUrlTextNode___url",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  ContentfulId = "contentful_id",
  Contentfulid = "contentfulid",
  CreatedAt = "createdAt",
  Id = "id",
  ImageChildren = "image___children",
  ImageChildrenChildren = "image___children___children",
  ImageChildrenChildrenChildren = "image___children___children___children",
  ImageChildrenChildrenId = "image___children___children___id",
  ImageChildrenId = "image___children___id",
  ImageChildrenInternalContent = "image___children___internal___content",
  ImageChildrenInternalContentDigest = "image___children___internal___contentDigest",
  ImageChildrenInternalDescription = "image___children___internal___description",
  ImageChildrenInternalFieldOwners = "image___children___internal___fieldOwners",
  ImageChildrenInternalIgnoreType = "image___children___internal___ignoreType",
  ImageChildrenInternalMediaType = "image___children___internal___mediaType",
  ImageChildrenInternalOwner = "image___children___internal___owner",
  ImageChildrenInternalType = "image___children___internal___type",
  ImageChildrenParentChildren = "image___children___parent___children",
  ImageChildrenParentId = "image___children___parent___id",
  ImageContentfulId = "image___contentful_id",
  ImageCreatedAt = "image___createdAt",
  ImageDescription = "image___description",
  ImageFileContentType = "image___file___contentType",
  ImageFileDetailsSize = "image___file___details___size",
  ImageFileFileName = "image___file___fileName",
  ImageFileUrl = "image___file___url",
  ImageFilename = "image___filename",
  ImageFilesize = "image___filesize",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageGatsbyImage = "image___gatsbyImage",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageGatsbyImageData = "image___gatsbyImageData",
  ImageHeight = "image___height",
  ImageId = "image___id",
  ImageInternalContent = "image___internal___content",
  ImageInternalContentDigest = "image___internal___contentDigest",
  ImageInternalDescription = "image___internal___description",
  ImageInternalFieldOwners = "image___internal___fieldOwners",
  ImageInternalIgnoreType = "image___internal___ignoreType",
  ImageInternalMediaType = "image___internal___mediaType",
  ImageInternalOwner = "image___internal___owner",
  ImageInternalType = "image___internal___type",
  ImageMimeType = "image___mimeType",
  ImageNodeLocale = "image___node_locale",
  ImageParentChildren = "image___parent___children",
  ImageParentChildrenChildren = "image___parent___children___children",
  ImageParentChildrenId = "image___parent___children___id",
  ImageParentId = "image___parent___id",
  ImageParentInternalContent = "image___parent___internal___content",
  ImageParentInternalContentDigest = "image___parent___internal___contentDigest",
  ImageParentInternalDescription = "image___parent___internal___description",
  ImageParentInternalFieldOwners = "image___parent___internal___fieldOwners",
  ImageParentInternalIgnoreType = "image___parent___internal___ignoreType",
  ImageParentInternalMediaType = "image___parent___internal___mediaType",
  ImageParentInternalOwner = "image___parent___internal___owner",
  ImageParentInternalType = "image___parent___internal___type",
  ImageParentParentChildren = "image___parent___parent___children",
  ImageParentParentId = "image___parent___parent___id",
  ImagePlaceholderUrl = "image___placeholderUrl",
  ImagePublicUrl = "image___publicUrl",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageResizeHeight = "image___resize___height",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageResizeSrc = "image___resize___src",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageResizeWidth = "image___resize___width",
  ImageSpaceId = "image___spaceId",
  ImageSysRevision = "image___sys___revision",
  ImageSysType = "image___sys___type",
  ImageTitle = "image___title",
  ImageUpdatedAt = "image___updatedAt",
  ImageUrl = "image___url",
  ImageWidth = "image___width",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  NodeLocale = "node_locale",
  Options = "options",
  OptionsBottomBarLogoChildContentfulLinkUrlTextNodeChildren = "options___bottomBarLogo___childContentfulLinkUrlTextNode___children",
  OptionsBottomBarLogoChildContentfulLinkUrlTextNodeChildrenMdx = "options___bottomBarLogo___childContentfulLinkUrlTextNode___childrenMdx",
  OptionsBottomBarLogoChildContentfulLinkUrlTextNodeId = "options___bottomBarLogo___childContentfulLinkUrlTextNode___id",
  OptionsBottomBarLogoChildContentfulLinkUrlTextNodeUrl = "options___bottomBarLogo___childContentfulLinkUrlTextNode___url",
  OptionsBottomBarLogoChildren = "options___bottomBarLogo___children",
  OptionsBottomBarLogoChildrenContentfulLinkUrlTextNode = "options___bottomBarLogo___childrenContentfulLinkUrlTextNode",
  OptionsBottomBarLogoChildrenContentfulLinkUrlTextNodeChildren = "options___bottomBarLogo___childrenContentfulLinkUrlTextNode___children",
  OptionsBottomBarLogoChildrenContentfulLinkUrlTextNodeChildrenMdx = "options___bottomBarLogo___childrenContentfulLinkUrlTextNode___childrenMdx",
  OptionsBottomBarLogoChildrenContentfulLinkUrlTextNodeId = "options___bottomBarLogo___childrenContentfulLinkUrlTextNode___id",
  OptionsBottomBarLogoChildrenContentfulLinkUrlTextNodeUrl = "options___bottomBarLogo___childrenContentfulLinkUrlTextNode___url",
  OptionsBottomBarLogoChildrenChildren = "options___bottomBarLogo___children___children",
  OptionsBottomBarLogoChildrenId = "options___bottomBarLogo___children___id",
  OptionsBottomBarLogoContentfulId = "options___bottomBarLogo___contentful_id",
  OptionsBottomBarLogoContentfulid = "options___bottomBarLogo___contentfulid",
  OptionsBottomBarLogoCreatedAt = "options___bottomBarLogo___createdAt",
  OptionsBottomBarLogoId = "options___bottomBarLogo___id",
  OptionsBottomBarLogoImageChildren = "options___bottomBarLogo___image___children",
  OptionsBottomBarLogoImageContentfulId = "options___bottomBarLogo___image___contentful_id",
  OptionsBottomBarLogoImageCreatedAt = "options___bottomBarLogo___image___createdAt",
  OptionsBottomBarLogoImageDescription = "options___bottomBarLogo___image___description",
  OptionsBottomBarLogoImageFilename = "options___bottomBarLogo___image___filename",
  OptionsBottomBarLogoImageFilesize = "options___bottomBarLogo___image___filesize",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  OptionsBottomBarLogoImageGatsbyImage = "options___bottomBarLogo___image___gatsbyImage",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  OptionsBottomBarLogoImageGatsbyImageData = "options___bottomBarLogo___image___gatsbyImageData",
  OptionsBottomBarLogoImageHeight = "options___bottomBarLogo___image___height",
  OptionsBottomBarLogoImageId = "options___bottomBarLogo___image___id",
  OptionsBottomBarLogoImageMimeType = "options___bottomBarLogo___image___mimeType",
  OptionsBottomBarLogoImageNodeLocale = "options___bottomBarLogo___image___node_locale",
  OptionsBottomBarLogoImagePlaceholderUrl = "options___bottomBarLogo___image___placeholderUrl",
  OptionsBottomBarLogoImagePublicUrl = "options___bottomBarLogo___image___publicUrl",
  OptionsBottomBarLogoImageSpaceId = "options___bottomBarLogo___image___spaceId",
  OptionsBottomBarLogoImageTitle = "options___bottomBarLogo___image___title",
  OptionsBottomBarLogoImageUpdatedAt = "options___bottomBarLogo___image___updatedAt",
  OptionsBottomBarLogoImageUrl = "options___bottomBarLogo___image___url",
  OptionsBottomBarLogoImageWidth = "options___bottomBarLogo___image___width",
  OptionsBottomBarLogoInternalContent = "options___bottomBarLogo___internal___content",
  OptionsBottomBarLogoInternalContentDigest = "options___bottomBarLogo___internal___contentDigest",
  OptionsBottomBarLogoInternalDescription = "options___bottomBarLogo___internal___description",
  OptionsBottomBarLogoInternalFieldOwners = "options___bottomBarLogo___internal___fieldOwners",
  OptionsBottomBarLogoInternalIgnoreType = "options___bottomBarLogo___internal___ignoreType",
  OptionsBottomBarLogoInternalMediaType = "options___bottomBarLogo___internal___mediaType",
  OptionsBottomBarLogoInternalOwner = "options___bottomBarLogo___internal___owner",
  OptionsBottomBarLogoInternalType = "options___bottomBarLogo___internal___type",
  OptionsBottomBarLogoNodeLocale = "options___bottomBarLogo___node_locale",
  OptionsBottomBarLogoOptions = "options___bottomBarLogo___options",
  OptionsBottomBarLogoOptionsBottomBarSocialLinks = "options___bottomBarLogo___options___bottomBarSocialLinks",
  OptionsBottomBarLogoOptionsBottomBarTabs = "options___bottomBarLogo___options___bottomBarTabs",
  OptionsBottomBarLogoOptionsChildren = "options___bottomBarLogo___options___children",
  OptionsBottomBarLogoOptionsContentfulId = "options___bottomBarLogo___options___contentful_id",
  OptionsBottomBarLogoOptionsContentfulid = "options___bottomBarLogo___options___contentfulid",
  OptionsBottomBarLogoOptionsCreatedAt = "options___bottomBarLogo___options___createdAt",
  OptionsBottomBarLogoOptionsId = "options___bottomBarLogo___options___id",
  OptionsBottomBarLogoOptionsNodeLocale = "options___bottomBarLogo___options___node_locale",
  OptionsBottomBarLogoOptionsSpaceId = "options___bottomBarLogo___options___spaceId",
  OptionsBottomBarLogoOptionsTopBarSocialLinks = "options___bottomBarLogo___options___topBarSocialLinks",
  OptionsBottomBarLogoOptionsTopBarTabs = "options___bottomBarLogo___options___topBarTabs",
  OptionsBottomBarLogoOptionsUpdatedAt = "options___bottomBarLogo___options___updatedAt",
  OptionsBottomBarLogoParentChildren = "options___bottomBarLogo___parent___children",
  OptionsBottomBarLogoParentId = "options___bottomBarLogo___parent___id",
  OptionsBottomBarLogoSpaceId = "options___bottomBarLogo___spaceId",
  OptionsBottomBarLogoSysRevision = "options___bottomBarLogo___sys___revision",
  OptionsBottomBarLogoSysType = "options___bottomBarLogo___sys___type",
  OptionsBottomBarLogoTitle = "options___bottomBarLogo___title",
  OptionsBottomBarLogoUpdatedAt = "options___bottomBarLogo___updatedAt",
  OptionsBottomBarLogoUrlChildren = "options___bottomBarLogo___url___children",
  OptionsBottomBarLogoUrlChildrenMdx = "options___bottomBarLogo___url___childrenMdx",
  OptionsBottomBarLogoUrlId = "options___bottomBarLogo___url___id",
  OptionsBottomBarLogoUrlUrl = "options___bottomBarLogo___url___url",
  OptionsBottomBarSocialLinks = "options___bottomBarSocialLinks",
  OptionsBottomBarSocialLinksChildContentfulLinkUrlTextNodeChildren = "options___bottomBarSocialLinks___childContentfulLinkUrlTextNode___children",
  OptionsBottomBarSocialLinksChildContentfulLinkUrlTextNodeChildrenMdx = "options___bottomBarSocialLinks___childContentfulLinkUrlTextNode___childrenMdx",
  OptionsBottomBarSocialLinksChildContentfulLinkUrlTextNodeId = "options___bottomBarSocialLinks___childContentfulLinkUrlTextNode___id",
  OptionsBottomBarSocialLinksChildContentfulLinkUrlTextNodeUrl = "options___bottomBarSocialLinks___childContentfulLinkUrlTextNode___url",
  OptionsBottomBarSocialLinksChildren = "options___bottomBarSocialLinks___children",
  OptionsBottomBarSocialLinksChildrenContentfulLinkUrlTextNode = "options___bottomBarSocialLinks___childrenContentfulLinkUrlTextNode",
  OptionsBottomBarSocialLinksChildrenContentfulLinkUrlTextNodeChildren = "options___bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___children",
  OptionsBottomBarSocialLinksChildrenContentfulLinkUrlTextNodeChildrenMdx = "options___bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___childrenMdx",
  OptionsBottomBarSocialLinksChildrenContentfulLinkUrlTextNodeId = "options___bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___id",
  OptionsBottomBarSocialLinksChildrenContentfulLinkUrlTextNodeUrl = "options___bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___url",
  OptionsBottomBarSocialLinksChildrenChildren = "options___bottomBarSocialLinks___children___children",
  OptionsBottomBarSocialLinksChildrenId = "options___bottomBarSocialLinks___children___id",
  OptionsBottomBarSocialLinksContentfulId = "options___bottomBarSocialLinks___contentful_id",
  OptionsBottomBarSocialLinksContentfulid = "options___bottomBarSocialLinks___contentfulid",
  OptionsBottomBarSocialLinksCreatedAt = "options___bottomBarSocialLinks___createdAt",
  OptionsBottomBarSocialLinksId = "options___bottomBarSocialLinks___id",
  OptionsBottomBarSocialLinksImageChildren = "options___bottomBarSocialLinks___image___children",
  OptionsBottomBarSocialLinksImageContentfulId = "options___bottomBarSocialLinks___image___contentful_id",
  OptionsBottomBarSocialLinksImageCreatedAt = "options___bottomBarSocialLinks___image___createdAt",
  OptionsBottomBarSocialLinksImageDescription = "options___bottomBarSocialLinks___image___description",
  OptionsBottomBarSocialLinksImageFilename = "options___bottomBarSocialLinks___image___filename",
  OptionsBottomBarSocialLinksImageFilesize = "options___bottomBarSocialLinks___image___filesize",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  OptionsBottomBarSocialLinksImageGatsbyImage = "options___bottomBarSocialLinks___image___gatsbyImage",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  OptionsBottomBarSocialLinksImageGatsbyImageData = "options___bottomBarSocialLinks___image___gatsbyImageData",
  OptionsBottomBarSocialLinksImageHeight = "options___bottomBarSocialLinks___image___height",
  OptionsBottomBarSocialLinksImageId = "options___bottomBarSocialLinks___image___id",
  OptionsBottomBarSocialLinksImageMimeType = "options___bottomBarSocialLinks___image___mimeType",
  OptionsBottomBarSocialLinksImageNodeLocale = "options___bottomBarSocialLinks___image___node_locale",
  OptionsBottomBarSocialLinksImagePlaceholderUrl = "options___bottomBarSocialLinks___image___placeholderUrl",
  OptionsBottomBarSocialLinksImagePublicUrl = "options___bottomBarSocialLinks___image___publicUrl",
  OptionsBottomBarSocialLinksImageSpaceId = "options___bottomBarSocialLinks___image___spaceId",
  OptionsBottomBarSocialLinksImageTitle = "options___bottomBarSocialLinks___image___title",
  OptionsBottomBarSocialLinksImageUpdatedAt = "options___bottomBarSocialLinks___image___updatedAt",
  OptionsBottomBarSocialLinksImageUrl = "options___bottomBarSocialLinks___image___url",
  OptionsBottomBarSocialLinksImageWidth = "options___bottomBarSocialLinks___image___width",
  OptionsBottomBarSocialLinksInternalContent = "options___bottomBarSocialLinks___internal___content",
  OptionsBottomBarSocialLinksInternalContentDigest = "options___bottomBarSocialLinks___internal___contentDigest",
  OptionsBottomBarSocialLinksInternalDescription = "options___bottomBarSocialLinks___internal___description",
  OptionsBottomBarSocialLinksInternalFieldOwners = "options___bottomBarSocialLinks___internal___fieldOwners",
  OptionsBottomBarSocialLinksInternalIgnoreType = "options___bottomBarSocialLinks___internal___ignoreType",
  OptionsBottomBarSocialLinksInternalMediaType = "options___bottomBarSocialLinks___internal___mediaType",
  OptionsBottomBarSocialLinksInternalOwner = "options___bottomBarSocialLinks___internal___owner",
  OptionsBottomBarSocialLinksInternalType = "options___bottomBarSocialLinks___internal___type",
  OptionsBottomBarSocialLinksNodeLocale = "options___bottomBarSocialLinks___node_locale",
  OptionsBottomBarSocialLinksOptions = "options___bottomBarSocialLinks___options",
  OptionsBottomBarSocialLinksOptionsBottomBarSocialLinks = "options___bottomBarSocialLinks___options___bottomBarSocialLinks",
  OptionsBottomBarSocialLinksOptionsBottomBarTabs = "options___bottomBarSocialLinks___options___bottomBarTabs",
  OptionsBottomBarSocialLinksOptionsChildren = "options___bottomBarSocialLinks___options___children",
  OptionsBottomBarSocialLinksOptionsContentfulId = "options___bottomBarSocialLinks___options___contentful_id",
  OptionsBottomBarSocialLinksOptionsContentfulid = "options___bottomBarSocialLinks___options___contentfulid",
  OptionsBottomBarSocialLinksOptionsCreatedAt = "options___bottomBarSocialLinks___options___createdAt",
  OptionsBottomBarSocialLinksOptionsId = "options___bottomBarSocialLinks___options___id",
  OptionsBottomBarSocialLinksOptionsNodeLocale = "options___bottomBarSocialLinks___options___node_locale",
  OptionsBottomBarSocialLinksOptionsSpaceId = "options___bottomBarSocialLinks___options___spaceId",
  OptionsBottomBarSocialLinksOptionsTopBarSocialLinks = "options___bottomBarSocialLinks___options___topBarSocialLinks",
  OptionsBottomBarSocialLinksOptionsTopBarTabs = "options___bottomBarSocialLinks___options___topBarTabs",
  OptionsBottomBarSocialLinksOptionsUpdatedAt = "options___bottomBarSocialLinks___options___updatedAt",
  OptionsBottomBarSocialLinksParentChildren = "options___bottomBarSocialLinks___parent___children",
  OptionsBottomBarSocialLinksParentId = "options___bottomBarSocialLinks___parent___id",
  OptionsBottomBarSocialLinksSpaceId = "options___bottomBarSocialLinks___spaceId",
  OptionsBottomBarSocialLinksSysRevision = "options___bottomBarSocialLinks___sys___revision",
  OptionsBottomBarSocialLinksSysType = "options___bottomBarSocialLinks___sys___type",
  OptionsBottomBarSocialLinksTitle = "options___bottomBarSocialLinks___title",
  OptionsBottomBarSocialLinksUpdatedAt = "options___bottomBarSocialLinks___updatedAt",
  OptionsBottomBarSocialLinksUrlChildren = "options___bottomBarSocialLinks___url___children",
  OptionsBottomBarSocialLinksUrlChildrenMdx = "options___bottomBarSocialLinks___url___childrenMdx",
  OptionsBottomBarSocialLinksUrlId = "options___bottomBarSocialLinks___url___id",
  OptionsBottomBarSocialLinksUrlUrl = "options___bottomBarSocialLinks___url___url",
  OptionsBottomBarTabs = "options___bottomBarTabs",
  OptionsBottomBarTabsChildContentfulLinkUrlTextNodeChildren = "options___bottomBarTabs___childContentfulLinkUrlTextNode___children",
  OptionsBottomBarTabsChildContentfulLinkUrlTextNodeChildrenMdx = "options___bottomBarTabs___childContentfulLinkUrlTextNode___childrenMdx",
  OptionsBottomBarTabsChildContentfulLinkUrlTextNodeId = "options___bottomBarTabs___childContentfulLinkUrlTextNode___id",
  OptionsBottomBarTabsChildContentfulLinkUrlTextNodeUrl = "options___bottomBarTabs___childContentfulLinkUrlTextNode___url",
  OptionsBottomBarTabsChildren = "options___bottomBarTabs___children",
  OptionsBottomBarTabsChildrenContentfulLinkUrlTextNode = "options___bottomBarTabs___childrenContentfulLinkUrlTextNode",
  OptionsBottomBarTabsChildrenContentfulLinkUrlTextNodeChildren = "options___bottomBarTabs___childrenContentfulLinkUrlTextNode___children",
  OptionsBottomBarTabsChildrenContentfulLinkUrlTextNodeChildrenMdx = "options___bottomBarTabs___childrenContentfulLinkUrlTextNode___childrenMdx",
  OptionsBottomBarTabsChildrenContentfulLinkUrlTextNodeId = "options___bottomBarTabs___childrenContentfulLinkUrlTextNode___id",
  OptionsBottomBarTabsChildrenContentfulLinkUrlTextNodeUrl = "options___bottomBarTabs___childrenContentfulLinkUrlTextNode___url",
  OptionsBottomBarTabsChildrenChildren = "options___bottomBarTabs___children___children",
  OptionsBottomBarTabsChildrenId = "options___bottomBarTabs___children___id",
  OptionsBottomBarTabsContentfulId = "options___bottomBarTabs___contentful_id",
  OptionsBottomBarTabsContentfulid = "options___bottomBarTabs___contentfulid",
  OptionsBottomBarTabsCreatedAt = "options___bottomBarTabs___createdAt",
  OptionsBottomBarTabsId = "options___bottomBarTabs___id",
  OptionsBottomBarTabsImageChildren = "options___bottomBarTabs___image___children",
  OptionsBottomBarTabsImageContentfulId = "options___bottomBarTabs___image___contentful_id",
  OptionsBottomBarTabsImageCreatedAt = "options___bottomBarTabs___image___createdAt",
  OptionsBottomBarTabsImageDescription = "options___bottomBarTabs___image___description",
  OptionsBottomBarTabsImageFilename = "options___bottomBarTabs___image___filename",
  OptionsBottomBarTabsImageFilesize = "options___bottomBarTabs___image___filesize",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  OptionsBottomBarTabsImageGatsbyImage = "options___bottomBarTabs___image___gatsbyImage",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  OptionsBottomBarTabsImageGatsbyImageData = "options___bottomBarTabs___image___gatsbyImageData",
  OptionsBottomBarTabsImageHeight = "options___bottomBarTabs___image___height",
  OptionsBottomBarTabsImageId = "options___bottomBarTabs___image___id",
  OptionsBottomBarTabsImageMimeType = "options___bottomBarTabs___image___mimeType",
  OptionsBottomBarTabsImageNodeLocale = "options___bottomBarTabs___image___node_locale",
  OptionsBottomBarTabsImagePlaceholderUrl = "options___bottomBarTabs___image___placeholderUrl",
  OptionsBottomBarTabsImagePublicUrl = "options___bottomBarTabs___image___publicUrl",
  OptionsBottomBarTabsImageSpaceId = "options___bottomBarTabs___image___spaceId",
  OptionsBottomBarTabsImageTitle = "options___bottomBarTabs___image___title",
  OptionsBottomBarTabsImageUpdatedAt = "options___bottomBarTabs___image___updatedAt",
  OptionsBottomBarTabsImageUrl = "options___bottomBarTabs___image___url",
  OptionsBottomBarTabsImageWidth = "options___bottomBarTabs___image___width",
  OptionsBottomBarTabsInternalContent = "options___bottomBarTabs___internal___content",
  OptionsBottomBarTabsInternalContentDigest = "options___bottomBarTabs___internal___contentDigest",
  OptionsBottomBarTabsInternalDescription = "options___bottomBarTabs___internal___description",
  OptionsBottomBarTabsInternalFieldOwners = "options___bottomBarTabs___internal___fieldOwners",
  OptionsBottomBarTabsInternalIgnoreType = "options___bottomBarTabs___internal___ignoreType",
  OptionsBottomBarTabsInternalMediaType = "options___bottomBarTabs___internal___mediaType",
  OptionsBottomBarTabsInternalOwner = "options___bottomBarTabs___internal___owner",
  OptionsBottomBarTabsInternalType = "options___bottomBarTabs___internal___type",
  OptionsBottomBarTabsNodeLocale = "options___bottomBarTabs___node_locale",
  OptionsBottomBarTabsOptions = "options___bottomBarTabs___options",
  OptionsBottomBarTabsOptionsBottomBarSocialLinks = "options___bottomBarTabs___options___bottomBarSocialLinks",
  OptionsBottomBarTabsOptionsBottomBarTabs = "options___bottomBarTabs___options___bottomBarTabs",
  OptionsBottomBarTabsOptionsChildren = "options___bottomBarTabs___options___children",
  OptionsBottomBarTabsOptionsContentfulId = "options___bottomBarTabs___options___contentful_id",
  OptionsBottomBarTabsOptionsContentfulid = "options___bottomBarTabs___options___contentfulid",
  OptionsBottomBarTabsOptionsCreatedAt = "options___bottomBarTabs___options___createdAt",
  OptionsBottomBarTabsOptionsId = "options___bottomBarTabs___options___id",
  OptionsBottomBarTabsOptionsNodeLocale = "options___bottomBarTabs___options___node_locale",
  OptionsBottomBarTabsOptionsSpaceId = "options___bottomBarTabs___options___spaceId",
  OptionsBottomBarTabsOptionsTopBarSocialLinks = "options___bottomBarTabs___options___topBarSocialLinks",
  OptionsBottomBarTabsOptionsTopBarTabs = "options___bottomBarTabs___options___topBarTabs",
  OptionsBottomBarTabsOptionsUpdatedAt = "options___bottomBarTabs___options___updatedAt",
  OptionsBottomBarTabsParentChildren = "options___bottomBarTabs___parent___children",
  OptionsBottomBarTabsParentId = "options___bottomBarTabs___parent___id",
  OptionsBottomBarTabsSpaceId = "options___bottomBarTabs___spaceId",
  OptionsBottomBarTabsSysRevision = "options___bottomBarTabs___sys___revision",
  OptionsBottomBarTabsSysType = "options___bottomBarTabs___sys___type",
  OptionsBottomBarTabsTitle = "options___bottomBarTabs___title",
  OptionsBottomBarTabsUpdatedAt = "options___bottomBarTabs___updatedAt",
  OptionsBottomBarTabsUrlChildren = "options___bottomBarTabs___url___children",
  OptionsBottomBarTabsUrlChildrenMdx = "options___bottomBarTabs___url___childrenMdx",
  OptionsBottomBarTabsUrlId = "options___bottomBarTabs___url___id",
  OptionsBottomBarTabsUrlUrl = "options___bottomBarTabs___url___url",
  OptionsChildren = "options___children",
  OptionsChildrenChildren = "options___children___children",
  OptionsChildrenChildrenChildren = "options___children___children___children",
  OptionsChildrenChildrenId = "options___children___children___id",
  OptionsChildrenId = "options___children___id",
  OptionsChildrenInternalContent = "options___children___internal___content",
  OptionsChildrenInternalContentDigest = "options___children___internal___contentDigest",
  OptionsChildrenInternalDescription = "options___children___internal___description",
  OptionsChildrenInternalFieldOwners = "options___children___internal___fieldOwners",
  OptionsChildrenInternalIgnoreType = "options___children___internal___ignoreType",
  OptionsChildrenInternalMediaType = "options___children___internal___mediaType",
  OptionsChildrenInternalOwner = "options___children___internal___owner",
  OptionsChildrenInternalType = "options___children___internal___type",
  OptionsChildrenParentChildren = "options___children___parent___children",
  OptionsChildrenParentId = "options___children___parent___id",
  OptionsContentfulId = "options___contentful_id",
  OptionsContentfulid = "options___contentfulid",
  OptionsCreatedAt = "options___createdAt",
  OptionsId = "options___id",
  OptionsInternalContent = "options___internal___content",
  OptionsInternalContentDigest = "options___internal___contentDigest",
  OptionsInternalDescription = "options___internal___description",
  OptionsInternalFieldOwners = "options___internal___fieldOwners",
  OptionsInternalIgnoreType = "options___internal___ignoreType",
  OptionsInternalMediaType = "options___internal___mediaType",
  OptionsInternalOwner = "options___internal___owner",
  OptionsInternalType = "options___internal___type",
  OptionsNodeLocale = "options___node_locale",
  OptionsParentChildren = "options___parent___children",
  OptionsParentChildrenChildren = "options___parent___children___children",
  OptionsParentChildrenId = "options___parent___children___id",
  OptionsParentId = "options___parent___id",
  OptionsParentInternalContent = "options___parent___internal___content",
  OptionsParentInternalContentDigest = "options___parent___internal___contentDigest",
  OptionsParentInternalDescription = "options___parent___internal___description",
  OptionsParentInternalFieldOwners = "options___parent___internal___fieldOwners",
  OptionsParentInternalIgnoreType = "options___parent___internal___ignoreType",
  OptionsParentInternalMediaType = "options___parent___internal___mediaType",
  OptionsParentInternalOwner = "options___parent___internal___owner",
  OptionsParentInternalType = "options___parent___internal___type",
  OptionsParentParentChildren = "options___parent___parent___children",
  OptionsParentParentId = "options___parent___parent___id",
  OptionsSpaceId = "options___spaceId",
  OptionsSysRevision = "options___sys___revision",
  OptionsSysType = "options___sys___type",
  OptionsTopBarLogoChildContentfulLinkUrlTextNodeChildren = "options___topBarLogo___childContentfulLinkUrlTextNode___children",
  OptionsTopBarLogoChildContentfulLinkUrlTextNodeChildrenMdx = "options___topBarLogo___childContentfulLinkUrlTextNode___childrenMdx",
  OptionsTopBarLogoChildContentfulLinkUrlTextNodeId = "options___topBarLogo___childContentfulLinkUrlTextNode___id",
  OptionsTopBarLogoChildContentfulLinkUrlTextNodeUrl = "options___topBarLogo___childContentfulLinkUrlTextNode___url",
  OptionsTopBarLogoChildren = "options___topBarLogo___children",
  OptionsTopBarLogoChildrenContentfulLinkUrlTextNode = "options___topBarLogo___childrenContentfulLinkUrlTextNode",
  OptionsTopBarLogoChildrenContentfulLinkUrlTextNodeChildren = "options___topBarLogo___childrenContentfulLinkUrlTextNode___children",
  OptionsTopBarLogoChildrenContentfulLinkUrlTextNodeChildrenMdx = "options___topBarLogo___childrenContentfulLinkUrlTextNode___childrenMdx",
  OptionsTopBarLogoChildrenContentfulLinkUrlTextNodeId = "options___topBarLogo___childrenContentfulLinkUrlTextNode___id",
  OptionsTopBarLogoChildrenContentfulLinkUrlTextNodeUrl = "options___topBarLogo___childrenContentfulLinkUrlTextNode___url",
  OptionsTopBarLogoChildrenChildren = "options___topBarLogo___children___children",
  OptionsTopBarLogoChildrenId = "options___topBarLogo___children___id",
  OptionsTopBarLogoContentfulId = "options___topBarLogo___contentful_id",
  OptionsTopBarLogoContentfulid = "options___topBarLogo___contentfulid",
  OptionsTopBarLogoCreatedAt = "options___topBarLogo___createdAt",
  OptionsTopBarLogoId = "options___topBarLogo___id",
  OptionsTopBarLogoImageChildren = "options___topBarLogo___image___children",
  OptionsTopBarLogoImageContentfulId = "options___topBarLogo___image___contentful_id",
  OptionsTopBarLogoImageCreatedAt = "options___topBarLogo___image___createdAt",
  OptionsTopBarLogoImageDescription = "options___topBarLogo___image___description",
  OptionsTopBarLogoImageFilename = "options___topBarLogo___image___filename",
  OptionsTopBarLogoImageFilesize = "options___topBarLogo___image___filesize",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  OptionsTopBarLogoImageGatsbyImage = "options___topBarLogo___image___gatsbyImage",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  OptionsTopBarLogoImageGatsbyImageData = "options___topBarLogo___image___gatsbyImageData",
  OptionsTopBarLogoImageHeight = "options___topBarLogo___image___height",
  OptionsTopBarLogoImageId = "options___topBarLogo___image___id",
  OptionsTopBarLogoImageMimeType = "options___topBarLogo___image___mimeType",
  OptionsTopBarLogoImageNodeLocale = "options___topBarLogo___image___node_locale",
  OptionsTopBarLogoImagePlaceholderUrl = "options___topBarLogo___image___placeholderUrl",
  OptionsTopBarLogoImagePublicUrl = "options___topBarLogo___image___publicUrl",
  OptionsTopBarLogoImageSpaceId = "options___topBarLogo___image___spaceId",
  OptionsTopBarLogoImageTitle = "options___topBarLogo___image___title",
  OptionsTopBarLogoImageUpdatedAt = "options___topBarLogo___image___updatedAt",
  OptionsTopBarLogoImageUrl = "options___topBarLogo___image___url",
  OptionsTopBarLogoImageWidth = "options___topBarLogo___image___width",
  OptionsTopBarLogoInternalContent = "options___topBarLogo___internal___content",
  OptionsTopBarLogoInternalContentDigest = "options___topBarLogo___internal___contentDigest",
  OptionsTopBarLogoInternalDescription = "options___topBarLogo___internal___description",
  OptionsTopBarLogoInternalFieldOwners = "options___topBarLogo___internal___fieldOwners",
  OptionsTopBarLogoInternalIgnoreType = "options___topBarLogo___internal___ignoreType",
  OptionsTopBarLogoInternalMediaType = "options___topBarLogo___internal___mediaType",
  OptionsTopBarLogoInternalOwner = "options___topBarLogo___internal___owner",
  OptionsTopBarLogoInternalType = "options___topBarLogo___internal___type",
  OptionsTopBarLogoNodeLocale = "options___topBarLogo___node_locale",
  OptionsTopBarLogoOptions = "options___topBarLogo___options",
  OptionsTopBarLogoOptionsBottomBarSocialLinks = "options___topBarLogo___options___bottomBarSocialLinks",
  OptionsTopBarLogoOptionsBottomBarTabs = "options___topBarLogo___options___bottomBarTabs",
  OptionsTopBarLogoOptionsChildren = "options___topBarLogo___options___children",
  OptionsTopBarLogoOptionsContentfulId = "options___topBarLogo___options___contentful_id",
  OptionsTopBarLogoOptionsContentfulid = "options___topBarLogo___options___contentfulid",
  OptionsTopBarLogoOptionsCreatedAt = "options___topBarLogo___options___createdAt",
  OptionsTopBarLogoOptionsId = "options___topBarLogo___options___id",
  OptionsTopBarLogoOptionsNodeLocale = "options___topBarLogo___options___node_locale",
  OptionsTopBarLogoOptionsSpaceId = "options___topBarLogo___options___spaceId",
  OptionsTopBarLogoOptionsTopBarSocialLinks = "options___topBarLogo___options___topBarSocialLinks",
  OptionsTopBarLogoOptionsTopBarTabs = "options___topBarLogo___options___topBarTabs",
  OptionsTopBarLogoOptionsUpdatedAt = "options___topBarLogo___options___updatedAt",
  OptionsTopBarLogoParentChildren = "options___topBarLogo___parent___children",
  OptionsTopBarLogoParentId = "options___topBarLogo___parent___id",
  OptionsTopBarLogoSpaceId = "options___topBarLogo___spaceId",
  OptionsTopBarLogoSysRevision = "options___topBarLogo___sys___revision",
  OptionsTopBarLogoSysType = "options___topBarLogo___sys___type",
  OptionsTopBarLogoTitle = "options___topBarLogo___title",
  OptionsTopBarLogoUpdatedAt = "options___topBarLogo___updatedAt",
  OptionsTopBarLogoUrlChildren = "options___topBarLogo___url___children",
  OptionsTopBarLogoUrlChildrenMdx = "options___topBarLogo___url___childrenMdx",
  OptionsTopBarLogoUrlId = "options___topBarLogo___url___id",
  OptionsTopBarLogoUrlUrl = "options___topBarLogo___url___url",
  OptionsTopBarSocialLinks = "options___topBarSocialLinks",
  OptionsTopBarSocialLinksChildContentfulLinkUrlTextNodeChildren = "options___topBarSocialLinks___childContentfulLinkUrlTextNode___children",
  OptionsTopBarSocialLinksChildContentfulLinkUrlTextNodeChildrenMdx = "options___topBarSocialLinks___childContentfulLinkUrlTextNode___childrenMdx",
  OptionsTopBarSocialLinksChildContentfulLinkUrlTextNodeId = "options___topBarSocialLinks___childContentfulLinkUrlTextNode___id",
  OptionsTopBarSocialLinksChildContentfulLinkUrlTextNodeUrl = "options___topBarSocialLinks___childContentfulLinkUrlTextNode___url",
  OptionsTopBarSocialLinksChildren = "options___topBarSocialLinks___children",
  OptionsTopBarSocialLinksChildrenContentfulLinkUrlTextNode = "options___topBarSocialLinks___childrenContentfulLinkUrlTextNode",
  OptionsTopBarSocialLinksChildrenContentfulLinkUrlTextNodeChildren = "options___topBarSocialLinks___childrenContentfulLinkUrlTextNode___children",
  OptionsTopBarSocialLinksChildrenContentfulLinkUrlTextNodeChildrenMdx = "options___topBarSocialLinks___childrenContentfulLinkUrlTextNode___childrenMdx",
  OptionsTopBarSocialLinksChildrenContentfulLinkUrlTextNodeId = "options___topBarSocialLinks___childrenContentfulLinkUrlTextNode___id",
  OptionsTopBarSocialLinksChildrenContentfulLinkUrlTextNodeUrl = "options___topBarSocialLinks___childrenContentfulLinkUrlTextNode___url",
  OptionsTopBarSocialLinksChildrenChildren = "options___topBarSocialLinks___children___children",
  OptionsTopBarSocialLinksChildrenId = "options___topBarSocialLinks___children___id",
  OptionsTopBarSocialLinksContentfulId = "options___topBarSocialLinks___contentful_id",
  OptionsTopBarSocialLinksContentfulid = "options___topBarSocialLinks___contentfulid",
  OptionsTopBarSocialLinksCreatedAt = "options___topBarSocialLinks___createdAt",
  OptionsTopBarSocialLinksId = "options___topBarSocialLinks___id",
  OptionsTopBarSocialLinksImageChildren = "options___topBarSocialLinks___image___children",
  OptionsTopBarSocialLinksImageContentfulId = "options___topBarSocialLinks___image___contentful_id",
  OptionsTopBarSocialLinksImageCreatedAt = "options___topBarSocialLinks___image___createdAt",
  OptionsTopBarSocialLinksImageDescription = "options___topBarSocialLinks___image___description",
  OptionsTopBarSocialLinksImageFilename = "options___topBarSocialLinks___image___filename",
  OptionsTopBarSocialLinksImageFilesize = "options___topBarSocialLinks___image___filesize",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  OptionsTopBarSocialLinksImageGatsbyImage = "options___topBarSocialLinks___image___gatsbyImage",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  OptionsTopBarSocialLinksImageGatsbyImageData = "options___topBarSocialLinks___image___gatsbyImageData",
  OptionsTopBarSocialLinksImageHeight = "options___topBarSocialLinks___image___height",
  OptionsTopBarSocialLinksImageId = "options___topBarSocialLinks___image___id",
  OptionsTopBarSocialLinksImageMimeType = "options___topBarSocialLinks___image___mimeType",
  OptionsTopBarSocialLinksImageNodeLocale = "options___topBarSocialLinks___image___node_locale",
  OptionsTopBarSocialLinksImagePlaceholderUrl = "options___topBarSocialLinks___image___placeholderUrl",
  OptionsTopBarSocialLinksImagePublicUrl = "options___topBarSocialLinks___image___publicUrl",
  OptionsTopBarSocialLinksImageSpaceId = "options___topBarSocialLinks___image___spaceId",
  OptionsTopBarSocialLinksImageTitle = "options___topBarSocialLinks___image___title",
  OptionsTopBarSocialLinksImageUpdatedAt = "options___topBarSocialLinks___image___updatedAt",
  OptionsTopBarSocialLinksImageUrl = "options___topBarSocialLinks___image___url",
  OptionsTopBarSocialLinksImageWidth = "options___topBarSocialLinks___image___width",
  OptionsTopBarSocialLinksInternalContent = "options___topBarSocialLinks___internal___content",
  OptionsTopBarSocialLinksInternalContentDigest = "options___topBarSocialLinks___internal___contentDigest",
  OptionsTopBarSocialLinksInternalDescription = "options___topBarSocialLinks___internal___description",
  OptionsTopBarSocialLinksInternalFieldOwners = "options___topBarSocialLinks___internal___fieldOwners",
  OptionsTopBarSocialLinksInternalIgnoreType = "options___topBarSocialLinks___internal___ignoreType",
  OptionsTopBarSocialLinksInternalMediaType = "options___topBarSocialLinks___internal___mediaType",
  OptionsTopBarSocialLinksInternalOwner = "options___topBarSocialLinks___internal___owner",
  OptionsTopBarSocialLinksInternalType = "options___topBarSocialLinks___internal___type",
  OptionsTopBarSocialLinksNodeLocale = "options___topBarSocialLinks___node_locale",
  OptionsTopBarSocialLinksOptions = "options___topBarSocialLinks___options",
  OptionsTopBarSocialLinksOptionsBottomBarSocialLinks = "options___topBarSocialLinks___options___bottomBarSocialLinks",
  OptionsTopBarSocialLinksOptionsBottomBarTabs = "options___topBarSocialLinks___options___bottomBarTabs",
  OptionsTopBarSocialLinksOptionsChildren = "options___topBarSocialLinks___options___children",
  OptionsTopBarSocialLinksOptionsContentfulId = "options___topBarSocialLinks___options___contentful_id",
  OptionsTopBarSocialLinksOptionsContentfulid = "options___topBarSocialLinks___options___contentfulid",
  OptionsTopBarSocialLinksOptionsCreatedAt = "options___topBarSocialLinks___options___createdAt",
  OptionsTopBarSocialLinksOptionsId = "options___topBarSocialLinks___options___id",
  OptionsTopBarSocialLinksOptionsNodeLocale = "options___topBarSocialLinks___options___node_locale",
  OptionsTopBarSocialLinksOptionsSpaceId = "options___topBarSocialLinks___options___spaceId",
  OptionsTopBarSocialLinksOptionsTopBarSocialLinks = "options___topBarSocialLinks___options___topBarSocialLinks",
  OptionsTopBarSocialLinksOptionsTopBarTabs = "options___topBarSocialLinks___options___topBarTabs",
  OptionsTopBarSocialLinksOptionsUpdatedAt = "options___topBarSocialLinks___options___updatedAt",
  OptionsTopBarSocialLinksParentChildren = "options___topBarSocialLinks___parent___children",
  OptionsTopBarSocialLinksParentId = "options___topBarSocialLinks___parent___id",
  OptionsTopBarSocialLinksSpaceId = "options___topBarSocialLinks___spaceId",
  OptionsTopBarSocialLinksSysRevision = "options___topBarSocialLinks___sys___revision",
  OptionsTopBarSocialLinksSysType = "options___topBarSocialLinks___sys___type",
  OptionsTopBarSocialLinksTitle = "options___topBarSocialLinks___title",
  OptionsTopBarSocialLinksUpdatedAt = "options___topBarSocialLinks___updatedAt",
  OptionsTopBarSocialLinksUrlChildren = "options___topBarSocialLinks___url___children",
  OptionsTopBarSocialLinksUrlChildrenMdx = "options___topBarSocialLinks___url___childrenMdx",
  OptionsTopBarSocialLinksUrlId = "options___topBarSocialLinks___url___id",
  OptionsTopBarSocialLinksUrlUrl = "options___topBarSocialLinks___url___url",
  OptionsTopBarTabs = "options___topBarTabs",
  OptionsTopBarTabsChildContentfulLinkUrlTextNodeChildren = "options___topBarTabs___childContentfulLinkUrlTextNode___children",
  OptionsTopBarTabsChildContentfulLinkUrlTextNodeChildrenMdx = "options___topBarTabs___childContentfulLinkUrlTextNode___childrenMdx",
  OptionsTopBarTabsChildContentfulLinkUrlTextNodeId = "options___topBarTabs___childContentfulLinkUrlTextNode___id",
  OptionsTopBarTabsChildContentfulLinkUrlTextNodeUrl = "options___topBarTabs___childContentfulLinkUrlTextNode___url",
  OptionsTopBarTabsChildren = "options___topBarTabs___children",
  OptionsTopBarTabsChildrenContentfulLinkUrlTextNode = "options___topBarTabs___childrenContentfulLinkUrlTextNode",
  OptionsTopBarTabsChildrenContentfulLinkUrlTextNodeChildren = "options___topBarTabs___childrenContentfulLinkUrlTextNode___children",
  OptionsTopBarTabsChildrenContentfulLinkUrlTextNodeChildrenMdx = "options___topBarTabs___childrenContentfulLinkUrlTextNode___childrenMdx",
  OptionsTopBarTabsChildrenContentfulLinkUrlTextNodeId = "options___topBarTabs___childrenContentfulLinkUrlTextNode___id",
  OptionsTopBarTabsChildrenContentfulLinkUrlTextNodeUrl = "options___topBarTabs___childrenContentfulLinkUrlTextNode___url",
  OptionsTopBarTabsChildrenChildren = "options___topBarTabs___children___children",
  OptionsTopBarTabsChildrenId = "options___topBarTabs___children___id",
  OptionsTopBarTabsContentfulId = "options___topBarTabs___contentful_id",
  OptionsTopBarTabsContentfulid = "options___topBarTabs___contentfulid",
  OptionsTopBarTabsCreatedAt = "options___topBarTabs___createdAt",
  OptionsTopBarTabsId = "options___topBarTabs___id",
  OptionsTopBarTabsImageChildren = "options___topBarTabs___image___children",
  OptionsTopBarTabsImageContentfulId = "options___topBarTabs___image___contentful_id",
  OptionsTopBarTabsImageCreatedAt = "options___topBarTabs___image___createdAt",
  OptionsTopBarTabsImageDescription = "options___topBarTabs___image___description",
  OptionsTopBarTabsImageFilename = "options___topBarTabs___image___filename",
  OptionsTopBarTabsImageFilesize = "options___topBarTabs___image___filesize",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  OptionsTopBarTabsImageGatsbyImage = "options___topBarTabs___image___gatsbyImage",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  OptionsTopBarTabsImageGatsbyImageData = "options___topBarTabs___image___gatsbyImageData",
  OptionsTopBarTabsImageHeight = "options___topBarTabs___image___height",
  OptionsTopBarTabsImageId = "options___topBarTabs___image___id",
  OptionsTopBarTabsImageMimeType = "options___topBarTabs___image___mimeType",
  OptionsTopBarTabsImageNodeLocale = "options___topBarTabs___image___node_locale",
  OptionsTopBarTabsImagePlaceholderUrl = "options___topBarTabs___image___placeholderUrl",
  OptionsTopBarTabsImagePublicUrl = "options___topBarTabs___image___publicUrl",
  OptionsTopBarTabsImageSpaceId = "options___topBarTabs___image___spaceId",
  OptionsTopBarTabsImageTitle = "options___topBarTabs___image___title",
  OptionsTopBarTabsImageUpdatedAt = "options___topBarTabs___image___updatedAt",
  OptionsTopBarTabsImageUrl = "options___topBarTabs___image___url",
  OptionsTopBarTabsImageWidth = "options___topBarTabs___image___width",
  OptionsTopBarTabsInternalContent = "options___topBarTabs___internal___content",
  OptionsTopBarTabsInternalContentDigest = "options___topBarTabs___internal___contentDigest",
  OptionsTopBarTabsInternalDescription = "options___topBarTabs___internal___description",
  OptionsTopBarTabsInternalFieldOwners = "options___topBarTabs___internal___fieldOwners",
  OptionsTopBarTabsInternalIgnoreType = "options___topBarTabs___internal___ignoreType",
  OptionsTopBarTabsInternalMediaType = "options___topBarTabs___internal___mediaType",
  OptionsTopBarTabsInternalOwner = "options___topBarTabs___internal___owner",
  OptionsTopBarTabsInternalType = "options___topBarTabs___internal___type",
  OptionsTopBarTabsNodeLocale = "options___topBarTabs___node_locale",
  OptionsTopBarTabsOptions = "options___topBarTabs___options",
  OptionsTopBarTabsOptionsBottomBarSocialLinks = "options___topBarTabs___options___bottomBarSocialLinks",
  OptionsTopBarTabsOptionsBottomBarTabs = "options___topBarTabs___options___bottomBarTabs",
  OptionsTopBarTabsOptionsChildren = "options___topBarTabs___options___children",
  OptionsTopBarTabsOptionsContentfulId = "options___topBarTabs___options___contentful_id",
  OptionsTopBarTabsOptionsContentfulid = "options___topBarTabs___options___contentfulid",
  OptionsTopBarTabsOptionsCreatedAt = "options___topBarTabs___options___createdAt",
  OptionsTopBarTabsOptionsId = "options___topBarTabs___options___id",
  OptionsTopBarTabsOptionsNodeLocale = "options___topBarTabs___options___node_locale",
  OptionsTopBarTabsOptionsSpaceId = "options___topBarTabs___options___spaceId",
  OptionsTopBarTabsOptionsTopBarSocialLinks = "options___topBarTabs___options___topBarSocialLinks",
  OptionsTopBarTabsOptionsTopBarTabs = "options___topBarTabs___options___topBarTabs",
  OptionsTopBarTabsOptionsUpdatedAt = "options___topBarTabs___options___updatedAt",
  OptionsTopBarTabsParentChildren = "options___topBarTabs___parent___children",
  OptionsTopBarTabsParentId = "options___topBarTabs___parent___id",
  OptionsTopBarTabsSpaceId = "options___topBarTabs___spaceId",
  OptionsTopBarTabsSysRevision = "options___topBarTabs___sys___revision",
  OptionsTopBarTabsSysType = "options___topBarTabs___sys___type",
  OptionsTopBarTabsTitle = "options___topBarTabs___title",
  OptionsTopBarTabsUpdatedAt = "options___topBarTabs___updatedAt",
  OptionsTopBarTabsUrlChildren = "options___topBarTabs___url___children",
  OptionsTopBarTabsUrlChildrenMdx = "options___topBarTabs___url___childrenMdx",
  OptionsTopBarTabsUrlId = "options___topBarTabs___url___id",
  OptionsTopBarTabsUrlUrl = "options___topBarTabs___url___url",
  OptionsUpdatedAt = "options___updatedAt",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  SpaceId = "spaceId",
  SysContentTypeSysId = "sys___contentType___sys___id",
  SysContentTypeSysLinkType = "sys___contentType___sys___linkType",
  SysContentTypeSysType = "sys___contentType___sys___type",
  SysRevision = "sys___revision",
  SysType = "sys___type",
  Title = "title",
  UpdatedAt = "updatedAt",
  UrlChildMdxBody = "url___childMdx___body",
  UrlChildMdxChildren = "url___childMdx___children",
  UrlChildMdxChildrenChildren = "url___childMdx___children___children",
  UrlChildMdxChildrenId = "url___childMdx___children___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  UrlChildMdxExcerpt = "url___childMdx___excerpt",
  UrlChildMdxFileAbsolutePath = "url___childMdx___fileAbsolutePath",
  UrlChildMdxFrontmatterTitle = "url___childMdx___frontmatter___title",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  UrlChildMdxHeadings = "url___childMdx___headings",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  UrlChildMdxHeadingsDepth = "url___childMdx___headings___depth",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  UrlChildMdxHeadingsValue = "url___childMdx___headings___value",
  UrlChildMdxHtml = "url___childMdx___html",
  UrlChildMdxId = "url___childMdx___id",
  UrlChildMdxInternalContent = "url___childMdx___internal___content",
  UrlChildMdxInternalContentDigest = "url___childMdx___internal___contentDigest",
  UrlChildMdxInternalDescription = "url___childMdx___internal___description",
  UrlChildMdxInternalFieldOwners = "url___childMdx___internal___fieldOwners",
  UrlChildMdxInternalIgnoreType = "url___childMdx___internal___ignoreType",
  UrlChildMdxInternalMediaType = "url___childMdx___internal___mediaType",
  UrlChildMdxInternalOwner = "url___childMdx___internal___owner",
  UrlChildMdxInternalType = "url___childMdx___internal___type",
  UrlChildMdxMdxAst = "url___childMdx___mdxAST",
  UrlChildMdxParentChildren = "url___childMdx___parent___children",
  UrlChildMdxParentId = "url___childMdx___parent___id",
  UrlChildMdxRawBody = "url___childMdx___rawBody",
  UrlChildMdxSlug = "url___childMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  UrlChildMdxTableOfContents = "url___childMdx___tableOfContents",
  UrlChildMdxTimeToRead = "url___childMdx___timeToRead",
  UrlChildMdxWordCountParagraphs = "url___childMdx___wordCount___paragraphs",
  UrlChildMdxWordCountSentences = "url___childMdx___wordCount___sentences",
  UrlChildMdxWordCountWords = "url___childMdx___wordCount___words",
  UrlChildren = "url___children",
  UrlChildrenMdx = "url___childrenMdx",
  UrlChildrenMdxBody = "url___childrenMdx___body",
  UrlChildrenMdxChildren = "url___childrenMdx___children",
  UrlChildrenMdxChildrenChildren = "url___childrenMdx___children___children",
  UrlChildrenMdxChildrenId = "url___childrenMdx___children___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  UrlChildrenMdxExcerpt = "url___childrenMdx___excerpt",
  UrlChildrenMdxFileAbsolutePath = "url___childrenMdx___fileAbsolutePath",
  UrlChildrenMdxFrontmatterTitle = "url___childrenMdx___frontmatter___title",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  UrlChildrenMdxHeadings = "url___childrenMdx___headings",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  UrlChildrenMdxHeadingsDepth = "url___childrenMdx___headings___depth",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  UrlChildrenMdxHeadingsValue = "url___childrenMdx___headings___value",
  UrlChildrenMdxHtml = "url___childrenMdx___html",
  UrlChildrenMdxId = "url___childrenMdx___id",
  UrlChildrenMdxInternalContent = "url___childrenMdx___internal___content",
  UrlChildrenMdxInternalContentDigest = "url___childrenMdx___internal___contentDigest",
  UrlChildrenMdxInternalDescription = "url___childrenMdx___internal___description",
  UrlChildrenMdxInternalFieldOwners = "url___childrenMdx___internal___fieldOwners",
  UrlChildrenMdxInternalIgnoreType = "url___childrenMdx___internal___ignoreType",
  UrlChildrenMdxInternalMediaType = "url___childrenMdx___internal___mediaType",
  UrlChildrenMdxInternalOwner = "url___childrenMdx___internal___owner",
  UrlChildrenMdxInternalType = "url___childrenMdx___internal___type",
  UrlChildrenMdxMdxAst = "url___childrenMdx___mdxAST",
  UrlChildrenMdxParentChildren = "url___childrenMdx___parent___children",
  UrlChildrenMdxParentId = "url___childrenMdx___parent___id",
  UrlChildrenMdxRawBody = "url___childrenMdx___rawBody",
  UrlChildrenMdxSlug = "url___childrenMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  UrlChildrenMdxTableOfContents = "url___childrenMdx___tableOfContents",
  UrlChildrenMdxTimeToRead = "url___childrenMdx___timeToRead",
  UrlChildrenMdxWordCountParagraphs = "url___childrenMdx___wordCount___paragraphs",
  UrlChildrenMdxWordCountSentences = "url___childrenMdx___wordCount___sentences",
  UrlChildrenMdxWordCountWords = "url___childrenMdx___wordCount___words",
  UrlChildrenChildren = "url___children___children",
  UrlChildrenChildrenChildren = "url___children___children___children",
  UrlChildrenChildrenId = "url___children___children___id",
  UrlChildrenId = "url___children___id",
  UrlChildrenInternalContent = "url___children___internal___content",
  UrlChildrenInternalContentDigest = "url___children___internal___contentDigest",
  UrlChildrenInternalDescription = "url___children___internal___description",
  UrlChildrenInternalFieldOwners = "url___children___internal___fieldOwners",
  UrlChildrenInternalIgnoreType = "url___children___internal___ignoreType",
  UrlChildrenInternalMediaType = "url___children___internal___mediaType",
  UrlChildrenInternalOwner = "url___children___internal___owner",
  UrlChildrenInternalType = "url___children___internal___type",
  UrlChildrenParentChildren = "url___children___parent___children",
  UrlChildrenParentId = "url___children___parent___id",
  UrlId = "url___id",
  UrlInternalContent = "url___internal___content",
  UrlInternalContentDigest = "url___internal___contentDigest",
  UrlInternalDescription = "url___internal___description",
  UrlInternalFieldOwners = "url___internal___fieldOwners",
  UrlInternalIgnoreType = "url___internal___ignoreType",
  UrlInternalMediaType = "url___internal___mediaType",
  UrlInternalOwner = "url___internal___owner",
  UrlInternalType = "url___internal___type",
  UrlParentChildren = "url___parent___children",
  UrlParentChildrenChildren = "url___parent___children___children",
  UrlParentChildrenId = "url___parent___children___id",
  UrlParentId = "url___parent___id",
  UrlParentInternalContent = "url___parent___internal___content",
  UrlParentInternalContentDigest = "url___parent___internal___contentDigest",
  UrlParentInternalDescription = "url___parent___internal___description",
  UrlParentInternalFieldOwners = "url___parent___internal___fieldOwners",
  UrlParentInternalIgnoreType = "url___parent___internal___ignoreType",
  UrlParentInternalMediaType = "url___parent___internal___mediaType",
  UrlParentInternalOwner = "url___parent___internal___owner",
  UrlParentInternalType = "url___parent___internal___type",
  UrlParentParentChildren = "url___parent___parent___children",
  UrlParentParentId = "url___parent___parent___id",
  UrlSysType = "url___sys___type",
  UrlUrl = "url___url",
}

export type ContentfulLinkFilterInput = {
  childContentfulLinkUrlTextNode?: InputMaybe<ContentfulLinkUrlTextNodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenContentfulLinkUrlTextNode?: InputMaybe<ContentfulLinkUrlTextNodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  contentfulid?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<ContentfulAssetFilterInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  options?: InputMaybe<ContentfulOptionsFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulLinkSysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  url?: InputMaybe<ContentfulLinkUrlTextNodeFilterInput>;
};

export type ContentfulLinkFilterListInput = {
  elemMatch?: InputMaybe<ContentfulLinkFilterInput>;
};

export type ContentfulLinkGroupConnection = {
  __typename?: "ContentfulLinkGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulLinkEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<ContentfulLinkGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulLink>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulLinkGroupConnectionDistinctArgs = {
  field: ContentfulLinkFieldsEnum;
};

export type ContentfulLinkGroupConnectionGroupArgs = {
  field: ContentfulLinkFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulLinkGroupConnectionMaxArgs = {
  field: ContentfulLinkFieldsEnum;
};

export type ContentfulLinkGroupConnectionMinArgs = {
  field: ContentfulLinkFieldsEnum;
};

export type ContentfulLinkGroupConnectionSumArgs = {
  field: ContentfulLinkFieldsEnum;
};

export type ContentfulLinkSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulLinkFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulLinkSys = {
  __typename?: "ContentfulLinkSys";
  contentType?: Maybe<ContentfulLinkSysContentType>;
  revision?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["String"]>;
};

export type ContentfulLinkSysContentType = {
  __typename?: "ContentfulLinkSysContentType";
  sys?: Maybe<ContentfulLinkSysContentTypeSys>;
};

export type ContentfulLinkSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulLinkSysContentTypeSysFilterInput>;
};

export type ContentfulLinkSysContentTypeSys = {
  __typename?: "ContentfulLinkSysContentTypeSys";
  id?: Maybe<Scalars["String"]>;
  linkType?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

export type ContentfulLinkSysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulLinkSysFilterInput = {
  contentType?: InputMaybe<ContentfulLinkSysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulLocale = Node & {
  __typename?: "ContentfulLocale";
  children: Array<Node>;
  code?: Maybe<Scalars["String"]>;
  default?: Maybe<Scalars["Boolean"]>;
  fallbackCode?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  internal: Internal;
  name?: Maybe<Scalars["String"]>;
  parent?: Maybe<Node>;
  sys?: Maybe<ContentfulLocaleSys>;
};

export type ContentfulLocaleConnection = {
  __typename?: "ContentfulLocaleConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulLocaleEdge>;
  group: Array<ContentfulLocaleGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulLocale>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulLocaleConnectionDistinctArgs = {
  field: ContentfulLocaleFieldsEnum;
};

export type ContentfulLocaleConnectionGroupArgs = {
  field: ContentfulLocaleFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulLocaleConnectionMaxArgs = {
  field: ContentfulLocaleFieldsEnum;
};

export type ContentfulLocaleConnectionMinArgs = {
  field: ContentfulLocaleFieldsEnum;
};

export type ContentfulLocaleConnectionSumArgs = {
  field: ContentfulLocaleFieldsEnum;
};

export type ContentfulLocaleEdge = {
  __typename?: "ContentfulLocaleEdge";
  next?: Maybe<ContentfulLocale>;
  node: ContentfulLocale;
  previous?: Maybe<ContentfulLocale>;
};

export enum ContentfulLocaleFieldsEnum {
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Code = "code",
  Default = "default",
  FallbackCode = "fallbackCode",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Name = "name",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  SysId = "sys___id",
  SysType = "sys___type",
  SysVersion = "sys___version",
}

export type ContentfulLocaleFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  code?: InputMaybe<StringQueryOperatorInput>;
  default?: InputMaybe<BooleanQueryOperatorInput>;
  fallbackCode?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sys?: InputMaybe<ContentfulLocaleSysFilterInput>;
};

export type ContentfulLocaleGroupConnection = {
  __typename?: "ContentfulLocaleGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulLocaleEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<ContentfulLocaleGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulLocale>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulLocaleGroupConnectionDistinctArgs = {
  field: ContentfulLocaleFieldsEnum;
};

export type ContentfulLocaleGroupConnectionGroupArgs = {
  field: ContentfulLocaleFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulLocaleGroupConnectionMaxArgs = {
  field: ContentfulLocaleFieldsEnum;
};

export type ContentfulLocaleGroupConnectionMinArgs = {
  field: ContentfulLocaleFieldsEnum;
};

export type ContentfulLocaleGroupConnectionSumArgs = {
  field: ContentfulLocaleFieldsEnum;
};

export type ContentfulLocaleSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulLocaleFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulLocaleSys = {
  __typename?: "ContentfulLocaleSys";
  id?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["Int"]>;
};

export type ContentfulLocaleSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<IntQueryOperatorInput>;
};

export type ContentfulOptions = ContentfulEntry &
  ContentfulReference &
  Node & {
    __typename?: "ContentfulOptions";
    bottomBarLogo?: Maybe<ContentfulLink>;
    bottomBarSocialLinks?: Maybe<Array<Maybe<ContentfulLink>>>;
    bottomBarTabs?: Maybe<Array<Maybe<ContentfulLink>>>;
    children: Array<Node>;
    contentful_id: Scalars["String"];
    contentfulid?: Maybe<Scalars["String"]>;
    createdAt?: Maybe<Scalars["Date"]>;
    id: Scalars["ID"];
    internal: Internal;
    node_locale: Scalars["String"];
    parent?: Maybe<Node>;
    spaceId?: Maybe<Scalars["String"]>;
    sys?: Maybe<ContentfulOptionsSys>;
    topBarLogo?: Maybe<ContentfulLink>;
    topBarSocialLinks?: Maybe<Array<Maybe<ContentfulLink>>>;
    topBarTabs?: Maybe<Array<Maybe<ContentfulLink>>>;
    updatedAt?: Maybe<Scalars["Date"]>;
  };

export type ContentfulOptionsCreatedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type ContentfulOptionsUpdatedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type ContentfulOptionsConnection = {
  __typename?: "ContentfulOptionsConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulOptionsEdge>;
  group: Array<ContentfulOptionsGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulOptions>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulOptionsConnectionDistinctArgs = {
  field: ContentfulOptionsFieldsEnum;
};

export type ContentfulOptionsConnectionGroupArgs = {
  field: ContentfulOptionsFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulOptionsConnectionMaxArgs = {
  field: ContentfulOptionsFieldsEnum;
};

export type ContentfulOptionsConnectionMinArgs = {
  field: ContentfulOptionsFieldsEnum;
};

export type ContentfulOptionsConnectionSumArgs = {
  field: ContentfulOptionsFieldsEnum;
};

export type ContentfulOptionsEdge = {
  __typename?: "ContentfulOptionsEdge";
  next?: Maybe<ContentfulOptions>;
  node: ContentfulOptions;
  previous?: Maybe<ContentfulOptions>;
};

export enum ContentfulOptionsFieldsEnum {
  BottomBarLogoChildContentfulLinkUrlTextNodeChildMdxBody = "bottomBarLogo___childContentfulLinkUrlTextNode___childMdx___body",
  BottomBarLogoChildContentfulLinkUrlTextNodeChildMdxChildren = "bottomBarLogo___childContentfulLinkUrlTextNode___childMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarLogoChildContentfulLinkUrlTextNodeChildMdxExcerpt = "bottomBarLogo___childContentfulLinkUrlTextNode___childMdx___excerpt",
  BottomBarLogoChildContentfulLinkUrlTextNodeChildMdxFileAbsolutePath = "bottomBarLogo___childContentfulLinkUrlTextNode___childMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarLogoChildContentfulLinkUrlTextNodeChildMdxHeadings = "bottomBarLogo___childContentfulLinkUrlTextNode___childMdx___headings",
  BottomBarLogoChildContentfulLinkUrlTextNodeChildMdxHtml = "bottomBarLogo___childContentfulLinkUrlTextNode___childMdx___html",
  BottomBarLogoChildContentfulLinkUrlTextNodeChildMdxId = "bottomBarLogo___childContentfulLinkUrlTextNode___childMdx___id",
  BottomBarLogoChildContentfulLinkUrlTextNodeChildMdxMdxAst = "bottomBarLogo___childContentfulLinkUrlTextNode___childMdx___mdxAST",
  BottomBarLogoChildContentfulLinkUrlTextNodeChildMdxRawBody = "bottomBarLogo___childContentfulLinkUrlTextNode___childMdx___rawBody",
  BottomBarLogoChildContentfulLinkUrlTextNodeChildMdxSlug = "bottomBarLogo___childContentfulLinkUrlTextNode___childMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarLogoChildContentfulLinkUrlTextNodeChildMdxTableOfContents = "bottomBarLogo___childContentfulLinkUrlTextNode___childMdx___tableOfContents",
  BottomBarLogoChildContentfulLinkUrlTextNodeChildMdxTimeToRead = "bottomBarLogo___childContentfulLinkUrlTextNode___childMdx___timeToRead",
  BottomBarLogoChildContentfulLinkUrlTextNodeChildren = "bottomBarLogo___childContentfulLinkUrlTextNode___children",
  BottomBarLogoChildContentfulLinkUrlTextNodeChildrenMdx = "bottomBarLogo___childContentfulLinkUrlTextNode___childrenMdx",
  BottomBarLogoChildContentfulLinkUrlTextNodeChildrenMdxBody = "bottomBarLogo___childContentfulLinkUrlTextNode___childrenMdx___body",
  BottomBarLogoChildContentfulLinkUrlTextNodeChildrenMdxChildren = "bottomBarLogo___childContentfulLinkUrlTextNode___childrenMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarLogoChildContentfulLinkUrlTextNodeChildrenMdxExcerpt = "bottomBarLogo___childContentfulLinkUrlTextNode___childrenMdx___excerpt",
  BottomBarLogoChildContentfulLinkUrlTextNodeChildrenMdxFileAbsolutePath = "bottomBarLogo___childContentfulLinkUrlTextNode___childrenMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarLogoChildContentfulLinkUrlTextNodeChildrenMdxHeadings = "bottomBarLogo___childContentfulLinkUrlTextNode___childrenMdx___headings",
  BottomBarLogoChildContentfulLinkUrlTextNodeChildrenMdxHtml = "bottomBarLogo___childContentfulLinkUrlTextNode___childrenMdx___html",
  BottomBarLogoChildContentfulLinkUrlTextNodeChildrenMdxId = "bottomBarLogo___childContentfulLinkUrlTextNode___childrenMdx___id",
  BottomBarLogoChildContentfulLinkUrlTextNodeChildrenMdxMdxAst = "bottomBarLogo___childContentfulLinkUrlTextNode___childrenMdx___mdxAST",
  BottomBarLogoChildContentfulLinkUrlTextNodeChildrenMdxRawBody = "bottomBarLogo___childContentfulLinkUrlTextNode___childrenMdx___rawBody",
  BottomBarLogoChildContentfulLinkUrlTextNodeChildrenMdxSlug = "bottomBarLogo___childContentfulLinkUrlTextNode___childrenMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarLogoChildContentfulLinkUrlTextNodeChildrenMdxTableOfContents = "bottomBarLogo___childContentfulLinkUrlTextNode___childrenMdx___tableOfContents",
  BottomBarLogoChildContentfulLinkUrlTextNodeChildrenMdxTimeToRead = "bottomBarLogo___childContentfulLinkUrlTextNode___childrenMdx___timeToRead",
  BottomBarLogoChildContentfulLinkUrlTextNodeChildrenChildren = "bottomBarLogo___childContentfulLinkUrlTextNode___children___children",
  BottomBarLogoChildContentfulLinkUrlTextNodeChildrenId = "bottomBarLogo___childContentfulLinkUrlTextNode___children___id",
  BottomBarLogoChildContentfulLinkUrlTextNodeId = "bottomBarLogo___childContentfulLinkUrlTextNode___id",
  BottomBarLogoChildContentfulLinkUrlTextNodeInternalContent = "bottomBarLogo___childContentfulLinkUrlTextNode___internal___content",
  BottomBarLogoChildContentfulLinkUrlTextNodeInternalContentDigest = "bottomBarLogo___childContentfulLinkUrlTextNode___internal___contentDigest",
  BottomBarLogoChildContentfulLinkUrlTextNodeInternalDescription = "bottomBarLogo___childContentfulLinkUrlTextNode___internal___description",
  BottomBarLogoChildContentfulLinkUrlTextNodeInternalFieldOwners = "bottomBarLogo___childContentfulLinkUrlTextNode___internal___fieldOwners",
  BottomBarLogoChildContentfulLinkUrlTextNodeInternalIgnoreType = "bottomBarLogo___childContentfulLinkUrlTextNode___internal___ignoreType",
  BottomBarLogoChildContentfulLinkUrlTextNodeInternalMediaType = "bottomBarLogo___childContentfulLinkUrlTextNode___internal___mediaType",
  BottomBarLogoChildContentfulLinkUrlTextNodeInternalOwner = "bottomBarLogo___childContentfulLinkUrlTextNode___internal___owner",
  BottomBarLogoChildContentfulLinkUrlTextNodeInternalType = "bottomBarLogo___childContentfulLinkUrlTextNode___internal___type",
  BottomBarLogoChildContentfulLinkUrlTextNodeParentChildren = "bottomBarLogo___childContentfulLinkUrlTextNode___parent___children",
  BottomBarLogoChildContentfulLinkUrlTextNodeParentId = "bottomBarLogo___childContentfulLinkUrlTextNode___parent___id",
  BottomBarLogoChildContentfulLinkUrlTextNodeSysType = "bottomBarLogo___childContentfulLinkUrlTextNode___sys___type",
  BottomBarLogoChildContentfulLinkUrlTextNodeUrl = "bottomBarLogo___childContentfulLinkUrlTextNode___url",
  BottomBarLogoChildren = "bottomBarLogo___children",
  BottomBarLogoChildrenContentfulLinkUrlTextNode = "bottomBarLogo___childrenContentfulLinkUrlTextNode",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeChildMdxBody = "bottomBarLogo___childrenContentfulLinkUrlTextNode___childMdx___body",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeChildMdxChildren = "bottomBarLogo___childrenContentfulLinkUrlTextNode___childMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarLogoChildrenContentfulLinkUrlTextNodeChildMdxExcerpt = "bottomBarLogo___childrenContentfulLinkUrlTextNode___childMdx___excerpt",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeChildMdxFileAbsolutePath = "bottomBarLogo___childrenContentfulLinkUrlTextNode___childMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarLogoChildrenContentfulLinkUrlTextNodeChildMdxHeadings = "bottomBarLogo___childrenContentfulLinkUrlTextNode___childMdx___headings",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeChildMdxHtml = "bottomBarLogo___childrenContentfulLinkUrlTextNode___childMdx___html",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeChildMdxId = "bottomBarLogo___childrenContentfulLinkUrlTextNode___childMdx___id",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeChildMdxMdxAst = "bottomBarLogo___childrenContentfulLinkUrlTextNode___childMdx___mdxAST",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeChildMdxRawBody = "bottomBarLogo___childrenContentfulLinkUrlTextNode___childMdx___rawBody",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeChildMdxSlug = "bottomBarLogo___childrenContentfulLinkUrlTextNode___childMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarLogoChildrenContentfulLinkUrlTextNodeChildMdxTableOfContents = "bottomBarLogo___childrenContentfulLinkUrlTextNode___childMdx___tableOfContents",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeChildMdxTimeToRead = "bottomBarLogo___childrenContentfulLinkUrlTextNode___childMdx___timeToRead",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeChildren = "bottomBarLogo___childrenContentfulLinkUrlTextNode___children",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeChildrenMdx = "bottomBarLogo___childrenContentfulLinkUrlTextNode___childrenMdx",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeChildrenMdxBody = "bottomBarLogo___childrenContentfulLinkUrlTextNode___childrenMdx___body",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeChildrenMdxChildren = "bottomBarLogo___childrenContentfulLinkUrlTextNode___childrenMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarLogoChildrenContentfulLinkUrlTextNodeChildrenMdxExcerpt = "bottomBarLogo___childrenContentfulLinkUrlTextNode___childrenMdx___excerpt",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeChildrenMdxFileAbsolutePath = "bottomBarLogo___childrenContentfulLinkUrlTextNode___childrenMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarLogoChildrenContentfulLinkUrlTextNodeChildrenMdxHeadings = "bottomBarLogo___childrenContentfulLinkUrlTextNode___childrenMdx___headings",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeChildrenMdxHtml = "bottomBarLogo___childrenContentfulLinkUrlTextNode___childrenMdx___html",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeChildrenMdxId = "bottomBarLogo___childrenContentfulLinkUrlTextNode___childrenMdx___id",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeChildrenMdxMdxAst = "bottomBarLogo___childrenContentfulLinkUrlTextNode___childrenMdx___mdxAST",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeChildrenMdxRawBody = "bottomBarLogo___childrenContentfulLinkUrlTextNode___childrenMdx___rawBody",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeChildrenMdxSlug = "bottomBarLogo___childrenContentfulLinkUrlTextNode___childrenMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarLogoChildrenContentfulLinkUrlTextNodeChildrenMdxTableOfContents = "bottomBarLogo___childrenContentfulLinkUrlTextNode___childrenMdx___tableOfContents",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeChildrenMdxTimeToRead = "bottomBarLogo___childrenContentfulLinkUrlTextNode___childrenMdx___timeToRead",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeChildrenChildren = "bottomBarLogo___childrenContentfulLinkUrlTextNode___children___children",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeChildrenId = "bottomBarLogo___childrenContentfulLinkUrlTextNode___children___id",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeId = "bottomBarLogo___childrenContentfulLinkUrlTextNode___id",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeInternalContent = "bottomBarLogo___childrenContentfulLinkUrlTextNode___internal___content",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeInternalContentDigest = "bottomBarLogo___childrenContentfulLinkUrlTextNode___internal___contentDigest",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeInternalDescription = "bottomBarLogo___childrenContentfulLinkUrlTextNode___internal___description",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeInternalFieldOwners = "bottomBarLogo___childrenContentfulLinkUrlTextNode___internal___fieldOwners",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeInternalIgnoreType = "bottomBarLogo___childrenContentfulLinkUrlTextNode___internal___ignoreType",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeInternalMediaType = "bottomBarLogo___childrenContentfulLinkUrlTextNode___internal___mediaType",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeInternalOwner = "bottomBarLogo___childrenContentfulLinkUrlTextNode___internal___owner",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeInternalType = "bottomBarLogo___childrenContentfulLinkUrlTextNode___internal___type",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeParentChildren = "bottomBarLogo___childrenContentfulLinkUrlTextNode___parent___children",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeParentId = "bottomBarLogo___childrenContentfulLinkUrlTextNode___parent___id",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeSysType = "bottomBarLogo___childrenContentfulLinkUrlTextNode___sys___type",
  BottomBarLogoChildrenContentfulLinkUrlTextNodeUrl = "bottomBarLogo___childrenContentfulLinkUrlTextNode___url",
  BottomBarLogoChildrenChildren = "bottomBarLogo___children___children",
  BottomBarLogoChildrenChildrenChildren = "bottomBarLogo___children___children___children",
  BottomBarLogoChildrenChildrenId = "bottomBarLogo___children___children___id",
  BottomBarLogoChildrenId = "bottomBarLogo___children___id",
  BottomBarLogoChildrenInternalContent = "bottomBarLogo___children___internal___content",
  BottomBarLogoChildrenInternalContentDigest = "bottomBarLogo___children___internal___contentDigest",
  BottomBarLogoChildrenInternalDescription = "bottomBarLogo___children___internal___description",
  BottomBarLogoChildrenInternalFieldOwners = "bottomBarLogo___children___internal___fieldOwners",
  BottomBarLogoChildrenInternalIgnoreType = "bottomBarLogo___children___internal___ignoreType",
  BottomBarLogoChildrenInternalMediaType = "bottomBarLogo___children___internal___mediaType",
  BottomBarLogoChildrenInternalOwner = "bottomBarLogo___children___internal___owner",
  BottomBarLogoChildrenInternalType = "bottomBarLogo___children___internal___type",
  BottomBarLogoChildrenParentChildren = "bottomBarLogo___children___parent___children",
  BottomBarLogoChildrenParentId = "bottomBarLogo___children___parent___id",
  BottomBarLogoContentfulId = "bottomBarLogo___contentful_id",
  BottomBarLogoContentfulid = "bottomBarLogo___contentfulid",
  BottomBarLogoCreatedAt = "bottomBarLogo___createdAt",
  BottomBarLogoId = "bottomBarLogo___id",
  BottomBarLogoImageChildren = "bottomBarLogo___image___children",
  BottomBarLogoImageChildrenChildren = "bottomBarLogo___image___children___children",
  BottomBarLogoImageChildrenId = "bottomBarLogo___image___children___id",
  BottomBarLogoImageContentfulId = "bottomBarLogo___image___contentful_id",
  BottomBarLogoImageCreatedAt = "bottomBarLogo___image___createdAt",
  BottomBarLogoImageDescription = "bottomBarLogo___image___description",
  BottomBarLogoImageFileContentType = "bottomBarLogo___image___file___contentType",
  BottomBarLogoImageFileFileName = "bottomBarLogo___image___file___fileName",
  BottomBarLogoImageFileUrl = "bottomBarLogo___image___file___url",
  BottomBarLogoImageFilename = "bottomBarLogo___image___filename",
  BottomBarLogoImageFilesize = "bottomBarLogo___image___filesize",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarLogoImageGatsbyImage = "bottomBarLogo___image___gatsbyImage",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarLogoImageGatsbyImageData = "bottomBarLogo___image___gatsbyImageData",
  BottomBarLogoImageHeight = "bottomBarLogo___image___height",
  BottomBarLogoImageId = "bottomBarLogo___image___id",
  BottomBarLogoImageInternalContent = "bottomBarLogo___image___internal___content",
  BottomBarLogoImageInternalContentDigest = "bottomBarLogo___image___internal___contentDigest",
  BottomBarLogoImageInternalDescription = "bottomBarLogo___image___internal___description",
  BottomBarLogoImageInternalFieldOwners = "bottomBarLogo___image___internal___fieldOwners",
  BottomBarLogoImageInternalIgnoreType = "bottomBarLogo___image___internal___ignoreType",
  BottomBarLogoImageInternalMediaType = "bottomBarLogo___image___internal___mediaType",
  BottomBarLogoImageInternalOwner = "bottomBarLogo___image___internal___owner",
  BottomBarLogoImageInternalType = "bottomBarLogo___image___internal___type",
  BottomBarLogoImageMimeType = "bottomBarLogo___image___mimeType",
  BottomBarLogoImageNodeLocale = "bottomBarLogo___image___node_locale",
  BottomBarLogoImageParentChildren = "bottomBarLogo___image___parent___children",
  BottomBarLogoImageParentId = "bottomBarLogo___image___parent___id",
  BottomBarLogoImagePlaceholderUrl = "bottomBarLogo___image___placeholderUrl",
  BottomBarLogoImagePublicUrl = "bottomBarLogo___image___publicUrl",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarLogoImageResizeHeight = "bottomBarLogo___image___resize___height",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarLogoImageResizeSrc = "bottomBarLogo___image___resize___src",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarLogoImageResizeWidth = "bottomBarLogo___image___resize___width",
  BottomBarLogoImageSpaceId = "bottomBarLogo___image___spaceId",
  BottomBarLogoImageSysRevision = "bottomBarLogo___image___sys___revision",
  BottomBarLogoImageSysType = "bottomBarLogo___image___sys___type",
  BottomBarLogoImageTitle = "bottomBarLogo___image___title",
  BottomBarLogoImageUpdatedAt = "bottomBarLogo___image___updatedAt",
  BottomBarLogoImageUrl = "bottomBarLogo___image___url",
  BottomBarLogoImageWidth = "bottomBarLogo___image___width",
  BottomBarLogoInternalContent = "bottomBarLogo___internal___content",
  BottomBarLogoInternalContentDigest = "bottomBarLogo___internal___contentDigest",
  BottomBarLogoInternalDescription = "bottomBarLogo___internal___description",
  BottomBarLogoInternalFieldOwners = "bottomBarLogo___internal___fieldOwners",
  BottomBarLogoInternalIgnoreType = "bottomBarLogo___internal___ignoreType",
  BottomBarLogoInternalMediaType = "bottomBarLogo___internal___mediaType",
  BottomBarLogoInternalOwner = "bottomBarLogo___internal___owner",
  BottomBarLogoInternalType = "bottomBarLogo___internal___type",
  BottomBarLogoNodeLocale = "bottomBarLogo___node_locale",
  BottomBarLogoOptions = "bottomBarLogo___options",
  BottomBarLogoOptionsBottomBarLogoChildren = "bottomBarLogo___options___bottomBarLogo___children",
  BottomBarLogoOptionsBottomBarLogoChildrenContentfulLinkUrlTextNode = "bottomBarLogo___options___bottomBarLogo___childrenContentfulLinkUrlTextNode",
  BottomBarLogoOptionsBottomBarLogoContentfulId = "bottomBarLogo___options___bottomBarLogo___contentful_id",
  BottomBarLogoOptionsBottomBarLogoContentfulid = "bottomBarLogo___options___bottomBarLogo___contentfulid",
  BottomBarLogoOptionsBottomBarLogoCreatedAt = "bottomBarLogo___options___bottomBarLogo___createdAt",
  BottomBarLogoOptionsBottomBarLogoId = "bottomBarLogo___options___bottomBarLogo___id",
  BottomBarLogoOptionsBottomBarLogoNodeLocale = "bottomBarLogo___options___bottomBarLogo___node_locale",
  BottomBarLogoOptionsBottomBarLogoOptions = "bottomBarLogo___options___bottomBarLogo___options",
  BottomBarLogoOptionsBottomBarLogoSpaceId = "bottomBarLogo___options___bottomBarLogo___spaceId",
  BottomBarLogoOptionsBottomBarLogoTitle = "bottomBarLogo___options___bottomBarLogo___title",
  BottomBarLogoOptionsBottomBarLogoUpdatedAt = "bottomBarLogo___options___bottomBarLogo___updatedAt",
  BottomBarLogoOptionsBottomBarSocialLinks = "bottomBarLogo___options___bottomBarSocialLinks",
  BottomBarLogoOptionsBottomBarSocialLinksChildren = "bottomBarLogo___options___bottomBarSocialLinks___children",
  BottomBarLogoOptionsBottomBarSocialLinksChildrenContentfulLinkUrlTextNode = "bottomBarLogo___options___bottomBarSocialLinks___childrenContentfulLinkUrlTextNode",
  BottomBarLogoOptionsBottomBarSocialLinksContentfulId = "bottomBarLogo___options___bottomBarSocialLinks___contentful_id",
  BottomBarLogoOptionsBottomBarSocialLinksContentfulid = "bottomBarLogo___options___bottomBarSocialLinks___contentfulid",
  BottomBarLogoOptionsBottomBarSocialLinksCreatedAt = "bottomBarLogo___options___bottomBarSocialLinks___createdAt",
  BottomBarLogoOptionsBottomBarSocialLinksId = "bottomBarLogo___options___bottomBarSocialLinks___id",
  BottomBarLogoOptionsBottomBarSocialLinksNodeLocale = "bottomBarLogo___options___bottomBarSocialLinks___node_locale",
  BottomBarLogoOptionsBottomBarSocialLinksOptions = "bottomBarLogo___options___bottomBarSocialLinks___options",
  BottomBarLogoOptionsBottomBarSocialLinksSpaceId = "bottomBarLogo___options___bottomBarSocialLinks___spaceId",
  BottomBarLogoOptionsBottomBarSocialLinksTitle = "bottomBarLogo___options___bottomBarSocialLinks___title",
  BottomBarLogoOptionsBottomBarSocialLinksUpdatedAt = "bottomBarLogo___options___bottomBarSocialLinks___updatedAt",
  BottomBarLogoOptionsBottomBarTabs = "bottomBarLogo___options___bottomBarTabs",
  BottomBarLogoOptionsBottomBarTabsChildren = "bottomBarLogo___options___bottomBarTabs___children",
  BottomBarLogoOptionsBottomBarTabsChildrenContentfulLinkUrlTextNode = "bottomBarLogo___options___bottomBarTabs___childrenContentfulLinkUrlTextNode",
  BottomBarLogoOptionsBottomBarTabsContentfulId = "bottomBarLogo___options___bottomBarTabs___contentful_id",
  BottomBarLogoOptionsBottomBarTabsContentfulid = "bottomBarLogo___options___bottomBarTabs___contentfulid",
  BottomBarLogoOptionsBottomBarTabsCreatedAt = "bottomBarLogo___options___bottomBarTabs___createdAt",
  BottomBarLogoOptionsBottomBarTabsId = "bottomBarLogo___options___bottomBarTabs___id",
  BottomBarLogoOptionsBottomBarTabsNodeLocale = "bottomBarLogo___options___bottomBarTabs___node_locale",
  BottomBarLogoOptionsBottomBarTabsOptions = "bottomBarLogo___options___bottomBarTabs___options",
  BottomBarLogoOptionsBottomBarTabsSpaceId = "bottomBarLogo___options___bottomBarTabs___spaceId",
  BottomBarLogoOptionsBottomBarTabsTitle = "bottomBarLogo___options___bottomBarTabs___title",
  BottomBarLogoOptionsBottomBarTabsUpdatedAt = "bottomBarLogo___options___bottomBarTabs___updatedAt",
  BottomBarLogoOptionsChildren = "bottomBarLogo___options___children",
  BottomBarLogoOptionsChildrenChildren = "bottomBarLogo___options___children___children",
  BottomBarLogoOptionsChildrenId = "bottomBarLogo___options___children___id",
  BottomBarLogoOptionsContentfulId = "bottomBarLogo___options___contentful_id",
  BottomBarLogoOptionsContentfulid = "bottomBarLogo___options___contentfulid",
  BottomBarLogoOptionsCreatedAt = "bottomBarLogo___options___createdAt",
  BottomBarLogoOptionsId = "bottomBarLogo___options___id",
  BottomBarLogoOptionsInternalContent = "bottomBarLogo___options___internal___content",
  BottomBarLogoOptionsInternalContentDigest = "bottomBarLogo___options___internal___contentDigest",
  BottomBarLogoOptionsInternalDescription = "bottomBarLogo___options___internal___description",
  BottomBarLogoOptionsInternalFieldOwners = "bottomBarLogo___options___internal___fieldOwners",
  BottomBarLogoOptionsInternalIgnoreType = "bottomBarLogo___options___internal___ignoreType",
  BottomBarLogoOptionsInternalMediaType = "bottomBarLogo___options___internal___mediaType",
  BottomBarLogoOptionsInternalOwner = "bottomBarLogo___options___internal___owner",
  BottomBarLogoOptionsInternalType = "bottomBarLogo___options___internal___type",
  BottomBarLogoOptionsNodeLocale = "bottomBarLogo___options___node_locale",
  BottomBarLogoOptionsParentChildren = "bottomBarLogo___options___parent___children",
  BottomBarLogoOptionsParentId = "bottomBarLogo___options___parent___id",
  BottomBarLogoOptionsSpaceId = "bottomBarLogo___options___spaceId",
  BottomBarLogoOptionsSysRevision = "bottomBarLogo___options___sys___revision",
  BottomBarLogoOptionsSysType = "bottomBarLogo___options___sys___type",
  BottomBarLogoOptionsTopBarLogoChildren = "bottomBarLogo___options___topBarLogo___children",
  BottomBarLogoOptionsTopBarLogoChildrenContentfulLinkUrlTextNode = "bottomBarLogo___options___topBarLogo___childrenContentfulLinkUrlTextNode",
  BottomBarLogoOptionsTopBarLogoContentfulId = "bottomBarLogo___options___topBarLogo___contentful_id",
  BottomBarLogoOptionsTopBarLogoContentfulid = "bottomBarLogo___options___topBarLogo___contentfulid",
  BottomBarLogoOptionsTopBarLogoCreatedAt = "bottomBarLogo___options___topBarLogo___createdAt",
  BottomBarLogoOptionsTopBarLogoId = "bottomBarLogo___options___topBarLogo___id",
  BottomBarLogoOptionsTopBarLogoNodeLocale = "bottomBarLogo___options___topBarLogo___node_locale",
  BottomBarLogoOptionsTopBarLogoOptions = "bottomBarLogo___options___topBarLogo___options",
  BottomBarLogoOptionsTopBarLogoSpaceId = "bottomBarLogo___options___topBarLogo___spaceId",
  BottomBarLogoOptionsTopBarLogoTitle = "bottomBarLogo___options___topBarLogo___title",
  BottomBarLogoOptionsTopBarLogoUpdatedAt = "bottomBarLogo___options___topBarLogo___updatedAt",
  BottomBarLogoOptionsTopBarSocialLinks = "bottomBarLogo___options___topBarSocialLinks",
  BottomBarLogoOptionsTopBarSocialLinksChildren = "bottomBarLogo___options___topBarSocialLinks___children",
  BottomBarLogoOptionsTopBarSocialLinksChildrenContentfulLinkUrlTextNode = "bottomBarLogo___options___topBarSocialLinks___childrenContentfulLinkUrlTextNode",
  BottomBarLogoOptionsTopBarSocialLinksContentfulId = "bottomBarLogo___options___topBarSocialLinks___contentful_id",
  BottomBarLogoOptionsTopBarSocialLinksContentfulid = "bottomBarLogo___options___topBarSocialLinks___contentfulid",
  BottomBarLogoOptionsTopBarSocialLinksCreatedAt = "bottomBarLogo___options___topBarSocialLinks___createdAt",
  BottomBarLogoOptionsTopBarSocialLinksId = "bottomBarLogo___options___topBarSocialLinks___id",
  BottomBarLogoOptionsTopBarSocialLinksNodeLocale = "bottomBarLogo___options___topBarSocialLinks___node_locale",
  BottomBarLogoOptionsTopBarSocialLinksOptions = "bottomBarLogo___options___topBarSocialLinks___options",
  BottomBarLogoOptionsTopBarSocialLinksSpaceId = "bottomBarLogo___options___topBarSocialLinks___spaceId",
  BottomBarLogoOptionsTopBarSocialLinksTitle = "bottomBarLogo___options___topBarSocialLinks___title",
  BottomBarLogoOptionsTopBarSocialLinksUpdatedAt = "bottomBarLogo___options___topBarSocialLinks___updatedAt",
  BottomBarLogoOptionsTopBarTabs = "bottomBarLogo___options___topBarTabs",
  BottomBarLogoOptionsTopBarTabsChildren = "bottomBarLogo___options___topBarTabs___children",
  BottomBarLogoOptionsTopBarTabsChildrenContentfulLinkUrlTextNode = "bottomBarLogo___options___topBarTabs___childrenContentfulLinkUrlTextNode",
  BottomBarLogoOptionsTopBarTabsContentfulId = "bottomBarLogo___options___topBarTabs___contentful_id",
  BottomBarLogoOptionsTopBarTabsContentfulid = "bottomBarLogo___options___topBarTabs___contentfulid",
  BottomBarLogoOptionsTopBarTabsCreatedAt = "bottomBarLogo___options___topBarTabs___createdAt",
  BottomBarLogoOptionsTopBarTabsId = "bottomBarLogo___options___topBarTabs___id",
  BottomBarLogoOptionsTopBarTabsNodeLocale = "bottomBarLogo___options___topBarTabs___node_locale",
  BottomBarLogoOptionsTopBarTabsOptions = "bottomBarLogo___options___topBarTabs___options",
  BottomBarLogoOptionsTopBarTabsSpaceId = "bottomBarLogo___options___topBarTabs___spaceId",
  BottomBarLogoOptionsTopBarTabsTitle = "bottomBarLogo___options___topBarTabs___title",
  BottomBarLogoOptionsTopBarTabsUpdatedAt = "bottomBarLogo___options___topBarTabs___updatedAt",
  BottomBarLogoOptionsUpdatedAt = "bottomBarLogo___options___updatedAt",
  BottomBarLogoParentChildren = "bottomBarLogo___parent___children",
  BottomBarLogoParentChildrenChildren = "bottomBarLogo___parent___children___children",
  BottomBarLogoParentChildrenId = "bottomBarLogo___parent___children___id",
  BottomBarLogoParentId = "bottomBarLogo___parent___id",
  BottomBarLogoParentInternalContent = "bottomBarLogo___parent___internal___content",
  BottomBarLogoParentInternalContentDigest = "bottomBarLogo___parent___internal___contentDigest",
  BottomBarLogoParentInternalDescription = "bottomBarLogo___parent___internal___description",
  BottomBarLogoParentInternalFieldOwners = "bottomBarLogo___parent___internal___fieldOwners",
  BottomBarLogoParentInternalIgnoreType = "bottomBarLogo___parent___internal___ignoreType",
  BottomBarLogoParentInternalMediaType = "bottomBarLogo___parent___internal___mediaType",
  BottomBarLogoParentInternalOwner = "bottomBarLogo___parent___internal___owner",
  BottomBarLogoParentInternalType = "bottomBarLogo___parent___internal___type",
  BottomBarLogoParentParentChildren = "bottomBarLogo___parent___parent___children",
  BottomBarLogoParentParentId = "bottomBarLogo___parent___parent___id",
  BottomBarLogoSpaceId = "bottomBarLogo___spaceId",
  BottomBarLogoSysRevision = "bottomBarLogo___sys___revision",
  BottomBarLogoSysType = "bottomBarLogo___sys___type",
  BottomBarLogoTitle = "bottomBarLogo___title",
  BottomBarLogoUpdatedAt = "bottomBarLogo___updatedAt",
  BottomBarLogoUrlChildMdxBody = "bottomBarLogo___url___childMdx___body",
  BottomBarLogoUrlChildMdxChildren = "bottomBarLogo___url___childMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarLogoUrlChildMdxExcerpt = "bottomBarLogo___url___childMdx___excerpt",
  BottomBarLogoUrlChildMdxFileAbsolutePath = "bottomBarLogo___url___childMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarLogoUrlChildMdxHeadings = "bottomBarLogo___url___childMdx___headings",
  BottomBarLogoUrlChildMdxHtml = "bottomBarLogo___url___childMdx___html",
  BottomBarLogoUrlChildMdxId = "bottomBarLogo___url___childMdx___id",
  BottomBarLogoUrlChildMdxMdxAst = "bottomBarLogo___url___childMdx___mdxAST",
  BottomBarLogoUrlChildMdxRawBody = "bottomBarLogo___url___childMdx___rawBody",
  BottomBarLogoUrlChildMdxSlug = "bottomBarLogo___url___childMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarLogoUrlChildMdxTableOfContents = "bottomBarLogo___url___childMdx___tableOfContents",
  BottomBarLogoUrlChildMdxTimeToRead = "bottomBarLogo___url___childMdx___timeToRead",
  BottomBarLogoUrlChildren = "bottomBarLogo___url___children",
  BottomBarLogoUrlChildrenMdx = "bottomBarLogo___url___childrenMdx",
  BottomBarLogoUrlChildrenMdxBody = "bottomBarLogo___url___childrenMdx___body",
  BottomBarLogoUrlChildrenMdxChildren = "bottomBarLogo___url___childrenMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarLogoUrlChildrenMdxExcerpt = "bottomBarLogo___url___childrenMdx___excerpt",
  BottomBarLogoUrlChildrenMdxFileAbsolutePath = "bottomBarLogo___url___childrenMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarLogoUrlChildrenMdxHeadings = "bottomBarLogo___url___childrenMdx___headings",
  BottomBarLogoUrlChildrenMdxHtml = "bottomBarLogo___url___childrenMdx___html",
  BottomBarLogoUrlChildrenMdxId = "bottomBarLogo___url___childrenMdx___id",
  BottomBarLogoUrlChildrenMdxMdxAst = "bottomBarLogo___url___childrenMdx___mdxAST",
  BottomBarLogoUrlChildrenMdxRawBody = "bottomBarLogo___url___childrenMdx___rawBody",
  BottomBarLogoUrlChildrenMdxSlug = "bottomBarLogo___url___childrenMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarLogoUrlChildrenMdxTableOfContents = "bottomBarLogo___url___childrenMdx___tableOfContents",
  BottomBarLogoUrlChildrenMdxTimeToRead = "bottomBarLogo___url___childrenMdx___timeToRead",
  BottomBarLogoUrlChildrenChildren = "bottomBarLogo___url___children___children",
  BottomBarLogoUrlChildrenId = "bottomBarLogo___url___children___id",
  BottomBarLogoUrlId = "bottomBarLogo___url___id",
  BottomBarLogoUrlInternalContent = "bottomBarLogo___url___internal___content",
  BottomBarLogoUrlInternalContentDigest = "bottomBarLogo___url___internal___contentDigest",
  BottomBarLogoUrlInternalDescription = "bottomBarLogo___url___internal___description",
  BottomBarLogoUrlInternalFieldOwners = "bottomBarLogo___url___internal___fieldOwners",
  BottomBarLogoUrlInternalIgnoreType = "bottomBarLogo___url___internal___ignoreType",
  BottomBarLogoUrlInternalMediaType = "bottomBarLogo___url___internal___mediaType",
  BottomBarLogoUrlInternalOwner = "bottomBarLogo___url___internal___owner",
  BottomBarLogoUrlInternalType = "bottomBarLogo___url___internal___type",
  BottomBarLogoUrlParentChildren = "bottomBarLogo___url___parent___children",
  BottomBarLogoUrlParentId = "bottomBarLogo___url___parent___id",
  BottomBarLogoUrlSysType = "bottomBarLogo___url___sys___type",
  BottomBarLogoUrlUrl = "bottomBarLogo___url___url",
  BottomBarSocialLinks = "bottomBarSocialLinks",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeChildMdxBody = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___childMdx___body",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeChildMdxChildren = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___childMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeChildMdxExcerpt = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___childMdx___excerpt",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeChildMdxFileAbsolutePath = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___childMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeChildMdxHeadings = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___childMdx___headings",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeChildMdxHtml = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___childMdx___html",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeChildMdxId = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___childMdx___id",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeChildMdxMdxAst = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___childMdx___mdxAST",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeChildMdxRawBody = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___childMdx___rawBody",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeChildMdxSlug = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___childMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeChildMdxTableOfContents = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___childMdx___tableOfContents",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeChildMdxTimeToRead = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___childMdx___timeToRead",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeChildren = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___children",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeChildrenMdx = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___childrenMdx",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeChildrenMdxBody = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___childrenMdx___body",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeChildrenMdxChildren = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___childrenMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeChildrenMdxExcerpt = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___childrenMdx___excerpt",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeChildrenMdxFileAbsolutePath = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___childrenMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeChildrenMdxHeadings = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___childrenMdx___headings",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeChildrenMdxHtml = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___childrenMdx___html",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeChildrenMdxId = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___childrenMdx___id",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeChildrenMdxMdxAst = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___childrenMdx___mdxAST",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeChildrenMdxRawBody = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___childrenMdx___rawBody",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeChildrenMdxSlug = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___childrenMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeChildrenMdxTableOfContents = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___childrenMdx___tableOfContents",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeChildrenMdxTimeToRead = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___childrenMdx___timeToRead",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeChildrenChildren = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___children___children",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeChildrenId = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___children___id",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeId = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___id",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeInternalContent = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___internal___content",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeInternalContentDigest = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___internal___contentDigest",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeInternalDescription = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___internal___description",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeInternalFieldOwners = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___internal___fieldOwners",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeInternalIgnoreType = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___internal___ignoreType",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeInternalMediaType = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___internal___mediaType",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeInternalOwner = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___internal___owner",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeInternalType = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___internal___type",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeParentChildren = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___parent___children",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeParentId = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___parent___id",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeSysType = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___sys___type",
  BottomBarSocialLinksChildContentfulLinkUrlTextNodeUrl = "bottomBarSocialLinks___childContentfulLinkUrlTextNode___url",
  BottomBarSocialLinksChildren = "bottomBarSocialLinks___children",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNode = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeChildMdxBody = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___childMdx___body",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeChildMdxChildren = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___childMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeChildMdxExcerpt = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___childMdx___excerpt",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeChildMdxFileAbsolutePath = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___childMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeChildMdxHeadings = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___childMdx___headings",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeChildMdxHtml = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___childMdx___html",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeChildMdxId = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___childMdx___id",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeChildMdxMdxAst = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___childMdx___mdxAST",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeChildMdxRawBody = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___childMdx___rawBody",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeChildMdxSlug = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___childMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeChildMdxTableOfContents = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___childMdx___tableOfContents",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeChildMdxTimeToRead = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___childMdx___timeToRead",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeChildren = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___children",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeChildrenMdx = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___childrenMdx",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeChildrenMdxBody = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___childrenMdx___body",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeChildrenMdxChildren = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___childrenMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeChildrenMdxExcerpt = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___childrenMdx___excerpt",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeChildrenMdxFileAbsolutePath = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___childrenMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeChildrenMdxHeadings = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___childrenMdx___headings",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeChildrenMdxHtml = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___childrenMdx___html",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeChildrenMdxId = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___childrenMdx___id",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeChildrenMdxMdxAst = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___childrenMdx___mdxAST",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeChildrenMdxRawBody = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___childrenMdx___rawBody",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeChildrenMdxSlug = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___childrenMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeChildrenMdxTableOfContents = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___childrenMdx___tableOfContents",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeChildrenMdxTimeToRead = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___childrenMdx___timeToRead",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeChildrenChildren = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___children___children",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeChildrenId = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___children___id",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeId = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___id",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeInternalContent = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___internal___content",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeInternalContentDigest = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___internal___contentDigest",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeInternalDescription = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___internal___description",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeInternalFieldOwners = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___internal___fieldOwners",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeInternalIgnoreType = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___internal___ignoreType",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeInternalMediaType = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___internal___mediaType",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeInternalOwner = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___internal___owner",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeInternalType = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___internal___type",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeParentChildren = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___parent___children",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeParentId = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___parent___id",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeSysType = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___sys___type",
  BottomBarSocialLinksChildrenContentfulLinkUrlTextNodeUrl = "bottomBarSocialLinks___childrenContentfulLinkUrlTextNode___url",
  BottomBarSocialLinksChildrenChildren = "bottomBarSocialLinks___children___children",
  BottomBarSocialLinksChildrenChildrenChildren = "bottomBarSocialLinks___children___children___children",
  BottomBarSocialLinksChildrenChildrenId = "bottomBarSocialLinks___children___children___id",
  BottomBarSocialLinksChildrenId = "bottomBarSocialLinks___children___id",
  BottomBarSocialLinksChildrenInternalContent = "bottomBarSocialLinks___children___internal___content",
  BottomBarSocialLinksChildrenInternalContentDigest = "bottomBarSocialLinks___children___internal___contentDigest",
  BottomBarSocialLinksChildrenInternalDescription = "bottomBarSocialLinks___children___internal___description",
  BottomBarSocialLinksChildrenInternalFieldOwners = "bottomBarSocialLinks___children___internal___fieldOwners",
  BottomBarSocialLinksChildrenInternalIgnoreType = "bottomBarSocialLinks___children___internal___ignoreType",
  BottomBarSocialLinksChildrenInternalMediaType = "bottomBarSocialLinks___children___internal___mediaType",
  BottomBarSocialLinksChildrenInternalOwner = "bottomBarSocialLinks___children___internal___owner",
  BottomBarSocialLinksChildrenInternalType = "bottomBarSocialLinks___children___internal___type",
  BottomBarSocialLinksChildrenParentChildren = "bottomBarSocialLinks___children___parent___children",
  BottomBarSocialLinksChildrenParentId = "bottomBarSocialLinks___children___parent___id",
  BottomBarSocialLinksContentfulId = "bottomBarSocialLinks___contentful_id",
  BottomBarSocialLinksContentfulid = "bottomBarSocialLinks___contentfulid",
  BottomBarSocialLinksCreatedAt = "bottomBarSocialLinks___createdAt",
  BottomBarSocialLinksId = "bottomBarSocialLinks___id",
  BottomBarSocialLinksImageChildren = "bottomBarSocialLinks___image___children",
  BottomBarSocialLinksImageChildrenChildren = "bottomBarSocialLinks___image___children___children",
  BottomBarSocialLinksImageChildrenId = "bottomBarSocialLinks___image___children___id",
  BottomBarSocialLinksImageContentfulId = "bottomBarSocialLinks___image___contentful_id",
  BottomBarSocialLinksImageCreatedAt = "bottomBarSocialLinks___image___createdAt",
  BottomBarSocialLinksImageDescription = "bottomBarSocialLinks___image___description",
  BottomBarSocialLinksImageFileContentType = "bottomBarSocialLinks___image___file___contentType",
  BottomBarSocialLinksImageFileFileName = "bottomBarSocialLinks___image___file___fileName",
  BottomBarSocialLinksImageFileUrl = "bottomBarSocialLinks___image___file___url",
  BottomBarSocialLinksImageFilename = "bottomBarSocialLinks___image___filename",
  BottomBarSocialLinksImageFilesize = "bottomBarSocialLinks___image___filesize",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarSocialLinksImageGatsbyImage = "bottomBarSocialLinks___image___gatsbyImage",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarSocialLinksImageGatsbyImageData = "bottomBarSocialLinks___image___gatsbyImageData",
  BottomBarSocialLinksImageHeight = "bottomBarSocialLinks___image___height",
  BottomBarSocialLinksImageId = "bottomBarSocialLinks___image___id",
  BottomBarSocialLinksImageInternalContent = "bottomBarSocialLinks___image___internal___content",
  BottomBarSocialLinksImageInternalContentDigest = "bottomBarSocialLinks___image___internal___contentDigest",
  BottomBarSocialLinksImageInternalDescription = "bottomBarSocialLinks___image___internal___description",
  BottomBarSocialLinksImageInternalFieldOwners = "bottomBarSocialLinks___image___internal___fieldOwners",
  BottomBarSocialLinksImageInternalIgnoreType = "bottomBarSocialLinks___image___internal___ignoreType",
  BottomBarSocialLinksImageInternalMediaType = "bottomBarSocialLinks___image___internal___mediaType",
  BottomBarSocialLinksImageInternalOwner = "bottomBarSocialLinks___image___internal___owner",
  BottomBarSocialLinksImageInternalType = "bottomBarSocialLinks___image___internal___type",
  BottomBarSocialLinksImageMimeType = "bottomBarSocialLinks___image___mimeType",
  BottomBarSocialLinksImageNodeLocale = "bottomBarSocialLinks___image___node_locale",
  BottomBarSocialLinksImageParentChildren = "bottomBarSocialLinks___image___parent___children",
  BottomBarSocialLinksImageParentId = "bottomBarSocialLinks___image___parent___id",
  BottomBarSocialLinksImagePlaceholderUrl = "bottomBarSocialLinks___image___placeholderUrl",
  BottomBarSocialLinksImagePublicUrl = "bottomBarSocialLinks___image___publicUrl",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarSocialLinksImageResizeHeight = "bottomBarSocialLinks___image___resize___height",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarSocialLinksImageResizeSrc = "bottomBarSocialLinks___image___resize___src",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarSocialLinksImageResizeWidth = "bottomBarSocialLinks___image___resize___width",
  BottomBarSocialLinksImageSpaceId = "bottomBarSocialLinks___image___spaceId",
  BottomBarSocialLinksImageSysRevision = "bottomBarSocialLinks___image___sys___revision",
  BottomBarSocialLinksImageSysType = "bottomBarSocialLinks___image___sys___type",
  BottomBarSocialLinksImageTitle = "bottomBarSocialLinks___image___title",
  BottomBarSocialLinksImageUpdatedAt = "bottomBarSocialLinks___image___updatedAt",
  BottomBarSocialLinksImageUrl = "bottomBarSocialLinks___image___url",
  BottomBarSocialLinksImageWidth = "bottomBarSocialLinks___image___width",
  BottomBarSocialLinksInternalContent = "bottomBarSocialLinks___internal___content",
  BottomBarSocialLinksInternalContentDigest = "bottomBarSocialLinks___internal___contentDigest",
  BottomBarSocialLinksInternalDescription = "bottomBarSocialLinks___internal___description",
  BottomBarSocialLinksInternalFieldOwners = "bottomBarSocialLinks___internal___fieldOwners",
  BottomBarSocialLinksInternalIgnoreType = "bottomBarSocialLinks___internal___ignoreType",
  BottomBarSocialLinksInternalMediaType = "bottomBarSocialLinks___internal___mediaType",
  BottomBarSocialLinksInternalOwner = "bottomBarSocialLinks___internal___owner",
  BottomBarSocialLinksInternalType = "bottomBarSocialLinks___internal___type",
  BottomBarSocialLinksNodeLocale = "bottomBarSocialLinks___node_locale",
  BottomBarSocialLinksOptions = "bottomBarSocialLinks___options",
  BottomBarSocialLinksOptionsBottomBarLogoChildren = "bottomBarSocialLinks___options___bottomBarLogo___children",
  BottomBarSocialLinksOptionsBottomBarLogoChildrenContentfulLinkUrlTextNode = "bottomBarSocialLinks___options___bottomBarLogo___childrenContentfulLinkUrlTextNode",
  BottomBarSocialLinksOptionsBottomBarLogoContentfulId = "bottomBarSocialLinks___options___bottomBarLogo___contentful_id",
  BottomBarSocialLinksOptionsBottomBarLogoContentfulid = "bottomBarSocialLinks___options___bottomBarLogo___contentfulid",
  BottomBarSocialLinksOptionsBottomBarLogoCreatedAt = "bottomBarSocialLinks___options___bottomBarLogo___createdAt",
  BottomBarSocialLinksOptionsBottomBarLogoId = "bottomBarSocialLinks___options___bottomBarLogo___id",
  BottomBarSocialLinksOptionsBottomBarLogoNodeLocale = "bottomBarSocialLinks___options___bottomBarLogo___node_locale",
  BottomBarSocialLinksOptionsBottomBarLogoOptions = "bottomBarSocialLinks___options___bottomBarLogo___options",
  BottomBarSocialLinksOptionsBottomBarLogoSpaceId = "bottomBarSocialLinks___options___bottomBarLogo___spaceId",
  BottomBarSocialLinksOptionsBottomBarLogoTitle = "bottomBarSocialLinks___options___bottomBarLogo___title",
  BottomBarSocialLinksOptionsBottomBarLogoUpdatedAt = "bottomBarSocialLinks___options___bottomBarLogo___updatedAt",
  BottomBarSocialLinksOptionsBottomBarSocialLinks = "bottomBarSocialLinks___options___bottomBarSocialLinks",
  BottomBarSocialLinksOptionsBottomBarSocialLinksChildren = "bottomBarSocialLinks___options___bottomBarSocialLinks___children",
  BottomBarSocialLinksOptionsBottomBarSocialLinksChildrenContentfulLinkUrlTextNode = "bottomBarSocialLinks___options___bottomBarSocialLinks___childrenContentfulLinkUrlTextNode",
  BottomBarSocialLinksOptionsBottomBarSocialLinksContentfulId = "bottomBarSocialLinks___options___bottomBarSocialLinks___contentful_id",
  BottomBarSocialLinksOptionsBottomBarSocialLinksContentfulid = "bottomBarSocialLinks___options___bottomBarSocialLinks___contentfulid",
  BottomBarSocialLinksOptionsBottomBarSocialLinksCreatedAt = "bottomBarSocialLinks___options___bottomBarSocialLinks___createdAt",
  BottomBarSocialLinksOptionsBottomBarSocialLinksId = "bottomBarSocialLinks___options___bottomBarSocialLinks___id",
  BottomBarSocialLinksOptionsBottomBarSocialLinksNodeLocale = "bottomBarSocialLinks___options___bottomBarSocialLinks___node_locale",
  BottomBarSocialLinksOptionsBottomBarSocialLinksOptions = "bottomBarSocialLinks___options___bottomBarSocialLinks___options",
  BottomBarSocialLinksOptionsBottomBarSocialLinksSpaceId = "bottomBarSocialLinks___options___bottomBarSocialLinks___spaceId",
  BottomBarSocialLinksOptionsBottomBarSocialLinksTitle = "bottomBarSocialLinks___options___bottomBarSocialLinks___title",
  BottomBarSocialLinksOptionsBottomBarSocialLinksUpdatedAt = "bottomBarSocialLinks___options___bottomBarSocialLinks___updatedAt",
  BottomBarSocialLinksOptionsBottomBarTabs = "bottomBarSocialLinks___options___bottomBarTabs",
  BottomBarSocialLinksOptionsBottomBarTabsChildren = "bottomBarSocialLinks___options___bottomBarTabs___children",
  BottomBarSocialLinksOptionsBottomBarTabsChildrenContentfulLinkUrlTextNode = "bottomBarSocialLinks___options___bottomBarTabs___childrenContentfulLinkUrlTextNode",
  BottomBarSocialLinksOptionsBottomBarTabsContentfulId = "bottomBarSocialLinks___options___bottomBarTabs___contentful_id",
  BottomBarSocialLinksOptionsBottomBarTabsContentfulid = "bottomBarSocialLinks___options___bottomBarTabs___contentfulid",
  BottomBarSocialLinksOptionsBottomBarTabsCreatedAt = "bottomBarSocialLinks___options___bottomBarTabs___createdAt",
  BottomBarSocialLinksOptionsBottomBarTabsId = "bottomBarSocialLinks___options___bottomBarTabs___id",
  BottomBarSocialLinksOptionsBottomBarTabsNodeLocale = "bottomBarSocialLinks___options___bottomBarTabs___node_locale",
  BottomBarSocialLinksOptionsBottomBarTabsOptions = "bottomBarSocialLinks___options___bottomBarTabs___options",
  BottomBarSocialLinksOptionsBottomBarTabsSpaceId = "bottomBarSocialLinks___options___bottomBarTabs___spaceId",
  BottomBarSocialLinksOptionsBottomBarTabsTitle = "bottomBarSocialLinks___options___bottomBarTabs___title",
  BottomBarSocialLinksOptionsBottomBarTabsUpdatedAt = "bottomBarSocialLinks___options___bottomBarTabs___updatedAt",
  BottomBarSocialLinksOptionsChildren = "bottomBarSocialLinks___options___children",
  BottomBarSocialLinksOptionsChildrenChildren = "bottomBarSocialLinks___options___children___children",
  BottomBarSocialLinksOptionsChildrenId = "bottomBarSocialLinks___options___children___id",
  BottomBarSocialLinksOptionsContentfulId = "bottomBarSocialLinks___options___contentful_id",
  BottomBarSocialLinksOptionsContentfulid = "bottomBarSocialLinks___options___contentfulid",
  BottomBarSocialLinksOptionsCreatedAt = "bottomBarSocialLinks___options___createdAt",
  BottomBarSocialLinksOptionsId = "bottomBarSocialLinks___options___id",
  BottomBarSocialLinksOptionsInternalContent = "bottomBarSocialLinks___options___internal___content",
  BottomBarSocialLinksOptionsInternalContentDigest = "bottomBarSocialLinks___options___internal___contentDigest",
  BottomBarSocialLinksOptionsInternalDescription = "bottomBarSocialLinks___options___internal___description",
  BottomBarSocialLinksOptionsInternalFieldOwners = "bottomBarSocialLinks___options___internal___fieldOwners",
  BottomBarSocialLinksOptionsInternalIgnoreType = "bottomBarSocialLinks___options___internal___ignoreType",
  BottomBarSocialLinksOptionsInternalMediaType = "bottomBarSocialLinks___options___internal___mediaType",
  BottomBarSocialLinksOptionsInternalOwner = "bottomBarSocialLinks___options___internal___owner",
  BottomBarSocialLinksOptionsInternalType = "bottomBarSocialLinks___options___internal___type",
  BottomBarSocialLinksOptionsNodeLocale = "bottomBarSocialLinks___options___node_locale",
  BottomBarSocialLinksOptionsParentChildren = "bottomBarSocialLinks___options___parent___children",
  BottomBarSocialLinksOptionsParentId = "bottomBarSocialLinks___options___parent___id",
  BottomBarSocialLinksOptionsSpaceId = "bottomBarSocialLinks___options___spaceId",
  BottomBarSocialLinksOptionsSysRevision = "bottomBarSocialLinks___options___sys___revision",
  BottomBarSocialLinksOptionsSysType = "bottomBarSocialLinks___options___sys___type",
  BottomBarSocialLinksOptionsTopBarLogoChildren = "bottomBarSocialLinks___options___topBarLogo___children",
  BottomBarSocialLinksOptionsTopBarLogoChildrenContentfulLinkUrlTextNode = "bottomBarSocialLinks___options___topBarLogo___childrenContentfulLinkUrlTextNode",
  BottomBarSocialLinksOptionsTopBarLogoContentfulId = "bottomBarSocialLinks___options___topBarLogo___contentful_id",
  BottomBarSocialLinksOptionsTopBarLogoContentfulid = "bottomBarSocialLinks___options___topBarLogo___contentfulid",
  BottomBarSocialLinksOptionsTopBarLogoCreatedAt = "bottomBarSocialLinks___options___topBarLogo___createdAt",
  BottomBarSocialLinksOptionsTopBarLogoId = "bottomBarSocialLinks___options___topBarLogo___id",
  BottomBarSocialLinksOptionsTopBarLogoNodeLocale = "bottomBarSocialLinks___options___topBarLogo___node_locale",
  BottomBarSocialLinksOptionsTopBarLogoOptions = "bottomBarSocialLinks___options___topBarLogo___options",
  BottomBarSocialLinksOptionsTopBarLogoSpaceId = "bottomBarSocialLinks___options___topBarLogo___spaceId",
  BottomBarSocialLinksOptionsTopBarLogoTitle = "bottomBarSocialLinks___options___topBarLogo___title",
  BottomBarSocialLinksOptionsTopBarLogoUpdatedAt = "bottomBarSocialLinks___options___topBarLogo___updatedAt",
  BottomBarSocialLinksOptionsTopBarSocialLinks = "bottomBarSocialLinks___options___topBarSocialLinks",
  BottomBarSocialLinksOptionsTopBarSocialLinksChildren = "bottomBarSocialLinks___options___topBarSocialLinks___children",
  BottomBarSocialLinksOptionsTopBarSocialLinksChildrenContentfulLinkUrlTextNode = "bottomBarSocialLinks___options___topBarSocialLinks___childrenContentfulLinkUrlTextNode",
  BottomBarSocialLinksOptionsTopBarSocialLinksContentfulId = "bottomBarSocialLinks___options___topBarSocialLinks___contentful_id",
  BottomBarSocialLinksOptionsTopBarSocialLinksContentfulid = "bottomBarSocialLinks___options___topBarSocialLinks___contentfulid",
  BottomBarSocialLinksOptionsTopBarSocialLinksCreatedAt = "bottomBarSocialLinks___options___topBarSocialLinks___createdAt",
  BottomBarSocialLinksOptionsTopBarSocialLinksId = "bottomBarSocialLinks___options___topBarSocialLinks___id",
  BottomBarSocialLinksOptionsTopBarSocialLinksNodeLocale = "bottomBarSocialLinks___options___topBarSocialLinks___node_locale",
  BottomBarSocialLinksOptionsTopBarSocialLinksOptions = "bottomBarSocialLinks___options___topBarSocialLinks___options",
  BottomBarSocialLinksOptionsTopBarSocialLinksSpaceId = "bottomBarSocialLinks___options___topBarSocialLinks___spaceId",
  BottomBarSocialLinksOptionsTopBarSocialLinksTitle = "bottomBarSocialLinks___options___topBarSocialLinks___title",
  BottomBarSocialLinksOptionsTopBarSocialLinksUpdatedAt = "bottomBarSocialLinks___options___topBarSocialLinks___updatedAt",
  BottomBarSocialLinksOptionsTopBarTabs = "bottomBarSocialLinks___options___topBarTabs",
  BottomBarSocialLinksOptionsTopBarTabsChildren = "bottomBarSocialLinks___options___topBarTabs___children",
  BottomBarSocialLinksOptionsTopBarTabsChildrenContentfulLinkUrlTextNode = "bottomBarSocialLinks___options___topBarTabs___childrenContentfulLinkUrlTextNode",
  BottomBarSocialLinksOptionsTopBarTabsContentfulId = "bottomBarSocialLinks___options___topBarTabs___contentful_id",
  BottomBarSocialLinksOptionsTopBarTabsContentfulid = "bottomBarSocialLinks___options___topBarTabs___contentfulid",
  BottomBarSocialLinksOptionsTopBarTabsCreatedAt = "bottomBarSocialLinks___options___topBarTabs___createdAt",
  BottomBarSocialLinksOptionsTopBarTabsId = "bottomBarSocialLinks___options___topBarTabs___id",
  BottomBarSocialLinksOptionsTopBarTabsNodeLocale = "bottomBarSocialLinks___options___topBarTabs___node_locale",
  BottomBarSocialLinksOptionsTopBarTabsOptions = "bottomBarSocialLinks___options___topBarTabs___options",
  BottomBarSocialLinksOptionsTopBarTabsSpaceId = "bottomBarSocialLinks___options___topBarTabs___spaceId",
  BottomBarSocialLinksOptionsTopBarTabsTitle = "bottomBarSocialLinks___options___topBarTabs___title",
  BottomBarSocialLinksOptionsTopBarTabsUpdatedAt = "bottomBarSocialLinks___options___topBarTabs___updatedAt",
  BottomBarSocialLinksOptionsUpdatedAt = "bottomBarSocialLinks___options___updatedAt",
  BottomBarSocialLinksParentChildren = "bottomBarSocialLinks___parent___children",
  BottomBarSocialLinksParentChildrenChildren = "bottomBarSocialLinks___parent___children___children",
  BottomBarSocialLinksParentChildrenId = "bottomBarSocialLinks___parent___children___id",
  BottomBarSocialLinksParentId = "bottomBarSocialLinks___parent___id",
  BottomBarSocialLinksParentInternalContent = "bottomBarSocialLinks___parent___internal___content",
  BottomBarSocialLinksParentInternalContentDigest = "bottomBarSocialLinks___parent___internal___contentDigest",
  BottomBarSocialLinksParentInternalDescription = "bottomBarSocialLinks___parent___internal___description",
  BottomBarSocialLinksParentInternalFieldOwners = "bottomBarSocialLinks___parent___internal___fieldOwners",
  BottomBarSocialLinksParentInternalIgnoreType = "bottomBarSocialLinks___parent___internal___ignoreType",
  BottomBarSocialLinksParentInternalMediaType = "bottomBarSocialLinks___parent___internal___mediaType",
  BottomBarSocialLinksParentInternalOwner = "bottomBarSocialLinks___parent___internal___owner",
  BottomBarSocialLinksParentInternalType = "bottomBarSocialLinks___parent___internal___type",
  BottomBarSocialLinksParentParentChildren = "bottomBarSocialLinks___parent___parent___children",
  BottomBarSocialLinksParentParentId = "bottomBarSocialLinks___parent___parent___id",
  BottomBarSocialLinksSpaceId = "bottomBarSocialLinks___spaceId",
  BottomBarSocialLinksSysRevision = "bottomBarSocialLinks___sys___revision",
  BottomBarSocialLinksSysType = "bottomBarSocialLinks___sys___type",
  BottomBarSocialLinksTitle = "bottomBarSocialLinks___title",
  BottomBarSocialLinksUpdatedAt = "bottomBarSocialLinks___updatedAt",
  BottomBarSocialLinksUrlChildMdxBody = "bottomBarSocialLinks___url___childMdx___body",
  BottomBarSocialLinksUrlChildMdxChildren = "bottomBarSocialLinks___url___childMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarSocialLinksUrlChildMdxExcerpt = "bottomBarSocialLinks___url___childMdx___excerpt",
  BottomBarSocialLinksUrlChildMdxFileAbsolutePath = "bottomBarSocialLinks___url___childMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarSocialLinksUrlChildMdxHeadings = "bottomBarSocialLinks___url___childMdx___headings",
  BottomBarSocialLinksUrlChildMdxHtml = "bottomBarSocialLinks___url___childMdx___html",
  BottomBarSocialLinksUrlChildMdxId = "bottomBarSocialLinks___url___childMdx___id",
  BottomBarSocialLinksUrlChildMdxMdxAst = "bottomBarSocialLinks___url___childMdx___mdxAST",
  BottomBarSocialLinksUrlChildMdxRawBody = "bottomBarSocialLinks___url___childMdx___rawBody",
  BottomBarSocialLinksUrlChildMdxSlug = "bottomBarSocialLinks___url___childMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarSocialLinksUrlChildMdxTableOfContents = "bottomBarSocialLinks___url___childMdx___tableOfContents",
  BottomBarSocialLinksUrlChildMdxTimeToRead = "bottomBarSocialLinks___url___childMdx___timeToRead",
  BottomBarSocialLinksUrlChildren = "bottomBarSocialLinks___url___children",
  BottomBarSocialLinksUrlChildrenMdx = "bottomBarSocialLinks___url___childrenMdx",
  BottomBarSocialLinksUrlChildrenMdxBody = "bottomBarSocialLinks___url___childrenMdx___body",
  BottomBarSocialLinksUrlChildrenMdxChildren = "bottomBarSocialLinks___url___childrenMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarSocialLinksUrlChildrenMdxExcerpt = "bottomBarSocialLinks___url___childrenMdx___excerpt",
  BottomBarSocialLinksUrlChildrenMdxFileAbsolutePath = "bottomBarSocialLinks___url___childrenMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarSocialLinksUrlChildrenMdxHeadings = "bottomBarSocialLinks___url___childrenMdx___headings",
  BottomBarSocialLinksUrlChildrenMdxHtml = "bottomBarSocialLinks___url___childrenMdx___html",
  BottomBarSocialLinksUrlChildrenMdxId = "bottomBarSocialLinks___url___childrenMdx___id",
  BottomBarSocialLinksUrlChildrenMdxMdxAst = "bottomBarSocialLinks___url___childrenMdx___mdxAST",
  BottomBarSocialLinksUrlChildrenMdxRawBody = "bottomBarSocialLinks___url___childrenMdx___rawBody",
  BottomBarSocialLinksUrlChildrenMdxSlug = "bottomBarSocialLinks___url___childrenMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarSocialLinksUrlChildrenMdxTableOfContents = "bottomBarSocialLinks___url___childrenMdx___tableOfContents",
  BottomBarSocialLinksUrlChildrenMdxTimeToRead = "bottomBarSocialLinks___url___childrenMdx___timeToRead",
  BottomBarSocialLinksUrlChildrenChildren = "bottomBarSocialLinks___url___children___children",
  BottomBarSocialLinksUrlChildrenId = "bottomBarSocialLinks___url___children___id",
  BottomBarSocialLinksUrlId = "bottomBarSocialLinks___url___id",
  BottomBarSocialLinksUrlInternalContent = "bottomBarSocialLinks___url___internal___content",
  BottomBarSocialLinksUrlInternalContentDigest = "bottomBarSocialLinks___url___internal___contentDigest",
  BottomBarSocialLinksUrlInternalDescription = "bottomBarSocialLinks___url___internal___description",
  BottomBarSocialLinksUrlInternalFieldOwners = "bottomBarSocialLinks___url___internal___fieldOwners",
  BottomBarSocialLinksUrlInternalIgnoreType = "bottomBarSocialLinks___url___internal___ignoreType",
  BottomBarSocialLinksUrlInternalMediaType = "bottomBarSocialLinks___url___internal___mediaType",
  BottomBarSocialLinksUrlInternalOwner = "bottomBarSocialLinks___url___internal___owner",
  BottomBarSocialLinksUrlInternalType = "bottomBarSocialLinks___url___internal___type",
  BottomBarSocialLinksUrlParentChildren = "bottomBarSocialLinks___url___parent___children",
  BottomBarSocialLinksUrlParentId = "bottomBarSocialLinks___url___parent___id",
  BottomBarSocialLinksUrlSysType = "bottomBarSocialLinks___url___sys___type",
  BottomBarSocialLinksUrlUrl = "bottomBarSocialLinks___url___url",
  BottomBarTabs = "bottomBarTabs",
  BottomBarTabsChildContentfulLinkUrlTextNodeChildMdxBody = "bottomBarTabs___childContentfulLinkUrlTextNode___childMdx___body",
  BottomBarTabsChildContentfulLinkUrlTextNodeChildMdxChildren = "bottomBarTabs___childContentfulLinkUrlTextNode___childMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarTabsChildContentfulLinkUrlTextNodeChildMdxExcerpt = "bottomBarTabs___childContentfulLinkUrlTextNode___childMdx___excerpt",
  BottomBarTabsChildContentfulLinkUrlTextNodeChildMdxFileAbsolutePath = "bottomBarTabs___childContentfulLinkUrlTextNode___childMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarTabsChildContentfulLinkUrlTextNodeChildMdxHeadings = "bottomBarTabs___childContentfulLinkUrlTextNode___childMdx___headings",
  BottomBarTabsChildContentfulLinkUrlTextNodeChildMdxHtml = "bottomBarTabs___childContentfulLinkUrlTextNode___childMdx___html",
  BottomBarTabsChildContentfulLinkUrlTextNodeChildMdxId = "bottomBarTabs___childContentfulLinkUrlTextNode___childMdx___id",
  BottomBarTabsChildContentfulLinkUrlTextNodeChildMdxMdxAst = "bottomBarTabs___childContentfulLinkUrlTextNode___childMdx___mdxAST",
  BottomBarTabsChildContentfulLinkUrlTextNodeChildMdxRawBody = "bottomBarTabs___childContentfulLinkUrlTextNode___childMdx___rawBody",
  BottomBarTabsChildContentfulLinkUrlTextNodeChildMdxSlug = "bottomBarTabs___childContentfulLinkUrlTextNode___childMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarTabsChildContentfulLinkUrlTextNodeChildMdxTableOfContents = "bottomBarTabs___childContentfulLinkUrlTextNode___childMdx___tableOfContents",
  BottomBarTabsChildContentfulLinkUrlTextNodeChildMdxTimeToRead = "bottomBarTabs___childContentfulLinkUrlTextNode___childMdx___timeToRead",
  BottomBarTabsChildContentfulLinkUrlTextNodeChildren = "bottomBarTabs___childContentfulLinkUrlTextNode___children",
  BottomBarTabsChildContentfulLinkUrlTextNodeChildrenMdx = "bottomBarTabs___childContentfulLinkUrlTextNode___childrenMdx",
  BottomBarTabsChildContentfulLinkUrlTextNodeChildrenMdxBody = "bottomBarTabs___childContentfulLinkUrlTextNode___childrenMdx___body",
  BottomBarTabsChildContentfulLinkUrlTextNodeChildrenMdxChildren = "bottomBarTabs___childContentfulLinkUrlTextNode___childrenMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarTabsChildContentfulLinkUrlTextNodeChildrenMdxExcerpt = "bottomBarTabs___childContentfulLinkUrlTextNode___childrenMdx___excerpt",
  BottomBarTabsChildContentfulLinkUrlTextNodeChildrenMdxFileAbsolutePath = "bottomBarTabs___childContentfulLinkUrlTextNode___childrenMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarTabsChildContentfulLinkUrlTextNodeChildrenMdxHeadings = "bottomBarTabs___childContentfulLinkUrlTextNode___childrenMdx___headings",
  BottomBarTabsChildContentfulLinkUrlTextNodeChildrenMdxHtml = "bottomBarTabs___childContentfulLinkUrlTextNode___childrenMdx___html",
  BottomBarTabsChildContentfulLinkUrlTextNodeChildrenMdxId = "bottomBarTabs___childContentfulLinkUrlTextNode___childrenMdx___id",
  BottomBarTabsChildContentfulLinkUrlTextNodeChildrenMdxMdxAst = "bottomBarTabs___childContentfulLinkUrlTextNode___childrenMdx___mdxAST",
  BottomBarTabsChildContentfulLinkUrlTextNodeChildrenMdxRawBody = "bottomBarTabs___childContentfulLinkUrlTextNode___childrenMdx___rawBody",
  BottomBarTabsChildContentfulLinkUrlTextNodeChildrenMdxSlug = "bottomBarTabs___childContentfulLinkUrlTextNode___childrenMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarTabsChildContentfulLinkUrlTextNodeChildrenMdxTableOfContents = "bottomBarTabs___childContentfulLinkUrlTextNode___childrenMdx___tableOfContents",
  BottomBarTabsChildContentfulLinkUrlTextNodeChildrenMdxTimeToRead = "bottomBarTabs___childContentfulLinkUrlTextNode___childrenMdx___timeToRead",
  BottomBarTabsChildContentfulLinkUrlTextNodeChildrenChildren = "bottomBarTabs___childContentfulLinkUrlTextNode___children___children",
  BottomBarTabsChildContentfulLinkUrlTextNodeChildrenId = "bottomBarTabs___childContentfulLinkUrlTextNode___children___id",
  BottomBarTabsChildContentfulLinkUrlTextNodeId = "bottomBarTabs___childContentfulLinkUrlTextNode___id",
  BottomBarTabsChildContentfulLinkUrlTextNodeInternalContent = "bottomBarTabs___childContentfulLinkUrlTextNode___internal___content",
  BottomBarTabsChildContentfulLinkUrlTextNodeInternalContentDigest = "bottomBarTabs___childContentfulLinkUrlTextNode___internal___contentDigest",
  BottomBarTabsChildContentfulLinkUrlTextNodeInternalDescription = "bottomBarTabs___childContentfulLinkUrlTextNode___internal___description",
  BottomBarTabsChildContentfulLinkUrlTextNodeInternalFieldOwners = "bottomBarTabs___childContentfulLinkUrlTextNode___internal___fieldOwners",
  BottomBarTabsChildContentfulLinkUrlTextNodeInternalIgnoreType = "bottomBarTabs___childContentfulLinkUrlTextNode___internal___ignoreType",
  BottomBarTabsChildContentfulLinkUrlTextNodeInternalMediaType = "bottomBarTabs___childContentfulLinkUrlTextNode___internal___mediaType",
  BottomBarTabsChildContentfulLinkUrlTextNodeInternalOwner = "bottomBarTabs___childContentfulLinkUrlTextNode___internal___owner",
  BottomBarTabsChildContentfulLinkUrlTextNodeInternalType = "bottomBarTabs___childContentfulLinkUrlTextNode___internal___type",
  BottomBarTabsChildContentfulLinkUrlTextNodeParentChildren = "bottomBarTabs___childContentfulLinkUrlTextNode___parent___children",
  BottomBarTabsChildContentfulLinkUrlTextNodeParentId = "bottomBarTabs___childContentfulLinkUrlTextNode___parent___id",
  BottomBarTabsChildContentfulLinkUrlTextNodeSysType = "bottomBarTabs___childContentfulLinkUrlTextNode___sys___type",
  BottomBarTabsChildContentfulLinkUrlTextNodeUrl = "bottomBarTabs___childContentfulLinkUrlTextNode___url",
  BottomBarTabsChildren = "bottomBarTabs___children",
  BottomBarTabsChildrenContentfulLinkUrlTextNode = "bottomBarTabs___childrenContentfulLinkUrlTextNode",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeChildMdxBody = "bottomBarTabs___childrenContentfulLinkUrlTextNode___childMdx___body",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeChildMdxChildren = "bottomBarTabs___childrenContentfulLinkUrlTextNode___childMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarTabsChildrenContentfulLinkUrlTextNodeChildMdxExcerpt = "bottomBarTabs___childrenContentfulLinkUrlTextNode___childMdx___excerpt",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeChildMdxFileAbsolutePath = "bottomBarTabs___childrenContentfulLinkUrlTextNode___childMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarTabsChildrenContentfulLinkUrlTextNodeChildMdxHeadings = "bottomBarTabs___childrenContentfulLinkUrlTextNode___childMdx___headings",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeChildMdxHtml = "bottomBarTabs___childrenContentfulLinkUrlTextNode___childMdx___html",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeChildMdxId = "bottomBarTabs___childrenContentfulLinkUrlTextNode___childMdx___id",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeChildMdxMdxAst = "bottomBarTabs___childrenContentfulLinkUrlTextNode___childMdx___mdxAST",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeChildMdxRawBody = "bottomBarTabs___childrenContentfulLinkUrlTextNode___childMdx___rawBody",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeChildMdxSlug = "bottomBarTabs___childrenContentfulLinkUrlTextNode___childMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarTabsChildrenContentfulLinkUrlTextNodeChildMdxTableOfContents = "bottomBarTabs___childrenContentfulLinkUrlTextNode___childMdx___tableOfContents",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeChildMdxTimeToRead = "bottomBarTabs___childrenContentfulLinkUrlTextNode___childMdx___timeToRead",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeChildren = "bottomBarTabs___childrenContentfulLinkUrlTextNode___children",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeChildrenMdx = "bottomBarTabs___childrenContentfulLinkUrlTextNode___childrenMdx",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeChildrenMdxBody = "bottomBarTabs___childrenContentfulLinkUrlTextNode___childrenMdx___body",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeChildrenMdxChildren = "bottomBarTabs___childrenContentfulLinkUrlTextNode___childrenMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarTabsChildrenContentfulLinkUrlTextNodeChildrenMdxExcerpt = "bottomBarTabs___childrenContentfulLinkUrlTextNode___childrenMdx___excerpt",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeChildrenMdxFileAbsolutePath = "bottomBarTabs___childrenContentfulLinkUrlTextNode___childrenMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarTabsChildrenContentfulLinkUrlTextNodeChildrenMdxHeadings = "bottomBarTabs___childrenContentfulLinkUrlTextNode___childrenMdx___headings",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeChildrenMdxHtml = "bottomBarTabs___childrenContentfulLinkUrlTextNode___childrenMdx___html",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeChildrenMdxId = "bottomBarTabs___childrenContentfulLinkUrlTextNode___childrenMdx___id",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeChildrenMdxMdxAst = "bottomBarTabs___childrenContentfulLinkUrlTextNode___childrenMdx___mdxAST",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeChildrenMdxRawBody = "bottomBarTabs___childrenContentfulLinkUrlTextNode___childrenMdx___rawBody",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeChildrenMdxSlug = "bottomBarTabs___childrenContentfulLinkUrlTextNode___childrenMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarTabsChildrenContentfulLinkUrlTextNodeChildrenMdxTableOfContents = "bottomBarTabs___childrenContentfulLinkUrlTextNode___childrenMdx___tableOfContents",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeChildrenMdxTimeToRead = "bottomBarTabs___childrenContentfulLinkUrlTextNode___childrenMdx___timeToRead",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeChildrenChildren = "bottomBarTabs___childrenContentfulLinkUrlTextNode___children___children",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeChildrenId = "bottomBarTabs___childrenContentfulLinkUrlTextNode___children___id",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeId = "bottomBarTabs___childrenContentfulLinkUrlTextNode___id",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeInternalContent = "bottomBarTabs___childrenContentfulLinkUrlTextNode___internal___content",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeInternalContentDigest = "bottomBarTabs___childrenContentfulLinkUrlTextNode___internal___contentDigest",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeInternalDescription = "bottomBarTabs___childrenContentfulLinkUrlTextNode___internal___description",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeInternalFieldOwners = "bottomBarTabs___childrenContentfulLinkUrlTextNode___internal___fieldOwners",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeInternalIgnoreType = "bottomBarTabs___childrenContentfulLinkUrlTextNode___internal___ignoreType",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeInternalMediaType = "bottomBarTabs___childrenContentfulLinkUrlTextNode___internal___mediaType",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeInternalOwner = "bottomBarTabs___childrenContentfulLinkUrlTextNode___internal___owner",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeInternalType = "bottomBarTabs___childrenContentfulLinkUrlTextNode___internal___type",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeParentChildren = "bottomBarTabs___childrenContentfulLinkUrlTextNode___parent___children",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeParentId = "bottomBarTabs___childrenContentfulLinkUrlTextNode___parent___id",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeSysType = "bottomBarTabs___childrenContentfulLinkUrlTextNode___sys___type",
  BottomBarTabsChildrenContentfulLinkUrlTextNodeUrl = "bottomBarTabs___childrenContentfulLinkUrlTextNode___url",
  BottomBarTabsChildrenChildren = "bottomBarTabs___children___children",
  BottomBarTabsChildrenChildrenChildren = "bottomBarTabs___children___children___children",
  BottomBarTabsChildrenChildrenId = "bottomBarTabs___children___children___id",
  BottomBarTabsChildrenId = "bottomBarTabs___children___id",
  BottomBarTabsChildrenInternalContent = "bottomBarTabs___children___internal___content",
  BottomBarTabsChildrenInternalContentDigest = "bottomBarTabs___children___internal___contentDigest",
  BottomBarTabsChildrenInternalDescription = "bottomBarTabs___children___internal___description",
  BottomBarTabsChildrenInternalFieldOwners = "bottomBarTabs___children___internal___fieldOwners",
  BottomBarTabsChildrenInternalIgnoreType = "bottomBarTabs___children___internal___ignoreType",
  BottomBarTabsChildrenInternalMediaType = "bottomBarTabs___children___internal___mediaType",
  BottomBarTabsChildrenInternalOwner = "bottomBarTabs___children___internal___owner",
  BottomBarTabsChildrenInternalType = "bottomBarTabs___children___internal___type",
  BottomBarTabsChildrenParentChildren = "bottomBarTabs___children___parent___children",
  BottomBarTabsChildrenParentId = "bottomBarTabs___children___parent___id",
  BottomBarTabsContentfulId = "bottomBarTabs___contentful_id",
  BottomBarTabsContentfulid = "bottomBarTabs___contentfulid",
  BottomBarTabsCreatedAt = "bottomBarTabs___createdAt",
  BottomBarTabsId = "bottomBarTabs___id",
  BottomBarTabsImageChildren = "bottomBarTabs___image___children",
  BottomBarTabsImageChildrenChildren = "bottomBarTabs___image___children___children",
  BottomBarTabsImageChildrenId = "bottomBarTabs___image___children___id",
  BottomBarTabsImageContentfulId = "bottomBarTabs___image___contentful_id",
  BottomBarTabsImageCreatedAt = "bottomBarTabs___image___createdAt",
  BottomBarTabsImageDescription = "bottomBarTabs___image___description",
  BottomBarTabsImageFileContentType = "bottomBarTabs___image___file___contentType",
  BottomBarTabsImageFileFileName = "bottomBarTabs___image___file___fileName",
  BottomBarTabsImageFileUrl = "bottomBarTabs___image___file___url",
  BottomBarTabsImageFilename = "bottomBarTabs___image___filename",
  BottomBarTabsImageFilesize = "bottomBarTabs___image___filesize",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarTabsImageGatsbyImage = "bottomBarTabs___image___gatsbyImage",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarTabsImageGatsbyImageData = "bottomBarTabs___image___gatsbyImageData",
  BottomBarTabsImageHeight = "bottomBarTabs___image___height",
  BottomBarTabsImageId = "bottomBarTabs___image___id",
  BottomBarTabsImageInternalContent = "bottomBarTabs___image___internal___content",
  BottomBarTabsImageInternalContentDigest = "bottomBarTabs___image___internal___contentDigest",
  BottomBarTabsImageInternalDescription = "bottomBarTabs___image___internal___description",
  BottomBarTabsImageInternalFieldOwners = "bottomBarTabs___image___internal___fieldOwners",
  BottomBarTabsImageInternalIgnoreType = "bottomBarTabs___image___internal___ignoreType",
  BottomBarTabsImageInternalMediaType = "bottomBarTabs___image___internal___mediaType",
  BottomBarTabsImageInternalOwner = "bottomBarTabs___image___internal___owner",
  BottomBarTabsImageInternalType = "bottomBarTabs___image___internal___type",
  BottomBarTabsImageMimeType = "bottomBarTabs___image___mimeType",
  BottomBarTabsImageNodeLocale = "bottomBarTabs___image___node_locale",
  BottomBarTabsImageParentChildren = "bottomBarTabs___image___parent___children",
  BottomBarTabsImageParentId = "bottomBarTabs___image___parent___id",
  BottomBarTabsImagePlaceholderUrl = "bottomBarTabs___image___placeholderUrl",
  BottomBarTabsImagePublicUrl = "bottomBarTabs___image___publicUrl",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarTabsImageResizeHeight = "bottomBarTabs___image___resize___height",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarTabsImageResizeSrc = "bottomBarTabs___image___resize___src",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarTabsImageResizeWidth = "bottomBarTabs___image___resize___width",
  BottomBarTabsImageSpaceId = "bottomBarTabs___image___spaceId",
  BottomBarTabsImageSysRevision = "bottomBarTabs___image___sys___revision",
  BottomBarTabsImageSysType = "bottomBarTabs___image___sys___type",
  BottomBarTabsImageTitle = "bottomBarTabs___image___title",
  BottomBarTabsImageUpdatedAt = "bottomBarTabs___image___updatedAt",
  BottomBarTabsImageUrl = "bottomBarTabs___image___url",
  BottomBarTabsImageWidth = "bottomBarTabs___image___width",
  BottomBarTabsInternalContent = "bottomBarTabs___internal___content",
  BottomBarTabsInternalContentDigest = "bottomBarTabs___internal___contentDigest",
  BottomBarTabsInternalDescription = "bottomBarTabs___internal___description",
  BottomBarTabsInternalFieldOwners = "bottomBarTabs___internal___fieldOwners",
  BottomBarTabsInternalIgnoreType = "bottomBarTabs___internal___ignoreType",
  BottomBarTabsInternalMediaType = "bottomBarTabs___internal___mediaType",
  BottomBarTabsInternalOwner = "bottomBarTabs___internal___owner",
  BottomBarTabsInternalType = "bottomBarTabs___internal___type",
  BottomBarTabsNodeLocale = "bottomBarTabs___node_locale",
  BottomBarTabsOptions = "bottomBarTabs___options",
  BottomBarTabsOptionsBottomBarLogoChildren = "bottomBarTabs___options___bottomBarLogo___children",
  BottomBarTabsOptionsBottomBarLogoChildrenContentfulLinkUrlTextNode = "bottomBarTabs___options___bottomBarLogo___childrenContentfulLinkUrlTextNode",
  BottomBarTabsOptionsBottomBarLogoContentfulId = "bottomBarTabs___options___bottomBarLogo___contentful_id",
  BottomBarTabsOptionsBottomBarLogoContentfulid = "bottomBarTabs___options___bottomBarLogo___contentfulid",
  BottomBarTabsOptionsBottomBarLogoCreatedAt = "bottomBarTabs___options___bottomBarLogo___createdAt",
  BottomBarTabsOptionsBottomBarLogoId = "bottomBarTabs___options___bottomBarLogo___id",
  BottomBarTabsOptionsBottomBarLogoNodeLocale = "bottomBarTabs___options___bottomBarLogo___node_locale",
  BottomBarTabsOptionsBottomBarLogoOptions = "bottomBarTabs___options___bottomBarLogo___options",
  BottomBarTabsOptionsBottomBarLogoSpaceId = "bottomBarTabs___options___bottomBarLogo___spaceId",
  BottomBarTabsOptionsBottomBarLogoTitle = "bottomBarTabs___options___bottomBarLogo___title",
  BottomBarTabsOptionsBottomBarLogoUpdatedAt = "bottomBarTabs___options___bottomBarLogo___updatedAt",
  BottomBarTabsOptionsBottomBarSocialLinks = "bottomBarTabs___options___bottomBarSocialLinks",
  BottomBarTabsOptionsBottomBarSocialLinksChildren = "bottomBarTabs___options___bottomBarSocialLinks___children",
  BottomBarTabsOptionsBottomBarSocialLinksChildrenContentfulLinkUrlTextNode = "bottomBarTabs___options___bottomBarSocialLinks___childrenContentfulLinkUrlTextNode",
  BottomBarTabsOptionsBottomBarSocialLinksContentfulId = "bottomBarTabs___options___bottomBarSocialLinks___contentful_id",
  BottomBarTabsOptionsBottomBarSocialLinksContentfulid = "bottomBarTabs___options___bottomBarSocialLinks___contentfulid",
  BottomBarTabsOptionsBottomBarSocialLinksCreatedAt = "bottomBarTabs___options___bottomBarSocialLinks___createdAt",
  BottomBarTabsOptionsBottomBarSocialLinksId = "bottomBarTabs___options___bottomBarSocialLinks___id",
  BottomBarTabsOptionsBottomBarSocialLinksNodeLocale = "bottomBarTabs___options___bottomBarSocialLinks___node_locale",
  BottomBarTabsOptionsBottomBarSocialLinksOptions = "bottomBarTabs___options___bottomBarSocialLinks___options",
  BottomBarTabsOptionsBottomBarSocialLinksSpaceId = "bottomBarTabs___options___bottomBarSocialLinks___spaceId",
  BottomBarTabsOptionsBottomBarSocialLinksTitle = "bottomBarTabs___options___bottomBarSocialLinks___title",
  BottomBarTabsOptionsBottomBarSocialLinksUpdatedAt = "bottomBarTabs___options___bottomBarSocialLinks___updatedAt",
  BottomBarTabsOptionsBottomBarTabs = "bottomBarTabs___options___bottomBarTabs",
  BottomBarTabsOptionsBottomBarTabsChildren = "bottomBarTabs___options___bottomBarTabs___children",
  BottomBarTabsOptionsBottomBarTabsChildrenContentfulLinkUrlTextNode = "bottomBarTabs___options___bottomBarTabs___childrenContentfulLinkUrlTextNode",
  BottomBarTabsOptionsBottomBarTabsContentfulId = "bottomBarTabs___options___bottomBarTabs___contentful_id",
  BottomBarTabsOptionsBottomBarTabsContentfulid = "bottomBarTabs___options___bottomBarTabs___contentfulid",
  BottomBarTabsOptionsBottomBarTabsCreatedAt = "bottomBarTabs___options___bottomBarTabs___createdAt",
  BottomBarTabsOptionsBottomBarTabsId = "bottomBarTabs___options___bottomBarTabs___id",
  BottomBarTabsOptionsBottomBarTabsNodeLocale = "bottomBarTabs___options___bottomBarTabs___node_locale",
  BottomBarTabsOptionsBottomBarTabsOptions = "bottomBarTabs___options___bottomBarTabs___options",
  BottomBarTabsOptionsBottomBarTabsSpaceId = "bottomBarTabs___options___bottomBarTabs___spaceId",
  BottomBarTabsOptionsBottomBarTabsTitle = "bottomBarTabs___options___bottomBarTabs___title",
  BottomBarTabsOptionsBottomBarTabsUpdatedAt = "bottomBarTabs___options___bottomBarTabs___updatedAt",
  BottomBarTabsOptionsChildren = "bottomBarTabs___options___children",
  BottomBarTabsOptionsChildrenChildren = "bottomBarTabs___options___children___children",
  BottomBarTabsOptionsChildrenId = "bottomBarTabs___options___children___id",
  BottomBarTabsOptionsContentfulId = "bottomBarTabs___options___contentful_id",
  BottomBarTabsOptionsContentfulid = "bottomBarTabs___options___contentfulid",
  BottomBarTabsOptionsCreatedAt = "bottomBarTabs___options___createdAt",
  BottomBarTabsOptionsId = "bottomBarTabs___options___id",
  BottomBarTabsOptionsInternalContent = "bottomBarTabs___options___internal___content",
  BottomBarTabsOptionsInternalContentDigest = "bottomBarTabs___options___internal___contentDigest",
  BottomBarTabsOptionsInternalDescription = "bottomBarTabs___options___internal___description",
  BottomBarTabsOptionsInternalFieldOwners = "bottomBarTabs___options___internal___fieldOwners",
  BottomBarTabsOptionsInternalIgnoreType = "bottomBarTabs___options___internal___ignoreType",
  BottomBarTabsOptionsInternalMediaType = "bottomBarTabs___options___internal___mediaType",
  BottomBarTabsOptionsInternalOwner = "bottomBarTabs___options___internal___owner",
  BottomBarTabsOptionsInternalType = "bottomBarTabs___options___internal___type",
  BottomBarTabsOptionsNodeLocale = "bottomBarTabs___options___node_locale",
  BottomBarTabsOptionsParentChildren = "bottomBarTabs___options___parent___children",
  BottomBarTabsOptionsParentId = "bottomBarTabs___options___parent___id",
  BottomBarTabsOptionsSpaceId = "bottomBarTabs___options___spaceId",
  BottomBarTabsOptionsSysRevision = "bottomBarTabs___options___sys___revision",
  BottomBarTabsOptionsSysType = "bottomBarTabs___options___sys___type",
  BottomBarTabsOptionsTopBarLogoChildren = "bottomBarTabs___options___topBarLogo___children",
  BottomBarTabsOptionsTopBarLogoChildrenContentfulLinkUrlTextNode = "bottomBarTabs___options___topBarLogo___childrenContentfulLinkUrlTextNode",
  BottomBarTabsOptionsTopBarLogoContentfulId = "bottomBarTabs___options___topBarLogo___contentful_id",
  BottomBarTabsOptionsTopBarLogoContentfulid = "bottomBarTabs___options___topBarLogo___contentfulid",
  BottomBarTabsOptionsTopBarLogoCreatedAt = "bottomBarTabs___options___topBarLogo___createdAt",
  BottomBarTabsOptionsTopBarLogoId = "bottomBarTabs___options___topBarLogo___id",
  BottomBarTabsOptionsTopBarLogoNodeLocale = "bottomBarTabs___options___topBarLogo___node_locale",
  BottomBarTabsOptionsTopBarLogoOptions = "bottomBarTabs___options___topBarLogo___options",
  BottomBarTabsOptionsTopBarLogoSpaceId = "bottomBarTabs___options___topBarLogo___spaceId",
  BottomBarTabsOptionsTopBarLogoTitle = "bottomBarTabs___options___topBarLogo___title",
  BottomBarTabsOptionsTopBarLogoUpdatedAt = "bottomBarTabs___options___topBarLogo___updatedAt",
  BottomBarTabsOptionsTopBarSocialLinks = "bottomBarTabs___options___topBarSocialLinks",
  BottomBarTabsOptionsTopBarSocialLinksChildren = "bottomBarTabs___options___topBarSocialLinks___children",
  BottomBarTabsOptionsTopBarSocialLinksChildrenContentfulLinkUrlTextNode = "bottomBarTabs___options___topBarSocialLinks___childrenContentfulLinkUrlTextNode",
  BottomBarTabsOptionsTopBarSocialLinksContentfulId = "bottomBarTabs___options___topBarSocialLinks___contentful_id",
  BottomBarTabsOptionsTopBarSocialLinksContentfulid = "bottomBarTabs___options___topBarSocialLinks___contentfulid",
  BottomBarTabsOptionsTopBarSocialLinksCreatedAt = "bottomBarTabs___options___topBarSocialLinks___createdAt",
  BottomBarTabsOptionsTopBarSocialLinksId = "bottomBarTabs___options___topBarSocialLinks___id",
  BottomBarTabsOptionsTopBarSocialLinksNodeLocale = "bottomBarTabs___options___topBarSocialLinks___node_locale",
  BottomBarTabsOptionsTopBarSocialLinksOptions = "bottomBarTabs___options___topBarSocialLinks___options",
  BottomBarTabsOptionsTopBarSocialLinksSpaceId = "bottomBarTabs___options___topBarSocialLinks___spaceId",
  BottomBarTabsOptionsTopBarSocialLinksTitle = "bottomBarTabs___options___topBarSocialLinks___title",
  BottomBarTabsOptionsTopBarSocialLinksUpdatedAt = "bottomBarTabs___options___topBarSocialLinks___updatedAt",
  BottomBarTabsOptionsTopBarTabs = "bottomBarTabs___options___topBarTabs",
  BottomBarTabsOptionsTopBarTabsChildren = "bottomBarTabs___options___topBarTabs___children",
  BottomBarTabsOptionsTopBarTabsChildrenContentfulLinkUrlTextNode = "bottomBarTabs___options___topBarTabs___childrenContentfulLinkUrlTextNode",
  BottomBarTabsOptionsTopBarTabsContentfulId = "bottomBarTabs___options___topBarTabs___contentful_id",
  BottomBarTabsOptionsTopBarTabsContentfulid = "bottomBarTabs___options___topBarTabs___contentfulid",
  BottomBarTabsOptionsTopBarTabsCreatedAt = "bottomBarTabs___options___topBarTabs___createdAt",
  BottomBarTabsOptionsTopBarTabsId = "bottomBarTabs___options___topBarTabs___id",
  BottomBarTabsOptionsTopBarTabsNodeLocale = "bottomBarTabs___options___topBarTabs___node_locale",
  BottomBarTabsOptionsTopBarTabsOptions = "bottomBarTabs___options___topBarTabs___options",
  BottomBarTabsOptionsTopBarTabsSpaceId = "bottomBarTabs___options___topBarTabs___spaceId",
  BottomBarTabsOptionsTopBarTabsTitle = "bottomBarTabs___options___topBarTabs___title",
  BottomBarTabsOptionsTopBarTabsUpdatedAt = "bottomBarTabs___options___topBarTabs___updatedAt",
  BottomBarTabsOptionsUpdatedAt = "bottomBarTabs___options___updatedAt",
  BottomBarTabsParentChildren = "bottomBarTabs___parent___children",
  BottomBarTabsParentChildrenChildren = "bottomBarTabs___parent___children___children",
  BottomBarTabsParentChildrenId = "bottomBarTabs___parent___children___id",
  BottomBarTabsParentId = "bottomBarTabs___parent___id",
  BottomBarTabsParentInternalContent = "bottomBarTabs___parent___internal___content",
  BottomBarTabsParentInternalContentDigest = "bottomBarTabs___parent___internal___contentDigest",
  BottomBarTabsParentInternalDescription = "bottomBarTabs___parent___internal___description",
  BottomBarTabsParentInternalFieldOwners = "bottomBarTabs___parent___internal___fieldOwners",
  BottomBarTabsParentInternalIgnoreType = "bottomBarTabs___parent___internal___ignoreType",
  BottomBarTabsParentInternalMediaType = "bottomBarTabs___parent___internal___mediaType",
  BottomBarTabsParentInternalOwner = "bottomBarTabs___parent___internal___owner",
  BottomBarTabsParentInternalType = "bottomBarTabs___parent___internal___type",
  BottomBarTabsParentParentChildren = "bottomBarTabs___parent___parent___children",
  BottomBarTabsParentParentId = "bottomBarTabs___parent___parent___id",
  BottomBarTabsSpaceId = "bottomBarTabs___spaceId",
  BottomBarTabsSysRevision = "bottomBarTabs___sys___revision",
  BottomBarTabsSysType = "bottomBarTabs___sys___type",
  BottomBarTabsTitle = "bottomBarTabs___title",
  BottomBarTabsUpdatedAt = "bottomBarTabs___updatedAt",
  BottomBarTabsUrlChildMdxBody = "bottomBarTabs___url___childMdx___body",
  BottomBarTabsUrlChildMdxChildren = "bottomBarTabs___url___childMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarTabsUrlChildMdxExcerpt = "bottomBarTabs___url___childMdx___excerpt",
  BottomBarTabsUrlChildMdxFileAbsolutePath = "bottomBarTabs___url___childMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarTabsUrlChildMdxHeadings = "bottomBarTabs___url___childMdx___headings",
  BottomBarTabsUrlChildMdxHtml = "bottomBarTabs___url___childMdx___html",
  BottomBarTabsUrlChildMdxId = "bottomBarTabs___url___childMdx___id",
  BottomBarTabsUrlChildMdxMdxAst = "bottomBarTabs___url___childMdx___mdxAST",
  BottomBarTabsUrlChildMdxRawBody = "bottomBarTabs___url___childMdx___rawBody",
  BottomBarTabsUrlChildMdxSlug = "bottomBarTabs___url___childMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarTabsUrlChildMdxTableOfContents = "bottomBarTabs___url___childMdx___tableOfContents",
  BottomBarTabsUrlChildMdxTimeToRead = "bottomBarTabs___url___childMdx___timeToRead",
  BottomBarTabsUrlChildren = "bottomBarTabs___url___children",
  BottomBarTabsUrlChildrenMdx = "bottomBarTabs___url___childrenMdx",
  BottomBarTabsUrlChildrenMdxBody = "bottomBarTabs___url___childrenMdx___body",
  BottomBarTabsUrlChildrenMdxChildren = "bottomBarTabs___url___childrenMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarTabsUrlChildrenMdxExcerpt = "bottomBarTabs___url___childrenMdx___excerpt",
  BottomBarTabsUrlChildrenMdxFileAbsolutePath = "bottomBarTabs___url___childrenMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarTabsUrlChildrenMdxHeadings = "bottomBarTabs___url___childrenMdx___headings",
  BottomBarTabsUrlChildrenMdxHtml = "bottomBarTabs___url___childrenMdx___html",
  BottomBarTabsUrlChildrenMdxId = "bottomBarTabs___url___childrenMdx___id",
  BottomBarTabsUrlChildrenMdxMdxAst = "bottomBarTabs___url___childrenMdx___mdxAST",
  BottomBarTabsUrlChildrenMdxRawBody = "bottomBarTabs___url___childrenMdx___rawBody",
  BottomBarTabsUrlChildrenMdxSlug = "bottomBarTabs___url___childrenMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  BottomBarTabsUrlChildrenMdxTableOfContents = "bottomBarTabs___url___childrenMdx___tableOfContents",
  BottomBarTabsUrlChildrenMdxTimeToRead = "bottomBarTabs___url___childrenMdx___timeToRead",
  BottomBarTabsUrlChildrenChildren = "bottomBarTabs___url___children___children",
  BottomBarTabsUrlChildrenId = "bottomBarTabs___url___children___id",
  BottomBarTabsUrlId = "bottomBarTabs___url___id",
  BottomBarTabsUrlInternalContent = "bottomBarTabs___url___internal___content",
  BottomBarTabsUrlInternalContentDigest = "bottomBarTabs___url___internal___contentDigest",
  BottomBarTabsUrlInternalDescription = "bottomBarTabs___url___internal___description",
  BottomBarTabsUrlInternalFieldOwners = "bottomBarTabs___url___internal___fieldOwners",
  BottomBarTabsUrlInternalIgnoreType = "bottomBarTabs___url___internal___ignoreType",
  BottomBarTabsUrlInternalMediaType = "bottomBarTabs___url___internal___mediaType",
  BottomBarTabsUrlInternalOwner = "bottomBarTabs___url___internal___owner",
  BottomBarTabsUrlInternalType = "bottomBarTabs___url___internal___type",
  BottomBarTabsUrlParentChildren = "bottomBarTabs___url___parent___children",
  BottomBarTabsUrlParentId = "bottomBarTabs___url___parent___id",
  BottomBarTabsUrlSysType = "bottomBarTabs___url___sys___type",
  BottomBarTabsUrlUrl = "bottomBarTabs___url___url",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  ContentfulId = "contentful_id",
  Contentfulid = "contentfulid",
  CreatedAt = "createdAt",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  NodeLocale = "node_locale",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  SpaceId = "spaceId",
  SysContentTypeSysId = "sys___contentType___sys___id",
  SysContentTypeSysLinkType = "sys___contentType___sys___linkType",
  SysContentTypeSysType = "sys___contentType___sys___type",
  SysRevision = "sys___revision",
  SysType = "sys___type",
  TopBarLogoChildContentfulLinkUrlTextNodeChildMdxBody = "topBarLogo___childContentfulLinkUrlTextNode___childMdx___body",
  TopBarLogoChildContentfulLinkUrlTextNodeChildMdxChildren = "topBarLogo___childContentfulLinkUrlTextNode___childMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarLogoChildContentfulLinkUrlTextNodeChildMdxExcerpt = "topBarLogo___childContentfulLinkUrlTextNode___childMdx___excerpt",
  TopBarLogoChildContentfulLinkUrlTextNodeChildMdxFileAbsolutePath = "topBarLogo___childContentfulLinkUrlTextNode___childMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarLogoChildContentfulLinkUrlTextNodeChildMdxHeadings = "topBarLogo___childContentfulLinkUrlTextNode___childMdx___headings",
  TopBarLogoChildContentfulLinkUrlTextNodeChildMdxHtml = "topBarLogo___childContentfulLinkUrlTextNode___childMdx___html",
  TopBarLogoChildContentfulLinkUrlTextNodeChildMdxId = "topBarLogo___childContentfulLinkUrlTextNode___childMdx___id",
  TopBarLogoChildContentfulLinkUrlTextNodeChildMdxMdxAst = "topBarLogo___childContentfulLinkUrlTextNode___childMdx___mdxAST",
  TopBarLogoChildContentfulLinkUrlTextNodeChildMdxRawBody = "topBarLogo___childContentfulLinkUrlTextNode___childMdx___rawBody",
  TopBarLogoChildContentfulLinkUrlTextNodeChildMdxSlug = "topBarLogo___childContentfulLinkUrlTextNode___childMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarLogoChildContentfulLinkUrlTextNodeChildMdxTableOfContents = "topBarLogo___childContentfulLinkUrlTextNode___childMdx___tableOfContents",
  TopBarLogoChildContentfulLinkUrlTextNodeChildMdxTimeToRead = "topBarLogo___childContentfulLinkUrlTextNode___childMdx___timeToRead",
  TopBarLogoChildContentfulLinkUrlTextNodeChildren = "topBarLogo___childContentfulLinkUrlTextNode___children",
  TopBarLogoChildContentfulLinkUrlTextNodeChildrenMdx = "topBarLogo___childContentfulLinkUrlTextNode___childrenMdx",
  TopBarLogoChildContentfulLinkUrlTextNodeChildrenMdxBody = "topBarLogo___childContentfulLinkUrlTextNode___childrenMdx___body",
  TopBarLogoChildContentfulLinkUrlTextNodeChildrenMdxChildren = "topBarLogo___childContentfulLinkUrlTextNode___childrenMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarLogoChildContentfulLinkUrlTextNodeChildrenMdxExcerpt = "topBarLogo___childContentfulLinkUrlTextNode___childrenMdx___excerpt",
  TopBarLogoChildContentfulLinkUrlTextNodeChildrenMdxFileAbsolutePath = "topBarLogo___childContentfulLinkUrlTextNode___childrenMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarLogoChildContentfulLinkUrlTextNodeChildrenMdxHeadings = "topBarLogo___childContentfulLinkUrlTextNode___childrenMdx___headings",
  TopBarLogoChildContentfulLinkUrlTextNodeChildrenMdxHtml = "topBarLogo___childContentfulLinkUrlTextNode___childrenMdx___html",
  TopBarLogoChildContentfulLinkUrlTextNodeChildrenMdxId = "topBarLogo___childContentfulLinkUrlTextNode___childrenMdx___id",
  TopBarLogoChildContentfulLinkUrlTextNodeChildrenMdxMdxAst = "topBarLogo___childContentfulLinkUrlTextNode___childrenMdx___mdxAST",
  TopBarLogoChildContentfulLinkUrlTextNodeChildrenMdxRawBody = "topBarLogo___childContentfulLinkUrlTextNode___childrenMdx___rawBody",
  TopBarLogoChildContentfulLinkUrlTextNodeChildrenMdxSlug = "topBarLogo___childContentfulLinkUrlTextNode___childrenMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarLogoChildContentfulLinkUrlTextNodeChildrenMdxTableOfContents = "topBarLogo___childContentfulLinkUrlTextNode___childrenMdx___tableOfContents",
  TopBarLogoChildContentfulLinkUrlTextNodeChildrenMdxTimeToRead = "topBarLogo___childContentfulLinkUrlTextNode___childrenMdx___timeToRead",
  TopBarLogoChildContentfulLinkUrlTextNodeChildrenChildren = "topBarLogo___childContentfulLinkUrlTextNode___children___children",
  TopBarLogoChildContentfulLinkUrlTextNodeChildrenId = "topBarLogo___childContentfulLinkUrlTextNode___children___id",
  TopBarLogoChildContentfulLinkUrlTextNodeId = "topBarLogo___childContentfulLinkUrlTextNode___id",
  TopBarLogoChildContentfulLinkUrlTextNodeInternalContent = "topBarLogo___childContentfulLinkUrlTextNode___internal___content",
  TopBarLogoChildContentfulLinkUrlTextNodeInternalContentDigest = "topBarLogo___childContentfulLinkUrlTextNode___internal___contentDigest",
  TopBarLogoChildContentfulLinkUrlTextNodeInternalDescription = "topBarLogo___childContentfulLinkUrlTextNode___internal___description",
  TopBarLogoChildContentfulLinkUrlTextNodeInternalFieldOwners = "topBarLogo___childContentfulLinkUrlTextNode___internal___fieldOwners",
  TopBarLogoChildContentfulLinkUrlTextNodeInternalIgnoreType = "topBarLogo___childContentfulLinkUrlTextNode___internal___ignoreType",
  TopBarLogoChildContentfulLinkUrlTextNodeInternalMediaType = "topBarLogo___childContentfulLinkUrlTextNode___internal___mediaType",
  TopBarLogoChildContentfulLinkUrlTextNodeInternalOwner = "topBarLogo___childContentfulLinkUrlTextNode___internal___owner",
  TopBarLogoChildContentfulLinkUrlTextNodeInternalType = "topBarLogo___childContentfulLinkUrlTextNode___internal___type",
  TopBarLogoChildContentfulLinkUrlTextNodeParentChildren = "topBarLogo___childContentfulLinkUrlTextNode___parent___children",
  TopBarLogoChildContentfulLinkUrlTextNodeParentId = "topBarLogo___childContentfulLinkUrlTextNode___parent___id",
  TopBarLogoChildContentfulLinkUrlTextNodeSysType = "topBarLogo___childContentfulLinkUrlTextNode___sys___type",
  TopBarLogoChildContentfulLinkUrlTextNodeUrl = "topBarLogo___childContentfulLinkUrlTextNode___url",
  TopBarLogoChildren = "topBarLogo___children",
  TopBarLogoChildrenContentfulLinkUrlTextNode = "topBarLogo___childrenContentfulLinkUrlTextNode",
  TopBarLogoChildrenContentfulLinkUrlTextNodeChildMdxBody = "topBarLogo___childrenContentfulLinkUrlTextNode___childMdx___body",
  TopBarLogoChildrenContentfulLinkUrlTextNodeChildMdxChildren = "topBarLogo___childrenContentfulLinkUrlTextNode___childMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarLogoChildrenContentfulLinkUrlTextNodeChildMdxExcerpt = "topBarLogo___childrenContentfulLinkUrlTextNode___childMdx___excerpt",
  TopBarLogoChildrenContentfulLinkUrlTextNodeChildMdxFileAbsolutePath = "topBarLogo___childrenContentfulLinkUrlTextNode___childMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarLogoChildrenContentfulLinkUrlTextNodeChildMdxHeadings = "topBarLogo___childrenContentfulLinkUrlTextNode___childMdx___headings",
  TopBarLogoChildrenContentfulLinkUrlTextNodeChildMdxHtml = "topBarLogo___childrenContentfulLinkUrlTextNode___childMdx___html",
  TopBarLogoChildrenContentfulLinkUrlTextNodeChildMdxId = "topBarLogo___childrenContentfulLinkUrlTextNode___childMdx___id",
  TopBarLogoChildrenContentfulLinkUrlTextNodeChildMdxMdxAst = "topBarLogo___childrenContentfulLinkUrlTextNode___childMdx___mdxAST",
  TopBarLogoChildrenContentfulLinkUrlTextNodeChildMdxRawBody = "topBarLogo___childrenContentfulLinkUrlTextNode___childMdx___rawBody",
  TopBarLogoChildrenContentfulLinkUrlTextNodeChildMdxSlug = "topBarLogo___childrenContentfulLinkUrlTextNode___childMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarLogoChildrenContentfulLinkUrlTextNodeChildMdxTableOfContents = "topBarLogo___childrenContentfulLinkUrlTextNode___childMdx___tableOfContents",
  TopBarLogoChildrenContentfulLinkUrlTextNodeChildMdxTimeToRead = "topBarLogo___childrenContentfulLinkUrlTextNode___childMdx___timeToRead",
  TopBarLogoChildrenContentfulLinkUrlTextNodeChildren = "topBarLogo___childrenContentfulLinkUrlTextNode___children",
  TopBarLogoChildrenContentfulLinkUrlTextNodeChildrenMdx = "topBarLogo___childrenContentfulLinkUrlTextNode___childrenMdx",
  TopBarLogoChildrenContentfulLinkUrlTextNodeChildrenMdxBody = "topBarLogo___childrenContentfulLinkUrlTextNode___childrenMdx___body",
  TopBarLogoChildrenContentfulLinkUrlTextNodeChildrenMdxChildren = "topBarLogo___childrenContentfulLinkUrlTextNode___childrenMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarLogoChildrenContentfulLinkUrlTextNodeChildrenMdxExcerpt = "topBarLogo___childrenContentfulLinkUrlTextNode___childrenMdx___excerpt",
  TopBarLogoChildrenContentfulLinkUrlTextNodeChildrenMdxFileAbsolutePath = "topBarLogo___childrenContentfulLinkUrlTextNode___childrenMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarLogoChildrenContentfulLinkUrlTextNodeChildrenMdxHeadings = "topBarLogo___childrenContentfulLinkUrlTextNode___childrenMdx___headings",
  TopBarLogoChildrenContentfulLinkUrlTextNodeChildrenMdxHtml = "topBarLogo___childrenContentfulLinkUrlTextNode___childrenMdx___html",
  TopBarLogoChildrenContentfulLinkUrlTextNodeChildrenMdxId = "topBarLogo___childrenContentfulLinkUrlTextNode___childrenMdx___id",
  TopBarLogoChildrenContentfulLinkUrlTextNodeChildrenMdxMdxAst = "topBarLogo___childrenContentfulLinkUrlTextNode___childrenMdx___mdxAST",
  TopBarLogoChildrenContentfulLinkUrlTextNodeChildrenMdxRawBody = "topBarLogo___childrenContentfulLinkUrlTextNode___childrenMdx___rawBody",
  TopBarLogoChildrenContentfulLinkUrlTextNodeChildrenMdxSlug = "topBarLogo___childrenContentfulLinkUrlTextNode___childrenMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarLogoChildrenContentfulLinkUrlTextNodeChildrenMdxTableOfContents = "topBarLogo___childrenContentfulLinkUrlTextNode___childrenMdx___tableOfContents",
  TopBarLogoChildrenContentfulLinkUrlTextNodeChildrenMdxTimeToRead = "topBarLogo___childrenContentfulLinkUrlTextNode___childrenMdx___timeToRead",
  TopBarLogoChildrenContentfulLinkUrlTextNodeChildrenChildren = "topBarLogo___childrenContentfulLinkUrlTextNode___children___children",
  TopBarLogoChildrenContentfulLinkUrlTextNodeChildrenId = "topBarLogo___childrenContentfulLinkUrlTextNode___children___id",
  TopBarLogoChildrenContentfulLinkUrlTextNodeId = "topBarLogo___childrenContentfulLinkUrlTextNode___id",
  TopBarLogoChildrenContentfulLinkUrlTextNodeInternalContent = "topBarLogo___childrenContentfulLinkUrlTextNode___internal___content",
  TopBarLogoChildrenContentfulLinkUrlTextNodeInternalContentDigest = "topBarLogo___childrenContentfulLinkUrlTextNode___internal___contentDigest",
  TopBarLogoChildrenContentfulLinkUrlTextNodeInternalDescription = "topBarLogo___childrenContentfulLinkUrlTextNode___internal___description",
  TopBarLogoChildrenContentfulLinkUrlTextNodeInternalFieldOwners = "topBarLogo___childrenContentfulLinkUrlTextNode___internal___fieldOwners",
  TopBarLogoChildrenContentfulLinkUrlTextNodeInternalIgnoreType = "topBarLogo___childrenContentfulLinkUrlTextNode___internal___ignoreType",
  TopBarLogoChildrenContentfulLinkUrlTextNodeInternalMediaType = "topBarLogo___childrenContentfulLinkUrlTextNode___internal___mediaType",
  TopBarLogoChildrenContentfulLinkUrlTextNodeInternalOwner = "topBarLogo___childrenContentfulLinkUrlTextNode___internal___owner",
  TopBarLogoChildrenContentfulLinkUrlTextNodeInternalType = "topBarLogo___childrenContentfulLinkUrlTextNode___internal___type",
  TopBarLogoChildrenContentfulLinkUrlTextNodeParentChildren = "topBarLogo___childrenContentfulLinkUrlTextNode___parent___children",
  TopBarLogoChildrenContentfulLinkUrlTextNodeParentId = "topBarLogo___childrenContentfulLinkUrlTextNode___parent___id",
  TopBarLogoChildrenContentfulLinkUrlTextNodeSysType = "topBarLogo___childrenContentfulLinkUrlTextNode___sys___type",
  TopBarLogoChildrenContentfulLinkUrlTextNodeUrl = "topBarLogo___childrenContentfulLinkUrlTextNode___url",
  TopBarLogoChildrenChildren = "topBarLogo___children___children",
  TopBarLogoChildrenChildrenChildren = "topBarLogo___children___children___children",
  TopBarLogoChildrenChildrenId = "topBarLogo___children___children___id",
  TopBarLogoChildrenId = "topBarLogo___children___id",
  TopBarLogoChildrenInternalContent = "topBarLogo___children___internal___content",
  TopBarLogoChildrenInternalContentDigest = "topBarLogo___children___internal___contentDigest",
  TopBarLogoChildrenInternalDescription = "topBarLogo___children___internal___description",
  TopBarLogoChildrenInternalFieldOwners = "topBarLogo___children___internal___fieldOwners",
  TopBarLogoChildrenInternalIgnoreType = "topBarLogo___children___internal___ignoreType",
  TopBarLogoChildrenInternalMediaType = "topBarLogo___children___internal___mediaType",
  TopBarLogoChildrenInternalOwner = "topBarLogo___children___internal___owner",
  TopBarLogoChildrenInternalType = "topBarLogo___children___internal___type",
  TopBarLogoChildrenParentChildren = "topBarLogo___children___parent___children",
  TopBarLogoChildrenParentId = "topBarLogo___children___parent___id",
  TopBarLogoContentfulId = "topBarLogo___contentful_id",
  TopBarLogoContentfulid = "topBarLogo___contentfulid",
  TopBarLogoCreatedAt = "topBarLogo___createdAt",
  TopBarLogoId = "topBarLogo___id",
  TopBarLogoImageChildren = "topBarLogo___image___children",
  TopBarLogoImageChildrenChildren = "topBarLogo___image___children___children",
  TopBarLogoImageChildrenId = "topBarLogo___image___children___id",
  TopBarLogoImageContentfulId = "topBarLogo___image___contentful_id",
  TopBarLogoImageCreatedAt = "topBarLogo___image___createdAt",
  TopBarLogoImageDescription = "topBarLogo___image___description",
  TopBarLogoImageFileContentType = "topBarLogo___image___file___contentType",
  TopBarLogoImageFileFileName = "topBarLogo___image___file___fileName",
  TopBarLogoImageFileUrl = "topBarLogo___image___file___url",
  TopBarLogoImageFilename = "topBarLogo___image___filename",
  TopBarLogoImageFilesize = "topBarLogo___image___filesize",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarLogoImageGatsbyImage = "topBarLogo___image___gatsbyImage",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarLogoImageGatsbyImageData = "topBarLogo___image___gatsbyImageData",
  TopBarLogoImageHeight = "topBarLogo___image___height",
  TopBarLogoImageId = "topBarLogo___image___id",
  TopBarLogoImageInternalContent = "topBarLogo___image___internal___content",
  TopBarLogoImageInternalContentDigest = "topBarLogo___image___internal___contentDigest",
  TopBarLogoImageInternalDescription = "topBarLogo___image___internal___description",
  TopBarLogoImageInternalFieldOwners = "topBarLogo___image___internal___fieldOwners",
  TopBarLogoImageInternalIgnoreType = "topBarLogo___image___internal___ignoreType",
  TopBarLogoImageInternalMediaType = "topBarLogo___image___internal___mediaType",
  TopBarLogoImageInternalOwner = "topBarLogo___image___internal___owner",
  TopBarLogoImageInternalType = "topBarLogo___image___internal___type",
  TopBarLogoImageMimeType = "topBarLogo___image___mimeType",
  TopBarLogoImageNodeLocale = "topBarLogo___image___node_locale",
  TopBarLogoImageParentChildren = "topBarLogo___image___parent___children",
  TopBarLogoImageParentId = "topBarLogo___image___parent___id",
  TopBarLogoImagePlaceholderUrl = "topBarLogo___image___placeholderUrl",
  TopBarLogoImagePublicUrl = "topBarLogo___image___publicUrl",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarLogoImageResizeHeight = "topBarLogo___image___resize___height",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarLogoImageResizeSrc = "topBarLogo___image___resize___src",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarLogoImageResizeWidth = "topBarLogo___image___resize___width",
  TopBarLogoImageSpaceId = "topBarLogo___image___spaceId",
  TopBarLogoImageSysRevision = "topBarLogo___image___sys___revision",
  TopBarLogoImageSysType = "topBarLogo___image___sys___type",
  TopBarLogoImageTitle = "topBarLogo___image___title",
  TopBarLogoImageUpdatedAt = "topBarLogo___image___updatedAt",
  TopBarLogoImageUrl = "topBarLogo___image___url",
  TopBarLogoImageWidth = "topBarLogo___image___width",
  TopBarLogoInternalContent = "topBarLogo___internal___content",
  TopBarLogoInternalContentDigest = "topBarLogo___internal___contentDigest",
  TopBarLogoInternalDescription = "topBarLogo___internal___description",
  TopBarLogoInternalFieldOwners = "topBarLogo___internal___fieldOwners",
  TopBarLogoInternalIgnoreType = "topBarLogo___internal___ignoreType",
  TopBarLogoInternalMediaType = "topBarLogo___internal___mediaType",
  TopBarLogoInternalOwner = "topBarLogo___internal___owner",
  TopBarLogoInternalType = "topBarLogo___internal___type",
  TopBarLogoNodeLocale = "topBarLogo___node_locale",
  TopBarLogoOptions = "topBarLogo___options",
  TopBarLogoOptionsBottomBarLogoChildren = "topBarLogo___options___bottomBarLogo___children",
  TopBarLogoOptionsBottomBarLogoChildrenContentfulLinkUrlTextNode = "topBarLogo___options___bottomBarLogo___childrenContentfulLinkUrlTextNode",
  TopBarLogoOptionsBottomBarLogoContentfulId = "topBarLogo___options___bottomBarLogo___contentful_id",
  TopBarLogoOptionsBottomBarLogoContentfulid = "topBarLogo___options___bottomBarLogo___contentfulid",
  TopBarLogoOptionsBottomBarLogoCreatedAt = "topBarLogo___options___bottomBarLogo___createdAt",
  TopBarLogoOptionsBottomBarLogoId = "topBarLogo___options___bottomBarLogo___id",
  TopBarLogoOptionsBottomBarLogoNodeLocale = "topBarLogo___options___bottomBarLogo___node_locale",
  TopBarLogoOptionsBottomBarLogoOptions = "topBarLogo___options___bottomBarLogo___options",
  TopBarLogoOptionsBottomBarLogoSpaceId = "topBarLogo___options___bottomBarLogo___spaceId",
  TopBarLogoOptionsBottomBarLogoTitle = "topBarLogo___options___bottomBarLogo___title",
  TopBarLogoOptionsBottomBarLogoUpdatedAt = "topBarLogo___options___bottomBarLogo___updatedAt",
  TopBarLogoOptionsBottomBarSocialLinks = "topBarLogo___options___bottomBarSocialLinks",
  TopBarLogoOptionsBottomBarSocialLinksChildren = "topBarLogo___options___bottomBarSocialLinks___children",
  TopBarLogoOptionsBottomBarSocialLinksChildrenContentfulLinkUrlTextNode = "topBarLogo___options___bottomBarSocialLinks___childrenContentfulLinkUrlTextNode",
  TopBarLogoOptionsBottomBarSocialLinksContentfulId = "topBarLogo___options___bottomBarSocialLinks___contentful_id",
  TopBarLogoOptionsBottomBarSocialLinksContentfulid = "topBarLogo___options___bottomBarSocialLinks___contentfulid",
  TopBarLogoOptionsBottomBarSocialLinksCreatedAt = "topBarLogo___options___bottomBarSocialLinks___createdAt",
  TopBarLogoOptionsBottomBarSocialLinksId = "topBarLogo___options___bottomBarSocialLinks___id",
  TopBarLogoOptionsBottomBarSocialLinksNodeLocale = "topBarLogo___options___bottomBarSocialLinks___node_locale",
  TopBarLogoOptionsBottomBarSocialLinksOptions = "topBarLogo___options___bottomBarSocialLinks___options",
  TopBarLogoOptionsBottomBarSocialLinksSpaceId = "topBarLogo___options___bottomBarSocialLinks___spaceId",
  TopBarLogoOptionsBottomBarSocialLinksTitle = "topBarLogo___options___bottomBarSocialLinks___title",
  TopBarLogoOptionsBottomBarSocialLinksUpdatedAt = "topBarLogo___options___bottomBarSocialLinks___updatedAt",
  TopBarLogoOptionsBottomBarTabs = "topBarLogo___options___bottomBarTabs",
  TopBarLogoOptionsBottomBarTabsChildren = "topBarLogo___options___bottomBarTabs___children",
  TopBarLogoOptionsBottomBarTabsChildrenContentfulLinkUrlTextNode = "topBarLogo___options___bottomBarTabs___childrenContentfulLinkUrlTextNode",
  TopBarLogoOptionsBottomBarTabsContentfulId = "topBarLogo___options___bottomBarTabs___contentful_id",
  TopBarLogoOptionsBottomBarTabsContentfulid = "topBarLogo___options___bottomBarTabs___contentfulid",
  TopBarLogoOptionsBottomBarTabsCreatedAt = "topBarLogo___options___bottomBarTabs___createdAt",
  TopBarLogoOptionsBottomBarTabsId = "topBarLogo___options___bottomBarTabs___id",
  TopBarLogoOptionsBottomBarTabsNodeLocale = "topBarLogo___options___bottomBarTabs___node_locale",
  TopBarLogoOptionsBottomBarTabsOptions = "topBarLogo___options___bottomBarTabs___options",
  TopBarLogoOptionsBottomBarTabsSpaceId = "topBarLogo___options___bottomBarTabs___spaceId",
  TopBarLogoOptionsBottomBarTabsTitle = "topBarLogo___options___bottomBarTabs___title",
  TopBarLogoOptionsBottomBarTabsUpdatedAt = "topBarLogo___options___bottomBarTabs___updatedAt",
  TopBarLogoOptionsChildren = "topBarLogo___options___children",
  TopBarLogoOptionsChildrenChildren = "topBarLogo___options___children___children",
  TopBarLogoOptionsChildrenId = "topBarLogo___options___children___id",
  TopBarLogoOptionsContentfulId = "topBarLogo___options___contentful_id",
  TopBarLogoOptionsContentfulid = "topBarLogo___options___contentfulid",
  TopBarLogoOptionsCreatedAt = "topBarLogo___options___createdAt",
  TopBarLogoOptionsId = "topBarLogo___options___id",
  TopBarLogoOptionsInternalContent = "topBarLogo___options___internal___content",
  TopBarLogoOptionsInternalContentDigest = "topBarLogo___options___internal___contentDigest",
  TopBarLogoOptionsInternalDescription = "topBarLogo___options___internal___description",
  TopBarLogoOptionsInternalFieldOwners = "topBarLogo___options___internal___fieldOwners",
  TopBarLogoOptionsInternalIgnoreType = "topBarLogo___options___internal___ignoreType",
  TopBarLogoOptionsInternalMediaType = "topBarLogo___options___internal___mediaType",
  TopBarLogoOptionsInternalOwner = "topBarLogo___options___internal___owner",
  TopBarLogoOptionsInternalType = "topBarLogo___options___internal___type",
  TopBarLogoOptionsNodeLocale = "topBarLogo___options___node_locale",
  TopBarLogoOptionsParentChildren = "topBarLogo___options___parent___children",
  TopBarLogoOptionsParentId = "topBarLogo___options___parent___id",
  TopBarLogoOptionsSpaceId = "topBarLogo___options___spaceId",
  TopBarLogoOptionsSysRevision = "topBarLogo___options___sys___revision",
  TopBarLogoOptionsSysType = "topBarLogo___options___sys___type",
  TopBarLogoOptionsTopBarLogoChildren = "topBarLogo___options___topBarLogo___children",
  TopBarLogoOptionsTopBarLogoChildrenContentfulLinkUrlTextNode = "topBarLogo___options___topBarLogo___childrenContentfulLinkUrlTextNode",
  TopBarLogoOptionsTopBarLogoContentfulId = "topBarLogo___options___topBarLogo___contentful_id",
  TopBarLogoOptionsTopBarLogoContentfulid = "topBarLogo___options___topBarLogo___contentfulid",
  TopBarLogoOptionsTopBarLogoCreatedAt = "topBarLogo___options___topBarLogo___createdAt",
  TopBarLogoOptionsTopBarLogoId = "topBarLogo___options___topBarLogo___id",
  TopBarLogoOptionsTopBarLogoNodeLocale = "topBarLogo___options___topBarLogo___node_locale",
  TopBarLogoOptionsTopBarLogoOptions = "topBarLogo___options___topBarLogo___options",
  TopBarLogoOptionsTopBarLogoSpaceId = "topBarLogo___options___topBarLogo___spaceId",
  TopBarLogoOptionsTopBarLogoTitle = "topBarLogo___options___topBarLogo___title",
  TopBarLogoOptionsTopBarLogoUpdatedAt = "topBarLogo___options___topBarLogo___updatedAt",
  TopBarLogoOptionsTopBarSocialLinks = "topBarLogo___options___topBarSocialLinks",
  TopBarLogoOptionsTopBarSocialLinksChildren = "topBarLogo___options___topBarSocialLinks___children",
  TopBarLogoOptionsTopBarSocialLinksChildrenContentfulLinkUrlTextNode = "topBarLogo___options___topBarSocialLinks___childrenContentfulLinkUrlTextNode",
  TopBarLogoOptionsTopBarSocialLinksContentfulId = "topBarLogo___options___topBarSocialLinks___contentful_id",
  TopBarLogoOptionsTopBarSocialLinksContentfulid = "topBarLogo___options___topBarSocialLinks___contentfulid",
  TopBarLogoOptionsTopBarSocialLinksCreatedAt = "topBarLogo___options___topBarSocialLinks___createdAt",
  TopBarLogoOptionsTopBarSocialLinksId = "topBarLogo___options___topBarSocialLinks___id",
  TopBarLogoOptionsTopBarSocialLinksNodeLocale = "topBarLogo___options___topBarSocialLinks___node_locale",
  TopBarLogoOptionsTopBarSocialLinksOptions = "topBarLogo___options___topBarSocialLinks___options",
  TopBarLogoOptionsTopBarSocialLinksSpaceId = "topBarLogo___options___topBarSocialLinks___spaceId",
  TopBarLogoOptionsTopBarSocialLinksTitle = "topBarLogo___options___topBarSocialLinks___title",
  TopBarLogoOptionsTopBarSocialLinksUpdatedAt = "topBarLogo___options___topBarSocialLinks___updatedAt",
  TopBarLogoOptionsTopBarTabs = "topBarLogo___options___topBarTabs",
  TopBarLogoOptionsTopBarTabsChildren = "topBarLogo___options___topBarTabs___children",
  TopBarLogoOptionsTopBarTabsChildrenContentfulLinkUrlTextNode = "topBarLogo___options___topBarTabs___childrenContentfulLinkUrlTextNode",
  TopBarLogoOptionsTopBarTabsContentfulId = "topBarLogo___options___topBarTabs___contentful_id",
  TopBarLogoOptionsTopBarTabsContentfulid = "topBarLogo___options___topBarTabs___contentfulid",
  TopBarLogoOptionsTopBarTabsCreatedAt = "topBarLogo___options___topBarTabs___createdAt",
  TopBarLogoOptionsTopBarTabsId = "topBarLogo___options___topBarTabs___id",
  TopBarLogoOptionsTopBarTabsNodeLocale = "topBarLogo___options___topBarTabs___node_locale",
  TopBarLogoOptionsTopBarTabsOptions = "topBarLogo___options___topBarTabs___options",
  TopBarLogoOptionsTopBarTabsSpaceId = "topBarLogo___options___topBarTabs___spaceId",
  TopBarLogoOptionsTopBarTabsTitle = "topBarLogo___options___topBarTabs___title",
  TopBarLogoOptionsTopBarTabsUpdatedAt = "topBarLogo___options___topBarTabs___updatedAt",
  TopBarLogoOptionsUpdatedAt = "topBarLogo___options___updatedAt",
  TopBarLogoParentChildren = "topBarLogo___parent___children",
  TopBarLogoParentChildrenChildren = "topBarLogo___parent___children___children",
  TopBarLogoParentChildrenId = "topBarLogo___parent___children___id",
  TopBarLogoParentId = "topBarLogo___parent___id",
  TopBarLogoParentInternalContent = "topBarLogo___parent___internal___content",
  TopBarLogoParentInternalContentDigest = "topBarLogo___parent___internal___contentDigest",
  TopBarLogoParentInternalDescription = "topBarLogo___parent___internal___description",
  TopBarLogoParentInternalFieldOwners = "topBarLogo___parent___internal___fieldOwners",
  TopBarLogoParentInternalIgnoreType = "topBarLogo___parent___internal___ignoreType",
  TopBarLogoParentInternalMediaType = "topBarLogo___parent___internal___mediaType",
  TopBarLogoParentInternalOwner = "topBarLogo___parent___internal___owner",
  TopBarLogoParentInternalType = "topBarLogo___parent___internal___type",
  TopBarLogoParentParentChildren = "topBarLogo___parent___parent___children",
  TopBarLogoParentParentId = "topBarLogo___parent___parent___id",
  TopBarLogoSpaceId = "topBarLogo___spaceId",
  TopBarLogoSysRevision = "topBarLogo___sys___revision",
  TopBarLogoSysType = "topBarLogo___sys___type",
  TopBarLogoTitle = "topBarLogo___title",
  TopBarLogoUpdatedAt = "topBarLogo___updatedAt",
  TopBarLogoUrlChildMdxBody = "topBarLogo___url___childMdx___body",
  TopBarLogoUrlChildMdxChildren = "topBarLogo___url___childMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarLogoUrlChildMdxExcerpt = "topBarLogo___url___childMdx___excerpt",
  TopBarLogoUrlChildMdxFileAbsolutePath = "topBarLogo___url___childMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarLogoUrlChildMdxHeadings = "topBarLogo___url___childMdx___headings",
  TopBarLogoUrlChildMdxHtml = "topBarLogo___url___childMdx___html",
  TopBarLogoUrlChildMdxId = "topBarLogo___url___childMdx___id",
  TopBarLogoUrlChildMdxMdxAst = "topBarLogo___url___childMdx___mdxAST",
  TopBarLogoUrlChildMdxRawBody = "topBarLogo___url___childMdx___rawBody",
  TopBarLogoUrlChildMdxSlug = "topBarLogo___url___childMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarLogoUrlChildMdxTableOfContents = "topBarLogo___url___childMdx___tableOfContents",
  TopBarLogoUrlChildMdxTimeToRead = "topBarLogo___url___childMdx___timeToRead",
  TopBarLogoUrlChildren = "topBarLogo___url___children",
  TopBarLogoUrlChildrenMdx = "topBarLogo___url___childrenMdx",
  TopBarLogoUrlChildrenMdxBody = "topBarLogo___url___childrenMdx___body",
  TopBarLogoUrlChildrenMdxChildren = "topBarLogo___url___childrenMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarLogoUrlChildrenMdxExcerpt = "topBarLogo___url___childrenMdx___excerpt",
  TopBarLogoUrlChildrenMdxFileAbsolutePath = "topBarLogo___url___childrenMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarLogoUrlChildrenMdxHeadings = "topBarLogo___url___childrenMdx___headings",
  TopBarLogoUrlChildrenMdxHtml = "topBarLogo___url___childrenMdx___html",
  TopBarLogoUrlChildrenMdxId = "topBarLogo___url___childrenMdx___id",
  TopBarLogoUrlChildrenMdxMdxAst = "topBarLogo___url___childrenMdx___mdxAST",
  TopBarLogoUrlChildrenMdxRawBody = "topBarLogo___url___childrenMdx___rawBody",
  TopBarLogoUrlChildrenMdxSlug = "topBarLogo___url___childrenMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarLogoUrlChildrenMdxTableOfContents = "topBarLogo___url___childrenMdx___tableOfContents",
  TopBarLogoUrlChildrenMdxTimeToRead = "topBarLogo___url___childrenMdx___timeToRead",
  TopBarLogoUrlChildrenChildren = "topBarLogo___url___children___children",
  TopBarLogoUrlChildrenId = "topBarLogo___url___children___id",
  TopBarLogoUrlId = "topBarLogo___url___id",
  TopBarLogoUrlInternalContent = "topBarLogo___url___internal___content",
  TopBarLogoUrlInternalContentDigest = "topBarLogo___url___internal___contentDigest",
  TopBarLogoUrlInternalDescription = "topBarLogo___url___internal___description",
  TopBarLogoUrlInternalFieldOwners = "topBarLogo___url___internal___fieldOwners",
  TopBarLogoUrlInternalIgnoreType = "topBarLogo___url___internal___ignoreType",
  TopBarLogoUrlInternalMediaType = "topBarLogo___url___internal___mediaType",
  TopBarLogoUrlInternalOwner = "topBarLogo___url___internal___owner",
  TopBarLogoUrlInternalType = "topBarLogo___url___internal___type",
  TopBarLogoUrlParentChildren = "topBarLogo___url___parent___children",
  TopBarLogoUrlParentId = "topBarLogo___url___parent___id",
  TopBarLogoUrlSysType = "topBarLogo___url___sys___type",
  TopBarLogoUrlUrl = "topBarLogo___url___url",
  TopBarSocialLinks = "topBarSocialLinks",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeChildMdxBody = "topBarSocialLinks___childContentfulLinkUrlTextNode___childMdx___body",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeChildMdxChildren = "topBarSocialLinks___childContentfulLinkUrlTextNode___childMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarSocialLinksChildContentfulLinkUrlTextNodeChildMdxExcerpt = "topBarSocialLinks___childContentfulLinkUrlTextNode___childMdx___excerpt",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeChildMdxFileAbsolutePath = "topBarSocialLinks___childContentfulLinkUrlTextNode___childMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarSocialLinksChildContentfulLinkUrlTextNodeChildMdxHeadings = "topBarSocialLinks___childContentfulLinkUrlTextNode___childMdx___headings",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeChildMdxHtml = "topBarSocialLinks___childContentfulLinkUrlTextNode___childMdx___html",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeChildMdxId = "topBarSocialLinks___childContentfulLinkUrlTextNode___childMdx___id",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeChildMdxMdxAst = "topBarSocialLinks___childContentfulLinkUrlTextNode___childMdx___mdxAST",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeChildMdxRawBody = "topBarSocialLinks___childContentfulLinkUrlTextNode___childMdx___rawBody",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeChildMdxSlug = "topBarSocialLinks___childContentfulLinkUrlTextNode___childMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarSocialLinksChildContentfulLinkUrlTextNodeChildMdxTableOfContents = "topBarSocialLinks___childContentfulLinkUrlTextNode___childMdx___tableOfContents",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeChildMdxTimeToRead = "topBarSocialLinks___childContentfulLinkUrlTextNode___childMdx___timeToRead",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeChildren = "topBarSocialLinks___childContentfulLinkUrlTextNode___children",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeChildrenMdx = "topBarSocialLinks___childContentfulLinkUrlTextNode___childrenMdx",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeChildrenMdxBody = "topBarSocialLinks___childContentfulLinkUrlTextNode___childrenMdx___body",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeChildrenMdxChildren = "topBarSocialLinks___childContentfulLinkUrlTextNode___childrenMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarSocialLinksChildContentfulLinkUrlTextNodeChildrenMdxExcerpt = "topBarSocialLinks___childContentfulLinkUrlTextNode___childrenMdx___excerpt",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeChildrenMdxFileAbsolutePath = "topBarSocialLinks___childContentfulLinkUrlTextNode___childrenMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarSocialLinksChildContentfulLinkUrlTextNodeChildrenMdxHeadings = "topBarSocialLinks___childContentfulLinkUrlTextNode___childrenMdx___headings",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeChildrenMdxHtml = "topBarSocialLinks___childContentfulLinkUrlTextNode___childrenMdx___html",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeChildrenMdxId = "topBarSocialLinks___childContentfulLinkUrlTextNode___childrenMdx___id",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeChildrenMdxMdxAst = "topBarSocialLinks___childContentfulLinkUrlTextNode___childrenMdx___mdxAST",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeChildrenMdxRawBody = "topBarSocialLinks___childContentfulLinkUrlTextNode___childrenMdx___rawBody",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeChildrenMdxSlug = "topBarSocialLinks___childContentfulLinkUrlTextNode___childrenMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarSocialLinksChildContentfulLinkUrlTextNodeChildrenMdxTableOfContents = "topBarSocialLinks___childContentfulLinkUrlTextNode___childrenMdx___tableOfContents",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeChildrenMdxTimeToRead = "topBarSocialLinks___childContentfulLinkUrlTextNode___childrenMdx___timeToRead",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeChildrenChildren = "topBarSocialLinks___childContentfulLinkUrlTextNode___children___children",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeChildrenId = "topBarSocialLinks___childContentfulLinkUrlTextNode___children___id",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeId = "topBarSocialLinks___childContentfulLinkUrlTextNode___id",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeInternalContent = "topBarSocialLinks___childContentfulLinkUrlTextNode___internal___content",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeInternalContentDigest = "topBarSocialLinks___childContentfulLinkUrlTextNode___internal___contentDigest",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeInternalDescription = "topBarSocialLinks___childContentfulLinkUrlTextNode___internal___description",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeInternalFieldOwners = "topBarSocialLinks___childContentfulLinkUrlTextNode___internal___fieldOwners",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeInternalIgnoreType = "topBarSocialLinks___childContentfulLinkUrlTextNode___internal___ignoreType",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeInternalMediaType = "topBarSocialLinks___childContentfulLinkUrlTextNode___internal___mediaType",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeInternalOwner = "topBarSocialLinks___childContentfulLinkUrlTextNode___internal___owner",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeInternalType = "topBarSocialLinks___childContentfulLinkUrlTextNode___internal___type",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeParentChildren = "topBarSocialLinks___childContentfulLinkUrlTextNode___parent___children",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeParentId = "topBarSocialLinks___childContentfulLinkUrlTextNode___parent___id",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeSysType = "topBarSocialLinks___childContentfulLinkUrlTextNode___sys___type",
  TopBarSocialLinksChildContentfulLinkUrlTextNodeUrl = "topBarSocialLinks___childContentfulLinkUrlTextNode___url",
  TopBarSocialLinksChildren = "topBarSocialLinks___children",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNode = "topBarSocialLinks___childrenContentfulLinkUrlTextNode",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeChildMdxBody = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___childMdx___body",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeChildMdxChildren = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___childMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeChildMdxExcerpt = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___childMdx___excerpt",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeChildMdxFileAbsolutePath = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___childMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeChildMdxHeadings = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___childMdx___headings",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeChildMdxHtml = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___childMdx___html",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeChildMdxId = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___childMdx___id",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeChildMdxMdxAst = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___childMdx___mdxAST",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeChildMdxRawBody = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___childMdx___rawBody",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeChildMdxSlug = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___childMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeChildMdxTableOfContents = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___childMdx___tableOfContents",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeChildMdxTimeToRead = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___childMdx___timeToRead",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeChildren = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___children",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeChildrenMdx = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___childrenMdx",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeChildrenMdxBody = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___childrenMdx___body",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeChildrenMdxChildren = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___childrenMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeChildrenMdxExcerpt = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___childrenMdx___excerpt",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeChildrenMdxFileAbsolutePath = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___childrenMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeChildrenMdxHeadings = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___childrenMdx___headings",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeChildrenMdxHtml = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___childrenMdx___html",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeChildrenMdxId = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___childrenMdx___id",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeChildrenMdxMdxAst = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___childrenMdx___mdxAST",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeChildrenMdxRawBody = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___childrenMdx___rawBody",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeChildrenMdxSlug = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___childrenMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeChildrenMdxTableOfContents = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___childrenMdx___tableOfContents",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeChildrenMdxTimeToRead = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___childrenMdx___timeToRead",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeChildrenChildren = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___children___children",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeChildrenId = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___children___id",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeId = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___id",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeInternalContent = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___internal___content",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeInternalContentDigest = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___internal___contentDigest",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeInternalDescription = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___internal___description",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeInternalFieldOwners = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___internal___fieldOwners",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeInternalIgnoreType = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___internal___ignoreType",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeInternalMediaType = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___internal___mediaType",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeInternalOwner = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___internal___owner",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeInternalType = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___internal___type",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeParentChildren = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___parent___children",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeParentId = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___parent___id",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeSysType = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___sys___type",
  TopBarSocialLinksChildrenContentfulLinkUrlTextNodeUrl = "topBarSocialLinks___childrenContentfulLinkUrlTextNode___url",
  TopBarSocialLinksChildrenChildren = "topBarSocialLinks___children___children",
  TopBarSocialLinksChildrenChildrenChildren = "topBarSocialLinks___children___children___children",
  TopBarSocialLinksChildrenChildrenId = "topBarSocialLinks___children___children___id",
  TopBarSocialLinksChildrenId = "topBarSocialLinks___children___id",
  TopBarSocialLinksChildrenInternalContent = "topBarSocialLinks___children___internal___content",
  TopBarSocialLinksChildrenInternalContentDigest = "topBarSocialLinks___children___internal___contentDigest",
  TopBarSocialLinksChildrenInternalDescription = "topBarSocialLinks___children___internal___description",
  TopBarSocialLinksChildrenInternalFieldOwners = "topBarSocialLinks___children___internal___fieldOwners",
  TopBarSocialLinksChildrenInternalIgnoreType = "topBarSocialLinks___children___internal___ignoreType",
  TopBarSocialLinksChildrenInternalMediaType = "topBarSocialLinks___children___internal___mediaType",
  TopBarSocialLinksChildrenInternalOwner = "topBarSocialLinks___children___internal___owner",
  TopBarSocialLinksChildrenInternalType = "topBarSocialLinks___children___internal___type",
  TopBarSocialLinksChildrenParentChildren = "topBarSocialLinks___children___parent___children",
  TopBarSocialLinksChildrenParentId = "topBarSocialLinks___children___parent___id",
  TopBarSocialLinksContentfulId = "topBarSocialLinks___contentful_id",
  TopBarSocialLinksContentfulid = "topBarSocialLinks___contentfulid",
  TopBarSocialLinksCreatedAt = "topBarSocialLinks___createdAt",
  TopBarSocialLinksId = "topBarSocialLinks___id",
  TopBarSocialLinksImageChildren = "topBarSocialLinks___image___children",
  TopBarSocialLinksImageChildrenChildren = "topBarSocialLinks___image___children___children",
  TopBarSocialLinksImageChildrenId = "topBarSocialLinks___image___children___id",
  TopBarSocialLinksImageContentfulId = "topBarSocialLinks___image___contentful_id",
  TopBarSocialLinksImageCreatedAt = "topBarSocialLinks___image___createdAt",
  TopBarSocialLinksImageDescription = "topBarSocialLinks___image___description",
  TopBarSocialLinksImageFileContentType = "topBarSocialLinks___image___file___contentType",
  TopBarSocialLinksImageFileFileName = "topBarSocialLinks___image___file___fileName",
  TopBarSocialLinksImageFileUrl = "topBarSocialLinks___image___file___url",
  TopBarSocialLinksImageFilename = "topBarSocialLinks___image___filename",
  TopBarSocialLinksImageFilesize = "topBarSocialLinks___image___filesize",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarSocialLinksImageGatsbyImage = "topBarSocialLinks___image___gatsbyImage",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarSocialLinksImageGatsbyImageData = "topBarSocialLinks___image___gatsbyImageData",
  TopBarSocialLinksImageHeight = "topBarSocialLinks___image___height",
  TopBarSocialLinksImageId = "topBarSocialLinks___image___id",
  TopBarSocialLinksImageInternalContent = "topBarSocialLinks___image___internal___content",
  TopBarSocialLinksImageInternalContentDigest = "topBarSocialLinks___image___internal___contentDigest",
  TopBarSocialLinksImageInternalDescription = "topBarSocialLinks___image___internal___description",
  TopBarSocialLinksImageInternalFieldOwners = "topBarSocialLinks___image___internal___fieldOwners",
  TopBarSocialLinksImageInternalIgnoreType = "topBarSocialLinks___image___internal___ignoreType",
  TopBarSocialLinksImageInternalMediaType = "topBarSocialLinks___image___internal___mediaType",
  TopBarSocialLinksImageInternalOwner = "topBarSocialLinks___image___internal___owner",
  TopBarSocialLinksImageInternalType = "topBarSocialLinks___image___internal___type",
  TopBarSocialLinksImageMimeType = "topBarSocialLinks___image___mimeType",
  TopBarSocialLinksImageNodeLocale = "topBarSocialLinks___image___node_locale",
  TopBarSocialLinksImageParentChildren = "topBarSocialLinks___image___parent___children",
  TopBarSocialLinksImageParentId = "topBarSocialLinks___image___parent___id",
  TopBarSocialLinksImagePlaceholderUrl = "topBarSocialLinks___image___placeholderUrl",
  TopBarSocialLinksImagePublicUrl = "topBarSocialLinks___image___publicUrl",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarSocialLinksImageResizeHeight = "topBarSocialLinks___image___resize___height",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarSocialLinksImageResizeSrc = "topBarSocialLinks___image___resize___src",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarSocialLinksImageResizeWidth = "topBarSocialLinks___image___resize___width",
  TopBarSocialLinksImageSpaceId = "topBarSocialLinks___image___spaceId",
  TopBarSocialLinksImageSysRevision = "topBarSocialLinks___image___sys___revision",
  TopBarSocialLinksImageSysType = "topBarSocialLinks___image___sys___type",
  TopBarSocialLinksImageTitle = "topBarSocialLinks___image___title",
  TopBarSocialLinksImageUpdatedAt = "topBarSocialLinks___image___updatedAt",
  TopBarSocialLinksImageUrl = "topBarSocialLinks___image___url",
  TopBarSocialLinksImageWidth = "topBarSocialLinks___image___width",
  TopBarSocialLinksInternalContent = "topBarSocialLinks___internal___content",
  TopBarSocialLinksInternalContentDigest = "topBarSocialLinks___internal___contentDigest",
  TopBarSocialLinksInternalDescription = "topBarSocialLinks___internal___description",
  TopBarSocialLinksInternalFieldOwners = "topBarSocialLinks___internal___fieldOwners",
  TopBarSocialLinksInternalIgnoreType = "topBarSocialLinks___internal___ignoreType",
  TopBarSocialLinksInternalMediaType = "topBarSocialLinks___internal___mediaType",
  TopBarSocialLinksInternalOwner = "topBarSocialLinks___internal___owner",
  TopBarSocialLinksInternalType = "topBarSocialLinks___internal___type",
  TopBarSocialLinksNodeLocale = "topBarSocialLinks___node_locale",
  TopBarSocialLinksOptions = "topBarSocialLinks___options",
  TopBarSocialLinksOptionsBottomBarLogoChildren = "topBarSocialLinks___options___bottomBarLogo___children",
  TopBarSocialLinksOptionsBottomBarLogoChildrenContentfulLinkUrlTextNode = "topBarSocialLinks___options___bottomBarLogo___childrenContentfulLinkUrlTextNode",
  TopBarSocialLinksOptionsBottomBarLogoContentfulId = "topBarSocialLinks___options___bottomBarLogo___contentful_id",
  TopBarSocialLinksOptionsBottomBarLogoContentfulid = "topBarSocialLinks___options___bottomBarLogo___contentfulid",
  TopBarSocialLinksOptionsBottomBarLogoCreatedAt = "topBarSocialLinks___options___bottomBarLogo___createdAt",
  TopBarSocialLinksOptionsBottomBarLogoId = "topBarSocialLinks___options___bottomBarLogo___id",
  TopBarSocialLinksOptionsBottomBarLogoNodeLocale = "topBarSocialLinks___options___bottomBarLogo___node_locale",
  TopBarSocialLinksOptionsBottomBarLogoOptions = "topBarSocialLinks___options___bottomBarLogo___options",
  TopBarSocialLinksOptionsBottomBarLogoSpaceId = "topBarSocialLinks___options___bottomBarLogo___spaceId",
  TopBarSocialLinksOptionsBottomBarLogoTitle = "topBarSocialLinks___options___bottomBarLogo___title",
  TopBarSocialLinksOptionsBottomBarLogoUpdatedAt = "topBarSocialLinks___options___bottomBarLogo___updatedAt",
  TopBarSocialLinksOptionsBottomBarSocialLinks = "topBarSocialLinks___options___bottomBarSocialLinks",
  TopBarSocialLinksOptionsBottomBarSocialLinksChildren = "topBarSocialLinks___options___bottomBarSocialLinks___children",
  TopBarSocialLinksOptionsBottomBarSocialLinksChildrenContentfulLinkUrlTextNode = "topBarSocialLinks___options___bottomBarSocialLinks___childrenContentfulLinkUrlTextNode",
  TopBarSocialLinksOptionsBottomBarSocialLinksContentfulId = "topBarSocialLinks___options___bottomBarSocialLinks___contentful_id",
  TopBarSocialLinksOptionsBottomBarSocialLinksContentfulid = "topBarSocialLinks___options___bottomBarSocialLinks___contentfulid",
  TopBarSocialLinksOptionsBottomBarSocialLinksCreatedAt = "topBarSocialLinks___options___bottomBarSocialLinks___createdAt",
  TopBarSocialLinksOptionsBottomBarSocialLinksId = "topBarSocialLinks___options___bottomBarSocialLinks___id",
  TopBarSocialLinksOptionsBottomBarSocialLinksNodeLocale = "topBarSocialLinks___options___bottomBarSocialLinks___node_locale",
  TopBarSocialLinksOptionsBottomBarSocialLinksOptions = "topBarSocialLinks___options___bottomBarSocialLinks___options",
  TopBarSocialLinksOptionsBottomBarSocialLinksSpaceId = "topBarSocialLinks___options___bottomBarSocialLinks___spaceId",
  TopBarSocialLinksOptionsBottomBarSocialLinksTitle = "topBarSocialLinks___options___bottomBarSocialLinks___title",
  TopBarSocialLinksOptionsBottomBarSocialLinksUpdatedAt = "topBarSocialLinks___options___bottomBarSocialLinks___updatedAt",
  TopBarSocialLinksOptionsBottomBarTabs = "topBarSocialLinks___options___bottomBarTabs",
  TopBarSocialLinksOptionsBottomBarTabsChildren = "topBarSocialLinks___options___bottomBarTabs___children",
  TopBarSocialLinksOptionsBottomBarTabsChildrenContentfulLinkUrlTextNode = "topBarSocialLinks___options___bottomBarTabs___childrenContentfulLinkUrlTextNode",
  TopBarSocialLinksOptionsBottomBarTabsContentfulId = "topBarSocialLinks___options___bottomBarTabs___contentful_id",
  TopBarSocialLinksOptionsBottomBarTabsContentfulid = "topBarSocialLinks___options___bottomBarTabs___contentfulid",
  TopBarSocialLinksOptionsBottomBarTabsCreatedAt = "topBarSocialLinks___options___bottomBarTabs___createdAt",
  TopBarSocialLinksOptionsBottomBarTabsId = "topBarSocialLinks___options___bottomBarTabs___id",
  TopBarSocialLinksOptionsBottomBarTabsNodeLocale = "topBarSocialLinks___options___bottomBarTabs___node_locale",
  TopBarSocialLinksOptionsBottomBarTabsOptions = "topBarSocialLinks___options___bottomBarTabs___options",
  TopBarSocialLinksOptionsBottomBarTabsSpaceId = "topBarSocialLinks___options___bottomBarTabs___spaceId",
  TopBarSocialLinksOptionsBottomBarTabsTitle = "topBarSocialLinks___options___bottomBarTabs___title",
  TopBarSocialLinksOptionsBottomBarTabsUpdatedAt = "topBarSocialLinks___options___bottomBarTabs___updatedAt",
  TopBarSocialLinksOptionsChildren = "topBarSocialLinks___options___children",
  TopBarSocialLinksOptionsChildrenChildren = "topBarSocialLinks___options___children___children",
  TopBarSocialLinksOptionsChildrenId = "topBarSocialLinks___options___children___id",
  TopBarSocialLinksOptionsContentfulId = "topBarSocialLinks___options___contentful_id",
  TopBarSocialLinksOptionsContentfulid = "topBarSocialLinks___options___contentfulid",
  TopBarSocialLinksOptionsCreatedAt = "topBarSocialLinks___options___createdAt",
  TopBarSocialLinksOptionsId = "topBarSocialLinks___options___id",
  TopBarSocialLinksOptionsInternalContent = "topBarSocialLinks___options___internal___content",
  TopBarSocialLinksOptionsInternalContentDigest = "topBarSocialLinks___options___internal___contentDigest",
  TopBarSocialLinksOptionsInternalDescription = "topBarSocialLinks___options___internal___description",
  TopBarSocialLinksOptionsInternalFieldOwners = "topBarSocialLinks___options___internal___fieldOwners",
  TopBarSocialLinksOptionsInternalIgnoreType = "topBarSocialLinks___options___internal___ignoreType",
  TopBarSocialLinksOptionsInternalMediaType = "topBarSocialLinks___options___internal___mediaType",
  TopBarSocialLinksOptionsInternalOwner = "topBarSocialLinks___options___internal___owner",
  TopBarSocialLinksOptionsInternalType = "topBarSocialLinks___options___internal___type",
  TopBarSocialLinksOptionsNodeLocale = "topBarSocialLinks___options___node_locale",
  TopBarSocialLinksOptionsParentChildren = "topBarSocialLinks___options___parent___children",
  TopBarSocialLinksOptionsParentId = "topBarSocialLinks___options___parent___id",
  TopBarSocialLinksOptionsSpaceId = "topBarSocialLinks___options___spaceId",
  TopBarSocialLinksOptionsSysRevision = "topBarSocialLinks___options___sys___revision",
  TopBarSocialLinksOptionsSysType = "topBarSocialLinks___options___sys___type",
  TopBarSocialLinksOptionsTopBarLogoChildren = "topBarSocialLinks___options___topBarLogo___children",
  TopBarSocialLinksOptionsTopBarLogoChildrenContentfulLinkUrlTextNode = "topBarSocialLinks___options___topBarLogo___childrenContentfulLinkUrlTextNode",
  TopBarSocialLinksOptionsTopBarLogoContentfulId = "topBarSocialLinks___options___topBarLogo___contentful_id",
  TopBarSocialLinksOptionsTopBarLogoContentfulid = "topBarSocialLinks___options___topBarLogo___contentfulid",
  TopBarSocialLinksOptionsTopBarLogoCreatedAt = "topBarSocialLinks___options___topBarLogo___createdAt",
  TopBarSocialLinksOptionsTopBarLogoId = "topBarSocialLinks___options___topBarLogo___id",
  TopBarSocialLinksOptionsTopBarLogoNodeLocale = "topBarSocialLinks___options___topBarLogo___node_locale",
  TopBarSocialLinksOptionsTopBarLogoOptions = "topBarSocialLinks___options___topBarLogo___options",
  TopBarSocialLinksOptionsTopBarLogoSpaceId = "topBarSocialLinks___options___topBarLogo___spaceId",
  TopBarSocialLinksOptionsTopBarLogoTitle = "topBarSocialLinks___options___topBarLogo___title",
  TopBarSocialLinksOptionsTopBarLogoUpdatedAt = "topBarSocialLinks___options___topBarLogo___updatedAt",
  TopBarSocialLinksOptionsTopBarSocialLinks = "topBarSocialLinks___options___topBarSocialLinks",
  TopBarSocialLinksOptionsTopBarSocialLinksChildren = "topBarSocialLinks___options___topBarSocialLinks___children",
  TopBarSocialLinksOptionsTopBarSocialLinksChildrenContentfulLinkUrlTextNode = "topBarSocialLinks___options___topBarSocialLinks___childrenContentfulLinkUrlTextNode",
  TopBarSocialLinksOptionsTopBarSocialLinksContentfulId = "topBarSocialLinks___options___topBarSocialLinks___contentful_id",
  TopBarSocialLinksOptionsTopBarSocialLinksContentfulid = "topBarSocialLinks___options___topBarSocialLinks___contentfulid",
  TopBarSocialLinksOptionsTopBarSocialLinksCreatedAt = "topBarSocialLinks___options___topBarSocialLinks___createdAt",
  TopBarSocialLinksOptionsTopBarSocialLinksId = "topBarSocialLinks___options___topBarSocialLinks___id",
  TopBarSocialLinksOptionsTopBarSocialLinksNodeLocale = "topBarSocialLinks___options___topBarSocialLinks___node_locale",
  TopBarSocialLinksOptionsTopBarSocialLinksOptions = "topBarSocialLinks___options___topBarSocialLinks___options",
  TopBarSocialLinksOptionsTopBarSocialLinksSpaceId = "topBarSocialLinks___options___topBarSocialLinks___spaceId",
  TopBarSocialLinksOptionsTopBarSocialLinksTitle = "topBarSocialLinks___options___topBarSocialLinks___title",
  TopBarSocialLinksOptionsTopBarSocialLinksUpdatedAt = "topBarSocialLinks___options___topBarSocialLinks___updatedAt",
  TopBarSocialLinksOptionsTopBarTabs = "topBarSocialLinks___options___topBarTabs",
  TopBarSocialLinksOptionsTopBarTabsChildren = "topBarSocialLinks___options___topBarTabs___children",
  TopBarSocialLinksOptionsTopBarTabsChildrenContentfulLinkUrlTextNode = "topBarSocialLinks___options___topBarTabs___childrenContentfulLinkUrlTextNode",
  TopBarSocialLinksOptionsTopBarTabsContentfulId = "topBarSocialLinks___options___topBarTabs___contentful_id",
  TopBarSocialLinksOptionsTopBarTabsContentfulid = "topBarSocialLinks___options___topBarTabs___contentfulid",
  TopBarSocialLinksOptionsTopBarTabsCreatedAt = "topBarSocialLinks___options___topBarTabs___createdAt",
  TopBarSocialLinksOptionsTopBarTabsId = "topBarSocialLinks___options___topBarTabs___id",
  TopBarSocialLinksOptionsTopBarTabsNodeLocale = "topBarSocialLinks___options___topBarTabs___node_locale",
  TopBarSocialLinksOptionsTopBarTabsOptions = "topBarSocialLinks___options___topBarTabs___options",
  TopBarSocialLinksOptionsTopBarTabsSpaceId = "topBarSocialLinks___options___topBarTabs___spaceId",
  TopBarSocialLinksOptionsTopBarTabsTitle = "topBarSocialLinks___options___topBarTabs___title",
  TopBarSocialLinksOptionsTopBarTabsUpdatedAt = "topBarSocialLinks___options___topBarTabs___updatedAt",
  TopBarSocialLinksOptionsUpdatedAt = "topBarSocialLinks___options___updatedAt",
  TopBarSocialLinksParentChildren = "topBarSocialLinks___parent___children",
  TopBarSocialLinksParentChildrenChildren = "topBarSocialLinks___parent___children___children",
  TopBarSocialLinksParentChildrenId = "topBarSocialLinks___parent___children___id",
  TopBarSocialLinksParentId = "topBarSocialLinks___parent___id",
  TopBarSocialLinksParentInternalContent = "topBarSocialLinks___parent___internal___content",
  TopBarSocialLinksParentInternalContentDigest = "topBarSocialLinks___parent___internal___contentDigest",
  TopBarSocialLinksParentInternalDescription = "topBarSocialLinks___parent___internal___description",
  TopBarSocialLinksParentInternalFieldOwners = "topBarSocialLinks___parent___internal___fieldOwners",
  TopBarSocialLinksParentInternalIgnoreType = "topBarSocialLinks___parent___internal___ignoreType",
  TopBarSocialLinksParentInternalMediaType = "topBarSocialLinks___parent___internal___mediaType",
  TopBarSocialLinksParentInternalOwner = "topBarSocialLinks___parent___internal___owner",
  TopBarSocialLinksParentInternalType = "topBarSocialLinks___parent___internal___type",
  TopBarSocialLinksParentParentChildren = "topBarSocialLinks___parent___parent___children",
  TopBarSocialLinksParentParentId = "topBarSocialLinks___parent___parent___id",
  TopBarSocialLinksSpaceId = "topBarSocialLinks___spaceId",
  TopBarSocialLinksSysRevision = "topBarSocialLinks___sys___revision",
  TopBarSocialLinksSysType = "topBarSocialLinks___sys___type",
  TopBarSocialLinksTitle = "topBarSocialLinks___title",
  TopBarSocialLinksUpdatedAt = "topBarSocialLinks___updatedAt",
  TopBarSocialLinksUrlChildMdxBody = "topBarSocialLinks___url___childMdx___body",
  TopBarSocialLinksUrlChildMdxChildren = "topBarSocialLinks___url___childMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarSocialLinksUrlChildMdxExcerpt = "topBarSocialLinks___url___childMdx___excerpt",
  TopBarSocialLinksUrlChildMdxFileAbsolutePath = "topBarSocialLinks___url___childMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarSocialLinksUrlChildMdxHeadings = "topBarSocialLinks___url___childMdx___headings",
  TopBarSocialLinksUrlChildMdxHtml = "topBarSocialLinks___url___childMdx___html",
  TopBarSocialLinksUrlChildMdxId = "topBarSocialLinks___url___childMdx___id",
  TopBarSocialLinksUrlChildMdxMdxAst = "topBarSocialLinks___url___childMdx___mdxAST",
  TopBarSocialLinksUrlChildMdxRawBody = "topBarSocialLinks___url___childMdx___rawBody",
  TopBarSocialLinksUrlChildMdxSlug = "topBarSocialLinks___url___childMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarSocialLinksUrlChildMdxTableOfContents = "topBarSocialLinks___url___childMdx___tableOfContents",
  TopBarSocialLinksUrlChildMdxTimeToRead = "topBarSocialLinks___url___childMdx___timeToRead",
  TopBarSocialLinksUrlChildren = "topBarSocialLinks___url___children",
  TopBarSocialLinksUrlChildrenMdx = "topBarSocialLinks___url___childrenMdx",
  TopBarSocialLinksUrlChildrenMdxBody = "topBarSocialLinks___url___childrenMdx___body",
  TopBarSocialLinksUrlChildrenMdxChildren = "topBarSocialLinks___url___childrenMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarSocialLinksUrlChildrenMdxExcerpt = "topBarSocialLinks___url___childrenMdx___excerpt",
  TopBarSocialLinksUrlChildrenMdxFileAbsolutePath = "topBarSocialLinks___url___childrenMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarSocialLinksUrlChildrenMdxHeadings = "topBarSocialLinks___url___childrenMdx___headings",
  TopBarSocialLinksUrlChildrenMdxHtml = "topBarSocialLinks___url___childrenMdx___html",
  TopBarSocialLinksUrlChildrenMdxId = "topBarSocialLinks___url___childrenMdx___id",
  TopBarSocialLinksUrlChildrenMdxMdxAst = "topBarSocialLinks___url___childrenMdx___mdxAST",
  TopBarSocialLinksUrlChildrenMdxRawBody = "topBarSocialLinks___url___childrenMdx___rawBody",
  TopBarSocialLinksUrlChildrenMdxSlug = "topBarSocialLinks___url___childrenMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarSocialLinksUrlChildrenMdxTableOfContents = "topBarSocialLinks___url___childrenMdx___tableOfContents",
  TopBarSocialLinksUrlChildrenMdxTimeToRead = "topBarSocialLinks___url___childrenMdx___timeToRead",
  TopBarSocialLinksUrlChildrenChildren = "topBarSocialLinks___url___children___children",
  TopBarSocialLinksUrlChildrenId = "topBarSocialLinks___url___children___id",
  TopBarSocialLinksUrlId = "topBarSocialLinks___url___id",
  TopBarSocialLinksUrlInternalContent = "topBarSocialLinks___url___internal___content",
  TopBarSocialLinksUrlInternalContentDigest = "topBarSocialLinks___url___internal___contentDigest",
  TopBarSocialLinksUrlInternalDescription = "topBarSocialLinks___url___internal___description",
  TopBarSocialLinksUrlInternalFieldOwners = "topBarSocialLinks___url___internal___fieldOwners",
  TopBarSocialLinksUrlInternalIgnoreType = "topBarSocialLinks___url___internal___ignoreType",
  TopBarSocialLinksUrlInternalMediaType = "topBarSocialLinks___url___internal___mediaType",
  TopBarSocialLinksUrlInternalOwner = "topBarSocialLinks___url___internal___owner",
  TopBarSocialLinksUrlInternalType = "topBarSocialLinks___url___internal___type",
  TopBarSocialLinksUrlParentChildren = "topBarSocialLinks___url___parent___children",
  TopBarSocialLinksUrlParentId = "topBarSocialLinks___url___parent___id",
  TopBarSocialLinksUrlSysType = "topBarSocialLinks___url___sys___type",
  TopBarSocialLinksUrlUrl = "topBarSocialLinks___url___url",
  TopBarTabs = "topBarTabs",
  TopBarTabsChildContentfulLinkUrlTextNodeChildMdxBody = "topBarTabs___childContentfulLinkUrlTextNode___childMdx___body",
  TopBarTabsChildContentfulLinkUrlTextNodeChildMdxChildren = "topBarTabs___childContentfulLinkUrlTextNode___childMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarTabsChildContentfulLinkUrlTextNodeChildMdxExcerpt = "topBarTabs___childContentfulLinkUrlTextNode___childMdx___excerpt",
  TopBarTabsChildContentfulLinkUrlTextNodeChildMdxFileAbsolutePath = "topBarTabs___childContentfulLinkUrlTextNode___childMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarTabsChildContentfulLinkUrlTextNodeChildMdxHeadings = "topBarTabs___childContentfulLinkUrlTextNode___childMdx___headings",
  TopBarTabsChildContentfulLinkUrlTextNodeChildMdxHtml = "topBarTabs___childContentfulLinkUrlTextNode___childMdx___html",
  TopBarTabsChildContentfulLinkUrlTextNodeChildMdxId = "topBarTabs___childContentfulLinkUrlTextNode___childMdx___id",
  TopBarTabsChildContentfulLinkUrlTextNodeChildMdxMdxAst = "topBarTabs___childContentfulLinkUrlTextNode___childMdx___mdxAST",
  TopBarTabsChildContentfulLinkUrlTextNodeChildMdxRawBody = "topBarTabs___childContentfulLinkUrlTextNode___childMdx___rawBody",
  TopBarTabsChildContentfulLinkUrlTextNodeChildMdxSlug = "topBarTabs___childContentfulLinkUrlTextNode___childMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarTabsChildContentfulLinkUrlTextNodeChildMdxTableOfContents = "topBarTabs___childContentfulLinkUrlTextNode___childMdx___tableOfContents",
  TopBarTabsChildContentfulLinkUrlTextNodeChildMdxTimeToRead = "topBarTabs___childContentfulLinkUrlTextNode___childMdx___timeToRead",
  TopBarTabsChildContentfulLinkUrlTextNodeChildren = "topBarTabs___childContentfulLinkUrlTextNode___children",
  TopBarTabsChildContentfulLinkUrlTextNodeChildrenMdx = "topBarTabs___childContentfulLinkUrlTextNode___childrenMdx",
  TopBarTabsChildContentfulLinkUrlTextNodeChildrenMdxBody = "topBarTabs___childContentfulLinkUrlTextNode___childrenMdx___body",
  TopBarTabsChildContentfulLinkUrlTextNodeChildrenMdxChildren = "topBarTabs___childContentfulLinkUrlTextNode___childrenMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarTabsChildContentfulLinkUrlTextNodeChildrenMdxExcerpt = "topBarTabs___childContentfulLinkUrlTextNode___childrenMdx___excerpt",
  TopBarTabsChildContentfulLinkUrlTextNodeChildrenMdxFileAbsolutePath = "topBarTabs___childContentfulLinkUrlTextNode___childrenMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarTabsChildContentfulLinkUrlTextNodeChildrenMdxHeadings = "topBarTabs___childContentfulLinkUrlTextNode___childrenMdx___headings",
  TopBarTabsChildContentfulLinkUrlTextNodeChildrenMdxHtml = "topBarTabs___childContentfulLinkUrlTextNode___childrenMdx___html",
  TopBarTabsChildContentfulLinkUrlTextNodeChildrenMdxId = "topBarTabs___childContentfulLinkUrlTextNode___childrenMdx___id",
  TopBarTabsChildContentfulLinkUrlTextNodeChildrenMdxMdxAst = "topBarTabs___childContentfulLinkUrlTextNode___childrenMdx___mdxAST",
  TopBarTabsChildContentfulLinkUrlTextNodeChildrenMdxRawBody = "topBarTabs___childContentfulLinkUrlTextNode___childrenMdx___rawBody",
  TopBarTabsChildContentfulLinkUrlTextNodeChildrenMdxSlug = "topBarTabs___childContentfulLinkUrlTextNode___childrenMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarTabsChildContentfulLinkUrlTextNodeChildrenMdxTableOfContents = "topBarTabs___childContentfulLinkUrlTextNode___childrenMdx___tableOfContents",
  TopBarTabsChildContentfulLinkUrlTextNodeChildrenMdxTimeToRead = "topBarTabs___childContentfulLinkUrlTextNode___childrenMdx___timeToRead",
  TopBarTabsChildContentfulLinkUrlTextNodeChildrenChildren = "topBarTabs___childContentfulLinkUrlTextNode___children___children",
  TopBarTabsChildContentfulLinkUrlTextNodeChildrenId = "topBarTabs___childContentfulLinkUrlTextNode___children___id",
  TopBarTabsChildContentfulLinkUrlTextNodeId = "topBarTabs___childContentfulLinkUrlTextNode___id",
  TopBarTabsChildContentfulLinkUrlTextNodeInternalContent = "topBarTabs___childContentfulLinkUrlTextNode___internal___content",
  TopBarTabsChildContentfulLinkUrlTextNodeInternalContentDigest = "topBarTabs___childContentfulLinkUrlTextNode___internal___contentDigest",
  TopBarTabsChildContentfulLinkUrlTextNodeInternalDescription = "topBarTabs___childContentfulLinkUrlTextNode___internal___description",
  TopBarTabsChildContentfulLinkUrlTextNodeInternalFieldOwners = "topBarTabs___childContentfulLinkUrlTextNode___internal___fieldOwners",
  TopBarTabsChildContentfulLinkUrlTextNodeInternalIgnoreType = "topBarTabs___childContentfulLinkUrlTextNode___internal___ignoreType",
  TopBarTabsChildContentfulLinkUrlTextNodeInternalMediaType = "topBarTabs___childContentfulLinkUrlTextNode___internal___mediaType",
  TopBarTabsChildContentfulLinkUrlTextNodeInternalOwner = "topBarTabs___childContentfulLinkUrlTextNode___internal___owner",
  TopBarTabsChildContentfulLinkUrlTextNodeInternalType = "topBarTabs___childContentfulLinkUrlTextNode___internal___type",
  TopBarTabsChildContentfulLinkUrlTextNodeParentChildren = "topBarTabs___childContentfulLinkUrlTextNode___parent___children",
  TopBarTabsChildContentfulLinkUrlTextNodeParentId = "topBarTabs___childContentfulLinkUrlTextNode___parent___id",
  TopBarTabsChildContentfulLinkUrlTextNodeSysType = "topBarTabs___childContentfulLinkUrlTextNode___sys___type",
  TopBarTabsChildContentfulLinkUrlTextNodeUrl = "topBarTabs___childContentfulLinkUrlTextNode___url",
  TopBarTabsChildren = "topBarTabs___children",
  TopBarTabsChildrenContentfulLinkUrlTextNode = "topBarTabs___childrenContentfulLinkUrlTextNode",
  TopBarTabsChildrenContentfulLinkUrlTextNodeChildMdxBody = "topBarTabs___childrenContentfulLinkUrlTextNode___childMdx___body",
  TopBarTabsChildrenContentfulLinkUrlTextNodeChildMdxChildren = "topBarTabs___childrenContentfulLinkUrlTextNode___childMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarTabsChildrenContentfulLinkUrlTextNodeChildMdxExcerpt = "topBarTabs___childrenContentfulLinkUrlTextNode___childMdx___excerpt",
  TopBarTabsChildrenContentfulLinkUrlTextNodeChildMdxFileAbsolutePath = "topBarTabs___childrenContentfulLinkUrlTextNode___childMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarTabsChildrenContentfulLinkUrlTextNodeChildMdxHeadings = "topBarTabs___childrenContentfulLinkUrlTextNode___childMdx___headings",
  TopBarTabsChildrenContentfulLinkUrlTextNodeChildMdxHtml = "topBarTabs___childrenContentfulLinkUrlTextNode___childMdx___html",
  TopBarTabsChildrenContentfulLinkUrlTextNodeChildMdxId = "topBarTabs___childrenContentfulLinkUrlTextNode___childMdx___id",
  TopBarTabsChildrenContentfulLinkUrlTextNodeChildMdxMdxAst = "topBarTabs___childrenContentfulLinkUrlTextNode___childMdx___mdxAST",
  TopBarTabsChildrenContentfulLinkUrlTextNodeChildMdxRawBody = "topBarTabs___childrenContentfulLinkUrlTextNode___childMdx___rawBody",
  TopBarTabsChildrenContentfulLinkUrlTextNodeChildMdxSlug = "topBarTabs___childrenContentfulLinkUrlTextNode___childMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarTabsChildrenContentfulLinkUrlTextNodeChildMdxTableOfContents = "topBarTabs___childrenContentfulLinkUrlTextNode___childMdx___tableOfContents",
  TopBarTabsChildrenContentfulLinkUrlTextNodeChildMdxTimeToRead = "topBarTabs___childrenContentfulLinkUrlTextNode___childMdx___timeToRead",
  TopBarTabsChildrenContentfulLinkUrlTextNodeChildren = "topBarTabs___childrenContentfulLinkUrlTextNode___children",
  TopBarTabsChildrenContentfulLinkUrlTextNodeChildrenMdx = "topBarTabs___childrenContentfulLinkUrlTextNode___childrenMdx",
  TopBarTabsChildrenContentfulLinkUrlTextNodeChildrenMdxBody = "topBarTabs___childrenContentfulLinkUrlTextNode___childrenMdx___body",
  TopBarTabsChildrenContentfulLinkUrlTextNodeChildrenMdxChildren = "topBarTabs___childrenContentfulLinkUrlTextNode___childrenMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarTabsChildrenContentfulLinkUrlTextNodeChildrenMdxExcerpt = "topBarTabs___childrenContentfulLinkUrlTextNode___childrenMdx___excerpt",
  TopBarTabsChildrenContentfulLinkUrlTextNodeChildrenMdxFileAbsolutePath = "topBarTabs___childrenContentfulLinkUrlTextNode___childrenMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarTabsChildrenContentfulLinkUrlTextNodeChildrenMdxHeadings = "topBarTabs___childrenContentfulLinkUrlTextNode___childrenMdx___headings",
  TopBarTabsChildrenContentfulLinkUrlTextNodeChildrenMdxHtml = "topBarTabs___childrenContentfulLinkUrlTextNode___childrenMdx___html",
  TopBarTabsChildrenContentfulLinkUrlTextNodeChildrenMdxId = "topBarTabs___childrenContentfulLinkUrlTextNode___childrenMdx___id",
  TopBarTabsChildrenContentfulLinkUrlTextNodeChildrenMdxMdxAst = "topBarTabs___childrenContentfulLinkUrlTextNode___childrenMdx___mdxAST",
  TopBarTabsChildrenContentfulLinkUrlTextNodeChildrenMdxRawBody = "topBarTabs___childrenContentfulLinkUrlTextNode___childrenMdx___rawBody",
  TopBarTabsChildrenContentfulLinkUrlTextNodeChildrenMdxSlug = "topBarTabs___childrenContentfulLinkUrlTextNode___childrenMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarTabsChildrenContentfulLinkUrlTextNodeChildrenMdxTableOfContents = "topBarTabs___childrenContentfulLinkUrlTextNode___childrenMdx___tableOfContents",
  TopBarTabsChildrenContentfulLinkUrlTextNodeChildrenMdxTimeToRead = "topBarTabs___childrenContentfulLinkUrlTextNode___childrenMdx___timeToRead",
  TopBarTabsChildrenContentfulLinkUrlTextNodeChildrenChildren = "topBarTabs___childrenContentfulLinkUrlTextNode___children___children",
  TopBarTabsChildrenContentfulLinkUrlTextNodeChildrenId = "topBarTabs___childrenContentfulLinkUrlTextNode___children___id",
  TopBarTabsChildrenContentfulLinkUrlTextNodeId = "topBarTabs___childrenContentfulLinkUrlTextNode___id",
  TopBarTabsChildrenContentfulLinkUrlTextNodeInternalContent = "topBarTabs___childrenContentfulLinkUrlTextNode___internal___content",
  TopBarTabsChildrenContentfulLinkUrlTextNodeInternalContentDigest = "topBarTabs___childrenContentfulLinkUrlTextNode___internal___contentDigest",
  TopBarTabsChildrenContentfulLinkUrlTextNodeInternalDescription = "topBarTabs___childrenContentfulLinkUrlTextNode___internal___description",
  TopBarTabsChildrenContentfulLinkUrlTextNodeInternalFieldOwners = "topBarTabs___childrenContentfulLinkUrlTextNode___internal___fieldOwners",
  TopBarTabsChildrenContentfulLinkUrlTextNodeInternalIgnoreType = "topBarTabs___childrenContentfulLinkUrlTextNode___internal___ignoreType",
  TopBarTabsChildrenContentfulLinkUrlTextNodeInternalMediaType = "topBarTabs___childrenContentfulLinkUrlTextNode___internal___mediaType",
  TopBarTabsChildrenContentfulLinkUrlTextNodeInternalOwner = "topBarTabs___childrenContentfulLinkUrlTextNode___internal___owner",
  TopBarTabsChildrenContentfulLinkUrlTextNodeInternalType = "topBarTabs___childrenContentfulLinkUrlTextNode___internal___type",
  TopBarTabsChildrenContentfulLinkUrlTextNodeParentChildren = "topBarTabs___childrenContentfulLinkUrlTextNode___parent___children",
  TopBarTabsChildrenContentfulLinkUrlTextNodeParentId = "topBarTabs___childrenContentfulLinkUrlTextNode___parent___id",
  TopBarTabsChildrenContentfulLinkUrlTextNodeSysType = "topBarTabs___childrenContentfulLinkUrlTextNode___sys___type",
  TopBarTabsChildrenContentfulLinkUrlTextNodeUrl = "topBarTabs___childrenContentfulLinkUrlTextNode___url",
  TopBarTabsChildrenChildren = "topBarTabs___children___children",
  TopBarTabsChildrenChildrenChildren = "topBarTabs___children___children___children",
  TopBarTabsChildrenChildrenId = "topBarTabs___children___children___id",
  TopBarTabsChildrenId = "topBarTabs___children___id",
  TopBarTabsChildrenInternalContent = "topBarTabs___children___internal___content",
  TopBarTabsChildrenInternalContentDigest = "topBarTabs___children___internal___contentDigest",
  TopBarTabsChildrenInternalDescription = "topBarTabs___children___internal___description",
  TopBarTabsChildrenInternalFieldOwners = "topBarTabs___children___internal___fieldOwners",
  TopBarTabsChildrenInternalIgnoreType = "topBarTabs___children___internal___ignoreType",
  TopBarTabsChildrenInternalMediaType = "topBarTabs___children___internal___mediaType",
  TopBarTabsChildrenInternalOwner = "topBarTabs___children___internal___owner",
  TopBarTabsChildrenInternalType = "topBarTabs___children___internal___type",
  TopBarTabsChildrenParentChildren = "topBarTabs___children___parent___children",
  TopBarTabsChildrenParentId = "topBarTabs___children___parent___id",
  TopBarTabsContentfulId = "topBarTabs___contentful_id",
  TopBarTabsContentfulid = "topBarTabs___contentfulid",
  TopBarTabsCreatedAt = "topBarTabs___createdAt",
  TopBarTabsId = "topBarTabs___id",
  TopBarTabsImageChildren = "topBarTabs___image___children",
  TopBarTabsImageChildrenChildren = "topBarTabs___image___children___children",
  TopBarTabsImageChildrenId = "topBarTabs___image___children___id",
  TopBarTabsImageContentfulId = "topBarTabs___image___contentful_id",
  TopBarTabsImageCreatedAt = "topBarTabs___image___createdAt",
  TopBarTabsImageDescription = "topBarTabs___image___description",
  TopBarTabsImageFileContentType = "topBarTabs___image___file___contentType",
  TopBarTabsImageFileFileName = "topBarTabs___image___file___fileName",
  TopBarTabsImageFileUrl = "topBarTabs___image___file___url",
  TopBarTabsImageFilename = "topBarTabs___image___filename",
  TopBarTabsImageFilesize = "topBarTabs___image___filesize",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarTabsImageGatsbyImage = "topBarTabs___image___gatsbyImage",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarTabsImageGatsbyImageData = "topBarTabs___image___gatsbyImageData",
  TopBarTabsImageHeight = "topBarTabs___image___height",
  TopBarTabsImageId = "topBarTabs___image___id",
  TopBarTabsImageInternalContent = "topBarTabs___image___internal___content",
  TopBarTabsImageInternalContentDigest = "topBarTabs___image___internal___contentDigest",
  TopBarTabsImageInternalDescription = "topBarTabs___image___internal___description",
  TopBarTabsImageInternalFieldOwners = "topBarTabs___image___internal___fieldOwners",
  TopBarTabsImageInternalIgnoreType = "topBarTabs___image___internal___ignoreType",
  TopBarTabsImageInternalMediaType = "topBarTabs___image___internal___mediaType",
  TopBarTabsImageInternalOwner = "topBarTabs___image___internal___owner",
  TopBarTabsImageInternalType = "topBarTabs___image___internal___type",
  TopBarTabsImageMimeType = "topBarTabs___image___mimeType",
  TopBarTabsImageNodeLocale = "topBarTabs___image___node_locale",
  TopBarTabsImageParentChildren = "topBarTabs___image___parent___children",
  TopBarTabsImageParentId = "topBarTabs___image___parent___id",
  TopBarTabsImagePlaceholderUrl = "topBarTabs___image___placeholderUrl",
  TopBarTabsImagePublicUrl = "topBarTabs___image___publicUrl",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarTabsImageResizeHeight = "topBarTabs___image___resize___height",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarTabsImageResizeSrc = "topBarTabs___image___resize___src",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarTabsImageResizeWidth = "topBarTabs___image___resize___width",
  TopBarTabsImageSpaceId = "topBarTabs___image___spaceId",
  TopBarTabsImageSysRevision = "topBarTabs___image___sys___revision",
  TopBarTabsImageSysType = "topBarTabs___image___sys___type",
  TopBarTabsImageTitle = "topBarTabs___image___title",
  TopBarTabsImageUpdatedAt = "topBarTabs___image___updatedAt",
  TopBarTabsImageUrl = "topBarTabs___image___url",
  TopBarTabsImageWidth = "topBarTabs___image___width",
  TopBarTabsInternalContent = "topBarTabs___internal___content",
  TopBarTabsInternalContentDigest = "topBarTabs___internal___contentDigest",
  TopBarTabsInternalDescription = "topBarTabs___internal___description",
  TopBarTabsInternalFieldOwners = "topBarTabs___internal___fieldOwners",
  TopBarTabsInternalIgnoreType = "topBarTabs___internal___ignoreType",
  TopBarTabsInternalMediaType = "topBarTabs___internal___mediaType",
  TopBarTabsInternalOwner = "topBarTabs___internal___owner",
  TopBarTabsInternalType = "topBarTabs___internal___type",
  TopBarTabsNodeLocale = "topBarTabs___node_locale",
  TopBarTabsOptions = "topBarTabs___options",
  TopBarTabsOptionsBottomBarLogoChildren = "topBarTabs___options___bottomBarLogo___children",
  TopBarTabsOptionsBottomBarLogoChildrenContentfulLinkUrlTextNode = "topBarTabs___options___bottomBarLogo___childrenContentfulLinkUrlTextNode",
  TopBarTabsOptionsBottomBarLogoContentfulId = "topBarTabs___options___bottomBarLogo___contentful_id",
  TopBarTabsOptionsBottomBarLogoContentfulid = "topBarTabs___options___bottomBarLogo___contentfulid",
  TopBarTabsOptionsBottomBarLogoCreatedAt = "topBarTabs___options___bottomBarLogo___createdAt",
  TopBarTabsOptionsBottomBarLogoId = "topBarTabs___options___bottomBarLogo___id",
  TopBarTabsOptionsBottomBarLogoNodeLocale = "topBarTabs___options___bottomBarLogo___node_locale",
  TopBarTabsOptionsBottomBarLogoOptions = "topBarTabs___options___bottomBarLogo___options",
  TopBarTabsOptionsBottomBarLogoSpaceId = "topBarTabs___options___bottomBarLogo___spaceId",
  TopBarTabsOptionsBottomBarLogoTitle = "topBarTabs___options___bottomBarLogo___title",
  TopBarTabsOptionsBottomBarLogoUpdatedAt = "topBarTabs___options___bottomBarLogo___updatedAt",
  TopBarTabsOptionsBottomBarSocialLinks = "topBarTabs___options___bottomBarSocialLinks",
  TopBarTabsOptionsBottomBarSocialLinksChildren = "topBarTabs___options___bottomBarSocialLinks___children",
  TopBarTabsOptionsBottomBarSocialLinksChildrenContentfulLinkUrlTextNode = "topBarTabs___options___bottomBarSocialLinks___childrenContentfulLinkUrlTextNode",
  TopBarTabsOptionsBottomBarSocialLinksContentfulId = "topBarTabs___options___bottomBarSocialLinks___contentful_id",
  TopBarTabsOptionsBottomBarSocialLinksContentfulid = "topBarTabs___options___bottomBarSocialLinks___contentfulid",
  TopBarTabsOptionsBottomBarSocialLinksCreatedAt = "topBarTabs___options___bottomBarSocialLinks___createdAt",
  TopBarTabsOptionsBottomBarSocialLinksId = "topBarTabs___options___bottomBarSocialLinks___id",
  TopBarTabsOptionsBottomBarSocialLinksNodeLocale = "topBarTabs___options___bottomBarSocialLinks___node_locale",
  TopBarTabsOptionsBottomBarSocialLinksOptions = "topBarTabs___options___bottomBarSocialLinks___options",
  TopBarTabsOptionsBottomBarSocialLinksSpaceId = "topBarTabs___options___bottomBarSocialLinks___spaceId",
  TopBarTabsOptionsBottomBarSocialLinksTitle = "topBarTabs___options___bottomBarSocialLinks___title",
  TopBarTabsOptionsBottomBarSocialLinksUpdatedAt = "topBarTabs___options___bottomBarSocialLinks___updatedAt",
  TopBarTabsOptionsBottomBarTabs = "topBarTabs___options___bottomBarTabs",
  TopBarTabsOptionsBottomBarTabsChildren = "topBarTabs___options___bottomBarTabs___children",
  TopBarTabsOptionsBottomBarTabsChildrenContentfulLinkUrlTextNode = "topBarTabs___options___bottomBarTabs___childrenContentfulLinkUrlTextNode",
  TopBarTabsOptionsBottomBarTabsContentfulId = "topBarTabs___options___bottomBarTabs___contentful_id",
  TopBarTabsOptionsBottomBarTabsContentfulid = "topBarTabs___options___bottomBarTabs___contentfulid",
  TopBarTabsOptionsBottomBarTabsCreatedAt = "topBarTabs___options___bottomBarTabs___createdAt",
  TopBarTabsOptionsBottomBarTabsId = "topBarTabs___options___bottomBarTabs___id",
  TopBarTabsOptionsBottomBarTabsNodeLocale = "topBarTabs___options___bottomBarTabs___node_locale",
  TopBarTabsOptionsBottomBarTabsOptions = "topBarTabs___options___bottomBarTabs___options",
  TopBarTabsOptionsBottomBarTabsSpaceId = "topBarTabs___options___bottomBarTabs___spaceId",
  TopBarTabsOptionsBottomBarTabsTitle = "topBarTabs___options___bottomBarTabs___title",
  TopBarTabsOptionsBottomBarTabsUpdatedAt = "topBarTabs___options___bottomBarTabs___updatedAt",
  TopBarTabsOptionsChildren = "topBarTabs___options___children",
  TopBarTabsOptionsChildrenChildren = "topBarTabs___options___children___children",
  TopBarTabsOptionsChildrenId = "topBarTabs___options___children___id",
  TopBarTabsOptionsContentfulId = "topBarTabs___options___contentful_id",
  TopBarTabsOptionsContentfulid = "topBarTabs___options___contentfulid",
  TopBarTabsOptionsCreatedAt = "topBarTabs___options___createdAt",
  TopBarTabsOptionsId = "topBarTabs___options___id",
  TopBarTabsOptionsInternalContent = "topBarTabs___options___internal___content",
  TopBarTabsOptionsInternalContentDigest = "topBarTabs___options___internal___contentDigest",
  TopBarTabsOptionsInternalDescription = "topBarTabs___options___internal___description",
  TopBarTabsOptionsInternalFieldOwners = "topBarTabs___options___internal___fieldOwners",
  TopBarTabsOptionsInternalIgnoreType = "topBarTabs___options___internal___ignoreType",
  TopBarTabsOptionsInternalMediaType = "topBarTabs___options___internal___mediaType",
  TopBarTabsOptionsInternalOwner = "topBarTabs___options___internal___owner",
  TopBarTabsOptionsInternalType = "topBarTabs___options___internal___type",
  TopBarTabsOptionsNodeLocale = "topBarTabs___options___node_locale",
  TopBarTabsOptionsParentChildren = "topBarTabs___options___parent___children",
  TopBarTabsOptionsParentId = "topBarTabs___options___parent___id",
  TopBarTabsOptionsSpaceId = "topBarTabs___options___spaceId",
  TopBarTabsOptionsSysRevision = "topBarTabs___options___sys___revision",
  TopBarTabsOptionsSysType = "topBarTabs___options___sys___type",
  TopBarTabsOptionsTopBarLogoChildren = "topBarTabs___options___topBarLogo___children",
  TopBarTabsOptionsTopBarLogoChildrenContentfulLinkUrlTextNode = "topBarTabs___options___topBarLogo___childrenContentfulLinkUrlTextNode",
  TopBarTabsOptionsTopBarLogoContentfulId = "topBarTabs___options___topBarLogo___contentful_id",
  TopBarTabsOptionsTopBarLogoContentfulid = "topBarTabs___options___topBarLogo___contentfulid",
  TopBarTabsOptionsTopBarLogoCreatedAt = "topBarTabs___options___topBarLogo___createdAt",
  TopBarTabsOptionsTopBarLogoId = "topBarTabs___options___topBarLogo___id",
  TopBarTabsOptionsTopBarLogoNodeLocale = "topBarTabs___options___topBarLogo___node_locale",
  TopBarTabsOptionsTopBarLogoOptions = "topBarTabs___options___topBarLogo___options",
  TopBarTabsOptionsTopBarLogoSpaceId = "topBarTabs___options___topBarLogo___spaceId",
  TopBarTabsOptionsTopBarLogoTitle = "topBarTabs___options___topBarLogo___title",
  TopBarTabsOptionsTopBarLogoUpdatedAt = "topBarTabs___options___topBarLogo___updatedAt",
  TopBarTabsOptionsTopBarSocialLinks = "topBarTabs___options___topBarSocialLinks",
  TopBarTabsOptionsTopBarSocialLinksChildren = "topBarTabs___options___topBarSocialLinks___children",
  TopBarTabsOptionsTopBarSocialLinksChildrenContentfulLinkUrlTextNode = "topBarTabs___options___topBarSocialLinks___childrenContentfulLinkUrlTextNode",
  TopBarTabsOptionsTopBarSocialLinksContentfulId = "topBarTabs___options___topBarSocialLinks___contentful_id",
  TopBarTabsOptionsTopBarSocialLinksContentfulid = "topBarTabs___options___topBarSocialLinks___contentfulid",
  TopBarTabsOptionsTopBarSocialLinksCreatedAt = "topBarTabs___options___topBarSocialLinks___createdAt",
  TopBarTabsOptionsTopBarSocialLinksId = "topBarTabs___options___topBarSocialLinks___id",
  TopBarTabsOptionsTopBarSocialLinksNodeLocale = "topBarTabs___options___topBarSocialLinks___node_locale",
  TopBarTabsOptionsTopBarSocialLinksOptions = "topBarTabs___options___topBarSocialLinks___options",
  TopBarTabsOptionsTopBarSocialLinksSpaceId = "topBarTabs___options___topBarSocialLinks___spaceId",
  TopBarTabsOptionsTopBarSocialLinksTitle = "topBarTabs___options___topBarSocialLinks___title",
  TopBarTabsOptionsTopBarSocialLinksUpdatedAt = "topBarTabs___options___topBarSocialLinks___updatedAt",
  TopBarTabsOptionsTopBarTabs = "topBarTabs___options___topBarTabs",
  TopBarTabsOptionsTopBarTabsChildren = "topBarTabs___options___topBarTabs___children",
  TopBarTabsOptionsTopBarTabsChildrenContentfulLinkUrlTextNode = "topBarTabs___options___topBarTabs___childrenContentfulLinkUrlTextNode",
  TopBarTabsOptionsTopBarTabsContentfulId = "topBarTabs___options___topBarTabs___contentful_id",
  TopBarTabsOptionsTopBarTabsContentfulid = "topBarTabs___options___topBarTabs___contentfulid",
  TopBarTabsOptionsTopBarTabsCreatedAt = "topBarTabs___options___topBarTabs___createdAt",
  TopBarTabsOptionsTopBarTabsId = "topBarTabs___options___topBarTabs___id",
  TopBarTabsOptionsTopBarTabsNodeLocale = "topBarTabs___options___topBarTabs___node_locale",
  TopBarTabsOptionsTopBarTabsOptions = "topBarTabs___options___topBarTabs___options",
  TopBarTabsOptionsTopBarTabsSpaceId = "topBarTabs___options___topBarTabs___spaceId",
  TopBarTabsOptionsTopBarTabsTitle = "topBarTabs___options___topBarTabs___title",
  TopBarTabsOptionsTopBarTabsUpdatedAt = "topBarTabs___options___topBarTabs___updatedAt",
  TopBarTabsOptionsUpdatedAt = "topBarTabs___options___updatedAt",
  TopBarTabsParentChildren = "topBarTabs___parent___children",
  TopBarTabsParentChildrenChildren = "topBarTabs___parent___children___children",
  TopBarTabsParentChildrenId = "topBarTabs___parent___children___id",
  TopBarTabsParentId = "topBarTabs___parent___id",
  TopBarTabsParentInternalContent = "topBarTabs___parent___internal___content",
  TopBarTabsParentInternalContentDigest = "topBarTabs___parent___internal___contentDigest",
  TopBarTabsParentInternalDescription = "topBarTabs___parent___internal___description",
  TopBarTabsParentInternalFieldOwners = "topBarTabs___parent___internal___fieldOwners",
  TopBarTabsParentInternalIgnoreType = "topBarTabs___parent___internal___ignoreType",
  TopBarTabsParentInternalMediaType = "topBarTabs___parent___internal___mediaType",
  TopBarTabsParentInternalOwner = "topBarTabs___parent___internal___owner",
  TopBarTabsParentInternalType = "topBarTabs___parent___internal___type",
  TopBarTabsParentParentChildren = "topBarTabs___parent___parent___children",
  TopBarTabsParentParentId = "topBarTabs___parent___parent___id",
  TopBarTabsSpaceId = "topBarTabs___spaceId",
  TopBarTabsSysRevision = "topBarTabs___sys___revision",
  TopBarTabsSysType = "topBarTabs___sys___type",
  TopBarTabsTitle = "topBarTabs___title",
  TopBarTabsUpdatedAt = "topBarTabs___updatedAt",
  TopBarTabsUrlChildMdxBody = "topBarTabs___url___childMdx___body",
  TopBarTabsUrlChildMdxChildren = "topBarTabs___url___childMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarTabsUrlChildMdxExcerpt = "topBarTabs___url___childMdx___excerpt",
  TopBarTabsUrlChildMdxFileAbsolutePath = "topBarTabs___url___childMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarTabsUrlChildMdxHeadings = "topBarTabs___url___childMdx___headings",
  TopBarTabsUrlChildMdxHtml = "topBarTabs___url___childMdx___html",
  TopBarTabsUrlChildMdxId = "topBarTabs___url___childMdx___id",
  TopBarTabsUrlChildMdxMdxAst = "topBarTabs___url___childMdx___mdxAST",
  TopBarTabsUrlChildMdxRawBody = "topBarTabs___url___childMdx___rawBody",
  TopBarTabsUrlChildMdxSlug = "topBarTabs___url___childMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarTabsUrlChildMdxTableOfContents = "topBarTabs___url___childMdx___tableOfContents",
  TopBarTabsUrlChildMdxTimeToRead = "topBarTabs___url___childMdx___timeToRead",
  TopBarTabsUrlChildren = "topBarTabs___url___children",
  TopBarTabsUrlChildrenMdx = "topBarTabs___url___childrenMdx",
  TopBarTabsUrlChildrenMdxBody = "topBarTabs___url___childrenMdx___body",
  TopBarTabsUrlChildrenMdxChildren = "topBarTabs___url___childrenMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarTabsUrlChildrenMdxExcerpt = "topBarTabs___url___childrenMdx___excerpt",
  TopBarTabsUrlChildrenMdxFileAbsolutePath = "topBarTabs___url___childrenMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarTabsUrlChildrenMdxHeadings = "topBarTabs___url___childrenMdx___headings",
  TopBarTabsUrlChildrenMdxHtml = "topBarTabs___url___childrenMdx___html",
  TopBarTabsUrlChildrenMdxId = "topBarTabs___url___childrenMdx___id",
  TopBarTabsUrlChildrenMdxMdxAst = "topBarTabs___url___childrenMdx___mdxAST",
  TopBarTabsUrlChildrenMdxRawBody = "topBarTabs___url___childrenMdx___rawBody",
  TopBarTabsUrlChildrenMdxSlug = "topBarTabs___url___childrenMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TopBarTabsUrlChildrenMdxTableOfContents = "topBarTabs___url___childrenMdx___tableOfContents",
  TopBarTabsUrlChildrenMdxTimeToRead = "topBarTabs___url___childrenMdx___timeToRead",
  TopBarTabsUrlChildrenChildren = "topBarTabs___url___children___children",
  TopBarTabsUrlChildrenId = "topBarTabs___url___children___id",
  TopBarTabsUrlId = "topBarTabs___url___id",
  TopBarTabsUrlInternalContent = "topBarTabs___url___internal___content",
  TopBarTabsUrlInternalContentDigest = "topBarTabs___url___internal___contentDigest",
  TopBarTabsUrlInternalDescription = "topBarTabs___url___internal___description",
  TopBarTabsUrlInternalFieldOwners = "topBarTabs___url___internal___fieldOwners",
  TopBarTabsUrlInternalIgnoreType = "topBarTabs___url___internal___ignoreType",
  TopBarTabsUrlInternalMediaType = "topBarTabs___url___internal___mediaType",
  TopBarTabsUrlInternalOwner = "topBarTabs___url___internal___owner",
  TopBarTabsUrlInternalType = "topBarTabs___url___internal___type",
  TopBarTabsUrlParentChildren = "topBarTabs___url___parent___children",
  TopBarTabsUrlParentId = "topBarTabs___url___parent___id",
  TopBarTabsUrlSysType = "topBarTabs___url___sys___type",
  TopBarTabsUrlUrl = "topBarTabs___url___url",
  UpdatedAt = "updatedAt",
}

export type ContentfulOptionsFilterInput = {
  bottomBarLogo?: InputMaybe<ContentfulLinkFilterInput>;
  bottomBarSocialLinks?: InputMaybe<ContentfulLinkFilterListInput>;
  bottomBarTabs?: InputMaybe<ContentfulLinkFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  contentfulid?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulOptionsSysFilterInput>;
  topBarLogo?: InputMaybe<ContentfulLinkFilterInput>;
  topBarSocialLinks?: InputMaybe<ContentfulLinkFilterListInput>;
  topBarTabs?: InputMaybe<ContentfulLinkFilterListInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulOptionsFilterListInput = {
  elemMatch?: InputMaybe<ContentfulOptionsFilterInput>;
};

export type ContentfulOptionsGroupConnection = {
  __typename?: "ContentfulOptionsGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulOptionsEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<ContentfulOptionsGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulOptions>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulOptionsGroupConnectionDistinctArgs = {
  field: ContentfulOptionsFieldsEnum;
};

export type ContentfulOptionsGroupConnectionGroupArgs = {
  field: ContentfulOptionsFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulOptionsGroupConnectionMaxArgs = {
  field: ContentfulOptionsFieldsEnum;
};

export type ContentfulOptionsGroupConnectionMinArgs = {
  field: ContentfulOptionsFieldsEnum;
};

export type ContentfulOptionsGroupConnectionSumArgs = {
  field: ContentfulOptionsFieldsEnum;
};

export type ContentfulOptionsSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulOptionsFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulOptionsSys = {
  __typename?: "ContentfulOptionsSys";
  contentType?: Maybe<ContentfulOptionsSysContentType>;
  revision?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["String"]>;
};

export type ContentfulOptionsSysContentType = {
  __typename?: "ContentfulOptionsSysContentType";
  sys?: Maybe<ContentfulOptionsSysContentTypeSys>;
};

export type ContentfulOptionsSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulOptionsSysContentTypeSysFilterInput>;
};

export type ContentfulOptionsSysContentTypeSys = {
  __typename?: "ContentfulOptionsSysContentTypeSys";
  id?: Maybe<Scalars["String"]>;
  linkType?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

export type ContentfulOptionsSysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulOptionsSysFilterInput = {
  contentType?: InputMaybe<ContentfulOptionsSysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulPage = ContentfulEntry &
  ContentfulReference &
  Node & {
    __typename?: "ContentfulPage";
    /** Returns the first child node of type contentfulPageDescriptionTextNode or null if there are no children of given type on this node */
    childContentfulPageDescriptionTextNode?: Maybe<ContentfulPageDescriptionTextNode>;
    children: Array<Node>;
    /** Returns all children nodes filtered by type contentfulPageDescriptionTextNode */
    childrenContentfulPageDescriptionTextNode?: Maybe<
      Array<Maybe<ContentfulPageDescriptionTextNode>>
    >;
    contentful_id: Scalars["String"];
    createdAt?: Maybe<Scalars["Date"]>;
    description?: Maybe<ContentfulPageDescriptionTextNode>;
    id: Scalars["ID"];
    internal: Internal;
    node_locale: Scalars["String"];
    parent?: Maybe<Node>;
    spaceId?: Maybe<Scalars["String"]>;
    sys?: Maybe<ContentfulPageSys>;
    title?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["Date"]>;
    url?: Maybe<Scalars["String"]>;
  };

export type ContentfulPageCreatedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type ContentfulPageUpdatedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type ContentfulPageConnection = {
  __typename?: "ContentfulPageConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulPageEdge>;
  group: Array<ContentfulPageGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulPage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulPageConnectionDistinctArgs = {
  field: ContentfulPageFieldsEnum;
};

export type ContentfulPageConnectionGroupArgs = {
  field: ContentfulPageFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulPageConnectionMaxArgs = {
  field: ContentfulPageFieldsEnum;
};

export type ContentfulPageConnectionMinArgs = {
  field: ContentfulPageFieldsEnum;
};

export type ContentfulPageConnectionSumArgs = {
  field: ContentfulPageFieldsEnum;
};

export type ContentfulPageEdge = {
  __typename?: "ContentfulPageEdge";
  next?: Maybe<ContentfulPage>;
  node: ContentfulPage;
  previous?: Maybe<ContentfulPage>;
};

export enum ContentfulPageFieldsEnum {
  ChildContentfulPageDescriptionTextNodeChildMdxBody = "childContentfulPageDescriptionTextNode___childMdx___body",
  ChildContentfulPageDescriptionTextNodeChildMdxChildren = "childContentfulPageDescriptionTextNode___childMdx___children",
  ChildContentfulPageDescriptionTextNodeChildMdxChildrenChildren = "childContentfulPageDescriptionTextNode___childMdx___children___children",
  ChildContentfulPageDescriptionTextNodeChildMdxChildrenId = "childContentfulPageDescriptionTextNode___childMdx___children___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildContentfulPageDescriptionTextNodeChildMdxExcerpt = "childContentfulPageDescriptionTextNode___childMdx___excerpt",
  ChildContentfulPageDescriptionTextNodeChildMdxFileAbsolutePath = "childContentfulPageDescriptionTextNode___childMdx___fileAbsolutePath",
  ChildContentfulPageDescriptionTextNodeChildMdxFrontmatterTitle = "childContentfulPageDescriptionTextNode___childMdx___frontmatter___title",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildContentfulPageDescriptionTextNodeChildMdxHeadings = "childContentfulPageDescriptionTextNode___childMdx___headings",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildContentfulPageDescriptionTextNodeChildMdxHeadingsDepth = "childContentfulPageDescriptionTextNode___childMdx___headings___depth",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildContentfulPageDescriptionTextNodeChildMdxHeadingsValue = "childContentfulPageDescriptionTextNode___childMdx___headings___value",
  ChildContentfulPageDescriptionTextNodeChildMdxHtml = "childContentfulPageDescriptionTextNode___childMdx___html",
  ChildContentfulPageDescriptionTextNodeChildMdxId = "childContentfulPageDescriptionTextNode___childMdx___id",
  ChildContentfulPageDescriptionTextNodeChildMdxInternalContent = "childContentfulPageDescriptionTextNode___childMdx___internal___content",
  ChildContentfulPageDescriptionTextNodeChildMdxInternalContentDigest = "childContentfulPageDescriptionTextNode___childMdx___internal___contentDigest",
  ChildContentfulPageDescriptionTextNodeChildMdxInternalDescription = "childContentfulPageDescriptionTextNode___childMdx___internal___description",
  ChildContentfulPageDescriptionTextNodeChildMdxInternalFieldOwners = "childContentfulPageDescriptionTextNode___childMdx___internal___fieldOwners",
  ChildContentfulPageDescriptionTextNodeChildMdxInternalIgnoreType = "childContentfulPageDescriptionTextNode___childMdx___internal___ignoreType",
  ChildContentfulPageDescriptionTextNodeChildMdxInternalMediaType = "childContentfulPageDescriptionTextNode___childMdx___internal___mediaType",
  ChildContentfulPageDescriptionTextNodeChildMdxInternalOwner = "childContentfulPageDescriptionTextNode___childMdx___internal___owner",
  ChildContentfulPageDescriptionTextNodeChildMdxInternalType = "childContentfulPageDescriptionTextNode___childMdx___internal___type",
  ChildContentfulPageDescriptionTextNodeChildMdxMdxAst = "childContentfulPageDescriptionTextNode___childMdx___mdxAST",
  ChildContentfulPageDescriptionTextNodeChildMdxParentChildren = "childContentfulPageDescriptionTextNode___childMdx___parent___children",
  ChildContentfulPageDescriptionTextNodeChildMdxParentId = "childContentfulPageDescriptionTextNode___childMdx___parent___id",
  ChildContentfulPageDescriptionTextNodeChildMdxRawBody = "childContentfulPageDescriptionTextNode___childMdx___rawBody",
  ChildContentfulPageDescriptionTextNodeChildMdxSlug = "childContentfulPageDescriptionTextNode___childMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildContentfulPageDescriptionTextNodeChildMdxTableOfContents = "childContentfulPageDescriptionTextNode___childMdx___tableOfContents",
  ChildContentfulPageDescriptionTextNodeChildMdxTimeToRead = "childContentfulPageDescriptionTextNode___childMdx___timeToRead",
  ChildContentfulPageDescriptionTextNodeChildMdxWordCountParagraphs = "childContentfulPageDescriptionTextNode___childMdx___wordCount___paragraphs",
  ChildContentfulPageDescriptionTextNodeChildMdxWordCountSentences = "childContentfulPageDescriptionTextNode___childMdx___wordCount___sentences",
  ChildContentfulPageDescriptionTextNodeChildMdxWordCountWords = "childContentfulPageDescriptionTextNode___childMdx___wordCount___words",
  ChildContentfulPageDescriptionTextNodeChildren = "childContentfulPageDescriptionTextNode___children",
  ChildContentfulPageDescriptionTextNodeChildrenMdx = "childContentfulPageDescriptionTextNode___childrenMdx",
  ChildContentfulPageDescriptionTextNodeChildrenMdxBody = "childContentfulPageDescriptionTextNode___childrenMdx___body",
  ChildContentfulPageDescriptionTextNodeChildrenMdxChildren = "childContentfulPageDescriptionTextNode___childrenMdx___children",
  ChildContentfulPageDescriptionTextNodeChildrenMdxChildrenChildren = "childContentfulPageDescriptionTextNode___childrenMdx___children___children",
  ChildContentfulPageDescriptionTextNodeChildrenMdxChildrenId = "childContentfulPageDescriptionTextNode___childrenMdx___children___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildContentfulPageDescriptionTextNodeChildrenMdxExcerpt = "childContentfulPageDescriptionTextNode___childrenMdx___excerpt",
  ChildContentfulPageDescriptionTextNodeChildrenMdxFileAbsolutePath = "childContentfulPageDescriptionTextNode___childrenMdx___fileAbsolutePath",
  ChildContentfulPageDescriptionTextNodeChildrenMdxFrontmatterTitle = "childContentfulPageDescriptionTextNode___childrenMdx___frontmatter___title",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildContentfulPageDescriptionTextNodeChildrenMdxHeadings = "childContentfulPageDescriptionTextNode___childrenMdx___headings",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildContentfulPageDescriptionTextNodeChildrenMdxHeadingsDepth = "childContentfulPageDescriptionTextNode___childrenMdx___headings___depth",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildContentfulPageDescriptionTextNodeChildrenMdxHeadingsValue = "childContentfulPageDescriptionTextNode___childrenMdx___headings___value",
  ChildContentfulPageDescriptionTextNodeChildrenMdxHtml = "childContentfulPageDescriptionTextNode___childrenMdx___html",
  ChildContentfulPageDescriptionTextNodeChildrenMdxId = "childContentfulPageDescriptionTextNode___childrenMdx___id",
  ChildContentfulPageDescriptionTextNodeChildrenMdxInternalContent = "childContentfulPageDescriptionTextNode___childrenMdx___internal___content",
  ChildContentfulPageDescriptionTextNodeChildrenMdxInternalContentDigest = "childContentfulPageDescriptionTextNode___childrenMdx___internal___contentDigest",
  ChildContentfulPageDescriptionTextNodeChildrenMdxInternalDescription = "childContentfulPageDescriptionTextNode___childrenMdx___internal___description",
  ChildContentfulPageDescriptionTextNodeChildrenMdxInternalFieldOwners = "childContentfulPageDescriptionTextNode___childrenMdx___internal___fieldOwners",
  ChildContentfulPageDescriptionTextNodeChildrenMdxInternalIgnoreType = "childContentfulPageDescriptionTextNode___childrenMdx___internal___ignoreType",
  ChildContentfulPageDescriptionTextNodeChildrenMdxInternalMediaType = "childContentfulPageDescriptionTextNode___childrenMdx___internal___mediaType",
  ChildContentfulPageDescriptionTextNodeChildrenMdxInternalOwner = "childContentfulPageDescriptionTextNode___childrenMdx___internal___owner",
  ChildContentfulPageDescriptionTextNodeChildrenMdxInternalType = "childContentfulPageDescriptionTextNode___childrenMdx___internal___type",
  ChildContentfulPageDescriptionTextNodeChildrenMdxMdxAst = "childContentfulPageDescriptionTextNode___childrenMdx___mdxAST",
  ChildContentfulPageDescriptionTextNodeChildrenMdxParentChildren = "childContentfulPageDescriptionTextNode___childrenMdx___parent___children",
  ChildContentfulPageDescriptionTextNodeChildrenMdxParentId = "childContentfulPageDescriptionTextNode___childrenMdx___parent___id",
  ChildContentfulPageDescriptionTextNodeChildrenMdxRawBody = "childContentfulPageDescriptionTextNode___childrenMdx___rawBody",
  ChildContentfulPageDescriptionTextNodeChildrenMdxSlug = "childContentfulPageDescriptionTextNode___childrenMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildContentfulPageDescriptionTextNodeChildrenMdxTableOfContents = "childContentfulPageDescriptionTextNode___childrenMdx___tableOfContents",
  ChildContentfulPageDescriptionTextNodeChildrenMdxTimeToRead = "childContentfulPageDescriptionTextNode___childrenMdx___timeToRead",
  ChildContentfulPageDescriptionTextNodeChildrenMdxWordCountParagraphs = "childContentfulPageDescriptionTextNode___childrenMdx___wordCount___paragraphs",
  ChildContentfulPageDescriptionTextNodeChildrenMdxWordCountSentences = "childContentfulPageDescriptionTextNode___childrenMdx___wordCount___sentences",
  ChildContentfulPageDescriptionTextNodeChildrenMdxWordCountWords = "childContentfulPageDescriptionTextNode___childrenMdx___wordCount___words",
  ChildContentfulPageDescriptionTextNodeChildrenChildren = "childContentfulPageDescriptionTextNode___children___children",
  ChildContentfulPageDescriptionTextNodeChildrenChildrenChildren = "childContentfulPageDescriptionTextNode___children___children___children",
  ChildContentfulPageDescriptionTextNodeChildrenChildrenId = "childContentfulPageDescriptionTextNode___children___children___id",
  ChildContentfulPageDescriptionTextNodeChildrenId = "childContentfulPageDescriptionTextNode___children___id",
  ChildContentfulPageDescriptionTextNodeChildrenInternalContent = "childContentfulPageDescriptionTextNode___children___internal___content",
  ChildContentfulPageDescriptionTextNodeChildrenInternalContentDigest = "childContentfulPageDescriptionTextNode___children___internal___contentDigest",
  ChildContentfulPageDescriptionTextNodeChildrenInternalDescription = "childContentfulPageDescriptionTextNode___children___internal___description",
  ChildContentfulPageDescriptionTextNodeChildrenInternalFieldOwners = "childContentfulPageDescriptionTextNode___children___internal___fieldOwners",
  ChildContentfulPageDescriptionTextNodeChildrenInternalIgnoreType = "childContentfulPageDescriptionTextNode___children___internal___ignoreType",
  ChildContentfulPageDescriptionTextNodeChildrenInternalMediaType = "childContentfulPageDescriptionTextNode___children___internal___mediaType",
  ChildContentfulPageDescriptionTextNodeChildrenInternalOwner = "childContentfulPageDescriptionTextNode___children___internal___owner",
  ChildContentfulPageDescriptionTextNodeChildrenInternalType = "childContentfulPageDescriptionTextNode___children___internal___type",
  ChildContentfulPageDescriptionTextNodeChildrenParentChildren = "childContentfulPageDescriptionTextNode___children___parent___children",
  ChildContentfulPageDescriptionTextNodeChildrenParentId = "childContentfulPageDescriptionTextNode___children___parent___id",
  ChildContentfulPageDescriptionTextNodeDescription = "childContentfulPageDescriptionTextNode___description",
  ChildContentfulPageDescriptionTextNodeId = "childContentfulPageDescriptionTextNode___id",
  ChildContentfulPageDescriptionTextNodeInternalContent = "childContentfulPageDescriptionTextNode___internal___content",
  ChildContentfulPageDescriptionTextNodeInternalContentDigest = "childContentfulPageDescriptionTextNode___internal___contentDigest",
  ChildContentfulPageDescriptionTextNodeInternalDescription = "childContentfulPageDescriptionTextNode___internal___description",
  ChildContentfulPageDescriptionTextNodeInternalFieldOwners = "childContentfulPageDescriptionTextNode___internal___fieldOwners",
  ChildContentfulPageDescriptionTextNodeInternalIgnoreType = "childContentfulPageDescriptionTextNode___internal___ignoreType",
  ChildContentfulPageDescriptionTextNodeInternalMediaType = "childContentfulPageDescriptionTextNode___internal___mediaType",
  ChildContentfulPageDescriptionTextNodeInternalOwner = "childContentfulPageDescriptionTextNode___internal___owner",
  ChildContentfulPageDescriptionTextNodeInternalType = "childContentfulPageDescriptionTextNode___internal___type",
  ChildContentfulPageDescriptionTextNodeParentChildren = "childContentfulPageDescriptionTextNode___parent___children",
  ChildContentfulPageDescriptionTextNodeParentChildrenChildren = "childContentfulPageDescriptionTextNode___parent___children___children",
  ChildContentfulPageDescriptionTextNodeParentChildrenId = "childContentfulPageDescriptionTextNode___parent___children___id",
  ChildContentfulPageDescriptionTextNodeParentId = "childContentfulPageDescriptionTextNode___parent___id",
  ChildContentfulPageDescriptionTextNodeParentInternalContent = "childContentfulPageDescriptionTextNode___parent___internal___content",
  ChildContentfulPageDescriptionTextNodeParentInternalContentDigest = "childContentfulPageDescriptionTextNode___parent___internal___contentDigest",
  ChildContentfulPageDescriptionTextNodeParentInternalDescription = "childContentfulPageDescriptionTextNode___parent___internal___description",
  ChildContentfulPageDescriptionTextNodeParentInternalFieldOwners = "childContentfulPageDescriptionTextNode___parent___internal___fieldOwners",
  ChildContentfulPageDescriptionTextNodeParentInternalIgnoreType = "childContentfulPageDescriptionTextNode___parent___internal___ignoreType",
  ChildContentfulPageDescriptionTextNodeParentInternalMediaType = "childContentfulPageDescriptionTextNode___parent___internal___mediaType",
  ChildContentfulPageDescriptionTextNodeParentInternalOwner = "childContentfulPageDescriptionTextNode___parent___internal___owner",
  ChildContentfulPageDescriptionTextNodeParentInternalType = "childContentfulPageDescriptionTextNode___parent___internal___type",
  ChildContentfulPageDescriptionTextNodeParentParentChildren = "childContentfulPageDescriptionTextNode___parent___parent___children",
  ChildContentfulPageDescriptionTextNodeParentParentId = "childContentfulPageDescriptionTextNode___parent___parent___id",
  ChildContentfulPageDescriptionTextNodeSysType = "childContentfulPageDescriptionTextNode___sys___type",
  Children = "children",
  ChildrenContentfulPageDescriptionTextNode = "childrenContentfulPageDescriptionTextNode",
  ChildrenContentfulPageDescriptionTextNodeChildMdxBody = "childrenContentfulPageDescriptionTextNode___childMdx___body",
  ChildrenContentfulPageDescriptionTextNodeChildMdxChildren = "childrenContentfulPageDescriptionTextNode___childMdx___children",
  ChildrenContentfulPageDescriptionTextNodeChildMdxChildrenChildren = "childrenContentfulPageDescriptionTextNode___childMdx___children___children",
  ChildrenContentfulPageDescriptionTextNodeChildMdxChildrenId = "childrenContentfulPageDescriptionTextNode___childMdx___children___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenContentfulPageDescriptionTextNodeChildMdxExcerpt = "childrenContentfulPageDescriptionTextNode___childMdx___excerpt",
  ChildrenContentfulPageDescriptionTextNodeChildMdxFileAbsolutePath = "childrenContentfulPageDescriptionTextNode___childMdx___fileAbsolutePath",
  ChildrenContentfulPageDescriptionTextNodeChildMdxFrontmatterTitle = "childrenContentfulPageDescriptionTextNode___childMdx___frontmatter___title",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenContentfulPageDescriptionTextNodeChildMdxHeadings = "childrenContentfulPageDescriptionTextNode___childMdx___headings",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenContentfulPageDescriptionTextNodeChildMdxHeadingsDepth = "childrenContentfulPageDescriptionTextNode___childMdx___headings___depth",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenContentfulPageDescriptionTextNodeChildMdxHeadingsValue = "childrenContentfulPageDescriptionTextNode___childMdx___headings___value",
  ChildrenContentfulPageDescriptionTextNodeChildMdxHtml = "childrenContentfulPageDescriptionTextNode___childMdx___html",
  ChildrenContentfulPageDescriptionTextNodeChildMdxId = "childrenContentfulPageDescriptionTextNode___childMdx___id",
  ChildrenContentfulPageDescriptionTextNodeChildMdxInternalContent = "childrenContentfulPageDescriptionTextNode___childMdx___internal___content",
  ChildrenContentfulPageDescriptionTextNodeChildMdxInternalContentDigest = "childrenContentfulPageDescriptionTextNode___childMdx___internal___contentDigest",
  ChildrenContentfulPageDescriptionTextNodeChildMdxInternalDescription = "childrenContentfulPageDescriptionTextNode___childMdx___internal___description",
  ChildrenContentfulPageDescriptionTextNodeChildMdxInternalFieldOwners = "childrenContentfulPageDescriptionTextNode___childMdx___internal___fieldOwners",
  ChildrenContentfulPageDescriptionTextNodeChildMdxInternalIgnoreType = "childrenContentfulPageDescriptionTextNode___childMdx___internal___ignoreType",
  ChildrenContentfulPageDescriptionTextNodeChildMdxInternalMediaType = "childrenContentfulPageDescriptionTextNode___childMdx___internal___mediaType",
  ChildrenContentfulPageDescriptionTextNodeChildMdxInternalOwner = "childrenContentfulPageDescriptionTextNode___childMdx___internal___owner",
  ChildrenContentfulPageDescriptionTextNodeChildMdxInternalType = "childrenContentfulPageDescriptionTextNode___childMdx___internal___type",
  ChildrenContentfulPageDescriptionTextNodeChildMdxMdxAst = "childrenContentfulPageDescriptionTextNode___childMdx___mdxAST",
  ChildrenContentfulPageDescriptionTextNodeChildMdxParentChildren = "childrenContentfulPageDescriptionTextNode___childMdx___parent___children",
  ChildrenContentfulPageDescriptionTextNodeChildMdxParentId = "childrenContentfulPageDescriptionTextNode___childMdx___parent___id",
  ChildrenContentfulPageDescriptionTextNodeChildMdxRawBody = "childrenContentfulPageDescriptionTextNode___childMdx___rawBody",
  ChildrenContentfulPageDescriptionTextNodeChildMdxSlug = "childrenContentfulPageDescriptionTextNode___childMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenContentfulPageDescriptionTextNodeChildMdxTableOfContents = "childrenContentfulPageDescriptionTextNode___childMdx___tableOfContents",
  ChildrenContentfulPageDescriptionTextNodeChildMdxTimeToRead = "childrenContentfulPageDescriptionTextNode___childMdx___timeToRead",
  ChildrenContentfulPageDescriptionTextNodeChildMdxWordCountParagraphs = "childrenContentfulPageDescriptionTextNode___childMdx___wordCount___paragraphs",
  ChildrenContentfulPageDescriptionTextNodeChildMdxWordCountSentences = "childrenContentfulPageDescriptionTextNode___childMdx___wordCount___sentences",
  ChildrenContentfulPageDescriptionTextNodeChildMdxWordCountWords = "childrenContentfulPageDescriptionTextNode___childMdx___wordCount___words",
  ChildrenContentfulPageDescriptionTextNodeChildren = "childrenContentfulPageDescriptionTextNode___children",
  ChildrenContentfulPageDescriptionTextNodeChildrenMdx = "childrenContentfulPageDescriptionTextNode___childrenMdx",
  ChildrenContentfulPageDescriptionTextNodeChildrenMdxBody = "childrenContentfulPageDescriptionTextNode___childrenMdx___body",
  ChildrenContentfulPageDescriptionTextNodeChildrenMdxChildren = "childrenContentfulPageDescriptionTextNode___childrenMdx___children",
  ChildrenContentfulPageDescriptionTextNodeChildrenMdxChildrenChildren = "childrenContentfulPageDescriptionTextNode___childrenMdx___children___children",
  ChildrenContentfulPageDescriptionTextNodeChildrenMdxChildrenId = "childrenContentfulPageDescriptionTextNode___childrenMdx___children___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenContentfulPageDescriptionTextNodeChildrenMdxExcerpt = "childrenContentfulPageDescriptionTextNode___childrenMdx___excerpt",
  ChildrenContentfulPageDescriptionTextNodeChildrenMdxFileAbsolutePath = "childrenContentfulPageDescriptionTextNode___childrenMdx___fileAbsolutePath",
  ChildrenContentfulPageDescriptionTextNodeChildrenMdxFrontmatterTitle = "childrenContentfulPageDescriptionTextNode___childrenMdx___frontmatter___title",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenContentfulPageDescriptionTextNodeChildrenMdxHeadings = "childrenContentfulPageDescriptionTextNode___childrenMdx___headings",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenContentfulPageDescriptionTextNodeChildrenMdxHeadingsDepth = "childrenContentfulPageDescriptionTextNode___childrenMdx___headings___depth",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenContentfulPageDescriptionTextNodeChildrenMdxHeadingsValue = "childrenContentfulPageDescriptionTextNode___childrenMdx___headings___value",
  ChildrenContentfulPageDescriptionTextNodeChildrenMdxHtml = "childrenContentfulPageDescriptionTextNode___childrenMdx___html",
  ChildrenContentfulPageDescriptionTextNodeChildrenMdxId = "childrenContentfulPageDescriptionTextNode___childrenMdx___id",
  ChildrenContentfulPageDescriptionTextNodeChildrenMdxInternalContent = "childrenContentfulPageDescriptionTextNode___childrenMdx___internal___content",
  ChildrenContentfulPageDescriptionTextNodeChildrenMdxInternalContentDigest = "childrenContentfulPageDescriptionTextNode___childrenMdx___internal___contentDigest",
  ChildrenContentfulPageDescriptionTextNodeChildrenMdxInternalDescription = "childrenContentfulPageDescriptionTextNode___childrenMdx___internal___description",
  ChildrenContentfulPageDescriptionTextNodeChildrenMdxInternalFieldOwners = "childrenContentfulPageDescriptionTextNode___childrenMdx___internal___fieldOwners",
  ChildrenContentfulPageDescriptionTextNodeChildrenMdxInternalIgnoreType = "childrenContentfulPageDescriptionTextNode___childrenMdx___internal___ignoreType",
  ChildrenContentfulPageDescriptionTextNodeChildrenMdxInternalMediaType = "childrenContentfulPageDescriptionTextNode___childrenMdx___internal___mediaType",
  ChildrenContentfulPageDescriptionTextNodeChildrenMdxInternalOwner = "childrenContentfulPageDescriptionTextNode___childrenMdx___internal___owner",
  ChildrenContentfulPageDescriptionTextNodeChildrenMdxInternalType = "childrenContentfulPageDescriptionTextNode___childrenMdx___internal___type",
  ChildrenContentfulPageDescriptionTextNodeChildrenMdxMdxAst = "childrenContentfulPageDescriptionTextNode___childrenMdx___mdxAST",
  ChildrenContentfulPageDescriptionTextNodeChildrenMdxParentChildren = "childrenContentfulPageDescriptionTextNode___childrenMdx___parent___children",
  ChildrenContentfulPageDescriptionTextNodeChildrenMdxParentId = "childrenContentfulPageDescriptionTextNode___childrenMdx___parent___id",
  ChildrenContentfulPageDescriptionTextNodeChildrenMdxRawBody = "childrenContentfulPageDescriptionTextNode___childrenMdx___rawBody",
  ChildrenContentfulPageDescriptionTextNodeChildrenMdxSlug = "childrenContentfulPageDescriptionTextNode___childrenMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenContentfulPageDescriptionTextNodeChildrenMdxTableOfContents = "childrenContentfulPageDescriptionTextNode___childrenMdx___tableOfContents",
  ChildrenContentfulPageDescriptionTextNodeChildrenMdxTimeToRead = "childrenContentfulPageDescriptionTextNode___childrenMdx___timeToRead",
  ChildrenContentfulPageDescriptionTextNodeChildrenMdxWordCountParagraphs = "childrenContentfulPageDescriptionTextNode___childrenMdx___wordCount___paragraphs",
  ChildrenContentfulPageDescriptionTextNodeChildrenMdxWordCountSentences = "childrenContentfulPageDescriptionTextNode___childrenMdx___wordCount___sentences",
  ChildrenContentfulPageDescriptionTextNodeChildrenMdxWordCountWords = "childrenContentfulPageDescriptionTextNode___childrenMdx___wordCount___words",
  ChildrenContentfulPageDescriptionTextNodeChildrenChildren = "childrenContentfulPageDescriptionTextNode___children___children",
  ChildrenContentfulPageDescriptionTextNodeChildrenChildrenChildren = "childrenContentfulPageDescriptionTextNode___children___children___children",
  ChildrenContentfulPageDescriptionTextNodeChildrenChildrenId = "childrenContentfulPageDescriptionTextNode___children___children___id",
  ChildrenContentfulPageDescriptionTextNodeChildrenId = "childrenContentfulPageDescriptionTextNode___children___id",
  ChildrenContentfulPageDescriptionTextNodeChildrenInternalContent = "childrenContentfulPageDescriptionTextNode___children___internal___content",
  ChildrenContentfulPageDescriptionTextNodeChildrenInternalContentDigest = "childrenContentfulPageDescriptionTextNode___children___internal___contentDigest",
  ChildrenContentfulPageDescriptionTextNodeChildrenInternalDescription = "childrenContentfulPageDescriptionTextNode___children___internal___description",
  ChildrenContentfulPageDescriptionTextNodeChildrenInternalFieldOwners = "childrenContentfulPageDescriptionTextNode___children___internal___fieldOwners",
  ChildrenContentfulPageDescriptionTextNodeChildrenInternalIgnoreType = "childrenContentfulPageDescriptionTextNode___children___internal___ignoreType",
  ChildrenContentfulPageDescriptionTextNodeChildrenInternalMediaType = "childrenContentfulPageDescriptionTextNode___children___internal___mediaType",
  ChildrenContentfulPageDescriptionTextNodeChildrenInternalOwner = "childrenContentfulPageDescriptionTextNode___children___internal___owner",
  ChildrenContentfulPageDescriptionTextNodeChildrenInternalType = "childrenContentfulPageDescriptionTextNode___children___internal___type",
  ChildrenContentfulPageDescriptionTextNodeChildrenParentChildren = "childrenContentfulPageDescriptionTextNode___children___parent___children",
  ChildrenContentfulPageDescriptionTextNodeChildrenParentId = "childrenContentfulPageDescriptionTextNode___children___parent___id",
  ChildrenContentfulPageDescriptionTextNodeDescription = "childrenContentfulPageDescriptionTextNode___description",
  ChildrenContentfulPageDescriptionTextNodeId = "childrenContentfulPageDescriptionTextNode___id",
  ChildrenContentfulPageDescriptionTextNodeInternalContent = "childrenContentfulPageDescriptionTextNode___internal___content",
  ChildrenContentfulPageDescriptionTextNodeInternalContentDigest = "childrenContentfulPageDescriptionTextNode___internal___contentDigest",
  ChildrenContentfulPageDescriptionTextNodeInternalDescription = "childrenContentfulPageDescriptionTextNode___internal___description",
  ChildrenContentfulPageDescriptionTextNodeInternalFieldOwners = "childrenContentfulPageDescriptionTextNode___internal___fieldOwners",
  ChildrenContentfulPageDescriptionTextNodeInternalIgnoreType = "childrenContentfulPageDescriptionTextNode___internal___ignoreType",
  ChildrenContentfulPageDescriptionTextNodeInternalMediaType = "childrenContentfulPageDescriptionTextNode___internal___mediaType",
  ChildrenContentfulPageDescriptionTextNodeInternalOwner = "childrenContentfulPageDescriptionTextNode___internal___owner",
  ChildrenContentfulPageDescriptionTextNodeInternalType = "childrenContentfulPageDescriptionTextNode___internal___type",
  ChildrenContentfulPageDescriptionTextNodeParentChildren = "childrenContentfulPageDescriptionTextNode___parent___children",
  ChildrenContentfulPageDescriptionTextNodeParentChildrenChildren = "childrenContentfulPageDescriptionTextNode___parent___children___children",
  ChildrenContentfulPageDescriptionTextNodeParentChildrenId = "childrenContentfulPageDescriptionTextNode___parent___children___id",
  ChildrenContentfulPageDescriptionTextNodeParentId = "childrenContentfulPageDescriptionTextNode___parent___id",
  ChildrenContentfulPageDescriptionTextNodeParentInternalContent = "childrenContentfulPageDescriptionTextNode___parent___internal___content",
  ChildrenContentfulPageDescriptionTextNodeParentInternalContentDigest = "childrenContentfulPageDescriptionTextNode___parent___internal___contentDigest",
  ChildrenContentfulPageDescriptionTextNodeParentInternalDescription = "childrenContentfulPageDescriptionTextNode___parent___internal___description",
  ChildrenContentfulPageDescriptionTextNodeParentInternalFieldOwners = "childrenContentfulPageDescriptionTextNode___parent___internal___fieldOwners",
  ChildrenContentfulPageDescriptionTextNodeParentInternalIgnoreType = "childrenContentfulPageDescriptionTextNode___parent___internal___ignoreType",
  ChildrenContentfulPageDescriptionTextNodeParentInternalMediaType = "childrenContentfulPageDescriptionTextNode___parent___internal___mediaType",
  ChildrenContentfulPageDescriptionTextNodeParentInternalOwner = "childrenContentfulPageDescriptionTextNode___parent___internal___owner",
  ChildrenContentfulPageDescriptionTextNodeParentInternalType = "childrenContentfulPageDescriptionTextNode___parent___internal___type",
  ChildrenContentfulPageDescriptionTextNodeParentParentChildren = "childrenContentfulPageDescriptionTextNode___parent___parent___children",
  ChildrenContentfulPageDescriptionTextNodeParentParentId = "childrenContentfulPageDescriptionTextNode___parent___parent___id",
  ChildrenContentfulPageDescriptionTextNodeSysType = "childrenContentfulPageDescriptionTextNode___sys___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  ContentfulId = "contentful_id",
  CreatedAt = "createdAt",
  DescriptionChildMdxBody = "description___childMdx___body",
  DescriptionChildMdxChildren = "description___childMdx___children",
  DescriptionChildMdxChildrenChildren = "description___childMdx___children___children",
  DescriptionChildMdxChildrenId = "description___childMdx___children___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  DescriptionChildMdxExcerpt = "description___childMdx___excerpt",
  DescriptionChildMdxFileAbsolutePath = "description___childMdx___fileAbsolutePath",
  DescriptionChildMdxFrontmatterTitle = "description___childMdx___frontmatter___title",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  DescriptionChildMdxHeadings = "description___childMdx___headings",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  DescriptionChildMdxHeadingsDepth = "description___childMdx___headings___depth",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  DescriptionChildMdxHeadingsValue = "description___childMdx___headings___value",
  DescriptionChildMdxHtml = "description___childMdx___html",
  DescriptionChildMdxId = "description___childMdx___id",
  DescriptionChildMdxInternalContent = "description___childMdx___internal___content",
  DescriptionChildMdxInternalContentDigest = "description___childMdx___internal___contentDigest",
  DescriptionChildMdxInternalDescription = "description___childMdx___internal___description",
  DescriptionChildMdxInternalFieldOwners = "description___childMdx___internal___fieldOwners",
  DescriptionChildMdxInternalIgnoreType = "description___childMdx___internal___ignoreType",
  DescriptionChildMdxInternalMediaType = "description___childMdx___internal___mediaType",
  DescriptionChildMdxInternalOwner = "description___childMdx___internal___owner",
  DescriptionChildMdxInternalType = "description___childMdx___internal___type",
  DescriptionChildMdxMdxAst = "description___childMdx___mdxAST",
  DescriptionChildMdxParentChildren = "description___childMdx___parent___children",
  DescriptionChildMdxParentId = "description___childMdx___parent___id",
  DescriptionChildMdxRawBody = "description___childMdx___rawBody",
  DescriptionChildMdxSlug = "description___childMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  DescriptionChildMdxTableOfContents = "description___childMdx___tableOfContents",
  DescriptionChildMdxTimeToRead = "description___childMdx___timeToRead",
  DescriptionChildMdxWordCountParagraphs = "description___childMdx___wordCount___paragraphs",
  DescriptionChildMdxWordCountSentences = "description___childMdx___wordCount___sentences",
  DescriptionChildMdxWordCountWords = "description___childMdx___wordCount___words",
  DescriptionChildren = "description___children",
  DescriptionChildrenMdx = "description___childrenMdx",
  DescriptionChildrenMdxBody = "description___childrenMdx___body",
  DescriptionChildrenMdxChildren = "description___childrenMdx___children",
  DescriptionChildrenMdxChildrenChildren = "description___childrenMdx___children___children",
  DescriptionChildrenMdxChildrenId = "description___childrenMdx___children___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  DescriptionChildrenMdxExcerpt = "description___childrenMdx___excerpt",
  DescriptionChildrenMdxFileAbsolutePath = "description___childrenMdx___fileAbsolutePath",
  DescriptionChildrenMdxFrontmatterTitle = "description___childrenMdx___frontmatter___title",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  DescriptionChildrenMdxHeadings = "description___childrenMdx___headings",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  DescriptionChildrenMdxHeadingsDepth = "description___childrenMdx___headings___depth",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  DescriptionChildrenMdxHeadingsValue = "description___childrenMdx___headings___value",
  DescriptionChildrenMdxHtml = "description___childrenMdx___html",
  DescriptionChildrenMdxId = "description___childrenMdx___id",
  DescriptionChildrenMdxInternalContent = "description___childrenMdx___internal___content",
  DescriptionChildrenMdxInternalContentDigest = "description___childrenMdx___internal___contentDigest",
  DescriptionChildrenMdxInternalDescription = "description___childrenMdx___internal___description",
  DescriptionChildrenMdxInternalFieldOwners = "description___childrenMdx___internal___fieldOwners",
  DescriptionChildrenMdxInternalIgnoreType = "description___childrenMdx___internal___ignoreType",
  DescriptionChildrenMdxInternalMediaType = "description___childrenMdx___internal___mediaType",
  DescriptionChildrenMdxInternalOwner = "description___childrenMdx___internal___owner",
  DescriptionChildrenMdxInternalType = "description___childrenMdx___internal___type",
  DescriptionChildrenMdxMdxAst = "description___childrenMdx___mdxAST",
  DescriptionChildrenMdxParentChildren = "description___childrenMdx___parent___children",
  DescriptionChildrenMdxParentId = "description___childrenMdx___parent___id",
  DescriptionChildrenMdxRawBody = "description___childrenMdx___rawBody",
  DescriptionChildrenMdxSlug = "description___childrenMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  DescriptionChildrenMdxTableOfContents = "description___childrenMdx___tableOfContents",
  DescriptionChildrenMdxTimeToRead = "description___childrenMdx___timeToRead",
  DescriptionChildrenMdxWordCountParagraphs = "description___childrenMdx___wordCount___paragraphs",
  DescriptionChildrenMdxWordCountSentences = "description___childrenMdx___wordCount___sentences",
  DescriptionChildrenMdxWordCountWords = "description___childrenMdx___wordCount___words",
  DescriptionChildrenChildren = "description___children___children",
  DescriptionChildrenChildrenChildren = "description___children___children___children",
  DescriptionChildrenChildrenId = "description___children___children___id",
  DescriptionChildrenId = "description___children___id",
  DescriptionChildrenInternalContent = "description___children___internal___content",
  DescriptionChildrenInternalContentDigest = "description___children___internal___contentDigest",
  DescriptionChildrenInternalDescription = "description___children___internal___description",
  DescriptionChildrenInternalFieldOwners = "description___children___internal___fieldOwners",
  DescriptionChildrenInternalIgnoreType = "description___children___internal___ignoreType",
  DescriptionChildrenInternalMediaType = "description___children___internal___mediaType",
  DescriptionChildrenInternalOwner = "description___children___internal___owner",
  DescriptionChildrenInternalType = "description___children___internal___type",
  DescriptionChildrenParentChildren = "description___children___parent___children",
  DescriptionChildrenParentId = "description___children___parent___id",
  DescriptionDescription = "description___description",
  DescriptionId = "description___id",
  DescriptionInternalContent = "description___internal___content",
  DescriptionInternalContentDigest = "description___internal___contentDigest",
  DescriptionInternalDescription = "description___internal___description",
  DescriptionInternalFieldOwners = "description___internal___fieldOwners",
  DescriptionInternalIgnoreType = "description___internal___ignoreType",
  DescriptionInternalMediaType = "description___internal___mediaType",
  DescriptionInternalOwner = "description___internal___owner",
  DescriptionInternalType = "description___internal___type",
  DescriptionParentChildren = "description___parent___children",
  DescriptionParentChildrenChildren = "description___parent___children___children",
  DescriptionParentChildrenId = "description___parent___children___id",
  DescriptionParentId = "description___parent___id",
  DescriptionParentInternalContent = "description___parent___internal___content",
  DescriptionParentInternalContentDigest = "description___parent___internal___contentDigest",
  DescriptionParentInternalDescription = "description___parent___internal___description",
  DescriptionParentInternalFieldOwners = "description___parent___internal___fieldOwners",
  DescriptionParentInternalIgnoreType = "description___parent___internal___ignoreType",
  DescriptionParentInternalMediaType = "description___parent___internal___mediaType",
  DescriptionParentInternalOwner = "description___parent___internal___owner",
  DescriptionParentInternalType = "description___parent___internal___type",
  DescriptionParentParentChildren = "description___parent___parent___children",
  DescriptionParentParentId = "description___parent___parent___id",
  DescriptionSysType = "description___sys___type",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  NodeLocale = "node_locale",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  SpaceId = "spaceId",
  SysContentTypeSysId = "sys___contentType___sys___id",
  SysContentTypeSysLinkType = "sys___contentType___sys___linkType",
  SysContentTypeSysType = "sys___contentType___sys___type",
  SysRevision = "sys___revision",
  SysType = "sys___type",
  Title = "title",
  UpdatedAt = "updatedAt",
  Url = "url",
}

export type ContentfulPageFilterInput = {
  childContentfulPageDescriptionTextNode?: InputMaybe<ContentfulPageDescriptionTextNodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenContentfulPageDescriptionTextNode?: InputMaybe<ContentfulPageDescriptionTextNodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<ContentfulPageDescriptionTextNodeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulPageSysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulPageGroupConnection = {
  __typename?: "ContentfulPageGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulPageEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<ContentfulPageGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulPage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulPageGroupConnectionDistinctArgs = {
  field: ContentfulPageFieldsEnum;
};

export type ContentfulPageGroupConnectionGroupArgs = {
  field: ContentfulPageFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulPageGroupConnectionMaxArgs = {
  field: ContentfulPageFieldsEnum;
};

export type ContentfulPageGroupConnectionMinArgs = {
  field: ContentfulPageFieldsEnum;
};

export type ContentfulPageGroupConnectionSumArgs = {
  field: ContentfulPageFieldsEnum;
};

export type ContentfulPageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulPageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulPageSys = {
  __typename?: "ContentfulPageSys";
  contentType?: Maybe<ContentfulPageSysContentType>;
  revision?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["String"]>;
};

export type ContentfulPageSysContentType = {
  __typename?: "ContentfulPageSysContentType";
  sys?: Maybe<ContentfulPageSysContentTypeSys>;
};

export type ContentfulPageSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulPageSysContentTypeSysFilterInput>;
};

export type ContentfulPageSysContentTypeSys = {
  __typename?: "ContentfulPageSysContentTypeSys";
  id?: Maybe<Scalars["String"]>;
  linkType?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

export type ContentfulPageSysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulPageSysFilterInput = {
  contentType?: InputMaybe<ContentfulPageSysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulReference = {
  contentful_id: Scalars["String"];
  id: Scalars["ID"];
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars["Date"]>;
  gt?: InputMaybe<Scalars["Date"]>;
  gte?: InputMaybe<Scalars["Date"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
  lt?: InputMaybe<Scalars["Date"]>;
  lte?: InputMaybe<Scalars["Date"]>;
  ne?: InputMaybe<Scalars["Date"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
};

export type Directory = Node & {
  __typename?: "Directory";
  absolutePath: Scalars["String"];
  accessTime: Scalars["Date"];
  atime: Scalars["Date"];
  atimeMs: Scalars["Float"];
  base: Scalars["String"];
  birthTime: Scalars["Date"];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars["Date"]>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars["Float"]>;
  changeTime: Scalars["Date"];
  children: Array<Node>;
  ctime: Scalars["Date"];
  ctimeMs: Scalars["Float"];
  dev: Scalars["Int"];
  dir: Scalars["String"];
  ext: Scalars["String"];
  extension: Scalars["String"];
  gid: Scalars["Int"];
  id: Scalars["ID"];
  ino: Scalars["Float"];
  internal: Internal;
  mode: Scalars["Int"];
  modifiedTime: Scalars["Date"];
  mtime: Scalars["Date"];
  mtimeMs: Scalars["Float"];
  name: Scalars["String"];
  nlink: Scalars["Int"];
  parent?: Maybe<Node>;
  prettySize: Scalars["String"];
  rdev: Scalars["Int"];
  relativeDirectory: Scalars["String"];
  relativePath: Scalars["String"];
  root: Scalars["String"];
  size: Scalars["Int"];
  sourceInstanceName: Scalars["String"];
  uid: Scalars["Int"];
};

export type DirectoryAccessTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryAtimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryBirthTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryChangeTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryCtimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryModifiedTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryMtimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryConnection = {
  __typename?: "DirectoryConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<DirectoryEdge>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: "DirectoryEdge";
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  AbsolutePath = "absolutePath",
  AccessTime = "accessTime",
  Atime = "atime",
  AtimeMs = "atimeMs",
  Base = "base",
  BirthTime = "birthTime",
  Birthtime = "birthtime",
  BirthtimeMs = "birthtimeMs",
  ChangeTime = "changeTime",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Ctime = "ctime",
  CtimeMs = "ctimeMs",
  Dev = "dev",
  Dir = "dir",
  Ext = "ext",
  Extension = "extension",
  Gid = "gid",
  Id = "id",
  Ino = "ino",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Mode = "mode",
  ModifiedTime = "modifiedTime",
  Mtime = "mtime",
  MtimeMs = "mtimeMs",
  Name = "name",
  Nlink = "nlink",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PrettySize = "prettySize",
  Rdev = "rdev",
  RelativeDirectory = "relativeDirectory",
  RelativePath = "relativePath",
  Root = "root",
  Size = "size",
  SourceInstanceName = "sourceInstanceName",
  Uid = "uid",
}

export type DirectoryFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  __typename?: "DirectoryGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<DirectoryEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars["String"];
  opacity?: InputMaybe<Scalars["Int"]>;
  shadow: Scalars["String"];
};

export type File = Node & {
  __typename?: "File";
  absolutePath: Scalars["String"];
  accessTime: Scalars["Date"];
  atime: Scalars["Date"];
  atimeMs: Scalars["Float"];
  base: Scalars["String"];
  birthTime: Scalars["Date"];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars["Date"]>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars["Float"]>;
  blksize?: Maybe<Scalars["Int"]>;
  blocks?: Maybe<Scalars["Int"]>;
  changeTime: Scalars["Date"];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  ctime: Scalars["Date"];
  ctimeMs: Scalars["Float"];
  dev: Scalars["Int"];
  dir: Scalars["String"];
  ext: Scalars["String"];
  extension: Scalars["String"];
  gid: Scalars["Int"];
  id: Scalars["ID"];
  ino: Scalars["Float"];
  internal: Internal;
  mode: Scalars["Int"];
  modifiedTime: Scalars["Date"];
  mtime: Scalars["Date"];
  mtimeMs: Scalars["Float"];
  name: Scalars["String"];
  nlink: Scalars["Int"];
  parent?: Maybe<Node>;
  prettySize: Scalars["String"];
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars["String"]>;
  rdev: Scalars["Int"];
  relativeDirectory: Scalars["String"];
  relativePath: Scalars["String"];
  root: Scalars["String"];
  size: Scalars["Int"];
  sourceInstanceName: Scalars["String"];
  uid: Scalars["Int"];
};

export type FileAccessTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type FileAtimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type FileBirthTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type FileChangeTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type FileCtimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type FileModifiedTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type FileMtimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type FileConnection = {
  __typename?: "FileConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<FileEdge>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: "FileEdge";
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  AbsolutePath = "absolutePath",
  AccessTime = "accessTime",
  Atime = "atime",
  AtimeMs = "atimeMs",
  Base = "base",
  BirthTime = "birthTime",
  Birthtime = "birthtime",
  BirthtimeMs = "birthtimeMs",
  Blksize = "blksize",
  Blocks = "blocks",
  ChangeTime = "changeTime",
  ChildImageSharpChildren = "childImageSharp___children",
  ChildImageSharpChildrenChildren = "childImageSharp___children___children",
  ChildImageSharpChildrenChildrenChildren = "childImageSharp___children___children___children",
  ChildImageSharpChildrenChildrenId = "childImageSharp___children___children___id",
  ChildImageSharpChildrenId = "childImageSharp___children___id",
  ChildImageSharpChildrenInternalContent = "childImageSharp___children___internal___content",
  ChildImageSharpChildrenInternalContentDigest = "childImageSharp___children___internal___contentDigest",
  ChildImageSharpChildrenInternalDescription = "childImageSharp___children___internal___description",
  ChildImageSharpChildrenInternalFieldOwners = "childImageSharp___children___internal___fieldOwners",
  ChildImageSharpChildrenInternalIgnoreType = "childImageSharp___children___internal___ignoreType",
  ChildImageSharpChildrenInternalMediaType = "childImageSharp___children___internal___mediaType",
  ChildImageSharpChildrenInternalOwner = "childImageSharp___children___internal___owner",
  ChildImageSharpChildrenInternalType = "childImageSharp___children___internal___type",
  ChildImageSharpChildrenParentChildren = "childImageSharp___children___parent___children",
  ChildImageSharpChildrenParentId = "childImageSharp___children___parent___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedAspectRatio = "childImageSharp___fixed___aspectRatio",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedBase64 = "childImageSharp___fixed___base64",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedHeight = "childImageSharp___fixed___height",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedOriginalName = "childImageSharp___fixed___originalName",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedSrc = "childImageSharp___fixed___src",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedSrcSet = "childImageSharp___fixed___srcSet",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedSrcSetWebp = "childImageSharp___fixed___srcSetWebp",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedSrcWebp = "childImageSharp___fixed___srcWebp",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedTracedSvg = "childImageSharp___fixed___tracedSVG",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedWidth = "childImageSharp___fixed___width",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidAspectRatio = "childImageSharp___fluid___aspectRatio",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidBase64 = "childImageSharp___fluid___base64",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidOriginalImg = "childImageSharp___fluid___originalImg",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidOriginalName = "childImageSharp___fluid___originalName",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidPresentationHeight = "childImageSharp___fluid___presentationHeight",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidPresentationWidth = "childImageSharp___fluid___presentationWidth",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidSizes = "childImageSharp___fluid___sizes",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidSrc = "childImageSharp___fluid___src",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidSrcSet = "childImageSharp___fluid___srcSet",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidSrcSetWebp = "childImageSharp___fluid___srcSetWebp",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidSrcWebp = "childImageSharp___fluid___srcWebp",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidTracedSvg = "childImageSharp___fluid___tracedSVG",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpGatsbyImageData = "childImageSharp___gatsbyImageData",
  ChildImageSharpId = "childImageSharp___id",
  ChildImageSharpInternalContent = "childImageSharp___internal___content",
  ChildImageSharpInternalContentDigest = "childImageSharp___internal___contentDigest",
  ChildImageSharpInternalDescription = "childImageSharp___internal___description",
  ChildImageSharpInternalFieldOwners = "childImageSharp___internal___fieldOwners",
  ChildImageSharpInternalIgnoreType = "childImageSharp___internal___ignoreType",
  ChildImageSharpInternalMediaType = "childImageSharp___internal___mediaType",
  ChildImageSharpInternalOwner = "childImageSharp___internal___owner",
  ChildImageSharpInternalType = "childImageSharp___internal___type",
  ChildImageSharpOriginalHeight = "childImageSharp___original___height",
  ChildImageSharpOriginalSrc = "childImageSharp___original___src",
  ChildImageSharpOriginalWidth = "childImageSharp___original___width",
  ChildImageSharpParentChildren = "childImageSharp___parent___children",
  ChildImageSharpParentChildrenChildren = "childImageSharp___parent___children___children",
  ChildImageSharpParentChildrenId = "childImageSharp___parent___children___id",
  ChildImageSharpParentId = "childImageSharp___parent___id",
  ChildImageSharpParentInternalContent = "childImageSharp___parent___internal___content",
  ChildImageSharpParentInternalContentDigest = "childImageSharp___parent___internal___contentDigest",
  ChildImageSharpParentInternalDescription = "childImageSharp___parent___internal___description",
  ChildImageSharpParentInternalFieldOwners = "childImageSharp___parent___internal___fieldOwners",
  ChildImageSharpParentInternalIgnoreType = "childImageSharp___parent___internal___ignoreType",
  ChildImageSharpParentInternalMediaType = "childImageSharp___parent___internal___mediaType",
  ChildImageSharpParentInternalOwner = "childImageSharp___parent___internal___owner",
  ChildImageSharpParentInternalType = "childImageSharp___parent___internal___type",
  ChildImageSharpParentParentChildren = "childImageSharp___parent___parent___children",
  ChildImageSharpParentParentId = "childImageSharp___parent___parent___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpResizeAspectRatio = "childImageSharp___resize___aspectRatio",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpResizeHeight = "childImageSharp___resize___height",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpResizeOriginalName = "childImageSharp___resize___originalName",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpResizeSrc = "childImageSharp___resize___src",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpResizeTracedSvg = "childImageSharp___resize___tracedSVG",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpResizeWidth = "childImageSharp___resize___width",
  Children = "children",
  ChildrenImageSharp = "childrenImageSharp",
  ChildrenImageSharpChildren = "childrenImageSharp___children",
  ChildrenImageSharpChildrenChildren = "childrenImageSharp___children___children",
  ChildrenImageSharpChildrenChildrenChildren = "childrenImageSharp___children___children___children",
  ChildrenImageSharpChildrenChildrenId = "childrenImageSharp___children___children___id",
  ChildrenImageSharpChildrenId = "childrenImageSharp___children___id",
  ChildrenImageSharpChildrenInternalContent = "childrenImageSharp___children___internal___content",
  ChildrenImageSharpChildrenInternalContentDigest = "childrenImageSharp___children___internal___contentDigest",
  ChildrenImageSharpChildrenInternalDescription = "childrenImageSharp___children___internal___description",
  ChildrenImageSharpChildrenInternalFieldOwners = "childrenImageSharp___children___internal___fieldOwners",
  ChildrenImageSharpChildrenInternalIgnoreType = "childrenImageSharp___children___internal___ignoreType",
  ChildrenImageSharpChildrenInternalMediaType = "childrenImageSharp___children___internal___mediaType",
  ChildrenImageSharpChildrenInternalOwner = "childrenImageSharp___children___internal___owner",
  ChildrenImageSharpChildrenInternalType = "childrenImageSharp___children___internal___type",
  ChildrenImageSharpChildrenParentChildren = "childrenImageSharp___children___parent___children",
  ChildrenImageSharpChildrenParentId = "childrenImageSharp___children___parent___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedAspectRatio = "childrenImageSharp___fixed___aspectRatio",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedBase64 = "childrenImageSharp___fixed___base64",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedHeight = "childrenImageSharp___fixed___height",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedOriginalName = "childrenImageSharp___fixed___originalName",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedSrc = "childrenImageSharp___fixed___src",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedSrcSet = "childrenImageSharp___fixed___srcSet",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedSrcSetWebp = "childrenImageSharp___fixed___srcSetWebp",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedSrcWebp = "childrenImageSharp___fixed___srcWebp",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedTracedSvg = "childrenImageSharp___fixed___tracedSVG",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedWidth = "childrenImageSharp___fixed___width",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidAspectRatio = "childrenImageSharp___fluid___aspectRatio",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidBase64 = "childrenImageSharp___fluid___base64",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidOriginalImg = "childrenImageSharp___fluid___originalImg",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidOriginalName = "childrenImageSharp___fluid___originalName",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidPresentationHeight = "childrenImageSharp___fluid___presentationHeight",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidPresentationWidth = "childrenImageSharp___fluid___presentationWidth",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidSizes = "childrenImageSharp___fluid___sizes",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidSrc = "childrenImageSharp___fluid___src",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidSrcSet = "childrenImageSharp___fluid___srcSet",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidSrcSetWebp = "childrenImageSharp___fluid___srcSetWebp",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidSrcWebp = "childrenImageSharp___fluid___srcWebp",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidTracedSvg = "childrenImageSharp___fluid___tracedSVG",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpGatsbyImageData = "childrenImageSharp___gatsbyImageData",
  ChildrenImageSharpId = "childrenImageSharp___id",
  ChildrenImageSharpInternalContent = "childrenImageSharp___internal___content",
  ChildrenImageSharpInternalContentDigest = "childrenImageSharp___internal___contentDigest",
  ChildrenImageSharpInternalDescription = "childrenImageSharp___internal___description",
  ChildrenImageSharpInternalFieldOwners = "childrenImageSharp___internal___fieldOwners",
  ChildrenImageSharpInternalIgnoreType = "childrenImageSharp___internal___ignoreType",
  ChildrenImageSharpInternalMediaType = "childrenImageSharp___internal___mediaType",
  ChildrenImageSharpInternalOwner = "childrenImageSharp___internal___owner",
  ChildrenImageSharpInternalType = "childrenImageSharp___internal___type",
  ChildrenImageSharpOriginalHeight = "childrenImageSharp___original___height",
  ChildrenImageSharpOriginalSrc = "childrenImageSharp___original___src",
  ChildrenImageSharpOriginalWidth = "childrenImageSharp___original___width",
  ChildrenImageSharpParentChildren = "childrenImageSharp___parent___children",
  ChildrenImageSharpParentChildrenChildren = "childrenImageSharp___parent___children___children",
  ChildrenImageSharpParentChildrenId = "childrenImageSharp___parent___children___id",
  ChildrenImageSharpParentId = "childrenImageSharp___parent___id",
  ChildrenImageSharpParentInternalContent = "childrenImageSharp___parent___internal___content",
  ChildrenImageSharpParentInternalContentDigest = "childrenImageSharp___parent___internal___contentDigest",
  ChildrenImageSharpParentInternalDescription = "childrenImageSharp___parent___internal___description",
  ChildrenImageSharpParentInternalFieldOwners = "childrenImageSharp___parent___internal___fieldOwners",
  ChildrenImageSharpParentInternalIgnoreType = "childrenImageSharp___parent___internal___ignoreType",
  ChildrenImageSharpParentInternalMediaType = "childrenImageSharp___parent___internal___mediaType",
  ChildrenImageSharpParentInternalOwner = "childrenImageSharp___parent___internal___owner",
  ChildrenImageSharpParentInternalType = "childrenImageSharp___parent___internal___type",
  ChildrenImageSharpParentParentChildren = "childrenImageSharp___parent___parent___children",
  ChildrenImageSharpParentParentId = "childrenImageSharp___parent___parent___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpResizeAspectRatio = "childrenImageSharp___resize___aspectRatio",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpResizeHeight = "childrenImageSharp___resize___height",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpResizeOriginalName = "childrenImageSharp___resize___originalName",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpResizeSrc = "childrenImageSharp___resize___src",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpResizeTracedSvg = "childrenImageSharp___resize___tracedSVG",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpResizeWidth = "childrenImageSharp___resize___width",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Ctime = "ctime",
  CtimeMs = "ctimeMs",
  Dev = "dev",
  Dir = "dir",
  Ext = "ext",
  Extension = "extension",
  Gid = "gid",
  Id = "id",
  Ino = "ino",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Mode = "mode",
  ModifiedTime = "modifiedTime",
  Mtime = "mtime",
  MtimeMs = "mtimeMs",
  Name = "name",
  Nlink = "nlink",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PrettySize = "prettySize",
  PublicUrl = "publicURL",
  Rdev = "rdev",
  RelativeDirectory = "relativeDirectory",
  RelativePath = "relativePath",
  Root = "root",
  Size = "size",
  SourceInstanceName = "sourceInstanceName",
  Uid = "uid",
}

export type FileFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type FileGroupConnection = {
  __typename?: "FileGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<FileEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  ne?: InputMaybe<Scalars["Float"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
};

export enum GatsbyImageFormat {
  Auto = "AUTO",
  Avif = "AVIF",
  Jpg = "JPG",
  NoChange = "NO_CHANGE",
  Png = "PNG",
  Webp = "WEBP",
}

export enum GatsbyImageLayout {
  Constrained = "CONSTRAINED",
  Fixed = "FIXED",
  FullWidth = "FULL_WIDTH",
}

export enum GatsbyImagePlaceholder {
  Blurred = "BLURRED",
  DominantColor = "DOMINANT_COLOR",
  None = "NONE",
  TracedSvg = "TRACED_SVG",
}

export enum HeadingsMdx {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
}

export enum ImageCropFocus {
  Attention = "ATTENTION",
  Center = "CENTER",
  East = "EAST",
  Entropy = "ENTROPY",
  North = "NORTH",
  Northeast = "NORTHEAST",
  Northwest = "NORTHWEST",
  South = "SOUTH",
  Southeast = "SOUTHEAST",
  Southwest = "SOUTHWEST",
  West = "WEST",
}

export enum ImageFit {
  Contain = "CONTAIN",
  Cover = "COVER",
  Fill = "FILL",
  Inside = "INSIDE",
  Outside = "OUTSIDE",
}

export enum ImageFormat {
  Auto = "AUTO",
  Avif = "AVIF",
  Jpg = "JPG",
  NoChange = "NO_CHANGE",
  Png = "PNG",
  Webp = "WEBP",
}

export enum ImageLayout {
  Constrained = "CONSTRAINED",
  Fixed = "FIXED",
  FullWidth = "FULL_WIDTH",
}

export enum ImagePlaceholder {
  Blurred = "BLURRED",
  DominantColor = "DOMINANT_COLOR",
  None = "NONE",
  TracedSvg = "TRACED_SVG",
}

export enum ImageResizingBehavior {
  /** Crop a part of the original image to match the specified size. */
  Crop = "CROP",
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  Fill = "FILL",
  NoChange = "NO_CHANGE",
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  Pad = "PAD",
  /** Scale the image regardless of the original aspect ratio. */
  Scale = "SCALE",
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  Thumb = "THUMB",
}

export type ImageSharp = Node & {
  __typename?: "ImageSharp";
  children: Array<Node>;
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars["JSON"];
  id: Scalars["ID"];
  internal: Internal;
  original?: Maybe<ImageSharpOriginal>;
  parent?: Maybe<Node>;
  resize?: Maybe<ImageSharpResize>;
};

export type ImageSharpFixedArgs = {
  background?: InputMaybe<Scalars["String"]>;
  base64Width?: InputMaybe<Scalars["Int"]>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars["Boolean"]>;
  height?: InputMaybe<Scalars["Int"]>;
  jpegProgressive?: InputMaybe<Scalars["Boolean"]>;
  jpegQuality?: InputMaybe<Scalars["Int"]>;
  pngCompressionSpeed?: InputMaybe<Scalars["Int"]>;
  pngQuality?: InputMaybe<Scalars["Int"]>;
  quality?: InputMaybe<Scalars["Int"]>;
  rotate?: InputMaybe<Scalars["Int"]>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars["Float"]>;
  webpQuality?: InputMaybe<Scalars["Int"]>;
  width?: InputMaybe<Scalars["Int"]>;
};

export type ImageSharpFluidArgs = {
  background?: InputMaybe<Scalars["String"]>;
  base64Width?: InputMaybe<Scalars["Int"]>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars["Boolean"]>;
  jpegProgressive?: InputMaybe<Scalars["Boolean"]>;
  jpegQuality?: InputMaybe<Scalars["Int"]>;
  maxHeight?: InputMaybe<Scalars["Int"]>;
  maxWidth?: InputMaybe<Scalars["Int"]>;
  pngCompressionSpeed?: InputMaybe<Scalars["Int"]>;
  pngQuality?: InputMaybe<Scalars["Int"]>;
  quality?: InputMaybe<Scalars["Int"]>;
  rotate?: InputMaybe<Scalars["Int"]>;
  sizes?: InputMaybe<Scalars["String"]>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars["Float"]>;
  webpQuality?: InputMaybe<Scalars["Int"]>;
};

export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars["Float"]>;
  avifOptions?: InputMaybe<AvifOptions>;
  backgroundColor?: InputMaybe<Scalars["String"]>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  height?: InputMaybe<Scalars["Int"]>;
  jpgOptions?: InputMaybe<JpgOptions>;
  layout?: InputMaybe<ImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  pngOptions?: InputMaybe<PngOptions>;
  quality?: InputMaybe<Scalars["Int"]>;
  sizes?: InputMaybe<Scalars["String"]>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  transformOptions?: InputMaybe<TransformOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  width?: InputMaybe<Scalars["Int"]>;
};

export type ImageSharpResizeArgs = {
  background?: InputMaybe<Scalars["String"]>;
  base64?: InputMaybe<Scalars["Boolean"]>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars["Boolean"]>;
  height?: InputMaybe<Scalars["Int"]>;
  jpegProgressive?: InputMaybe<Scalars["Boolean"]>;
  jpegQuality?: InputMaybe<Scalars["Int"]>;
  pngCompressionLevel?: InputMaybe<Scalars["Int"]>;
  pngCompressionSpeed?: InputMaybe<Scalars["Int"]>;
  pngQuality?: InputMaybe<Scalars["Int"]>;
  quality?: InputMaybe<Scalars["Int"]>;
  rotate?: InputMaybe<Scalars["Int"]>;
  toFormat?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars["Float"]>;
  webpQuality?: InputMaybe<Scalars["Int"]>;
  width?: InputMaybe<Scalars["Int"]>;
};

export type ImageSharpConnection = {
  __typename?: "ImageSharpConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ImageSharpEdge>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: "ImageSharpEdge";
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedAspectRatio = "fixed___aspectRatio",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedBase64 = "fixed___base64",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedHeight = "fixed___height",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedOriginalName = "fixed___originalName",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedSrc = "fixed___src",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedSrcSet = "fixed___srcSet",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedSrcSetWebp = "fixed___srcSetWebp",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedSrcWebp = "fixed___srcWebp",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedTracedSvg = "fixed___tracedSVG",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedWidth = "fixed___width",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidAspectRatio = "fluid___aspectRatio",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidBase64 = "fluid___base64",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidOriginalImg = "fluid___originalImg",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidOriginalName = "fluid___originalName",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidPresentationHeight = "fluid___presentationHeight",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidPresentationWidth = "fluid___presentationWidth",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidSizes = "fluid___sizes",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidSrc = "fluid___src",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidSrcSet = "fluid___srcSet",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidSrcSetWebp = "fluid___srcSetWebp",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidSrcWebp = "fluid___srcWebp",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidTracedSvg = "fluid___tracedSVG",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  GatsbyImageData = "gatsbyImageData",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  OriginalHeight = "original___height",
  OriginalSrc = "original___src",
  OriginalWidth = "original___width",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeAspectRatio = "resize___aspectRatio",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeHeight = "resize___height",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeOriginalName = "resize___originalName",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeSrc = "resize___src",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeTracedSvg = "resize___tracedSVG",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeWidth = "resize___width",
}

export type ImageSharpFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: "ImageSharpFixed";
  aspectRatio?: Maybe<Scalars["Float"]>;
  base64?: Maybe<Scalars["String"]>;
  height: Scalars["Float"];
  originalName?: Maybe<Scalars["String"]>;
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcSetWebp?: Maybe<Scalars["String"]>;
  srcWebp?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  width: Scalars["Float"];
};

export type ImageSharpFixedFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: "ImageSharpFluid";
  aspectRatio: Scalars["Float"];
  base64?: Maybe<Scalars["String"]>;
  originalImg?: Maybe<Scalars["String"]>;
  originalName?: Maybe<Scalars["String"]>;
  presentationHeight: Scalars["Int"];
  presentationWidth: Scalars["Int"];
  sizes: Scalars["String"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcSetWebp?: Maybe<Scalars["String"]>;
  srcWebp?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
};

export type ImageSharpFluidFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: "ImageSharpGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ImageSharpEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpOriginal = {
  __typename?: "ImageSharpOriginal";
  height?: Maybe<Scalars["Float"]>;
  src?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type ImageSharpOriginalFilterInput = {
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: "ImageSharpResize";
  aspectRatio?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Int"]>;
  originalName?: Maybe<Scalars["String"]>;
  src?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
};

export type ImageSharpResizeFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  ne?: InputMaybe<Scalars["Int"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type Internal = {
  __typename?: "Internal";
  content?: Maybe<Scalars["String"]>;
  contentDigest: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  fieldOwners?: Maybe<Array<Maybe<Scalars["String"]>>>;
  ignoreType?: Maybe<Scalars["Boolean"]>;
  mediaType?: Maybe<Scalars["String"]>;
  owner: Scalars["String"];
  type: Scalars["String"];
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type JpgOptions = {
  progressive?: InputMaybe<Scalars["Boolean"]>;
  quality?: InputMaybe<Scalars["Int"]>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars["JSON"]>;
  glob?: InputMaybe<Scalars["JSON"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  ne?: InputMaybe<Scalars["JSON"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  regex?: InputMaybe<Scalars["JSON"]>;
};

export type Mdx = Node & {
  __typename?: "Mdx";
  body: Scalars["String"];
  children: Array<Node>;
  excerpt: Scalars["String"];
  fileAbsolutePath: Scalars["String"];
  frontmatter?: Maybe<MdxFrontmatter>;
  headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>;
  html?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  internal: Internal;
  mdxAST?: Maybe<Scalars["JSON"]>;
  parent?: Maybe<Node>;
  rawBody: Scalars["String"];
  slug?: Maybe<Scalars["String"]>;
  tableOfContents?: Maybe<Scalars["JSON"]>;
  timeToRead?: Maybe<Scalars["Int"]>;
  wordCount?: Maybe<MdxWordCount>;
};

export type MdxExcerptArgs = {
  pruneLength?: InputMaybe<Scalars["Int"]>;
  truncate?: InputMaybe<Scalars["Boolean"]>;
};

export type MdxHeadingsArgs = {
  depth?: InputMaybe<HeadingsMdx>;
};

export type MdxTableOfContentsArgs = {
  maxDepth?: InputMaybe<Scalars["Int"]>;
};

export type MdxConnection = {
  __typename?: "MdxConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<MdxEdge>;
  group: Array<MdxGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};

export type MdxConnectionGroupArgs = {
  field: MdxFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type MdxConnectionMaxArgs = {
  field: MdxFieldsEnum;
};

export type MdxConnectionMinArgs = {
  field: MdxFieldsEnum;
};

export type MdxConnectionSumArgs = {
  field: MdxFieldsEnum;
};

export type MdxEdge = {
  __typename?: "MdxEdge";
  next?: Maybe<Mdx>;
  node: Mdx;
  previous?: Maybe<Mdx>;
};

export enum MdxFieldsEnum {
  Body = "body",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  Excerpt = "excerpt",
  FileAbsolutePath = "fileAbsolutePath",
  FrontmatterTitle = "frontmatter___title",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  Headings = "headings",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  HeadingsDepth = "headings___depth",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  HeadingsValue = "headings___value",
  Html = "html",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  MdxAst = "mdxAST",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  RawBody = "rawBody",
  Slug = "slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TableOfContents = "tableOfContents",
  TimeToRead = "timeToRead",
  WordCountParagraphs = "wordCount___paragraphs",
  WordCountSentences = "wordCount___sentences",
  WordCountWords = "wordCount___words",
}

export type MdxFilterInput = {
  body?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>;
  frontmatter?: InputMaybe<MdxFrontmatterFilterInput>;
  headings?: InputMaybe<MdxHeadingMdxFilterListInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mdxAST?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  rawBody?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  tableOfContents?: InputMaybe<JsonQueryOperatorInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  wordCount?: InputMaybe<MdxWordCountFilterInput>;
};

export type MdxFilterListInput = {
  elemMatch?: InputMaybe<MdxFilterInput>;
};

export type MdxFrontmatter = {
  __typename?: "MdxFrontmatter";
  title: Scalars["String"];
};

export type MdxFrontmatterFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type MdxGroupConnection = {
  __typename?: "MdxGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<MdxEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<MdxGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type MdxGroupConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};

export type MdxGroupConnectionGroupArgs = {
  field: MdxFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type MdxGroupConnectionMaxArgs = {
  field: MdxFieldsEnum;
};

export type MdxGroupConnectionMinArgs = {
  field: MdxFieldsEnum;
};

export type MdxGroupConnectionSumArgs = {
  field: MdxFieldsEnum;
};

export type MdxHeadingMdx = {
  __typename?: "MdxHeadingMdx";
  depth?: Maybe<Scalars["Int"]>;
  value?: Maybe<Scalars["String"]>;
};

export type MdxHeadingMdxFilterInput = {
  depth?: InputMaybe<IntQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type MdxHeadingMdxFilterListInput = {
  elemMatch?: InputMaybe<MdxHeadingMdxFilterInput>;
};

export type MdxSortInput = {
  fields?: InputMaybe<Array<InputMaybe<MdxFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type MdxWordCount = {
  __typename?: "MdxWordCount";
  paragraphs?: Maybe<Scalars["Int"]>;
  sentences?: Maybe<Scalars["Int"]>;
  words?: Maybe<Scalars["Int"]>;
};

export type MdxWordCountFilterInput = {
  paragraphs?: InputMaybe<IntQueryOperatorInput>;
  sentences?: InputMaybe<IntQueryOperatorInput>;
  words?: InputMaybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars["ID"];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type NodeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type PngOptions = {
  compressionSpeed?: InputMaybe<Scalars["Int"]>;
  quality?: InputMaybe<Scalars["Int"]>;
};

export type PageInfo = {
  __typename?: "PageInfo";
  currentPage: Scalars["Int"];
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  itemCount: Scalars["Int"];
  pageCount: Scalars["Int"];
  perPage?: Maybe<Scalars["Int"]>;
  totalCount: Scalars["Int"];
};

export type Potrace = {
  alphaMax?: InputMaybe<Scalars["Float"]>;
  background?: InputMaybe<Scalars["String"]>;
  blackOnWhite?: InputMaybe<Scalars["Boolean"]>;
  color?: InputMaybe<Scalars["String"]>;
  optCurve?: InputMaybe<Scalars["Boolean"]>;
  optTolerance?: InputMaybe<Scalars["Float"]>;
  threshold?: InputMaybe<Scalars["Int"]>;
  turdSize?: InputMaybe<Scalars["Float"]>;
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = "TURNPOLICY_BLACK",
  TurnpolicyLeft = "TURNPOLICY_LEFT",
  TurnpolicyMajority = "TURNPOLICY_MAJORITY",
  TurnpolicyMinority = "TURNPOLICY_MINORITY",
  TurnpolicyRight = "TURNPOLICY_RIGHT",
  TurnpolicyWhite = "TURNPOLICY_WHITE",
}

export type Query = {
  __typename?: "Query";
  allContentfulAsset: ContentfulAssetConnection;
  allContentfulContentType: ContentfulContentTypeConnection;
  allContentfulEntry: ContentfulEntryConnection;
  allContentfulLink: ContentfulLinkConnection;
  allContentfulLinkUrlTextNode: ContentfulLinkUrlTextNodeConnection;
  allContentfulLocale: ContentfulLocaleConnection;
  allContentfulOptions: ContentfulOptionsConnection;
  allContentfulPage: ContentfulPageConnection;
  allContentfulPageDescriptionTextNode: ContentfulPageDescriptionTextNodeConnection;
  allDirectory: DirectoryConnection;
  allFile: FileConnection;
  allImageSharp: ImageSharpConnection;
  allMdx: MdxConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSiteFunction: SiteFunctionConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  contentfulContentType?: Maybe<ContentfulContentType>;
  contentfulEntry?: Maybe<ContentfulEntry>;
  contentfulLink?: Maybe<ContentfulLink>;
  contentfulLinkUrlTextNode?: Maybe<ContentfulLinkUrlTextNode>;
  contentfulLocale?: Maybe<ContentfulLocale>;
  contentfulOptions?: Maybe<ContentfulOptions>;
  contentfulPage?: Maybe<ContentfulPage>;
  contentfulPageDescriptionTextNode?: Maybe<ContentfulPageDescriptionTextNode>;
  directory?: Maybe<Directory>;
  file?: Maybe<File>;
  imageSharp?: Maybe<ImageSharp>;
  mdx?: Maybe<Mdx>;
  site?: Maybe<Site>;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  siteFunction?: Maybe<SiteFunction>;
  sitePage?: Maybe<SitePage>;
  sitePlugin?: Maybe<SitePlugin>;
};

export type QueryAllContentfulAssetArgs = {
  filter?: InputMaybe<ContentfulAssetFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<ContentfulAssetSortInput>;
};

export type QueryAllContentfulContentTypeArgs = {
  filter?: InputMaybe<ContentfulContentTypeFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<ContentfulContentTypeSortInput>;
};

export type QueryAllContentfulEntryArgs = {
  filter?: InputMaybe<ContentfulEntryFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<ContentfulEntrySortInput>;
};

export type QueryAllContentfulLinkArgs = {
  filter?: InputMaybe<ContentfulLinkFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<ContentfulLinkSortInput>;
};

export type QueryAllContentfulLinkUrlTextNodeArgs = {
  filter?: InputMaybe<ContentfulLinkUrlTextNodeFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<ContentfulLinkUrlTextNodeSortInput>;
};

export type QueryAllContentfulLocaleArgs = {
  filter?: InputMaybe<ContentfulLocaleFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<ContentfulLocaleSortInput>;
};

export type QueryAllContentfulOptionsArgs = {
  filter?: InputMaybe<ContentfulOptionsFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<ContentfulOptionsSortInput>;
};

export type QueryAllContentfulPageArgs = {
  filter?: InputMaybe<ContentfulPageFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<ContentfulPageSortInput>;
};

export type QueryAllContentfulPageDescriptionTextNodeArgs = {
  filter?: InputMaybe<ContentfulPageDescriptionTextNodeFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<ContentfulPageDescriptionTextNodeSortInput>;
};

export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<DirectorySortInput>;
};

export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<FileSortInput>;
};

export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<ImageSharpSortInput>;
};

export type QueryAllMdxArgs = {
  filter?: InputMaybe<MdxFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<MdxSortInput>;
};

export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<SiteSortInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
};

export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<SiteFunctionSortInput>;
};

export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<SitePageSortInput>;
};

export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<SitePluginSortInput>;
};

export type QueryContentfulAssetArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  file?: InputMaybe<ContentfulAssetFileFilterInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  filesize?: InputMaybe<IntQueryOperatorInput>;
  gatsbyImage?: InputMaybe<JsonQueryOperatorInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  placeholderUrl?: InputMaybe<StringQueryOperatorInput>;
  publicUrl?: InputMaybe<StringQueryOperatorInput>;
  resize?: InputMaybe<RemoteFileResizeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAssetSysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type QueryContentfulContentTypeArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  displayField?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sys?: InputMaybe<ContentfulContentTypeSysFilterInput>;
};

export type QueryContentfulEntryArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type QueryContentfulLinkArgs = {
  childContentfulLinkUrlTextNode?: InputMaybe<ContentfulLinkUrlTextNodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenContentfulLinkUrlTextNode?: InputMaybe<ContentfulLinkUrlTextNodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  contentfulid?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<ContentfulAssetFilterInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  options?: InputMaybe<ContentfulOptionsFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulLinkSysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  url?: InputMaybe<ContentfulLinkUrlTextNodeFilterInput>;
};

export type QueryContentfulLinkUrlTextNodeArgs = {
  childMdx?: InputMaybe<MdxFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenMdx?: InputMaybe<MdxFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sys?: InputMaybe<ContentfulLinkUrlTextNodeSysFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type QueryContentfulLocaleArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  code?: InputMaybe<StringQueryOperatorInput>;
  default?: InputMaybe<BooleanQueryOperatorInput>;
  fallbackCode?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sys?: InputMaybe<ContentfulLocaleSysFilterInput>;
};

export type QueryContentfulOptionsArgs = {
  bottomBarLogo?: InputMaybe<ContentfulLinkFilterInput>;
  bottomBarSocialLinks?: InputMaybe<ContentfulLinkFilterListInput>;
  bottomBarTabs?: InputMaybe<ContentfulLinkFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  contentfulid?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulOptionsSysFilterInput>;
  topBarLogo?: InputMaybe<ContentfulLinkFilterInput>;
  topBarSocialLinks?: InputMaybe<ContentfulLinkFilterListInput>;
  topBarTabs?: InputMaybe<ContentfulLinkFilterListInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type QueryContentfulPageArgs = {
  childContentfulPageDescriptionTextNode?: InputMaybe<ContentfulPageDescriptionTextNodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenContentfulPageDescriptionTextNode?: InputMaybe<ContentfulPageDescriptionTextNodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<ContentfulPageDescriptionTextNodeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulPageSysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type QueryContentfulPageDescriptionTextNodeArgs = {
  childMdx?: InputMaybe<MdxFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenMdx?: InputMaybe<MdxFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sys?: InputMaybe<ContentfulPageDescriptionTextNodeSysFilterInput>;
};

export type QueryDirectoryArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type QueryFileArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type QueryImageSharpArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};

export type QueryMdxArgs = {
  body?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>;
  frontmatter?: InputMaybe<MdxFrontmatterFilterInput>;
  headings?: InputMaybe<MdxHeadingMdxFilterListInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mdxAST?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  rawBody?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  tableOfContents?: InputMaybe<JsonQueryOperatorInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  wordCount?: InputMaybe<MdxWordCountFilterInput>;
};

export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
};

export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type QuerySitePageArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};

export type QuerySitePluginArgs = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

/** Remote Interface */
export type RemoteFile = {
  filename: Scalars["String"];
  filesize?: Maybe<Scalars["Int"]>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  gatsbyImage?: Maybe<Scalars["JSON"]>;
  height?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  mimeType: Scalars["String"];
  publicUrl: Scalars["String"];
  resize?: Maybe<RemoteFileResize>;
  width?: Maybe<Scalars["Int"]>;
};

/** Remote Interface */
export type RemoteFileGatsbyImageArgs = {
  aspectRatio?: InputMaybe<Scalars["Float"]>;
  backgroundColor?: InputMaybe<Scalars["String"]>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  formats?: InputMaybe<Array<RemoteFileFormat>>;
  height?: InputMaybe<Scalars["Int"]>;
  layout?: InputMaybe<RemoteFileLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  quality?: InputMaybe<Scalars["Int"]>;
  sizes?: InputMaybe<Scalars["String"]>;
  width?: InputMaybe<Scalars["Int"]>;
};

/** Remote Interface */
export type RemoteFileResizeArgs = {
  aspectRatio?: InputMaybe<Scalars["Float"]>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  height?: InputMaybe<Scalars["Int"]>;
  quality?: InputMaybe<Scalars["Int"]>;
  width?: InputMaybe<Scalars["Int"]>;
};

export enum RemoteFileCropFocus {
  Bottom = "BOTTOM",
  Center = "CENTER",
  Edges = "EDGES",
  Entropy = "ENTROPY",
  Faces = "FACES",
  Left = "LEFT",
  Right = "RIGHT",
  Top = "TOP",
}

export enum RemoteFileFit {
  Contain = "CONTAIN",
  Cover = "COVER",
  Fill = "FILL",
  Outside = "OUTSIDE",
}

export enum RemoteFileFormat {
  Auto = "AUTO",
  Avif = "AVIF",
  Jpg = "JPG",
  Png = "PNG",
  Webp = "WEBP",
}

export enum RemoteFileLayout {
  Constrained = "CONSTRAINED",
  Fixed = "FIXED",
  FullWidth = "FULL_WIDTH",
}

export enum RemoteFilePlaceholder {
  Blurred = "BLURRED",
  DominantColor = "DOMINANT_COLOR",
  None = "NONE",
}

export type RemoteFileResize = {
  __typename?: "RemoteFileResize";
  height?: Maybe<Scalars["Int"]>;
  src?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
};

export type RemoteFileResizeFilterInput = {
  height?: InputMaybe<IntQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type Site = Node & {
  __typename?: "Site";
  buildTime?: Maybe<Scalars["Date"]>;
  children: Array<Node>;
  host?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  internal: Internal;
  jsxRuntime?: Maybe<Scalars["String"]>;
  parent?: Maybe<Node>;
  pathPrefix?: Maybe<Scalars["String"]>;
  polyfill?: Maybe<Scalars["Boolean"]>;
  port?: Maybe<Scalars["Int"]>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  trailingSlash?: Maybe<Scalars["String"]>;
};

export type SiteBuildTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type SiteBuildMetadata = Node & {
  __typename?: "SiteBuildMetadata";
  buildTime?: Maybe<Scalars["Date"]>;
  children: Array<Node>;
  id: Scalars["ID"];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type SiteBuildMetadataBuildTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type SiteBuildMetadataConnection = {
  __typename?: "SiteBuildMetadataConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteBuildMetadataEdge>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: "SiteBuildMetadataEdge";
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  BuildTime = "buildTime",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
}

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: "SiteBuildMetadataGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteBuildMetadataEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: "SiteConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteEdge>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: "SiteEdge";
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = "buildTime",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Host = "host",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  JsxRuntime = "jsxRuntime",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PathPrefix = "pathPrefix",
  Polyfill = "polyfill",
  Port = "port",
  SiteMetadataDescription = "siteMetadata___description",
  SiteMetadataSiteUrl = "siteMetadata___siteUrl",
  SiteMetadataTitle = "siteMetadata___title",
  TrailingSlash = "trailingSlash",
}

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunction = Node & {
  __typename?: "SiteFunction";
  absoluteCompiledFilePath: Scalars["String"];
  children: Array<Node>;
  functionRoute: Scalars["String"];
  id: Scalars["ID"];
  internal: Internal;
  matchPath?: Maybe<Scalars["String"]>;
  originalAbsoluteFilePath: Scalars["String"];
  originalRelativeFilePath: Scalars["String"];
  parent?: Maybe<Node>;
  pluginName: Scalars["String"];
  relativeCompiledFilePath: Scalars["String"];
};

export type SiteFunctionConnection = {
  __typename?: "SiteFunctionConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteFunctionEdge>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  __typename?: "SiteFunctionEdge";
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  AbsoluteCompiledFilePath = "absoluteCompiledFilePath",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  FunctionRoute = "functionRoute",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  MatchPath = "matchPath",
  OriginalAbsoluteFilePath = "originalAbsoluteFilePath",
  OriginalRelativeFilePath = "originalRelativeFilePath",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PluginName = "pluginName",
  RelativeCompiledFilePath = "relativeCompiledFilePath",
}

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
  __typename?: "SiteFunctionGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteFunctionEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  __typename?: "SiteGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SitePage = Node & {
  __typename?: "SitePage";
  children: Array<Node>;
  component: Scalars["String"];
  componentChunkName: Scalars["String"];
  id: Scalars["ID"];
  internal: Internal;
  internalComponentName: Scalars["String"];
  matchPath?: Maybe<Scalars["String"]>;
  pageContext?: Maybe<Scalars["JSON"]>;
  parent?: Maybe<Node>;
  path: Scalars["String"];
  pluginCreator?: Maybe<SitePlugin>;
};

export type SitePageConnection = {
  __typename?: "SitePageConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SitePageEdge>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  __typename?: "SitePageEdge";
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Component = "component",
  ComponentChunkName = "componentChunkName",
  Id = "id",
  InternalComponentName = "internalComponentName",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  MatchPath = "matchPath",
  PageContext = "pageContext",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  Path = "path",
  PluginCreatorBrowserApIs = "pluginCreator___browserAPIs",
  PluginCreatorChildren = "pluginCreator___children",
  PluginCreatorChildrenChildren = "pluginCreator___children___children",
  PluginCreatorChildrenChildrenChildren = "pluginCreator___children___children___children",
  PluginCreatorChildrenChildrenId = "pluginCreator___children___children___id",
  PluginCreatorChildrenId = "pluginCreator___children___id",
  PluginCreatorChildrenInternalContent = "pluginCreator___children___internal___content",
  PluginCreatorChildrenInternalContentDigest = "pluginCreator___children___internal___contentDigest",
  PluginCreatorChildrenInternalDescription = "pluginCreator___children___internal___description",
  PluginCreatorChildrenInternalFieldOwners = "pluginCreator___children___internal___fieldOwners",
  PluginCreatorChildrenInternalIgnoreType = "pluginCreator___children___internal___ignoreType",
  PluginCreatorChildrenInternalMediaType = "pluginCreator___children___internal___mediaType",
  PluginCreatorChildrenInternalOwner = "pluginCreator___children___internal___owner",
  PluginCreatorChildrenInternalType = "pluginCreator___children___internal___type",
  PluginCreatorChildrenParentChildren = "pluginCreator___children___parent___children",
  PluginCreatorChildrenParentId = "pluginCreator___children___parent___id",
  PluginCreatorId = "pluginCreator___id",
  PluginCreatorInternalContent = "pluginCreator___internal___content",
  PluginCreatorInternalContentDigest = "pluginCreator___internal___contentDigest",
  PluginCreatorInternalDescription = "pluginCreator___internal___description",
  PluginCreatorInternalFieldOwners = "pluginCreator___internal___fieldOwners",
  PluginCreatorInternalIgnoreType = "pluginCreator___internal___ignoreType",
  PluginCreatorInternalMediaType = "pluginCreator___internal___mediaType",
  PluginCreatorInternalOwner = "pluginCreator___internal___owner",
  PluginCreatorInternalType = "pluginCreator___internal___type",
  PluginCreatorName = "pluginCreator___name",
  PluginCreatorNodeApIs = "pluginCreator___nodeAPIs",
  PluginCreatorPackageJson = "pluginCreator___packageJson",
  PluginCreatorParentChildren = "pluginCreator___parent___children",
  PluginCreatorParentChildrenChildren = "pluginCreator___parent___children___children",
  PluginCreatorParentChildrenId = "pluginCreator___parent___children___id",
  PluginCreatorParentId = "pluginCreator___parent___id",
  PluginCreatorParentInternalContent = "pluginCreator___parent___internal___content",
  PluginCreatorParentInternalContentDigest = "pluginCreator___parent___internal___contentDigest",
  PluginCreatorParentInternalDescription = "pluginCreator___parent___internal___description",
  PluginCreatorParentInternalFieldOwners = "pluginCreator___parent___internal___fieldOwners",
  PluginCreatorParentInternalIgnoreType = "pluginCreator___parent___internal___ignoreType",
  PluginCreatorParentInternalMediaType = "pluginCreator___parent___internal___mediaType",
  PluginCreatorParentInternalOwner = "pluginCreator___parent___internal___owner",
  PluginCreatorParentInternalType = "pluginCreator___parent___internal___type",
  PluginCreatorParentParentChildren = "pluginCreator___parent___parent___children",
  PluginCreatorParentParentId = "pluginCreator___parent___parent___id",
  PluginCreatorPluginFilepath = "pluginCreator___pluginFilepath",
  PluginCreatorPluginOptions = "pluginCreator___pluginOptions",
  PluginCreatorResolve = "pluginCreator___resolve",
  PluginCreatorSsrApIs = "pluginCreator___ssrAPIs",
  PluginCreatorVersion = "pluginCreator___version",
}

export type SitePageFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};

export type SitePageGroupConnection = {
  __typename?: "SitePageGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SitePageEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: "SitePlugin";
  browserAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  children: Array<Node>;
  id: Scalars["ID"];
  internal: Internal;
  name?: Maybe<Scalars["String"]>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  packageJson?: Maybe<Scalars["JSON"]>;
  parent?: Maybe<Node>;
  pluginFilepath?: Maybe<Scalars["String"]>;
  pluginOptions?: Maybe<Scalars["JSON"]>;
  resolve?: Maybe<Scalars["String"]>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  version?: Maybe<Scalars["String"]>;
};

export type SitePluginConnection = {
  __typename?: "SitePluginConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SitePluginEdge>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: "SitePluginEdge";
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  BrowserApIs = "browserAPIs",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Name = "name",
  NodeApIs = "nodeAPIs",
  PackageJson = "packageJson",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PluginFilepath = "pluginFilepath",
  PluginOptions = "pluginOptions",
  Resolve = "resolve",
  SsrApIs = "ssrAPIs",
  Version = "version",
}

export type SitePluginFilterInput = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  __typename?: "SitePluginGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SitePluginEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: "SiteSiteMetadata";
  description?: Maybe<Scalars["String"]>;
  siteUrl?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type SiteSiteMetadataFilterInput = {
  description?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = "ASC",
  Desc = "DESC",
}

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars["String"]>;
  glob?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  ne?: InputMaybe<Scalars["String"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  regex?: InputMaybe<Scalars["String"]>;
};

export type TransformOptions = {
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars["Boolean"]>;
  rotate?: InputMaybe<Scalars["Int"]>;
  trim?: InputMaybe<Scalars["Float"]>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulLinkUrlTextNode = Node & {
  __typename?: "contentfulLinkUrlTextNode";
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx?: Maybe<Mdx>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  id: Scalars["ID"];
  internal: Internal;
  parent?: Maybe<Node>;
  sys?: Maybe<ContentfulLinkUrlTextNodeSys>;
  url?: Maybe<Scalars["String"]>;
};

export type ContentfulLinkUrlTextNodeConnection = {
  __typename?: "contentfulLinkUrlTextNodeConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulLinkUrlTextNodeEdge>;
  group: Array<ContentfulLinkUrlTextNodeGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulLinkUrlTextNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulLinkUrlTextNodeConnectionDistinctArgs = {
  field: ContentfulLinkUrlTextNodeFieldsEnum;
};

export type ContentfulLinkUrlTextNodeConnectionGroupArgs = {
  field: ContentfulLinkUrlTextNodeFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulLinkUrlTextNodeConnectionMaxArgs = {
  field: ContentfulLinkUrlTextNodeFieldsEnum;
};

export type ContentfulLinkUrlTextNodeConnectionMinArgs = {
  field: ContentfulLinkUrlTextNodeFieldsEnum;
};

export type ContentfulLinkUrlTextNodeConnectionSumArgs = {
  field: ContentfulLinkUrlTextNodeFieldsEnum;
};

export type ContentfulLinkUrlTextNodeEdge = {
  __typename?: "contentfulLinkUrlTextNodeEdge";
  next?: Maybe<ContentfulLinkUrlTextNode>;
  node: ContentfulLinkUrlTextNode;
  previous?: Maybe<ContentfulLinkUrlTextNode>;
};

export enum ContentfulLinkUrlTextNodeFieldsEnum {
  ChildMdxBody = "childMdx___body",
  ChildMdxChildren = "childMdx___children",
  ChildMdxChildrenChildren = "childMdx___children___children",
  ChildMdxChildrenChildrenChildren = "childMdx___children___children___children",
  ChildMdxChildrenChildrenId = "childMdx___children___children___id",
  ChildMdxChildrenId = "childMdx___children___id",
  ChildMdxChildrenInternalContent = "childMdx___children___internal___content",
  ChildMdxChildrenInternalContentDigest = "childMdx___children___internal___contentDigest",
  ChildMdxChildrenInternalDescription = "childMdx___children___internal___description",
  ChildMdxChildrenInternalFieldOwners = "childMdx___children___internal___fieldOwners",
  ChildMdxChildrenInternalIgnoreType = "childMdx___children___internal___ignoreType",
  ChildMdxChildrenInternalMediaType = "childMdx___children___internal___mediaType",
  ChildMdxChildrenInternalOwner = "childMdx___children___internal___owner",
  ChildMdxChildrenInternalType = "childMdx___children___internal___type",
  ChildMdxChildrenParentChildren = "childMdx___children___parent___children",
  ChildMdxChildrenParentId = "childMdx___children___parent___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxExcerpt = "childMdx___excerpt",
  ChildMdxFileAbsolutePath = "childMdx___fileAbsolutePath",
  ChildMdxFrontmatterTitle = "childMdx___frontmatter___title",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxHeadings = "childMdx___headings",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxHeadingsDepth = "childMdx___headings___depth",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxHeadingsValue = "childMdx___headings___value",
  ChildMdxHtml = "childMdx___html",
  ChildMdxId = "childMdx___id",
  ChildMdxInternalContent = "childMdx___internal___content",
  ChildMdxInternalContentDigest = "childMdx___internal___contentDigest",
  ChildMdxInternalDescription = "childMdx___internal___description",
  ChildMdxInternalFieldOwners = "childMdx___internal___fieldOwners",
  ChildMdxInternalIgnoreType = "childMdx___internal___ignoreType",
  ChildMdxInternalMediaType = "childMdx___internal___mediaType",
  ChildMdxInternalOwner = "childMdx___internal___owner",
  ChildMdxInternalType = "childMdx___internal___type",
  ChildMdxMdxAst = "childMdx___mdxAST",
  ChildMdxParentChildren = "childMdx___parent___children",
  ChildMdxParentChildrenChildren = "childMdx___parent___children___children",
  ChildMdxParentChildrenId = "childMdx___parent___children___id",
  ChildMdxParentId = "childMdx___parent___id",
  ChildMdxParentInternalContent = "childMdx___parent___internal___content",
  ChildMdxParentInternalContentDigest = "childMdx___parent___internal___contentDigest",
  ChildMdxParentInternalDescription = "childMdx___parent___internal___description",
  ChildMdxParentInternalFieldOwners = "childMdx___parent___internal___fieldOwners",
  ChildMdxParentInternalIgnoreType = "childMdx___parent___internal___ignoreType",
  ChildMdxParentInternalMediaType = "childMdx___parent___internal___mediaType",
  ChildMdxParentInternalOwner = "childMdx___parent___internal___owner",
  ChildMdxParentInternalType = "childMdx___parent___internal___type",
  ChildMdxParentParentChildren = "childMdx___parent___parent___children",
  ChildMdxParentParentId = "childMdx___parent___parent___id",
  ChildMdxRawBody = "childMdx___rawBody",
  ChildMdxSlug = "childMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxTableOfContents = "childMdx___tableOfContents",
  ChildMdxTimeToRead = "childMdx___timeToRead",
  ChildMdxWordCountParagraphs = "childMdx___wordCount___paragraphs",
  ChildMdxWordCountSentences = "childMdx___wordCount___sentences",
  ChildMdxWordCountWords = "childMdx___wordCount___words",
  Children = "children",
  ChildrenMdx = "childrenMdx",
  ChildrenMdxBody = "childrenMdx___body",
  ChildrenMdxChildren = "childrenMdx___children",
  ChildrenMdxChildrenChildren = "childrenMdx___children___children",
  ChildrenMdxChildrenChildrenChildren = "childrenMdx___children___children___children",
  ChildrenMdxChildrenChildrenId = "childrenMdx___children___children___id",
  ChildrenMdxChildrenId = "childrenMdx___children___id",
  ChildrenMdxChildrenInternalContent = "childrenMdx___children___internal___content",
  ChildrenMdxChildrenInternalContentDigest = "childrenMdx___children___internal___contentDigest",
  ChildrenMdxChildrenInternalDescription = "childrenMdx___children___internal___description",
  ChildrenMdxChildrenInternalFieldOwners = "childrenMdx___children___internal___fieldOwners",
  ChildrenMdxChildrenInternalIgnoreType = "childrenMdx___children___internal___ignoreType",
  ChildrenMdxChildrenInternalMediaType = "childrenMdx___children___internal___mediaType",
  ChildrenMdxChildrenInternalOwner = "childrenMdx___children___internal___owner",
  ChildrenMdxChildrenInternalType = "childrenMdx___children___internal___type",
  ChildrenMdxChildrenParentChildren = "childrenMdx___children___parent___children",
  ChildrenMdxChildrenParentId = "childrenMdx___children___parent___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxExcerpt = "childrenMdx___excerpt",
  ChildrenMdxFileAbsolutePath = "childrenMdx___fileAbsolutePath",
  ChildrenMdxFrontmatterTitle = "childrenMdx___frontmatter___title",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxHeadings = "childrenMdx___headings",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxHeadingsDepth = "childrenMdx___headings___depth",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxHeadingsValue = "childrenMdx___headings___value",
  ChildrenMdxHtml = "childrenMdx___html",
  ChildrenMdxId = "childrenMdx___id",
  ChildrenMdxInternalContent = "childrenMdx___internal___content",
  ChildrenMdxInternalContentDigest = "childrenMdx___internal___contentDigest",
  ChildrenMdxInternalDescription = "childrenMdx___internal___description",
  ChildrenMdxInternalFieldOwners = "childrenMdx___internal___fieldOwners",
  ChildrenMdxInternalIgnoreType = "childrenMdx___internal___ignoreType",
  ChildrenMdxInternalMediaType = "childrenMdx___internal___mediaType",
  ChildrenMdxInternalOwner = "childrenMdx___internal___owner",
  ChildrenMdxInternalType = "childrenMdx___internal___type",
  ChildrenMdxMdxAst = "childrenMdx___mdxAST",
  ChildrenMdxParentChildren = "childrenMdx___parent___children",
  ChildrenMdxParentChildrenChildren = "childrenMdx___parent___children___children",
  ChildrenMdxParentChildrenId = "childrenMdx___parent___children___id",
  ChildrenMdxParentId = "childrenMdx___parent___id",
  ChildrenMdxParentInternalContent = "childrenMdx___parent___internal___content",
  ChildrenMdxParentInternalContentDigest = "childrenMdx___parent___internal___contentDigest",
  ChildrenMdxParentInternalDescription = "childrenMdx___parent___internal___description",
  ChildrenMdxParentInternalFieldOwners = "childrenMdx___parent___internal___fieldOwners",
  ChildrenMdxParentInternalIgnoreType = "childrenMdx___parent___internal___ignoreType",
  ChildrenMdxParentInternalMediaType = "childrenMdx___parent___internal___mediaType",
  ChildrenMdxParentInternalOwner = "childrenMdx___parent___internal___owner",
  ChildrenMdxParentInternalType = "childrenMdx___parent___internal___type",
  ChildrenMdxParentParentChildren = "childrenMdx___parent___parent___children",
  ChildrenMdxParentParentId = "childrenMdx___parent___parent___id",
  ChildrenMdxRawBody = "childrenMdx___rawBody",
  ChildrenMdxSlug = "childrenMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxTableOfContents = "childrenMdx___tableOfContents",
  ChildrenMdxTimeToRead = "childrenMdx___timeToRead",
  ChildrenMdxWordCountParagraphs = "childrenMdx___wordCount___paragraphs",
  ChildrenMdxWordCountSentences = "childrenMdx___wordCount___sentences",
  ChildrenMdxWordCountWords = "childrenMdx___wordCount___words",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  SysType = "sys___type",
  Url = "url",
}

export type ContentfulLinkUrlTextNodeFilterInput = {
  childMdx?: InputMaybe<MdxFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenMdx?: InputMaybe<MdxFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sys?: InputMaybe<ContentfulLinkUrlTextNodeSysFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulLinkUrlTextNodeFilterListInput = {
  elemMatch?: InputMaybe<ContentfulLinkUrlTextNodeFilterInput>;
};

export type ContentfulLinkUrlTextNodeGroupConnection = {
  __typename?: "contentfulLinkUrlTextNodeGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulLinkUrlTextNodeEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<ContentfulLinkUrlTextNodeGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulLinkUrlTextNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulLinkUrlTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulLinkUrlTextNodeFieldsEnum;
};

export type ContentfulLinkUrlTextNodeGroupConnectionGroupArgs = {
  field: ContentfulLinkUrlTextNodeFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulLinkUrlTextNodeGroupConnectionMaxArgs = {
  field: ContentfulLinkUrlTextNodeFieldsEnum;
};

export type ContentfulLinkUrlTextNodeGroupConnectionMinArgs = {
  field: ContentfulLinkUrlTextNodeFieldsEnum;
};

export type ContentfulLinkUrlTextNodeGroupConnectionSumArgs = {
  field: ContentfulLinkUrlTextNodeFieldsEnum;
};

export type ContentfulLinkUrlTextNodeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulLinkUrlTextNodeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulLinkUrlTextNodeSys = {
  __typename?: "contentfulLinkUrlTextNodeSys";
  type?: Maybe<Scalars["String"]>;
};

export type ContentfulLinkUrlTextNodeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulPageDescriptionTextNode = Node & {
  __typename?: "contentfulPageDescriptionTextNode";
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx?: Maybe<Mdx>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  internal: Internal;
  parent?: Maybe<Node>;
  sys?: Maybe<ContentfulPageDescriptionTextNodeSys>;
};

export type ContentfulPageDescriptionTextNodeConnection = {
  __typename?: "contentfulPageDescriptionTextNodeConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulPageDescriptionTextNodeEdge>;
  group: Array<ContentfulPageDescriptionTextNodeGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulPageDescriptionTextNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulPageDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulPageDescriptionTextNodeFieldsEnum;
};

export type ContentfulPageDescriptionTextNodeConnectionGroupArgs = {
  field: ContentfulPageDescriptionTextNodeFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulPageDescriptionTextNodeConnectionMaxArgs = {
  field: ContentfulPageDescriptionTextNodeFieldsEnum;
};

export type ContentfulPageDescriptionTextNodeConnectionMinArgs = {
  field: ContentfulPageDescriptionTextNodeFieldsEnum;
};

export type ContentfulPageDescriptionTextNodeConnectionSumArgs = {
  field: ContentfulPageDescriptionTextNodeFieldsEnum;
};

export type ContentfulPageDescriptionTextNodeEdge = {
  __typename?: "contentfulPageDescriptionTextNodeEdge";
  next?: Maybe<ContentfulPageDescriptionTextNode>;
  node: ContentfulPageDescriptionTextNode;
  previous?: Maybe<ContentfulPageDescriptionTextNode>;
};

export enum ContentfulPageDescriptionTextNodeFieldsEnum {
  ChildMdxBody = "childMdx___body",
  ChildMdxChildren = "childMdx___children",
  ChildMdxChildrenChildren = "childMdx___children___children",
  ChildMdxChildrenChildrenChildren = "childMdx___children___children___children",
  ChildMdxChildrenChildrenId = "childMdx___children___children___id",
  ChildMdxChildrenId = "childMdx___children___id",
  ChildMdxChildrenInternalContent = "childMdx___children___internal___content",
  ChildMdxChildrenInternalContentDigest = "childMdx___children___internal___contentDigest",
  ChildMdxChildrenInternalDescription = "childMdx___children___internal___description",
  ChildMdxChildrenInternalFieldOwners = "childMdx___children___internal___fieldOwners",
  ChildMdxChildrenInternalIgnoreType = "childMdx___children___internal___ignoreType",
  ChildMdxChildrenInternalMediaType = "childMdx___children___internal___mediaType",
  ChildMdxChildrenInternalOwner = "childMdx___children___internal___owner",
  ChildMdxChildrenInternalType = "childMdx___children___internal___type",
  ChildMdxChildrenParentChildren = "childMdx___children___parent___children",
  ChildMdxChildrenParentId = "childMdx___children___parent___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxExcerpt = "childMdx___excerpt",
  ChildMdxFileAbsolutePath = "childMdx___fileAbsolutePath",
  ChildMdxFrontmatterTitle = "childMdx___frontmatter___title",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxHeadings = "childMdx___headings",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxHeadingsDepth = "childMdx___headings___depth",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxHeadingsValue = "childMdx___headings___value",
  ChildMdxHtml = "childMdx___html",
  ChildMdxId = "childMdx___id",
  ChildMdxInternalContent = "childMdx___internal___content",
  ChildMdxInternalContentDigest = "childMdx___internal___contentDigest",
  ChildMdxInternalDescription = "childMdx___internal___description",
  ChildMdxInternalFieldOwners = "childMdx___internal___fieldOwners",
  ChildMdxInternalIgnoreType = "childMdx___internal___ignoreType",
  ChildMdxInternalMediaType = "childMdx___internal___mediaType",
  ChildMdxInternalOwner = "childMdx___internal___owner",
  ChildMdxInternalType = "childMdx___internal___type",
  ChildMdxMdxAst = "childMdx___mdxAST",
  ChildMdxParentChildren = "childMdx___parent___children",
  ChildMdxParentChildrenChildren = "childMdx___parent___children___children",
  ChildMdxParentChildrenId = "childMdx___parent___children___id",
  ChildMdxParentId = "childMdx___parent___id",
  ChildMdxParentInternalContent = "childMdx___parent___internal___content",
  ChildMdxParentInternalContentDigest = "childMdx___parent___internal___contentDigest",
  ChildMdxParentInternalDescription = "childMdx___parent___internal___description",
  ChildMdxParentInternalFieldOwners = "childMdx___parent___internal___fieldOwners",
  ChildMdxParentInternalIgnoreType = "childMdx___parent___internal___ignoreType",
  ChildMdxParentInternalMediaType = "childMdx___parent___internal___mediaType",
  ChildMdxParentInternalOwner = "childMdx___parent___internal___owner",
  ChildMdxParentInternalType = "childMdx___parent___internal___type",
  ChildMdxParentParentChildren = "childMdx___parent___parent___children",
  ChildMdxParentParentId = "childMdx___parent___parent___id",
  ChildMdxRawBody = "childMdx___rawBody",
  ChildMdxSlug = "childMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxTableOfContents = "childMdx___tableOfContents",
  ChildMdxTimeToRead = "childMdx___timeToRead",
  ChildMdxWordCountParagraphs = "childMdx___wordCount___paragraphs",
  ChildMdxWordCountSentences = "childMdx___wordCount___sentences",
  ChildMdxWordCountWords = "childMdx___wordCount___words",
  Children = "children",
  ChildrenMdx = "childrenMdx",
  ChildrenMdxBody = "childrenMdx___body",
  ChildrenMdxChildren = "childrenMdx___children",
  ChildrenMdxChildrenChildren = "childrenMdx___children___children",
  ChildrenMdxChildrenChildrenChildren = "childrenMdx___children___children___children",
  ChildrenMdxChildrenChildrenId = "childrenMdx___children___children___id",
  ChildrenMdxChildrenId = "childrenMdx___children___id",
  ChildrenMdxChildrenInternalContent = "childrenMdx___children___internal___content",
  ChildrenMdxChildrenInternalContentDigest = "childrenMdx___children___internal___contentDigest",
  ChildrenMdxChildrenInternalDescription = "childrenMdx___children___internal___description",
  ChildrenMdxChildrenInternalFieldOwners = "childrenMdx___children___internal___fieldOwners",
  ChildrenMdxChildrenInternalIgnoreType = "childrenMdx___children___internal___ignoreType",
  ChildrenMdxChildrenInternalMediaType = "childrenMdx___children___internal___mediaType",
  ChildrenMdxChildrenInternalOwner = "childrenMdx___children___internal___owner",
  ChildrenMdxChildrenInternalType = "childrenMdx___children___internal___type",
  ChildrenMdxChildrenParentChildren = "childrenMdx___children___parent___children",
  ChildrenMdxChildrenParentId = "childrenMdx___children___parent___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxExcerpt = "childrenMdx___excerpt",
  ChildrenMdxFileAbsolutePath = "childrenMdx___fileAbsolutePath",
  ChildrenMdxFrontmatterTitle = "childrenMdx___frontmatter___title",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxHeadings = "childrenMdx___headings",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxHeadingsDepth = "childrenMdx___headings___depth",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxHeadingsValue = "childrenMdx___headings___value",
  ChildrenMdxHtml = "childrenMdx___html",
  ChildrenMdxId = "childrenMdx___id",
  ChildrenMdxInternalContent = "childrenMdx___internal___content",
  ChildrenMdxInternalContentDigest = "childrenMdx___internal___contentDigest",
  ChildrenMdxInternalDescription = "childrenMdx___internal___description",
  ChildrenMdxInternalFieldOwners = "childrenMdx___internal___fieldOwners",
  ChildrenMdxInternalIgnoreType = "childrenMdx___internal___ignoreType",
  ChildrenMdxInternalMediaType = "childrenMdx___internal___mediaType",
  ChildrenMdxInternalOwner = "childrenMdx___internal___owner",
  ChildrenMdxInternalType = "childrenMdx___internal___type",
  ChildrenMdxMdxAst = "childrenMdx___mdxAST",
  ChildrenMdxParentChildren = "childrenMdx___parent___children",
  ChildrenMdxParentChildrenChildren = "childrenMdx___parent___children___children",
  ChildrenMdxParentChildrenId = "childrenMdx___parent___children___id",
  ChildrenMdxParentId = "childrenMdx___parent___id",
  ChildrenMdxParentInternalContent = "childrenMdx___parent___internal___content",
  ChildrenMdxParentInternalContentDigest = "childrenMdx___parent___internal___contentDigest",
  ChildrenMdxParentInternalDescription = "childrenMdx___parent___internal___description",
  ChildrenMdxParentInternalFieldOwners = "childrenMdx___parent___internal___fieldOwners",
  ChildrenMdxParentInternalIgnoreType = "childrenMdx___parent___internal___ignoreType",
  ChildrenMdxParentInternalMediaType = "childrenMdx___parent___internal___mediaType",
  ChildrenMdxParentInternalOwner = "childrenMdx___parent___internal___owner",
  ChildrenMdxParentInternalType = "childrenMdx___parent___internal___type",
  ChildrenMdxParentParentChildren = "childrenMdx___parent___parent___children",
  ChildrenMdxParentParentId = "childrenMdx___parent___parent___id",
  ChildrenMdxRawBody = "childrenMdx___rawBody",
  ChildrenMdxSlug = "childrenMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxTableOfContents = "childrenMdx___tableOfContents",
  ChildrenMdxTimeToRead = "childrenMdx___timeToRead",
  ChildrenMdxWordCountParagraphs = "childrenMdx___wordCount___paragraphs",
  ChildrenMdxWordCountSentences = "childrenMdx___wordCount___sentences",
  ChildrenMdxWordCountWords = "childrenMdx___wordCount___words",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Description = "description",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  SysType = "sys___type",
}

export type ContentfulPageDescriptionTextNodeFilterInput = {
  childMdx?: InputMaybe<MdxFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenMdx?: InputMaybe<MdxFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sys?: InputMaybe<ContentfulPageDescriptionTextNodeSysFilterInput>;
};

export type ContentfulPageDescriptionTextNodeFilterListInput = {
  elemMatch?: InputMaybe<ContentfulPageDescriptionTextNodeFilterInput>;
};

export type ContentfulPageDescriptionTextNodeGroupConnection = {
  __typename?: "contentfulPageDescriptionTextNodeGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulPageDescriptionTextNodeEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<ContentfulPageDescriptionTextNodeGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulPageDescriptionTextNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulPageDescriptionTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulPageDescriptionTextNodeFieldsEnum;
};

export type ContentfulPageDescriptionTextNodeGroupConnectionGroupArgs = {
  field: ContentfulPageDescriptionTextNodeFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulPageDescriptionTextNodeGroupConnectionMaxArgs = {
  field: ContentfulPageDescriptionTextNodeFieldsEnum;
};

export type ContentfulPageDescriptionTextNodeGroupConnectionMinArgs = {
  field: ContentfulPageDescriptionTextNodeFieldsEnum;
};

export type ContentfulPageDescriptionTextNodeGroupConnectionSumArgs = {
  field: ContentfulPageDescriptionTextNodeFieldsEnum;
};

export type ContentfulPageDescriptionTextNodeSortInput = {
  fields?: InputMaybe<
    Array<InputMaybe<ContentfulPageDescriptionTextNodeFieldsEnum>>
  >;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulPageDescriptionTextNodeSys = {
  __typename?: "contentfulPageDescriptionTextNodeSys";
  type?: Maybe<Scalars["String"]>;
};

export type ContentfulPageDescriptionTextNodeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type GatsbyImageSharpFixedFragment = {
  __typename?: "ImageSharpFixed";
  base64?: string | null;
  width: number;
  height: number;
  src: string;
  srcSet: string;
};

export type GatsbyImageSharpFixed_TracedSvgFragment = {
  __typename?: "ImageSharpFixed";
  tracedSVG?: string | null;
  width: number;
  height: number;
  src: string;
  srcSet: string;
};

export type GatsbyImageSharpFixed_WithWebpFragment = {
  __typename?: "ImageSharpFixed";
  base64?: string | null;
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
};

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = {
  __typename?: "ImageSharpFixed";
  tracedSVG?: string | null;
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
};

export type GatsbyImageSharpFixed_NoBase64Fragment = {
  __typename?: "ImageSharpFixed";
  width: number;
  height: number;
  src: string;
  srcSet: string;
};

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = {
  __typename?: "ImageSharpFixed";
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
};

export type GatsbyImageSharpFluidFragment = {
  __typename?: "ImageSharpFluid";
  base64?: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = {
  __typename?: "ImageSharpFluid";
  maxHeight: number;
  maxWidth: number;
};

export type GatsbyImageSharpFluid_TracedSvgFragment = {
  __typename?: "ImageSharpFluid";
  tracedSVG?: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

export type GatsbyImageSharpFluid_WithWebpFragment = {
  __typename?: "ImageSharpFluid";
  base64?: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
  sizes: string;
};

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = {
  __typename?: "ImageSharpFluid";
  tracedSVG?: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
  sizes: string;
};

export type GatsbyImageSharpFluid_NoBase64Fragment = {
  __typename?: "ImageSharpFluid";
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = {
  __typename?: "ImageSharpFluid";
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
  sizes: string;
};

export type PagesQueryQueryVariables = Exact<{ [key: string]: never }>;

export type PagesQueryQuery = {
  __typename?: "Query";
  allSiteFunction: {
    __typename?: "SiteFunctionConnection";
    nodes: Array<{ __typename?: "SiteFunction"; functionRoute: string }>;
  };
  allSitePage: {
    __typename?: "SitePageConnection";
    nodes: Array<{ __typename?: "SitePage"; path: string }>;
  };
};

export type GetAllImagesQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllImagesQuery = {
  __typename?: "Query";
  allFile: {
    __typename?: "FileConnection";
    edges: Array<{
      __typename?: "FileEdge";
      node: {
        __typename?: "File";
        name: string;
        childImageSharp?: {
          __typename?: "ImageSharp";
          gatsbyImageData: any;
        } | null;
      };
    }>;
  };
};

export type FindSiteMainOptionsTopTabQueryVariables = Exact<{
  [key: string]: never;
}>;

export type FindSiteMainOptionsTopTabQuery = {
  __typename?: "Query";
  contentfulOptions?: {
    __typename?: "ContentfulOptions";
    id: string;
    node_locale: string;
    contentfulid?: string | null;
    contentful_id: string;
    topBarLogo?: {
      __typename?: "ContentfulLink";
      id: string;
      node_locale: string;
      title?: string | null;
      url?: {
        __typename?: "contentfulLinkUrlTextNode";
        url?: string | null;
      } | null;
      image?: {
        __typename?: "ContentfulAsset";
        gatsbyImageData?: any | null;
        description?: string | null;
      } | null;
    } | null;
    topBarTabs?: Array<{
      __typename?: "ContentfulLink";
      id: string;
      node_locale: string;
      title?: string | null;
      url?: {
        __typename?: "contentfulLinkUrlTextNode";
        url?: string | null;
      } | null;
    } | null> | null;
    topBarSocialLinks?: Array<{
      __typename?: "ContentfulLink";
      id: string;
      node_locale: string;
      url?: {
        __typename?: "contentfulLinkUrlTextNode";
        url?: string | null;
      } | null;
      image?: {
        __typename?: "ContentfulAsset";
        id: string;
        description?: string | null;
        gatsbyImage?: any | null;
      } | null;
    } | null> | null;
  } | null;
};

export type FindSiteMainOptionsBottomTabQueryVariables = Exact<{
  [key: string]: never;
}>;

export type FindSiteMainOptionsBottomTabQuery = {
  __typename?: "Query";
  contentfulOptions?: {
    __typename?: "ContentfulOptions";
    id: string;
    node_locale: string;
    contentfulid?: string | null;
    contentful_id: string;
    bottomBarLogo?: {
      __typename?: "ContentfulLink";
      id: string;
      node_locale: string;
      title?: string | null;
      url?: {
        __typename?: "contentfulLinkUrlTextNode";
        url?: string | null;
      } | null;
      image?: {
        __typename?: "ContentfulAsset";
        gatsbyImageData?: any | null;
        description?: string | null;
      } | null;
    } | null;
    bottomBarTabs?: Array<{
      __typename?: "ContentfulLink";
      id: string;
      node_locale: string;
      title?: string | null;
      url?: {
        __typename?: "contentfulLinkUrlTextNode";
        url?: string | null;
      } | null;
    } | null> | null;
    bottomBarSocialLinks?: Array<{
      __typename?: "ContentfulLink";
      id: string;
      node_locale: string;
      url?: {
        __typename?: "contentfulLinkUrlTextNode";
        url?: string | null;
      } | null;
      image?: {
        __typename?: "ContentfulAsset";
        id: string;
        description?: string | null;
        gatsbyImage?: any | null;
      } | null;
    } | null> | null;
  } | null;
};

export type GetAllSiteContentQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllSiteContentQuery = {
  __typename?: "Query";
  allContentfulPage: {
    __typename?: "ContentfulPageConnection";
    edges: Array<{
      __typename?: "ContentfulPageEdge";
      node: {
        __typename?: "ContentfulPage";
        id: string;
        node_locale: string;
        url?: string | null;
        title?: string | null;
        description?: {
          __typename?: "contentfulPageDescriptionTextNode";
          description?: string | null;
        } | null;
      };
    }>;
  };
  allContentfulLocale: {
    __typename?: "ContentfulLocaleConnection";
    totalCount: number;
    edges: Array<{
      __typename?: "ContentfulLocaleEdge";
      node: {
        __typename?: "ContentfulLocale";
        id: string;
        code?: string | null;
        name?: string | null;
        default?: boolean | null;
        fallbackCode?: string | null;
      };
    }>;
  };
};

export const GatsbyImageSharpFixedFragmentDoc = `
    fragment GatsbyImageSharpFixed on ImageSharpFixed {
  base64
  width
  height
  src
  srcSet
}
    `;
export const GatsbyImageSharpFixed_TracedSvgFragmentDoc = `
    fragment GatsbyImageSharpFixed_tracedSVG on ImageSharpFixed {
  tracedSVG
  width
  height
  src
  srcSet
}
    `;
export const GatsbyImageSharpFixed_WithWebpFragmentDoc = `
    fragment GatsbyImageSharpFixed_withWebp on ImageSharpFixed {
  base64
  width
  height
  src
  srcSet
  srcWebp
  srcSetWebp
}
    `;
export const GatsbyImageSharpFixed_WithWebp_TracedSvgFragmentDoc = `
    fragment GatsbyImageSharpFixed_withWebp_tracedSVG on ImageSharpFixed {
  tracedSVG
  width
  height
  src
  srcSet
  srcWebp
  srcSetWebp
}
    `;
export const GatsbyImageSharpFixed_NoBase64FragmentDoc = `
    fragment GatsbyImageSharpFixed_noBase64 on ImageSharpFixed {
  width
  height
  src
  srcSet
}
    `;
export const GatsbyImageSharpFixed_WithWebp_NoBase64FragmentDoc = `
    fragment GatsbyImageSharpFixed_withWebp_noBase64 on ImageSharpFixed {
  width
  height
  src
  srcSet
  srcWebp
  srcSetWebp
}
    `;
export const GatsbyImageSharpFluidFragmentDoc = `
    fragment GatsbyImageSharpFluid on ImageSharpFluid {
  base64
  aspectRatio
  src
  srcSet
  sizes
}
    `;
export const GatsbyImageSharpFluidLimitPresentationSizeFragmentDoc = `
    fragment GatsbyImageSharpFluidLimitPresentationSize on ImageSharpFluid {
  maxHeight: presentationHeight
  maxWidth: presentationWidth
}
    `;
export const GatsbyImageSharpFluid_TracedSvgFragmentDoc = `
    fragment GatsbyImageSharpFluid_tracedSVG on ImageSharpFluid {
  tracedSVG
  aspectRatio
  src
  srcSet
  sizes
}
    `;
export const GatsbyImageSharpFluid_WithWebpFragmentDoc = `
    fragment GatsbyImageSharpFluid_withWebp on ImageSharpFluid {
  base64
  aspectRatio
  src
  srcSet
  srcWebp
  srcSetWebp
  sizes
}
    `;
export const GatsbyImageSharpFluid_WithWebp_TracedSvgFragmentDoc = `
    fragment GatsbyImageSharpFluid_withWebp_tracedSVG on ImageSharpFluid {
  tracedSVG
  aspectRatio
  src
  srcSet
  srcWebp
  srcSetWebp
  sizes
}
    `;
export const GatsbyImageSharpFluid_NoBase64FragmentDoc = `
    fragment GatsbyImageSharpFluid_noBase64 on ImageSharpFluid {
  aspectRatio
  src
  srcSet
  sizes
}
    `;
export const GatsbyImageSharpFluid_WithWebp_NoBase64FragmentDoc = `
    fragment GatsbyImageSharpFluid_withWebp_noBase64 on ImageSharpFluid {
  aspectRatio
  src
  srcSet
  srcWebp
  srcSetWebp
  sizes
}
    `;
export const PagesQueryDocument = `
    query PagesQuery {
  allSiteFunction {
    nodes {
      functionRoute
    }
  }
  allSitePage(filter: {path: {regex: "/^(?!/dev-404-page).+$/"}}) {
    nodes {
      path
    }
  }
}
    `;
export const usePagesQueryQuery = <TData = PagesQueryQuery, TError = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: PagesQueryQueryVariables,
  options?: UseQueryOptions<PagesQueryQuery, TError, TData>
) =>
  useQuery<PagesQueryQuery, TError, TData>(
    variables === undefined ? ["PagesQuery"] : ["PagesQuery", variables],
    fetcher<PagesQueryQuery, PagesQueryQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      PagesQueryDocument,
      variables
    ),
    options
  );
export const GetAllImagesDocument = `
    query GetAllImages {
  allFile(filter: {absolutePath: {regex: "/.png/"}}) {
    edges {
      node {
        name
        childImageSharp {
          gatsbyImageData(width: 418, aspectRatio: 1)
        }
      }
    }
  }
}
    `;
export const useGetAllImagesQuery = <
  TData = GetAllImagesQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: GetAllImagesQueryVariables,
  options?: UseQueryOptions<GetAllImagesQuery, TError, TData>
) =>
  useQuery<GetAllImagesQuery, TError, TData>(
    variables === undefined ? ["GetAllImages"] : ["GetAllImages", variables],
    fetcher<GetAllImagesQuery, GetAllImagesQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      GetAllImagesDocument,
      variables
    ),
    options
  );
export const FindSiteMainOptionsTopTabDocument = `
    query FindSiteMainOptionsTopTab {
  contentfulOptions(contentfulid: {regex: "/Main/"}) {
    id
    node_locale
    contentfulid
    contentful_id
    topBarLogo {
      id
      node_locale
      title
      url {
        url
      }
      image {
        gatsbyImageData
        description
      }
    }
    topBarTabs {
      id
      node_locale
      title
      url {
        url
      }
    }
    topBarSocialLinks {
      id
      node_locale
      url {
        url
      }
      image {
        id
        description
        gatsbyImage(width: 32, height: 32)
      }
    }
  }
}
    `;
export const useFindSiteMainOptionsTopTabQuery = <
  TData = FindSiteMainOptionsTopTabQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: FindSiteMainOptionsTopTabQueryVariables,
  options?: UseQueryOptions<FindSiteMainOptionsTopTabQuery, TError, TData>
) =>
  useQuery<FindSiteMainOptionsTopTabQuery, TError, TData>(
    variables === undefined
      ? ["FindSiteMainOptionsTopTab"]
      : ["FindSiteMainOptionsTopTab", variables],
    fetcher<
      FindSiteMainOptionsTopTabQuery,
      FindSiteMainOptionsTopTabQueryVariables
    >(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      FindSiteMainOptionsTopTabDocument,
      variables
    ),
    options
  );
export const FindSiteMainOptionsBottomTabDocument = `
    query FindSiteMainOptionsBottomTab {
  contentfulOptions(contentfulid: {regex: "/Main/"}) {
    id
    node_locale
    contentfulid
    contentful_id
    bottomBarLogo {
      id
      node_locale
      title
      url {
        url
      }
      image {
        gatsbyImageData
        description
      }
    }
    bottomBarTabs {
      id
      node_locale
      title
      url {
        url
      }
    }
    bottomBarSocialLinks {
      id
      node_locale
      url {
        url
      }
      image {
        id
        description
        gatsbyImage(width: 32, height: 32)
      }
    }
  }
}
    `;
export const useFindSiteMainOptionsBottomTabQuery = <
  TData = FindSiteMainOptionsBottomTabQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: FindSiteMainOptionsBottomTabQueryVariables,
  options?: UseQueryOptions<FindSiteMainOptionsBottomTabQuery, TError, TData>
) =>
  useQuery<FindSiteMainOptionsBottomTabQuery, TError, TData>(
    variables === undefined
      ? ["FindSiteMainOptionsBottomTab"]
      : ["FindSiteMainOptionsBottomTab", variables],
    fetcher<
      FindSiteMainOptionsBottomTabQuery,
      FindSiteMainOptionsBottomTabQueryVariables
    >(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      FindSiteMainOptionsBottomTabDocument,
      variables
    ),
    options
  );
export const GetAllSiteContentDocument = `
    query GetAllSiteContent {
  allContentfulPage {
    edges {
      node {
        id
        node_locale
        url
        title
        description {
          description
        }
      }
    }
  }
  allContentfulLocale {
    totalCount
    edges {
      node {
        id
        code
        name
        default
        fallbackCode
      }
    }
  }
}
    `;
export const useGetAllSiteContentQuery = <
  TData = GetAllSiteContentQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: GetAllSiteContentQueryVariables,
  options?: UseQueryOptions<GetAllSiteContentQuery, TError, TData>
) =>
  useQuery<GetAllSiteContentQuery, TError, TData>(
    variables === undefined
      ? ["GetAllSiteContent"]
      : ["GetAllSiteContent", variables],
    fetcher<GetAllSiteContentQuery, GetAllSiteContentQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      GetAllSiteContentDocument,
      variables
    ),
    options
  );
