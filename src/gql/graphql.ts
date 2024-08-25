/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  jsonb: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** user_achievements */
export type Achievements = {
  __typename?: 'achievements';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description: Scalars['String']['output'];
  /** An object relationship */
  hero: Heroes;
  id: Scalars['uuid']['output'];
  img_path?: Maybe<Scalars['String']['output']>;
  is_favorite: Scalars['Boolean']['output'];
  owner_id: Scalars['uuid']['output'];
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "achievements" */
export type Achievements_Aggregate = {
  __typename?: 'achievements_aggregate';
  aggregate?: Maybe<Achievements_Aggregate_Fields>;
  nodes: Array<Achievements>;
};

export type Achievements_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Achievements_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Achievements_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Achievements_Aggregate_Bool_Exp_Count>;
};

export type Achievements_Aggregate_Bool_Exp_Bool_And = {
  arguments: Achievements_Select_Column_Achievements_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Achievements_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Achievements_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Achievements_Select_Column_Achievements_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Achievements_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Achievements_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Achievements_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Achievements_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "achievements" */
export type Achievements_Aggregate_Fields = {
  __typename?: 'achievements_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Achievements_Max_Fields>;
  min?: Maybe<Achievements_Min_Fields>;
};


/** aggregate fields of "achievements" */
export type Achievements_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Achievements_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "achievements" */
export type Achievements_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Achievements_Max_Order_By>;
  min?: InputMaybe<Achievements_Min_Order_By>;
};

/** input type for inserting array relation for remote table "achievements" */
export type Achievements_Arr_Rel_Insert_Input = {
  data: Array<Achievements_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Achievements_On_Conflict>;
};

/** Boolean expression to filter rows from the table "achievements". All fields are combined with a logical 'AND'. */
export type Achievements_Bool_Exp = {
  _and?: InputMaybe<Array<Achievements_Bool_Exp>>;
  _not?: InputMaybe<Achievements_Bool_Exp>;
  _or?: InputMaybe<Array<Achievements_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  hero?: InputMaybe<Heroes_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  img_path?: InputMaybe<String_Comparison_Exp>;
  is_favorite?: InputMaybe<Boolean_Comparison_Exp>;
  owner_id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "achievements" */
export enum Achievements_Constraint {
  /** unique or primary key constraint on columns "id" */
  AchievementsIdKey = 'achievements_id_key',
  /** unique or primary key constraint on columns "id" */
  AchievementsPkey = 'achievements_pkey'
}

/** input type for inserting data into table "achievements" */
export type Achievements_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  hero?: InputMaybe<Heroes_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  img_path?: InputMaybe<Scalars['String']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Achievements_Max_Fields = {
  __typename?: 'achievements_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  img_path?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "achievements" */
export type Achievements_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  img_path?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Achievements_Min_Fields = {
  __typename?: 'achievements_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  img_path?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "achievements" */
export type Achievements_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  img_path?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "achievements" */
export type Achievements_Mutation_Response = {
  __typename?: 'achievements_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Achievements>;
};

/** on_conflict condition type for table "achievements" */
export type Achievements_On_Conflict = {
  constraint: Achievements_Constraint;
  update_columns?: Array<Achievements_Update_Column>;
  where?: InputMaybe<Achievements_Bool_Exp>;
};

/** Ordering options when selecting data from "achievements". */
export type Achievements_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  hero?: InputMaybe<Heroes_Order_By>;
  id?: InputMaybe<Order_By>;
  img_path?: InputMaybe<Order_By>;
  is_favorite?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: achievements */
export type Achievements_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "achievements" */
export enum Achievements_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImgPath = 'img_path',
  /** column name */
  IsFavorite = 'is_favorite',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "achievements_aggregate_bool_exp_bool_and_arguments_columns" columns of table "achievements" */
export enum Achievements_Select_Column_Achievements_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsFavorite = 'is_favorite'
}

/** select "achievements_aggregate_bool_exp_bool_or_arguments_columns" columns of table "achievements" */
export enum Achievements_Select_Column_Achievements_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsFavorite = 'is_favorite'
}

/** input type for updating data in table "achievements" */
export type Achievements_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  img_path?: InputMaybe<Scalars['String']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "achievements" */
export type Achievements_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Achievements_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Achievements_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  img_path?: InputMaybe<Scalars['String']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "achievements" */
export enum Achievements_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImgPath = 'img_path',
  /** column name */
  IsFavorite = 'is_favorite',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Achievements_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Achievements_Set_Input>;
  /** filter the rows which have to be updated */
  where: Achievements_Bool_Exp;
};

/** bonus modules */
export type Addons = {
  __typename?: 'addons';
  addon: Scalars['String']['output'];
  /** An object relationship */
  addons_enum: Addons_Enum;
  /** An object relationship */
  hero: Heroes;
  owner_id: Scalars['uuid']['output'];
};

/** aggregated selection of "addons" */
export type Addons_Aggregate = {
  __typename?: 'addons_aggregate';
  aggregate?: Maybe<Addons_Aggregate_Fields>;
  nodes: Array<Addons>;
};

export type Addons_Aggregate_Bool_Exp = {
  count?: InputMaybe<Addons_Aggregate_Bool_Exp_Count>;
};

export type Addons_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Addons_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Addons_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "addons" */
export type Addons_Aggregate_Fields = {
  __typename?: 'addons_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Addons_Max_Fields>;
  min?: Maybe<Addons_Min_Fields>;
};


/** aggregate fields of "addons" */
export type Addons_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Addons_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "addons" */
export type Addons_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Addons_Max_Order_By>;
  min?: InputMaybe<Addons_Min_Order_By>;
};

/** input type for inserting array relation for remote table "addons" */
export type Addons_Arr_Rel_Insert_Input = {
  data: Array<Addons_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Addons_On_Conflict>;
};

/** Boolean expression to filter rows from the table "addons". All fields are combined with a logical 'AND'. */
export type Addons_Bool_Exp = {
  _and?: InputMaybe<Array<Addons_Bool_Exp>>;
  _not?: InputMaybe<Addons_Bool_Exp>;
  _or?: InputMaybe<Array<Addons_Bool_Exp>>;
  addon?: InputMaybe<String_Comparison_Exp>;
  addons_enum?: InputMaybe<Addons_Enum_Bool_Exp>;
  hero?: InputMaybe<Heroes_Bool_Exp>;
  owner_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "addons" */
export enum Addons_Constraint {
  /** unique or primary key constraint on columns "addon", "owner_id" */
  AddonsPkey = 'addons_pkey'
}

/** columns and relationships of "addons_enum" */
export type Addons_Enum = {
  __typename?: 'addons_enum';
  addon: Scalars['String']['output'];
  /** An array relationship */
  addons: Array<Addons>;
  /** An aggregate relationship */
  addons_aggregate: Addons_Aggregate;
  description: Scalars['String']['output'];
};


/** columns and relationships of "addons_enum" */
export type Addons_EnumAddonsArgs = {
  distinct_on?: InputMaybe<Array<Addons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Addons_Order_By>>;
  where?: InputMaybe<Addons_Bool_Exp>;
};


/** columns and relationships of "addons_enum" */
export type Addons_EnumAddons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Addons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Addons_Order_By>>;
  where?: InputMaybe<Addons_Bool_Exp>;
};

/** aggregated selection of "addons_enum" */
export type Addons_Enum_Aggregate = {
  __typename?: 'addons_enum_aggregate';
  aggregate?: Maybe<Addons_Enum_Aggregate_Fields>;
  nodes: Array<Addons_Enum>;
};

/** aggregate fields of "addons_enum" */
export type Addons_Enum_Aggregate_Fields = {
  __typename?: 'addons_enum_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Addons_Enum_Max_Fields>;
  min?: Maybe<Addons_Enum_Min_Fields>;
};


/** aggregate fields of "addons_enum" */
export type Addons_Enum_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Addons_Enum_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "addons_enum". All fields are combined with a logical 'AND'. */
export type Addons_Enum_Bool_Exp = {
  _and?: InputMaybe<Array<Addons_Enum_Bool_Exp>>;
  _not?: InputMaybe<Addons_Enum_Bool_Exp>;
  _or?: InputMaybe<Array<Addons_Enum_Bool_Exp>>;
  addon?: InputMaybe<String_Comparison_Exp>;
  addons?: InputMaybe<Addons_Bool_Exp>;
  addons_aggregate?: InputMaybe<Addons_Aggregate_Bool_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "addons_enum" */
export enum Addons_Enum_Constraint {
  /** unique or primary key constraint on columns "addon" */
  AddonsEnumPkey = 'addons_enum_pkey'
}

/** input type for inserting data into table "addons_enum" */
export type Addons_Enum_Insert_Input = {
  addon?: InputMaybe<Scalars['String']['input']>;
  addons?: InputMaybe<Addons_Arr_Rel_Insert_Input>;
  description?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Addons_Enum_Max_Fields = {
  __typename?: 'addons_enum_max_fields';
  addon?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Addons_Enum_Min_Fields = {
  __typename?: 'addons_enum_min_fields';
  addon?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "addons_enum" */
export type Addons_Enum_Mutation_Response = {
  __typename?: 'addons_enum_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Addons_Enum>;
};

/** input type for inserting object relation for remote table "addons_enum" */
export type Addons_Enum_Obj_Rel_Insert_Input = {
  data: Addons_Enum_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Addons_Enum_On_Conflict>;
};

/** on_conflict condition type for table "addons_enum" */
export type Addons_Enum_On_Conflict = {
  constraint: Addons_Enum_Constraint;
  update_columns?: Array<Addons_Enum_Update_Column>;
  where?: InputMaybe<Addons_Enum_Bool_Exp>;
};

/** Ordering options when selecting data from "addons_enum". */
export type Addons_Enum_Order_By = {
  addon?: InputMaybe<Order_By>;
  addons_aggregate?: InputMaybe<Addons_Aggregate_Order_By>;
  description?: InputMaybe<Order_By>;
};

/** primary key columns input for table: addons_enum */
export type Addons_Enum_Pk_Columns_Input = {
  addon: Scalars['String']['input'];
};

/** select columns of table "addons_enum" */
export enum Addons_Enum_Select_Column {
  /** column name */
  Addon = 'addon',
  /** column name */
  Description = 'description'
}

/** input type for updating data in table "addons_enum" */
export type Addons_Enum_Set_Input = {
  addon?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "addons_enum" */
export type Addons_Enum_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Addons_Enum_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Addons_Enum_Stream_Cursor_Value_Input = {
  addon?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "addons_enum" */
export enum Addons_Enum_Update_Column {
  /** column name */
  Addon = 'addon',
  /** column name */
  Description = 'description'
}

export type Addons_Enum_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Addons_Enum_Set_Input>;
  /** filter the rows which have to be updated */
  where: Addons_Enum_Bool_Exp;
};

/** input type for inserting data into table "addons" */
export type Addons_Insert_Input = {
  addon?: InputMaybe<Scalars['String']['input']>;
  addons_enum?: InputMaybe<Addons_Enum_Obj_Rel_Insert_Input>;
  hero?: InputMaybe<Heroes_Obj_Rel_Insert_Input>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Addons_Max_Fields = {
  __typename?: 'addons_max_fields';
  addon?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "addons" */
export type Addons_Max_Order_By = {
  addon?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Addons_Min_Fields = {
  __typename?: 'addons_min_fields';
  addon?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "addons" */
export type Addons_Min_Order_By = {
  addon?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "addons" */
export type Addons_Mutation_Response = {
  __typename?: 'addons_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Addons>;
};

/** on_conflict condition type for table "addons" */
export type Addons_On_Conflict = {
  constraint: Addons_Constraint;
  update_columns?: Array<Addons_Update_Column>;
  where?: InputMaybe<Addons_Bool_Exp>;
};

/** Ordering options when selecting data from "addons". */
export type Addons_Order_By = {
  addon?: InputMaybe<Order_By>;
  addons_enum?: InputMaybe<Addons_Enum_Order_By>;
  hero?: InputMaybe<Heroes_Order_By>;
  owner_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: addons */
export type Addons_Pk_Columns_Input = {
  addon: Scalars['String']['input'];
  owner_id: Scalars['uuid']['input'];
};

/** select columns of table "addons" */
export enum Addons_Select_Column {
  /** column name */
  Addon = 'addon',
  /** column name */
  OwnerId = 'owner_id'
}

/** input type for updating data in table "addons" */
export type Addons_Set_Input = {
  addon?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "addons" */
export type Addons_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Addons_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Addons_Stream_Cursor_Value_Input = {
  addon?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "addons" */
export enum Addons_Update_Column {
  /** column name */
  Addon = 'addon',
  /** column name */
  OwnerId = 'owner_id'
}

export type Addons_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Addons_Set_Input>;
  /** filter the rows which have to be updated */
  where: Addons_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** goal difficulty */
export type Goal_Difficulty_Enum = {
  __typename?: 'goal_difficulty_enum';
  description: Scalars['String']['output'];
  difficulty: Scalars['String']['output'];
  /** An array relationship */
  goals: Array<Goals>;
  /** An aggregate relationship */
  goals_aggregate: Goals_Aggregate;
};


/** goal difficulty */
export type Goal_Difficulty_EnumGoalsArgs = {
  distinct_on?: InputMaybe<Array<Goals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Order_By>>;
  where?: InputMaybe<Goals_Bool_Exp>;
};


/** goal difficulty */
export type Goal_Difficulty_EnumGoals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Order_By>>;
  where?: InputMaybe<Goals_Bool_Exp>;
};

/** aggregated selection of "goal_difficulty_enum" */
export type Goal_Difficulty_Enum_Aggregate = {
  __typename?: 'goal_difficulty_enum_aggregate';
  aggregate?: Maybe<Goal_Difficulty_Enum_Aggregate_Fields>;
  nodes: Array<Goal_Difficulty_Enum>;
};

/** aggregate fields of "goal_difficulty_enum" */
export type Goal_Difficulty_Enum_Aggregate_Fields = {
  __typename?: 'goal_difficulty_enum_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Goal_Difficulty_Enum_Max_Fields>;
  min?: Maybe<Goal_Difficulty_Enum_Min_Fields>;
};


/** aggregate fields of "goal_difficulty_enum" */
export type Goal_Difficulty_Enum_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Goal_Difficulty_Enum_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "goal_difficulty_enum". All fields are combined with a logical 'AND'. */
export type Goal_Difficulty_Enum_Bool_Exp = {
  _and?: InputMaybe<Array<Goal_Difficulty_Enum_Bool_Exp>>;
  _not?: InputMaybe<Goal_Difficulty_Enum_Bool_Exp>;
  _or?: InputMaybe<Array<Goal_Difficulty_Enum_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  difficulty?: InputMaybe<String_Comparison_Exp>;
  goals?: InputMaybe<Goals_Bool_Exp>;
  goals_aggregate?: InputMaybe<Goals_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "goal_difficulty_enum" */
export enum Goal_Difficulty_Enum_Constraint {
  /** unique or primary key constraint on columns "difficulty" */
  GoalDifficultyEnumPkey = 'goal_difficulty_enum_pkey'
}

/** input type for inserting data into table "goal_difficulty_enum" */
export type Goal_Difficulty_Enum_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  difficulty?: InputMaybe<Scalars['String']['input']>;
  goals?: InputMaybe<Goals_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Goal_Difficulty_Enum_Max_Fields = {
  __typename?: 'goal_difficulty_enum_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  difficulty?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Goal_Difficulty_Enum_Min_Fields = {
  __typename?: 'goal_difficulty_enum_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  difficulty?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "goal_difficulty_enum" */
export type Goal_Difficulty_Enum_Mutation_Response = {
  __typename?: 'goal_difficulty_enum_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Goal_Difficulty_Enum>;
};

/** input type for inserting object relation for remote table "goal_difficulty_enum" */
export type Goal_Difficulty_Enum_Obj_Rel_Insert_Input = {
  data: Goal_Difficulty_Enum_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Goal_Difficulty_Enum_On_Conflict>;
};

/** on_conflict condition type for table "goal_difficulty_enum" */
export type Goal_Difficulty_Enum_On_Conflict = {
  constraint: Goal_Difficulty_Enum_Constraint;
  update_columns?: Array<Goal_Difficulty_Enum_Update_Column>;
  where?: InputMaybe<Goal_Difficulty_Enum_Bool_Exp>;
};

/** Ordering options when selecting data from "goal_difficulty_enum". */
export type Goal_Difficulty_Enum_Order_By = {
  description?: InputMaybe<Order_By>;
  difficulty?: InputMaybe<Order_By>;
  goals_aggregate?: InputMaybe<Goals_Aggregate_Order_By>;
};

/** primary key columns input for table: goal_difficulty_enum */
export type Goal_Difficulty_Enum_Pk_Columns_Input = {
  difficulty: Scalars['String']['input'];
};

/** select columns of table "goal_difficulty_enum" */
export enum Goal_Difficulty_Enum_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Difficulty = 'difficulty'
}

/** input type for updating data in table "goal_difficulty_enum" */
export type Goal_Difficulty_Enum_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  difficulty?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "goal_difficulty_enum" */
export type Goal_Difficulty_Enum_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Goal_Difficulty_Enum_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Goal_Difficulty_Enum_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  difficulty?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "goal_difficulty_enum" */
export enum Goal_Difficulty_Enum_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Difficulty = 'difficulty'
}

export type Goal_Difficulty_Enum_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Goal_Difficulty_Enum_Set_Input>;
  /** filter the rows which have to be updated */
  where: Goal_Difficulty_Enum_Bool_Exp;
};

/** goal status */
export type Goal_Status_Enum = {
  __typename?: 'goal_status_enum';
  description: Scalars['String']['output'];
  /** An array relationship */
  goals: Array<Goals>;
  /** An aggregate relationship */
  goals_aggregate: Goals_Aggregate;
  status: Scalars['String']['output'];
};


/** goal status */
export type Goal_Status_EnumGoalsArgs = {
  distinct_on?: InputMaybe<Array<Goals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Order_By>>;
  where?: InputMaybe<Goals_Bool_Exp>;
};


/** goal status */
export type Goal_Status_EnumGoals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Order_By>>;
  where?: InputMaybe<Goals_Bool_Exp>;
};

/** aggregated selection of "goal_status_enum" */
export type Goal_Status_Enum_Aggregate = {
  __typename?: 'goal_status_enum_aggregate';
  aggregate?: Maybe<Goal_Status_Enum_Aggregate_Fields>;
  nodes: Array<Goal_Status_Enum>;
};

/** aggregate fields of "goal_status_enum" */
export type Goal_Status_Enum_Aggregate_Fields = {
  __typename?: 'goal_status_enum_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Goal_Status_Enum_Max_Fields>;
  min?: Maybe<Goal_Status_Enum_Min_Fields>;
};


/** aggregate fields of "goal_status_enum" */
export type Goal_Status_Enum_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Goal_Status_Enum_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "goal_status_enum". All fields are combined with a logical 'AND'. */
export type Goal_Status_Enum_Bool_Exp = {
  _and?: InputMaybe<Array<Goal_Status_Enum_Bool_Exp>>;
  _not?: InputMaybe<Goal_Status_Enum_Bool_Exp>;
  _or?: InputMaybe<Array<Goal_Status_Enum_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  goals?: InputMaybe<Goals_Bool_Exp>;
  goals_aggregate?: InputMaybe<Goals_Aggregate_Bool_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "goal_status_enum" */
export enum Goal_Status_Enum_Constraint {
  /** unique or primary key constraint on columns "status" */
  GoalStatusEnumPkey = 'goal_status_enum_pkey'
}

/** input type for inserting data into table "goal_status_enum" */
export type Goal_Status_Enum_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  goals?: InputMaybe<Goals_Arr_Rel_Insert_Input>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Goal_Status_Enum_Max_Fields = {
  __typename?: 'goal_status_enum_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Goal_Status_Enum_Min_Fields = {
  __typename?: 'goal_status_enum_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "goal_status_enum" */
export type Goal_Status_Enum_Mutation_Response = {
  __typename?: 'goal_status_enum_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Goal_Status_Enum>;
};

/** input type for inserting object relation for remote table "goal_status_enum" */
export type Goal_Status_Enum_Obj_Rel_Insert_Input = {
  data: Goal_Status_Enum_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Goal_Status_Enum_On_Conflict>;
};

/** on_conflict condition type for table "goal_status_enum" */
export type Goal_Status_Enum_On_Conflict = {
  constraint: Goal_Status_Enum_Constraint;
  update_columns?: Array<Goal_Status_Enum_Update_Column>;
  where?: InputMaybe<Goal_Status_Enum_Bool_Exp>;
};

/** Ordering options when selecting data from "goal_status_enum". */
export type Goal_Status_Enum_Order_By = {
  description?: InputMaybe<Order_By>;
  goals_aggregate?: InputMaybe<Goals_Aggregate_Order_By>;
  status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: goal_status_enum */
export type Goal_Status_Enum_Pk_Columns_Input = {
  status: Scalars['String']['input'];
};

/** select columns of table "goal_status_enum" */
export enum Goal_Status_Enum_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "goal_status_enum" */
export type Goal_Status_Enum_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "goal_status_enum" */
export type Goal_Status_Enum_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Goal_Status_Enum_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Goal_Status_Enum_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "goal_status_enum" */
export enum Goal_Status_Enum_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Status = 'status'
}

export type Goal_Status_Enum_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Goal_Status_Enum_Set_Input>;
  /** filter the rows which have to be updated */
  where: Goal_Status_Enum_Bool_Exp;
};

/** list of goals, finished_at - the finish estimation */
export type Goals = {
  __typename?: 'goals';
  created_at: Scalars['timestamptz']['output'];
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description: Scalars['String']['output'];
  difficulty: Scalars['String']['output'];
  finished_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  goal_difficulty_enum: Goal_Difficulty_Enum;
  /** An object relationship */
  goal_ritual?: Maybe<Goals_Rituals>;
  /** An object relationship */
  goal_status_enum: Goal_Status_Enum;
  /** An object relationship */
  hero: Heroes;
  id: Scalars['uuid']['output'];
  is_favorite: Scalars['Boolean']['output'];
  owner_id: Scalars['uuid']['output'];
  parent_goal_id?: Maybe<Scalars['uuid']['output']>;
  privacy?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  privacy_enum?: Maybe<Privacy_Enum>;
  slogan: Scalars['String']['output'];
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "goals" */
export type Goals_Aggregate = {
  __typename?: 'goals_aggregate';
  aggregate?: Maybe<Goals_Aggregate_Fields>;
  nodes: Array<Goals>;
};

export type Goals_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Goals_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Goals_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Goals_Aggregate_Bool_Exp_Count>;
};

export type Goals_Aggregate_Bool_Exp_Bool_And = {
  arguments: Goals_Select_Column_Goals_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Goals_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Goals_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Goals_Select_Column_Goals_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Goals_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Goals_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Goals_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Goals_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "goals" */
export type Goals_Aggregate_Fields = {
  __typename?: 'goals_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Goals_Max_Fields>;
  min?: Maybe<Goals_Min_Fields>;
};


/** aggregate fields of "goals" */
export type Goals_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Goals_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "goals" */
export type Goals_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Goals_Max_Order_By>;
  min?: InputMaybe<Goals_Min_Order_By>;
};

/** input type for inserting array relation for remote table "goals" */
export type Goals_Arr_Rel_Insert_Input = {
  data: Array<Goals_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Goals_On_Conflict>;
};

/** Boolean expression to filter rows from the table "goals". All fields are combined with a logical 'AND'. */
export type Goals_Bool_Exp = {
  _and?: InputMaybe<Array<Goals_Bool_Exp>>;
  _not?: InputMaybe<Goals_Bool_Exp>;
  _or?: InputMaybe<Array<Goals_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  difficulty?: InputMaybe<String_Comparison_Exp>;
  finished_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  goal_difficulty_enum?: InputMaybe<Goal_Difficulty_Enum_Bool_Exp>;
  goal_ritual?: InputMaybe<Goals_Rituals_Bool_Exp>;
  goal_status_enum?: InputMaybe<Goal_Status_Enum_Bool_Exp>;
  hero?: InputMaybe<Heroes_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_favorite?: InputMaybe<Boolean_Comparison_Exp>;
  owner_id?: InputMaybe<Uuid_Comparison_Exp>;
  parent_goal_id?: InputMaybe<Uuid_Comparison_Exp>;
  privacy?: InputMaybe<String_Comparison_Exp>;
  privacy_enum?: InputMaybe<Privacy_Enum_Bool_Exp>;
  slogan?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "goals" */
export enum Goals_Constraint {
  /** unique or primary key constraint on columns "id" */
  GoalsPkey = 'goals_pkey'
}

/** input type for inserting data into table "goals" */
export type Goals_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  difficulty?: InputMaybe<Scalars['String']['input']>;
  finished_at?: InputMaybe<Scalars['timestamptz']['input']>;
  goal_difficulty_enum?: InputMaybe<Goal_Difficulty_Enum_Obj_Rel_Insert_Input>;
  goal_ritual?: InputMaybe<Goals_Rituals_Obj_Rel_Insert_Input>;
  goal_status_enum?: InputMaybe<Goal_Status_Enum_Obj_Rel_Insert_Input>;
  hero?: InputMaybe<Heroes_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  parent_goal_id?: InputMaybe<Scalars['uuid']['input']>;
  privacy?: InputMaybe<Scalars['String']['input']>;
  privacy_enum?: InputMaybe<Privacy_Enum_Obj_Rel_Insert_Input>;
  slogan?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Goals_Max_Fields = {
  __typename?: 'goals_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  difficulty?: Maybe<Scalars['String']['output']>;
  finished_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
  parent_goal_id?: Maybe<Scalars['uuid']['output']>;
  privacy?: Maybe<Scalars['String']['output']>;
  slogan?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "goals" */
export type Goals_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  difficulty?: InputMaybe<Order_By>;
  finished_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  parent_goal_id?: InputMaybe<Order_By>;
  privacy?: InputMaybe<Order_By>;
  slogan?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Goals_Min_Fields = {
  __typename?: 'goals_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  difficulty?: Maybe<Scalars['String']['output']>;
  finished_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
  parent_goal_id?: Maybe<Scalars['uuid']['output']>;
  privacy?: Maybe<Scalars['String']['output']>;
  slogan?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "goals" */
export type Goals_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  difficulty?: InputMaybe<Order_By>;
  finished_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  parent_goal_id?: InputMaybe<Order_By>;
  privacy?: InputMaybe<Order_By>;
  slogan?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "goals" */
export type Goals_Mutation_Response = {
  __typename?: 'goals_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Goals>;
};

/** input type for inserting object relation for remote table "goals" */
export type Goals_Obj_Rel_Insert_Input = {
  data: Goals_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Goals_On_Conflict>;
};

/** on_conflict condition type for table "goals" */
export type Goals_On_Conflict = {
  constraint: Goals_Constraint;
  update_columns?: Array<Goals_Update_Column>;
  where?: InputMaybe<Goals_Bool_Exp>;
};

/** Ordering options when selecting data from "goals". */
export type Goals_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  difficulty?: InputMaybe<Order_By>;
  finished_at?: InputMaybe<Order_By>;
  goal_difficulty_enum?: InputMaybe<Goal_Difficulty_Enum_Order_By>;
  goal_ritual?: InputMaybe<Goals_Rituals_Order_By>;
  goal_status_enum?: InputMaybe<Goal_Status_Enum_Order_By>;
  hero?: InputMaybe<Heroes_Order_By>;
  id?: InputMaybe<Order_By>;
  is_favorite?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  parent_goal_id?: InputMaybe<Order_By>;
  privacy?: InputMaybe<Order_By>;
  privacy_enum?: InputMaybe<Privacy_Enum_Order_By>;
  slogan?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: goals */
export type Goals_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "goals_rituals" */
export type Goals_Rituals = {
  __typename?: 'goals_rituals';
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  goal: Goals;
  goal_id: Scalars['uuid']['output'];
  ritual_id: Scalars['uuid']['output'];
  ritual_interval: Scalars['Int']['output'];
  ritual_power: Scalars['Int']['output'];
  ritual_type: Scalars['String']['output'];
  /** An object relationship */
  ritual_type_enum: Ritual_Type_Enum;
};

/** aggregated selection of "goals_rituals" */
export type Goals_Rituals_Aggregate = {
  __typename?: 'goals_rituals_aggregate';
  aggregate?: Maybe<Goals_Rituals_Aggregate_Fields>;
  nodes: Array<Goals_Rituals>;
};

export type Goals_Rituals_Aggregate_Bool_Exp = {
  count?: InputMaybe<Goals_Rituals_Aggregate_Bool_Exp_Count>;
};

export type Goals_Rituals_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Goals_Rituals_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Goals_Rituals_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "goals_rituals" */
export type Goals_Rituals_Aggregate_Fields = {
  __typename?: 'goals_rituals_aggregate_fields';
  avg?: Maybe<Goals_Rituals_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Goals_Rituals_Max_Fields>;
  min?: Maybe<Goals_Rituals_Min_Fields>;
  stddev?: Maybe<Goals_Rituals_Stddev_Fields>;
  stddev_pop?: Maybe<Goals_Rituals_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Goals_Rituals_Stddev_Samp_Fields>;
  sum?: Maybe<Goals_Rituals_Sum_Fields>;
  var_pop?: Maybe<Goals_Rituals_Var_Pop_Fields>;
  var_samp?: Maybe<Goals_Rituals_Var_Samp_Fields>;
  variance?: Maybe<Goals_Rituals_Variance_Fields>;
};


/** aggregate fields of "goals_rituals" */
export type Goals_Rituals_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Goals_Rituals_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "goals_rituals" */
export type Goals_Rituals_Aggregate_Order_By = {
  avg?: InputMaybe<Goals_Rituals_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Goals_Rituals_Max_Order_By>;
  min?: InputMaybe<Goals_Rituals_Min_Order_By>;
  stddev?: InputMaybe<Goals_Rituals_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Goals_Rituals_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Goals_Rituals_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Goals_Rituals_Sum_Order_By>;
  var_pop?: InputMaybe<Goals_Rituals_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Goals_Rituals_Var_Samp_Order_By>;
  variance?: InputMaybe<Goals_Rituals_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "goals_rituals" */
export type Goals_Rituals_Arr_Rel_Insert_Input = {
  data: Array<Goals_Rituals_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Goals_Rituals_On_Conflict>;
};

/** aggregate avg on columns */
export type Goals_Rituals_Avg_Fields = {
  __typename?: 'goals_rituals_avg_fields';
  ritual_interval?: Maybe<Scalars['Float']['output']>;
  ritual_power?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "goals_rituals" */
export type Goals_Rituals_Avg_Order_By = {
  ritual_interval?: InputMaybe<Order_By>;
  ritual_power?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "goals_rituals". All fields are combined with a logical 'AND'. */
export type Goals_Rituals_Bool_Exp = {
  _and?: InputMaybe<Array<Goals_Rituals_Bool_Exp>>;
  _not?: InputMaybe<Goals_Rituals_Bool_Exp>;
  _or?: InputMaybe<Array<Goals_Rituals_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  goal?: InputMaybe<Goals_Bool_Exp>;
  goal_id?: InputMaybe<Uuid_Comparison_Exp>;
  ritual_id?: InputMaybe<Uuid_Comparison_Exp>;
  ritual_interval?: InputMaybe<Int_Comparison_Exp>;
  ritual_power?: InputMaybe<Int_Comparison_Exp>;
  ritual_type?: InputMaybe<String_Comparison_Exp>;
  ritual_type_enum?: InputMaybe<Ritual_Type_Enum_Bool_Exp>;
};

/** unique or primary key constraints on table "goals_rituals" */
export enum Goals_Rituals_Constraint {
  /** unique or primary key constraint on columns "ritual_id", "goal_id" */
  GoalsRitualsPkey = 'goals_rituals_pkey'
}

/** input type for incrementing numeric columns in table "goals_rituals" */
export type Goals_Rituals_Inc_Input = {
  ritual_interval?: InputMaybe<Scalars['Int']['input']>;
  ritual_power?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "goals_rituals" */
export type Goals_Rituals_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  goal?: InputMaybe<Goals_Obj_Rel_Insert_Input>;
  goal_id?: InputMaybe<Scalars['uuid']['input']>;
  ritual_id?: InputMaybe<Scalars['uuid']['input']>;
  ritual_interval?: InputMaybe<Scalars['Int']['input']>;
  ritual_power?: InputMaybe<Scalars['Int']['input']>;
  ritual_type?: InputMaybe<Scalars['String']['input']>;
  ritual_type_enum?: InputMaybe<Ritual_Type_Enum_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Goals_Rituals_Max_Fields = {
  __typename?: 'goals_rituals_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  goal_id?: Maybe<Scalars['uuid']['output']>;
  ritual_id?: Maybe<Scalars['uuid']['output']>;
  ritual_interval?: Maybe<Scalars['Int']['output']>;
  ritual_power?: Maybe<Scalars['Int']['output']>;
  ritual_type?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "goals_rituals" */
export type Goals_Rituals_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  goal_id?: InputMaybe<Order_By>;
  ritual_id?: InputMaybe<Order_By>;
  ritual_interval?: InputMaybe<Order_By>;
  ritual_power?: InputMaybe<Order_By>;
  ritual_type?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Goals_Rituals_Min_Fields = {
  __typename?: 'goals_rituals_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  goal_id?: Maybe<Scalars['uuid']['output']>;
  ritual_id?: Maybe<Scalars['uuid']['output']>;
  ritual_interval?: Maybe<Scalars['Int']['output']>;
  ritual_power?: Maybe<Scalars['Int']['output']>;
  ritual_type?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "goals_rituals" */
export type Goals_Rituals_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  goal_id?: InputMaybe<Order_By>;
  ritual_id?: InputMaybe<Order_By>;
  ritual_interval?: InputMaybe<Order_By>;
  ritual_power?: InputMaybe<Order_By>;
  ritual_type?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "goals_rituals" */
export type Goals_Rituals_Mutation_Response = {
  __typename?: 'goals_rituals_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Goals_Rituals>;
};

/** input type for inserting object relation for remote table "goals_rituals" */
export type Goals_Rituals_Obj_Rel_Insert_Input = {
  data: Goals_Rituals_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Goals_Rituals_On_Conflict>;
};

/** on_conflict condition type for table "goals_rituals" */
export type Goals_Rituals_On_Conflict = {
  constraint: Goals_Rituals_Constraint;
  update_columns?: Array<Goals_Rituals_Update_Column>;
  where?: InputMaybe<Goals_Rituals_Bool_Exp>;
};

/** Ordering options when selecting data from "goals_rituals". */
export type Goals_Rituals_Order_By = {
  created_at?: InputMaybe<Order_By>;
  goal?: InputMaybe<Goals_Order_By>;
  goal_id?: InputMaybe<Order_By>;
  ritual_id?: InputMaybe<Order_By>;
  ritual_interval?: InputMaybe<Order_By>;
  ritual_power?: InputMaybe<Order_By>;
  ritual_type?: InputMaybe<Order_By>;
  ritual_type_enum?: InputMaybe<Ritual_Type_Enum_Order_By>;
};

/** primary key columns input for table: goals_rituals */
export type Goals_Rituals_Pk_Columns_Input = {
  goal_id: Scalars['uuid']['input'];
  ritual_id: Scalars['uuid']['input'];
};

/** select columns of table "goals_rituals" */
export enum Goals_Rituals_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GoalId = 'goal_id',
  /** column name */
  RitualId = 'ritual_id',
  /** column name */
  RitualInterval = 'ritual_interval',
  /** column name */
  RitualPower = 'ritual_power',
  /** column name */
  RitualType = 'ritual_type'
}

/** input type for updating data in table "goals_rituals" */
export type Goals_Rituals_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  goal_id?: InputMaybe<Scalars['uuid']['input']>;
  ritual_id?: InputMaybe<Scalars['uuid']['input']>;
  ritual_interval?: InputMaybe<Scalars['Int']['input']>;
  ritual_power?: InputMaybe<Scalars['Int']['input']>;
  ritual_type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Goals_Rituals_Stddev_Fields = {
  __typename?: 'goals_rituals_stddev_fields';
  ritual_interval?: Maybe<Scalars['Float']['output']>;
  ritual_power?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "goals_rituals" */
export type Goals_Rituals_Stddev_Order_By = {
  ritual_interval?: InputMaybe<Order_By>;
  ritual_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Goals_Rituals_Stddev_Pop_Fields = {
  __typename?: 'goals_rituals_stddev_pop_fields';
  ritual_interval?: Maybe<Scalars['Float']['output']>;
  ritual_power?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "goals_rituals" */
export type Goals_Rituals_Stddev_Pop_Order_By = {
  ritual_interval?: InputMaybe<Order_By>;
  ritual_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Goals_Rituals_Stddev_Samp_Fields = {
  __typename?: 'goals_rituals_stddev_samp_fields';
  ritual_interval?: Maybe<Scalars['Float']['output']>;
  ritual_power?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "goals_rituals" */
export type Goals_Rituals_Stddev_Samp_Order_By = {
  ritual_interval?: InputMaybe<Order_By>;
  ritual_power?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "goals_rituals" */
export type Goals_Rituals_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Goals_Rituals_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Goals_Rituals_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  goal_id?: InputMaybe<Scalars['uuid']['input']>;
  ritual_id?: InputMaybe<Scalars['uuid']['input']>;
  ritual_interval?: InputMaybe<Scalars['Int']['input']>;
  ritual_power?: InputMaybe<Scalars['Int']['input']>;
  ritual_type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Goals_Rituals_Sum_Fields = {
  __typename?: 'goals_rituals_sum_fields';
  ritual_interval?: Maybe<Scalars['Int']['output']>;
  ritual_power?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "goals_rituals" */
export type Goals_Rituals_Sum_Order_By = {
  ritual_interval?: InputMaybe<Order_By>;
  ritual_power?: InputMaybe<Order_By>;
};

/** update columns of table "goals_rituals" */
export enum Goals_Rituals_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GoalId = 'goal_id',
  /** column name */
  RitualId = 'ritual_id',
  /** column name */
  RitualInterval = 'ritual_interval',
  /** column name */
  RitualPower = 'ritual_power',
  /** column name */
  RitualType = 'ritual_type'
}

export type Goals_Rituals_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Goals_Rituals_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Goals_Rituals_Set_Input>;
  /** filter the rows which have to be updated */
  where: Goals_Rituals_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Goals_Rituals_Var_Pop_Fields = {
  __typename?: 'goals_rituals_var_pop_fields';
  ritual_interval?: Maybe<Scalars['Float']['output']>;
  ritual_power?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "goals_rituals" */
export type Goals_Rituals_Var_Pop_Order_By = {
  ritual_interval?: InputMaybe<Order_By>;
  ritual_power?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Goals_Rituals_Var_Samp_Fields = {
  __typename?: 'goals_rituals_var_samp_fields';
  ritual_interval?: Maybe<Scalars['Float']['output']>;
  ritual_power?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "goals_rituals" */
export type Goals_Rituals_Var_Samp_Order_By = {
  ritual_interval?: InputMaybe<Order_By>;
  ritual_power?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Goals_Rituals_Variance_Fields = {
  __typename?: 'goals_rituals_variance_fields';
  ritual_interval?: Maybe<Scalars['Float']['output']>;
  ritual_power?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "goals_rituals" */
export type Goals_Rituals_Variance_Order_By = {
  ritual_interval?: InputMaybe<Order_By>;
  ritual_power?: InputMaybe<Order_By>;
};

/** select columns of table "goals" */
export enum Goals_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Description = 'description',
  /** column name */
  Difficulty = 'difficulty',
  /** column name */
  FinishedAt = 'finished_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsFavorite = 'is_favorite',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  ParentGoalId = 'parent_goal_id',
  /** column name */
  Privacy = 'privacy',
  /** column name */
  Slogan = 'slogan',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "goals_aggregate_bool_exp_bool_and_arguments_columns" columns of table "goals" */
export enum Goals_Select_Column_Goals_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsFavorite = 'is_favorite'
}

/** select "goals_aggregate_bool_exp_bool_or_arguments_columns" columns of table "goals" */
export enum Goals_Select_Column_Goals_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsFavorite = 'is_favorite'
}

/** input type for updating data in table "goals" */
export type Goals_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  difficulty?: InputMaybe<Scalars['String']['input']>;
  finished_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  parent_goal_id?: InputMaybe<Scalars['uuid']['input']>;
  privacy?: InputMaybe<Scalars['String']['input']>;
  slogan?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** columns and relationships of "goals_slides" */
export type Goals_Slides = {
  __typename?: 'goals_slides';
  active: Scalars['Boolean']['output'];
  created_at: Scalars['timestamptz']['output'];
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  hero: Heroes;
  id: Scalars['uuid']['output'];
  img_path?: Maybe<Scalars['String']['output']>;
  owner_id: Scalars['uuid']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "goals_slides" */
export type Goals_Slides_Aggregate = {
  __typename?: 'goals_slides_aggregate';
  aggregate?: Maybe<Goals_Slides_Aggregate_Fields>;
  nodes: Array<Goals_Slides>;
};

export type Goals_Slides_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Goals_Slides_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Goals_Slides_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Goals_Slides_Aggregate_Bool_Exp_Count>;
};

export type Goals_Slides_Aggregate_Bool_Exp_Bool_And = {
  arguments: Goals_Slides_Select_Column_Goals_Slides_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Goals_Slides_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Goals_Slides_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Goals_Slides_Select_Column_Goals_Slides_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Goals_Slides_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Goals_Slides_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Goals_Slides_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Goals_Slides_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "goals_slides" */
export type Goals_Slides_Aggregate_Fields = {
  __typename?: 'goals_slides_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Goals_Slides_Max_Fields>;
  min?: Maybe<Goals_Slides_Min_Fields>;
};


/** aggregate fields of "goals_slides" */
export type Goals_Slides_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Goals_Slides_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "goals_slides" */
export type Goals_Slides_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Goals_Slides_Max_Order_By>;
  min?: InputMaybe<Goals_Slides_Min_Order_By>;
};

/** input type for inserting array relation for remote table "goals_slides" */
export type Goals_Slides_Arr_Rel_Insert_Input = {
  data: Array<Goals_Slides_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Goals_Slides_On_Conflict>;
};

/** Boolean expression to filter rows from the table "goals_slides". All fields are combined with a logical 'AND'. */
export type Goals_Slides_Bool_Exp = {
  _and?: InputMaybe<Array<Goals_Slides_Bool_Exp>>;
  _not?: InputMaybe<Goals_Slides_Bool_Exp>;
  _or?: InputMaybe<Array<Goals_Slides_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  hero?: InputMaybe<Heroes_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  img_path?: InputMaybe<String_Comparison_Exp>;
  owner_id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "goals_slides" */
export enum Goals_Slides_Constraint {
  /** unique or primary key constraint on columns "id" */
  GoalsSlidesPkey = 'goals_slides_pkey'
}

/** input type for inserting data into table "goals_slides" */
export type Goals_Slides_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  hero?: InputMaybe<Heroes_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  img_path?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Goals_Slides_Max_Fields = {
  __typename?: 'goals_slides_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  img_path?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "goals_slides" */
export type Goals_Slides_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  img_path?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Goals_Slides_Min_Fields = {
  __typename?: 'goals_slides_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  img_path?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "goals_slides" */
export type Goals_Slides_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  img_path?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "goals_slides" */
export type Goals_Slides_Mutation_Response = {
  __typename?: 'goals_slides_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Goals_Slides>;
};

/** on_conflict condition type for table "goals_slides" */
export type Goals_Slides_On_Conflict = {
  constraint: Goals_Slides_Constraint;
  update_columns?: Array<Goals_Slides_Update_Column>;
  where?: InputMaybe<Goals_Slides_Bool_Exp>;
};

/** Ordering options when selecting data from "goals_slides". */
export type Goals_Slides_Order_By = {
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  hero?: InputMaybe<Heroes_Order_By>;
  id?: InputMaybe<Order_By>;
  img_path?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: goals_slides */
export type Goals_Slides_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "goals_slides" */
export enum Goals_Slides_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImgPath = 'img_path',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "goals_slides_aggregate_bool_exp_bool_and_arguments_columns" columns of table "goals_slides" */
export enum Goals_Slides_Select_Column_Goals_Slides_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Active = 'active'
}

/** select "goals_slides_aggregate_bool_exp_bool_or_arguments_columns" columns of table "goals_slides" */
export enum Goals_Slides_Select_Column_Goals_Slides_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Active = 'active'
}

/** input type for updating data in table "goals_slides" */
export type Goals_Slides_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  img_path?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "goals_slides" */
export type Goals_Slides_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Goals_Slides_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Goals_Slides_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  img_path?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "goals_slides" */
export enum Goals_Slides_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImgPath = 'img_path',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Goals_Slides_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Goals_Slides_Set_Input>;
  /** filter the rows which have to be updated */
  where: Goals_Slides_Bool_Exp;
};

/** Streaming cursor of the table "goals" */
export type Goals_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Goals_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Goals_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  difficulty?: InputMaybe<Scalars['String']['input']>;
  finished_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  parent_goal_id?: InputMaybe<Scalars['uuid']['input']>;
  privacy?: InputMaybe<Scalars['String']['input']>;
  slogan?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "goals" */
export enum Goals_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Description = 'description',
  /** column name */
  Difficulty = 'difficulty',
  /** column name */
  FinishedAt = 'finished_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsFavorite = 'is_favorite',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  ParentGoalId = 'parent_goal_id',
  /** column name */
  Privacy = 'privacy',
  /** column name */
  Slogan = 'slogan',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Goals_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Goals_Set_Input>;
  /** filter the rows which have to be updated */
  where: Goals_Bool_Exp;
};

/** list of heroes */
export type Heroes = {
  __typename?: 'heroes';
  /** An array relationship */
  achievements: Array<Achievements>;
  /** An aggregate relationship */
  achievements_aggregate: Achievements_Aggregate;
  /** An array relationship */
  addons: Array<Addons>;
  /** An aggregate relationship */
  addons_aggregate: Addons_Aggregate;
  avatar?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['timestamptz']['output']>;
  coins: Scalars['Int']['output'];
  created_at: Scalars['timestamptz']['output'];
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  email: Scalars['String']['output'];
  /** An array relationship */
  goals: Array<Goals>;
  /** An aggregate relationship */
  goals_aggregate: Goals_Aggregate;
  /** An array relationship */
  goals_slides: Array<Goals_Slides>;
  /** An aggregate relationship */
  goals_slides_aggregate: Goals_Slides_Aggregate;
  /** An object relationship */
  heroes_role?: Maybe<Heroes_Roles>;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  /** An object relationship */
  notepad?: Maybe<Notepad>;
  /** An array relationship */
  notes: Array<Notes>;
  /** An aggregate relationship */
  notes_aggregate: Notes_Aggregate;
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Heroes_Roles_Enum>;
  /** An array relationship */
  sprints: Array<Sprints>;
  /** An aggregate relationship */
  sprints_aggregate: Sprints_Aggregate;
  /** An array relationship */
  tokens: Array<Heroes_Tokens>;
  /** An aggregate relationship */
  tokens_aggregate: Heroes_Tokens_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
};


/** list of heroes */
export type HeroesAchievementsArgs = {
  distinct_on?: InputMaybe<Array<Achievements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Achievements_Order_By>>;
  where?: InputMaybe<Achievements_Bool_Exp>;
};


/** list of heroes */
export type HeroesAchievements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Achievements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Achievements_Order_By>>;
  where?: InputMaybe<Achievements_Bool_Exp>;
};


/** list of heroes */
export type HeroesAddonsArgs = {
  distinct_on?: InputMaybe<Array<Addons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Addons_Order_By>>;
  where?: InputMaybe<Addons_Bool_Exp>;
};


/** list of heroes */
export type HeroesAddons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Addons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Addons_Order_By>>;
  where?: InputMaybe<Addons_Bool_Exp>;
};


/** list of heroes */
export type HeroesGoalsArgs = {
  distinct_on?: InputMaybe<Array<Goals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Order_By>>;
  where?: InputMaybe<Goals_Bool_Exp>;
};


/** list of heroes */
export type HeroesGoals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Order_By>>;
  where?: InputMaybe<Goals_Bool_Exp>;
};


/** list of heroes */
export type HeroesGoals_SlidesArgs = {
  distinct_on?: InputMaybe<Array<Goals_Slides_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Slides_Order_By>>;
  where?: InputMaybe<Goals_Slides_Bool_Exp>;
};


/** list of heroes */
export type HeroesGoals_Slides_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goals_Slides_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Slides_Order_By>>;
  where?: InputMaybe<Goals_Slides_Bool_Exp>;
};


/** list of heroes */
export type HeroesNotesArgs = {
  distinct_on?: InputMaybe<Array<Notes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notes_Order_By>>;
  where?: InputMaybe<Notes_Bool_Exp>;
};


/** list of heroes */
export type HeroesNotes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notes_Order_By>>;
  where?: InputMaybe<Notes_Bool_Exp>;
};


/** list of heroes */
export type HeroesSprintsArgs = {
  distinct_on?: InputMaybe<Array<Sprints_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sprints_Order_By>>;
  where?: InputMaybe<Sprints_Bool_Exp>;
};


/** list of heroes */
export type HeroesSprints_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sprints_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sprints_Order_By>>;
  where?: InputMaybe<Sprints_Bool_Exp>;
};


/** list of heroes */
export type HeroesTokensArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Heroes_Tokens_Order_By>>;
  where?: InputMaybe<Heroes_Tokens_Bool_Exp>;
};


/** list of heroes */
export type HeroesTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Heroes_Tokens_Order_By>>;
  where?: InputMaybe<Heroes_Tokens_Bool_Exp>;
};

/** aggregated selection of "heroes" */
export type Heroes_Aggregate = {
  __typename?: 'heroes_aggregate';
  aggregate?: Maybe<Heroes_Aggregate_Fields>;
  nodes: Array<Heroes>;
};

export type Heroes_Aggregate_Bool_Exp = {
  count?: InputMaybe<Heroes_Aggregate_Bool_Exp_Count>;
};

export type Heroes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Heroes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Heroes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "heroes" */
export type Heroes_Aggregate_Fields = {
  __typename?: 'heroes_aggregate_fields';
  avg?: Maybe<Heroes_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Heroes_Max_Fields>;
  min?: Maybe<Heroes_Min_Fields>;
  stddev?: Maybe<Heroes_Stddev_Fields>;
  stddev_pop?: Maybe<Heroes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Heroes_Stddev_Samp_Fields>;
  sum?: Maybe<Heroes_Sum_Fields>;
  var_pop?: Maybe<Heroes_Var_Pop_Fields>;
  var_samp?: Maybe<Heroes_Var_Samp_Fields>;
  variance?: Maybe<Heroes_Variance_Fields>;
};


/** aggregate fields of "heroes" */
export type Heroes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Heroes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "heroes" */
export type Heroes_Aggregate_Order_By = {
  avg?: InputMaybe<Heroes_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Heroes_Max_Order_By>;
  min?: InputMaybe<Heroes_Min_Order_By>;
  stddev?: InputMaybe<Heroes_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Heroes_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Heroes_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Heroes_Sum_Order_By>;
  var_pop?: InputMaybe<Heroes_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Heroes_Var_Samp_Order_By>;
  variance?: InputMaybe<Heroes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "heroes" */
export type Heroes_Arr_Rel_Insert_Input = {
  data: Array<Heroes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Heroes_On_Conflict>;
};

/** aggregate avg on columns */
export type Heroes_Avg_Fields = {
  __typename?: 'heroes_avg_fields';
  coins?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "heroes" */
export type Heroes_Avg_Order_By = {
  coins?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "heroes". All fields are combined with a logical 'AND'. */
export type Heroes_Bool_Exp = {
  _and?: InputMaybe<Array<Heroes_Bool_Exp>>;
  _not?: InputMaybe<Heroes_Bool_Exp>;
  _or?: InputMaybe<Array<Heroes_Bool_Exp>>;
  achievements?: InputMaybe<Achievements_Bool_Exp>;
  achievements_aggregate?: InputMaybe<Achievements_Aggregate_Bool_Exp>;
  addons?: InputMaybe<Addons_Bool_Exp>;
  addons_aggregate?: InputMaybe<Addons_Aggregate_Bool_Exp>;
  avatar?: InputMaybe<String_Comparison_Exp>;
  birthday?: InputMaybe<Timestamptz_Comparison_Exp>;
  coins?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  goals?: InputMaybe<Goals_Bool_Exp>;
  goals_aggregate?: InputMaybe<Goals_Aggregate_Bool_Exp>;
  goals_slides?: InputMaybe<Goals_Slides_Bool_Exp>;
  goals_slides_aggregate?: InputMaybe<Goals_Slides_Aggregate_Bool_Exp>;
  heroes_role?: InputMaybe<Heroes_Roles_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  notepad?: InputMaybe<Notepad_Bool_Exp>;
  notes?: InputMaybe<Notes_Bool_Exp>;
  notes_aggregate?: InputMaybe<Notes_Aggregate_Bool_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<Heroes_Roles_Enum_Comparison_Exp>;
  sprints?: InputMaybe<Sprints_Bool_Exp>;
  sprints_aggregate?: InputMaybe<Sprints_Aggregate_Bool_Exp>;
  tokens?: InputMaybe<Heroes_Tokens_Bool_Exp>;
  tokens_aggregate?: InputMaybe<Heroes_Tokens_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "heroes" */
export enum Heroes_Constraint {
  /** unique or primary key constraint on columns "id" */
  HeroesPkey = 'heroes_pkey'
}

/** input type for incrementing numeric columns in table "heroes" */
export type Heroes_Inc_Input = {
  coins?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "heroes" */
export type Heroes_Insert_Input = {
  achievements?: InputMaybe<Achievements_Arr_Rel_Insert_Input>;
  addons?: InputMaybe<Addons_Arr_Rel_Insert_Input>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['timestamptz']['input']>;
  coins?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  goals?: InputMaybe<Goals_Arr_Rel_Insert_Input>;
  goals_slides?: InputMaybe<Goals_Slides_Arr_Rel_Insert_Input>;
  heroes_role?: InputMaybe<Heroes_Roles_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notepad?: InputMaybe<Notepad_Obj_Rel_Insert_Input>;
  notes?: InputMaybe<Notes_Arr_Rel_Insert_Input>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Heroes_Roles_Enum>;
  sprints?: InputMaybe<Sprints_Arr_Rel_Insert_Input>;
  tokens?: InputMaybe<Heroes_Tokens_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Heroes_Max_Fields = {
  __typename?: 'heroes_max_fields';
  avatar?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['timestamptz']['output']>;
  coins?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "heroes" */
export type Heroes_Max_Order_By = {
  avatar?: InputMaybe<Order_By>;
  birthday?: InputMaybe<Order_By>;
  coins?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Heroes_Min_Fields = {
  __typename?: 'heroes_min_fields';
  avatar?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['timestamptz']['output']>;
  coins?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "heroes" */
export type Heroes_Min_Order_By = {
  avatar?: InputMaybe<Order_By>;
  birthday?: InputMaybe<Order_By>;
  coins?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "heroes" */
export type Heroes_Mutation_Response = {
  __typename?: 'heroes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Heroes>;
};

/** input type for inserting object relation for remote table "heroes" */
export type Heroes_Obj_Rel_Insert_Input = {
  data: Heroes_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Heroes_On_Conflict>;
};

/** on_conflict condition type for table "heroes" */
export type Heroes_On_Conflict = {
  constraint: Heroes_Constraint;
  update_columns?: Array<Heroes_Update_Column>;
  where?: InputMaybe<Heroes_Bool_Exp>;
};

/** Ordering options when selecting data from "heroes". */
export type Heroes_Order_By = {
  achievements_aggregate?: InputMaybe<Achievements_Aggregate_Order_By>;
  addons_aggregate?: InputMaybe<Addons_Aggregate_Order_By>;
  avatar?: InputMaybe<Order_By>;
  birthday?: InputMaybe<Order_By>;
  coins?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  goals_aggregate?: InputMaybe<Goals_Aggregate_Order_By>;
  goals_slides_aggregate?: InputMaybe<Goals_Slides_Aggregate_Order_By>;
  heroes_role?: InputMaybe<Heroes_Roles_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  notepad?: InputMaybe<Notepad_Order_By>;
  notes_aggregate?: InputMaybe<Notes_Aggregate_Order_By>;
  password?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  sprints_aggregate?: InputMaybe<Sprints_Aggregate_Order_By>;
  tokens_aggregate?: InputMaybe<Heroes_Tokens_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: heroes */
export type Heroes_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "heroes_roles" */
export type Heroes_Roles = {
  __typename?: 'heroes_roles';
  description?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  heroes: Array<Heroes>;
  /** An aggregate relationship */
  heroes_aggregate: Heroes_Aggregate;
  role: Scalars['String']['output'];
};


/** columns and relationships of "heroes_roles" */
export type Heroes_RolesHeroesArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Heroes_Order_By>>;
  where?: InputMaybe<Heroes_Bool_Exp>;
};


/** columns and relationships of "heroes_roles" */
export type Heroes_RolesHeroes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Heroes_Order_By>>;
  where?: InputMaybe<Heroes_Bool_Exp>;
};

/** aggregated selection of "heroes_roles" */
export type Heroes_Roles_Aggregate = {
  __typename?: 'heroes_roles_aggregate';
  aggregate?: Maybe<Heroes_Roles_Aggregate_Fields>;
  nodes: Array<Heroes_Roles>;
};

/** aggregate fields of "heroes_roles" */
export type Heroes_Roles_Aggregate_Fields = {
  __typename?: 'heroes_roles_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Heroes_Roles_Max_Fields>;
  min?: Maybe<Heroes_Roles_Min_Fields>;
};


/** aggregate fields of "heroes_roles" */
export type Heroes_Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Heroes_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "heroes_roles". All fields are combined with a logical 'AND'. */
export type Heroes_Roles_Bool_Exp = {
  _and?: InputMaybe<Array<Heroes_Roles_Bool_Exp>>;
  _not?: InputMaybe<Heroes_Roles_Bool_Exp>;
  _or?: InputMaybe<Array<Heroes_Roles_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  heroes?: InputMaybe<Heroes_Bool_Exp>;
  heroes_aggregate?: InputMaybe<Heroes_Aggregate_Bool_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "heroes_roles" */
export enum Heroes_Roles_Constraint {
  /** unique or primary key constraint on columns "role" */
  HeroesRolesPkey = 'heroes_roles_pkey'
}

export enum Heroes_Roles_Enum {
  /** admin */
  Admin = 'admin',
  /** not activated user */
  Guest = 'guest',
  Hero = 'hero',
  /** admin */
  SuperHero = 'super_hero'
}

/** Boolean expression to compare columns of type "heroes_roles_enum". All fields are combined with logical 'AND'. */
export type Heroes_Roles_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Heroes_Roles_Enum>;
  _in?: InputMaybe<Array<Heroes_Roles_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Heroes_Roles_Enum>;
  _nin?: InputMaybe<Array<Heroes_Roles_Enum>>;
};

/** input type for inserting data into table "heroes_roles" */
export type Heroes_Roles_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  heroes?: InputMaybe<Heroes_Arr_Rel_Insert_Input>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Heroes_Roles_Max_Fields = {
  __typename?: 'heroes_roles_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Heroes_Roles_Min_Fields = {
  __typename?: 'heroes_roles_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "heroes_roles" */
export type Heroes_Roles_Mutation_Response = {
  __typename?: 'heroes_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Heroes_Roles>;
};

/** input type for inserting object relation for remote table "heroes_roles" */
export type Heroes_Roles_Obj_Rel_Insert_Input = {
  data: Heroes_Roles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Heroes_Roles_On_Conflict>;
};

/** on_conflict condition type for table "heroes_roles" */
export type Heroes_Roles_On_Conflict = {
  constraint: Heroes_Roles_Constraint;
  update_columns?: Array<Heroes_Roles_Update_Column>;
  where?: InputMaybe<Heroes_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "heroes_roles". */
export type Heroes_Roles_Order_By = {
  description?: InputMaybe<Order_By>;
  heroes_aggregate?: InputMaybe<Heroes_Aggregate_Order_By>;
  role?: InputMaybe<Order_By>;
};

/** primary key columns input for table: heroes_roles */
export type Heroes_Roles_Pk_Columns_Input = {
  role: Scalars['String']['input'];
};

/** select columns of table "heroes_roles" */
export enum Heroes_Roles_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "heroes_roles" */
export type Heroes_Roles_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "heroes_roles" */
export type Heroes_Roles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Heroes_Roles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Heroes_Roles_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "heroes_roles" */
export enum Heroes_Roles_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Role = 'role'
}

export type Heroes_Roles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Heroes_Roles_Set_Input>;
  /** filter the rows which have to be updated */
  where: Heroes_Roles_Bool_Exp;
};

/** select columns of table "heroes" */
export enum Heroes_Select_Column {
  /** column name */
  Avatar = 'avatar',
  /** column name */
  Birthday = 'birthday',
  /** column name */
  Coins = 'coins',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  Phone = 'phone',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "heroes" */
export type Heroes_Set_Input = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['timestamptz']['input']>;
  coins?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Heroes_Roles_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Heroes_Stddev_Fields = {
  __typename?: 'heroes_stddev_fields';
  coins?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "heroes" */
export type Heroes_Stddev_Order_By = {
  coins?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Heroes_Stddev_Pop_Fields = {
  __typename?: 'heroes_stddev_pop_fields';
  coins?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "heroes" */
export type Heroes_Stddev_Pop_Order_By = {
  coins?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Heroes_Stddev_Samp_Fields = {
  __typename?: 'heroes_stddev_samp_fields';
  coins?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "heroes" */
export type Heroes_Stddev_Samp_Order_By = {
  coins?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "heroes" */
export type Heroes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Heroes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Heroes_Stream_Cursor_Value_Input = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['timestamptz']['input']>;
  coins?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Heroes_Roles_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Heroes_Sum_Fields = {
  __typename?: 'heroes_sum_fields';
  coins?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "heroes" */
export type Heroes_Sum_Order_By = {
  coins?: InputMaybe<Order_By>;
};

/** refresh tokens */
export type Heroes_Tokens = {
  __typename?: 'heroes_tokens';
  /** An object relationship */
  hero: Heroes;
  hero_id: Scalars['uuid']['output'];
  session_id: Scalars['uuid']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "heroes_tokens" */
export type Heroes_Tokens_Aggregate = {
  __typename?: 'heroes_tokens_aggregate';
  aggregate?: Maybe<Heroes_Tokens_Aggregate_Fields>;
  nodes: Array<Heroes_Tokens>;
};

export type Heroes_Tokens_Aggregate_Bool_Exp = {
  count?: InputMaybe<Heroes_Tokens_Aggregate_Bool_Exp_Count>;
};

export type Heroes_Tokens_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Heroes_Tokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Heroes_Tokens_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "heroes_tokens" */
export type Heroes_Tokens_Aggregate_Fields = {
  __typename?: 'heroes_tokens_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Heroes_Tokens_Max_Fields>;
  min?: Maybe<Heroes_Tokens_Min_Fields>;
};


/** aggregate fields of "heroes_tokens" */
export type Heroes_Tokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Heroes_Tokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "heroes_tokens" */
export type Heroes_Tokens_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Heroes_Tokens_Max_Order_By>;
  min?: InputMaybe<Heroes_Tokens_Min_Order_By>;
};

/** input type for inserting array relation for remote table "heroes_tokens" */
export type Heroes_Tokens_Arr_Rel_Insert_Input = {
  data: Array<Heroes_Tokens_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Heroes_Tokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "heroes_tokens". All fields are combined with a logical 'AND'. */
export type Heroes_Tokens_Bool_Exp = {
  _and?: InputMaybe<Array<Heroes_Tokens_Bool_Exp>>;
  _not?: InputMaybe<Heroes_Tokens_Bool_Exp>;
  _or?: InputMaybe<Array<Heroes_Tokens_Bool_Exp>>;
  hero?: InputMaybe<Heroes_Bool_Exp>;
  hero_id?: InputMaybe<Uuid_Comparison_Exp>;
  session_id?: InputMaybe<Uuid_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "heroes_tokens" */
export enum Heroes_Tokens_Constraint {
  /** unique or primary key constraint on columns "session_id" */
  HeroesTokensPkey = 'heroes_tokens_pkey',
  /** unique or primary key constraint on columns "session_id" */
  HeroesTokensSessionIdKey = 'heroes_tokens_session_id_key'
}

/** input type for inserting data into table "heroes_tokens" */
export type Heroes_Tokens_Insert_Input = {
  hero?: InputMaybe<Heroes_Obj_Rel_Insert_Input>;
  hero_id?: InputMaybe<Scalars['uuid']['input']>;
  session_id?: InputMaybe<Scalars['uuid']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Heroes_Tokens_Max_Fields = {
  __typename?: 'heroes_tokens_max_fields';
  hero_id?: Maybe<Scalars['uuid']['output']>;
  session_id?: Maybe<Scalars['uuid']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "heroes_tokens" */
export type Heroes_Tokens_Max_Order_By = {
  hero_id?: InputMaybe<Order_By>;
  session_id?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Heroes_Tokens_Min_Fields = {
  __typename?: 'heroes_tokens_min_fields';
  hero_id?: Maybe<Scalars['uuid']['output']>;
  session_id?: Maybe<Scalars['uuid']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "heroes_tokens" */
export type Heroes_Tokens_Min_Order_By = {
  hero_id?: InputMaybe<Order_By>;
  session_id?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "heroes_tokens" */
export type Heroes_Tokens_Mutation_Response = {
  __typename?: 'heroes_tokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Heroes_Tokens>;
};

/** on_conflict condition type for table "heroes_tokens" */
export type Heroes_Tokens_On_Conflict = {
  constraint: Heroes_Tokens_Constraint;
  update_columns?: Array<Heroes_Tokens_Update_Column>;
  where?: InputMaybe<Heroes_Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "heroes_tokens". */
export type Heroes_Tokens_Order_By = {
  hero?: InputMaybe<Heroes_Order_By>;
  hero_id?: InputMaybe<Order_By>;
  session_id?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
};

/** primary key columns input for table: heroes_tokens */
export type Heroes_Tokens_Pk_Columns_Input = {
  session_id: Scalars['uuid']['input'];
};

/** select columns of table "heroes_tokens" */
export enum Heroes_Tokens_Select_Column {
  /** column name */
  HeroId = 'hero_id',
  /** column name */
  SessionId = 'session_id',
  /** column name */
  Token = 'token'
}

/** input type for updating data in table "heroes_tokens" */
export type Heroes_Tokens_Set_Input = {
  hero_id?: InputMaybe<Scalars['uuid']['input']>;
  session_id?: InputMaybe<Scalars['uuid']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "heroes_tokens" */
export type Heroes_Tokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Heroes_Tokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Heroes_Tokens_Stream_Cursor_Value_Input = {
  hero_id?: InputMaybe<Scalars['uuid']['input']>;
  session_id?: InputMaybe<Scalars['uuid']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "heroes_tokens" */
export enum Heroes_Tokens_Update_Column {
  /** column name */
  HeroId = 'hero_id',
  /** column name */
  SessionId = 'session_id',
  /** column name */
  Token = 'token'
}

export type Heroes_Tokens_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Heroes_Tokens_Set_Input>;
  /** filter the rows which have to be updated */
  where: Heroes_Tokens_Bool_Exp;
};

/** update columns of table "heroes" */
export enum Heroes_Update_Column {
  /** column name */
  Avatar = 'avatar',
  /** column name */
  Birthday = 'birthday',
  /** column name */
  Coins = 'coins',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  Phone = 'phone',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Heroes_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Heroes_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Heroes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Heroes_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Heroes_Var_Pop_Fields = {
  __typename?: 'heroes_var_pop_fields';
  coins?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "heroes" */
export type Heroes_Var_Pop_Order_By = {
  coins?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Heroes_Var_Samp_Fields = {
  __typename?: 'heroes_var_samp_fields';
  coins?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "heroes" */
export type Heroes_Var_Samp_Order_By = {
  coins?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Heroes_Variance_Fields = {
  __typename?: 'heroes_variance_fields';
  coins?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "heroes" */
export type Heroes_Variance_Order_By = {
  coins?: InputMaybe<Order_By>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "achievements" */
  delete_achievements?: Maybe<Achievements_Mutation_Response>;
  /** delete single row from the table: "achievements" */
  delete_achievements_by_pk?: Maybe<Achievements>;
  /** delete data from the table: "addons" */
  delete_addons?: Maybe<Addons_Mutation_Response>;
  /** delete single row from the table: "addons" */
  delete_addons_by_pk?: Maybe<Addons>;
  /** delete data from the table: "addons_enum" */
  delete_addons_enum?: Maybe<Addons_Enum_Mutation_Response>;
  /** delete single row from the table: "addons_enum" */
  delete_addons_enum_by_pk?: Maybe<Addons_Enum>;
  /** delete data from the table: "goal_difficulty_enum" */
  delete_goal_difficulty_enum?: Maybe<Goal_Difficulty_Enum_Mutation_Response>;
  /** delete single row from the table: "goal_difficulty_enum" */
  delete_goal_difficulty_enum_by_pk?: Maybe<Goal_Difficulty_Enum>;
  /** delete data from the table: "goal_status_enum" */
  delete_goal_status_enum?: Maybe<Goal_Status_Enum_Mutation_Response>;
  /** delete single row from the table: "goal_status_enum" */
  delete_goal_status_enum_by_pk?: Maybe<Goal_Status_Enum>;
  /** delete data from the table: "goals" */
  delete_goals?: Maybe<Goals_Mutation_Response>;
  /** delete single row from the table: "goals" */
  delete_goals_by_pk?: Maybe<Goals>;
  /** delete data from the table: "goals_rituals" */
  delete_goals_rituals?: Maybe<Goals_Rituals_Mutation_Response>;
  /** delete single row from the table: "goals_rituals" */
  delete_goals_rituals_by_pk?: Maybe<Goals_Rituals>;
  /** delete data from the table: "goals_slides" */
  delete_goals_slides?: Maybe<Goals_Slides_Mutation_Response>;
  /** delete single row from the table: "goals_slides" */
  delete_goals_slides_by_pk?: Maybe<Goals_Slides>;
  /** delete data from the table: "heroes" */
  delete_heroes?: Maybe<Heroes_Mutation_Response>;
  /** delete single row from the table: "heroes" */
  delete_heroes_by_pk?: Maybe<Heroes>;
  /** delete data from the table: "heroes_roles" */
  delete_heroes_roles?: Maybe<Heroes_Roles_Mutation_Response>;
  /** delete single row from the table: "heroes_roles" */
  delete_heroes_roles_by_pk?: Maybe<Heroes_Roles>;
  /** delete data from the table: "heroes_tokens" */
  delete_heroes_tokens?: Maybe<Heroes_Tokens_Mutation_Response>;
  /** delete single row from the table: "heroes_tokens" */
  delete_heroes_tokens_by_pk?: Maybe<Heroes_Tokens>;
  /** delete data from the table: "notepad" */
  delete_notepad?: Maybe<Notepad_Mutation_Response>;
  /** delete single row from the table: "notepad" */
  delete_notepad_by_pk?: Maybe<Notepad>;
  /** delete data from the table: "notes" */
  delete_notes?: Maybe<Notes_Mutation_Response>;
  /** delete single row from the table: "notes" */
  delete_notes_by_pk?: Maybe<Notes>;
  /** delete data from the table: "notes_labels" */
  delete_notes_labels?: Maybe<Notes_Labels_Mutation_Response>;
  /** delete single row from the table: "notes_labels" */
  delete_notes_labels_by_pk?: Maybe<Notes_Labels>;
  /** delete data from the table: "privacy_enum" */
  delete_privacy_enum?: Maybe<Privacy_Enum_Mutation_Response>;
  /** delete single row from the table: "privacy_enum" */
  delete_privacy_enum_by_pk?: Maybe<Privacy_Enum>;
  /** delete data from the table: "restore_codes" */
  delete_restore_codes?: Maybe<Restore_Codes_Mutation_Response>;
  /** delete single row from the table: "restore_codes" */
  delete_restore_codes_by_pk?: Maybe<Restore_Codes>;
  /** delete data from the table: "restore_codes_enum" */
  delete_restore_codes_enum?: Maybe<Restore_Codes_Enum_Mutation_Response>;
  /** delete single row from the table: "restore_codes_enum" */
  delete_restore_codes_enum_by_pk?: Maybe<Restore_Codes_Enum>;
  /** delete data from the table: "ritual_type_enum" */
  delete_ritual_type_enum?: Maybe<Ritual_Type_Enum_Mutation_Response>;
  /** delete single row from the table: "ritual_type_enum" */
  delete_ritual_type_enum_by_pk?: Maybe<Ritual_Type_Enum>;
  /** delete data from the table: "sprints" */
  delete_sprints?: Maybe<Sprints_Mutation_Response>;
  /** delete single row from the table: "sprints" */
  delete_sprints_by_pk?: Maybe<Sprints>;
  /** insert data into the table: "achievements" */
  insert_achievements?: Maybe<Achievements_Mutation_Response>;
  /** insert a single row into the table: "achievements" */
  insert_achievements_one?: Maybe<Achievements>;
  /** insert data into the table: "addons" */
  insert_addons?: Maybe<Addons_Mutation_Response>;
  /** insert data into the table: "addons_enum" */
  insert_addons_enum?: Maybe<Addons_Enum_Mutation_Response>;
  /** insert a single row into the table: "addons_enum" */
  insert_addons_enum_one?: Maybe<Addons_Enum>;
  /** insert a single row into the table: "addons" */
  insert_addons_one?: Maybe<Addons>;
  /** insert data into the table: "goal_difficulty_enum" */
  insert_goal_difficulty_enum?: Maybe<Goal_Difficulty_Enum_Mutation_Response>;
  /** insert a single row into the table: "goal_difficulty_enum" */
  insert_goal_difficulty_enum_one?: Maybe<Goal_Difficulty_Enum>;
  /** insert data into the table: "goal_status_enum" */
  insert_goal_status_enum?: Maybe<Goal_Status_Enum_Mutation_Response>;
  /** insert a single row into the table: "goal_status_enum" */
  insert_goal_status_enum_one?: Maybe<Goal_Status_Enum>;
  /** insert data into the table: "goals" */
  insert_goals?: Maybe<Goals_Mutation_Response>;
  /** insert a single row into the table: "goals" */
  insert_goals_one?: Maybe<Goals>;
  /** insert data into the table: "goals_rituals" */
  insert_goals_rituals?: Maybe<Goals_Rituals_Mutation_Response>;
  /** insert a single row into the table: "goals_rituals" */
  insert_goals_rituals_one?: Maybe<Goals_Rituals>;
  /** insert data into the table: "goals_slides" */
  insert_goals_slides?: Maybe<Goals_Slides_Mutation_Response>;
  /** insert a single row into the table: "goals_slides" */
  insert_goals_slides_one?: Maybe<Goals_Slides>;
  /** insert data into the table: "heroes" */
  insert_heroes?: Maybe<Heroes_Mutation_Response>;
  /** insert a single row into the table: "heroes" */
  insert_heroes_one?: Maybe<Heroes>;
  /** insert data into the table: "heroes_roles" */
  insert_heroes_roles?: Maybe<Heroes_Roles_Mutation_Response>;
  /** insert a single row into the table: "heroes_roles" */
  insert_heroes_roles_one?: Maybe<Heroes_Roles>;
  /** insert data into the table: "heroes_tokens" */
  insert_heroes_tokens?: Maybe<Heroes_Tokens_Mutation_Response>;
  /** insert a single row into the table: "heroes_tokens" */
  insert_heroes_tokens_one?: Maybe<Heroes_Tokens>;
  /** insert data into the table: "notepad" */
  insert_notepad?: Maybe<Notepad_Mutation_Response>;
  /** insert a single row into the table: "notepad" */
  insert_notepad_one?: Maybe<Notepad>;
  /** insert data into the table: "notes" */
  insert_notes?: Maybe<Notes_Mutation_Response>;
  /** insert data into the table: "notes_labels" */
  insert_notes_labels?: Maybe<Notes_Labels_Mutation_Response>;
  /** insert a single row into the table: "notes_labels" */
  insert_notes_labels_one?: Maybe<Notes_Labels>;
  /** insert a single row into the table: "notes" */
  insert_notes_one?: Maybe<Notes>;
  /** insert data into the table: "privacy_enum" */
  insert_privacy_enum?: Maybe<Privacy_Enum_Mutation_Response>;
  /** insert a single row into the table: "privacy_enum" */
  insert_privacy_enum_one?: Maybe<Privacy_Enum>;
  /** insert data into the table: "restore_codes" */
  insert_restore_codes?: Maybe<Restore_Codes_Mutation_Response>;
  /** insert data into the table: "restore_codes_enum" */
  insert_restore_codes_enum?: Maybe<Restore_Codes_Enum_Mutation_Response>;
  /** insert a single row into the table: "restore_codes_enum" */
  insert_restore_codes_enum_one?: Maybe<Restore_Codes_Enum>;
  /** insert a single row into the table: "restore_codes" */
  insert_restore_codes_one?: Maybe<Restore_Codes>;
  /** insert data into the table: "ritual_type_enum" */
  insert_ritual_type_enum?: Maybe<Ritual_Type_Enum_Mutation_Response>;
  /** insert a single row into the table: "ritual_type_enum" */
  insert_ritual_type_enum_one?: Maybe<Ritual_Type_Enum>;
  /** insert data into the table: "sprints" */
  insert_sprints?: Maybe<Sprints_Mutation_Response>;
  /** insert a single row into the table: "sprints" */
  insert_sprints_one?: Maybe<Sprints>;
  /** update data of the table: "achievements" */
  update_achievements?: Maybe<Achievements_Mutation_Response>;
  /** update single row of the table: "achievements" */
  update_achievements_by_pk?: Maybe<Achievements>;
  /** update multiples rows of table: "achievements" */
  update_achievements_many?: Maybe<Array<Maybe<Achievements_Mutation_Response>>>;
  /** update data of the table: "addons" */
  update_addons?: Maybe<Addons_Mutation_Response>;
  /** update single row of the table: "addons" */
  update_addons_by_pk?: Maybe<Addons>;
  /** update data of the table: "addons_enum" */
  update_addons_enum?: Maybe<Addons_Enum_Mutation_Response>;
  /** update single row of the table: "addons_enum" */
  update_addons_enum_by_pk?: Maybe<Addons_Enum>;
  /** update multiples rows of table: "addons_enum" */
  update_addons_enum_many?: Maybe<Array<Maybe<Addons_Enum_Mutation_Response>>>;
  /** update multiples rows of table: "addons" */
  update_addons_many?: Maybe<Array<Maybe<Addons_Mutation_Response>>>;
  /** update data of the table: "goal_difficulty_enum" */
  update_goal_difficulty_enum?: Maybe<Goal_Difficulty_Enum_Mutation_Response>;
  /** update single row of the table: "goal_difficulty_enum" */
  update_goal_difficulty_enum_by_pk?: Maybe<Goal_Difficulty_Enum>;
  /** update multiples rows of table: "goal_difficulty_enum" */
  update_goal_difficulty_enum_many?: Maybe<Array<Maybe<Goal_Difficulty_Enum_Mutation_Response>>>;
  /** update data of the table: "goal_status_enum" */
  update_goal_status_enum?: Maybe<Goal_Status_Enum_Mutation_Response>;
  /** update single row of the table: "goal_status_enum" */
  update_goal_status_enum_by_pk?: Maybe<Goal_Status_Enum>;
  /** update multiples rows of table: "goal_status_enum" */
  update_goal_status_enum_many?: Maybe<Array<Maybe<Goal_Status_Enum_Mutation_Response>>>;
  /** update data of the table: "goals" */
  update_goals?: Maybe<Goals_Mutation_Response>;
  /** update single row of the table: "goals" */
  update_goals_by_pk?: Maybe<Goals>;
  /** update multiples rows of table: "goals" */
  update_goals_many?: Maybe<Array<Maybe<Goals_Mutation_Response>>>;
  /** update data of the table: "goals_rituals" */
  update_goals_rituals?: Maybe<Goals_Rituals_Mutation_Response>;
  /** update single row of the table: "goals_rituals" */
  update_goals_rituals_by_pk?: Maybe<Goals_Rituals>;
  /** update multiples rows of table: "goals_rituals" */
  update_goals_rituals_many?: Maybe<Array<Maybe<Goals_Rituals_Mutation_Response>>>;
  /** update data of the table: "goals_slides" */
  update_goals_slides?: Maybe<Goals_Slides_Mutation_Response>;
  /** update single row of the table: "goals_slides" */
  update_goals_slides_by_pk?: Maybe<Goals_Slides>;
  /** update multiples rows of table: "goals_slides" */
  update_goals_slides_many?: Maybe<Array<Maybe<Goals_Slides_Mutation_Response>>>;
  /** update data of the table: "heroes" */
  update_heroes?: Maybe<Heroes_Mutation_Response>;
  /** update single row of the table: "heroes" */
  update_heroes_by_pk?: Maybe<Heroes>;
  /** update multiples rows of table: "heroes" */
  update_heroes_many?: Maybe<Array<Maybe<Heroes_Mutation_Response>>>;
  /** update data of the table: "heroes_roles" */
  update_heroes_roles?: Maybe<Heroes_Roles_Mutation_Response>;
  /** update single row of the table: "heroes_roles" */
  update_heroes_roles_by_pk?: Maybe<Heroes_Roles>;
  /** update multiples rows of table: "heroes_roles" */
  update_heroes_roles_many?: Maybe<Array<Maybe<Heroes_Roles_Mutation_Response>>>;
  /** update data of the table: "heroes_tokens" */
  update_heroes_tokens?: Maybe<Heroes_Tokens_Mutation_Response>;
  /** update single row of the table: "heroes_tokens" */
  update_heroes_tokens_by_pk?: Maybe<Heroes_Tokens>;
  /** update multiples rows of table: "heroes_tokens" */
  update_heroes_tokens_many?: Maybe<Array<Maybe<Heroes_Tokens_Mutation_Response>>>;
  /** update data of the table: "notepad" */
  update_notepad?: Maybe<Notepad_Mutation_Response>;
  /** update single row of the table: "notepad" */
  update_notepad_by_pk?: Maybe<Notepad>;
  /** update multiples rows of table: "notepad" */
  update_notepad_many?: Maybe<Array<Maybe<Notepad_Mutation_Response>>>;
  /** update data of the table: "notes" */
  update_notes?: Maybe<Notes_Mutation_Response>;
  /** update single row of the table: "notes" */
  update_notes_by_pk?: Maybe<Notes>;
  /** update data of the table: "notes_labels" */
  update_notes_labels?: Maybe<Notes_Labels_Mutation_Response>;
  /** update single row of the table: "notes_labels" */
  update_notes_labels_by_pk?: Maybe<Notes_Labels>;
  /** update multiples rows of table: "notes_labels" */
  update_notes_labels_many?: Maybe<Array<Maybe<Notes_Labels_Mutation_Response>>>;
  /** update multiples rows of table: "notes" */
  update_notes_many?: Maybe<Array<Maybe<Notes_Mutation_Response>>>;
  /** update data of the table: "privacy_enum" */
  update_privacy_enum?: Maybe<Privacy_Enum_Mutation_Response>;
  /** update single row of the table: "privacy_enum" */
  update_privacy_enum_by_pk?: Maybe<Privacy_Enum>;
  /** update multiples rows of table: "privacy_enum" */
  update_privacy_enum_many?: Maybe<Array<Maybe<Privacy_Enum_Mutation_Response>>>;
  /** update data of the table: "restore_codes" */
  update_restore_codes?: Maybe<Restore_Codes_Mutation_Response>;
  /** update single row of the table: "restore_codes" */
  update_restore_codes_by_pk?: Maybe<Restore_Codes>;
  /** update data of the table: "restore_codes_enum" */
  update_restore_codes_enum?: Maybe<Restore_Codes_Enum_Mutation_Response>;
  /** update single row of the table: "restore_codes_enum" */
  update_restore_codes_enum_by_pk?: Maybe<Restore_Codes_Enum>;
  /** update multiples rows of table: "restore_codes_enum" */
  update_restore_codes_enum_many?: Maybe<Array<Maybe<Restore_Codes_Enum_Mutation_Response>>>;
  /** update multiples rows of table: "restore_codes" */
  update_restore_codes_many?: Maybe<Array<Maybe<Restore_Codes_Mutation_Response>>>;
  /** update data of the table: "ritual_type_enum" */
  update_ritual_type_enum?: Maybe<Ritual_Type_Enum_Mutation_Response>;
  /** update single row of the table: "ritual_type_enum" */
  update_ritual_type_enum_by_pk?: Maybe<Ritual_Type_Enum>;
  /** update multiples rows of table: "ritual_type_enum" */
  update_ritual_type_enum_many?: Maybe<Array<Maybe<Ritual_Type_Enum_Mutation_Response>>>;
  /** update data of the table: "sprints" */
  update_sprints?: Maybe<Sprints_Mutation_Response>;
  /** update single row of the table: "sprints" */
  update_sprints_by_pk?: Maybe<Sprints>;
  /** update multiples rows of table: "sprints" */
  update_sprints_many?: Maybe<Array<Maybe<Sprints_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AchievementsArgs = {
  where: Achievements_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Achievements_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_AddonsArgs = {
  where: Addons_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Addons_By_PkArgs = {
  addon: Scalars['String']['input'];
  owner_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Addons_EnumArgs = {
  where: Addons_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Addons_Enum_By_PkArgs = {
  addon: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Goal_Difficulty_EnumArgs = {
  where: Goal_Difficulty_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Goal_Difficulty_Enum_By_PkArgs = {
  difficulty: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Goal_Status_EnumArgs = {
  where: Goal_Status_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Goal_Status_Enum_By_PkArgs = {
  status: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_GoalsArgs = {
  where: Goals_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Goals_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Goals_RitualsArgs = {
  where: Goals_Rituals_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Goals_Rituals_By_PkArgs = {
  goal_id: Scalars['uuid']['input'];
  ritual_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Goals_SlidesArgs = {
  where: Goals_Slides_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Goals_Slides_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_HeroesArgs = {
  where: Heroes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Heroes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Heroes_RolesArgs = {
  where: Heroes_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Heroes_Roles_By_PkArgs = {
  role: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Heroes_TokensArgs = {
  where: Heroes_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Heroes_Tokens_By_PkArgs = {
  session_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_NotepadArgs = {
  where: Notepad_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Notepad_By_PkArgs = {
  owner_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_NotesArgs = {
  where: Notes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Notes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Notes_LabelsArgs = {
  where: Notes_Labels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Notes_Labels_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Privacy_EnumArgs = {
  where: Privacy_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Privacy_Enum_By_PkArgs = {
  privacy: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Restore_CodesArgs = {
  where: Restore_Codes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Restore_Codes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Restore_Codes_EnumArgs = {
  where: Restore_Codes_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Restore_Codes_Enum_By_PkArgs = {
  type: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Ritual_Type_EnumArgs = {
  where: Ritual_Type_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ritual_Type_Enum_By_PkArgs = {
  ritual_type: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SprintsArgs = {
  where: Sprints_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sprints_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_AchievementsArgs = {
  objects: Array<Achievements_Insert_Input>;
  on_conflict?: InputMaybe<Achievements_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Achievements_OneArgs = {
  object: Achievements_Insert_Input;
  on_conflict?: InputMaybe<Achievements_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_AddonsArgs = {
  objects: Array<Addons_Insert_Input>;
  on_conflict?: InputMaybe<Addons_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Addons_EnumArgs = {
  objects: Array<Addons_Enum_Insert_Input>;
  on_conflict?: InputMaybe<Addons_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Addons_Enum_OneArgs = {
  object: Addons_Enum_Insert_Input;
  on_conflict?: InputMaybe<Addons_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Addons_OneArgs = {
  object: Addons_Insert_Input;
  on_conflict?: InputMaybe<Addons_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Goal_Difficulty_EnumArgs = {
  objects: Array<Goal_Difficulty_Enum_Insert_Input>;
  on_conflict?: InputMaybe<Goal_Difficulty_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Goal_Difficulty_Enum_OneArgs = {
  object: Goal_Difficulty_Enum_Insert_Input;
  on_conflict?: InputMaybe<Goal_Difficulty_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Goal_Status_EnumArgs = {
  objects: Array<Goal_Status_Enum_Insert_Input>;
  on_conflict?: InputMaybe<Goal_Status_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Goal_Status_Enum_OneArgs = {
  object: Goal_Status_Enum_Insert_Input;
  on_conflict?: InputMaybe<Goal_Status_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GoalsArgs = {
  objects: Array<Goals_Insert_Input>;
  on_conflict?: InputMaybe<Goals_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Goals_OneArgs = {
  object: Goals_Insert_Input;
  on_conflict?: InputMaybe<Goals_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Goals_RitualsArgs = {
  objects: Array<Goals_Rituals_Insert_Input>;
  on_conflict?: InputMaybe<Goals_Rituals_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Goals_Rituals_OneArgs = {
  object: Goals_Rituals_Insert_Input;
  on_conflict?: InputMaybe<Goals_Rituals_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Goals_SlidesArgs = {
  objects: Array<Goals_Slides_Insert_Input>;
  on_conflict?: InputMaybe<Goals_Slides_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Goals_Slides_OneArgs = {
  object: Goals_Slides_Insert_Input;
  on_conflict?: InputMaybe<Goals_Slides_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_HeroesArgs = {
  objects: Array<Heroes_Insert_Input>;
  on_conflict?: InputMaybe<Heroes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Heroes_OneArgs = {
  object: Heroes_Insert_Input;
  on_conflict?: InputMaybe<Heroes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Heroes_RolesArgs = {
  objects: Array<Heroes_Roles_Insert_Input>;
  on_conflict?: InputMaybe<Heroes_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Heroes_Roles_OneArgs = {
  object: Heroes_Roles_Insert_Input;
  on_conflict?: InputMaybe<Heroes_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Heroes_TokensArgs = {
  objects: Array<Heroes_Tokens_Insert_Input>;
  on_conflict?: InputMaybe<Heroes_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Heroes_Tokens_OneArgs = {
  object: Heroes_Tokens_Insert_Input;
  on_conflict?: InputMaybe<Heroes_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_NotepadArgs = {
  objects: Array<Notepad_Insert_Input>;
  on_conflict?: InputMaybe<Notepad_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notepad_OneArgs = {
  object: Notepad_Insert_Input;
  on_conflict?: InputMaybe<Notepad_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_NotesArgs = {
  objects: Array<Notes_Insert_Input>;
  on_conflict?: InputMaybe<Notes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notes_LabelsArgs = {
  objects: Array<Notes_Labels_Insert_Input>;
  on_conflict?: InputMaybe<Notes_Labels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notes_Labels_OneArgs = {
  object: Notes_Labels_Insert_Input;
  on_conflict?: InputMaybe<Notes_Labels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notes_OneArgs = {
  object: Notes_Insert_Input;
  on_conflict?: InputMaybe<Notes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Privacy_EnumArgs = {
  objects: Array<Privacy_Enum_Insert_Input>;
  on_conflict?: InputMaybe<Privacy_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Privacy_Enum_OneArgs = {
  object: Privacy_Enum_Insert_Input;
  on_conflict?: InputMaybe<Privacy_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Restore_CodesArgs = {
  objects: Array<Restore_Codes_Insert_Input>;
  on_conflict?: InputMaybe<Restore_Codes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Restore_Codes_EnumArgs = {
  objects: Array<Restore_Codes_Enum_Insert_Input>;
  on_conflict?: InputMaybe<Restore_Codes_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Restore_Codes_Enum_OneArgs = {
  object: Restore_Codes_Enum_Insert_Input;
  on_conflict?: InputMaybe<Restore_Codes_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Restore_Codes_OneArgs = {
  object: Restore_Codes_Insert_Input;
  on_conflict?: InputMaybe<Restore_Codes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ritual_Type_EnumArgs = {
  objects: Array<Ritual_Type_Enum_Insert_Input>;
  on_conflict?: InputMaybe<Ritual_Type_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ritual_Type_Enum_OneArgs = {
  object: Ritual_Type_Enum_Insert_Input;
  on_conflict?: InputMaybe<Ritual_Type_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SprintsArgs = {
  objects: Array<Sprints_Insert_Input>;
  on_conflict?: InputMaybe<Sprints_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sprints_OneArgs = {
  object: Sprints_Insert_Input;
  on_conflict?: InputMaybe<Sprints_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AchievementsArgs = {
  _set?: InputMaybe<Achievements_Set_Input>;
  where: Achievements_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Achievements_By_PkArgs = {
  _set?: InputMaybe<Achievements_Set_Input>;
  pk_columns: Achievements_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Achievements_ManyArgs = {
  updates: Array<Achievements_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AddonsArgs = {
  _set?: InputMaybe<Addons_Set_Input>;
  where: Addons_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Addons_By_PkArgs = {
  _set?: InputMaybe<Addons_Set_Input>;
  pk_columns: Addons_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Addons_EnumArgs = {
  _set?: InputMaybe<Addons_Enum_Set_Input>;
  where: Addons_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Addons_Enum_By_PkArgs = {
  _set?: InputMaybe<Addons_Enum_Set_Input>;
  pk_columns: Addons_Enum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Addons_Enum_ManyArgs = {
  updates: Array<Addons_Enum_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Addons_ManyArgs = {
  updates: Array<Addons_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Goal_Difficulty_EnumArgs = {
  _set?: InputMaybe<Goal_Difficulty_Enum_Set_Input>;
  where: Goal_Difficulty_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Goal_Difficulty_Enum_By_PkArgs = {
  _set?: InputMaybe<Goal_Difficulty_Enum_Set_Input>;
  pk_columns: Goal_Difficulty_Enum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Goal_Difficulty_Enum_ManyArgs = {
  updates: Array<Goal_Difficulty_Enum_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Goal_Status_EnumArgs = {
  _set?: InputMaybe<Goal_Status_Enum_Set_Input>;
  where: Goal_Status_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Goal_Status_Enum_By_PkArgs = {
  _set?: InputMaybe<Goal_Status_Enum_Set_Input>;
  pk_columns: Goal_Status_Enum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Goal_Status_Enum_ManyArgs = {
  updates: Array<Goal_Status_Enum_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GoalsArgs = {
  _set?: InputMaybe<Goals_Set_Input>;
  where: Goals_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Goals_By_PkArgs = {
  _set?: InputMaybe<Goals_Set_Input>;
  pk_columns: Goals_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Goals_ManyArgs = {
  updates: Array<Goals_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Goals_RitualsArgs = {
  _inc?: InputMaybe<Goals_Rituals_Inc_Input>;
  _set?: InputMaybe<Goals_Rituals_Set_Input>;
  where: Goals_Rituals_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Goals_Rituals_By_PkArgs = {
  _inc?: InputMaybe<Goals_Rituals_Inc_Input>;
  _set?: InputMaybe<Goals_Rituals_Set_Input>;
  pk_columns: Goals_Rituals_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Goals_Rituals_ManyArgs = {
  updates: Array<Goals_Rituals_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Goals_SlidesArgs = {
  _set?: InputMaybe<Goals_Slides_Set_Input>;
  where: Goals_Slides_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Goals_Slides_By_PkArgs = {
  _set?: InputMaybe<Goals_Slides_Set_Input>;
  pk_columns: Goals_Slides_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Goals_Slides_ManyArgs = {
  updates: Array<Goals_Slides_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_HeroesArgs = {
  _inc?: InputMaybe<Heroes_Inc_Input>;
  _set?: InputMaybe<Heroes_Set_Input>;
  where: Heroes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Heroes_By_PkArgs = {
  _inc?: InputMaybe<Heroes_Inc_Input>;
  _set?: InputMaybe<Heroes_Set_Input>;
  pk_columns: Heroes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Heroes_ManyArgs = {
  updates: Array<Heroes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Heroes_RolesArgs = {
  _set?: InputMaybe<Heroes_Roles_Set_Input>;
  where: Heroes_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Heroes_Roles_By_PkArgs = {
  _set?: InputMaybe<Heroes_Roles_Set_Input>;
  pk_columns: Heroes_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Heroes_Roles_ManyArgs = {
  updates: Array<Heroes_Roles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Heroes_TokensArgs = {
  _set?: InputMaybe<Heroes_Tokens_Set_Input>;
  where: Heroes_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Heroes_Tokens_By_PkArgs = {
  _set?: InputMaybe<Heroes_Tokens_Set_Input>;
  pk_columns: Heroes_Tokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Heroes_Tokens_ManyArgs = {
  updates: Array<Heroes_Tokens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_NotepadArgs = {
  _set?: InputMaybe<Notepad_Set_Input>;
  where: Notepad_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Notepad_By_PkArgs = {
  _set?: InputMaybe<Notepad_Set_Input>;
  pk_columns: Notepad_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Notepad_ManyArgs = {
  updates: Array<Notepad_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_NotesArgs = {
  _set?: InputMaybe<Notes_Set_Input>;
  where: Notes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Notes_By_PkArgs = {
  _set?: InputMaybe<Notes_Set_Input>;
  pk_columns: Notes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Notes_LabelsArgs = {
  _inc?: InputMaybe<Notes_Labels_Inc_Input>;
  _set?: InputMaybe<Notes_Labels_Set_Input>;
  where: Notes_Labels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Notes_Labels_By_PkArgs = {
  _inc?: InputMaybe<Notes_Labels_Inc_Input>;
  _set?: InputMaybe<Notes_Labels_Set_Input>;
  pk_columns: Notes_Labels_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Notes_Labels_ManyArgs = {
  updates: Array<Notes_Labels_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Notes_ManyArgs = {
  updates: Array<Notes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Privacy_EnumArgs = {
  _set?: InputMaybe<Privacy_Enum_Set_Input>;
  where: Privacy_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Privacy_Enum_By_PkArgs = {
  _set?: InputMaybe<Privacy_Enum_Set_Input>;
  pk_columns: Privacy_Enum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Privacy_Enum_ManyArgs = {
  updates: Array<Privacy_Enum_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Restore_CodesArgs = {
  _set?: InputMaybe<Restore_Codes_Set_Input>;
  where: Restore_Codes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Restore_Codes_By_PkArgs = {
  _set?: InputMaybe<Restore_Codes_Set_Input>;
  pk_columns: Restore_Codes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Restore_Codes_EnumArgs = {
  _set?: InputMaybe<Restore_Codes_Enum_Set_Input>;
  where: Restore_Codes_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Restore_Codes_Enum_By_PkArgs = {
  _set?: InputMaybe<Restore_Codes_Enum_Set_Input>;
  pk_columns: Restore_Codes_Enum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Restore_Codes_Enum_ManyArgs = {
  updates: Array<Restore_Codes_Enum_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Restore_Codes_ManyArgs = {
  updates: Array<Restore_Codes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Ritual_Type_EnumArgs = {
  _set?: InputMaybe<Ritual_Type_Enum_Set_Input>;
  where: Ritual_Type_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ritual_Type_Enum_By_PkArgs = {
  _set?: InputMaybe<Ritual_Type_Enum_Set_Input>;
  pk_columns: Ritual_Type_Enum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ritual_Type_Enum_ManyArgs = {
  updates: Array<Ritual_Type_Enum_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SprintsArgs = {
  _append?: InputMaybe<Sprints_Append_Input>;
  _delete_at_path?: InputMaybe<Sprints_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Sprints_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Sprints_Delete_Key_Input>;
  _inc?: InputMaybe<Sprints_Inc_Input>;
  _prepend?: InputMaybe<Sprints_Prepend_Input>;
  _set?: InputMaybe<Sprints_Set_Input>;
  where: Sprints_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sprints_By_PkArgs = {
  _append?: InputMaybe<Sprints_Append_Input>;
  _delete_at_path?: InputMaybe<Sprints_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Sprints_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Sprints_Delete_Key_Input>;
  _inc?: InputMaybe<Sprints_Inc_Input>;
  _prepend?: InputMaybe<Sprints_Prepend_Input>;
  _set?: InputMaybe<Sprints_Set_Input>;
  pk_columns: Sprints_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Sprints_ManyArgs = {
  updates: Array<Sprints_Updates>;
};

/** real time info */
export type Notepad = {
  __typename?: 'notepad';
  active: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  /** An object relationship */
  hero: Heroes;
  id: Scalars['uuid']['output'];
  locked: Scalars['Boolean']['output'];
  owner_id: Scalars['uuid']['output'];
};

/** aggregated selection of "notepad" */
export type Notepad_Aggregate = {
  __typename?: 'notepad_aggregate';
  aggregate?: Maybe<Notepad_Aggregate_Fields>;
  nodes: Array<Notepad>;
};

/** aggregate fields of "notepad" */
export type Notepad_Aggregate_Fields = {
  __typename?: 'notepad_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Notepad_Max_Fields>;
  min?: Maybe<Notepad_Min_Fields>;
};


/** aggregate fields of "notepad" */
export type Notepad_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Notepad_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "notepad". All fields are combined with a logical 'AND'. */
export type Notepad_Bool_Exp = {
  _and?: InputMaybe<Array<Notepad_Bool_Exp>>;
  _not?: InputMaybe<Notepad_Bool_Exp>;
  _or?: InputMaybe<Array<Notepad_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  hero?: InputMaybe<Heroes_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  locked?: InputMaybe<Boolean_Comparison_Exp>;
  owner_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "notepad" */
export enum Notepad_Constraint {
  /** unique or primary key constraint on columns "owner_id" */
  NotepadPkey = 'notepad_pkey'
}

/** input type for inserting data into table "notepad" */
export type Notepad_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  hero?: InputMaybe<Heroes_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Notepad_Max_Fields = {
  __typename?: 'notepad_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Notepad_Min_Fields = {
  __typename?: 'notepad_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "notepad" */
export type Notepad_Mutation_Response = {
  __typename?: 'notepad_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Notepad>;
};

/** input type for inserting object relation for remote table "notepad" */
export type Notepad_Obj_Rel_Insert_Input = {
  data: Notepad_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Notepad_On_Conflict>;
};

/** on_conflict condition type for table "notepad" */
export type Notepad_On_Conflict = {
  constraint: Notepad_Constraint;
  update_columns?: Array<Notepad_Update_Column>;
  where?: InputMaybe<Notepad_Bool_Exp>;
};

/** Ordering options when selecting data from "notepad". */
export type Notepad_Order_By = {
  active?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  hero?: InputMaybe<Heroes_Order_By>;
  id?: InputMaybe<Order_By>;
  locked?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: notepad */
export type Notepad_Pk_Columns_Input = {
  owner_id: Scalars['uuid']['input'];
};

/** select columns of table "notepad" */
export enum Notepad_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Locked = 'locked',
  /** column name */
  OwnerId = 'owner_id'
}

/** input type for updating data in table "notepad" */
export type Notepad_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "notepad" */
export type Notepad_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Notepad_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Notepad_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "notepad" */
export enum Notepad_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Locked = 'locked',
  /** column name */
  OwnerId = 'owner_id'
}

export type Notepad_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Notepad_Set_Input>;
  /** filter the rows which have to be updated */
  where: Notepad_Bool_Exp;
};

/** columns and relationships of "notes" */
export type Notes = {
  __typename?: 'notes';
  archived?: Maybe<Scalars['Boolean']['output']>;
  created_at: Scalars['timestamptz']['output'];
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description: Scalars['String']['output'];
  /** An object relationship */
  hero?: Maybe<Heroes>;
  id: Scalars['uuid']['output'];
  is_favorite?: Maybe<Scalars['Boolean']['output']>;
  /** An object relationship */
  label?: Maybe<Notes_Labels>;
  label_id?: Maybe<Scalars['uuid']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "notes" */
export type Notes_Aggregate = {
  __typename?: 'notes_aggregate';
  aggregate?: Maybe<Notes_Aggregate_Fields>;
  nodes: Array<Notes>;
};

export type Notes_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Notes_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Notes_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Notes_Aggregate_Bool_Exp_Count>;
};

export type Notes_Aggregate_Bool_Exp_Bool_And = {
  arguments: Notes_Select_Column_Notes_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Notes_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Notes_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Notes_Select_Column_Notes_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Notes_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Notes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Notes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Notes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "notes" */
export type Notes_Aggregate_Fields = {
  __typename?: 'notes_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Notes_Max_Fields>;
  min?: Maybe<Notes_Min_Fields>;
};


/** aggregate fields of "notes" */
export type Notes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Notes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "notes" */
export type Notes_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Notes_Max_Order_By>;
  min?: InputMaybe<Notes_Min_Order_By>;
};

/** input type for inserting array relation for remote table "notes" */
export type Notes_Arr_Rel_Insert_Input = {
  data: Array<Notes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Notes_On_Conflict>;
};

/** Boolean expression to filter rows from the table "notes". All fields are combined with a logical 'AND'. */
export type Notes_Bool_Exp = {
  _and?: InputMaybe<Array<Notes_Bool_Exp>>;
  _not?: InputMaybe<Notes_Bool_Exp>;
  _or?: InputMaybe<Array<Notes_Bool_Exp>>;
  archived?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  hero?: InputMaybe<Heroes_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_favorite?: InputMaybe<Boolean_Comparison_Exp>;
  label?: InputMaybe<Notes_Labels_Bool_Exp>;
  label_id?: InputMaybe<Uuid_Comparison_Exp>;
  owner_id?: InputMaybe<Uuid_Comparison_Exp>;
  tag?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "notes" */
export enum Notes_Constraint {
  /** unique or primary key constraint on columns "id" */
  TasksPkey = 'tasks_pkey'
}

/** input type for inserting data into table "notes" */
export type Notes_Insert_Input = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  hero?: InputMaybe<Heroes_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Notes_Labels_Obj_Rel_Insert_Input>;
  label_id?: InputMaybe<Scalars['uuid']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** columns and relationships of "notes_labels" */
export type Notes_Labels = {
  __typename?: 'notes_labels';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  owner_id: Scalars['uuid']['output'];
  rating: Scalars['Int']['output'];
};

/** aggregated selection of "notes_labels" */
export type Notes_Labels_Aggregate = {
  __typename?: 'notes_labels_aggregate';
  aggregate?: Maybe<Notes_Labels_Aggregate_Fields>;
  nodes: Array<Notes_Labels>;
};

/** aggregate fields of "notes_labels" */
export type Notes_Labels_Aggregate_Fields = {
  __typename?: 'notes_labels_aggregate_fields';
  avg?: Maybe<Notes_Labels_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Notes_Labels_Max_Fields>;
  min?: Maybe<Notes_Labels_Min_Fields>;
  stddev?: Maybe<Notes_Labels_Stddev_Fields>;
  stddev_pop?: Maybe<Notes_Labels_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Notes_Labels_Stddev_Samp_Fields>;
  sum?: Maybe<Notes_Labels_Sum_Fields>;
  var_pop?: Maybe<Notes_Labels_Var_Pop_Fields>;
  var_samp?: Maybe<Notes_Labels_Var_Samp_Fields>;
  variance?: Maybe<Notes_Labels_Variance_Fields>;
};


/** aggregate fields of "notes_labels" */
export type Notes_Labels_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Notes_Labels_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Notes_Labels_Avg_Fields = {
  __typename?: 'notes_labels_avg_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "notes_labels". All fields are combined with a logical 'AND'. */
export type Notes_Labels_Bool_Exp = {
  _and?: InputMaybe<Array<Notes_Labels_Bool_Exp>>;
  _not?: InputMaybe<Notes_Labels_Bool_Exp>;
  _or?: InputMaybe<Array<Notes_Labels_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  owner_id?: InputMaybe<Uuid_Comparison_Exp>;
  rating?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "notes_labels" */
export enum Notes_Labels_Constraint {
  /** unique or primary key constraint on columns "id" */
  NotesLabelsPkey = 'notes_labels_pkey'
}

/** input type for incrementing numeric columns in table "notes_labels" */
export type Notes_Labels_Inc_Input = {
  rating?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "notes_labels" */
export type Notes_Labels_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Notes_Labels_Max_Fields = {
  __typename?: 'notes_labels_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Notes_Labels_Min_Fields = {
  __typename?: 'notes_labels_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "notes_labels" */
export type Notes_Labels_Mutation_Response = {
  __typename?: 'notes_labels_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Notes_Labels>;
};

/** input type for inserting object relation for remote table "notes_labels" */
export type Notes_Labels_Obj_Rel_Insert_Input = {
  data: Notes_Labels_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Notes_Labels_On_Conflict>;
};

/** on_conflict condition type for table "notes_labels" */
export type Notes_Labels_On_Conflict = {
  constraint: Notes_Labels_Constraint;
  update_columns?: Array<Notes_Labels_Update_Column>;
  where?: InputMaybe<Notes_Labels_Bool_Exp>;
};

/** Ordering options when selecting data from "notes_labels". */
export type Notes_Labels_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** primary key columns input for table: notes_labels */
export type Notes_Labels_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "notes_labels" */
export enum Notes_Labels_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Rating = 'rating'
}

/** input type for updating data in table "notes_labels" */
export type Notes_Labels_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Notes_Labels_Stddev_Fields = {
  __typename?: 'notes_labels_stddev_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Notes_Labels_Stddev_Pop_Fields = {
  __typename?: 'notes_labels_stddev_pop_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Notes_Labels_Stddev_Samp_Fields = {
  __typename?: 'notes_labels_stddev_samp_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "notes_labels" */
export type Notes_Labels_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Notes_Labels_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Notes_Labels_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Notes_Labels_Sum_Fields = {
  __typename?: 'notes_labels_sum_fields';
  rating?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "notes_labels" */
export enum Notes_Labels_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Rating = 'rating'
}

export type Notes_Labels_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Notes_Labels_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Notes_Labels_Set_Input>;
  /** filter the rows which have to be updated */
  where: Notes_Labels_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Notes_Labels_Var_Pop_Fields = {
  __typename?: 'notes_labels_var_pop_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Notes_Labels_Var_Samp_Fields = {
  __typename?: 'notes_labels_var_samp_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Notes_Labels_Variance_Fields = {
  __typename?: 'notes_labels_variance_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** aggregate max on columns */
export type Notes_Max_Fields = {
  __typename?: 'notes_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  label_id?: Maybe<Scalars['uuid']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "notes" */
export type Notes_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  label_id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  tag?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Notes_Min_Fields = {
  __typename?: 'notes_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  label_id?: Maybe<Scalars['uuid']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "notes" */
export type Notes_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  label_id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  tag?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "notes" */
export type Notes_Mutation_Response = {
  __typename?: 'notes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Notes>;
};

/** on_conflict condition type for table "notes" */
export type Notes_On_Conflict = {
  constraint: Notes_Constraint;
  update_columns?: Array<Notes_Update_Column>;
  where?: InputMaybe<Notes_Bool_Exp>;
};

/** Ordering options when selecting data from "notes". */
export type Notes_Order_By = {
  archived?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  hero?: InputMaybe<Heroes_Order_By>;
  id?: InputMaybe<Order_By>;
  is_favorite?: InputMaybe<Order_By>;
  label?: InputMaybe<Notes_Labels_Order_By>;
  label_id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  tag?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: notes */
export type Notes_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "notes" */
export enum Notes_Select_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsFavorite = 'is_favorite',
  /** column name */
  LabelId = 'label_id',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Tag = 'tag',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "notes_aggregate_bool_exp_bool_and_arguments_columns" columns of table "notes" */
export enum Notes_Select_Column_Notes_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Archived = 'archived',
  /** column name */
  IsFavorite = 'is_favorite'
}

/** select "notes_aggregate_bool_exp_bool_or_arguments_columns" columns of table "notes" */
export enum Notes_Select_Column_Notes_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Archived = 'archived',
  /** column name */
  IsFavorite = 'is_favorite'
}

/** input type for updating data in table "notes" */
export type Notes_Set_Input = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  label_id?: InputMaybe<Scalars['uuid']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "notes" */
export type Notes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Notes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Notes_Stream_Cursor_Value_Input = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  label_id?: InputMaybe<Scalars['uuid']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "notes" */
export enum Notes_Update_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsFavorite = 'is_favorite',
  /** column name */
  LabelId = 'label_id',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Tag = 'tag',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Notes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Notes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Notes_Bool_Exp;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** privacy status */
export type Privacy_Enum = {
  __typename?: 'privacy_enum';
  description: Scalars['String']['output'];
  /** An array relationship */
  goals: Array<Goals>;
  /** An aggregate relationship */
  goals_aggregate: Goals_Aggregate;
  privacy: Scalars['String']['output'];
};


/** privacy status */
export type Privacy_EnumGoalsArgs = {
  distinct_on?: InputMaybe<Array<Goals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Order_By>>;
  where?: InputMaybe<Goals_Bool_Exp>;
};


/** privacy status */
export type Privacy_EnumGoals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Order_By>>;
  where?: InputMaybe<Goals_Bool_Exp>;
};

/** aggregated selection of "privacy_enum" */
export type Privacy_Enum_Aggregate = {
  __typename?: 'privacy_enum_aggregate';
  aggregate?: Maybe<Privacy_Enum_Aggregate_Fields>;
  nodes: Array<Privacy_Enum>;
};

/** aggregate fields of "privacy_enum" */
export type Privacy_Enum_Aggregate_Fields = {
  __typename?: 'privacy_enum_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Privacy_Enum_Max_Fields>;
  min?: Maybe<Privacy_Enum_Min_Fields>;
};


/** aggregate fields of "privacy_enum" */
export type Privacy_Enum_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Privacy_Enum_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "privacy_enum". All fields are combined with a logical 'AND'. */
export type Privacy_Enum_Bool_Exp = {
  _and?: InputMaybe<Array<Privacy_Enum_Bool_Exp>>;
  _not?: InputMaybe<Privacy_Enum_Bool_Exp>;
  _or?: InputMaybe<Array<Privacy_Enum_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  goals?: InputMaybe<Goals_Bool_Exp>;
  goals_aggregate?: InputMaybe<Goals_Aggregate_Bool_Exp>;
  privacy?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "privacy_enum" */
export enum Privacy_Enum_Constraint {
  /** unique or primary key constraint on columns "privacy" */
  PrivacyEnumPkey = 'privacy_enum_pkey'
}

/** input type for inserting data into table "privacy_enum" */
export type Privacy_Enum_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  goals?: InputMaybe<Goals_Arr_Rel_Insert_Input>;
  privacy?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Privacy_Enum_Max_Fields = {
  __typename?: 'privacy_enum_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  privacy?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Privacy_Enum_Min_Fields = {
  __typename?: 'privacy_enum_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  privacy?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "privacy_enum" */
export type Privacy_Enum_Mutation_Response = {
  __typename?: 'privacy_enum_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Privacy_Enum>;
};

/** input type for inserting object relation for remote table "privacy_enum" */
export type Privacy_Enum_Obj_Rel_Insert_Input = {
  data: Privacy_Enum_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Privacy_Enum_On_Conflict>;
};

/** on_conflict condition type for table "privacy_enum" */
export type Privacy_Enum_On_Conflict = {
  constraint: Privacy_Enum_Constraint;
  update_columns?: Array<Privacy_Enum_Update_Column>;
  where?: InputMaybe<Privacy_Enum_Bool_Exp>;
};

/** Ordering options when selecting data from "privacy_enum". */
export type Privacy_Enum_Order_By = {
  description?: InputMaybe<Order_By>;
  goals_aggregate?: InputMaybe<Goals_Aggregate_Order_By>;
  privacy?: InputMaybe<Order_By>;
};

/** primary key columns input for table: privacy_enum */
export type Privacy_Enum_Pk_Columns_Input = {
  privacy: Scalars['String']['input'];
};

/** select columns of table "privacy_enum" */
export enum Privacy_Enum_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Privacy = 'privacy'
}

/** input type for updating data in table "privacy_enum" */
export type Privacy_Enum_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  privacy?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "privacy_enum" */
export type Privacy_Enum_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Privacy_Enum_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Privacy_Enum_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  privacy?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "privacy_enum" */
export enum Privacy_Enum_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Privacy = 'privacy'
}

export type Privacy_Enum_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Privacy_Enum_Set_Input>;
  /** filter the rows which have to be updated */
  where: Privacy_Enum_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  achievements: Array<Achievements>;
  /** An aggregate relationship */
  achievements_aggregate: Achievements_Aggregate;
  /** fetch data from the table: "achievements" using primary key columns */
  achievements_by_pk?: Maybe<Achievements>;
  /** An array relationship */
  addons: Array<Addons>;
  /** An aggregate relationship */
  addons_aggregate: Addons_Aggregate;
  /** fetch data from the table: "addons" using primary key columns */
  addons_by_pk?: Maybe<Addons>;
  /** fetch data from the table: "addons_enum" */
  addons_enum: Array<Addons_Enum>;
  /** fetch aggregated fields from the table: "addons_enum" */
  addons_enum_aggregate: Addons_Enum_Aggregate;
  /** fetch data from the table: "addons_enum" using primary key columns */
  addons_enum_by_pk?: Maybe<Addons_Enum>;
  /** fetch data from the table: "goal_difficulty_enum" */
  goal_difficulty_enum: Array<Goal_Difficulty_Enum>;
  /** fetch aggregated fields from the table: "goal_difficulty_enum" */
  goal_difficulty_enum_aggregate: Goal_Difficulty_Enum_Aggregate;
  /** fetch data from the table: "goal_difficulty_enum" using primary key columns */
  goal_difficulty_enum_by_pk?: Maybe<Goal_Difficulty_Enum>;
  /** fetch data from the table: "goal_status_enum" */
  goal_status_enum: Array<Goal_Status_Enum>;
  /** fetch aggregated fields from the table: "goal_status_enum" */
  goal_status_enum_aggregate: Goal_Status_Enum_Aggregate;
  /** fetch data from the table: "goal_status_enum" using primary key columns */
  goal_status_enum_by_pk?: Maybe<Goal_Status_Enum>;
  /** An array relationship */
  goals: Array<Goals>;
  /** An aggregate relationship */
  goals_aggregate: Goals_Aggregate;
  /** fetch data from the table: "goals" using primary key columns */
  goals_by_pk?: Maybe<Goals>;
  /** An array relationship */
  goals_rituals: Array<Goals_Rituals>;
  /** An aggregate relationship */
  goals_rituals_aggregate: Goals_Rituals_Aggregate;
  /** fetch data from the table: "goals_rituals" using primary key columns */
  goals_rituals_by_pk?: Maybe<Goals_Rituals>;
  /** An array relationship */
  goals_slides: Array<Goals_Slides>;
  /** An aggregate relationship */
  goals_slides_aggregate: Goals_Slides_Aggregate;
  /** fetch data from the table: "goals_slides" using primary key columns */
  goals_slides_by_pk?: Maybe<Goals_Slides>;
  /** An array relationship */
  heroes: Array<Heroes>;
  /** An aggregate relationship */
  heroes_aggregate: Heroes_Aggregate;
  /** fetch data from the table: "heroes" using primary key columns */
  heroes_by_pk?: Maybe<Heroes>;
  /** fetch data from the table: "heroes_roles" */
  heroes_roles: Array<Heroes_Roles>;
  /** fetch aggregated fields from the table: "heroes_roles" */
  heroes_roles_aggregate: Heroes_Roles_Aggregate;
  /** fetch data from the table: "heroes_roles" using primary key columns */
  heroes_roles_by_pk?: Maybe<Heroes_Roles>;
  /** fetch data from the table: "heroes_tokens" */
  heroes_tokens: Array<Heroes_Tokens>;
  /** fetch aggregated fields from the table: "heroes_tokens" */
  heroes_tokens_aggregate: Heroes_Tokens_Aggregate;
  /** fetch data from the table: "heroes_tokens" using primary key columns */
  heroes_tokens_by_pk?: Maybe<Heroes_Tokens>;
  /** fetch data from the table: "notepad" */
  notepad: Array<Notepad>;
  /** fetch aggregated fields from the table: "notepad" */
  notepad_aggregate: Notepad_Aggregate;
  /** fetch data from the table: "notepad" using primary key columns */
  notepad_by_pk?: Maybe<Notepad>;
  /** An array relationship */
  notes: Array<Notes>;
  /** An aggregate relationship */
  notes_aggregate: Notes_Aggregate;
  /** fetch data from the table: "notes" using primary key columns */
  notes_by_pk?: Maybe<Notes>;
  /** fetch data from the table: "notes_labels" */
  notes_labels: Array<Notes_Labels>;
  /** fetch aggregated fields from the table: "notes_labels" */
  notes_labels_aggregate: Notes_Labels_Aggregate;
  /** fetch data from the table: "notes_labels" using primary key columns */
  notes_labels_by_pk?: Maybe<Notes_Labels>;
  /** fetch data from the table: "privacy_enum" */
  privacy_enum: Array<Privacy_Enum>;
  /** fetch aggregated fields from the table: "privacy_enum" */
  privacy_enum_aggregate: Privacy_Enum_Aggregate;
  /** fetch data from the table: "privacy_enum" using primary key columns */
  privacy_enum_by_pk?: Maybe<Privacy_Enum>;
  /** fetch data from the table: "restore_codes" */
  restore_codes: Array<Restore_Codes>;
  /** fetch aggregated fields from the table: "restore_codes" */
  restore_codes_aggregate: Restore_Codes_Aggregate;
  /** fetch data from the table: "restore_codes" using primary key columns */
  restore_codes_by_pk?: Maybe<Restore_Codes>;
  /** fetch data from the table: "restore_codes_enum" */
  restore_codes_enum: Array<Restore_Codes_Enum>;
  /** fetch aggregated fields from the table: "restore_codes_enum" */
  restore_codes_enum_aggregate: Restore_Codes_Enum_Aggregate;
  /** fetch data from the table: "restore_codes_enum" using primary key columns */
  restore_codes_enum_by_pk?: Maybe<Restore_Codes_Enum>;
  /** fetch data from the table: "ritual_type_enum" */
  ritual_type_enum: Array<Ritual_Type_Enum>;
  /** fetch aggregated fields from the table: "ritual_type_enum" */
  ritual_type_enum_aggregate: Ritual_Type_Enum_Aggregate;
  /** fetch data from the table: "ritual_type_enum" using primary key columns */
  ritual_type_enum_by_pk?: Maybe<Ritual_Type_Enum>;
  /** An array relationship */
  sprints: Array<Sprints>;
  /** An aggregate relationship */
  sprints_aggregate: Sprints_Aggregate;
  /** fetch data from the table: "sprints" using primary key columns */
  sprints_by_pk?: Maybe<Sprints>;
};


export type Query_RootAchievementsArgs = {
  distinct_on?: InputMaybe<Array<Achievements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Achievements_Order_By>>;
  where?: InputMaybe<Achievements_Bool_Exp>;
};


export type Query_RootAchievements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Achievements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Achievements_Order_By>>;
  where?: InputMaybe<Achievements_Bool_Exp>;
};


export type Query_RootAchievements_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAddonsArgs = {
  distinct_on?: InputMaybe<Array<Addons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Addons_Order_By>>;
  where?: InputMaybe<Addons_Bool_Exp>;
};


export type Query_RootAddons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Addons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Addons_Order_By>>;
  where?: InputMaybe<Addons_Bool_Exp>;
};


export type Query_RootAddons_By_PkArgs = {
  addon: Scalars['String']['input'];
  owner_id: Scalars['uuid']['input'];
};


export type Query_RootAddons_EnumArgs = {
  distinct_on?: InputMaybe<Array<Addons_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Addons_Enum_Order_By>>;
  where?: InputMaybe<Addons_Enum_Bool_Exp>;
};


export type Query_RootAddons_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Addons_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Addons_Enum_Order_By>>;
  where?: InputMaybe<Addons_Enum_Bool_Exp>;
};


export type Query_RootAddons_Enum_By_PkArgs = {
  addon: Scalars['String']['input'];
};


export type Query_RootGoal_Difficulty_EnumArgs = {
  distinct_on?: InputMaybe<Array<Goal_Difficulty_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goal_Difficulty_Enum_Order_By>>;
  where?: InputMaybe<Goal_Difficulty_Enum_Bool_Exp>;
};


export type Query_RootGoal_Difficulty_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goal_Difficulty_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goal_Difficulty_Enum_Order_By>>;
  where?: InputMaybe<Goal_Difficulty_Enum_Bool_Exp>;
};


export type Query_RootGoal_Difficulty_Enum_By_PkArgs = {
  difficulty: Scalars['String']['input'];
};


export type Query_RootGoal_Status_EnumArgs = {
  distinct_on?: InputMaybe<Array<Goal_Status_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goal_Status_Enum_Order_By>>;
  where?: InputMaybe<Goal_Status_Enum_Bool_Exp>;
};


export type Query_RootGoal_Status_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goal_Status_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goal_Status_Enum_Order_By>>;
  where?: InputMaybe<Goal_Status_Enum_Bool_Exp>;
};


export type Query_RootGoal_Status_Enum_By_PkArgs = {
  status: Scalars['String']['input'];
};


export type Query_RootGoalsArgs = {
  distinct_on?: InputMaybe<Array<Goals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Order_By>>;
  where?: InputMaybe<Goals_Bool_Exp>;
};


export type Query_RootGoals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Order_By>>;
  where?: InputMaybe<Goals_Bool_Exp>;
};


export type Query_RootGoals_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootGoals_RitualsArgs = {
  distinct_on?: InputMaybe<Array<Goals_Rituals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Rituals_Order_By>>;
  where?: InputMaybe<Goals_Rituals_Bool_Exp>;
};


export type Query_RootGoals_Rituals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goals_Rituals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Rituals_Order_By>>;
  where?: InputMaybe<Goals_Rituals_Bool_Exp>;
};


export type Query_RootGoals_Rituals_By_PkArgs = {
  goal_id: Scalars['uuid']['input'];
  ritual_id: Scalars['uuid']['input'];
};


export type Query_RootGoals_SlidesArgs = {
  distinct_on?: InputMaybe<Array<Goals_Slides_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Slides_Order_By>>;
  where?: InputMaybe<Goals_Slides_Bool_Exp>;
};


export type Query_RootGoals_Slides_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goals_Slides_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Slides_Order_By>>;
  where?: InputMaybe<Goals_Slides_Bool_Exp>;
};


export type Query_RootGoals_Slides_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootHeroesArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Heroes_Order_By>>;
  where?: InputMaybe<Heroes_Bool_Exp>;
};


export type Query_RootHeroes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Heroes_Order_By>>;
  where?: InputMaybe<Heroes_Bool_Exp>;
};


export type Query_RootHeroes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootHeroes_RolesArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Heroes_Roles_Order_By>>;
  where?: InputMaybe<Heroes_Roles_Bool_Exp>;
};


export type Query_RootHeroes_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Heroes_Roles_Order_By>>;
  where?: InputMaybe<Heroes_Roles_Bool_Exp>;
};


export type Query_RootHeroes_Roles_By_PkArgs = {
  role: Scalars['String']['input'];
};


export type Query_RootHeroes_TokensArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Heroes_Tokens_Order_By>>;
  where?: InputMaybe<Heroes_Tokens_Bool_Exp>;
};


export type Query_RootHeroes_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Heroes_Tokens_Order_By>>;
  where?: InputMaybe<Heroes_Tokens_Bool_Exp>;
};


export type Query_RootHeroes_Tokens_By_PkArgs = {
  session_id: Scalars['uuid']['input'];
};


export type Query_RootNotepadArgs = {
  distinct_on?: InputMaybe<Array<Notepad_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notepad_Order_By>>;
  where?: InputMaybe<Notepad_Bool_Exp>;
};


export type Query_RootNotepad_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notepad_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notepad_Order_By>>;
  where?: InputMaybe<Notepad_Bool_Exp>;
};


export type Query_RootNotepad_By_PkArgs = {
  owner_id: Scalars['uuid']['input'];
};


export type Query_RootNotesArgs = {
  distinct_on?: InputMaybe<Array<Notes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notes_Order_By>>;
  where?: InputMaybe<Notes_Bool_Exp>;
};


export type Query_RootNotes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notes_Order_By>>;
  where?: InputMaybe<Notes_Bool_Exp>;
};


export type Query_RootNotes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootNotes_LabelsArgs = {
  distinct_on?: InputMaybe<Array<Notes_Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notes_Labels_Order_By>>;
  where?: InputMaybe<Notes_Labels_Bool_Exp>;
};


export type Query_RootNotes_Labels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notes_Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notes_Labels_Order_By>>;
  where?: InputMaybe<Notes_Labels_Bool_Exp>;
};


export type Query_RootNotes_Labels_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPrivacy_EnumArgs = {
  distinct_on?: InputMaybe<Array<Privacy_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Privacy_Enum_Order_By>>;
  where?: InputMaybe<Privacy_Enum_Bool_Exp>;
};


export type Query_RootPrivacy_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Privacy_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Privacy_Enum_Order_By>>;
  where?: InputMaybe<Privacy_Enum_Bool_Exp>;
};


export type Query_RootPrivacy_Enum_By_PkArgs = {
  privacy: Scalars['String']['input'];
};


export type Query_RootRestore_CodesArgs = {
  distinct_on?: InputMaybe<Array<Restore_Codes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Restore_Codes_Order_By>>;
  where?: InputMaybe<Restore_Codes_Bool_Exp>;
};


export type Query_RootRestore_Codes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Restore_Codes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Restore_Codes_Order_By>>;
  where?: InputMaybe<Restore_Codes_Bool_Exp>;
};


export type Query_RootRestore_Codes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRestore_Codes_EnumArgs = {
  distinct_on?: InputMaybe<Array<Restore_Codes_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Restore_Codes_Enum_Order_By>>;
  where?: InputMaybe<Restore_Codes_Enum_Bool_Exp>;
};


export type Query_RootRestore_Codes_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Restore_Codes_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Restore_Codes_Enum_Order_By>>;
  where?: InputMaybe<Restore_Codes_Enum_Bool_Exp>;
};


export type Query_RootRestore_Codes_Enum_By_PkArgs = {
  type: Scalars['String']['input'];
};


export type Query_RootRitual_Type_EnumArgs = {
  distinct_on?: InputMaybe<Array<Ritual_Type_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ritual_Type_Enum_Order_By>>;
  where?: InputMaybe<Ritual_Type_Enum_Bool_Exp>;
};


export type Query_RootRitual_Type_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ritual_Type_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ritual_Type_Enum_Order_By>>;
  where?: InputMaybe<Ritual_Type_Enum_Bool_Exp>;
};


export type Query_RootRitual_Type_Enum_By_PkArgs = {
  ritual_type: Scalars['String']['input'];
};


export type Query_RootSprintsArgs = {
  distinct_on?: InputMaybe<Array<Sprints_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sprints_Order_By>>;
  where?: InputMaybe<Sprints_Bool_Exp>;
};


export type Query_RootSprints_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sprints_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sprints_Order_By>>;
  where?: InputMaybe<Sprints_Bool_Exp>;
};


export type Query_RootSprints_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** restore_password_codes */
export type Restore_Codes = {
  __typename?: 'restore_codes';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  secret?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Restore_Codes_Enum_Enum>;
};

/** aggregated selection of "restore_codes" */
export type Restore_Codes_Aggregate = {
  __typename?: 'restore_codes_aggregate';
  aggregate?: Maybe<Restore_Codes_Aggregate_Fields>;
  nodes: Array<Restore_Codes>;
};

/** aggregate fields of "restore_codes" */
export type Restore_Codes_Aggregate_Fields = {
  __typename?: 'restore_codes_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Restore_Codes_Max_Fields>;
  min?: Maybe<Restore_Codes_Min_Fields>;
};


/** aggregate fields of "restore_codes" */
export type Restore_Codes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Restore_Codes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "restore_codes". All fields are combined with a logical 'AND'. */
export type Restore_Codes_Bool_Exp = {
  _and?: InputMaybe<Array<Restore_Codes_Bool_Exp>>;
  _not?: InputMaybe<Restore_Codes_Bool_Exp>;
  _or?: InputMaybe<Array<Restore_Codes_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  secret?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Restore_Codes_Enum_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "restore_codes" */
export enum Restore_Codes_Constraint {
  /** unique or primary key constraint on columns "id" */
  RestoreCodesPkey = 'restore_codes_pkey'
}

/** columns and relationships of "restore_codes_enum" */
export type Restore_Codes_Enum = {
  __typename?: 'restore_codes_enum';
  description: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

/** aggregated selection of "restore_codes_enum" */
export type Restore_Codes_Enum_Aggregate = {
  __typename?: 'restore_codes_enum_aggregate';
  aggregate?: Maybe<Restore_Codes_Enum_Aggregate_Fields>;
  nodes: Array<Restore_Codes_Enum>;
};

/** aggregate fields of "restore_codes_enum" */
export type Restore_Codes_Enum_Aggregate_Fields = {
  __typename?: 'restore_codes_enum_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Restore_Codes_Enum_Max_Fields>;
  min?: Maybe<Restore_Codes_Enum_Min_Fields>;
};


/** aggregate fields of "restore_codes_enum" */
export type Restore_Codes_Enum_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Restore_Codes_Enum_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "restore_codes_enum". All fields are combined with a logical 'AND'. */
export type Restore_Codes_Enum_Bool_Exp = {
  _and?: InputMaybe<Array<Restore_Codes_Enum_Bool_Exp>>;
  _not?: InputMaybe<Restore_Codes_Enum_Bool_Exp>;
  _or?: InputMaybe<Array<Restore_Codes_Enum_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "restore_codes_enum" */
export enum Restore_Codes_Enum_Constraint {
  /** unique or primary key constraint on columns "type" */
  RestoreCodesEnumPkey = 'restore_codes_enum_pkey'
}

export enum Restore_Codes_Enum_Enum {
  /** restore code */
  Restoration = 'restoration'
}

/** Boolean expression to compare columns of type "restore_codes_enum_enum". All fields are combined with logical 'AND'. */
export type Restore_Codes_Enum_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Restore_Codes_Enum_Enum>;
  _in?: InputMaybe<Array<Restore_Codes_Enum_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Restore_Codes_Enum_Enum>;
  _nin?: InputMaybe<Array<Restore_Codes_Enum_Enum>>;
};

/** input type for inserting data into table "restore_codes_enum" */
export type Restore_Codes_Enum_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Restore_Codes_Enum_Max_Fields = {
  __typename?: 'restore_codes_enum_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Restore_Codes_Enum_Min_Fields = {
  __typename?: 'restore_codes_enum_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "restore_codes_enum" */
export type Restore_Codes_Enum_Mutation_Response = {
  __typename?: 'restore_codes_enum_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Restore_Codes_Enum>;
};

/** on_conflict condition type for table "restore_codes_enum" */
export type Restore_Codes_Enum_On_Conflict = {
  constraint: Restore_Codes_Enum_Constraint;
  update_columns?: Array<Restore_Codes_Enum_Update_Column>;
  where?: InputMaybe<Restore_Codes_Enum_Bool_Exp>;
};

/** Ordering options when selecting data from "restore_codes_enum". */
export type Restore_Codes_Enum_Order_By = {
  description?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: restore_codes_enum */
export type Restore_Codes_Enum_Pk_Columns_Input = {
  type: Scalars['String']['input'];
};

/** select columns of table "restore_codes_enum" */
export enum Restore_Codes_Enum_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "restore_codes_enum" */
export type Restore_Codes_Enum_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "restore_codes_enum" */
export type Restore_Codes_Enum_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Restore_Codes_Enum_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Restore_Codes_Enum_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "restore_codes_enum" */
export enum Restore_Codes_Enum_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Type = 'type'
}

export type Restore_Codes_Enum_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Restore_Codes_Enum_Set_Input>;
  /** filter the rows which have to be updated */
  where: Restore_Codes_Enum_Bool_Exp;
};

/** input type for inserting data into table "restore_codes" */
export type Restore_Codes_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  secret?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Restore_Codes_Enum_Enum>;
};

/** aggregate max on columns */
export type Restore_Codes_Max_Fields = {
  __typename?: 'restore_codes_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  secret?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Restore_Codes_Min_Fields = {
  __typename?: 'restore_codes_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  secret?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "restore_codes" */
export type Restore_Codes_Mutation_Response = {
  __typename?: 'restore_codes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Restore_Codes>;
};

/** on_conflict condition type for table "restore_codes" */
export type Restore_Codes_On_Conflict = {
  constraint: Restore_Codes_Constraint;
  update_columns?: Array<Restore_Codes_Update_Column>;
  where?: InputMaybe<Restore_Codes_Bool_Exp>;
};

/** Ordering options when selecting data from "restore_codes". */
export type Restore_Codes_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  secret?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: restore_codes */
export type Restore_Codes_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "restore_codes" */
export enum Restore_Codes_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Secret = 'secret',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "restore_codes" */
export type Restore_Codes_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  secret?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Restore_Codes_Enum_Enum>;
};

/** Streaming cursor of the table "restore_codes" */
export type Restore_Codes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Restore_Codes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Restore_Codes_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  secret?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Restore_Codes_Enum_Enum>;
};

/** update columns of table "restore_codes" */
export enum Restore_Codes_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Secret = 'secret',
  /** column name */
  Type = 'type'
}

export type Restore_Codes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Restore_Codes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Restore_Codes_Bool_Exp;
};

/** columns and relationships of "ritual_type_enum" */
export type Ritual_Type_Enum = {
  __typename?: 'ritual_type_enum';
  description: Scalars['String']['output'];
  /** An array relationship */
  goals_rituals: Array<Goals_Rituals>;
  /** An aggregate relationship */
  goals_rituals_aggregate: Goals_Rituals_Aggregate;
  ritual_type: Scalars['String']['output'];
};


/** columns and relationships of "ritual_type_enum" */
export type Ritual_Type_EnumGoals_RitualsArgs = {
  distinct_on?: InputMaybe<Array<Goals_Rituals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Rituals_Order_By>>;
  where?: InputMaybe<Goals_Rituals_Bool_Exp>;
};


/** columns and relationships of "ritual_type_enum" */
export type Ritual_Type_EnumGoals_Rituals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goals_Rituals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Rituals_Order_By>>;
  where?: InputMaybe<Goals_Rituals_Bool_Exp>;
};

/** aggregated selection of "ritual_type_enum" */
export type Ritual_Type_Enum_Aggregate = {
  __typename?: 'ritual_type_enum_aggregate';
  aggregate?: Maybe<Ritual_Type_Enum_Aggregate_Fields>;
  nodes: Array<Ritual_Type_Enum>;
};

/** aggregate fields of "ritual_type_enum" */
export type Ritual_Type_Enum_Aggregate_Fields = {
  __typename?: 'ritual_type_enum_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Ritual_Type_Enum_Max_Fields>;
  min?: Maybe<Ritual_Type_Enum_Min_Fields>;
};


/** aggregate fields of "ritual_type_enum" */
export type Ritual_Type_Enum_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ritual_Type_Enum_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "ritual_type_enum". All fields are combined with a logical 'AND'. */
export type Ritual_Type_Enum_Bool_Exp = {
  _and?: InputMaybe<Array<Ritual_Type_Enum_Bool_Exp>>;
  _not?: InputMaybe<Ritual_Type_Enum_Bool_Exp>;
  _or?: InputMaybe<Array<Ritual_Type_Enum_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  goals_rituals?: InputMaybe<Goals_Rituals_Bool_Exp>;
  goals_rituals_aggregate?: InputMaybe<Goals_Rituals_Aggregate_Bool_Exp>;
  ritual_type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ritual_type_enum" */
export enum Ritual_Type_Enum_Constraint {
  /** unique or primary key constraint on columns "ritual_type" */
  RitualTypeEnumPkey = 'ritual_type_enum_pkey'
}

/** input type for inserting data into table "ritual_type_enum" */
export type Ritual_Type_Enum_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  goals_rituals?: InputMaybe<Goals_Rituals_Arr_Rel_Insert_Input>;
  ritual_type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Ritual_Type_Enum_Max_Fields = {
  __typename?: 'ritual_type_enum_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  ritual_type?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Ritual_Type_Enum_Min_Fields = {
  __typename?: 'ritual_type_enum_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  ritual_type?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "ritual_type_enum" */
export type Ritual_Type_Enum_Mutation_Response = {
  __typename?: 'ritual_type_enum_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Ritual_Type_Enum>;
};

/** input type for inserting object relation for remote table "ritual_type_enum" */
export type Ritual_Type_Enum_Obj_Rel_Insert_Input = {
  data: Ritual_Type_Enum_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Ritual_Type_Enum_On_Conflict>;
};

/** on_conflict condition type for table "ritual_type_enum" */
export type Ritual_Type_Enum_On_Conflict = {
  constraint: Ritual_Type_Enum_Constraint;
  update_columns?: Array<Ritual_Type_Enum_Update_Column>;
  where?: InputMaybe<Ritual_Type_Enum_Bool_Exp>;
};

/** Ordering options when selecting data from "ritual_type_enum". */
export type Ritual_Type_Enum_Order_By = {
  description?: InputMaybe<Order_By>;
  goals_rituals_aggregate?: InputMaybe<Goals_Rituals_Aggregate_Order_By>;
  ritual_type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ritual_type_enum */
export type Ritual_Type_Enum_Pk_Columns_Input = {
  ritual_type: Scalars['String']['input'];
};

/** select columns of table "ritual_type_enum" */
export enum Ritual_Type_Enum_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  RitualType = 'ritual_type'
}

/** input type for updating data in table "ritual_type_enum" */
export type Ritual_Type_Enum_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  ritual_type?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "ritual_type_enum" */
export type Ritual_Type_Enum_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ritual_Type_Enum_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ritual_Type_Enum_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  ritual_type?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "ritual_type_enum" */
export enum Ritual_Type_Enum_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  RitualType = 'ritual_type'
}

export type Ritual_Type_Enum_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Ritual_Type_Enum_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ritual_Type_Enum_Bool_Exp;
};

/** columns and relationships of "sprints" */
export type Sprints = {
  __typename?: 'sprints';
  achievement?: Maybe<Scalars['String']['output']>;
  cached?: Maybe<Scalars['Boolean']['output']>;
  created_at: Scalars['timestamptz']['output'];
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration: Scalars['Int']['output'];
  finished_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  hero: Heroes;
  id: Scalars['uuid']['output'];
  img_path?: Maybe<Scalars['String']['output']>;
  owner_id: Scalars['uuid']['output'];
  parent_sprint_id?: Maybe<Scalars['uuid']['output']>;
  sprint_days?: Maybe<Scalars['jsonb']['output']>;
  sprint_goals?: Maybe<Scalars['String']['output']>;
  started_at?: Maybe<Scalars['timestamptz']['output']>;
  title: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "sprints" */
export type SprintsSprint_DaysArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "sprints" */
export type Sprints_Aggregate = {
  __typename?: 'sprints_aggregate';
  aggregate?: Maybe<Sprints_Aggregate_Fields>;
  nodes: Array<Sprints>;
};

export type Sprints_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Sprints_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Sprints_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Sprints_Aggregate_Bool_Exp_Count>;
};

export type Sprints_Aggregate_Bool_Exp_Bool_And = {
  arguments: Sprints_Select_Column_Sprints_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Sprints_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Sprints_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Sprints_Select_Column_Sprints_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Sprints_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Sprints_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Sprints_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Sprints_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "sprints" */
export type Sprints_Aggregate_Fields = {
  __typename?: 'sprints_aggregate_fields';
  avg?: Maybe<Sprints_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Sprints_Max_Fields>;
  min?: Maybe<Sprints_Min_Fields>;
  stddev?: Maybe<Sprints_Stddev_Fields>;
  stddev_pop?: Maybe<Sprints_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Sprints_Stddev_Samp_Fields>;
  sum?: Maybe<Sprints_Sum_Fields>;
  var_pop?: Maybe<Sprints_Var_Pop_Fields>;
  var_samp?: Maybe<Sprints_Var_Samp_Fields>;
  variance?: Maybe<Sprints_Variance_Fields>;
};


/** aggregate fields of "sprints" */
export type Sprints_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Sprints_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "sprints" */
export type Sprints_Aggregate_Order_By = {
  avg?: InputMaybe<Sprints_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Sprints_Max_Order_By>;
  min?: InputMaybe<Sprints_Min_Order_By>;
  stddev?: InputMaybe<Sprints_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Sprints_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Sprints_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Sprints_Sum_Order_By>;
  var_pop?: InputMaybe<Sprints_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Sprints_Var_Samp_Order_By>;
  variance?: InputMaybe<Sprints_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Sprints_Append_Input = {
  sprint_days?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "sprints" */
export type Sprints_Arr_Rel_Insert_Input = {
  data: Array<Sprints_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Sprints_On_Conflict>;
};

/** aggregate avg on columns */
export type Sprints_Avg_Fields = {
  __typename?: 'sprints_avg_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "sprints" */
export type Sprints_Avg_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "sprints". All fields are combined with a logical 'AND'. */
export type Sprints_Bool_Exp = {
  _and?: InputMaybe<Array<Sprints_Bool_Exp>>;
  _not?: InputMaybe<Sprints_Bool_Exp>;
  _or?: InputMaybe<Array<Sprints_Bool_Exp>>;
  achievement?: InputMaybe<String_Comparison_Exp>;
  cached?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  duration?: InputMaybe<Int_Comparison_Exp>;
  finished_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  hero?: InputMaybe<Heroes_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  img_path?: InputMaybe<String_Comparison_Exp>;
  owner_id?: InputMaybe<Uuid_Comparison_Exp>;
  parent_sprint_id?: InputMaybe<Uuid_Comparison_Exp>;
  sprint_days?: InputMaybe<Jsonb_Comparison_Exp>;
  sprint_goals?: InputMaybe<String_Comparison_Exp>;
  started_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "sprints" */
export enum Sprints_Constraint {
  /** unique or primary key constraint on columns "id" */
  SprintsIdKey = 'sprints_id_key',
  /** unique or primary key constraint on columns "id" */
  SprintsPkey = 'sprints_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Sprints_Delete_At_Path_Input = {
  sprint_days?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Sprints_Delete_Elem_Input = {
  sprint_days?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Sprints_Delete_Key_Input = {
  sprint_days?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "sprints" */
export type Sprints_Inc_Input = {
  duration?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "sprints" */
export type Sprints_Insert_Input = {
  achievement?: InputMaybe<Scalars['String']['input']>;
  cached?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  finished_at?: InputMaybe<Scalars['timestamptz']['input']>;
  hero?: InputMaybe<Heroes_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  img_path?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  parent_sprint_id?: InputMaybe<Scalars['uuid']['input']>;
  sprint_days?: InputMaybe<Scalars['jsonb']['input']>;
  sprint_goals?: InputMaybe<Scalars['String']['input']>;
  started_at?: InputMaybe<Scalars['timestamptz']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Sprints_Max_Fields = {
  __typename?: 'sprints_max_fields';
  achievement?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  finished_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  img_path?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
  parent_sprint_id?: Maybe<Scalars['uuid']['output']>;
  sprint_goals?: Maybe<Scalars['String']['output']>;
  started_at?: Maybe<Scalars['timestamptz']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "sprints" */
export type Sprints_Max_Order_By = {
  achievement?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  finished_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  img_path?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  parent_sprint_id?: InputMaybe<Order_By>;
  sprint_goals?: InputMaybe<Order_By>;
  started_at?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Sprints_Min_Fields = {
  __typename?: 'sprints_min_fields';
  achievement?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  finished_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  img_path?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
  parent_sprint_id?: Maybe<Scalars['uuid']['output']>;
  sprint_goals?: Maybe<Scalars['String']['output']>;
  started_at?: Maybe<Scalars['timestamptz']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "sprints" */
export type Sprints_Min_Order_By = {
  achievement?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  finished_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  img_path?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  parent_sprint_id?: InputMaybe<Order_By>;
  sprint_goals?: InputMaybe<Order_By>;
  started_at?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "sprints" */
export type Sprints_Mutation_Response = {
  __typename?: 'sprints_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Sprints>;
};

/** on_conflict condition type for table "sprints" */
export type Sprints_On_Conflict = {
  constraint: Sprints_Constraint;
  update_columns?: Array<Sprints_Update_Column>;
  where?: InputMaybe<Sprints_Bool_Exp>;
};

/** Ordering options when selecting data from "sprints". */
export type Sprints_Order_By = {
  achievement?: InputMaybe<Order_By>;
  cached?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  finished_at?: InputMaybe<Order_By>;
  hero?: InputMaybe<Heroes_Order_By>;
  id?: InputMaybe<Order_By>;
  img_path?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  parent_sprint_id?: InputMaybe<Order_By>;
  sprint_days?: InputMaybe<Order_By>;
  sprint_goals?: InputMaybe<Order_By>;
  started_at?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: sprints */
export type Sprints_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Sprints_Prepend_Input = {
  sprint_days?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "sprints" */
export enum Sprints_Select_Column {
  /** column name */
  Achievement = 'achievement',
  /** column name */
  Cached = 'cached',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Description = 'description',
  /** column name */
  Duration = 'duration',
  /** column name */
  FinishedAt = 'finished_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImgPath = 'img_path',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  ParentSprintId = 'parent_sprint_id',
  /** column name */
  SprintDays = 'sprint_days',
  /** column name */
  SprintGoals = 'sprint_goals',
  /** column name */
  StartedAt = 'started_at',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "sprints_aggregate_bool_exp_bool_and_arguments_columns" columns of table "sprints" */
export enum Sprints_Select_Column_Sprints_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Cached = 'cached'
}

/** select "sprints_aggregate_bool_exp_bool_or_arguments_columns" columns of table "sprints" */
export enum Sprints_Select_Column_Sprints_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Cached = 'cached'
}

/** input type for updating data in table "sprints" */
export type Sprints_Set_Input = {
  achievement?: InputMaybe<Scalars['String']['input']>;
  cached?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  finished_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  img_path?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  parent_sprint_id?: InputMaybe<Scalars['uuid']['input']>;
  sprint_days?: InputMaybe<Scalars['jsonb']['input']>;
  sprint_goals?: InputMaybe<Scalars['String']['input']>;
  started_at?: InputMaybe<Scalars['timestamptz']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Sprints_Stddev_Fields = {
  __typename?: 'sprints_stddev_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "sprints" */
export type Sprints_Stddev_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Sprints_Stddev_Pop_Fields = {
  __typename?: 'sprints_stddev_pop_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "sprints" */
export type Sprints_Stddev_Pop_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Sprints_Stddev_Samp_Fields = {
  __typename?: 'sprints_stddev_samp_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "sprints" */
export type Sprints_Stddev_Samp_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "sprints" */
export type Sprints_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Sprints_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Sprints_Stream_Cursor_Value_Input = {
  achievement?: InputMaybe<Scalars['String']['input']>;
  cached?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  finished_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  img_path?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  parent_sprint_id?: InputMaybe<Scalars['uuid']['input']>;
  sprint_days?: InputMaybe<Scalars['jsonb']['input']>;
  sprint_goals?: InputMaybe<Scalars['String']['input']>;
  started_at?: InputMaybe<Scalars['timestamptz']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Sprints_Sum_Fields = {
  __typename?: 'sprints_sum_fields';
  duration?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "sprints" */
export type Sprints_Sum_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** update columns of table "sprints" */
export enum Sprints_Update_Column {
  /** column name */
  Achievement = 'achievement',
  /** column name */
  Cached = 'cached',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Description = 'description',
  /** column name */
  Duration = 'duration',
  /** column name */
  FinishedAt = 'finished_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImgPath = 'img_path',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  ParentSprintId = 'parent_sprint_id',
  /** column name */
  SprintDays = 'sprint_days',
  /** column name */
  SprintGoals = 'sprint_goals',
  /** column name */
  StartedAt = 'started_at',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Sprints_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Sprints_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Sprints_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Sprints_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Sprints_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Sprints_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Sprints_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Sprints_Set_Input>;
  /** filter the rows which have to be updated */
  where: Sprints_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Sprints_Var_Pop_Fields = {
  __typename?: 'sprints_var_pop_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "sprints" */
export type Sprints_Var_Pop_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Sprints_Var_Samp_Fields = {
  __typename?: 'sprints_var_samp_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "sprints" */
export type Sprints_Var_Samp_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Sprints_Variance_Fields = {
  __typename?: 'sprints_variance_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "sprints" */
export type Sprints_Variance_Order_By = {
  duration?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  achievements: Array<Achievements>;
  /** An aggregate relationship */
  achievements_aggregate: Achievements_Aggregate;
  /** fetch data from the table: "achievements" using primary key columns */
  achievements_by_pk?: Maybe<Achievements>;
  /** fetch data from the table in a streaming manner: "achievements" */
  achievements_stream: Array<Achievements>;
  /** An array relationship */
  addons: Array<Addons>;
  /** An aggregate relationship */
  addons_aggregate: Addons_Aggregate;
  /** fetch data from the table: "addons" using primary key columns */
  addons_by_pk?: Maybe<Addons>;
  /** fetch data from the table: "addons_enum" */
  addons_enum: Array<Addons_Enum>;
  /** fetch aggregated fields from the table: "addons_enum" */
  addons_enum_aggregate: Addons_Enum_Aggregate;
  /** fetch data from the table: "addons_enum" using primary key columns */
  addons_enum_by_pk?: Maybe<Addons_Enum>;
  /** fetch data from the table in a streaming manner: "addons_enum" */
  addons_enum_stream: Array<Addons_Enum>;
  /** fetch data from the table in a streaming manner: "addons" */
  addons_stream: Array<Addons>;
  /** fetch data from the table: "goal_difficulty_enum" */
  goal_difficulty_enum: Array<Goal_Difficulty_Enum>;
  /** fetch aggregated fields from the table: "goal_difficulty_enum" */
  goal_difficulty_enum_aggregate: Goal_Difficulty_Enum_Aggregate;
  /** fetch data from the table: "goal_difficulty_enum" using primary key columns */
  goal_difficulty_enum_by_pk?: Maybe<Goal_Difficulty_Enum>;
  /** fetch data from the table in a streaming manner: "goal_difficulty_enum" */
  goal_difficulty_enum_stream: Array<Goal_Difficulty_Enum>;
  /** fetch data from the table: "goal_status_enum" */
  goal_status_enum: Array<Goal_Status_Enum>;
  /** fetch aggregated fields from the table: "goal_status_enum" */
  goal_status_enum_aggregate: Goal_Status_Enum_Aggregate;
  /** fetch data from the table: "goal_status_enum" using primary key columns */
  goal_status_enum_by_pk?: Maybe<Goal_Status_Enum>;
  /** fetch data from the table in a streaming manner: "goal_status_enum" */
  goal_status_enum_stream: Array<Goal_Status_Enum>;
  /** An array relationship */
  goals: Array<Goals>;
  /** An aggregate relationship */
  goals_aggregate: Goals_Aggregate;
  /** fetch data from the table: "goals" using primary key columns */
  goals_by_pk?: Maybe<Goals>;
  /** An array relationship */
  goals_rituals: Array<Goals_Rituals>;
  /** An aggregate relationship */
  goals_rituals_aggregate: Goals_Rituals_Aggregate;
  /** fetch data from the table: "goals_rituals" using primary key columns */
  goals_rituals_by_pk?: Maybe<Goals_Rituals>;
  /** fetch data from the table in a streaming manner: "goals_rituals" */
  goals_rituals_stream: Array<Goals_Rituals>;
  /** An array relationship */
  goals_slides: Array<Goals_Slides>;
  /** An aggregate relationship */
  goals_slides_aggregate: Goals_Slides_Aggregate;
  /** fetch data from the table: "goals_slides" using primary key columns */
  goals_slides_by_pk?: Maybe<Goals_Slides>;
  /** fetch data from the table in a streaming manner: "goals_slides" */
  goals_slides_stream: Array<Goals_Slides>;
  /** fetch data from the table in a streaming manner: "goals" */
  goals_stream: Array<Goals>;
  /** An array relationship */
  heroes: Array<Heroes>;
  /** An aggregate relationship */
  heroes_aggregate: Heroes_Aggregate;
  /** fetch data from the table: "heroes" using primary key columns */
  heroes_by_pk?: Maybe<Heroes>;
  /** fetch data from the table: "heroes_roles" */
  heroes_roles: Array<Heroes_Roles>;
  /** fetch aggregated fields from the table: "heroes_roles" */
  heroes_roles_aggregate: Heroes_Roles_Aggregate;
  /** fetch data from the table: "heroes_roles" using primary key columns */
  heroes_roles_by_pk?: Maybe<Heroes_Roles>;
  /** fetch data from the table in a streaming manner: "heroes_roles" */
  heroes_roles_stream: Array<Heroes_Roles>;
  /** fetch data from the table in a streaming manner: "heroes" */
  heroes_stream: Array<Heroes>;
  /** fetch data from the table: "heroes_tokens" */
  heroes_tokens: Array<Heroes_Tokens>;
  /** fetch aggregated fields from the table: "heroes_tokens" */
  heroes_tokens_aggregate: Heroes_Tokens_Aggregate;
  /** fetch data from the table: "heroes_tokens" using primary key columns */
  heroes_tokens_by_pk?: Maybe<Heroes_Tokens>;
  /** fetch data from the table in a streaming manner: "heroes_tokens" */
  heroes_tokens_stream: Array<Heroes_Tokens>;
  /** fetch data from the table: "notepad" */
  notepad: Array<Notepad>;
  /** fetch aggregated fields from the table: "notepad" */
  notepad_aggregate: Notepad_Aggregate;
  /** fetch data from the table: "notepad" using primary key columns */
  notepad_by_pk?: Maybe<Notepad>;
  /** fetch data from the table in a streaming manner: "notepad" */
  notepad_stream: Array<Notepad>;
  /** An array relationship */
  notes: Array<Notes>;
  /** An aggregate relationship */
  notes_aggregate: Notes_Aggregate;
  /** fetch data from the table: "notes" using primary key columns */
  notes_by_pk?: Maybe<Notes>;
  /** fetch data from the table: "notes_labels" */
  notes_labels: Array<Notes_Labels>;
  /** fetch aggregated fields from the table: "notes_labels" */
  notes_labels_aggregate: Notes_Labels_Aggregate;
  /** fetch data from the table: "notes_labels" using primary key columns */
  notes_labels_by_pk?: Maybe<Notes_Labels>;
  /** fetch data from the table in a streaming manner: "notes_labels" */
  notes_labels_stream: Array<Notes_Labels>;
  /** fetch data from the table in a streaming manner: "notes" */
  notes_stream: Array<Notes>;
  /** fetch data from the table: "privacy_enum" */
  privacy_enum: Array<Privacy_Enum>;
  /** fetch aggregated fields from the table: "privacy_enum" */
  privacy_enum_aggregate: Privacy_Enum_Aggregate;
  /** fetch data from the table: "privacy_enum" using primary key columns */
  privacy_enum_by_pk?: Maybe<Privacy_Enum>;
  /** fetch data from the table in a streaming manner: "privacy_enum" */
  privacy_enum_stream: Array<Privacy_Enum>;
  /** fetch data from the table: "restore_codes" */
  restore_codes: Array<Restore_Codes>;
  /** fetch aggregated fields from the table: "restore_codes" */
  restore_codes_aggregate: Restore_Codes_Aggregate;
  /** fetch data from the table: "restore_codes" using primary key columns */
  restore_codes_by_pk?: Maybe<Restore_Codes>;
  /** fetch data from the table: "restore_codes_enum" */
  restore_codes_enum: Array<Restore_Codes_Enum>;
  /** fetch aggregated fields from the table: "restore_codes_enum" */
  restore_codes_enum_aggregate: Restore_Codes_Enum_Aggregate;
  /** fetch data from the table: "restore_codes_enum" using primary key columns */
  restore_codes_enum_by_pk?: Maybe<Restore_Codes_Enum>;
  /** fetch data from the table in a streaming manner: "restore_codes_enum" */
  restore_codes_enum_stream: Array<Restore_Codes_Enum>;
  /** fetch data from the table in a streaming manner: "restore_codes" */
  restore_codes_stream: Array<Restore_Codes>;
  /** fetch data from the table: "ritual_type_enum" */
  ritual_type_enum: Array<Ritual_Type_Enum>;
  /** fetch aggregated fields from the table: "ritual_type_enum" */
  ritual_type_enum_aggregate: Ritual_Type_Enum_Aggregate;
  /** fetch data from the table: "ritual_type_enum" using primary key columns */
  ritual_type_enum_by_pk?: Maybe<Ritual_Type_Enum>;
  /** fetch data from the table in a streaming manner: "ritual_type_enum" */
  ritual_type_enum_stream: Array<Ritual_Type_Enum>;
  /** An array relationship */
  sprints: Array<Sprints>;
  /** An aggregate relationship */
  sprints_aggregate: Sprints_Aggregate;
  /** fetch data from the table: "sprints" using primary key columns */
  sprints_by_pk?: Maybe<Sprints>;
  /** fetch data from the table in a streaming manner: "sprints" */
  sprints_stream: Array<Sprints>;
};


export type Subscription_RootAchievementsArgs = {
  distinct_on?: InputMaybe<Array<Achievements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Achievements_Order_By>>;
  where?: InputMaybe<Achievements_Bool_Exp>;
};


export type Subscription_RootAchievements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Achievements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Achievements_Order_By>>;
  where?: InputMaybe<Achievements_Bool_Exp>;
};


export type Subscription_RootAchievements_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAchievements_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Achievements_Stream_Cursor_Input>>;
  where?: InputMaybe<Achievements_Bool_Exp>;
};


export type Subscription_RootAddonsArgs = {
  distinct_on?: InputMaybe<Array<Addons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Addons_Order_By>>;
  where?: InputMaybe<Addons_Bool_Exp>;
};


export type Subscription_RootAddons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Addons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Addons_Order_By>>;
  where?: InputMaybe<Addons_Bool_Exp>;
};


export type Subscription_RootAddons_By_PkArgs = {
  addon: Scalars['String']['input'];
  owner_id: Scalars['uuid']['input'];
};


export type Subscription_RootAddons_EnumArgs = {
  distinct_on?: InputMaybe<Array<Addons_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Addons_Enum_Order_By>>;
  where?: InputMaybe<Addons_Enum_Bool_Exp>;
};


export type Subscription_RootAddons_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Addons_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Addons_Enum_Order_By>>;
  where?: InputMaybe<Addons_Enum_Bool_Exp>;
};


export type Subscription_RootAddons_Enum_By_PkArgs = {
  addon: Scalars['String']['input'];
};


export type Subscription_RootAddons_Enum_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Addons_Enum_Stream_Cursor_Input>>;
  where?: InputMaybe<Addons_Enum_Bool_Exp>;
};


export type Subscription_RootAddons_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Addons_Stream_Cursor_Input>>;
  where?: InputMaybe<Addons_Bool_Exp>;
};


export type Subscription_RootGoal_Difficulty_EnumArgs = {
  distinct_on?: InputMaybe<Array<Goal_Difficulty_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goal_Difficulty_Enum_Order_By>>;
  where?: InputMaybe<Goal_Difficulty_Enum_Bool_Exp>;
};


export type Subscription_RootGoal_Difficulty_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goal_Difficulty_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goal_Difficulty_Enum_Order_By>>;
  where?: InputMaybe<Goal_Difficulty_Enum_Bool_Exp>;
};


export type Subscription_RootGoal_Difficulty_Enum_By_PkArgs = {
  difficulty: Scalars['String']['input'];
};


export type Subscription_RootGoal_Difficulty_Enum_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Goal_Difficulty_Enum_Stream_Cursor_Input>>;
  where?: InputMaybe<Goal_Difficulty_Enum_Bool_Exp>;
};


export type Subscription_RootGoal_Status_EnumArgs = {
  distinct_on?: InputMaybe<Array<Goal_Status_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goal_Status_Enum_Order_By>>;
  where?: InputMaybe<Goal_Status_Enum_Bool_Exp>;
};


export type Subscription_RootGoal_Status_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goal_Status_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goal_Status_Enum_Order_By>>;
  where?: InputMaybe<Goal_Status_Enum_Bool_Exp>;
};


export type Subscription_RootGoal_Status_Enum_By_PkArgs = {
  status: Scalars['String']['input'];
};


export type Subscription_RootGoal_Status_Enum_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Goal_Status_Enum_Stream_Cursor_Input>>;
  where?: InputMaybe<Goal_Status_Enum_Bool_Exp>;
};


export type Subscription_RootGoalsArgs = {
  distinct_on?: InputMaybe<Array<Goals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Order_By>>;
  where?: InputMaybe<Goals_Bool_Exp>;
};


export type Subscription_RootGoals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Order_By>>;
  where?: InputMaybe<Goals_Bool_Exp>;
};


export type Subscription_RootGoals_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootGoals_RitualsArgs = {
  distinct_on?: InputMaybe<Array<Goals_Rituals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Rituals_Order_By>>;
  where?: InputMaybe<Goals_Rituals_Bool_Exp>;
};


export type Subscription_RootGoals_Rituals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goals_Rituals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Rituals_Order_By>>;
  where?: InputMaybe<Goals_Rituals_Bool_Exp>;
};


export type Subscription_RootGoals_Rituals_By_PkArgs = {
  goal_id: Scalars['uuid']['input'];
  ritual_id: Scalars['uuid']['input'];
};


export type Subscription_RootGoals_Rituals_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Goals_Rituals_Stream_Cursor_Input>>;
  where?: InputMaybe<Goals_Rituals_Bool_Exp>;
};


export type Subscription_RootGoals_SlidesArgs = {
  distinct_on?: InputMaybe<Array<Goals_Slides_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Slides_Order_By>>;
  where?: InputMaybe<Goals_Slides_Bool_Exp>;
};


export type Subscription_RootGoals_Slides_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goals_Slides_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Slides_Order_By>>;
  where?: InputMaybe<Goals_Slides_Bool_Exp>;
};


export type Subscription_RootGoals_Slides_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootGoals_Slides_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Goals_Slides_Stream_Cursor_Input>>;
  where?: InputMaybe<Goals_Slides_Bool_Exp>;
};


export type Subscription_RootGoals_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Goals_Stream_Cursor_Input>>;
  where?: InputMaybe<Goals_Bool_Exp>;
};


export type Subscription_RootHeroesArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Heroes_Order_By>>;
  where?: InputMaybe<Heroes_Bool_Exp>;
};


export type Subscription_RootHeroes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Heroes_Order_By>>;
  where?: InputMaybe<Heroes_Bool_Exp>;
};


export type Subscription_RootHeroes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootHeroes_RolesArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Heroes_Roles_Order_By>>;
  where?: InputMaybe<Heroes_Roles_Bool_Exp>;
};


export type Subscription_RootHeroes_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Heroes_Roles_Order_By>>;
  where?: InputMaybe<Heroes_Roles_Bool_Exp>;
};


export type Subscription_RootHeroes_Roles_By_PkArgs = {
  role: Scalars['String']['input'];
};


export type Subscription_RootHeroes_Roles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Heroes_Roles_Stream_Cursor_Input>>;
  where?: InputMaybe<Heroes_Roles_Bool_Exp>;
};


export type Subscription_RootHeroes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Heroes_Stream_Cursor_Input>>;
  where?: InputMaybe<Heroes_Bool_Exp>;
};


export type Subscription_RootHeroes_TokensArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Heroes_Tokens_Order_By>>;
  where?: InputMaybe<Heroes_Tokens_Bool_Exp>;
};


export type Subscription_RootHeroes_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Heroes_Tokens_Order_By>>;
  where?: InputMaybe<Heroes_Tokens_Bool_Exp>;
};


export type Subscription_RootHeroes_Tokens_By_PkArgs = {
  session_id: Scalars['uuid']['input'];
};


export type Subscription_RootHeroes_Tokens_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Heroes_Tokens_Stream_Cursor_Input>>;
  where?: InputMaybe<Heroes_Tokens_Bool_Exp>;
};


export type Subscription_RootNotepadArgs = {
  distinct_on?: InputMaybe<Array<Notepad_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notepad_Order_By>>;
  where?: InputMaybe<Notepad_Bool_Exp>;
};


export type Subscription_RootNotepad_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notepad_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notepad_Order_By>>;
  where?: InputMaybe<Notepad_Bool_Exp>;
};


export type Subscription_RootNotepad_By_PkArgs = {
  owner_id: Scalars['uuid']['input'];
};


export type Subscription_RootNotepad_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Notepad_Stream_Cursor_Input>>;
  where?: InputMaybe<Notepad_Bool_Exp>;
};


export type Subscription_RootNotesArgs = {
  distinct_on?: InputMaybe<Array<Notes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notes_Order_By>>;
  where?: InputMaybe<Notes_Bool_Exp>;
};


export type Subscription_RootNotes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notes_Order_By>>;
  where?: InputMaybe<Notes_Bool_Exp>;
};


export type Subscription_RootNotes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootNotes_LabelsArgs = {
  distinct_on?: InputMaybe<Array<Notes_Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notes_Labels_Order_By>>;
  where?: InputMaybe<Notes_Labels_Bool_Exp>;
};


export type Subscription_RootNotes_Labels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notes_Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notes_Labels_Order_By>>;
  where?: InputMaybe<Notes_Labels_Bool_Exp>;
};


export type Subscription_RootNotes_Labels_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootNotes_Labels_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Notes_Labels_Stream_Cursor_Input>>;
  where?: InputMaybe<Notes_Labels_Bool_Exp>;
};


export type Subscription_RootNotes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Notes_Stream_Cursor_Input>>;
  where?: InputMaybe<Notes_Bool_Exp>;
};


export type Subscription_RootPrivacy_EnumArgs = {
  distinct_on?: InputMaybe<Array<Privacy_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Privacy_Enum_Order_By>>;
  where?: InputMaybe<Privacy_Enum_Bool_Exp>;
};


export type Subscription_RootPrivacy_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Privacy_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Privacy_Enum_Order_By>>;
  where?: InputMaybe<Privacy_Enum_Bool_Exp>;
};


export type Subscription_RootPrivacy_Enum_By_PkArgs = {
  privacy: Scalars['String']['input'];
};


export type Subscription_RootPrivacy_Enum_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Privacy_Enum_Stream_Cursor_Input>>;
  where?: InputMaybe<Privacy_Enum_Bool_Exp>;
};


export type Subscription_RootRestore_CodesArgs = {
  distinct_on?: InputMaybe<Array<Restore_Codes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Restore_Codes_Order_By>>;
  where?: InputMaybe<Restore_Codes_Bool_Exp>;
};


export type Subscription_RootRestore_Codes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Restore_Codes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Restore_Codes_Order_By>>;
  where?: InputMaybe<Restore_Codes_Bool_Exp>;
};


export type Subscription_RootRestore_Codes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRestore_Codes_EnumArgs = {
  distinct_on?: InputMaybe<Array<Restore_Codes_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Restore_Codes_Enum_Order_By>>;
  where?: InputMaybe<Restore_Codes_Enum_Bool_Exp>;
};


export type Subscription_RootRestore_Codes_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Restore_Codes_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Restore_Codes_Enum_Order_By>>;
  where?: InputMaybe<Restore_Codes_Enum_Bool_Exp>;
};


export type Subscription_RootRestore_Codes_Enum_By_PkArgs = {
  type: Scalars['String']['input'];
};


export type Subscription_RootRestore_Codes_Enum_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Restore_Codes_Enum_Stream_Cursor_Input>>;
  where?: InputMaybe<Restore_Codes_Enum_Bool_Exp>;
};


export type Subscription_RootRestore_Codes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Restore_Codes_Stream_Cursor_Input>>;
  where?: InputMaybe<Restore_Codes_Bool_Exp>;
};


export type Subscription_RootRitual_Type_EnumArgs = {
  distinct_on?: InputMaybe<Array<Ritual_Type_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ritual_Type_Enum_Order_By>>;
  where?: InputMaybe<Ritual_Type_Enum_Bool_Exp>;
};


export type Subscription_RootRitual_Type_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ritual_Type_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ritual_Type_Enum_Order_By>>;
  where?: InputMaybe<Ritual_Type_Enum_Bool_Exp>;
};


export type Subscription_RootRitual_Type_Enum_By_PkArgs = {
  ritual_type: Scalars['String']['input'];
};


export type Subscription_RootRitual_Type_Enum_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Ritual_Type_Enum_Stream_Cursor_Input>>;
  where?: InputMaybe<Ritual_Type_Enum_Bool_Exp>;
};


export type Subscription_RootSprintsArgs = {
  distinct_on?: InputMaybe<Array<Sprints_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sprints_Order_By>>;
  where?: InputMaybe<Sprints_Bool_Exp>;
};


export type Subscription_RootSprints_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sprints_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sprints_Order_By>>;
  where?: InputMaybe<Sprints_Bool_Exp>;
};


export type Subscription_RootSprints_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSprints_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Sprints_Stream_Cursor_Input>>;
  where?: InputMaybe<Sprints_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type DeleteRestoreCodeMutationVariables = Exact<{
  code: Scalars['uuid']['input'];
}>;


export type DeleteRestoreCodeMutation = { __typename?: 'mutation_root', delete_restore_codes_by_pk?: { __typename?: 'restore_codes', id: any } | null };

export type UpdatePasswordByEmailMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdatePasswordByEmailMutation = { __typename?: 'mutation_root', update_heroes?: { __typename?: 'heroes_mutation_response', affected_rows: number } | null };

export type Restore_CodesQueryVariables = Exact<{
  code: Scalars['uuid']['input'];
}>;


export type Restore_CodesQuery = { __typename?: 'query_root', restore_codes_by_pk?: { __typename?: 'restore_codes', email: string } | null };

export type FetchUserByEmailQueryVariables = Exact<{
  email?: InputMaybe<Scalars['String']['input']>;
}>;


export type FetchUserByEmailQuery = { __typename?: 'query_root', heroes: Array<{ __typename?: 'heroes', id: any }> };

export type UserByPkQueryVariables = Exact<{
  user_id: Scalars['uuid']['input'];
}>;


export type UserByPkQuery = { __typename?: 'query_root', heroes_by_pk?: { __typename?: 'heroes', password?: string | null } | null };

export type Mutation_UpdateNoteLabelRatingMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type Mutation_UpdateNoteLabelRatingMutation = { __typename?: 'mutation_root', update_notes_labels_by_pk?: { __typename?: 'notes_labels', id: any, name: string, owner_id: any, rating: number } | null };

export type Mutation_CachedSprintMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type Mutation_CachedSprintMutation = { __typename?: 'mutation_root', update_sprints_by_pk?: { __typename?: 'sprints', id: any } | null };

export type Mutation_InsertNewSprintMutationVariables = Exact<{
  newSprint: Sprints_Insert_Input;
}>;


export type Mutation_InsertNewSprintMutation = { __typename?: 'mutation_root', insert_sprints_one?: { __typename?: 'sprints', img_path?: string | null, id: any, duration: number, description?: string | null, created_at: any, achievement?: string | null, started_at?: any | null, finished_at?: any | null, title: string, updated_at: any, parent_sprint_id?: any | null, owner_id: any, sprint_days?: any | null, sprint_goals?: string | null } | null };

export type Mutation_ToggleDeleteSprintMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
}>;


export type Mutation_ToggleDeleteSprintMutation = { __typename?: 'mutation_root', update_sprints?: { __typename?: 'sprints_mutation_response', returning: Array<{ __typename?: 'sprints', deleted_at?: any | null }> } | null };

export type Mutation_UpdateSprintMutationVariables = Exact<{
  sprintId: Scalars['uuid']['input'];
  updatedSprint?: InputMaybe<Sprints_Set_Input>;
}>;


export type Mutation_UpdateSprintMutation = { __typename?: 'mutation_root', update_sprints_by_pk?: { __typename?: 'sprints', img_path?: string | null, id: any, duration: number, description?: string | null, created_at: any, achievement?: string | null, started_at?: any | null, finished_at?: any | null, title: string, updated_at: any, parent_sprint_id?: any | null, owner_id: any, sprint_days?: any | null, sprint_goals?: string | null } | null };

export type Mutation_UpdateSprintDaysMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  sprintDays?: InputMaybe<Scalars['jsonb']['input']>;
}>;


export type Mutation_UpdateSprintDaysMutation = { __typename?: 'mutation_root', update_sprints_by_pk?: { __typename?: 'sprints', id: any } | null };

export type FetchSprintsQueryVariables = Exact<{
  user_id?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type FetchSprintsQuery = { __typename?: 'query_root', sprints: Array<{ __typename?: 'sprints', achievement?: string | null, title: string, started_at?: any | null, finished_at?: any | null, updated_at: any, owner_id: any, img_path?: string | null, id: any, duration: number, description?: string | null, created_at: any, parent_sprint_id?: any | null, sprint_days?: any | null, sprint_goals?: string | null, deleted_at?: any | null }> };


export const DeleteRestoreCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteRestoreCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_restore_codes_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteRestoreCodeMutation, DeleteRestoreCodeMutationVariables>;
export const UpdatePasswordByEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePasswordByEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_heroes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<UpdatePasswordByEmailMutation, UpdatePasswordByEmailMutationVariables>;
export const Restore_CodesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"restore_codes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"restore_codes_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<Restore_CodesQuery, Restore_CodesQueryVariables>;
export const FetchUserByEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchUserByEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<FetchUserByEmailQuery, FetchUserByEmailQueryVariables>;
export const UserByPkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserByPk"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroes_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"password"}}]}}]}}]} as unknown as DocumentNode<UserByPkQuery, UserByPkQueryVariables>;
export const Mutation_UpdateNoteLabelRatingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Mutation_updateNoteLabelRating"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_notes_labels_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_inc"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"rating"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner_id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}}]}}]}}]} as unknown as DocumentNode<Mutation_UpdateNoteLabelRatingMutation, Mutation_UpdateNoteLabelRatingMutationVariables>;
export const Mutation_CachedSprintDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"mutation_cachedSprint"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_sprints_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"cached"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<Mutation_CachedSprintMutation, Mutation_CachedSprintMutationVariables>;
export const Mutation_InsertNewSprintDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"mutation_insertNewSprint"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newSprint"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"sprints_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_sprints_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newSprint"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"img_path"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"achievement"}},{"kind":"Field","name":{"kind":"Name","value":"started_at"}},{"kind":"Field","name":{"kind":"Name","value":"finished_at"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"parent_sprint_id"}},{"kind":"Field","name":{"kind":"Name","value":"owner_id"}},{"kind":"Field","name":{"kind":"Name","value":"sprint_days"}},{"kind":"Field","name":{"kind":"Name","value":"sprint_goals"}}]}}]}}]} as unknown as DocumentNode<Mutation_InsertNewSprintMutation, Mutation_InsertNewSprintMutationVariables>;
export const Mutation_ToggleDeleteSprintDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"mutation_toggleDeleteSprint"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleted_at"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_sprints"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"parent_sprint_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"deleted_at"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleted_at"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleted_at"}}]}}]}}]}}]} as unknown as DocumentNode<Mutation_ToggleDeleteSprintMutation, Mutation_ToggleDeleteSprintMutationVariables>;
export const Mutation_UpdateSprintDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"mutation_updateSprint"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sprintId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updatedSprint"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"sprints_set_input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_sprints_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sprintId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updatedSprint"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"img_path"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"achievement"}},{"kind":"Field","name":{"kind":"Name","value":"started_at"}},{"kind":"Field","name":{"kind":"Name","value":"finished_at"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"parent_sprint_id"}},{"kind":"Field","name":{"kind":"Name","value":"owner_id"}},{"kind":"Field","name":{"kind":"Name","value":"sprint_days"}},{"kind":"Field","name":{"kind":"Name","value":"sprint_goals"}}]}}]}}]} as unknown as DocumentNode<Mutation_UpdateSprintMutation, Mutation_UpdateSprintMutationVariables>;
export const Mutation_UpdateSprintDaysDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"mutation_updateSprintDays"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sprintDays"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"jsonb"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_sprints_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"sprint_days"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sprintDays"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<Mutation_UpdateSprintDaysMutation, Mutation_UpdateSprintDaysMutationVariables>;
export const FetchSprintsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchSprints"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sprints"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"owner_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"cached"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"sprint_days"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"started_at"},"value":{"kind":"EnumValue","value":"desc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"achievement"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"started_at"}},{"kind":"Field","name":{"kind":"Name","value":"finished_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"owner_id"}},{"kind":"Field","name":{"kind":"Name","value":"img_path"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"parent_sprint_id"}},{"kind":"Field","name":{"kind":"Name","value":"owner_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"sprint_days"}},{"kind":"Field","name":{"kind":"Name","value":"sprint_goals"}},{"kind":"Field","name":{"kind":"Name","value":"deleted_at"}}]}}]}}]} as unknown as DocumentNode<FetchSprintsQuery, FetchSprintsQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  jsonb: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** user_achievements */
export type Achievements = {
  __typename?: 'achievements';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description: Scalars['String']['output'];
  /** An object relationship */
  hero: Heroes;
  id: Scalars['uuid']['output'];
  img_path?: Maybe<Scalars['String']['output']>;
  is_favorite: Scalars['Boolean']['output'];
  owner_id: Scalars['uuid']['output'];
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "achievements" */
export type Achievements_Aggregate = {
  __typename?: 'achievements_aggregate';
  aggregate?: Maybe<Achievements_Aggregate_Fields>;
  nodes: Array<Achievements>;
};

export type Achievements_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Achievements_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Achievements_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Achievements_Aggregate_Bool_Exp_Count>;
};

export type Achievements_Aggregate_Bool_Exp_Bool_And = {
  arguments: Achievements_Select_Column_Achievements_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Achievements_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Achievements_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Achievements_Select_Column_Achievements_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Achievements_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Achievements_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Achievements_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Achievements_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "achievements" */
export type Achievements_Aggregate_Fields = {
  __typename?: 'achievements_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Achievements_Max_Fields>;
  min?: Maybe<Achievements_Min_Fields>;
};


/** aggregate fields of "achievements" */
export type Achievements_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Achievements_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "achievements" */
export type Achievements_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Achievements_Max_Order_By>;
  min?: InputMaybe<Achievements_Min_Order_By>;
};

/** input type for inserting array relation for remote table "achievements" */
export type Achievements_Arr_Rel_Insert_Input = {
  data: Array<Achievements_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Achievements_On_Conflict>;
};

/** Boolean expression to filter rows from the table "achievements". All fields are combined with a logical 'AND'. */
export type Achievements_Bool_Exp = {
  _and?: InputMaybe<Array<Achievements_Bool_Exp>>;
  _not?: InputMaybe<Achievements_Bool_Exp>;
  _or?: InputMaybe<Array<Achievements_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  hero?: InputMaybe<Heroes_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  img_path?: InputMaybe<String_Comparison_Exp>;
  is_favorite?: InputMaybe<Boolean_Comparison_Exp>;
  owner_id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "achievements" */
export enum Achievements_Constraint {
  /** unique or primary key constraint on columns "id" */
  AchievementsIdKey = 'achievements_id_key',
  /** unique or primary key constraint on columns "id" */
  AchievementsPkey = 'achievements_pkey'
}

/** input type for inserting data into table "achievements" */
export type Achievements_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  hero?: InputMaybe<Heroes_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  img_path?: InputMaybe<Scalars['String']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Achievements_Max_Fields = {
  __typename?: 'achievements_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  img_path?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "achievements" */
export type Achievements_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  img_path?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Achievements_Min_Fields = {
  __typename?: 'achievements_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  img_path?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "achievements" */
export type Achievements_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  img_path?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "achievements" */
export type Achievements_Mutation_Response = {
  __typename?: 'achievements_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Achievements>;
};

/** on_conflict condition type for table "achievements" */
export type Achievements_On_Conflict = {
  constraint: Achievements_Constraint;
  update_columns?: Array<Achievements_Update_Column>;
  where?: InputMaybe<Achievements_Bool_Exp>;
};

/** Ordering options when selecting data from "achievements". */
export type Achievements_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  hero?: InputMaybe<Heroes_Order_By>;
  id?: InputMaybe<Order_By>;
  img_path?: InputMaybe<Order_By>;
  is_favorite?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: achievements */
export type Achievements_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "achievements" */
export enum Achievements_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImgPath = 'img_path',
  /** column name */
  IsFavorite = 'is_favorite',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "achievements_aggregate_bool_exp_bool_and_arguments_columns" columns of table "achievements" */
export enum Achievements_Select_Column_Achievements_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsFavorite = 'is_favorite'
}

/** select "achievements_aggregate_bool_exp_bool_or_arguments_columns" columns of table "achievements" */
export enum Achievements_Select_Column_Achievements_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsFavorite = 'is_favorite'
}

/** input type for updating data in table "achievements" */
export type Achievements_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  img_path?: InputMaybe<Scalars['String']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "achievements" */
export type Achievements_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Achievements_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Achievements_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  img_path?: InputMaybe<Scalars['String']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "achievements" */
export enum Achievements_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImgPath = 'img_path',
  /** column name */
  IsFavorite = 'is_favorite',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Achievements_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Achievements_Set_Input>;
  /** filter the rows which have to be updated */
  where: Achievements_Bool_Exp;
};

/** bonus modules */
export type Addons = {
  __typename?: 'addons';
  addon: Scalars['String']['output'];
  /** An object relationship */
  addons_enum: Addons_Enum;
  /** An object relationship */
  hero: Heroes;
  owner_id: Scalars['uuid']['output'];
};

/** aggregated selection of "addons" */
export type Addons_Aggregate = {
  __typename?: 'addons_aggregate';
  aggregate?: Maybe<Addons_Aggregate_Fields>;
  nodes: Array<Addons>;
};

export type Addons_Aggregate_Bool_Exp = {
  count?: InputMaybe<Addons_Aggregate_Bool_Exp_Count>;
};

export type Addons_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Addons_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Addons_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "addons" */
export type Addons_Aggregate_Fields = {
  __typename?: 'addons_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Addons_Max_Fields>;
  min?: Maybe<Addons_Min_Fields>;
};


/** aggregate fields of "addons" */
export type Addons_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Addons_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "addons" */
export type Addons_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Addons_Max_Order_By>;
  min?: InputMaybe<Addons_Min_Order_By>;
};

/** input type for inserting array relation for remote table "addons" */
export type Addons_Arr_Rel_Insert_Input = {
  data: Array<Addons_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Addons_On_Conflict>;
};

/** Boolean expression to filter rows from the table "addons". All fields are combined with a logical 'AND'. */
export type Addons_Bool_Exp = {
  _and?: InputMaybe<Array<Addons_Bool_Exp>>;
  _not?: InputMaybe<Addons_Bool_Exp>;
  _or?: InputMaybe<Array<Addons_Bool_Exp>>;
  addon?: InputMaybe<String_Comparison_Exp>;
  addons_enum?: InputMaybe<Addons_Enum_Bool_Exp>;
  hero?: InputMaybe<Heroes_Bool_Exp>;
  owner_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "addons" */
export enum Addons_Constraint {
  /** unique or primary key constraint on columns "addon", "owner_id" */
  AddonsPkey = 'addons_pkey'
}

/** columns and relationships of "addons_enum" */
export type Addons_Enum = {
  __typename?: 'addons_enum';
  addon: Scalars['String']['output'];
  /** An array relationship */
  addons: Array<Addons>;
  /** An aggregate relationship */
  addons_aggregate: Addons_Aggregate;
  description: Scalars['String']['output'];
};


/** columns and relationships of "addons_enum" */
export type Addons_EnumAddonsArgs = {
  distinct_on?: InputMaybe<Array<Addons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Addons_Order_By>>;
  where?: InputMaybe<Addons_Bool_Exp>;
};


/** columns and relationships of "addons_enum" */
export type Addons_EnumAddons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Addons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Addons_Order_By>>;
  where?: InputMaybe<Addons_Bool_Exp>;
};

/** aggregated selection of "addons_enum" */
export type Addons_Enum_Aggregate = {
  __typename?: 'addons_enum_aggregate';
  aggregate?: Maybe<Addons_Enum_Aggregate_Fields>;
  nodes: Array<Addons_Enum>;
};

/** aggregate fields of "addons_enum" */
export type Addons_Enum_Aggregate_Fields = {
  __typename?: 'addons_enum_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Addons_Enum_Max_Fields>;
  min?: Maybe<Addons_Enum_Min_Fields>;
};


/** aggregate fields of "addons_enum" */
export type Addons_Enum_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Addons_Enum_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "addons_enum". All fields are combined with a logical 'AND'. */
export type Addons_Enum_Bool_Exp = {
  _and?: InputMaybe<Array<Addons_Enum_Bool_Exp>>;
  _not?: InputMaybe<Addons_Enum_Bool_Exp>;
  _or?: InputMaybe<Array<Addons_Enum_Bool_Exp>>;
  addon?: InputMaybe<String_Comparison_Exp>;
  addons?: InputMaybe<Addons_Bool_Exp>;
  addons_aggregate?: InputMaybe<Addons_Aggregate_Bool_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "addons_enum" */
export enum Addons_Enum_Constraint {
  /** unique or primary key constraint on columns "addon" */
  AddonsEnumPkey = 'addons_enum_pkey'
}

/** input type for inserting data into table "addons_enum" */
export type Addons_Enum_Insert_Input = {
  addon?: InputMaybe<Scalars['String']['input']>;
  addons?: InputMaybe<Addons_Arr_Rel_Insert_Input>;
  description?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Addons_Enum_Max_Fields = {
  __typename?: 'addons_enum_max_fields';
  addon?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Addons_Enum_Min_Fields = {
  __typename?: 'addons_enum_min_fields';
  addon?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "addons_enum" */
export type Addons_Enum_Mutation_Response = {
  __typename?: 'addons_enum_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Addons_Enum>;
};

/** input type for inserting object relation for remote table "addons_enum" */
export type Addons_Enum_Obj_Rel_Insert_Input = {
  data: Addons_Enum_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Addons_Enum_On_Conflict>;
};

/** on_conflict condition type for table "addons_enum" */
export type Addons_Enum_On_Conflict = {
  constraint: Addons_Enum_Constraint;
  update_columns?: Array<Addons_Enum_Update_Column>;
  where?: InputMaybe<Addons_Enum_Bool_Exp>;
};

/** Ordering options when selecting data from "addons_enum". */
export type Addons_Enum_Order_By = {
  addon?: InputMaybe<Order_By>;
  addons_aggregate?: InputMaybe<Addons_Aggregate_Order_By>;
  description?: InputMaybe<Order_By>;
};

/** primary key columns input for table: addons_enum */
export type Addons_Enum_Pk_Columns_Input = {
  addon: Scalars['String']['input'];
};

/** select columns of table "addons_enum" */
export enum Addons_Enum_Select_Column {
  /** column name */
  Addon = 'addon',
  /** column name */
  Description = 'description'
}

/** input type for updating data in table "addons_enum" */
export type Addons_Enum_Set_Input = {
  addon?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "addons_enum" */
export type Addons_Enum_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Addons_Enum_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Addons_Enum_Stream_Cursor_Value_Input = {
  addon?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "addons_enum" */
export enum Addons_Enum_Update_Column {
  /** column name */
  Addon = 'addon',
  /** column name */
  Description = 'description'
}

export type Addons_Enum_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Addons_Enum_Set_Input>;
  /** filter the rows which have to be updated */
  where: Addons_Enum_Bool_Exp;
};

/** input type for inserting data into table "addons" */
export type Addons_Insert_Input = {
  addon?: InputMaybe<Scalars['String']['input']>;
  addons_enum?: InputMaybe<Addons_Enum_Obj_Rel_Insert_Input>;
  hero?: InputMaybe<Heroes_Obj_Rel_Insert_Input>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Addons_Max_Fields = {
  __typename?: 'addons_max_fields';
  addon?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "addons" */
export type Addons_Max_Order_By = {
  addon?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Addons_Min_Fields = {
  __typename?: 'addons_min_fields';
  addon?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "addons" */
export type Addons_Min_Order_By = {
  addon?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "addons" */
export type Addons_Mutation_Response = {
  __typename?: 'addons_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Addons>;
};

/** on_conflict condition type for table "addons" */
export type Addons_On_Conflict = {
  constraint: Addons_Constraint;
  update_columns?: Array<Addons_Update_Column>;
  where?: InputMaybe<Addons_Bool_Exp>;
};

/** Ordering options when selecting data from "addons". */
export type Addons_Order_By = {
  addon?: InputMaybe<Order_By>;
  addons_enum?: InputMaybe<Addons_Enum_Order_By>;
  hero?: InputMaybe<Heroes_Order_By>;
  owner_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: addons */
export type Addons_Pk_Columns_Input = {
  addon: Scalars['String']['input'];
  owner_id: Scalars['uuid']['input'];
};

/** select columns of table "addons" */
export enum Addons_Select_Column {
  /** column name */
  Addon = 'addon',
  /** column name */
  OwnerId = 'owner_id'
}

/** input type for updating data in table "addons" */
export type Addons_Set_Input = {
  addon?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "addons" */
export type Addons_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Addons_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Addons_Stream_Cursor_Value_Input = {
  addon?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "addons" */
export enum Addons_Update_Column {
  /** column name */
  Addon = 'addon',
  /** column name */
  OwnerId = 'owner_id'
}

export type Addons_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Addons_Set_Input>;
  /** filter the rows which have to be updated */
  where: Addons_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** goal difficulty */
export type Goal_Difficulty_Enum = {
  __typename?: 'goal_difficulty_enum';
  description: Scalars['String']['output'];
  difficulty: Scalars['String']['output'];
  /** An array relationship */
  goals: Array<Goals>;
  /** An aggregate relationship */
  goals_aggregate: Goals_Aggregate;
};


/** goal difficulty */
export type Goal_Difficulty_EnumGoalsArgs = {
  distinct_on?: InputMaybe<Array<Goals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Order_By>>;
  where?: InputMaybe<Goals_Bool_Exp>;
};


/** goal difficulty */
export type Goal_Difficulty_EnumGoals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Order_By>>;
  where?: InputMaybe<Goals_Bool_Exp>;
};

/** aggregated selection of "goal_difficulty_enum" */
export type Goal_Difficulty_Enum_Aggregate = {
  __typename?: 'goal_difficulty_enum_aggregate';
  aggregate?: Maybe<Goal_Difficulty_Enum_Aggregate_Fields>;
  nodes: Array<Goal_Difficulty_Enum>;
};

/** aggregate fields of "goal_difficulty_enum" */
export type Goal_Difficulty_Enum_Aggregate_Fields = {
  __typename?: 'goal_difficulty_enum_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Goal_Difficulty_Enum_Max_Fields>;
  min?: Maybe<Goal_Difficulty_Enum_Min_Fields>;
};


/** aggregate fields of "goal_difficulty_enum" */
export type Goal_Difficulty_Enum_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Goal_Difficulty_Enum_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "goal_difficulty_enum". All fields are combined with a logical 'AND'. */
export type Goal_Difficulty_Enum_Bool_Exp = {
  _and?: InputMaybe<Array<Goal_Difficulty_Enum_Bool_Exp>>;
  _not?: InputMaybe<Goal_Difficulty_Enum_Bool_Exp>;
  _or?: InputMaybe<Array<Goal_Difficulty_Enum_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  difficulty?: InputMaybe<String_Comparison_Exp>;
  goals?: InputMaybe<Goals_Bool_Exp>;
  goals_aggregate?: InputMaybe<Goals_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "goal_difficulty_enum" */
export enum Goal_Difficulty_Enum_Constraint {
  /** unique or primary key constraint on columns "difficulty" */
  GoalDifficultyEnumPkey = 'goal_difficulty_enum_pkey'
}

/** input type for inserting data into table "goal_difficulty_enum" */
export type Goal_Difficulty_Enum_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  difficulty?: InputMaybe<Scalars['String']['input']>;
  goals?: InputMaybe<Goals_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Goal_Difficulty_Enum_Max_Fields = {
  __typename?: 'goal_difficulty_enum_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  difficulty?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Goal_Difficulty_Enum_Min_Fields = {
  __typename?: 'goal_difficulty_enum_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  difficulty?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "goal_difficulty_enum" */
export type Goal_Difficulty_Enum_Mutation_Response = {
  __typename?: 'goal_difficulty_enum_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Goal_Difficulty_Enum>;
};

/** input type for inserting object relation for remote table "goal_difficulty_enum" */
export type Goal_Difficulty_Enum_Obj_Rel_Insert_Input = {
  data: Goal_Difficulty_Enum_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Goal_Difficulty_Enum_On_Conflict>;
};

/** on_conflict condition type for table "goal_difficulty_enum" */
export type Goal_Difficulty_Enum_On_Conflict = {
  constraint: Goal_Difficulty_Enum_Constraint;
  update_columns?: Array<Goal_Difficulty_Enum_Update_Column>;
  where?: InputMaybe<Goal_Difficulty_Enum_Bool_Exp>;
};

/** Ordering options when selecting data from "goal_difficulty_enum". */
export type Goal_Difficulty_Enum_Order_By = {
  description?: InputMaybe<Order_By>;
  difficulty?: InputMaybe<Order_By>;
  goals_aggregate?: InputMaybe<Goals_Aggregate_Order_By>;
};

/** primary key columns input for table: goal_difficulty_enum */
export type Goal_Difficulty_Enum_Pk_Columns_Input = {
  difficulty: Scalars['String']['input'];
};

/** select columns of table "goal_difficulty_enum" */
export enum Goal_Difficulty_Enum_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Difficulty = 'difficulty'
}

/** input type for updating data in table "goal_difficulty_enum" */
export type Goal_Difficulty_Enum_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  difficulty?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "goal_difficulty_enum" */
export type Goal_Difficulty_Enum_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Goal_Difficulty_Enum_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Goal_Difficulty_Enum_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  difficulty?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "goal_difficulty_enum" */
export enum Goal_Difficulty_Enum_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Difficulty = 'difficulty'
}

export type Goal_Difficulty_Enum_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Goal_Difficulty_Enum_Set_Input>;
  /** filter the rows which have to be updated */
  where: Goal_Difficulty_Enum_Bool_Exp;
};

/** goal status */
export type Goal_Status_Enum = {
  __typename?: 'goal_status_enum';
  description: Scalars['String']['output'];
  /** An array relationship */
  goals: Array<Goals>;
  /** An aggregate relationship */
  goals_aggregate: Goals_Aggregate;
  status: Scalars['String']['output'];
};


/** goal status */
export type Goal_Status_EnumGoalsArgs = {
  distinct_on?: InputMaybe<Array<Goals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Order_By>>;
  where?: InputMaybe<Goals_Bool_Exp>;
};


/** goal status */
export type Goal_Status_EnumGoals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Order_By>>;
  where?: InputMaybe<Goals_Bool_Exp>;
};

/** aggregated selection of "goal_status_enum" */
export type Goal_Status_Enum_Aggregate = {
  __typename?: 'goal_status_enum_aggregate';
  aggregate?: Maybe<Goal_Status_Enum_Aggregate_Fields>;
  nodes: Array<Goal_Status_Enum>;
};

/** aggregate fields of "goal_status_enum" */
export type Goal_Status_Enum_Aggregate_Fields = {
  __typename?: 'goal_status_enum_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Goal_Status_Enum_Max_Fields>;
  min?: Maybe<Goal_Status_Enum_Min_Fields>;
};


/** aggregate fields of "goal_status_enum" */
export type Goal_Status_Enum_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Goal_Status_Enum_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "goal_status_enum". All fields are combined with a logical 'AND'. */
export type Goal_Status_Enum_Bool_Exp = {
  _and?: InputMaybe<Array<Goal_Status_Enum_Bool_Exp>>;
  _not?: InputMaybe<Goal_Status_Enum_Bool_Exp>;
  _or?: InputMaybe<Array<Goal_Status_Enum_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  goals?: InputMaybe<Goals_Bool_Exp>;
  goals_aggregate?: InputMaybe<Goals_Aggregate_Bool_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "goal_status_enum" */
export enum Goal_Status_Enum_Constraint {
  /** unique or primary key constraint on columns "status" */
  GoalStatusEnumPkey = 'goal_status_enum_pkey'
}

/** input type for inserting data into table "goal_status_enum" */
export type Goal_Status_Enum_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  goals?: InputMaybe<Goals_Arr_Rel_Insert_Input>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Goal_Status_Enum_Max_Fields = {
  __typename?: 'goal_status_enum_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Goal_Status_Enum_Min_Fields = {
  __typename?: 'goal_status_enum_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "goal_status_enum" */
export type Goal_Status_Enum_Mutation_Response = {
  __typename?: 'goal_status_enum_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Goal_Status_Enum>;
};

/** input type for inserting object relation for remote table "goal_status_enum" */
export type Goal_Status_Enum_Obj_Rel_Insert_Input = {
  data: Goal_Status_Enum_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Goal_Status_Enum_On_Conflict>;
};

/** on_conflict condition type for table "goal_status_enum" */
export type Goal_Status_Enum_On_Conflict = {
  constraint: Goal_Status_Enum_Constraint;
  update_columns?: Array<Goal_Status_Enum_Update_Column>;
  where?: InputMaybe<Goal_Status_Enum_Bool_Exp>;
};

/** Ordering options when selecting data from "goal_status_enum". */
export type Goal_Status_Enum_Order_By = {
  description?: InputMaybe<Order_By>;
  goals_aggregate?: InputMaybe<Goals_Aggregate_Order_By>;
  status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: goal_status_enum */
export type Goal_Status_Enum_Pk_Columns_Input = {
  status: Scalars['String']['input'];
};

/** select columns of table "goal_status_enum" */
export enum Goal_Status_Enum_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "goal_status_enum" */
export type Goal_Status_Enum_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "goal_status_enum" */
export type Goal_Status_Enum_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Goal_Status_Enum_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Goal_Status_Enum_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "goal_status_enum" */
export enum Goal_Status_Enum_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Status = 'status'
}

export type Goal_Status_Enum_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Goal_Status_Enum_Set_Input>;
  /** filter the rows which have to be updated */
  where: Goal_Status_Enum_Bool_Exp;
};

/** list of goals, finished_at - the finish estimation */
export type Goals = {
  __typename?: 'goals';
  created_at: Scalars['timestamptz']['output'];
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description: Scalars['String']['output'];
  difficulty: Scalars['String']['output'];
  finished_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  goal_difficulty_enum: Goal_Difficulty_Enum;
  /** An object relationship */
  goal_ritual?: Maybe<Goals_Rituals>;
  /** An object relationship */
  goal_status_enum: Goal_Status_Enum;
  /** An object relationship */
  hero: Heroes;
  id: Scalars['uuid']['output'];
  is_favorite: Scalars['Boolean']['output'];
  owner_id: Scalars['uuid']['output'];
  parent_goal_id?: Maybe<Scalars['uuid']['output']>;
  privacy?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  privacy_enum?: Maybe<Privacy_Enum>;
  slogan: Scalars['String']['output'];
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "goals" */
export type Goals_Aggregate = {
  __typename?: 'goals_aggregate';
  aggregate?: Maybe<Goals_Aggregate_Fields>;
  nodes: Array<Goals>;
};

export type Goals_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Goals_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Goals_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Goals_Aggregate_Bool_Exp_Count>;
};

export type Goals_Aggregate_Bool_Exp_Bool_And = {
  arguments: Goals_Select_Column_Goals_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Goals_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Goals_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Goals_Select_Column_Goals_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Goals_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Goals_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Goals_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Goals_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "goals" */
export type Goals_Aggregate_Fields = {
  __typename?: 'goals_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Goals_Max_Fields>;
  min?: Maybe<Goals_Min_Fields>;
};


/** aggregate fields of "goals" */
export type Goals_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Goals_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "goals" */
export type Goals_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Goals_Max_Order_By>;
  min?: InputMaybe<Goals_Min_Order_By>;
};

/** input type for inserting array relation for remote table "goals" */
export type Goals_Arr_Rel_Insert_Input = {
  data: Array<Goals_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Goals_On_Conflict>;
};

/** Boolean expression to filter rows from the table "goals". All fields are combined with a logical 'AND'. */
export type Goals_Bool_Exp = {
  _and?: InputMaybe<Array<Goals_Bool_Exp>>;
  _not?: InputMaybe<Goals_Bool_Exp>;
  _or?: InputMaybe<Array<Goals_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  difficulty?: InputMaybe<String_Comparison_Exp>;
  finished_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  goal_difficulty_enum?: InputMaybe<Goal_Difficulty_Enum_Bool_Exp>;
  goal_ritual?: InputMaybe<Goals_Rituals_Bool_Exp>;
  goal_status_enum?: InputMaybe<Goal_Status_Enum_Bool_Exp>;
  hero?: InputMaybe<Heroes_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_favorite?: InputMaybe<Boolean_Comparison_Exp>;
  owner_id?: InputMaybe<Uuid_Comparison_Exp>;
  parent_goal_id?: InputMaybe<Uuid_Comparison_Exp>;
  privacy?: InputMaybe<String_Comparison_Exp>;
  privacy_enum?: InputMaybe<Privacy_Enum_Bool_Exp>;
  slogan?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "goals" */
export enum Goals_Constraint {
  /** unique or primary key constraint on columns "id" */
  GoalsPkey = 'goals_pkey'
}

/** input type for inserting data into table "goals" */
export type Goals_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  difficulty?: InputMaybe<Scalars['String']['input']>;
  finished_at?: InputMaybe<Scalars['timestamptz']['input']>;
  goal_difficulty_enum?: InputMaybe<Goal_Difficulty_Enum_Obj_Rel_Insert_Input>;
  goal_ritual?: InputMaybe<Goals_Rituals_Obj_Rel_Insert_Input>;
  goal_status_enum?: InputMaybe<Goal_Status_Enum_Obj_Rel_Insert_Input>;
  hero?: InputMaybe<Heroes_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  parent_goal_id?: InputMaybe<Scalars['uuid']['input']>;
  privacy?: InputMaybe<Scalars['String']['input']>;
  privacy_enum?: InputMaybe<Privacy_Enum_Obj_Rel_Insert_Input>;
  slogan?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Goals_Max_Fields = {
  __typename?: 'goals_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  difficulty?: Maybe<Scalars['String']['output']>;
  finished_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
  parent_goal_id?: Maybe<Scalars['uuid']['output']>;
  privacy?: Maybe<Scalars['String']['output']>;
  slogan?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "goals" */
export type Goals_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  difficulty?: InputMaybe<Order_By>;
  finished_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  parent_goal_id?: InputMaybe<Order_By>;
  privacy?: InputMaybe<Order_By>;
  slogan?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Goals_Min_Fields = {
  __typename?: 'goals_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  difficulty?: Maybe<Scalars['String']['output']>;
  finished_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
  parent_goal_id?: Maybe<Scalars['uuid']['output']>;
  privacy?: Maybe<Scalars['String']['output']>;
  slogan?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "goals" */
export type Goals_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  difficulty?: InputMaybe<Order_By>;
  finished_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  parent_goal_id?: InputMaybe<Order_By>;
  privacy?: InputMaybe<Order_By>;
  slogan?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "goals" */
export type Goals_Mutation_Response = {
  __typename?: 'goals_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Goals>;
};

/** input type for inserting object relation for remote table "goals" */
export type Goals_Obj_Rel_Insert_Input = {
  data: Goals_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Goals_On_Conflict>;
};

/** on_conflict condition type for table "goals" */
export type Goals_On_Conflict = {
  constraint: Goals_Constraint;
  update_columns?: Array<Goals_Update_Column>;
  where?: InputMaybe<Goals_Bool_Exp>;
};

/** Ordering options when selecting data from "goals". */
export type Goals_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  difficulty?: InputMaybe<Order_By>;
  finished_at?: InputMaybe<Order_By>;
  goal_difficulty_enum?: InputMaybe<Goal_Difficulty_Enum_Order_By>;
  goal_ritual?: InputMaybe<Goals_Rituals_Order_By>;
  goal_status_enum?: InputMaybe<Goal_Status_Enum_Order_By>;
  hero?: InputMaybe<Heroes_Order_By>;
  id?: InputMaybe<Order_By>;
  is_favorite?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  parent_goal_id?: InputMaybe<Order_By>;
  privacy?: InputMaybe<Order_By>;
  privacy_enum?: InputMaybe<Privacy_Enum_Order_By>;
  slogan?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: goals */
export type Goals_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "goals_rituals" */
export type Goals_Rituals = {
  __typename?: 'goals_rituals';
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  goal: Goals;
  goal_id: Scalars['uuid']['output'];
  ritual_id: Scalars['uuid']['output'];
  ritual_interval: Scalars['Int']['output'];
  ritual_power: Scalars['Int']['output'];
  ritual_type: Scalars['String']['output'];
  /** An object relationship */
  ritual_type_enum: Ritual_Type_Enum;
};

/** aggregated selection of "goals_rituals" */
export type Goals_Rituals_Aggregate = {
  __typename?: 'goals_rituals_aggregate';
  aggregate?: Maybe<Goals_Rituals_Aggregate_Fields>;
  nodes: Array<Goals_Rituals>;
};

export type Goals_Rituals_Aggregate_Bool_Exp = {
  count?: InputMaybe<Goals_Rituals_Aggregate_Bool_Exp_Count>;
};

export type Goals_Rituals_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Goals_Rituals_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Goals_Rituals_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "goals_rituals" */
export type Goals_Rituals_Aggregate_Fields = {
  __typename?: 'goals_rituals_aggregate_fields';
  avg?: Maybe<Goals_Rituals_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Goals_Rituals_Max_Fields>;
  min?: Maybe<Goals_Rituals_Min_Fields>;
  stddev?: Maybe<Goals_Rituals_Stddev_Fields>;
  stddev_pop?: Maybe<Goals_Rituals_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Goals_Rituals_Stddev_Samp_Fields>;
  sum?: Maybe<Goals_Rituals_Sum_Fields>;
  var_pop?: Maybe<Goals_Rituals_Var_Pop_Fields>;
  var_samp?: Maybe<Goals_Rituals_Var_Samp_Fields>;
  variance?: Maybe<Goals_Rituals_Variance_Fields>;
};


/** aggregate fields of "goals_rituals" */
export type Goals_Rituals_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Goals_Rituals_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "goals_rituals" */
export type Goals_Rituals_Aggregate_Order_By = {
  avg?: InputMaybe<Goals_Rituals_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Goals_Rituals_Max_Order_By>;
  min?: InputMaybe<Goals_Rituals_Min_Order_By>;
  stddev?: InputMaybe<Goals_Rituals_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Goals_Rituals_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Goals_Rituals_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Goals_Rituals_Sum_Order_By>;
  var_pop?: InputMaybe<Goals_Rituals_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Goals_Rituals_Var_Samp_Order_By>;
  variance?: InputMaybe<Goals_Rituals_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "goals_rituals" */
export type Goals_Rituals_Arr_Rel_Insert_Input = {
  data: Array<Goals_Rituals_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Goals_Rituals_On_Conflict>;
};

/** aggregate avg on columns */
export type Goals_Rituals_Avg_Fields = {
  __typename?: 'goals_rituals_avg_fields';
  ritual_interval?: Maybe<Scalars['Float']['output']>;
  ritual_power?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "goals_rituals" */
export type Goals_Rituals_Avg_Order_By = {
  ritual_interval?: InputMaybe<Order_By>;
  ritual_power?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "goals_rituals". All fields are combined with a logical 'AND'. */
export type Goals_Rituals_Bool_Exp = {
  _and?: InputMaybe<Array<Goals_Rituals_Bool_Exp>>;
  _not?: InputMaybe<Goals_Rituals_Bool_Exp>;
  _or?: InputMaybe<Array<Goals_Rituals_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  goal?: InputMaybe<Goals_Bool_Exp>;
  goal_id?: InputMaybe<Uuid_Comparison_Exp>;
  ritual_id?: InputMaybe<Uuid_Comparison_Exp>;
  ritual_interval?: InputMaybe<Int_Comparison_Exp>;
  ritual_power?: InputMaybe<Int_Comparison_Exp>;
  ritual_type?: InputMaybe<String_Comparison_Exp>;
  ritual_type_enum?: InputMaybe<Ritual_Type_Enum_Bool_Exp>;
};

/** unique or primary key constraints on table "goals_rituals" */
export enum Goals_Rituals_Constraint {
  /** unique or primary key constraint on columns "ritual_id", "goal_id" */
  GoalsRitualsPkey = 'goals_rituals_pkey'
}

/** input type for incrementing numeric columns in table "goals_rituals" */
export type Goals_Rituals_Inc_Input = {
  ritual_interval?: InputMaybe<Scalars['Int']['input']>;
  ritual_power?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "goals_rituals" */
export type Goals_Rituals_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  goal?: InputMaybe<Goals_Obj_Rel_Insert_Input>;
  goal_id?: InputMaybe<Scalars['uuid']['input']>;
  ritual_id?: InputMaybe<Scalars['uuid']['input']>;
  ritual_interval?: InputMaybe<Scalars['Int']['input']>;
  ritual_power?: InputMaybe<Scalars['Int']['input']>;
  ritual_type?: InputMaybe<Scalars['String']['input']>;
  ritual_type_enum?: InputMaybe<Ritual_Type_Enum_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Goals_Rituals_Max_Fields = {
  __typename?: 'goals_rituals_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  goal_id?: Maybe<Scalars['uuid']['output']>;
  ritual_id?: Maybe<Scalars['uuid']['output']>;
  ritual_interval?: Maybe<Scalars['Int']['output']>;
  ritual_power?: Maybe<Scalars['Int']['output']>;
  ritual_type?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "goals_rituals" */
export type Goals_Rituals_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  goal_id?: InputMaybe<Order_By>;
  ritual_id?: InputMaybe<Order_By>;
  ritual_interval?: InputMaybe<Order_By>;
  ritual_power?: InputMaybe<Order_By>;
  ritual_type?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Goals_Rituals_Min_Fields = {
  __typename?: 'goals_rituals_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  goal_id?: Maybe<Scalars['uuid']['output']>;
  ritual_id?: Maybe<Scalars['uuid']['output']>;
  ritual_interval?: Maybe<Scalars['Int']['output']>;
  ritual_power?: Maybe<Scalars['Int']['output']>;
  ritual_type?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "goals_rituals" */
export type Goals_Rituals_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  goal_id?: InputMaybe<Order_By>;
  ritual_id?: InputMaybe<Order_By>;
  ritual_interval?: InputMaybe<Order_By>;
  ritual_power?: InputMaybe<Order_By>;
  ritual_type?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "goals_rituals" */
export type Goals_Rituals_Mutation_Response = {
  __typename?: 'goals_rituals_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Goals_Rituals>;
};

/** input type for inserting object relation for remote table "goals_rituals" */
export type Goals_Rituals_Obj_Rel_Insert_Input = {
  data: Goals_Rituals_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Goals_Rituals_On_Conflict>;
};

/** on_conflict condition type for table "goals_rituals" */
export type Goals_Rituals_On_Conflict = {
  constraint: Goals_Rituals_Constraint;
  update_columns?: Array<Goals_Rituals_Update_Column>;
  where?: InputMaybe<Goals_Rituals_Bool_Exp>;
};

/** Ordering options when selecting data from "goals_rituals". */
export type Goals_Rituals_Order_By = {
  created_at?: InputMaybe<Order_By>;
  goal?: InputMaybe<Goals_Order_By>;
  goal_id?: InputMaybe<Order_By>;
  ritual_id?: InputMaybe<Order_By>;
  ritual_interval?: InputMaybe<Order_By>;
  ritual_power?: InputMaybe<Order_By>;
  ritual_type?: InputMaybe<Order_By>;
  ritual_type_enum?: InputMaybe<Ritual_Type_Enum_Order_By>;
};

/** primary key columns input for table: goals_rituals */
export type Goals_Rituals_Pk_Columns_Input = {
  goal_id: Scalars['uuid']['input'];
  ritual_id: Scalars['uuid']['input'];
};

/** select columns of table "goals_rituals" */
export enum Goals_Rituals_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GoalId = 'goal_id',
  /** column name */
  RitualId = 'ritual_id',
  /** column name */
  RitualInterval = 'ritual_interval',
  /** column name */
  RitualPower = 'ritual_power',
  /** column name */
  RitualType = 'ritual_type'
}

/** input type for updating data in table "goals_rituals" */
export type Goals_Rituals_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  goal_id?: InputMaybe<Scalars['uuid']['input']>;
  ritual_id?: InputMaybe<Scalars['uuid']['input']>;
  ritual_interval?: InputMaybe<Scalars['Int']['input']>;
  ritual_power?: InputMaybe<Scalars['Int']['input']>;
  ritual_type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Goals_Rituals_Stddev_Fields = {
  __typename?: 'goals_rituals_stddev_fields';
  ritual_interval?: Maybe<Scalars['Float']['output']>;
  ritual_power?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "goals_rituals" */
export type Goals_Rituals_Stddev_Order_By = {
  ritual_interval?: InputMaybe<Order_By>;
  ritual_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Goals_Rituals_Stddev_Pop_Fields = {
  __typename?: 'goals_rituals_stddev_pop_fields';
  ritual_interval?: Maybe<Scalars['Float']['output']>;
  ritual_power?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "goals_rituals" */
export type Goals_Rituals_Stddev_Pop_Order_By = {
  ritual_interval?: InputMaybe<Order_By>;
  ritual_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Goals_Rituals_Stddev_Samp_Fields = {
  __typename?: 'goals_rituals_stddev_samp_fields';
  ritual_interval?: Maybe<Scalars['Float']['output']>;
  ritual_power?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "goals_rituals" */
export type Goals_Rituals_Stddev_Samp_Order_By = {
  ritual_interval?: InputMaybe<Order_By>;
  ritual_power?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "goals_rituals" */
export type Goals_Rituals_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Goals_Rituals_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Goals_Rituals_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  goal_id?: InputMaybe<Scalars['uuid']['input']>;
  ritual_id?: InputMaybe<Scalars['uuid']['input']>;
  ritual_interval?: InputMaybe<Scalars['Int']['input']>;
  ritual_power?: InputMaybe<Scalars['Int']['input']>;
  ritual_type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Goals_Rituals_Sum_Fields = {
  __typename?: 'goals_rituals_sum_fields';
  ritual_interval?: Maybe<Scalars['Int']['output']>;
  ritual_power?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "goals_rituals" */
export type Goals_Rituals_Sum_Order_By = {
  ritual_interval?: InputMaybe<Order_By>;
  ritual_power?: InputMaybe<Order_By>;
};

/** update columns of table "goals_rituals" */
export enum Goals_Rituals_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GoalId = 'goal_id',
  /** column name */
  RitualId = 'ritual_id',
  /** column name */
  RitualInterval = 'ritual_interval',
  /** column name */
  RitualPower = 'ritual_power',
  /** column name */
  RitualType = 'ritual_type'
}

export type Goals_Rituals_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Goals_Rituals_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Goals_Rituals_Set_Input>;
  /** filter the rows which have to be updated */
  where: Goals_Rituals_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Goals_Rituals_Var_Pop_Fields = {
  __typename?: 'goals_rituals_var_pop_fields';
  ritual_interval?: Maybe<Scalars['Float']['output']>;
  ritual_power?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "goals_rituals" */
export type Goals_Rituals_Var_Pop_Order_By = {
  ritual_interval?: InputMaybe<Order_By>;
  ritual_power?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Goals_Rituals_Var_Samp_Fields = {
  __typename?: 'goals_rituals_var_samp_fields';
  ritual_interval?: Maybe<Scalars['Float']['output']>;
  ritual_power?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "goals_rituals" */
export type Goals_Rituals_Var_Samp_Order_By = {
  ritual_interval?: InputMaybe<Order_By>;
  ritual_power?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Goals_Rituals_Variance_Fields = {
  __typename?: 'goals_rituals_variance_fields';
  ritual_interval?: Maybe<Scalars['Float']['output']>;
  ritual_power?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "goals_rituals" */
export type Goals_Rituals_Variance_Order_By = {
  ritual_interval?: InputMaybe<Order_By>;
  ritual_power?: InputMaybe<Order_By>;
};

/** select columns of table "goals" */
export enum Goals_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Description = 'description',
  /** column name */
  Difficulty = 'difficulty',
  /** column name */
  FinishedAt = 'finished_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsFavorite = 'is_favorite',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  ParentGoalId = 'parent_goal_id',
  /** column name */
  Privacy = 'privacy',
  /** column name */
  Slogan = 'slogan',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "goals_aggregate_bool_exp_bool_and_arguments_columns" columns of table "goals" */
export enum Goals_Select_Column_Goals_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsFavorite = 'is_favorite'
}

/** select "goals_aggregate_bool_exp_bool_or_arguments_columns" columns of table "goals" */
export enum Goals_Select_Column_Goals_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsFavorite = 'is_favorite'
}

/** input type for updating data in table "goals" */
export type Goals_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  difficulty?: InputMaybe<Scalars['String']['input']>;
  finished_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  parent_goal_id?: InputMaybe<Scalars['uuid']['input']>;
  privacy?: InputMaybe<Scalars['String']['input']>;
  slogan?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** columns and relationships of "goals_slides" */
export type Goals_Slides = {
  __typename?: 'goals_slides';
  active: Scalars['Boolean']['output'];
  created_at: Scalars['timestamptz']['output'];
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  hero: Heroes;
  id: Scalars['uuid']['output'];
  img_path?: Maybe<Scalars['String']['output']>;
  owner_id: Scalars['uuid']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "goals_slides" */
export type Goals_Slides_Aggregate = {
  __typename?: 'goals_slides_aggregate';
  aggregate?: Maybe<Goals_Slides_Aggregate_Fields>;
  nodes: Array<Goals_Slides>;
};

export type Goals_Slides_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Goals_Slides_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Goals_Slides_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Goals_Slides_Aggregate_Bool_Exp_Count>;
};

export type Goals_Slides_Aggregate_Bool_Exp_Bool_And = {
  arguments: Goals_Slides_Select_Column_Goals_Slides_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Goals_Slides_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Goals_Slides_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Goals_Slides_Select_Column_Goals_Slides_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Goals_Slides_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Goals_Slides_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Goals_Slides_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Goals_Slides_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "goals_slides" */
export type Goals_Slides_Aggregate_Fields = {
  __typename?: 'goals_slides_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Goals_Slides_Max_Fields>;
  min?: Maybe<Goals_Slides_Min_Fields>;
};


/** aggregate fields of "goals_slides" */
export type Goals_Slides_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Goals_Slides_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "goals_slides" */
export type Goals_Slides_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Goals_Slides_Max_Order_By>;
  min?: InputMaybe<Goals_Slides_Min_Order_By>;
};

/** input type for inserting array relation for remote table "goals_slides" */
export type Goals_Slides_Arr_Rel_Insert_Input = {
  data: Array<Goals_Slides_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Goals_Slides_On_Conflict>;
};

/** Boolean expression to filter rows from the table "goals_slides". All fields are combined with a logical 'AND'. */
export type Goals_Slides_Bool_Exp = {
  _and?: InputMaybe<Array<Goals_Slides_Bool_Exp>>;
  _not?: InputMaybe<Goals_Slides_Bool_Exp>;
  _or?: InputMaybe<Array<Goals_Slides_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  hero?: InputMaybe<Heroes_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  img_path?: InputMaybe<String_Comparison_Exp>;
  owner_id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "goals_slides" */
export enum Goals_Slides_Constraint {
  /** unique or primary key constraint on columns "id" */
  GoalsSlidesPkey = 'goals_slides_pkey'
}

/** input type for inserting data into table "goals_slides" */
export type Goals_Slides_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  hero?: InputMaybe<Heroes_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  img_path?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Goals_Slides_Max_Fields = {
  __typename?: 'goals_slides_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  img_path?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "goals_slides" */
export type Goals_Slides_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  img_path?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Goals_Slides_Min_Fields = {
  __typename?: 'goals_slides_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  img_path?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "goals_slides" */
export type Goals_Slides_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  img_path?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "goals_slides" */
export type Goals_Slides_Mutation_Response = {
  __typename?: 'goals_slides_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Goals_Slides>;
};

/** on_conflict condition type for table "goals_slides" */
export type Goals_Slides_On_Conflict = {
  constraint: Goals_Slides_Constraint;
  update_columns?: Array<Goals_Slides_Update_Column>;
  where?: InputMaybe<Goals_Slides_Bool_Exp>;
};

/** Ordering options when selecting data from "goals_slides". */
export type Goals_Slides_Order_By = {
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  hero?: InputMaybe<Heroes_Order_By>;
  id?: InputMaybe<Order_By>;
  img_path?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: goals_slides */
export type Goals_Slides_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "goals_slides" */
export enum Goals_Slides_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImgPath = 'img_path',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "goals_slides_aggregate_bool_exp_bool_and_arguments_columns" columns of table "goals_slides" */
export enum Goals_Slides_Select_Column_Goals_Slides_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Active = 'active'
}

/** select "goals_slides_aggregate_bool_exp_bool_or_arguments_columns" columns of table "goals_slides" */
export enum Goals_Slides_Select_Column_Goals_Slides_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Active = 'active'
}

/** input type for updating data in table "goals_slides" */
export type Goals_Slides_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  img_path?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "goals_slides" */
export type Goals_Slides_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Goals_Slides_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Goals_Slides_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  img_path?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "goals_slides" */
export enum Goals_Slides_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImgPath = 'img_path',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Goals_Slides_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Goals_Slides_Set_Input>;
  /** filter the rows which have to be updated */
  where: Goals_Slides_Bool_Exp;
};

/** Streaming cursor of the table "goals" */
export type Goals_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Goals_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Goals_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  difficulty?: InputMaybe<Scalars['String']['input']>;
  finished_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  parent_goal_id?: InputMaybe<Scalars['uuid']['input']>;
  privacy?: InputMaybe<Scalars['String']['input']>;
  slogan?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "goals" */
export enum Goals_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Description = 'description',
  /** column name */
  Difficulty = 'difficulty',
  /** column name */
  FinishedAt = 'finished_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsFavorite = 'is_favorite',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  ParentGoalId = 'parent_goal_id',
  /** column name */
  Privacy = 'privacy',
  /** column name */
  Slogan = 'slogan',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Goals_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Goals_Set_Input>;
  /** filter the rows which have to be updated */
  where: Goals_Bool_Exp;
};

/** list of heroes */
export type Heroes = {
  __typename?: 'heroes';
  /** An array relationship */
  achievements: Array<Achievements>;
  /** An aggregate relationship */
  achievements_aggregate: Achievements_Aggregate;
  /** An array relationship */
  addons: Array<Addons>;
  /** An aggregate relationship */
  addons_aggregate: Addons_Aggregate;
  avatar?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['timestamptz']['output']>;
  coins: Scalars['Int']['output'];
  created_at: Scalars['timestamptz']['output'];
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  email: Scalars['String']['output'];
  /** An array relationship */
  goals: Array<Goals>;
  /** An aggregate relationship */
  goals_aggregate: Goals_Aggregate;
  /** An array relationship */
  goals_slides: Array<Goals_Slides>;
  /** An aggregate relationship */
  goals_slides_aggregate: Goals_Slides_Aggregate;
  /** An object relationship */
  heroes_role?: Maybe<Heroes_Roles>;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  /** An object relationship */
  notepad?: Maybe<Notepad>;
  /** An array relationship */
  notes: Array<Notes>;
  /** An aggregate relationship */
  notes_aggregate: Notes_Aggregate;
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Heroes_Roles_Enum>;
  /** An array relationship */
  sprints: Array<Sprints>;
  /** An aggregate relationship */
  sprints_aggregate: Sprints_Aggregate;
  /** An array relationship */
  tokens: Array<Heroes_Tokens>;
  /** An aggregate relationship */
  tokens_aggregate: Heroes_Tokens_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
};


/** list of heroes */
export type HeroesAchievementsArgs = {
  distinct_on?: InputMaybe<Array<Achievements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Achievements_Order_By>>;
  where?: InputMaybe<Achievements_Bool_Exp>;
};


/** list of heroes */
export type HeroesAchievements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Achievements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Achievements_Order_By>>;
  where?: InputMaybe<Achievements_Bool_Exp>;
};


/** list of heroes */
export type HeroesAddonsArgs = {
  distinct_on?: InputMaybe<Array<Addons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Addons_Order_By>>;
  where?: InputMaybe<Addons_Bool_Exp>;
};


/** list of heroes */
export type HeroesAddons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Addons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Addons_Order_By>>;
  where?: InputMaybe<Addons_Bool_Exp>;
};


/** list of heroes */
export type HeroesGoalsArgs = {
  distinct_on?: InputMaybe<Array<Goals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Order_By>>;
  where?: InputMaybe<Goals_Bool_Exp>;
};


/** list of heroes */
export type HeroesGoals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Order_By>>;
  where?: InputMaybe<Goals_Bool_Exp>;
};


/** list of heroes */
export type HeroesGoals_SlidesArgs = {
  distinct_on?: InputMaybe<Array<Goals_Slides_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Slides_Order_By>>;
  where?: InputMaybe<Goals_Slides_Bool_Exp>;
};


/** list of heroes */
export type HeroesGoals_Slides_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goals_Slides_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Slides_Order_By>>;
  where?: InputMaybe<Goals_Slides_Bool_Exp>;
};


/** list of heroes */
export type HeroesNotesArgs = {
  distinct_on?: InputMaybe<Array<Notes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notes_Order_By>>;
  where?: InputMaybe<Notes_Bool_Exp>;
};


/** list of heroes */
export type HeroesNotes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notes_Order_By>>;
  where?: InputMaybe<Notes_Bool_Exp>;
};


/** list of heroes */
export type HeroesSprintsArgs = {
  distinct_on?: InputMaybe<Array<Sprints_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sprints_Order_By>>;
  where?: InputMaybe<Sprints_Bool_Exp>;
};


/** list of heroes */
export type HeroesSprints_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sprints_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sprints_Order_By>>;
  where?: InputMaybe<Sprints_Bool_Exp>;
};


/** list of heroes */
export type HeroesTokensArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Heroes_Tokens_Order_By>>;
  where?: InputMaybe<Heroes_Tokens_Bool_Exp>;
};


/** list of heroes */
export type HeroesTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Heroes_Tokens_Order_By>>;
  where?: InputMaybe<Heroes_Tokens_Bool_Exp>;
};

/** aggregated selection of "heroes" */
export type Heroes_Aggregate = {
  __typename?: 'heroes_aggregate';
  aggregate?: Maybe<Heroes_Aggregate_Fields>;
  nodes: Array<Heroes>;
};

export type Heroes_Aggregate_Bool_Exp = {
  count?: InputMaybe<Heroes_Aggregate_Bool_Exp_Count>;
};

export type Heroes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Heroes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Heroes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "heroes" */
export type Heroes_Aggregate_Fields = {
  __typename?: 'heroes_aggregate_fields';
  avg?: Maybe<Heroes_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Heroes_Max_Fields>;
  min?: Maybe<Heroes_Min_Fields>;
  stddev?: Maybe<Heroes_Stddev_Fields>;
  stddev_pop?: Maybe<Heroes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Heroes_Stddev_Samp_Fields>;
  sum?: Maybe<Heroes_Sum_Fields>;
  var_pop?: Maybe<Heroes_Var_Pop_Fields>;
  var_samp?: Maybe<Heroes_Var_Samp_Fields>;
  variance?: Maybe<Heroes_Variance_Fields>;
};


/** aggregate fields of "heroes" */
export type Heroes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Heroes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "heroes" */
export type Heroes_Aggregate_Order_By = {
  avg?: InputMaybe<Heroes_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Heroes_Max_Order_By>;
  min?: InputMaybe<Heroes_Min_Order_By>;
  stddev?: InputMaybe<Heroes_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Heroes_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Heroes_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Heroes_Sum_Order_By>;
  var_pop?: InputMaybe<Heroes_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Heroes_Var_Samp_Order_By>;
  variance?: InputMaybe<Heroes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "heroes" */
export type Heroes_Arr_Rel_Insert_Input = {
  data: Array<Heroes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Heroes_On_Conflict>;
};

/** aggregate avg on columns */
export type Heroes_Avg_Fields = {
  __typename?: 'heroes_avg_fields';
  coins?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "heroes" */
export type Heroes_Avg_Order_By = {
  coins?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "heroes". All fields are combined with a logical 'AND'. */
export type Heroes_Bool_Exp = {
  _and?: InputMaybe<Array<Heroes_Bool_Exp>>;
  _not?: InputMaybe<Heroes_Bool_Exp>;
  _or?: InputMaybe<Array<Heroes_Bool_Exp>>;
  achievements?: InputMaybe<Achievements_Bool_Exp>;
  achievements_aggregate?: InputMaybe<Achievements_Aggregate_Bool_Exp>;
  addons?: InputMaybe<Addons_Bool_Exp>;
  addons_aggregate?: InputMaybe<Addons_Aggregate_Bool_Exp>;
  avatar?: InputMaybe<String_Comparison_Exp>;
  birthday?: InputMaybe<Timestamptz_Comparison_Exp>;
  coins?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  goals?: InputMaybe<Goals_Bool_Exp>;
  goals_aggregate?: InputMaybe<Goals_Aggregate_Bool_Exp>;
  goals_slides?: InputMaybe<Goals_Slides_Bool_Exp>;
  goals_slides_aggregate?: InputMaybe<Goals_Slides_Aggregate_Bool_Exp>;
  heroes_role?: InputMaybe<Heroes_Roles_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  notepad?: InputMaybe<Notepad_Bool_Exp>;
  notes?: InputMaybe<Notes_Bool_Exp>;
  notes_aggregate?: InputMaybe<Notes_Aggregate_Bool_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<Heroes_Roles_Enum_Comparison_Exp>;
  sprints?: InputMaybe<Sprints_Bool_Exp>;
  sprints_aggregate?: InputMaybe<Sprints_Aggregate_Bool_Exp>;
  tokens?: InputMaybe<Heroes_Tokens_Bool_Exp>;
  tokens_aggregate?: InputMaybe<Heroes_Tokens_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "heroes" */
export enum Heroes_Constraint {
  /** unique or primary key constraint on columns "id" */
  HeroesPkey = 'heroes_pkey'
}

/** input type for incrementing numeric columns in table "heroes" */
export type Heroes_Inc_Input = {
  coins?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "heroes" */
export type Heroes_Insert_Input = {
  achievements?: InputMaybe<Achievements_Arr_Rel_Insert_Input>;
  addons?: InputMaybe<Addons_Arr_Rel_Insert_Input>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['timestamptz']['input']>;
  coins?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  goals?: InputMaybe<Goals_Arr_Rel_Insert_Input>;
  goals_slides?: InputMaybe<Goals_Slides_Arr_Rel_Insert_Input>;
  heroes_role?: InputMaybe<Heroes_Roles_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notepad?: InputMaybe<Notepad_Obj_Rel_Insert_Input>;
  notes?: InputMaybe<Notes_Arr_Rel_Insert_Input>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Heroes_Roles_Enum>;
  sprints?: InputMaybe<Sprints_Arr_Rel_Insert_Input>;
  tokens?: InputMaybe<Heroes_Tokens_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Heroes_Max_Fields = {
  __typename?: 'heroes_max_fields';
  avatar?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['timestamptz']['output']>;
  coins?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "heroes" */
export type Heroes_Max_Order_By = {
  avatar?: InputMaybe<Order_By>;
  birthday?: InputMaybe<Order_By>;
  coins?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Heroes_Min_Fields = {
  __typename?: 'heroes_min_fields';
  avatar?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['timestamptz']['output']>;
  coins?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "heroes" */
export type Heroes_Min_Order_By = {
  avatar?: InputMaybe<Order_By>;
  birthday?: InputMaybe<Order_By>;
  coins?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "heroes" */
export type Heroes_Mutation_Response = {
  __typename?: 'heroes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Heroes>;
};

/** input type for inserting object relation for remote table "heroes" */
export type Heroes_Obj_Rel_Insert_Input = {
  data: Heroes_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Heroes_On_Conflict>;
};

/** on_conflict condition type for table "heroes" */
export type Heroes_On_Conflict = {
  constraint: Heroes_Constraint;
  update_columns?: Array<Heroes_Update_Column>;
  where?: InputMaybe<Heroes_Bool_Exp>;
};

/** Ordering options when selecting data from "heroes". */
export type Heroes_Order_By = {
  achievements_aggregate?: InputMaybe<Achievements_Aggregate_Order_By>;
  addons_aggregate?: InputMaybe<Addons_Aggregate_Order_By>;
  avatar?: InputMaybe<Order_By>;
  birthday?: InputMaybe<Order_By>;
  coins?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  goals_aggregate?: InputMaybe<Goals_Aggregate_Order_By>;
  goals_slides_aggregate?: InputMaybe<Goals_Slides_Aggregate_Order_By>;
  heroes_role?: InputMaybe<Heroes_Roles_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  notepad?: InputMaybe<Notepad_Order_By>;
  notes_aggregate?: InputMaybe<Notes_Aggregate_Order_By>;
  password?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  sprints_aggregate?: InputMaybe<Sprints_Aggregate_Order_By>;
  tokens_aggregate?: InputMaybe<Heroes_Tokens_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: heroes */
export type Heroes_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "heroes_roles" */
export type Heroes_Roles = {
  __typename?: 'heroes_roles';
  description?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  heroes: Array<Heroes>;
  /** An aggregate relationship */
  heroes_aggregate: Heroes_Aggregate;
  role: Scalars['String']['output'];
};


/** columns and relationships of "heroes_roles" */
export type Heroes_RolesHeroesArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Heroes_Order_By>>;
  where?: InputMaybe<Heroes_Bool_Exp>;
};


/** columns and relationships of "heroes_roles" */
export type Heroes_RolesHeroes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Heroes_Order_By>>;
  where?: InputMaybe<Heroes_Bool_Exp>;
};

/** aggregated selection of "heroes_roles" */
export type Heroes_Roles_Aggregate = {
  __typename?: 'heroes_roles_aggregate';
  aggregate?: Maybe<Heroes_Roles_Aggregate_Fields>;
  nodes: Array<Heroes_Roles>;
};

/** aggregate fields of "heroes_roles" */
export type Heroes_Roles_Aggregate_Fields = {
  __typename?: 'heroes_roles_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Heroes_Roles_Max_Fields>;
  min?: Maybe<Heroes_Roles_Min_Fields>;
};


/** aggregate fields of "heroes_roles" */
export type Heroes_Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Heroes_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "heroes_roles". All fields are combined with a logical 'AND'. */
export type Heroes_Roles_Bool_Exp = {
  _and?: InputMaybe<Array<Heroes_Roles_Bool_Exp>>;
  _not?: InputMaybe<Heroes_Roles_Bool_Exp>;
  _or?: InputMaybe<Array<Heroes_Roles_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  heroes?: InputMaybe<Heroes_Bool_Exp>;
  heroes_aggregate?: InputMaybe<Heroes_Aggregate_Bool_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "heroes_roles" */
export enum Heroes_Roles_Constraint {
  /** unique or primary key constraint on columns "role" */
  HeroesRolesPkey = 'heroes_roles_pkey'
}

export enum Heroes_Roles_Enum {
  /** admin */
  Admin = 'admin',
  /** not activated user */
  Guest = 'guest',
  Hero = 'hero',
  /** admin */
  SuperHero = 'super_hero'
}

/** Boolean expression to compare columns of type "heroes_roles_enum". All fields are combined with logical 'AND'. */
export type Heroes_Roles_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Heroes_Roles_Enum>;
  _in?: InputMaybe<Array<Heroes_Roles_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Heroes_Roles_Enum>;
  _nin?: InputMaybe<Array<Heroes_Roles_Enum>>;
};

/** input type for inserting data into table "heroes_roles" */
export type Heroes_Roles_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  heroes?: InputMaybe<Heroes_Arr_Rel_Insert_Input>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Heroes_Roles_Max_Fields = {
  __typename?: 'heroes_roles_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Heroes_Roles_Min_Fields = {
  __typename?: 'heroes_roles_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "heroes_roles" */
export type Heroes_Roles_Mutation_Response = {
  __typename?: 'heroes_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Heroes_Roles>;
};

/** input type for inserting object relation for remote table "heroes_roles" */
export type Heroes_Roles_Obj_Rel_Insert_Input = {
  data: Heroes_Roles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Heroes_Roles_On_Conflict>;
};

/** on_conflict condition type for table "heroes_roles" */
export type Heroes_Roles_On_Conflict = {
  constraint: Heroes_Roles_Constraint;
  update_columns?: Array<Heroes_Roles_Update_Column>;
  where?: InputMaybe<Heroes_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "heroes_roles". */
export type Heroes_Roles_Order_By = {
  description?: InputMaybe<Order_By>;
  heroes_aggregate?: InputMaybe<Heroes_Aggregate_Order_By>;
  role?: InputMaybe<Order_By>;
};

/** primary key columns input for table: heroes_roles */
export type Heroes_Roles_Pk_Columns_Input = {
  role: Scalars['String']['input'];
};

/** select columns of table "heroes_roles" */
export enum Heroes_Roles_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "heroes_roles" */
export type Heroes_Roles_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "heroes_roles" */
export type Heroes_Roles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Heroes_Roles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Heroes_Roles_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "heroes_roles" */
export enum Heroes_Roles_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Role = 'role'
}

export type Heroes_Roles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Heroes_Roles_Set_Input>;
  /** filter the rows which have to be updated */
  where: Heroes_Roles_Bool_Exp;
};

/** select columns of table "heroes" */
export enum Heroes_Select_Column {
  /** column name */
  Avatar = 'avatar',
  /** column name */
  Birthday = 'birthday',
  /** column name */
  Coins = 'coins',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  Phone = 'phone',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "heroes" */
export type Heroes_Set_Input = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['timestamptz']['input']>;
  coins?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Heroes_Roles_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Heroes_Stddev_Fields = {
  __typename?: 'heroes_stddev_fields';
  coins?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "heroes" */
export type Heroes_Stddev_Order_By = {
  coins?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Heroes_Stddev_Pop_Fields = {
  __typename?: 'heroes_stddev_pop_fields';
  coins?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "heroes" */
export type Heroes_Stddev_Pop_Order_By = {
  coins?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Heroes_Stddev_Samp_Fields = {
  __typename?: 'heroes_stddev_samp_fields';
  coins?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "heroes" */
export type Heroes_Stddev_Samp_Order_By = {
  coins?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "heroes" */
export type Heroes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Heroes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Heroes_Stream_Cursor_Value_Input = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['timestamptz']['input']>;
  coins?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Heroes_Roles_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Heroes_Sum_Fields = {
  __typename?: 'heroes_sum_fields';
  coins?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "heroes" */
export type Heroes_Sum_Order_By = {
  coins?: InputMaybe<Order_By>;
};

/** refresh tokens */
export type Heroes_Tokens = {
  __typename?: 'heroes_tokens';
  /** An object relationship */
  hero: Heroes;
  hero_id: Scalars['uuid']['output'];
  session_id: Scalars['uuid']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "heroes_tokens" */
export type Heroes_Tokens_Aggregate = {
  __typename?: 'heroes_tokens_aggregate';
  aggregate?: Maybe<Heroes_Tokens_Aggregate_Fields>;
  nodes: Array<Heroes_Tokens>;
};

export type Heroes_Tokens_Aggregate_Bool_Exp = {
  count?: InputMaybe<Heroes_Tokens_Aggregate_Bool_Exp_Count>;
};

export type Heroes_Tokens_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Heroes_Tokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Heroes_Tokens_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "heroes_tokens" */
export type Heroes_Tokens_Aggregate_Fields = {
  __typename?: 'heroes_tokens_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Heroes_Tokens_Max_Fields>;
  min?: Maybe<Heroes_Tokens_Min_Fields>;
};


/** aggregate fields of "heroes_tokens" */
export type Heroes_Tokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Heroes_Tokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "heroes_tokens" */
export type Heroes_Tokens_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Heroes_Tokens_Max_Order_By>;
  min?: InputMaybe<Heroes_Tokens_Min_Order_By>;
};

/** input type for inserting array relation for remote table "heroes_tokens" */
export type Heroes_Tokens_Arr_Rel_Insert_Input = {
  data: Array<Heroes_Tokens_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Heroes_Tokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "heroes_tokens". All fields are combined with a logical 'AND'. */
export type Heroes_Tokens_Bool_Exp = {
  _and?: InputMaybe<Array<Heroes_Tokens_Bool_Exp>>;
  _not?: InputMaybe<Heroes_Tokens_Bool_Exp>;
  _or?: InputMaybe<Array<Heroes_Tokens_Bool_Exp>>;
  hero?: InputMaybe<Heroes_Bool_Exp>;
  hero_id?: InputMaybe<Uuid_Comparison_Exp>;
  session_id?: InputMaybe<Uuid_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "heroes_tokens" */
export enum Heroes_Tokens_Constraint {
  /** unique or primary key constraint on columns "session_id" */
  HeroesTokensPkey = 'heroes_tokens_pkey',
  /** unique or primary key constraint on columns "session_id" */
  HeroesTokensSessionIdKey = 'heroes_tokens_session_id_key'
}

/** input type for inserting data into table "heroes_tokens" */
export type Heroes_Tokens_Insert_Input = {
  hero?: InputMaybe<Heroes_Obj_Rel_Insert_Input>;
  hero_id?: InputMaybe<Scalars['uuid']['input']>;
  session_id?: InputMaybe<Scalars['uuid']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Heroes_Tokens_Max_Fields = {
  __typename?: 'heroes_tokens_max_fields';
  hero_id?: Maybe<Scalars['uuid']['output']>;
  session_id?: Maybe<Scalars['uuid']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "heroes_tokens" */
export type Heroes_Tokens_Max_Order_By = {
  hero_id?: InputMaybe<Order_By>;
  session_id?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Heroes_Tokens_Min_Fields = {
  __typename?: 'heroes_tokens_min_fields';
  hero_id?: Maybe<Scalars['uuid']['output']>;
  session_id?: Maybe<Scalars['uuid']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "heroes_tokens" */
export type Heroes_Tokens_Min_Order_By = {
  hero_id?: InputMaybe<Order_By>;
  session_id?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "heroes_tokens" */
export type Heroes_Tokens_Mutation_Response = {
  __typename?: 'heroes_tokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Heroes_Tokens>;
};

/** on_conflict condition type for table "heroes_tokens" */
export type Heroes_Tokens_On_Conflict = {
  constraint: Heroes_Tokens_Constraint;
  update_columns?: Array<Heroes_Tokens_Update_Column>;
  where?: InputMaybe<Heroes_Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "heroes_tokens". */
export type Heroes_Tokens_Order_By = {
  hero?: InputMaybe<Heroes_Order_By>;
  hero_id?: InputMaybe<Order_By>;
  session_id?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
};

/** primary key columns input for table: heroes_tokens */
export type Heroes_Tokens_Pk_Columns_Input = {
  session_id: Scalars['uuid']['input'];
};

/** select columns of table "heroes_tokens" */
export enum Heroes_Tokens_Select_Column {
  /** column name */
  HeroId = 'hero_id',
  /** column name */
  SessionId = 'session_id',
  /** column name */
  Token = 'token'
}

/** input type for updating data in table "heroes_tokens" */
export type Heroes_Tokens_Set_Input = {
  hero_id?: InputMaybe<Scalars['uuid']['input']>;
  session_id?: InputMaybe<Scalars['uuid']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "heroes_tokens" */
export type Heroes_Tokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Heroes_Tokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Heroes_Tokens_Stream_Cursor_Value_Input = {
  hero_id?: InputMaybe<Scalars['uuid']['input']>;
  session_id?: InputMaybe<Scalars['uuid']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "heroes_tokens" */
export enum Heroes_Tokens_Update_Column {
  /** column name */
  HeroId = 'hero_id',
  /** column name */
  SessionId = 'session_id',
  /** column name */
  Token = 'token'
}

export type Heroes_Tokens_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Heroes_Tokens_Set_Input>;
  /** filter the rows which have to be updated */
  where: Heroes_Tokens_Bool_Exp;
};

/** update columns of table "heroes" */
export enum Heroes_Update_Column {
  /** column name */
  Avatar = 'avatar',
  /** column name */
  Birthday = 'birthday',
  /** column name */
  Coins = 'coins',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  Phone = 'phone',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Heroes_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Heroes_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Heroes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Heroes_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Heroes_Var_Pop_Fields = {
  __typename?: 'heroes_var_pop_fields';
  coins?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "heroes" */
export type Heroes_Var_Pop_Order_By = {
  coins?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Heroes_Var_Samp_Fields = {
  __typename?: 'heroes_var_samp_fields';
  coins?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "heroes" */
export type Heroes_Var_Samp_Order_By = {
  coins?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Heroes_Variance_Fields = {
  __typename?: 'heroes_variance_fields';
  coins?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "heroes" */
export type Heroes_Variance_Order_By = {
  coins?: InputMaybe<Order_By>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "achievements" */
  delete_achievements?: Maybe<Achievements_Mutation_Response>;
  /** delete single row from the table: "achievements" */
  delete_achievements_by_pk?: Maybe<Achievements>;
  /** delete data from the table: "addons" */
  delete_addons?: Maybe<Addons_Mutation_Response>;
  /** delete single row from the table: "addons" */
  delete_addons_by_pk?: Maybe<Addons>;
  /** delete data from the table: "addons_enum" */
  delete_addons_enum?: Maybe<Addons_Enum_Mutation_Response>;
  /** delete single row from the table: "addons_enum" */
  delete_addons_enum_by_pk?: Maybe<Addons_Enum>;
  /** delete data from the table: "goal_difficulty_enum" */
  delete_goal_difficulty_enum?: Maybe<Goal_Difficulty_Enum_Mutation_Response>;
  /** delete single row from the table: "goal_difficulty_enum" */
  delete_goal_difficulty_enum_by_pk?: Maybe<Goal_Difficulty_Enum>;
  /** delete data from the table: "goal_status_enum" */
  delete_goal_status_enum?: Maybe<Goal_Status_Enum_Mutation_Response>;
  /** delete single row from the table: "goal_status_enum" */
  delete_goal_status_enum_by_pk?: Maybe<Goal_Status_Enum>;
  /** delete data from the table: "goals" */
  delete_goals?: Maybe<Goals_Mutation_Response>;
  /** delete single row from the table: "goals" */
  delete_goals_by_pk?: Maybe<Goals>;
  /** delete data from the table: "goals_rituals" */
  delete_goals_rituals?: Maybe<Goals_Rituals_Mutation_Response>;
  /** delete single row from the table: "goals_rituals" */
  delete_goals_rituals_by_pk?: Maybe<Goals_Rituals>;
  /** delete data from the table: "goals_slides" */
  delete_goals_slides?: Maybe<Goals_Slides_Mutation_Response>;
  /** delete single row from the table: "goals_slides" */
  delete_goals_slides_by_pk?: Maybe<Goals_Slides>;
  /** delete data from the table: "heroes" */
  delete_heroes?: Maybe<Heroes_Mutation_Response>;
  /** delete single row from the table: "heroes" */
  delete_heroes_by_pk?: Maybe<Heroes>;
  /** delete data from the table: "heroes_roles" */
  delete_heroes_roles?: Maybe<Heroes_Roles_Mutation_Response>;
  /** delete single row from the table: "heroes_roles" */
  delete_heroes_roles_by_pk?: Maybe<Heroes_Roles>;
  /** delete data from the table: "heroes_tokens" */
  delete_heroes_tokens?: Maybe<Heroes_Tokens_Mutation_Response>;
  /** delete single row from the table: "heroes_tokens" */
  delete_heroes_tokens_by_pk?: Maybe<Heroes_Tokens>;
  /** delete data from the table: "notepad" */
  delete_notepad?: Maybe<Notepad_Mutation_Response>;
  /** delete single row from the table: "notepad" */
  delete_notepad_by_pk?: Maybe<Notepad>;
  /** delete data from the table: "notes" */
  delete_notes?: Maybe<Notes_Mutation_Response>;
  /** delete single row from the table: "notes" */
  delete_notes_by_pk?: Maybe<Notes>;
  /** delete data from the table: "notes_labels" */
  delete_notes_labels?: Maybe<Notes_Labels_Mutation_Response>;
  /** delete single row from the table: "notes_labels" */
  delete_notes_labels_by_pk?: Maybe<Notes_Labels>;
  /** delete data from the table: "privacy_enum" */
  delete_privacy_enum?: Maybe<Privacy_Enum_Mutation_Response>;
  /** delete single row from the table: "privacy_enum" */
  delete_privacy_enum_by_pk?: Maybe<Privacy_Enum>;
  /** delete data from the table: "restore_codes" */
  delete_restore_codes?: Maybe<Restore_Codes_Mutation_Response>;
  /** delete single row from the table: "restore_codes" */
  delete_restore_codes_by_pk?: Maybe<Restore_Codes>;
  /** delete data from the table: "restore_codes_enum" */
  delete_restore_codes_enum?: Maybe<Restore_Codes_Enum_Mutation_Response>;
  /** delete single row from the table: "restore_codes_enum" */
  delete_restore_codes_enum_by_pk?: Maybe<Restore_Codes_Enum>;
  /** delete data from the table: "ritual_type_enum" */
  delete_ritual_type_enum?: Maybe<Ritual_Type_Enum_Mutation_Response>;
  /** delete single row from the table: "ritual_type_enum" */
  delete_ritual_type_enum_by_pk?: Maybe<Ritual_Type_Enum>;
  /** delete data from the table: "sprints" */
  delete_sprints?: Maybe<Sprints_Mutation_Response>;
  /** delete single row from the table: "sprints" */
  delete_sprints_by_pk?: Maybe<Sprints>;
  /** insert data into the table: "achievements" */
  insert_achievements?: Maybe<Achievements_Mutation_Response>;
  /** insert a single row into the table: "achievements" */
  insert_achievements_one?: Maybe<Achievements>;
  /** insert data into the table: "addons" */
  insert_addons?: Maybe<Addons_Mutation_Response>;
  /** insert data into the table: "addons_enum" */
  insert_addons_enum?: Maybe<Addons_Enum_Mutation_Response>;
  /** insert a single row into the table: "addons_enum" */
  insert_addons_enum_one?: Maybe<Addons_Enum>;
  /** insert a single row into the table: "addons" */
  insert_addons_one?: Maybe<Addons>;
  /** insert data into the table: "goal_difficulty_enum" */
  insert_goal_difficulty_enum?: Maybe<Goal_Difficulty_Enum_Mutation_Response>;
  /** insert a single row into the table: "goal_difficulty_enum" */
  insert_goal_difficulty_enum_one?: Maybe<Goal_Difficulty_Enum>;
  /** insert data into the table: "goal_status_enum" */
  insert_goal_status_enum?: Maybe<Goal_Status_Enum_Mutation_Response>;
  /** insert a single row into the table: "goal_status_enum" */
  insert_goal_status_enum_one?: Maybe<Goal_Status_Enum>;
  /** insert data into the table: "goals" */
  insert_goals?: Maybe<Goals_Mutation_Response>;
  /** insert a single row into the table: "goals" */
  insert_goals_one?: Maybe<Goals>;
  /** insert data into the table: "goals_rituals" */
  insert_goals_rituals?: Maybe<Goals_Rituals_Mutation_Response>;
  /** insert a single row into the table: "goals_rituals" */
  insert_goals_rituals_one?: Maybe<Goals_Rituals>;
  /** insert data into the table: "goals_slides" */
  insert_goals_slides?: Maybe<Goals_Slides_Mutation_Response>;
  /** insert a single row into the table: "goals_slides" */
  insert_goals_slides_one?: Maybe<Goals_Slides>;
  /** insert data into the table: "heroes" */
  insert_heroes?: Maybe<Heroes_Mutation_Response>;
  /** insert a single row into the table: "heroes" */
  insert_heroes_one?: Maybe<Heroes>;
  /** insert data into the table: "heroes_roles" */
  insert_heroes_roles?: Maybe<Heroes_Roles_Mutation_Response>;
  /** insert a single row into the table: "heroes_roles" */
  insert_heroes_roles_one?: Maybe<Heroes_Roles>;
  /** insert data into the table: "heroes_tokens" */
  insert_heroes_tokens?: Maybe<Heroes_Tokens_Mutation_Response>;
  /** insert a single row into the table: "heroes_tokens" */
  insert_heroes_tokens_one?: Maybe<Heroes_Tokens>;
  /** insert data into the table: "notepad" */
  insert_notepad?: Maybe<Notepad_Mutation_Response>;
  /** insert a single row into the table: "notepad" */
  insert_notepad_one?: Maybe<Notepad>;
  /** insert data into the table: "notes" */
  insert_notes?: Maybe<Notes_Mutation_Response>;
  /** insert data into the table: "notes_labels" */
  insert_notes_labels?: Maybe<Notes_Labels_Mutation_Response>;
  /** insert a single row into the table: "notes_labels" */
  insert_notes_labels_one?: Maybe<Notes_Labels>;
  /** insert a single row into the table: "notes" */
  insert_notes_one?: Maybe<Notes>;
  /** insert data into the table: "privacy_enum" */
  insert_privacy_enum?: Maybe<Privacy_Enum_Mutation_Response>;
  /** insert a single row into the table: "privacy_enum" */
  insert_privacy_enum_one?: Maybe<Privacy_Enum>;
  /** insert data into the table: "restore_codes" */
  insert_restore_codes?: Maybe<Restore_Codes_Mutation_Response>;
  /** insert data into the table: "restore_codes_enum" */
  insert_restore_codes_enum?: Maybe<Restore_Codes_Enum_Mutation_Response>;
  /** insert a single row into the table: "restore_codes_enum" */
  insert_restore_codes_enum_one?: Maybe<Restore_Codes_Enum>;
  /** insert a single row into the table: "restore_codes" */
  insert_restore_codes_one?: Maybe<Restore_Codes>;
  /** insert data into the table: "ritual_type_enum" */
  insert_ritual_type_enum?: Maybe<Ritual_Type_Enum_Mutation_Response>;
  /** insert a single row into the table: "ritual_type_enum" */
  insert_ritual_type_enum_one?: Maybe<Ritual_Type_Enum>;
  /** insert data into the table: "sprints" */
  insert_sprints?: Maybe<Sprints_Mutation_Response>;
  /** insert a single row into the table: "sprints" */
  insert_sprints_one?: Maybe<Sprints>;
  /** update data of the table: "achievements" */
  update_achievements?: Maybe<Achievements_Mutation_Response>;
  /** update single row of the table: "achievements" */
  update_achievements_by_pk?: Maybe<Achievements>;
  /** update multiples rows of table: "achievements" */
  update_achievements_many?: Maybe<Array<Maybe<Achievements_Mutation_Response>>>;
  /** update data of the table: "addons" */
  update_addons?: Maybe<Addons_Mutation_Response>;
  /** update single row of the table: "addons" */
  update_addons_by_pk?: Maybe<Addons>;
  /** update data of the table: "addons_enum" */
  update_addons_enum?: Maybe<Addons_Enum_Mutation_Response>;
  /** update single row of the table: "addons_enum" */
  update_addons_enum_by_pk?: Maybe<Addons_Enum>;
  /** update multiples rows of table: "addons_enum" */
  update_addons_enum_many?: Maybe<Array<Maybe<Addons_Enum_Mutation_Response>>>;
  /** update multiples rows of table: "addons" */
  update_addons_many?: Maybe<Array<Maybe<Addons_Mutation_Response>>>;
  /** update data of the table: "goal_difficulty_enum" */
  update_goal_difficulty_enum?: Maybe<Goal_Difficulty_Enum_Mutation_Response>;
  /** update single row of the table: "goal_difficulty_enum" */
  update_goal_difficulty_enum_by_pk?: Maybe<Goal_Difficulty_Enum>;
  /** update multiples rows of table: "goal_difficulty_enum" */
  update_goal_difficulty_enum_many?: Maybe<Array<Maybe<Goal_Difficulty_Enum_Mutation_Response>>>;
  /** update data of the table: "goal_status_enum" */
  update_goal_status_enum?: Maybe<Goal_Status_Enum_Mutation_Response>;
  /** update single row of the table: "goal_status_enum" */
  update_goal_status_enum_by_pk?: Maybe<Goal_Status_Enum>;
  /** update multiples rows of table: "goal_status_enum" */
  update_goal_status_enum_many?: Maybe<Array<Maybe<Goal_Status_Enum_Mutation_Response>>>;
  /** update data of the table: "goals" */
  update_goals?: Maybe<Goals_Mutation_Response>;
  /** update single row of the table: "goals" */
  update_goals_by_pk?: Maybe<Goals>;
  /** update multiples rows of table: "goals" */
  update_goals_many?: Maybe<Array<Maybe<Goals_Mutation_Response>>>;
  /** update data of the table: "goals_rituals" */
  update_goals_rituals?: Maybe<Goals_Rituals_Mutation_Response>;
  /** update single row of the table: "goals_rituals" */
  update_goals_rituals_by_pk?: Maybe<Goals_Rituals>;
  /** update multiples rows of table: "goals_rituals" */
  update_goals_rituals_many?: Maybe<Array<Maybe<Goals_Rituals_Mutation_Response>>>;
  /** update data of the table: "goals_slides" */
  update_goals_slides?: Maybe<Goals_Slides_Mutation_Response>;
  /** update single row of the table: "goals_slides" */
  update_goals_slides_by_pk?: Maybe<Goals_Slides>;
  /** update multiples rows of table: "goals_slides" */
  update_goals_slides_many?: Maybe<Array<Maybe<Goals_Slides_Mutation_Response>>>;
  /** update data of the table: "heroes" */
  update_heroes?: Maybe<Heroes_Mutation_Response>;
  /** update single row of the table: "heroes" */
  update_heroes_by_pk?: Maybe<Heroes>;
  /** update multiples rows of table: "heroes" */
  update_heroes_many?: Maybe<Array<Maybe<Heroes_Mutation_Response>>>;
  /** update data of the table: "heroes_roles" */
  update_heroes_roles?: Maybe<Heroes_Roles_Mutation_Response>;
  /** update single row of the table: "heroes_roles" */
  update_heroes_roles_by_pk?: Maybe<Heroes_Roles>;
  /** update multiples rows of table: "heroes_roles" */
  update_heroes_roles_many?: Maybe<Array<Maybe<Heroes_Roles_Mutation_Response>>>;
  /** update data of the table: "heroes_tokens" */
  update_heroes_tokens?: Maybe<Heroes_Tokens_Mutation_Response>;
  /** update single row of the table: "heroes_tokens" */
  update_heroes_tokens_by_pk?: Maybe<Heroes_Tokens>;
  /** update multiples rows of table: "heroes_tokens" */
  update_heroes_tokens_many?: Maybe<Array<Maybe<Heroes_Tokens_Mutation_Response>>>;
  /** update data of the table: "notepad" */
  update_notepad?: Maybe<Notepad_Mutation_Response>;
  /** update single row of the table: "notepad" */
  update_notepad_by_pk?: Maybe<Notepad>;
  /** update multiples rows of table: "notepad" */
  update_notepad_many?: Maybe<Array<Maybe<Notepad_Mutation_Response>>>;
  /** update data of the table: "notes" */
  update_notes?: Maybe<Notes_Mutation_Response>;
  /** update single row of the table: "notes" */
  update_notes_by_pk?: Maybe<Notes>;
  /** update data of the table: "notes_labels" */
  update_notes_labels?: Maybe<Notes_Labels_Mutation_Response>;
  /** update single row of the table: "notes_labels" */
  update_notes_labels_by_pk?: Maybe<Notes_Labels>;
  /** update multiples rows of table: "notes_labels" */
  update_notes_labels_many?: Maybe<Array<Maybe<Notes_Labels_Mutation_Response>>>;
  /** update multiples rows of table: "notes" */
  update_notes_many?: Maybe<Array<Maybe<Notes_Mutation_Response>>>;
  /** update data of the table: "privacy_enum" */
  update_privacy_enum?: Maybe<Privacy_Enum_Mutation_Response>;
  /** update single row of the table: "privacy_enum" */
  update_privacy_enum_by_pk?: Maybe<Privacy_Enum>;
  /** update multiples rows of table: "privacy_enum" */
  update_privacy_enum_many?: Maybe<Array<Maybe<Privacy_Enum_Mutation_Response>>>;
  /** update data of the table: "restore_codes" */
  update_restore_codes?: Maybe<Restore_Codes_Mutation_Response>;
  /** update single row of the table: "restore_codes" */
  update_restore_codes_by_pk?: Maybe<Restore_Codes>;
  /** update data of the table: "restore_codes_enum" */
  update_restore_codes_enum?: Maybe<Restore_Codes_Enum_Mutation_Response>;
  /** update single row of the table: "restore_codes_enum" */
  update_restore_codes_enum_by_pk?: Maybe<Restore_Codes_Enum>;
  /** update multiples rows of table: "restore_codes_enum" */
  update_restore_codes_enum_many?: Maybe<Array<Maybe<Restore_Codes_Enum_Mutation_Response>>>;
  /** update multiples rows of table: "restore_codes" */
  update_restore_codes_many?: Maybe<Array<Maybe<Restore_Codes_Mutation_Response>>>;
  /** update data of the table: "ritual_type_enum" */
  update_ritual_type_enum?: Maybe<Ritual_Type_Enum_Mutation_Response>;
  /** update single row of the table: "ritual_type_enum" */
  update_ritual_type_enum_by_pk?: Maybe<Ritual_Type_Enum>;
  /** update multiples rows of table: "ritual_type_enum" */
  update_ritual_type_enum_many?: Maybe<Array<Maybe<Ritual_Type_Enum_Mutation_Response>>>;
  /** update data of the table: "sprints" */
  update_sprints?: Maybe<Sprints_Mutation_Response>;
  /** update single row of the table: "sprints" */
  update_sprints_by_pk?: Maybe<Sprints>;
  /** update multiples rows of table: "sprints" */
  update_sprints_many?: Maybe<Array<Maybe<Sprints_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AchievementsArgs = {
  where: Achievements_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Achievements_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_AddonsArgs = {
  where: Addons_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Addons_By_PkArgs = {
  addon: Scalars['String']['input'];
  owner_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Addons_EnumArgs = {
  where: Addons_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Addons_Enum_By_PkArgs = {
  addon: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Goal_Difficulty_EnumArgs = {
  where: Goal_Difficulty_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Goal_Difficulty_Enum_By_PkArgs = {
  difficulty: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Goal_Status_EnumArgs = {
  where: Goal_Status_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Goal_Status_Enum_By_PkArgs = {
  status: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_GoalsArgs = {
  where: Goals_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Goals_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Goals_RitualsArgs = {
  where: Goals_Rituals_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Goals_Rituals_By_PkArgs = {
  goal_id: Scalars['uuid']['input'];
  ritual_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Goals_SlidesArgs = {
  where: Goals_Slides_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Goals_Slides_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_HeroesArgs = {
  where: Heroes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Heroes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Heroes_RolesArgs = {
  where: Heroes_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Heroes_Roles_By_PkArgs = {
  role: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Heroes_TokensArgs = {
  where: Heroes_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Heroes_Tokens_By_PkArgs = {
  session_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_NotepadArgs = {
  where: Notepad_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Notepad_By_PkArgs = {
  owner_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_NotesArgs = {
  where: Notes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Notes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Notes_LabelsArgs = {
  where: Notes_Labels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Notes_Labels_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Privacy_EnumArgs = {
  where: Privacy_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Privacy_Enum_By_PkArgs = {
  privacy: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Restore_CodesArgs = {
  where: Restore_Codes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Restore_Codes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Restore_Codes_EnumArgs = {
  where: Restore_Codes_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Restore_Codes_Enum_By_PkArgs = {
  type: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Ritual_Type_EnumArgs = {
  where: Ritual_Type_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ritual_Type_Enum_By_PkArgs = {
  ritual_type: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SprintsArgs = {
  where: Sprints_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sprints_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_AchievementsArgs = {
  objects: Array<Achievements_Insert_Input>;
  on_conflict?: InputMaybe<Achievements_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Achievements_OneArgs = {
  object: Achievements_Insert_Input;
  on_conflict?: InputMaybe<Achievements_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_AddonsArgs = {
  objects: Array<Addons_Insert_Input>;
  on_conflict?: InputMaybe<Addons_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Addons_EnumArgs = {
  objects: Array<Addons_Enum_Insert_Input>;
  on_conflict?: InputMaybe<Addons_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Addons_Enum_OneArgs = {
  object: Addons_Enum_Insert_Input;
  on_conflict?: InputMaybe<Addons_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Addons_OneArgs = {
  object: Addons_Insert_Input;
  on_conflict?: InputMaybe<Addons_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Goal_Difficulty_EnumArgs = {
  objects: Array<Goal_Difficulty_Enum_Insert_Input>;
  on_conflict?: InputMaybe<Goal_Difficulty_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Goal_Difficulty_Enum_OneArgs = {
  object: Goal_Difficulty_Enum_Insert_Input;
  on_conflict?: InputMaybe<Goal_Difficulty_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Goal_Status_EnumArgs = {
  objects: Array<Goal_Status_Enum_Insert_Input>;
  on_conflict?: InputMaybe<Goal_Status_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Goal_Status_Enum_OneArgs = {
  object: Goal_Status_Enum_Insert_Input;
  on_conflict?: InputMaybe<Goal_Status_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GoalsArgs = {
  objects: Array<Goals_Insert_Input>;
  on_conflict?: InputMaybe<Goals_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Goals_OneArgs = {
  object: Goals_Insert_Input;
  on_conflict?: InputMaybe<Goals_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Goals_RitualsArgs = {
  objects: Array<Goals_Rituals_Insert_Input>;
  on_conflict?: InputMaybe<Goals_Rituals_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Goals_Rituals_OneArgs = {
  object: Goals_Rituals_Insert_Input;
  on_conflict?: InputMaybe<Goals_Rituals_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Goals_SlidesArgs = {
  objects: Array<Goals_Slides_Insert_Input>;
  on_conflict?: InputMaybe<Goals_Slides_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Goals_Slides_OneArgs = {
  object: Goals_Slides_Insert_Input;
  on_conflict?: InputMaybe<Goals_Slides_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_HeroesArgs = {
  objects: Array<Heroes_Insert_Input>;
  on_conflict?: InputMaybe<Heroes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Heroes_OneArgs = {
  object: Heroes_Insert_Input;
  on_conflict?: InputMaybe<Heroes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Heroes_RolesArgs = {
  objects: Array<Heroes_Roles_Insert_Input>;
  on_conflict?: InputMaybe<Heroes_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Heroes_Roles_OneArgs = {
  object: Heroes_Roles_Insert_Input;
  on_conflict?: InputMaybe<Heroes_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Heroes_TokensArgs = {
  objects: Array<Heroes_Tokens_Insert_Input>;
  on_conflict?: InputMaybe<Heroes_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Heroes_Tokens_OneArgs = {
  object: Heroes_Tokens_Insert_Input;
  on_conflict?: InputMaybe<Heroes_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_NotepadArgs = {
  objects: Array<Notepad_Insert_Input>;
  on_conflict?: InputMaybe<Notepad_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notepad_OneArgs = {
  object: Notepad_Insert_Input;
  on_conflict?: InputMaybe<Notepad_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_NotesArgs = {
  objects: Array<Notes_Insert_Input>;
  on_conflict?: InputMaybe<Notes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notes_LabelsArgs = {
  objects: Array<Notes_Labels_Insert_Input>;
  on_conflict?: InputMaybe<Notes_Labels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notes_Labels_OneArgs = {
  object: Notes_Labels_Insert_Input;
  on_conflict?: InputMaybe<Notes_Labels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notes_OneArgs = {
  object: Notes_Insert_Input;
  on_conflict?: InputMaybe<Notes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Privacy_EnumArgs = {
  objects: Array<Privacy_Enum_Insert_Input>;
  on_conflict?: InputMaybe<Privacy_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Privacy_Enum_OneArgs = {
  object: Privacy_Enum_Insert_Input;
  on_conflict?: InputMaybe<Privacy_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Restore_CodesArgs = {
  objects: Array<Restore_Codes_Insert_Input>;
  on_conflict?: InputMaybe<Restore_Codes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Restore_Codes_EnumArgs = {
  objects: Array<Restore_Codes_Enum_Insert_Input>;
  on_conflict?: InputMaybe<Restore_Codes_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Restore_Codes_Enum_OneArgs = {
  object: Restore_Codes_Enum_Insert_Input;
  on_conflict?: InputMaybe<Restore_Codes_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Restore_Codes_OneArgs = {
  object: Restore_Codes_Insert_Input;
  on_conflict?: InputMaybe<Restore_Codes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ritual_Type_EnumArgs = {
  objects: Array<Ritual_Type_Enum_Insert_Input>;
  on_conflict?: InputMaybe<Ritual_Type_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ritual_Type_Enum_OneArgs = {
  object: Ritual_Type_Enum_Insert_Input;
  on_conflict?: InputMaybe<Ritual_Type_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SprintsArgs = {
  objects: Array<Sprints_Insert_Input>;
  on_conflict?: InputMaybe<Sprints_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sprints_OneArgs = {
  object: Sprints_Insert_Input;
  on_conflict?: InputMaybe<Sprints_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AchievementsArgs = {
  _set?: InputMaybe<Achievements_Set_Input>;
  where: Achievements_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Achievements_By_PkArgs = {
  _set?: InputMaybe<Achievements_Set_Input>;
  pk_columns: Achievements_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Achievements_ManyArgs = {
  updates: Array<Achievements_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AddonsArgs = {
  _set?: InputMaybe<Addons_Set_Input>;
  where: Addons_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Addons_By_PkArgs = {
  _set?: InputMaybe<Addons_Set_Input>;
  pk_columns: Addons_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Addons_EnumArgs = {
  _set?: InputMaybe<Addons_Enum_Set_Input>;
  where: Addons_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Addons_Enum_By_PkArgs = {
  _set?: InputMaybe<Addons_Enum_Set_Input>;
  pk_columns: Addons_Enum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Addons_Enum_ManyArgs = {
  updates: Array<Addons_Enum_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Addons_ManyArgs = {
  updates: Array<Addons_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Goal_Difficulty_EnumArgs = {
  _set?: InputMaybe<Goal_Difficulty_Enum_Set_Input>;
  where: Goal_Difficulty_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Goal_Difficulty_Enum_By_PkArgs = {
  _set?: InputMaybe<Goal_Difficulty_Enum_Set_Input>;
  pk_columns: Goal_Difficulty_Enum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Goal_Difficulty_Enum_ManyArgs = {
  updates: Array<Goal_Difficulty_Enum_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Goal_Status_EnumArgs = {
  _set?: InputMaybe<Goal_Status_Enum_Set_Input>;
  where: Goal_Status_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Goal_Status_Enum_By_PkArgs = {
  _set?: InputMaybe<Goal_Status_Enum_Set_Input>;
  pk_columns: Goal_Status_Enum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Goal_Status_Enum_ManyArgs = {
  updates: Array<Goal_Status_Enum_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GoalsArgs = {
  _set?: InputMaybe<Goals_Set_Input>;
  where: Goals_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Goals_By_PkArgs = {
  _set?: InputMaybe<Goals_Set_Input>;
  pk_columns: Goals_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Goals_ManyArgs = {
  updates: Array<Goals_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Goals_RitualsArgs = {
  _inc?: InputMaybe<Goals_Rituals_Inc_Input>;
  _set?: InputMaybe<Goals_Rituals_Set_Input>;
  where: Goals_Rituals_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Goals_Rituals_By_PkArgs = {
  _inc?: InputMaybe<Goals_Rituals_Inc_Input>;
  _set?: InputMaybe<Goals_Rituals_Set_Input>;
  pk_columns: Goals_Rituals_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Goals_Rituals_ManyArgs = {
  updates: Array<Goals_Rituals_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Goals_SlidesArgs = {
  _set?: InputMaybe<Goals_Slides_Set_Input>;
  where: Goals_Slides_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Goals_Slides_By_PkArgs = {
  _set?: InputMaybe<Goals_Slides_Set_Input>;
  pk_columns: Goals_Slides_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Goals_Slides_ManyArgs = {
  updates: Array<Goals_Slides_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_HeroesArgs = {
  _inc?: InputMaybe<Heroes_Inc_Input>;
  _set?: InputMaybe<Heroes_Set_Input>;
  where: Heroes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Heroes_By_PkArgs = {
  _inc?: InputMaybe<Heroes_Inc_Input>;
  _set?: InputMaybe<Heroes_Set_Input>;
  pk_columns: Heroes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Heroes_ManyArgs = {
  updates: Array<Heroes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Heroes_RolesArgs = {
  _set?: InputMaybe<Heroes_Roles_Set_Input>;
  where: Heroes_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Heroes_Roles_By_PkArgs = {
  _set?: InputMaybe<Heroes_Roles_Set_Input>;
  pk_columns: Heroes_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Heroes_Roles_ManyArgs = {
  updates: Array<Heroes_Roles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Heroes_TokensArgs = {
  _set?: InputMaybe<Heroes_Tokens_Set_Input>;
  where: Heroes_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Heroes_Tokens_By_PkArgs = {
  _set?: InputMaybe<Heroes_Tokens_Set_Input>;
  pk_columns: Heroes_Tokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Heroes_Tokens_ManyArgs = {
  updates: Array<Heroes_Tokens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_NotepadArgs = {
  _set?: InputMaybe<Notepad_Set_Input>;
  where: Notepad_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Notepad_By_PkArgs = {
  _set?: InputMaybe<Notepad_Set_Input>;
  pk_columns: Notepad_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Notepad_ManyArgs = {
  updates: Array<Notepad_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_NotesArgs = {
  _set?: InputMaybe<Notes_Set_Input>;
  where: Notes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Notes_By_PkArgs = {
  _set?: InputMaybe<Notes_Set_Input>;
  pk_columns: Notes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Notes_LabelsArgs = {
  _inc?: InputMaybe<Notes_Labels_Inc_Input>;
  _set?: InputMaybe<Notes_Labels_Set_Input>;
  where: Notes_Labels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Notes_Labels_By_PkArgs = {
  _inc?: InputMaybe<Notes_Labels_Inc_Input>;
  _set?: InputMaybe<Notes_Labels_Set_Input>;
  pk_columns: Notes_Labels_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Notes_Labels_ManyArgs = {
  updates: Array<Notes_Labels_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Notes_ManyArgs = {
  updates: Array<Notes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Privacy_EnumArgs = {
  _set?: InputMaybe<Privacy_Enum_Set_Input>;
  where: Privacy_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Privacy_Enum_By_PkArgs = {
  _set?: InputMaybe<Privacy_Enum_Set_Input>;
  pk_columns: Privacy_Enum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Privacy_Enum_ManyArgs = {
  updates: Array<Privacy_Enum_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Restore_CodesArgs = {
  _set?: InputMaybe<Restore_Codes_Set_Input>;
  where: Restore_Codes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Restore_Codes_By_PkArgs = {
  _set?: InputMaybe<Restore_Codes_Set_Input>;
  pk_columns: Restore_Codes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Restore_Codes_EnumArgs = {
  _set?: InputMaybe<Restore_Codes_Enum_Set_Input>;
  where: Restore_Codes_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Restore_Codes_Enum_By_PkArgs = {
  _set?: InputMaybe<Restore_Codes_Enum_Set_Input>;
  pk_columns: Restore_Codes_Enum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Restore_Codes_Enum_ManyArgs = {
  updates: Array<Restore_Codes_Enum_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Restore_Codes_ManyArgs = {
  updates: Array<Restore_Codes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Ritual_Type_EnumArgs = {
  _set?: InputMaybe<Ritual_Type_Enum_Set_Input>;
  where: Ritual_Type_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ritual_Type_Enum_By_PkArgs = {
  _set?: InputMaybe<Ritual_Type_Enum_Set_Input>;
  pk_columns: Ritual_Type_Enum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ritual_Type_Enum_ManyArgs = {
  updates: Array<Ritual_Type_Enum_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SprintsArgs = {
  _append?: InputMaybe<Sprints_Append_Input>;
  _delete_at_path?: InputMaybe<Sprints_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Sprints_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Sprints_Delete_Key_Input>;
  _inc?: InputMaybe<Sprints_Inc_Input>;
  _prepend?: InputMaybe<Sprints_Prepend_Input>;
  _set?: InputMaybe<Sprints_Set_Input>;
  where: Sprints_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sprints_By_PkArgs = {
  _append?: InputMaybe<Sprints_Append_Input>;
  _delete_at_path?: InputMaybe<Sprints_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Sprints_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Sprints_Delete_Key_Input>;
  _inc?: InputMaybe<Sprints_Inc_Input>;
  _prepend?: InputMaybe<Sprints_Prepend_Input>;
  _set?: InputMaybe<Sprints_Set_Input>;
  pk_columns: Sprints_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Sprints_ManyArgs = {
  updates: Array<Sprints_Updates>;
};

/** real time info */
export type Notepad = {
  __typename?: 'notepad';
  active: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  /** An object relationship */
  hero: Heroes;
  id: Scalars['uuid']['output'];
  locked: Scalars['Boolean']['output'];
  owner_id: Scalars['uuid']['output'];
};

/** aggregated selection of "notepad" */
export type Notepad_Aggregate = {
  __typename?: 'notepad_aggregate';
  aggregate?: Maybe<Notepad_Aggregate_Fields>;
  nodes: Array<Notepad>;
};

/** aggregate fields of "notepad" */
export type Notepad_Aggregate_Fields = {
  __typename?: 'notepad_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Notepad_Max_Fields>;
  min?: Maybe<Notepad_Min_Fields>;
};


/** aggregate fields of "notepad" */
export type Notepad_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Notepad_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "notepad". All fields are combined with a logical 'AND'. */
export type Notepad_Bool_Exp = {
  _and?: InputMaybe<Array<Notepad_Bool_Exp>>;
  _not?: InputMaybe<Notepad_Bool_Exp>;
  _or?: InputMaybe<Array<Notepad_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  hero?: InputMaybe<Heroes_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  locked?: InputMaybe<Boolean_Comparison_Exp>;
  owner_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "notepad" */
export enum Notepad_Constraint {
  /** unique or primary key constraint on columns "owner_id" */
  NotepadPkey = 'notepad_pkey'
}

/** input type for inserting data into table "notepad" */
export type Notepad_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  hero?: InputMaybe<Heroes_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Notepad_Max_Fields = {
  __typename?: 'notepad_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Notepad_Min_Fields = {
  __typename?: 'notepad_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "notepad" */
export type Notepad_Mutation_Response = {
  __typename?: 'notepad_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Notepad>;
};

/** input type for inserting object relation for remote table "notepad" */
export type Notepad_Obj_Rel_Insert_Input = {
  data: Notepad_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Notepad_On_Conflict>;
};

/** on_conflict condition type for table "notepad" */
export type Notepad_On_Conflict = {
  constraint: Notepad_Constraint;
  update_columns?: Array<Notepad_Update_Column>;
  where?: InputMaybe<Notepad_Bool_Exp>;
};

/** Ordering options when selecting data from "notepad". */
export type Notepad_Order_By = {
  active?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  hero?: InputMaybe<Heroes_Order_By>;
  id?: InputMaybe<Order_By>;
  locked?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: notepad */
export type Notepad_Pk_Columns_Input = {
  owner_id: Scalars['uuid']['input'];
};

/** select columns of table "notepad" */
export enum Notepad_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Locked = 'locked',
  /** column name */
  OwnerId = 'owner_id'
}

/** input type for updating data in table "notepad" */
export type Notepad_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "notepad" */
export type Notepad_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Notepad_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Notepad_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "notepad" */
export enum Notepad_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Locked = 'locked',
  /** column name */
  OwnerId = 'owner_id'
}

export type Notepad_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Notepad_Set_Input>;
  /** filter the rows which have to be updated */
  where: Notepad_Bool_Exp;
};

/** columns and relationships of "notes" */
export type Notes = {
  __typename?: 'notes';
  archived?: Maybe<Scalars['Boolean']['output']>;
  created_at: Scalars['timestamptz']['output'];
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description: Scalars['String']['output'];
  /** An object relationship */
  hero?: Maybe<Heroes>;
  id: Scalars['uuid']['output'];
  is_favorite?: Maybe<Scalars['Boolean']['output']>;
  /** An object relationship */
  label?: Maybe<Notes_Labels>;
  label_id?: Maybe<Scalars['uuid']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "notes" */
export type Notes_Aggregate = {
  __typename?: 'notes_aggregate';
  aggregate?: Maybe<Notes_Aggregate_Fields>;
  nodes: Array<Notes>;
};

export type Notes_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Notes_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Notes_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Notes_Aggregate_Bool_Exp_Count>;
};

export type Notes_Aggregate_Bool_Exp_Bool_And = {
  arguments: Notes_Select_Column_Notes_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Notes_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Notes_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Notes_Select_Column_Notes_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Notes_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Notes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Notes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Notes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "notes" */
export type Notes_Aggregate_Fields = {
  __typename?: 'notes_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Notes_Max_Fields>;
  min?: Maybe<Notes_Min_Fields>;
};


/** aggregate fields of "notes" */
export type Notes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Notes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "notes" */
export type Notes_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Notes_Max_Order_By>;
  min?: InputMaybe<Notes_Min_Order_By>;
};

/** input type for inserting array relation for remote table "notes" */
export type Notes_Arr_Rel_Insert_Input = {
  data: Array<Notes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Notes_On_Conflict>;
};

/** Boolean expression to filter rows from the table "notes". All fields are combined with a logical 'AND'. */
export type Notes_Bool_Exp = {
  _and?: InputMaybe<Array<Notes_Bool_Exp>>;
  _not?: InputMaybe<Notes_Bool_Exp>;
  _or?: InputMaybe<Array<Notes_Bool_Exp>>;
  archived?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  hero?: InputMaybe<Heroes_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_favorite?: InputMaybe<Boolean_Comparison_Exp>;
  label?: InputMaybe<Notes_Labels_Bool_Exp>;
  label_id?: InputMaybe<Uuid_Comparison_Exp>;
  owner_id?: InputMaybe<Uuid_Comparison_Exp>;
  tag?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "notes" */
export enum Notes_Constraint {
  /** unique or primary key constraint on columns "id" */
  TasksPkey = 'tasks_pkey'
}

/** input type for inserting data into table "notes" */
export type Notes_Insert_Input = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  hero?: InputMaybe<Heroes_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Notes_Labels_Obj_Rel_Insert_Input>;
  label_id?: InputMaybe<Scalars['uuid']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** columns and relationships of "notes_labels" */
export type Notes_Labels = {
  __typename?: 'notes_labels';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  owner_id: Scalars['uuid']['output'];
  rating: Scalars['Int']['output'];
};

/** aggregated selection of "notes_labels" */
export type Notes_Labels_Aggregate = {
  __typename?: 'notes_labels_aggregate';
  aggregate?: Maybe<Notes_Labels_Aggregate_Fields>;
  nodes: Array<Notes_Labels>;
};

/** aggregate fields of "notes_labels" */
export type Notes_Labels_Aggregate_Fields = {
  __typename?: 'notes_labels_aggregate_fields';
  avg?: Maybe<Notes_Labels_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Notes_Labels_Max_Fields>;
  min?: Maybe<Notes_Labels_Min_Fields>;
  stddev?: Maybe<Notes_Labels_Stddev_Fields>;
  stddev_pop?: Maybe<Notes_Labels_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Notes_Labels_Stddev_Samp_Fields>;
  sum?: Maybe<Notes_Labels_Sum_Fields>;
  var_pop?: Maybe<Notes_Labels_Var_Pop_Fields>;
  var_samp?: Maybe<Notes_Labels_Var_Samp_Fields>;
  variance?: Maybe<Notes_Labels_Variance_Fields>;
};


/** aggregate fields of "notes_labels" */
export type Notes_Labels_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Notes_Labels_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Notes_Labels_Avg_Fields = {
  __typename?: 'notes_labels_avg_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "notes_labels". All fields are combined with a logical 'AND'. */
export type Notes_Labels_Bool_Exp = {
  _and?: InputMaybe<Array<Notes_Labels_Bool_Exp>>;
  _not?: InputMaybe<Notes_Labels_Bool_Exp>;
  _or?: InputMaybe<Array<Notes_Labels_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  owner_id?: InputMaybe<Uuid_Comparison_Exp>;
  rating?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "notes_labels" */
export enum Notes_Labels_Constraint {
  /** unique or primary key constraint on columns "id" */
  NotesLabelsPkey = 'notes_labels_pkey'
}

/** input type for incrementing numeric columns in table "notes_labels" */
export type Notes_Labels_Inc_Input = {
  rating?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "notes_labels" */
export type Notes_Labels_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Notes_Labels_Max_Fields = {
  __typename?: 'notes_labels_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Notes_Labels_Min_Fields = {
  __typename?: 'notes_labels_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "notes_labels" */
export type Notes_Labels_Mutation_Response = {
  __typename?: 'notes_labels_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Notes_Labels>;
};

/** input type for inserting object relation for remote table "notes_labels" */
export type Notes_Labels_Obj_Rel_Insert_Input = {
  data: Notes_Labels_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Notes_Labels_On_Conflict>;
};

/** on_conflict condition type for table "notes_labels" */
export type Notes_Labels_On_Conflict = {
  constraint: Notes_Labels_Constraint;
  update_columns?: Array<Notes_Labels_Update_Column>;
  where?: InputMaybe<Notes_Labels_Bool_Exp>;
};

/** Ordering options when selecting data from "notes_labels". */
export type Notes_Labels_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** primary key columns input for table: notes_labels */
export type Notes_Labels_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "notes_labels" */
export enum Notes_Labels_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Rating = 'rating'
}

/** input type for updating data in table "notes_labels" */
export type Notes_Labels_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Notes_Labels_Stddev_Fields = {
  __typename?: 'notes_labels_stddev_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Notes_Labels_Stddev_Pop_Fields = {
  __typename?: 'notes_labels_stddev_pop_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Notes_Labels_Stddev_Samp_Fields = {
  __typename?: 'notes_labels_stddev_samp_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "notes_labels" */
export type Notes_Labels_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Notes_Labels_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Notes_Labels_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Notes_Labels_Sum_Fields = {
  __typename?: 'notes_labels_sum_fields';
  rating?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "notes_labels" */
export enum Notes_Labels_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Rating = 'rating'
}

export type Notes_Labels_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Notes_Labels_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Notes_Labels_Set_Input>;
  /** filter the rows which have to be updated */
  where: Notes_Labels_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Notes_Labels_Var_Pop_Fields = {
  __typename?: 'notes_labels_var_pop_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Notes_Labels_Var_Samp_Fields = {
  __typename?: 'notes_labels_var_samp_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Notes_Labels_Variance_Fields = {
  __typename?: 'notes_labels_variance_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** aggregate max on columns */
export type Notes_Max_Fields = {
  __typename?: 'notes_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  label_id?: Maybe<Scalars['uuid']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "notes" */
export type Notes_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  label_id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  tag?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Notes_Min_Fields = {
  __typename?: 'notes_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  label_id?: Maybe<Scalars['uuid']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "notes" */
export type Notes_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  label_id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  tag?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "notes" */
export type Notes_Mutation_Response = {
  __typename?: 'notes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Notes>;
};

/** on_conflict condition type for table "notes" */
export type Notes_On_Conflict = {
  constraint: Notes_Constraint;
  update_columns?: Array<Notes_Update_Column>;
  where?: InputMaybe<Notes_Bool_Exp>;
};

/** Ordering options when selecting data from "notes". */
export type Notes_Order_By = {
  archived?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  hero?: InputMaybe<Heroes_Order_By>;
  id?: InputMaybe<Order_By>;
  is_favorite?: InputMaybe<Order_By>;
  label?: InputMaybe<Notes_Labels_Order_By>;
  label_id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  tag?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: notes */
export type Notes_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "notes" */
export enum Notes_Select_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsFavorite = 'is_favorite',
  /** column name */
  LabelId = 'label_id',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Tag = 'tag',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "notes_aggregate_bool_exp_bool_and_arguments_columns" columns of table "notes" */
export enum Notes_Select_Column_Notes_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Archived = 'archived',
  /** column name */
  IsFavorite = 'is_favorite'
}

/** select "notes_aggregate_bool_exp_bool_or_arguments_columns" columns of table "notes" */
export enum Notes_Select_Column_Notes_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Archived = 'archived',
  /** column name */
  IsFavorite = 'is_favorite'
}

/** input type for updating data in table "notes" */
export type Notes_Set_Input = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  label_id?: InputMaybe<Scalars['uuid']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "notes" */
export type Notes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Notes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Notes_Stream_Cursor_Value_Input = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  label_id?: InputMaybe<Scalars['uuid']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "notes" */
export enum Notes_Update_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsFavorite = 'is_favorite',
  /** column name */
  LabelId = 'label_id',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Tag = 'tag',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Notes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Notes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Notes_Bool_Exp;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** privacy status */
export type Privacy_Enum = {
  __typename?: 'privacy_enum';
  description: Scalars['String']['output'];
  /** An array relationship */
  goals: Array<Goals>;
  /** An aggregate relationship */
  goals_aggregate: Goals_Aggregate;
  privacy: Scalars['String']['output'];
};


/** privacy status */
export type Privacy_EnumGoalsArgs = {
  distinct_on?: InputMaybe<Array<Goals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Order_By>>;
  where?: InputMaybe<Goals_Bool_Exp>;
};


/** privacy status */
export type Privacy_EnumGoals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Order_By>>;
  where?: InputMaybe<Goals_Bool_Exp>;
};

/** aggregated selection of "privacy_enum" */
export type Privacy_Enum_Aggregate = {
  __typename?: 'privacy_enum_aggregate';
  aggregate?: Maybe<Privacy_Enum_Aggregate_Fields>;
  nodes: Array<Privacy_Enum>;
};

/** aggregate fields of "privacy_enum" */
export type Privacy_Enum_Aggregate_Fields = {
  __typename?: 'privacy_enum_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Privacy_Enum_Max_Fields>;
  min?: Maybe<Privacy_Enum_Min_Fields>;
};


/** aggregate fields of "privacy_enum" */
export type Privacy_Enum_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Privacy_Enum_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "privacy_enum". All fields are combined with a logical 'AND'. */
export type Privacy_Enum_Bool_Exp = {
  _and?: InputMaybe<Array<Privacy_Enum_Bool_Exp>>;
  _not?: InputMaybe<Privacy_Enum_Bool_Exp>;
  _or?: InputMaybe<Array<Privacy_Enum_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  goals?: InputMaybe<Goals_Bool_Exp>;
  goals_aggregate?: InputMaybe<Goals_Aggregate_Bool_Exp>;
  privacy?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "privacy_enum" */
export enum Privacy_Enum_Constraint {
  /** unique or primary key constraint on columns "privacy" */
  PrivacyEnumPkey = 'privacy_enum_pkey'
}

/** input type for inserting data into table "privacy_enum" */
export type Privacy_Enum_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  goals?: InputMaybe<Goals_Arr_Rel_Insert_Input>;
  privacy?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Privacy_Enum_Max_Fields = {
  __typename?: 'privacy_enum_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  privacy?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Privacy_Enum_Min_Fields = {
  __typename?: 'privacy_enum_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  privacy?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "privacy_enum" */
export type Privacy_Enum_Mutation_Response = {
  __typename?: 'privacy_enum_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Privacy_Enum>;
};

/** input type for inserting object relation for remote table "privacy_enum" */
export type Privacy_Enum_Obj_Rel_Insert_Input = {
  data: Privacy_Enum_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Privacy_Enum_On_Conflict>;
};

/** on_conflict condition type for table "privacy_enum" */
export type Privacy_Enum_On_Conflict = {
  constraint: Privacy_Enum_Constraint;
  update_columns?: Array<Privacy_Enum_Update_Column>;
  where?: InputMaybe<Privacy_Enum_Bool_Exp>;
};

/** Ordering options when selecting data from "privacy_enum". */
export type Privacy_Enum_Order_By = {
  description?: InputMaybe<Order_By>;
  goals_aggregate?: InputMaybe<Goals_Aggregate_Order_By>;
  privacy?: InputMaybe<Order_By>;
};

/** primary key columns input for table: privacy_enum */
export type Privacy_Enum_Pk_Columns_Input = {
  privacy: Scalars['String']['input'];
};

/** select columns of table "privacy_enum" */
export enum Privacy_Enum_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Privacy = 'privacy'
}

/** input type for updating data in table "privacy_enum" */
export type Privacy_Enum_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  privacy?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "privacy_enum" */
export type Privacy_Enum_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Privacy_Enum_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Privacy_Enum_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  privacy?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "privacy_enum" */
export enum Privacy_Enum_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Privacy = 'privacy'
}

export type Privacy_Enum_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Privacy_Enum_Set_Input>;
  /** filter the rows which have to be updated */
  where: Privacy_Enum_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  achievements: Array<Achievements>;
  /** An aggregate relationship */
  achievements_aggregate: Achievements_Aggregate;
  /** fetch data from the table: "achievements" using primary key columns */
  achievements_by_pk?: Maybe<Achievements>;
  /** An array relationship */
  addons: Array<Addons>;
  /** An aggregate relationship */
  addons_aggregate: Addons_Aggregate;
  /** fetch data from the table: "addons" using primary key columns */
  addons_by_pk?: Maybe<Addons>;
  /** fetch data from the table: "addons_enum" */
  addons_enum: Array<Addons_Enum>;
  /** fetch aggregated fields from the table: "addons_enum" */
  addons_enum_aggregate: Addons_Enum_Aggregate;
  /** fetch data from the table: "addons_enum" using primary key columns */
  addons_enum_by_pk?: Maybe<Addons_Enum>;
  /** fetch data from the table: "goal_difficulty_enum" */
  goal_difficulty_enum: Array<Goal_Difficulty_Enum>;
  /** fetch aggregated fields from the table: "goal_difficulty_enum" */
  goal_difficulty_enum_aggregate: Goal_Difficulty_Enum_Aggregate;
  /** fetch data from the table: "goal_difficulty_enum" using primary key columns */
  goal_difficulty_enum_by_pk?: Maybe<Goal_Difficulty_Enum>;
  /** fetch data from the table: "goal_status_enum" */
  goal_status_enum: Array<Goal_Status_Enum>;
  /** fetch aggregated fields from the table: "goal_status_enum" */
  goal_status_enum_aggregate: Goal_Status_Enum_Aggregate;
  /** fetch data from the table: "goal_status_enum" using primary key columns */
  goal_status_enum_by_pk?: Maybe<Goal_Status_Enum>;
  /** An array relationship */
  goals: Array<Goals>;
  /** An aggregate relationship */
  goals_aggregate: Goals_Aggregate;
  /** fetch data from the table: "goals" using primary key columns */
  goals_by_pk?: Maybe<Goals>;
  /** An array relationship */
  goals_rituals: Array<Goals_Rituals>;
  /** An aggregate relationship */
  goals_rituals_aggregate: Goals_Rituals_Aggregate;
  /** fetch data from the table: "goals_rituals" using primary key columns */
  goals_rituals_by_pk?: Maybe<Goals_Rituals>;
  /** An array relationship */
  goals_slides: Array<Goals_Slides>;
  /** An aggregate relationship */
  goals_slides_aggregate: Goals_Slides_Aggregate;
  /** fetch data from the table: "goals_slides" using primary key columns */
  goals_slides_by_pk?: Maybe<Goals_Slides>;
  /** An array relationship */
  heroes: Array<Heroes>;
  /** An aggregate relationship */
  heroes_aggregate: Heroes_Aggregate;
  /** fetch data from the table: "heroes" using primary key columns */
  heroes_by_pk?: Maybe<Heroes>;
  /** fetch data from the table: "heroes_roles" */
  heroes_roles: Array<Heroes_Roles>;
  /** fetch aggregated fields from the table: "heroes_roles" */
  heroes_roles_aggregate: Heroes_Roles_Aggregate;
  /** fetch data from the table: "heroes_roles" using primary key columns */
  heroes_roles_by_pk?: Maybe<Heroes_Roles>;
  /** fetch data from the table: "heroes_tokens" */
  heroes_tokens: Array<Heroes_Tokens>;
  /** fetch aggregated fields from the table: "heroes_tokens" */
  heroes_tokens_aggregate: Heroes_Tokens_Aggregate;
  /** fetch data from the table: "heroes_tokens" using primary key columns */
  heroes_tokens_by_pk?: Maybe<Heroes_Tokens>;
  /** fetch data from the table: "notepad" */
  notepad: Array<Notepad>;
  /** fetch aggregated fields from the table: "notepad" */
  notepad_aggregate: Notepad_Aggregate;
  /** fetch data from the table: "notepad" using primary key columns */
  notepad_by_pk?: Maybe<Notepad>;
  /** An array relationship */
  notes: Array<Notes>;
  /** An aggregate relationship */
  notes_aggregate: Notes_Aggregate;
  /** fetch data from the table: "notes" using primary key columns */
  notes_by_pk?: Maybe<Notes>;
  /** fetch data from the table: "notes_labels" */
  notes_labels: Array<Notes_Labels>;
  /** fetch aggregated fields from the table: "notes_labels" */
  notes_labels_aggregate: Notes_Labels_Aggregate;
  /** fetch data from the table: "notes_labels" using primary key columns */
  notes_labels_by_pk?: Maybe<Notes_Labels>;
  /** fetch data from the table: "privacy_enum" */
  privacy_enum: Array<Privacy_Enum>;
  /** fetch aggregated fields from the table: "privacy_enum" */
  privacy_enum_aggregate: Privacy_Enum_Aggregate;
  /** fetch data from the table: "privacy_enum" using primary key columns */
  privacy_enum_by_pk?: Maybe<Privacy_Enum>;
  /** fetch data from the table: "restore_codes" */
  restore_codes: Array<Restore_Codes>;
  /** fetch aggregated fields from the table: "restore_codes" */
  restore_codes_aggregate: Restore_Codes_Aggregate;
  /** fetch data from the table: "restore_codes" using primary key columns */
  restore_codes_by_pk?: Maybe<Restore_Codes>;
  /** fetch data from the table: "restore_codes_enum" */
  restore_codes_enum: Array<Restore_Codes_Enum>;
  /** fetch aggregated fields from the table: "restore_codes_enum" */
  restore_codes_enum_aggregate: Restore_Codes_Enum_Aggregate;
  /** fetch data from the table: "restore_codes_enum" using primary key columns */
  restore_codes_enum_by_pk?: Maybe<Restore_Codes_Enum>;
  /** fetch data from the table: "ritual_type_enum" */
  ritual_type_enum: Array<Ritual_Type_Enum>;
  /** fetch aggregated fields from the table: "ritual_type_enum" */
  ritual_type_enum_aggregate: Ritual_Type_Enum_Aggregate;
  /** fetch data from the table: "ritual_type_enum" using primary key columns */
  ritual_type_enum_by_pk?: Maybe<Ritual_Type_Enum>;
  /** An array relationship */
  sprints: Array<Sprints>;
  /** An aggregate relationship */
  sprints_aggregate: Sprints_Aggregate;
  /** fetch data from the table: "sprints" using primary key columns */
  sprints_by_pk?: Maybe<Sprints>;
};


export type Query_RootAchievementsArgs = {
  distinct_on?: InputMaybe<Array<Achievements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Achievements_Order_By>>;
  where?: InputMaybe<Achievements_Bool_Exp>;
};


export type Query_RootAchievements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Achievements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Achievements_Order_By>>;
  where?: InputMaybe<Achievements_Bool_Exp>;
};


export type Query_RootAchievements_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAddonsArgs = {
  distinct_on?: InputMaybe<Array<Addons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Addons_Order_By>>;
  where?: InputMaybe<Addons_Bool_Exp>;
};


export type Query_RootAddons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Addons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Addons_Order_By>>;
  where?: InputMaybe<Addons_Bool_Exp>;
};


export type Query_RootAddons_By_PkArgs = {
  addon: Scalars['String']['input'];
  owner_id: Scalars['uuid']['input'];
};


export type Query_RootAddons_EnumArgs = {
  distinct_on?: InputMaybe<Array<Addons_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Addons_Enum_Order_By>>;
  where?: InputMaybe<Addons_Enum_Bool_Exp>;
};


export type Query_RootAddons_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Addons_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Addons_Enum_Order_By>>;
  where?: InputMaybe<Addons_Enum_Bool_Exp>;
};


export type Query_RootAddons_Enum_By_PkArgs = {
  addon: Scalars['String']['input'];
};


export type Query_RootGoal_Difficulty_EnumArgs = {
  distinct_on?: InputMaybe<Array<Goal_Difficulty_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goal_Difficulty_Enum_Order_By>>;
  where?: InputMaybe<Goal_Difficulty_Enum_Bool_Exp>;
};


export type Query_RootGoal_Difficulty_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goal_Difficulty_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goal_Difficulty_Enum_Order_By>>;
  where?: InputMaybe<Goal_Difficulty_Enum_Bool_Exp>;
};


export type Query_RootGoal_Difficulty_Enum_By_PkArgs = {
  difficulty: Scalars['String']['input'];
};


export type Query_RootGoal_Status_EnumArgs = {
  distinct_on?: InputMaybe<Array<Goal_Status_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goal_Status_Enum_Order_By>>;
  where?: InputMaybe<Goal_Status_Enum_Bool_Exp>;
};


export type Query_RootGoal_Status_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goal_Status_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goal_Status_Enum_Order_By>>;
  where?: InputMaybe<Goal_Status_Enum_Bool_Exp>;
};


export type Query_RootGoal_Status_Enum_By_PkArgs = {
  status: Scalars['String']['input'];
};


export type Query_RootGoalsArgs = {
  distinct_on?: InputMaybe<Array<Goals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Order_By>>;
  where?: InputMaybe<Goals_Bool_Exp>;
};


export type Query_RootGoals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Order_By>>;
  where?: InputMaybe<Goals_Bool_Exp>;
};


export type Query_RootGoals_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootGoals_RitualsArgs = {
  distinct_on?: InputMaybe<Array<Goals_Rituals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Rituals_Order_By>>;
  where?: InputMaybe<Goals_Rituals_Bool_Exp>;
};


export type Query_RootGoals_Rituals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goals_Rituals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Rituals_Order_By>>;
  where?: InputMaybe<Goals_Rituals_Bool_Exp>;
};


export type Query_RootGoals_Rituals_By_PkArgs = {
  goal_id: Scalars['uuid']['input'];
  ritual_id: Scalars['uuid']['input'];
};


export type Query_RootGoals_SlidesArgs = {
  distinct_on?: InputMaybe<Array<Goals_Slides_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Slides_Order_By>>;
  where?: InputMaybe<Goals_Slides_Bool_Exp>;
};


export type Query_RootGoals_Slides_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goals_Slides_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Slides_Order_By>>;
  where?: InputMaybe<Goals_Slides_Bool_Exp>;
};


export type Query_RootGoals_Slides_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootHeroesArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Heroes_Order_By>>;
  where?: InputMaybe<Heroes_Bool_Exp>;
};


export type Query_RootHeroes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Heroes_Order_By>>;
  where?: InputMaybe<Heroes_Bool_Exp>;
};


export type Query_RootHeroes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootHeroes_RolesArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Heroes_Roles_Order_By>>;
  where?: InputMaybe<Heroes_Roles_Bool_Exp>;
};


export type Query_RootHeroes_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Heroes_Roles_Order_By>>;
  where?: InputMaybe<Heroes_Roles_Bool_Exp>;
};


export type Query_RootHeroes_Roles_By_PkArgs = {
  role: Scalars['String']['input'];
};


export type Query_RootHeroes_TokensArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Heroes_Tokens_Order_By>>;
  where?: InputMaybe<Heroes_Tokens_Bool_Exp>;
};


export type Query_RootHeroes_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Heroes_Tokens_Order_By>>;
  where?: InputMaybe<Heroes_Tokens_Bool_Exp>;
};


export type Query_RootHeroes_Tokens_By_PkArgs = {
  session_id: Scalars['uuid']['input'];
};


export type Query_RootNotepadArgs = {
  distinct_on?: InputMaybe<Array<Notepad_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notepad_Order_By>>;
  where?: InputMaybe<Notepad_Bool_Exp>;
};


export type Query_RootNotepad_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notepad_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notepad_Order_By>>;
  where?: InputMaybe<Notepad_Bool_Exp>;
};


export type Query_RootNotepad_By_PkArgs = {
  owner_id: Scalars['uuid']['input'];
};


export type Query_RootNotesArgs = {
  distinct_on?: InputMaybe<Array<Notes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notes_Order_By>>;
  where?: InputMaybe<Notes_Bool_Exp>;
};


export type Query_RootNotes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notes_Order_By>>;
  where?: InputMaybe<Notes_Bool_Exp>;
};


export type Query_RootNotes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootNotes_LabelsArgs = {
  distinct_on?: InputMaybe<Array<Notes_Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notes_Labels_Order_By>>;
  where?: InputMaybe<Notes_Labels_Bool_Exp>;
};


export type Query_RootNotes_Labels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notes_Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notes_Labels_Order_By>>;
  where?: InputMaybe<Notes_Labels_Bool_Exp>;
};


export type Query_RootNotes_Labels_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPrivacy_EnumArgs = {
  distinct_on?: InputMaybe<Array<Privacy_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Privacy_Enum_Order_By>>;
  where?: InputMaybe<Privacy_Enum_Bool_Exp>;
};


export type Query_RootPrivacy_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Privacy_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Privacy_Enum_Order_By>>;
  where?: InputMaybe<Privacy_Enum_Bool_Exp>;
};


export type Query_RootPrivacy_Enum_By_PkArgs = {
  privacy: Scalars['String']['input'];
};


export type Query_RootRestore_CodesArgs = {
  distinct_on?: InputMaybe<Array<Restore_Codes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Restore_Codes_Order_By>>;
  where?: InputMaybe<Restore_Codes_Bool_Exp>;
};


export type Query_RootRestore_Codes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Restore_Codes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Restore_Codes_Order_By>>;
  where?: InputMaybe<Restore_Codes_Bool_Exp>;
};


export type Query_RootRestore_Codes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRestore_Codes_EnumArgs = {
  distinct_on?: InputMaybe<Array<Restore_Codes_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Restore_Codes_Enum_Order_By>>;
  where?: InputMaybe<Restore_Codes_Enum_Bool_Exp>;
};


export type Query_RootRestore_Codes_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Restore_Codes_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Restore_Codes_Enum_Order_By>>;
  where?: InputMaybe<Restore_Codes_Enum_Bool_Exp>;
};


export type Query_RootRestore_Codes_Enum_By_PkArgs = {
  type: Scalars['String']['input'];
};


export type Query_RootRitual_Type_EnumArgs = {
  distinct_on?: InputMaybe<Array<Ritual_Type_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ritual_Type_Enum_Order_By>>;
  where?: InputMaybe<Ritual_Type_Enum_Bool_Exp>;
};


export type Query_RootRitual_Type_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ritual_Type_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ritual_Type_Enum_Order_By>>;
  where?: InputMaybe<Ritual_Type_Enum_Bool_Exp>;
};


export type Query_RootRitual_Type_Enum_By_PkArgs = {
  ritual_type: Scalars['String']['input'];
};


export type Query_RootSprintsArgs = {
  distinct_on?: InputMaybe<Array<Sprints_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sprints_Order_By>>;
  where?: InputMaybe<Sprints_Bool_Exp>;
};


export type Query_RootSprints_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sprints_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sprints_Order_By>>;
  where?: InputMaybe<Sprints_Bool_Exp>;
};


export type Query_RootSprints_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** restore_password_codes */
export type Restore_Codes = {
  __typename?: 'restore_codes';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  secret?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Restore_Codes_Enum_Enum>;
};

/** aggregated selection of "restore_codes" */
export type Restore_Codes_Aggregate = {
  __typename?: 'restore_codes_aggregate';
  aggregate?: Maybe<Restore_Codes_Aggregate_Fields>;
  nodes: Array<Restore_Codes>;
};

/** aggregate fields of "restore_codes" */
export type Restore_Codes_Aggregate_Fields = {
  __typename?: 'restore_codes_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Restore_Codes_Max_Fields>;
  min?: Maybe<Restore_Codes_Min_Fields>;
};


/** aggregate fields of "restore_codes" */
export type Restore_Codes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Restore_Codes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "restore_codes". All fields are combined with a logical 'AND'. */
export type Restore_Codes_Bool_Exp = {
  _and?: InputMaybe<Array<Restore_Codes_Bool_Exp>>;
  _not?: InputMaybe<Restore_Codes_Bool_Exp>;
  _or?: InputMaybe<Array<Restore_Codes_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  secret?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Restore_Codes_Enum_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "restore_codes" */
export enum Restore_Codes_Constraint {
  /** unique or primary key constraint on columns "id" */
  RestoreCodesPkey = 'restore_codes_pkey'
}

/** columns and relationships of "restore_codes_enum" */
export type Restore_Codes_Enum = {
  __typename?: 'restore_codes_enum';
  description: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

/** aggregated selection of "restore_codes_enum" */
export type Restore_Codes_Enum_Aggregate = {
  __typename?: 'restore_codes_enum_aggregate';
  aggregate?: Maybe<Restore_Codes_Enum_Aggregate_Fields>;
  nodes: Array<Restore_Codes_Enum>;
};

/** aggregate fields of "restore_codes_enum" */
export type Restore_Codes_Enum_Aggregate_Fields = {
  __typename?: 'restore_codes_enum_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Restore_Codes_Enum_Max_Fields>;
  min?: Maybe<Restore_Codes_Enum_Min_Fields>;
};


/** aggregate fields of "restore_codes_enum" */
export type Restore_Codes_Enum_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Restore_Codes_Enum_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "restore_codes_enum". All fields are combined with a logical 'AND'. */
export type Restore_Codes_Enum_Bool_Exp = {
  _and?: InputMaybe<Array<Restore_Codes_Enum_Bool_Exp>>;
  _not?: InputMaybe<Restore_Codes_Enum_Bool_Exp>;
  _or?: InputMaybe<Array<Restore_Codes_Enum_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "restore_codes_enum" */
export enum Restore_Codes_Enum_Constraint {
  /** unique or primary key constraint on columns "type" */
  RestoreCodesEnumPkey = 'restore_codes_enum_pkey'
}

export enum Restore_Codes_Enum_Enum {
  /** restore code */
  Restoration = 'restoration'
}

/** Boolean expression to compare columns of type "restore_codes_enum_enum". All fields are combined with logical 'AND'. */
export type Restore_Codes_Enum_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Restore_Codes_Enum_Enum>;
  _in?: InputMaybe<Array<Restore_Codes_Enum_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Restore_Codes_Enum_Enum>;
  _nin?: InputMaybe<Array<Restore_Codes_Enum_Enum>>;
};

/** input type for inserting data into table "restore_codes_enum" */
export type Restore_Codes_Enum_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Restore_Codes_Enum_Max_Fields = {
  __typename?: 'restore_codes_enum_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Restore_Codes_Enum_Min_Fields = {
  __typename?: 'restore_codes_enum_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "restore_codes_enum" */
export type Restore_Codes_Enum_Mutation_Response = {
  __typename?: 'restore_codes_enum_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Restore_Codes_Enum>;
};

/** on_conflict condition type for table "restore_codes_enum" */
export type Restore_Codes_Enum_On_Conflict = {
  constraint: Restore_Codes_Enum_Constraint;
  update_columns?: Array<Restore_Codes_Enum_Update_Column>;
  where?: InputMaybe<Restore_Codes_Enum_Bool_Exp>;
};

/** Ordering options when selecting data from "restore_codes_enum". */
export type Restore_Codes_Enum_Order_By = {
  description?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: restore_codes_enum */
export type Restore_Codes_Enum_Pk_Columns_Input = {
  type: Scalars['String']['input'];
};

/** select columns of table "restore_codes_enum" */
export enum Restore_Codes_Enum_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "restore_codes_enum" */
export type Restore_Codes_Enum_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "restore_codes_enum" */
export type Restore_Codes_Enum_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Restore_Codes_Enum_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Restore_Codes_Enum_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "restore_codes_enum" */
export enum Restore_Codes_Enum_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Type = 'type'
}

export type Restore_Codes_Enum_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Restore_Codes_Enum_Set_Input>;
  /** filter the rows which have to be updated */
  where: Restore_Codes_Enum_Bool_Exp;
};

/** input type for inserting data into table "restore_codes" */
export type Restore_Codes_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  secret?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Restore_Codes_Enum_Enum>;
};

/** aggregate max on columns */
export type Restore_Codes_Max_Fields = {
  __typename?: 'restore_codes_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  secret?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Restore_Codes_Min_Fields = {
  __typename?: 'restore_codes_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  secret?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "restore_codes" */
export type Restore_Codes_Mutation_Response = {
  __typename?: 'restore_codes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Restore_Codes>;
};

/** on_conflict condition type for table "restore_codes" */
export type Restore_Codes_On_Conflict = {
  constraint: Restore_Codes_Constraint;
  update_columns?: Array<Restore_Codes_Update_Column>;
  where?: InputMaybe<Restore_Codes_Bool_Exp>;
};

/** Ordering options when selecting data from "restore_codes". */
export type Restore_Codes_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  secret?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: restore_codes */
export type Restore_Codes_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "restore_codes" */
export enum Restore_Codes_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Secret = 'secret',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "restore_codes" */
export type Restore_Codes_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  secret?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Restore_Codes_Enum_Enum>;
};

/** Streaming cursor of the table "restore_codes" */
export type Restore_Codes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Restore_Codes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Restore_Codes_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  secret?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Restore_Codes_Enum_Enum>;
};

/** update columns of table "restore_codes" */
export enum Restore_Codes_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Secret = 'secret',
  /** column name */
  Type = 'type'
}

export type Restore_Codes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Restore_Codes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Restore_Codes_Bool_Exp;
};

/** columns and relationships of "ritual_type_enum" */
export type Ritual_Type_Enum = {
  __typename?: 'ritual_type_enum';
  description: Scalars['String']['output'];
  /** An array relationship */
  goals_rituals: Array<Goals_Rituals>;
  /** An aggregate relationship */
  goals_rituals_aggregate: Goals_Rituals_Aggregate;
  ritual_type: Scalars['String']['output'];
};


/** columns and relationships of "ritual_type_enum" */
export type Ritual_Type_EnumGoals_RitualsArgs = {
  distinct_on?: InputMaybe<Array<Goals_Rituals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Rituals_Order_By>>;
  where?: InputMaybe<Goals_Rituals_Bool_Exp>;
};


/** columns and relationships of "ritual_type_enum" */
export type Ritual_Type_EnumGoals_Rituals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goals_Rituals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Rituals_Order_By>>;
  where?: InputMaybe<Goals_Rituals_Bool_Exp>;
};

/** aggregated selection of "ritual_type_enum" */
export type Ritual_Type_Enum_Aggregate = {
  __typename?: 'ritual_type_enum_aggregate';
  aggregate?: Maybe<Ritual_Type_Enum_Aggregate_Fields>;
  nodes: Array<Ritual_Type_Enum>;
};

/** aggregate fields of "ritual_type_enum" */
export type Ritual_Type_Enum_Aggregate_Fields = {
  __typename?: 'ritual_type_enum_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Ritual_Type_Enum_Max_Fields>;
  min?: Maybe<Ritual_Type_Enum_Min_Fields>;
};


/** aggregate fields of "ritual_type_enum" */
export type Ritual_Type_Enum_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ritual_Type_Enum_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "ritual_type_enum". All fields are combined with a logical 'AND'. */
export type Ritual_Type_Enum_Bool_Exp = {
  _and?: InputMaybe<Array<Ritual_Type_Enum_Bool_Exp>>;
  _not?: InputMaybe<Ritual_Type_Enum_Bool_Exp>;
  _or?: InputMaybe<Array<Ritual_Type_Enum_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  goals_rituals?: InputMaybe<Goals_Rituals_Bool_Exp>;
  goals_rituals_aggregate?: InputMaybe<Goals_Rituals_Aggregate_Bool_Exp>;
  ritual_type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ritual_type_enum" */
export enum Ritual_Type_Enum_Constraint {
  /** unique or primary key constraint on columns "ritual_type" */
  RitualTypeEnumPkey = 'ritual_type_enum_pkey'
}

/** input type for inserting data into table "ritual_type_enum" */
export type Ritual_Type_Enum_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  goals_rituals?: InputMaybe<Goals_Rituals_Arr_Rel_Insert_Input>;
  ritual_type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Ritual_Type_Enum_Max_Fields = {
  __typename?: 'ritual_type_enum_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  ritual_type?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Ritual_Type_Enum_Min_Fields = {
  __typename?: 'ritual_type_enum_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  ritual_type?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "ritual_type_enum" */
export type Ritual_Type_Enum_Mutation_Response = {
  __typename?: 'ritual_type_enum_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Ritual_Type_Enum>;
};

/** input type for inserting object relation for remote table "ritual_type_enum" */
export type Ritual_Type_Enum_Obj_Rel_Insert_Input = {
  data: Ritual_Type_Enum_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Ritual_Type_Enum_On_Conflict>;
};

/** on_conflict condition type for table "ritual_type_enum" */
export type Ritual_Type_Enum_On_Conflict = {
  constraint: Ritual_Type_Enum_Constraint;
  update_columns?: Array<Ritual_Type_Enum_Update_Column>;
  where?: InputMaybe<Ritual_Type_Enum_Bool_Exp>;
};

/** Ordering options when selecting data from "ritual_type_enum". */
export type Ritual_Type_Enum_Order_By = {
  description?: InputMaybe<Order_By>;
  goals_rituals_aggregate?: InputMaybe<Goals_Rituals_Aggregate_Order_By>;
  ritual_type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ritual_type_enum */
export type Ritual_Type_Enum_Pk_Columns_Input = {
  ritual_type: Scalars['String']['input'];
};

/** select columns of table "ritual_type_enum" */
export enum Ritual_Type_Enum_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  RitualType = 'ritual_type'
}

/** input type for updating data in table "ritual_type_enum" */
export type Ritual_Type_Enum_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  ritual_type?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "ritual_type_enum" */
export type Ritual_Type_Enum_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ritual_Type_Enum_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ritual_Type_Enum_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  ritual_type?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "ritual_type_enum" */
export enum Ritual_Type_Enum_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  RitualType = 'ritual_type'
}

export type Ritual_Type_Enum_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Ritual_Type_Enum_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ritual_Type_Enum_Bool_Exp;
};

/** columns and relationships of "sprints" */
export type Sprints = {
  __typename?: 'sprints';
  achievement?: Maybe<Scalars['String']['output']>;
  cached?: Maybe<Scalars['Boolean']['output']>;
  created_at: Scalars['timestamptz']['output'];
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration: Scalars['Int']['output'];
  finished_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  hero: Heroes;
  id: Scalars['uuid']['output'];
  img_path?: Maybe<Scalars['String']['output']>;
  owner_id: Scalars['uuid']['output'];
  parent_sprint_id?: Maybe<Scalars['uuid']['output']>;
  sprint_days?: Maybe<Scalars['jsonb']['output']>;
  sprint_goals?: Maybe<Scalars['String']['output']>;
  started_at?: Maybe<Scalars['timestamptz']['output']>;
  title: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "sprints" */
export type SprintsSprint_DaysArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "sprints" */
export type Sprints_Aggregate = {
  __typename?: 'sprints_aggregate';
  aggregate?: Maybe<Sprints_Aggregate_Fields>;
  nodes: Array<Sprints>;
};

export type Sprints_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Sprints_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Sprints_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Sprints_Aggregate_Bool_Exp_Count>;
};

export type Sprints_Aggregate_Bool_Exp_Bool_And = {
  arguments: Sprints_Select_Column_Sprints_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Sprints_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Sprints_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Sprints_Select_Column_Sprints_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Sprints_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Sprints_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Sprints_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Sprints_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "sprints" */
export type Sprints_Aggregate_Fields = {
  __typename?: 'sprints_aggregate_fields';
  avg?: Maybe<Sprints_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Sprints_Max_Fields>;
  min?: Maybe<Sprints_Min_Fields>;
  stddev?: Maybe<Sprints_Stddev_Fields>;
  stddev_pop?: Maybe<Sprints_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Sprints_Stddev_Samp_Fields>;
  sum?: Maybe<Sprints_Sum_Fields>;
  var_pop?: Maybe<Sprints_Var_Pop_Fields>;
  var_samp?: Maybe<Sprints_Var_Samp_Fields>;
  variance?: Maybe<Sprints_Variance_Fields>;
};


/** aggregate fields of "sprints" */
export type Sprints_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Sprints_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "sprints" */
export type Sprints_Aggregate_Order_By = {
  avg?: InputMaybe<Sprints_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Sprints_Max_Order_By>;
  min?: InputMaybe<Sprints_Min_Order_By>;
  stddev?: InputMaybe<Sprints_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Sprints_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Sprints_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Sprints_Sum_Order_By>;
  var_pop?: InputMaybe<Sprints_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Sprints_Var_Samp_Order_By>;
  variance?: InputMaybe<Sprints_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Sprints_Append_Input = {
  sprint_days?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "sprints" */
export type Sprints_Arr_Rel_Insert_Input = {
  data: Array<Sprints_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Sprints_On_Conflict>;
};

/** aggregate avg on columns */
export type Sprints_Avg_Fields = {
  __typename?: 'sprints_avg_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "sprints" */
export type Sprints_Avg_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "sprints". All fields are combined with a logical 'AND'. */
export type Sprints_Bool_Exp = {
  _and?: InputMaybe<Array<Sprints_Bool_Exp>>;
  _not?: InputMaybe<Sprints_Bool_Exp>;
  _or?: InputMaybe<Array<Sprints_Bool_Exp>>;
  achievement?: InputMaybe<String_Comparison_Exp>;
  cached?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  duration?: InputMaybe<Int_Comparison_Exp>;
  finished_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  hero?: InputMaybe<Heroes_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  img_path?: InputMaybe<String_Comparison_Exp>;
  owner_id?: InputMaybe<Uuid_Comparison_Exp>;
  parent_sprint_id?: InputMaybe<Uuid_Comparison_Exp>;
  sprint_days?: InputMaybe<Jsonb_Comparison_Exp>;
  sprint_goals?: InputMaybe<String_Comparison_Exp>;
  started_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "sprints" */
export enum Sprints_Constraint {
  /** unique or primary key constraint on columns "id" */
  SprintsIdKey = 'sprints_id_key',
  /** unique or primary key constraint on columns "id" */
  SprintsPkey = 'sprints_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Sprints_Delete_At_Path_Input = {
  sprint_days?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Sprints_Delete_Elem_Input = {
  sprint_days?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Sprints_Delete_Key_Input = {
  sprint_days?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "sprints" */
export type Sprints_Inc_Input = {
  duration?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "sprints" */
export type Sprints_Insert_Input = {
  achievement?: InputMaybe<Scalars['String']['input']>;
  cached?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  finished_at?: InputMaybe<Scalars['timestamptz']['input']>;
  hero?: InputMaybe<Heroes_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  img_path?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  parent_sprint_id?: InputMaybe<Scalars['uuid']['input']>;
  sprint_days?: InputMaybe<Scalars['jsonb']['input']>;
  sprint_goals?: InputMaybe<Scalars['String']['input']>;
  started_at?: InputMaybe<Scalars['timestamptz']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Sprints_Max_Fields = {
  __typename?: 'sprints_max_fields';
  achievement?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  finished_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  img_path?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
  parent_sprint_id?: Maybe<Scalars['uuid']['output']>;
  sprint_goals?: Maybe<Scalars['String']['output']>;
  started_at?: Maybe<Scalars['timestamptz']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "sprints" */
export type Sprints_Max_Order_By = {
  achievement?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  finished_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  img_path?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  parent_sprint_id?: InputMaybe<Order_By>;
  sprint_goals?: InputMaybe<Order_By>;
  started_at?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Sprints_Min_Fields = {
  __typename?: 'sprints_min_fields';
  achievement?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  finished_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  img_path?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
  parent_sprint_id?: Maybe<Scalars['uuid']['output']>;
  sprint_goals?: Maybe<Scalars['String']['output']>;
  started_at?: Maybe<Scalars['timestamptz']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "sprints" */
export type Sprints_Min_Order_By = {
  achievement?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  finished_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  img_path?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  parent_sprint_id?: InputMaybe<Order_By>;
  sprint_goals?: InputMaybe<Order_By>;
  started_at?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "sprints" */
export type Sprints_Mutation_Response = {
  __typename?: 'sprints_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Sprints>;
};

/** on_conflict condition type for table "sprints" */
export type Sprints_On_Conflict = {
  constraint: Sprints_Constraint;
  update_columns?: Array<Sprints_Update_Column>;
  where?: InputMaybe<Sprints_Bool_Exp>;
};

/** Ordering options when selecting data from "sprints". */
export type Sprints_Order_By = {
  achievement?: InputMaybe<Order_By>;
  cached?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  finished_at?: InputMaybe<Order_By>;
  hero?: InputMaybe<Heroes_Order_By>;
  id?: InputMaybe<Order_By>;
  img_path?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  parent_sprint_id?: InputMaybe<Order_By>;
  sprint_days?: InputMaybe<Order_By>;
  sprint_goals?: InputMaybe<Order_By>;
  started_at?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: sprints */
export type Sprints_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Sprints_Prepend_Input = {
  sprint_days?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "sprints" */
export enum Sprints_Select_Column {
  /** column name */
  Achievement = 'achievement',
  /** column name */
  Cached = 'cached',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Description = 'description',
  /** column name */
  Duration = 'duration',
  /** column name */
  FinishedAt = 'finished_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImgPath = 'img_path',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  ParentSprintId = 'parent_sprint_id',
  /** column name */
  SprintDays = 'sprint_days',
  /** column name */
  SprintGoals = 'sprint_goals',
  /** column name */
  StartedAt = 'started_at',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "sprints_aggregate_bool_exp_bool_and_arguments_columns" columns of table "sprints" */
export enum Sprints_Select_Column_Sprints_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Cached = 'cached'
}

/** select "sprints_aggregate_bool_exp_bool_or_arguments_columns" columns of table "sprints" */
export enum Sprints_Select_Column_Sprints_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Cached = 'cached'
}

/** input type for updating data in table "sprints" */
export type Sprints_Set_Input = {
  achievement?: InputMaybe<Scalars['String']['input']>;
  cached?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  finished_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  img_path?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  parent_sprint_id?: InputMaybe<Scalars['uuid']['input']>;
  sprint_days?: InputMaybe<Scalars['jsonb']['input']>;
  sprint_goals?: InputMaybe<Scalars['String']['input']>;
  started_at?: InputMaybe<Scalars['timestamptz']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Sprints_Stddev_Fields = {
  __typename?: 'sprints_stddev_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "sprints" */
export type Sprints_Stddev_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Sprints_Stddev_Pop_Fields = {
  __typename?: 'sprints_stddev_pop_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "sprints" */
export type Sprints_Stddev_Pop_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Sprints_Stddev_Samp_Fields = {
  __typename?: 'sprints_stddev_samp_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "sprints" */
export type Sprints_Stddev_Samp_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "sprints" */
export type Sprints_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Sprints_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Sprints_Stream_Cursor_Value_Input = {
  achievement?: InputMaybe<Scalars['String']['input']>;
  cached?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  finished_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  img_path?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  parent_sprint_id?: InputMaybe<Scalars['uuid']['input']>;
  sprint_days?: InputMaybe<Scalars['jsonb']['input']>;
  sprint_goals?: InputMaybe<Scalars['String']['input']>;
  started_at?: InputMaybe<Scalars['timestamptz']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Sprints_Sum_Fields = {
  __typename?: 'sprints_sum_fields';
  duration?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "sprints" */
export type Sprints_Sum_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** update columns of table "sprints" */
export enum Sprints_Update_Column {
  /** column name */
  Achievement = 'achievement',
  /** column name */
  Cached = 'cached',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Description = 'description',
  /** column name */
  Duration = 'duration',
  /** column name */
  FinishedAt = 'finished_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImgPath = 'img_path',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  ParentSprintId = 'parent_sprint_id',
  /** column name */
  SprintDays = 'sprint_days',
  /** column name */
  SprintGoals = 'sprint_goals',
  /** column name */
  StartedAt = 'started_at',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Sprints_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Sprints_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Sprints_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Sprints_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Sprints_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Sprints_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Sprints_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Sprints_Set_Input>;
  /** filter the rows which have to be updated */
  where: Sprints_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Sprints_Var_Pop_Fields = {
  __typename?: 'sprints_var_pop_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "sprints" */
export type Sprints_Var_Pop_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Sprints_Var_Samp_Fields = {
  __typename?: 'sprints_var_samp_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "sprints" */
export type Sprints_Var_Samp_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Sprints_Variance_Fields = {
  __typename?: 'sprints_variance_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "sprints" */
export type Sprints_Variance_Order_By = {
  duration?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  achievements: Array<Achievements>;
  /** An aggregate relationship */
  achievements_aggregate: Achievements_Aggregate;
  /** fetch data from the table: "achievements" using primary key columns */
  achievements_by_pk?: Maybe<Achievements>;
  /** fetch data from the table in a streaming manner: "achievements" */
  achievements_stream: Array<Achievements>;
  /** An array relationship */
  addons: Array<Addons>;
  /** An aggregate relationship */
  addons_aggregate: Addons_Aggregate;
  /** fetch data from the table: "addons" using primary key columns */
  addons_by_pk?: Maybe<Addons>;
  /** fetch data from the table: "addons_enum" */
  addons_enum: Array<Addons_Enum>;
  /** fetch aggregated fields from the table: "addons_enum" */
  addons_enum_aggregate: Addons_Enum_Aggregate;
  /** fetch data from the table: "addons_enum" using primary key columns */
  addons_enum_by_pk?: Maybe<Addons_Enum>;
  /** fetch data from the table in a streaming manner: "addons_enum" */
  addons_enum_stream: Array<Addons_Enum>;
  /** fetch data from the table in a streaming manner: "addons" */
  addons_stream: Array<Addons>;
  /** fetch data from the table: "goal_difficulty_enum" */
  goal_difficulty_enum: Array<Goal_Difficulty_Enum>;
  /** fetch aggregated fields from the table: "goal_difficulty_enum" */
  goal_difficulty_enum_aggregate: Goal_Difficulty_Enum_Aggregate;
  /** fetch data from the table: "goal_difficulty_enum" using primary key columns */
  goal_difficulty_enum_by_pk?: Maybe<Goal_Difficulty_Enum>;
  /** fetch data from the table in a streaming manner: "goal_difficulty_enum" */
  goal_difficulty_enum_stream: Array<Goal_Difficulty_Enum>;
  /** fetch data from the table: "goal_status_enum" */
  goal_status_enum: Array<Goal_Status_Enum>;
  /** fetch aggregated fields from the table: "goal_status_enum" */
  goal_status_enum_aggregate: Goal_Status_Enum_Aggregate;
  /** fetch data from the table: "goal_status_enum" using primary key columns */
  goal_status_enum_by_pk?: Maybe<Goal_Status_Enum>;
  /** fetch data from the table in a streaming manner: "goal_status_enum" */
  goal_status_enum_stream: Array<Goal_Status_Enum>;
  /** An array relationship */
  goals: Array<Goals>;
  /** An aggregate relationship */
  goals_aggregate: Goals_Aggregate;
  /** fetch data from the table: "goals" using primary key columns */
  goals_by_pk?: Maybe<Goals>;
  /** An array relationship */
  goals_rituals: Array<Goals_Rituals>;
  /** An aggregate relationship */
  goals_rituals_aggregate: Goals_Rituals_Aggregate;
  /** fetch data from the table: "goals_rituals" using primary key columns */
  goals_rituals_by_pk?: Maybe<Goals_Rituals>;
  /** fetch data from the table in a streaming manner: "goals_rituals" */
  goals_rituals_stream: Array<Goals_Rituals>;
  /** An array relationship */
  goals_slides: Array<Goals_Slides>;
  /** An aggregate relationship */
  goals_slides_aggregate: Goals_Slides_Aggregate;
  /** fetch data from the table: "goals_slides" using primary key columns */
  goals_slides_by_pk?: Maybe<Goals_Slides>;
  /** fetch data from the table in a streaming manner: "goals_slides" */
  goals_slides_stream: Array<Goals_Slides>;
  /** fetch data from the table in a streaming manner: "goals" */
  goals_stream: Array<Goals>;
  /** An array relationship */
  heroes: Array<Heroes>;
  /** An aggregate relationship */
  heroes_aggregate: Heroes_Aggregate;
  /** fetch data from the table: "heroes" using primary key columns */
  heroes_by_pk?: Maybe<Heroes>;
  /** fetch data from the table: "heroes_roles" */
  heroes_roles: Array<Heroes_Roles>;
  /** fetch aggregated fields from the table: "heroes_roles" */
  heroes_roles_aggregate: Heroes_Roles_Aggregate;
  /** fetch data from the table: "heroes_roles" using primary key columns */
  heroes_roles_by_pk?: Maybe<Heroes_Roles>;
  /** fetch data from the table in a streaming manner: "heroes_roles" */
  heroes_roles_stream: Array<Heroes_Roles>;
  /** fetch data from the table in a streaming manner: "heroes" */
  heroes_stream: Array<Heroes>;
  /** fetch data from the table: "heroes_tokens" */
  heroes_tokens: Array<Heroes_Tokens>;
  /** fetch aggregated fields from the table: "heroes_tokens" */
  heroes_tokens_aggregate: Heroes_Tokens_Aggregate;
  /** fetch data from the table: "heroes_tokens" using primary key columns */
  heroes_tokens_by_pk?: Maybe<Heroes_Tokens>;
  /** fetch data from the table in a streaming manner: "heroes_tokens" */
  heroes_tokens_stream: Array<Heroes_Tokens>;
  /** fetch data from the table: "notepad" */
  notepad: Array<Notepad>;
  /** fetch aggregated fields from the table: "notepad" */
  notepad_aggregate: Notepad_Aggregate;
  /** fetch data from the table: "notepad" using primary key columns */
  notepad_by_pk?: Maybe<Notepad>;
  /** fetch data from the table in a streaming manner: "notepad" */
  notepad_stream: Array<Notepad>;
  /** An array relationship */
  notes: Array<Notes>;
  /** An aggregate relationship */
  notes_aggregate: Notes_Aggregate;
  /** fetch data from the table: "notes" using primary key columns */
  notes_by_pk?: Maybe<Notes>;
  /** fetch data from the table: "notes_labels" */
  notes_labels: Array<Notes_Labels>;
  /** fetch aggregated fields from the table: "notes_labels" */
  notes_labels_aggregate: Notes_Labels_Aggregate;
  /** fetch data from the table: "notes_labels" using primary key columns */
  notes_labels_by_pk?: Maybe<Notes_Labels>;
  /** fetch data from the table in a streaming manner: "notes_labels" */
  notes_labels_stream: Array<Notes_Labels>;
  /** fetch data from the table in a streaming manner: "notes" */
  notes_stream: Array<Notes>;
  /** fetch data from the table: "privacy_enum" */
  privacy_enum: Array<Privacy_Enum>;
  /** fetch aggregated fields from the table: "privacy_enum" */
  privacy_enum_aggregate: Privacy_Enum_Aggregate;
  /** fetch data from the table: "privacy_enum" using primary key columns */
  privacy_enum_by_pk?: Maybe<Privacy_Enum>;
  /** fetch data from the table in a streaming manner: "privacy_enum" */
  privacy_enum_stream: Array<Privacy_Enum>;
  /** fetch data from the table: "restore_codes" */
  restore_codes: Array<Restore_Codes>;
  /** fetch aggregated fields from the table: "restore_codes" */
  restore_codes_aggregate: Restore_Codes_Aggregate;
  /** fetch data from the table: "restore_codes" using primary key columns */
  restore_codes_by_pk?: Maybe<Restore_Codes>;
  /** fetch data from the table: "restore_codes_enum" */
  restore_codes_enum: Array<Restore_Codes_Enum>;
  /** fetch aggregated fields from the table: "restore_codes_enum" */
  restore_codes_enum_aggregate: Restore_Codes_Enum_Aggregate;
  /** fetch data from the table: "restore_codes_enum" using primary key columns */
  restore_codes_enum_by_pk?: Maybe<Restore_Codes_Enum>;
  /** fetch data from the table in a streaming manner: "restore_codes_enum" */
  restore_codes_enum_stream: Array<Restore_Codes_Enum>;
  /** fetch data from the table in a streaming manner: "restore_codes" */
  restore_codes_stream: Array<Restore_Codes>;
  /** fetch data from the table: "ritual_type_enum" */
  ritual_type_enum: Array<Ritual_Type_Enum>;
  /** fetch aggregated fields from the table: "ritual_type_enum" */
  ritual_type_enum_aggregate: Ritual_Type_Enum_Aggregate;
  /** fetch data from the table: "ritual_type_enum" using primary key columns */
  ritual_type_enum_by_pk?: Maybe<Ritual_Type_Enum>;
  /** fetch data from the table in a streaming manner: "ritual_type_enum" */
  ritual_type_enum_stream: Array<Ritual_Type_Enum>;
  /** An array relationship */
  sprints: Array<Sprints>;
  /** An aggregate relationship */
  sprints_aggregate: Sprints_Aggregate;
  /** fetch data from the table: "sprints" using primary key columns */
  sprints_by_pk?: Maybe<Sprints>;
  /** fetch data from the table in a streaming manner: "sprints" */
  sprints_stream: Array<Sprints>;
};


export type Subscription_RootAchievementsArgs = {
  distinct_on?: InputMaybe<Array<Achievements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Achievements_Order_By>>;
  where?: InputMaybe<Achievements_Bool_Exp>;
};


export type Subscription_RootAchievements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Achievements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Achievements_Order_By>>;
  where?: InputMaybe<Achievements_Bool_Exp>;
};


export type Subscription_RootAchievements_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAchievements_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Achievements_Stream_Cursor_Input>>;
  where?: InputMaybe<Achievements_Bool_Exp>;
};


export type Subscription_RootAddonsArgs = {
  distinct_on?: InputMaybe<Array<Addons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Addons_Order_By>>;
  where?: InputMaybe<Addons_Bool_Exp>;
};


export type Subscription_RootAddons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Addons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Addons_Order_By>>;
  where?: InputMaybe<Addons_Bool_Exp>;
};


export type Subscription_RootAddons_By_PkArgs = {
  addon: Scalars['String']['input'];
  owner_id: Scalars['uuid']['input'];
};


export type Subscription_RootAddons_EnumArgs = {
  distinct_on?: InputMaybe<Array<Addons_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Addons_Enum_Order_By>>;
  where?: InputMaybe<Addons_Enum_Bool_Exp>;
};


export type Subscription_RootAddons_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Addons_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Addons_Enum_Order_By>>;
  where?: InputMaybe<Addons_Enum_Bool_Exp>;
};


export type Subscription_RootAddons_Enum_By_PkArgs = {
  addon: Scalars['String']['input'];
};


export type Subscription_RootAddons_Enum_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Addons_Enum_Stream_Cursor_Input>>;
  where?: InputMaybe<Addons_Enum_Bool_Exp>;
};


export type Subscription_RootAddons_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Addons_Stream_Cursor_Input>>;
  where?: InputMaybe<Addons_Bool_Exp>;
};


export type Subscription_RootGoal_Difficulty_EnumArgs = {
  distinct_on?: InputMaybe<Array<Goal_Difficulty_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goal_Difficulty_Enum_Order_By>>;
  where?: InputMaybe<Goal_Difficulty_Enum_Bool_Exp>;
};


export type Subscription_RootGoal_Difficulty_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goal_Difficulty_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goal_Difficulty_Enum_Order_By>>;
  where?: InputMaybe<Goal_Difficulty_Enum_Bool_Exp>;
};


export type Subscription_RootGoal_Difficulty_Enum_By_PkArgs = {
  difficulty: Scalars['String']['input'];
};


export type Subscription_RootGoal_Difficulty_Enum_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Goal_Difficulty_Enum_Stream_Cursor_Input>>;
  where?: InputMaybe<Goal_Difficulty_Enum_Bool_Exp>;
};


export type Subscription_RootGoal_Status_EnumArgs = {
  distinct_on?: InputMaybe<Array<Goal_Status_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goal_Status_Enum_Order_By>>;
  where?: InputMaybe<Goal_Status_Enum_Bool_Exp>;
};


export type Subscription_RootGoal_Status_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goal_Status_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goal_Status_Enum_Order_By>>;
  where?: InputMaybe<Goal_Status_Enum_Bool_Exp>;
};


export type Subscription_RootGoal_Status_Enum_By_PkArgs = {
  status: Scalars['String']['input'];
};


export type Subscription_RootGoal_Status_Enum_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Goal_Status_Enum_Stream_Cursor_Input>>;
  where?: InputMaybe<Goal_Status_Enum_Bool_Exp>;
};


export type Subscription_RootGoalsArgs = {
  distinct_on?: InputMaybe<Array<Goals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Order_By>>;
  where?: InputMaybe<Goals_Bool_Exp>;
};


export type Subscription_RootGoals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Order_By>>;
  where?: InputMaybe<Goals_Bool_Exp>;
};


export type Subscription_RootGoals_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootGoals_RitualsArgs = {
  distinct_on?: InputMaybe<Array<Goals_Rituals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Rituals_Order_By>>;
  where?: InputMaybe<Goals_Rituals_Bool_Exp>;
};


export type Subscription_RootGoals_Rituals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goals_Rituals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Rituals_Order_By>>;
  where?: InputMaybe<Goals_Rituals_Bool_Exp>;
};


export type Subscription_RootGoals_Rituals_By_PkArgs = {
  goal_id: Scalars['uuid']['input'];
  ritual_id: Scalars['uuid']['input'];
};


export type Subscription_RootGoals_Rituals_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Goals_Rituals_Stream_Cursor_Input>>;
  where?: InputMaybe<Goals_Rituals_Bool_Exp>;
};


export type Subscription_RootGoals_SlidesArgs = {
  distinct_on?: InputMaybe<Array<Goals_Slides_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Slides_Order_By>>;
  where?: InputMaybe<Goals_Slides_Bool_Exp>;
};


export type Subscription_RootGoals_Slides_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goals_Slides_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Slides_Order_By>>;
  where?: InputMaybe<Goals_Slides_Bool_Exp>;
};


export type Subscription_RootGoals_Slides_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootGoals_Slides_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Goals_Slides_Stream_Cursor_Input>>;
  where?: InputMaybe<Goals_Slides_Bool_Exp>;
};


export type Subscription_RootGoals_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Goals_Stream_Cursor_Input>>;
  where?: InputMaybe<Goals_Bool_Exp>;
};


export type Subscription_RootHeroesArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Heroes_Order_By>>;
  where?: InputMaybe<Heroes_Bool_Exp>;
};


export type Subscription_RootHeroes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Heroes_Order_By>>;
  where?: InputMaybe<Heroes_Bool_Exp>;
};


export type Subscription_RootHeroes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootHeroes_RolesArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Heroes_Roles_Order_By>>;
  where?: InputMaybe<Heroes_Roles_Bool_Exp>;
};


export type Subscription_RootHeroes_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Heroes_Roles_Order_By>>;
  where?: InputMaybe<Heroes_Roles_Bool_Exp>;
};


export type Subscription_RootHeroes_Roles_By_PkArgs = {
  role: Scalars['String']['input'];
};


export type Subscription_RootHeroes_Roles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Heroes_Roles_Stream_Cursor_Input>>;
  where?: InputMaybe<Heroes_Roles_Bool_Exp>;
};


export type Subscription_RootHeroes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Heroes_Stream_Cursor_Input>>;
  where?: InputMaybe<Heroes_Bool_Exp>;
};


export type Subscription_RootHeroes_TokensArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Heroes_Tokens_Order_By>>;
  where?: InputMaybe<Heroes_Tokens_Bool_Exp>;
};


export type Subscription_RootHeroes_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Heroes_Tokens_Order_By>>;
  where?: InputMaybe<Heroes_Tokens_Bool_Exp>;
};


export type Subscription_RootHeroes_Tokens_By_PkArgs = {
  session_id: Scalars['uuid']['input'];
};


export type Subscription_RootHeroes_Tokens_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Heroes_Tokens_Stream_Cursor_Input>>;
  where?: InputMaybe<Heroes_Tokens_Bool_Exp>;
};


export type Subscription_RootNotepadArgs = {
  distinct_on?: InputMaybe<Array<Notepad_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notepad_Order_By>>;
  where?: InputMaybe<Notepad_Bool_Exp>;
};


export type Subscription_RootNotepad_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notepad_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notepad_Order_By>>;
  where?: InputMaybe<Notepad_Bool_Exp>;
};


export type Subscription_RootNotepad_By_PkArgs = {
  owner_id: Scalars['uuid']['input'];
};


export type Subscription_RootNotepad_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Notepad_Stream_Cursor_Input>>;
  where?: InputMaybe<Notepad_Bool_Exp>;
};


export type Subscription_RootNotesArgs = {
  distinct_on?: InputMaybe<Array<Notes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notes_Order_By>>;
  where?: InputMaybe<Notes_Bool_Exp>;
};


export type Subscription_RootNotes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notes_Order_By>>;
  where?: InputMaybe<Notes_Bool_Exp>;
};


export type Subscription_RootNotes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootNotes_LabelsArgs = {
  distinct_on?: InputMaybe<Array<Notes_Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notes_Labels_Order_By>>;
  where?: InputMaybe<Notes_Labels_Bool_Exp>;
};


export type Subscription_RootNotes_Labels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notes_Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notes_Labels_Order_By>>;
  where?: InputMaybe<Notes_Labels_Bool_Exp>;
};


export type Subscription_RootNotes_Labels_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootNotes_Labels_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Notes_Labels_Stream_Cursor_Input>>;
  where?: InputMaybe<Notes_Labels_Bool_Exp>;
};


export type Subscription_RootNotes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Notes_Stream_Cursor_Input>>;
  where?: InputMaybe<Notes_Bool_Exp>;
};


export type Subscription_RootPrivacy_EnumArgs = {
  distinct_on?: InputMaybe<Array<Privacy_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Privacy_Enum_Order_By>>;
  where?: InputMaybe<Privacy_Enum_Bool_Exp>;
};


export type Subscription_RootPrivacy_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Privacy_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Privacy_Enum_Order_By>>;
  where?: InputMaybe<Privacy_Enum_Bool_Exp>;
};


export type Subscription_RootPrivacy_Enum_By_PkArgs = {
  privacy: Scalars['String']['input'];
};


export type Subscription_RootPrivacy_Enum_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Privacy_Enum_Stream_Cursor_Input>>;
  where?: InputMaybe<Privacy_Enum_Bool_Exp>;
};


export type Subscription_RootRestore_CodesArgs = {
  distinct_on?: InputMaybe<Array<Restore_Codes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Restore_Codes_Order_By>>;
  where?: InputMaybe<Restore_Codes_Bool_Exp>;
};


export type Subscription_RootRestore_Codes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Restore_Codes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Restore_Codes_Order_By>>;
  where?: InputMaybe<Restore_Codes_Bool_Exp>;
};


export type Subscription_RootRestore_Codes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRestore_Codes_EnumArgs = {
  distinct_on?: InputMaybe<Array<Restore_Codes_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Restore_Codes_Enum_Order_By>>;
  where?: InputMaybe<Restore_Codes_Enum_Bool_Exp>;
};


export type Subscription_RootRestore_Codes_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Restore_Codes_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Restore_Codes_Enum_Order_By>>;
  where?: InputMaybe<Restore_Codes_Enum_Bool_Exp>;
};


export type Subscription_RootRestore_Codes_Enum_By_PkArgs = {
  type: Scalars['String']['input'];
};


export type Subscription_RootRestore_Codes_Enum_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Restore_Codes_Enum_Stream_Cursor_Input>>;
  where?: InputMaybe<Restore_Codes_Enum_Bool_Exp>;
};


export type Subscription_RootRestore_Codes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Restore_Codes_Stream_Cursor_Input>>;
  where?: InputMaybe<Restore_Codes_Bool_Exp>;
};


export type Subscription_RootRitual_Type_EnumArgs = {
  distinct_on?: InputMaybe<Array<Ritual_Type_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ritual_Type_Enum_Order_By>>;
  where?: InputMaybe<Ritual_Type_Enum_Bool_Exp>;
};


export type Subscription_RootRitual_Type_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ritual_Type_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ritual_Type_Enum_Order_By>>;
  where?: InputMaybe<Ritual_Type_Enum_Bool_Exp>;
};


export type Subscription_RootRitual_Type_Enum_By_PkArgs = {
  ritual_type: Scalars['String']['input'];
};


export type Subscription_RootRitual_Type_Enum_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Ritual_Type_Enum_Stream_Cursor_Input>>;
  where?: InputMaybe<Ritual_Type_Enum_Bool_Exp>;
};


export type Subscription_RootSprintsArgs = {
  distinct_on?: InputMaybe<Array<Sprints_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sprints_Order_By>>;
  where?: InputMaybe<Sprints_Bool_Exp>;
};


export type Subscription_RootSprints_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sprints_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sprints_Order_By>>;
  where?: InputMaybe<Sprints_Bool_Exp>;
};


export type Subscription_RootSprints_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSprints_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Sprints_Stream_Cursor_Input>>;
  where?: InputMaybe<Sprints_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type DeleteRestoreCodeMutationVariables = Exact<{
  code: Scalars['uuid']['input'];
}>;


export type DeleteRestoreCodeMutation = { __typename?: 'mutation_root', delete_restore_codes_by_pk?: { __typename?: 'restore_codes', id: any } | null };

export type UpdatePasswordByEmailMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdatePasswordByEmailMutation = { __typename?: 'mutation_root', update_heroes?: { __typename?: 'heroes_mutation_response', affected_rows: number } | null };

export type Restore_CodesQueryVariables = Exact<{
  code: Scalars['uuid']['input'];
}>;


export type Restore_CodesQuery = { __typename?: 'query_root', restore_codes_by_pk?: { __typename?: 'restore_codes', email: string } | null };

export type FetchUserByEmailQueryVariables = Exact<{
  email?: InputMaybe<Scalars['String']['input']>;
}>;


export type FetchUserByEmailQuery = { __typename?: 'query_root', heroes: Array<{ __typename?: 'heroes', id: any }> };

export type UserByPkQueryVariables = Exact<{
  user_id: Scalars['uuid']['input'];
}>;


export type UserByPkQuery = { __typename?: 'query_root', heroes_by_pk?: { __typename?: 'heroes', password?: string | null } | null };

export type Mutation_UpdateNoteLabelRatingMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type Mutation_UpdateNoteLabelRatingMutation = { __typename?: 'mutation_root', update_notes_labels_by_pk?: { __typename?: 'notes_labels', id: any, name: string, owner_id: any, rating: number } | null };

export type Mutation_CachedSprintMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type Mutation_CachedSprintMutation = { __typename?: 'mutation_root', update_sprints_by_pk?: { __typename?: 'sprints', id: any } | null };

export type Mutation_InsertNewSprintMutationVariables = Exact<{
  newSprint: Sprints_Insert_Input;
}>;


export type Mutation_InsertNewSprintMutation = { __typename?: 'mutation_root', insert_sprints_one?: { __typename?: 'sprints', img_path?: string | null, id: any, duration: number, description?: string | null, created_at: any, achievement?: string | null, started_at?: any | null, finished_at?: any | null, title: string, updated_at: any, parent_sprint_id?: any | null, owner_id: any, sprint_days?: any | null, sprint_goals?: string | null } | null };

export type Mutation_ToggleDeleteSprintMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
}>;


export type Mutation_ToggleDeleteSprintMutation = { __typename?: 'mutation_root', update_sprints?: { __typename?: 'sprints_mutation_response', returning: Array<{ __typename?: 'sprints', deleted_at?: any | null }> } | null };

export type Mutation_UpdateSprintMutationVariables = Exact<{
  sprintId: Scalars['uuid']['input'];
  updatedSprint?: InputMaybe<Sprints_Set_Input>;
}>;


export type Mutation_UpdateSprintMutation = { __typename?: 'mutation_root', update_sprints_by_pk?: { __typename?: 'sprints', img_path?: string | null, id: any, duration: number, description?: string | null, created_at: any, achievement?: string | null, started_at?: any | null, finished_at?: any | null, title: string, updated_at: any, parent_sprint_id?: any | null, owner_id: any, sprint_days?: any | null, sprint_goals?: string | null } | null };

export type Mutation_UpdateSprintDaysMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  sprintDays?: InputMaybe<Scalars['jsonb']['input']>;
}>;


export type Mutation_UpdateSprintDaysMutation = { __typename?: 'mutation_root', update_sprints_by_pk?: { __typename?: 'sprints', id: any } | null };

export type FetchSprintsQueryVariables = Exact<{
  user_id?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type FetchSprintsQuery = { __typename?: 'query_root', sprints: Array<{ __typename?: 'sprints', achievement?: string | null, title: string, started_at?: any | null, finished_at?: any | null, updated_at: any, owner_id: any, img_path?: string | null, id: any, duration: number, description?: string | null, created_at: any, parent_sprint_id?: any | null, sprint_days?: any | null, sprint_goals?: string | null, deleted_at?: any | null }> };


export const DeleteRestoreCodeDocument = gql`
    mutation deleteRestoreCode($code: uuid!) {
  delete_restore_codes_by_pk(id: $code) {
    id
  }
}
    `;

export function useDeleteRestoreCodeMutation() {
  return Urql.useMutation<DeleteRestoreCodeMutation, DeleteRestoreCodeMutationVariables>(DeleteRestoreCodeDocument);
};
export const UpdatePasswordByEmailDocument = gql`
    mutation updatePasswordByEmail($email: String, $password: String) {
  update_heroes(where: {email: {_eq: $email}}, _set: {password: $password}) {
    affected_rows
  }
}
    `;

export function useUpdatePasswordByEmailMutation() {
  return Urql.useMutation<UpdatePasswordByEmailMutation, UpdatePasswordByEmailMutationVariables>(UpdatePasswordByEmailDocument);
};
export const Restore_CodesDocument = gql`
    query restore_codes($code: uuid!) {
  restore_codes_by_pk(id: $code) {
    email
  }
}
    `;

export function useRestore_CodesQuery(options: Omit<Urql.UseQueryArgs<Restore_CodesQueryVariables>, 'query'>) {
  return Urql.useQuery<Restore_CodesQuery, Restore_CodesQueryVariables>({ query: Restore_CodesDocument, ...options });
};
export const FetchUserByEmailDocument = gql`
    query fetchUserByEmail($email: String) {
  heroes(where: {email: {_eq: $email}}) {
    id
  }
}
    `;

export function useFetchUserByEmailQuery(options?: Omit<Urql.UseQueryArgs<FetchUserByEmailQueryVariables>, 'query'>) {
  return Urql.useQuery<FetchUserByEmailQuery, FetchUserByEmailQueryVariables>({ query: FetchUserByEmailDocument, ...options });
};
export const UserByPkDocument = gql`
    query UserByPk($user_id: uuid!) {
  heroes_by_pk(id: $user_id) {
    password
  }
}
    `;

export function useUserByPkQuery(options: Omit<Urql.UseQueryArgs<UserByPkQueryVariables>, 'query'>) {
  return Urql.useQuery<UserByPkQuery, UserByPkQueryVariables>({ query: UserByPkDocument, ...options });
};
export const Mutation_UpdateNoteLabelRatingDocument = gql`
    mutation Mutation_updateNoteLabelRating($id: uuid!) {
  update_notes_labels_by_pk(pk_columns: {id: $id}, _inc: {rating: 1}) {
    id
    name
    owner_id
    rating
  }
}
    `;

export function useMutation_UpdateNoteLabelRatingMutation() {
  return Urql.useMutation<Mutation_UpdateNoteLabelRatingMutation, Mutation_UpdateNoteLabelRatingMutationVariables>(Mutation_UpdateNoteLabelRatingDocument);
};
export const Mutation_CachedSprintDocument = gql`
    mutation mutation_cachedSprint($id: uuid!) {
  update_sprints_by_pk(pk_columns: {id: $id}, _set: {cached: true}) {
    id
  }
}
    `;

export function useMutation_CachedSprintMutation() {
  return Urql.useMutation<Mutation_CachedSprintMutation, Mutation_CachedSprintMutationVariables>(Mutation_CachedSprintDocument);
};
export const Mutation_InsertNewSprintDocument = gql`
    mutation mutation_insertNewSprint($newSprint: sprints_insert_input!) {
  insert_sprints_one(object: $newSprint) {
    img_path
    id
    duration
    description
    created_at
    achievement
    started_at
    finished_at
    title
    updated_at
    parent_sprint_id
    owner_id
    sprint_days
    sprint_goals
  }
}
    `;

export function useMutation_InsertNewSprintMutation() {
  return Urql.useMutation<Mutation_InsertNewSprintMutation, Mutation_InsertNewSprintMutationVariables>(Mutation_InsertNewSprintDocument);
};
export const Mutation_ToggleDeleteSprintDocument = gql`
    mutation mutation_toggleDeleteSprint($id: uuid!, $deleted_at: timestamptz) {
  update_sprints(
    where: {_or: [{id: {_eq: $id}}, {parent_sprint_id: {_eq: $id}}]}
    _set: {deleted_at: $deleted_at}
  ) {
    returning {
      deleted_at
    }
  }
}
    `;

export function useMutation_ToggleDeleteSprintMutation() {
  return Urql.useMutation<Mutation_ToggleDeleteSprintMutation, Mutation_ToggleDeleteSprintMutationVariables>(Mutation_ToggleDeleteSprintDocument);
};
export const Mutation_UpdateSprintDocument = gql`
    mutation mutation_updateSprint($sprintId: uuid!, $updatedSprint: sprints_set_input) {
  update_sprints_by_pk(pk_columns: {id: $sprintId}, _set: $updatedSprint) {
    img_path
    id
    duration
    description
    created_at
    achievement
    started_at
    finished_at
    title
    updated_at
    parent_sprint_id
    owner_id
    sprint_days
    sprint_goals
  }
}
    `;

export function useMutation_UpdateSprintMutation() {
  return Urql.useMutation<Mutation_UpdateSprintMutation, Mutation_UpdateSprintMutationVariables>(Mutation_UpdateSprintDocument);
};
export const Mutation_UpdateSprintDaysDocument = gql`
    mutation mutation_updateSprintDays($id: uuid!, $sprintDays: jsonb) {
  update_sprints_by_pk(pk_columns: {id: $id}, _set: {sprint_days: $sprintDays}) {
    id
  }
}
    `;

export function useMutation_UpdateSprintDaysMutation() {
  return Urql.useMutation<Mutation_UpdateSprintDaysMutation, Mutation_UpdateSprintDaysMutationVariables>(Mutation_UpdateSprintDaysDocument);
};
export const FetchSprintsDocument = gql`
    query fetchSprints($user_id: uuid) {
  sprints(
    where: {owner_id: {_eq: $user_id}, cached: {_is_null: true}, sprint_days: {_is_null: false}}
    order_by: {started_at: desc}
  ) {
    achievement
    title
    started_at
    finished_at
    updated_at
    owner_id
    img_path
    id
    duration
    description
    created_at
    parent_sprint_id
    owner_id
    created_at
    sprint_days
    sprint_goals
    deleted_at
  }
}
    `;

export function useFetchSprintsQuery(options?: Omit<Urql.UseQueryArgs<FetchSprintsQueryVariables>, 'query'>) {
  return Urql.useQuery<FetchSprintsQuery, FetchSprintsQueryVariables>({ query: FetchSprintsDocument, ...options });
};