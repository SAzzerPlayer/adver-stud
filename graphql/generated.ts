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

export type ContentfulAttentionBlock = ContentfulEntry &
  ContentfulReference &
  Node & {
    __typename?: "ContentfulAttentionBlock";
    author?: Maybe<ContentfulAuthor>;
    body?: Maybe<ContentfulAttentionBlockBody>;
    children: Array<Node>;
    contentful_id: Scalars["String"];
    createdAt?: Maybe<Scalars["Date"]>;
    id: Scalars["ID"];
    illustration?: Maybe<ContentfulAsset>;
    internal: Internal;
    node_locale: Scalars["String"];
    page?: Maybe<Array<Maybe<ContentfulPage>>>;
    parent?: Maybe<Node>;
    spaceId?: Maybe<Scalars["String"]>;
    sys?: Maybe<ContentfulAttentionBlockSys>;
    title?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["Date"]>;
  };

export type ContentfulAttentionBlockCreatedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type ContentfulAttentionBlockUpdatedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type ContentfulAttentionBlockBody = {
  __typename?: "ContentfulAttentionBlockBody";
  raw?: Maybe<Scalars["String"]>;
};

export type ContentfulAttentionBlockBodyFilterInput = {
  raw?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAttentionBlockConnection = {
  __typename?: "ContentfulAttentionBlockConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulAttentionBlockEdge>;
  group: Array<ContentfulAttentionBlockGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulAttentionBlock>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulAttentionBlockConnectionDistinctArgs = {
  field: ContentfulAttentionBlockFieldsEnum;
};

export type ContentfulAttentionBlockConnectionGroupArgs = {
  field: ContentfulAttentionBlockFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulAttentionBlockConnectionMaxArgs = {
  field: ContentfulAttentionBlockFieldsEnum;
};

export type ContentfulAttentionBlockConnectionMinArgs = {
  field: ContentfulAttentionBlockFieldsEnum;
};

export type ContentfulAttentionBlockConnectionSumArgs = {
  field: ContentfulAttentionBlockFieldsEnum;
};

export type ContentfulAttentionBlockContentfulAuthorUnion =
  | ContentfulAttentionBlock
  | ContentfulAuthor;

export type ContentfulAttentionBlockEdge = {
  __typename?: "ContentfulAttentionBlockEdge";
  next?: Maybe<ContentfulAttentionBlock>;
  node: ContentfulAttentionBlock;
  previous?: Maybe<ContentfulAttentionBlock>;
};

export enum ContentfulAttentionBlockFieldsEnum {
  AuthorAttentionblock = "author___attentionblock",
  AuthorAttentionblockAuthorAttentionblock = "author___attentionblock___author___attentionblock",
  AuthorAttentionblockAuthorChildren = "author___attentionblock___author___children",
  AuthorAttentionblockAuthorContentfulId = "author___attentionblock___author___contentful_id",
  AuthorAttentionblockAuthorCreatedAt = "author___attentionblock___author___createdAt",
  AuthorAttentionblockAuthorId = "author___attentionblock___author___id",
  AuthorAttentionblockAuthorName = "author___attentionblock___author___name",
  AuthorAttentionblockAuthorNodeLocale = "author___attentionblock___author___node_locale",
  AuthorAttentionblockAuthorPage = "author___attentionblock___author___page",
  AuthorAttentionblockAuthorSpaceId = "author___attentionblock___author___spaceId",
  AuthorAttentionblockAuthorUpdatedAt = "author___attentionblock___author___updatedAt",
  AuthorAttentionblockBodyRaw = "author___attentionblock___body___raw",
  AuthorAttentionblockChildren = "author___attentionblock___children",
  AuthorAttentionblockChildrenChildren = "author___attentionblock___children___children",
  AuthorAttentionblockChildrenId = "author___attentionblock___children___id",
  AuthorAttentionblockContentfulId = "author___attentionblock___contentful_id",
  AuthorAttentionblockCreatedAt = "author___attentionblock___createdAt",
  AuthorAttentionblockId = "author___attentionblock___id",
  AuthorAttentionblockIllustrationChildren = "author___attentionblock___illustration___children",
  AuthorAttentionblockIllustrationContentfulId = "author___attentionblock___illustration___contentful_id",
  AuthorAttentionblockIllustrationCreatedAt = "author___attentionblock___illustration___createdAt",
  AuthorAttentionblockIllustrationDescription = "author___attentionblock___illustration___description",
  AuthorAttentionblockIllustrationFilename = "author___attentionblock___illustration___filename",
  AuthorAttentionblockIllustrationFilesize = "author___attentionblock___illustration___filesize",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  AuthorAttentionblockIllustrationGatsbyImage = "author___attentionblock___illustration___gatsbyImage",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  AuthorAttentionblockIllustrationGatsbyImageData = "author___attentionblock___illustration___gatsbyImageData",
  AuthorAttentionblockIllustrationHeight = "author___attentionblock___illustration___height",
  AuthorAttentionblockIllustrationId = "author___attentionblock___illustration___id",
  AuthorAttentionblockIllustrationMimeType = "author___attentionblock___illustration___mimeType",
  AuthorAttentionblockIllustrationNodeLocale = "author___attentionblock___illustration___node_locale",
  AuthorAttentionblockIllustrationPlaceholderUrl = "author___attentionblock___illustration___placeholderUrl",
  AuthorAttentionblockIllustrationPublicUrl = "author___attentionblock___illustration___publicUrl",
  AuthorAttentionblockIllustrationSpaceId = "author___attentionblock___illustration___spaceId",
  AuthorAttentionblockIllustrationTitle = "author___attentionblock___illustration___title",
  AuthorAttentionblockIllustrationUpdatedAt = "author___attentionblock___illustration___updatedAt",
  AuthorAttentionblockIllustrationUrl = "author___attentionblock___illustration___url",
  AuthorAttentionblockIllustrationWidth = "author___attentionblock___illustration___width",
  AuthorAttentionblockInternalContent = "author___attentionblock___internal___content",
  AuthorAttentionblockInternalContentDigest = "author___attentionblock___internal___contentDigest",
  AuthorAttentionblockInternalDescription = "author___attentionblock___internal___description",
  AuthorAttentionblockInternalFieldOwners = "author___attentionblock___internal___fieldOwners",
  AuthorAttentionblockInternalIgnoreType = "author___attentionblock___internal___ignoreType",
  AuthorAttentionblockInternalMediaType = "author___attentionblock___internal___mediaType",
  AuthorAttentionblockInternalOwner = "author___attentionblock___internal___owner",
  AuthorAttentionblockInternalType = "author___attentionblock___internal___type",
  AuthorAttentionblockNodeLocale = "author___attentionblock___node_locale",
  AuthorAttentionblockPage = "author___attentionblock___page",
  AuthorAttentionblockPageChildren = "author___attentionblock___page___children",
  AuthorAttentionblockPageChildrenContentfulPageDescriptionTextNode = "author___attentionblock___page___childrenContentfulPageDescriptionTextNode",
  AuthorAttentionblockPageContentfulId = "author___attentionblock___page___contentful_id",
  AuthorAttentionblockPageCreatedAt = "author___attentionblock___page___createdAt",
  AuthorAttentionblockPageId = "author___attentionblock___page___id",
  AuthorAttentionblockPageNodeLocale = "author___attentionblock___page___node_locale",
  AuthorAttentionblockPageSpaceId = "author___attentionblock___page___spaceId",
  AuthorAttentionblockPageTitle = "author___attentionblock___page___title",
  AuthorAttentionblockPageUpdatedAt = "author___attentionblock___page___updatedAt",
  AuthorAttentionblockPageUrl = "author___attentionblock___page___url",
  AuthorAttentionblockParentChildren = "author___attentionblock___parent___children",
  AuthorAttentionblockParentId = "author___attentionblock___parent___id",
  AuthorAttentionblockSpaceId = "author___attentionblock___spaceId",
  AuthorAttentionblockSysRevision = "author___attentionblock___sys___revision",
  AuthorAttentionblockSysType = "author___attentionblock___sys___type",
  AuthorAttentionblockTitle = "author___attentionblock___title",
  AuthorAttentionblockUpdatedAt = "author___attentionblock___updatedAt",
  AuthorChildren = "author___children",
  AuthorChildrenChildren = "author___children___children",
  AuthorChildrenChildrenChildren = "author___children___children___children",
  AuthorChildrenChildrenId = "author___children___children___id",
  AuthorChildrenId = "author___children___id",
  AuthorChildrenInternalContent = "author___children___internal___content",
  AuthorChildrenInternalContentDigest = "author___children___internal___contentDigest",
  AuthorChildrenInternalDescription = "author___children___internal___description",
  AuthorChildrenInternalFieldOwners = "author___children___internal___fieldOwners",
  AuthorChildrenInternalIgnoreType = "author___children___internal___ignoreType",
  AuthorChildrenInternalMediaType = "author___children___internal___mediaType",
  AuthorChildrenInternalOwner = "author___children___internal___owner",
  AuthorChildrenInternalType = "author___children___internal___type",
  AuthorChildrenParentChildren = "author___children___parent___children",
  AuthorChildrenParentId = "author___children___parent___id",
  AuthorContentfulId = "author___contentful_id",
  AuthorCreatedAt = "author___createdAt",
  AuthorId = "author___id",
  AuthorInternalContent = "author___internal___content",
  AuthorInternalContentDigest = "author___internal___contentDigest",
  AuthorInternalDescription = "author___internal___description",
  AuthorInternalFieldOwners = "author___internal___fieldOwners",
  AuthorInternalIgnoreType = "author___internal___ignoreType",
  AuthorInternalMediaType = "author___internal___mediaType",
  AuthorInternalOwner = "author___internal___owner",
  AuthorInternalType = "author___internal___type",
  AuthorName = "author___name",
  AuthorNodeLocale = "author___node_locale",
  AuthorPage = "author___page",
  AuthorPageChildContentfulPageDescriptionTextNodeChildren = "author___page___childContentfulPageDescriptionTextNode___children",
  AuthorPageChildContentfulPageDescriptionTextNodeChildrenMdx = "author___page___childContentfulPageDescriptionTextNode___childrenMdx",
  AuthorPageChildContentfulPageDescriptionTextNodeDescription = "author___page___childContentfulPageDescriptionTextNode___description",
  AuthorPageChildContentfulPageDescriptionTextNodeId = "author___page___childContentfulPageDescriptionTextNode___id",
  AuthorPageChildren = "author___page___children",
  AuthorPageChildrenContentfulPageDescriptionTextNode = "author___page___childrenContentfulPageDescriptionTextNode",
  AuthorPageChildrenContentfulPageDescriptionTextNodeChildren = "author___page___childrenContentfulPageDescriptionTextNode___children",
  AuthorPageChildrenContentfulPageDescriptionTextNodeChildrenMdx = "author___page___childrenContentfulPageDescriptionTextNode___childrenMdx",
  AuthorPageChildrenContentfulPageDescriptionTextNodeDescription = "author___page___childrenContentfulPageDescriptionTextNode___description",
  AuthorPageChildrenContentfulPageDescriptionTextNodeId = "author___page___childrenContentfulPageDescriptionTextNode___id",
  AuthorPageChildrenChildren = "author___page___children___children",
  AuthorPageChildrenId = "author___page___children___id",
  AuthorPageContentfulId = "author___page___contentful_id",
  AuthorPageCreatedAt = "author___page___createdAt",
  AuthorPageDescriptionChildren = "author___page___description___children",
  AuthorPageDescriptionChildrenMdx = "author___page___description___childrenMdx",
  AuthorPageDescriptionDescription = "author___page___description___description",
  AuthorPageDescriptionId = "author___page___description___id",
  AuthorPageId = "author___page___id",
  AuthorPageInternalContent = "author___page___internal___content",
  AuthorPageInternalContentDigest = "author___page___internal___contentDigest",
  AuthorPageInternalDescription = "author___page___internal___description",
  AuthorPageInternalFieldOwners = "author___page___internal___fieldOwners",
  AuthorPageInternalIgnoreType = "author___page___internal___ignoreType",
  AuthorPageInternalMediaType = "author___page___internal___mediaType",
  AuthorPageInternalOwner = "author___page___internal___owner",
  AuthorPageInternalType = "author___page___internal___type",
  AuthorPageNodeLocale = "author___page___node_locale",
  AuthorPageParentChildren = "author___page___parent___children",
  AuthorPageParentId = "author___page___parent___id",
  AuthorPageSpaceId = "author___page___spaceId",
  AuthorPageSysRevision = "author___page___sys___revision",
  AuthorPageSysType = "author___page___sys___type",
  AuthorPageTitle = "author___page___title",
  AuthorPageUpdatedAt = "author___page___updatedAt",
  AuthorPageUrl = "author___page___url",
  AuthorParentChildren = "author___parent___children",
  AuthorParentChildrenChildren = "author___parent___children___children",
  AuthorParentChildrenId = "author___parent___children___id",
  AuthorParentId = "author___parent___id",
  AuthorParentInternalContent = "author___parent___internal___content",
  AuthorParentInternalContentDigest = "author___parent___internal___contentDigest",
  AuthorParentInternalDescription = "author___parent___internal___description",
  AuthorParentInternalFieldOwners = "author___parent___internal___fieldOwners",
  AuthorParentInternalIgnoreType = "author___parent___internal___ignoreType",
  AuthorParentInternalMediaType = "author___parent___internal___mediaType",
  AuthorParentInternalOwner = "author___parent___internal___owner",
  AuthorParentInternalType = "author___parent___internal___type",
  AuthorParentParentChildren = "author___parent___parent___children",
  AuthorParentParentId = "author___parent___parent___id",
  AuthorSpaceId = "author___spaceId",
  AuthorSysRevision = "author___sys___revision",
  AuthorSysType = "author___sys___type",
  AuthorUpdatedAt = "author___updatedAt",
  BodyRaw = "body___raw",
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
  Id = "id",
  IllustrationChildren = "illustration___children",
  IllustrationChildrenChildren = "illustration___children___children",
  IllustrationChildrenChildrenChildren = "illustration___children___children___children",
  IllustrationChildrenChildrenId = "illustration___children___children___id",
  IllustrationChildrenId = "illustration___children___id",
  IllustrationChildrenInternalContent = "illustration___children___internal___content",
  IllustrationChildrenInternalContentDigest = "illustration___children___internal___contentDigest",
  IllustrationChildrenInternalDescription = "illustration___children___internal___description",
  IllustrationChildrenInternalFieldOwners = "illustration___children___internal___fieldOwners",
  IllustrationChildrenInternalIgnoreType = "illustration___children___internal___ignoreType",
  IllustrationChildrenInternalMediaType = "illustration___children___internal___mediaType",
  IllustrationChildrenInternalOwner = "illustration___children___internal___owner",
  IllustrationChildrenInternalType = "illustration___children___internal___type",
  IllustrationChildrenParentChildren = "illustration___children___parent___children",
  IllustrationChildrenParentId = "illustration___children___parent___id",
  IllustrationContentfulId = "illustration___contentful_id",
  IllustrationCreatedAt = "illustration___createdAt",
  IllustrationDescription = "illustration___description",
  IllustrationFileContentType = "illustration___file___contentType",
  IllustrationFileDetailsSize = "illustration___file___details___size",
  IllustrationFileFileName = "illustration___file___fileName",
  IllustrationFileUrl = "illustration___file___url",
  IllustrationFilename = "illustration___filename",
  IllustrationFilesize = "illustration___filesize",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  IllustrationGatsbyImage = "illustration___gatsbyImage",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  IllustrationGatsbyImageData = "illustration___gatsbyImageData",
  IllustrationHeight = "illustration___height",
  IllustrationId = "illustration___id",
  IllustrationInternalContent = "illustration___internal___content",
  IllustrationInternalContentDigest = "illustration___internal___contentDigest",
  IllustrationInternalDescription = "illustration___internal___description",
  IllustrationInternalFieldOwners = "illustration___internal___fieldOwners",
  IllustrationInternalIgnoreType = "illustration___internal___ignoreType",
  IllustrationInternalMediaType = "illustration___internal___mediaType",
  IllustrationInternalOwner = "illustration___internal___owner",
  IllustrationInternalType = "illustration___internal___type",
  IllustrationMimeType = "illustration___mimeType",
  IllustrationNodeLocale = "illustration___node_locale",
  IllustrationParentChildren = "illustration___parent___children",
  IllustrationParentChildrenChildren = "illustration___parent___children___children",
  IllustrationParentChildrenId = "illustration___parent___children___id",
  IllustrationParentId = "illustration___parent___id",
  IllustrationParentInternalContent = "illustration___parent___internal___content",
  IllustrationParentInternalContentDigest = "illustration___parent___internal___contentDigest",
  IllustrationParentInternalDescription = "illustration___parent___internal___description",
  IllustrationParentInternalFieldOwners = "illustration___parent___internal___fieldOwners",
  IllustrationParentInternalIgnoreType = "illustration___parent___internal___ignoreType",
  IllustrationParentInternalMediaType = "illustration___parent___internal___mediaType",
  IllustrationParentInternalOwner = "illustration___parent___internal___owner",
  IllustrationParentInternalType = "illustration___parent___internal___type",
  IllustrationParentParentChildren = "illustration___parent___parent___children",
  IllustrationParentParentId = "illustration___parent___parent___id",
  IllustrationPlaceholderUrl = "illustration___placeholderUrl",
  IllustrationPublicUrl = "illustration___publicUrl",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  IllustrationResizeHeight = "illustration___resize___height",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  IllustrationResizeSrc = "illustration___resize___src",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  IllustrationResizeWidth = "illustration___resize___width",
  IllustrationSpaceId = "illustration___spaceId",
  IllustrationSysRevision = "illustration___sys___revision",
  IllustrationSysType = "illustration___sys___type",
  IllustrationTitle = "illustration___title",
  IllustrationUpdatedAt = "illustration___updatedAt",
  IllustrationUrl = "illustration___url",
  IllustrationWidth = "illustration___width",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  NodeLocale = "node_locale",
  Page = "page",
  PageChildContentfulPageDescriptionTextNodeChildMdxBody = "page___childContentfulPageDescriptionTextNode___childMdx___body",
  PageChildContentfulPageDescriptionTextNodeChildMdxChildren = "page___childContentfulPageDescriptionTextNode___childMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageChildContentfulPageDescriptionTextNodeChildMdxExcerpt = "page___childContentfulPageDescriptionTextNode___childMdx___excerpt",
  PageChildContentfulPageDescriptionTextNodeChildMdxFileAbsolutePath = "page___childContentfulPageDescriptionTextNode___childMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageChildContentfulPageDescriptionTextNodeChildMdxHeadings = "page___childContentfulPageDescriptionTextNode___childMdx___headings",
  PageChildContentfulPageDescriptionTextNodeChildMdxHtml = "page___childContentfulPageDescriptionTextNode___childMdx___html",
  PageChildContentfulPageDescriptionTextNodeChildMdxId = "page___childContentfulPageDescriptionTextNode___childMdx___id",
  PageChildContentfulPageDescriptionTextNodeChildMdxMdxAst = "page___childContentfulPageDescriptionTextNode___childMdx___mdxAST",
  PageChildContentfulPageDescriptionTextNodeChildMdxRawBody = "page___childContentfulPageDescriptionTextNode___childMdx___rawBody",
  PageChildContentfulPageDescriptionTextNodeChildMdxSlug = "page___childContentfulPageDescriptionTextNode___childMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageChildContentfulPageDescriptionTextNodeChildMdxTableOfContents = "page___childContentfulPageDescriptionTextNode___childMdx___tableOfContents",
  PageChildContentfulPageDescriptionTextNodeChildMdxTimeToRead = "page___childContentfulPageDescriptionTextNode___childMdx___timeToRead",
  PageChildContentfulPageDescriptionTextNodeChildren = "page___childContentfulPageDescriptionTextNode___children",
  PageChildContentfulPageDescriptionTextNodeChildrenMdx = "page___childContentfulPageDescriptionTextNode___childrenMdx",
  PageChildContentfulPageDescriptionTextNodeChildrenMdxBody = "page___childContentfulPageDescriptionTextNode___childrenMdx___body",
  PageChildContentfulPageDescriptionTextNodeChildrenMdxChildren = "page___childContentfulPageDescriptionTextNode___childrenMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageChildContentfulPageDescriptionTextNodeChildrenMdxExcerpt = "page___childContentfulPageDescriptionTextNode___childrenMdx___excerpt",
  PageChildContentfulPageDescriptionTextNodeChildrenMdxFileAbsolutePath = "page___childContentfulPageDescriptionTextNode___childrenMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageChildContentfulPageDescriptionTextNodeChildrenMdxHeadings = "page___childContentfulPageDescriptionTextNode___childrenMdx___headings",
  PageChildContentfulPageDescriptionTextNodeChildrenMdxHtml = "page___childContentfulPageDescriptionTextNode___childrenMdx___html",
  PageChildContentfulPageDescriptionTextNodeChildrenMdxId = "page___childContentfulPageDescriptionTextNode___childrenMdx___id",
  PageChildContentfulPageDescriptionTextNodeChildrenMdxMdxAst = "page___childContentfulPageDescriptionTextNode___childrenMdx___mdxAST",
  PageChildContentfulPageDescriptionTextNodeChildrenMdxRawBody = "page___childContentfulPageDescriptionTextNode___childrenMdx___rawBody",
  PageChildContentfulPageDescriptionTextNodeChildrenMdxSlug = "page___childContentfulPageDescriptionTextNode___childrenMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageChildContentfulPageDescriptionTextNodeChildrenMdxTableOfContents = "page___childContentfulPageDescriptionTextNode___childrenMdx___tableOfContents",
  PageChildContentfulPageDescriptionTextNodeChildrenMdxTimeToRead = "page___childContentfulPageDescriptionTextNode___childrenMdx___timeToRead",
  PageChildContentfulPageDescriptionTextNodeChildrenChildren = "page___childContentfulPageDescriptionTextNode___children___children",
  PageChildContentfulPageDescriptionTextNodeChildrenId = "page___childContentfulPageDescriptionTextNode___children___id",
  PageChildContentfulPageDescriptionTextNodeDescription = "page___childContentfulPageDescriptionTextNode___description",
  PageChildContentfulPageDescriptionTextNodeId = "page___childContentfulPageDescriptionTextNode___id",
  PageChildContentfulPageDescriptionTextNodeInternalContent = "page___childContentfulPageDescriptionTextNode___internal___content",
  PageChildContentfulPageDescriptionTextNodeInternalContentDigest = "page___childContentfulPageDescriptionTextNode___internal___contentDigest",
  PageChildContentfulPageDescriptionTextNodeInternalDescription = "page___childContentfulPageDescriptionTextNode___internal___description",
  PageChildContentfulPageDescriptionTextNodeInternalFieldOwners = "page___childContentfulPageDescriptionTextNode___internal___fieldOwners",
  PageChildContentfulPageDescriptionTextNodeInternalIgnoreType = "page___childContentfulPageDescriptionTextNode___internal___ignoreType",
  PageChildContentfulPageDescriptionTextNodeInternalMediaType = "page___childContentfulPageDescriptionTextNode___internal___mediaType",
  PageChildContentfulPageDescriptionTextNodeInternalOwner = "page___childContentfulPageDescriptionTextNode___internal___owner",
  PageChildContentfulPageDescriptionTextNodeInternalType = "page___childContentfulPageDescriptionTextNode___internal___type",
  PageChildContentfulPageDescriptionTextNodeParentChildren = "page___childContentfulPageDescriptionTextNode___parent___children",
  PageChildContentfulPageDescriptionTextNodeParentId = "page___childContentfulPageDescriptionTextNode___parent___id",
  PageChildContentfulPageDescriptionTextNodeSysType = "page___childContentfulPageDescriptionTextNode___sys___type",
  PageChildren = "page___children",
  PageChildrenContentfulPageDescriptionTextNode = "page___childrenContentfulPageDescriptionTextNode",
  PageChildrenContentfulPageDescriptionTextNodeChildMdxBody = "page___childrenContentfulPageDescriptionTextNode___childMdx___body",
  PageChildrenContentfulPageDescriptionTextNodeChildMdxChildren = "page___childrenContentfulPageDescriptionTextNode___childMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageChildrenContentfulPageDescriptionTextNodeChildMdxExcerpt = "page___childrenContentfulPageDescriptionTextNode___childMdx___excerpt",
  PageChildrenContentfulPageDescriptionTextNodeChildMdxFileAbsolutePath = "page___childrenContentfulPageDescriptionTextNode___childMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageChildrenContentfulPageDescriptionTextNodeChildMdxHeadings = "page___childrenContentfulPageDescriptionTextNode___childMdx___headings",
  PageChildrenContentfulPageDescriptionTextNodeChildMdxHtml = "page___childrenContentfulPageDescriptionTextNode___childMdx___html",
  PageChildrenContentfulPageDescriptionTextNodeChildMdxId = "page___childrenContentfulPageDescriptionTextNode___childMdx___id",
  PageChildrenContentfulPageDescriptionTextNodeChildMdxMdxAst = "page___childrenContentfulPageDescriptionTextNode___childMdx___mdxAST",
  PageChildrenContentfulPageDescriptionTextNodeChildMdxRawBody = "page___childrenContentfulPageDescriptionTextNode___childMdx___rawBody",
  PageChildrenContentfulPageDescriptionTextNodeChildMdxSlug = "page___childrenContentfulPageDescriptionTextNode___childMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageChildrenContentfulPageDescriptionTextNodeChildMdxTableOfContents = "page___childrenContentfulPageDescriptionTextNode___childMdx___tableOfContents",
  PageChildrenContentfulPageDescriptionTextNodeChildMdxTimeToRead = "page___childrenContentfulPageDescriptionTextNode___childMdx___timeToRead",
  PageChildrenContentfulPageDescriptionTextNodeChildren = "page___childrenContentfulPageDescriptionTextNode___children",
  PageChildrenContentfulPageDescriptionTextNodeChildrenMdx = "page___childrenContentfulPageDescriptionTextNode___childrenMdx",
  PageChildrenContentfulPageDescriptionTextNodeChildrenMdxBody = "page___childrenContentfulPageDescriptionTextNode___childrenMdx___body",
  PageChildrenContentfulPageDescriptionTextNodeChildrenMdxChildren = "page___childrenContentfulPageDescriptionTextNode___childrenMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageChildrenContentfulPageDescriptionTextNodeChildrenMdxExcerpt = "page___childrenContentfulPageDescriptionTextNode___childrenMdx___excerpt",
  PageChildrenContentfulPageDescriptionTextNodeChildrenMdxFileAbsolutePath = "page___childrenContentfulPageDescriptionTextNode___childrenMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageChildrenContentfulPageDescriptionTextNodeChildrenMdxHeadings = "page___childrenContentfulPageDescriptionTextNode___childrenMdx___headings",
  PageChildrenContentfulPageDescriptionTextNodeChildrenMdxHtml = "page___childrenContentfulPageDescriptionTextNode___childrenMdx___html",
  PageChildrenContentfulPageDescriptionTextNodeChildrenMdxId = "page___childrenContentfulPageDescriptionTextNode___childrenMdx___id",
  PageChildrenContentfulPageDescriptionTextNodeChildrenMdxMdxAst = "page___childrenContentfulPageDescriptionTextNode___childrenMdx___mdxAST",
  PageChildrenContentfulPageDescriptionTextNodeChildrenMdxRawBody = "page___childrenContentfulPageDescriptionTextNode___childrenMdx___rawBody",
  PageChildrenContentfulPageDescriptionTextNodeChildrenMdxSlug = "page___childrenContentfulPageDescriptionTextNode___childrenMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageChildrenContentfulPageDescriptionTextNodeChildrenMdxTableOfContents = "page___childrenContentfulPageDescriptionTextNode___childrenMdx___tableOfContents",
  PageChildrenContentfulPageDescriptionTextNodeChildrenMdxTimeToRead = "page___childrenContentfulPageDescriptionTextNode___childrenMdx___timeToRead",
  PageChildrenContentfulPageDescriptionTextNodeChildrenChildren = "page___childrenContentfulPageDescriptionTextNode___children___children",
  PageChildrenContentfulPageDescriptionTextNodeChildrenId = "page___childrenContentfulPageDescriptionTextNode___children___id",
  PageChildrenContentfulPageDescriptionTextNodeDescription = "page___childrenContentfulPageDescriptionTextNode___description",
  PageChildrenContentfulPageDescriptionTextNodeId = "page___childrenContentfulPageDescriptionTextNode___id",
  PageChildrenContentfulPageDescriptionTextNodeInternalContent = "page___childrenContentfulPageDescriptionTextNode___internal___content",
  PageChildrenContentfulPageDescriptionTextNodeInternalContentDigest = "page___childrenContentfulPageDescriptionTextNode___internal___contentDigest",
  PageChildrenContentfulPageDescriptionTextNodeInternalDescription = "page___childrenContentfulPageDescriptionTextNode___internal___description",
  PageChildrenContentfulPageDescriptionTextNodeInternalFieldOwners = "page___childrenContentfulPageDescriptionTextNode___internal___fieldOwners",
  PageChildrenContentfulPageDescriptionTextNodeInternalIgnoreType = "page___childrenContentfulPageDescriptionTextNode___internal___ignoreType",
  PageChildrenContentfulPageDescriptionTextNodeInternalMediaType = "page___childrenContentfulPageDescriptionTextNode___internal___mediaType",
  PageChildrenContentfulPageDescriptionTextNodeInternalOwner = "page___childrenContentfulPageDescriptionTextNode___internal___owner",
  PageChildrenContentfulPageDescriptionTextNodeInternalType = "page___childrenContentfulPageDescriptionTextNode___internal___type",
  PageChildrenContentfulPageDescriptionTextNodeParentChildren = "page___childrenContentfulPageDescriptionTextNode___parent___children",
  PageChildrenContentfulPageDescriptionTextNodeParentId = "page___childrenContentfulPageDescriptionTextNode___parent___id",
  PageChildrenContentfulPageDescriptionTextNodeSysType = "page___childrenContentfulPageDescriptionTextNode___sys___type",
  PageChildrenChildren = "page___children___children",
  PageChildrenChildrenChildren = "page___children___children___children",
  PageChildrenChildrenId = "page___children___children___id",
  PageChildrenId = "page___children___id",
  PageChildrenInternalContent = "page___children___internal___content",
  PageChildrenInternalContentDigest = "page___children___internal___contentDigest",
  PageChildrenInternalDescription = "page___children___internal___description",
  PageChildrenInternalFieldOwners = "page___children___internal___fieldOwners",
  PageChildrenInternalIgnoreType = "page___children___internal___ignoreType",
  PageChildrenInternalMediaType = "page___children___internal___mediaType",
  PageChildrenInternalOwner = "page___children___internal___owner",
  PageChildrenInternalType = "page___children___internal___type",
  PageChildrenParentChildren = "page___children___parent___children",
  PageChildrenParentId = "page___children___parent___id",
  PageContentfulId = "page___contentful_id",
  PageCreatedAt = "page___createdAt",
  PageDescriptionChildMdxBody = "page___description___childMdx___body",
  PageDescriptionChildMdxChildren = "page___description___childMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageDescriptionChildMdxExcerpt = "page___description___childMdx___excerpt",
  PageDescriptionChildMdxFileAbsolutePath = "page___description___childMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageDescriptionChildMdxHeadings = "page___description___childMdx___headings",
  PageDescriptionChildMdxHtml = "page___description___childMdx___html",
  PageDescriptionChildMdxId = "page___description___childMdx___id",
  PageDescriptionChildMdxMdxAst = "page___description___childMdx___mdxAST",
  PageDescriptionChildMdxRawBody = "page___description___childMdx___rawBody",
  PageDescriptionChildMdxSlug = "page___description___childMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageDescriptionChildMdxTableOfContents = "page___description___childMdx___tableOfContents",
  PageDescriptionChildMdxTimeToRead = "page___description___childMdx___timeToRead",
  PageDescriptionChildren = "page___description___children",
  PageDescriptionChildrenMdx = "page___description___childrenMdx",
  PageDescriptionChildrenMdxBody = "page___description___childrenMdx___body",
  PageDescriptionChildrenMdxChildren = "page___description___childrenMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageDescriptionChildrenMdxExcerpt = "page___description___childrenMdx___excerpt",
  PageDescriptionChildrenMdxFileAbsolutePath = "page___description___childrenMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageDescriptionChildrenMdxHeadings = "page___description___childrenMdx___headings",
  PageDescriptionChildrenMdxHtml = "page___description___childrenMdx___html",
  PageDescriptionChildrenMdxId = "page___description___childrenMdx___id",
  PageDescriptionChildrenMdxMdxAst = "page___description___childrenMdx___mdxAST",
  PageDescriptionChildrenMdxRawBody = "page___description___childrenMdx___rawBody",
  PageDescriptionChildrenMdxSlug = "page___description___childrenMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageDescriptionChildrenMdxTableOfContents = "page___description___childrenMdx___tableOfContents",
  PageDescriptionChildrenMdxTimeToRead = "page___description___childrenMdx___timeToRead",
  PageDescriptionChildrenChildren = "page___description___children___children",
  PageDescriptionChildrenId = "page___description___children___id",
  PageDescriptionDescription = "page___description___description",
  PageDescriptionId = "page___description___id",
  PageDescriptionInternalContent = "page___description___internal___content",
  PageDescriptionInternalContentDigest = "page___description___internal___contentDigest",
  PageDescriptionInternalDescription = "page___description___internal___description",
  PageDescriptionInternalFieldOwners = "page___description___internal___fieldOwners",
  PageDescriptionInternalIgnoreType = "page___description___internal___ignoreType",
  PageDescriptionInternalMediaType = "page___description___internal___mediaType",
  PageDescriptionInternalOwner = "page___description___internal___owner",
  PageDescriptionInternalType = "page___description___internal___type",
  PageDescriptionParentChildren = "page___description___parent___children",
  PageDescriptionParentId = "page___description___parent___id",
  PageDescriptionSysType = "page___description___sys___type",
  PageId = "page___id",
  PageInternalContent = "page___internal___content",
  PageInternalContentDigest = "page___internal___contentDigest",
  PageInternalDescription = "page___internal___description",
  PageInternalFieldOwners = "page___internal___fieldOwners",
  PageInternalIgnoreType = "page___internal___ignoreType",
  PageInternalMediaType = "page___internal___mediaType",
  PageInternalOwner = "page___internal___owner",
  PageInternalType = "page___internal___type",
  PageNodeLocale = "page___node_locale",
  PageParentChildren = "page___parent___children",
  PageParentChildrenChildren = "page___parent___children___children",
  PageParentChildrenId = "page___parent___children___id",
  PageParentId = "page___parent___id",
  PageParentInternalContent = "page___parent___internal___content",
  PageParentInternalContentDigest = "page___parent___internal___contentDigest",
  PageParentInternalDescription = "page___parent___internal___description",
  PageParentInternalFieldOwners = "page___parent___internal___fieldOwners",
  PageParentInternalIgnoreType = "page___parent___internal___ignoreType",
  PageParentInternalMediaType = "page___parent___internal___mediaType",
  PageParentInternalOwner = "page___parent___internal___owner",
  PageParentInternalType = "page___parent___internal___type",
  PageParentParentChildren = "page___parent___parent___children",
  PageParentParentId = "page___parent___parent___id",
  PageSpaceId = "page___spaceId",
  PageSysRevision = "page___sys___revision",
  PageSysType = "page___sys___type",
  PageTitle = "page___title",
  PageUpdatedAt = "page___updatedAt",
  PageUrl = "page___url",
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
}

export type ContentfulAttentionBlockFilterInput = {
  author?: InputMaybe<ContentfulAuthorFilterInput>;
  body?: InputMaybe<ContentfulAttentionBlockBodyFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  illustration?: InputMaybe<ContentfulAssetFilterInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  page?: InputMaybe<ContentfulPageFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAttentionBlockSysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulAttentionBlockFilterListInput = {
  elemMatch?: InputMaybe<ContentfulAttentionBlockFilterInput>;
};

export type ContentfulAttentionBlockGroupConnection = {
  __typename?: "ContentfulAttentionBlockGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulAttentionBlockEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<ContentfulAttentionBlockGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulAttentionBlock>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulAttentionBlockGroupConnectionDistinctArgs = {
  field: ContentfulAttentionBlockFieldsEnum;
};

export type ContentfulAttentionBlockGroupConnectionGroupArgs = {
  field: ContentfulAttentionBlockFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulAttentionBlockGroupConnectionMaxArgs = {
  field: ContentfulAttentionBlockFieldsEnum;
};

export type ContentfulAttentionBlockGroupConnectionMinArgs = {
  field: ContentfulAttentionBlockFieldsEnum;
};

export type ContentfulAttentionBlockGroupConnectionSumArgs = {
  field: ContentfulAttentionBlockFieldsEnum;
};

export type ContentfulAttentionBlockSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulAttentionBlockFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulAttentionBlockSys = {
  __typename?: "ContentfulAttentionBlockSys";
  contentType?: Maybe<ContentfulAttentionBlockSysContentType>;
  revision?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["String"]>;
};

export type ContentfulAttentionBlockSysContentType = {
  __typename?: "ContentfulAttentionBlockSysContentType";
  sys?: Maybe<ContentfulAttentionBlockSysContentTypeSys>;
};

export type ContentfulAttentionBlockSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulAttentionBlockSysContentTypeSysFilterInput>;
};

export type ContentfulAttentionBlockSysContentTypeSys = {
  __typename?: "ContentfulAttentionBlockSysContentTypeSys";
  id?: Maybe<Scalars["String"]>;
  linkType?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

export type ContentfulAttentionBlockSysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAttentionBlockSysFilterInput = {
  contentType?: InputMaybe<ContentfulAttentionBlockSysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAuthor = ContentfulEntry &
  ContentfulReference &
  Node & {
    __typename?: "ContentfulAuthor";
    attentionblock?: Maybe<Array<Maybe<ContentfulAttentionBlock>>>;
    children: Array<Node>;
    contentful_id: Scalars["String"];
    createdAt?: Maybe<Scalars["Date"]>;
    id: Scalars["ID"];
    internal: Internal;
    name?: Maybe<Scalars["String"]>;
    node_locale: Scalars["String"];
    page?: Maybe<Array<Maybe<ContentfulPage>>>;
    parent?: Maybe<Node>;
    spaceId?: Maybe<Scalars["String"]>;
    sys?: Maybe<ContentfulAuthorSys>;
    updatedAt?: Maybe<Scalars["Date"]>;
  };

export type ContentfulAuthorCreatedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type ContentfulAuthorUpdatedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type ContentfulAuthorConnection = {
  __typename?: "ContentfulAuthorConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulAuthorEdge>;
  group: Array<ContentfulAuthorGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulAuthor>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulAuthorConnectionDistinctArgs = {
  field: ContentfulAuthorFieldsEnum;
};

export type ContentfulAuthorConnectionGroupArgs = {
  field: ContentfulAuthorFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulAuthorConnectionMaxArgs = {
  field: ContentfulAuthorFieldsEnum;
};

export type ContentfulAuthorConnectionMinArgs = {
  field: ContentfulAuthorFieldsEnum;
};

export type ContentfulAuthorConnectionSumArgs = {
  field: ContentfulAuthorFieldsEnum;
};

export type ContentfulAuthorEdge = {
  __typename?: "ContentfulAuthorEdge";
  next?: Maybe<ContentfulAuthor>;
  node: ContentfulAuthor;
  previous?: Maybe<ContentfulAuthor>;
};

export enum ContentfulAuthorFieldsEnum {
  Attentionblock = "attentionblock",
  AttentionblockAuthorAttentionblock = "attentionblock___author___attentionblock",
  AttentionblockAuthorAttentionblockChildren = "attentionblock___author___attentionblock___children",
  AttentionblockAuthorAttentionblockContentfulId = "attentionblock___author___attentionblock___contentful_id",
  AttentionblockAuthorAttentionblockCreatedAt = "attentionblock___author___attentionblock___createdAt",
  AttentionblockAuthorAttentionblockId = "attentionblock___author___attentionblock___id",
  AttentionblockAuthorAttentionblockNodeLocale = "attentionblock___author___attentionblock___node_locale",
  AttentionblockAuthorAttentionblockPage = "attentionblock___author___attentionblock___page",
  AttentionblockAuthorAttentionblockSpaceId = "attentionblock___author___attentionblock___spaceId",
  AttentionblockAuthorAttentionblockTitle = "attentionblock___author___attentionblock___title",
  AttentionblockAuthorAttentionblockUpdatedAt = "attentionblock___author___attentionblock___updatedAt",
  AttentionblockAuthorChildren = "attentionblock___author___children",
  AttentionblockAuthorChildrenChildren = "attentionblock___author___children___children",
  AttentionblockAuthorChildrenId = "attentionblock___author___children___id",
  AttentionblockAuthorContentfulId = "attentionblock___author___contentful_id",
  AttentionblockAuthorCreatedAt = "attentionblock___author___createdAt",
  AttentionblockAuthorId = "attentionblock___author___id",
  AttentionblockAuthorInternalContent = "attentionblock___author___internal___content",
  AttentionblockAuthorInternalContentDigest = "attentionblock___author___internal___contentDigest",
  AttentionblockAuthorInternalDescription = "attentionblock___author___internal___description",
  AttentionblockAuthorInternalFieldOwners = "attentionblock___author___internal___fieldOwners",
  AttentionblockAuthorInternalIgnoreType = "attentionblock___author___internal___ignoreType",
  AttentionblockAuthorInternalMediaType = "attentionblock___author___internal___mediaType",
  AttentionblockAuthorInternalOwner = "attentionblock___author___internal___owner",
  AttentionblockAuthorInternalType = "attentionblock___author___internal___type",
  AttentionblockAuthorName = "attentionblock___author___name",
  AttentionblockAuthorNodeLocale = "attentionblock___author___node_locale",
  AttentionblockAuthorPage = "attentionblock___author___page",
  AttentionblockAuthorPageChildren = "attentionblock___author___page___children",
  AttentionblockAuthorPageChildrenContentfulPageDescriptionTextNode = "attentionblock___author___page___childrenContentfulPageDescriptionTextNode",
  AttentionblockAuthorPageContentfulId = "attentionblock___author___page___contentful_id",
  AttentionblockAuthorPageCreatedAt = "attentionblock___author___page___createdAt",
  AttentionblockAuthorPageId = "attentionblock___author___page___id",
  AttentionblockAuthorPageNodeLocale = "attentionblock___author___page___node_locale",
  AttentionblockAuthorPageSpaceId = "attentionblock___author___page___spaceId",
  AttentionblockAuthorPageTitle = "attentionblock___author___page___title",
  AttentionblockAuthorPageUpdatedAt = "attentionblock___author___page___updatedAt",
  AttentionblockAuthorPageUrl = "attentionblock___author___page___url",
  AttentionblockAuthorParentChildren = "attentionblock___author___parent___children",
  AttentionblockAuthorParentId = "attentionblock___author___parent___id",
  AttentionblockAuthorSpaceId = "attentionblock___author___spaceId",
  AttentionblockAuthorSysRevision = "attentionblock___author___sys___revision",
  AttentionblockAuthorSysType = "attentionblock___author___sys___type",
  AttentionblockAuthorUpdatedAt = "attentionblock___author___updatedAt",
  AttentionblockBodyRaw = "attentionblock___body___raw",
  AttentionblockChildren = "attentionblock___children",
  AttentionblockChildrenChildren = "attentionblock___children___children",
  AttentionblockChildrenChildrenChildren = "attentionblock___children___children___children",
  AttentionblockChildrenChildrenId = "attentionblock___children___children___id",
  AttentionblockChildrenId = "attentionblock___children___id",
  AttentionblockChildrenInternalContent = "attentionblock___children___internal___content",
  AttentionblockChildrenInternalContentDigest = "attentionblock___children___internal___contentDigest",
  AttentionblockChildrenInternalDescription = "attentionblock___children___internal___description",
  AttentionblockChildrenInternalFieldOwners = "attentionblock___children___internal___fieldOwners",
  AttentionblockChildrenInternalIgnoreType = "attentionblock___children___internal___ignoreType",
  AttentionblockChildrenInternalMediaType = "attentionblock___children___internal___mediaType",
  AttentionblockChildrenInternalOwner = "attentionblock___children___internal___owner",
  AttentionblockChildrenInternalType = "attentionblock___children___internal___type",
  AttentionblockChildrenParentChildren = "attentionblock___children___parent___children",
  AttentionblockChildrenParentId = "attentionblock___children___parent___id",
  AttentionblockContentfulId = "attentionblock___contentful_id",
  AttentionblockCreatedAt = "attentionblock___createdAt",
  AttentionblockId = "attentionblock___id",
  AttentionblockIllustrationChildren = "attentionblock___illustration___children",
  AttentionblockIllustrationChildrenChildren = "attentionblock___illustration___children___children",
  AttentionblockIllustrationChildrenId = "attentionblock___illustration___children___id",
  AttentionblockIllustrationContentfulId = "attentionblock___illustration___contentful_id",
  AttentionblockIllustrationCreatedAt = "attentionblock___illustration___createdAt",
  AttentionblockIllustrationDescription = "attentionblock___illustration___description",
  AttentionblockIllustrationFileContentType = "attentionblock___illustration___file___contentType",
  AttentionblockIllustrationFileFileName = "attentionblock___illustration___file___fileName",
  AttentionblockIllustrationFileUrl = "attentionblock___illustration___file___url",
  AttentionblockIllustrationFilename = "attentionblock___illustration___filename",
  AttentionblockIllustrationFilesize = "attentionblock___illustration___filesize",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  AttentionblockIllustrationGatsbyImage = "attentionblock___illustration___gatsbyImage",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  AttentionblockIllustrationGatsbyImageData = "attentionblock___illustration___gatsbyImageData",
  AttentionblockIllustrationHeight = "attentionblock___illustration___height",
  AttentionblockIllustrationId = "attentionblock___illustration___id",
  AttentionblockIllustrationInternalContent = "attentionblock___illustration___internal___content",
  AttentionblockIllustrationInternalContentDigest = "attentionblock___illustration___internal___contentDigest",
  AttentionblockIllustrationInternalDescription = "attentionblock___illustration___internal___description",
  AttentionblockIllustrationInternalFieldOwners = "attentionblock___illustration___internal___fieldOwners",
  AttentionblockIllustrationInternalIgnoreType = "attentionblock___illustration___internal___ignoreType",
  AttentionblockIllustrationInternalMediaType = "attentionblock___illustration___internal___mediaType",
  AttentionblockIllustrationInternalOwner = "attentionblock___illustration___internal___owner",
  AttentionblockIllustrationInternalType = "attentionblock___illustration___internal___type",
  AttentionblockIllustrationMimeType = "attentionblock___illustration___mimeType",
  AttentionblockIllustrationNodeLocale = "attentionblock___illustration___node_locale",
  AttentionblockIllustrationParentChildren = "attentionblock___illustration___parent___children",
  AttentionblockIllustrationParentId = "attentionblock___illustration___parent___id",
  AttentionblockIllustrationPlaceholderUrl = "attentionblock___illustration___placeholderUrl",
  AttentionblockIllustrationPublicUrl = "attentionblock___illustration___publicUrl",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  AttentionblockIllustrationResizeHeight = "attentionblock___illustration___resize___height",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  AttentionblockIllustrationResizeSrc = "attentionblock___illustration___resize___src",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  AttentionblockIllustrationResizeWidth = "attentionblock___illustration___resize___width",
  AttentionblockIllustrationSpaceId = "attentionblock___illustration___spaceId",
  AttentionblockIllustrationSysRevision = "attentionblock___illustration___sys___revision",
  AttentionblockIllustrationSysType = "attentionblock___illustration___sys___type",
  AttentionblockIllustrationTitle = "attentionblock___illustration___title",
  AttentionblockIllustrationUpdatedAt = "attentionblock___illustration___updatedAt",
  AttentionblockIllustrationUrl = "attentionblock___illustration___url",
  AttentionblockIllustrationWidth = "attentionblock___illustration___width",
  AttentionblockInternalContent = "attentionblock___internal___content",
  AttentionblockInternalContentDigest = "attentionblock___internal___contentDigest",
  AttentionblockInternalDescription = "attentionblock___internal___description",
  AttentionblockInternalFieldOwners = "attentionblock___internal___fieldOwners",
  AttentionblockInternalIgnoreType = "attentionblock___internal___ignoreType",
  AttentionblockInternalMediaType = "attentionblock___internal___mediaType",
  AttentionblockInternalOwner = "attentionblock___internal___owner",
  AttentionblockInternalType = "attentionblock___internal___type",
  AttentionblockNodeLocale = "attentionblock___node_locale",
  AttentionblockPage = "attentionblock___page",
  AttentionblockPageChildContentfulPageDescriptionTextNodeChildren = "attentionblock___page___childContentfulPageDescriptionTextNode___children",
  AttentionblockPageChildContentfulPageDescriptionTextNodeChildrenMdx = "attentionblock___page___childContentfulPageDescriptionTextNode___childrenMdx",
  AttentionblockPageChildContentfulPageDescriptionTextNodeDescription = "attentionblock___page___childContentfulPageDescriptionTextNode___description",
  AttentionblockPageChildContentfulPageDescriptionTextNodeId = "attentionblock___page___childContentfulPageDescriptionTextNode___id",
  AttentionblockPageChildren = "attentionblock___page___children",
  AttentionblockPageChildrenContentfulPageDescriptionTextNode = "attentionblock___page___childrenContentfulPageDescriptionTextNode",
  AttentionblockPageChildrenContentfulPageDescriptionTextNodeChildren = "attentionblock___page___childrenContentfulPageDescriptionTextNode___children",
  AttentionblockPageChildrenContentfulPageDescriptionTextNodeChildrenMdx = "attentionblock___page___childrenContentfulPageDescriptionTextNode___childrenMdx",
  AttentionblockPageChildrenContentfulPageDescriptionTextNodeDescription = "attentionblock___page___childrenContentfulPageDescriptionTextNode___description",
  AttentionblockPageChildrenContentfulPageDescriptionTextNodeId = "attentionblock___page___childrenContentfulPageDescriptionTextNode___id",
  AttentionblockPageChildrenChildren = "attentionblock___page___children___children",
  AttentionblockPageChildrenId = "attentionblock___page___children___id",
  AttentionblockPageContentfulId = "attentionblock___page___contentful_id",
  AttentionblockPageCreatedAt = "attentionblock___page___createdAt",
  AttentionblockPageDescriptionChildren = "attentionblock___page___description___children",
  AttentionblockPageDescriptionChildrenMdx = "attentionblock___page___description___childrenMdx",
  AttentionblockPageDescriptionDescription = "attentionblock___page___description___description",
  AttentionblockPageDescriptionId = "attentionblock___page___description___id",
  AttentionblockPageId = "attentionblock___page___id",
  AttentionblockPageInternalContent = "attentionblock___page___internal___content",
  AttentionblockPageInternalContentDigest = "attentionblock___page___internal___contentDigest",
  AttentionblockPageInternalDescription = "attentionblock___page___internal___description",
  AttentionblockPageInternalFieldOwners = "attentionblock___page___internal___fieldOwners",
  AttentionblockPageInternalIgnoreType = "attentionblock___page___internal___ignoreType",
  AttentionblockPageInternalMediaType = "attentionblock___page___internal___mediaType",
  AttentionblockPageInternalOwner = "attentionblock___page___internal___owner",
  AttentionblockPageInternalType = "attentionblock___page___internal___type",
  AttentionblockPageNodeLocale = "attentionblock___page___node_locale",
  AttentionblockPageParentChildren = "attentionblock___page___parent___children",
  AttentionblockPageParentId = "attentionblock___page___parent___id",
  AttentionblockPageSpaceId = "attentionblock___page___spaceId",
  AttentionblockPageSysRevision = "attentionblock___page___sys___revision",
  AttentionblockPageSysType = "attentionblock___page___sys___type",
  AttentionblockPageTitle = "attentionblock___page___title",
  AttentionblockPageUpdatedAt = "attentionblock___page___updatedAt",
  AttentionblockPageUrl = "attentionblock___page___url",
  AttentionblockParentChildren = "attentionblock___parent___children",
  AttentionblockParentChildrenChildren = "attentionblock___parent___children___children",
  AttentionblockParentChildrenId = "attentionblock___parent___children___id",
  AttentionblockParentId = "attentionblock___parent___id",
  AttentionblockParentInternalContent = "attentionblock___parent___internal___content",
  AttentionblockParentInternalContentDigest = "attentionblock___parent___internal___contentDigest",
  AttentionblockParentInternalDescription = "attentionblock___parent___internal___description",
  AttentionblockParentInternalFieldOwners = "attentionblock___parent___internal___fieldOwners",
  AttentionblockParentInternalIgnoreType = "attentionblock___parent___internal___ignoreType",
  AttentionblockParentInternalMediaType = "attentionblock___parent___internal___mediaType",
  AttentionblockParentInternalOwner = "attentionblock___parent___internal___owner",
  AttentionblockParentInternalType = "attentionblock___parent___internal___type",
  AttentionblockParentParentChildren = "attentionblock___parent___parent___children",
  AttentionblockParentParentId = "attentionblock___parent___parent___id",
  AttentionblockSpaceId = "attentionblock___spaceId",
  AttentionblockSysRevision = "attentionblock___sys___revision",
  AttentionblockSysType = "attentionblock___sys___type",
  AttentionblockTitle = "attentionblock___title",
  AttentionblockUpdatedAt = "attentionblock___updatedAt",
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
  NodeLocale = "node_locale",
  Page = "page",
  PageChildContentfulPageDescriptionTextNodeChildMdxBody = "page___childContentfulPageDescriptionTextNode___childMdx___body",
  PageChildContentfulPageDescriptionTextNodeChildMdxChildren = "page___childContentfulPageDescriptionTextNode___childMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageChildContentfulPageDescriptionTextNodeChildMdxExcerpt = "page___childContentfulPageDescriptionTextNode___childMdx___excerpt",
  PageChildContentfulPageDescriptionTextNodeChildMdxFileAbsolutePath = "page___childContentfulPageDescriptionTextNode___childMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageChildContentfulPageDescriptionTextNodeChildMdxHeadings = "page___childContentfulPageDescriptionTextNode___childMdx___headings",
  PageChildContentfulPageDescriptionTextNodeChildMdxHtml = "page___childContentfulPageDescriptionTextNode___childMdx___html",
  PageChildContentfulPageDescriptionTextNodeChildMdxId = "page___childContentfulPageDescriptionTextNode___childMdx___id",
  PageChildContentfulPageDescriptionTextNodeChildMdxMdxAst = "page___childContentfulPageDescriptionTextNode___childMdx___mdxAST",
  PageChildContentfulPageDescriptionTextNodeChildMdxRawBody = "page___childContentfulPageDescriptionTextNode___childMdx___rawBody",
  PageChildContentfulPageDescriptionTextNodeChildMdxSlug = "page___childContentfulPageDescriptionTextNode___childMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageChildContentfulPageDescriptionTextNodeChildMdxTableOfContents = "page___childContentfulPageDescriptionTextNode___childMdx___tableOfContents",
  PageChildContentfulPageDescriptionTextNodeChildMdxTimeToRead = "page___childContentfulPageDescriptionTextNode___childMdx___timeToRead",
  PageChildContentfulPageDescriptionTextNodeChildren = "page___childContentfulPageDescriptionTextNode___children",
  PageChildContentfulPageDescriptionTextNodeChildrenMdx = "page___childContentfulPageDescriptionTextNode___childrenMdx",
  PageChildContentfulPageDescriptionTextNodeChildrenMdxBody = "page___childContentfulPageDescriptionTextNode___childrenMdx___body",
  PageChildContentfulPageDescriptionTextNodeChildrenMdxChildren = "page___childContentfulPageDescriptionTextNode___childrenMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageChildContentfulPageDescriptionTextNodeChildrenMdxExcerpt = "page___childContentfulPageDescriptionTextNode___childrenMdx___excerpt",
  PageChildContentfulPageDescriptionTextNodeChildrenMdxFileAbsolutePath = "page___childContentfulPageDescriptionTextNode___childrenMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageChildContentfulPageDescriptionTextNodeChildrenMdxHeadings = "page___childContentfulPageDescriptionTextNode___childrenMdx___headings",
  PageChildContentfulPageDescriptionTextNodeChildrenMdxHtml = "page___childContentfulPageDescriptionTextNode___childrenMdx___html",
  PageChildContentfulPageDescriptionTextNodeChildrenMdxId = "page___childContentfulPageDescriptionTextNode___childrenMdx___id",
  PageChildContentfulPageDescriptionTextNodeChildrenMdxMdxAst = "page___childContentfulPageDescriptionTextNode___childrenMdx___mdxAST",
  PageChildContentfulPageDescriptionTextNodeChildrenMdxRawBody = "page___childContentfulPageDescriptionTextNode___childrenMdx___rawBody",
  PageChildContentfulPageDescriptionTextNodeChildrenMdxSlug = "page___childContentfulPageDescriptionTextNode___childrenMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageChildContentfulPageDescriptionTextNodeChildrenMdxTableOfContents = "page___childContentfulPageDescriptionTextNode___childrenMdx___tableOfContents",
  PageChildContentfulPageDescriptionTextNodeChildrenMdxTimeToRead = "page___childContentfulPageDescriptionTextNode___childrenMdx___timeToRead",
  PageChildContentfulPageDescriptionTextNodeChildrenChildren = "page___childContentfulPageDescriptionTextNode___children___children",
  PageChildContentfulPageDescriptionTextNodeChildrenId = "page___childContentfulPageDescriptionTextNode___children___id",
  PageChildContentfulPageDescriptionTextNodeDescription = "page___childContentfulPageDescriptionTextNode___description",
  PageChildContentfulPageDescriptionTextNodeId = "page___childContentfulPageDescriptionTextNode___id",
  PageChildContentfulPageDescriptionTextNodeInternalContent = "page___childContentfulPageDescriptionTextNode___internal___content",
  PageChildContentfulPageDescriptionTextNodeInternalContentDigest = "page___childContentfulPageDescriptionTextNode___internal___contentDigest",
  PageChildContentfulPageDescriptionTextNodeInternalDescription = "page___childContentfulPageDescriptionTextNode___internal___description",
  PageChildContentfulPageDescriptionTextNodeInternalFieldOwners = "page___childContentfulPageDescriptionTextNode___internal___fieldOwners",
  PageChildContentfulPageDescriptionTextNodeInternalIgnoreType = "page___childContentfulPageDescriptionTextNode___internal___ignoreType",
  PageChildContentfulPageDescriptionTextNodeInternalMediaType = "page___childContentfulPageDescriptionTextNode___internal___mediaType",
  PageChildContentfulPageDescriptionTextNodeInternalOwner = "page___childContentfulPageDescriptionTextNode___internal___owner",
  PageChildContentfulPageDescriptionTextNodeInternalType = "page___childContentfulPageDescriptionTextNode___internal___type",
  PageChildContentfulPageDescriptionTextNodeParentChildren = "page___childContentfulPageDescriptionTextNode___parent___children",
  PageChildContentfulPageDescriptionTextNodeParentId = "page___childContentfulPageDescriptionTextNode___parent___id",
  PageChildContentfulPageDescriptionTextNodeSysType = "page___childContentfulPageDescriptionTextNode___sys___type",
  PageChildren = "page___children",
  PageChildrenContentfulPageDescriptionTextNode = "page___childrenContentfulPageDescriptionTextNode",
  PageChildrenContentfulPageDescriptionTextNodeChildMdxBody = "page___childrenContentfulPageDescriptionTextNode___childMdx___body",
  PageChildrenContentfulPageDescriptionTextNodeChildMdxChildren = "page___childrenContentfulPageDescriptionTextNode___childMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageChildrenContentfulPageDescriptionTextNodeChildMdxExcerpt = "page___childrenContentfulPageDescriptionTextNode___childMdx___excerpt",
  PageChildrenContentfulPageDescriptionTextNodeChildMdxFileAbsolutePath = "page___childrenContentfulPageDescriptionTextNode___childMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageChildrenContentfulPageDescriptionTextNodeChildMdxHeadings = "page___childrenContentfulPageDescriptionTextNode___childMdx___headings",
  PageChildrenContentfulPageDescriptionTextNodeChildMdxHtml = "page___childrenContentfulPageDescriptionTextNode___childMdx___html",
  PageChildrenContentfulPageDescriptionTextNodeChildMdxId = "page___childrenContentfulPageDescriptionTextNode___childMdx___id",
  PageChildrenContentfulPageDescriptionTextNodeChildMdxMdxAst = "page___childrenContentfulPageDescriptionTextNode___childMdx___mdxAST",
  PageChildrenContentfulPageDescriptionTextNodeChildMdxRawBody = "page___childrenContentfulPageDescriptionTextNode___childMdx___rawBody",
  PageChildrenContentfulPageDescriptionTextNodeChildMdxSlug = "page___childrenContentfulPageDescriptionTextNode___childMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageChildrenContentfulPageDescriptionTextNodeChildMdxTableOfContents = "page___childrenContentfulPageDescriptionTextNode___childMdx___tableOfContents",
  PageChildrenContentfulPageDescriptionTextNodeChildMdxTimeToRead = "page___childrenContentfulPageDescriptionTextNode___childMdx___timeToRead",
  PageChildrenContentfulPageDescriptionTextNodeChildren = "page___childrenContentfulPageDescriptionTextNode___children",
  PageChildrenContentfulPageDescriptionTextNodeChildrenMdx = "page___childrenContentfulPageDescriptionTextNode___childrenMdx",
  PageChildrenContentfulPageDescriptionTextNodeChildrenMdxBody = "page___childrenContentfulPageDescriptionTextNode___childrenMdx___body",
  PageChildrenContentfulPageDescriptionTextNodeChildrenMdxChildren = "page___childrenContentfulPageDescriptionTextNode___childrenMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageChildrenContentfulPageDescriptionTextNodeChildrenMdxExcerpt = "page___childrenContentfulPageDescriptionTextNode___childrenMdx___excerpt",
  PageChildrenContentfulPageDescriptionTextNodeChildrenMdxFileAbsolutePath = "page___childrenContentfulPageDescriptionTextNode___childrenMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageChildrenContentfulPageDescriptionTextNodeChildrenMdxHeadings = "page___childrenContentfulPageDescriptionTextNode___childrenMdx___headings",
  PageChildrenContentfulPageDescriptionTextNodeChildrenMdxHtml = "page___childrenContentfulPageDescriptionTextNode___childrenMdx___html",
  PageChildrenContentfulPageDescriptionTextNodeChildrenMdxId = "page___childrenContentfulPageDescriptionTextNode___childrenMdx___id",
  PageChildrenContentfulPageDescriptionTextNodeChildrenMdxMdxAst = "page___childrenContentfulPageDescriptionTextNode___childrenMdx___mdxAST",
  PageChildrenContentfulPageDescriptionTextNodeChildrenMdxRawBody = "page___childrenContentfulPageDescriptionTextNode___childrenMdx___rawBody",
  PageChildrenContentfulPageDescriptionTextNodeChildrenMdxSlug = "page___childrenContentfulPageDescriptionTextNode___childrenMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageChildrenContentfulPageDescriptionTextNodeChildrenMdxTableOfContents = "page___childrenContentfulPageDescriptionTextNode___childrenMdx___tableOfContents",
  PageChildrenContentfulPageDescriptionTextNodeChildrenMdxTimeToRead = "page___childrenContentfulPageDescriptionTextNode___childrenMdx___timeToRead",
  PageChildrenContentfulPageDescriptionTextNodeChildrenChildren = "page___childrenContentfulPageDescriptionTextNode___children___children",
  PageChildrenContentfulPageDescriptionTextNodeChildrenId = "page___childrenContentfulPageDescriptionTextNode___children___id",
  PageChildrenContentfulPageDescriptionTextNodeDescription = "page___childrenContentfulPageDescriptionTextNode___description",
  PageChildrenContentfulPageDescriptionTextNodeId = "page___childrenContentfulPageDescriptionTextNode___id",
  PageChildrenContentfulPageDescriptionTextNodeInternalContent = "page___childrenContentfulPageDescriptionTextNode___internal___content",
  PageChildrenContentfulPageDescriptionTextNodeInternalContentDigest = "page___childrenContentfulPageDescriptionTextNode___internal___contentDigest",
  PageChildrenContentfulPageDescriptionTextNodeInternalDescription = "page___childrenContentfulPageDescriptionTextNode___internal___description",
  PageChildrenContentfulPageDescriptionTextNodeInternalFieldOwners = "page___childrenContentfulPageDescriptionTextNode___internal___fieldOwners",
  PageChildrenContentfulPageDescriptionTextNodeInternalIgnoreType = "page___childrenContentfulPageDescriptionTextNode___internal___ignoreType",
  PageChildrenContentfulPageDescriptionTextNodeInternalMediaType = "page___childrenContentfulPageDescriptionTextNode___internal___mediaType",
  PageChildrenContentfulPageDescriptionTextNodeInternalOwner = "page___childrenContentfulPageDescriptionTextNode___internal___owner",
  PageChildrenContentfulPageDescriptionTextNodeInternalType = "page___childrenContentfulPageDescriptionTextNode___internal___type",
  PageChildrenContentfulPageDescriptionTextNodeParentChildren = "page___childrenContentfulPageDescriptionTextNode___parent___children",
  PageChildrenContentfulPageDescriptionTextNodeParentId = "page___childrenContentfulPageDescriptionTextNode___parent___id",
  PageChildrenContentfulPageDescriptionTextNodeSysType = "page___childrenContentfulPageDescriptionTextNode___sys___type",
  PageChildrenChildren = "page___children___children",
  PageChildrenChildrenChildren = "page___children___children___children",
  PageChildrenChildrenId = "page___children___children___id",
  PageChildrenId = "page___children___id",
  PageChildrenInternalContent = "page___children___internal___content",
  PageChildrenInternalContentDigest = "page___children___internal___contentDigest",
  PageChildrenInternalDescription = "page___children___internal___description",
  PageChildrenInternalFieldOwners = "page___children___internal___fieldOwners",
  PageChildrenInternalIgnoreType = "page___children___internal___ignoreType",
  PageChildrenInternalMediaType = "page___children___internal___mediaType",
  PageChildrenInternalOwner = "page___children___internal___owner",
  PageChildrenInternalType = "page___children___internal___type",
  PageChildrenParentChildren = "page___children___parent___children",
  PageChildrenParentId = "page___children___parent___id",
  PageContentfulId = "page___contentful_id",
  PageCreatedAt = "page___createdAt",
  PageDescriptionChildMdxBody = "page___description___childMdx___body",
  PageDescriptionChildMdxChildren = "page___description___childMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageDescriptionChildMdxExcerpt = "page___description___childMdx___excerpt",
  PageDescriptionChildMdxFileAbsolutePath = "page___description___childMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageDescriptionChildMdxHeadings = "page___description___childMdx___headings",
  PageDescriptionChildMdxHtml = "page___description___childMdx___html",
  PageDescriptionChildMdxId = "page___description___childMdx___id",
  PageDescriptionChildMdxMdxAst = "page___description___childMdx___mdxAST",
  PageDescriptionChildMdxRawBody = "page___description___childMdx___rawBody",
  PageDescriptionChildMdxSlug = "page___description___childMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageDescriptionChildMdxTableOfContents = "page___description___childMdx___tableOfContents",
  PageDescriptionChildMdxTimeToRead = "page___description___childMdx___timeToRead",
  PageDescriptionChildren = "page___description___children",
  PageDescriptionChildrenMdx = "page___description___childrenMdx",
  PageDescriptionChildrenMdxBody = "page___description___childrenMdx___body",
  PageDescriptionChildrenMdxChildren = "page___description___childrenMdx___children",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageDescriptionChildrenMdxExcerpt = "page___description___childrenMdx___excerpt",
  PageDescriptionChildrenMdxFileAbsolutePath = "page___description___childrenMdx___fileAbsolutePath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageDescriptionChildrenMdxHeadings = "page___description___childrenMdx___headings",
  PageDescriptionChildrenMdxHtml = "page___description___childrenMdx___html",
  PageDescriptionChildrenMdxId = "page___description___childrenMdx___id",
  PageDescriptionChildrenMdxMdxAst = "page___description___childrenMdx___mdxAST",
  PageDescriptionChildrenMdxRawBody = "page___description___childrenMdx___rawBody",
  PageDescriptionChildrenMdxSlug = "page___description___childrenMdx___slug",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  PageDescriptionChildrenMdxTableOfContents = "page___description___childrenMdx___tableOfContents",
  PageDescriptionChildrenMdxTimeToRead = "page___description___childrenMdx___timeToRead",
  PageDescriptionChildrenChildren = "page___description___children___children",
  PageDescriptionChildrenId = "page___description___children___id",
  PageDescriptionDescription = "page___description___description",
  PageDescriptionId = "page___description___id",
  PageDescriptionInternalContent = "page___description___internal___content",
  PageDescriptionInternalContentDigest = "page___description___internal___contentDigest",
  PageDescriptionInternalDescription = "page___description___internal___description",
  PageDescriptionInternalFieldOwners = "page___description___internal___fieldOwners",
  PageDescriptionInternalIgnoreType = "page___description___internal___ignoreType",
  PageDescriptionInternalMediaType = "page___description___internal___mediaType",
  PageDescriptionInternalOwner = "page___description___internal___owner",
  PageDescriptionInternalType = "page___description___internal___type",
  PageDescriptionParentChildren = "page___description___parent___children",
  PageDescriptionParentId = "page___description___parent___id",
  PageDescriptionSysType = "page___description___sys___type",
  PageId = "page___id",
  PageInternalContent = "page___internal___content",
  PageInternalContentDigest = "page___internal___contentDigest",
  PageInternalDescription = "page___internal___description",
  PageInternalFieldOwners = "page___internal___fieldOwners",
  PageInternalIgnoreType = "page___internal___ignoreType",
  PageInternalMediaType = "page___internal___mediaType",
  PageInternalOwner = "page___internal___owner",
  PageInternalType = "page___internal___type",
  PageNodeLocale = "page___node_locale",
  PageParentChildren = "page___parent___children",
  PageParentChildrenChildren = "page___parent___children___children",
  PageParentChildrenId = "page___parent___children___id",
  PageParentId = "page___parent___id",
  PageParentInternalContent = "page___parent___internal___content",
  PageParentInternalContentDigest = "page___parent___internal___contentDigest",
  PageParentInternalDescription = "page___parent___internal___description",
  PageParentInternalFieldOwners = "page___parent___internal___fieldOwners",
  PageParentInternalIgnoreType = "page___parent___internal___ignoreType",
  PageParentInternalMediaType = "page___parent___internal___mediaType",
  PageParentInternalOwner = "page___parent___internal___owner",
  PageParentInternalType = "page___parent___internal___type",
  PageParentParentChildren = "page___parent___parent___children",
  PageParentParentId = "page___parent___parent___id",
  PageSpaceId = "page___spaceId",
  PageSysRevision = "page___sys___revision",
  PageSysType = "page___sys___type",
  PageTitle = "page___title",
  PageUpdatedAt = "page___updatedAt",
  PageUrl = "page___url",
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
  UpdatedAt = "updatedAt",
}

export type ContentfulAuthorFilterInput = {
  attentionblock?: InputMaybe<ContentfulAttentionBlockFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  page?: InputMaybe<ContentfulPageFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAuthorSysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulAuthorGroupConnection = {
  __typename?: "ContentfulAuthorGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulAuthorEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<ContentfulAuthorGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulAuthor>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulAuthorGroupConnectionDistinctArgs = {
  field: ContentfulAuthorFieldsEnum;
};

export type ContentfulAuthorGroupConnectionGroupArgs = {
  field: ContentfulAuthorFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulAuthorGroupConnectionMaxArgs = {
  field: ContentfulAuthorFieldsEnum;
};

export type ContentfulAuthorGroupConnectionMinArgs = {
  field: ContentfulAuthorFieldsEnum;
};

export type ContentfulAuthorGroupConnectionSumArgs = {
  field: ContentfulAuthorFieldsEnum;
};

export type ContentfulAuthorSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulAuthorFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulAuthorSys = {
  __typename?: "ContentfulAuthorSys";
  contentType?: Maybe<ContentfulAuthorSysContentType>;
  revision?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["String"]>;
};

export type ContentfulAuthorSysContentType = {
  __typename?: "ContentfulAuthorSysContentType";
  sys?: Maybe<ContentfulAuthorSysContentTypeSys>;
};

export type ContentfulAuthorSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulAuthorSysContentTypeSysFilterInput>;
};

export type ContentfulAuthorSysContentTypeSys = {
  __typename?: "ContentfulAuthorSysContentTypeSys";
  id?: Maybe<Scalars["String"]>;
  linkType?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

export type ContentfulAuthorSysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAuthorSysFilterInput = {
  contentType?: InputMaybe<ContentfulAuthorSysContentTypeFilterInput>;
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
    content?: Maybe<
      Array<Maybe<ContentfulAttentionBlockContentfulAuthorUnion>>
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

export type ContentfulPageFilterListInput = {
  elemMatch?: InputMaybe<ContentfulPageFilterInput>;
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
  allContentfulAttentionBlock: ContentfulAttentionBlockConnection;
  allContentfulAuthor: ContentfulAuthorConnection;
  allContentfulContentType: ContentfulContentTypeConnection;
  allContentfulEntry: ContentfulEntryConnection;
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
  contentfulAttentionBlock?: Maybe<ContentfulAttentionBlock>;
  contentfulAuthor?: Maybe<ContentfulAuthor>;
  contentfulContentType?: Maybe<ContentfulContentType>;
  contentfulEntry?: Maybe<ContentfulEntry>;
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

export type QueryAllContentfulAttentionBlockArgs = {
  filter?: InputMaybe<ContentfulAttentionBlockFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<ContentfulAttentionBlockSortInput>;
};

export type QueryAllContentfulAuthorArgs = {
  filter?: InputMaybe<ContentfulAuthorFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<ContentfulAuthorSortInput>;
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

export type QueryContentfulAttentionBlockArgs = {
  author?: InputMaybe<ContentfulAuthorFilterInput>;
  body?: InputMaybe<ContentfulAttentionBlockBodyFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  illustration?: InputMaybe<ContentfulAssetFilterInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  page?: InputMaybe<ContentfulPageFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAttentionBlockSysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type QueryContentfulAuthorArgs = {
  attentionblock?: InputMaybe<ContentfulAttentionBlockFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  page?: InputMaybe<ContentfulPageFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAuthorSysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
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

export type GetAllSiteContentQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllSiteContentQuery = {
  __typename?: "Query";
  allContentfulPage: {
    __typename?: "ContentfulPageConnection";
    nodes: Array<{
      __typename?: "ContentfulPage";
      title?: string | null;
      url?: string | null;
      node_locale: string;
      sys?: {
        __typename?: "ContentfulPageSys";
        revision?: number | null;
        contentType?: {
          __typename?: "ContentfulPageSysContentType";
          sys?: {
            __typename?: "ContentfulPageSysContentTypeSys";
            id?: string | null;
            type?: string | null;
          } | null;
        } | null;
      } | null;
      description?: {
        __typename?: "contentfulPageDescriptionTextNode";
        description?: string | null;
        sys?: {
          __typename?: "contentfulPageDescriptionTextNodeSys";
          type?: string | null;
        } | null;
      } | null;
      content?: Array<
        | {
            __typename?: "ContentfulAttentionBlock";
            id: string;
            title?: string | null;
          }
        | { __typename?: "ContentfulAuthor"; id: string; name?: string | null }
        | null
      > | null;
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
export const GetAllSiteContentDocument = `
    query GetAllSiteContent {
  allContentfulPage {
    nodes {
      title
      url
      node_locale
      sys {
        contentType {
          sys {
            id
            type
          }
        }
        revision
      }
      description {
        description
        sys {
          type
        }
      }
      content {
        ... on ContentfulAttentionBlock {
          id
          title
        }
        ... on ContentfulAuthor {
          id
          name
        }
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
