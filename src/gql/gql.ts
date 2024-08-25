/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n        mutation deleteRestoreCode($code: uuid!) {\n            delete_restore_codes_by_pk(id: $code) {\n                id\n            }\n        }\n    ": types.DeleteRestoreCodeDocument,
    "\n        mutation updatePasswordByEmail($email: String, $password: String) {\n            update_heroes(where: { email: { _eq: $email } }, _set: { password: $password }) {\n                affected_rows\n            }\n        }\n    ": types.UpdatePasswordByEmailDocument,
    "\n        query restore_codes($code: uuid!) {\n            restore_codes_by_pk(id: $code) {\n                email\n            }\n        }\n    ": types.Restore_CodesDocument,
    "\n        query fetchUserByEmail($email: String) {\n            heroes(where: { email: { _eq: $email } }) {\n                id\n            }\n        }\n    ": types.FetchUserByEmailDocument,
    "\n        query UserByPk($user_id: uuid!) {\n            heroes_by_pk(id: $user_id) {\n                password\n            }\n        }\n    ": types.UserByPkDocument,
    "\n                mutation Mutation_updateNoteLabelRating($id: uuid!) {\n                    update_notes_labels_by_pk(pk_columns: { id: $id }, _inc: { rating: 1 }) {\n                        id\n                        name\n                        owner_id\n                        rating\n                    }\n                }\n            ": types.Mutation_UpdateNoteLabelRatingDocument,
    "\n        mutation mutation_cachedSprint($id: uuid!) {\n            update_sprints_by_pk(pk_columns: { id: $id }, _set: { cached: true }) {\n                id\n            }\n        }\n    ": types.Mutation_CachedSprintDocument,
    "\n        mutation mutation_insertNewSprint($newSprint: sprints_insert_input!) {\n            insert_sprints_one(object: $newSprint) {\n                img_path\n                id\n                duration\n                description\n                created_at\n                achievement\n                started_at\n                finished_at\n                title\n                updated_at\n                parent_sprint_id\n                owner_id\n                sprint_days\n                sprint_goals\n            }\n        }\n    ": types.Mutation_InsertNewSprintDocument,
    "\n        mutation mutation_toggleDeleteSprint($id: uuid!, $deleted_at: timestamptz) {\n            update_sprints(\n                where: { _or: [{ id: { _eq: $id } }, { parent_sprint_id: { _eq: $id } }] }\n                _set: { deleted_at: $deleted_at }\n            ) {\n                returning {\n                    deleted_at\n                }\n            }\n        }\n    ": types.Mutation_ToggleDeleteSprintDocument,
    "\n        mutation mutation_updateSprint($sprintId: uuid!, $updatedSprint: sprints_set_input) {\n            update_sprints_by_pk(pk_columns: { id: $sprintId }, _set: $updatedSprint) {\n                img_path\n                id\n                duration\n                description\n                created_at\n                achievement\n                started_at\n                finished_at\n                title\n                updated_at\n                parent_sprint_id\n                owner_id\n                sprint_days\n                sprint_goals\n            }\n        }\n    ": types.Mutation_UpdateSprintDocument,
    "\n        mutation mutation_updateSprintDays($id: uuid!, $sprintDays: jsonb) {\n            update_sprints_by_pk(pk_columns: { id: $id }, _set: { sprint_days: $sprintDays }) {\n                id\n            }\n        }\n    ": types.Mutation_UpdateSprintDaysDocument,
    "\n        query fetchSprints($user_id: uuid) {\n            sprints(\n                where: { owner_id: { _eq: $user_id }, cached: { _is_null: true }, sprint_days: { _is_null: false } }\n                order_by: { started_at: desc }\n            ) {\n                achievement\n                title\n                started_at\n                finished_at\n                updated_at\n                owner_id\n                img_path\n                id\n                duration\n                description\n                created_at\n                parent_sprint_id\n                owner_id\n                created_at\n                sprint_days\n                sprint_goals\n                deleted_at\n            }\n        }\n    ": types.FetchSprintsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        mutation deleteRestoreCode($code: uuid!) {\n            delete_restore_codes_by_pk(id: $code) {\n                id\n            }\n        }\n    "): (typeof documents)["\n        mutation deleteRestoreCode($code: uuid!) {\n            delete_restore_codes_by_pk(id: $code) {\n                id\n            }\n        }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        mutation updatePasswordByEmail($email: String, $password: String) {\n            update_heroes(where: { email: { _eq: $email } }, _set: { password: $password }) {\n                affected_rows\n            }\n        }\n    "): (typeof documents)["\n        mutation updatePasswordByEmail($email: String, $password: String) {\n            update_heroes(where: { email: { _eq: $email } }, _set: { password: $password }) {\n                affected_rows\n            }\n        }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        query restore_codes($code: uuid!) {\n            restore_codes_by_pk(id: $code) {\n                email\n            }\n        }\n    "): (typeof documents)["\n        query restore_codes($code: uuid!) {\n            restore_codes_by_pk(id: $code) {\n                email\n            }\n        }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        query fetchUserByEmail($email: String) {\n            heroes(where: { email: { _eq: $email } }) {\n                id\n            }\n        }\n    "): (typeof documents)["\n        query fetchUserByEmail($email: String) {\n            heroes(where: { email: { _eq: $email } }) {\n                id\n            }\n        }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        query UserByPk($user_id: uuid!) {\n            heroes_by_pk(id: $user_id) {\n                password\n            }\n        }\n    "): (typeof documents)["\n        query UserByPk($user_id: uuid!) {\n            heroes_by_pk(id: $user_id) {\n                password\n            }\n        }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n                mutation Mutation_updateNoteLabelRating($id: uuid!) {\n                    update_notes_labels_by_pk(pk_columns: { id: $id }, _inc: { rating: 1 }) {\n                        id\n                        name\n                        owner_id\n                        rating\n                    }\n                }\n            "): (typeof documents)["\n                mutation Mutation_updateNoteLabelRating($id: uuid!) {\n                    update_notes_labels_by_pk(pk_columns: { id: $id }, _inc: { rating: 1 }) {\n                        id\n                        name\n                        owner_id\n                        rating\n                    }\n                }\n            "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        mutation mutation_cachedSprint($id: uuid!) {\n            update_sprints_by_pk(pk_columns: { id: $id }, _set: { cached: true }) {\n                id\n            }\n        }\n    "): (typeof documents)["\n        mutation mutation_cachedSprint($id: uuid!) {\n            update_sprints_by_pk(pk_columns: { id: $id }, _set: { cached: true }) {\n                id\n            }\n        }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        mutation mutation_insertNewSprint($newSprint: sprints_insert_input!) {\n            insert_sprints_one(object: $newSprint) {\n                img_path\n                id\n                duration\n                description\n                created_at\n                achievement\n                started_at\n                finished_at\n                title\n                updated_at\n                parent_sprint_id\n                owner_id\n                sprint_days\n                sprint_goals\n            }\n        }\n    "): (typeof documents)["\n        mutation mutation_insertNewSprint($newSprint: sprints_insert_input!) {\n            insert_sprints_one(object: $newSprint) {\n                img_path\n                id\n                duration\n                description\n                created_at\n                achievement\n                started_at\n                finished_at\n                title\n                updated_at\n                parent_sprint_id\n                owner_id\n                sprint_days\n                sprint_goals\n            }\n        }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        mutation mutation_toggleDeleteSprint($id: uuid!, $deleted_at: timestamptz) {\n            update_sprints(\n                where: { _or: [{ id: { _eq: $id } }, { parent_sprint_id: { _eq: $id } }] }\n                _set: { deleted_at: $deleted_at }\n            ) {\n                returning {\n                    deleted_at\n                }\n            }\n        }\n    "): (typeof documents)["\n        mutation mutation_toggleDeleteSprint($id: uuid!, $deleted_at: timestamptz) {\n            update_sprints(\n                where: { _or: [{ id: { _eq: $id } }, { parent_sprint_id: { _eq: $id } }] }\n                _set: { deleted_at: $deleted_at }\n            ) {\n                returning {\n                    deleted_at\n                }\n            }\n        }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        mutation mutation_updateSprint($sprintId: uuid!, $updatedSprint: sprints_set_input) {\n            update_sprints_by_pk(pk_columns: { id: $sprintId }, _set: $updatedSprint) {\n                img_path\n                id\n                duration\n                description\n                created_at\n                achievement\n                started_at\n                finished_at\n                title\n                updated_at\n                parent_sprint_id\n                owner_id\n                sprint_days\n                sprint_goals\n            }\n        }\n    "): (typeof documents)["\n        mutation mutation_updateSprint($sprintId: uuid!, $updatedSprint: sprints_set_input) {\n            update_sprints_by_pk(pk_columns: { id: $sprintId }, _set: $updatedSprint) {\n                img_path\n                id\n                duration\n                description\n                created_at\n                achievement\n                started_at\n                finished_at\n                title\n                updated_at\n                parent_sprint_id\n                owner_id\n                sprint_days\n                sprint_goals\n            }\n        }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        mutation mutation_updateSprintDays($id: uuid!, $sprintDays: jsonb) {\n            update_sprints_by_pk(pk_columns: { id: $id }, _set: { sprint_days: $sprintDays }) {\n                id\n            }\n        }\n    "): (typeof documents)["\n        mutation mutation_updateSprintDays($id: uuid!, $sprintDays: jsonb) {\n            update_sprints_by_pk(pk_columns: { id: $id }, _set: { sprint_days: $sprintDays }) {\n                id\n            }\n        }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        query fetchSprints($user_id: uuid) {\n            sprints(\n                where: { owner_id: { _eq: $user_id }, cached: { _is_null: true }, sprint_days: { _is_null: false } }\n                order_by: { started_at: desc }\n            ) {\n                achievement\n                title\n                started_at\n                finished_at\n                updated_at\n                owner_id\n                img_path\n                id\n                duration\n                description\n                created_at\n                parent_sprint_id\n                owner_id\n                created_at\n                sprint_days\n                sprint_goals\n                deleted_at\n            }\n        }\n    "): (typeof documents)["\n        query fetchSprints($user_id: uuid) {\n            sprints(\n                where: { owner_id: { _eq: $user_id }, cached: { _is_null: true }, sprint_days: { _is_null: false } }\n                order_by: { started_at: desc }\n            ) {\n                achievement\n                title\n                started_at\n                finished_at\n                updated_at\n                owner_id\n                img_path\n                id\n                duration\n                description\n                created_at\n                parent_sprint_id\n                owner_id\n                created_at\n                sprint_days\n                sprint_goals\n                deleted_at\n            }\n        }\n    "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;