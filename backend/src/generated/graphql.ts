import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Customer, VendureEntity, RequestContext } from '@vendure/core';
import { SubscribedDevices } from '../plugins/push-notif/entities/subscribed-devices.entity';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string | number; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: Date; output: Date; }
  JSON: { input: any; output: any; }
  Money: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type AddFulfillmentToOrderResult = CreateFulfillmentError | EmptyOrderLineSelectionError | Fulfillment | FulfillmentStateTransitionError | InsufficientStockOnHandError | InvalidFulfillmentHandlerError | ItemsAlreadyFulfilledError;

export type AddItemInput = {
  productVariantId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};

export type AddItemToDraftOrderInput = {
  productVariantId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};

export type AddManualPaymentToOrderResult = ManualPaymentStateError | Order;

export type AddNoteToCustomerInput = {
  id: Scalars['ID']['input'];
  isPublic: Scalars['Boolean']['input'];
  note: Scalars['String']['input'];
};

export type AddNoteToOrderInput = {
  id: Scalars['ID']['input'];
  isPublic: Scalars['Boolean']['input'];
  note: Scalars['String']['input'];
};

export type Address = Node & {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  country: Country;
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  defaultBillingAddress?: Maybe<Scalars['Boolean']['output']>;
  defaultShippingAddress?: Maybe<Scalars['Boolean']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Scalars['String']['output']>;
  streetLine1: Scalars['String']['output'];
  streetLine2?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type AdjustDraftOrderLineInput = {
  orderLineId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};

export type Adjustment = {
  __typename?: 'Adjustment';
  adjustmentSource: Scalars['String']['output'];
  amount: Scalars['Money']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  type: AdjustmentType;
};

export type AdjustmentType =
  | 'DISTRIBUTED_ORDER_PROMOTION'
  | 'OTHER'
  | 'PROMOTION';

export type Administrator = Node & {
  __typename?: 'Administrator';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  emailAddress: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type AdministratorFilterParameter = {
  _and?: InputMaybe<Array<AdministratorFilterParameter>>;
  _or?: InputMaybe<Array<AdministratorFilterParameter>>;
  createdAt?: InputMaybe<DateOperators>;
  emailAddress?: InputMaybe<StringOperators>;
  firstName?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  lastName?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type AdministratorList = PaginatedList & {
  __typename?: 'AdministratorList';
  items: Array<Administrator>;
  totalItems: Scalars['Int']['output'];
};

export type AdministratorListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<AdministratorFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<AdministratorSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type AdministratorPaymentInput = {
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
};

export type AdministratorRefundInput = {
  /**
   * The amount to be refunded to this particular Payment. This was introduced in
   * v2.2.0 as the preferred way to specify the refund amount. The `lines`, `shipping` and `adjustment`
   * fields will be removed in a future version.
   */
  amount?: InputMaybe<Scalars['Money']['input']>;
  paymentId: Scalars['ID']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type AdministratorSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  emailAddress?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type Allocation = Node & StockMovement & {
  __typename?: 'Allocation';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  orderLine: OrderLine;
  productVariant: ProductVariant;
  quantity: Scalars['Int']['output'];
  type: StockMovementType;
  updatedAt: Scalars['DateTime']['output'];
};

/** Returned if an attempting to refund an OrderItem which has already been refunded */
export type AlreadyRefundedError = ErrorResult & {
  __typename?: 'AlreadyRefundedError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  refundId: Scalars['ID']['output'];
};

export type ApplyCouponCodeResult = CouponCodeExpiredError | CouponCodeInvalidError | CouponCodeLimitError | Order;

export type Asset = Node & {
  __typename?: 'Asset';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  fileSize: Scalars['Int']['output'];
  focalPoint?: Maybe<Coordinate>;
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  mimeType: Scalars['String']['output'];
  name: Scalars['String']['output'];
  preview: Scalars['String']['output'];
  source: Scalars['String']['output'];
  tags: Array<Tag>;
  type: AssetType;
  updatedAt: Scalars['DateTime']['output'];
  width: Scalars['Int']['output'];
};

export type AssetFilterParameter = {
  _and?: InputMaybe<Array<AssetFilterParameter>>;
  _or?: InputMaybe<Array<AssetFilterParameter>>;
  createdAt?: InputMaybe<DateOperators>;
  fileSize?: InputMaybe<NumberOperators>;
  height?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  mimeType?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  preview?: InputMaybe<StringOperators>;
  source?: InputMaybe<StringOperators>;
  type?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  width?: InputMaybe<NumberOperators>;
};

export type AssetList = PaginatedList & {
  __typename?: 'AssetList';
  items: Array<Asset>;
  totalItems: Scalars['Int']['output'];
};

export type AssetListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<AssetFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<AssetSortParameter>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tagsOperator?: InputMaybe<LogicalOperator>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  fileSize?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mimeType?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  preview?: InputMaybe<SortOrder>;
  source?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type AssetType =
  | 'BINARY'
  | 'IMAGE'
  | 'VIDEO';

export type AssignAssetsToChannelInput = {
  assetIds: Array<Scalars['ID']['input']>;
  channelId: Scalars['ID']['input'];
};

export type AssignCollectionsToChannelInput = {
  channelId: Scalars['ID']['input'];
  collectionIds: Array<Scalars['ID']['input']>;
};

export type AssignFacetsToChannelInput = {
  channelId: Scalars['ID']['input'];
  facetIds: Array<Scalars['ID']['input']>;
};

export type AssignPaymentMethodsToChannelInput = {
  channelId: Scalars['ID']['input'];
  paymentMethodIds: Array<Scalars['ID']['input']>;
};

export type AssignProductVariantsToChannelInput = {
  channelId: Scalars['ID']['input'];
  priceFactor?: InputMaybe<Scalars['Float']['input']>;
  productVariantIds: Array<Scalars['ID']['input']>;
};

export type AssignProductsToChannelInput = {
  channelId: Scalars['ID']['input'];
  priceFactor?: InputMaybe<Scalars['Float']['input']>;
  productIds: Array<Scalars['ID']['input']>;
};

export type AssignPromotionsToChannelInput = {
  channelId: Scalars['ID']['input'];
  promotionIds: Array<Scalars['ID']['input']>;
};

export type AssignShippingMethodsToChannelInput = {
  channelId: Scalars['ID']['input'];
  shippingMethodIds: Array<Scalars['ID']['input']>;
};

export type AssignStockLocationsToChannelInput = {
  channelId: Scalars['ID']['input'];
  stockLocationIds: Array<Scalars['ID']['input']>;
};

export type AuthenticationInput = {
  native?: InputMaybe<NativeAuthInput>;
};

export type AuthenticationMethod = Node & {
  __typename?: 'AuthenticationMethod';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  strategy: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type AuthenticationResult = CurrentUser | InvalidCredentialsError;

export type BooleanCustomFieldConfig = CustomField & {
  __typename?: 'BooleanCustomFieldConfig';
  deprecated?: Maybe<Scalars['Boolean']['output']>;
  deprecationReason?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  requiresPermission?: Maybe<Array<Permission>>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

/** Operators for filtering on a list of Boolean fields */
export type BooleanListOperators = {
  inList: Scalars['Boolean']['input'];
};

/** Operators for filtering on a Boolean field */
export type BooleanOperators = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BooleanStructFieldConfig = StructField & {
  __typename?: 'BooleanStructFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

/** Returned if an attempting to cancel lines from an Order which is still active */
export type CancelActiveOrderError = ErrorResult & {
  __typename?: 'CancelActiveOrderError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  orderState: Scalars['String']['output'];
};

export type CancelOrderInput = {
  /** Specify whether the shipping charges should also be cancelled. Defaults to false */
  cancelShipping?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally specify which OrderLines to cancel. If not provided, all OrderLines will be cancelled */
  lines?: InputMaybe<Array<OrderLineInput>>;
  /** The id of the order to be cancelled */
  orderId: Scalars['ID']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type CancelOrderResult = CancelActiveOrderError | EmptyOrderLineSelectionError | MultipleOrderError | Order | OrderStateTransitionError | QuantityTooGreatError;

/** Returned if the Payment cancellation fails */
export type CancelPaymentError = ErrorResult & {
  __typename?: 'CancelPaymentError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  paymentErrorMessage: Scalars['String']['output'];
};

export type CancelPaymentResult = CancelPaymentError | Payment | PaymentStateTransitionError;

export type Cancellation = Node & StockMovement & {
  __typename?: 'Cancellation';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  orderLine: OrderLine;
  productVariant: ProductVariant;
  quantity: Scalars['Int']['output'];
  type: StockMovementType;
  updatedAt: Scalars['DateTime']['output'];
};

export type Channel = Node & {
  __typename?: 'Channel';
  availableCurrencyCodes: Array<CurrencyCode>;
  availableLanguageCodes?: Maybe<Array<LanguageCode>>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  /** @deprecated Use defaultCurrencyCode instead */
  currencyCode: CurrencyCode;
  customFields?: Maybe<Scalars['JSON']['output']>;
  defaultCurrencyCode: CurrencyCode;
  defaultLanguageCode: LanguageCode;
  defaultShippingZone?: Maybe<Zone>;
  defaultTaxZone?: Maybe<Zone>;
  id: Scalars['ID']['output'];
  /** Not yet used - will be implemented in a future release. */
  outOfStockThreshold?: Maybe<Scalars['Int']['output']>;
  pricesIncludeTax: Scalars['Boolean']['output'];
  seller?: Maybe<Seller>;
  token: Scalars['String']['output'];
  /** Not yet used - will be implemented in a future release. */
  trackInventory?: Maybe<Scalars['Boolean']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

/**
 * Returned when the default LanguageCode of a Channel is no longer found in the `availableLanguages`
 * of the GlobalSettings
 */
export type ChannelDefaultLanguageError = ErrorResult & {
  __typename?: 'ChannelDefaultLanguageError';
  channelCode: Scalars['String']['output'];
  errorCode: ErrorCode;
  language: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type ChannelFilterParameter = {
  _and?: InputMaybe<Array<ChannelFilterParameter>>;
  _or?: InputMaybe<Array<ChannelFilterParameter>>;
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  currencyCode?: InputMaybe<StringOperators>;
  defaultCurrencyCode?: InputMaybe<StringOperators>;
  defaultLanguageCode?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  outOfStockThreshold?: InputMaybe<NumberOperators>;
  pricesIncludeTax?: InputMaybe<BooleanOperators>;
  token?: InputMaybe<StringOperators>;
  trackInventory?: InputMaybe<BooleanOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type ChannelList = PaginatedList & {
  __typename?: 'ChannelList';
  items: Array<Channel>;
  totalItems: Scalars['Int']['output'];
};

export type ChannelListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ChannelFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ChannelSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type ChannelSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  outOfStockThreshold?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type Collection = Node & {
  __typename?: 'Collection';
  assets: Array<Asset>;
  breadcrumbs: Array<CollectionBreadcrumb>;
  children?: Maybe<Array<Collection>>;
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  featuredAsset?: Maybe<Asset>;
  filters: Array<ConfigurableOperation>;
  id: Scalars['ID']['output'];
  inheritFilters: Scalars['Boolean']['output'];
  isPrivate: Scalars['Boolean']['output'];
  languageCode?: Maybe<LanguageCode>;
  name: Scalars['String']['output'];
  parent?: Maybe<Collection>;
  parentId: Scalars['ID']['output'];
  position: Scalars['Int']['output'];
  productVariants: ProductVariantList;
  slug: Scalars['String']['output'];
  translations: Array<CollectionTranslation>;
  updatedAt: Scalars['DateTime']['output'];
};


export type CollectionProductVariantsArgs = {
  options?: InputMaybe<ProductVariantListOptions>;
};

export type CollectionBreadcrumb = {
  __typename?: 'CollectionBreadcrumb';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type CollectionFilterParameter = {
  _and?: InputMaybe<Array<CollectionFilterParameter>>;
  _or?: InputMaybe<Array<CollectionFilterParameter>>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  inheritFilters?: InputMaybe<BooleanOperators>;
  isPrivate?: InputMaybe<BooleanOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  parentId?: InputMaybe<IdOperators>;
  position?: InputMaybe<NumberOperators>;
  slug?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type CollectionList = PaginatedList & {
  __typename?: 'CollectionList';
  items: Array<Collection>;
  totalItems: Scalars['Int']['output'];
};

export type CollectionListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<CollectionFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<CollectionSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
  topLevelOnly?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * Which Collections are present in the products returned
 * by the search, and in what quantity.
 */
export type CollectionResult = {
  __typename?: 'CollectionResult';
  collection: Collection;
  count: Scalars['Int']['output'];
};

export type CollectionSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parentId?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CollectionTranslation = {
  __typename?: 'CollectionTranslation';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ConfigArg = {
  __typename?: 'ConfigArg';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ConfigArgDefinition = {
  __typename?: 'ConfigArgDefinition';
  defaultValue?: Maybe<Scalars['JSON']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  required: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type ConfigArgInput = {
  name: Scalars['String']['input'];
  /** A JSON stringified representation of the actual value */
  value: Scalars['String']['input'];
};

export type ConfigurableOperation = {
  __typename?: 'ConfigurableOperation';
  args: Array<ConfigArg>;
  code: Scalars['String']['output'];
};

export type ConfigurableOperationDefinition = {
  __typename?: 'ConfigurableOperationDefinition';
  args: Array<ConfigArgDefinition>;
  code: Scalars['String']['output'];
  description: Scalars['String']['output'];
};

export type ConfigurableOperationInput = {
  arguments: Array<ConfigArgInput>;
  code: Scalars['String']['input'];
};

export type Coordinate = {
  __typename?: 'Coordinate';
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
};

export type CoordinateInput = {
  x: Scalars['Float']['input'];
  y: Scalars['Float']['input'];
};

/**
 * A Country of the world which your shop operates in.
 *
 * The `code` field is typically a 2-character ISO code such as "GB", "US", "DE" etc. This code is used in certain inputs such as
 * `UpdateAddressInput` and `CreateAddressInput` to specify the country.
 */
export type Country = Node & Region & {
  __typename?: 'Country';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  parent?: Maybe<Region>;
  parentId?: Maybe<Scalars['ID']['output']>;
  translations: Array<RegionTranslation>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CountryFilterParameter = {
  _and?: InputMaybe<Array<CountryFilterParameter>>;
  _or?: InputMaybe<Array<CountryFilterParameter>>;
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  parentId?: InputMaybe<IdOperators>;
  type?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type CountryList = PaginatedList & {
  __typename?: 'CountryList';
  items: Array<Country>;
  totalItems: Scalars['Int']['output'];
};

export type CountryListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<CountryFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<CountrySortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type CountrySortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parentId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CountryTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Returned if the provided coupon code is invalid */
export type CouponCodeExpiredError = ErrorResult & {
  __typename?: 'CouponCodeExpiredError';
  couponCode: Scalars['String']['output'];
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Returned if the provided coupon code is invalid */
export type CouponCodeInvalidError = ErrorResult & {
  __typename?: 'CouponCodeInvalidError';
  couponCode: Scalars['String']['output'];
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Returned if the provided coupon code is invalid */
export type CouponCodeLimitError = ErrorResult & {
  __typename?: 'CouponCodeLimitError';
  couponCode: Scalars['String']['output'];
  errorCode: ErrorCode;
  limit: Scalars['Int']['output'];
  message: Scalars['String']['output'];
};

/**
 * Input used to create an Address.
 *
 * The countryCode must correspond to a `code` property of a Country that has been defined in the
 * Vendure server. The `code` property is typically a 2-character ISO code such as "GB", "US", "DE" etc.
 * If an invalid code is passed, the mutation will fail.
 */
export type CreateAddressInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  countryCode: Scalars['String']['input'];
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  defaultBillingAddress?: InputMaybe<Scalars['Boolean']['input']>;
  defaultShippingAddress?: InputMaybe<Scalars['Boolean']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  streetLine1: Scalars['String']['input'];
  streetLine2?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAdministratorInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  emailAddress: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  roleIds: Array<Scalars['ID']['input']>;
};

export type CreateAssetInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  file: Scalars['Upload']['input'];
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CreateAssetResult = Asset | MimeTypeError;

export type CreateChannelInput = {
  availableCurrencyCodes?: InputMaybe<Array<CurrencyCode>>;
  availableLanguageCodes?: InputMaybe<Array<LanguageCode>>;
  code: Scalars['String']['input'];
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  defaultCurrencyCode?: InputMaybe<CurrencyCode>;
  defaultLanguageCode: LanguageCode;
  defaultShippingZoneId: Scalars['ID']['input'];
  defaultTaxZoneId: Scalars['ID']['input'];
  outOfStockThreshold?: InputMaybe<Scalars['Int']['input']>;
  pricesIncludeTax: Scalars['Boolean']['input'];
  sellerId?: InputMaybe<Scalars['ID']['input']>;
  token: Scalars['String']['input'];
  trackInventory?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateChannelResult = Channel | LanguageNotAvailableError;

export type CreateCollectionInput = {
  assetIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  featuredAssetId?: InputMaybe<Scalars['ID']['input']>;
  filters: Array<ConfigurableOperationInput>;
  inheritFilters?: InputMaybe<Scalars['Boolean']['input']>;
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  parentId?: InputMaybe<Scalars['ID']['input']>;
  translations: Array<CreateCollectionTranslationInput>;
};

export type CreateCollectionTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  description: Scalars['String']['input'];
  languageCode: LanguageCode;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type CreateCountryInput = {
  code: Scalars['String']['input'];
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  enabled: Scalars['Boolean']['input'];
  translations: Array<CountryTranslationInput>;
};

export type CreateCustomerGroupInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  customerIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  name: Scalars['String']['input'];
};

export type CreateCustomerInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  emailAddress: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCustomerResult = Customer | EmailAddressConflictError;

export type CreateFacetInput = {
  code: Scalars['String']['input'];
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  isPrivate: Scalars['Boolean']['input'];
  translations: Array<FacetTranslationInput>;
  values?: InputMaybe<Array<CreateFacetValueWithFacetInput>>;
};

export type CreateFacetValueInput = {
  code: Scalars['String']['input'];
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  facetId: Scalars['ID']['input'];
  translations: Array<FacetValueTranslationInput>;
};

export type CreateFacetValueWithFacetInput = {
  code: Scalars['String']['input'];
  translations: Array<FacetValueTranslationInput>;
};

/** Returned if an error is thrown in a FulfillmentHandler's createFulfillment method */
export type CreateFulfillmentError = ErrorResult & {
  __typename?: 'CreateFulfillmentError';
  errorCode: ErrorCode;
  fulfillmentHandlerError: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type CreateGroupOptionInput = {
  code: Scalars['String']['input'];
  translations: Array<ProductOptionGroupTranslationInput>;
};

export type CreatePaymentMethodInput = {
  checker?: InputMaybe<ConfigurableOperationInput>;
  code: Scalars['String']['input'];
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  enabled: Scalars['Boolean']['input'];
  handler: ConfigurableOperationInput;
  translations: Array<PaymentMethodTranslationInput>;
};

export type CreateProductInput = {
  assetIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  facetValueIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  featuredAssetId?: InputMaybe<Scalars['ID']['input']>;
  translations: Array<ProductTranslationInput>;
};

export type CreateProductOptionGroupInput = {
  code: Scalars['String']['input'];
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  options: Array<CreateGroupOptionInput>;
  translations: Array<ProductOptionGroupTranslationInput>;
};

export type CreateProductOptionInput = {
  code: Scalars['String']['input'];
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  productOptionGroupId: Scalars['ID']['input'];
  translations: Array<ProductOptionGroupTranslationInput>;
};

export type CreateProductVariantInput = {
  assetIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  facetValueIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  featuredAssetId?: InputMaybe<Scalars['ID']['input']>;
  optionIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  outOfStockThreshold?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Money']['input']>;
  prices?: InputMaybe<Array<InputMaybe<CreateProductVariantPriceInput>>>;
  productId: Scalars['ID']['input'];
  sku: Scalars['String']['input'];
  stockLevels?: InputMaybe<Array<StockLevelInput>>;
  stockOnHand?: InputMaybe<Scalars['Int']['input']>;
  taxCategoryId?: InputMaybe<Scalars['ID']['input']>;
  trackInventory?: InputMaybe<GlobalFlag>;
  translations: Array<ProductVariantTranslationInput>;
  useGlobalOutOfStockThreshold?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateProductVariantOptionInput = {
  code: Scalars['String']['input'];
  optionGroupId: Scalars['ID']['input'];
  translations: Array<ProductOptionTranslationInput>;
};

export type CreateProductVariantPriceInput = {
  currencyCode: CurrencyCode;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  price: Scalars['Money']['input'];
};

export type CreatePromotionInput = {
  actions: Array<ConfigurableOperationInput>;
  conditions: Array<ConfigurableOperationInput>;
  couponCode?: InputMaybe<Scalars['String']['input']>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  enabled: Scalars['Boolean']['input'];
  endsAt?: InputMaybe<Scalars['DateTime']['input']>;
  perCustomerUsageLimit?: InputMaybe<Scalars['Int']['input']>;
  startsAt?: InputMaybe<Scalars['DateTime']['input']>;
  translations: Array<PromotionTranslationInput>;
  usageLimit?: InputMaybe<Scalars['Int']['input']>;
};

export type CreatePromotionResult = MissingConditionsError | Promotion;

export type CreateProvinceInput = {
  code: Scalars['String']['input'];
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  enabled: Scalars['Boolean']['input'];
  translations: Array<ProvinceTranslationInput>;
};

export type CreateRoleInput = {
  channelIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  code: Scalars['String']['input'];
  description: Scalars['String']['input'];
  permissions: Array<Permission>;
};

export type CreateSellerInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
};

export type CreateShippingMethodInput = {
  calculator: ConfigurableOperationInput;
  checker: ConfigurableOperationInput;
  code: Scalars['String']['input'];
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  fulfillmentHandler: Scalars['String']['input'];
  translations: Array<ShippingMethodTranslationInput>;
};

export type CreateStockLocationInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateTagInput = {
  value: Scalars['String']['input'];
};

export type CreateTaxCategoryInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
};

export type CreateTaxRateInput = {
  categoryId: Scalars['ID']['input'];
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  customerGroupId?: InputMaybe<Scalars['ID']['input']>;
  enabled: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  value: Scalars['Float']['input'];
  zoneId: Scalars['ID']['input'];
};

export type CreateZoneInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  memberIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  name: Scalars['String']['input'];
};

/**
 * @description
 * ISO 4217 currency code
 *
 * @docsCategory common
 */
export type CurrencyCode =
  /** United Arab Emirates dirham */
  | 'AED'
  /** Afghan afghani */
  | 'AFN'
  /** Albanian lek */
  | 'ALL'
  /** Armenian dram */
  | 'AMD'
  /** Netherlands Antillean guilder */
  | 'ANG'
  /** Angolan kwanza */
  | 'AOA'
  /** Argentine peso */
  | 'ARS'
  /** Australian dollar */
  | 'AUD'
  /** Aruban florin */
  | 'AWG'
  /** Azerbaijani manat */
  | 'AZN'
  /** Bosnia and Herzegovina convertible mark */
  | 'BAM'
  /** Barbados dollar */
  | 'BBD'
  /** Bangladeshi taka */
  | 'BDT'
  /** Bulgarian lev */
  | 'BGN'
  /** Bahraini dinar */
  | 'BHD'
  /** Burundian franc */
  | 'BIF'
  /** Bermudian dollar */
  | 'BMD'
  /** Brunei dollar */
  | 'BND'
  /** Boliviano */
  | 'BOB'
  /** Brazilian real */
  | 'BRL'
  /** Bahamian dollar */
  | 'BSD'
  /** Bhutanese ngultrum */
  | 'BTN'
  /** Botswana pula */
  | 'BWP'
  /** Belarusian ruble */
  | 'BYN'
  /** Belize dollar */
  | 'BZD'
  /** Canadian dollar */
  | 'CAD'
  /** Congolese franc */
  | 'CDF'
  /** Swiss franc */
  | 'CHF'
  /** Chilean peso */
  | 'CLP'
  /** Renminbi (Chinese) yuan */
  | 'CNY'
  /** Colombian peso */
  | 'COP'
  /** Costa Rican colon */
  | 'CRC'
  /** Cuban convertible peso */
  | 'CUC'
  /** Cuban peso */
  | 'CUP'
  /** Cape Verde escudo */
  | 'CVE'
  /** Czech koruna */
  | 'CZK'
  /** Djiboutian franc */
  | 'DJF'
  /** Danish krone */
  | 'DKK'
  /** Dominican peso */
  | 'DOP'
  /** Algerian dinar */
  | 'DZD'
  /** Egyptian pound */
  | 'EGP'
  /** Eritrean nakfa */
  | 'ERN'
  /** Ethiopian birr */
  | 'ETB'
  /** Euro */
  | 'EUR'
  /** Fiji dollar */
  | 'FJD'
  /** Falkland Islands pound */
  | 'FKP'
  /** Pound sterling */
  | 'GBP'
  /** Georgian lari */
  | 'GEL'
  /** Ghanaian cedi */
  | 'GHS'
  /** Gibraltar pound */
  | 'GIP'
  /** Gambian dalasi */
  | 'GMD'
  /** Guinean franc */
  | 'GNF'
  /** Guatemalan quetzal */
  | 'GTQ'
  /** Guyanese dollar */
  | 'GYD'
  /** Hong Kong dollar */
  | 'HKD'
  /** Honduran lempira */
  | 'HNL'
  /** Croatian kuna */
  | 'HRK'
  /** Haitian gourde */
  | 'HTG'
  /** Hungarian forint */
  | 'HUF'
  /** Indonesian rupiah */
  | 'IDR'
  /** Israeli new shekel */
  | 'ILS'
  /** Indian rupee */
  | 'INR'
  /** Iraqi dinar */
  | 'IQD'
  /** Iranian rial */
  | 'IRR'
  /** Icelandic króna */
  | 'ISK'
  /** Jamaican dollar */
  | 'JMD'
  /** Jordanian dinar */
  | 'JOD'
  /** Japanese yen */
  | 'JPY'
  /** Kenyan shilling */
  | 'KES'
  /** Kyrgyzstani som */
  | 'KGS'
  /** Cambodian riel */
  | 'KHR'
  /** Comoro franc */
  | 'KMF'
  /** North Korean won */
  | 'KPW'
  /** South Korean won */
  | 'KRW'
  /** Kuwaiti dinar */
  | 'KWD'
  /** Cayman Islands dollar */
  | 'KYD'
  /** Kazakhstani tenge */
  | 'KZT'
  /** Lao kip */
  | 'LAK'
  /** Lebanese pound */
  | 'LBP'
  /** Sri Lankan rupee */
  | 'LKR'
  /** Liberian dollar */
  | 'LRD'
  /** Lesotho loti */
  | 'LSL'
  /** Libyan dinar */
  | 'LYD'
  /** Moroccan dirham */
  | 'MAD'
  /** Moldovan leu */
  | 'MDL'
  /** Malagasy ariary */
  | 'MGA'
  /** Macedonian denar */
  | 'MKD'
  /** Myanmar kyat */
  | 'MMK'
  /** Mongolian tögrög */
  | 'MNT'
  /** Macanese pataca */
  | 'MOP'
  /** Mauritanian ouguiya */
  | 'MRU'
  /** Mauritian rupee */
  | 'MUR'
  /** Maldivian rufiyaa */
  | 'MVR'
  /** Malawian kwacha */
  | 'MWK'
  /** Mexican peso */
  | 'MXN'
  /** Malaysian ringgit */
  | 'MYR'
  /** Mozambican metical */
  | 'MZN'
  /** Namibian dollar */
  | 'NAD'
  /** Nigerian naira */
  | 'NGN'
  /** Nicaraguan córdoba */
  | 'NIO'
  /** Norwegian krone */
  | 'NOK'
  /** Nepalese rupee */
  | 'NPR'
  /** New Zealand dollar */
  | 'NZD'
  /** Omani rial */
  | 'OMR'
  /** Panamanian balboa */
  | 'PAB'
  /** Peruvian sol */
  | 'PEN'
  /** Papua New Guinean kina */
  | 'PGK'
  /** Philippine peso */
  | 'PHP'
  /** Pakistani rupee */
  | 'PKR'
  /** Polish złoty */
  | 'PLN'
  /** Paraguayan guaraní */
  | 'PYG'
  /** Qatari riyal */
  | 'QAR'
  /** Romanian leu */
  | 'RON'
  /** Serbian dinar */
  | 'RSD'
  /** Russian ruble */
  | 'RUB'
  /** Rwandan franc */
  | 'RWF'
  /** Saudi riyal */
  | 'SAR'
  /** Solomon Islands dollar */
  | 'SBD'
  /** Seychelles rupee */
  | 'SCR'
  /** Sudanese pound */
  | 'SDG'
  /** Swedish krona/kronor */
  | 'SEK'
  /** Singapore dollar */
  | 'SGD'
  /** Saint Helena pound */
  | 'SHP'
  /** Sierra Leonean leone */
  | 'SLL'
  /** Somali shilling */
  | 'SOS'
  /** Surinamese dollar */
  | 'SRD'
  /** South Sudanese pound */
  | 'SSP'
  /** São Tomé and Príncipe dobra */
  | 'STN'
  /** Salvadoran colón */
  | 'SVC'
  /** Syrian pound */
  | 'SYP'
  /** Swazi lilangeni */
  | 'SZL'
  /** Thai baht */
  | 'THB'
  /** Tajikistani somoni */
  | 'TJS'
  /** Turkmenistan manat */
  | 'TMT'
  /** Tunisian dinar */
  | 'TND'
  /** Tongan paʻanga */
  | 'TOP'
  /** Turkish lira */
  | 'TRY'
  /** Trinidad and Tobago dollar */
  | 'TTD'
  /** New Taiwan dollar */
  | 'TWD'
  /** Tanzanian shilling */
  | 'TZS'
  /** Ukrainian hryvnia */
  | 'UAH'
  /** Ugandan shilling */
  | 'UGX'
  /** United States dollar */
  | 'USD'
  /** Uruguayan peso */
  | 'UYU'
  /** Uzbekistan som */
  | 'UZS'
  /** Venezuelan bolívar soberano */
  | 'VES'
  /** Vietnamese đồng */
  | 'VND'
  /** Vanuatu vatu */
  | 'VUV'
  /** Samoan tala */
  | 'WST'
  /** CFA franc BEAC */
  | 'XAF'
  /** East Caribbean dollar */
  | 'XCD'
  /** CFA franc BCEAO */
  | 'XOF'
  /** CFP franc (franc Pacifique) */
  | 'XPF'
  /** Yemeni rial */
  | 'YER'
  /** South African rand */
  | 'ZAR'
  /** Zambian kwacha */
  | 'ZMW'
  /** Zimbabwean dollar */
  | 'ZWL';

export type CurrentUser = {
  __typename?: 'CurrentUser';
  channels: Array<CurrentUserChannel>;
  id: Scalars['ID']['output'];
  identifier: Scalars['String']['output'];
};

export type CurrentUserChannel = {
  __typename?: 'CurrentUserChannel';
  code: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  permissions: Array<Permission>;
  token: Scalars['String']['output'];
};

export type CustomField = {
  deprecated?: Maybe<Scalars['Boolean']['output']>;
  deprecationReason?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  requiresPermission?: Maybe<Array<Permission>>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type CustomFieldConfig = BooleanCustomFieldConfig | DateTimeCustomFieldConfig | FloatCustomFieldConfig | IntCustomFieldConfig | LocaleStringCustomFieldConfig | LocaleTextCustomFieldConfig | RelationCustomFieldConfig | StringCustomFieldConfig | StructCustomFieldConfig | TextCustomFieldConfig;

/**
 * This type is deprecated in v2.2 in favor of the EntityCustomFields type,
 * which allows custom fields to be defined on user-supplied entities.
 */
export type CustomFields = {
  __typename?: 'CustomFields';
  Address: Array<CustomFieldConfig>;
  Administrator: Array<CustomFieldConfig>;
  Asset: Array<CustomFieldConfig>;
  Channel: Array<CustomFieldConfig>;
  Collection: Array<CustomFieldConfig>;
  Customer: Array<CustomFieldConfig>;
  CustomerGroup: Array<CustomFieldConfig>;
  Facet: Array<CustomFieldConfig>;
  FacetValue: Array<CustomFieldConfig>;
  Fulfillment: Array<CustomFieldConfig>;
  GlobalSettings: Array<CustomFieldConfig>;
  HistoryEntry: Array<CustomFieldConfig>;
  Order: Array<CustomFieldConfig>;
  OrderLine: Array<CustomFieldConfig>;
  Payment: Array<CustomFieldConfig>;
  PaymentMethod: Array<CustomFieldConfig>;
  Product: Array<CustomFieldConfig>;
  ProductOption: Array<CustomFieldConfig>;
  ProductOptionGroup: Array<CustomFieldConfig>;
  ProductVariant: Array<CustomFieldConfig>;
  ProductVariantPrice: Array<CustomFieldConfig>;
  Promotion: Array<CustomFieldConfig>;
  Refund: Array<CustomFieldConfig>;
  Region: Array<CustomFieldConfig>;
  Seller: Array<CustomFieldConfig>;
  Session: Array<CustomFieldConfig>;
  ShippingLine: Array<CustomFieldConfig>;
  ShippingMethod: Array<CustomFieldConfig>;
  StockLevel: Array<CustomFieldConfig>;
  StockLocation: Array<CustomFieldConfig>;
  StockMovement: Array<CustomFieldConfig>;
  TaxCategory: Array<CustomFieldConfig>;
  TaxRate: Array<CustomFieldConfig>;
  User: Array<CustomFieldConfig>;
  Zone: Array<CustomFieldConfig>;
};

export type Customer = Node & {
  __typename?: 'Customer';
  addresses?: Maybe<Array<Address>>;
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  emailAddress: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  groups: Array<CustomerGroup>;
  history: HistoryEntryList;
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  orders: OrderList;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
};


export type CustomerHistoryArgs = {
  options?: InputMaybe<HistoryEntryListOptions>;
};


export type CustomerOrdersArgs = {
  options?: InputMaybe<OrderListOptions>;
};

export type CustomerFilterParameter = {
  _and?: InputMaybe<Array<CustomerFilterParameter>>;
  _or?: InputMaybe<Array<CustomerFilterParameter>>;
  createdAt?: InputMaybe<DateOperators>;
  emailAddress?: InputMaybe<StringOperators>;
  firstName?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  lastName?: InputMaybe<StringOperators>;
  phoneNumber?: InputMaybe<StringOperators>;
  postalCode?: InputMaybe<StringOperators>;
  title?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type CustomerGroup = Node & {
  __typename?: 'CustomerGroup';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  customers: CustomerList;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type CustomerGroupCustomersArgs = {
  options?: InputMaybe<CustomerListOptions>;
};

export type CustomerGroupFilterParameter = {
  _and?: InputMaybe<Array<CustomerGroupFilterParameter>>;
  _or?: InputMaybe<Array<CustomerGroupFilterParameter>>;
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type CustomerGroupList = PaginatedList & {
  __typename?: 'CustomerGroupList';
  items: Array<CustomerGroup>;
  totalItems: Scalars['Int']['output'];
};

export type CustomerGroupListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<CustomerGroupFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<CustomerGroupSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type CustomerGroupSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CustomerList = PaginatedList & {
  __typename?: 'CustomerList';
  items: Array<Customer>;
  totalItems: Scalars['Int']['output'];
};

export type CustomerListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<CustomerFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<CustomerSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type CustomerSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  emailAddress?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CustomerWithTokens = {
  __typename?: 'CustomerWithTokens';
  activeTokensCount: Scalars['Int']['output'];
  customer: Customer;
  tokens: Array<SubscribedDevice>;
};

/** Operators for filtering on a list of Date fields */
export type DateListOperators = {
  inList: Scalars['DateTime']['input'];
};

/** Operators for filtering on a DateTime field */
export type DateOperators = {
  after?: InputMaybe<Scalars['DateTime']['input']>;
  before?: InputMaybe<Scalars['DateTime']['input']>;
  between?: InputMaybe<DateRange>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DateRange = {
  end: Scalars['DateTime']['input'];
  start: Scalars['DateTime']['input'];
};

/**
 * Expects the same validation formats as the `<input type="datetime-local">` HTML element.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local#Additional_attributes
 */
export type DateTimeCustomFieldConfig = CustomField & {
  __typename?: 'DateTimeCustomFieldConfig';
  deprecated?: Maybe<Scalars['Boolean']['output']>;
  deprecationReason?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  max?: Maybe<Scalars['String']['output']>;
  min?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  requiresPermission?: Maybe<Array<Permission>>;
  step?: Maybe<Scalars['Int']['output']>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

/**
 * Expects the same validation formats as the `<input type="datetime-local">` HTML element.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local#Additional_attributes
 */
export type DateTimeStructFieldConfig = StructField & {
  __typename?: 'DateTimeStructFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  max?: Maybe<Scalars['String']['output']>;
  min?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  step?: Maybe<Scalars['Int']['output']>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type DeleteAssetInput = {
  assetId: Scalars['ID']['input'];
  deleteFromAllChannels?: InputMaybe<Scalars['Boolean']['input']>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DeleteAssetsInput = {
  assetIds: Array<Scalars['ID']['input']>;
  deleteFromAllChannels?: InputMaybe<Scalars['Boolean']['input']>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DeleteStockLocationInput = {
  id: Scalars['ID']['input'];
  transferToLocationId?: InputMaybe<Scalars['ID']['input']>;
};

export type DeletionResponse = {
  __typename?: 'DeletionResponse';
  message?: Maybe<Scalars['String']['output']>;
  result: DeletionResult;
};

export type DeletionResult =
  /** The entity was successfully deleted */
  | 'DELETED'
  /** Deletion did not take place, reason given in message */
  | 'NOT_DELETED';

export type Discount = {
  __typename?: 'Discount';
  adjustmentSource: Scalars['String']['output'];
  amount: Scalars['Money']['output'];
  amountWithTax: Scalars['Money']['output'];
  description: Scalars['String']['output'];
  type: AdjustmentType;
};

export type DuplicateEntityError = ErrorResult & {
  __typename?: 'DuplicateEntityError';
  duplicationError: Scalars['String']['output'];
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type DuplicateEntityInput = {
  duplicatorInput: ConfigurableOperationInput;
  entityId: Scalars['ID']['input'];
  entityName: Scalars['String']['input'];
};

export type DuplicateEntityResult = DuplicateEntityError | DuplicateEntitySuccess;

export type DuplicateEntitySuccess = {
  __typename?: 'DuplicateEntitySuccess';
  newEntityId: Scalars['ID']['output'];
};

/** Returned when attempting to create a Customer with an email address already registered to an existing User. */
export type EmailAddressConflictError = ErrorResult & {
  __typename?: 'EmailAddressConflictError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Returned if no OrderLines have been specified for the operation */
export type EmptyOrderLineSelectionError = ErrorResult & {
  __typename?: 'EmptyOrderLineSelectionError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type EntityCustomFields = {
  __typename?: 'EntityCustomFields';
  customFields: Array<CustomFieldConfig>;
  entityName: Scalars['String']['output'];
};

export type EntityDuplicatorDefinition = {
  __typename?: 'EntityDuplicatorDefinition';
  args: Array<ConfigArgDefinition>;
  code: Scalars['String']['output'];
  description: Scalars['String']['output'];
  forEntities: Array<Scalars['String']['output']>;
  requiresPermission: Array<Permission>;
};

export type ErrorCode =
  | 'ALREADY_REFUNDED_ERROR'
  | 'CANCEL_ACTIVE_ORDER_ERROR'
  | 'CANCEL_PAYMENT_ERROR'
  | 'CHANNEL_DEFAULT_LANGUAGE_ERROR'
  | 'COUPON_CODE_EXPIRED_ERROR'
  | 'COUPON_CODE_INVALID_ERROR'
  | 'COUPON_CODE_LIMIT_ERROR'
  | 'CREATE_FULFILLMENT_ERROR'
  | 'DUPLICATE_ENTITY_ERROR'
  | 'EMAIL_ADDRESS_CONFLICT_ERROR'
  | 'EMPTY_ORDER_LINE_SELECTION_ERROR'
  | 'FACET_IN_USE_ERROR'
  | 'FULFILLMENT_STATE_TRANSITION_ERROR'
  | 'GUEST_CHECKOUT_ERROR'
  | 'INELIGIBLE_SHIPPING_METHOD_ERROR'
  | 'INSUFFICIENT_STOCK_ERROR'
  | 'INSUFFICIENT_STOCK_ON_HAND_ERROR'
  | 'INVALID_CREDENTIALS_ERROR'
  | 'INVALID_FULFILLMENT_HANDLER_ERROR'
  | 'ITEMS_ALREADY_FULFILLED_ERROR'
  | 'LANGUAGE_NOT_AVAILABLE_ERROR'
  | 'MANUAL_PAYMENT_STATE_ERROR'
  | 'MIME_TYPE_ERROR'
  | 'MISSING_CONDITIONS_ERROR'
  | 'MULTIPLE_ORDER_ERROR'
  | 'NATIVE_AUTH_STRATEGY_ERROR'
  | 'NEGATIVE_QUANTITY_ERROR'
  | 'NOTHING_TO_REFUND_ERROR'
  | 'NO_ACTIVE_ORDER_ERROR'
  | 'NO_CHANGES_SPECIFIED_ERROR'
  | 'ORDER_INTERCEPTOR_ERROR'
  | 'ORDER_LIMIT_ERROR'
  | 'ORDER_MODIFICATION_ERROR'
  | 'ORDER_MODIFICATION_STATE_ERROR'
  | 'ORDER_STATE_TRANSITION_ERROR'
  | 'PAYMENT_METHOD_MISSING_ERROR'
  | 'PAYMENT_ORDER_MISMATCH_ERROR'
  | 'PAYMENT_STATE_TRANSITION_ERROR'
  | 'PRODUCT_OPTION_IN_USE_ERROR'
  | 'QUANTITY_TOO_GREAT_ERROR'
  | 'REFUND_AMOUNT_ERROR'
  | 'REFUND_ORDER_STATE_ERROR'
  | 'REFUND_PAYMENT_ID_MISSING_ERROR'
  | 'REFUND_STATE_TRANSITION_ERROR'
  | 'SETTLE_PAYMENT_ERROR'
  | 'UNKNOWN_ERROR';

export type ErrorResult = {
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type Facet = Node & {
  __typename?: 'Facet';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  isPrivate: Scalars['Boolean']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  translations: Array<FacetTranslation>;
  updatedAt: Scalars['DateTime']['output'];
  /** Returns a paginated, sortable, filterable list of the Facet's values. Added in v2.1.0. */
  valueList: FacetValueList;
  values: Array<FacetValue>;
};


export type FacetValueListArgs = {
  options?: InputMaybe<FacetValueListOptions>;
};

export type FacetFilterParameter = {
  _and?: InputMaybe<Array<FacetFilterParameter>>;
  _or?: InputMaybe<Array<FacetFilterParameter>>;
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  isPrivate?: InputMaybe<BooleanOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type FacetInUseError = ErrorResult & {
  __typename?: 'FacetInUseError';
  errorCode: ErrorCode;
  facetCode: Scalars['String']['output'];
  message: Scalars['String']['output'];
  productCount: Scalars['Int']['output'];
  variantCount: Scalars['Int']['output'];
};

export type FacetList = PaginatedList & {
  __typename?: 'FacetList';
  items: Array<Facet>;
  totalItems: Scalars['Int']['output'];
};

export type FacetListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<FacetFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<FacetSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type FacetSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FacetTranslation = {
  __typename?: 'FacetTranslation';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type FacetTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FacetValue = Node & {
  __typename?: 'FacetValue';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  facet: Facet;
  facetId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  translations: Array<FacetValueTranslation>;
  updatedAt: Scalars['DateTime']['output'];
};

/**
 * Used to construct boolean expressions for filtering search results
 * by FacetValue ID. Examples:
 *
 * * ID=1 OR ID=2: `{ facetValueFilters: [{ or: [1,2] }] }`
 * * ID=1 AND ID=2: `{ facetValueFilters: [{ and: 1 }, { and: 2 }] }`
 * * ID=1 AND (ID=2 OR ID=3): `{ facetValueFilters: [{ and: 1 }, { or: [2,3] }] }`
 */
export type FacetValueFilterInput = {
  and?: InputMaybe<Scalars['ID']['input']>;
  or?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type FacetValueFilterParameter = {
  _and?: InputMaybe<Array<FacetValueFilterParameter>>;
  _or?: InputMaybe<Array<FacetValueFilterParameter>>;
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  facetId?: InputMaybe<IdOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type FacetValueList = PaginatedList & {
  __typename?: 'FacetValueList';
  items: Array<FacetValue>;
  totalItems: Scalars['Int']['output'];
};

export type FacetValueListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<FacetValueFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<FacetValueSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * Which FacetValues are present in the products returned
 * by the search, and in what quantity.
 */
export type FacetValueResult = {
  __typename?: 'FacetValueResult';
  count: Scalars['Int']['output'];
  facetValue: FacetValue;
};

export type FacetValueSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  facetId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FacetValueTranslation = {
  __typename?: 'FacetValueTranslation';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type FacetValueTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatCustomFieldConfig = CustomField & {
  __typename?: 'FloatCustomFieldConfig';
  deprecated?: Maybe<Scalars['Boolean']['output']>;
  deprecationReason?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  requiresPermission?: Maybe<Array<Permission>>;
  step?: Maybe<Scalars['Float']['output']>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type FloatStructFieldConfig = StructField & {
  __typename?: 'FloatStructFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  step?: Maybe<Scalars['Float']['output']>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type FulfillOrderInput = {
  handler: ConfigurableOperationInput;
  lines: Array<OrderLineInput>;
};

export type Fulfillment = Node & {
  __typename?: 'Fulfillment';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  lines: Array<FulfillmentLine>;
  method: Scalars['String']['output'];
  nextStates: Array<Scalars['String']['output']>;
  state: Scalars['String']['output'];
  /** @deprecated Use the `lines` field instead */
  summary: Array<FulfillmentLine>;
  trackingCode?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type FulfillmentLine = {
  __typename?: 'FulfillmentLine';
  fulfillment: Fulfillment;
  fulfillmentId: Scalars['ID']['output'];
  orderLine: OrderLine;
  orderLineId: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
};

/** Returned when there is an error in transitioning the Fulfillment state */
export type FulfillmentStateTransitionError = ErrorResult & {
  __typename?: 'FulfillmentStateTransitionError';
  errorCode: ErrorCode;
  fromState: Scalars['String']['output'];
  message: Scalars['String']['output'];
  toState: Scalars['String']['output'];
  transitionError: Scalars['String']['output'];
};

export type GlobalFlag =
  | 'FALSE'
  | 'INHERIT'
  | 'TRUE';

export type GlobalSettings = {
  __typename?: 'GlobalSettings';
  availableLanguages: Array<LanguageCode>;
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  outOfStockThreshold: Scalars['Int']['output'];
  serverConfig: ServerConfig;
  trackInventory: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

/** Returned when attempting to set the Customer on a guest checkout when the configured GuestCheckoutStrategy does not allow it. */
export type GuestCheckoutError = ErrorResult & {
  __typename?: 'GuestCheckoutError';
  errorCode: ErrorCode;
  errorDetail: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type HistoryEntry = Node & {
  __typename?: 'HistoryEntry';
  administrator?: Maybe<Administrator>;
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  data: Scalars['JSON']['output'];
  id: Scalars['ID']['output'];
  isPublic: Scalars['Boolean']['output'];
  type: HistoryEntryType;
  updatedAt: Scalars['DateTime']['output'];
};

export type HistoryEntryFilterParameter = {
  _and?: InputMaybe<Array<HistoryEntryFilterParameter>>;
  _or?: InputMaybe<Array<HistoryEntryFilterParameter>>;
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  isPublic?: InputMaybe<BooleanOperators>;
  type?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type HistoryEntryList = PaginatedList & {
  __typename?: 'HistoryEntryList';
  items: Array<HistoryEntry>;
  totalItems: Scalars['Int']['output'];
};

export type HistoryEntryListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<HistoryEntryFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<HistoryEntrySortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type HistoryEntrySortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type HistoryEntryType =
  | 'CUSTOMER_ADDED_TO_GROUP'
  | 'CUSTOMER_ADDRESS_CREATED'
  | 'CUSTOMER_ADDRESS_DELETED'
  | 'CUSTOMER_ADDRESS_UPDATED'
  | 'CUSTOMER_DETAIL_UPDATED'
  | 'CUSTOMER_EMAIL_UPDATE_REQUESTED'
  | 'CUSTOMER_EMAIL_UPDATE_VERIFIED'
  | 'CUSTOMER_NOTE'
  | 'CUSTOMER_PASSWORD_RESET_REQUESTED'
  | 'CUSTOMER_PASSWORD_RESET_VERIFIED'
  | 'CUSTOMER_PASSWORD_UPDATED'
  | 'CUSTOMER_REGISTERED'
  | 'CUSTOMER_REMOVED_FROM_GROUP'
  | 'CUSTOMER_VERIFIED'
  | 'ORDER_CANCELLATION'
  | 'ORDER_COUPON_APPLIED'
  | 'ORDER_COUPON_REMOVED'
  | 'ORDER_CUSTOMER_UPDATED'
  | 'ORDER_FULFILLMENT'
  | 'ORDER_FULFILLMENT_TRANSITION'
  | 'ORDER_MODIFIED'
  | 'ORDER_NOTE'
  | 'ORDER_PAYMENT_TRANSITION'
  | 'ORDER_REFUND_TRANSITION'
  | 'ORDER_STATE_TRANSITION';

/** Operators for filtering on a list of ID fields */
export type IdListOperators = {
  inList: Scalars['ID']['input'];
};

/** Operators for filtering on an ID field */
export type IdOperators = {
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  notEq?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ImportInfo = {
  __typename?: 'ImportInfo';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  imported: Scalars['Int']['output'];
  processed: Scalars['Int']['output'];
};

/** Returned when attempting to set a ShippingMethod for which the Order is not eligible */
export type IneligibleShippingMethodError = ErrorResult & {
  __typename?: 'IneligibleShippingMethodError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Returned when attempting to add more items to the Order than are available */
export type InsufficientStockError = ErrorResult & {
  __typename?: 'InsufficientStockError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  order: Order;
  quantityAvailable: Scalars['Int']['output'];
};

/**
 * Returned if attempting to create a Fulfillment when there is insufficient
 * stockOnHand of a ProductVariant to satisfy the requested quantity.
 */
export type InsufficientStockOnHandError = ErrorResult & {
  __typename?: 'InsufficientStockOnHandError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  productVariantId: Scalars['ID']['output'];
  productVariantName: Scalars['String']['output'];
  stockOnHand: Scalars['Int']['output'];
};

export type IntCustomFieldConfig = CustomField & {
  __typename?: 'IntCustomFieldConfig';
  deprecated?: Maybe<Scalars['Boolean']['output']>;
  deprecationReason?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  max?: Maybe<Scalars['Int']['output']>;
  min?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  requiresPermission?: Maybe<Array<Permission>>;
  step?: Maybe<Scalars['Int']['output']>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type IntStructFieldConfig = StructField & {
  __typename?: 'IntStructFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  max?: Maybe<Scalars['Int']['output']>;
  min?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  step?: Maybe<Scalars['Int']['output']>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

/** Returned if the user authentication credentials are not valid */
export type InvalidCredentialsError = ErrorResult & {
  __typename?: 'InvalidCredentialsError';
  authenticationError: Scalars['String']['output'];
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Returned if the specified FulfillmentHandler code is not valid */
export type InvalidFulfillmentHandlerError = ErrorResult & {
  __typename?: 'InvalidFulfillmentHandlerError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Returned if the specified items are already part of a Fulfillment */
export type ItemsAlreadyFulfilledError = ErrorResult & {
  __typename?: 'ItemsAlreadyFulfilledError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type Job = Node & {
  __typename?: 'Job';
  attempts: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  duration: Scalars['Int']['output'];
  error?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  isSettled: Scalars['Boolean']['output'];
  progress: Scalars['Float']['output'];
  queueName: Scalars['String']['output'];
  result?: Maybe<Scalars['JSON']['output']>;
  retries: Scalars['Int']['output'];
  settledAt?: Maybe<Scalars['DateTime']['output']>;
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  state: JobState;
};

export type JobBufferSize = {
  __typename?: 'JobBufferSize';
  bufferId: Scalars['String']['output'];
  size: Scalars['Int']['output'];
};

export type JobFilterParameter = {
  _and?: InputMaybe<Array<JobFilterParameter>>;
  _or?: InputMaybe<Array<JobFilterParameter>>;
  attempts?: InputMaybe<NumberOperators>;
  createdAt?: InputMaybe<DateOperators>;
  duration?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  isSettled?: InputMaybe<BooleanOperators>;
  progress?: InputMaybe<NumberOperators>;
  queueName?: InputMaybe<StringOperators>;
  retries?: InputMaybe<NumberOperators>;
  settledAt?: InputMaybe<DateOperators>;
  startedAt?: InputMaybe<DateOperators>;
  state?: InputMaybe<StringOperators>;
};

export type JobList = PaginatedList & {
  __typename?: 'JobList';
  items: Array<Job>;
  totalItems: Scalars['Int']['output'];
};

export type JobListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<JobFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<JobSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type JobQueue = {
  __typename?: 'JobQueue';
  name: Scalars['String']['output'];
  running: Scalars['Boolean']['output'];
};

export type JobSortParameter = {
  attempts?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  duration?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  progress?: InputMaybe<SortOrder>;
  queueName?: InputMaybe<SortOrder>;
  retries?: InputMaybe<SortOrder>;
  settledAt?: InputMaybe<SortOrder>;
  startedAt?: InputMaybe<SortOrder>;
};

/**
 * @description
 * The state of a Job in the JobQueue
 *
 * @docsCategory common
 */
export type JobState =
  | 'CANCELLED'
  | 'COMPLETED'
  | 'FAILED'
  | 'PENDING'
  | 'RETRYING'
  | 'RUNNING';

/**
 * @description
 * Languages in the form of a ISO 639-1 language code with optional
 * region or script modifier (e.g. de_AT). The selection available is based
 * on the [Unicode CLDR summary list](https://unicode-org.github.io/cldr-staging/charts/37/summary/root.html)
 * and includes the major spoken languages of the world and any widely-used variants.
 *
 * @docsCategory common
 */
export type LanguageCode =
  /** Afrikaans */
  | 'af'
  /** Akan */
  | 'ak'
  /** Amharic */
  | 'am'
  /** Arabic */
  | 'ar'
  /** Assamese */
  | 'as'
  /** Azerbaijani */
  | 'az'
  /** Belarusian */
  | 'be'
  /** Bulgarian */
  | 'bg'
  /** Bambara */
  | 'bm'
  /** Bangla */
  | 'bn'
  /** Tibetan */
  | 'bo'
  /** Breton */
  | 'br'
  /** Bosnian */
  | 'bs'
  /** Catalan */
  | 'ca'
  /** Chechen */
  | 'ce'
  /** Corsican */
  | 'co'
  /** Czech */
  | 'cs'
  /** Church Slavic */
  | 'cu'
  /** Welsh */
  | 'cy'
  /** Danish */
  | 'da'
  /** German */
  | 'de'
  /** Austrian German */
  | 'de_AT'
  /** Swiss High German */
  | 'de_CH'
  /** Dzongkha */
  | 'dz'
  /** Ewe */
  | 'ee'
  /** Greek */
  | 'el'
  /** English */
  | 'en'
  /** Australian English */
  | 'en_AU'
  /** Canadian English */
  | 'en_CA'
  /** British English */
  | 'en_GB'
  /** American English */
  | 'en_US'
  /** Esperanto */
  | 'eo'
  /** Spanish */
  | 'es'
  /** European Spanish */
  | 'es_ES'
  /** Mexican Spanish */
  | 'es_MX'
  /** Estonian */
  | 'et'
  /** Basque */
  | 'eu'
  /** Persian */
  | 'fa'
  /** Dari */
  | 'fa_AF'
  /** Fulah */
  | 'ff'
  /** Finnish */
  | 'fi'
  /** Faroese */
  | 'fo'
  /** French */
  | 'fr'
  /** Canadian French */
  | 'fr_CA'
  /** Swiss French */
  | 'fr_CH'
  /** Western Frisian */
  | 'fy'
  /** Irish */
  | 'ga'
  /** Scottish Gaelic */
  | 'gd'
  /** Galician */
  | 'gl'
  /** Gujarati */
  | 'gu'
  /** Manx */
  | 'gv'
  /** Hausa */
  | 'ha'
  /** Hebrew */
  | 'he'
  /** Hindi */
  | 'hi'
  /** Croatian */
  | 'hr'
  /** Haitian Creole */
  | 'ht'
  /** Hungarian */
  | 'hu'
  /** Armenian */
  | 'hy'
  /** Interlingua */
  | 'ia'
  /** Indonesian */
  | 'id'
  /** Igbo */
  | 'ig'
  /** Sichuan Yi */
  | 'ii'
  /** Icelandic */
  | 'is'
  /** Italian */
  | 'it'
  /** Japanese */
  | 'ja'
  /** Javanese */
  | 'jv'
  /** Georgian */
  | 'ka'
  /** Kikuyu */
  | 'ki'
  /** Kazakh */
  | 'kk'
  /** Kalaallisut */
  | 'kl'
  /** Khmer */
  | 'km'
  /** Kannada */
  | 'kn'
  /** Korean */
  | 'ko'
  /** Kashmiri */
  | 'ks'
  /** Kurdish */
  | 'ku'
  /** Cornish */
  | 'kw'
  /** Kyrgyz */
  | 'ky'
  /** Latin */
  | 'la'
  /** Luxembourgish */
  | 'lb'
  /** Ganda */
  | 'lg'
  /** Lingala */
  | 'ln'
  /** Lao */
  | 'lo'
  /** Lithuanian */
  | 'lt'
  /** Luba-Katanga */
  | 'lu'
  /** Latvian */
  | 'lv'
  /** Malagasy */
  | 'mg'
  /** Maori */
  | 'mi'
  /** Macedonian */
  | 'mk'
  /** Malayalam */
  | 'ml'
  /** Mongolian */
  | 'mn'
  /** Marathi */
  | 'mr'
  /** Malay */
  | 'ms'
  /** Maltese */
  | 'mt'
  /** Burmese */
  | 'my'
  /** Norwegian Bokmål */
  | 'nb'
  /** North Ndebele */
  | 'nd'
  /** Nepali */
  | 'ne'
  /** Dutch */
  | 'nl'
  /** Flemish */
  | 'nl_BE'
  /** Norwegian Nynorsk */
  | 'nn'
  /** Nyanja */
  | 'ny'
  /** Oromo */
  | 'om'
  /** Odia */
  | 'or'
  /** Ossetic */
  | 'os'
  /** Punjabi */
  | 'pa'
  /** Polish */
  | 'pl'
  /** Pashto */
  | 'ps'
  /** Portuguese */
  | 'pt'
  /** Brazilian Portuguese */
  | 'pt_BR'
  /** European Portuguese */
  | 'pt_PT'
  /** Quechua */
  | 'qu'
  /** Romansh */
  | 'rm'
  /** Rundi */
  | 'rn'
  /** Romanian */
  | 'ro'
  /** Moldavian */
  | 'ro_MD'
  /** Russian */
  | 'ru'
  /** Kinyarwanda */
  | 'rw'
  /** Sanskrit */
  | 'sa'
  /** Sindhi */
  | 'sd'
  /** Northern Sami */
  | 'se'
  /** Sango */
  | 'sg'
  /** Sinhala */
  | 'si'
  /** Slovak */
  | 'sk'
  /** Slovenian */
  | 'sl'
  /** Samoan */
  | 'sm'
  /** Shona */
  | 'sn'
  /** Somali */
  | 'so'
  /** Albanian */
  | 'sq'
  /** Serbian */
  | 'sr'
  /** Southern Sotho */
  | 'st'
  /** Sundanese */
  | 'su'
  /** Swedish */
  | 'sv'
  /** Swahili */
  | 'sw'
  /** Congo Swahili */
  | 'sw_CD'
  /** Tamil */
  | 'ta'
  /** Telugu */
  | 'te'
  /** Tajik */
  | 'tg'
  /** Thai */
  | 'th'
  /** Tigrinya */
  | 'ti'
  /** Turkmen */
  | 'tk'
  /** Tongan */
  | 'to'
  /** Turkish */
  | 'tr'
  /** Tatar */
  | 'tt'
  /** Uyghur */
  | 'ug'
  /** Ukrainian */
  | 'uk'
  /** Urdu */
  | 'ur'
  /** Uzbek */
  | 'uz'
  /** Vietnamese */
  | 'vi'
  /** Volapük */
  | 'vo'
  /** Wolof */
  | 'wo'
  /** Xhosa */
  | 'xh'
  /** Yiddish */
  | 'yi'
  /** Yoruba */
  | 'yo'
  /** Chinese */
  | 'zh'
  /** Simplified Chinese */
  | 'zh_Hans'
  /** Traditional Chinese */
  | 'zh_Hant'
  /** Zulu */
  | 'zu';

/** Returned if attempting to set a Channel's defaultLanguageCode to a language which is not enabled in GlobalSettings */
export type LanguageNotAvailableError = ErrorResult & {
  __typename?: 'LanguageNotAvailableError';
  errorCode: ErrorCode;
  languageCode: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type LocaleStringCustomFieldConfig = CustomField & {
  __typename?: 'LocaleStringCustomFieldConfig';
  deprecated?: Maybe<Scalars['Boolean']['output']>;
  deprecationReason?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  length?: Maybe<Scalars['Int']['output']>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  pattern?: Maybe<Scalars['String']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  requiresPermission?: Maybe<Array<Permission>>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type LocaleTextCustomFieldConfig = CustomField & {
  __typename?: 'LocaleTextCustomFieldConfig';
  deprecated?: Maybe<Scalars['Boolean']['output']>;
  deprecationReason?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  requiresPermission?: Maybe<Array<Permission>>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type LocalizedString = {
  __typename?: 'LocalizedString';
  languageCode: LanguageCode;
  value: Scalars['String']['output'];
};

export type LogicalOperator =
  | 'AND'
  | 'OR';

export type ManualPaymentInput = {
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  method: Scalars['String']['input'];
  orderId: Scalars['ID']['input'];
  transactionId?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Returned when a call to addManualPaymentToOrder is made but the Order
 * is not in the required state.
 */
export type ManualPaymentStateError = ErrorResult & {
  __typename?: 'ManualPaymentStateError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type MetricInterval =
  | 'Daily';

export type MetricSummary = {
  __typename?: 'MetricSummary';
  entries: Array<MetricSummaryEntry>;
  interval: MetricInterval;
  title: Scalars['String']['output'];
  type: MetricType;
};

export type MetricSummaryEntry = {
  __typename?: 'MetricSummaryEntry';
  label: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type MetricSummaryInput = {
  interval: MetricInterval;
  refresh?: InputMaybe<Scalars['Boolean']['input']>;
  types: Array<MetricType>;
};

export type MetricType =
  | 'AverageOrderValue'
  | 'OrderCount'
  | 'OrderTotal';

export type MimeTypeError = ErrorResult & {
  __typename?: 'MimeTypeError';
  errorCode: ErrorCode;
  fileName: Scalars['String']['output'];
  message: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
};

/** Returned if a PromotionCondition has neither a couponCode nor any conditions set */
export type MissingConditionsError = ErrorResult & {
  __typename?: 'MissingConditionsError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type ModifyOrderInput = {
  addItems?: InputMaybe<Array<AddItemInput>>;
  adjustOrderLines?: InputMaybe<Array<OrderLineInput>>;
  couponCodes?: InputMaybe<Array<Scalars['String']['input']>>;
  dryRun: Scalars['Boolean']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<ModifyOrderOptions>;
  orderId: Scalars['ID']['input'];
  /**
   * Deprecated in v2.2.0. Use `refunds` instead to allow multiple refunds to be
   * applied in the case that multiple payment methods have been used on the order.
   */
  refund?: InputMaybe<AdministratorRefundInput>;
  refunds?: InputMaybe<Array<AdministratorRefundInput>>;
  /** Added in v2.2 */
  shippingMethodIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  surcharges?: InputMaybe<Array<SurchargeInput>>;
  updateBillingAddress?: InputMaybe<UpdateOrderAddressInput>;
  updateShippingAddress?: InputMaybe<UpdateOrderAddressInput>;
};

export type ModifyOrderOptions = {
  freezePromotions?: InputMaybe<Scalars['Boolean']['input']>;
  recalculateShipping?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ModifyOrderResult = CouponCodeExpiredError | CouponCodeInvalidError | CouponCodeLimitError | IneligibleShippingMethodError | InsufficientStockError | NegativeQuantityError | NoChangesSpecifiedError | Order | OrderLimitError | OrderModificationStateError | PaymentMethodMissingError | RefundPaymentIdMissingError;

export type MoveCollectionInput = {
  collectionId: Scalars['ID']['input'];
  index: Scalars['Int']['input'];
  parentId: Scalars['ID']['input'];
};

/** Returned if an operation has specified OrderLines from multiple Orders */
export type MultipleOrderError = ErrorResult & {
  __typename?: 'MultipleOrderError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Add Customers to a CustomerGroup */
  addCustomersToGroup: CustomerGroup;
  addFulfillmentToOrder: AddFulfillmentToOrderResult;
  /** Adds an item to the draft Order. */
  addItemToDraftOrder: UpdateOrderItemsResult;
  /**
   * Used to manually create a new Payment against an Order.
   * This can be used by an Administrator when an Order is in the ArrangingPayment state.
   *
   * It is also used when a completed Order
   * has been modified (using `modifyOrder`) and the price has increased. The extra payment
   * can then be manually arranged by the administrator, and the details used to create a new
   * Payment.
   */
  addManualPaymentToOrder: AddManualPaymentToOrderResult;
  /** Add members to a Zone */
  addMembersToZone: Zone;
  addNoteToCustomer: Customer;
  addNoteToOrder: Order;
  /** Add an OptionGroup to a Product */
  addOptionGroupToProduct: Product;
  /** Adjusts a draft OrderLine. If custom fields are defined on the OrderLine entity, a third argument 'customFields' of type `OrderLineCustomFieldsInput` will be available. */
  adjustDraftOrderLine: UpdateOrderItemsResult;
  /** Applies the given coupon code to the draft Order */
  applyCouponCodeToDraftOrder: ApplyCouponCodeResult;
  /** Assign assets to channel */
  assignAssetsToChannel: Array<Asset>;
  /** Assigns Collections to the specified Channel */
  assignCollectionsToChannel: Array<Collection>;
  /** Assigns Facets to the specified Channel */
  assignFacetsToChannel: Array<Facet>;
  /** Assigns PaymentMethods to the specified Channel */
  assignPaymentMethodsToChannel: Array<PaymentMethod>;
  /** Assigns ProductVariants to the specified Channel */
  assignProductVariantsToChannel: Array<ProductVariant>;
  /** Assigns all ProductVariants of Product to the specified Channel */
  assignProductsToChannel: Array<Product>;
  /** Assigns Promotions to the specified Channel */
  assignPromotionsToChannel: Array<Promotion>;
  /** Assign a Role to an Administrator */
  assignRoleToAdministrator: Administrator;
  /** Assigns ShippingMethods to the specified Channel */
  assignShippingMethodsToChannel: Array<ShippingMethod>;
  /** Assigns StockLocations to the specified Channel */
  assignStockLocationsToChannel: Array<StockLocation>;
  /** Authenticates the user using a named authentication strategy */
  authenticate: AuthenticationResult;
  cancelJob: Job;
  cancelOrder: CancelOrderResult;
  cancelPayment: CancelPaymentResult;
  /** Create a new Administrator */
  createAdministrator: Administrator;
  /** Create a new Asset */
  createAssets: Array<CreateAssetResult>;
  /** Create a new Channel */
  createChannel: CreateChannelResult;
  /** Create a new Collection */
  createCollection: Collection;
  /** Create a new Country */
  createCountry: Country;
  /** Create a new Customer. If a password is provided, a new User will also be created an linked to the Customer. */
  createCustomer: CreateCustomerResult;
  /** Create a new Address and associate it with the Customer specified by customerId */
  createCustomerAddress: Address;
  /** Create a new CustomerGroup */
  createCustomerGroup: CustomerGroup;
  /** Creates a draft Order */
  createDraftOrder: Order;
  /** Create a new Facet */
  createFacet: Facet;
  /** Create a single FacetValue */
  createFacetValue: FacetValue;
  /** Create one or more FacetValues */
  createFacetValues: Array<FacetValue>;
  /** Create existing PaymentMethod */
  createPaymentMethod: PaymentMethod;
  /** Create a new Product */
  createProduct: Product;
  /** Create a new ProductOption within a ProductOptionGroup */
  createProductOption: ProductOption;
  /** Create a new ProductOptionGroup */
  createProductOptionGroup: ProductOptionGroup;
  /** Create a set of ProductVariants based on the OptionGroups assigned to the given Product */
  createProductVariants: Array<Maybe<ProductVariant>>;
  createPromotion: CreatePromotionResult;
  /** Create a new Province */
  createProvince: Province;
  /** Create a new Role */
  createRole: Role;
  /** Create a new Seller */
  createSeller: Seller;
  /** Create a new ShippingMethod */
  createShippingMethod: ShippingMethod;
  createStockLocation: StockLocation;
  /** Create a new Tag */
  createTag: Tag;
  /** Create a new TaxCategory */
  createTaxCategory: TaxCategory;
  /** Create a new TaxRate */
  createTaxRate: TaxRate;
  /** Create a new Zone */
  createZone: Zone;
  /** Delete an Administrator */
  deleteAdministrator: DeletionResponse;
  /** Delete multiple Administrators */
  deleteAdministrators: Array<DeletionResponse>;
  /** Delete an Asset */
  deleteAsset: DeletionResponse;
  /** Delete multiple Assets */
  deleteAssets: DeletionResponse;
  /** Delete a Channel */
  deleteChannel: DeletionResponse;
  /** Delete multiple Channels */
  deleteChannels: Array<DeletionResponse>;
  /** Delete a Collection and all of its descendants */
  deleteCollection: DeletionResponse;
  /** Delete multiple Collections and all of their descendants */
  deleteCollections: Array<DeletionResponse>;
  /** Delete multiple Countries */
  deleteCountries: Array<DeletionResponse>;
  /** Delete a Country */
  deleteCountry: DeletionResponse;
  /** Delete a Customer */
  deleteCustomer: DeletionResponse;
  /** Update an existing Address */
  deleteCustomerAddress: Success;
  /** Delete a CustomerGroup */
  deleteCustomerGroup: DeletionResponse;
  /** Delete multiple CustomerGroups */
  deleteCustomerGroups: Array<DeletionResponse>;
  deleteCustomerNote: DeletionResponse;
  /** Deletes Customers */
  deleteCustomers: Array<DeletionResponse>;
  /** Deletes a draft Order */
  deleteDraftOrder: DeletionResponse;
  /** Delete an existing Facet */
  deleteFacet: DeletionResponse;
  /** Delete one or more FacetValues */
  deleteFacetValues: Array<DeletionResponse>;
  /** Delete multiple existing Facets */
  deleteFacets: Array<DeletionResponse>;
  deleteOrderNote: DeletionResponse;
  /** Delete a PaymentMethod */
  deletePaymentMethod: DeletionResponse;
  /** Delete multiple PaymentMethods */
  deletePaymentMethods: Array<DeletionResponse>;
  /** Delete a Product */
  deleteProduct: DeletionResponse;
  /** Delete a ProductOption */
  deleteProductOption: DeletionResponse;
  /** Delete a ProductVariant */
  deleteProductVariant: DeletionResponse;
  /** Delete multiple ProductVariants */
  deleteProductVariants: Array<DeletionResponse>;
  /** Delete multiple Products */
  deleteProducts: Array<DeletionResponse>;
  deletePromotion: DeletionResponse;
  deletePromotions: Array<DeletionResponse>;
  /** Delete a Province */
  deleteProvince: DeletionResponse;
  /** Delete an existing Role */
  deleteRole: DeletionResponse;
  /** Delete multiple Roles */
  deleteRoles: Array<DeletionResponse>;
  /** Delete a Seller */
  deleteSeller: DeletionResponse;
  /** Delete multiple Sellers */
  deleteSellers: Array<DeletionResponse>;
  /** Delete a ShippingMethod */
  deleteShippingMethod: DeletionResponse;
  /** Delete multiple ShippingMethods */
  deleteShippingMethods: Array<DeletionResponse>;
  deleteStockLocation: DeletionResponse;
  deleteStockLocations: Array<DeletionResponse>;
  deleteSubscribedDevice: PushNotificationResponse;
  /** Delete an existing Tag */
  deleteTag: DeletionResponse;
  /** Deletes multiple TaxCategories */
  deleteTaxCategories: Array<DeletionResponse>;
  /** Deletes a TaxCategory */
  deleteTaxCategory: DeletionResponse;
  /** Delete a TaxRate */
  deleteTaxRate: DeletionResponse;
  /** Delete multiple TaxRates */
  deleteTaxRates: Array<DeletionResponse>;
  /** Delete a Zone */
  deleteZone: DeletionResponse;
  /** Delete a Zone */
  deleteZones: Array<DeletionResponse>;
  /**
   * Duplicate an existing entity using a specific EntityDuplicator.
   * Since v2.2.0.
   */
  duplicateEntity: DuplicateEntityResult;
  flushBufferedJobs: Success;
  importProducts?: Maybe<ImportInfo>;
  /**
   * Authenticates the user using the native authentication strategy. This mutation is an alias for authenticate({ native: { ... }})
   *
   * The `rememberMe` option applies when using cookie-based sessions, and if `true` it will set the maxAge of the session cookie
   * to 1 year.
   */
  login: NativeAuthenticationResult;
  logout: Success;
  /**
   * Allows an Order to be modified after it has been completed by the Customer. The Order must first
   * be in the `Modifying` state.
   */
  modifyOrder: ModifyOrderResult;
  /** Move a Collection to a different parent or index */
  moveCollection: Collection;
  refundOrder: RefundOrderResult;
  reindex: Job;
  /** Removes Collections from the specified Channel */
  removeCollectionsFromChannel: Array<Collection>;
  /** Removes the given coupon code from the draft Order */
  removeCouponCodeFromDraftOrder?: Maybe<Order>;
  /** Remove Customers from a CustomerGroup */
  removeCustomersFromGroup: CustomerGroup;
  /** Remove an OrderLine from the draft Order */
  removeDraftOrderLine: RemoveOrderItemsResult;
  /** Removes Facets from the specified Channel */
  removeFacetsFromChannel: Array<RemoveFacetFromChannelResult>;
  /** Remove members from a Zone */
  removeMembersFromZone: Zone;
  /**
   * Remove an OptionGroup from a Product. If the OptionGroup is in use by any ProductVariants
   * the mutation will return a ProductOptionInUseError, and the OptionGroup will not be removed.
   * Setting the `force` argument to `true` will override this and remove the OptionGroup anyway,
   * as well as removing any of the group's options from the Product's ProductVariants.
   */
  removeOptionGroupFromProduct: RemoveOptionGroupFromProductResult;
  /** Removes PaymentMethods from the specified Channel */
  removePaymentMethodsFromChannel: Array<PaymentMethod>;
  /** Removes ProductVariants from the specified Channel */
  removeProductVariantsFromChannel: Array<ProductVariant>;
  /** Removes all ProductVariants of Product from the specified Channel */
  removeProductsFromChannel: Array<Product>;
  /** Removes Promotions from the specified Channel */
  removePromotionsFromChannel: Array<Promotion>;
  /** Remove all settled jobs in the given queues older than the given date. Returns the number of jobs deleted. */
  removeSettledJobs: Scalars['Int']['output'];
  /** Removes ShippingMethods from the specified Channel */
  removeShippingMethodsFromChannel: Array<ShippingMethod>;
  /** Removes StockLocations from the specified Channel */
  removeStockLocationsFromChannel: Array<StockLocation>;
  runPendingSearchIndexUpdates: Success;
  runScheduledTask: Success;
  sendPushNotification: SendNotificationResult;
  setCustomerForDraftOrder: SetCustomerForDraftOrderResult;
  /** Sets the billing address for a draft Order */
  setDraftOrderBillingAddress: Order;
  /** Allows any custom fields to be set for the active order */
  setDraftOrderCustomFields: Order;
  /** Sets the shipping address for a draft Order */
  setDraftOrderShippingAddress: Order;
  /** Sets the shipping method by id, which can be obtained with the `eligibleShippingMethodsForDraftOrder` query */
  setDraftOrderShippingMethod: SetOrderShippingMethodResult;
  setOrderCustomFields?: Maybe<Order>;
  /** Allows a different Customer to be assigned to an Order. Added in v2.2.0. */
  setOrderCustomer?: Maybe<Order>;
  /** Set a single key-value pair (automatically scoped based on field configuration) */
  setSettingsStoreValue: SetSettingsStoreValueResult;
  /** Set multiple key-value pairs in a transaction (each automatically scoped) */
  setSettingsStoreValues: Array<SetSettingsStoreValueResult>;
  settlePayment: SettlePaymentResult;
  settleRefund: SettleRefundResult;
  transitionFulfillmentToState: TransitionFulfillmentToStateResult;
  transitionOrderToState?: Maybe<TransitionOrderToStateResult>;
  transitionPaymentToState: TransitionPaymentToStateResult;
  /** Unsets the billing address for a draft Order */
  unsetDraftOrderBillingAddress: Order;
  /** Unsets the shipping address for a draft Order */
  unsetDraftOrderShippingAddress: Order;
  /** Update the active (currently logged-in) Administrator */
  updateActiveAdministrator: Administrator;
  /** Update an existing Administrator */
  updateAdministrator: Administrator;
  /** Update an existing Asset */
  updateAsset: Asset;
  /** Update an existing Channel */
  updateChannel: UpdateChannelResult;
  /** Update an existing Collection */
  updateCollection: Collection;
  /** Update an existing Country */
  updateCountry: Country;
  /** Update an existing Customer */
  updateCustomer: UpdateCustomerResult;
  /** Update an existing Address */
  updateCustomerAddress: Address;
  /** Update an existing CustomerGroup */
  updateCustomerGroup: CustomerGroup;
  updateCustomerNote: HistoryEntry;
  /** Update an existing Facet */
  updateFacet: Facet;
  /** Update a single FacetValue */
  updateFacetValue: FacetValue;
  /** Update one or more FacetValues */
  updateFacetValues: Array<FacetValue>;
  updateGlobalSettings: UpdateGlobalSettingsResult;
  updateOrderNote: HistoryEntry;
  /** Update an existing PaymentMethod */
  updatePaymentMethod: PaymentMethod;
  /** Update an existing Product */
  updateProduct: Product;
  /** Create a new ProductOption within a ProductOptionGroup */
  updateProductOption: ProductOption;
  /** Update an existing ProductOptionGroup */
  updateProductOptionGroup: ProductOptionGroup;
  /** Update an existing ProductVariant */
  updateProductVariant: ProductVariant;
  /** Update existing ProductVariants */
  updateProductVariants: Array<Maybe<ProductVariant>>;
  /** Update multiple existing Products */
  updateProducts: Array<Product>;
  updatePromotion: UpdatePromotionResult;
  /** Update an existing Province */
  updateProvince: Province;
  /** Update an existing Role */
  updateRole: Role;
  updateScheduledTask: ScheduledTask;
  /** Update an existing Seller */
  updateSeller: Seller;
  /** Update an existing ShippingMethod */
  updateShippingMethod: ShippingMethod;
  updateStockLocation: StockLocation;
  updateSubscribedDevice: PushNotificationResponse;
  /** Update an existing Tag */
  updateTag: Tag;
  /** Update an existing TaxCategory */
  updateTaxCategory: TaxCategory;
  /** Update an existing TaxRate */
  updateTaxRate: TaxRate;
  /** Update an existing Zone */
  updateZone: Zone;
};


export type MutationAddCustomersToGroupArgs = {
  customerGroupId: Scalars['ID']['input'];
  customerIds: Array<Scalars['ID']['input']>;
};


export type MutationAddFulfillmentToOrderArgs = {
  input: FulfillOrderInput;
};


export type MutationAddItemToDraftOrderArgs = {
  input: AddItemToDraftOrderInput;
  orderId: Scalars['ID']['input'];
};


export type MutationAddManualPaymentToOrderArgs = {
  input: ManualPaymentInput;
};


export type MutationAddMembersToZoneArgs = {
  memberIds: Array<Scalars['ID']['input']>;
  zoneId: Scalars['ID']['input'];
};


export type MutationAddNoteToCustomerArgs = {
  input: AddNoteToCustomerInput;
};


export type MutationAddNoteToOrderArgs = {
  input: AddNoteToOrderInput;
};


export type MutationAddOptionGroupToProductArgs = {
  optionGroupId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
};


export type MutationAdjustDraftOrderLineArgs = {
  input: AdjustDraftOrderLineInput;
  orderId: Scalars['ID']['input'];
};


export type MutationApplyCouponCodeToDraftOrderArgs = {
  couponCode: Scalars['String']['input'];
  orderId: Scalars['ID']['input'];
};


export type MutationAssignAssetsToChannelArgs = {
  input: AssignAssetsToChannelInput;
};


export type MutationAssignCollectionsToChannelArgs = {
  input: AssignCollectionsToChannelInput;
};


export type MutationAssignFacetsToChannelArgs = {
  input: AssignFacetsToChannelInput;
};


export type MutationAssignPaymentMethodsToChannelArgs = {
  input: AssignPaymentMethodsToChannelInput;
};


export type MutationAssignProductVariantsToChannelArgs = {
  input: AssignProductVariantsToChannelInput;
};


export type MutationAssignProductsToChannelArgs = {
  input: AssignProductsToChannelInput;
};


export type MutationAssignPromotionsToChannelArgs = {
  input: AssignPromotionsToChannelInput;
};


export type MutationAssignRoleToAdministratorArgs = {
  administratorId: Scalars['ID']['input'];
  roleId: Scalars['ID']['input'];
};


export type MutationAssignShippingMethodsToChannelArgs = {
  input: AssignShippingMethodsToChannelInput;
};


export type MutationAssignStockLocationsToChannelArgs = {
  input: AssignStockLocationsToChannelInput;
};


export type MutationAuthenticateArgs = {
  input: AuthenticationInput;
  rememberMe?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCancelJobArgs = {
  jobId: Scalars['ID']['input'];
};


export type MutationCancelOrderArgs = {
  input: CancelOrderInput;
};


export type MutationCancelPaymentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCreateAdministratorArgs = {
  input: CreateAdministratorInput;
};


export type MutationCreateAssetsArgs = {
  input: Array<CreateAssetInput>;
};


export type MutationCreateChannelArgs = {
  input: CreateChannelInput;
};


export type MutationCreateCollectionArgs = {
  input: CreateCollectionInput;
};


export type MutationCreateCountryArgs = {
  input: CreateCountryInput;
};


export type MutationCreateCustomerArgs = {
  input: CreateCustomerInput;
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateCustomerAddressArgs = {
  customerId: Scalars['ID']['input'];
  input: CreateAddressInput;
};


export type MutationCreateCustomerGroupArgs = {
  input: CreateCustomerGroupInput;
};


export type MutationCreateFacetArgs = {
  input: CreateFacetInput;
};


export type MutationCreateFacetValueArgs = {
  input: CreateFacetValueInput;
};


export type MutationCreateFacetValuesArgs = {
  input: Array<CreateFacetValueInput>;
};


export type MutationCreatePaymentMethodArgs = {
  input: CreatePaymentMethodInput;
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationCreateProductOptionArgs = {
  input: CreateProductOptionInput;
};


export type MutationCreateProductOptionGroupArgs = {
  input: CreateProductOptionGroupInput;
};


export type MutationCreateProductVariantsArgs = {
  input: Array<CreateProductVariantInput>;
};


export type MutationCreatePromotionArgs = {
  input: CreatePromotionInput;
};


export type MutationCreateProvinceArgs = {
  input: CreateProvinceInput;
};


export type MutationCreateRoleArgs = {
  input: CreateRoleInput;
};


export type MutationCreateSellerArgs = {
  input: CreateSellerInput;
};


export type MutationCreateShippingMethodArgs = {
  input: CreateShippingMethodInput;
};


export type MutationCreateStockLocationArgs = {
  input: CreateStockLocationInput;
};


export type MutationCreateTagArgs = {
  input: CreateTagInput;
};


export type MutationCreateTaxCategoryArgs = {
  input: CreateTaxCategoryInput;
};


export type MutationCreateTaxRateArgs = {
  input: CreateTaxRateInput;
};


export type MutationCreateZoneArgs = {
  input: CreateZoneInput;
};


export type MutationDeleteAdministratorArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteAdministratorsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteAssetArgs = {
  input: DeleteAssetInput;
};


export type MutationDeleteAssetsArgs = {
  input: DeleteAssetsInput;
};


export type MutationDeleteChannelArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteChannelsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteCollectionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCollectionsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteCountriesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteCountryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCustomerArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCustomerAddressArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCustomerGroupArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCustomerGroupsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteCustomerNoteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCustomersArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteDraftOrderArgs = {
  orderId: Scalars['ID']['input'];
};


export type MutationDeleteFacetArgs = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationDeleteFacetValuesArgs = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteFacetsArgs = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteOrderNoteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePaymentMethodArgs = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationDeletePaymentMethodsArgs = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProductOptionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProductVariantArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProductVariantsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteProductsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeletePromotionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePromotionsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteProvinceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRolesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteSellerArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSellersArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteShippingMethodArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteShippingMethodsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteStockLocationArgs = {
  input: DeleteStockLocationInput;
};


export type MutationDeleteStockLocationsArgs = {
  input: Array<DeleteStockLocationInput>;
};


export type MutationDeleteSubscribedDeviceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTagArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTaxCategoriesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteTaxCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTaxRateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTaxRatesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteZoneArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteZonesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDuplicateEntityArgs = {
  input: DuplicateEntityInput;
};


export type MutationFlushBufferedJobsArgs = {
  bufferIds?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationImportProductsArgs = {
  csvFile: Scalars['Upload']['input'];
};


export type MutationLoginArgs = {
  password: Scalars['String']['input'];
  rememberMe?: InputMaybe<Scalars['Boolean']['input']>;
  username: Scalars['String']['input'];
};


export type MutationModifyOrderArgs = {
  input: ModifyOrderInput;
};


export type MutationMoveCollectionArgs = {
  input: MoveCollectionInput;
};


export type MutationRefundOrderArgs = {
  input: RefundOrderInput;
};


export type MutationRemoveCollectionsFromChannelArgs = {
  input: RemoveCollectionsFromChannelInput;
};


export type MutationRemoveCouponCodeFromDraftOrderArgs = {
  couponCode: Scalars['String']['input'];
  orderId: Scalars['ID']['input'];
};


export type MutationRemoveCustomersFromGroupArgs = {
  customerGroupId: Scalars['ID']['input'];
  customerIds: Array<Scalars['ID']['input']>;
};


export type MutationRemoveDraftOrderLineArgs = {
  orderId: Scalars['ID']['input'];
  orderLineId: Scalars['ID']['input'];
};


export type MutationRemoveFacetsFromChannelArgs = {
  input: RemoveFacetsFromChannelInput;
};


export type MutationRemoveMembersFromZoneArgs = {
  memberIds: Array<Scalars['ID']['input']>;
  zoneId: Scalars['ID']['input'];
};


export type MutationRemoveOptionGroupFromProductArgs = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  optionGroupId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
};


export type MutationRemovePaymentMethodsFromChannelArgs = {
  input: RemovePaymentMethodsFromChannelInput;
};


export type MutationRemoveProductVariantsFromChannelArgs = {
  input: RemoveProductVariantsFromChannelInput;
};


export type MutationRemoveProductsFromChannelArgs = {
  input: RemoveProductsFromChannelInput;
};


export type MutationRemovePromotionsFromChannelArgs = {
  input: RemovePromotionsFromChannelInput;
};


export type MutationRemoveSettledJobsArgs = {
  olderThan?: InputMaybe<Scalars['DateTime']['input']>;
  queueNames?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationRemoveShippingMethodsFromChannelArgs = {
  input: RemoveShippingMethodsFromChannelInput;
};


export type MutationRemoveStockLocationsFromChannelArgs = {
  input: RemoveStockLocationsFromChannelInput;
};


export type MutationRunScheduledTaskArgs = {
  id: Scalars['String']['input'];
};


export type MutationSendPushNotificationArgs = {
  input: SendPushNotificationInput;
};


export type MutationSetCustomerForDraftOrderArgs = {
  customerId?: InputMaybe<Scalars['ID']['input']>;
  input?: InputMaybe<CreateCustomerInput>;
  orderId: Scalars['ID']['input'];
};


export type MutationSetDraftOrderBillingAddressArgs = {
  input: CreateAddressInput;
  orderId: Scalars['ID']['input'];
};


export type MutationSetDraftOrderCustomFieldsArgs = {
  input: UpdateOrderInput;
  orderId: Scalars['ID']['input'];
};


export type MutationSetDraftOrderShippingAddressArgs = {
  input: CreateAddressInput;
  orderId: Scalars['ID']['input'];
};


export type MutationSetDraftOrderShippingMethodArgs = {
  orderId: Scalars['ID']['input'];
  shippingMethodId: Scalars['ID']['input'];
};


export type MutationSetOrderCustomFieldsArgs = {
  input: UpdateOrderInput;
};


export type MutationSetOrderCustomerArgs = {
  input: SetOrderCustomerInput;
};


export type MutationSetSettingsStoreValueArgs = {
  input: SettingsStoreInput;
};


export type MutationSetSettingsStoreValuesArgs = {
  inputs: Array<SettingsStoreInput>;
};


export type MutationSettlePaymentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSettleRefundArgs = {
  input: SettleRefundInput;
};


export type MutationTransitionFulfillmentToStateArgs = {
  id: Scalars['ID']['input'];
  state: Scalars['String']['input'];
};


export type MutationTransitionOrderToStateArgs = {
  id: Scalars['ID']['input'];
  state: Scalars['String']['input'];
};


export type MutationTransitionPaymentToStateArgs = {
  id: Scalars['ID']['input'];
  state: Scalars['String']['input'];
};


export type MutationUnsetDraftOrderBillingAddressArgs = {
  orderId: Scalars['ID']['input'];
};


export type MutationUnsetDraftOrderShippingAddressArgs = {
  orderId: Scalars['ID']['input'];
};


export type MutationUpdateActiveAdministratorArgs = {
  input: UpdateActiveAdministratorInput;
};


export type MutationUpdateAdministratorArgs = {
  input: UpdateAdministratorInput;
};


export type MutationUpdateAssetArgs = {
  input: UpdateAssetInput;
};


export type MutationUpdateChannelArgs = {
  input: UpdateChannelInput;
};


export type MutationUpdateCollectionArgs = {
  input: UpdateCollectionInput;
};


export type MutationUpdateCountryArgs = {
  input: UpdateCountryInput;
};


export type MutationUpdateCustomerArgs = {
  input: UpdateCustomerInput;
};


export type MutationUpdateCustomerAddressArgs = {
  input: UpdateAddressInput;
};


export type MutationUpdateCustomerGroupArgs = {
  input: UpdateCustomerGroupInput;
};


export type MutationUpdateCustomerNoteArgs = {
  input: UpdateCustomerNoteInput;
};


export type MutationUpdateFacetArgs = {
  input: UpdateFacetInput;
};


export type MutationUpdateFacetValueArgs = {
  input: UpdateFacetValueInput;
};


export type MutationUpdateFacetValuesArgs = {
  input: Array<UpdateFacetValueInput>;
};


export type MutationUpdateGlobalSettingsArgs = {
  input: UpdateGlobalSettingsInput;
};


export type MutationUpdateOrderNoteArgs = {
  input: UpdateOrderNoteInput;
};


export type MutationUpdatePaymentMethodArgs = {
  input: UpdatePaymentMethodInput;
};


export type MutationUpdateProductArgs = {
  input: UpdateProductInput;
};


export type MutationUpdateProductOptionArgs = {
  input: UpdateProductOptionInput;
};


export type MutationUpdateProductOptionGroupArgs = {
  input: UpdateProductOptionGroupInput;
};


export type MutationUpdateProductVariantArgs = {
  input: UpdateProductVariantInput;
};


export type MutationUpdateProductVariantsArgs = {
  input: Array<UpdateProductVariantInput>;
};


export type MutationUpdateProductsArgs = {
  input: Array<UpdateProductInput>;
};


export type MutationUpdatePromotionArgs = {
  input: UpdatePromotionInput;
};


export type MutationUpdateProvinceArgs = {
  input: UpdateProvinceInput;
};


export type MutationUpdateRoleArgs = {
  input: UpdateRoleInput;
};


export type MutationUpdateScheduledTaskArgs = {
  input: UpdateScheduledTaskInput;
};


export type MutationUpdateSellerArgs = {
  input: UpdateSellerInput;
};


export type MutationUpdateShippingMethodArgs = {
  input: UpdateShippingMethodInput;
};


export type MutationUpdateStockLocationArgs = {
  input: UpdateStockLocationInput;
};


export type MutationUpdateSubscribedDeviceArgs = {
  input: UpdateSubscribedDeviceInput;
};


export type MutationUpdateTagArgs = {
  input: UpdateTagInput;
};


export type MutationUpdateTaxCategoryArgs = {
  input: UpdateTaxCategoryInput;
};


export type MutationUpdateTaxRateArgs = {
  input: UpdateTaxRateInput;
};


export type MutationUpdateZoneArgs = {
  input: UpdateZoneInput;
};

export type NativeAuthInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

/** Returned when attempting an operation that relies on the NativeAuthStrategy, if that strategy is not configured. */
export type NativeAuthStrategyError = ErrorResult & {
  __typename?: 'NativeAuthStrategyError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type NativeAuthenticationResult = CurrentUser | InvalidCredentialsError | NativeAuthStrategyError;

/** Returned when attempting to set a negative OrderLine quantity. */
export type NegativeQuantityError = ErrorResult & {
  __typename?: 'NegativeQuantityError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/**
 * Returned when invoking a mutation which depends on there being an active Order on the
 * current session.
 */
export type NoActiveOrderError = ErrorResult & {
  __typename?: 'NoActiveOrderError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Returned when a call to modifyOrder fails to specify any changes */
export type NoChangesSpecifiedError = ErrorResult & {
  __typename?: 'NoChangesSpecifiedError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type Node = {
  id: Scalars['ID']['output'];
};

/** Returned if an attempting to refund an Order but neither items nor shipping refund was specified */
export type NothingToRefundError = ErrorResult & {
  __typename?: 'NothingToRefundError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Operators for filtering on a list of Number fields */
export type NumberListOperators = {
  inList: Scalars['Float']['input'];
};

/** Operators for filtering on a Int or Float field */
export type NumberOperators = {
  between?: InputMaybe<NumberRange>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
};

export type NumberRange = {
  end: Scalars['Float']['input'];
  start: Scalars['Float']['input'];
};

export type Order = Node & {
  __typename?: 'Order';
  /** An order is active as long as the payment process has not been completed */
  active: Scalars['Boolean']['output'];
  aggregateOrder?: Maybe<Order>;
  aggregateOrderId?: Maybe<Scalars['ID']['output']>;
  billingAddress?: Maybe<OrderAddress>;
  channels: Array<Channel>;
  /** A unique code for the Order */
  code: Scalars['String']['output'];
  /** An array of all coupon codes applied to the Order */
  couponCodes: Array<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  currencyCode: CurrencyCode;
  customFields?: Maybe<Scalars['JSON']['output']>;
  customer?: Maybe<Customer>;
  discounts: Array<Discount>;
  fulfillments?: Maybe<Array<Fulfillment>>;
  history: HistoryEntryList;
  id: Scalars['ID']['output'];
  lines: Array<OrderLine>;
  modifications: Array<OrderModification>;
  nextStates: Array<Scalars['String']['output']>;
  /**
   * The date & time that the Order was placed, i.e. the Customer
   * completed the checkout and the Order is no longer "active"
   */
  orderPlacedAt?: Maybe<Scalars['DateTime']['output']>;
  payments?: Maybe<Array<Payment>>;
  /** Promotions applied to the order. Only gets populated after the payment process has completed. */
  promotions: Array<Promotion>;
  sellerOrders?: Maybe<Array<Order>>;
  shipping: Scalars['Money']['output'];
  shippingAddress?: Maybe<OrderAddress>;
  shippingLines: Array<ShippingLine>;
  shippingWithTax: Scalars['Money']['output'];
  state: Scalars['String']['output'];
  /**
   * The subTotal is the total of all OrderLines in the Order. This figure also includes any Order-level
   * discounts which have been prorated (proportionally distributed) amongst the items of each OrderLine.
   * To get a total of all OrderLines which does not account for prorated discounts, use the
   * sum of `OrderLine.discountedLinePrice` values.
   */
  subTotal: Scalars['Money']['output'];
  /** Same as subTotal, but inclusive of tax */
  subTotalWithTax: Scalars['Money']['output'];
  /**
   * Surcharges are arbitrary modifications to the Order total which are neither
   * ProductVariants nor discounts resulting from applied Promotions. For example,
   * one-off discounts based on customer interaction, or surcharges based on payment
   * methods.
   */
  surcharges: Array<Surcharge>;
  /** A summary of the taxes being applied to this Order */
  taxSummary: Array<OrderTaxSummary>;
  /** Equal to subTotal plus shipping */
  total: Scalars['Money']['output'];
  totalQuantity: Scalars['Int']['output'];
  /** The final payable amount. Equal to subTotalWithTax plus shippingWithTax */
  totalWithTax: Scalars['Money']['output'];
  type: OrderType;
  updatedAt: Scalars['DateTime']['output'];
};


export type OrderHistoryArgs = {
  options?: InputMaybe<HistoryEntryListOptions>;
};

export type OrderAddress = {
  __typename?: 'OrderAddress';
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  customFields?: Maybe<Scalars['JSON']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Scalars['String']['output']>;
  streetLine1?: Maybe<Scalars['String']['output']>;
  streetLine2?: Maybe<Scalars['String']['output']>;
};

export type OrderFilterParameter = {
  _and?: InputMaybe<Array<OrderFilterParameter>>;
  _or?: InputMaybe<Array<OrderFilterParameter>>;
  active?: InputMaybe<BooleanOperators>;
  aggregateOrderId?: InputMaybe<IdOperators>;
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  currencyCode?: InputMaybe<StringOperators>;
  customerLastName?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  orderPlacedAt?: InputMaybe<DateOperators>;
  shipping?: InputMaybe<NumberOperators>;
  shippingWithTax?: InputMaybe<NumberOperators>;
  state?: InputMaybe<StringOperators>;
  subTotal?: InputMaybe<NumberOperators>;
  subTotalWithTax?: InputMaybe<NumberOperators>;
  total?: InputMaybe<NumberOperators>;
  totalQuantity?: InputMaybe<NumberOperators>;
  totalWithTax?: InputMaybe<NumberOperators>;
  transactionId?: InputMaybe<StringOperators>;
  type?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

/** Returned when an order operation is rejected by an OrderInterceptor method. */
export type OrderInterceptorError = ErrorResult & {
  __typename?: 'OrderInterceptorError';
  errorCode: ErrorCode;
  interceptorError: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Returned when the maximum order size limit has been reached. */
export type OrderLimitError = ErrorResult & {
  __typename?: 'OrderLimitError';
  errorCode: ErrorCode;
  maxItems: Scalars['Int']['output'];
  message: Scalars['String']['output'];
};

export type OrderLine = Node & {
  __typename?: 'OrderLine';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  /** The price of the line including discounts, excluding tax */
  discountedLinePrice: Scalars['Money']['output'];
  /** The price of the line including discounts and tax */
  discountedLinePriceWithTax: Scalars['Money']['output'];
  /**
   * The price of a single unit including discounts, excluding tax.
   *
   * If Order-level discounts have been applied, this will not be the
   * actual taxable unit price (see `proratedUnitPrice`), but is generally the
   * correct price to display to customers to avoid confusion
   * about the internal handling of distributed Order-level discounts.
   */
  discountedUnitPrice: Scalars['Money']['output'];
  /** The price of a single unit including discounts and tax */
  discountedUnitPriceWithTax: Scalars['Money']['output'];
  discounts: Array<Discount>;
  featuredAsset?: Maybe<Asset>;
  fulfillmentLines?: Maybe<Array<FulfillmentLine>>;
  id: Scalars['ID']['output'];
  /** The total price of the line excluding tax and discounts. */
  linePrice: Scalars['Money']['output'];
  /** The total price of the line including tax but excluding discounts. */
  linePriceWithTax: Scalars['Money']['output'];
  /** The total tax on this line */
  lineTax: Scalars['Money']['output'];
  order: Order;
  /** The quantity at the time the Order was placed */
  orderPlacedQuantity: Scalars['Int']['output'];
  productVariant: ProductVariant;
  /**
   * The actual line price, taking into account both item discounts _and_ prorated (proportionally-distributed)
   * Order-level discounts. This value is the true economic value of the OrderLine, and is used in tax
   * and refund calculations.
   */
  proratedLinePrice: Scalars['Money']['output'];
  /** The proratedLinePrice including tax */
  proratedLinePriceWithTax: Scalars['Money']['output'];
  /**
   * The actual unit price, taking into account both item discounts _and_ prorated (proportionally-distributed)
   * Order-level discounts. This value is the true economic value of the OrderItem, and is used in tax
   * and refund calculations.
   */
  proratedUnitPrice: Scalars['Money']['output'];
  /** The proratedUnitPrice including tax */
  proratedUnitPriceWithTax: Scalars['Money']['output'];
  /** The quantity of items purchased */
  quantity: Scalars['Int']['output'];
  taxLines: Array<TaxLine>;
  taxRate: Scalars['Float']['output'];
  /** The price of a single unit, excluding tax and discounts */
  unitPrice: Scalars['Money']['output'];
  /** Non-zero if the unitPrice has changed since it was initially added to Order */
  unitPriceChangeSinceAdded: Scalars['Money']['output'];
  /** The price of a single unit, including tax but excluding discounts */
  unitPriceWithTax: Scalars['Money']['output'];
  /** Non-zero if the unitPriceWithTax has changed since it was initially added to Order */
  unitPriceWithTaxChangeSinceAdded: Scalars['Money']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderLineInput = {
  orderLineId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};

export type OrderList = PaginatedList & {
  __typename?: 'OrderList';
  items: Array<Order>;
  totalItems: Scalars['Int']['output'];
};

export type OrderListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<OrderFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<OrderSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type OrderModification = Node & {
  __typename?: 'OrderModification';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isSettled: Scalars['Boolean']['output'];
  lines: Array<OrderModificationLine>;
  note: Scalars['String']['output'];
  payment?: Maybe<Payment>;
  priceChange: Scalars['Money']['output'];
  refund?: Maybe<Refund>;
  surcharges?: Maybe<Array<Surcharge>>;
  updatedAt: Scalars['DateTime']['output'];
};

/** Returned when attempting to modify the contents of an Order that is not in the `AddingItems` state. */
export type OrderModificationError = ErrorResult & {
  __typename?: 'OrderModificationError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type OrderModificationLine = {
  __typename?: 'OrderModificationLine';
  modification: OrderModification;
  modificationId: Scalars['ID']['output'];
  orderLine: OrderLine;
  orderLineId: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
};

/** Returned when attempting to modify the contents of an Order that is not in the `Modifying` state. */
export type OrderModificationStateError = ErrorResult & {
  __typename?: 'OrderModificationStateError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type OrderProcessState = {
  __typename?: 'OrderProcessState';
  name: Scalars['String']['output'];
  to: Array<Scalars['String']['output']>;
};

export type OrderSortParameter = {
  aggregateOrderId?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  customerLastName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  orderPlacedAt?: InputMaybe<SortOrder>;
  shipping?: InputMaybe<SortOrder>;
  shippingWithTax?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  subTotal?: InputMaybe<SortOrder>;
  subTotalWithTax?: InputMaybe<SortOrder>;
  total?: InputMaybe<SortOrder>;
  totalQuantity?: InputMaybe<SortOrder>;
  totalWithTax?: InputMaybe<SortOrder>;
  transactionId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Returned if there is an error in transitioning the Order state */
export type OrderStateTransitionError = ErrorResult & {
  __typename?: 'OrderStateTransitionError';
  errorCode: ErrorCode;
  fromState: Scalars['String']['output'];
  message: Scalars['String']['output'];
  toState: Scalars['String']['output'];
  transitionError: Scalars['String']['output'];
};

/**
 * A summary of the taxes being applied to this order, grouped
 * by taxRate.
 */
export type OrderTaxSummary = {
  __typename?: 'OrderTaxSummary';
  /** A description of this tax */
  description: Scalars['String']['output'];
  /** The total net price of OrderLines to which this taxRate applies */
  taxBase: Scalars['Money']['output'];
  /** The taxRate as a percentage */
  taxRate: Scalars['Float']['output'];
  /** The total tax being applied to the Order at this taxRate */
  taxTotal: Scalars['Money']['output'];
};

export type OrderType =
  | 'Aggregate'
  | 'Regular'
  | 'Seller';

export type PaginatedList = {
  items: Array<Node>;
  totalItems: Scalars['Int']['output'];
};

export type Payment = Node & {
  __typename?: 'Payment';
  amount: Scalars['Money']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  errorMessage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  method: Scalars['String']['output'];
  nextStates: Array<Scalars['String']['output']>;
  refunds: Array<Refund>;
  state: Scalars['String']['output'];
  transactionId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type PaymentMethod = Node & {
  __typename?: 'PaymentMethod';
  checker?: Maybe<ConfigurableOperation>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
  handler: ConfigurableOperation;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  translations: Array<PaymentMethodTranslation>;
  updatedAt: Scalars['DateTime']['output'];
};

export type PaymentMethodFilterParameter = {
  _and?: InputMaybe<Array<PaymentMethodFilterParameter>>;
  _or?: InputMaybe<Array<PaymentMethodFilterParameter>>;
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type PaymentMethodList = PaginatedList & {
  __typename?: 'PaymentMethodList';
  items: Array<PaymentMethod>;
  totalItems: Scalars['Int']['output'];
};

export type PaymentMethodListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<PaymentMethodFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<PaymentMethodSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * Returned when a call to modifyOrder fails to include a paymentMethod even
 * though the price has increased as a result of the changes.
 */
export type PaymentMethodMissingError = ErrorResult & {
  __typename?: 'PaymentMethodMissingError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type PaymentMethodQuote = {
  __typename?: 'PaymentMethodQuote';
  code: Scalars['String']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  eligibilityMessage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isEligible: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type PaymentMethodSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PaymentMethodTranslation = {
  __typename?: 'PaymentMethodTranslation';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PaymentMethodTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Returned if an attempting to refund a Payment against OrderLines from a different Order */
export type PaymentOrderMismatchError = ErrorResult & {
  __typename?: 'PaymentOrderMismatchError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Returned when there is an error in transitioning the Payment state */
export type PaymentStateTransitionError = ErrorResult & {
  __typename?: 'PaymentStateTransitionError';
  errorCode: ErrorCode;
  fromState: Scalars['String']['output'];
  message: Scalars['String']['output'];
  toState: Scalars['String']['output'];
  transitionError: Scalars['String']['output'];
};

/**
 * @description
 * Permissions for administrators and customers. Used to control access to
 * GraphQL resolvers via the {@link Allow} decorator.
 *
 * ## Understanding Permission.Owner
 *
 * `Permission.Owner` is a special permission which is used in some Vendure resolvers to indicate that that resolver should only
 * be accessible to the "owner" of that resource.
 *
 * For example, the Shop API `activeCustomer` query resolver should only return the Customer object for the "owner" of that Customer, i.e.
 * based on the activeUserId of the current session. As a result, the resolver code looks like this:
 *
 * @example
 * ```TypeScript
 * \@Query()
 * \@Allow(Permission.Owner)
 * async activeCustomer(\@Ctx() ctx: RequestContext): Promise<Customer | undefined> {
 *   const userId = ctx.activeUserId;
 *   if (userId) {
 *     return this.customerService.findOneByUserId(ctx, userId);
 *   }
 * }
 * ```
 *
 * Here we can see that the "ownership" must be enforced by custom logic inside the resolver. Since "ownership" cannot be defined generally
 * nor statically encoded at build-time, any resolvers using `Permission.Owner` **must** include logic to enforce that only the owner
 * of the resource has access. If not, then it is the equivalent of using `Permission.Public`.
 *
 *
 * @docsCategory common
 */
export type Permission =
  /** Authenticated means simply that the user is logged in */
  | 'Authenticated'
  /** Grants permission to create Administrator */
  | 'CreateAdministrator'
  /** Grants permission to create Asset */
  | 'CreateAsset'
  /** Grants permission to create Products, Facets, Assets, Collections */
  | 'CreateCatalog'
  /** Grants permission to create Channel */
  | 'CreateChannel'
  /** Grants permission to create Collection */
  | 'CreateCollection'
  /** Grants permission to create Country */
  | 'CreateCountry'
  /** Grants permission to create Customer */
  | 'CreateCustomer'
  /** Grants permission to create CustomerGroup */
  | 'CreateCustomerGroup'
  /** Grants permission to create Facet */
  | 'CreateFacet'
  /** Grants permission to create Order */
  | 'CreateOrder'
  /** Grants permission to create PaymentMethod */
  | 'CreatePaymentMethod'
  /** Grants permission to create Product */
  | 'CreateProduct'
  /** Grants permission to create Promotion */
  | 'CreatePromotion'
  /** Grants permission to create Seller */
  | 'CreateSeller'
  /** Grants permission to create PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  | 'CreateSettings'
  /** Grants permission to create ShippingMethod */
  | 'CreateShippingMethod'
  /** Grants permission to create StockLocation */
  | 'CreateStockLocation'
  /** Grants permission to create System */
  | 'CreateSystem'
  /** Grants permission to create Tag */
  | 'CreateTag'
  /** Grants permission to create TaxCategory */
  | 'CreateTaxCategory'
  /** Grants permission to create TaxRate */
  | 'CreateTaxRate'
  /** Grants permission to create Zone */
  | 'CreateZone'
  /** Grants permission to delete Administrator */
  | 'DeleteAdministrator'
  /** Grants permission to delete Asset */
  | 'DeleteAsset'
  /** Grants permission to delete Products, Facets, Assets, Collections */
  | 'DeleteCatalog'
  /** Grants permission to delete Channel */
  | 'DeleteChannel'
  /** Grants permission to delete Collection */
  | 'DeleteCollection'
  /** Grants permission to delete Country */
  | 'DeleteCountry'
  /** Grants permission to delete Customer */
  | 'DeleteCustomer'
  /** Grants permission to delete CustomerGroup */
  | 'DeleteCustomerGroup'
  /** Grants permission to delete Facet */
  | 'DeleteFacet'
  /** Grants permission to delete Order */
  | 'DeleteOrder'
  /** Grants permission to delete PaymentMethod */
  | 'DeletePaymentMethod'
  /** Grants permission to delete Product */
  | 'DeleteProduct'
  /** Grants permission to delete Promotion */
  | 'DeletePromotion'
  /** Grants permission to delete Seller */
  | 'DeleteSeller'
  /** Grants permission to delete PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  | 'DeleteSettings'
  /** Grants permission to delete ShippingMethod */
  | 'DeleteShippingMethod'
  /** Grants permission to delete StockLocation */
  | 'DeleteStockLocation'
  /** Grants permission to delete System */
  | 'DeleteSystem'
  /** Grants permission to delete Tag */
  | 'DeleteTag'
  /** Grants permission to delete TaxCategory */
  | 'DeleteTaxCategory'
  /** Grants permission to delete TaxRate */
  | 'DeleteTaxRate'
  /** Grants permission to delete Zone */
  | 'DeleteZone'
  /** Owner means the user owns this entity, e.g. a Customer's own Order */
  | 'Owner'
  /** Public means any unauthenticated user may perform the operation */
  | 'Public'
  /** Grants permission to read Administrator */
  | 'ReadAdministrator'
  /** Grants permission to read Asset */
  | 'ReadAsset'
  /** Grants permission to read Products, Facets, Assets, Collections */
  | 'ReadCatalog'
  /** Grants permission to read Channel */
  | 'ReadChannel'
  /** Grants permission to read Collection */
  | 'ReadCollection'
  /** Grants permission to read Country */
  | 'ReadCountry'
  /** Grants permission to read Customer */
  | 'ReadCustomer'
  /** Grants permission to read CustomerGroup */
  | 'ReadCustomerGroup'
  /** Grants permission to read Facet */
  | 'ReadFacet'
  /** Grants permission to read Order */
  | 'ReadOrder'
  /** Grants permission to read PaymentMethod */
  | 'ReadPaymentMethod'
  /** Grants permission to read Product */
  | 'ReadProduct'
  /** Grants permission to read Promotion */
  | 'ReadPromotion'
  /** Grants permission to read Seller */
  | 'ReadSeller'
  /** Grants permission to read PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  | 'ReadSettings'
  /** Grants permission to read ShippingMethod */
  | 'ReadShippingMethod'
  /** Grants permission to read StockLocation */
  | 'ReadStockLocation'
  /** Grants permission to read System */
  | 'ReadSystem'
  /** Grants permission to read Tag */
  | 'ReadTag'
  /** Grants permission to read TaxCategory */
  | 'ReadTaxCategory'
  /** Grants permission to read TaxRate */
  | 'ReadTaxRate'
  /** Grants permission to read Zone */
  | 'ReadZone'
  /** SuperAdmin has unrestricted access to all operations */
  | 'SuperAdmin'
  /** Grants permission to update Administrator */
  | 'UpdateAdministrator'
  /** Grants permission to update Asset */
  | 'UpdateAsset'
  /** Grants permission to update Products, Facets, Assets, Collections */
  | 'UpdateCatalog'
  /** Grants permission to update Channel */
  | 'UpdateChannel'
  /** Grants permission to update Collection */
  | 'UpdateCollection'
  /** Grants permission to update Country */
  | 'UpdateCountry'
  /** Grants permission to update Customer */
  | 'UpdateCustomer'
  /** Grants permission to update CustomerGroup */
  | 'UpdateCustomerGroup'
  /** Grants permission to update Facet */
  | 'UpdateFacet'
  /** Grants permission to update GlobalSettings */
  | 'UpdateGlobalSettings'
  /** Grants permission to update Order */
  | 'UpdateOrder'
  /** Grants permission to update PaymentMethod */
  | 'UpdatePaymentMethod'
  /** Grants permission to update Product */
  | 'UpdateProduct'
  /** Grants permission to update Promotion */
  | 'UpdatePromotion'
  /** Grants permission to update Seller */
  | 'UpdateSeller'
  /** Grants permission to update PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  | 'UpdateSettings'
  /** Grants permission to update ShippingMethod */
  | 'UpdateShippingMethod'
  /** Grants permission to update StockLocation */
  | 'UpdateStockLocation'
  /** Grants permission to update System */
  | 'UpdateSystem'
  /** Grants permission to update Tag */
  | 'UpdateTag'
  /** Grants permission to update TaxCategory */
  | 'UpdateTaxCategory'
  /** Grants permission to update TaxRate */
  | 'UpdateTaxRate'
  /** Grants permission to update Zone */
  | 'UpdateZone';

export type PermissionDefinition = {
  __typename?: 'PermissionDefinition';
  assignable: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type PreviewCollectionVariantsInput = {
  filters: Array<ConfigurableOperationInput>;
  inheritFilters: Scalars['Boolean']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
};

/** The price range where the result has more than one price */
export type PriceRange = {
  __typename?: 'PriceRange';
  max: Scalars['Money']['output'];
  min: Scalars['Money']['output'];
};

export type Product = Node & {
  __typename?: 'Product';
  assets: Array<Asset>;
  channels: Array<Channel>;
  collections: Array<Collection>;
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
  facetValues: Array<FacetValue>;
  featuredAsset?: Maybe<Asset>;
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  optionGroups: Array<ProductOptionGroup>;
  slug: Scalars['String']['output'];
  translations: Array<ProductTranslation>;
  updatedAt: Scalars['DateTime']['output'];
  /** Returns a paginated, sortable, filterable list of ProductVariants */
  variantList: ProductVariantList;
  /** Returns all ProductVariants */
  variants: Array<ProductVariant>;
};


export type ProductVariantListArgs = {
  options?: InputMaybe<ProductVariantListOptions>;
};

export type ProductFilterParameter = {
  _and?: InputMaybe<Array<ProductFilterParameter>>;
  _or?: InputMaybe<Array<ProductFilterParameter>>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  facetValueId?: InputMaybe<IdOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  sku?: InputMaybe<StringOperators>;
  slug?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type ProductList = PaginatedList & {
  __typename?: 'ProductList';
  items: Array<Product>;
  totalItems: Scalars['Int']['output'];
};

export type ProductListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ProductFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ProductSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductOption = Node & {
  __typename?: 'ProductOption';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  group: ProductOptionGroup;
  groupId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  translations: Array<ProductOptionTranslation>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductOptionGroup = Node & {
  __typename?: 'ProductOptionGroup';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  options: Array<ProductOption>;
  translations: Array<ProductOptionGroupTranslation>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductOptionGroupTranslation = {
  __typename?: 'ProductOptionGroupTranslation';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductOptionGroupTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ProductOptionInUseError = ErrorResult & {
  __typename?: 'ProductOptionInUseError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  optionGroupCode: Scalars['String']['output'];
  productVariantCount: Scalars['Int']['output'];
};

export type ProductOptionTranslation = {
  __typename?: 'ProductOptionTranslation';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductOptionTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ProductSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductTranslation = {
  __typename?: 'ProductTranslation';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type ProductVariant = Node & {
  __typename?: 'ProductVariant';
  assets: Array<Asset>;
  channels: Array<Channel>;
  createdAt: Scalars['DateTime']['output'];
  currencyCode: CurrencyCode;
  customFields?: Maybe<Scalars['JSON']['output']>;
  enabled: Scalars['Boolean']['output'];
  facetValues: Array<FacetValue>;
  featuredAsset?: Maybe<Asset>;
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  options: Array<ProductOption>;
  outOfStockThreshold: Scalars['Int']['output'];
  price: Scalars['Money']['output'];
  priceWithTax: Scalars['Money']['output'];
  prices: Array<ProductVariantPrice>;
  product: Product;
  productId: Scalars['ID']['output'];
  sku: Scalars['String']['output'];
  /** @deprecated use stockLevels */
  stockAllocated: Scalars['Int']['output'];
  stockLevel: Scalars['String']['output'];
  stockLevels: Array<StockLevel>;
  stockMovements: StockMovementList;
  /** @deprecated use stockLevels */
  stockOnHand: Scalars['Int']['output'];
  taxCategory: TaxCategory;
  taxRateApplied: TaxRate;
  trackInventory: GlobalFlag;
  translations: Array<ProductVariantTranslation>;
  updatedAt: Scalars['DateTime']['output'];
  useGlobalOutOfStockThreshold: Scalars['Boolean']['output'];
};


export type ProductVariantStockMovementsArgs = {
  options?: InputMaybe<StockMovementListOptions>;
};

export type ProductVariantFilterParameter = {
  _and?: InputMaybe<Array<ProductVariantFilterParameter>>;
  _or?: InputMaybe<Array<ProductVariantFilterParameter>>;
  createdAt?: InputMaybe<DateOperators>;
  currencyCode?: InputMaybe<StringOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  facetValueId?: InputMaybe<IdOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  outOfStockThreshold?: InputMaybe<NumberOperators>;
  price?: InputMaybe<NumberOperators>;
  priceWithTax?: InputMaybe<NumberOperators>;
  productId?: InputMaybe<IdOperators>;
  sku?: InputMaybe<StringOperators>;
  stockAllocated?: InputMaybe<NumberOperators>;
  stockLevel?: InputMaybe<StringOperators>;
  stockOnHand?: InputMaybe<NumberOperators>;
  trackInventory?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  useGlobalOutOfStockThreshold?: InputMaybe<BooleanOperators>;
};

export type ProductVariantList = PaginatedList & {
  __typename?: 'ProductVariantList';
  items: Array<ProductVariant>;
  totalItems: Scalars['Int']['output'];
};

export type ProductVariantListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ProductVariantFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ProductVariantSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductVariantPrice = {
  __typename?: 'ProductVariantPrice';
  currencyCode: CurrencyCode;
  customFields?: Maybe<Scalars['JSON']['output']>;
  price: Scalars['Money']['output'];
};

export type ProductVariantSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  outOfStockThreshold?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  priceWithTax?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  sku?: InputMaybe<SortOrder>;
  stockAllocated?: InputMaybe<SortOrder>;
  stockLevel?: InputMaybe<SortOrder>;
  stockOnHand?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductVariantTranslation = {
  __typename?: 'ProductVariantTranslation';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductVariantTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Promotion = Node & {
  __typename?: 'Promotion';
  actions: Array<ConfigurableOperation>;
  conditions: Array<ConfigurableOperation>;
  couponCode?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
  endsAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  perCustomerUsageLimit?: Maybe<Scalars['Int']['output']>;
  startsAt?: Maybe<Scalars['DateTime']['output']>;
  translations: Array<PromotionTranslation>;
  updatedAt: Scalars['DateTime']['output'];
  usageLimit?: Maybe<Scalars['Int']['output']>;
};

export type PromotionFilterParameter = {
  _and?: InputMaybe<Array<PromotionFilterParameter>>;
  _or?: InputMaybe<Array<PromotionFilterParameter>>;
  couponCode?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  endsAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  perCustomerUsageLimit?: InputMaybe<NumberOperators>;
  startsAt?: InputMaybe<DateOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  usageLimit?: InputMaybe<NumberOperators>;
};

export type PromotionList = PaginatedList & {
  __typename?: 'PromotionList';
  items: Array<Promotion>;
  totalItems: Scalars['Int']['output'];
};

export type PromotionListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<PromotionFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<PromotionSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type PromotionSortParameter = {
  couponCode?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  endsAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  perCustomerUsageLimit?: InputMaybe<SortOrder>;
  startsAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  usageLimit?: InputMaybe<SortOrder>;
};

export type PromotionTranslation = {
  __typename?: 'PromotionTranslation';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PromotionTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Province = Node & Region & {
  __typename?: 'Province';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  parent?: Maybe<Region>;
  parentId?: Maybe<Scalars['ID']['output']>;
  translations: Array<RegionTranslation>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProvinceFilterParameter = {
  _and?: InputMaybe<Array<ProvinceFilterParameter>>;
  _or?: InputMaybe<Array<ProvinceFilterParameter>>;
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  parentId?: InputMaybe<IdOperators>;
  type?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type ProvinceList = PaginatedList & {
  __typename?: 'ProvinceList';
  items: Array<Province>;
  totalItems: Scalars['Int']['output'];
};

export type ProvinceListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ProvinceFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ProvinceSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type ProvinceSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parentId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProvinceTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type PushNotificationResponse = {
  __typename?: 'PushNotificationResponse';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

/** Returned if the specified quantity of an OrderLine is greater than the number of items in that line */
export type QuantityTooGreatError = ErrorResult & {
  __typename?: 'QuantityTooGreatError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  activeAdministrator?: Maybe<Administrator>;
  activeChannel: Channel;
  administrator?: Maybe<Administrator>;
  administrators: AdministratorList;
  allCustomers: Array<Customer>;
  /** Get a single Asset by id */
  asset?: Maybe<Asset>;
  /** Get a list of Assets */
  assets: AssetList;
  channel?: Maybe<Channel>;
  channels: ChannelList;
  /** Get a Collection either by id or slug. If neither id nor slug is specified, an error will result. */
  collection?: Maybe<Collection>;
  collectionFilters: Array<ConfigurableOperationDefinition>;
  collections: CollectionList;
  countries: CountryList;
  country?: Maybe<Country>;
  customer?: Maybe<Customer>;
  customerById?: Maybe<Customer>;
  customerGroup?: Maybe<CustomerGroup>;
  customerGroups: CustomerGroupList;
  customers: CustomerList;
  customersWithTokens: Array<CustomerWithTokens>;
  /** Returns a list of eligible shipping methods for the draft Order */
  eligibleShippingMethodsForDraftOrder: Array<ShippingMethodQuote>;
  /** Returns all configured EntityDuplicators. */
  entityDuplicators: Array<EntityDuplicatorDefinition>;
  facet?: Maybe<Facet>;
  facetValue?: Maybe<FacetValue>;
  facetValues: FacetValueList;
  facets: FacetList;
  fulfillmentHandlers: Array<ConfigurableOperationDefinition>;
  /** Get value for a specific key (automatically scoped based on field configuration) */
  getSettingsStoreValue?: Maybe<Scalars['JSON']['output']>;
  /** Get multiple key-value pairs (each automatically scoped) */
  getSettingsStoreValues?: Maybe<Scalars['JSON']['output']>;
  globalSettings: GlobalSettings;
  job?: Maybe<Job>;
  jobBufferSize: Array<JobBufferSize>;
  jobQueues: Array<JobQueue>;
  jobs: JobList;
  jobsById: Array<Job>;
  me?: Maybe<CurrentUser>;
  /** Get metrics for the given interval and metric types. */
  metricSummary: Array<MetricSummary>;
  order?: Maybe<Order>;
  orders: OrderList;
  paymentMethod?: Maybe<PaymentMethod>;
  paymentMethodEligibilityCheckers: Array<ConfigurableOperationDefinition>;
  paymentMethodHandlers: Array<ConfigurableOperationDefinition>;
  paymentMethods: PaymentMethodList;
  pendingSearchIndexUpdates: Scalars['Int']['output'];
  /** Used for real-time previews of the contents of a Collection */
  previewCollectionVariants: ProductVariantList;
  /** Get a Product either by id or slug. If neither id nor slug is specified, an error will result. */
  product?: Maybe<Product>;
  productOptionGroup?: Maybe<ProductOptionGroup>;
  productOptionGroups: Array<ProductOptionGroup>;
  /** Get a ProductVariant by id */
  productVariant?: Maybe<ProductVariant>;
  /** List ProductVariants either all or for the specific product. */
  productVariants: ProductVariantList;
  /** List Products */
  products: ProductList;
  promotion?: Maybe<Promotion>;
  promotionActions: Array<ConfigurableOperationDefinition>;
  promotionConditions: Array<ConfigurableOperationDefinition>;
  promotions: PromotionList;
  province?: Maybe<Province>;
  provinces: ProvinceList;
  pushSubscription?: Maybe<SubscribedDevice>;
  pushSubscriptions: Array<SubscribedDevice>;
  role?: Maybe<Role>;
  roles: RoleList;
  scheduledTasks: Array<ScheduledTask>;
  search: SearchResponse;
  seller?: Maybe<Seller>;
  sellers: SellerList;
  shippingCalculators: Array<ConfigurableOperationDefinition>;
  shippingEligibilityCheckers: Array<ConfigurableOperationDefinition>;
  shippingMethod?: Maybe<ShippingMethod>;
  shippingMethods: ShippingMethodList;
  stockLocation?: Maybe<StockLocation>;
  stockLocations: StockLocationList;
  tag: Tag;
  tags: TagList;
  taxCategories: TaxCategoryList;
  taxCategory?: Maybe<TaxCategory>;
  taxRate?: Maybe<TaxRate>;
  taxRates: TaxRateList;
  testEligibleShippingMethods: Array<ShippingMethodQuote>;
  testShippingMethod: TestShippingMethodResult;
  zone?: Maybe<Zone>;
  zones: ZoneList;
};


export type QueryAdministratorArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAdministratorsArgs = {
  options?: InputMaybe<AdministratorListOptions>;
};


export type QueryAssetArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAssetsArgs = {
  options?: InputMaybe<AssetListOptions>;
};


export type QueryChannelArgs = {
  id: Scalars['ID']['input'];
};


export type QueryChannelsArgs = {
  options?: InputMaybe<ChannelListOptions>;
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionsArgs = {
  options?: InputMaybe<CollectionListOptions>;
};


export type QueryCountriesArgs = {
  options?: InputMaybe<CountryListOptions>;
};


export type QueryCountryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCustomerArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCustomerByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCustomerGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCustomerGroupsArgs = {
  options?: InputMaybe<CustomerGroupListOptions>;
};


export type QueryCustomersArgs = {
  options?: InputMaybe<CustomerListOptions>;
};


export type QueryEligibleShippingMethodsForDraftOrderArgs = {
  orderId: Scalars['ID']['input'];
};


export type QueryFacetArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFacetValueArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFacetValuesArgs = {
  options?: InputMaybe<FacetValueListOptions>;
};


export type QueryFacetsArgs = {
  options?: InputMaybe<FacetListOptions>;
};


export type QueryGetSettingsStoreValueArgs = {
  key: Scalars['String']['input'];
};


export type QueryGetSettingsStoreValuesArgs = {
  keys: Array<Scalars['String']['input']>;
};


export type QueryJobArgs = {
  jobId: Scalars['ID']['input'];
};


export type QueryJobBufferSizeArgs = {
  bufferIds?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryJobsArgs = {
  options?: InputMaybe<JobListOptions>;
};


export type QueryJobsByIdArgs = {
  jobIds: Array<Scalars['ID']['input']>;
};


export type QueryMetricSummaryArgs = {
  input?: InputMaybe<MetricSummaryInput>;
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrdersArgs = {
  options?: InputMaybe<OrderListOptions>;
};


export type QueryPaymentMethodArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPaymentMethodsArgs = {
  options?: InputMaybe<PaymentMethodListOptions>;
};


export type QueryPreviewCollectionVariantsArgs = {
  input: PreviewCollectionVariantsInput;
  options?: InputMaybe<ProductVariantListOptions>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductOptionGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductOptionGroupsArgs = {
  filterTerm?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductVariantArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductVariantsArgs = {
  options?: InputMaybe<ProductVariantListOptions>;
  productId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProductsArgs = {
  options?: InputMaybe<ProductListOptions>;
};


export type QueryPromotionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPromotionsArgs = {
  options?: InputMaybe<PromotionListOptions>;
};


export type QueryProvinceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProvincesArgs = {
  options?: InputMaybe<ProvinceListOptions>;
};


export type QueryPushSubscriptionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRoleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRolesArgs = {
  options?: InputMaybe<RoleListOptions>;
};


export type QuerySearchArgs = {
  input: SearchInput;
};


export type QuerySellerArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySellersArgs = {
  options?: InputMaybe<SellerListOptions>;
};


export type QueryShippingMethodArgs = {
  id: Scalars['ID']['input'];
};


export type QueryShippingMethodsArgs = {
  options?: InputMaybe<ShippingMethodListOptions>;
};


export type QueryStockLocationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryStockLocationsArgs = {
  options?: InputMaybe<StockLocationListOptions>;
};


export type QueryTagArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTagsArgs = {
  options?: InputMaybe<TagListOptions>;
};


export type QueryTaxCategoriesArgs = {
  options?: InputMaybe<TaxCategoryListOptions>;
};


export type QueryTaxCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTaxRateArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTaxRatesArgs = {
  options?: InputMaybe<TaxRateListOptions>;
};


export type QueryTestEligibleShippingMethodsArgs = {
  input: TestEligibleShippingMethodsInput;
};


export type QueryTestShippingMethodArgs = {
  input: TestShippingMethodInput;
};


export type QueryZoneArgs = {
  id: Scalars['ID']['input'];
};


export type QueryZonesArgs = {
  options?: InputMaybe<ZoneListOptions>;
};

export type Refund = Node & {
  __typename?: 'Refund';
  adjustment: Scalars['Money']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  items: Scalars['Money']['output'];
  lines: Array<RefundLine>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  method?: Maybe<Scalars['String']['output']>;
  paymentId: Scalars['ID']['output'];
  reason?: Maybe<Scalars['String']['output']>;
  shipping: Scalars['Money']['output'];
  state: Scalars['String']['output'];
  total: Scalars['Money']['output'];
  transactionId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

/** Returned if `amount` is greater than the maximum un-refunded amount of the Payment */
export type RefundAmountError = ErrorResult & {
  __typename?: 'RefundAmountError';
  errorCode: ErrorCode;
  maximumRefundable: Scalars['Int']['output'];
  message: Scalars['String']['output'];
};

export type RefundLine = {
  __typename?: 'RefundLine';
  orderLine: OrderLine;
  orderLineId: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
  refund: Refund;
  refundId: Scalars['ID']['output'];
};

export type RefundOrderInput = {
  /**
   * The amount to be refunded to this particular payment. This was introduced in v2.2.0 as the preferred way to specify the refund amount.
   * Can be as much as the total amount of the payment minus the sum of all previous refunds.
   */
  amount?: InputMaybe<Scalars['Money']['input']>;
  paymentId: Scalars['ID']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type RefundOrderResult = AlreadyRefundedError | MultipleOrderError | NothingToRefundError | OrderStateTransitionError | PaymentOrderMismatchError | QuantityTooGreatError | Refund | RefundAmountError | RefundOrderStateError | RefundStateTransitionError;

/** Returned if an attempting to refund an Order which is not in the expected state */
export type RefundOrderStateError = ErrorResult & {
  __typename?: 'RefundOrderStateError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  orderState: Scalars['String']['output'];
};

/**
 * Returned when a call to modifyOrder fails to include a refundPaymentId even
 * though the price has decreased as a result of the changes.
 */
export type RefundPaymentIdMissingError = ErrorResult & {
  __typename?: 'RefundPaymentIdMissingError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Returned when there is an error in transitioning the Refund state */
export type RefundStateTransitionError = ErrorResult & {
  __typename?: 'RefundStateTransitionError';
  errorCode: ErrorCode;
  fromState: Scalars['String']['output'];
  message: Scalars['String']['output'];
  toState: Scalars['String']['output'];
  transitionError: Scalars['String']['output'];
};

export type Region = {
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  parent?: Maybe<Region>;
  parentId?: Maybe<Scalars['ID']['output']>;
  translations: Array<RegionTranslation>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type RegionTranslation = {
  __typename?: 'RegionTranslation';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type RelationCustomFieldConfig = CustomField & {
  __typename?: 'RelationCustomFieldConfig';
  deprecated?: Maybe<Scalars['Boolean']['output']>;
  deprecationReason?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Array<LocalizedString>>;
  entity: Scalars['String']['output'];
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  requiresPermission?: Maybe<Array<Permission>>;
  scalarFields: Array<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type Release = Node & StockMovement & {
  __typename?: 'Release';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  productVariant: ProductVariant;
  quantity: Scalars['Int']['output'];
  type: StockMovementType;
  updatedAt: Scalars['DateTime']['output'];
};

export type RemoveCollectionsFromChannelInput = {
  channelId: Scalars['ID']['input'];
  collectionIds: Array<Scalars['ID']['input']>;
};

export type RemoveFacetFromChannelResult = Facet | FacetInUseError;

export type RemoveFacetsFromChannelInput = {
  channelId: Scalars['ID']['input'];
  facetIds: Array<Scalars['ID']['input']>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RemoveOptionGroupFromProductResult = Product | ProductOptionInUseError;

export type RemoveOrderItemsResult = Order | OrderInterceptorError | OrderModificationError;

export type RemovePaymentMethodsFromChannelInput = {
  channelId: Scalars['ID']['input'];
  paymentMethodIds: Array<Scalars['ID']['input']>;
};

export type RemoveProductVariantsFromChannelInput = {
  channelId: Scalars['ID']['input'];
  productVariantIds: Array<Scalars['ID']['input']>;
};

export type RemoveProductsFromChannelInput = {
  channelId: Scalars['ID']['input'];
  productIds: Array<Scalars['ID']['input']>;
};

export type RemovePromotionsFromChannelInput = {
  channelId: Scalars['ID']['input'];
  promotionIds: Array<Scalars['ID']['input']>;
};

export type RemoveShippingMethodsFromChannelInput = {
  channelId: Scalars['ID']['input'];
  shippingMethodIds: Array<Scalars['ID']['input']>;
};

export type RemoveStockLocationsFromChannelInput = {
  channelId: Scalars['ID']['input'];
  stockLocationIds: Array<Scalars['ID']['input']>;
};

export type Return = Node & StockMovement & {
  __typename?: 'Return';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  productVariant: ProductVariant;
  quantity: Scalars['Int']['output'];
  type: StockMovementType;
  updatedAt: Scalars['DateTime']['output'];
};

export type Role = Node & {
  __typename?: 'Role';
  channels: Array<Channel>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  permissions: Array<Permission>;
  updatedAt: Scalars['DateTime']['output'];
};

export type RoleFilterParameter = {
  _and?: InputMaybe<Array<RoleFilterParameter>>;
  _or?: InputMaybe<Array<RoleFilterParameter>>;
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type RoleList = PaginatedList & {
  __typename?: 'RoleList';
  items: Array<Role>;
  totalItems: Scalars['Int']['output'];
};

export type RoleListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<RoleFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<RoleSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type RoleSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type Sale = Node & StockMovement & {
  __typename?: 'Sale';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  productVariant: ProductVariant;
  quantity: Scalars['Int']['output'];
  type: StockMovementType;
  updatedAt: Scalars['DateTime']['output'];
};

export type ScheduledTask = {
  __typename?: 'ScheduledTask';
  description: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  isRunning: Scalars['Boolean']['output'];
  lastExecutedAt?: Maybe<Scalars['DateTime']['output']>;
  lastResult?: Maybe<Scalars['JSON']['output']>;
  nextExecutionAt?: Maybe<Scalars['DateTime']['output']>;
  schedule: Scalars['String']['output'];
  scheduleDescription: Scalars['String']['output'];
};

export type SearchInput = {
  collectionId?: InputMaybe<Scalars['ID']['input']>;
  collectionSlug?: InputMaybe<Scalars['String']['input']>;
  facetValueFilters?: InputMaybe<Array<FacetValueFilterInput>>;
  groupByProduct?: InputMaybe<Scalars['Boolean']['input']>;
  inStock?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SearchResultSortParameter>;
  take?: InputMaybe<Scalars['Int']['input']>;
  term?: InputMaybe<Scalars['String']['input']>;
};

export type SearchReindexResponse = {
  __typename?: 'SearchReindexResponse';
  success: Scalars['Boolean']['output'];
};

export type SearchResponse = {
  __typename?: 'SearchResponse';
  collections: Array<CollectionResult>;
  facetValues: Array<FacetValueResult>;
  items: Array<SearchResult>;
  totalItems: Scalars['Int']['output'];
};

export type SearchResult = {
  __typename?: 'SearchResult';
  /** An array of ids of the Channels in which this result appears */
  channelIds: Array<Scalars['ID']['output']>;
  /** An array of ids of the Collections in which this result appears */
  collectionIds: Array<Scalars['ID']['output']>;
  currencyCode: CurrencyCode;
  description: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
  facetIds: Array<Scalars['ID']['output']>;
  facetValueIds: Array<Scalars['ID']['output']>;
  inStock: Scalars['Boolean']['output'];
  price: SearchResultPrice;
  priceWithTax: SearchResultPrice;
  productAsset?: Maybe<SearchResultAsset>;
  productId: Scalars['ID']['output'];
  productName: Scalars['String']['output'];
  productVariantAsset?: Maybe<SearchResultAsset>;
  productVariantId: Scalars['ID']['output'];
  productVariantName: Scalars['String']['output'];
  /** A relevance score for the result. Differs between database implementations */
  score: Scalars['Float']['output'];
  sku: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type SearchResultAsset = {
  __typename?: 'SearchResultAsset';
  focalPoint?: Maybe<Coordinate>;
  id: Scalars['ID']['output'];
  preview: Scalars['String']['output'];
};

/** The price of a search result product, either as a range or as a single price */
export type SearchResultPrice = PriceRange | SinglePrice;

export type SearchResultSortParameter = {
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
};

export type Seller = Node & {
  __typename?: 'Seller';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SellerFilterParameter = {
  _and?: InputMaybe<Array<SellerFilterParameter>>;
  _or?: InputMaybe<Array<SellerFilterParameter>>;
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type SellerList = PaginatedList & {
  __typename?: 'SellerList';
  items: Array<Seller>;
  totalItems: Scalars['Int']['output'];
};

export type SellerListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<SellerFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<SellerSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type SellerSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SendNotificationResult = {
  __typename?: 'SendNotificationResult';
  failed: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  sent: Scalars['Int']['output'];
  success: Scalars['Boolean']['output'];
};

export type SendPushNotificationInput = {
  body: Scalars['String']['input'];
  customerIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  deviceIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  title: Scalars['String']['input'];
};

export type ServerConfig = {
  __typename?: 'ServerConfig';
  /**
   * This field is deprecated in v2.2 in favor of the entityCustomFields field,
   * which allows custom fields to be defined on user-supplies entities.
   */
  customFieldConfig: CustomFields;
  entityCustomFields: Array<EntityCustomFields>;
  moneyStrategyPrecision: Scalars['Int']['output'];
  orderProcess: Array<OrderProcessState>;
  permissions: Array<PermissionDefinition>;
  permittedAssetTypes: Array<Scalars['String']['output']>;
};

export type SetCustomerForDraftOrderResult = EmailAddressConflictError | Order;

export type SetOrderCustomerInput = {
  customerId: Scalars['ID']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
};

export type SetOrderShippingMethodResult = IneligibleShippingMethodError | NoActiveOrderError | Order | OrderModificationError;

export type SetSettingsStoreValueResult = {
  __typename?: 'SetSettingsStoreValueResult';
  error?: Maybe<Scalars['String']['output']>;
  key: Scalars['String']['output'];
  result: Scalars['Boolean']['output'];
};

export type SettingsStoreInput = {
  key: Scalars['String']['input'];
  value: Scalars['JSON']['input'];
};

/** Returned if the Payment settlement fails */
export type SettlePaymentError = ErrorResult & {
  __typename?: 'SettlePaymentError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  paymentErrorMessage: Scalars['String']['output'];
};

export type SettlePaymentResult = OrderStateTransitionError | Payment | PaymentStateTransitionError | SettlePaymentError;

export type SettleRefundInput = {
  id: Scalars['ID']['input'];
  transactionId: Scalars['String']['input'];
};

export type SettleRefundResult = Refund | RefundStateTransitionError;

export type ShippingLine = {
  __typename?: 'ShippingLine';
  customFields?: Maybe<Scalars['JSON']['output']>;
  discountedPrice: Scalars['Money']['output'];
  discountedPriceWithTax: Scalars['Money']['output'];
  discounts: Array<Discount>;
  id: Scalars['ID']['output'];
  price: Scalars['Money']['output'];
  priceWithTax: Scalars['Money']['output'];
  shippingMethod: ShippingMethod;
};

export type ShippingMethod = Node & {
  __typename?: 'ShippingMethod';
  calculator: ConfigurableOperation;
  checker: ConfigurableOperation;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  fulfillmentHandlerCode: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  translations: Array<ShippingMethodTranslation>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ShippingMethodFilterParameter = {
  _and?: InputMaybe<Array<ShippingMethodFilterParameter>>;
  _or?: InputMaybe<Array<ShippingMethodFilterParameter>>;
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  fulfillmentHandlerCode?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type ShippingMethodList = PaginatedList & {
  __typename?: 'ShippingMethodList';
  items: Array<ShippingMethod>;
  totalItems: Scalars['Int']['output'];
};

export type ShippingMethodListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ShippingMethodFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ShippingMethodSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type ShippingMethodQuote = {
  __typename?: 'ShippingMethodQuote';
  code: Scalars['String']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** Any optional metadata returned by the ShippingCalculator in the ShippingCalculationResult */
  metadata?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  price: Scalars['Money']['output'];
  priceWithTax: Scalars['Money']['output'];
};

export type ShippingMethodSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  fulfillmentHandlerCode?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ShippingMethodTranslation = {
  __typename?: 'ShippingMethodTranslation';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ShippingMethodTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** The price value where the result has a single price */
export type SinglePrice = {
  __typename?: 'SinglePrice';
  value: Scalars['Money']['output'];
};

export type SortOrder =
  | 'ASC'
  | 'DESC';

export type StockAdjustment = Node & StockMovement & {
  __typename?: 'StockAdjustment';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  productVariant: ProductVariant;
  quantity: Scalars['Int']['output'];
  type: StockMovementType;
  updatedAt: Scalars['DateTime']['output'];
};

export type StockLevel = Node & {
  __typename?: 'StockLevel';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  stockAllocated: Scalars['Int']['output'];
  stockLocation: StockLocation;
  stockLocationId: Scalars['ID']['output'];
  stockOnHand: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type StockLevelInput = {
  stockLocationId: Scalars['ID']['input'];
  stockOnHand: Scalars['Int']['input'];
};

export type StockLocation = Node & {
  __typename?: 'StockLocation';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type StockLocationFilterParameter = {
  _and?: InputMaybe<Array<StockLocationFilterParameter>>;
  _or?: InputMaybe<Array<StockLocationFilterParameter>>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type StockLocationList = PaginatedList & {
  __typename?: 'StockLocationList';
  items: Array<StockLocation>;
  totalItems: Scalars['Int']['output'];
};

export type StockLocationListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<StockLocationFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<StockLocationSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type StockLocationSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type StockMovement = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  productVariant: ProductVariant;
  quantity: Scalars['Int']['output'];
  type: StockMovementType;
  updatedAt: Scalars['DateTime']['output'];
};

export type StockMovementItem = Allocation | Cancellation | Release | Return | Sale | StockAdjustment;

export type StockMovementList = {
  __typename?: 'StockMovementList';
  items: Array<StockMovementItem>;
  totalItems: Scalars['Int']['output'];
};

export type StockMovementListOptions = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<StockMovementType>;
};

export type StockMovementType =
  | 'ADJUSTMENT'
  | 'ALLOCATION'
  | 'CANCELLATION'
  | 'RELEASE'
  | 'RETURN'
  | 'SALE';

export type StringCustomFieldConfig = CustomField & {
  __typename?: 'StringCustomFieldConfig';
  deprecated?: Maybe<Scalars['Boolean']['output']>;
  deprecationReason?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  length?: Maybe<Scalars['Int']['output']>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  options?: Maybe<Array<StringFieldOption>>;
  pattern?: Maybe<Scalars['String']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  requiresPermission?: Maybe<Array<Permission>>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type StringFieldOption = {
  __typename?: 'StringFieldOption';
  label?: Maybe<Array<LocalizedString>>;
  value: Scalars['String']['output'];
};

/** Operators for filtering on a list of String fields */
export type StringListOperators = {
  inList: Scalars['String']['input'];
};

/** Operators for filtering on a String field */
export type StringOperators = {
  contains?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notEq?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
};

export type StringStructFieldConfig = StructField & {
  __typename?: 'StringStructFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  label?: Maybe<Array<LocalizedString>>;
  length?: Maybe<Scalars['Int']['output']>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  options?: Maybe<Array<StringFieldOption>>;
  pattern?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type StructCustomFieldConfig = CustomField & {
  __typename?: 'StructCustomFieldConfig';
  deprecated?: Maybe<Scalars['Boolean']['output']>;
  deprecationReason?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Array<LocalizedString>>;
  fields: Array<StructFieldConfig>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  requiresPermission?: Maybe<Array<Permission>>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type StructField = {
  description?: Maybe<Array<LocalizedString>>;
  label?: Maybe<Array<LocalizedString>>;
  list?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type StructFieldConfig = BooleanStructFieldConfig | DateTimeStructFieldConfig | FloatStructFieldConfig | IntStructFieldConfig | StringStructFieldConfig | TextStructFieldConfig;

export type SubscribedDevice = Node & {
  __typename?: 'SubscribedDevice';
  createdAt: Scalars['DateTime']['output'];
  customer?: Maybe<Customer>;
  deviceId?: Maybe<Scalars['String']['output']>;
  fcmToken: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userAgent?: Maybe<Scalars['String']['output']>;
};

/** Indicates that an operation succeeded, where we do not want to return any more specific information. */
export type Success = {
  __typename?: 'Success';
  success: Scalars['Boolean']['output'];
};

export type Surcharge = Node & {
  __typename?: 'Surcharge';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  price: Scalars['Money']['output'];
  priceWithTax: Scalars['Money']['output'];
  sku?: Maybe<Scalars['String']['output']>;
  taxLines: Array<TaxLine>;
  taxRate: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SurchargeInput = {
  description: Scalars['String']['input'];
  price: Scalars['Money']['input'];
  priceIncludesTax: Scalars['Boolean']['input'];
  sku?: InputMaybe<Scalars['String']['input']>;
  taxDescription?: InputMaybe<Scalars['String']['input']>;
  taxRate?: InputMaybe<Scalars['Float']['input']>;
};

export type Tag = Node & {
  __typename?: 'Tag';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  value: Scalars['String']['output'];
};

export type TagFilterParameter = {
  _and?: InputMaybe<Array<TagFilterParameter>>;
  _or?: InputMaybe<Array<TagFilterParameter>>;
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  value?: InputMaybe<StringOperators>;
};

export type TagList = PaginatedList & {
  __typename?: 'TagList';
  items: Array<Tag>;
  totalItems: Scalars['Int']['output'];
};

export type TagListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<TagFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<TagSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type TagSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type TaxCategory = Node & {
  __typename?: 'TaxCategory';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type TaxCategoryFilterParameter = {
  _and?: InputMaybe<Array<TaxCategoryFilterParameter>>;
  _or?: InputMaybe<Array<TaxCategoryFilterParameter>>;
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  isDefault?: InputMaybe<BooleanOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type TaxCategoryList = PaginatedList & {
  __typename?: 'TaxCategoryList';
  items: Array<TaxCategory>;
  totalItems: Scalars['Int']['output'];
};

export type TaxCategoryListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<TaxCategoryFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<TaxCategorySortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type TaxCategorySortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TaxLine = {
  __typename?: 'TaxLine';
  description: Scalars['String']['output'];
  taxRate: Scalars['Float']['output'];
};

export type TaxRate = Node & {
  __typename?: 'TaxRate';
  category: TaxCategory;
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  customerGroup?: Maybe<CustomerGroup>;
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  value: Scalars['Float']['output'];
  zone: Zone;
};

export type TaxRateFilterParameter = {
  _and?: InputMaybe<Array<TaxRateFilterParameter>>;
  _or?: InputMaybe<Array<TaxRateFilterParameter>>;
  createdAt?: InputMaybe<DateOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  value?: InputMaybe<NumberOperators>;
};

export type TaxRateList = PaginatedList & {
  __typename?: 'TaxRateList';
  items: Array<TaxRate>;
  totalItems: Scalars['Int']['output'];
};

export type TaxRateListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<TaxRateFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<TaxRateSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type TaxRateSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type TestEligibleShippingMethodsInput = {
  lines: Array<TestShippingMethodOrderLineInput>;
  shippingAddress: CreateAddressInput;
};

export type TestShippingMethodInput = {
  calculator: ConfigurableOperationInput;
  checker: ConfigurableOperationInput;
  lines: Array<TestShippingMethodOrderLineInput>;
  shippingAddress: CreateAddressInput;
};

export type TestShippingMethodOrderLineInput = {
  productVariantId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};

export type TestShippingMethodQuote = {
  __typename?: 'TestShippingMethodQuote';
  metadata?: Maybe<Scalars['JSON']['output']>;
  price: Scalars['Money']['output'];
  priceWithTax: Scalars['Money']['output'];
};

export type TestShippingMethodResult = {
  __typename?: 'TestShippingMethodResult';
  eligible: Scalars['Boolean']['output'];
  quote?: Maybe<TestShippingMethodQuote>;
};

export type TextCustomFieldConfig = CustomField & {
  __typename?: 'TextCustomFieldConfig';
  deprecated?: Maybe<Scalars['Boolean']['output']>;
  deprecationReason?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  requiresPermission?: Maybe<Array<Permission>>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type TextStructFieldConfig = StructField & {
  __typename?: 'TextStructFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type TransitionFulfillmentToStateResult = Fulfillment | FulfillmentStateTransitionError;

export type TransitionOrderToStateResult = Order | OrderStateTransitionError;

export type TransitionPaymentToStateResult = Payment | PaymentStateTransitionError;

export type UpdateActiveAdministratorInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Input used to update an Address.
 *
 * The countryCode must correspond to a `code` property of a Country that has been defined in the
 * Vendure server. The `code` property is typically a 2-character ISO code such as "GB", "US", "DE" etc.
 * If an invalid code is passed, the mutation will fail.
 */
export type UpdateAddressInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  defaultBillingAddress?: InputMaybe<Scalars['Boolean']['input']>;
  defaultShippingAddress?: InputMaybe<Scalars['Boolean']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  streetLine1?: InputMaybe<Scalars['String']['input']>;
  streetLine2?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAdministratorInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  roleIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type UpdateAssetInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  focalPoint?: InputMaybe<CoordinateInput>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateChannelInput = {
  availableCurrencyCodes?: InputMaybe<Array<CurrencyCode>>;
  availableLanguageCodes?: InputMaybe<Array<LanguageCode>>;
  code?: InputMaybe<Scalars['String']['input']>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  defaultCurrencyCode?: InputMaybe<CurrencyCode>;
  defaultLanguageCode?: InputMaybe<LanguageCode>;
  defaultShippingZoneId?: InputMaybe<Scalars['ID']['input']>;
  defaultTaxZoneId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  outOfStockThreshold?: InputMaybe<Scalars['Int']['input']>;
  pricesIncludeTax?: InputMaybe<Scalars['Boolean']['input']>;
  sellerId?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  trackInventory?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateChannelResult = Channel | LanguageNotAvailableError;

export type UpdateCollectionInput = {
  assetIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  featuredAssetId?: InputMaybe<Scalars['ID']['input']>;
  filters?: InputMaybe<Array<ConfigurableOperationInput>>;
  id: Scalars['ID']['input'];
  inheritFilters?: InputMaybe<Scalars['Boolean']['input']>;
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  parentId?: InputMaybe<Scalars['ID']['input']>;
  translations?: InputMaybe<Array<UpdateCollectionTranslationInput>>;
};

export type UpdateCollectionTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCountryInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  translations?: InputMaybe<Array<CountryTranslationInput>>;
};

export type UpdateCustomerGroupInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCustomerInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCustomerNoteInput = {
  note: Scalars['String']['input'];
  noteId: Scalars['ID']['input'];
};

export type UpdateCustomerResult = Customer | EmailAddressConflictError;

export type UpdateFacetInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  translations?: InputMaybe<Array<FacetTranslationInput>>;
};

export type UpdateFacetValueInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  translations?: InputMaybe<Array<FacetValueTranslationInput>>;
};

export type UpdateGlobalSettingsInput = {
  availableLanguages?: InputMaybe<Array<LanguageCode>>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  outOfStockThreshold?: InputMaybe<Scalars['Int']['input']>;
  trackInventory?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateGlobalSettingsResult = ChannelDefaultLanguageError | GlobalSettings;

export type UpdateOrderAddressInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  streetLine1?: InputMaybe<Scalars['String']['input']>;
  streetLine2?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrderInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
};

/** Union type of all possible errors that can occur when adding or removing items from an Order. */
export type UpdateOrderItemErrorResult = InsufficientStockError | NegativeQuantityError | OrderInterceptorError | OrderLimitError | OrderModificationError;

export type UpdateOrderItemsResult = InsufficientStockError | NegativeQuantityError | Order | OrderInterceptorError | OrderLimitError | OrderModificationError;

export type UpdateOrderNoteInput = {
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  noteId: Scalars['ID']['input'];
};

export type UpdatePaymentMethodInput = {
  checker?: InputMaybe<ConfigurableOperationInput>;
  code?: InputMaybe<Scalars['String']['input']>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  handler?: InputMaybe<ConfigurableOperationInput>;
  id: Scalars['ID']['input'];
  translations?: InputMaybe<Array<PaymentMethodTranslationInput>>;
};

export type UpdateProductInput = {
  assetIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  facetValueIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  featuredAssetId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  translations?: InputMaybe<Array<ProductTranslationInput>>;
};

export type UpdateProductOptionGroupInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  translations?: InputMaybe<Array<ProductOptionGroupTranslationInput>>;
};

export type UpdateProductOptionInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  translations?: InputMaybe<Array<ProductOptionGroupTranslationInput>>;
};

export type UpdateProductVariantInput = {
  assetIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  facetValueIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  featuredAssetId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  optionIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  outOfStockThreshold?: InputMaybe<Scalars['Int']['input']>;
  /** Sets the price for the ProductVariant in the Channel's default currency */
  price?: InputMaybe<Scalars['Money']['input']>;
  /** Allows multiple prices to be set for the ProductVariant in different currencies. */
  prices?: InputMaybe<Array<UpdateProductVariantPriceInput>>;
  sku?: InputMaybe<Scalars['String']['input']>;
  stockLevels?: InputMaybe<Array<StockLevelInput>>;
  stockOnHand?: InputMaybe<Scalars['Int']['input']>;
  taxCategoryId?: InputMaybe<Scalars['ID']['input']>;
  trackInventory?: InputMaybe<GlobalFlag>;
  translations?: InputMaybe<Array<ProductVariantTranslationInput>>;
  useGlobalOutOfStockThreshold?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * Used to set up update the price of a ProductVariant in a particular Channel.
 * If the `delete` flag is `true`, the price will be deleted for the given Channel.
 */
export type UpdateProductVariantPriceInput = {
  currencyCode: CurrencyCode;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  price: Scalars['Money']['input'];
};

export type UpdatePromotionInput = {
  actions?: InputMaybe<Array<ConfigurableOperationInput>>;
  conditions?: InputMaybe<Array<ConfigurableOperationInput>>;
  couponCode?: InputMaybe<Scalars['String']['input']>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  endsAt?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['ID']['input'];
  perCustomerUsageLimit?: InputMaybe<Scalars['Int']['input']>;
  startsAt?: InputMaybe<Scalars['DateTime']['input']>;
  translations?: InputMaybe<Array<PromotionTranslationInput>>;
  usageLimit?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdatePromotionResult = MissingConditionsError | Promotion;

export type UpdateProvinceInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  translations?: InputMaybe<Array<ProvinceTranslationInput>>;
};

export type UpdateRoleInput = {
  channelIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  permissions?: InputMaybe<Array<Permission>>;
};

export type UpdateScheduledTaskInput = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};

export type UpdateSellerInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateShippingMethodInput = {
  calculator?: InputMaybe<ConfigurableOperationInput>;
  checker?: InputMaybe<ConfigurableOperationInput>;
  code?: InputMaybe<Scalars['String']['input']>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  fulfillmentHandler?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  translations: Array<ShippingMethodTranslationInput>;
};

export type UpdateStockLocationInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSubscribedDeviceInput = {
  deviceId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTagInput = {
  id: Scalars['ID']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTaxCategoryInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTaxRateInput = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  customerGroupId?: InputMaybe<Scalars['ID']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
  zoneId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateZoneInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type User = Node & {
  __typename?: 'User';
  authenticationMethods: Array<AuthenticationMethod>;
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  identifier: Scalars['String']['output'];
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  roles: Array<Role>;
  updatedAt: Scalars['DateTime']['output'];
  verified: Scalars['Boolean']['output'];
};

export type Zone = Node & {
  __typename?: 'Zone';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  members: Array<Region>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ZoneFilterParameter = {
  _and?: InputMaybe<Array<ZoneFilterParameter>>;
  _or?: InputMaybe<Array<ZoneFilterParameter>>;
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type ZoneList = PaginatedList & {
  __typename?: 'ZoneList';
  items: Array<Zone>;
  totalItems: Scalars['Int']['output'];
};

export type ZoneListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ZoneFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ZoneSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type ZoneSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = Record<PropertyKey, never>, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping of union types */
export type ResolversUnionTypes<_RefType extends Record<string, unknown>> = ResolversObject<{
  AddFulfillmentToOrderResult:
    | ( Partial<CreateFulfillmentError> )
    | ( Partial<EmptyOrderLineSelectionError> )
    | ( Partial<Omit<Fulfillment, 'lines' | 'summary'> & { lines: Array<_RefType['FulfillmentLine']>, summary: Array<_RefType['FulfillmentLine']> }> )
    | ( Partial<FulfillmentStateTransitionError> )
    | ( Partial<InsufficientStockOnHandError> )
    | ( Partial<InvalidFulfillmentHandlerError> )
    | ( Partial<ItemsAlreadyFulfilledError> )
  ;
  AddManualPaymentToOrderResult:
    | ( Partial<ManualPaymentStateError> )
    | ( Partial<Omit<Order, 'aggregateOrder' | 'billingAddress' | 'channels' | 'customer' | 'discounts' | 'fulfillments' | 'history' | 'lines' | 'modifications' | 'payments' | 'sellerOrders' | 'shippingAddress'> & { aggregateOrder?: Maybe<_RefType['Order']>, billingAddress?: Maybe<_RefType['OrderAddress']>, channels: Array<_RefType['Channel']>, customer?: Maybe<_RefType['Customer']>, discounts: Array<_RefType['Discount']>, fulfillments?: Maybe<Array<_RefType['Fulfillment']>>, history: _RefType['HistoryEntryList'], lines: Array<_RefType['OrderLine']>, modifications: Array<_RefType['OrderModification']>, payments?: Maybe<Array<_RefType['Payment']>>, sellerOrders?: Maybe<Array<_RefType['Order']>>, shippingAddress?: Maybe<_RefType['OrderAddress']> }> )
  ;
  ApplyCouponCodeResult:
    | ( Partial<CouponCodeExpiredError> )
    | ( Partial<CouponCodeInvalidError> )
    | ( Partial<CouponCodeLimitError> )
    | ( Partial<Omit<Order, 'aggregateOrder' | 'billingAddress' | 'channels' | 'customer' | 'discounts' | 'fulfillments' | 'history' | 'lines' | 'modifications' | 'payments' | 'sellerOrders' | 'shippingAddress'> & { aggregateOrder?: Maybe<_RefType['Order']>, billingAddress?: Maybe<_RefType['OrderAddress']>, channels: Array<_RefType['Channel']>, customer?: Maybe<_RefType['Customer']>, discounts: Array<_RefType['Discount']>, fulfillments?: Maybe<Array<_RefType['Fulfillment']>>, history: _RefType['HistoryEntryList'], lines: Array<_RefType['OrderLine']>, modifications: Array<_RefType['OrderModification']>, payments?: Maybe<Array<_RefType['Payment']>>, sellerOrders?: Maybe<Array<_RefType['Order']>>, shippingAddress?: Maybe<_RefType['OrderAddress']> }> )
  ;
  AuthenticationResult:
    | ( Partial<CurrentUser> )
    | ( Partial<InvalidCredentialsError> )
  ;
  CancelOrderResult:
    | ( Partial<CancelActiveOrderError> )
    | ( Partial<EmptyOrderLineSelectionError> )
    | ( Partial<MultipleOrderError> )
    | ( Partial<Omit<Order, 'aggregateOrder' | 'billingAddress' | 'channels' | 'customer' | 'discounts' | 'fulfillments' | 'history' | 'lines' | 'modifications' | 'payments' | 'sellerOrders' | 'shippingAddress'> & { aggregateOrder?: Maybe<_RefType['Order']>, billingAddress?: Maybe<_RefType['OrderAddress']>, channels: Array<_RefType['Channel']>, customer?: Maybe<_RefType['Customer']>, discounts: Array<_RefType['Discount']>, fulfillments?: Maybe<Array<_RefType['Fulfillment']>>, history: _RefType['HistoryEntryList'], lines: Array<_RefType['OrderLine']>, modifications: Array<_RefType['OrderModification']>, payments?: Maybe<Array<_RefType['Payment']>>, sellerOrders?: Maybe<Array<_RefType['Order']>>, shippingAddress?: Maybe<_RefType['OrderAddress']> }> )
    | ( Partial<OrderStateTransitionError> )
    | ( Partial<QuantityTooGreatError> )
  ;
  CancelPaymentResult:
    | ( Partial<CancelPaymentError> )
    | ( Partial<Omit<Payment, 'refunds'> & { refunds: Array<_RefType['Refund']> }> )
    | ( Partial<PaymentStateTransitionError> )
  ;
  CreateAssetResult:
    | ( Partial<Asset> )
    | ( Partial<MimeTypeError> )
  ;
  CreateChannelResult:
    | ( Partial<Omit<Channel, 'defaultShippingZone' | 'defaultTaxZone'> & { defaultShippingZone?: Maybe<_RefType['Zone']>, defaultTaxZone?: Maybe<_RefType['Zone']> }> )
    | ( Partial<LanguageNotAvailableError> )
  ;
  CreateCustomerResult:
    | ( Customer )
    | ( Partial<EmailAddressConflictError> )
  ;
  CreatePromotionResult:
    | ( Partial<MissingConditionsError> )
    | ( Partial<Promotion> )
  ;
  CustomFieldConfig:
    | ( Partial<BooleanCustomFieldConfig> )
    | ( Partial<DateTimeCustomFieldConfig> )
    | ( Partial<FloatCustomFieldConfig> )
    | ( Partial<IntCustomFieldConfig> )
    | ( Partial<LocaleStringCustomFieldConfig> )
    | ( Partial<LocaleTextCustomFieldConfig> )
    | ( Partial<RelationCustomFieldConfig> )
    | ( Partial<StringCustomFieldConfig> )
    | ( Partial<Omit<StructCustomFieldConfig, 'fields'> & { fields: Array<_RefType['StructFieldConfig']> }> )
    | ( Partial<TextCustomFieldConfig> )
  ;
  DuplicateEntityResult:
    | ( Partial<DuplicateEntityError> )
    | ( Partial<DuplicateEntitySuccess> )
  ;
  ModifyOrderResult:
    | ( Partial<CouponCodeExpiredError> )
    | ( Partial<CouponCodeInvalidError> )
    | ( Partial<CouponCodeLimitError> )
    | ( Partial<IneligibleShippingMethodError> )
    | ( Partial<Omit<InsufficientStockError, 'order'> & { order: _RefType['Order'] }> )
    | ( Partial<NegativeQuantityError> )
    | ( Partial<NoChangesSpecifiedError> )
    | ( Partial<Omit<Order, 'aggregateOrder' | 'billingAddress' | 'channels' | 'customer' | 'discounts' | 'fulfillments' | 'history' | 'lines' | 'modifications' | 'payments' | 'sellerOrders' | 'shippingAddress'> & { aggregateOrder?: Maybe<_RefType['Order']>, billingAddress?: Maybe<_RefType['OrderAddress']>, channels: Array<_RefType['Channel']>, customer?: Maybe<_RefType['Customer']>, discounts: Array<_RefType['Discount']>, fulfillments?: Maybe<Array<_RefType['Fulfillment']>>, history: _RefType['HistoryEntryList'], lines: Array<_RefType['OrderLine']>, modifications: Array<_RefType['OrderModification']>, payments?: Maybe<Array<_RefType['Payment']>>, sellerOrders?: Maybe<Array<_RefType['Order']>>, shippingAddress?: Maybe<_RefType['OrderAddress']> }> )
    | ( Partial<OrderLimitError> )
    | ( Partial<OrderModificationStateError> )
    | ( Partial<PaymentMethodMissingError> )
    | ( Partial<RefundPaymentIdMissingError> )
  ;
  NativeAuthenticationResult:
    | ( Partial<CurrentUser> )
    | ( Partial<InvalidCredentialsError> )
    | ( Partial<NativeAuthStrategyError> )
  ;
  RefundOrderResult:
    | ( Partial<AlreadyRefundedError> )
    | ( Partial<MultipleOrderError> )
    | ( Partial<NothingToRefundError> )
    | ( Partial<OrderStateTransitionError> )
    | ( Partial<PaymentOrderMismatchError> )
    | ( Partial<QuantityTooGreatError> )
    | ( Partial<Omit<Refund, 'lines'> & { lines: Array<_RefType['RefundLine']> }> )
    | ( Partial<RefundAmountError> )
    | ( Partial<RefundOrderStateError> )
    | ( Partial<RefundStateTransitionError> )
  ;
  RemoveFacetFromChannelResult:
    | ( Partial<Facet> )
    | ( Partial<FacetInUseError> )
  ;
  RemoveOptionGroupFromProductResult:
    | ( Partial<Omit<Product, 'channels' | 'collections' | 'variantList' | 'variants'> & { channels: Array<_RefType['Channel']>, collections: Array<_RefType['Collection']>, variantList: _RefType['ProductVariantList'], variants: Array<_RefType['ProductVariant']> }> )
    | ( Partial<ProductOptionInUseError> )
  ;
  RemoveOrderItemsResult:
    | ( Partial<Omit<Order, 'aggregateOrder' | 'billingAddress' | 'channels' | 'customer' | 'discounts' | 'fulfillments' | 'history' | 'lines' | 'modifications' | 'payments' | 'sellerOrders' | 'shippingAddress'> & { aggregateOrder?: Maybe<_RefType['Order']>, billingAddress?: Maybe<_RefType['OrderAddress']>, channels: Array<_RefType['Channel']>, customer?: Maybe<_RefType['Customer']>, discounts: Array<_RefType['Discount']>, fulfillments?: Maybe<Array<_RefType['Fulfillment']>>, history: _RefType['HistoryEntryList'], lines: Array<_RefType['OrderLine']>, modifications: Array<_RefType['OrderModification']>, payments?: Maybe<Array<_RefType['Payment']>>, sellerOrders?: Maybe<Array<_RefType['Order']>>, shippingAddress?: Maybe<_RefType['OrderAddress']> }> )
    | ( Partial<OrderInterceptorError> )
    | ( Partial<OrderModificationError> )
  ;
  SearchResultPrice:
    | ( Partial<PriceRange> )
    | ( Partial<SinglePrice> )
  ;
  SetCustomerForDraftOrderResult:
    | ( Partial<EmailAddressConflictError> )
    | ( Partial<Omit<Order, 'aggregateOrder' | 'billingAddress' | 'channels' | 'customer' | 'discounts' | 'fulfillments' | 'history' | 'lines' | 'modifications' | 'payments' | 'sellerOrders' | 'shippingAddress'> & { aggregateOrder?: Maybe<_RefType['Order']>, billingAddress?: Maybe<_RefType['OrderAddress']>, channels: Array<_RefType['Channel']>, customer?: Maybe<_RefType['Customer']>, discounts: Array<_RefType['Discount']>, fulfillments?: Maybe<Array<_RefType['Fulfillment']>>, history: _RefType['HistoryEntryList'], lines: Array<_RefType['OrderLine']>, modifications: Array<_RefType['OrderModification']>, payments?: Maybe<Array<_RefType['Payment']>>, sellerOrders?: Maybe<Array<_RefType['Order']>>, shippingAddress?: Maybe<_RefType['OrderAddress']> }> )
  ;
  SetOrderShippingMethodResult:
    | ( Partial<IneligibleShippingMethodError> )
    | ( Partial<NoActiveOrderError> )
    | ( Partial<Omit<Order, 'aggregateOrder' | 'billingAddress' | 'channels' | 'customer' | 'discounts' | 'fulfillments' | 'history' | 'lines' | 'modifications' | 'payments' | 'sellerOrders' | 'shippingAddress'> & { aggregateOrder?: Maybe<_RefType['Order']>, billingAddress?: Maybe<_RefType['OrderAddress']>, channels: Array<_RefType['Channel']>, customer?: Maybe<_RefType['Customer']>, discounts: Array<_RefType['Discount']>, fulfillments?: Maybe<Array<_RefType['Fulfillment']>>, history: _RefType['HistoryEntryList'], lines: Array<_RefType['OrderLine']>, modifications: Array<_RefType['OrderModification']>, payments?: Maybe<Array<_RefType['Payment']>>, sellerOrders?: Maybe<Array<_RefType['Order']>>, shippingAddress?: Maybe<_RefType['OrderAddress']> }> )
    | ( Partial<OrderModificationError> )
  ;
  SettlePaymentResult:
    | ( Partial<OrderStateTransitionError> )
    | ( Partial<Omit<Payment, 'refunds'> & { refunds: Array<_RefType['Refund']> }> )
    | ( Partial<PaymentStateTransitionError> )
    | ( Partial<SettlePaymentError> )
  ;
  SettleRefundResult:
    | ( Partial<Omit<Refund, 'lines'> & { lines: Array<_RefType['RefundLine']> }> )
    | ( Partial<RefundStateTransitionError> )
  ;
  StockMovementItem:
    | ( Partial<Omit<Allocation, 'orderLine' | 'productVariant'> & { orderLine: _RefType['OrderLine'], productVariant: _RefType['ProductVariant'] }> )
    | ( Partial<Omit<Cancellation, 'orderLine' | 'productVariant'> & { orderLine: _RefType['OrderLine'], productVariant: _RefType['ProductVariant'] }> )
    | ( Partial<Omit<Release, 'productVariant'> & { productVariant: _RefType['ProductVariant'] }> )
    | ( Partial<Omit<Return, 'productVariant'> & { productVariant: _RefType['ProductVariant'] }> )
    | ( Partial<Omit<Sale, 'productVariant'> & { productVariant: _RefType['ProductVariant'] }> )
    | ( Partial<Omit<StockAdjustment, 'productVariant'> & { productVariant: _RefType['ProductVariant'] }> )
  ;
  StructFieldConfig:
    | ( Partial<BooleanStructFieldConfig> )
    | ( Partial<DateTimeStructFieldConfig> )
    | ( Partial<FloatStructFieldConfig> )
    | ( Partial<IntStructFieldConfig> )
    | ( Partial<StringStructFieldConfig> )
    | ( Partial<TextStructFieldConfig> )
  ;
  TransitionFulfillmentToStateResult:
    | ( Partial<Omit<Fulfillment, 'lines' | 'summary'> & { lines: Array<_RefType['FulfillmentLine']>, summary: Array<_RefType['FulfillmentLine']> }> )
    | ( Partial<FulfillmentStateTransitionError> )
  ;
  TransitionOrderToStateResult:
    | ( Partial<Omit<Order, 'aggregateOrder' | 'billingAddress' | 'channels' | 'customer' | 'discounts' | 'fulfillments' | 'history' | 'lines' | 'modifications' | 'payments' | 'sellerOrders' | 'shippingAddress'> & { aggregateOrder?: Maybe<_RefType['Order']>, billingAddress?: Maybe<_RefType['OrderAddress']>, channels: Array<_RefType['Channel']>, customer?: Maybe<_RefType['Customer']>, discounts: Array<_RefType['Discount']>, fulfillments?: Maybe<Array<_RefType['Fulfillment']>>, history: _RefType['HistoryEntryList'], lines: Array<_RefType['OrderLine']>, modifications: Array<_RefType['OrderModification']>, payments?: Maybe<Array<_RefType['Payment']>>, sellerOrders?: Maybe<Array<_RefType['Order']>>, shippingAddress?: Maybe<_RefType['OrderAddress']> }> )
    | ( Partial<OrderStateTransitionError> )
  ;
  TransitionPaymentToStateResult:
    | ( Partial<Omit<Payment, 'refunds'> & { refunds: Array<_RefType['Refund']> }> )
    | ( Partial<PaymentStateTransitionError> )
  ;
  UpdateChannelResult:
    | ( Partial<Omit<Channel, 'defaultShippingZone' | 'defaultTaxZone'> & { defaultShippingZone?: Maybe<_RefType['Zone']>, defaultTaxZone?: Maybe<_RefType['Zone']> }> )
    | ( Partial<LanguageNotAvailableError> )
  ;
  UpdateCustomerResult:
    | ( Customer )
    | ( Partial<EmailAddressConflictError> )
  ;
  UpdateGlobalSettingsResult:
    | ( Partial<ChannelDefaultLanguageError> )
    | ( Partial<Omit<GlobalSettings, 'serverConfig'> & { serverConfig: _RefType['ServerConfig'] }> )
  ;
  UpdateOrderItemErrorResult:
    | ( Partial<Omit<InsufficientStockError, 'order'> & { order: _RefType['Order'] }> )
    | ( Partial<NegativeQuantityError> )
    | ( Partial<OrderInterceptorError> )
    | ( Partial<OrderLimitError> )
    | ( Partial<OrderModificationError> )
  ;
  UpdateOrderItemsResult:
    | ( Partial<Omit<InsufficientStockError, 'order'> & { order: _RefType['Order'] }> )
    | ( Partial<NegativeQuantityError> )
    | ( Partial<Omit<Order, 'aggregateOrder' | 'billingAddress' | 'channels' | 'customer' | 'discounts' | 'fulfillments' | 'history' | 'lines' | 'modifications' | 'payments' | 'sellerOrders' | 'shippingAddress'> & { aggregateOrder?: Maybe<_RefType['Order']>, billingAddress?: Maybe<_RefType['OrderAddress']>, channels: Array<_RefType['Channel']>, customer?: Maybe<_RefType['Customer']>, discounts: Array<_RefType['Discount']>, fulfillments?: Maybe<Array<_RefType['Fulfillment']>>, history: _RefType['HistoryEntryList'], lines: Array<_RefType['OrderLine']>, modifications: Array<_RefType['OrderModification']>, payments?: Maybe<Array<_RefType['Payment']>>, sellerOrders?: Maybe<Array<_RefType['Order']>>, shippingAddress?: Maybe<_RefType['OrderAddress']> }> )
    | ( Partial<OrderInterceptorError> )
    | ( Partial<OrderLimitError> )
    | ( Partial<OrderModificationError> )
  ;
  UpdatePromotionResult:
    | ( Partial<MissingConditionsError> )
    | ( Partial<Promotion> )
  ;
}>;

/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = ResolversObject<{
  CustomField:
    | ( Partial<BooleanCustomFieldConfig> )
    | ( Partial<DateTimeCustomFieldConfig> )
    | ( Partial<FloatCustomFieldConfig> )
    | ( Partial<IntCustomFieldConfig> )
    | ( Partial<LocaleStringCustomFieldConfig> )
    | ( Partial<LocaleTextCustomFieldConfig> )
    | ( Partial<RelationCustomFieldConfig> )
    | ( Partial<StringCustomFieldConfig> )
    | ( Partial<Omit<StructCustomFieldConfig, 'fields'> & { fields: Array<_RefType['StructFieldConfig']> }> )
    | ( Partial<TextCustomFieldConfig> )
  ;
  ErrorResult:
    | ( Partial<AlreadyRefundedError> )
    | ( Partial<CancelActiveOrderError> )
    | ( Partial<CancelPaymentError> )
    | ( Partial<ChannelDefaultLanguageError> )
    | ( Partial<CouponCodeExpiredError> )
    | ( Partial<CouponCodeInvalidError> )
    | ( Partial<CouponCodeLimitError> )
    | ( Partial<CreateFulfillmentError> )
    | ( Partial<DuplicateEntityError> )
    | ( Partial<EmailAddressConflictError> )
    | ( Partial<EmptyOrderLineSelectionError> )
    | ( Partial<FacetInUseError> )
    | ( Partial<FulfillmentStateTransitionError> )
    | ( Partial<GuestCheckoutError> )
    | ( Partial<IneligibleShippingMethodError> )
    | ( Partial<Omit<InsufficientStockError, 'order'> & { order: _RefType['Order'] }> )
    | ( Partial<InsufficientStockOnHandError> )
    | ( Partial<InvalidCredentialsError> )
    | ( Partial<InvalidFulfillmentHandlerError> )
    | ( Partial<ItemsAlreadyFulfilledError> )
    | ( Partial<LanguageNotAvailableError> )
    | ( Partial<ManualPaymentStateError> )
    | ( Partial<MimeTypeError> )
    | ( Partial<MissingConditionsError> )
    | ( Partial<MultipleOrderError> )
    | ( Partial<NativeAuthStrategyError> )
    | ( Partial<NegativeQuantityError> )
    | ( Partial<NoActiveOrderError> )
    | ( Partial<NoChangesSpecifiedError> )
    | ( Partial<NothingToRefundError> )
    | ( Partial<OrderInterceptorError> )
    | ( Partial<OrderLimitError> )
    | ( Partial<OrderModificationError> )
    | ( Partial<OrderModificationStateError> )
    | ( Partial<OrderStateTransitionError> )
    | ( Partial<PaymentMethodMissingError> )
    | ( Partial<PaymentOrderMismatchError> )
    | ( Partial<PaymentStateTransitionError> )
    | ( Partial<ProductOptionInUseError> )
    | ( Partial<QuantityTooGreatError> )
    | ( Partial<RefundAmountError> )
    | ( Partial<RefundOrderStateError> )
    | ( Partial<RefundPaymentIdMissingError> )
    | ( Partial<RefundStateTransitionError> )
    | ( Partial<SettlePaymentError> )
  ;
  Node:
    | ( Partial<Omit<Address, 'country'> & { country: _RefType['Country'] }> )
    | ( Partial<Omit<Administrator, 'user'> & { user: _RefType['User'] }> )
    | ( Partial<Omit<Allocation, 'orderLine' | 'productVariant'> & { orderLine: _RefType['OrderLine'], productVariant: _RefType['ProductVariant'] }> )
    | ( Partial<Asset> )
    | ( Partial<AuthenticationMethod> )
    | ( Partial<Omit<Cancellation, 'orderLine' | 'productVariant'> & { orderLine: _RefType['OrderLine'], productVariant: _RefType['ProductVariant'] }> )
    | ( Partial<Omit<Channel, 'defaultShippingZone' | 'defaultTaxZone'> & { defaultShippingZone?: Maybe<_RefType['Zone']>, defaultTaxZone?: Maybe<_RefType['Zone']> }> )
    | ( Partial<Omit<Collection, 'breadcrumbs' | 'children' | 'parent' | 'productVariants'> & { breadcrumbs: Array<_RefType['CollectionBreadcrumb']>, children?: Maybe<Array<_RefType['Collection']>>, parent?: Maybe<_RefType['Collection']>, productVariants: _RefType['ProductVariantList'] }> )
    | ( Partial<Omit<Country, 'parent'> & { parent?: Maybe<_RefType['Region']> }> )
    | ( Customer )
    | ( Partial<Omit<CustomerGroup, 'customers'> & { customers: _RefType['CustomerList'] }> )
    | ( Partial<Facet> )
    | ( Partial<FacetValue> )
    | ( Partial<Omit<Fulfillment, 'lines' | 'summary'> & { lines: Array<_RefType['FulfillmentLine']>, summary: Array<_RefType['FulfillmentLine']> }> )
    | ( Partial<Omit<HistoryEntry, 'administrator'> & { administrator?: Maybe<_RefType['Administrator']> }> )
    | ( Partial<Job> )
    | ( Partial<Omit<Order, 'aggregateOrder' | 'billingAddress' | 'channels' | 'customer' | 'discounts' | 'fulfillments' | 'history' | 'lines' | 'modifications' | 'payments' | 'sellerOrders' | 'shippingAddress'> & { aggregateOrder?: Maybe<_RefType['Order']>, billingAddress?: Maybe<_RefType['OrderAddress']>, channels: Array<_RefType['Channel']>, customer?: Maybe<_RefType['Customer']>, discounts: Array<_RefType['Discount']>, fulfillments?: Maybe<Array<_RefType['Fulfillment']>>, history: _RefType['HistoryEntryList'], lines: Array<_RefType['OrderLine']>, modifications: Array<_RefType['OrderModification']>, payments?: Maybe<Array<_RefType['Payment']>>, sellerOrders?: Maybe<Array<_RefType['Order']>>, shippingAddress?: Maybe<_RefType['OrderAddress']> }> )
    | ( Partial<Omit<OrderLine, 'discounts' | 'fulfillmentLines' | 'order' | 'productVariant'> & { discounts: Array<_RefType['Discount']>, fulfillmentLines?: Maybe<Array<_RefType['FulfillmentLine']>>, order: _RefType['Order'], productVariant: _RefType['ProductVariant'] }> )
    | ( Partial<Omit<OrderModification, 'lines' | 'payment' | 'refund'> & { lines: Array<_RefType['OrderModificationLine']>, payment?: Maybe<_RefType['Payment']>, refund?: Maybe<_RefType['Refund']> }> )
    | ( Partial<Omit<Payment, 'refunds'> & { refunds: Array<_RefType['Refund']> }> )
    | ( Partial<PaymentMethod> )
    | ( Partial<Omit<Product, 'channels' | 'collections' | 'variantList' | 'variants'> & { channels: Array<_RefType['Channel']>, collections: Array<_RefType['Collection']>, variantList: _RefType['ProductVariantList'], variants: Array<_RefType['ProductVariant']> }> )
    | ( Partial<ProductOption> )
    | ( Partial<ProductOptionGroup> )
    | ( Partial<Omit<ProductVariant, 'channels' | 'product' | 'stockMovements' | 'taxRateApplied'> & { channels: Array<_RefType['Channel']>, product: _RefType['Product'], stockMovements: _RefType['StockMovementList'], taxRateApplied: _RefType['TaxRate'] }> )
    | ( Partial<Promotion> )
    | ( Partial<Omit<Province, 'parent'> & { parent?: Maybe<_RefType['Region']> }> )
    | ( Partial<Omit<Refund, 'lines'> & { lines: Array<_RefType['RefundLine']> }> )
    | ( Partial<Omit<Release, 'productVariant'> & { productVariant: _RefType['ProductVariant'] }> )
    | ( Partial<Omit<Return, 'productVariant'> & { productVariant: _RefType['ProductVariant'] }> )
    | ( Partial<Omit<Role, 'channels'> & { channels: Array<_RefType['Channel']> }> )
    | ( Partial<Omit<Sale, 'productVariant'> & { productVariant: _RefType['ProductVariant'] }> )
    | ( Partial<Seller> )
    | ( Partial<ShippingMethod> )
    | ( Partial<Omit<StockAdjustment, 'productVariant'> & { productVariant: _RefType['ProductVariant'] }> )
    | ( Partial<StockLevel> )
    | ( Partial<StockLocation> )
    | ( SubscribedDevices )
    | ( Partial<Surcharge> )
    | ( Partial<Tag> )
    | ( Partial<TaxCategory> )
    | ( Partial<Omit<TaxRate, 'customerGroup' | 'zone'> & { customerGroup?: Maybe<_RefType['CustomerGroup']>, zone: _RefType['Zone'] }> )
    | ( Partial<Omit<User, 'authenticationMethods' | 'roles'> & { authenticationMethods: Array<_RefType['AuthenticationMethod']>, roles: Array<_RefType['Role']> }> )
    | ( Partial<Omit<Zone, 'members'> & { members: Array<_RefType['Region']> }> )
  ;
  PaginatedList:
    | ( Partial<Omit<AdministratorList, 'items'> & { items: Array<_RefType['Administrator']> }> )
    | ( Partial<AssetList> )
    | ( Partial<Omit<ChannelList, 'items'> & { items: Array<_RefType['Channel']> }> )
    | ( Partial<Omit<CollectionList, 'items'> & { items: Array<_RefType['Collection']> }> )
    | ( Partial<Omit<CountryList, 'items'> & { items: Array<_RefType['Country']> }> )
    | ( Partial<Omit<CustomerGroupList, 'items'> & { items: Array<_RefType['CustomerGroup']> }> )
    | ( Partial<Omit<CustomerList, 'items'> & { items: Array<_RefType['Customer']> }> )
    | ( Partial<FacetList> )
    | ( Partial<FacetValueList> )
    | ( Partial<Omit<HistoryEntryList, 'items'> & { items: Array<_RefType['HistoryEntry']> }> )
    | ( Partial<JobList> )
    | ( Partial<Omit<OrderList, 'items'> & { items: Array<_RefType['Order']> }> )
    | ( Partial<PaymentMethodList> )
    | ( Partial<Omit<ProductList, 'items'> & { items: Array<_RefType['Product']> }> )
    | ( Partial<Omit<ProductVariantList, 'items'> & { items: Array<_RefType['ProductVariant']> }> )
    | ( Partial<PromotionList> )
    | ( Partial<Omit<ProvinceList, 'items'> & { items: Array<_RefType['Province']> }> )
    | ( Partial<Omit<RoleList, 'items'> & { items: Array<_RefType['Role']> }> )
    | ( Partial<SellerList> )
    | ( Partial<ShippingMethodList> )
    | ( Partial<StockLocationList> )
    | ( Partial<TagList> )
    | ( Partial<TaxCategoryList> )
    | ( Partial<Omit<TaxRateList, 'items'> & { items: Array<_RefType['TaxRate']> }> )
    | ( Partial<Omit<ZoneList, 'items'> & { items: Array<_RefType['Zone']> }> )
  ;
  Region:
    | ( Partial<Omit<Country, 'parent'> & { parent?: Maybe<_RefType['Region']> }> )
    | ( Partial<Omit<Province, 'parent'> & { parent?: Maybe<_RefType['Region']> }> )
  ;
  StockMovement:
    | ( Partial<Omit<Allocation, 'orderLine' | 'productVariant'> & { orderLine: _RefType['OrderLine'], productVariant: _RefType['ProductVariant'] }> )
    | ( Partial<Omit<Cancellation, 'orderLine' | 'productVariant'> & { orderLine: _RefType['OrderLine'], productVariant: _RefType['ProductVariant'] }> )
    | ( Partial<Omit<Release, 'productVariant'> & { productVariant: _RefType['ProductVariant'] }> )
    | ( Partial<Omit<Return, 'productVariant'> & { productVariant: _RefType['ProductVariant'] }> )
    | ( Partial<Omit<Sale, 'productVariant'> & { productVariant: _RefType['ProductVariant'] }> )
    | ( Partial<Omit<StockAdjustment, 'productVariant'> & { productVariant: _RefType['ProductVariant'] }> )
  ;
  StructField:
    | ( Partial<BooleanStructFieldConfig> )
    | ( Partial<DateTimeStructFieldConfig> )
    | ( Partial<FloatStructFieldConfig> )
    | ( Partial<IntStructFieldConfig> )
    | ( Partial<StringStructFieldConfig> )
    | ( Partial<TextStructFieldConfig> )
  ;
}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AddFulfillmentToOrderResult: Partial<ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AddFulfillmentToOrderResult']>>;
  AddItemInput: ResolverTypeWrapper<Partial<AddItemInput>>;
  AddItemToDraftOrderInput: ResolverTypeWrapper<Partial<AddItemToDraftOrderInput>>;
  AddManualPaymentToOrderResult: Partial<ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AddManualPaymentToOrderResult']>>;
  AddNoteToCustomerInput: ResolverTypeWrapper<Partial<AddNoteToCustomerInput>>;
  AddNoteToOrderInput: ResolverTypeWrapper<Partial<AddNoteToOrderInput>>;
  Address: ResolverTypeWrapper<Partial<Omit<Address, 'country'> & { country: ResolversTypes['Country'] }>>;
  AdjustDraftOrderLineInput: ResolverTypeWrapper<Partial<AdjustDraftOrderLineInput>>;
  Adjustment: ResolverTypeWrapper<Partial<Adjustment>>;
  AdjustmentType: ResolverTypeWrapper<Partial<AdjustmentType>>;
  Administrator: ResolverTypeWrapper<Partial<Omit<Administrator, 'user'> & { user: ResolversTypes['User'] }>>;
  AdministratorFilterParameter: ResolverTypeWrapper<Partial<AdministratorFilterParameter>>;
  AdministratorList: ResolverTypeWrapper<Partial<Omit<AdministratorList, 'items'> & { items: Array<ResolversTypes['Administrator']> }>>;
  AdministratorListOptions: ResolverTypeWrapper<Partial<AdministratorListOptions>>;
  AdministratorPaymentInput: ResolverTypeWrapper<Partial<AdministratorPaymentInput>>;
  AdministratorRefundInput: ResolverTypeWrapper<Partial<AdministratorRefundInput>>;
  AdministratorSortParameter: ResolverTypeWrapper<Partial<AdministratorSortParameter>>;
  Allocation: ResolverTypeWrapper<Partial<Omit<Allocation, 'orderLine' | 'productVariant'> & { orderLine: ResolversTypes['OrderLine'], productVariant: ResolversTypes['ProductVariant'] }>>;
  AlreadyRefundedError: ResolverTypeWrapper<Partial<AlreadyRefundedError>>;
  ApplyCouponCodeResult: Partial<ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['ApplyCouponCodeResult']>>;
  Asset: ResolverTypeWrapper<Partial<Asset>>;
  AssetFilterParameter: ResolverTypeWrapper<Partial<AssetFilterParameter>>;
  AssetList: ResolverTypeWrapper<Partial<AssetList>>;
  AssetListOptions: ResolverTypeWrapper<Partial<AssetListOptions>>;
  AssetSortParameter: ResolverTypeWrapper<Partial<AssetSortParameter>>;
  AssetType: ResolverTypeWrapper<Partial<AssetType>>;
  AssignAssetsToChannelInput: ResolverTypeWrapper<Partial<AssignAssetsToChannelInput>>;
  AssignCollectionsToChannelInput: ResolverTypeWrapper<Partial<AssignCollectionsToChannelInput>>;
  AssignFacetsToChannelInput: ResolverTypeWrapper<Partial<AssignFacetsToChannelInput>>;
  AssignPaymentMethodsToChannelInput: ResolverTypeWrapper<Partial<AssignPaymentMethodsToChannelInput>>;
  AssignProductVariantsToChannelInput: ResolverTypeWrapper<Partial<AssignProductVariantsToChannelInput>>;
  AssignProductsToChannelInput: ResolverTypeWrapper<Partial<AssignProductsToChannelInput>>;
  AssignPromotionsToChannelInput: ResolverTypeWrapper<Partial<AssignPromotionsToChannelInput>>;
  AssignShippingMethodsToChannelInput: ResolverTypeWrapper<Partial<AssignShippingMethodsToChannelInput>>;
  AssignStockLocationsToChannelInput: ResolverTypeWrapper<Partial<AssignStockLocationsToChannelInput>>;
  AuthenticationInput: ResolverTypeWrapper<Partial<AuthenticationInput>>;
  AuthenticationMethod: ResolverTypeWrapper<Partial<AuthenticationMethod>>;
  AuthenticationResult: Partial<ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AuthenticationResult']>>;
  Boolean: ResolverTypeWrapper<Partial<Scalars['Boolean']['output']>>;
  BooleanCustomFieldConfig: ResolverTypeWrapper<Partial<BooleanCustomFieldConfig>>;
  BooleanListOperators: ResolverTypeWrapper<Partial<BooleanListOperators>>;
  BooleanOperators: ResolverTypeWrapper<Partial<BooleanOperators>>;
  BooleanStructFieldConfig: ResolverTypeWrapper<Partial<BooleanStructFieldConfig>>;
  CancelActiveOrderError: ResolverTypeWrapper<Partial<CancelActiveOrderError>>;
  CancelOrderInput: ResolverTypeWrapper<Partial<CancelOrderInput>>;
  CancelOrderResult: Partial<ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['CancelOrderResult']>>;
  CancelPaymentError: ResolverTypeWrapper<Partial<CancelPaymentError>>;
  CancelPaymentResult: Partial<ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['CancelPaymentResult']>>;
  Cancellation: ResolverTypeWrapper<Partial<Omit<Cancellation, 'orderLine' | 'productVariant'> & { orderLine: ResolversTypes['OrderLine'], productVariant: ResolversTypes['ProductVariant'] }>>;
  Channel: ResolverTypeWrapper<Partial<Omit<Channel, 'defaultShippingZone' | 'defaultTaxZone'> & { defaultShippingZone?: Maybe<ResolversTypes['Zone']>, defaultTaxZone?: Maybe<ResolversTypes['Zone']> }>>;
  ChannelDefaultLanguageError: ResolverTypeWrapper<Partial<ChannelDefaultLanguageError>>;
  ChannelFilterParameter: ResolverTypeWrapper<Partial<ChannelFilterParameter>>;
  ChannelList: ResolverTypeWrapper<Partial<Omit<ChannelList, 'items'> & { items: Array<ResolversTypes['Channel']> }>>;
  ChannelListOptions: ResolverTypeWrapper<Partial<ChannelListOptions>>;
  ChannelSortParameter: ResolverTypeWrapper<Partial<ChannelSortParameter>>;
  Collection: ResolverTypeWrapper<Partial<Omit<Collection, 'breadcrumbs' | 'children' | 'parent' | 'productVariants'> & { breadcrumbs: Array<ResolversTypes['CollectionBreadcrumb']>, children?: Maybe<Array<ResolversTypes['Collection']>>, parent?: Maybe<ResolversTypes['Collection']>, productVariants: ResolversTypes['ProductVariantList'] }>>;
  CollectionBreadcrumb: ResolverTypeWrapper<Partial<CollectionBreadcrumb>>;
  CollectionFilterParameter: ResolverTypeWrapper<Partial<CollectionFilterParameter>>;
  CollectionList: ResolverTypeWrapper<Partial<Omit<CollectionList, 'items'> & { items: Array<ResolversTypes['Collection']> }>>;
  CollectionListOptions: ResolverTypeWrapper<Partial<CollectionListOptions>>;
  CollectionResult: ResolverTypeWrapper<Partial<Omit<CollectionResult, 'collection'> & { collection: ResolversTypes['Collection'] }>>;
  CollectionSortParameter: ResolverTypeWrapper<Partial<CollectionSortParameter>>;
  CollectionTranslation: ResolverTypeWrapper<Partial<CollectionTranslation>>;
  ConfigArg: ResolverTypeWrapper<Partial<ConfigArg>>;
  ConfigArgDefinition: ResolverTypeWrapper<Partial<ConfigArgDefinition>>;
  ConfigArgInput: ResolverTypeWrapper<Partial<ConfigArgInput>>;
  ConfigurableOperation: ResolverTypeWrapper<Partial<ConfigurableOperation>>;
  ConfigurableOperationDefinition: ResolverTypeWrapper<Partial<ConfigurableOperationDefinition>>;
  ConfigurableOperationInput: ResolverTypeWrapper<Partial<ConfigurableOperationInput>>;
  Coordinate: ResolverTypeWrapper<Partial<Coordinate>>;
  CoordinateInput: ResolverTypeWrapper<Partial<CoordinateInput>>;
  Country: ResolverTypeWrapper<Partial<Omit<Country, 'parent'> & { parent?: Maybe<ResolversTypes['Region']> }>>;
  CountryFilterParameter: ResolverTypeWrapper<Partial<CountryFilterParameter>>;
  CountryList: ResolverTypeWrapper<Partial<Omit<CountryList, 'items'> & { items: Array<ResolversTypes['Country']> }>>;
  CountryListOptions: ResolverTypeWrapper<Partial<CountryListOptions>>;
  CountrySortParameter: ResolverTypeWrapper<Partial<CountrySortParameter>>;
  CountryTranslationInput: ResolverTypeWrapper<Partial<CountryTranslationInput>>;
  CouponCodeExpiredError: ResolverTypeWrapper<Partial<CouponCodeExpiredError>>;
  CouponCodeInvalidError: ResolverTypeWrapper<Partial<CouponCodeInvalidError>>;
  CouponCodeLimitError: ResolverTypeWrapper<Partial<CouponCodeLimitError>>;
  CreateAddressInput: ResolverTypeWrapper<Partial<CreateAddressInput>>;
  CreateAdministratorInput: ResolverTypeWrapper<Partial<CreateAdministratorInput>>;
  CreateAssetInput: ResolverTypeWrapper<Partial<CreateAssetInput>>;
  CreateAssetResult: Partial<ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['CreateAssetResult']>>;
  CreateChannelInput: ResolverTypeWrapper<Partial<CreateChannelInput>>;
  CreateChannelResult: Partial<ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['CreateChannelResult']>>;
  CreateCollectionInput: ResolverTypeWrapper<Partial<CreateCollectionInput>>;
  CreateCollectionTranslationInput: ResolverTypeWrapper<Partial<CreateCollectionTranslationInput>>;
  CreateCountryInput: ResolverTypeWrapper<Partial<CreateCountryInput>>;
  CreateCustomerGroupInput: ResolverTypeWrapper<Partial<CreateCustomerGroupInput>>;
  CreateCustomerInput: ResolverTypeWrapper<Partial<CreateCustomerInput>>;
  CreateCustomerResult: Partial<ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['CreateCustomerResult']>>;
  CreateFacetInput: ResolverTypeWrapper<Partial<CreateFacetInput>>;
  CreateFacetValueInput: ResolverTypeWrapper<Partial<CreateFacetValueInput>>;
  CreateFacetValueWithFacetInput: ResolverTypeWrapper<Partial<CreateFacetValueWithFacetInput>>;
  CreateFulfillmentError: ResolverTypeWrapper<Partial<CreateFulfillmentError>>;
  CreateGroupOptionInput: ResolverTypeWrapper<Partial<CreateGroupOptionInput>>;
  CreatePaymentMethodInput: ResolverTypeWrapper<Partial<CreatePaymentMethodInput>>;
  CreateProductInput: ResolverTypeWrapper<Partial<CreateProductInput>>;
  CreateProductOptionGroupInput: ResolverTypeWrapper<Partial<CreateProductOptionGroupInput>>;
  CreateProductOptionInput: ResolverTypeWrapper<Partial<CreateProductOptionInput>>;
  CreateProductVariantInput: ResolverTypeWrapper<Partial<CreateProductVariantInput>>;
  CreateProductVariantOptionInput: ResolverTypeWrapper<Partial<CreateProductVariantOptionInput>>;
  CreateProductVariantPriceInput: ResolverTypeWrapper<Partial<CreateProductVariantPriceInput>>;
  CreatePromotionInput: ResolverTypeWrapper<Partial<CreatePromotionInput>>;
  CreatePromotionResult: Partial<ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['CreatePromotionResult']>>;
  CreateProvinceInput: ResolverTypeWrapper<Partial<CreateProvinceInput>>;
  CreateRoleInput: ResolverTypeWrapper<Partial<CreateRoleInput>>;
  CreateSellerInput: ResolverTypeWrapper<Partial<CreateSellerInput>>;
  CreateShippingMethodInput: ResolverTypeWrapper<Partial<CreateShippingMethodInput>>;
  CreateStockLocationInput: ResolverTypeWrapper<Partial<CreateStockLocationInput>>;
  CreateTagInput: ResolverTypeWrapper<Partial<CreateTagInput>>;
  CreateTaxCategoryInput: ResolverTypeWrapper<Partial<CreateTaxCategoryInput>>;
  CreateTaxRateInput: ResolverTypeWrapper<Partial<CreateTaxRateInput>>;
  CreateZoneInput: ResolverTypeWrapper<Partial<CreateZoneInput>>;
  CurrencyCode: ResolverTypeWrapper<Partial<CurrencyCode>>;
  CurrentUser: ResolverTypeWrapper<Partial<CurrentUser>>;
  CurrentUserChannel: ResolverTypeWrapper<Partial<CurrentUserChannel>>;
  CustomField: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['CustomField']>;
  CustomFieldConfig: Partial<ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['CustomFieldConfig']>>;
  CustomFields: ResolverTypeWrapper<Partial<Omit<CustomFields, 'Address' | 'Administrator' | 'Asset' | 'Channel' | 'Collection' | 'Customer' | 'CustomerGroup' | 'Facet' | 'FacetValue' | 'Fulfillment' | 'GlobalSettings' | 'HistoryEntry' | 'Order' | 'OrderLine' | 'Payment' | 'PaymentMethod' | 'Product' | 'ProductOption' | 'ProductOptionGroup' | 'ProductVariant' | 'ProductVariantPrice' | 'Promotion' | 'Refund' | 'Region' | 'Seller' | 'Session' | 'ShippingLine' | 'ShippingMethod' | 'StockLevel' | 'StockLocation' | 'StockMovement' | 'TaxCategory' | 'TaxRate' | 'User' | 'Zone'> & { Address: Array<ResolversTypes['CustomFieldConfig']>, Administrator: Array<ResolversTypes['CustomFieldConfig']>, Asset: Array<ResolversTypes['CustomFieldConfig']>, Channel: Array<ResolversTypes['CustomFieldConfig']>, Collection: Array<ResolversTypes['CustomFieldConfig']>, Customer: Array<ResolversTypes['CustomFieldConfig']>, CustomerGroup: Array<ResolversTypes['CustomFieldConfig']>, Facet: Array<ResolversTypes['CustomFieldConfig']>, FacetValue: Array<ResolversTypes['CustomFieldConfig']>, Fulfillment: Array<ResolversTypes['CustomFieldConfig']>, GlobalSettings: Array<ResolversTypes['CustomFieldConfig']>, HistoryEntry: Array<ResolversTypes['CustomFieldConfig']>, Order: Array<ResolversTypes['CustomFieldConfig']>, OrderLine: Array<ResolversTypes['CustomFieldConfig']>, Payment: Array<ResolversTypes['CustomFieldConfig']>, PaymentMethod: Array<ResolversTypes['CustomFieldConfig']>, Product: Array<ResolversTypes['CustomFieldConfig']>, ProductOption: Array<ResolversTypes['CustomFieldConfig']>, ProductOptionGroup: Array<ResolversTypes['CustomFieldConfig']>, ProductVariant: Array<ResolversTypes['CustomFieldConfig']>, ProductVariantPrice: Array<ResolversTypes['CustomFieldConfig']>, Promotion: Array<ResolversTypes['CustomFieldConfig']>, Refund: Array<ResolversTypes['CustomFieldConfig']>, Region: Array<ResolversTypes['CustomFieldConfig']>, Seller: Array<ResolversTypes['CustomFieldConfig']>, Session: Array<ResolversTypes['CustomFieldConfig']>, ShippingLine: Array<ResolversTypes['CustomFieldConfig']>, ShippingMethod: Array<ResolversTypes['CustomFieldConfig']>, StockLevel: Array<ResolversTypes['CustomFieldConfig']>, StockLocation: Array<ResolversTypes['CustomFieldConfig']>, StockMovement: Array<ResolversTypes['CustomFieldConfig']>, TaxCategory: Array<ResolversTypes['CustomFieldConfig']>, TaxRate: Array<ResolversTypes['CustomFieldConfig']>, User: Array<ResolversTypes['CustomFieldConfig']>, Zone: Array<ResolversTypes['CustomFieldConfig']> }>>;
  Customer: ResolverTypeWrapper<Customer>;
  CustomerFilterParameter: ResolverTypeWrapper<Partial<CustomerFilterParameter>>;
  CustomerGroup: ResolverTypeWrapper<Partial<Omit<CustomerGroup, 'customers'> & { customers: ResolversTypes['CustomerList'] }>>;
  CustomerGroupFilterParameter: ResolverTypeWrapper<Partial<CustomerGroupFilterParameter>>;
  CustomerGroupList: ResolverTypeWrapper<Partial<Omit<CustomerGroupList, 'items'> & { items: Array<ResolversTypes['CustomerGroup']> }>>;
  CustomerGroupListOptions: ResolverTypeWrapper<Partial<CustomerGroupListOptions>>;
  CustomerGroupSortParameter: ResolverTypeWrapper<Partial<CustomerGroupSortParameter>>;
  CustomerList: ResolverTypeWrapper<Partial<Omit<CustomerList, 'items'> & { items: Array<ResolversTypes['Customer']> }>>;
  CustomerListOptions: ResolverTypeWrapper<Partial<CustomerListOptions>>;
  CustomerSortParameter: ResolverTypeWrapper<Partial<CustomerSortParameter>>;
  CustomerWithTokens: ResolverTypeWrapper<Partial<Omit<CustomerWithTokens, 'customer' | 'tokens'> & { customer: ResolversTypes['Customer'], tokens: Array<ResolversTypes['SubscribedDevice']> }>>;
  DateListOperators: ResolverTypeWrapper<Partial<DateListOperators>>;
  DateOperators: ResolverTypeWrapper<Partial<DateOperators>>;
  DateRange: ResolverTypeWrapper<Partial<DateRange>>;
  DateTime: ResolverTypeWrapper<Partial<Scalars['DateTime']['output']>>;
  DateTimeCustomFieldConfig: ResolverTypeWrapper<Partial<DateTimeCustomFieldConfig>>;
  DateTimeStructFieldConfig: ResolverTypeWrapper<Partial<DateTimeStructFieldConfig>>;
  DeleteAssetInput: ResolverTypeWrapper<Partial<DeleteAssetInput>>;
  DeleteAssetsInput: ResolverTypeWrapper<Partial<DeleteAssetsInput>>;
  DeleteStockLocationInput: ResolverTypeWrapper<Partial<DeleteStockLocationInput>>;
  DeletionResponse: ResolverTypeWrapper<Partial<DeletionResponse>>;
  DeletionResult: ResolverTypeWrapper<Partial<DeletionResult>>;
  Discount: ResolverTypeWrapper<Partial<Discount>>;
  DuplicateEntityError: ResolverTypeWrapper<Partial<DuplicateEntityError>>;
  DuplicateEntityInput: ResolverTypeWrapper<Partial<DuplicateEntityInput>>;
  DuplicateEntityResult: Partial<ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['DuplicateEntityResult']>>;
  DuplicateEntitySuccess: ResolverTypeWrapper<Partial<DuplicateEntitySuccess>>;
  EmailAddressConflictError: ResolverTypeWrapper<Partial<EmailAddressConflictError>>;
  EmptyOrderLineSelectionError: ResolverTypeWrapper<Partial<EmptyOrderLineSelectionError>>;
  EntityCustomFields: ResolverTypeWrapper<Partial<Omit<EntityCustomFields, 'customFields'> & { customFields: Array<ResolversTypes['CustomFieldConfig']> }>>;
  EntityDuplicatorDefinition: ResolverTypeWrapper<Partial<EntityDuplicatorDefinition>>;
  ErrorCode: ResolverTypeWrapper<Partial<ErrorCode>>;
  ErrorResult: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['ErrorResult']>;
  Facet: ResolverTypeWrapper<Partial<Facet>>;
  FacetFilterParameter: ResolverTypeWrapper<Partial<FacetFilterParameter>>;
  FacetInUseError: ResolverTypeWrapper<Partial<FacetInUseError>>;
  FacetList: ResolverTypeWrapper<Partial<FacetList>>;
  FacetListOptions: ResolverTypeWrapper<Partial<FacetListOptions>>;
  FacetSortParameter: ResolverTypeWrapper<Partial<FacetSortParameter>>;
  FacetTranslation: ResolverTypeWrapper<Partial<FacetTranslation>>;
  FacetTranslationInput: ResolverTypeWrapper<Partial<FacetTranslationInput>>;
  FacetValue: ResolverTypeWrapper<Partial<FacetValue>>;
  FacetValueFilterInput: ResolverTypeWrapper<Partial<FacetValueFilterInput>>;
  FacetValueFilterParameter: ResolverTypeWrapper<Partial<FacetValueFilterParameter>>;
  FacetValueList: ResolverTypeWrapper<Partial<FacetValueList>>;
  FacetValueListOptions: ResolverTypeWrapper<Partial<FacetValueListOptions>>;
  FacetValueResult: ResolverTypeWrapper<Partial<FacetValueResult>>;
  FacetValueSortParameter: ResolverTypeWrapper<Partial<FacetValueSortParameter>>;
  FacetValueTranslation: ResolverTypeWrapper<Partial<FacetValueTranslation>>;
  FacetValueTranslationInput: ResolverTypeWrapper<Partial<FacetValueTranslationInput>>;
  Float: ResolverTypeWrapper<Partial<Scalars['Float']['output']>>;
  FloatCustomFieldConfig: ResolverTypeWrapper<Partial<FloatCustomFieldConfig>>;
  FloatStructFieldConfig: ResolverTypeWrapper<Partial<FloatStructFieldConfig>>;
  FulfillOrderInput: ResolverTypeWrapper<Partial<FulfillOrderInput>>;
  Fulfillment: ResolverTypeWrapper<Partial<Omit<Fulfillment, 'lines' | 'summary'> & { lines: Array<ResolversTypes['FulfillmentLine']>, summary: Array<ResolversTypes['FulfillmentLine']> }>>;
  FulfillmentLine: ResolverTypeWrapper<Partial<Omit<FulfillmentLine, 'fulfillment' | 'orderLine'> & { fulfillment: ResolversTypes['Fulfillment'], orderLine: ResolversTypes['OrderLine'] }>>;
  FulfillmentStateTransitionError: ResolverTypeWrapper<Partial<FulfillmentStateTransitionError>>;
  GlobalFlag: ResolverTypeWrapper<Partial<GlobalFlag>>;
  GlobalSettings: ResolverTypeWrapper<Partial<Omit<GlobalSettings, 'serverConfig'> & { serverConfig: ResolversTypes['ServerConfig'] }>>;
  GuestCheckoutError: ResolverTypeWrapper<Partial<GuestCheckoutError>>;
  HistoryEntry: ResolverTypeWrapper<Partial<Omit<HistoryEntry, 'administrator'> & { administrator?: Maybe<ResolversTypes['Administrator']> }>>;
  HistoryEntryFilterParameter: ResolverTypeWrapper<Partial<HistoryEntryFilterParameter>>;
  HistoryEntryList: ResolverTypeWrapper<Partial<Omit<HistoryEntryList, 'items'> & { items: Array<ResolversTypes['HistoryEntry']> }>>;
  HistoryEntryListOptions: ResolverTypeWrapper<Partial<HistoryEntryListOptions>>;
  HistoryEntrySortParameter: ResolverTypeWrapper<Partial<HistoryEntrySortParameter>>;
  HistoryEntryType: ResolverTypeWrapper<Partial<HistoryEntryType>>;
  ID: ResolverTypeWrapper<Partial<Scalars['ID']['output']>>;
  IDListOperators: ResolverTypeWrapper<Partial<IdListOperators>>;
  IDOperators: ResolverTypeWrapper<Partial<IdOperators>>;
  ImportInfo: ResolverTypeWrapper<Partial<ImportInfo>>;
  IneligibleShippingMethodError: ResolverTypeWrapper<Partial<IneligibleShippingMethodError>>;
  InsufficientStockError: ResolverTypeWrapper<Partial<Omit<InsufficientStockError, 'order'> & { order: ResolversTypes['Order'] }>>;
  InsufficientStockOnHandError: ResolverTypeWrapper<Partial<InsufficientStockOnHandError>>;
  Int: ResolverTypeWrapper<Partial<Scalars['Int']['output']>>;
  IntCustomFieldConfig: ResolverTypeWrapper<Partial<IntCustomFieldConfig>>;
  IntStructFieldConfig: ResolverTypeWrapper<Partial<IntStructFieldConfig>>;
  InvalidCredentialsError: ResolverTypeWrapper<Partial<InvalidCredentialsError>>;
  InvalidFulfillmentHandlerError: ResolverTypeWrapper<Partial<InvalidFulfillmentHandlerError>>;
  ItemsAlreadyFulfilledError: ResolverTypeWrapper<Partial<ItemsAlreadyFulfilledError>>;
  JSON: ResolverTypeWrapper<Partial<Scalars['JSON']['output']>>;
  Job: ResolverTypeWrapper<Partial<Job>>;
  JobBufferSize: ResolverTypeWrapper<Partial<JobBufferSize>>;
  JobFilterParameter: ResolverTypeWrapper<Partial<JobFilterParameter>>;
  JobList: ResolverTypeWrapper<Partial<JobList>>;
  JobListOptions: ResolverTypeWrapper<Partial<JobListOptions>>;
  JobQueue: ResolverTypeWrapper<Partial<JobQueue>>;
  JobSortParameter: ResolverTypeWrapper<Partial<JobSortParameter>>;
  JobState: ResolverTypeWrapper<Partial<JobState>>;
  LanguageCode: ResolverTypeWrapper<Partial<LanguageCode>>;
  LanguageNotAvailableError: ResolverTypeWrapper<Partial<LanguageNotAvailableError>>;
  LocaleStringCustomFieldConfig: ResolverTypeWrapper<Partial<LocaleStringCustomFieldConfig>>;
  LocaleTextCustomFieldConfig: ResolverTypeWrapper<Partial<LocaleTextCustomFieldConfig>>;
  LocalizedString: ResolverTypeWrapper<Partial<LocalizedString>>;
  LogicalOperator: ResolverTypeWrapper<Partial<LogicalOperator>>;
  ManualPaymentInput: ResolverTypeWrapper<Partial<ManualPaymentInput>>;
  ManualPaymentStateError: ResolverTypeWrapper<Partial<ManualPaymentStateError>>;
  MetricInterval: ResolverTypeWrapper<Partial<MetricInterval>>;
  MetricSummary: ResolverTypeWrapper<Partial<MetricSummary>>;
  MetricSummaryEntry: ResolverTypeWrapper<Partial<MetricSummaryEntry>>;
  MetricSummaryInput: ResolverTypeWrapper<Partial<MetricSummaryInput>>;
  MetricType: ResolverTypeWrapper<Partial<MetricType>>;
  MimeTypeError: ResolverTypeWrapper<Partial<MimeTypeError>>;
  MissingConditionsError: ResolverTypeWrapper<Partial<MissingConditionsError>>;
  ModifyOrderInput: ResolverTypeWrapper<Partial<ModifyOrderInput>>;
  ModifyOrderOptions: ResolverTypeWrapper<Partial<ModifyOrderOptions>>;
  ModifyOrderResult: Partial<ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['ModifyOrderResult']>>;
  Money: ResolverTypeWrapper<Partial<Scalars['Money']['output']>>;
  MoveCollectionInput: ResolverTypeWrapper<Partial<MoveCollectionInput>>;
  MultipleOrderError: ResolverTypeWrapper<Partial<MultipleOrderError>>;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  NativeAuthInput: ResolverTypeWrapper<Partial<NativeAuthInput>>;
  NativeAuthStrategyError: ResolverTypeWrapper<Partial<NativeAuthStrategyError>>;
  NativeAuthenticationResult: Partial<ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['NativeAuthenticationResult']>>;
  NegativeQuantityError: ResolverTypeWrapper<Partial<NegativeQuantityError>>;
  NoActiveOrderError: ResolverTypeWrapper<Partial<NoActiveOrderError>>;
  NoChangesSpecifiedError: ResolverTypeWrapper<Partial<NoChangesSpecifiedError>>;
  Node: ResolverTypeWrapper<VendureEntity>;
  NothingToRefundError: ResolverTypeWrapper<Partial<NothingToRefundError>>;
  NumberListOperators: ResolverTypeWrapper<Partial<NumberListOperators>>;
  NumberOperators: ResolverTypeWrapper<Partial<NumberOperators>>;
  NumberRange: ResolverTypeWrapper<Partial<NumberRange>>;
  Order: ResolverTypeWrapper<Partial<Omit<Order, 'aggregateOrder' | 'billingAddress' | 'channels' | 'customer' | 'discounts' | 'fulfillments' | 'history' | 'lines' | 'modifications' | 'payments' | 'sellerOrders' | 'shippingAddress'> & { aggregateOrder?: Maybe<ResolversTypes['Order']>, billingAddress?: Maybe<ResolversTypes['OrderAddress']>, channels: Array<ResolversTypes['Channel']>, customer?: Maybe<ResolversTypes['Customer']>, discounts: Array<ResolversTypes['Discount']>, fulfillments?: Maybe<Array<ResolversTypes['Fulfillment']>>, history: ResolversTypes['HistoryEntryList'], lines: Array<ResolversTypes['OrderLine']>, modifications: Array<ResolversTypes['OrderModification']>, payments?: Maybe<Array<ResolversTypes['Payment']>>, sellerOrders?: Maybe<Array<ResolversTypes['Order']>>, shippingAddress?: Maybe<ResolversTypes['OrderAddress']> }>>;
  OrderAddress: ResolverTypeWrapper<Partial<OrderAddress>>;
  OrderFilterParameter: ResolverTypeWrapper<Partial<OrderFilterParameter>>;
  OrderInterceptorError: ResolverTypeWrapper<Partial<OrderInterceptorError>>;
  OrderLimitError: ResolverTypeWrapper<Partial<OrderLimitError>>;
  OrderLine: ResolverTypeWrapper<Partial<Omit<OrderLine, 'discounts' | 'fulfillmentLines' | 'order' | 'productVariant'> & { discounts: Array<ResolversTypes['Discount']>, fulfillmentLines?: Maybe<Array<ResolversTypes['FulfillmentLine']>>, order: ResolversTypes['Order'], productVariant: ResolversTypes['ProductVariant'] }>>;
  OrderLineInput: ResolverTypeWrapper<Partial<OrderLineInput>>;
  OrderList: ResolverTypeWrapper<Partial<Omit<OrderList, 'items'> & { items: Array<ResolversTypes['Order']> }>>;
  OrderListOptions: ResolverTypeWrapper<Partial<OrderListOptions>>;
  OrderModification: ResolverTypeWrapper<Partial<Omit<OrderModification, 'lines' | 'payment' | 'refund'> & { lines: Array<ResolversTypes['OrderModificationLine']>, payment?: Maybe<ResolversTypes['Payment']>, refund?: Maybe<ResolversTypes['Refund']> }>>;
  OrderModificationError: ResolverTypeWrapper<Partial<OrderModificationError>>;
  OrderModificationLine: ResolverTypeWrapper<Partial<Omit<OrderModificationLine, 'modification' | 'orderLine'> & { modification: ResolversTypes['OrderModification'], orderLine: ResolversTypes['OrderLine'] }>>;
  OrderModificationStateError: ResolverTypeWrapper<Partial<OrderModificationStateError>>;
  OrderProcessState: ResolverTypeWrapper<Partial<OrderProcessState>>;
  OrderSortParameter: ResolverTypeWrapper<Partial<OrderSortParameter>>;
  OrderStateTransitionError: ResolverTypeWrapper<Partial<OrderStateTransitionError>>;
  OrderTaxSummary: ResolverTypeWrapper<Partial<OrderTaxSummary>>;
  OrderType: ResolverTypeWrapper<Partial<OrderType>>;
  PaginatedList: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['PaginatedList']>;
  Payment: ResolverTypeWrapper<Partial<Omit<Payment, 'refunds'> & { refunds: Array<ResolversTypes['Refund']> }>>;
  PaymentMethod: ResolverTypeWrapper<Partial<PaymentMethod>>;
  PaymentMethodFilterParameter: ResolverTypeWrapper<Partial<PaymentMethodFilterParameter>>;
  PaymentMethodList: ResolverTypeWrapper<Partial<PaymentMethodList>>;
  PaymentMethodListOptions: ResolverTypeWrapper<Partial<PaymentMethodListOptions>>;
  PaymentMethodMissingError: ResolverTypeWrapper<Partial<PaymentMethodMissingError>>;
  PaymentMethodQuote: ResolverTypeWrapper<Partial<PaymentMethodQuote>>;
  PaymentMethodSortParameter: ResolverTypeWrapper<Partial<PaymentMethodSortParameter>>;
  PaymentMethodTranslation: ResolverTypeWrapper<Partial<PaymentMethodTranslation>>;
  PaymentMethodTranslationInput: ResolverTypeWrapper<Partial<PaymentMethodTranslationInput>>;
  PaymentOrderMismatchError: ResolverTypeWrapper<Partial<PaymentOrderMismatchError>>;
  PaymentStateTransitionError: ResolverTypeWrapper<Partial<PaymentStateTransitionError>>;
  Permission: ResolverTypeWrapper<Partial<Permission>>;
  PermissionDefinition: ResolverTypeWrapper<Partial<PermissionDefinition>>;
  PreviewCollectionVariantsInput: ResolverTypeWrapper<Partial<PreviewCollectionVariantsInput>>;
  PriceRange: ResolverTypeWrapper<Partial<PriceRange>>;
  Product: ResolverTypeWrapper<Partial<Omit<Product, 'channels' | 'collections' | 'variantList' | 'variants'> & { channels: Array<ResolversTypes['Channel']>, collections: Array<ResolversTypes['Collection']>, variantList: ResolversTypes['ProductVariantList'], variants: Array<ResolversTypes['ProductVariant']> }>>;
  ProductFilterParameter: ResolverTypeWrapper<Partial<ProductFilterParameter>>;
  ProductList: ResolverTypeWrapper<Partial<Omit<ProductList, 'items'> & { items: Array<ResolversTypes['Product']> }>>;
  ProductListOptions: ResolverTypeWrapper<Partial<ProductListOptions>>;
  ProductOption: ResolverTypeWrapper<Partial<ProductOption>>;
  ProductOptionGroup: ResolverTypeWrapper<Partial<ProductOptionGroup>>;
  ProductOptionGroupTranslation: ResolverTypeWrapper<Partial<ProductOptionGroupTranslation>>;
  ProductOptionGroupTranslationInput: ResolverTypeWrapper<Partial<ProductOptionGroupTranslationInput>>;
  ProductOptionInUseError: ResolverTypeWrapper<Partial<ProductOptionInUseError>>;
  ProductOptionTranslation: ResolverTypeWrapper<Partial<ProductOptionTranslation>>;
  ProductOptionTranslationInput: ResolverTypeWrapper<Partial<ProductOptionTranslationInput>>;
  ProductSortParameter: ResolverTypeWrapper<Partial<ProductSortParameter>>;
  ProductTranslation: ResolverTypeWrapper<Partial<ProductTranslation>>;
  ProductTranslationInput: ResolverTypeWrapper<Partial<ProductTranslationInput>>;
  ProductVariant: ResolverTypeWrapper<Partial<Omit<ProductVariant, 'channels' | 'product' | 'stockMovements' | 'taxRateApplied'> & { channels: Array<ResolversTypes['Channel']>, product: ResolversTypes['Product'], stockMovements: ResolversTypes['StockMovementList'], taxRateApplied: ResolversTypes['TaxRate'] }>>;
  ProductVariantFilterParameter: ResolverTypeWrapper<Partial<ProductVariantFilterParameter>>;
  ProductVariantList: ResolverTypeWrapper<Partial<Omit<ProductVariantList, 'items'> & { items: Array<ResolversTypes['ProductVariant']> }>>;
  ProductVariantListOptions: ResolverTypeWrapper<Partial<ProductVariantListOptions>>;
  ProductVariantPrice: ResolverTypeWrapper<Partial<ProductVariantPrice>>;
  ProductVariantSortParameter: ResolverTypeWrapper<Partial<ProductVariantSortParameter>>;
  ProductVariantTranslation: ResolverTypeWrapper<Partial<ProductVariantTranslation>>;
  ProductVariantTranslationInput: ResolverTypeWrapper<Partial<ProductVariantTranslationInput>>;
  Promotion: ResolverTypeWrapper<Partial<Promotion>>;
  PromotionFilterParameter: ResolverTypeWrapper<Partial<PromotionFilterParameter>>;
  PromotionList: ResolverTypeWrapper<Partial<PromotionList>>;
  PromotionListOptions: ResolverTypeWrapper<Partial<PromotionListOptions>>;
  PromotionSortParameter: ResolverTypeWrapper<Partial<PromotionSortParameter>>;
  PromotionTranslation: ResolverTypeWrapper<Partial<PromotionTranslation>>;
  PromotionTranslationInput: ResolverTypeWrapper<Partial<PromotionTranslationInput>>;
  Province: ResolverTypeWrapper<Partial<Omit<Province, 'parent'> & { parent?: Maybe<ResolversTypes['Region']> }>>;
  ProvinceFilterParameter: ResolverTypeWrapper<Partial<ProvinceFilterParameter>>;
  ProvinceList: ResolverTypeWrapper<Partial<Omit<ProvinceList, 'items'> & { items: Array<ResolversTypes['Province']> }>>;
  ProvinceListOptions: ResolverTypeWrapper<Partial<ProvinceListOptions>>;
  ProvinceSortParameter: ResolverTypeWrapper<Partial<ProvinceSortParameter>>;
  ProvinceTranslationInput: ResolverTypeWrapper<Partial<ProvinceTranslationInput>>;
  PushNotificationResponse: ResolverTypeWrapper<Partial<PushNotificationResponse>>;
  QuantityTooGreatError: ResolverTypeWrapper<Partial<QuantityTooGreatError>>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Refund: ResolverTypeWrapper<Partial<Omit<Refund, 'lines'> & { lines: Array<ResolversTypes['RefundLine']> }>>;
  RefundAmountError: ResolverTypeWrapper<Partial<RefundAmountError>>;
  RefundLine: ResolverTypeWrapper<Partial<Omit<RefundLine, 'orderLine' | 'refund'> & { orderLine: ResolversTypes['OrderLine'], refund: ResolversTypes['Refund'] }>>;
  RefundOrderInput: ResolverTypeWrapper<Partial<RefundOrderInput>>;
  RefundOrderResult: Partial<ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['RefundOrderResult']>>;
  RefundOrderStateError: ResolverTypeWrapper<Partial<RefundOrderStateError>>;
  RefundPaymentIdMissingError: ResolverTypeWrapper<Partial<RefundPaymentIdMissingError>>;
  RefundStateTransitionError: ResolverTypeWrapper<Partial<RefundStateTransitionError>>;
  Region: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Region']>;
  RegionTranslation: ResolverTypeWrapper<Partial<RegionTranslation>>;
  RelationCustomFieldConfig: ResolverTypeWrapper<Partial<RelationCustomFieldConfig>>;
  Release: ResolverTypeWrapper<Partial<Omit<Release, 'productVariant'> & { productVariant: ResolversTypes['ProductVariant'] }>>;
  RemoveCollectionsFromChannelInput: ResolverTypeWrapper<Partial<RemoveCollectionsFromChannelInput>>;
  RemoveFacetFromChannelResult: Partial<ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['RemoveFacetFromChannelResult']>>;
  RemoveFacetsFromChannelInput: ResolverTypeWrapper<Partial<RemoveFacetsFromChannelInput>>;
  RemoveOptionGroupFromProductResult: Partial<ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['RemoveOptionGroupFromProductResult']>>;
  RemoveOrderItemsResult: Partial<ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['RemoveOrderItemsResult']>>;
  RemovePaymentMethodsFromChannelInput: ResolverTypeWrapper<Partial<RemovePaymentMethodsFromChannelInput>>;
  RemoveProductVariantsFromChannelInput: ResolverTypeWrapper<Partial<RemoveProductVariantsFromChannelInput>>;
  RemoveProductsFromChannelInput: ResolverTypeWrapper<Partial<RemoveProductsFromChannelInput>>;
  RemovePromotionsFromChannelInput: ResolverTypeWrapper<Partial<RemovePromotionsFromChannelInput>>;
  RemoveShippingMethodsFromChannelInput: ResolverTypeWrapper<Partial<RemoveShippingMethodsFromChannelInput>>;
  RemoveStockLocationsFromChannelInput: ResolverTypeWrapper<Partial<RemoveStockLocationsFromChannelInput>>;
  Return: ResolverTypeWrapper<Partial<Omit<Return, 'productVariant'> & { productVariant: ResolversTypes['ProductVariant'] }>>;
  Role: ResolverTypeWrapper<Partial<Omit<Role, 'channels'> & { channels: Array<ResolversTypes['Channel']> }>>;
  RoleFilterParameter: ResolverTypeWrapper<Partial<RoleFilterParameter>>;
  RoleList: ResolverTypeWrapper<Partial<Omit<RoleList, 'items'> & { items: Array<ResolversTypes['Role']> }>>;
  RoleListOptions: ResolverTypeWrapper<Partial<RoleListOptions>>;
  RoleSortParameter: ResolverTypeWrapper<Partial<RoleSortParameter>>;
  Sale: ResolverTypeWrapper<Partial<Omit<Sale, 'productVariant'> & { productVariant: ResolversTypes['ProductVariant'] }>>;
  ScheduledTask: ResolverTypeWrapper<Partial<ScheduledTask>>;
  SearchInput: ResolverTypeWrapper<Partial<SearchInput>>;
  SearchReindexResponse: ResolverTypeWrapper<Partial<SearchReindexResponse>>;
  SearchResponse: ResolverTypeWrapper<Partial<Omit<SearchResponse, 'collections' | 'items'> & { collections: Array<ResolversTypes['CollectionResult']>, items: Array<ResolversTypes['SearchResult']> }>>;
  SearchResult: ResolverTypeWrapper<Partial<Omit<SearchResult, 'price' | 'priceWithTax'> & { price: ResolversTypes['SearchResultPrice'], priceWithTax: ResolversTypes['SearchResultPrice'] }>>;
  SearchResultAsset: ResolverTypeWrapper<Partial<SearchResultAsset>>;
  SearchResultPrice: Partial<ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['SearchResultPrice']>>;
  SearchResultSortParameter: ResolverTypeWrapper<Partial<SearchResultSortParameter>>;
  Seller: ResolverTypeWrapper<Partial<Seller>>;
  SellerFilterParameter: ResolverTypeWrapper<Partial<SellerFilterParameter>>;
  SellerList: ResolverTypeWrapper<Partial<SellerList>>;
  SellerListOptions: ResolverTypeWrapper<Partial<SellerListOptions>>;
  SellerSortParameter: ResolverTypeWrapper<Partial<SellerSortParameter>>;
  SendNotificationResult: ResolverTypeWrapper<Partial<SendNotificationResult>>;
  SendPushNotificationInput: ResolverTypeWrapper<Partial<SendPushNotificationInput>>;
  ServerConfig: ResolverTypeWrapper<Partial<Omit<ServerConfig, 'customFieldConfig' | 'entityCustomFields'> & { customFieldConfig: ResolversTypes['CustomFields'], entityCustomFields: Array<ResolversTypes['EntityCustomFields']> }>>;
  SetCustomerForDraftOrderResult: Partial<ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['SetCustomerForDraftOrderResult']>>;
  SetOrderCustomerInput: ResolverTypeWrapper<Partial<SetOrderCustomerInput>>;
  SetOrderShippingMethodResult: Partial<ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['SetOrderShippingMethodResult']>>;
  SetSettingsStoreValueResult: ResolverTypeWrapper<Partial<SetSettingsStoreValueResult>>;
  SettingsStoreInput: ResolverTypeWrapper<Partial<SettingsStoreInput>>;
  SettlePaymentError: ResolverTypeWrapper<Partial<SettlePaymentError>>;
  SettlePaymentResult: Partial<ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['SettlePaymentResult']>>;
  SettleRefundInput: ResolverTypeWrapper<Partial<SettleRefundInput>>;
  SettleRefundResult: Partial<ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['SettleRefundResult']>>;
  ShippingLine: ResolverTypeWrapper<Partial<Omit<ShippingLine, 'discounts'> & { discounts: Array<ResolversTypes['Discount']> }>>;
  ShippingMethod: ResolverTypeWrapper<Partial<ShippingMethod>>;
  ShippingMethodFilterParameter: ResolverTypeWrapper<Partial<ShippingMethodFilterParameter>>;
  ShippingMethodList: ResolverTypeWrapper<Partial<ShippingMethodList>>;
  ShippingMethodListOptions: ResolverTypeWrapper<Partial<ShippingMethodListOptions>>;
  ShippingMethodQuote: ResolverTypeWrapper<Partial<ShippingMethodQuote>>;
  ShippingMethodSortParameter: ResolverTypeWrapper<Partial<ShippingMethodSortParameter>>;
  ShippingMethodTranslation: ResolverTypeWrapper<Partial<ShippingMethodTranslation>>;
  ShippingMethodTranslationInput: ResolverTypeWrapper<Partial<ShippingMethodTranslationInput>>;
  SinglePrice: ResolverTypeWrapper<Partial<SinglePrice>>;
  SortOrder: ResolverTypeWrapper<Partial<SortOrder>>;
  StockAdjustment: ResolverTypeWrapper<Partial<Omit<StockAdjustment, 'productVariant'> & { productVariant: ResolversTypes['ProductVariant'] }>>;
  StockLevel: ResolverTypeWrapper<Partial<StockLevel>>;
  StockLevelInput: ResolverTypeWrapper<Partial<StockLevelInput>>;
  StockLocation: ResolverTypeWrapper<Partial<StockLocation>>;
  StockLocationFilterParameter: ResolverTypeWrapper<Partial<StockLocationFilterParameter>>;
  StockLocationList: ResolverTypeWrapper<Partial<StockLocationList>>;
  StockLocationListOptions: ResolverTypeWrapper<Partial<StockLocationListOptions>>;
  StockLocationSortParameter: ResolverTypeWrapper<Partial<StockLocationSortParameter>>;
  StockMovement: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['StockMovement']>;
  StockMovementItem: Partial<ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['StockMovementItem']>>;
  StockMovementList: ResolverTypeWrapper<Partial<Omit<StockMovementList, 'items'> & { items: Array<ResolversTypes['StockMovementItem']> }>>;
  StockMovementListOptions: ResolverTypeWrapper<Partial<StockMovementListOptions>>;
  StockMovementType: ResolverTypeWrapper<Partial<StockMovementType>>;
  String: ResolverTypeWrapper<Partial<Scalars['String']['output']>>;
  StringCustomFieldConfig: ResolverTypeWrapper<Partial<StringCustomFieldConfig>>;
  StringFieldOption: ResolverTypeWrapper<Partial<StringFieldOption>>;
  StringListOperators: ResolverTypeWrapper<Partial<StringListOperators>>;
  StringOperators: ResolverTypeWrapper<Partial<StringOperators>>;
  StringStructFieldConfig: ResolverTypeWrapper<Partial<StringStructFieldConfig>>;
  StructCustomFieldConfig: ResolverTypeWrapper<Partial<Omit<StructCustomFieldConfig, 'fields'> & { fields: Array<ResolversTypes['StructFieldConfig']> }>>;
  StructField: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['StructField']>;
  StructFieldConfig: Partial<ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['StructFieldConfig']>>;
  SubscribedDevice: ResolverTypeWrapper<SubscribedDevices>;
  Success: ResolverTypeWrapper<Partial<Success>>;
  Surcharge: ResolverTypeWrapper<Partial<Surcharge>>;
  SurchargeInput: ResolverTypeWrapper<Partial<SurchargeInput>>;
  Tag: ResolverTypeWrapper<Partial<Tag>>;
  TagFilterParameter: ResolverTypeWrapper<Partial<TagFilterParameter>>;
  TagList: ResolverTypeWrapper<Partial<TagList>>;
  TagListOptions: ResolverTypeWrapper<Partial<TagListOptions>>;
  TagSortParameter: ResolverTypeWrapper<Partial<TagSortParameter>>;
  TaxCategory: ResolverTypeWrapper<Partial<TaxCategory>>;
  TaxCategoryFilterParameter: ResolverTypeWrapper<Partial<TaxCategoryFilterParameter>>;
  TaxCategoryList: ResolverTypeWrapper<Partial<TaxCategoryList>>;
  TaxCategoryListOptions: ResolverTypeWrapper<Partial<TaxCategoryListOptions>>;
  TaxCategorySortParameter: ResolverTypeWrapper<Partial<TaxCategorySortParameter>>;
  TaxLine: ResolverTypeWrapper<Partial<TaxLine>>;
  TaxRate: ResolverTypeWrapper<Partial<Omit<TaxRate, 'customerGroup' | 'zone'> & { customerGroup?: Maybe<ResolversTypes['CustomerGroup']>, zone: ResolversTypes['Zone'] }>>;
  TaxRateFilterParameter: ResolverTypeWrapper<Partial<TaxRateFilterParameter>>;
  TaxRateList: ResolverTypeWrapper<Partial<Omit<TaxRateList, 'items'> & { items: Array<ResolversTypes['TaxRate']> }>>;
  TaxRateListOptions: ResolverTypeWrapper<Partial<TaxRateListOptions>>;
  TaxRateSortParameter: ResolverTypeWrapper<Partial<TaxRateSortParameter>>;
  TestEligibleShippingMethodsInput: ResolverTypeWrapper<Partial<TestEligibleShippingMethodsInput>>;
  TestShippingMethodInput: ResolverTypeWrapper<Partial<TestShippingMethodInput>>;
  TestShippingMethodOrderLineInput: ResolverTypeWrapper<Partial<TestShippingMethodOrderLineInput>>;
  TestShippingMethodQuote: ResolverTypeWrapper<Partial<TestShippingMethodQuote>>;
  TestShippingMethodResult: ResolverTypeWrapper<Partial<TestShippingMethodResult>>;
  TextCustomFieldConfig: ResolverTypeWrapper<Partial<TextCustomFieldConfig>>;
  TextStructFieldConfig: ResolverTypeWrapper<Partial<TextStructFieldConfig>>;
  TransitionFulfillmentToStateResult: Partial<ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['TransitionFulfillmentToStateResult']>>;
  TransitionOrderToStateResult: Partial<ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['TransitionOrderToStateResult']>>;
  TransitionPaymentToStateResult: Partial<ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['TransitionPaymentToStateResult']>>;
  UpdateActiveAdministratorInput: ResolverTypeWrapper<Partial<UpdateActiveAdministratorInput>>;
  UpdateAddressInput: ResolverTypeWrapper<Partial<UpdateAddressInput>>;
  UpdateAdministratorInput: ResolverTypeWrapper<Partial<UpdateAdministratorInput>>;
  UpdateAssetInput: ResolverTypeWrapper<Partial<UpdateAssetInput>>;
  UpdateChannelInput: ResolverTypeWrapper<Partial<UpdateChannelInput>>;
  UpdateChannelResult: Partial<ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['UpdateChannelResult']>>;
  UpdateCollectionInput: ResolverTypeWrapper<Partial<UpdateCollectionInput>>;
  UpdateCollectionTranslationInput: ResolverTypeWrapper<Partial<UpdateCollectionTranslationInput>>;
  UpdateCountryInput: ResolverTypeWrapper<Partial<UpdateCountryInput>>;
  UpdateCustomerGroupInput: ResolverTypeWrapper<Partial<UpdateCustomerGroupInput>>;
  UpdateCustomerInput: ResolverTypeWrapper<Partial<UpdateCustomerInput>>;
  UpdateCustomerNoteInput: ResolverTypeWrapper<Partial<UpdateCustomerNoteInput>>;
  UpdateCustomerResult: Partial<ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['UpdateCustomerResult']>>;
  UpdateFacetInput: ResolverTypeWrapper<Partial<UpdateFacetInput>>;
  UpdateFacetValueInput: ResolverTypeWrapper<Partial<UpdateFacetValueInput>>;
  UpdateGlobalSettingsInput: ResolverTypeWrapper<Partial<UpdateGlobalSettingsInput>>;
  UpdateGlobalSettingsResult: Partial<ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['UpdateGlobalSettingsResult']>>;
  UpdateOrderAddressInput: ResolverTypeWrapper<Partial<UpdateOrderAddressInput>>;
  UpdateOrderInput: ResolverTypeWrapper<Partial<UpdateOrderInput>>;
  UpdateOrderItemErrorResult: Partial<ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['UpdateOrderItemErrorResult']>>;
  UpdateOrderItemsResult: Partial<ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['UpdateOrderItemsResult']>>;
  UpdateOrderNoteInput: ResolverTypeWrapper<Partial<UpdateOrderNoteInput>>;
  UpdatePaymentMethodInput: ResolverTypeWrapper<Partial<UpdatePaymentMethodInput>>;
  UpdateProductInput: ResolverTypeWrapper<Partial<UpdateProductInput>>;
  UpdateProductOptionGroupInput: ResolverTypeWrapper<Partial<UpdateProductOptionGroupInput>>;
  UpdateProductOptionInput: ResolverTypeWrapper<Partial<UpdateProductOptionInput>>;
  UpdateProductVariantInput: ResolverTypeWrapper<Partial<UpdateProductVariantInput>>;
  UpdateProductVariantPriceInput: ResolverTypeWrapper<Partial<UpdateProductVariantPriceInput>>;
  UpdatePromotionInput: ResolverTypeWrapper<Partial<UpdatePromotionInput>>;
  UpdatePromotionResult: Partial<ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['UpdatePromotionResult']>>;
  UpdateProvinceInput: ResolverTypeWrapper<Partial<UpdateProvinceInput>>;
  UpdateRoleInput: ResolverTypeWrapper<Partial<UpdateRoleInput>>;
  UpdateScheduledTaskInput: ResolverTypeWrapper<Partial<UpdateScheduledTaskInput>>;
  UpdateSellerInput: ResolverTypeWrapper<Partial<UpdateSellerInput>>;
  UpdateShippingMethodInput: ResolverTypeWrapper<Partial<UpdateShippingMethodInput>>;
  UpdateStockLocationInput: ResolverTypeWrapper<Partial<UpdateStockLocationInput>>;
  UpdateSubscribedDeviceInput: ResolverTypeWrapper<Partial<UpdateSubscribedDeviceInput>>;
  UpdateTagInput: ResolverTypeWrapper<Partial<UpdateTagInput>>;
  UpdateTaxCategoryInput: ResolverTypeWrapper<Partial<UpdateTaxCategoryInput>>;
  UpdateTaxRateInput: ResolverTypeWrapper<Partial<UpdateTaxRateInput>>;
  UpdateZoneInput: ResolverTypeWrapper<Partial<UpdateZoneInput>>;
  Upload: ResolverTypeWrapper<Partial<Scalars['Upload']['output']>>;
  User: ResolverTypeWrapper<Partial<Omit<User, 'authenticationMethods' | 'roles'> & { authenticationMethods: Array<ResolversTypes['AuthenticationMethod']>, roles: Array<ResolversTypes['Role']> }>>;
  Zone: ResolverTypeWrapper<Partial<Omit<Zone, 'members'> & { members: Array<ResolversTypes['Region']> }>>;
  ZoneFilterParameter: ResolverTypeWrapper<Partial<ZoneFilterParameter>>;
  ZoneList: ResolverTypeWrapper<Partial<Omit<ZoneList, 'items'> & { items: Array<ResolversTypes['Zone']> }>>;
  ZoneListOptions: ResolverTypeWrapper<Partial<ZoneListOptions>>;
  ZoneSortParameter: ResolverTypeWrapper<Partial<ZoneSortParameter>>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AddFulfillmentToOrderResult: Partial<ResolversUnionTypes<ResolversParentTypes>['AddFulfillmentToOrderResult']>;
  AddItemInput: Partial<AddItemInput>;
  AddItemToDraftOrderInput: Partial<AddItemToDraftOrderInput>;
  AddManualPaymentToOrderResult: Partial<ResolversUnionTypes<ResolversParentTypes>['AddManualPaymentToOrderResult']>;
  AddNoteToCustomerInput: Partial<AddNoteToCustomerInput>;
  AddNoteToOrderInput: Partial<AddNoteToOrderInput>;
  Address: Partial<Omit<Address, 'country'> & { country: ResolversParentTypes['Country'] }>;
  AdjustDraftOrderLineInput: Partial<AdjustDraftOrderLineInput>;
  Adjustment: Partial<Adjustment>;
  Administrator: Partial<Omit<Administrator, 'user'> & { user: ResolversParentTypes['User'] }>;
  AdministratorFilterParameter: Partial<AdministratorFilterParameter>;
  AdministratorList: Partial<Omit<AdministratorList, 'items'> & { items: Array<ResolversParentTypes['Administrator']> }>;
  AdministratorListOptions: Partial<AdministratorListOptions>;
  AdministratorPaymentInput: Partial<AdministratorPaymentInput>;
  AdministratorRefundInput: Partial<AdministratorRefundInput>;
  AdministratorSortParameter: Partial<AdministratorSortParameter>;
  Allocation: Partial<Omit<Allocation, 'orderLine' | 'productVariant'> & { orderLine: ResolversParentTypes['OrderLine'], productVariant: ResolversParentTypes['ProductVariant'] }>;
  AlreadyRefundedError: Partial<AlreadyRefundedError>;
  ApplyCouponCodeResult: Partial<ResolversUnionTypes<ResolversParentTypes>['ApplyCouponCodeResult']>;
  Asset: Partial<Asset>;
  AssetFilterParameter: Partial<AssetFilterParameter>;
  AssetList: Partial<AssetList>;
  AssetListOptions: Partial<AssetListOptions>;
  AssetSortParameter: Partial<AssetSortParameter>;
  AssignAssetsToChannelInput: Partial<AssignAssetsToChannelInput>;
  AssignCollectionsToChannelInput: Partial<AssignCollectionsToChannelInput>;
  AssignFacetsToChannelInput: Partial<AssignFacetsToChannelInput>;
  AssignPaymentMethodsToChannelInput: Partial<AssignPaymentMethodsToChannelInput>;
  AssignProductVariantsToChannelInput: Partial<AssignProductVariantsToChannelInput>;
  AssignProductsToChannelInput: Partial<AssignProductsToChannelInput>;
  AssignPromotionsToChannelInput: Partial<AssignPromotionsToChannelInput>;
  AssignShippingMethodsToChannelInput: Partial<AssignShippingMethodsToChannelInput>;
  AssignStockLocationsToChannelInput: Partial<AssignStockLocationsToChannelInput>;
  AuthenticationInput: Partial<AuthenticationInput>;
  AuthenticationMethod: Partial<AuthenticationMethod>;
  AuthenticationResult: Partial<ResolversUnionTypes<ResolversParentTypes>['AuthenticationResult']>;
  Boolean: Partial<Scalars['Boolean']['output']>;
  BooleanCustomFieldConfig: Partial<BooleanCustomFieldConfig>;
  BooleanListOperators: Partial<BooleanListOperators>;
  BooleanOperators: Partial<BooleanOperators>;
  BooleanStructFieldConfig: Partial<BooleanStructFieldConfig>;
  CancelActiveOrderError: Partial<CancelActiveOrderError>;
  CancelOrderInput: Partial<CancelOrderInput>;
  CancelOrderResult: Partial<ResolversUnionTypes<ResolversParentTypes>['CancelOrderResult']>;
  CancelPaymentError: Partial<CancelPaymentError>;
  CancelPaymentResult: Partial<ResolversUnionTypes<ResolversParentTypes>['CancelPaymentResult']>;
  Cancellation: Partial<Omit<Cancellation, 'orderLine' | 'productVariant'> & { orderLine: ResolversParentTypes['OrderLine'], productVariant: ResolversParentTypes['ProductVariant'] }>;
  Channel: Partial<Omit<Channel, 'defaultShippingZone' | 'defaultTaxZone'> & { defaultShippingZone?: Maybe<ResolversParentTypes['Zone']>, defaultTaxZone?: Maybe<ResolversParentTypes['Zone']> }>;
  ChannelDefaultLanguageError: Partial<ChannelDefaultLanguageError>;
  ChannelFilterParameter: Partial<ChannelFilterParameter>;
  ChannelList: Partial<Omit<ChannelList, 'items'> & { items: Array<ResolversParentTypes['Channel']> }>;
  ChannelListOptions: Partial<ChannelListOptions>;
  ChannelSortParameter: Partial<ChannelSortParameter>;
  Collection: Partial<Omit<Collection, 'breadcrumbs' | 'children' | 'parent' | 'productVariants'> & { breadcrumbs: Array<ResolversParentTypes['CollectionBreadcrumb']>, children?: Maybe<Array<ResolversParentTypes['Collection']>>, parent?: Maybe<ResolversParentTypes['Collection']>, productVariants: ResolversParentTypes['ProductVariantList'] }>;
  CollectionBreadcrumb: Partial<CollectionBreadcrumb>;
  CollectionFilterParameter: Partial<CollectionFilterParameter>;
  CollectionList: Partial<Omit<CollectionList, 'items'> & { items: Array<ResolversParentTypes['Collection']> }>;
  CollectionListOptions: Partial<CollectionListOptions>;
  CollectionResult: Partial<Omit<CollectionResult, 'collection'> & { collection: ResolversParentTypes['Collection'] }>;
  CollectionSortParameter: Partial<CollectionSortParameter>;
  CollectionTranslation: Partial<CollectionTranslation>;
  ConfigArg: Partial<ConfigArg>;
  ConfigArgDefinition: Partial<ConfigArgDefinition>;
  ConfigArgInput: Partial<ConfigArgInput>;
  ConfigurableOperation: Partial<ConfigurableOperation>;
  ConfigurableOperationDefinition: Partial<ConfigurableOperationDefinition>;
  ConfigurableOperationInput: Partial<ConfigurableOperationInput>;
  Coordinate: Partial<Coordinate>;
  CoordinateInput: Partial<CoordinateInput>;
  Country: Partial<Omit<Country, 'parent'> & { parent?: Maybe<ResolversParentTypes['Region']> }>;
  CountryFilterParameter: Partial<CountryFilterParameter>;
  CountryList: Partial<Omit<CountryList, 'items'> & { items: Array<ResolversParentTypes['Country']> }>;
  CountryListOptions: Partial<CountryListOptions>;
  CountrySortParameter: Partial<CountrySortParameter>;
  CountryTranslationInput: Partial<CountryTranslationInput>;
  CouponCodeExpiredError: Partial<CouponCodeExpiredError>;
  CouponCodeInvalidError: Partial<CouponCodeInvalidError>;
  CouponCodeLimitError: Partial<CouponCodeLimitError>;
  CreateAddressInput: Partial<CreateAddressInput>;
  CreateAdministratorInput: Partial<CreateAdministratorInput>;
  CreateAssetInput: Partial<CreateAssetInput>;
  CreateAssetResult: Partial<ResolversUnionTypes<ResolversParentTypes>['CreateAssetResult']>;
  CreateChannelInput: Partial<CreateChannelInput>;
  CreateChannelResult: Partial<ResolversUnionTypes<ResolversParentTypes>['CreateChannelResult']>;
  CreateCollectionInput: Partial<CreateCollectionInput>;
  CreateCollectionTranslationInput: Partial<CreateCollectionTranslationInput>;
  CreateCountryInput: Partial<CreateCountryInput>;
  CreateCustomerGroupInput: Partial<CreateCustomerGroupInput>;
  CreateCustomerInput: Partial<CreateCustomerInput>;
  CreateCustomerResult: Partial<ResolversUnionTypes<ResolversParentTypes>['CreateCustomerResult']>;
  CreateFacetInput: Partial<CreateFacetInput>;
  CreateFacetValueInput: Partial<CreateFacetValueInput>;
  CreateFacetValueWithFacetInput: Partial<CreateFacetValueWithFacetInput>;
  CreateFulfillmentError: Partial<CreateFulfillmentError>;
  CreateGroupOptionInput: Partial<CreateGroupOptionInput>;
  CreatePaymentMethodInput: Partial<CreatePaymentMethodInput>;
  CreateProductInput: Partial<CreateProductInput>;
  CreateProductOptionGroupInput: Partial<CreateProductOptionGroupInput>;
  CreateProductOptionInput: Partial<CreateProductOptionInput>;
  CreateProductVariantInput: Partial<CreateProductVariantInput>;
  CreateProductVariantOptionInput: Partial<CreateProductVariantOptionInput>;
  CreateProductVariantPriceInput: Partial<CreateProductVariantPriceInput>;
  CreatePromotionInput: Partial<CreatePromotionInput>;
  CreatePromotionResult: Partial<ResolversUnionTypes<ResolversParentTypes>['CreatePromotionResult']>;
  CreateProvinceInput: Partial<CreateProvinceInput>;
  CreateRoleInput: Partial<CreateRoleInput>;
  CreateSellerInput: Partial<CreateSellerInput>;
  CreateShippingMethodInput: Partial<CreateShippingMethodInput>;
  CreateStockLocationInput: Partial<CreateStockLocationInput>;
  CreateTagInput: Partial<CreateTagInput>;
  CreateTaxCategoryInput: Partial<CreateTaxCategoryInput>;
  CreateTaxRateInput: Partial<CreateTaxRateInput>;
  CreateZoneInput: Partial<CreateZoneInput>;
  CurrentUser: Partial<CurrentUser>;
  CurrentUserChannel: Partial<CurrentUserChannel>;
  CustomField: ResolversInterfaceTypes<ResolversParentTypes>['CustomField'];
  CustomFieldConfig: Partial<ResolversUnionTypes<ResolversParentTypes>['CustomFieldConfig']>;
  CustomFields: Partial<Omit<CustomFields, 'Address' | 'Administrator' | 'Asset' | 'Channel' | 'Collection' | 'Customer' | 'CustomerGroup' | 'Facet' | 'FacetValue' | 'Fulfillment' | 'GlobalSettings' | 'HistoryEntry' | 'Order' | 'OrderLine' | 'Payment' | 'PaymentMethod' | 'Product' | 'ProductOption' | 'ProductOptionGroup' | 'ProductVariant' | 'ProductVariantPrice' | 'Promotion' | 'Refund' | 'Region' | 'Seller' | 'Session' | 'ShippingLine' | 'ShippingMethod' | 'StockLevel' | 'StockLocation' | 'StockMovement' | 'TaxCategory' | 'TaxRate' | 'User' | 'Zone'> & { Address: Array<ResolversParentTypes['CustomFieldConfig']>, Administrator: Array<ResolversParentTypes['CustomFieldConfig']>, Asset: Array<ResolversParentTypes['CustomFieldConfig']>, Channel: Array<ResolversParentTypes['CustomFieldConfig']>, Collection: Array<ResolversParentTypes['CustomFieldConfig']>, Customer: Array<ResolversParentTypes['CustomFieldConfig']>, CustomerGroup: Array<ResolversParentTypes['CustomFieldConfig']>, Facet: Array<ResolversParentTypes['CustomFieldConfig']>, FacetValue: Array<ResolversParentTypes['CustomFieldConfig']>, Fulfillment: Array<ResolversParentTypes['CustomFieldConfig']>, GlobalSettings: Array<ResolversParentTypes['CustomFieldConfig']>, HistoryEntry: Array<ResolversParentTypes['CustomFieldConfig']>, Order: Array<ResolversParentTypes['CustomFieldConfig']>, OrderLine: Array<ResolversParentTypes['CustomFieldConfig']>, Payment: Array<ResolversParentTypes['CustomFieldConfig']>, PaymentMethod: Array<ResolversParentTypes['CustomFieldConfig']>, Product: Array<ResolversParentTypes['CustomFieldConfig']>, ProductOption: Array<ResolversParentTypes['CustomFieldConfig']>, ProductOptionGroup: Array<ResolversParentTypes['CustomFieldConfig']>, ProductVariant: Array<ResolversParentTypes['CustomFieldConfig']>, ProductVariantPrice: Array<ResolversParentTypes['CustomFieldConfig']>, Promotion: Array<ResolversParentTypes['CustomFieldConfig']>, Refund: Array<ResolversParentTypes['CustomFieldConfig']>, Region: Array<ResolversParentTypes['CustomFieldConfig']>, Seller: Array<ResolversParentTypes['CustomFieldConfig']>, Session: Array<ResolversParentTypes['CustomFieldConfig']>, ShippingLine: Array<ResolversParentTypes['CustomFieldConfig']>, ShippingMethod: Array<ResolversParentTypes['CustomFieldConfig']>, StockLevel: Array<ResolversParentTypes['CustomFieldConfig']>, StockLocation: Array<ResolversParentTypes['CustomFieldConfig']>, StockMovement: Array<ResolversParentTypes['CustomFieldConfig']>, TaxCategory: Array<ResolversParentTypes['CustomFieldConfig']>, TaxRate: Array<ResolversParentTypes['CustomFieldConfig']>, User: Array<ResolversParentTypes['CustomFieldConfig']>, Zone: Array<ResolversParentTypes['CustomFieldConfig']> }>;
  Customer: Customer;
  CustomerFilterParameter: Partial<CustomerFilterParameter>;
  CustomerGroup: Partial<Omit<CustomerGroup, 'customers'> & { customers: ResolversParentTypes['CustomerList'] }>;
  CustomerGroupFilterParameter: Partial<CustomerGroupFilterParameter>;
  CustomerGroupList: Partial<Omit<CustomerGroupList, 'items'> & { items: Array<ResolversParentTypes['CustomerGroup']> }>;
  CustomerGroupListOptions: Partial<CustomerGroupListOptions>;
  CustomerGroupSortParameter: Partial<CustomerGroupSortParameter>;
  CustomerList: Partial<Omit<CustomerList, 'items'> & { items: Array<ResolversParentTypes['Customer']> }>;
  CustomerListOptions: Partial<CustomerListOptions>;
  CustomerSortParameter: Partial<CustomerSortParameter>;
  CustomerWithTokens: Partial<Omit<CustomerWithTokens, 'customer' | 'tokens'> & { customer: ResolversParentTypes['Customer'], tokens: Array<ResolversParentTypes['SubscribedDevice']> }>;
  DateListOperators: Partial<DateListOperators>;
  DateOperators: Partial<DateOperators>;
  DateRange: Partial<DateRange>;
  DateTime: Partial<Scalars['DateTime']['output']>;
  DateTimeCustomFieldConfig: Partial<DateTimeCustomFieldConfig>;
  DateTimeStructFieldConfig: Partial<DateTimeStructFieldConfig>;
  DeleteAssetInput: Partial<DeleteAssetInput>;
  DeleteAssetsInput: Partial<DeleteAssetsInput>;
  DeleteStockLocationInput: Partial<DeleteStockLocationInput>;
  DeletionResponse: Partial<DeletionResponse>;
  Discount: Partial<Discount>;
  DuplicateEntityError: Partial<DuplicateEntityError>;
  DuplicateEntityInput: Partial<DuplicateEntityInput>;
  DuplicateEntityResult: Partial<ResolversUnionTypes<ResolversParentTypes>['DuplicateEntityResult']>;
  DuplicateEntitySuccess: Partial<DuplicateEntitySuccess>;
  EmailAddressConflictError: Partial<EmailAddressConflictError>;
  EmptyOrderLineSelectionError: Partial<EmptyOrderLineSelectionError>;
  EntityCustomFields: Partial<Omit<EntityCustomFields, 'customFields'> & { customFields: Array<ResolversParentTypes['CustomFieldConfig']> }>;
  EntityDuplicatorDefinition: Partial<EntityDuplicatorDefinition>;
  ErrorResult: ResolversInterfaceTypes<ResolversParentTypes>['ErrorResult'];
  Facet: Partial<Facet>;
  FacetFilterParameter: Partial<FacetFilterParameter>;
  FacetInUseError: Partial<FacetInUseError>;
  FacetList: Partial<FacetList>;
  FacetListOptions: Partial<FacetListOptions>;
  FacetSortParameter: Partial<FacetSortParameter>;
  FacetTranslation: Partial<FacetTranslation>;
  FacetTranslationInput: Partial<FacetTranslationInput>;
  FacetValue: Partial<FacetValue>;
  FacetValueFilterInput: Partial<FacetValueFilterInput>;
  FacetValueFilterParameter: Partial<FacetValueFilterParameter>;
  FacetValueList: Partial<FacetValueList>;
  FacetValueListOptions: Partial<FacetValueListOptions>;
  FacetValueResult: Partial<FacetValueResult>;
  FacetValueSortParameter: Partial<FacetValueSortParameter>;
  FacetValueTranslation: Partial<FacetValueTranslation>;
  FacetValueTranslationInput: Partial<FacetValueTranslationInput>;
  Float: Partial<Scalars['Float']['output']>;
  FloatCustomFieldConfig: Partial<FloatCustomFieldConfig>;
  FloatStructFieldConfig: Partial<FloatStructFieldConfig>;
  FulfillOrderInput: Partial<FulfillOrderInput>;
  Fulfillment: Partial<Omit<Fulfillment, 'lines' | 'summary'> & { lines: Array<ResolversParentTypes['FulfillmentLine']>, summary: Array<ResolversParentTypes['FulfillmentLine']> }>;
  FulfillmentLine: Partial<Omit<FulfillmentLine, 'fulfillment' | 'orderLine'> & { fulfillment: ResolversParentTypes['Fulfillment'], orderLine: ResolversParentTypes['OrderLine'] }>;
  FulfillmentStateTransitionError: Partial<FulfillmentStateTransitionError>;
  GlobalSettings: Partial<Omit<GlobalSettings, 'serverConfig'> & { serverConfig: ResolversParentTypes['ServerConfig'] }>;
  GuestCheckoutError: Partial<GuestCheckoutError>;
  HistoryEntry: Partial<Omit<HistoryEntry, 'administrator'> & { administrator?: Maybe<ResolversParentTypes['Administrator']> }>;
  HistoryEntryFilterParameter: Partial<HistoryEntryFilterParameter>;
  HistoryEntryList: Partial<Omit<HistoryEntryList, 'items'> & { items: Array<ResolversParentTypes['HistoryEntry']> }>;
  HistoryEntryListOptions: Partial<HistoryEntryListOptions>;
  HistoryEntrySortParameter: Partial<HistoryEntrySortParameter>;
  ID: Partial<Scalars['ID']['output']>;
  IDListOperators: Partial<IdListOperators>;
  IDOperators: Partial<IdOperators>;
  ImportInfo: Partial<ImportInfo>;
  IneligibleShippingMethodError: Partial<IneligibleShippingMethodError>;
  InsufficientStockError: Partial<Omit<InsufficientStockError, 'order'> & { order: ResolversParentTypes['Order'] }>;
  InsufficientStockOnHandError: Partial<InsufficientStockOnHandError>;
  Int: Partial<Scalars['Int']['output']>;
  IntCustomFieldConfig: Partial<IntCustomFieldConfig>;
  IntStructFieldConfig: Partial<IntStructFieldConfig>;
  InvalidCredentialsError: Partial<InvalidCredentialsError>;
  InvalidFulfillmentHandlerError: Partial<InvalidFulfillmentHandlerError>;
  ItemsAlreadyFulfilledError: Partial<ItemsAlreadyFulfilledError>;
  JSON: Partial<Scalars['JSON']['output']>;
  Job: Partial<Job>;
  JobBufferSize: Partial<JobBufferSize>;
  JobFilterParameter: Partial<JobFilterParameter>;
  JobList: Partial<JobList>;
  JobListOptions: Partial<JobListOptions>;
  JobQueue: Partial<JobQueue>;
  JobSortParameter: Partial<JobSortParameter>;
  LanguageNotAvailableError: Partial<LanguageNotAvailableError>;
  LocaleStringCustomFieldConfig: Partial<LocaleStringCustomFieldConfig>;
  LocaleTextCustomFieldConfig: Partial<LocaleTextCustomFieldConfig>;
  LocalizedString: Partial<LocalizedString>;
  ManualPaymentInput: Partial<ManualPaymentInput>;
  ManualPaymentStateError: Partial<ManualPaymentStateError>;
  MetricSummary: Partial<MetricSummary>;
  MetricSummaryEntry: Partial<MetricSummaryEntry>;
  MetricSummaryInput: Partial<MetricSummaryInput>;
  MimeTypeError: Partial<MimeTypeError>;
  MissingConditionsError: Partial<MissingConditionsError>;
  ModifyOrderInput: Partial<ModifyOrderInput>;
  ModifyOrderOptions: Partial<ModifyOrderOptions>;
  ModifyOrderResult: Partial<ResolversUnionTypes<ResolversParentTypes>['ModifyOrderResult']>;
  Money: Partial<Scalars['Money']['output']>;
  MoveCollectionInput: Partial<MoveCollectionInput>;
  MultipleOrderError: Partial<MultipleOrderError>;
  Mutation: Record<PropertyKey, never>;
  NativeAuthInput: Partial<NativeAuthInput>;
  NativeAuthStrategyError: Partial<NativeAuthStrategyError>;
  NativeAuthenticationResult: Partial<ResolversUnionTypes<ResolversParentTypes>['NativeAuthenticationResult']>;
  NegativeQuantityError: Partial<NegativeQuantityError>;
  NoActiveOrderError: Partial<NoActiveOrderError>;
  NoChangesSpecifiedError: Partial<NoChangesSpecifiedError>;
  Node: VendureEntity;
  NothingToRefundError: Partial<NothingToRefundError>;
  NumberListOperators: Partial<NumberListOperators>;
  NumberOperators: Partial<NumberOperators>;
  NumberRange: Partial<NumberRange>;
  Order: Partial<Omit<Order, 'aggregateOrder' | 'billingAddress' | 'channels' | 'customer' | 'discounts' | 'fulfillments' | 'history' | 'lines' | 'modifications' | 'payments' | 'sellerOrders' | 'shippingAddress'> & { aggregateOrder?: Maybe<ResolversParentTypes['Order']>, billingAddress?: Maybe<ResolversParentTypes['OrderAddress']>, channels: Array<ResolversParentTypes['Channel']>, customer?: Maybe<ResolversParentTypes['Customer']>, discounts: Array<ResolversParentTypes['Discount']>, fulfillments?: Maybe<Array<ResolversParentTypes['Fulfillment']>>, history: ResolversParentTypes['HistoryEntryList'], lines: Array<ResolversParentTypes['OrderLine']>, modifications: Array<ResolversParentTypes['OrderModification']>, payments?: Maybe<Array<ResolversParentTypes['Payment']>>, sellerOrders?: Maybe<Array<ResolversParentTypes['Order']>>, shippingAddress?: Maybe<ResolversParentTypes['OrderAddress']> }>;
  OrderAddress: Partial<OrderAddress>;
  OrderFilterParameter: Partial<OrderFilterParameter>;
  OrderInterceptorError: Partial<OrderInterceptorError>;
  OrderLimitError: Partial<OrderLimitError>;
  OrderLine: Partial<Omit<OrderLine, 'discounts' | 'fulfillmentLines' | 'order' | 'productVariant'> & { discounts: Array<ResolversParentTypes['Discount']>, fulfillmentLines?: Maybe<Array<ResolversParentTypes['FulfillmentLine']>>, order: ResolversParentTypes['Order'], productVariant: ResolversParentTypes['ProductVariant'] }>;
  OrderLineInput: Partial<OrderLineInput>;
  OrderList: Partial<Omit<OrderList, 'items'> & { items: Array<ResolversParentTypes['Order']> }>;
  OrderListOptions: Partial<OrderListOptions>;
  OrderModification: Partial<Omit<OrderModification, 'lines' | 'payment' | 'refund'> & { lines: Array<ResolversParentTypes['OrderModificationLine']>, payment?: Maybe<ResolversParentTypes['Payment']>, refund?: Maybe<ResolversParentTypes['Refund']> }>;
  OrderModificationError: Partial<OrderModificationError>;
  OrderModificationLine: Partial<Omit<OrderModificationLine, 'modification' | 'orderLine'> & { modification: ResolversParentTypes['OrderModification'], orderLine: ResolversParentTypes['OrderLine'] }>;
  OrderModificationStateError: Partial<OrderModificationStateError>;
  OrderProcessState: Partial<OrderProcessState>;
  OrderSortParameter: Partial<OrderSortParameter>;
  OrderStateTransitionError: Partial<OrderStateTransitionError>;
  OrderTaxSummary: Partial<OrderTaxSummary>;
  PaginatedList: ResolversInterfaceTypes<ResolversParentTypes>['PaginatedList'];
  Payment: Partial<Omit<Payment, 'refunds'> & { refunds: Array<ResolversParentTypes['Refund']> }>;
  PaymentMethod: Partial<PaymentMethod>;
  PaymentMethodFilterParameter: Partial<PaymentMethodFilterParameter>;
  PaymentMethodList: Partial<PaymentMethodList>;
  PaymentMethodListOptions: Partial<PaymentMethodListOptions>;
  PaymentMethodMissingError: Partial<PaymentMethodMissingError>;
  PaymentMethodQuote: Partial<PaymentMethodQuote>;
  PaymentMethodSortParameter: Partial<PaymentMethodSortParameter>;
  PaymentMethodTranslation: Partial<PaymentMethodTranslation>;
  PaymentMethodTranslationInput: Partial<PaymentMethodTranslationInput>;
  PaymentOrderMismatchError: Partial<PaymentOrderMismatchError>;
  PaymentStateTransitionError: Partial<PaymentStateTransitionError>;
  PermissionDefinition: Partial<PermissionDefinition>;
  PreviewCollectionVariantsInput: Partial<PreviewCollectionVariantsInput>;
  PriceRange: Partial<PriceRange>;
  Product: Partial<Omit<Product, 'channels' | 'collections' | 'variantList' | 'variants'> & { channels: Array<ResolversParentTypes['Channel']>, collections: Array<ResolversParentTypes['Collection']>, variantList: ResolversParentTypes['ProductVariantList'], variants: Array<ResolversParentTypes['ProductVariant']> }>;
  ProductFilterParameter: Partial<ProductFilterParameter>;
  ProductList: Partial<Omit<ProductList, 'items'> & { items: Array<ResolversParentTypes['Product']> }>;
  ProductListOptions: Partial<ProductListOptions>;
  ProductOption: Partial<ProductOption>;
  ProductOptionGroup: Partial<ProductOptionGroup>;
  ProductOptionGroupTranslation: Partial<ProductOptionGroupTranslation>;
  ProductOptionGroupTranslationInput: Partial<ProductOptionGroupTranslationInput>;
  ProductOptionInUseError: Partial<ProductOptionInUseError>;
  ProductOptionTranslation: Partial<ProductOptionTranslation>;
  ProductOptionTranslationInput: Partial<ProductOptionTranslationInput>;
  ProductSortParameter: Partial<ProductSortParameter>;
  ProductTranslation: Partial<ProductTranslation>;
  ProductTranslationInput: Partial<ProductTranslationInput>;
  ProductVariant: Partial<Omit<ProductVariant, 'channels' | 'product' | 'stockMovements' | 'taxRateApplied'> & { channels: Array<ResolversParentTypes['Channel']>, product: ResolversParentTypes['Product'], stockMovements: ResolversParentTypes['StockMovementList'], taxRateApplied: ResolversParentTypes['TaxRate'] }>;
  ProductVariantFilterParameter: Partial<ProductVariantFilterParameter>;
  ProductVariantList: Partial<Omit<ProductVariantList, 'items'> & { items: Array<ResolversParentTypes['ProductVariant']> }>;
  ProductVariantListOptions: Partial<ProductVariantListOptions>;
  ProductVariantPrice: Partial<ProductVariantPrice>;
  ProductVariantSortParameter: Partial<ProductVariantSortParameter>;
  ProductVariantTranslation: Partial<ProductVariantTranslation>;
  ProductVariantTranslationInput: Partial<ProductVariantTranslationInput>;
  Promotion: Partial<Promotion>;
  PromotionFilterParameter: Partial<PromotionFilterParameter>;
  PromotionList: Partial<PromotionList>;
  PromotionListOptions: Partial<PromotionListOptions>;
  PromotionSortParameter: Partial<PromotionSortParameter>;
  PromotionTranslation: Partial<PromotionTranslation>;
  PromotionTranslationInput: Partial<PromotionTranslationInput>;
  Province: Partial<Omit<Province, 'parent'> & { parent?: Maybe<ResolversParentTypes['Region']> }>;
  ProvinceFilterParameter: Partial<ProvinceFilterParameter>;
  ProvinceList: Partial<Omit<ProvinceList, 'items'> & { items: Array<ResolversParentTypes['Province']> }>;
  ProvinceListOptions: Partial<ProvinceListOptions>;
  ProvinceSortParameter: Partial<ProvinceSortParameter>;
  ProvinceTranslationInput: Partial<ProvinceTranslationInput>;
  PushNotificationResponse: Partial<PushNotificationResponse>;
  QuantityTooGreatError: Partial<QuantityTooGreatError>;
  Query: Record<PropertyKey, never>;
  Refund: Partial<Omit<Refund, 'lines'> & { lines: Array<ResolversParentTypes['RefundLine']> }>;
  RefundAmountError: Partial<RefundAmountError>;
  RefundLine: Partial<Omit<RefundLine, 'orderLine' | 'refund'> & { orderLine: ResolversParentTypes['OrderLine'], refund: ResolversParentTypes['Refund'] }>;
  RefundOrderInput: Partial<RefundOrderInput>;
  RefundOrderResult: Partial<ResolversUnionTypes<ResolversParentTypes>['RefundOrderResult']>;
  RefundOrderStateError: Partial<RefundOrderStateError>;
  RefundPaymentIdMissingError: Partial<RefundPaymentIdMissingError>;
  RefundStateTransitionError: Partial<RefundStateTransitionError>;
  Region: ResolversInterfaceTypes<ResolversParentTypes>['Region'];
  RegionTranslation: Partial<RegionTranslation>;
  RelationCustomFieldConfig: Partial<RelationCustomFieldConfig>;
  Release: Partial<Omit<Release, 'productVariant'> & { productVariant: ResolversParentTypes['ProductVariant'] }>;
  RemoveCollectionsFromChannelInput: Partial<RemoveCollectionsFromChannelInput>;
  RemoveFacetFromChannelResult: Partial<ResolversUnionTypes<ResolversParentTypes>['RemoveFacetFromChannelResult']>;
  RemoveFacetsFromChannelInput: Partial<RemoveFacetsFromChannelInput>;
  RemoveOptionGroupFromProductResult: Partial<ResolversUnionTypes<ResolversParentTypes>['RemoveOptionGroupFromProductResult']>;
  RemoveOrderItemsResult: Partial<ResolversUnionTypes<ResolversParentTypes>['RemoveOrderItemsResult']>;
  RemovePaymentMethodsFromChannelInput: Partial<RemovePaymentMethodsFromChannelInput>;
  RemoveProductVariantsFromChannelInput: Partial<RemoveProductVariantsFromChannelInput>;
  RemoveProductsFromChannelInput: Partial<RemoveProductsFromChannelInput>;
  RemovePromotionsFromChannelInput: Partial<RemovePromotionsFromChannelInput>;
  RemoveShippingMethodsFromChannelInput: Partial<RemoveShippingMethodsFromChannelInput>;
  RemoveStockLocationsFromChannelInput: Partial<RemoveStockLocationsFromChannelInput>;
  Return: Partial<Omit<Return, 'productVariant'> & { productVariant: ResolversParentTypes['ProductVariant'] }>;
  Role: Partial<Omit<Role, 'channels'> & { channels: Array<ResolversParentTypes['Channel']> }>;
  RoleFilterParameter: Partial<RoleFilterParameter>;
  RoleList: Partial<Omit<RoleList, 'items'> & { items: Array<ResolversParentTypes['Role']> }>;
  RoleListOptions: Partial<RoleListOptions>;
  RoleSortParameter: Partial<RoleSortParameter>;
  Sale: Partial<Omit<Sale, 'productVariant'> & { productVariant: ResolversParentTypes['ProductVariant'] }>;
  ScheduledTask: Partial<ScheduledTask>;
  SearchInput: Partial<SearchInput>;
  SearchReindexResponse: Partial<SearchReindexResponse>;
  SearchResponse: Partial<Omit<SearchResponse, 'collections' | 'items'> & { collections: Array<ResolversParentTypes['CollectionResult']>, items: Array<ResolversParentTypes['SearchResult']> }>;
  SearchResult: Partial<Omit<SearchResult, 'price' | 'priceWithTax'> & { price: ResolversParentTypes['SearchResultPrice'], priceWithTax: ResolversParentTypes['SearchResultPrice'] }>;
  SearchResultAsset: Partial<SearchResultAsset>;
  SearchResultPrice: Partial<ResolversUnionTypes<ResolversParentTypes>['SearchResultPrice']>;
  SearchResultSortParameter: Partial<SearchResultSortParameter>;
  Seller: Partial<Seller>;
  SellerFilterParameter: Partial<SellerFilterParameter>;
  SellerList: Partial<SellerList>;
  SellerListOptions: Partial<SellerListOptions>;
  SellerSortParameter: Partial<SellerSortParameter>;
  SendNotificationResult: Partial<SendNotificationResult>;
  SendPushNotificationInput: Partial<SendPushNotificationInput>;
  ServerConfig: Partial<Omit<ServerConfig, 'customFieldConfig' | 'entityCustomFields'> & { customFieldConfig: ResolversParentTypes['CustomFields'], entityCustomFields: Array<ResolversParentTypes['EntityCustomFields']> }>;
  SetCustomerForDraftOrderResult: Partial<ResolversUnionTypes<ResolversParentTypes>['SetCustomerForDraftOrderResult']>;
  SetOrderCustomerInput: Partial<SetOrderCustomerInput>;
  SetOrderShippingMethodResult: Partial<ResolversUnionTypes<ResolversParentTypes>['SetOrderShippingMethodResult']>;
  SetSettingsStoreValueResult: Partial<SetSettingsStoreValueResult>;
  SettingsStoreInput: Partial<SettingsStoreInput>;
  SettlePaymentError: Partial<SettlePaymentError>;
  SettlePaymentResult: Partial<ResolversUnionTypes<ResolversParentTypes>['SettlePaymentResult']>;
  SettleRefundInput: Partial<SettleRefundInput>;
  SettleRefundResult: Partial<ResolversUnionTypes<ResolversParentTypes>['SettleRefundResult']>;
  ShippingLine: Partial<Omit<ShippingLine, 'discounts'> & { discounts: Array<ResolversParentTypes['Discount']> }>;
  ShippingMethod: Partial<ShippingMethod>;
  ShippingMethodFilterParameter: Partial<ShippingMethodFilterParameter>;
  ShippingMethodList: Partial<ShippingMethodList>;
  ShippingMethodListOptions: Partial<ShippingMethodListOptions>;
  ShippingMethodQuote: Partial<ShippingMethodQuote>;
  ShippingMethodSortParameter: Partial<ShippingMethodSortParameter>;
  ShippingMethodTranslation: Partial<ShippingMethodTranslation>;
  ShippingMethodTranslationInput: Partial<ShippingMethodTranslationInput>;
  SinglePrice: Partial<SinglePrice>;
  StockAdjustment: Partial<Omit<StockAdjustment, 'productVariant'> & { productVariant: ResolversParentTypes['ProductVariant'] }>;
  StockLevel: Partial<StockLevel>;
  StockLevelInput: Partial<StockLevelInput>;
  StockLocation: Partial<StockLocation>;
  StockLocationFilterParameter: Partial<StockLocationFilterParameter>;
  StockLocationList: Partial<StockLocationList>;
  StockLocationListOptions: Partial<StockLocationListOptions>;
  StockLocationSortParameter: Partial<StockLocationSortParameter>;
  StockMovement: ResolversInterfaceTypes<ResolversParentTypes>['StockMovement'];
  StockMovementItem: Partial<ResolversUnionTypes<ResolversParentTypes>['StockMovementItem']>;
  StockMovementList: Partial<Omit<StockMovementList, 'items'> & { items: Array<ResolversParentTypes['StockMovementItem']> }>;
  StockMovementListOptions: Partial<StockMovementListOptions>;
  String: Partial<Scalars['String']['output']>;
  StringCustomFieldConfig: Partial<StringCustomFieldConfig>;
  StringFieldOption: Partial<StringFieldOption>;
  StringListOperators: Partial<StringListOperators>;
  StringOperators: Partial<StringOperators>;
  StringStructFieldConfig: Partial<StringStructFieldConfig>;
  StructCustomFieldConfig: Partial<Omit<StructCustomFieldConfig, 'fields'> & { fields: Array<ResolversParentTypes['StructFieldConfig']> }>;
  StructField: ResolversInterfaceTypes<ResolversParentTypes>['StructField'];
  StructFieldConfig: Partial<ResolversUnionTypes<ResolversParentTypes>['StructFieldConfig']>;
  SubscribedDevice: SubscribedDevices;
  Success: Partial<Success>;
  Surcharge: Partial<Surcharge>;
  SurchargeInput: Partial<SurchargeInput>;
  Tag: Partial<Tag>;
  TagFilterParameter: Partial<TagFilterParameter>;
  TagList: Partial<TagList>;
  TagListOptions: Partial<TagListOptions>;
  TagSortParameter: Partial<TagSortParameter>;
  TaxCategory: Partial<TaxCategory>;
  TaxCategoryFilterParameter: Partial<TaxCategoryFilterParameter>;
  TaxCategoryList: Partial<TaxCategoryList>;
  TaxCategoryListOptions: Partial<TaxCategoryListOptions>;
  TaxCategorySortParameter: Partial<TaxCategorySortParameter>;
  TaxLine: Partial<TaxLine>;
  TaxRate: Partial<Omit<TaxRate, 'customerGroup' | 'zone'> & { customerGroup?: Maybe<ResolversParentTypes['CustomerGroup']>, zone: ResolversParentTypes['Zone'] }>;
  TaxRateFilterParameter: Partial<TaxRateFilterParameter>;
  TaxRateList: Partial<Omit<TaxRateList, 'items'> & { items: Array<ResolversParentTypes['TaxRate']> }>;
  TaxRateListOptions: Partial<TaxRateListOptions>;
  TaxRateSortParameter: Partial<TaxRateSortParameter>;
  TestEligibleShippingMethodsInput: Partial<TestEligibleShippingMethodsInput>;
  TestShippingMethodInput: Partial<TestShippingMethodInput>;
  TestShippingMethodOrderLineInput: Partial<TestShippingMethodOrderLineInput>;
  TestShippingMethodQuote: Partial<TestShippingMethodQuote>;
  TestShippingMethodResult: Partial<TestShippingMethodResult>;
  TextCustomFieldConfig: Partial<TextCustomFieldConfig>;
  TextStructFieldConfig: Partial<TextStructFieldConfig>;
  TransitionFulfillmentToStateResult: Partial<ResolversUnionTypes<ResolversParentTypes>['TransitionFulfillmentToStateResult']>;
  TransitionOrderToStateResult: Partial<ResolversUnionTypes<ResolversParentTypes>['TransitionOrderToStateResult']>;
  TransitionPaymentToStateResult: Partial<ResolversUnionTypes<ResolversParentTypes>['TransitionPaymentToStateResult']>;
  UpdateActiveAdministratorInput: Partial<UpdateActiveAdministratorInput>;
  UpdateAddressInput: Partial<UpdateAddressInput>;
  UpdateAdministratorInput: Partial<UpdateAdministratorInput>;
  UpdateAssetInput: Partial<UpdateAssetInput>;
  UpdateChannelInput: Partial<UpdateChannelInput>;
  UpdateChannelResult: Partial<ResolversUnionTypes<ResolversParentTypes>['UpdateChannelResult']>;
  UpdateCollectionInput: Partial<UpdateCollectionInput>;
  UpdateCollectionTranslationInput: Partial<UpdateCollectionTranslationInput>;
  UpdateCountryInput: Partial<UpdateCountryInput>;
  UpdateCustomerGroupInput: Partial<UpdateCustomerGroupInput>;
  UpdateCustomerInput: Partial<UpdateCustomerInput>;
  UpdateCustomerNoteInput: Partial<UpdateCustomerNoteInput>;
  UpdateCustomerResult: Partial<ResolversUnionTypes<ResolversParentTypes>['UpdateCustomerResult']>;
  UpdateFacetInput: Partial<UpdateFacetInput>;
  UpdateFacetValueInput: Partial<UpdateFacetValueInput>;
  UpdateGlobalSettingsInput: Partial<UpdateGlobalSettingsInput>;
  UpdateGlobalSettingsResult: Partial<ResolversUnionTypes<ResolversParentTypes>['UpdateGlobalSettingsResult']>;
  UpdateOrderAddressInput: Partial<UpdateOrderAddressInput>;
  UpdateOrderInput: Partial<UpdateOrderInput>;
  UpdateOrderItemErrorResult: Partial<ResolversUnionTypes<ResolversParentTypes>['UpdateOrderItemErrorResult']>;
  UpdateOrderItemsResult: Partial<ResolversUnionTypes<ResolversParentTypes>['UpdateOrderItemsResult']>;
  UpdateOrderNoteInput: Partial<UpdateOrderNoteInput>;
  UpdatePaymentMethodInput: Partial<UpdatePaymentMethodInput>;
  UpdateProductInput: Partial<UpdateProductInput>;
  UpdateProductOptionGroupInput: Partial<UpdateProductOptionGroupInput>;
  UpdateProductOptionInput: Partial<UpdateProductOptionInput>;
  UpdateProductVariantInput: Partial<UpdateProductVariantInput>;
  UpdateProductVariantPriceInput: Partial<UpdateProductVariantPriceInput>;
  UpdatePromotionInput: Partial<UpdatePromotionInput>;
  UpdatePromotionResult: Partial<ResolversUnionTypes<ResolversParentTypes>['UpdatePromotionResult']>;
  UpdateProvinceInput: Partial<UpdateProvinceInput>;
  UpdateRoleInput: Partial<UpdateRoleInput>;
  UpdateScheduledTaskInput: Partial<UpdateScheduledTaskInput>;
  UpdateSellerInput: Partial<UpdateSellerInput>;
  UpdateShippingMethodInput: Partial<UpdateShippingMethodInput>;
  UpdateStockLocationInput: Partial<UpdateStockLocationInput>;
  UpdateSubscribedDeviceInput: Partial<UpdateSubscribedDeviceInput>;
  UpdateTagInput: Partial<UpdateTagInput>;
  UpdateTaxCategoryInput: Partial<UpdateTaxCategoryInput>;
  UpdateTaxRateInput: Partial<UpdateTaxRateInput>;
  UpdateZoneInput: Partial<UpdateZoneInput>;
  Upload: Partial<Scalars['Upload']['output']>;
  User: Partial<Omit<User, 'authenticationMethods' | 'roles'> & { authenticationMethods: Array<ResolversParentTypes['AuthenticationMethod']>, roles: Array<ResolversParentTypes['Role']> }>;
  Zone: Partial<Omit<Zone, 'members'> & { members: Array<ResolversParentTypes['Region']> }>;
  ZoneFilterParameter: Partial<ZoneFilterParameter>;
  ZoneList: Partial<Omit<ZoneList, 'items'> & { items: Array<ResolversParentTypes['Zone']> }>;
  ZoneListOptions: Partial<ZoneListOptions>;
  ZoneSortParameter: Partial<ZoneSortParameter>;
}>;

export type AddFulfillmentToOrderResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['AddFulfillmentToOrderResult'] = ResolversParentTypes['AddFulfillmentToOrderResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'CreateFulfillmentError' | 'EmptyOrderLineSelectionError' | 'Fulfillment' | 'FulfillmentStateTransitionError' | 'InsufficientStockOnHandError' | 'InvalidFulfillmentHandlerError' | 'ItemsAlreadyFulfilledError', ParentType, ContextType>;
}>;

export type AddManualPaymentToOrderResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['AddManualPaymentToOrderResult'] = ResolversParentTypes['AddManualPaymentToOrderResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ManualPaymentStateError' | 'Order', ParentType, ContextType>;
}>;

export type AddressResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<ResolversTypes['Country'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  defaultBillingAddress?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  defaultShippingAddress?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  fullName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postalCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  province?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  streetLine1?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  streetLine2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AdjustmentResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['Adjustment'] = ResolversParentTypes['Adjustment']> = ResolversObject<{
  adjustmentSource?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['AdjustmentType'], ParentType, ContextType>;
}>;

export type AdministratorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['Administrator'] = ResolversParentTypes['Administrator']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  emailAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AdministratorListResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['AdministratorList'] = ResolversParentTypes['AdministratorList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['Administrator']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AllocationResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['Allocation'] = ResolversParentTypes['Allocation']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  orderLine?: Resolver<ResolversTypes['OrderLine'], ParentType, ContextType>;
  productVariant?: Resolver<ResolversTypes['ProductVariant'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['StockMovementType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AlreadyRefundedErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['AlreadyRefundedError'] = ResolversParentTypes['AlreadyRefundedError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refundId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApplyCouponCodeResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['ApplyCouponCodeResult'] = ResolversParentTypes['ApplyCouponCodeResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'CouponCodeExpiredError' | 'CouponCodeInvalidError' | 'CouponCodeLimitError' | 'Order', ParentType, ContextType>;
}>;

export type AssetResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  fileSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  focalPoint?: Resolver<Maybe<ResolversTypes['Coordinate']>, ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mimeType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  preview?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['AssetType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  width?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AssetListResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['AssetList'] = ResolversParentTypes['AssetList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['Asset']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AuthenticationMethodResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['AuthenticationMethod'] = ResolversParentTypes['AuthenticationMethod']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  strategy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AuthenticationResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['AuthenticationResult'] = ResolversParentTypes['AuthenticationResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'CurrentUser' | 'InvalidCredentialsError', ParentType, ContextType>;
}>;

export type BooleanCustomFieldConfigResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['BooleanCustomFieldConfig'] = ResolversParentTypes['BooleanCustomFieldConfig']> = ResolversObject<{
  deprecated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deprecationReason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  internal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  list?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nullable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  readonly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  requiresPermission?: Resolver<Maybe<Array<ResolversTypes['Permission']>>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ui?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BooleanStructFieldConfigResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['BooleanStructFieldConfig'] = ResolversParentTypes['BooleanStructFieldConfig']> = ResolversObject<{
  description?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  label?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  list?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ui?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CancelActiveOrderErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['CancelActiveOrderError'] = ResolversParentTypes['CancelActiveOrderError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderState?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CancelOrderResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['CancelOrderResult'] = ResolversParentTypes['CancelOrderResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'CancelActiveOrderError' | 'EmptyOrderLineSelectionError' | 'MultipleOrderError' | 'Order' | 'OrderStateTransitionError' | 'QuantityTooGreatError', ParentType, ContextType>;
}>;

export type CancelPaymentErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['CancelPaymentError'] = ResolversParentTypes['CancelPaymentError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  paymentErrorMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CancelPaymentResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['CancelPaymentResult'] = ResolversParentTypes['CancelPaymentResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'CancelPaymentError' | 'Payment' | 'PaymentStateTransitionError', ParentType, ContextType>;
}>;

export type CancellationResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['Cancellation'] = ResolversParentTypes['Cancellation']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  orderLine?: Resolver<ResolversTypes['OrderLine'], ParentType, ContextType>;
  productVariant?: Resolver<ResolversTypes['ProductVariant'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['StockMovementType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChannelResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['Channel'] = ResolversParentTypes['Channel']> = ResolversObject<{
  availableCurrencyCodes?: Resolver<Array<ResolversTypes['CurrencyCode']>, ParentType, ContextType>;
  availableLanguageCodes?: Resolver<Maybe<Array<ResolversTypes['LanguageCode']>>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  currencyCode?: Resolver<ResolversTypes['CurrencyCode'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  defaultCurrencyCode?: Resolver<ResolversTypes['CurrencyCode'], ParentType, ContextType>;
  defaultLanguageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  defaultShippingZone?: Resolver<Maybe<ResolversTypes['Zone']>, ParentType, ContextType>;
  defaultTaxZone?: Resolver<Maybe<ResolversTypes['Zone']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  outOfStockThreshold?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pricesIncludeTax?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  seller?: Resolver<Maybe<ResolversTypes['Seller']>, ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trackInventory?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChannelDefaultLanguageErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['ChannelDefaultLanguageError'] = ResolversParentTypes['ChannelDefaultLanguageError']> = ResolversObject<{
  channelCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  language?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChannelListResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['ChannelList'] = ResolversParentTypes['ChannelList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['Channel']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CollectionResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['Collection'] = ResolversParentTypes['Collection']> = ResolversObject<{
  assets?: Resolver<Array<ResolversTypes['Asset']>, ParentType, ContextType>;
  breadcrumbs?: Resolver<Array<ResolversTypes['CollectionBreadcrumb']>, ParentType, ContextType>;
  children?: Resolver<Maybe<Array<ResolversTypes['Collection']>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  featuredAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  filters?: Resolver<Array<ResolversTypes['ConfigurableOperation']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  inheritFilters?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isPrivate?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  languageCode?: Resolver<Maybe<ResolversTypes['LanguageCode']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType>;
  parentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  productVariants?: Resolver<ResolversTypes['ProductVariantList'], ParentType, ContextType, Partial<CollectionProductVariantsArgs>>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['CollectionTranslation']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CollectionBreadcrumbResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['CollectionBreadcrumb'] = ResolversParentTypes['CollectionBreadcrumb']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type CollectionListResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['CollectionList'] = ResolversParentTypes['CollectionList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['Collection']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CollectionResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['CollectionResult'] = ResolversParentTypes['CollectionResult']> = ResolversObject<{
  collection?: Resolver<ResolversTypes['Collection'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
}>;

export type CollectionTranslationResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['CollectionTranslation'] = ResolversParentTypes['CollectionTranslation']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
}>;

export type ConfigArgResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['ConfigArg'] = ResolversParentTypes['ConfigArg']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type ConfigArgDefinitionResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['ConfigArgDefinition'] = ResolversParentTypes['ConfigArgDefinition']> = ResolversObject<{
  defaultValue?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  list?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ui?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
}>;

export type ConfigurableOperationResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['ConfigurableOperation'] = ResolversParentTypes['ConfigurableOperation']> = ResolversObject<{
  args?: Resolver<Array<ResolversTypes['ConfigArg']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type ConfigurableOperationDefinitionResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['ConfigurableOperationDefinition'] = ResolversParentTypes['ConfigurableOperationDefinition']> = ResolversObject<{
  args?: Resolver<Array<ResolversTypes['ConfigArgDefinition']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type CoordinateResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['Coordinate'] = ResolversParentTypes['Coordinate']> = ResolversObject<{
  x?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  y?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
}>;

export type CountryResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['Country'] = ResolversParentTypes['Country']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['RegionTranslation']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CountryListResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['CountryList'] = ResolversParentTypes['CountryList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['Country']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CouponCodeExpiredErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['CouponCodeExpiredError'] = ResolversParentTypes['CouponCodeExpiredError']> = ResolversObject<{
  couponCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CouponCodeInvalidErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['CouponCodeInvalidError'] = ResolversParentTypes['CouponCodeInvalidError']> = ResolversObject<{
  couponCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CouponCodeLimitErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['CouponCodeLimitError'] = ResolversParentTypes['CouponCodeLimitError']> = ResolversObject<{
  couponCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateAssetResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['CreateAssetResult'] = ResolversParentTypes['CreateAssetResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Asset' | 'MimeTypeError', ParentType, ContextType>;
}>;

export type CreateChannelResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['CreateChannelResult'] = ResolversParentTypes['CreateChannelResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Channel' | 'LanguageNotAvailableError', ParentType, ContextType>;
}>;

export type CreateCustomerResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['CreateCustomerResult'] = ResolversParentTypes['CreateCustomerResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Customer' | 'EmailAddressConflictError', ParentType, ContextType>;
}>;

export type CreateFulfillmentErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['CreateFulfillmentError'] = ResolversParentTypes['CreateFulfillmentError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  fulfillmentHandlerError?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreatePromotionResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['CreatePromotionResult'] = ResolversParentTypes['CreatePromotionResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'MissingConditionsError' | 'Promotion', ParentType, ContextType>;
}>;

export type CurrentUserResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['CurrentUser'] = ResolversParentTypes['CurrentUser']> = ResolversObject<{
  channels?: Resolver<Array<ResolversTypes['CurrentUserChannel']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CurrentUserChannelResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['CurrentUserChannel'] = ResolversParentTypes['CurrentUserChannel']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['Permission']>, ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type CustomFieldResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['CustomField'] = ResolversParentTypes['CustomField']> = ResolversObject<{
  __resolveType: TypeResolveFn<'BooleanCustomFieldConfig' | 'DateTimeCustomFieldConfig' | 'FloatCustomFieldConfig' | 'IntCustomFieldConfig' | 'LocaleStringCustomFieldConfig' | 'LocaleTextCustomFieldConfig' | 'RelationCustomFieldConfig' | 'StringCustomFieldConfig' | 'StructCustomFieldConfig' | 'TextCustomFieldConfig', ParentType, ContextType>;
}>;

export type CustomFieldConfigResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['CustomFieldConfig'] = ResolversParentTypes['CustomFieldConfig']> = ResolversObject<{
  __resolveType: TypeResolveFn<'BooleanCustomFieldConfig' | 'DateTimeCustomFieldConfig' | 'FloatCustomFieldConfig' | 'IntCustomFieldConfig' | 'LocaleStringCustomFieldConfig' | 'LocaleTextCustomFieldConfig' | 'RelationCustomFieldConfig' | 'StringCustomFieldConfig' | 'StructCustomFieldConfig' | 'TextCustomFieldConfig', ParentType, ContextType>;
}>;

export type CustomFieldsResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['CustomFields'] = ResolversParentTypes['CustomFields']> = ResolversObject<{
  Address?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  Administrator?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  Asset?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  Channel?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  Collection?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  Customer?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  CustomerGroup?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  Facet?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  FacetValue?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  Fulfillment?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  GlobalSettings?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  HistoryEntry?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  Order?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  OrderLine?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  Payment?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  PaymentMethod?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  Product?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  ProductOption?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  ProductOptionGroup?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  ProductVariant?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  ProductVariantPrice?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  Promotion?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  Refund?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  Region?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  Seller?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  Session?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  ShippingLine?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  ShippingMethod?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  StockLevel?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  StockLocation?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  StockMovement?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  TaxCategory?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  TaxRate?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  User?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  Zone?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
}>;

export type CustomerResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']> = ResolversObject<{
  addresses?: Resolver<Maybe<Array<ResolversTypes['Address']>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  emailAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  groups?: Resolver<Array<ResolversTypes['CustomerGroup']>, ParentType, ContextType>;
  history?: Resolver<ResolversTypes['HistoryEntryList'], ParentType, ContextType, Partial<CustomerHistoryArgs>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orders?: Resolver<ResolversTypes['OrderList'], ParentType, ContextType, Partial<CustomerOrdersArgs>>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerGroupResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['CustomerGroup'] = ResolversParentTypes['CustomerGroup']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  customers?: Resolver<ResolversTypes['CustomerList'], ParentType, ContextType, Partial<CustomerGroupCustomersArgs>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerGroupListResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['CustomerGroupList'] = ResolversParentTypes['CustomerGroupList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['CustomerGroup']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerListResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['CustomerList'] = ResolversParentTypes['CustomerList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['Customer']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerWithTokensResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['CustomerWithTokens'] = ResolversParentTypes['CustomerWithTokens']> = ResolversObject<{
  activeTokensCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  customer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType>;
  tokens?: Resolver<Array<ResolversTypes['SubscribedDevice']>, ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DateTimeCustomFieldConfigResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['DateTimeCustomFieldConfig'] = ResolversParentTypes['DateTimeCustomFieldConfig']> = ResolversObject<{
  deprecated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deprecationReason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  internal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  list?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nullable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  readonly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  requiresPermission?: Resolver<Maybe<Array<ResolversTypes['Permission']>>, ParentType, ContextType>;
  step?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ui?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DateTimeStructFieldConfigResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['DateTimeStructFieldConfig'] = ResolversParentTypes['DateTimeStructFieldConfig']> = ResolversObject<{
  description?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  label?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  list?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  step?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ui?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeletionResponseResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['DeletionResponse'] = ResolversParentTypes['DeletionResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  result?: Resolver<ResolversTypes['DeletionResult'], ParentType, ContextType>;
}>;

export type DiscountResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['Discount'] = ResolversParentTypes['Discount']> = ResolversObject<{
  adjustmentSource?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  amountWithTax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['AdjustmentType'], ParentType, ContextType>;
}>;

export type DuplicateEntityErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['DuplicateEntityError'] = ResolversParentTypes['DuplicateEntityError']> = ResolversObject<{
  duplicationError?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DuplicateEntityResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['DuplicateEntityResult'] = ResolversParentTypes['DuplicateEntityResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'DuplicateEntityError' | 'DuplicateEntitySuccess', ParentType, ContextType>;
}>;

export type DuplicateEntitySuccessResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['DuplicateEntitySuccess'] = ResolversParentTypes['DuplicateEntitySuccess']> = ResolversObject<{
  newEntityId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmailAddressConflictErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['EmailAddressConflictError'] = ResolversParentTypes['EmailAddressConflictError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmptyOrderLineSelectionErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['EmptyOrderLineSelectionError'] = ResolversParentTypes['EmptyOrderLineSelectionError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EntityCustomFieldsResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['EntityCustomFields'] = ResolversParentTypes['EntityCustomFields']> = ResolversObject<{
  customFields?: Resolver<Array<ResolversTypes['CustomFieldConfig']>, ParentType, ContextType>;
  entityName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type EntityDuplicatorDefinitionResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['EntityDuplicatorDefinition'] = ResolversParentTypes['EntityDuplicatorDefinition']> = ResolversObject<{
  args?: Resolver<Array<ResolversTypes['ConfigArgDefinition']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  forEntities?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  requiresPermission?: Resolver<Array<ResolversTypes['Permission']>, ParentType, ContextType>;
}>;

export type ErrorResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['ErrorResult'] = ResolversParentTypes['ErrorResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'AlreadyRefundedError' | 'CancelActiveOrderError' | 'CancelPaymentError' | 'ChannelDefaultLanguageError' | 'CouponCodeExpiredError' | 'CouponCodeInvalidError' | 'CouponCodeLimitError' | 'CreateFulfillmentError' | 'DuplicateEntityError' | 'EmailAddressConflictError' | 'EmptyOrderLineSelectionError' | 'FacetInUseError' | 'FulfillmentStateTransitionError' | 'GuestCheckoutError' | 'IneligibleShippingMethodError' | 'InsufficientStockError' | 'InsufficientStockOnHandError' | 'InvalidCredentialsError' | 'InvalidFulfillmentHandlerError' | 'ItemsAlreadyFulfilledError' | 'LanguageNotAvailableError' | 'ManualPaymentStateError' | 'MimeTypeError' | 'MissingConditionsError' | 'MultipleOrderError' | 'NativeAuthStrategyError' | 'NegativeQuantityError' | 'NoActiveOrderError' | 'NoChangesSpecifiedError' | 'NothingToRefundError' | 'OrderInterceptorError' | 'OrderLimitError' | 'OrderModificationError' | 'OrderModificationStateError' | 'OrderStateTransitionError' | 'PaymentMethodMissingError' | 'PaymentOrderMismatchError' | 'PaymentStateTransitionError' | 'ProductOptionInUseError' | 'QuantityTooGreatError' | 'RefundAmountError' | 'RefundOrderStateError' | 'RefundPaymentIdMissingError' | 'RefundStateTransitionError' | 'SettlePaymentError', ParentType, ContextType>;
}>;

export type FacetResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['Facet'] = ResolversParentTypes['Facet']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isPrivate?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['FacetTranslation']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  valueList?: Resolver<ResolversTypes['FacetValueList'], ParentType, ContextType, Partial<FacetValueListArgs>>;
  values?: Resolver<Array<ResolversTypes['FacetValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FacetInUseErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['FacetInUseError'] = ResolversParentTypes['FacetInUseError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  facetCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  variantCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FacetListResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['FacetList'] = ResolversParentTypes['FacetList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['Facet']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FacetTranslationResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['FacetTranslation'] = ResolversParentTypes['FacetTranslation']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
}>;

export type FacetValueResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['FacetValue'] = ResolversParentTypes['FacetValue']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  facet?: Resolver<ResolversTypes['Facet'], ParentType, ContextType>;
  facetId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['FacetValueTranslation']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FacetValueListResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['FacetValueList'] = ResolversParentTypes['FacetValueList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['FacetValue']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FacetValueResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['FacetValueResult'] = ResolversParentTypes['FacetValueResult']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  facetValue?: Resolver<ResolversTypes['FacetValue'], ParentType, ContextType>;
}>;

export type FacetValueTranslationResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['FacetValueTranslation'] = ResolversParentTypes['FacetValueTranslation']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
}>;

export type FloatCustomFieldConfigResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['FloatCustomFieldConfig'] = ResolversParentTypes['FloatCustomFieldConfig']> = ResolversObject<{
  deprecated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deprecationReason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  internal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  list?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nullable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  readonly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  requiresPermission?: Resolver<Maybe<Array<ResolversTypes['Permission']>>, ParentType, ContextType>;
  step?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ui?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FloatStructFieldConfigResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['FloatStructFieldConfig'] = ResolversParentTypes['FloatStructFieldConfig']> = ResolversObject<{
  description?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  label?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  list?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  step?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ui?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FulfillmentResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['Fulfillment'] = ResolversParentTypes['Fulfillment']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lines?: Resolver<Array<ResolversTypes['FulfillmentLine']>, ParentType, ContextType>;
  method?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nextStates?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summary?: Resolver<Array<ResolversTypes['FulfillmentLine']>, ParentType, ContextType>;
  trackingCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FulfillmentLineResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['FulfillmentLine'] = ResolversParentTypes['FulfillmentLine']> = ResolversObject<{
  fulfillment?: Resolver<ResolversTypes['Fulfillment'], ParentType, ContextType>;
  fulfillmentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  orderLine?: Resolver<ResolversTypes['OrderLine'], ParentType, ContextType>;
  orderLineId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
}>;

export type FulfillmentStateTransitionErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['FulfillmentStateTransitionError'] = ResolversParentTypes['FulfillmentStateTransitionError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  fromState?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toState?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transitionError?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GlobalSettingsResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['GlobalSettings'] = ResolversParentTypes['GlobalSettings']> = ResolversObject<{
  availableLanguages?: Resolver<Array<ResolversTypes['LanguageCode']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  outOfStockThreshold?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  serverConfig?: Resolver<ResolversTypes['ServerConfig'], ParentType, ContextType>;
  trackInventory?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GuestCheckoutErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['GuestCheckoutError'] = ResolversParentTypes['GuestCheckoutError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  errorDetail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HistoryEntryResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['HistoryEntry'] = ResolversParentTypes['HistoryEntry']> = ResolversObject<{
  administrator?: Resolver<Maybe<ResolversTypes['Administrator']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  data?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['HistoryEntryType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HistoryEntryListResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['HistoryEntryList'] = ResolversParentTypes['HistoryEntryList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['HistoryEntry']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ImportInfoResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['ImportInfo'] = ResolversParentTypes['ImportInfo']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  imported?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  processed?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
}>;

export type IneligibleShippingMethodErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['IneligibleShippingMethodError'] = ResolversParentTypes['IneligibleShippingMethodError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InsufficientStockErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['InsufficientStockError'] = ResolversParentTypes['InsufficientStockError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  quantityAvailable?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InsufficientStockOnHandErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['InsufficientStockOnHandError'] = ResolversParentTypes['InsufficientStockOnHandError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productVariantId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  productVariantName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stockOnHand?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IntCustomFieldConfigResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['IntCustomFieldConfig'] = ResolversParentTypes['IntCustomFieldConfig']> = ResolversObject<{
  deprecated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deprecationReason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  internal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  list?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nullable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  readonly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  requiresPermission?: Resolver<Maybe<Array<ResolversTypes['Permission']>>, ParentType, ContextType>;
  step?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ui?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IntStructFieldConfigResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['IntStructFieldConfig'] = ResolversParentTypes['IntStructFieldConfig']> = ResolversObject<{
  description?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  label?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  list?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  step?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ui?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InvalidCredentialsErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['InvalidCredentialsError'] = ResolversParentTypes['InvalidCredentialsError']> = ResolversObject<{
  authenticationError?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InvalidFulfillmentHandlerErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['InvalidFulfillmentHandlerError'] = ResolversParentTypes['InvalidFulfillmentHandlerError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemsAlreadyFulfilledErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['ItemsAlreadyFulfilledError'] = ResolversParentTypes['ItemsAlreadyFulfilledError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type JobResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['Job'] = ResolversParentTypes['Job']> = ResolversObject<{
  attempts?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isSettled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  progress?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  queueName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  retries?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  settledAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  startedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  state?: Resolver<ResolversTypes['JobState'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobBufferSizeResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['JobBufferSize'] = ResolversParentTypes['JobBufferSize']> = ResolversObject<{
  bufferId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
}>;

export type JobListResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['JobList'] = ResolversParentTypes['JobList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['Job']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobQueueResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['JobQueue'] = ResolversParentTypes['JobQueue']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  running?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
}>;

export type LanguageNotAvailableErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['LanguageNotAvailableError'] = ResolversParentTypes['LanguageNotAvailableError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LocaleStringCustomFieldConfigResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['LocaleStringCustomFieldConfig'] = ResolversParentTypes['LocaleStringCustomFieldConfig']> = ResolversObject<{
  deprecated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deprecationReason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  internal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  list?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nullable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  readonly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  requiresPermission?: Resolver<Maybe<Array<ResolversTypes['Permission']>>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ui?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LocaleTextCustomFieldConfigResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['LocaleTextCustomFieldConfig'] = ResolversParentTypes['LocaleTextCustomFieldConfig']> = ResolversObject<{
  deprecated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deprecationReason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  internal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  list?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nullable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  readonly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  requiresPermission?: Resolver<Maybe<Array<ResolversTypes['Permission']>>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ui?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LocalizedStringResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['LocalizedString'] = ResolversParentTypes['LocalizedString']> = ResolversObject<{
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type ManualPaymentStateErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['ManualPaymentStateError'] = ResolversParentTypes['ManualPaymentStateError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MetricSummaryResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['MetricSummary'] = ResolversParentTypes['MetricSummary']> = ResolversObject<{
  entries?: Resolver<Array<ResolversTypes['MetricSummaryEntry']>, ParentType, ContextType>;
  interval?: Resolver<ResolversTypes['MetricInterval'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['MetricType'], ParentType, ContextType>;
}>;

export type MetricSummaryEntryResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['MetricSummaryEntry'] = ResolversParentTypes['MetricSummaryEntry']> = ResolversObject<{
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
}>;

export type MimeTypeErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['MimeTypeError'] = ResolversParentTypes['MimeTypeError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  fileName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mimeType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MissingConditionsErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['MissingConditionsError'] = ResolversParentTypes['MissingConditionsError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ModifyOrderResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['ModifyOrderResult'] = ResolversParentTypes['ModifyOrderResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'CouponCodeExpiredError' | 'CouponCodeInvalidError' | 'CouponCodeLimitError' | 'IneligibleShippingMethodError' | 'InsufficientStockError' | 'NegativeQuantityError' | 'NoChangesSpecifiedError' | 'Order' | 'OrderLimitError' | 'OrderModificationStateError' | 'PaymentMethodMissingError' | 'RefundPaymentIdMissingError', ParentType, ContextType>;
}>;

export interface MoneyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Money'], any> {
  name: 'Money';
}

export type MultipleOrderErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['MultipleOrderError'] = ResolversParentTypes['MultipleOrderError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addCustomersToGroup?: Resolver<ResolversTypes['CustomerGroup'], ParentType, ContextType, RequireFields<MutationAddCustomersToGroupArgs, 'customerGroupId' | 'customerIds'>>;
  addFulfillmentToOrder?: Resolver<ResolversTypes['AddFulfillmentToOrderResult'], ParentType, ContextType, RequireFields<MutationAddFulfillmentToOrderArgs, 'input'>>;
  addItemToDraftOrder?: Resolver<ResolversTypes['UpdateOrderItemsResult'], ParentType, ContextType, RequireFields<MutationAddItemToDraftOrderArgs, 'input' | 'orderId'>>;
  addManualPaymentToOrder?: Resolver<ResolversTypes['AddManualPaymentToOrderResult'], ParentType, ContextType, RequireFields<MutationAddManualPaymentToOrderArgs, 'input'>>;
  addMembersToZone?: Resolver<ResolversTypes['Zone'], ParentType, ContextType, RequireFields<MutationAddMembersToZoneArgs, 'memberIds' | 'zoneId'>>;
  addNoteToCustomer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<MutationAddNoteToCustomerArgs, 'input'>>;
  addNoteToOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationAddNoteToOrderArgs, 'input'>>;
  addOptionGroupToProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationAddOptionGroupToProductArgs, 'optionGroupId' | 'productId'>>;
  adjustDraftOrderLine?: Resolver<ResolversTypes['UpdateOrderItemsResult'], ParentType, ContextType, RequireFields<MutationAdjustDraftOrderLineArgs, 'input' | 'orderId'>>;
  applyCouponCodeToDraftOrder?: Resolver<ResolversTypes['ApplyCouponCodeResult'], ParentType, ContextType, RequireFields<MutationApplyCouponCodeToDraftOrderArgs, 'couponCode' | 'orderId'>>;
  assignAssetsToChannel?: Resolver<Array<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<MutationAssignAssetsToChannelArgs, 'input'>>;
  assignCollectionsToChannel?: Resolver<Array<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<MutationAssignCollectionsToChannelArgs, 'input'>>;
  assignFacetsToChannel?: Resolver<Array<ResolversTypes['Facet']>, ParentType, ContextType, RequireFields<MutationAssignFacetsToChannelArgs, 'input'>>;
  assignPaymentMethodsToChannel?: Resolver<Array<ResolversTypes['PaymentMethod']>, ParentType, ContextType, RequireFields<MutationAssignPaymentMethodsToChannelArgs, 'input'>>;
  assignProductVariantsToChannel?: Resolver<Array<ResolversTypes['ProductVariant']>, ParentType, ContextType, RequireFields<MutationAssignProductVariantsToChannelArgs, 'input'>>;
  assignProductsToChannel?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationAssignProductsToChannelArgs, 'input'>>;
  assignPromotionsToChannel?: Resolver<Array<ResolversTypes['Promotion']>, ParentType, ContextType, RequireFields<MutationAssignPromotionsToChannelArgs, 'input'>>;
  assignRoleToAdministrator?: Resolver<ResolversTypes['Administrator'], ParentType, ContextType, RequireFields<MutationAssignRoleToAdministratorArgs, 'administratorId' | 'roleId'>>;
  assignShippingMethodsToChannel?: Resolver<Array<ResolversTypes['ShippingMethod']>, ParentType, ContextType, RequireFields<MutationAssignShippingMethodsToChannelArgs, 'input'>>;
  assignStockLocationsToChannel?: Resolver<Array<ResolversTypes['StockLocation']>, ParentType, ContextType, RequireFields<MutationAssignStockLocationsToChannelArgs, 'input'>>;
  authenticate?: Resolver<ResolversTypes['AuthenticationResult'], ParentType, ContextType, RequireFields<MutationAuthenticateArgs, 'input'>>;
  cancelJob?: Resolver<ResolversTypes['Job'], ParentType, ContextType, RequireFields<MutationCancelJobArgs, 'jobId'>>;
  cancelOrder?: Resolver<ResolversTypes['CancelOrderResult'], ParentType, ContextType, RequireFields<MutationCancelOrderArgs, 'input'>>;
  cancelPayment?: Resolver<ResolversTypes['CancelPaymentResult'], ParentType, ContextType, RequireFields<MutationCancelPaymentArgs, 'id'>>;
  createAdministrator?: Resolver<ResolversTypes['Administrator'], ParentType, ContextType, RequireFields<MutationCreateAdministratorArgs, 'input'>>;
  createAssets?: Resolver<Array<ResolversTypes['CreateAssetResult']>, ParentType, ContextType, RequireFields<MutationCreateAssetsArgs, 'input'>>;
  createChannel?: Resolver<ResolversTypes['CreateChannelResult'], ParentType, ContextType, RequireFields<MutationCreateChannelArgs, 'input'>>;
  createCollection?: Resolver<ResolversTypes['Collection'], ParentType, ContextType, RequireFields<MutationCreateCollectionArgs, 'input'>>;
  createCountry?: Resolver<ResolversTypes['Country'], ParentType, ContextType, RequireFields<MutationCreateCountryArgs, 'input'>>;
  createCustomer?: Resolver<ResolversTypes['CreateCustomerResult'], ParentType, ContextType, RequireFields<MutationCreateCustomerArgs, 'input'>>;
  createCustomerAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType, RequireFields<MutationCreateCustomerAddressArgs, 'customerId' | 'input'>>;
  createCustomerGroup?: Resolver<ResolversTypes['CustomerGroup'], ParentType, ContextType, RequireFields<MutationCreateCustomerGroupArgs, 'input'>>;
  createDraftOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  createFacet?: Resolver<ResolversTypes['Facet'], ParentType, ContextType, RequireFields<MutationCreateFacetArgs, 'input'>>;
  createFacetValue?: Resolver<ResolversTypes['FacetValue'], ParentType, ContextType, RequireFields<MutationCreateFacetValueArgs, 'input'>>;
  createFacetValues?: Resolver<Array<ResolversTypes['FacetValue']>, ParentType, ContextType, RequireFields<MutationCreateFacetValuesArgs, 'input'>>;
  createPaymentMethod?: Resolver<ResolversTypes['PaymentMethod'], ParentType, ContextType, RequireFields<MutationCreatePaymentMethodArgs, 'input'>>;
  createProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'input'>>;
  createProductOption?: Resolver<ResolversTypes['ProductOption'], ParentType, ContextType, RequireFields<MutationCreateProductOptionArgs, 'input'>>;
  createProductOptionGroup?: Resolver<ResolversTypes['ProductOptionGroup'], ParentType, ContextType, RequireFields<MutationCreateProductOptionGroupArgs, 'input'>>;
  createProductVariants?: Resolver<Array<Maybe<ResolversTypes['ProductVariant']>>, ParentType, ContextType, RequireFields<MutationCreateProductVariantsArgs, 'input'>>;
  createPromotion?: Resolver<ResolversTypes['CreatePromotionResult'], ParentType, ContextType, RequireFields<MutationCreatePromotionArgs, 'input'>>;
  createProvince?: Resolver<ResolversTypes['Province'], ParentType, ContextType, RequireFields<MutationCreateProvinceArgs, 'input'>>;
  createRole?: Resolver<ResolversTypes['Role'], ParentType, ContextType, RequireFields<MutationCreateRoleArgs, 'input'>>;
  createSeller?: Resolver<ResolversTypes['Seller'], ParentType, ContextType, RequireFields<MutationCreateSellerArgs, 'input'>>;
  createShippingMethod?: Resolver<ResolversTypes['ShippingMethod'], ParentType, ContextType, RequireFields<MutationCreateShippingMethodArgs, 'input'>>;
  createStockLocation?: Resolver<ResolversTypes['StockLocation'], ParentType, ContextType, RequireFields<MutationCreateStockLocationArgs, 'input'>>;
  createTag?: Resolver<ResolversTypes['Tag'], ParentType, ContextType, RequireFields<MutationCreateTagArgs, 'input'>>;
  createTaxCategory?: Resolver<ResolversTypes['TaxCategory'], ParentType, ContextType, RequireFields<MutationCreateTaxCategoryArgs, 'input'>>;
  createTaxRate?: Resolver<ResolversTypes['TaxRate'], ParentType, ContextType, RequireFields<MutationCreateTaxRateArgs, 'input'>>;
  createZone?: Resolver<ResolversTypes['Zone'], ParentType, ContextType, RequireFields<MutationCreateZoneArgs, 'input'>>;
  deleteAdministrator?: Resolver<ResolversTypes['DeletionResponse'], ParentType, ContextType, RequireFields<MutationDeleteAdministratorArgs, 'id'>>;
  deleteAdministrators?: Resolver<Array<ResolversTypes['DeletionResponse']>, ParentType, ContextType, RequireFields<MutationDeleteAdministratorsArgs, 'ids'>>;
  deleteAsset?: Resolver<ResolversTypes['DeletionResponse'], ParentType, ContextType, RequireFields<MutationDeleteAssetArgs, 'input'>>;
  deleteAssets?: Resolver<ResolversTypes['DeletionResponse'], ParentType, ContextType, RequireFields<MutationDeleteAssetsArgs, 'input'>>;
  deleteChannel?: Resolver<ResolversTypes['DeletionResponse'], ParentType, ContextType, RequireFields<MutationDeleteChannelArgs, 'id'>>;
  deleteChannels?: Resolver<Array<ResolversTypes['DeletionResponse']>, ParentType, ContextType, RequireFields<MutationDeleteChannelsArgs, 'ids'>>;
  deleteCollection?: Resolver<ResolversTypes['DeletionResponse'], ParentType, ContextType, RequireFields<MutationDeleteCollectionArgs, 'id'>>;
  deleteCollections?: Resolver<Array<ResolversTypes['DeletionResponse']>, ParentType, ContextType, RequireFields<MutationDeleteCollectionsArgs, 'ids'>>;
  deleteCountries?: Resolver<Array<ResolversTypes['DeletionResponse']>, ParentType, ContextType, RequireFields<MutationDeleteCountriesArgs, 'ids'>>;
  deleteCountry?: Resolver<ResolversTypes['DeletionResponse'], ParentType, ContextType, RequireFields<MutationDeleteCountryArgs, 'id'>>;
  deleteCustomer?: Resolver<ResolversTypes['DeletionResponse'], ParentType, ContextType, RequireFields<MutationDeleteCustomerArgs, 'id'>>;
  deleteCustomerAddress?: Resolver<ResolversTypes['Success'], ParentType, ContextType, RequireFields<MutationDeleteCustomerAddressArgs, 'id'>>;
  deleteCustomerGroup?: Resolver<ResolversTypes['DeletionResponse'], ParentType, ContextType, RequireFields<MutationDeleteCustomerGroupArgs, 'id'>>;
  deleteCustomerGroups?: Resolver<Array<ResolversTypes['DeletionResponse']>, ParentType, ContextType, RequireFields<MutationDeleteCustomerGroupsArgs, 'ids'>>;
  deleteCustomerNote?: Resolver<ResolversTypes['DeletionResponse'], ParentType, ContextType, RequireFields<MutationDeleteCustomerNoteArgs, 'id'>>;
  deleteCustomers?: Resolver<Array<ResolversTypes['DeletionResponse']>, ParentType, ContextType, RequireFields<MutationDeleteCustomersArgs, 'ids'>>;
  deleteDraftOrder?: Resolver<ResolversTypes['DeletionResponse'], ParentType, ContextType, RequireFields<MutationDeleteDraftOrderArgs, 'orderId'>>;
  deleteFacet?: Resolver<ResolversTypes['DeletionResponse'], ParentType, ContextType, RequireFields<MutationDeleteFacetArgs, 'id'>>;
  deleteFacetValues?: Resolver<Array<ResolversTypes['DeletionResponse']>, ParentType, ContextType, RequireFields<MutationDeleteFacetValuesArgs, 'ids'>>;
  deleteFacets?: Resolver<Array<ResolversTypes['DeletionResponse']>, ParentType, ContextType, RequireFields<MutationDeleteFacetsArgs, 'ids'>>;
  deleteOrderNote?: Resolver<ResolversTypes['DeletionResponse'], ParentType, ContextType, RequireFields<MutationDeleteOrderNoteArgs, 'id'>>;
  deletePaymentMethod?: Resolver<ResolversTypes['DeletionResponse'], ParentType, ContextType, RequireFields<MutationDeletePaymentMethodArgs, 'id'>>;
  deletePaymentMethods?: Resolver<Array<ResolversTypes['DeletionResponse']>, ParentType, ContextType, RequireFields<MutationDeletePaymentMethodsArgs, 'ids'>>;
  deleteProduct?: Resolver<ResolversTypes['DeletionResponse'], ParentType, ContextType, RequireFields<MutationDeleteProductArgs, 'id'>>;
  deleteProductOption?: Resolver<ResolversTypes['DeletionResponse'], ParentType, ContextType, RequireFields<MutationDeleteProductOptionArgs, 'id'>>;
  deleteProductVariant?: Resolver<ResolversTypes['DeletionResponse'], ParentType, ContextType, RequireFields<MutationDeleteProductVariantArgs, 'id'>>;
  deleteProductVariants?: Resolver<Array<ResolversTypes['DeletionResponse']>, ParentType, ContextType, RequireFields<MutationDeleteProductVariantsArgs, 'ids'>>;
  deleteProducts?: Resolver<Array<ResolversTypes['DeletionResponse']>, ParentType, ContextType, RequireFields<MutationDeleteProductsArgs, 'ids'>>;
  deletePromotion?: Resolver<ResolversTypes['DeletionResponse'], ParentType, ContextType, RequireFields<MutationDeletePromotionArgs, 'id'>>;
  deletePromotions?: Resolver<Array<ResolversTypes['DeletionResponse']>, ParentType, ContextType, RequireFields<MutationDeletePromotionsArgs, 'ids'>>;
  deleteProvince?: Resolver<ResolversTypes['DeletionResponse'], ParentType, ContextType, RequireFields<MutationDeleteProvinceArgs, 'id'>>;
  deleteRole?: Resolver<ResolversTypes['DeletionResponse'], ParentType, ContextType, RequireFields<MutationDeleteRoleArgs, 'id'>>;
  deleteRoles?: Resolver<Array<ResolversTypes['DeletionResponse']>, ParentType, ContextType, RequireFields<MutationDeleteRolesArgs, 'ids'>>;
  deleteSeller?: Resolver<ResolversTypes['DeletionResponse'], ParentType, ContextType, RequireFields<MutationDeleteSellerArgs, 'id'>>;
  deleteSellers?: Resolver<Array<ResolversTypes['DeletionResponse']>, ParentType, ContextType, RequireFields<MutationDeleteSellersArgs, 'ids'>>;
  deleteShippingMethod?: Resolver<ResolversTypes['DeletionResponse'], ParentType, ContextType, RequireFields<MutationDeleteShippingMethodArgs, 'id'>>;
  deleteShippingMethods?: Resolver<Array<ResolversTypes['DeletionResponse']>, ParentType, ContextType, RequireFields<MutationDeleteShippingMethodsArgs, 'ids'>>;
  deleteStockLocation?: Resolver<ResolversTypes['DeletionResponse'], ParentType, ContextType, RequireFields<MutationDeleteStockLocationArgs, 'input'>>;
  deleteStockLocations?: Resolver<Array<ResolversTypes['DeletionResponse']>, ParentType, ContextType, RequireFields<MutationDeleteStockLocationsArgs, 'input'>>;
  deleteSubscribedDevice?: Resolver<ResolversTypes['PushNotificationResponse'], ParentType, ContextType, RequireFields<MutationDeleteSubscribedDeviceArgs, 'id'>>;
  deleteTag?: Resolver<ResolversTypes['DeletionResponse'], ParentType, ContextType, RequireFields<MutationDeleteTagArgs, 'id'>>;
  deleteTaxCategories?: Resolver<Array<ResolversTypes['DeletionResponse']>, ParentType, ContextType, RequireFields<MutationDeleteTaxCategoriesArgs, 'ids'>>;
  deleteTaxCategory?: Resolver<ResolversTypes['DeletionResponse'], ParentType, ContextType, RequireFields<MutationDeleteTaxCategoryArgs, 'id'>>;
  deleteTaxRate?: Resolver<ResolversTypes['DeletionResponse'], ParentType, ContextType, RequireFields<MutationDeleteTaxRateArgs, 'id'>>;
  deleteTaxRates?: Resolver<Array<ResolversTypes['DeletionResponse']>, ParentType, ContextType, RequireFields<MutationDeleteTaxRatesArgs, 'ids'>>;
  deleteZone?: Resolver<ResolversTypes['DeletionResponse'], ParentType, ContextType, RequireFields<MutationDeleteZoneArgs, 'id'>>;
  deleteZones?: Resolver<Array<ResolversTypes['DeletionResponse']>, ParentType, ContextType, RequireFields<MutationDeleteZonesArgs, 'ids'>>;
  duplicateEntity?: Resolver<ResolversTypes['DuplicateEntityResult'], ParentType, ContextType, RequireFields<MutationDuplicateEntityArgs, 'input'>>;
  flushBufferedJobs?: Resolver<ResolversTypes['Success'], ParentType, ContextType, Partial<MutationFlushBufferedJobsArgs>>;
  importProducts?: Resolver<Maybe<ResolversTypes['ImportInfo']>, ParentType, ContextType, RequireFields<MutationImportProductsArgs, 'csvFile'>>;
  login?: Resolver<ResolversTypes['NativeAuthenticationResult'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'password' | 'username'>>;
  logout?: Resolver<ResolversTypes['Success'], ParentType, ContextType>;
  modifyOrder?: Resolver<ResolversTypes['ModifyOrderResult'], ParentType, ContextType, RequireFields<MutationModifyOrderArgs, 'input'>>;
  moveCollection?: Resolver<ResolversTypes['Collection'], ParentType, ContextType, RequireFields<MutationMoveCollectionArgs, 'input'>>;
  refundOrder?: Resolver<ResolversTypes['RefundOrderResult'], ParentType, ContextType, RequireFields<MutationRefundOrderArgs, 'input'>>;
  reindex?: Resolver<ResolversTypes['Job'], ParentType, ContextType>;
  removeCollectionsFromChannel?: Resolver<Array<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<MutationRemoveCollectionsFromChannelArgs, 'input'>>;
  removeCouponCodeFromDraftOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<MutationRemoveCouponCodeFromDraftOrderArgs, 'couponCode' | 'orderId'>>;
  removeCustomersFromGroup?: Resolver<ResolversTypes['CustomerGroup'], ParentType, ContextType, RequireFields<MutationRemoveCustomersFromGroupArgs, 'customerGroupId' | 'customerIds'>>;
  removeDraftOrderLine?: Resolver<ResolversTypes['RemoveOrderItemsResult'], ParentType, ContextType, RequireFields<MutationRemoveDraftOrderLineArgs, 'orderId' | 'orderLineId'>>;
  removeFacetsFromChannel?: Resolver<Array<ResolversTypes['RemoveFacetFromChannelResult']>, ParentType, ContextType, RequireFields<MutationRemoveFacetsFromChannelArgs, 'input'>>;
  removeMembersFromZone?: Resolver<ResolversTypes['Zone'], ParentType, ContextType, RequireFields<MutationRemoveMembersFromZoneArgs, 'memberIds' | 'zoneId'>>;
  removeOptionGroupFromProduct?: Resolver<ResolversTypes['RemoveOptionGroupFromProductResult'], ParentType, ContextType, RequireFields<MutationRemoveOptionGroupFromProductArgs, 'optionGroupId' | 'productId'>>;
  removePaymentMethodsFromChannel?: Resolver<Array<ResolversTypes['PaymentMethod']>, ParentType, ContextType, RequireFields<MutationRemovePaymentMethodsFromChannelArgs, 'input'>>;
  removeProductVariantsFromChannel?: Resolver<Array<ResolversTypes['ProductVariant']>, ParentType, ContextType, RequireFields<MutationRemoveProductVariantsFromChannelArgs, 'input'>>;
  removeProductsFromChannel?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationRemoveProductsFromChannelArgs, 'input'>>;
  removePromotionsFromChannel?: Resolver<Array<ResolversTypes['Promotion']>, ParentType, ContextType, RequireFields<MutationRemovePromotionsFromChannelArgs, 'input'>>;
  removeSettledJobs?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MutationRemoveSettledJobsArgs>>;
  removeShippingMethodsFromChannel?: Resolver<Array<ResolversTypes['ShippingMethod']>, ParentType, ContextType, RequireFields<MutationRemoveShippingMethodsFromChannelArgs, 'input'>>;
  removeStockLocationsFromChannel?: Resolver<Array<ResolversTypes['StockLocation']>, ParentType, ContextType, RequireFields<MutationRemoveStockLocationsFromChannelArgs, 'input'>>;
  runPendingSearchIndexUpdates?: Resolver<ResolversTypes['Success'], ParentType, ContextType>;
  runScheduledTask?: Resolver<ResolversTypes['Success'], ParentType, ContextType, RequireFields<MutationRunScheduledTaskArgs, 'id'>>;
  sendPushNotification?: Resolver<ResolversTypes['SendNotificationResult'], ParentType, ContextType, RequireFields<MutationSendPushNotificationArgs, 'input'>>;
  setCustomerForDraftOrder?: Resolver<ResolversTypes['SetCustomerForDraftOrderResult'], ParentType, ContextType, RequireFields<MutationSetCustomerForDraftOrderArgs, 'orderId'>>;
  setDraftOrderBillingAddress?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationSetDraftOrderBillingAddressArgs, 'input' | 'orderId'>>;
  setDraftOrderCustomFields?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationSetDraftOrderCustomFieldsArgs, 'input' | 'orderId'>>;
  setDraftOrderShippingAddress?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationSetDraftOrderShippingAddressArgs, 'input' | 'orderId'>>;
  setDraftOrderShippingMethod?: Resolver<ResolversTypes['SetOrderShippingMethodResult'], ParentType, ContextType, RequireFields<MutationSetDraftOrderShippingMethodArgs, 'orderId' | 'shippingMethodId'>>;
  setOrderCustomFields?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<MutationSetOrderCustomFieldsArgs, 'input'>>;
  setOrderCustomer?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<MutationSetOrderCustomerArgs, 'input'>>;
  setSettingsStoreValue?: Resolver<ResolversTypes['SetSettingsStoreValueResult'], ParentType, ContextType, RequireFields<MutationSetSettingsStoreValueArgs, 'input'>>;
  setSettingsStoreValues?: Resolver<Array<ResolversTypes['SetSettingsStoreValueResult']>, ParentType, ContextType, RequireFields<MutationSetSettingsStoreValuesArgs, 'inputs'>>;
  settlePayment?: Resolver<ResolversTypes['SettlePaymentResult'], ParentType, ContextType, RequireFields<MutationSettlePaymentArgs, 'id'>>;
  settleRefund?: Resolver<ResolversTypes['SettleRefundResult'], ParentType, ContextType, RequireFields<MutationSettleRefundArgs, 'input'>>;
  transitionFulfillmentToState?: Resolver<ResolversTypes['TransitionFulfillmentToStateResult'], ParentType, ContextType, RequireFields<MutationTransitionFulfillmentToStateArgs, 'id' | 'state'>>;
  transitionOrderToState?: Resolver<Maybe<ResolversTypes['TransitionOrderToStateResult']>, ParentType, ContextType, RequireFields<MutationTransitionOrderToStateArgs, 'id' | 'state'>>;
  transitionPaymentToState?: Resolver<ResolversTypes['TransitionPaymentToStateResult'], ParentType, ContextType, RequireFields<MutationTransitionPaymentToStateArgs, 'id' | 'state'>>;
  unsetDraftOrderBillingAddress?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationUnsetDraftOrderBillingAddressArgs, 'orderId'>>;
  unsetDraftOrderShippingAddress?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationUnsetDraftOrderShippingAddressArgs, 'orderId'>>;
  updateActiveAdministrator?: Resolver<ResolversTypes['Administrator'], ParentType, ContextType, RequireFields<MutationUpdateActiveAdministratorArgs, 'input'>>;
  updateAdministrator?: Resolver<ResolversTypes['Administrator'], ParentType, ContextType, RequireFields<MutationUpdateAdministratorArgs, 'input'>>;
  updateAsset?: Resolver<ResolversTypes['Asset'], ParentType, ContextType, RequireFields<MutationUpdateAssetArgs, 'input'>>;
  updateChannel?: Resolver<ResolversTypes['UpdateChannelResult'], ParentType, ContextType, RequireFields<MutationUpdateChannelArgs, 'input'>>;
  updateCollection?: Resolver<ResolversTypes['Collection'], ParentType, ContextType, RequireFields<MutationUpdateCollectionArgs, 'input'>>;
  updateCountry?: Resolver<ResolversTypes['Country'], ParentType, ContextType, RequireFields<MutationUpdateCountryArgs, 'input'>>;
  updateCustomer?: Resolver<ResolversTypes['UpdateCustomerResult'], ParentType, ContextType, RequireFields<MutationUpdateCustomerArgs, 'input'>>;
  updateCustomerAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType, RequireFields<MutationUpdateCustomerAddressArgs, 'input'>>;
  updateCustomerGroup?: Resolver<ResolversTypes['CustomerGroup'], ParentType, ContextType, RequireFields<MutationUpdateCustomerGroupArgs, 'input'>>;
  updateCustomerNote?: Resolver<ResolversTypes['HistoryEntry'], ParentType, ContextType, RequireFields<MutationUpdateCustomerNoteArgs, 'input'>>;
  updateFacet?: Resolver<ResolversTypes['Facet'], ParentType, ContextType, RequireFields<MutationUpdateFacetArgs, 'input'>>;
  updateFacetValue?: Resolver<ResolversTypes['FacetValue'], ParentType, ContextType, RequireFields<MutationUpdateFacetValueArgs, 'input'>>;
  updateFacetValues?: Resolver<Array<ResolversTypes['FacetValue']>, ParentType, ContextType, RequireFields<MutationUpdateFacetValuesArgs, 'input'>>;
  updateGlobalSettings?: Resolver<ResolversTypes['UpdateGlobalSettingsResult'], ParentType, ContextType, RequireFields<MutationUpdateGlobalSettingsArgs, 'input'>>;
  updateOrderNote?: Resolver<ResolversTypes['HistoryEntry'], ParentType, ContextType, RequireFields<MutationUpdateOrderNoteArgs, 'input'>>;
  updatePaymentMethod?: Resolver<ResolversTypes['PaymentMethod'], ParentType, ContextType, RequireFields<MutationUpdatePaymentMethodArgs, 'input'>>;
  updateProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationUpdateProductArgs, 'input'>>;
  updateProductOption?: Resolver<ResolversTypes['ProductOption'], ParentType, ContextType, RequireFields<MutationUpdateProductOptionArgs, 'input'>>;
  updateProductOptionGroup?: Resolver<ResolversTypes['ProductOptionGroup'], ParentType, ContextType, RequireFields<MutationUpdateProductOptionGroupArgs, 'input'>>;
  updateProductVariant?: Resolver<ResolversTypes['ProductVariant'], ParentType, ContextType, RequireFields<MutationUpdateProductVariantArgs, 'input'>>;
  updateProductVariants?: Resolver<Array<Maybe<ResolversTypes['ProductVariant']>>, ParentType, ContextType, RequireFields<MutationUpdateProductVariantsArgs, 'input'>>;
  updateProducts?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationUpdateProductsArgs, 'input'>>;
  updatePromotion?: Resolver<ResolversTypes['UpdatePromotionResult'], ParentType, ContextType, RequireFields<MutationUpdatePromotionArgs, 'input'>>;
  updateProvince?: Resolver<ResolversTypes['Province'], ParentType, ContextType, RequireFields<MutationUpdateProvinceArgs, 'input'>>;
  updateRole?: Resolver<ResolversTypes['Role'], ParentType, ContextType, RequireFields<MutationUpdateRoleArgs, 'input'>>;
  updateScheduledTask?: Resolver<ResolversTypes['ScheduledTask'], ParentType, ContextType, RequireFields<MutationUpdateScheduledTaskArgs, 'input'>>;
  updateSeller?: Resolver<ResolversTypes['Seller'], ParentType, ContextType, RequireFields<MutationUpdateSellerArgs, 'input'>>;
  updateShippingMethod?: Resolver<ResolversTypes['ShippingMethod'], ParentType, ContextType, RequireFields<MutationUpdateShippingMethodArgs, 'input'>>;
  updateStockLocation?: Resolver<ResolversTypes['StockLocation'], ParentType, ContextType, RequireFields<MutationUpdateStockLocationArgs, 'input'>>;
  updateSubscribedDevice?: Resolver<ResolversTypes['PushNotificationResponse'], ParentType, ContextType, RequireFields<MutationUpdateSubscribedDeviceArgs, 'input'>>;
  updateTag?: Resolver<ResolversTypes['Tag'], ParentType, ContextType, RequireFields<MutationUpdateTagArgs, 'input'>>;
  updateTaxCategory?: Resolver<ResolversTypes['TaxCategory'], ParentType, ContextType, RequireFields<MutationUpdateTaxCategoryArgs, 'input'>>;
  updateTaxRate?: Resolver<ResolversTypes['TaxRate'], ParentType, ContextType, RequireFields<MutationUpdateTaxRateArgs, 'input'>>;
  updateZone?: Resolver<ResolversTypes['Zone'], ParentType, ContextType, RequireFields<MutationUpdateZoneArgs, 'input'>>;
}>;

export type NativeAuthStrategyErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['NativeAuthStrategyError'] = ResolversParentTypes['NativeAuthStrategyError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NativeAuthenticationResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['NativeAuthenticationResult'] = ResolversParentTypes['NativeAuthenticationResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'CurrentUser' | 'InvalidCredentialsError' | 'NativeAuthStrategyError', ParentType, ContextType>;
}>;

export type NegativeQuantityErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['NegativeQuantityError'] = ResolversParentTypes['NegativeQuantityError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NoActiveOrderErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['NoActiveOrderError'] = ResolversParentTypes['NoActiveOrderError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NoChangesSpecifiedErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['NoChangesSpecifiedError'] = ResolversParentTypes['NoChangesSpecifiedError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NodeResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Address' | 'Administrator' | 'Allocation' | 'Asset' | 'AuthenticationMethod' | 'Cancellation' | 'Channel' | 'Collection' | 'Country' | 'Customer' | 'CustomerGroup' | 'Facet' | 'FacetValue' | 'Fulfillment' | 'HistoryEntry' | 'Job' | 'Order' | 'OrderLine' | 'OrderModification' | 'Payment' | 'PaymentMethod' | 'Product' | 'ProductOption' | 'ProductOptionGroup' | 'ProductVariant' | 'Promotion' | 'Province' | 'Refund' | 'Release' | 'Return' | 'Role' | 'Sale' | 'Seller' | 'ShippingMethod' | 'StockAdjustment' | 'StockLevel' | 'StockLocation' | 'SubscribedDevice' | 'Surcharge' | 'Tag' | 'TaxCategory' | 'TaxRate' | 'User' | 'Zone', ParentType, ContextType>;
}>;

export type NothingToRefundErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['NothingToRefundError'] = ResolversParentTypes['NothingToRefundError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = ResolversObject<{
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  aggregateOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType>;
  aggregateOrderId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  billingAddress?: Resolver<Maybe<ResolversTypes['OrderAddress']>, ParentType, ContextType>;
  channels?: Resolver<Array<ResolversTypes['Channel']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  couponCodes?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  currencyCode?: Resolver<ResolversTypes['CurrencyCode'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType>;
  discounts?: Resolver<Array<ResolversTypes['Discount']>, ParentType, ContextType>;
  fulfillments?: Resolver<Maybe<Array<ResolversTypes['Fulfillment']>>, ParentType, ContextType>;
  history?: Resolver<ResolversTypes['HistoryEntryList'], ParentType, ContextType, Partial<OrderHistoryArgs>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lines?: Resolver<Array<ResolversTypes['OrderLine']>, ParentType, ContextType>;
  modifications?: Resolver<Array<ResolversTypes['OrderModification']>, ParentType, ContextType>;
  nextStates?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  orderPlacedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  payments?: Resolver<Maybe<Array<ResolversTypes['Payment']>>, ParentType, ContextType>;
  promotions?: Resolver<Array<ResolversTypes['Promotion']>, ParentType, ContextType>;
  sellerOrders?: Resolver<Maybe<Array<ResolversTypes['Order']>>, ParentType, ContextType>;
  shipping?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  shippingAddress?: Resolver<Maybe<ResolversTypes['OrderAddress']>, ParentType, ContextType>;
  shippingLines?: Resolver<Array<ResolversTypes['ShippingLine']>, ParentType, ContextType>;
  shippingWithTax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subTotal?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  subTotalWithTax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  surcharges?: Resolver<Array<ResolversTypes['Surcharge']>, ParentType, ContextType>;
  taxSummary?: Resolver<Array<ResolversTypes['OrderTaxSummary']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  totalQuantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalWithTax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['OrderType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderAddressResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['OrderAddress'] = ResolversParentTypes['OrderAddress']> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  fullName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postalCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  province?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  streetLine1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  streetLine2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type OrderInterceptorErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['OrderInterceptorError'] = ResolversParentTypes['OrderInterceptorError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  interceptorError?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderLimitErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['OrderLimitError'] = ResolversParentTypes['OrderLimitError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  maxItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderLineResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['OrderLine'] = ResolversParentTypes['OrderLine']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  discountedLinePrice?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  discountedLinePriceWithTax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  discountedUnitPrice?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  discountedUnitPriceWithTax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  discounts?: Resolver<Array<ResolversTypes['Discount']>, ParentType, ContextType>;
  featuredAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  fulfillmentLines?: Resolver<Maybe<Array<ResolversTypes['FulfillmentLine']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  linePrice?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  linePriceWithTax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  lineTax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  orderPlacedQuantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  productVariant?: Resolver<ResolversTypes['ProductVariant'], ParentType, ContextType>;
  proratedLinePrice?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  proratedLinePriceWithTax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  proratedUnitPrice?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  proratedUnitPriceWithTax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  taxLines?: Resolver<Array<ResolversTypes['TaxLine']>, ParentType, ContextType>;
  taxRate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  unitPrice?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  unitPriceChangeSinceAdded?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  unitPriceWithTax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  unitPriceWithTaxChangeSinceAdded?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderListResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['OrderList'] = ResolversParentTypes['OrderList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderModificationResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['OrderModification'] = ResolversParentTypes['OrderModification']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isSettled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lines?: Resolver<Array<ResolversTypes['OrderModificationLine']>, ParentType, ContextType>;
  note?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  payment?: Resolver<Maybe<ResolversTypes['Payment']>, ParentType, ContextType>;
  priceChange?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  refund?: Resolver<Maybe<ResolversTypes['Refund']>, ParentType, ContextType>;
  surcharges?: Resolver<Maybe<Array<ResolversTypes['Surcharge']>>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderModificationErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['OrderModificationError'] = ResolversParentTypes['OrderModificationError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderModificationLineResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['OrderModificationLine'] = ResolversParentTypes['OrderModificationLine']> = ResolversObject<{
  modification?: Resolver<ResolversTypes['OrderModification'], ParentType, ContextType>;
  modificationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  orderLine?: Resolver<ResolversTypes['OrderLine'], ParentType, ContextType>;
  orderLineId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
}>;

export type OrderModificationStateErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['OrderModificationStateError'] = ResolversParentTypes['OrderModificationStateError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderProcessStateResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['OrderProcessState'] = ResolversParentTypes['OrderProcessState']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  to?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type OrderStateTransitionErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['OrderStateTransitionError'] = ResolversParentTypes['OrderStateTransitionError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  fromState?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toState?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transitionError?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderTaxSummaryResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['OrderTaxSummary'] = ResolversParentTypes['OrderTaxSummary']> = ResolversObject<{
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  taxBase?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  taxRate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  taxTotal?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
}>;

export type PaginatedListResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['PaginatedList'] = ResolversParentTypes['PaginatedList']> = ResolversObject<{
  __resolveType: TypeResolveFn<'AdministratorList' | 'AssetList' | 'ChannelList' | 'CollectionList' | 'CountryList' | 'CustomerGroupList' | 'CustomerList' | 'FacetList' | 'FacetValueList' | 'HistoryEntryList' | 'JobList' | 'OrderList' | 'PaymentMethodList' | 'ProductList' | 'ProductVariantList' | 'PromotionList' | 'ProvinceList' | 'RoleList' | 'SellerList' | 'ShippingMethodList' | 'StockLocationList' | 'TagList' | 'TaxCategoryList' | 'TaxRateList' | 'ZoneList', ParentType, ContextType>;
}>;

export type PaymentResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['Payment'] = ResolversParentTypes['Payment']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  errorMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  method?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nextStates?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  refunds?: Resolver<Array<ResolversTypes['Refund']>, ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transactionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaymentMethodResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['PaymentMethod'] = ResolversParentTypes['PaymentMethod']> = ResolversObject<{
  checker?: Resolver<Maybe<ResolversTypes['ConfigurableOperation']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  handler?: Resolver<ResolversTypes['ConfigurableOperation'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['PaymentMethodTranslation']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaymentMethodListResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['PaymentMethodList'] = ResolversParentTypes['PaymentMethodList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['PaymentMethod']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaymentMethodMissingErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['PaymentMethodMissingError'] = ResolversParentTypes['PaymentMethodMissingError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaymentMethodQuoteResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['PaymentMethodQuote'] = ResolversParentTypes['PaymentMethodQuote']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  eligibilityMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isEligible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type PaymentMethodTranslationResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['PaymentMethodTranslation'] = ResolversParentTypes['PaymentMethodTranslation']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
}>;

export type PaymentOrderMismatchErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['PaymentOrderMismatchError'] = ResolversParentTypes['PaymentOrderMismatchError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaymentStateTransitionErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['PaymentStateTransitionError'] = ResolversParentTypes['PaymentStateTransitionError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  fromState?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toState?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transitionError?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PermissionDefinitionResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['PermissionDefinition'] = ResolversParentTypes['PermissionDefinition']> = ResolversObject<{
  assignable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type PriceRangeResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['PriceRange'] = ResolversParentTypes['PriceRange']> = ResolversObject<{
  max?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  min?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = ResolversObject<{
  assets?: Resolver<Array<ResolversTypes['Asset']>, ParentType, ContextType>;
  channels?: Resolver<Array<ResolversTypes['Channel']>, ParentType, ContextType>;
  collections?: Resolver<Array<ResolversTypes['Collection']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  facetValues?: Resolver<Array<ResolversTypes['FacetValue']>, ParentType, ContextType>;
  featuredAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  optionGroups?: Resolver<Array<ResolversTypes['ProductOptionGroup']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['ProductTranslation']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  variantList?: Resolver<ResolversTypes['ProductVariantList'], ParentType, ContextType, Partial<ProductVariantListArgs>>;
  variants?: Resolver<Array<ResolversTypes['ProductVariant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductListResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['ProductList'] = ResolversParentTypes['ProductList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['ProductOption'] = ResolversParentTypes['ProductOption']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  group?: Resolver<ResolversTypes['ProductOptionGroup'], ParentType, ContextType>;
  groupId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['ProductOptionTranslation']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionGroupResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['ProductOptionGroup'] = ResolversParentTypes['ProductOptionGroup']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  options?: Resolver<Array<ResolversTypes['ProductOption']>, ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['ProductOptionGroupTranslation']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionGroupTranslationResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['ProductOptionGroupTranslation'] = ResolversParentTypes['ProductOptionGroupTranslation']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
}>;

export type ProductOptionInUseErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['ProductOptionInUseError'] = ResolversParentTypes['ProductOptionInUseError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  optionGroupCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productVariantCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionTranslationResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['ProductOptionTranslation'] = ResolversParentTypes['ProductOptionTranslation']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
}>;

export type ProductTranslationResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['ProductTranslation'] = ResolversParentTypes['ProductTranslation']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
}>;

export type ProductVariantResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['ProductVariant'] = ResolversParentTypes['ProductVariant']> = ResolversObject<{
  assets?: Resolver<Array<ResolversTypes['Asset']>, ParentType, ContextType>;
  channels?: Resolver<Array<ResolversTypes['Channel']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  currencyCode?: Resolver<ResolversTypes['CurrencyCode'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  facetValues?: Resolver<Array<ResolversTypes['FacetValue']>, ParentType, ContextType>;
  featuredAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  options?: Resolver<Array<ResolversTypes['ProductOption']>, ParentType, ContextType>;
  outOfStockThreshold?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  priceWithTax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  prices?: Resolver<Array<ResolversTypes['ProductVariantPrice']>, ParentType, ContextType>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stockAllocated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stockLevel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stockLevels?: Resolver<Array<ResolversTypes['StockLevel']>, ParentType, ContextType>;
  stockMovements?: Resolver<ResolversTypes['StockMovementList'], ParentType, ContextType, Partial<ProductVariantStockMovementsArgs>>;
  stockOnHand?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  taxCategory?: Resolver<ResolversTypes['TaxCategory'], ParentType, ContextType>;
  taxRateApplied?: Resolver<ResolversTypes['TaxRate'], ParentType, ContextType>;
  trackInventory?: Resolver<ResolversTypes['GlobalFlag'], ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['ProductVariantTranslation']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  useGlobalOutOfStockThreshold?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductVariantListResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['ProductVariantList'] = ResolversParentTypes['ProductVariantList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['ProductVariant']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductVariantPriceResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['ProductVariantPrice'] = ResolversParentTypes['ProductVariantPrice']> = ResolversObject<{
  currencyCode?: Resolver<ResolversTypes['CurrencyCode'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
}>;

export type ProductVariantTranslationResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['ProductVariantTranslation'] = ResolversParentTypes['ProductVariantTranslation']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
}>;

export type PromotionResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['Promotion'] = ResolversParentTypes['Promotion']> = ResolversObject<{
  actions?: Resolver<Array<ResolversTypes['ConfigurableOperation']>, ParentType, ContextType>;
  conditions?: Resolver<Array<ResolversTypes['ConfigurableOperation']>, ParentType, ContextType>;
  couponCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  endsAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  perCustomerUsageLimit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  startsAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['PromotionTranslation']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  usageLimit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PromotionListResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['PromotionList'] = ResolversParentTypes['PromotionList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['Promotion']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PromotionTranslationResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['PromotionTranslation'] = ResolversParentTypes['PromotionTranslation']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
}>;

export type ProvinceResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['Province'] = ResolversParentTypes['Province']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['RegionTranslation']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProvinceListResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['ProvinceList'] = ResolversParentTypes['ProvinceList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['Province']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PushNotificationResponseResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['PushNotificationResponse'] = ResolversParentTypes['PushNotificationResponse']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
}>;

export type QuantityTooGreatErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['QuantityTooGreatError'] = ResolversParentTypes['QuantityTooGreatError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  activeAdministrator?: Resolver<Maybe<ResolversTypes['Administrator']>, ParentType, ContextType>;
  activeChannel?: Resolver<ResolversTypes['Channel'], ParentType, ContextType>;
  administrator?: Resolver<Maybe<ResolversTypes['Administrator']>, ParentType, ContextType, RequireFields<QueryAdministratorArgs, 'id'>>;
  administrators?: Resolver<ResolversTypes['AdministratorList'], ParentType, ContextType, Partial<QueryAdministratorsArgs>>;
  allCustomers?: Resolver<Array<ResolversTypes['Customer']>, ParentType, ContextType>;
  asset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<QueryAssetArgs, 'id'>>;
  assets?: Resolver<ResolversTypes['AssetList'], ParentType, ContextType, Partial<QueryAssetsArgs>>;
  channel?: Resolver<Maybe<ResolversTypes['Channel']>, ParentType, ContextType, RequireFields<QueryChannelArgs, 'id'>>;
  channels?: Resolver<ResolversTypes['ChannelList'], ParentType, ContextType, Partial<QueryChannelsArgs>>;
  collection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, Partial<QueryCollectionArgs>>;
  collectionFilters?: Resolver<Array<ResolversTypes['ConfigurableOperationDefinition']>, ParentType, ContextType>;
  collections?: Resolver<ResolversTypes['CollectionList'], ParentType, ContextType, Partial<QueryCollectionsArgs>>;
  countries?: Resolver<ResolversTypes['CountryList'], ParentType, ContextType, Partial<QueryCountriesArgs>>;
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType, RequireFields<QueryCountryArgs, 'id'>>;
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<QueryCustomerArgs, 'id'>>;
  customerById?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<QueryCustomerByIdArgs, 'id'>>;
  customerGroup?: Resolver<Maybe<ResolversTypes['CustomerGroup']>, ParentType, ContextType, RequireFields<QueryCustomerGroupArgs, 'id'>>;
  customerGroups?: Resolver<ResolversTypes['CustomerGroupList'], ParentType, ContextType, Partial<QueryCustomerGroupsArgs>>;
  customers?: Resolver<ResolversTypes['CustomerList'], ParentType, ContextType, Partial<QueryCustomersArgs>>;
  customersWithTokens?: Resolver<Array<ResolversTypes['CustomerWithTokens']>, ParentType, ContextType>;
  eligibleShippingMethodsForDraftOrder?: Resolver<Array<ResolversTypes['ShippingMethodQuote']>, ParentType, ContextType, RequireFields<QueryEligibleShippingMethodsForDraftOrderArgs, 'orderId'>>;
  entityDuplicators?: Resolver<Array<ResolversTypes['EntityDuplicatorDefinition']>, ParentType, ContextType>;
  facet?: Resolver<Maybe<ResolversTypes['Facet']>, ParentType, ContextType, RequireFields<QueryFacetArgs, 'id'>>;
  facetValue?: Resolver<Maybe<ResolversTypes['FacetValue']>, ParentType, ContextType, RequireFields<QueryFacetValueArgs, 'id'>>;
  facetValues?: Resolver<ResolversTypes['FacetValueList'], ParentType, ContextType, Partial<QueryFacetValuesArgs>>;
  facets?: Resolver<ResolversTypes['FacetList'], ParentType, ContextType, Partial<QueryFacetsArgs>>;
  fulfillmentHandlers?: Resolver<Array<ResolversTypes['ConfigurableOperationDefinition']>, ParentType, ContextType>;
  getSettingsStoreValue?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<QueryGetSettingsStoreValueArgs, 'key'>>;
  getSettingsStoreValues?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<QueryGetSettingsStoreValuesArgs, 'keys'>>;
  globalSettings?: Resolver<ResolversTypes['GlobalSettings'], ParentType, ContextType>;
  job?: Resolver<Maybe<ResolversTypes['Job']>, ParentType, ContextType, RequireFields<QueryJobArgs, 'jobId'>>;
  jobBufferSize?: Resolver<Array<ResolversTypes['JobBufferSize']>, ParentType, ContextType, Partial<QueryJobBufferSizeArgs>>;
  jobQueues?: Resolver<Array<ResolversTypes['JobQueue']>, ParentType, ContextType>;
  jobs?: Resolver<ResolversTypes['JobList'], ParentType, ContextType, Partial<QueryJobsArgs>>;
  jobsById?: Resolver<Array<ResolversTypes['Job']>, ParentType, ContextType, RequireFields<QueryJobsByIdArgs, 'jobIds'>>;
  me?: Resolver<Maybe<ResolversTypes['CurrentUser']>, ParentType, ContextType>;
  metricSummary?: Resolver<Array<ResolversTypes['MetricSummary']>, ParentType, ContextType, Partial<QueryMetricSummaryArgs>>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryOrderArgs, 'id'>>;
  orders?: Resolver<ResolversTypes['OrderList'], ParentType, ContextType, Partial<QueryOrdersArgs>>;
  paymentMethod?: Resolver<Maybe<ResolversTypes['PaymentMethod']>, ParentType, ContextType, RequireFields<QueryPaymentMethodArgs, 'id'>>;
  paymentMethodEligibilityCheckers?: Resolver<Array<ResolversTypes['ConfigurableOperationDefinition']>, ParentType, ContextType>;
  paymentMethodHandlers?: Resolver<Array<ResolversTypes['ConfigurableOperationDefinition']>, ParentType, ContextType>;
  paymentMethods?: Resolver<ResolversTypes['PaymentMethodList'], ParentType, ContextType, Partial<QueryPaymentMethodsArgs>>;
  pendingSearchIndexUpdates?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  previewCollectionVariants?: Resolver<ResolversTypes['ProductVariantList'], ParentType, ContextType, RequireFields<QueryPreviewCollectionVariantsArgs, 'input'>>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, Partial<QueryProductArgs>>;
  productOptionGroup?: Resolver<Maybe<ResolversTypes['ProductOptionGroup']>, ParentType, ContextType, RequireFields<QueryProductOptionGroupArgs, 'id'>>;
  productOptionGroups?: Resolver<Array<ResolversTypes['ProductOptionGroup']>, ParentType, ContextType, Partial<QueryProductOptionGroupsArgs>>;
  productVariant?: Resolver<Maybe<ResolversTypes['ProductVariant']>, ParentType, ContextType, RequireFields<QueryProductVariantArgs, 'id'>>;
  productVariants?: Resolver<ResolversTypes['ProductVariantList'], ParentType, ContextType, Partial<QueryProductVariantsArgs>>;
  products?: Resolver<ResolversTypes['ProductList'], ParentType, ContextType, Partial<QueryProductsArgs>>;
  promotion?: Resolver<Maybe<ResolversTypes['Promotion']>, ParentType, ContextType, RequireFields<QueryPromotionArgs, 'id'>>;
  promotionActions?: Resolver<Array<ResolversTypes['ConfigurableOperationDefinition']>, ParentType, ContextType>;
  promotionConditions?: Resolver<Array<ResolversTypes['ConfigurableOperationDefinition']>, ParentType, ContextType>;
  promotions?: Resolver<ResolversTypes['PromotionList'], ParentType, ContextType, Partial<QueryPromotionsArgs>>;
  province?: Resolver<Maybe<ResolversTypes['Province']>, ParentType, ContextType, RequireFields<QueryProvinceArgs, 'id'>>;
  provinces?: Resolver<ResolversTypes['ProvinceList'], ParentType, ContextType, Partial<QueryProvincesArgs>>;
  pushSubscription?: Resolver<Maybe<ResolversTypes['SubscribedDevice']>, ParentType, ContextType, RequireFields<QueryPushSubscriptionArgs, 'id'>>;
  pushSubscriptions?: Resolver<Array<ResolversTypes['SubscribedDevice']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType, RequireFields<QueryRoleArgs, 'id'>>;
  roles?: Resolver<ResolversTypes['RoleList'], ParentType, ContextType, Partial<QueryRolesArgs>>;
  scheduledTasks?: Resolver<Array<ResolversTypes['ScheduledTask']>, ParentType, ContextType>;
  search?: Resolver<ResolversTypes['SearchResponse'], ParentType, ContextType, RequireFields<QuerySearchArgs, 'input'>>;
  seller?: Resolver<Maybe<ResolversTypes['Seller']>, ParentType, ContextType, RequireFields<QuerySellerArgs, 'id'>>;
  sellers?: Resolver<ResolversTypes['SellerList'], ParentType, ContextType, Partial<QuerySellersArgs>>;
  shippingCalculators?: Resolver<Array<ResolversTypes['ConfigurableOperationDefinition']>, ParentType, ContextType>;
  shippingEligibilityCheckers?: Resolver<Array<ResolversTypes['ConfigurableOperationDefinition']>, ParentType, ContextType>;
  shippingMethod?: Resolver<Maybe<ResolversTypes['ShippingMethod']>, ParentType, ContextType, RequireFields<QueryShippingMethodArgs, 'id'>>;
  shippingMethods?: Resolver<ResolversTypes['ShippingMethodList'], ParentType, ContextType, Partial<QueryShippingMethodsArgs>>;
  stockLocation?: Resolver<Maybe<ResolversTypes['StockLocation']>, ParentType, ContextType, RequireFields<QueryStockLocationArgs, 'id'>>;
  stockLocations?: Resolver<ResolversTypes['StockLocationList'], ParentType, ContextType, Partial<QueryStockLocationsArgs>>;
  tag?: Resolver<ResolversTypes['Tag'], ParentType, ContextType, RequireFields<QueryTagArgs, 'id'>>;
  tags?: Resolver<ResolversTypes['TagList'], ParentType, ContextType, Partial<QueryTagsArgs>>;
  taxCategories?: Resolver<ResolversTypes['TaxCategoryList'], ParentType, ContextType, Partial<QueryTaxCategoriesArgs>>;
  taxCategory?: Resolver<Maybe<ResolversTypes['TaxCategory']>, ParentType, ContextType, RequireFields<QueryTaxCategoryArgs, 'id'>>;
  taxRate?: Resolver<Maybe<ResolversTypes['TaxRate']>, ParentType, ContextType, RequireFields<QueryTaxRateArgs, 'id'>>;
  taxRates?: Resolver<ResolversTypes['TaxRateList'], ParentType, ContextType, Partial<QueryTaxRatesArgs>>;
  testEligibleShippingMethods?: Resolver<Array<ResolversTypes['ShippingMethodQuote']>, ParentType, ContextType, RequireFields<QueryTestEligibleShippingMethodsArgs, 'input'>>;
  testShippingMethod?: Resolver<ResolversTypes['TestShippingMethodResult'], ParentType, ContextType, RequireFields<QueryTestShippingMethodArgs, 'input'>>;
  zone?: Resolver<Maybe<ResolversTypes['Zone']>, ParentType, ContextType, RequireFields<QueryZoneArgs, 'id'>>;
  zones?: Resolver<ResolversTypes['ZoneList'], ParentType, ContextType, Partial<QueryZonesArgs>>;
}>;

export type RefundResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['Refund'] = ResolversParentTypes['Refund']> = ResolversObject<{
  adjustment?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  items?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  lines?: Resolver<Array<ResolversTypes['RefundLine']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  method?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paymentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shipping?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  transactionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RefundAmountErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['RefundAmountError'] = ResolversParentTypes['RefundAmountError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  maximumRefundable?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RefundLineResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['RefundLine'] = ResolversParentTypes['RefundLine']> = ResolversObject<{
  orderLine?: Resolver<ResolversTypes['OrderLine'], ParentType, ContextType>;
  orderLineId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  refund?: Resolver<ResolversTypes['Refund'], ParentType, ContextType>;
  refundId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
}>;

export type RefundOrderResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['RefundOrderResult'] = ResolversParentTypes['RefundOrderResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'AlreadyRefundedError' | 'MultipleOrderError' | 'NothingToRefundError' | 'OrderStateTransitionError' | 'PaymentOrderMismatchError' | 'QuantityTooGreatError' | 'Refund' | 'RefundAmountError' | 'RefundOrderStateError' | 'RefundStateTransitionError', ParentType, ContextType>;
}>;

export type RefundOrderStateErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['RefundOrderStateError'] = ResolversParentTypes['RefundOrderStateError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderState?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RefundPaymentIdMissingErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['RefundPaymentIdMissingError'] = ResolversParentTypes['RefundPaymentIdMissingError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RefundStateTransitionErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['RefundStateTransitionError'] = ResolversParentTypes['RefundStateTransitionError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  fromState?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toState?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transitionError?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RegionResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['Region'] = ResolversParentTypes['Region']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Country' | 'Province', ParentType, ContextType>;
}>;

export type RegionTranslationResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['RegionTranslation'] = ResolversParentTypes['RegionTranslation']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
}>;

export type RelationCustomFieldConfigResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['RelationCustomFieldConfig'] = ResolversParentTypes['RelationCustomFieldConfig']> = ResolversObject<{
  deprecated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deprecationReason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  internal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  list?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nullable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  readonly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  requiresPermission?: Resolver<Maybe<Array<ResolversTypes['Permission']>>, ParentType, ContextType>;
  scalarFields?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ui?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReleaseResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['Release'] = ResolversParentTypes['Release']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  productVariant?: Resolver<ResolversTypes['ProductVariant'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['StockMovementType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveFacetFromChannelResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['RemoveFacetFromChannelResult'] = ResolversParentTypes['RemoveFacetFromChannelResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Facet' | 'FacetInUseError', ParentType, ContextType>;
}>;

export type RemoveOptionGroupFromProductResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['RemoveOptionGroupFromProductResult'] = ResolversParentTypes['RemoveOptionGroupFromProductResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Product' | 'ProductOptionInUseError', ParentType, ContextType>;
}>;

export type RemoveOrderItemsResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['RemoveOrderItemsResult'] = ResolversParentTypes['RemoveOrderItemsResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Order' | 'OrderInterceptorError' | 'OrderModificationError', ParentType, ContextType>;
}>;

export type ReturnResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['Return'] = ResolversParentTypes['Return']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  productVariant?: Resolver<ResolversTypes['ProductVariant'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['StockMovementType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoleResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['Role'] = ResolversParentTypes['Role']> = ResolversObject<{
  channels?: Resolver<Array<ResolversTypes['Channel']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['Permission']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoleListResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['RoleList'] = ResolversParentTypes['RoleList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SaleResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['Sale'] = ResolversParentTypes['Sale']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  productVariant?: Resolver<ResolversTypes['ProductVariant'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['StockMovementType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ScheduledTaskResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['ScheduledTask'] = ResolversParentTypes['ScheduledTask']> = ResolversObject<{
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isRunning?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastExecutedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lastResult?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nextExecutionAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  schedule?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  scheduleDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type SearchReindexResponseResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['SearchReindexResponse'] = ResolversParentTypes['SearchReindexResponse']> = ResolversObject<{
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
}>;

export type SearchResponseResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['SearchResponse'] = ResolversParentTypes['SearchResponse']> = ResolversObject<{
  collections?: Resolver<Array<ResolversTypes['CollectionResult']>, ParentType, ContextType>;
  facetValues?: Resolver<Array<ResolversTypes['FacetValueResult']>, ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes['SearchResult']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
}>;

export type SearchResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['SearchResult'] = ResolversParentTypes['SearchResult']> = ResolversObject<{
  channelIds?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  collectionIds?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  currencyCode?: Resolver<ResolversTypes['CurrencyCode'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  facetIds?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  facetValueIds?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  inStock?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['SearchResultPrice'], ParentType, ContextType>;
  priceWithTax?: Resolver<ResolversTypes['SearchResultPrice'], ParentType, ContextType>;
  productAsset?: Resolver<Maybe<ResolversTypes['SearchResultAsset']>, ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  productName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productVariantAsset?: Resolver<Maybe<ResolversTypes['SearchResultAsset']>, ParentType, ContextType>;
  productVariantId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  productVariantName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  score?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type SearchResultAssetResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['SearchResultAsset'] = ResolversParentTypes['SearchResultAsset']> = ResolversObject<{
  focalPoint?: Resolver<Maybe<ResolversTypes['Coordinate']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  preview?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type SearchResultPriceResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['SearchResultPrice'] = ResolversParentTypes['SearchResultPrice']> = ResolversObject<{
  __resolveType: TypeResolveFn<'PriceRange' | 'SinglePrice', ParentType, ContextType>;
}>;

export type SellerResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['Seller'] = ResolversParentTypes['Seller']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SellerListResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['SellerList'] = ResolversParentTypes['SellerList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['Seller']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SendNotificationResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['SendNotificationResult'] = ResolversParentTypes['SendNotificationResult']> = ResolversObject<{
  failed?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sent?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
}>;

export type ServerConfigResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['ServerConfig'] = ResolversParentTypes['ServerConfig']> = ResolversObject<{
  customFieldConfig?: Resolver<ResolversTypes['CustomFields'], ParentType, ContextType>;
  entityCustomFields?: Resolver<Array<ResolversTypes['EntityCustomFields']>, ParentType, ContextType>;
  moneyStrategyPrecision?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  orderProcess?: Resolver<Array<ResolversTypes['OrderProcessState']>, ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionDefinition']>, ParentType, ContextType>;
  permittedAssetTypes?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type SetCustomerForDraftOrderResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['SetCustomerForDraftOrderResult'] = ResolversParentTypes['SetCustomerForDraftOrderResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'EmailAddressConflictError' | 'Order', ParentType, ContextType>;
}>;

export type SetOrderShippingMethodResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['SetOrderShippingMethodResult'] = ResolversParentTypes['SetOrderShippingMethodResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'IneligibleShippingMethodError' | 'NoActiveOrderError' | 'Order' | 'OrderModificationError', ParentType, ContextType>;
}>;

export type SetSettingsStoreValueResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['SetSettingsStoreValueResult'] = ResolversParentTypes['SetSettingsStoreValueResult']> = ResolversObject<{
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  result?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
}>;

export type SettlePaymentErrorResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['SettlePaymentError'] = ResolversParentTypes['SettlePaymentError']> = ResolversObject<{
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  paymentErrorMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SettlePaymentResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['SettlePaymentResult'] = ResolversParentTypes['SettlePaymentResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'OrderStateTransitionError' | 'Payment' | 'PaymentStateTransitionError' | 'SettlePaymentError', ParentType, ContextType>;
}>;

export type SettleRefundResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['SettleRefundResult'] = ResolversParentTypes['SettleRefundResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Refund' | 'RefundStateTransitionError', ParentType, ContextType>;
}>;

export type ShippingLineResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['ShippingLine'] = ResolversParentTypes['ShippingLine']> = ResolversObject<{
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  discountedPrice?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  discountedPriceWithTax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  discounts?: Resolver<Array<ResolversTypes['Discount']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  priceWithTax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  shippingMethod?: Resolver<ResolversTypes['ShippingMethod'], ParentType, ContextType>;
}>;

export type ShippingMethodResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['ShippingMethod'] = ResolversParentTypes['ShippingMethod']> = ResolversObject<{
  calculator?: Resolver<ResolversTypes['ConfigurableOperation'], ParentType, ContextType>;
  checker?: Resolver<ResolversTypes['ConfigurableOperation'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fulfillmentHandlerCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['ShippingMethodTranslation']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShippingMethodListResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['ShippingMethodList'] = ResolversParentTypes['ShippingMethodList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['ShippingMethod']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShippingMethodQuoteResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['ShippingMethodQuote'] = ResolversParentTypes['ShippingMethodQuote']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  priceWithTax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
}>;

export type ShippingMethodTranslationResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['ShippingMethodTranslation'] = ResolversParentTypes['ShippingMethodTranslation']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
}>;

export type SinglePriceResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['SinglePrice'] = ResolversParentTypes['SinglePrice']> = ResolversObject<{
  value?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StockAdjustmentResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['StockAdjustment'] = ResolversParentTypes['StockAdjustment']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  productVariant?: Resolver<ResolversTypes['ProductVariant'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['StockMovementType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StockLevelResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['StockLevel'] = ResolversParentTypes['StockLevel']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  stockAllocated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stockLocation?: Resolver<ResolversTypes['StockLocation'], ParentType, ContextType>;
  stockLocationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  stockOnHand?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StockLocationResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['StockLocation'] = ResolversParentTypes['StockLocation']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StockLocationListResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['StockLocationList'] = ResolversParentTypes['StockLocationList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['StockLocation']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StockMovementResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['StockMovement'] = ResolversParentTypes['StockMovement']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Allocation' | 'Cancellation' | 'Release' | 'Return' | 'Sale' | 'StockAdjustment', ParentType, ContextType>;
}>;

export type StockMovementItemResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['StockMovementItem'] = ResolversParentTypes['StockMovementItem']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Allocation' | 'Cancellation' | 'Release' | 'Return' | 'Sale' | 'StockAdjustment', ParentType, ContextType>;
}>;

export type StockMovementListResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['StockMovementList'] = ResolversParentTypes['StockMovementList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['StockMovementItem']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
}>;

export type StringCustomFieldConfigResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['StringCustomFieldConfig'] = ResolversParentTypes['StringCustomFieldConfig']> = ResolversObject<{
  deprecated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deprecationReason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  internal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  list?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nullable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<ResolversTypes['StringFieldOption']>>, ParentType, ContextType>;
  pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  readonly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  requiresPermission?: Resolver<Maybe<Array<ResolversTypes['Permission']>>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ui?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StringFieldOptionResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['StringFieldOption'] = ResolversParentTypes['StringFieldOption']> = ResolversObject<{
  label?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type StringStructFieldConfigResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['StringStructFieldConfig'] = ResolversParentTypes['StringStructFieldConfig']> = ResolversObject<{
  description?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  label?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  list?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  options?: Resolver<Maybe<Array<ResolversTypes['StringFieldOption']>>, ParentType, ContextType>;
  pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ui?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StructCustomFieldConfigResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['StructCustomFieldConfig'] = ResolversParentTypes['StructCustomFieldConfig']> = ResolversObject<{
  deprecated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deprecationReason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  fields?: Resolver<Array<ResolversTypes['StructFieldConfig']>, ParentType, ContextType>;
  internal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  list?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nullable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  readonly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  requiresPermission?: Resolver<Maybe<Array<ResolversTypes['Permission']>>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ui?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StructFieldResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['StructField'] = ResolversParentTypes['StructField']> = ResolversObject<{
  __resolveType: TypeResolveFn<'BooleanStructFieldConfig' | 'DateTimeStructFieldConfig' | 'FloatStructFieldConfig' | 'IntStructFieldConfig' | 'StringStructFieldConfig' | 'TextStructFieldConfig', ParentType, ContextType>;
}>;

export type StructFieldConfigResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['StructFieldConfig'] = ResolversParentTypes['StructFieldConfig']> = ResolversObject<{
  __resolveType: TypeResolveFn<'BooleanStructFieldConfig' | 'DateTimeStructFieldConfig' | 'FloatStructFieldConfig' | 'IntStructFieldConfig' | 'StringStructFieldConfig' | 'TextStructFieldConfig', ParentType, ContextType>;
}>;

export type SubscribedDeviceResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['SubscribedDevice'] = ResolversParentTypes['SubscribedDevice']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType>;
  deviceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fcmToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  userAgent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SuccessResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['Success'] = ResolversParentTypes['Success']> = ResolversObject<{
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
}>;

export type SurchargeResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['Surcharge'] = ResolversParentTypes['Surcharge']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  priceWithTax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  taxLines?: Resolver<Array<ResolversTypes['TaxLine']>, ParentType, ContextType>;
  taxRate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TagResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TagListResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['TagList'] = ResolversParentTypes['TagList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaxCategoryResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['TaxCategory'] = ResolversParentTypes['TaxCategory']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isDefault?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaxCategoryListResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['TaxCategoryList'] = ResolversParentTypes['TaxCategoryList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['TaxCategory']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaxLineResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['TaxLine'] = ResolversParentTypes['TaxLine']> = ResolversObject<{
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  taxRate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
}>;

export type TaxRateResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['TaxRate'] = ResolversParentTypes['TaxRate']> = ResolversObject<{
  category?: Resolver<ResolversTypes['TaxCategory'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  customerGroup?: Resolver<Maybe<ResolversTypes['CustomerGroup']>, ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  zone?: Resolver<ResolversTypes['Zone'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaxRateListResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['TaxRateList'] = ResolversParentTypes['TaxRateList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['TaxRate']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TestShippingMethodQuoteResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['TestShippingMethodQuote'] = ResolversParentTypes['TestShippingMethodQuote']> = ResolversObject<{
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  priceWithTax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
}>;

export type TestShippingMethodResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['TestShippingMethodResult'] = ResolversParentTypes['TestShippingMethodResult']> = ResolversObject<{
  eligible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  quote?: Resolver<Maybe<ResolversTypes['TestShippingMethodQuote']>, ParentType, ContextType>;
}>;

export type TextCustomFieldConfigResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['TextCustomFieldConfig'] = ResolversParentTypes['TextCustomFieldConfig']> = ResolversObject<{
  deprecated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deprecationReason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  internal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  list?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nullable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  readonly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  requiresPermission?: Resolver<Maybe<Array<ResolversTypes['Permission']>>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ui?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TextStructFieldConfigResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['TextStructFieldConfig'] = ResolversParentTypes['TextStructFieldConfig']> = ResolversObject<{
  description?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  label?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  list?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ui?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransitionFulfillmentToStateResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['TransitionFulfillmentToStateResult'] = ResolversParentTypes['TransitionFulfillmentToStateResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Fulfillment' | 'FulfillmentStateTransitionError', ParentType, ContextType>;
}>;

export type TransitionOrderToStateResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['TransitionOrderToStateResult'] = ResolversParentTypes['TransitionOrderToStateResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Order' | 'OrderStateTransitionError', ParentType, ContextType>;
}>;

export type TransitionPaymentToStateResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['TransitionPaymentToStateResult'] = ResolversParentTypes['TransitionPaymentToStateResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Payment' | 'PaymentStateTransitionError', ParentType, ContextType>;
}>;

export type UpdateChannelResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['UpdateChannelResult'] = ResolversParentTypes['UpdateChannelResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Channel' | 'LanguageNotAvailableError', ParentType, ContextType>;
}>;

export type UpdateCustomerResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['UpdateCustomerResult'] = ResolversParentTypes['UpdateCustomerResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Customer' | 'EmailAddressConflictError', ParentType, ContextType>;
}>;

export type UpdateGlobalSettingsResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['UpdateGlobalSettingsResult'] = ResolversParentTypes['UpdateGlobalSettingsResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ChannelDefaultLanguageError' | 'GlobalSettings', ParentType, ContextType>;
}>;

export type UpdateOrderItemErrorResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['UpdateOrderItemErrorResult'] = ResolversParentTypes['UpdateOrderItemErrorResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'InsufficientStockError' | 'NegativeQuantityError' | 'OrderInterceptorError' | 'OrderLimitError' | 'OrderModificationError', ParentType, ContextType>;
}>;

export type UpdateOrderItemsResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['UpdateOrderItemsResult'] = ResolversParentTypes['UpdateOrderItemsResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'InsufficientStockError' | 'NegativeQuantityError' | 'Order' | 'OrderInterceptorError' | 'OrderLimitError' | 'OrderModificationError', ParentType, ContextType>;
}>;

export type UpdatePromotionResultResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['UpdatePromotionResult'] = ResolversParentTypes['UpdatePromotionResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'MissingConditionsError' | 'Promotion', ParentType, ContextType>;
}>;

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  authenticationMethods?: Resolver<Array<ResolversTypes['AuthenticationMethod']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastLogin?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  roles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  verified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ZoneResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['Zone'] = ResolversParentTypes['Zone']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  members?: Resolver<Array<ResolversTypes['Region']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ZoneListResolvers<ContextType = RequestContext, ParentType extends ResolversParentTypes['ZoneList'] = ResolversParentTypes['ZoneList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['Zone']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = RequestContext> = ResolversObject<{
  AddFulfillmentToOrderResult?: AddFulfillmentToOrderResultResolvers<ContextType>;
  AddManualPaymentToOrderResult?: AddManualPaymentToOrderResultResolvers<ContextType>;
  Address?: AddressResolvers<ContextType>;
  Adjustment?: AdjustmentResolvers<ContextType>;
  Administrator?: AdministratorResolvers<ContextType>;
  AdministratorList?: AdministratorListResolvers<ContextType>;
  Allocation?: AllocationResolvers<ContextType>;
  AlreadyRefundedError?: AlreadyRefundedErrorResolvers<ContextType>;
  ApplyCouponCodeResult?: ApplyCouponCodeResultResolvers<ContextType>;
  Asset?: AssetResolvers<ContextType>;
  AssetList?: AssetListResolvers<ContextType>;
  AuthenticationMethod?: AuthenticationMethodResolvers<ContextType>;
  AuthenticationResult?: AuthenticationResultResolvers<ContextType>;
  BooleanCustomFieldConfig?: BooleanCustomFieldConfigResolvers<ContextType>;
  BooleanStructFieldConfig?: BooleanStructFieldConfigResolvers<ContextType>;
  CancelActiveOrderError?: CancelActiveOrderErrorResolvers<ContextType>;
  CancelOrderResult?: CancelOrderResultResolvers<ContextType>;
  CancelPaymentError?: CancelPaymentErrorResolvers<ContextType>;
  CancelPaymentResult?: CancelPaymentResultResolvers<ContextType>;
  Cancellation?: CancellationResolvers<ContextType>;
  Channel?: ChannelResolvers<ContextType>;
  ChannelDefaultLanguageError?: ChannelDefaultLanguageErrorResolvers<ContextType>;
  ChannelList?: ChannelListResolvers<ContextType>;
  Collection?: CollectionResolvers<ContextType>;
  CollectionBreadcrumb?: CollectionBreadcrumbResolvers<ContextType>;
  CollectionList?: CollectionListResolvers<ContextType>;
  CollectionResult?: CollectionResultResolvers<ContextType>;
  CollectionTranslation?: CollectionTranslationResolvers<ContextType>;
  ConfigArg?: ConfigArgResolvers<ContextType>;
  ConfigArgDefinition?: ConfigArgDefinitionResolvers<ContextType>;
  ConfigurableOperation?: ConfigurableOperationResolvers<ContextType>;
  ConfigurableOperationDefinition?: ConfigurableOperationDefinitionResolvers<ContextType>;
  Coordinate?: CoordinateResolvers<ContextType>;
  Country?: CountryResolvers<ContextType>;
  CountryList?: CountryListResolvers<ContextType>;
  CouponCodeExpiredError?: CouponCodeExpiredErrorResolvers<ContextType>;
  CouponCodeInvalidError?: CouponCodeInvalidErrorResolvers<ContextType>;
  CouponCodeLimitError?: CouponCodeLimitErrorResolvers<ContextType>;
  CreateAssetResult?: CreateAssetResultResolvers<ContextType>;
  CreateChannelResult?: CreateChannelResultResolvers<ContextType>;
  CreateCustomerResult?: CreateCustomerResultResolvers<ContextType>;
  CreateFulfillmentError?: CreateFulfillmentErrorResolvers<ContextType>;
  CreatePromotionResult?: CreatePromotionResultResolvers<ContextType>;
  CurrentUser?: CurrentUserResolvers<ContextType>;
  CurrentUserChannel?: CurrentUserChannelResolvers<ContextType>;
  CustomField?: CustomFieldResolvers<ContextType>;
  CustomFieldConfig?: CustomFieldConfigResolvers<ContextType>;
  CustomFields?: CustomFieldsResolvers<ContextType>;
  Customer?: CustomerResolvers<ContextType>;
  CustomerGroup?: CustomerGroupResolvers<ContextType>;
  CustomerGroupList?: CustomerGroupListResolvers<ContextType>;
  CustomerList?: CustomerListResolvers<ContextType>;
  CustomerWithTokens?: CustomerWithTokensResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DateTimeCustomFieldConfig?: DateTimeCustomFieldConfigResolvers<ContextType>;
  DateTimeStructFieldConfig?: DateTimeStructFieldConfigResolvers<ContextType>;
  DeletionResponse?: DeletionResponseResolvers<ContextType>;
  Discount?: DiscountResolvers<ContextType>;
  DuplicateEntityError?: DuplicateEntityErrorResolvers<ContextType>;
  DuplicateEntityResult?: DuplicateEntityResultResolvers<ContextType>;
  DuplicateEntitySuccess?: DuplicateEntitySuccessResolvers<ContextType>;
  EmailAddressConflictError?: EmailAddressConflictErrorResolvers<ContextType>;
  EmptyOrderLineSelectionError?: EmptyOrderLineSelectionErrorResolvers<ContextType>;
  EntityCustomFields?: EntityCustomFieldsResolvers<ContextType>;
  EntityDuplicatorDefinition?: EntityDuplicatorDefinitionResolvers<ContextType>;
  ErrorResult?: ErrorResultResolvers<ContextType>;
  Facet?: FacetResolvers<ContextType>;
  FacetInUseError?: FacetInUseErrorResolvers<ContextType>;
  FacetList?: FacetListResolvers<ContextType>;
  FacetTranslation?: FacetTranslationResolvers<ContextType>;
  FacetValue?: FacetValueResolvers<ContextType>;
  FacetValueList?: FacetValueListResolvers<ContextType>;
  FacetValueResult?: FacetValueResultResolvers<ContextType>;
  FacetValueTranslation?: FacetValueTranslationResolvers<ContextType>;
  FloatCustomFieldConfig?: FloatCustomFieldConfigResolvers<ContextType>;
  FloatStructFieldConfig?: FloatStructFieldConfigResolvers<ContextType>;
  Fulfillment?: FulfillmentResolvers<ContextType>;
  FulfillmentLine?: FulfillmentLineResolvers<ContextType>;
  FulfillmentStateTransitionError?: FulfillmentStateTransitionErrorResolvers<ContextType>;
  GlobalSettings?: GlobalSettingsResolvers<ContextType>;
  GuestCheckoutError?: GuestCheckoutErrorResolvers<ContextType>;
  HistoryEntry?: HistoryEntryResolvers<ContextType>;
  HistoryEntryList?: HistoryEntryListResolvers<ContextType>;
  ImportInfo?: ImportInfoResolvers<ContextType>;
  IneligibleShippingMethodError?: IneligibleShippingMethodErrorResolvers<ContextType>;
  InsufficientStockError?: InsufficientStockErrorResolvers<ContextType>;
  InsufficientStockOnHandError?: InsufficientStockOnHandErrorResolvers<ContextType>;
  IntCustomFieldConfig?: IntCustomFieldConfigResolvers<ContextType>;
  IntStructFieldConfig?: IntStructFieldConfigResolvers<ContextType>;
  InvalidCredentialsError?: InvalidCredentialsErrorResolvers<ContextType>;
  InvalidFulfillmentHandlerError?: InvalidFulfillmentHandlerErrorResolvers<ContextType>;
  ItemsAlreadyFulfilledError?: ItemsAlreadyFulfilledErrorResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Job?: JobResolvers<ContextType>;
  JobBufferSize?: JobBufferSizeResolvers<ContextType>;
  JobList?: JobListResolvers<ContextType>;
  JobQueue?: JobQueueResolvers<ContextType>;
  LanguageNotAvailableError?: LanguageNotAvailableErrorResolvers<ContextType>;
  LocaleStringCustomFieldConfig?: LocaleStringCustomFieldConfigResolvers<ContextType>;
  LocaleTextCustomFieldConfig?: LocaleTextCustomFieldConfigResolvers<ContextType>;
  LocalizedString?: LocalizedStringResolvers<ContextType>;
  ManualPaymentStateError?: ManualPaymentStateErrorResolvers<ContextType>;
  MetricSummary?: MetricSummaryResolvers<ContextType>;
  MetricSummaryEntry?: MetricSummaryEntryResolvers<ContextType>;
  MimeTypeError?: MimeTypeErrorResolvers<ContextType>;
  MissingConditionsError?: MissingConditionsErrorResolvers<ContextType>;
  ModifyOrderResult?: ModifyOrderResultResolvers<ContextType>;
  Money?: GraphQLScalarType;
  MultipleOrderError?: MultipleOrderErrorResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  NativeAuthStrategyError?: NativeAuthStrategyErrorResolvers<ContextType>;
  NativeAuthenticationResult?: NativeAuthenticationResultResolvers<ContextType>;
  NegativeQuantityError?: NegativeQuantityErrorResolvers<ContextType>;
  NoActiveOrderError?: NoActiveOrderErrorResolvers<ContextType>;
  NoChangesSpecifiedError?: NoChangesSpecifiedErrorResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  NothingToRefundError?: NothingToRefundErrorResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderAddress?: OrderAddressResolvers<ContextType>;
  OrderInterceptorError?: OrderInterceptorErrorResolvers<ContextType>;
  OrderLimitError?: OrderLimitErrorResolvers<ContextType>;
  OrderLine?: OrderLineResolvers<ContextType>;
  OrderList?: OrderListResolvers<ContextType>;
  OrderModification?: OrderModificationResolvers<ContextType>;
  OrderModificationError?: OrderModificationErrorResolvers<ContextType>;
  OrderModificationLine?: OrderModificationLineResolvers<ContextType>;
  OrderModificationStateError?: OrderModificationStateErrorResolvers<ContextType>;
  OrderProcessState?: OrderProcessStateResolvers<ContextType>;
  OrderStateTransitionError?: OrderStateTransitionErrorResolvers<ContextType>;
  OrderTaxSummary?: OrderTaxSummaryResolvers<ContextType>;
  PaginatedList?: PaginatedListResolvers<ContextType>;
  Payment?: PaymentResolvers<ContextType>;
  PaymentMethod?: PaymentMethodResolvers<ContextType>;
  PaymentMethodList?: PaymentMethodListResolvers<ContextType>;
  PaymentMethodMissingError?: PaymentMethodMissingErrorResolvers<ContextType>;
  PaymentMethodQuote?: PaymentMethodQuoteResolvers<ContextType>;
  PaymentMethodTranslation?: PaymentMethodTranslationResolvers<ContextType>;
  PaymentOrderMismatchError?: PaymentOrderMismatchErrorResolvers<ContextType>;
  PaymentStateTransitionError?: PaymentStateTransitionErrorResolvers<ContextType>;
  PermissionDefinition?: PermissionDefinitionResolvers<ContextType>;
  PriceRange?: PriceRangeResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductList?: ProductListResolvers<ContextType>;
  ProductOption?: ProductOptionResolvers<ContextType>;
  ProductOptionGroup?: ProductOptionGroupResolvers<ContextType>;
  ProductOptionGroupTranslation?: ProductOptionGroupTranslationResolvers<ContextType>;
  ProductOptionInUseError?: ProductOptionInUseErrorResolvers<ContextType>;
  ProductOptionTranslation?: ProductOptionTranslationResolvers<ContextType>;
  ProductTranslation?: ProductTranslationResolvers<ContextType>;
  ProductVariant?: ProductVariantResolvers<ContextType>;
  ProductVariantList?: ProductVariantListResolvers<ContextType>;
  ProductVariantPrice?: ProductVariantPriceResolvers<ContextType>;
  ProductVariantTranslation?: ProductVariantTranslationResolvers<ContextType>;
  Promotion?: PromotionResolvers<ContextType>;
  PromotionList?: PromotionListResolvers<ContextType>;
  PromotionTranslation?: PromotionTranslationResolvers<ContextType>;
  Province?: ProvinceResolvers<ContextType>;
  ProvinceList?: ProvinceListResolvers<ContextType>;
  PushNotificationResponse?: PushNotificationResponseResolvers<ContextType>;
  QuantityTooGreatError?: QuantityTooGreatErrorResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Refund?: RefundResolvers<ContextType>;
  RefundAmountError?: RefundAmountErrorResolvers<ContextType>;
  RefundLine?: RefundLineResolvers<ContextType>;
  RefundOrderResult?: RefundOrderResultResolvers<ContextType>;
  RefundOrderStateError?: RefundOrderStateErrorResolvers<ContextType>;
  RefundPaymentIdMissingError?: RefundPaymentIdMissingErrorResolvers<ContextType>;
  RefundStateTransitionError?: RefundStateTransitionErrorResolvers<ContextType>;
  Region?: RegionResolvers<ContextType>;
  RegionTranslation?: RegionTranslationResolvers<ContextType>;
  RelationCustomFieldConfig?: RelationCustomFieldConfigResolvers<ContextType>;
  Release?: ReleaseResolvers<ContextType>;
  RemoveFacetFromChannelResult?: RemoveFacetFromChannelResultResolvers<ContextType>;
  RemoveOptionGroupFromProductResult?: RemoveOptionGroupFromProductResultResolvers<ContextType>;
  RemoveOrderItemsResult?: RemoveOrderItemsResultResolvers<ContextType>;
  Return?: ReturnResolvers<ContextType>;
  Role?: RoleResolvers<ContextType>;
  RoleList?: RoleListResolvers<ContextType>;
  Sale?: SaleResolvers<ContextType>;
  ScheduledTask?: ScheduledTaskResolvers<ContextType>;
  SearchReindexResponse?: SearchReindexResponseResolvers<ContextType>;
  SearchResponse?: SearchResponseResolvers<ContextType>;
  SearchResult?: SearchResultResolvers<ContextType>;
  SearchResultAsset?: SearchResultAssetResolvers<ContextType>;
  SearchResultPrice?: SearchResultPriceResolvers<ContextType>;
  Seller?: SellerResolvers<ContextType>;
  SellerList?: SellerListResolvers<ContextType>;
  SendNotificationResult?: SendNotificationResultResolvers<ContextType>;
  ServerConfig?: ServerConfigResolvers<ContextType>;
  SetCustomerForDraftOrderResult?: SetCustomerForDraftOrderResultResolvers<ContextType>;
  SetOrderShippingMethodResult?: SetOrderShippingMethodResultResolvers<ContextType>;
  SetSettingsStoreValueResult?: SetSettingsStoreValueResultResolvers<ContextType>;
  SettlePaymentError?: SettlePaymentErrorResolvers<ContextType>;
  SettlePaymentResult?: SettlePaymentResultResolvers<ContextType>;
  SettleRefundResult?: SettleRefundResultResolvers<ContextType>;
  ShippingLine?: ShippingLineResolvers<ContextType>;
  ShippingMethod?: ShippingMethodResolvers<ContextType>;
  ShippingMethodList?: ShippingMethodListResolvers<ContextType>;
  ShippingMethodQuote?: ShippingMethodQuoteResolvers<ContextType>;
  ShippingMethodTranslation?: ShippingMethodTranslationResolvers<ContextType>;
  SinglePrice?: SinglePriceResolvers<ContextType>;
  StockAdjustment?: StockAdjustmentResolvers<ContextType>;
  StockLevel?: StockLevelResolvers<ContextType>;
  StockLocation?: StockLocationResolvers<ContextType>;
  StockLocationList?: StockLocationListResolvers<ContextType>;
  StockMovement?: StockMovementResolvers<ContextType>;
  StockMovementItem?: StockMovementItemResolvers<ContextType>;
  StockMovementList?: StockMovementListResolvers<ContextType>;
  StringCustomFieldConfig?: StringCustomFieldConfigResolvers<ContextType>;
  StringFieldOption?: StringFieldOptionResolvers<ContextType>;
  StringStructFieldConfig?: StringStructFieldConfigResolvers<ContextType>;
  StructCustomFieldConfig?: StructCustomFieldConfigResolvers<ContextType>;
  StructField?: StructFieldResolvers<ContextType>;
  StructFieldConfig?: StructFieldConfigResolvers<ContextType>;
  SubscribedDevice?: SubscribedDeviceResolvers<ContextType>;
  Success?: SuccessResolvers<ContextType>;
  Surcharge?: SurchargeResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  TagList?: TagListResolvers<ContextType>;
  TaxCategory?: TaxCategoryResolvers<ContextType>;
  TaxCategoryList?: TaxCategoryListResolvers<ContextType>;
  TaxLine?: TaxLineResolvers<ContextType>;
  TaxRate?: TaxRateResolvers<ContextType>;
  TaxRateList?: TaxRateListResolvers<ContextType>;
  TestShippingMethodQuote?: TestShippingMethodQuoteResolvers<ContextType>;
  TestShippingMethodResult?: TestShippingMethodResultResolvers<ContextType>;
  TextCustomFieldConfig?: TextCustomFieldConfigResolvers<ContextType>;
  TextStructFieldConfig?: TextStructFieldConfigResolvers<ContextType>;
  TransitionFulfillmentToStateResult?: TransitionFulfillmentToStateResultResolvers<ContextType>;
  TransitionOrderToStateResult?: TransitionOrderToStateResultResolvers<ContextType>;
  TransitionPaymentToStateResult?: TransitionPaymentToStateResultResolvers<ContextType>;
  UpdateChannelResult?: UpdateChannelResultResolvers<ContextType>;
  UpdateCustomerResult?: UpdateCustomerResultResolvers<ContextType>;
  UpdateGlobalSettingsResult?: UpdateGlobalSettingsResultResolvers<ContextType>;
  UpdateOrderItemErrorResult?: UpdateOrderItemErrorResultResolvers<ContextType>;
  UpdateOrderItemsResult?: UpdateOrderItemsResultResolvers<ContextType>;
  UpdatePromotionResult?: UpdatePromotionResultResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  Zone?: ZoneResolvers<ContextType>;
  ZoneList?: ZoneListResolvers<ContextType>;
}>;

