// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    Boolean: boolean,
    Float: number,
    Int: number,
    String: string,
    jsonb: any,
    timestamptz: any,
    uuid: any,
}


/**
 * user_achievements
 * 
 * 
 * columns and relationships of "achievements"
 * 
 */
export interface achievements {
    created_at: (Scalars['timestamptz'] | null)
    description: Scalars['String']
    id: Scalars['uuid']
    img_path: (Scalars['String'] | null)
    owner_id: Scalars['uuid']
    title: Scalars['String']
    visible: Scalars['Boolean']
    __typename: 'achievements'
}


/** aggregated selection of "achievements" */
export interface achievements_aggregate {
    aggregate: (achievements_aggregate_fields | null)
    nodes: achievements[]
    __typename: 'achievements_aggregate'
}


/** aggregate fields of "achievements" */
export interface achievements_aggregate_fields {
    count: Scalars['Int']
    max: (achievements_max_fields | null)
    min: (achievements_min_fields | null)
    __typename: 'achievements_aggregate_fields'
}


/** unique or primary key constraints on table "achievements" */
export type achievements_constraint = 'achievements_id_key' | 'achievements_pkey'


/** aggregate max on columns */
export interface achievements_max_fields {
    created_at: (Scalars['timestamptz'] | null)
    description: (Scalars['String'] | null)
    id: (Scalars['uuid'] | null)
    img_path: (Scalars['String'] | null)
    owner_id: (Scalars['uuid'] | null)
    title: (Scalars['String'] | null)
    __typename: 'achievements_max_fields'
}


/** aggregate min on columns */
export interface achievements_min_fields {
    created_at: (Scalars['timestamptz'] | null)
    description: (Scalars['String'] | null)
    id: (Scalars['uuid'] | null)
    img_path: (Scalars['String'] | null)
    owner_id: (Scalars['uuid'] | null)
    title: (Scalars['String'] | null)
    __typename: 'achievements_min_fields'
}


/** response of any mutation on the table "achievements" */
export interface achievements_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: achievements[]
    __typename: 'achievements_mutation_response'
}


/** select columns of table "achievements" */
export type achievements_select_column = 'created_at' | 'description' | 'id' | 'img_path' | 'owner_id' | 'title' | 'visible'


/** update columns of table "achievements" */
export type achievements_update_column = 'created_at' | 'description' | 'id' | 'img_path' | 'owner_id' | 'title' | 'visible'


/**
 * bonus modules
 * 
 * 
 * columns and relationships of "addons"
 * 
 */
export interface addons {
    addon: addons_enum_enum
    /** An object relationship */
    addons_enum: addons_enum
    /** An object relationship */
    hero: heroes
    owner_id: Scalars['uuid']
    __typename: 'addons'
}


/** aggregated selection of "addons" */
export interface addons_aggregate {
    aggregate: (addons_aggregate_fields | null)
    nodes: addons[]
    __typename: 'addons_aggregate'
}


/** aggregate fields of "addons" */
export interface addons_aggregate_fields {
    count: Scalars['Int']
    max: (addons_max_fields | null)
    min: (addons_min_fields | null)
    __typename: 'addons_aggregate_fields'
}


/** unique or primary key constraints on table "addons" */
export type addons_constraint = 'addons_pkey'


/** columns and relationships of "addons_enum" */
export interface addons_enum {
    addon: Scalars['String']
    /** An array relationship */
    addons: addons[]
    /** An aggregate relationship */
    addons_aggregate: addons_aggregate
    description: Scalars['String']
    __typename: 'addons_enum'
}


/** aggregated selection of "addons_enum" */
export interface addons_enum_aggregate {
    aggregate: (addons_enum_aggregate_fields | null)
    nodes: addons_enum[]
    __typename: 'addons_enum_aggregate'
}


/** aggregate fields of "addons_enum" */
export interface addons_enum_aggregate_fields {
    count: Scalars['Int']
    max: (addons_enum_max_fields | null)
    min: (addons_enum_min_fields | null)
    __typename: 'addons_enum_aggregate_fields'
}


/** unique or primary key constraints on table "addons_enum" */
export type addons_enum_constraint = 'addons_enum_pkey'

export type addons_enum_enum = 'goals_of_week'


/** aggregate max on columns */
export interface addons_enum_max_fields {
    addon: (Scalars['String'] | null)
    description: (Scalars['String'] | null)
    __typename: 'addons_enum_max_fields'
}


/** aggregate min on columns */
export interface addons_enum_min_fields {
    addon: (Scalars['String'] | null)
    description: (Scalars['String'] | null)
    __typename: 'addons_enum_min_fields'
}


/** response of any mutation on the table "addons_enum" */
export interface addons_enum_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: addons_enum[]
    __typename: 'addons_enum_mutation_response'
}


/** select columns of table "addons_enum" */
export type addons_enum_select_column = 'addon' | 'description'


/** update columns of table "addons_enum" */
export type addons_enum_update_column = 'addon' | 'description'


/** aggregate max on columns */
export interface addons_max_fields {
    owner_id: (Scalars['uuid'] | null)
    __typename: 'addons_max_fields'
}


/** aggregate min on columns */
export interface addons_min_fields {
    owner_id: (Scalars['uuid'] | null)
    __typename: 'addons_min_fields'
}


/** response of any mutation on the table "addons" */
export interface addons_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: addons[]
    __typename: 'addons_mutation_response'
}


/** select columns of table "addons" */
export type addons_select_column = 'addon' | 'owner_id'


/** update columns of table "addons" */
export type addons_update_column = 'addon' | 'owner_id'


/**
 * goal difficulty
 * 
 * 
 * columns and relationships of "goal_difficulty_enum"
 * 
 */
export interface goal_difficulty_enum {
    description: Scalars['String']
    difficulty: Scalars['String']
    /** An array relationship */
    goals: goals[]
    /** An aggregate relationship */
    goals_aggregate: goals_aggregate
    __typename: 'goal_difficulty_enum'
}


/** aggregated selection of "goal_difficulty_enum" */
export interface goal_difficulty_enum_aggregate {
    aggregate: (goal_difficulty_enum_aggregate_fields | null)
    nodes: goal_difficulty_enum[]
    __typename: 'goal_difficulty_enum_aggregate'
}


/** aggregate fields of "goal_difficulty_enum" */
export interface goal_difficulty_enum_aggregate_fields {
    count: Scalars['Int']
    max: (goal_difficulty_enum_max_fields | null)
    min: (goal_difficulty_enum_min_fields | null)
    __typename: 'goal_difficulty_enum_aggregate_fields'
}


/** unique or primary key constraints on table "goal_difficulty_enum" */
export type goal_difficulty_enum_constraint = 'goal_difficulty_enum_pkey'

export type goal_difficulty_enum_enum = 'epic' | 'friend_of_death' | 'immortal' | 'legend' | 'light' | 'medium' | 'star'


/** aggregate max on columns */
export interface goal_difficulty_enum_max_fields {
    description: (Scalars['String'] | null)
    difficulty: (Scalars['String'] | null)
    __typename: 'goal_difficulty_enum_max_fields'
}


/** aggregate min on columns */
export interface goal_difficulty_enum_min_fields {
    description: (Scalars['String'] | null)
    difficulty: (Scalars['String'] | null)
    __typename: 'goal_difficulty_enum_min_fields'
}


/** response of any mutation on the table "goal_difficulty_enum" */
export interface goal_difficulty_enum_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: goal_difficulty_enum[]
    __typename: 'goal_difficulty_enum_mutation_response'
}


/** select columns of table "goal_difficulty_enum" */
export type goal_difficulty_enum_select_column = 'description' | 'difficulty'


/** update columns of table "goal_difficulty_enum" */
export type goal_difficulty_enum_update_column = 'description' | 'difficulty'


/** columns and relationships of "goal_logs_enum" */
export interface goal_logs_enum {
    description: (Scalars['String'] | null)
    /** An array relationship */
    goals_logs: goals_logs[]
    /** An aggregate relationship */
    goals_logs_aggregate: goals_logs_aggregate
    log_type: Scalars['String']
    __typename: 'goal_logs_enum'
}


/** aggregated selection of "goal_logs_enum" */
export interface goal_logs_enum_aggregate {
    aggregate: (goal_logs_enum_aggregate_fields | null)
    nodes: goal_logs_enum[]
    __typename: 'goal_logs_enum_aggregate'
}


/** aggregate fields of "goal_logs_enum" */
export interface goal_logs_enum_aggregate_fields {
    count: Scalars['Int']
    max: (goal_logs_enum_max_fields | null)
    min: (goal_logs_enum_min_fields | null)
    __typename: 'goal_logs_enum_aggregate_fields'
}


/** unique or primary key constraints on table "goal_logs_enum" */
export type goal_logs_enum_constraint = 'goal_logs_enum_pkey'

export type goal_logs_enum_enum = 'completed' | 'created' | 'deprecated' | 'failed' | 'ritualized'


/** aggregate max on columns */
export interface goal_logs_enum_max_fields {
    description: (Scalars['String'] | null)
    log_type: (Scalars['String'] | null)
    __typename: 'goal_logs_enum_max_fields'
}


/** aggregate min on columns */
export interface goal_logs_enum_min_fields {
    description: (Scalars['String'] | null)
    log_type: (Scalars['String'] | null)
    __typename: 'goal_logs_enum_min_fields'
}


/** response of any mutation on the table "goal_logs_enum" */
export interface goal_logs_enum_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: goal_logs_enum[]
    __typename: 'goal_logs_enum_mutation_response'
}


/** select columns of table "goal_logs_enum" */
export type goal_logs_enum_select_column = 'description' | 'log_type'


/** update columns of table "goal_logs_enum" */
export type goal_logs_enum_update_column = 'description' | 'log_type'


/**
 * goal status
 * 
 * 
 * columns and relationships of "goal_status_enum"
 * 
 */
export interface goal_status_enum {
    description: Scalars['String']
    /** An array relationship */
    goals: goals[]
    /** An aggregate relationship */
    goals_aggregate: goals_aggregate
    status: Scalars['String']
    __typename: 'goal_status_enum'
}


/** aggregated selection of "goal_status_enum" */
export interface goal_status_enum_aggregate {
    aggregate: (goal_status_enum_aggregate_fields | null)
    nodes: goal_status_enum[]
    __typename: 'goal_status_enum_aggregate'
}


/** aggregate fields of "goal_status_enum" */
export interface goal_status_enum_aggregate_fields {
    count: Scalars['Int']
    max: (goal_status_enum_max_fields | null)
    min: (goal_status_enum_min_fields | null)
    __typename: 'goal_status_enum_aggregate_fields'
}


/** unique or primary key constraints on table "goal_status_enum" */
export type goal_status_enum_constraint = 'goal_status_enum_pkey'

export type goal_status_enum_enum = 'abstract' | 'active' | 'completed' | 'deprecated' | 'failed' | 'finished' | 'frozen'


/** aggregate max on columns */
export interface goal_status_enum_max_fields {
    description: (Scalars['String'] | null)
    status: (Scalars['String'] | null)
    __typename: 'goal_status_enum_max_fields'
}


/** aggregate min on columns */
export interface goal_status_enum_min_fields {
    description: (Scalars['String'] | null)
    status: (Scalars['String'] | null)
    __typename: 'goal_status_enum_min_fields'
}


/** response of any mutation on the table "goal_status_enum" */
export interface goal_status_enum_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: goal_status_enum[]
    __typename: 'goal_status_enum_mutation_response'
}


/** select columns of table "goal_status_enum" */
export type goal_status_enum_select_column = 'description' | 'status'


/** update columns of table "goal_status_enum" */
export type goal_status_enum_update_column = 'description' | 'status'


/**
 * list of goals, finished_at - the finish estimation
 * 
 * 
 * columns and relationships of "goals"
 * 
 */
export interface goals {
    /** An array relationship */
    child_goals: goals[]
    /** An aggregate relationship */
    child_goals_aggregate: goals_aggregate
    created_at: Scalars['timestamptz']
    deleted_at: (Scalars['timestamptz'] | null)
    description: Scalars['String']
    difficulty: goal_difficulty_enum_enum
    finished_at: (Scalars['timestamptz'] | null)
    /** An object relationship */
    goal_difficulty_enum: goal_difficulty_enum
    /** An object relationship */
    goal_ritual: (goals_rituals | null)
    /** An object relationship */
    goal_status_enum: goal_status_enum
    /** An array relationship */
    goals_logs: goals_logs[]
    /** An aggregate relationship */
    goals_logs_aggregate: goals_logs_aggregate
    /** fetch data from the table: "goals_rituals" */
    goals_rituals: goals_rituals[]
    /** An aggregate relationship */
    goals_rituals_aggregate: goals_rituals_aggregate
    /** An object relationship */
    hero: heroes
    id: Scalars['uuid']
    is_favorite: Scalars['Boolean']
    owner_id: Scalars['uuid']
    parent_goal_id: (Scalars['uuid'] | null)
    privacy: (privacy_enum_enum | null)
    /** An object relationship */
    privacy_enum: (privacy_enum | null)
    slogan: Scalars['String']
    status: goal_status_enum_enum
    title: Scalars['String']
    updated_at: Scalars['timestamptz']
    __typename: 'goals'
}


/** aggregated selection of "goals" */
export interface goals_aggregate {
    aggregate: (goals_aggregate_fields | null)
    nodes: goals[]
    __typename: 'goals_aggregate'
}


/** aggregate fields of "goals" */
export interface goals_aggregate_fields {
    count: Scalars['Int']
    max: (goals_max_fields | null)
    min: (goals_min_fields | null)
    __typename: 'goals_aggregate_fields'
}


/** unique or primary key constraints on table "goals" */
export type goals_constraint = 'goals_pkey'


/** columns and relationships of "goals_logs" */
export interface goals_logs {
    created_at: Scalars['timestamptz']
    /** An object relationship */
    goal: goals
    goal_id: Scalars['uuid']
    /** An object relationship */
    goal_logs_enum: goal_logs_enum
    log_description: goal_logs_enum_enum
    log_id: Scalars['uuid']
    __typename: 'goals_logs'
}


/** aggregated selection of "goals_logs" */
export interface goals_logs_aggregate {
    aggregate: (goals_logs_aggregate_fields | null)
    nodes: goals_logs[]
    __typename: 'goals_logs_aggregate'
}


/** aggregate fields of "goals_logs" */
export interface goals_logs_aggregate_fields {
    count: Scalars['Int']
    max: (goals_logs_max_fields | null)
    min: (goals_logs_min_fields | null)
    __typename: 'goals_logs_aggregate_fields'
}


/** unique or primary key constraints on table "goals_logs" */
export type goals_logs_constraint = 'goals_logs_pkey'


/** aggregate max on columns */
export interface goals_logs_max_fields {
    created_at: (Scalars['timestamptz'] | null)
    goal_id: (Scalars['uuid'] | null)
    log_id: (Scalars['uuid'] | null)
    __typename: 'goals_logs_max_fields'
}


/** aggregate min on columns */
export interface goals_logs_min_fields {
    created_at: (Scalars['timestamptz'] | null)
    goal_id: (Scalars['uuid'] | null)
    log_id: (Scalars['uuid'] | null)
    __typename: 'goals_logs_min_fields'
}


/** response of any mutation on the table "goals_logs" */
export interface goals_logs_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: goals_logs[]
    __typename: 'goals_logs_mutation_response'
}


/** select columns of table "goals_logs" */
export type goals_logs_select_column = 'created_at' | 'goal_id' | 'log_description' | 'log_id'


/** update columns of table "goals_logs" */
export type goals_logs_update_column = 'created_at' | 'goal_id' | 'log_description' | 'log_id'


/** aggregate max on columns */
export interface goals_max_fields {
    created_at: (Scalars['timestamptz'] | null)
    deleted_at: (Scalars['timestamptz'] | null)
    description: (Scalars['String'] | null)
    finished_at: (Scalars['timestamptz'] | null)
    id: (Scalars['uuid'] | null)
    owner_id: (Scalars['uuid'] | null)
    parent_goal_id: (Scalars['uuid'] | null)
    slogan: (Scalars['String'] | null)
    title: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'goals_max_fields'
}


/** aggregate min on columns */
export interface goals_min_fields {
    created_at: (Scalars['timestamptz'] | null)
    deleted_at: (Scalars['timestamptz'] | null)
    description: (Scalars['String'] | null)
    finished_at: (Scalars['timestamptz'] | null)
    id: (Scalars['uuid'] | null)
    owner_id: (Scalars['uuid'] | null)
    parent_goal_id: (Scalars['uuid'] | null)
    slogan: (Scalars['String'] | null)
    title: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'goals_min_fields'
}


/** response of any mutation on the table "goals" */
export interface goals_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: goals[]
    __typename: 'goals_mutation_response'
}


/** columns and relationships of "goals_rituals" */
export interface goals_rituals {
    created_at: Scalars['timestamptz']
    /** An object relationship */
    goal: goals
    goal_id: Scalars['uuid']
    ritual_id: Scalars['uuid']
    ritual_interval: Scalars['Int']
    ritual_power: Scalars['Int']
    ritual_type: ritual_type_enum_enum
    /** An object relationship */
    ritual_type_enum: ritual_type_enum
    __typename: 'goals_rituals'
}


/** aggregated selection of "goals_rituals" */
export interface goals_rituals_aggregate {
    aggregate: (goals_rituals_aggregate_fields | null)
    nodes: goals_rituals[]
    __typename: 'goals_rituals_aggregate'
}


/** aggregate fields of "goals_rituals" */
export interface goals_rituals_aggregate_fields {
    avg: (goals_rituals_avg_fields | null)
    count: Scalars['Int']
    max: (goals_rituals_max_fields | null)
    min: (goals_rituals_min_fields | null)
    stddev: (goals_rituals_stddev_fields | null)
    stddev_pop: (goals_rituals_stddev_pop_fields | null)
    stddev_samp: (goals_rituals_stddev_samp_fields | null)
    sum: (goals_rituals_sum_fields | null)
    var_pop: (goals_rituals_var_pop_fields | null)
    var_samp: (goals_rituals_var_samp_fields | null)
    variance: (goals_rituals_variance_fields | null)
    __typename: 'goals_rituals_aggregate_fields'
}


/** aggregate avg on columns */
export interface goals_rituals_avg_fields {
    ritual_interval: (Scalars['Float'] | null)
    ritual_power: (Scalars['Float'] | null)
    __typename: 'goals_rituals_avg_fields'
}


/** unique or primary key constraints on table "goals_rituals" */
export type goals_rituals_constraint = 'goals_rituals_pkey'


/** aggregate max on columns */
export interface goals_rituals_max_fields {
    created_at: (Scalars['timestamptz'] | null)
    goal_id: (Scalars['uuid'] | null)
    ritual_id: (Scalars['uuid'] | null)
    ritual_interval: (Scalars['Int'] | null)
    ritual_power: (Scalars['Int'] | null)
    __typename: 'goals_rituals_max_fields'
}


/** aggregate min on columns */
export interface goals_rituals_min_fields {
    created_at: (Scalars['timestamptz'] | null)
    goal_id: (Scalars['uuid'] | null)
    ritual_id: (Scalars['uuid'] | null)
    ritual_interval: (Scalars['Int'] | null)
    ritual_power: (Scalars['Int'] | null)
    __typename: 'goals_rituals_min_fields'
}


/** response of any mutation on the table "goals_rituals" */
export interface goals_rituals_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: goals_rituals[]
    __typename: 'goals_rituals_mutation_response'
}


/** select columns of table "goals_rituals" */
export type goals_rituals_select_column = 'created_at' | 'goal_id' | 'ritual_id' | 'ritual_interval' | 'ritual_power' | 'ritual_type'


/** aggregate stddev on columns */
export interface goals_rituals_stddev_fields {
    ritual_interval: (Scalars['Float'] | null)
    ritual_power: (Scalars['Float'] | null)
    __typename: 'goals_rituals_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface goals_rituals_stddev_pop_fields {
    ritual_interval: (Scalars['Float'] | null)
    ritual_power: (Scalars['Float'] | null)
    __typename: 'goals_rituals_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface goals_rituals_stddev_samp_fields {
    ritual_interval: (Scalars['Float'] | null)
    ritual_power: (Scalars['Float'] | null)
    __typename: 'goals_rituals_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface goals_rituals_sum_fields {
    ritual_interval: (Scalars['Int'] | null)
    ritual_power: (Scalars['Int'] | null)
    __typename: 'goals_rituals_sum_fields'
}


/** update columns of table "goals_rituals" */
export type goals_rituals_update_column = 'created_at' | 'goal_id' | 'ritual_id' | 'ritual_interval' | 'ritual_power' | 'ritual_type'


/** aggregate var_pop on columns */
export interface goals_rituals_var_pop_fields {
    ritual_interval: (Scalars['Float'] | null)
    ritual_power: (Scalars['Float'] | null)
    __typename: 'goals_rituals_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface goals_rituals_var_samp_fields {
    ritual_interval: (Scalars['Float'] | null)
    ritual_power: (Scalars['Float'] | null)
    __typename: 'goals_rituals_var_samp_fields'
}


/** aggregate variance on columns */
export interface goals_rituals_variance_fields {
    ritual_interval: (Scalars['Float'] | null)
    ritual_power: (Scalars['Float'] | null)
    __typename: 'goals_rituals_variance_fields'
}


/** select columns of table "goals" */
export type goals_select_column = 'created_at' | 'deleted_at' | 'description' | 'difficulty' | 'finished_at' | 'id' | 'is_favorite' | 'owner_id' | 'parent_goal_id' | 'privacy' | 'slogan' | 'status' | 'title' | 'updated_at'


/** columns and relationships of "goals_slides" */
export interface goals_slides {
    active: Scalars['Boolean']
    created_at: Scalars['timestamptz']
    deleted_at: (Scalars['timestamptz'] | null)
    id: Scalars['uuid']
    img_path: (Scalars['String'] | null)
    owner_id: Scalars['uuid']
    title: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'goals_slides'
}


/** aggregated selection of "goals_slides" */
export interface goals_slides_aggregate {
    aggregate: (goals_slides_aggregate_fields | null)
    nodes: goals_slides[]
    __typename: 'goals_slides_aggregate'
}


/** aggregate fields of "goals_slides" */
export interface goals_slides_aggregate_fields {
    count: Scalars['Int']
    max: (goals_slides_max_fields | null)
    min: (goals_slides_min_fields | null)
    __typename: 'goals_slides_aggregate_fields'
}


/** unique or primary key constraints on table "goals_slides" */
export type goals_slides_constraint = 'goals_slides_pkey'


/** aggregate max on columns */
export interface goals_slides_max_fields {
    created_at: (Scalars['timestamptz'] | null)
    deleted_at: (Scalars['timestamptz'] | null)
    id: (Scalars['uuid'] | null)
    img_path: (Scalars['String'] | null)
    owner_id: (Scalars['uuid'] | null)
    title: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'goals_slides_max_fields'
}


/** aggregate min on columns */
export interface goals_slides_min_fields {
    created_at: (Scalars['timestamptz'] | null)
    deleted_at: (Scalars['timestamptz'] | null)
    id: (Scalars['uuid'] | null)
    img_path: (Scalars['String'] | null)
    owner_id: (Scalars['uuid'] | null)
    title: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'goals_slides_min_fields'
}


/** response of any mutation on the table "goals_slides" */
export interface goals_slides_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: goals_slides[]
    __typename: 'goals_slides_mutation_response'
}


/** select columns of table "goals_slides" */
export type goals_slides_select_column = 'active' | 'created_at' | 'deleted_at' | 'id' | 'img_path' | 'owner_id' | 'title' | 'updated_at'


/** update columns of table "goals_slides" */
export type goals_slides_update_column = 'active' | 'created_at' | 'deleted_at' | 'id' | 'img_path' | 'owner_id' | 'title' | 'updated_at'


/** update columns of table "goals" */
export type goals_update_column = 'created_at' | 'deleted_at' | 'description' | 'difficulty' | 'finished_at' | 'id' | 'is_favorite' | 'owner_id' | 'parent_goal_id' | 'privacy' | 'slogan' | 'status' | 'title' | 'updated_at'


/**
 * list of heroes
 * 
 * 
 * columns and relationships of "heroes"
 * 
 */
export interface heroes {
    /** An array relationship */
    addons: addons[]
    /** An aggregate relationship */
    addons_aggregate: addons_aggregate
    avatar: (Scalars['String'] | null)
    birthday: (Scalars['timestamptz'] | null)
    coins: Scalars['Int']
    created_at: Scalars['timestamptz']
    deleted_at: (Scalars['timestamptz'] | null)
    email: Scalars['String']
    /** An array relationship */
    goals: goals[]
    /** An aggregate relationship */
    goals_aggregate: goals_aggregate
    id: Scalars['uuid']
    name: Scalars['String']
    password: (Scalars['String'] | null)
    phone: Scalars['String']
    updated_at: Scalars['timestamptz']
    __typename: 'heroes'
}


/** aggregated selection of "heroes" */
export interface heroes_aggregate {
    aggregate: (heroes_aggregate_fields | null)
    nodes: heroes[]
    __typename: 'heroes_aggregate'
}


/** aggregate fields of "heroes" */
export interface heroes_aggregate_fields {
    avg: (heroes_avg_fields | null)
    count: Scalars['Int']
    max: (heroes_max_fields | null)
    min: (heroes_min_fields | null)
    stddev: (heroes_stddev_fields | null)
    stddev_pop: (heroes_stddev_pop_fields | null)
    stddev_samp: (heroes_stddev_samp_fields | null)
    sum: (heroes_sum_fields | null)
    var_pop: (heroes_var_pop_fields | null)
    var_samp: (heroes_var_samp_fields | null)
    variance: (heroes_variance_fields | null)
    __typename: 'heroes_aggregate_fields'
}


/** aggregate avg on columns */
export interface heroes_avg_fields {
    coins: (Scalars['Float'] | null)
    __typename: 'heroes_avg_fields'
}


/** unique or primary key constraints on table "heroes" */
export type heroes_constraint = 'heroes_pkey'


/** aggregate max on columns */
export interface heroes_max_fields {
    avatar: (Scalars['String'] | null)
    birthday: (Scalars['timestamptz'] | null)
    coins: (Scalars['Int'] | null)
    created_at: (Scalars['timestamptz'] | null)
    deleted_at: (Scalars['timestamptz'] | null)
    email: (Scalars['String'] | null)
    id: (Scalars['uuid'] | null)
    name: (Scalars['String'] | null)
    password: (Scalars['String'] | null)
    phone: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'heroes_max_fields'
}


/** aggregate min on columns */
export interface heroes_min_fields {
    avatar: (Scalars['String'] | null)
    birthday: (Scalars['timestamptz'] | null)
    coins: (Scalars['Int'] | null)
    created_at: (Scalars['timestamptz'] | null)
    deleted_at: (Scalars['timestamptz'] | null)
    email: (Scalars['String'] | null)
    id: (Scalars['uuid'] | null)
    name: (Scalars['String'] | null)
    password: (Scalars['String'] | null)
    phone: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'heroes_min_fields'
}


/** response of any mutation on the table "heroes" */
export interface heroes_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: heroes[]
    __typename: 'heroes_mutation_response'
}


/** select columns of table "heroes" */
export type heroes_select_column = 'avatar' | 'birthday' | 'coins' | 'created_at' | 'deleted_at' | 'email' | 'id' | 'name' | 'password' | 'phone' | 'updated_at'


/** aggregate stddev on columns */
export interface heroes_stddev_fields {
    coins: (Scalars['Float'] | null)
    __typename: 'heroes_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface heroes_stddev_pop_fields {
    coins: (Scalars['Float'] | null)
    __typename: 'heroes_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface heroes_stddev_samp_fields {
    coins: (Scalars['Float'] | null)
    __typename: 'heroes_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface heroes_sum_fields {
    coins: (Scalars['Int'] | null)
    __typename: 'heroes_sum_fields'
}


/** update columns of table "heroes" */
export type heroes_update_column = 'avatar' | 'birthday' | 'coins' | 'created_at' | 'deleted_at' | 'email' | 'id' | 'name' | 'password' | 'phone' | 'updated_at'


/** aggregate var_pop on columns */
export interface heroes_var_pop_fields {
    coins: (Scalars['Float'] | null)
    __typename: 'heroes_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface heroes_var_samp_fields {
    coins: (Scalars['Float'] | null)
    __typename: 'heroes_var_samp_fields'
}


/** aggregate variance on columns */
export interface heroes_variance_fields {
    coins: (Scalars['Float'] | null)
    __typename: 'heroes_variance_fields'
}


/** mutation root */
export interface mutation_root {
    /** delete data from the table: "achievements" */
    delete_achievements: (achievements_mutation_response | null)
    /** delete single row from the table: "achievements" */
    delete_achievements_by_pk: (achievements | null)
    /** delete data from the table: "addons" */
    delete_addons: (addons_mutation_response | null)
    /** delete single row from the table: "addons" */
    delete_addons_by_pk: (addons | null)
    /** delete data from the table: "addons_enum" */
    delete_addons_enum: (addons_enum_mutation_response | null)
    /** delete single row from the table: "addons_enum" */
    delete_addons_enum_by_pk: (addons_enum | null)
    /** delete data from the table: "goal_difficulty_enum" */
    delete_goal_difficulty_enum: (goal_difficulty_enum_mutation_response | null)
    /** delete single row from the table: "goal_difficulty_enum" */
    delete_goal_difficulty_enum_by_pk: (goal_difficulty_enum | null)
    /** delete data from the table: "goal_logs_enum" */
    delete_goal_logs_enum: (goal_logs_enum_mutation_response | null)
    /** delete single row from the table: "goal_logs_enum" */
    delete_goal_logs_enum_by_pk: (goal_logs_enum | null)
    /** delete data from the table: "goal_status_enum" */
    delete_goal_status_enum: (goal_status_enum_mutation_response | null)
    /** delete single row from the table: "goal_status_enum" */
    delete_goal_status_enum_by_pk: (goal_status_enum | null)
    /** delete data from the table: "goals" */
    delete_goals: (goals_mutation_response | null)
    /** delete single row from the table: "goals" */
    delete_goals_by_pk: (goals | null)
    /** delete data from the table: "goals_logs" */
    delete_goals_logs: (goals_logs_mutation_response | null)
    /** delete single row from the table: "goals_logs" */
    delete_goals_logs_by_pk: (goals_logs | null)
    /** delete data from the table: "goals_rituals" */
    delete_goals_rituals: (goals_rituals_mutation_response | null)
    /** delete single row from the table: "goals_rituals" */
    delete_goals_rituals_by_pk: (goals_rituals | null)
    /** delete data from the table: "goals_slides" */
    delete_goals_slides: (goals_slides_mutation_response | null)
    /** delete single row from the table: "goals_slides" */
    delete_goals_slides_by_pk: (goals_slides | null)
    /** delete data from the table: "heroes" */
    delete_heroes: (heroes_mutation_response | null)
    /** delete single row from the table: "heroes" */
    delete_heroes_by_pk: (heroes | null)
    /** delete data from the table: "notes" */
    delete_notes: (notes_mutation_response | null)
    /** delete single row from the table: "notes" */
    delete_notes_by_pk: (notes | null)
    /** delete data from the table: "privacy_enum" */
    delete_privacy_enum: (privacy_enum_mutation_response | null)
    /** delete single row from the table: "privacy_enum" */
    delete_privacy_enum_by_pk: (privacy_enum | null)
    /** delete data from the table: "restore_codes" */
    delete_restore_codes: (restore_codes_mutation_response | null)
    /** delete single row from the table: "restore_codes" */
    delete_restore_codes_by_pk: (restore_codes | null)
    /** delete data from the table: "ritual_type_enum" */
    delete_ritual_type_enum: (ritual_type_enum_mutation_response | null)
    /** delete single row from the table: "ritual_type_enum" */
    delete_ritual_type_enum_by_pk: (ritual_type_enum | null)
    /** delete data from the table: "sprints" */
    delete_sprints: (sprints_mutation_response | null)
    /** delete single row from the table: "sprints" */
    delete_sprints_by_pk: (sprints | null)
    /** insert data into the table: "achievements" */
    insert_achievements: (achievements_mutation_response | null)
    /** insert a single row into the table: "achievements" */
    insert_achievements_one: (achievements | null)
    /** insert data into the table: "addons" */
    insert_addons: (addons_mutation_response | null)
    /** insert data into the table: "addons_enum" */
    insert_addons_enum: (addons_enum_mutation_response | null)
    /** insert a single row into the table: "addons_enum" */
    insert_addons_enum_one: (addons_enum | null)
    /** insert a single row into the table: "addons" */
    insert_addons_one: (addons | null)
    /** insert data into the table: "goal_difficulty_enum" */
    insert_goal_difficulty_enum: (goal_difficulty_enum_mutation_response | null)
    /** insert a single row into the table: "goal_difficulty_enum" */
    insert_goal_difficulty_enum_one: (goal_difficulty_enum | null)
    /** insert data into the table: "goal_logs_enum" */
    insert_goal_logs_enum: (goal_logs_enum_mutation_response | null)
    /** insert a single row into the table: "goal_logs_enum" */
    insert_goal_logs_enum_one: (goal_logs_enum | null)
    /** insert data into the table: "goal_status_enum" */
    insert_goal_status_enum: (goal_status_enum_mutation_response | null)
    /** insert a single row into the table: "goal_status_enum" */
    insert_goal_status_enum_one: (goal_status_enum | null)
    /** insert data into the table: "goals" */
    insert_goals: (goals_mutation_response | null)
    /** insert data into the table: "goals_logs" */
    insert_goals_logs: (goals_logs_mutation_response | null)
    /** insert a single row into the table: "goals_logs" */
    insert_goals_logs_one: (goals_logs | null)
    /** insert a single row into the table: "goals" */
    insert_goals_one: (goals | null)
    /** insert data into the table: "goals_rituals" */
    insert_goals_rituals: (goals_rituals_mutation_response | null)
    /** insert a single row into the table: "goals_rituals" */
    insert_goals_rituals_one: (goals_rituals | null)
    /** insert data into the table: "goals_slides" */
    insert_goals_slides: (goals_slides_mutation_response | null)
    /** insert a single row into the table: "goals_slides" */
    insert_goals_slides_one: (goals_slides | null)
    /** insert data into the table: "heroes" */
    insert_heroes: (heroes_mutation_response | null)
    /** insert a single row into the table: "heroes" */
    insert_heroes_one: (heroes | null)
    /** insert data into the table: "notes" */
    insert_notes: (notes_mutation_response | null)
    /** insert a single row into the table: "notes" */
    insert_notes_one: (notes | null)
    /** insert data into the table: "privacy_enum" */
    insert_privacy_enum: (privacy_enum_mutation_response | null)
    /** insert a single row into the table: "privacy_enum" */
    insert_privacy_enum_one: (privacy_enum | null)
    /** insert data into the table: "restore_codes" */
    insert_restore_codes: (restore_codes_mutation_response | null)
    /** insert a single row into the table: "restore_codes" */
    insert_restore_codes_one: (restore_codes | null)
    /** insert data into the table: "ritual_type_enum" */
    insert_ritual_type_enum: (ritual_type_enum_mutation_response | null)
    /** insert a single row into the table: "ritual_type_enum" */
    insert_ritual_type_enum_one: (ritual_type_enum | null)
    /** insert data into the table: "sprints" */
    insert_sprints: (sprints_mutation_response | null)
    /** insert a single row into the table: "sprints" */
    insert_sprints_one: (sprints | null)
    /** update data of the table: "achievements" */
    update_achievements: (achievements_mutation_response | null)
    /** update single row of the table: "achievements" */
    update_achievements_by_pk: (achievements | null)
    /** update data of the table: "addons" */
    update_addons: (addons_mutation_response | null)
    /** update single row of the table: "addons" */
    update_addons_by_pk: (addons | null)
    /** update data of the table: "addons_enum" */
    update_addons_enum: (addons_enum_mutation_response | null)
    /** update single row of the table: "addons_enum" */
    update_addons_enum_by_pk: (addons_enum | null)
    /** update data of the table: "goal_difficulty_enum" */
    update_goal_difficulty_enum: (goal_difficulty_enum_mutation_response | null)
    /** update single row of the table: "goal_difficulty_enum" */
    update_goal_difficulty_enum_by_pk: (goal_difficulty_enum | null)
    /** update data of the table: "goal_logs_enum" */
    update_goal_logs_enum: (goal_logs_enum_mutation_response | null)
    /** update single row of the table: "goal_logs_enum" */
    update_goal_logs_enum_by_pk: (goal_logs_enum | null)
    /** update data of the table: "goal_status_enum" */
    update_goal_status_enum: (goal_status_enum_mutation_response | null)
    /** update single row of the table: "goal_status_enum" */
    update_goal_status_enum_by_pk: (goal_status_enum | null)
    /** update data of the table: "goals" */
    update_goals: (goals_mutation_response | null)
    /** update single row of the table: "goals" */
    update_goals_by_pk: (goals | null)
    /** update data of the table: "goals_logs" */
    update_goals_logs: (goals_logs_mutation_response | null)
    /** update single row of the table: "goals_logs" */
    update_goals_logs_by_pk: (goals_logs | null)
    /** update data of the table: "goals_rituals" */
    update_goals_rituals: (goals_rituals_mutation_response | null)
    /** update single row of the table: "goals_rituals" */
    update_goals_rituals_by_pk: (goals_rituals | null)
    /** update data of the table: "goals_slides" */
    update_goals_slides: (goals_slides_mutation_response | null)
    /** update single row of the table: "goals_slides" */
    update_goals_slides_by_pk: (goals_slides | null)
    /** update data of the table: "heroes" */
    update_heroes: (heroes_mutation_response | null)
    /** update single row of the table: "heroes" */
    update_heroes_by_pk: (heroes | null)
    /** update data of the table: "notes" */
    update_notes: (notes_mutation_response | null)
    /** update single row of the table: "notes" */
    update_notes_by_pk: (notes | null)
    /** update data of the table: "privacy_enum" */
    update_privacy_enum: (privacy_enum_mutation_response | null)
    /** update single row of the table: "privacy_enum" */
    update_privacy_enum_by_pk: (privacy_enum | null)
    /** update data of the table: "restore_codes" */
    update_restore_codes: (restore_codes_mutation_response | null)
    /** update single row of the table: "restore_codes" */
    update_restore_codes_by_pk: (restore_codes | null)
    /** update data of the table: "ritual_type_enum" */
    update_ritual_type_enum: (ritual_type_enum_mutation_response | null)
    /** update single row of the table: "ritual_type_enum" */
    update_ritual_type_enum_by_pk: (ritual_type_enum | null)
    /** update data of the table: "sprints" */
    update_sprints: (sprints_mutation_response | null)
    /** update single row of the table: "sprints" */
    update_sprints_by_pk: (sprints | null)
    __typename: 'mutation_root'
}


/** columns and relationships of "notes" */
export interface notes {
    archived: (Scalars['Boolean'] | null)
    created_at: Scalars['timestamptz']
    deleted_at: (Scalars['timestamptz'] | null)
    description: Scalars['String']
    id: Scalars['uuid']
    owner_id: (Scalars['uuid'] | null)
    tag: Scalars['String']
    updated_at: Scalars['timestamptz']
    __typename: 'notes'
}


/** aggregated selection of "notes" */
export interface notes_aggregate {
    aggregate: (notes_aggregate_fields | null)
    nodes: notes[]
    __typename: 'notes_aggregate'
}


/** aggregate fields of "notes" */
export interface notes_aggregate_fields {
    count: Scalars['Int']
    max: (notes_max_fields | null)
    min: (notes_min_fields | null)
    __typename: 'notes_aggregate_fields'
}


/** unique or primary key constraints on table "notes" */
export type notes_constraint = 'tasks_pkey'


/** aggregate max on columns */
export interface notes_max_fields {
    created_at: (Scalars['timestamptz'] | null)
    deleted_at: (Scalars['timestamptz'] | null)
    description: (Scalars['String'] | null)
    id: (Scalars['uuid'] | null)
    owner_id: (Scalars['uuid'] | null)
    tag: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'notes_max_fields'
}


/** aggregate min on columns */
export interface notes_min_fields {
    created_at: (Scalars['timestamptz'] | null)
    deleted_at: (Scalars['timestamptz'] | null)
    description: (Scalars['String'] | null)
    id: (Scalars['uuid'] | null)
    owner_id: (Scalars['uuid'] | null)
    tag: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'notes_min_fields'
}


/** response of any mutation on the table "notes" */
export interface notes_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: notes[]
    __typename: 'notes_mutation_response'
}


/** select columns of table "notes" */
export type notes_select_column = 'archived' | 'created_at' | 'deleted_at' | 'description' | 'id' | 'owner_id' | 'tag' | 'updated_at'


/** update columns of table "notes" */
export type notes_update_column = 'archived' | 'created_at' | 'deleted_at' | 'description' | 'id' | 'owner_id' | 'tag' | 'updated_at'


/** column ordering options */
export type order_by = 'asc' | 'asc_nulls_first' | 'asc_nulls_last' | 'desc' | 'desc_nulls_first' | 'desc_nulls_last'


/**
 * privacy status
 * 
 * 
 * columns and relationships of "privacy_enum"
 * 
 */
export interface privacy_enum {
    description: Scalars['String']
    /** An array relationship */
    goals: goals[]
    /** An aggregate relationship */
    goals_aggregate: goals_aggregate
    privacy: Scalars['String']
    __typename: 'privacy_enum'
}


/** aggregated selection of "privacy_enum" */
export interface privacy_enum_aggregate {
    aggregate: (privacy_enum_aggregate_fields | null)
    nodes: privacy_enum[]
    __typename: 'privacy_enum_aggregate'
}


/** aggregate fields of "privacy_enum" */
export interface privacy_enum_aggregate_fields {
    count: Scalars['Int']
    max: (privacy_enum_max_fields | null)
    min: (privacy_enum_min_fields | null)
    __typename: 'privacy_enum_aggregate_fields'
}


/** unique or primary key constraints on table "privacy_enum" */
export type privacy_enum_constraint = 'privacy_enum_pkey'

export type privacy_enum_enum = 'friendzone' | 'private' | 'public'


/** aggregate max on columns */
export interface privacy_enum_max_fields {
    description: (Scalars['String'] | null)
    privacy: (Scalars['String'] | null)
    __typename: 'privacy_enum_max_fields'
}


/** aggregate min on columns */
export interface privacy_enum_min_fields {
    description: (Scalars['String'] | null)
    privacy: (Scalars['String'] | null)
    __typename: 'privacy_enum_min_fields'
}


/** response of any mutation on the table "privacy_enum" */
export interface privacy_enum_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: privacy_enum[]
    __typename: 'privacy_enum_mutation_response'
}


/** select columns of table "privacy_enum" */
export type privacy_enum_select_column = 'description' | 'privacy'


/** update columns of table "privacy_enum" */
export type privacy_enum_update_column = 'description' | 'privacy'

export interface query_root {
    /** fetch data from the table: "achievements" */
    achievements: achievements[]
    /** fetch aggregated fields from the table: "achievements" */
    achievements_aggregate: achievements_aggregate
    /** fetch data from the table: "achievements" using primary key columns */
    achievements_by_pk: (achievements | null)
    /** An array relationship */
    addons: addons[]
    /** An aggregate relationship */
    addons_aggregate: addons_aggregate
    /** fetch data from the table: "addons" using primary key columns */
    addons_by_pk: (addons | null)
    /** fetch data from the table: "addons_enum" */
    addons_enum: addons_enum[]
    /** fetch aggregated fields from the table: "addons_enum" */
    addons_enum_aggregate: addons_enum_aggregate
    /** fetch data from the table: "addons_enum" using primary key columns */
    addons_enum_by_pk: (addons_enum | null)
    /** fetch data from the table: "goal_difficulty_enum" */
    goal_difficulty_enum: goal_difficulty_enum[]
    /** fetch aggregated fields from the table: "goal_difficulty_enum" */
    goal_difficulty_enum_aggregate: goal_difficulty_enum_aggregate
    /** fetch data from the table: "goal_difficulty_enum" using primary key columns */
    goal_difficulty_enum_by_pk: (goal_difficulty_enum | null)
    /** fetch data from the table: "goal_logs_enum" */
    goal_logs_enum: goal_logs_enum[]
    /** fetch aggregated fields from the table: "goal_logs_enum" */
    goal_logs_enum_aggregate: goal_logs_enum_aggregate
    /** fetch data from the table: "goal_logs_enum" using primary key columns */
    goal_logs_enum_by_pk: (goal_logs_enum | null)
    /** fetch data from the table: "goal_status_enum" */
    goal_status_enum: goal_status_enum[]
    /** fetch aggregated fields from the table: "goal_status_enum" */
    goal_status_enum_aggregate: goal_status_enum_aggregate
    /** fetch data from the table: "goal_status_enum" using primary key columns */
    goal_status_enum_by_pk: (goal_status_enum | null)
    /** An array relationship */
    goals: goals[]
    /** An aggregate relationship */
    goals_aggregate: goals_aggregate
    /** fetch data from the table: "goals" using primary key columns */
    goals_by_pk: (goals | null)
    /** An array relationship */
    goals_logs: goals_logs[]
    /** An aggregate relationship */
    goals_logs_aggregate: goals_logs_aggregate
    /** fetch data from the table: "goals_logs" using primary key columns */
    goals_logs_by_pk: (goals_logs | null)
    /** fetch data from the table: "goals_rituals" */
    goals_rituals: goals_rituals[]
    /** An aggregate relationship */
    goals_rituals_aggregate: goals_rituals_aggregate
    /** fetch data from the table: "goals_rituals" using primary key columns */
    goals_rituals_by_pk: (goals_rituals | null)
    /** fetch data from the table: "goals_slides" */
    goals_slides: goals_slides[]
    /** fetch aggregated fields from the table: "goals_slides" */
    goals_slides_aggregate: goals_slides_aggregate
    /** fetch data from the table: "goals_slides" using primary key columns */
    goals_slides_by_pk: (goals_slides | null)
    /** fetch data from the table: "heroes" */
    heroes: heroes[]
    /** fetch aggregated fields from the table: "heroes" */
    heroes_aggregate: heroes_aggregate
    /** fetch data from the table: "heroes" using primary key columns */
    heroes_by_pk: (heroes | null)
    /** fetch data from the table: "notes" */
    notes: notes[]
    /** fetch aggregated fields from the table: "notes" */
    notes_aggregate: notes_aggregate
    /** fetch data from the table: "notes" using primary key columns */
    notes_by_pk: (notes | null)
    /** fetch data from the table: "privacy_enum" */
    privacy_enum: privacy_enum[]
    /** fetch aggregated fields from the table: "privacy_enum" */
    privacy_enum_aggregate: privacy_enum_aggregate
    /** fetch data from the table: "privacy_enum" using primary key columns */
    privacy_enum_by_pk: (privacy_enum | null)
    /** fetch data from the table: "restore_codes" */
    restore_codes: restore_codes[]
    /** fetch aggregated fields from the table: "restore_codes" */
    restore_codes_aggregate: restore_codes_aggregate
    /** fetch data from the table: "restore_codes" using primary key columns */
    restore_codes_by_pk: (restore_codes | null)
    /** fetch data from the table: "ritual_type_enum" */
    ritual_type_enum: ritual_type_enum[]
    /** fetch aggregated fields from the table: "ritual_type_enum" */
    ritual_type_enum_aggregate: ritual_type_enum_aggregate
    /** fetch data from the table: "ritual_type_enum" using primary key columns */
    ritual_type_enum_by_pk: (ritual_type_enum | null)
    /** fetch data from the table: "sprints" */
    sprints: sprints[]
    /** fetch aggregated fields from the table: "sprints" */
    sprints_aggregate: sprints_aggregate
    /** fetch data from the table: "sprints" using primary key columns */
    sprints_by_pk: (sprints | null)
    __typename: 'query_root'
}


/**
 * restore_password_codes
 * 
 * 
 * columns and relationships of "restore_codes"
 * 
 */
export interface restore_codes {
    email: Scalars['String']
    id: Scalars['uuid']
    __typename: 'restore_codes'
}


/** aggregated selection of "restore_codes" */
export interface restore_codes_aggregate {
    aggregate: (restore_codes_aggregate_fields | null)
    nodes: restore_codes[]
    __typename: 'restore_codes_aggregate'
}


/** aggregate fields of "restore_codes" */
export interface restore_codes_aggregate_fields {
    count: Scalars['Int']
    max: (restore_codes_max_fields | null)
    min: (restore_codes_min_fields | null)
    __typename: 'restore_codes_aggregate_fields'
}


/** unique or primary key constraints on table "restore_codes" */
export type restore_codes_constraint = 'restore_codes_pkey'


/** aggregate max on columns */
export interface restore_codes_max_fields {
    email: (Scalars['String'] | null)
    id: (Scalars['uuid'] | null)
    __typename: 'restore_codes_max_fields'
}


/** aggregate min on columns */
export interface restore_codes_min_fields {
    email: (Scalars['String'] | null)
    id: (Scalars['uuid'] | null)
    __typename: 'restore_codes_min_fields'
}


/** response of any mutation on the table "restore_codes" */
export interface restore_codes_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: restore_codes[]
    __typename: 'restore_codes_mutation_response'
}


/** select columns of table "restore_codes" */
export type restore_codes_select_column = 'email' | 'id'


/** update columns of table "restore_codes" */
export type restore_codes_update_column = 'email' | 'id'


/** columns and relationships of "ritual_type_enum" */
export interface ritual_type_enum {
    description: Scalars['String']
    /** fetch data from the table: "goals_rituals" */
    goals_rituals: goals_rituals[]
    /** An aggregate relationship */
    goals_rituals_aggregate: goals_rituals_aggregate
    ritual_type: Scalars['String']
    __typename: 'ritual_type_enum'
}


/** aggregated selection of "ritual_type_enum" */
export interface ritual_type_enum_aggregate {
    aggregate: (ritual_type_enum_aggregate_fields | null)
    nodes: ritual_type_enum[]
    __typename: 'ritual_type_enum_aggregate'
}


/** aggregate fields of "ritual_type_enum" */
export interface ritual_type_enum_aggregate_fields {
    count: Scalars['Int']
    max: (ritual_type_enum_max_fields | null)
    min: (ritual_type_enum_min_fields | null)
    __typename: 'ritual_type_enum_aggregate_fields'
}


/** unique or primary key constraints on table "ritual_type_enum" */
export type ritual_type_enum_constraint = 'ritual_type_enum_pkey'

export type ritual_type_enum_enum = 'days_of_week' | 'interval_in_days'


/** aggregate max on columns */
export interface ritual_type_enum_max_fields {
    description: (Scalars['String'] | null)
    ritual_type: (Scalars['String'] | null)
    __typename: 'ritual_type_enum_max_fields'
}


/** aggregate min on columns */
export interface ritual_type_enum_min_fields {
    description: (Scalars['String'] | null)
    ritual_type: (Scalars['String'] | null)
    __typename: 'ritual_type_enum_min_fields'
}


/** response of any mutation on the table "ritual_type_enum" */
export interface ritual_type_enum_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: ritual_type_enum[]
    __typename: 'ritual_type_enum_mutation_response'
}


/** select columns of table "ritual_type_enum" */
export type ritual_type_enum_select_column = 'description' | 'ritual_type'


/** update columns of table "ritual_type_enum" */
export type ritual_type_enum_update_column = 'description' | 'ritual_type'


/** columns and relationships of "sprints" */
export interface sprints {
    achievement: (Scalars['String'] | null)
    cached: (Scalars['Boolean'] | null)
    /** An array relationship */
    child_sprints: sprints[]
    /** An aggregate relationship */
    child_sprints_aggregate: sprints_aggregate
    created_at: Scalars['timestamptz']
    deleted_at: (Scalars['timestamptz'] | null)
    description: (Scalars['String'] | null)
    duration: Scalars['Int']
    finished_at: (Scalars['timestamptz'] | null)
    id: Scalars['uuid']
    img_path: (Scalars['String'] | null)
    owner_id: Scalars['uuid']
    parent_sprint_id: (Scalars['uuid'] | null)
    sprint_days: (Scalars['jsonb'] | null)
    sprint_goals: (Scalars['String'] | null)
    started_at: (Scalars['timestamptz'] | null)
    title: Scalars['String']
    updated_at: Scalars['timestamptz']
    __typename: 'sprints'
}


/** aggregated selection of "sprints" */
export interface sprints_aggregate {
    aggregate: (sprints_aggregate_fields | null)
    nodes: sprints[]
    __typename: 'sprints_aggregate'
}


/** aggregate fields of "sprints" */
export interface sprints_aggregate_fields {
    avg: (sprints_avg_fields | null)
    count: Scalars['Int']
    max: (sprints_max_fields | null)
    min: (sprints_min_fields | null)
    stddev: (sprints_stddev_fields | null)
    stddev_pop: (sprints_stddev_pop_fields | null)
    stddev_samp: (sprints_stddev_samp_fields | null)
    sum: (sprints_sum_fields | null)
    var_pop: (sprints_var_pop_fields | null)
    var_samp: (sprints_var_samp_fields | null)
    variance: (sprints_variance_fields | null)
    __typename: 'sprints_aggregate_fields'
}


/** aggregate avg on columns */
export interface sprints_avg_fields {
    duration: (Scalars['Float'] | null)
    __typename: 'sprints_avg_fields'
}


/** unique or primary key constraints on table "sprints" */
export type sprints_constraint = 'sprints_id_key' | 'sprints_pkey'


/** aggregate max on columns */
export interface sprints_max_fields {
    achievement: (Scalars['String'] | null)
    created_at: (Scalars['timestamptz'] | null)
    deleted_at: (Scalars['timestamptz'] | null)
    description: (Scalars['String'] | null)
    duration: (Scalars['Int'] | null)
    finished_at: (Scalars['timestamptz'] | null)
    id: (Scalars['uuid'] | null)
    img_path: (Scalars['String'] | null)
    owner_id: (Scalars['uuid'] | null)
    parent_sprint_id: (Scalars['uuid'] | null)
    sprint_goals: (Scalars['String'] | null)
    started_at: (Scalars['timestamptz'] | null)
    title: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'sprints_max_fields'
}


/** aggregate min on columns */
export interface sprints_min_fields {
    achievement: (Scalars['String'] | null)
    created_at: (Scalars['timestamptz'] | null)
    deleted_at: (Scalars['timestamptz'] | null)
    description: (Scalars['String'] | null)
    duration: (Scalars['Int'] | null)
    finished_at: (Scalars['timestamptz'] | null)
    id: (Scalars['uuid'] | null)
    img_path: (Scalars['String'] | null)
    owner_id: (Scalars['uuid'] | null)
    parent_sprint_id: (Scalars['uuid'] | null)
    sprint_goals: (Scalars['String'] | null)
    started_at: (Scalars['timestamptz'] | null)
    title: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'sprints_min_fields'
}


/** response of any mutation on the table "sprints" */
export interface sprints_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: sprints[]
    __typename: 'sprints_mutation_response'
}


/** select columns of table "sprints" */
export type sprints_select_column = 'achievement' | 'cached' | 'created_at' | 'deleted_at' | 'description' | 'duration' | 'finished_at' | 'id' | 'img_path' | 'owner_id' | 'parent_sprint_id' | 'sprint_days' | 'sprint_goals' | 'started_at' | 'title' | 'updated_at'


/** aggregate stddev on columns */
export interface sprints_stddev_fields {
    duration: (Scalars['Float'] | null)
    __typename: 'sprints_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface sprints_stddev_pop_fields {
    duration: (Scalars['Float'] | null)
    __typename: 'sprints_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface sprints_stddev_samp_fields {
    duration: (Scalars['Float'] | null)
    __typename: 'sprints_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface sprints_sum_fields {
    duration: (Scalars['Int'] | null)
    __typename: 'sprints_sum_fields'
}


/** update columns of table "sprints" */
export type sprints_update_column = 'achievement' | 'cached' | 'created_at' | 'deleted_at' | 'description' | 'duration' | 'finished_at' | 'id' | 'img_path' | 'owner_id' | 'parent_sprint_id' | 'sprint_days' | 'sprint_goals' | 'started_at' | 'title' | 'updated_at'


/** aggregate var_pop on columns */
export interface sprints_var_pop_fields {
    duration: (Scalars['Float'] | null)
    __typename: 'sprints_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface sprints_var_samp_fields {
    duration: (Scalars['Float'] | null)
    __typename: 'sprints_var_samp_fields'
}


/** aggregate variance on columns */
export interface sprints_variance_fields {
    duration: (Scalars['Float'] | null)
    __typename: 'sprints_variance_fields'
}

export interface subscription_root {
    /** fetch data from the table: "achievements" */
    achievements: achievements[]
    /** fetch aggregated fields from the table: "achievements" */
    achievements_aggregate: achievements_aggregate
    /** fetch data from the table: "achievements" using primary key columns */
    achievements_by_pk: (achievements | null)
    /** An array relationship */
    addons: addons[]
    /** An aggregate relationship */
    addons_aggregate: addons_aggregate
    /** fetch data from the table: "addons" using primary key columns */
    addons_by_pk: (addons | null)
    /** fetch data from the table: "addons_enum" */
    addons_enum: addons_enum[]
    /** fetch aggregated fields from the table: "addons_enum" */
    addons_enum_aggregate: addons_enum_aggregate
    /** fetch data from the table: "addons_enum" using primary key columns */
    addons_enum_by_pk: (addons_enum | null)
    /** fetch data from the table: "goal_difficulty_enum" */
    goal_difficulty_enum: goal_difficulty_enum[]
    /** fetch aggregated fields from the table: "goal_difficulty_enum" */
    goal_difficulty_enum_aggregate: goal_difficulty_enum_aggregate
    /** fetch data from the table: "goal_difficulty_enum" using primary key columns */
    goal_difficulty_enum_by_pk: (goal_difficulty_enum | null)
    /** fetch data from the table: "goal_logs_enum" */
    goal_logs_enum: goal_logs_enum[]
    /** fetch aggregated fields from the table: "goal_logs_enum" */
    goal_logs_enum_aggregate: goal_logs_enum_aggregate
    /** fetch data from the table: "goal_logs_enum" using primary key columns */
    goal_logs_enum_by_pk: (goal_logs_enum | null)
    /** fetch data from the table: "goal_status_enum" */
    goal_status_enum: goal_status_enum[]
    /** fetch aggregated fields from the table: "goal_status_enum" */
    goal_status_enum_aggregate: goal_status_enum_aggregate
    /** fetch data from the table: "goal_status_enum" using primary key columns */
    goal_status_enum_by_pk: (goal_status_enum | null)
    /** An array relationship */
    goals: goals[]
    /** An aggregate relationship */
    goals_aggregate: goals_aggregate
    /** fetch data from the table: "goals" using primary key columns */
    goals_by_pk: (goals | null)
    /** An array relationship */
    goals_logs: goals_logs[]
    /** An aggregate relationship */
    goals_logs_aggregate: goals_logs_aggregate
    /** fetch data from the table: "goals_logs" using primary key columns */
    goals_logs_by_pk: (goals_logs | null)
    /** fetch data from the table: "goals_rituals" */
    goals_rituals: goals_rituals[]
    /** An aggregate relationship */
    goals_rituals_aggregate: goals_rituals_aggregate
    /** fetch data from the table: "goals_rituals" using primary key columns */
    goals_rituals_by_pk: (goals_rituals | null)
    /** fetch data from the table: "goals_slides" */
    goals_slides: goals_slides[]
    /** fetch aggregated fields from the table: "goals_slides" */
    goals_slides_aggregate: goals_slides_aggregate
    /** fetch data from the table: "goals_slides" using primary key columns */
    goals_slides_by_pk: (goals_slides | null)
    /** fetch data from the table: "heroes" */
    heroes: heroes[]
    /** fetch aggregated fields from the table: "heroes" */
    heroes_aggregate: heroes_aggregate
    /** fetch data from the table: "heroes" using primary key columns */
    heroes_by_pk: (heroes | null)
    /** fetch data from the table: "notes" */
    notes: notes[]
    /** fetch aggregated fields from the table: "notes" */
    notes_aggregate: notes_aggregate
    /** fetch data from the table: "notes" using primary key columns */
    notes_by_pk: (notes | null)
    /** fetch data from the table: "privacy_enum" */
    privacy_enum: privacy_enum[]
    /** fetch aggregated fields from the table: "privacy_enum" */
    privacy_enum_aggregate: privacy_enum_aggregate
    /** fetch data from the table: "privacy_enum" using primary key columns */
    privacy_enum_by_pk: (privacy_enum | null)
    /** fetch data from the table: "restore_codes" */
    restore_codes: restore_codes[]
    /** fetch aggregated fields from the table: "restore_codes" */
    restore_codes_aggregate: restore_codes_aggregate
    /** fetch data from the table: "restore_codes" using primary key columns */
    restore_codes_by_pk: (restore_codes | null)
    /** fetch data from the table: "ritual_type_enum" */
    ritual_type_enum: ritual_type_enum[]
    /** fetch aggregated fields from the table: "ritual_type_enum" */
    ritual_type_enum_aggregate: ritual_type_enum_aggregate
    /** fetch data from the table: "ritual_type_enum" using primary key columns */
    ritual_type_enum_by_pk: (ritual_type_enum | null)
    /** fetch data from the table: "sprints" */
    sprints: sprints[]
    /** fetch aggregated fields from the table: "sprints" */
    sprints_aggregate: sprints_aggregate
    /** fetch data from the table: "sprints" using primary key columns */
    sprints_by_pk: (sprints | null)
    __typename: 'subscription_root'
}

export type Query = query_root
export type Mutation = mutation_root
export type Subscription = subscription_root


/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export interface Boolean_comparison_exp {_eq?: (Scalars['Boolean'] | null),_gt?: (Scalars['Boolean'] | null),_gte?: (Scalars['Boolean'] | null),_in?: (Scalars['Boolean'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['Boolean'] | null),_lte?: (Scalars['Boolean'] | null),_neq?: (Scalars['Boolean'] | null),_nin?: (Scalars['Boolean'][] | null)}


/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface Int_comparison_exp {_eq?: (Scalars['Int'] | null),_gt?: (Scalars['Int'] | null),_gte?: (Scalars['Int'] | null),_in?: (Scalars['Int'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['Int'] | null),_lte?: (Scalars['Int'] | null),_neq?: (Scalars['Int'] | null),_nin?: (Scalars['Int'][] | null)}


/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {_eq?: (Scalars['String'] | null),_gt?: (Scalars['String'] | null),_gte?: (Scalars['String'] | null),
/** does the column match the given case-insensitive pattern */
_ilike?: (Scalars['String'] | null),_in?: (Scalars['String'][] | null),
/** does the column match the given POSIX regular expression, case insensitive */
_iregex?: (Scalars['String'] | null),_is_null?: (Scalars['Boolean'] | null),
/** does the column match the given pattern */
_like?: (Scalars['String'] | null),_lt?: (Scalars['String'] | null),_lte?: (Scalars['String'] | null),_neq?: (Scalars['String'] | null),
/** does the column NOT match the given case-insensitive pattern */
_nilike?: (Scalars['String'] | null),_nin?: (Scalars['String'][] | null),
/** does the column NOT match the given POSIX regular expression, case insensitive */
_niregex?: (Scalars['String'] | null),
/** does the column NOT match the given pattern */
_nlike?: (Scalars['String'] | null),
/** does the column NOT match the given POSIX regular expression, case sensitive */
_nregex?: (Scalars['String'] | null),
/** does the column NOT match the given SQL regular expression */
_nsimilar?: (Scalars['String'] | null),
/** does the column match the given POSIX regular expression, case sensitive */
_regex?: (Scalars['String'] | null),
/** does the column match the given SQL regular expression */
_similar?: (Scalars['String'] | null)}


/**
 * user_achievements
 * 
 * 
 * columns and relationships of "achievements"
 * 
 */
export interface achievementsGenqlSelection{
    created_at?: boolean | number
    description?: boolean | number
    id?: boolean | number
    img_path?: boolean | number
    owner_id?: boolean | number
    title?: boolean | number
    visible?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "achievements" */
export interface achievements_aggregateGenqlSelection{
    aggregate?: achievements_aggregate_fieldsGenqlSelection
    nodes?: achievementsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "achievements" */
export interface achievements_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (achievements_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: achievements_max_fieldsGenqlSelection
    min?: achievements_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "achievements". All fields are combined with a logical 'AND'. */
export interface achievements_bool_exp {_and?: (achievements_bool_exp[] | null),_not?: (achievements_bool_exp | null),_or?: (achievements_bool_exp[] | null),created_at?: (timestamptz_comparison_exp | null),description?: (String_comparison_exp | null),id?: (uuid_comparison_exp | null),img_path?: (String_comparison_exp | null),owner_id?: (uuid_comparison_exp | null),title?: (String_comparison_exp | null),visible?: (Boolean_comparison_exp | null)}


/** input type for inserting data into table "achievements" */
export interface achievements_insert_input {created_at?: (Scalars['timestamptz'] | null),description?: (Scalars['String'] | null),id?: (Scalars['uuid'] | null),img_path?: (Scalars['String'] | null),owner_id?: (Scalars['uuid'] | null),title?: (Scalars['String'] | null),visible?: (Scalars['Boolean'] | null)}


/** aggregate max on columns */
export interface achievements_max_fieldsGenqlSelection{
    created_at?: boolean | number
    description?: boolean | number
    id?: boolean | number
    img_path?: boolean | number
    owner_id?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface achievements_min_fieldsGenqlSelection{
    created_at?: boolean | number
    description?: boolean | number
    id?: boolean | number
    img_path?: boolean | number
    owner_id?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "achievements" */
export interface achievements_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: achievementsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "achievements" */
export interface achievements_on_conflict {constraint: achievements_constraint,update_columns?: achievements_update_column[],where?: (achievements_bool_exp | null)}


/** Ordering options when selecting data from "achievements". */
export interface achievements_order_by {created_at?: (order_by | null),description?: (order_by | null),id?: (order_by | null),img_path?: (order_by | null),owner_id?: (order_by | null),title?: (order_by | null),visible?: (order_by | null)}


/** primary key columns input for table: achievements */
export interface achievements_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "achievements" */
export interface achievements_set_input {created_at?: (Scalars['timestamptz'] | null),description?: (Scalars['String'] | null),id?: (Scalars['uuid'] | null),img_path?: (Scalars['String'] | null),owner_id?: (Scalars['uuid'] | null),title?: (Scalars['String'] | null),visible?: (Scalars['Boolean'] | null)}


/**
 * bonus modules
 * 
 * 
 * columns and relationships of "addons"
 * 
 */
export interface addonsGenqlSelection{
    addon?: boolean | number
    /** An object relationship */
    addons_enum?: addons_enumGenqlSelection
    /** An object relationship */
    hero?: heroesGenqlSelection
    owner_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "addons" */
export interface addons_aggregateGenqlSelection{
    aggregate?: addons_aggregate_fieldsGenqlSelection
    nodes?: addonsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "addons" */
export interface addons_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (addons_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: addons_max_fieldsGenqlSelection
    min?: addons_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "addons" */
export interface addons_aggregate_order_by {count?: (order_by | null),max?: (addons_max_order_by | null),min?: (addons_min_order_by | null)}


/** input type for inserting array relation for remote table "addons" */
export interface addons_arr_rel_insert_input {data: addons_insert_input[],
/** upsert condition */
on_conflict?: (addons_on_conflict | null)}


/** Boolean expression to filter rows from the table "addons". All fields are combined with a logical 'AND'. */
export interface addons_bool_exp {_and?: (addons_bool_exp[] | null),_not?: (addons_bool_exp | null),_or?: (addons_bool_exp[] | null),addon?: (addons_enum_enum_comparison_exp | null),addons_enum?: (addons_enum_bool_exp | null),hero?: (heroes_bool_exp | null),owner_id?: (uuid_comparison_exp | null)}


/** columns and relationships of "addons_enum" */
export interface addons_enumGenqlSelection{
    addon?: boolean | number
    /** An array relationship */
    addons?: (addonsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (addons_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (addons_order_by[] | null), 
    /** filter the rows returned */
    where?: (addons_bool_exp | null)} })
    /** An aggregate relationship */
    addons_aggregate?: (addons_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (addons_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (addons_order_by[] | null), 
    /** filter the rows returned */
    where?: (addons_bool_exp | null)} })
    description?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "addons_enum" */
export interface addons_enum_aggregateGenqlSelection{
    aggregate?: addons_enum_aggregate_fieldsGenqlSelection
    nodes?: addons_enumGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "addons_enum" */
export interface addons_enum_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (addons_enum_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: addons_enum_max_fieldsGenqlSelection
    min?: addons_enum_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "addons_enum". All fields are combined with a logical 'AND'. */
export interface addons_enum_bool_exp {_and?: (addons_enum_bool_exp[] | null),_not?: (addons_enum_bool_exp | null),_or?: (addons_enum_bool_exp[] | null),addon?: (String_comparison_exp | null),addons?: (addons_bool_exp | null),description?: (String_comparison_exp | null)}


/** Boolean expression to compare columns of type "addons_enum_enum". All fields are combined with logical 'AND'. */
export interface addons_enum_enum_comparison_exp {_eq?: (addons_enum_enum | null),_in?: (addons_enum_enum[] | null),_is_null?: (Scalars['Boolean'] | null),_neq?: (addons_enum_enum | null),_nin?: (addons_enum_enum[] | null)}


/** input type for inserting data into table "addons_enum" */
export interface addons_enum_insert_input {addon?: (Scalars['String'] | null),addons?: (addons_arr_rel_insert_input | null),description?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface addons_enum_max_fieldsGenqlSelection{
    addon?: boolean | number
    description?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface addons_enum_min_fieldsGenqlSelection{
    addon?: boolean | number
    description?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "addons_enum" */
export interface addons_enum_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: addons_enumGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "addons_enum" */
export interface addons_enum_obj_rel_insert_input {data: addons_enum_insert_input,
/** upsert condition */
on_conflict?: (addons_enum_on_conflict | null)}


/** on_conflict condition type for table "addons_enum" */
export interface addons_enum_on_conflict {constraint: addons_enum_constraint,update_columns?: addons_enum_update_column[],where?: (addons_enum_bool_exp | null)}


/** Ordering options when selecting data from "addons_enum". */
export interface addons_enum_order_by {addon?: (order_by | null),addons_aggregate?: (addons_aggregate_order_by | null),description?: (order_by | null)}


/** primary key columns input for table: addons_enum */
export interface addons_enum_pk_columns_input {addon: Scalars['String']}


/** input type for updating data in table "addons_enum" */
export interface addons_enum_set_input {addon?: (Scalars['String'] | null),description?: (Scalars['String'] | null)}


/** input type for inserting data into table "addons" */
export interface addons_insert_input {addon?: (addons_enum_enum | null),addons_enum?: (addons_enum_obj_rel_insert_input | null),hero?: (heroes_obj_rel_insert_input | null),owner_id?: (Scalars['uuid'] | null)}


/** aggregate max on columns */
export interface addons_max_fieldsGenqlSelection{
    owner_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "addons" */
export interface addons_max_order_by {owner_id?: (order_by | null)}


/** aggregate min on columns */
export interface addons_min_fieldsGenqlSelection{
    owner_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "addons" */
export interface addons_min_order_by {owner_id?: (order_by | null)}


/** response of any mutation on the table "addons" */
export interface addons_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: addonsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "addons" */
export interface addons_on_conflict {constraint: addons_constraint,update_columns?: addons_update_column[],where?: (addons_bool_exp | null)}


/** Ordering options when selecting data from "addons". */
export interface addons_order_by {addon?: (order_by | null),addons_enum?: (addons_enum_order_by | null),hero?: (heroes_order_by | null),owner_id?: (order_by | null)}


/** primary key columns input for table: addons */
export interface addons_pk_columns_input {addon: addons_enum_enum,owner_id: Scalars['uuid']}


/** input type for updating data in table "addons" */
export interface addons_set_input {addon?: (addons_enum_enum | null),owner_id?: (Scalars['uuid'] | null)}


/**
 * goal difficulty
 * 
 * 
 * columns and relationships of "goal_difficulty_enum"
 * 
 */
export interface goal_difficulty_enumGenqlSelection{
    description?: boolean | number
    difficulty?: boolean | number
    /** An array relationship */
    goals?: (goalsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goals_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goals_order_by[] | null), 
    /** filter the rows returned */
    where?: (goals_bool_exp | null)} })
    /** An aggregate relationship */
    goals_aggregate?: (goals_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goals_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goals_order_by[] | null), 
    /** filter the rows returned */
    where?: (goals_bool_exp | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "goal_difficulty_enum" */
export interface goal_difficulty_enum_aggregateGenqlSelection{
    aggregate?: goal_difficulty_enum_aggregate_fieldsGenqlSelection
    nodes?: goal_difficulty_enumGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "goal_difficulty_enum" */
export interface goal_difficulty_enum_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (goal_difficulty_enum_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: goal_difficulty_enum_max_fieldsGenqlSelection
    min?: goal_difficulty_enum_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "goal_difficulty_enum". All fields are combined with a logical 'AND'. */
export interface goal_difficulty_enum_bool_exp {_and?: (goal_difficulty_enum_bool_exp[] | null),_not?: (goal_difficulty_enum_bool_exp | null),_or?: (goal_difficulty_enum_bool_exp[] | null),description?: (String_comparison_exp | null),difficulty?: (String_comparison_exp | null),goals?: (goals_bool_exp | null)}


/** Boolean expression to compare columns of type "goal_difficulty_enum_enum". All fields are combined with logical 'AND'. */
export interface goal_difficulty_enum_enum_comparison_exp {_eq?: (goal_difficulty_enum_enum | null),_in?: (goal_difficulty_enum_enum[] | null),_is_null?: (Scalars['Boolean'] | null),_neq?: (goal_difficulty_enum_enum | null),_nin?: (goal_difficulty_enum_enum[] | null)}


/** input type for inserting data into table "goal_difficulty_enum" */
export interface goal_difficulty_enum_insert_input {description?: (Scalars['String'] | null),difficulty?: (Scalars['String'] | null),goals?: (goals_arr_rel_insert_input | null)}


/** aggregate max on columns */
export interface goal_difficulty_enum_max_fieldsGenqlSelection{
    description?: boolean | number
    difficulty?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface goal_difficulty_enum_min_fieldsGenqlSelection{
    description?: boolean | number
    difficulty?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "goal_difficulty_enum" */
export interface goal_difficulty_enum_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: goal_difficulty_enumGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "goal_difficulty_enum" */
export interface goal_difficulty_enum_obj_rel_insert_input {data: goal_difficulty_enum_insert_input,
/** upsert condition */
on_conflict?: (goal_difficulty_enum_on_conflict | null)}


/** on_conflict condition type for table "goal_difficulty_enum" */
export interface goal_difficulty_enum_on_conflict {constraint: goal_difficulty_enum_constraint,update_columns?: goal_difficulty_enum_update_column[],where?: (goal_difficulty_enum_bool_exp | null)}


/** Ordering options when selecting data from "goal_difficulty_enum". */
export interface goal_difficulty_enum_order_by {description?: (order_by | null),difficulty?: (order_by | null),goals_aggregate?: (goals_aggregate_order_by | null)}


/** primary key columns input for table: goal_difficulty_enum */
export interface goal_difficulty_enum_pk_columns_input {difficulty: Scalars['String']}


/** input type for updating data in table "goal_difficulty_enum" */
export interface goal_difficulty_enum_set_input {description?: (Scalars['String'] | null),difficulty?: (Scalars['String'] | null)}


/** columns and relationships of "goal_logs_enum" */
export interface goal_logs_enumGenqlSelection{
    description?: boolean | number
    /** An array relationship */
    goals_logs?: (goals_logsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goals_logs_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goals_logs_order_by[] | null), 
    /** filter the rows returned */
    where?: (goals_logs_bool_exp | null)} })
    /** An aggregate relationship */
    goals_logs_aggregate?: (goals_logs_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goals_logs_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goals_logs_order_by[] | null), 
    /** filter the rows returned */
    where?: (goals_logs_bool_exp | null)} })
    log_type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "goal_logs_enum" */
export interface goal_logs_enum_aggregateGenqlSelection{
    aggregate?: goal_logs_enum_aggregate_fieldsGenqlSelection
    nodes?: goal_logs_enumGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "goal_logs_enum" */
export interface goal_logs_enum_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (goal_logs_enum_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: goal_logs_enum_max_fieldsGenqlSelection
    min?: goal_logs_enum_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "goal_logs_enum". All fields are combined with a logical 'AND'. */
export interface goal_logs_enum_bool_exp {_and?: (goal_logs_enum_bool_exp[] | null),_not?: (goal_logs_enum_bool_exp | null),_or?: (goal_logs_enum_bool_exp[] | null),description?: (String_comparison_exp | null),goals_logs?: (goals_logs_bool_exp | null),log_type?: (String_comparison_exp | null)}


/** Boolean expression to compare columns of type "goal_logs_enum_enum". All fields are combined with logical 'AND'. */
export interface goal_logs_enum_enum_comparison_exp {_eq?: (goal_logs_enum_enum | null),_in?: (goal_logs_enum_enum[] | null),_is_null?: (Scalars['Boolean'] | null),_neq?: (goal_logs_enum_enum | null),_nin?: (goal_logs_enum_enum[] | null)}


/** input type for inserting data into table "goal_logs_enum" */
export interface goal_logs_enum_insert_input {description?: (Scalars['String'] | null),goals_logs?: (goals_logs_arr_rel_insert_input | null),log_type?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface goal_logs_enum_max_fieldsGenqlSelection{
    description?: boolean | number
    log_type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface goal_logs_enum_min_fieldsGenqlSelection{
    description?: boolean | number
    log_type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "goal_logs_enum" */
export interface goal_logs_enum_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: goal_logs_enumGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "goal_logs_enum" */
export interface goal_logs_enum_obj_rel_insert_input {data: goal_logs_enum_insert_input,
/** upsert condition */
on_conflict?: (goal_logs_enum_on_conflict | null)}


/** on_conflict condition type for table "goal_logs_enum" */
export interface goal_logs_enum_on_conflict {constraint: goal_logs_enum_constraint,update_columns?: goal_logs_enum_update_column[],where?: (goal_logs_enum_bool_exp | null)}


/** Ordering options when selecting data from "goal_logs_enum". */
export interface goal_logs_enum_order_by {description?: (order_by | null),goals_logs_aggregate?: (goals_logs_aggregate_order_by | null),log_type?: (order_by | null)}


/** primary key columns input for table: goal_logs_enum */
export interface goal_logs_enum_pk_columns_input {log_type: Scalars['String']}


/** input type for updating data in table "goal_logs_enum" */
export interface goal_logs_enum_set_input {description?: (Scalars['String'] | null),log_type?: (Scalars['String'] | null)}


/**
 * goal status
 * 
 * 
 * columns and relationships of "goal_status_enum"
 * 
 */
export interface goal_status_enumGenqlSelection{
    description?: boolean | number
    /** An array relationship */
    goals?: (goalsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goals_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goals_order_by[] | null), 
    /** filter the rows returned */
    where?: (goals_bool_exp | null)} })
    /** An aggregate relationship */
    goals_aggregate?: (goals_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goals_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goals_order_by[] | null), 
    /** filter the rows returned */
    where?: (goals_bool_exp | null)} })
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "goal_status_enum" */
export interface goal_status_enum_aggregateGenqlSelection{
    aggregate?: goal_status_enum_aggregate_fieldsGenqlSelection
    nodes?: goal_status_enumGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "goal_status_enum" */
export interface goal_status_enum_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (goal_status_enum_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: goal_status_enum_max_fieldsGenqlSelection
    min?: goal_status_enum_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "goal_status_enum". All fields are combined with a logical 'AND'. */
export interface goal_status_enum_bool_exp {_and?: (goal_status_enum_bool_exp[] | null),_not?: (goal_status_enum_bool_exp | null),_or?: (goal_status_enum_bool_exp[] | null),description?: (String_comparison_exp | null),goals?: (goals_bool_exp | null),status?: (String_comparison_exp | null)}


/** Boolean expression to compare columns of type "goal_status_enum_enum". All fields are combined with logical 'AND'. */
export interface goal_status_enum_enum_comparison_exp {_eq?: (goal_status_enum_enum | null),_in?: (goal_status_enum_enum[] | null),_is_null?: (Scalars['Boolean'] | null),_neq?: (goal_status_enum_enum | null),_nin?: (goal_status_enum_enum[] | null)}


/** input type for inserting data into table "goal_status_enum" */
export interface goal_status_enum_insert_input {description?: (Scalars['String'] | null),goals?: (goals_arr_rel_insert_input | null),status?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface goal_status_enum_max_fieldsGenqlSelection{
    description?: boolean | number
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface goal_status_enum_min_fieldsGenqlSelection{
    description?: boolean | number
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "goal_status_enum" */
export interface goal_status_enum_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: goal_status_enumGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "goal_status_enum" */
export interface goal_status_enum_obj_rel_insert_input {data: goal_status_enum_insert_input,
/** upsert condition */
on_conflict?: (goal_status_enum_on_conflict | null)}


/** on_conflict condition type for table "goal_status_enum" */
export interface goal_status_enum_on_conflict {constraint: goal_status_enum_constraint,update_columns?: goal_status_enum_update_column[],where?: (goal_status_enum_bool_exp | null)}


/** Ordering options when selecting data from "goal_status_enum". */
export interface goal_status_enum_order_by {description?: (order_by | null),goals_aggregate?: (goals_aggregate_order_by | null),status?: (order_by | null)}


/** primary key columns input for table: goal_status_enum */
export interface goal_status_enum_pk_columns_input {status: Scalars['String']}


/** input type for updating data in table "goal_status_enum" */
export interface goal_status_enum_set_input {description?: (Scalars['String'] | null),status?: (Scalars['String'] | null)}


/**
 * list of goals, finished_at - the finish estimation
 * 
 * 
 * columns and relationships of "goals"
 * 
 */
export interface goalsGenqlSelection{
    /** An array relationship */
    child_goals?: (goalsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goals_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goals_order_by[] | null), 
    /** filter the rows returned */
    where?: (goals_bool_exp | null)} })
    /** An aggregate relationship */
    child_goals_aggregate?: (goals_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goals_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goals_order_by[] | null), 
    /** filter the rows returned */
    where?: (goals_bool_exp | null)} })
    created_at?: boolean | number
    deleted_at?: boolean | number
    description?: boolean | number
    difficulty?: boolean | number
    finished_at?: boolean | number
    /** An object relationship */
    goal_difficulty_enum?: goal_difficulty_enumGenqlSelection
    /** An object relationship */
    goal_ritual?: goals_ritualsGenqlSelection
    /** An object relationship */
    goal_status_enum?: goal_status_enumGenqlSelection
    /** An array relationship */
    goals_logs?: (goals_logsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goals_logs_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goals_logs_order_by[] | null), 
    /** filter the rows returned */
    where?: (goals_logs_bool_exp | null)} })
    /** An aggregate relationship */
    goals_logs_aggregate?: (goals_logs_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goals_logs_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goals_logs_order_by[] | null), 
    /** filter the rows returned */
    where?: (goals_logs_bool_exp | null)} })
    /** fetch data from the table: "goals_rituals" */
    goals_rituals?: (goals_ritualsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goals_rituals_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goals_rituals_order_by[] | null), 
    /** filter the rows returned */
    where?: (goals_rituals_bool_exp | null)} })
    /** An aggregate relationship */
    goals_rituals_aggregate?: (goals_rituals_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goals_rituals_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goals_rituals_order_by[] | null), 
    /** filter the rows returned */
    where?: (goals_rituals_bool_exp | null)} })
    /** An object relationship */
    hero?: heroesGenqlSelection
    id?: boolean | number
    is_favorite?: boolean | number
    owner_id?: boolean | number
    parent_goal_id?: boolean | number
    privacy?: boolean | number
    /** An object relationship */
    privacy_enum?: privacy_enumGenqlSelection
    slogan?: boolean | number
    status?: boolean | number
    title?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "goals" */
export interface goals_aggregateGenqlSelection{
    aggregate?: goals_aggregate_fieldsGenqlSelection
    nodes?: goalsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "goals" */
export interface goals_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (goals_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: goals_max_fieldsGenqlSelection
    min?: goals_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "goals" */
export interface goals_aggregate_order_by {count?: (order_by | null),max?: (goals_max_order_by | null),min?: (goals_min_order_by | null)}


/** input type for inserting array relation for remote table "goals" */
export interface goals_arr_rel_insert_input {data: goals_insert_input[],
/** upsert condition */
on_conflict?: (goals_on_conflict | null)}


/** Boolean expression to filter rows from the table "goals". All fields are combined with a logical 'AND'. */
export interface goals_bool_exp {_and?: (goals_bool_exp[] | null),_not?: (goals_bool_exp | null),_or?: (goals_bool_exp[] | null),child_goals?: (goals_bool_exp | null),created_at?: (timestamptz_comparison_exp | null),deleted_at?: (timestamptz_comparison_exp | null),description?: (String_comparison_exp | null),difficulty?: (goal_difficulty_enum_enum_comparison_exp | null),finished_at?: (timestamptz_comparison_exp | null),goal_difficulty_enum?: (goal_difficulty_enum_bool_exp | null),goal_ritual?: (goals_rituals_bool_exp | null),goal_status_enum?: (goal_status_enum_bool_exp | null),goals_logs?: (goals_logs_bool_exp | null),goals_rituals?: (goals_rituals_bool_exp | null),hero?: (heroes_bool_exp | null),id?: (uuid_comparison_exp | null),is_favorite?: (Boolean_comparison_exp | null),owner_id?: (uuid_comparison_exp | null),parent_goal_id?: (uuid_comparison_exp | null),privacy?: (privacy_enum_enum_comparison_exp | null),privacy_enum?: (privacy_enum_bool_exp | null),slogan?: (String_comparison_exp | null),status?: (goal_status_enum_enum_comparison_exp | null),title?: (String_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** input type for inserting data into table "goals" */
export interface goals_insert_input {child_goals?: (goals_arr_rel_insert_input | null),created_at?: (Scalars['timestamptz'] | null),deleted_at?: (Scalars['timestamptz'] | null),description?: (Scalars['String'] | null),difficulty?: (goal_difficulty_enum_enum | null),finished_at?: (Scalars['timestamptz'] | null),goal_difficulty_enum?: (goal_difficulty_enum_obj_rel_insert_input | null),goal_ritual?: (goals_rituals_obj_rel_insert_input | null),goal_status_enum?: (goal_status_enum_obj_rel_insert_input | null),goals_logs?: (goals_logs_arr_rel_insert_input | null),goals_rituals?: (goals_rituals_arr_rel_insert_input | null),hero?: (heroes_obj_rel_insert_input | null),id?: (Scalars['uuid'] | null),is_favorite?: (Scalars['Boolean'] | null),owner_id?: (Scalars['uuid'] | null),parent_goal_id?: (Scalars['uuid'] | null),privacy?: (privacy_enum_enum | null),privacy_enum?: (privacy_enum_obj_rel_insert_input | null),slogan?: (Scalars['String'] | null),status?: (goal_status_enum_enum | null),title?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** columns and relationships of "goals_logs" */
export interface goals_logsGenqlSelection{
    created_at?: boolean | number
    /** An object relationship */
    goal?: goalsGenqlSelection
    goal_id?: boolean | number
    /** An object relationship */
    goal_logs_enum?: goal_logs_enumGenqlSelection
    log_description?: boolean | number
    log_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "goals_logs" */
export interface goals_logs_aggregateGenqlSelection{
    aggregate?: goals_logs_aggregate_fieldsGenqlSelection
    nodes?: goals_logsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "goals_logs" */
export interface goals_logs_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (goals_logs_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: goals_logs_max_fieldsGenqlSelection
    min?: goals_logs_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "goals_logs" */
export interface goals_logs_aggregate_order_by {count?: (order_by | null),max?: (goals_logs_max_order_by | null),min?: (goals_logs_min_order_by | null)}


/** input type for inserting array relation for remote table "goals_logs" */
export interface goals_logs_arr_rel_insert_input {data: goals_logs_insert_input[],
/** upsert condition */
on_conflict?: (goals_logs_on_conflict | null)}


/** Boolean expression to filter rows from the table "goals_logs". All fields are combined with a logical 'AND'. */
export interface goals_logs_bool_exp {_and?: (goals_logs_bool_exp[] | null),_not?: (goals_logs_bool_exp | null),_or?: (goals_logs_bool_exp[] | null),created_at?: (timestamptz_comparison_exp | null),goal?: (goals_bool_exp | null),goal_id?: (uuid_comparison_exp | null),goal_logs_enum?: (goal_logs_enum_bool_exp | null),log_description?: (goal_logs_enum_enum_comparison_exp | null),log_id?: (uuid_comparison_exp | null)}


/** input type for inserting data into table "goals_logs" */
export interface goals_logs_insert_input {created_at?: (Scalars['timestamptz'] | null),goal?: (goals_obj_rel_insert_input | null),goal_id?: (Scalars['uuid'] | null),goal_logs_enum?: (goal_logs_enum_obj_rel_insert_input | null),log_description?: (goal_logs_enum_enum | null),log_id?: (Scalars['uuid'] | null)}


/** aggregate max on columns */
export interface goals_logs_max_fieldsGenqlSelection{
    created_at?: boolean | number
    goal_id?: boolean | number
    log_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "goals_logs" */
export interface goals_logs_max_order_by {created_at?: (order_by | null),goal_id?: (order_by | null),log_id?: (order_by | null)}


/** aggregate min on columns */
export interface goals_logs_min_fieldsGenqlSelection{
    created_at?: boolean | number
    goal_id?: boolean | number
    log_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "goals_logs" */
export interface goals_logs_min_order_by {created_at?: (order_by | null),goal_id?: (order_by | null),log_id?: (order_by | null)}


/** response of any mutation on the table "goals_logs" */
export interface goals_logs_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: goals_logsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "goals_logs" */
export interface goals_logs_on_conflict {constraint: goals_logs_constraint,update_columns?: goals_logs_update_column[],where?: (goals_logs_bool_exp | null)}


/** Ordering options when selecting data from "goals_logs". */
export interface goals_logs_order_by {created_at?: (order_by | null),goal?: (goals_order_by | null),goal_id?: (order_by | null),goal_logs_enum?: (goal_logs_enum_order_by | null),log_description?: (order_by | null),log_id?: (order_by | null)}


/** primary key columns input for table: goals_logs */
export interface goals_logs_pk_columns_input {goal_id: Scalars['uuid'],log_id: Scalars['uuid']}


/** input type for updating data in table "goals_logs" */
export interface goals_logs_set_input {created_at?: (Scalars['timestamptz'] | null),goal_id?: (Scalars['uuid'] | null),log_description?: (goal_logs_enum_enum | null),log_id?: (Scalars['uuid'] | null)}


/** aggregate max on columns */
export interface goals_max_fieldsGenqlSelection{
    created_at?: boolean | number
    deleted_at?: boolean | number
    description?: boolean | number
    finished_at?: boolean | number
    id?: boolean | number
    owner_id?: boolean | number
    parent_goal_id?: boolean | number
    slogan?: boolean | number
    title?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "goals" */
export interface goals_max_order_by {created_at?: (order_by | null),deleted_at?: (order_by | null),description?: (order_by | null),finished_at?: (order_by | null),id?: (order_by | null),owner_id?: (order_by | null),parent_goal_id?: (order_by | null),slogan?: (order_by | null),title?: (order_by | null),updated_at?: (order_by | null)}


/** aggregate min on columns */
export interface goals_min_fieldsGenqlSelection{
    created_at?: boolean | number
    deleted_at?: boolean | number
    description?: boolean | number
    finished_at?: boolean | number
    id?: boolean | number
    owner_id?: boolean | number
    parent_goal_id?: boolean | number
    slogan?: boolean | number
    title?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "goals" */
export interface goals_min_order_by {created_at?: (order_by | null),deleted_at?: (order_by | null),description?: (order_by | null),finished_at?: (order_by | null),id?: (order_by | null),owner_id?: (order_by | null),parent_goal_id?: (order_by | null),slogan?: (order_by | null),title?: (order_by | null),updated_at?: (order_by | null)}


/** response of any mutation on the table "goals" */
export interface goals_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: goalsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "goals" */
export interface goals_obj_rel_insert_input {data: goals_insert_input,
/** upsert condition */
on_conflict?: (goals_on_conflict | null)}


/** on_conflict condition type for table "goals" */
export interface goals_on_conflict {constraint: goals_constraint,update_columns?: goals_update_column[],where?: (goals_bool_exp | null)}


/** Ordering options when selecting data from "goals". */
export interface goals_order_by {child_goals_aggregate?: (goals_aggregate_order_by | null),created_at?: (order_by | null),deleted_at?: (order_by | null),description?: (order_by | null),difficulty?: (order_by | null),finished_at?: (order_by | null),goal_difficulty_enum?: (goal_difficulty_enum_order_by | null),goal_ritual?: (goals_rituals_order_by | null),goal_status_enum?: (goal_status_enum_order_by | null),goals_logs_aggregate?: (goals_logs_aggregate_order_by | null),goals_rituals_aggregate?: (goals_rituals_aggregate_order_by | null),hero?: (heroes_order_by | null),id?: (order_by | null),is_favorite?: (order_by | null),owner_id?: (order_by | null),parent_goal_id?: (order_by | null),privacy?: (order_by | null),privacy_enum?: (privacy_enum_order_by | null),slogan?: (order_by | null),status?: (order_by | null),title?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: goals */
export interface goals_pk_columns_input {id: Scalars['uuid']}


/** columns and relationships of "goals_rituals" */
export interface goals_ritualsGenqlSelection{
    created_at?: boolean | number
    /** An object relationship */
    goal?: goalsGenqlSelection
    goal_id?: boolean | number
    ritual_id?: boolean | number
    ritual_interval?: boolean | number
    ritual_power?: boolean | number
    ritual_type?: boolean | number
    /** An object relationship */
    ritual_type_enum?: ritual_type_enumGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "goals_rituals" */
export interface goals_rituals_aggregateGenqlSelection{
    aggregate?: goals_rituals_aggregate_fieldsGenqlSelection
    nodes?: goals_ritualsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "goals_rituals" */
export interface goals_rituals_aggregate_fieldsGenqlSelection{
    avg?: goals_rituals_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (goals_rituals_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: goals_rituals_max_fieldsGenqlSelection
    min?: goals_rituals_min_fieldsGenqlSelection
    stddev?: goals_rituals_stddev_fieldsGenqlSelection
    stddev_pop?: goals_rituals_stddev_pop_fieldsGenqlSelection
    stddev_samp?: goals_rituals_stddev_samp_fieldsGenqlSelection
    sum?: goals_rituals_sum_fieldsGenqlSelection
    var_pop?: goals_rituals_var_pop_fieldsGenqlSelection
    var_samp?: goals_rituals_var_samp_fieldsGenqlSelection
    variance?: goals_rituals_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "goals_rituals" */
export interface goals_rituals_aggregate_order_by {avg?: (goals_rituals_avg_order_by | null),count?: (order_by | null),max?: (goals_rituals_max_order_by | null),min?: (goals_rituals_min_order_by | null),stddev?: (goals_rituals_stddev_order_by | null),stddev_pop?: (goals_rituals_stddev_pop_order_by | null),stddev_samp?: (goals_rituals_stddev_samp_order_by | null),sum?: (goals_rituals_sum_order_by | null),var_pop?: (goals_rituals_var_pop_order_by | null),var_samp?: (goals_rituals_var_samp_order_by | null),variance?: (goals_rituals_variance_order_by | null)}


/** input type for inserting array relation for remote table "goals_rituals" */
export interface goals_rituals_arr_rel_insert_input {data: goals_rituals_insert_input[],
/** upsert condition */
on_conflict?: (goals_rituals_on_conflict | null)}


/** aggregate avg on columns */
export interface goals_rituals_avg_fieldsGenqlSelection{
    ritual_interval?: boolean | number
    ritual_power?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "goals_rituals" */
export interface goals_rituals_avg_order_by {ritual_interval?: (order_by | null),ritual_power?: (order_by | null)}


/** Boolean expression to filter rows from the table "goals_rituals". All fields are combined with a logical 'AND'. */
export interface goals_rituals_bool_exp {_and?: (goals_rituals_bool_exp[] | null),_not?: (goals_rituals_bool_exp | null),_or?: (goals_rituals_bool_exp[] | null),created_at?: (timestamptz_comparison_exp | null),goal?: (goals_bool_exp | null),goal_id?: (uuid_comparison_exp | null),ritual_id?: (uuid_comparison_exp | null),ritual_interval?: (Int_comparison_exp | null),ritual_power?: (Int_comparison_exp | null),ritual_type?: (ritual_type_enum_enum_comparison_exp | null),ritual_type_enum?: (ritual_type_enum_bool_exp | null)}


/** input type for incrementing numeric columns in table "goals_rituals" */
export interface goals_rituals_inc_input {ritual_interval?: (Scalars['Int'] | null),ritual_power?: (Scalars['Int'] | null)}


/** input type for inserting data into table "goals_rituals" */
export interface goals_rituals_insert_input {created_at?: (Scalars['timestamptz'] | null),goal?: (goals_obj_rel_insert_input | null),goal_id?: (Scalars['uuid'] | null),ritual_id?: (Scalars['uuid'] | null),ritual_interval?: (Scalars['Int'] | null),ritual_power?: (Scalars['Int'] | null),ritual_type?: (ritual_type_enum_enum | null),ritual_type_enum?: (ritual_type_enum_obj_rel_insert_input | null)}


/** aggregate max on columns */
export interface goals_rituals_max_fieldsGenqlSelection{
    created_at?: boolean | number
    goal_id?: boolean | number
    ritual_id?: boolean | number
    ritual_interval?: boolean | number
    ritual_power?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "goals_rituals" */
export interface goals_rituals_max_order_by {created_at?: (order_by | null),goal_id?: (order_by | null),ritual_id?: (order_by | null),ritual_interval?: (order_by | null),ritual_power?: (order_by | null)}


/** aggregate min on columns */
export interface goals_rituals_min_fieldsGenqlSelection{
    created_at?: boolean | number
    goal_id?: boolean | number
    ritual_id?: boolean | number
    ritual_interval?: boolean | number
    ritual_power?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "goals_rituals" */
export interface goals_rituals_min_order_by {created_at?: (order_by | null),goal_id?: (order_by | null),ritual_id?: (order_by | null),ritual_interval?: (order_by | null),ritual_power?: (order_by | null)}


/** response of any mutation on the table "goals_rituals" */
export interface goals_rituals_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: goals_ritualsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "goals_rituals" */
export interface goals_rituals_obj_rel_insert_input {data: goals_rituals_insert_input,
/** upsert condition */
on_conflict?: (goals_rituals_on_conflict | null)}


/** on_conflict condition type for table "goals_rituals" */
export interface goals_rituals_on_conflict {constraint: goals_rituals_constraint,update_columns?: goals_rituals_update_column[],where?: (goals_rituals_bool_exp | null)}


/** Ordering options when selecting data from "goals_rituals". */
export interface goals_rituals_order_by {created_at?: (order_by | null),goal?: (goals_order_by | null),goal_id?: (order_by | null),ritual_id?: (order_by | null),ritual_interval?: (order_by | null),ritual_power?: (order_by | null),ritual_type?: (order_by | null),ritual_type_enum?: (ritual_type_enum_order_by | null)}


/** primary key columns input for table: goals_rituals */
export interface goals_rituals_pk_columns_input {goal_id: Scalars['uuid'],ritual_id: Scalars['uuid']}


/** input type for updating data in table "goals_rituals" */
export interface goals_rituals_set_input {created_at?: (Scalars['timestamptz'] | null),goal_id?: (Scalars['uuid'] | null),ritual_id?: (Scalars['uuid'] | null),ritual_interval?: (Scalars['Int'] | null),ritual_power?: (Scalars['Int'] | null),ritual_type?: (ritual_type_enum_enum | null)}


/** aggregate stddev on columns */
export interface goals_rituals_stddev_fieldsGenqlSelection{
    ritual_interval?: boolean | number
    ritual_power?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "goals_rituals" */
export interface goals_rituals_stddev_order_by {ritual_interval?: (order_by | null),ritual_power?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface goals_rituals_stddev_pop_fieldsGenqlSelection{
    ritual_interval?: boolean | number
    ritual_power?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "goals_rituals" */
export interface goals_rituals_stddev_pop_order_by {ritual_interval?: (order_by | null),ritual_power?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface goals_rituals_stddev_samp_fieldsGenqlSelection{
    ritual_interval?: boolean | number
    ritual_power?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "goals_rituals" */
export interface goals_rituals_stddev_samp_order_by {ritual_interval?: (order_by | null),ritual_power?: (order_by | null)}


/** aggregate sum on columns */
export interface goals_rituals_sum_fieldsGenqlSelection{
    ritual_interval?: boolean | number
    ritual_power?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "goals_rituals" */
export interface goals_rituals_sum_order_by {ritual_interval?: (order_by | null),ritual_power?: (order_by | null)}


/** aggregate var_pop on columns */
export interface goals_rituals_var_pop_fieldsGenqlSelection{
    ritual_interval?: boolean | number
    ritual_power?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "goals_rituals" */
export interface goals_rituals_var_pop_order_by {ritual_interval?: (order_by | null),ritual_power?: (order_by | null)}


/** aggregate var_samp on columns */
export interface goals_rituals_var_samp_fieldsGenqlSelection{
    ritual_interval?: boolean | number
    ritual_power?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "goals_rituals" */
export interface goals_rituals_var_samp_order_by {ritual_interval?: (order_by | null),ritual_power?: (order_by | null)}


/** aggregate variance on columns */
export interface goals_rituals_variance_fieldsGenqlSelection{
    ritual_interval?: boolean | number
    ritual_power?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "goals_rituals" */
export interface goals_rituals_variance_order_by {ritual_interval?: (order_by | null),ritual_power?: (order_by | null)}


/** input type for updating data in table "goals" */
export interface goals_set_input {created_at?: (Scalars['timestamptz'] | null),deleted_at?: (Scalars['timestamptz'] | null),description?: (Scalars['String'] | null),difficulty?: (goal_difficulty_enum_enum | null),finished_at?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),is_favorite?: (Scalars['Boolean'] | null),owner_id?: (Scalars['uuid'] | null),parent_goal_id?: (Scalars['uuid'] | null),privacy?: (privacy_enum_enum | null),slogan?: (Scalars['String'] | null),status?: (goal_status_enum_enum | null),title?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** columns and relationships of "goals_slides" */
export interface goals_slidesGenqlSelection{
    active?: boolean | number
    created_at?: boolean | number
    deleted_at?: boolean | number
    id?: boolean | number
    img_path?: boolean | number
    owner_id?: boolean | number
    title?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "goals_slides" */
export interface goals_slides_aggregateGenqlSelection{
    aggregate?: goals_slides_aggregate_fieldsGenqlSelection
    nodes?: goals_slidesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "goals_slides" */
export interface goals_slides_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (goals_slides_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: goals_slides_max_fieldsGenqlSelection
    min?: goals_slides_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "goals_slides". All fields are combined with a logical 'AND'. */
export interface goals_slides_bool_exp {_and?: (goals_slides_bool_exp[] | null),_not?: (goals_slides_bool_exp | null),_or?: (goals_slides_bool_exp[] | null),active?: (Boolean_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),deleted_at?: (timestamptz_comparison_exp | null),id?: (uuid_comparison_exp | null),img_path?: (String_comparison_exp | null),owner_id?: (uuid_comparison_exp | null),title?: (String_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** input type for inserting data into table "goals_slides" */
export interface goals_slides_insert_input {active?: (Scalars['Boolean'] | null),created_at?: (Scalars['timestamptz'] | null),deleted_at?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),img_path?: (Scalars['String'] | null),owner_id?: (Scalars['uuid'] | null),title?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface goals_slides_max_fieldsGenqlSelection{
    created_at?: boolean | number
    deleted_at?: boolean | number
    id?: boolean | number
    img_path?: boolean | number
    owner_id?: boolean | number
    title?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface goals_slides_min_fieldsGenqlSelection{
    created_at?: boolean | number
    deleted_at?: boolean | number
    id?: boolean | number
    img_path?: boolean | number
    owner_id?: boolean | number
    title?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "goals_slides" */
export interface goals_slides_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: goals_slidesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "goals_slides" */
export interface goals_slides_on_conflict {constraint: goals_slides_constraint,update_columns?: goals_slides_update_column[],where?: (goals_slides_bool_exp | null)}


/** Ordering options when selecting data from "goals_slides". */
export interface goals_slides_order_by {active?: (order_by | null),created_at?: (order_by | null),deleted_at?: (order_by | null),id?: (order_by | null),img_path?: (order_by | null),owner_id?: (order_by | null),title?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: goals_slides */
export interface goals_slides_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "goals_slides" */
export interface goals_slides_set_input {active?: (Scalars['Boolean'] | null),created_at?: (Scalars['timestamptz'] | null),deleted_at?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),img_path?: (Scalars['String'] | null),owner_id?: (Scalars['uuid'] | null),title?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/**
 * list of heroes
 * 
 * 
 * columns and relationships of "heroes"
 * 
 */
export interface heroesGenqlSelection{
    /** An array relationship */
    addons?: (addonsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (addons_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (addons_order_by[] | null), 
    /** filter the rows returned */
    where?: (addons_bool_exp | null)} })
    /** An aggregate relationship */
    addons_aggregate?: (addons_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (addons_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (addons_order_by[] | null), 
    /** filter the rows returned */
    where?: (addons_bool_exp | null)} })
    avatar?: boolean | number
    birthday?: boolean | number
    coins?: boolean | number
    created_at?: boolean | number
    deleted_at?: boolean | number
    email?: boolean | number
    /** An array relationship */
    goals?: (goalsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goals_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goals_order_by[] | null), 
    /** filter the rows returned */
    where?: (goals_bool_exp | null)} })
    /** An aggregate relationship */
    goals_aggregate?: (goals_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goals_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goals_order_by[] | null), 
    /** filter the rows returned */
    where?: (goals_bool_exp | null)} })
    id?: boolean | number
    name?: boolean | number
    password?: boolean | number
    phone?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "heroes" */
export interface heroes_aggregateGenqlSelection{
    aggregate?: heroes_aggregate_fieldsGenqlSelection
    nodes?: heroesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "heroes" */
export interface heroes_aggregate_fieldsGenqlSelection{
    avg?: heroes_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (heroes_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: heroes_max_fieldsGenqlSelection
    min?: heroes_min_fieldsGenqlSelection
    stddev?: heroes_stddev_fieldsGenqlSelection
    stddev_pop?: heroes_stddev_pop_fieldsGenqlSelection
    stddev_samp?: heroes_stddev_samp_fieldsGenqlSelection
    sum?: heroes_sum_fieldsGenqlSelection
    var_pop?: heroes_var_pop_fieldsGenqlSelection
    var_samp?: heroes_var_samp_fieldsGenqlSelection
    variance?: heroes_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface heroes_avg_fieldsGenqlSelection{
    coins?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "heroes". All fields are combined with a logical 'AND'. */
export interface heroes_bool_exp {_and?: (heroes_bool_exp[] | null),_not?: (heroes_bool_exp | null),_or?: (heroes_bool_exp[] | null),addons?: (addons_bool_exp | null),avatar?: (String_comparison_exp | null),birthday?: (timestamptz_comparison_exp | null),coins?: (Int_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),deleted_at?: (timestamptz_comparison_exp | null),email?: (String_comparison_exp | null),goals?: (goals_bool_exp | null),id?: (uuid_comparison_exp | null),name?: (String_comparison_exp | null),password?: (String_comparison_exp | null),phone?: (String_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** input type for incrementing numeric columns in table "heroes" */
export interface heroes_inc_input {coins?: (Scalars['Int'] | null)}


/** input type for inserting data into table "heroes" */
export interface heroes_insert_input {addons?: (addons_arr_rel_insert_input | null),avatar?: (Scalars['String'] | null),birthday?: (Scalars['timestamptz'] | null),coins?: (Scalars['Int'] | null),created_at?: (Scalars['timestamptz'] | null),deleted_at?: (Scalars['timestamptz'] | null),email?: (Scalars['String'] | null),goals?: (goals_arr_rel_insert_input | null),id?: (Scalars['uuid'] | null),name?: (Scalars['String'] | null),password?: (Scalars['String'] | null),phone?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface heroes_max_fieldsGenqlSelection{
    avatar?: boolean | number
    birthday?: boolean | number
    coins?: boolean | number
    created_at?: boolean | number
    deleted_at?: boolean | number
    email?: boolean | number
    id?: boolean | number
    name?: boolean | number
    password?: boolean | number
    phone?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface heroes_min_fieldsGenqlSelection{
    avatar?: boolean | number
    birthday?: boolean | number
    coins?: boolean | number
    created_at?: boolean | number
    deleted_at?: boolean | number
    email?: boolean | number
    id?: boolean | number
    name?: boolean | number
    password?: boolean | number
    phone?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "heroes" */
export interface heroes_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: heroesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "heroes" */
export interface heroes_obj_rel_insert_input {data: heroes_insert_input,
/** upsert condition */
on_conflict?: (heroes_on_conflict | null)}


/** on_conflict condition type for table "heroes" */
export interface heroes_on_conflict {constraint: heroes_constraint,update_columns?: heroes_update_column[],where?: (heroes_bool_exp | null)}


/** Ordering options when selecting data from "heroes". */
export interface heroes_order_by {addons_aggregate?: (addons_aggregate_order_by | null),avatar?: (order_by | null),birthday?: (order_by | null),coins?: (order_by | null),created_at?: (order_by | null),deleted_at?: (order_by | null),email?: (order_by | null),goals_aggregate?: (goals_aggregate_order_by | null),id?: (order_by | null),name?: (order_by | null),password?: (order_by | null),phone?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: heroes */
export interface heroes_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "heroes" */
export interface heroes_set_input {avatar?: (Scalars['String'] | null),birthday?: (Scalars['timestamptz'] | null),coins?: (Scalars['Int'] | null),created_at?: (Scalars['timestamptz'] | null),deleted_at?: (Scalars['timestamptz'] | null),email?: (Scalars['String'] | null),id?: (Scalars['uuid'] | null),name?: (Scalars['String'] | null),password?: (Scalars['String'] | null),phone?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate stddev on columns */
export interface heroes_stddev_fieldsGenqlSelection{
    coins?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface heroes_stddev_pop_fieldsGenqlSelection{
    coins?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface heroes_stddev_samp_fieldsGenqlSelection{
    coins?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate sum on columns */
export interface heroes_sum_fieldsGenqlSelection{
    coins?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_pop on columns */
export interface heroes_var_pop_fieldsGenqlSelection{
    coins?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface heroes_var_samp_fieldsGenqlSelection{
    coins?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface heroes_variance_fieldsGenqlSelection{
    coins?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export interface jsonb_comparison_exp {
/** is the column contained in the given json value */
_contained_in?: (Scalars['jsonb'] | null),
/** does the column contain the given json value at the top level */
_contains?: (Scalars['jsonb'] | null),_eq?: (Scalars['jsonb'] | null),_gt?: (Scalars['jsonb'] | null),_gte?: (Scalars['jsonb'] | null),
/** does the string exist as a top-level key in the column */
_has_key?: (Scalars['String'] | null),
/** do all of these strings exist as top-level keys in the column */
_has_keys_all?: (Scalars['String'][] | null),
/** do any of these strings exist as top-level keys in the column */
_has_keys_any?: (Scalars['String'][] | null),_in?: (Scalars['jsonb'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['jsonb'] | null),_lte?: (Scalars['jsonb'] | null),_neq?: (Scalars['jsonb'] | null),_nin?: (Scalars['jsonb'][] | null)}


/** mutation root */
export interface mutation_rootGenqlSelection{
    /** delete data from the table: "achievements" */
    delete_achievements?: (achievements_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: achievements_bool_exp} })
    /** delete single row from the table: "achievements" */
    delete_achievements_by_pk?: (achievementsGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** delete data from the table: "addons" */
    delete_addons?: (addons_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: addons_bool_exp} })
    /** delete single row from the table: "addons" */
    delete_addons_by_pk?: (addonsGenqlSelection & { __args: {addon: addons_enum_enum, owner_id: Scalars['uuid']} })
    /** delete data from the table: "addons_enum" */
    delete_addons_enum?: (addons_enum_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: addons_enum_bool_exp} })
    /** delete single row from the table: "addons_enum" */
    delete_addons_enum_by_pk?: (addons_enumGenqlSelection & { __args: {addon: Scalars['String']} })
    /** delete data from the table: "goal_difficulty_enum" */
    delete_goal_difficulty_enum?: (goal_difficulty_enum_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: goal_difficulty_enum_bool_exp} })
    /** delete single row from the table: "goal_difficulty_enum" */
    delete_goal_difficulty_enum_by_pk?: (goal_difficulty_enumGenqlSelection & { __args: {difficulty: Scalars['String']} })
    /** delete data from the table: "goal_logs_enum" */
    delete_goal_logs_enum?: (goal_logs_enum_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: goal_logs_enum_bool_exp} })
    /** delete single row from the table: "goal_logs_enum" */
    delete_goal_logs_enum_by_pk?: (goal_logs_enumGenqlSelection & { __args: {log_type: Scalars['String']} })
    /** delete data from the table: "goal_status_enum" */
    delete_goal_status_enum?: (goal_status_enum_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: goal_status_enum_bool_exp} })
    /** delete single row from the table: "goal_status_enum" */
    delete_goal_status_enum_by_pk?: (goal_status_enumGenqlSelection & { __args: {status: Scalars['String']} })
    /** delete data from the table: "goals" */
    delete_goals?: (goals_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: goals_bool_exp} })
    /** delete single row from the table: "goals" */
    delete_goals_by_pk?: (goalsGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** delete data from the table: "goals_logs" */
    delete_goals_logs?: (goals_logs_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: goals_logs_bool_exp} })
    /** delete single row from the table: "goals_logs" */
    delete_goals_logs_by_pk?: (goals_logsGenqlSelection & { __args: {goal_id: Scalars['uuid'], log_id: Scalars['uuid']} })
    /** delete data from the table: "goals_rituals" */
    delete_goals_rituals?: (goals_rituals_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: goals_rituals_bool_exp} })
    /** delete single row from the table: "goals_rituals" */
    delete_goals_rituals_by_pk?: (goals_ritualsGenqlSelection & { __args: {goal_id: Scalars['uuid'], ritual_id: Scalars['uuid']} })
    /** delete data from the table: "goals_slides" */
    delete_goals_slides?: (goals_slides_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: goals_slides_bool_exp} })
    /** delete single row from the table: "goals_slides" */
    delete_goals_slides_by_pk?: (goals_slidesGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** delete data from the table: "heroes" */
    delete_heroes?: (heroes_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: heroes_bool_exp} })
    /** delete single row from the table: "heroes" */
    delete_heroes_by_pk?: (heroesGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** delete data from the table: "notes" */
    delete_notes?: (notes_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: notes_bool_exp} })
    /** delete single row from the table: "notes" */
    delete_notes_by_pk?: (notesGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** delete data from the table: "privacy_enum" */
    delete_privacy_enum?: (privacy_enum_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: privacy_enum_bool_exp} })
    /** delete single row from the table: "privacy_enum" */
    delete_privacy_enum_by_pk?: (privacy_enumGenqlSelection & { __args: {privacy: Scalars['String']} })
    /** delete data from the table: "restore_codes" */
    delete_restore_codes?: (restore_codes_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: restore_codes_bool_exp} })
    /** delete single row from the table: "restore_codes" */
    delete_restore_codes_by_pk?: (restore_codesGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** delete data from the table: "ritual_type_enum" */
    delete_ritual_type_enum?: (ritual_type_enum_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: ritual_type_enum_bool_exp} })
    /** delete single row from the table: "ritual_type_enum" */
    delete_ritual_type_enum_by_pk?: (ritual_type_enumGenqlSelection & { __args: {ritual_type: Scalars['String']} })
    /** delete data from the table: "sprints" */
    delete_sprints?: (sprints_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: sprints_bool_exp} })
    /** delete single row from the table: "sprints" */
    delete_sprints_by_pk?: (sprintsGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** insert data into the table: "achievements" */
    insert_achievements?: (achievements_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: achievements_insert_input[], 
    /** upsert condition */
    on_conflict?: (achievements_on_conflict | null)} })
    /** insert a single row into the table: "achievements" */
    insert_achievements_one?: (achievementsGenqlSelection & { __args: {
    /** the row to be inserted */
    object: achievements_insert_input, 
    /** upsert condition */
    on_conflict?: (achievements_on_conflict | null)} })
    /** insert data into the table: "addons" */
    insert_addons?: (addons_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: addons_insert_input[], 
    /** upsert condition */
    on_conflict?: (addons_on_conflict | null)} })
    /** insert data into the table: "addons_enum" */
    insert_addons_enum?: (addons_enum_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: addons_enum_insert_input[], 
    /** upsert condition */
    on_conflict?: (addons_enum_on_conflict | null)} })
    /** insert a single row into the table: "addons_enum" */
    insert_addons_enum_one?: (addons_enumGenqlSelection & { __args: {
    /** the row to be inserted */
    object: addons_enum_insert_input, 
    /** upsert condition */
    on_conflict?: (addons_enum_on_conflict | null)} })
    /** insert a single row into the table: "addons" */
    insert_addons_one?: (addonsGenqlSelection & { __args: {
    /** the row to be inserted */
    object: addons_insert_input, 
    /** upsert condition */
    on_conflict?: (addons_on_conflict | null)} })
    /** insert data into the table: "goal_difficulty_enum" */
    insert_goal_difficulty_enum?: (goal_difficulty_enum_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: goal_difficulty_enum_insert_input[], 
    /** upsert condition */
    on_conflict?: (goal_difficulty_enum_on_conflict | null)} })
    /** insert a single row into the table: "goal_difficulty_enum" */
    insert_goal_difficulty_enum_one?: (goal_difficulty_enumGenqlSelection & { __args: {
    /** the row to be inserted */
    object: goal_difficulty_enum_insert_input, 
    /** upsert condition */
    on_conflict?: (goal_difficulty_enum_on_conflict | null)} })
    /** insert data into the table: "goal_logs_enum" */
    insert_goal_logs_enum?: (goal_logs_enum_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: goal_logs_enum_insert_input[], 
    /** upsert condition */
    on_conflict?: (goal_logs_enum_on_conflict | null)} })
    /** insert a single row into the table: "goal_logs_enum" */
    insert_goal_logs_enum_one?: (goal_logs_enumGenqlSelection & { __args: {
    /** the row to be inserted */
    object: goal_logs_enum_insert_input, 
    /** upsert condition */
    on_conflict?: (goal_logs_enum_on_conflict | null)} })
    /** insert data into the table: "goal_status_enum" */
    insert_goal_status_enum?: (goal_status_enum_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: goal_status_enum_insert_input[], 
    /** upsert condition */
    on_conflict?: (goal_status_enum_on_conflict | null)} })
    /** insert a single row into the table: "goal_status_enum" */
    insert_goal_status_enum_one?: (goal_status_enumGenqlSelection & { __args: {
    /** the row to be inserted */
    object: goal_status_enum_insert_input, 
    /** upsert condition */
    on_conflict?: (goal_status_enum_on_conflict | null)} })
    /** insert data into the table: "goals" */
    insert_goals?: (goals_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: goals_insert_input[], 
    /** upsert condition */
    on_conflict?: (goals_on_conflict | null)} })
    /** insert data into the table: "goals_logs" */
    insert_goals_logs?: (goals_logs_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: goals_logs_insert_input[], 
    /** upsert condition */
    on_conflict?: (goals_logs_on_conflict | null)} })
    /** insert a single row into the table: "goals_logs" */
    insert_goals_logs_one?: (goals_logsGenqlSelection & { __args: {
    /** the row to be inserted */
    object: goals_logs_insert_input, 
    /** upsert condition */
    on_conflict?: (goals_logs_on_conflict | null)} })
    /** insert a single row into the table: "goals" */
    insert_goals_one?: (goalsGenqlSelection & { __args: {
    /** the row to be inserted */
    object: goals_insert_input, 
    /** upsert condition */
    on_conflict?: (goals_on_conflict | null)} })
    /** insert data into the table: "goals_rituals" */
    insert_goals_rituals?: (goals_rituals_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: goals_rituals_insert_input[], 
    /** upsert condition */
    on_conflict?: (goals_rituals_on_conflict | null)} })
    /** insert a single row into the table: "goals_rituals" */
    insert_goals_rituals_one?: (goals_ritualsGenqlSelection & { __args: {
    /** the row to be inserted */
    object: goals_rituals_insert_input, 
    /** upsert condition */
    on_conflict?: (goals_rituals_on_conflict | null)} })
    /** insert data into the table: "goals_slides" */
    insert_goals_slides?: (goals_slides_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: goals_slides_insert_input[], 
    /** upsert condition */
    on_conflict?: (goals_slides_on_conflict | null)} })
    /** insert a single row into the table: "goals_slides" */
    insert_goals_slides_one?: (goals_slidesGenqlSelection & { __args: {
    /** the row to be inserted */
    object: goals_slides_insert_input, 
    /** upsert condition */
    on_conflict?: (goals_slides_on_conflict | null)} })
    /** insert data into the table: "heroes" */
    insert_heroes?: (heroes_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: heroes_insert_input[], 
    /** upsert condition */
    on_conflict?: (heroes_on_conflict | null)} })
    /** insert a single row into the table: "heroes" */
    insert_heroes_one?: (heroesGenqlSelection & { __args: {
    /** the row to be inserted */
    object: heroes_insert_input, 
    /** upsert condition */
    on_conflict?: (heroes_on_conflict | null)} })
    /** insert data into the table: "notes" */
    insert_notes?: (notes_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: notes_insert_input[], 
    /** upsert condition */
    on_conflict?: (notes_on_conflict | null)} })
    /** insert a single row into the table: "notes" */
    insert_notes_one?: (notesGenqlSelection & { __args: {
    /** the row to be inserted */
    object: notes_insert_input, 
    /** upsert condition */
    on_conflict?: (notes_on_conflict | null)} })
    /** insert data into the table: "privacy_enum" */
    insert_privacy_enum?: (privacy_enum_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: privacy_enum_insert_input[], 
    /** upsert condition */
    on_conflict?: (privacy_enum_on_conflict | null)} })
    /** insert a single row into the table: "privacy_enum" */
    insert_privacy_enum_one?: (privacy_enumGenqlSelection & { __args: {
    /** the row to be inserted */
    object: privacy_enum_insert_input, 
    /** upsert condition */
    on_conflict?: (privacy_enum_on_conflict | null)} })
    /** insert data into the table: "restore_codes" */
    insert_restore_codes?: (restore_codes_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: restore_codes_insert_input[], 
    /** upsert condition */
    on_conflict?: (restore_codes_on_conflict | null)} })
    /** insert a single row into the table: "restore_codes" */
    insert_restore_codes_one?: (restore_codesGenqlSelection & { __args: {
    /** the row to be inserted */
    object: restore_codes_insert_input, 
    /** upsert condition */
    on_conflict?: (restore_codes_on_conflict | null)} })
    /** insert data into the table: "ritual_type_enum" */
    insert_ritual_type_enum?: (ritual_type_enum_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: ritual_type_enum_insert_input[], 
    /** upsert condition */
    on_conflict?: (ritual_type_enum_on_conflict | null)} })
    /** insert a single row into the table: "ritual_type_enum" */
    insert_ritual_type_enum_one?: (ritual_type_enumGenqlSelection & { __args: {
    /** the row to be inserted */
    object: ritual_type_enum_insert_input, 
    /** upsert condition */
    on_conflict?: (ritual_type_enum_on_conflict | null)} })
    /** insert data into the table: "sprints" */
    insert_sprints?: (sprints_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: sprints_insert_input[], 
    /** upsert condition */
    on_conflict?: (sprints_on_conflict | null)} })
    /** insert a single row into the table: "sprints" */
    insert_sprints_one?: (sprintsGenqlSelection & { __args: {
    /** the row to be inserted */
    object: sprints_insert_input, 
    /** upsert condition */
    on_conflict?: (sprints_on_conflict | null)} })
    /** update data of the table: "achievements" */
    update_achievements?: (achievements_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (achievements_set_input | null), 
    /** filter the rows which have to be updated */
    where: achievements_bool_exp} })
    /** update single row of the table: "achievements" */
    update_achievements_by_pk?: (achievementsGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (achievements_set_input | null), pk_columns: achievements_pk_columns_input} })
    /** update data of the table: "addons" */
    update_addons?: (addons_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (addons_set_input | null), 
    /** filter the rows which have to be updated */
    where: addons_bool_exp} })
    /** update single row of the table: "addons" */
    update_addons_by_pk?: (addonsGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (addons_set_input | null), pk_columns: addons_pk_columns_input} })
    /** update data of the table: "addons_enum" */
    update_addons_enum?: (addons_enum_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (addons_enum_set_input | null), 
    /** filter the rows which have to be updated */
    where: addons_enum_bool_exp} })
    /** update single row of the table: "addons_enum" */
    update_addons_enum_by_pk?: (addons_enumGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (addons_enum_set_input | null), pk_columns: addons_enum_pk_columns_input} })
    /** update data of the table: "goal_difficulty_enum" */
    update_goal_difficulty_enum?: (goal_difficulty_enum_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (goal_difficulty_enum_set_input | null), 
    /** filter the rows which have to be updated */
    where: goal_difficulty_enum_bool_exp} })
    /** update single row of the table: "goal_difficulty_enum" */
    update_goal_difficulty_enum_by_pk?: (goal_difficulty_enumGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (goal_difficulty_enum_set_input | null), pk_columns: goal_difficulty_enum_pk_columns_input} })
    /** update data of the table: "goal_logs_enum" */
    update_goal_logs_enum?: (goal_logs_enum_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (goal_logs_enum_set_input | null), 
    /** filter the rows which have to be updated */
    where: goal_logs_enum_bool_exp} })
    /** update single row of the table: "goal_logs_enum" */
    update_goal_logs_enum_by_pk?: (goal_logs_enumGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (goal_logs_enum_set_input | null), pk_columns: goal_logs_enum_pk_columns_input} })
    /** update data of the table: "goal_status_enum" */
    update_goal_status_enum?: (goal_status_enum_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (goal_status_enum_set_input | null), 
    /** filter the rows which have to be updated */
    where: goal_status_enum_bool_exp} })
    /** update single row of the table: "goal_status_enum" */
    update_goal_status_enum_by_pk?: (goal_status_enumGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (goal_status_enum_set_input | null), pk_columns: goal_status_enum_pk_columns_input} })
    /** update data of the table: "goals" */
    update_goals?: (goals_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (goals_set_input | null), 
    /** filter the rows which have to be updated */
    where: goals_bool_exp} })
    /** update single row of the table: "goals" */
    update_goals_by_pk?: (goalsGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (goals_set_input | null), pk_columns: goals_pk_columns_input} })
    /** update data of the table: "goals_logs" */
    update_goals_logs?: (goals_logs_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (goals_logs_set_input | null), 
    /** filter the rows which have to be updated */
    where: goals_logs_bool_exp} })
    /** update single row of the table: "goals_logs" */
    update_goals_logs_by_pk?: (goals_logsGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (goals_logs_set_input | null), pk_columns: goals_logs_pk_columns_input} })
    /** update data of the table: "goals_rituals" */
    update_goals_rituals?: (goals_rituals_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (goals_rituals_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (goals_rituals_set_input | null), 
    /** filter the rows which have to be updated */
    where: goals_rituals_bool_exp} })
    /** update single row of the table: "goals_rituals" */
    update_goals_rituals_by_pk?: (goals_ritualsGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (goals_rituals_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (goals_rituals_set_input | null), pk_columns: goals_rituals_pk_columns_input} })
    /** update data of the table: "goals_slides" */
    update_goals_slides?: (goals_slides_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (goals_slides_set_input | null), 
    /** filter the rows which have to be updated */
    where: goals_slides_bool_exp} })
    /** update single row of the table: "goals_slides" */
    update_goals_slides_by_pk?: (goals_slidesGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (goals_slides_set_input | null), pk_columns: goals_slides_pk_columns_input} })
    /** update data of the table: "heroes" */
    update_heroes?: (heroes_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (heroes_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (heroes_set_input | null), 
    /** filter the rows which have to be updated */
    where: heroes_bool_exp} })
    /** update single row of the table: "heroes" */
    update_heroes_by_pk?: (heroesGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (heroes_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (heroes_set_input | null), pk_columns: heroes_pk_columns_input} })
    /** update data of the table: "notes" */
    update_notes?: (notes_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (notes_set_input | null), 
    /** filter the rows which have to be updated */
    where: notes_bool_exp} })
    /** update single row of the table: "notes" */
    update_notes_by_pk?: (notesGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (notes_set_input | null), pk_columns: notes_pk_columns_input} })
    /** update data of the table: "privacy_enum" */
    update_privacy_enum?: (privacy_enum_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (privacy_enum_set_input | null), 
    /** filter the rows which have to be updated */
    where: privacy_enum_bool_exp} })
    /** update single row of the table: "privacy_enum" */
    update_privacy_enum_by_pk?: (privacy_enumGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (privacy_enum_set_input | null), pk_columns: privacy_enum_pk_columns_input} })
    /** update data of the table: "restore_codes" */
    update_restore_codes?: (restore_codes_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (restore_codes_set_input | null), 
    /** filter the rows which have to be updated */
    where: restore_codes_bool_exp} })
    /** update single row of the table: "restore_codes" */
    update_restore_codes_by_pk?: (restore_codesGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (restore_codes_set_input | null), pk_columns: restore_codes_pk_columns_input} })
    /** update data of the table: "ritual_type_enum" */
    update_ritual_type_enum?: (ritual_type_enum_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (ritual_type_enum_set_input | null), 
    /** filter the rows which have to be updated */
    where: ritual_type_enum_bool_exp} })
    /** update single row of the table: "ritual_type_enum" */
    update_ritual_type_enum_by_pk?: (ritual_type_enumGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (ritual_type_enum_set_input | null), pk_columns: ritual_type_enum_pk_columns_input} })
    /** update data of the table: "sprints" */
    update_sprints?: (sprints_mutation_responseGenqlSelection & { __args: {
    /** append existing jsonb value of filtered columns with new jsonb value */
    _append?: (sprints_append_input | null), 
    /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
    _delete_at_path?: (sprints_delete_at_path_input | null), 
    /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
    _delete_elem?: (sprints_delete_elem_input | null), 
    /** delete key/value pair or string element. key/value pairs are matched based on their key value */
    _delete_key?: (sprints_delete_key_input | null), 
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (sprints_inc_input | null), 
    /** prepend existing jsonb value of filtered columns with new jsonb value */
    _prepend?: (sprints_prepend_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (sprints_set_input | null), 
    /** filter the rows which have to be updated */
    where: sprints_bool_exp} })
    /** update single row of the table: "sprints" */
    update_sprints_by_pk?: (sprintsGenqlSelection & { __args: {
    /** append existing jsonb value of filtered columns with new jsonb value */
    _append?: (sprints_append_input | null), 
    /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
    _delete_at_path?: (sprints_delete_at_path_input | null), 
    /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
    _delete_elem?: (sprints_delete_elem_input | null), 
    /** delete key/value pair or string element. key/value pairs are matched based on their key value */
    _delete_key?: (sprints_delete_key_input | null), 
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (sprints_inc_input | null), 
    /** prepend existing jsonb value of filtered columns with new jsonb value */
    _prepend?: (sprints_prepend_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (sprints_set_input | null), pk_columns: sprints_pk_columns_input} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "notes" */
export interface notesGenqlSelection{
    archived?: boolean | number
    created_at?: boolean | number
    deleted_at?: boolean | number
    description?: boolean | number
    id?: boolean | number
    owner_id?: boolean | number
    tag?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "notes" */
export interface notes_aggregateGenqlSelection{
    aggregate?: notes_aggregate_fieldsGenqlSelection
    nodes?: notesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "notes" */
export interface notes_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (notes_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: notes_max_fieldsGenqlSelection
    min?: notes_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "notes". All fields are combined with a logical 'AND'. */
export interface notes_bool_exp {_and?: (notes_bool_exp[] | null),_not?: (notes_bool_exp | null),_or?: (notes_bool_exp[] | null),archived?: (Boolean_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),deleted_at?: (timestamptz_comparison_exp | null),description?: (String_comparison_exp | null),id?: (uuid_comparison_exp | null),owner_id?: (uuid_comparison_exp | null),tag?: (String_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** input type for inserting data into table "notes" */
export interface notes_insert_input {archived?: (Scalars['Boolean'] | null),created_at?: (Scalars['timestamptz'] | null),deleted_at?: (Scalars['timestamptz'] | null),description?: (Scalars['String'] | null),id?: (Scalars['uuid'] | null),owner_id?: (Scalars['uuid'] | null),tag?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface notes_max_fieldsGenqlSelection{
    created_at?: boolean | number
    deleted_at?: boolean | number
    description?: boolean | number
    id?: boolean | number
    owner_id?: boolean | number
    tag?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface notes_min_fieldsGenqlSelection{
    created_at?: boolean | number
    deleted_at?: boolean | number
    description?: boolean | number
    id?: boolean | number
    owner_id?: boolean | number
    tag?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "notes" */
export interface notes_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: notesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "notes" */
export interface notes_on_conflict {constraint: notes_constraint,update_columns?: notes_update_column[],where?: (notes_bool_exp | null)}


/** Ordering options when selecting data from "notes". */
export interface notes_order_by {archived?: (order_by | null),created_at?: (order_by | null),deleted_at?: (order_by | null),description?: (order_by | null),id?: (order_by | null),owner_id?: (order_by | null),tag?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: notes */
export interface notes_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "notes" */
export interface notes_set_input {archived?: (Scalars['Boolean'] | null),created_at?: (Scalars['timestamptz'] | null),deleted_at?: (Scalars['timestamptz'] | null),description?: (Scalars['String'] | null),id?: (Scalars['uuid'] | null),owner_id?: (Scalars['uuid'] | null),tag?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/**
 * privacy status
 * 
 * 
 * columns and relationships of "privacy_enum"
 * 
 */
export interface privacy_enumGenqlSelection{
    description?: boolean | number
    /** An array relationship */
    goals?: (goalsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goals_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goals_order_by[] | null), 
    /** filter the rows returned */
    where?: (goals_bool_exp | null)} })
    /** An aggregate relationship */
    goals_aggregate?: (goals_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goals_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goals_order_by[] | null), 
    /** filter the rows returned */
    where?: (goals_bool_exp | null)} })
    privacy?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "privacy_enum" */
export interface privacy_enum_aggregateGenqlSelection{
    aggregate?: privacy_enum_aggregate_fieldsGenqlSelection
    nodes?: privacy_enumGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "privacy_enum" */
export interface privacy_enum_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (privacy_enum_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: privacy_enum_max_fieldsGenqlSelection
    min?: privacy_enum_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "privacy_enum". All fields are combined with a logical 'AND'. */
export interface privacy_enum_bool_exp {_and?: (privacy_enum_bool_exp[] | null),_not?: (privacy_enum_bool_exp | null),_or?: (privacy_enum_bool_exp[] | null),description?: (String_comparison_exp | null),goals?: (goals_bool_exp | null),privacy?: (String_comparison_exp | null)}


/** Boolean expression to compare columns of type "privacy_enum_enum". All fields are combined with logical 'AND'. */
export interface privacy_enum_enum_comparison_exp {_eq?: (privacy_enum_enum | null),_in?: (privacy_enum_enum[] | null),_is_null?: (Scalars['Boolean'] | null),_neq?: (privacy_enum_enum | null),_nin?: (privacy_enum_enum[] | null)}


/** input type for inserting data into table "privacy_enum" */
export interface privacy_enum_insert_input {description?: (Scalars['String'] | null),goals?: (goals_arr_rel_insert_input | null),privacy?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface privacy_enum_max_fieldsGenqlSelection{
    description?: boolean | number
    privacy?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface privacy_enum_min_fieldsGenqlSelection{
    description?: boolean | number
    privacy?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "privacy_enum" */
export interface privacy_enum_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: privacy_enumGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "privacy_enum" */
export interface privacy_enum_obj_rel_insert_input {data: privacy_enum_insert_input,
/** upsert condition */
on_conflict?: (privacy_enum_on_conflict | null)}


/** on_conflict condition type for table "privacy_enum" */
export interface privacy_enum_on_conflict {constraint: privacy_enum_constraint,update_columns?: privacy_enum_update_column[],where?: (privacy_enum_bool_exp | null)}


/** Ordering options when selecting data from "privacy_enum". */
export interface privacy_enum_order_by {description?: (order_by | null),goals_aggregate?: (goals_aggregate_order_by | null),privacy?: (order_by | null)}


/** primary key columns input for table: privacy_enum */
export interface privacy_enum_pk_columns_input {privacy: Scalars['String']}


/** input type for updating data in table "privacy_enum" */
export interface privacy_enum_set_input {description?: (Scalars['String'] | null),privacy?: (Scalars['String'] | null)}

export interface query_rootGenqlSelection{
    /** fetch data from the table: "achievements" */
    achievements?: (achievementsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (achievements_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (achievements_order_by[] | null), 
    /** filter the rows returned */
    where?: (achievements_bool_exp | null)} })
    /** fetch aggregated fields from the table: "achievements" */
    achievements_aggregate?: (achievements_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (achievements_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (achievements_order_by[] | null), 
    /** filter the rows returned */
    where?: (achievements_bool_exp | null)} })
    /** fetch data from the table: "achievements" using primary key columns */
    achievements_by_pk?: (achievementsGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** An array relationship */
    addons?: (addonsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (addons_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (addons_order_by[] | null), 
    /** filter the rows returned */
    where?: (addons_bool_exp | null)} })
    /** An aggregate relationship */
    addons_aggregate?: (addons_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (addons_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (addons_order_by[] | null), 
    /** filter the rows returned */
    where?: (addons_bool_exp | null)} })
    /** fetch data from the table: "addons" using primary key columns */
    addons_by_pk?: (addonsGenqlSelection & { __args: {addon: addons_enum_enum, owner_id: Scalars['uuid']} })
    /** fetch data from the table: "addons_enum" */
    addons_enum?: (addons_enumGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (addons_enum_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (addons_enum_order_by[] | null), 
    /** filter the rows returned */
    where?: (addons_enum_bool_exp | null)} })
    /** fetch aggregated fields from the table: "addons_enum" */
    addons_enum_aggregate?: (addons_enum_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (addons_enum_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (addons_enum_order_by[] | null), 
    /** filter the rows returned */
    where?: (addons_enum_bool_exp | null)} })
    /** fetch data from the table: "addons_enum" using primary key columns */
    addons_enum_by_pk?: (addons_enumGenqlSelection & { __args: {addon: Scalars['String']} })
    /** fetch data from the table: "goal_difficulty_enum" */
    goal_difficulty_enum?: (goal_difficulty_enumGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goal_difficulty_enum_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goal_difficulty_enum_order_by[] | null), 
    /** filter the rows returned */
    where?: (goal_difficulty_enum_bool_exp | null)} })
    /** fetch aggregated fields from the table: "goal_difficulty_enum" */
    goal_difficulty_enum_aggregate?: (goal_difficulty_enum_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goal_difficulty_enum_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goal_difficulty_enum_order_by[] | null), 
    /** filter the rows returned */
    where?: (goal_difficulty_enum_bool_exp | null)} })
    /** fetch data from the table: "goal_difficulty_enum" using primary key columns */
    goal_difficulty_enum_by_pk?: (goal_difficulty_enumGenqlSelection & { __args: {difficulty: Scalars['String']} })
    /** fetch data from the table: "goal_logs_enum" */
    goal_logs_enum?: (goal_logs_enumGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goal_logs_enum_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goal_logs_enum_order_by[] | null), 
    /** filter the rows returned */
    where?: (goal_logs_enum_bool_exp | null)} })
    /** fetch aggregated fields from the table: "goal_logs_enum" */
    goal_logs_enum_aggregate?: (goal_logs_enum_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goal_logs_enum_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goal_logs_enum_order_by[] | null), 
    /** filter the rows returned */
    where?: (goal_logs_enum_bool_exp | null)} })
    /** fetch data from the table: "goal_logs_enum" using primary key columns */
    goal_logs_enum_by_pk?: (goal_logs_enumGenqlSelection & { __args: {log_type: Scalars['String']} })
    /** fetch data from the table: "goal_status_enum" */
    goal_status_enum?: (goal_status_enumGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goal_status_enum_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goal_status_enum_order_by[] | null), 
    /** filter the rows returned */
    where?: (goal_status_enum_bool_exp | null)} })
    /** fetch aggregated fields from the table: "goal_status_enum" */
    goal_status_enum_aggregate?: (goal_status_enum_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goal_status_enum_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goal_status_enum_order_by[] | null), 
    /** filter the rows returned */
    where?: (goal_status_enum_bool_exp | null)} })
    /** fetch data from the table: "goal_status_enum" using primary key columns */
    goal_status_enum_by_pk?: (goal_status_enumGenqlSelection & { __args: {status: Scalars['String']} })
    /** An array relationship */
    goals?: (goalsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goals_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goals_order_by[] | null), 
    /** filter the rows returned */
    where?: (goals_bool_exp | null)} })
    /** An aggregate relationship */
    goals_aggregate?: (goals_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goals_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goals_order_by[] | null), 
    /** filter the rows returned */
    where?: (goals_bool_exp | null)} })
    /** fetch data from the table: "goals" using primary key columns */
    goals_by_pk?: (goalsGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** An array relationship */
    goals_logs?: (goals_logsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goals_logs_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goals_logs_order_by[] | null), 
    /** filter the rows returned */
    where?: (goals_logs_bool_exp | null)} })
    /** An aggregate relationship */
    goals_logs_aggregate?: (goals_logs_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goals_logs_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goals_logs_order_by[] | null), 
    /** filter the rows returned */
    where?: (goals_logs_bool_exp | null)} })
    /** fetch data from the table: "goals_logs" using primary key columns */
    goals_logs_by_pk?: (goals_logsGenqlSelection & { __args: {goal_id: Scalars['uuid'], log_id: Scalars['uuid']} })
    /** fetch data from the table: "goals_rituals" */
    goals_rituals?: (goals_ritualsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goals_rituals_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goals_rituals_order_by[] | null), 
    /** filter the rows returned */
    where?: (goals_rituals_bool_exp | null)} })
    /** An aggregate relationship */
    goals_rituals_aggregate?: (goals_rituals_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goals_rituals_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goals_rituals_order_by[] | null), 
    /** filter the rows returned */
    where?: (goals_rituals_bool_exp | null)} })
    /** fetch data from the table: "goals_rituals" using primary key columns */
    goals_rituals_by_pk?: (goals_ritualsGenqlSelection & { __args: {goal_id: Scalars['uuid'], ritual_id: Scalars['uuid']} })
    /** fetch data from the table: "goals_slides" */
    goals_slides?: (goals_slidesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goals_slides_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goals_slides_order_by[] | null), 
    /** filter the rows returned */
    where?: (goals_slides_bool_exp | null)} })
    /** fetch aggregated fields from the table: "goals_slides" */
    goals_slides_aggregate?: (goals_slides_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goals_slides_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goals_slides_order_by[] | null), 
    /** filter the rows returned */
    where?: (goals_slides_bool_exp | null)} })
    /** fetch data from the table: "goals_slides" using primary key columns */
    goals_slides_by_pk?: (goals_slidesGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "heroes" */
    heroes?: (heroesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (heroes_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (heroes_order_by[] | null), 
    /** filter the rows returned */
    where?: (heroes_bool_exp | null)} })
    /** fetch aggregated fields from the table: "heroes" */
    heroes_aggregate?: (heroes_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (heroes_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (heroes_order_by[] | null), 
    /** filter the rows returned */
    where?: (heroes_bool_exp | null)} })
    /** fetch data from the table: "heroes" using primary key columns */
    heroes_by_pk?: (heroesGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "notes" */
    notes?: (notesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (notes_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (notes_order_by[] | null), 
    /** filter the rows returned */
    where?: (notes_bool_exp | null)} })
    /** fetch aggregated fields from the table: "notes" */
    notes_aggregate?: (notes_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (notes_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (notes_order_by[] | null), 
    /** filter the rows returned */
    where?: (notes_bool_exp | null)} })
    /** fetch data from the table: "notes" using primary key columns */
    notes_by_pk?: (notesGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "privacy_enum" */
    privacy_enum?: (privacy_enumGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (privacy_enum_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (privacy_enum_order_by[] | null), 
    /** filter the rows returned */
    where?: (privacy_enum_bool_exp | null)} })
    /** fetch aggregated fields from the table: "privacy_enum" */
    privacy_enum_aggregate?: (privacy_enum_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (privacy_enum_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (privacy_enum_order_by[] | null), 
    /** filter the rows returned */
    where?: (privacy_enum_bool_exp | null)} })
    /** fetch data from the table: "privacy_enum" using primary key columns */
    privacy_enum_by_pk?: (privacy_enumGenqlSelection & { __args: {privacy: Scalars['String']} })
    /** fetch data from the table: "restore_codes" */
    restore_codes?: (restore_codesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (restore_codes_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (restore_codes_order_by[] | null), 
    /** filter the rows returned */
    where?: (restore_codes_bool_exp | null)} })
    /** fetch aggregated fields from the table: "restore_codes" */
    restore_codes_aggregate?: (restore_codes_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (restore_codes_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (restore_codes_order_by[] | null), 
    /** filter the rows returned */
    where?: (restore_codes_bool_exp | null)} })
    /** fetch data from the table: "restore_codes" using primary key columns */
    restore_codes_by_pk?: (restore_codesGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "ritual_type_enum" */
    ritual_type_enum?: (ritual_type_enumGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (ritual_type_enum_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (ritual_type_enum_order_by[] | null), 
    /** filter the rows returned */
    where?: (ritual_type_enum_bool_exp | null)} })
    /** fetch aggregated fields from the table: "ritual_type_enum" */
    ritual_type_enum_aggregate?: (ritual_type_enum_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (ritual_type_enum_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (ritual_type_enum_order_by[] | null), 
    /** filter the rows returned */
    where?: (ritual_type_enum_bool_exp | null)} })
    /** fetch data from the table: "ritual_type_enum" using primary key columns */
    ritual_type_enum_by_pk?: (ritual_type_enumGenqlSelection & { __args: {ritual_type: Scalars['String']} })
    /** fetch data from the table: "sprints" */
    sprints?: (sprintsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (sprints_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (sprints_order_by[] | null), 
    /** filter the rows returned */
    where?: (sprints_bool_exp | null)} })
    /** fetch aggregated fields from the table: "sprints" */
    sprints_aggregate?: (sprints_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (sprints_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (sprints_order_by[] | null), 
    /** filter the rows returned */
    where?: (sprints_bool_exp | null)} })
    /** fetch data from the table: "sprints" using primary key columns */
    sprints_by_pk?: (sprintsGenqlSelection & { __args: {id: Scalars['uuid']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * restore_password_codes
 * 
 * 
 * columns and relationships of "restore_codes"
 * 
 */
export interface restore_codesGenqlSelection{
    email?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "restore_codes" */
export interface restore_codes_aggregateGenqlSelection{
    aggregate?: restore_codes_aggregate_fieldsGenqlSelection
    nodes?: restore_codesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "restore_codes" */
export interface restore_codes_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (restore_codes_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: restore_codes_max_fieldsGenqlSelection
    min?: restore_codes_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "restore_codes". All fields are combined with a logical 'AND'. */
export interface restore_codes_bool_exp {_and?: (restore_codes_bool_exp[] | null),_not?: (restore_codes_bool_exp | null),_or?: (restore_codes_bool_exp[] | null),email?: (String_comparison_exp | null),id?: (uuid_comparison_exp | null)}


/** input type for inserting data into table "restore_codes" */
export interface restore_codes_insert_input {email?: (Scalars['String'] | null),id?: (Scalars['uuid'] | null)}


/** aggregate max on columns */
export interface restore_codes_max_fieldsGenqlSelection{
    email?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface restore_codes_min_fieldsGenqlSelection{
    email?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "restore_codes" */
export interface restore_codes_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: restore_codesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "restore_codes" */
export interface restore_codes_on_conflict {constraint: restore_codes_constraint,update_columns?: restore_codes_update_column[],where?: (restore_codes_bool_exp | null)}


/** Ordering options when selecting data from "restore_codes". */
export interface restore_codes_order_by {email?: (order_by | null),id?: (order_by | null)}


/** primary key columns input for table: restore_codes */
export interface restore_codes_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "restore_codes" */
export interface restore_codes_set_input {email?: (Scalars['String'] | null),id?: (Scalars['uuid'] | null)}


/** columns and relationships of "ritual_type_enum" */
export interface ritual_type_enumGenqlSelection{
    description?: boolean | number
    /** fetch data from the table: "goals_rituals" */
    goals_rituals?: (goals_ritualsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goals_rituals_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goals_rituals_order_by[] | null), 
    /** filter the rows returned */
    where?: (goals_rituals_bool_exp | null)} })
    /** An aggregate relationship */
    goals_rituals_aggregate?: (goals_rituals_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goals_rituals_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goals_rituals_order_by[] | null), 
    /** filter the rows returned */
    where?: (goals_rituals_bool_exp | null)} })
    ritual_type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "ritual_type_enum" */
export interface ritual_type_enum_aggregateGenqlSelection{
    aggregate?: ritual_type_enum_aggregate_fieldsGenqlSelection
    nodes?: ritual_type_enumGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "ritual_type_enum" */
export interface ritual_type_enum_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (ritual_type_enum_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: ritual_type_enum_max_fieldsGenqlSelection
    min?: ritual_type_enum_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "ritual_type_enum". All fields are combined with a logical 'AND'. */
export interface ritual_type_enum_bool_exp {_and?: (ritual_type_enum_bool_exp[] | null),_not?: (ritual_type_enum_bool_exp | null),_or?: (ritual_type_enum_bool_exp[] | null),description?: (String_comparison_exp | null),goals_rituals?: (goals_rituals_bool_exp | null),ritual_type?: (String_comparison_exp | null)}


/** Boolean expression to compare columns of type "ritual_type_enum_enum". All fields are combined with logical 'AND'. */
export interface ritual_type_enum_enum_comparison_exp {_eq?: (ritual_type_enum_enum | null),_in?: (ritual_type_enum_enum[] | null),_is_null?: (Scalars['Boolean'] | null),_neq?: (ritual_type_enum_enum | null),_nin?: (ritual_type_enum_enum[] | null)}


/** input type for inserting data into table "ritual_type_enum" */
export interface ritual_type_enum_insert_input {description?: (Scalars['String'] | null),goals_rituals?: (goals_rituals_arr_rel_insert_input | null),ritual_type?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface ritual_type_enum_max_fieldsGenqlSelection{
    description?: boolean | number
    ritual_type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface ritual_type_enum_min_fieldsGenqlSelection{
    description?: boolean | number
    ritual_type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "ritual_type_enum" */
export interface ritual_type_enum_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: ritual_type_enumGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "ritual_type_enum" */
export interface ritual_type_enum_obj_rel_insert_input {data: ritual_type_enum_insert_input,
/** upsert condition */
on_conflict?: (ritual_type_enum_on_conflict | null)}


/** on_conflict condition type for table "ritual_type_enum" */
export interface ritual_type_enum_on_conflict {constraint: ritual_type_enum_constraint,update_columns?: ritual_type_enum_update_column[],where?: (ritual_type_enum_bool_exp | null)}


/** Ordering options when selecting data from "ritual_type_enum". */
export interface ritual_type_enum_order_by {description?: (order_by | null),goals_rituals_aggregate?: (goals_rituals_aggregate_order_by | null),ritual_type?: (order_by | null)}


/** primary key columns input for table: ritual_type_enum */
export interface ritual_type_enum_pk_columns_input {ritual_type: Scalars['String']}


/** input type for updating data in table "ritual_type_enum" */
export interface ritual_type_enum_set_input {description?: (Scalars['String'] | null),ritual_type?: (Scalars['String'] | null)}


/** columns and relationships of "sprints" */
export interface sprintsGenqlSelection{
    achievement?: boolean | number
    cached?: boolean | number
    /** An array relationship */
    child_sprints?: (sprintsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (sprints_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (sprints_order_by[] | null), 
    /** filter the rows returned */
    where?: (sprints_bool_exp | null)} })
    /** An aggregate relationship */
    child_sprints_aggregate?: (sprints_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (sprints_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (sprints_order_by[] | null), 
    /** filter the rows returned */
    where?: (sprints_bool_exp | null)} })
    created_at?: boolean | number
    deleted_at?: boolean | number
    description?: boolean | number
    duration?: boolean | number
    finished_at?: boolean | number
    id?: boolean | number
    img_path?: boolean | number
    owner_id?: boolean | number
    parent_sprint_id?: boolean | number
    sprint_days?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    sprint_goals?: boolean | number
    started_at?: boolean | number
    title?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "sprints" */
export interface sprints_aggregateGenqlSelection{
    aggregate?: sprints_aggregate_fieldsGenqlSelection
    nodes?: sprintsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "sprints" */
export interface sprints_aggregate_fieldsGenqlSelection{
    avg?: sprints_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (sprints_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: sprints_max_fieldsGenqlSelection
    min?: sprints_min_fieldsGenqlSelection
    stddev?: sprints_stddev_fieldsGenqlSelection
    stddev_pop?: sprints_stddev_pop_fieldsGenqlSelection
    stddev_samp?: sprints_stddev_samp_fieldsGenqlSelection
    sum?: sprints_sum_fieldsGenqlSelection
    var_pop?: sprints_var_pop_fieldsGenqlSelection
    var_samp?: sprints_var_samp_fieldsGenqlSelection
    variance?: sprints_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "sprints" */
export interface sprints_aggregate_order_by {avg?: (sprints_avg_order_by | null),count?: (order_by | null),max?: (sprints_max_order_by | null),min?: (sprints_min_order_by | null),stddev?: (sprints_stddev_order_by | null),stddev_pop?: (sprints_stddev_pop_order_by | null),stddev_samp?: (sprints_stddev_samp_order_by | null),sum?: (sprints_sum_order_by | null),var_pop?: (sprints_var_pop_order_by | null),var_samp?: (sprints_var_samp_order_by | null),variance?: (sprints_variance_order_by | null)}


/** append existing jsonb value of filtered columns with new jsonb value */
export interface sprints_append_input {sprint_days?: (Scalars['jsonb'] | null)}


/** input type for inserting array relation for remote table "sprints" */
export interface sprints_arr_rel_insert_input {data: sprints_insert_input[],
/** upsert condition */
on_conflict?: (sprints_on_conflict | null)}


/** aggregate avg on columns */
export interface sprints_avg_fieldsGenqlSelection{
    duration?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "sprints" */
export interface sprints_avg_order_by {duration?: (order_by | null)}


/** Boolean expression to filter rows from the table "sprints". All fields are combined with a logical 'AND'. */
export interface sprints_bool_exp {_and?: (sprints_bool_exp[] | null),_not?: (sprints_bool_exp | null),_or?: (sprints_bool_exp[] | null),achievement?: (String_comparison_exp | null),cached?: (Boolean_comparison_exp | null),child_sprints?: (sprints_bool_exp | null),created_at?: (timestamptz_comparison_exp | null),deleted_at?: (timestamptz_comparison_exp | null),description?: (String_comparison_exp | null),duration?: (Int_comparison_exp | null),finished_at?: (timestamptz_comparison_exp | null),id?: (uuid_comparison_exp | null),img_path?: (String_comparison_exp | null),owner_id?: (uuid_comparison_exp | null),parent_sprint_id?: (uuid_comparison_exp | null),sprint_days?: (jsonb_comparison_exp | null),sprint_goals?: (String_comparison_exp | null),started_at?: (timestamptz_comparison_exp | null),title?: (String_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface sprints_delete_at_path_input {sprint_days?: (Scalars['String'][] | null)}


/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface sprints_delete_elem_input {sprint_days?: (Scalars['Int'] | null)}


/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface sprints_delete_key_input {sprint_days?: (Scalars['String'] | null)}


/** input type for incrementing numeric columns in table "sprints" */
export interface sprints_inc_input {duration?: (Scalars['Int'] | null)}


/** input type for inserting data into table "sprints" */
export interface sprints_insert_input {achievement?: (Scalars['String'] | null),cached?: (Scalars['Boolean'] | null),child_sprints?: (sprints_arr_rel_insert_input | null),created_at?: (Scalars['timestamptz'] | null),deleted_at?: (Scalars['timestamptz'] | null),description?: (Scalars['String'] | null),duration?: (Scalars['Int'] | null),finished_at?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),img_path?: (Scalars['String'] | null),owner_id?: (Scalars['uuid'] | null),parent_sprint_id?: (Scalars['uuid'] | null),sprint_days?: (Scalars['jsonb'] | null),sprint_goals?: (Scalars['String'] | null),started_at?: (Scalars['timestamptz'] | null),title?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface sprints_max_fieldsGenqlSelection{
    achievement?: boolean | number
    created_at?: boolean | number
    deleted_at?: boolean | number
    description?: boolean | number
    duration?: boolean | number
    finished_at?: boolean | number
    id?: boolean | number
    img_path?: boolean | number
    owner_id?: boolean | number
    parent_sprint_id?: boolean | number
    sprint_goals?: boolean | number
    started_at?: boolean | number
    title?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "sprints" */
export interface sprints_max_order_by {achievement?: (order_by | null),created_at?: (order_by | null),deleted_at?: (order_by | null),description?: (order_by | null),duration?: (order_by | null),finished_at?: (order_by | null),id?: (order_by | null),img_path?: (order_by | null),owner_id?: (order_by | null),parent_sprint_id?: (order_by | null),sprint_goals?: (order_by | null),started_at?: (order_by | null),title?: (order_by | null),updated_at?: (order_by | null)}


/** aggregate min on columns */
export interface sprints_min_fieldsGenqlSelection{
    achievement?: boolean | number
    created_at?: boolean | number
    deleted_at?: boolean | number
    description?: boolean | number
    duration?: boolean | number
    finished_at?: boolean | number
    id?: boolean | number
    img_path?: boolean | number
    owner_id?: boolean | number
    parent_sprint_id?: boolean | number
    sprint_goals?: boolean | number
    started_at?: boolean | number
    title?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "sprints" */
export interface sprints_min_order_by {achievement?: (order_by | null),created_at?: (order_by | null),deleted_at?: (order_by | null),description?: (order_by | null),duration?: (order_by | null),finished_at?: (order_by | null),id?: (order_by | null),img_path?: (order_by | null),owner_id?: (order_by | null),parent_sprint_id?: (order_by | null),sprint_goals?: (order_by | null),started_at?: (order_by | null),title?: (order_by | null),updated_at?: (order_by | null)}


/** response of any mutation on the table "sprints" */
export interface sprints_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: sprintsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "sprints" */
export interface sprints_on_conflict {constraint: sprints_constraint,update_columns?: sprints_update_column[],where?: (sprints_bool_exp | null)}


/** Ordering options when selecting data from "sprints". */
export interface sprints_order_by {achievement?: (order_by | null),cached?: (order_by | null),child_sprints_aggregate?: (sprints_aggregate_order_by | null),created_at?: (order_by | null),deleted_at?: (order_by | null),description?: (order_by | null),duration?: (order_by | null),finished_at?: (order_by | null),id?: (order_by | null),img_path?: (order_by | null),owner_id?: (order_by | null),parent_sprint_id?: (order_by | null),sprint_days?: (order_by | null),sprint_goals?: (order_by | null),started_at?: (order_by | null),title?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: sprints */
export interface sprints_pk_columns_input {id: Scalars['uuid']}


/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface sprints_prepend_input {sprint_days?: (Scalars['jsonb'] | null)}


/** input type for updating data in table "sprints" */
export interface sprints_set_input {achievement?: (Scalars['String'] | null),cached?: (Scalars['Boolean'] | null),created_at?: (Scalars['timestamptz'] | null),deleted_at?: (Scalars['timestamptz'] | null),description?: (Scalars['String'] | null),duration?: (Scalars['Int'] | null),finished_at?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),img_path?: (Scalars['String'] | null),owner_id?: (Scalars['uuid'] | null),parent_sprint_id?: (Scalars['uuid'] | null),sprint_days?: (Scalars['jsonb'] | null),sprint_goals?: (Scalars['String'] | null),started_at?: (Scalars['timestamptz'] | null),title?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate stddev on columns */
export interface sprints_stddev_fieldsGenqlSelection{
    duration?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "sprints" */
export interface sprints_stddev_order_by {duration?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface sprints_stddev_pop_fieldsGenqlSelection{
    duration?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "sprints" */
export interface sprints_stddev_pop_order_by {duration?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface sprints_stddev_samp_fieldsGenqlSelection{
    duration?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "sprints" */
export interface sprints_stddev_samp_order_by {duration?: (order_by | null)}


/** aggregate sum on columns */
export interface sprints_sum_fieldsGenqlSelection{
    duration?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "sprints" */
export interface sprints_sum_order_by {duration?: (order_by | null)}


/** aggregate var_pop on columns */
export interface sprints_var_pop_fieldsGenqlSelection{
    duration?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "sprints" */
export interface sprints_var_pop_order_by {duration?: (order_by | null)}


/** aggregate var_samp on columns */
export interface sprints_var_samp_fieldsGenqlSelection{
    duration?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "sprints" */
export interface sprints_var_samp_order_by {duration?: (order_by | null)}


/** aggregate variance on columns */
export interface sprints_variance_fieldsGenqlSelection{
    duration?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "sprints" */
export interface sprints_variance_order_by {duration?: (order_by | null)}

export interface subscription_rootGenqlSelection{
    /** fetch data from the table: "achievements" */
    achievements?: (achievementsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (achievements_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (achievements_order_by[] | null), 
    /** filter the rows returned */
    where?: (achievements_bool_exp | null)} })
    /** fetch aggregated fields from the table: "achievements" */
    achievements_aggregate?: (achievements_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (achievements_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (achievements_order_by[] | null), 
    /** filter the rows returned */
    where?: (achievements_bool_exp | null)} })
    /** fetch data from the table: "achievements" using primary key columns */
    achievements_by_pk?: (achievementsGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** An array relationship */
    addons?: (addonsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (addons_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (addons_order_by[] | null), 
    /** filter the rows returned */
    where?: (addons_bool_exp | null)} })
    /** An aggregate relationship */
    addons_aggregate?: (addons_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (addons_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (addons_order_by[] | null), 
    /** filter the rows returned */
    where?: (addons_bool_exp | null)} })
    /** fetch data from the table: "addons" using primary key columns */
    addons_by_pk?: (addonsGenqlSelection & { __args: {addon: addons_enum_enum, owner_id: Scalars['uuid']} })
    /** fetch data from the table: "addons_enum" */
    addons_enum?: (addons_enumGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (addons_enum_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (addons_enum_order_by[] | null), 
    /** filter the rows returned */
    where?: (addons_enum_bool_exp | null)} })
    /** fetch aggregated fields from the table: "addons_enum" */
    addons_enum_aggregate?: (addons_enum_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (addons_enum_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (addons_enum_order_by[] | null), 
    /** filter the rows returned */
    where?: (addons_enum_bool_exp | null)} })
    /** fetch data from the table: "addons_enum" using primary key columns */
    addons_enum_by_pk?: (addons_enumGenqlSelection & { __args: {addon: Scalars['String']} })
    /** fetch data from the table: "goal_difficulty_enum" */
    goal_difficulty_enum?: (goal_difficulty_enumGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goal_difficulty_enum_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goal_difficulty_enum_order_by[] | null), 
    /** filter the rows returned */
    where?: (goal_difficulty_enum_bool_exp | null)} })
    /** fetch aggregated fields from the table: "goal_difficulty_enum" */
    goal_difficulty_enum_aggregate?: (goal_difficulty_enum_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goal_difficulty_enum_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goal_difficulty_enum_order_by[] | null), 
    /** filter the rows returned */
    where?: (goal_difficulty_enum_bool_exp | null)} })
    /** fetch data from the table: "goal_difficulty_enum" using primary key columns */
    goal_difficulty_enum_by_pk?: (goal_difficulty_enumGenqlSelection & { __args: {difficulty: Scalars['String']} })
    /** fetch data from the table: "goal_logs_enum" */
    goal_logs_enum?: (goal_logs_enumGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goal_logs_enum_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goal_logs_enum_order_by[] | null), 
    /** filter the rows returned */
    where?: (goal_logs_enum_bool_exp | null)} })
    /** fetch aggregated fields from the table: "goal_logs_enum" */
    goal_logs_enum_aggregate?: (goal_logs_enum_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goal_logs_enum_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goal_logs_enum_order_by[] | null), 
    /** filter the rows returned */
    where?: (goal_logs_enum_bool_exp | null)} })
    /** fetch data from the table: "goal_logs_enum" using primary key columns */
    goal_logs_enum_by_pk?: (goal_logs_enumGenqlSelection & { __args: {log_type: Scalars['String']} })
    /** fetch data from the table: "goal_status_enum" */
    goal_status_enum?: (goal_status_enumGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goal_status_enum_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goal_status_enum_order_by[] | null), 
    /** filter the rows returned */
    where?: (goal_status_enum_bool_exp | null)} })
    /** fetch aggregated fields from the table: "goal_status_enum" */
    goal_status_enum_aggregate?: (goal_status_enum_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goal_status_enum_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goal_status_enum_order_by[] | null), 
    /** filter the rows returned */
    where?: (goal_status_enum_bool_exp | null)} })
    /** fetch data from the table: "goal_status_enum" using primary key columns */
    goal_status_enum_by_pk?: (goal_status_enumGenqlSelection & { __args: {status: Scalars['String']} })
    /** An array relationship */
    goals?: (goalsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goals_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goals_order_by[] | null), 
    /** filter the rows returned */
    where?: (goals_bool_exp | null)} })
    /** An aggregate relationship */
    goals_aggregate?: (goals_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goals_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goals_order_by[] | null), 
    /** filter the rows returned */
    where?: (goals_bool_exp | null)} })
    /** fetch data from the table: "goals" using primary key columns */
    goals_by_pk?: (goalsGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** An array relationship */
    goals_logs?: (goals_logsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goals_logs_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goals_logs_order_by[] | null), 
    /** filter the rows returned */
    where?: (goals_logs_bool_exp | null)} })
    /** An aggregate relationship */
    goals_logs_aggregate?: (goals_logs_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goals_logs_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goals_logs_order_by[] | null), 
    /** filter the rows returned */
    where?: (goals_logs_bool_exp | null)} })
    /** fetch data from the table: "goals_logs" using primary key columns */
    goals_logs_by_pk?: (goals_logsGenqlSelection & { __args: {goal_id: Scalars['uuid'], log_id: Scalars['uuid']} })
    /** fetch data from the table: "goals_rituals" */
    goals_rituals?: (goals_ritualsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goals_rituals_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goals_rituals_order_by[] | null), 
    /** filter the rows returned */
    where?: (goals_rituals_bool_exp | null)} })
    /** An aggregate relationship */
    goals_rituals_aggregate?: (goals_rituals_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goals_rituals_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goals_rituals_order_by[] | null), 
    /** filter the rows returned */
    where?: (goals_rituals_bool_exp | null)} })
    /** fetch data from the table: "goals_rituals" using primary key columns */
    goals_rituals_by_pk?: (goals_ritualsGenqlSelection & { __args: {goal_id: Scalars['uuid'], ritual_id: Scalars['uuid']} })
    /** fetch data from the table: "goals_slides" */
    goals_slides?: (goals_slidesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goals_slides_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goals_slides_order_by[] | null), 
    /** filter the rows returned */
    where?: (goals_slides_bool_exp | null)} })
    /** fetch aggregated fields from the table: "goals_slides" */
    goals_slides_aggregate?: (goals_slides_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (goals_slides_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (goals_slides_order_by[] | null), 
    /** filter the rows returned */
    where?: (goals_slides_bool_exp | null)} })
    /** fetch data from the table: "goals_slides" using primary key columns */
    goals_slides_by_pk?: (goals_slidesGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "heroes" */
    heroes?: (heroesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (heroes_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (heroes_order_by[] | null), 
    /** filter the rows returned */
    where?: (heroes_bool_exp | null)} })
    /** fetch aggregated fields from the table: "heroes" */
    heroes_aggregate?: (heroes_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (heroes_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (heroes_order_by[] | null), 
    /** filter the rows returned */
    where?: (heroes_bool_exp | null)} })
    /** fetch data from the table: "heroes" using primary key columns */
    heroes_by_pk?: (heroesGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "notes" */
    notes?: (notesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (notes_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (notes_order_by[] | null), 
    /** filter the rows returned */
    where?: (notes_bool_exp | null)} })
    /** fetch aggregated fields from the table: "notes" */
    notes_aggregate?: (notes_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (notes_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (notes_order_by[] | null), 
    /** filter the rows returned */
    where?: (notes_bool_exp | null)} })
    /** fetch data from the table: "notes" using primary key columns */
    notes_by_pk?: (notesGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "privacy_enum" */
    privacy_enum?: (privacy_enumGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (privacy_enum_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (privacy_enum_order_by[] | null), 
    /** filter the rows returned */
    where?: (privacy_enum_bool_exp | null)} })
    /** fetch aggregated fields from the table: "privacy_enum" */
    privacy_enum_aggregate?: (privacy_enum_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (privacy_enum_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (privacy_enum_order_by[] | null), 
    /** filter the rows returned */
    where?: (privacy_enum_bool_exp | null)} })
    /** fetch data from the table: "privacy_enum" using primary key columns */
    privacy_enum_by_pk?: (privacy_enumGenqlSelection & { __args: {privacy: Scalars['String']} })
    /** fetch data from the table: "restore_codes" */
    restore_codes?: (restore_codesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (restore_codes_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (restore_codes_order_by[] | null), 
    /** filter the rows returned */
    where?: (restore_codes_bool_exp | null)} })
    /** fetch aggregated fields from the table: "restore_codes" */
    restore_codes_aggregate?: (restore_codes_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (restore_codes_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (restore_codes_order_by[] | null), 
    /** filter the rows returned */
    where?: (restore_codes_bool_exp | null)} })
    /** fetch data from the table: "restore_codes" using primary key columns */
    restore_codes_by_pk?: (restore_codesGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "ritual_type_enum" */
    ritual_type_enum?: (ritual_type_enumGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (ritual_type_enum_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (ritual_type_enum_order_by[] | null), 
    /** filter the rows returned */
    where?: (ritual_type_enum_bool_exp | null)} })
    /** fetch aggregated fields from the table: "ritual_type_enum" */
    ritual_type_enum_aggregate?: (ritual_type_enum_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (ritual_type_enum_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (ritual_type_enum_order_by[] | null), 
    /** filter the rows returned */
    where?: (ritual_type_enum_bool_exp | null)} })
    /** fetch data from the table: "ritual_type_enum" using primary key columns */
    ritual_type_enum_by_pk?: (ritual_type_enumGenqlSelection & { __args: {ritual_type: Scalars['String']} })
    /** fetch data from the table: "sprints" */
    sprints?: (sprintsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (sprints_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (sprints_order_by[] | null), 
    /** filter the rows returned */
    where?: (sprints_bool_exp | null)} })
    /** fetch aggregated fields from the table: "sprints" */
    sprints_aggregate?: (sprints_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (sprints_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (sprints_order_by[] | null), 
    /** filter the rows returned */
    where?: (sprints_bool_exp | null)} })
    /** fetch data from the table: "sprints" using primary key columns */
    sprints_by_pk?: (sprintsGenqlSelection & { __args: {id: Scalars['uuid']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface timestamptz_comparison_exp {_eq?: (Scalars['timestamptz'] | null),_gt?: (Scalars['timestamptz'] | null),_gte?: (Scalars['timestamptz'] | null),_in?: (Scalars['timestamptz'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['timestamptz'] | null),_lte?: (Scalars['timestamptz'] | null),_neq?: (Scalars['timestamptz'] | null),_nin?: (Scalars['timestamptz'][] | null)}


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export interface uuid_comparison_exp {_eq?: (Scalars['uuid'] | null),_gt?: (Scalars['uuid'] | null),_gte?: (Scalars['uuid'] | null),_in?: (Scalars['uuid'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['uuid'] | null),_lte?: (Scalars['uuid'] | null),_neq?: (Scalars['uuid'] | null),_nin?: (Scalars['uuid'][] | null)}

export type QueryGenqlSelection = query_rootGenqlSelection
export type MutationGenqlSelection = mutation_rootGenqlSelection
export type SubscriptionGenqlSelection = subscription_rootGenqlSelection


    const achievements_possibleTypes: string[] = ['achievements']
    export const isachievements = (obj?: { __typename?: any } | null): obj is achievements => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isachievements"')
      return achievements_possibleTypes.includes(obj.__typename)
    }
    


    const achievements_aggregate_possibleTypes: string[] = ['achievements_aggregate']
    export const isachievements_aggregate = (obj?: { __typename?: any } | null): obj is achievements_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isachievements_aggregate"')
      return achievements_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const achievements_aggregate_fields_possibleTypes: string[] = ['achievements_aggregate_fields']
    export const isachievements_aggregate_fields = (obj?: { __typename?: any } | null): obj is achievements_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isachievements_aggregate_fields"')
      return achievements_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const achievements_max_fields_possibleTypes: string[] = ['achievements_max_fields']
    export const isachievements_max_fields = (obj?: { __typename?: any } | null): obj is achievements_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isachievements_max_fields"')
      return achievements_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const achievements_min_fields_possibleTypes: string[] = ['achievements_min_fields']
    export const isachievements_min_fields = (obj?: { __typename?: any } | null): obj is achievements_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isachievements_min_fields"')
      return achievements_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const achievements_mutation_response_possibleTypes: string[] = ['achievements_mutation_response']
    export const isachievements_mutation_response = (obj?: { __typename?: any } | null): obj is achievements_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isachievements_mutation_response"')
      return achievements_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const addons_possibleTypes: string[] = ['addons']
    export const isaddons = (obj?: { __typename?: any } | null): obj is addons => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isaddons"')
      return addons_possibleTypes.includes(obj.__typename)
    }
    


    const addons_aggregate_possibleTypes: string[] = ['addons_aggregate']
    export const isaddons_aggregate = (obj?: { __typename?: any } | null): obj is addons_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isaddons_aggregate"')
      return addons_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const addons_aggregate_fields_possibleTypes: string[] = ['addons_aggregate_fields']
    export const isaddons_aggregate_fields = (obj?: { __typename?: any } | null): obj is addons_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isaddons_aggregate_fields"')
      return addons_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const addons_enum_possibleTypes: string[] = ['addons_enum']
    export const isaddons_enum = (obj?: { __typename?: any } | null): obj is addons_enum => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isaddons_enum"')
      return addons_enum_possibleTypes.includes(obj.__typename)
    }
    


    const addons_enum_aggregate_possibleTypes: string[] = ['addons_enum_aggregate']
    export const isaddons_enum_aggregate = (obj?: { __typename?: any } | null): obj is addons_enum_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isaddons_enum_aggregate"')
      return addons_enum_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const addons_enum_aggregate_fields_possibleTypes: string[] = ['addons_enum_aggregate_fields']
    export const isaddons_enum_aggregate_fields = (obj?: { __typename?: any } | null): obj is addons_enum_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isaddons_enum_aggregate_fields"')
      return addons_enum_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const addons_enum_max_fields_possibleTypes: string[] = ['addons_enum_max_fields']
    export const isaddons_enum_max_fields = (obj?: { __typename?: any } | null): obj is addons_enum_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isaddons_enum_max_fields"')
      return addons_enum_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const addons_enum_min_fields_possibleTypes: string[] = ['addons_enum_min_fields']
    export const isaddons_enum_min_fields = (obj?: { __typename?: any } | null): obj is addons_enum_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isaddons_enum_min_fields"')
      return addons_enum_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const addons_enum_mutation_response_possibleTypes: string[] = ['addons_enum_mutation_response']
    export const isaddons_enum_mutation_response = (obj?: { __typename?: any } | null): obj is addons_enum_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isaddons_enum_mutation_response"')
      return addons_enum_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const addons_max_fields_possibleTypes: string[] = ['addons_max_fields']
    export const isaddons_max_fields = (obj?: { __typename?: any } | null): obj is addons_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isaddons_max_fields"')
      return addons_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const addons_min_fields_possibleTypes: string[] = ['addons_min_fields']
    export const isaddons_min_fields = (obj?: { __typename?: any } | null): obj is addons_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isaddons_min_fields"')
      return addons_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const addons_mutation_response_possibleTypes: string[] = ['addons_mutation_response']
    export const isaddons_mutation_response = (obj?: { __typename?: any } | null): obj is addons_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isaddons_mutation_response"')
      return addons_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const goal_difficulty_enum_possibleTypes: string[] = ['goal_difficulty_enum']
    export const isgoal_difficulty_enum = (obj?: { __typename?: any } | null): obj is goal_difficulty_enum => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoal_difficulty_enum"')
      return goal_difficulty_enum_possibleTypes.includes(obj.__typename)
    }
    


    const goal_difficulty_enum_aggregate_possibleTypes: string[] = ['goal_difficulty_enum_aggregate']
    export const isgoal_difficulty_enum_aggregate = (obj?: { __typename?: any } | null): obj is goal_difficulty_enum_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoal_difficulty_enum_aggregate"')
      return goal_difficulty_enum_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const goal_difficulty_enum_aggregate_fields_possibleTypes: string[] = ['goal_difficulty_enum_aggregate_fields']
    export const isgoal_difficulty_enum_aggregate_fields = (obj?: { __typename?: any } | null): obj is goal_difficulty_enum_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoal_difficulty_enum_aggregate_fields"')
      return goal_difficulty_enum_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const goal_difficulty_enum_max_fields_possibleTypes: string[] = ['goal_difficulty_enum_max_fields']
    export const isgoal_difficulty_enum_max_fields = (obj?: { __typename?: any } | null): obj is goal_difficulty_enum_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoal_difficulty_enum_max_fields"')
      return goal_difficulty_enum_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const goal_difficulty_enum_min_fields_possibleTypes: string[] = ['goal_difficulty_enum_min_fields']
    export const isgoal_difficulty_enum_min_fields = (obj?: { __typename?: any } | null): obj is goal_difficulty_enum_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoal_difficulty_enum_min_fields"')
      return goal_difficulty_enum_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const goal_difficulty_enum_mutation_response_possibleTypes: string[] = ['goal_difficulty_enum_mutation_response']
    export const isgoal_difficulty_enum_mutation_response = (obj?: { __typename?: any } | null): obj is goal_difficulty_enum_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoal_difficulty_enum_mutation_response"')
      return goal_difficulty_enum_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const goal_logs_enum_possibleTypes: string[] = ['goal_logs_enum']
    export const isgoal_logs_enum = (obj?: { __typename?: any } | null): obj is goal_logs_enum => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoal_logs_enum"')
      return goal_logs_enum_possibleTypes.includes(obj.__typename)
    }
    


    const goal_logs_enum_aggregate_possibleTypes: string[] = ['goal_logs_enum_aggregate']
    export const isgoal_logs_enum_aggregate = (obj?: { __typename?: any } | null): obj is goal_logs_enum_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoal_logs_enum_aggregate"')
      return goal_logs_enum_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const goal_logs_enum_aggregate_fields_possibleTypes: string[] = ['goal_logs_enum_aggregate_fields']
    export const isgoal_logs_enum_aggregate_fields = (obj?: { __typename?: any } | null): obj is goal_logs_enum_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoal_logs_enum_aggregate_fields"')
      return goal_logs_enum_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const goal_logs_enum_max_fields_possibleTypes: string[] = ['goal_logs_enum_max_fields']
    export const isgoal_logs_enum_max_fields = (obj?: { __typename?: any } | null): obj is goal_logs_enum_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoal_logs_enum_max_fields"')
      return goal_logs_enum_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const goal_logs_enum_min_fields_possibleTypes: string[] = ['goal_logs_enum_min_fields']
    export const isgoal_logs_enum_min_fields = (obj?: { __typename?: any } | null): obj is goal_logs_enum_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoal_logs_enum_min_fields"')
      return goal_logs_enum_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const goal_logs_enum_mutation_response_possibleTypes: string[] = ['goal_logs_enum_mutation_response']
    export const isgoal_logs_enum_mutation_response = (obj?: { __typename?: any } | null): obj is goal_logs_enum_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoal_logs_enum_mutation_response"')
      return goal_logs_enum_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const goal_status_enum_possibleTypes: string[] = ['goal_status_enum']
    export const isgoal_status_enum = (obj?: { __typename?: any } | null): obj is goal_status_enum => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoal_status_enum"')
      return goal_status_enum_possibleTypes.includes(obj.__typename)
    }
    


    const goal_status_enum_aggregate_possibleTypes: string[] = ['goal_status_enum_aggregate']
    export const isgoal_status_enum_aggregate = (obj?: { __typename?: any } | null): obj is goal_status_enum_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoal_status_enum_aggregate"')
      return goal_status_enum_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const goal_status_enum_aggregate_fields_possibleTypes: string[] = ['goal_status_enum_aggregate_fields']
    export const isgoal_status_enum_aggregate_fields = (obj?: { __typename?: any } | null): obj is goal_status_enum_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoal_status_enum_aggregate_fields"')
      return goal_status_enum_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const goal_status_enum_max_fields_possibleTypes: string[] = ['goal_status_enum_max_fields']
    export const isgoal_status_enum_max_fields = (obj?: { __typename?: any } | null): obj is goal_status_enum_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoal_status_enum_max_fields"')
      return goal_status_enum_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const goal_status_enum_min_fields_possibleTypes: string[] = ['goal_status_enum_min_fields']
    export const isgoal_status_enum_min_fields = (obj?: { __typename?: any } | null): obj is goal_status_enum_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoal_status_enum_min_fields"')
      return goal_status_enum_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const goal_status_enum_mutation_response_possibleTypes: string[] = ['goal_status_enum_mutation_response']
    export const isgoal_status_enum_mutation_response = (obj?: { __typename?: any } | null): obj is goal_status_enum_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoal_status_enum_mutation_response"')
      return goal_status_enum_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const goals_possibleTypes: string[] = ['goals']
    export const isgoals = (obj?: { __typename?: any } | null): obj is goals => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoals"')
      return goals_possibleTypes.includes(obj.__typename)
    }
    


    const goals_aggregate_possibleTypes: string[] = ['goals_aggregate']
    export const isgoals_aggregate = (obj?: { __typename?: any } | null): obj is goals_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoals_aggregate"')
      return goals_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const goals_aggregate_fields_possibleTypes: string[] = ['goals_aggregate_fields']
    export const isgoals_aggregate_fields = (obj?: { __typename?: any } | null): obj is goals_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoals_aggregate_fields"')
      return goals_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const goals_logs_possibleTypes: string[] = ['goals_logs']
    export const isgoals_logs = (obj?: { __typename?: any } | null): obj is goals_logs => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoals_logs"')
      return goals_logs_possibleTypes.includes(obj.__typename)
    }
    


    const goals_logs_aggregate_possibleTypes: string[] = ['goals_logs_aggregate']
    export const isgoals_logs_aggregate = (obj?: { __typename?: any } | null): obj is goals_logs_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoals_logs_aggregate"')
      return goals_logs_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const goals_logs_aggregate_fields_possibleTypes: string[] = ['goals_logs_aggregate_fields']
    export const isgoals_logs_aggregate_fields = (obj?: { __typename?: any } | null): obj is goals_logs_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoals_logs_aggregate_fields"')
      return goals_logs_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const goals_logs_max_fields_possibleTypes: string[] = ['goals_logs_max_fields']
    export const isgoals_logs_max_fields = (obj?: { __typename?: any } | null): obj is goals_logs_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoals_logs_max_fields"')
      return goals_logs_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const goals_logs_min_fields_possibleTypes: string[] = ['goals_logs_min_fields']
    export const isgoals_logs_min_fields = (obj?: { __typename?: any } | null): obj is goals_logs_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoals_logs_min_fields"')
      return goals_logs_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const goals_logs_mutation_response_possibleTypes: string[] = ['goals_logs_mutation_response']
    export const isgoals_logs_mutation_response = (obj?: { __typename?: any } | null): obj is goals_logs_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoals_logs_mutation_response"')
      return goals_logs_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const goals_max_fields_possibleTypes: string[] = ['goals_max_fields']
    export const isgoals_max_fields = (obj?: { __typename?: any } | null): obj is goals_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoals_max_fields"')
      return goals_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const goals_min_fields_possibleTypes: string[] = ['goals_min_fields']
    export const isgoals_min_fields = (obj?: { __typename?: any } | null): obj is goals_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoals_min_fields"')
      return goals_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const goals_mutation_response_possibleTypes: string[] = ['goals_mutation_response']
    export const isgoals_mutation_response = (obj?: { __typename?: any } | null): obj is goals_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoals_mutation_response"')
      return goals_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const goals_rituals_possibleTypes: string[] = ['goals_rituals']
    export const isgoals_rituals = (obj?: { __typename?: any } | null): obj is goals_rituals => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoals_rituals"')
      return goals_rituals_possibleTypes.includes(obj.__typename)
    }
    


    const goals_rituals_aggregate_possibleTypes: string[] = ['goals_rituals_aggregate']
    export const isgoals_rituals_aggregate = (obj?: { __typename?: any } | null): obj is goals_rituals_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoals_rituals_aggregate"')
      return goals_rituals_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const goals_rituals_aggregate_fields_possibleTypes: string[] = ['goals_rituals_aggregate_fields']
    export const isgoals_rituals_aggregate_fields = (obj?: { __typename?: any } | null): obj is goals_rituals_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoals_rituals_aggregate_fields"')
      return goals_rituals_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const goals_rituals_avg_fields_possibleTypes: string[] = ['goals_rituals_avg_fields']
    export const isgoals_rituals_avg_fields = (obj?: { __typename?: any } | null): obj is goals_rituals_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoals_rituals_avg_fields"')
      return goals_rituals_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const goals_rituals_max_fields_possibleTypes: string[] = ['goals_rituals_max_fields']
    export const isgoals_rituals_max_fields = (obj?: { __typename?: any } | null): obj is goals_rituals_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoals_rituals_max_fields"')
      return goals_rituals_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const goals_rituals_min_fields_possibleTypes: string[] = ['goals_rituals_min_fields']
    export const isgoals_rituals_min_fields = (obj?: { __typename?: any } | null): obj is goals_rituals_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoals_rituals_min_fields"')
      return goals_rituals_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const goals_rituals_mutation_response_possibleTypes: string[] = ['goals_rituals_mutation_response']
    export const isgoals_rituals_mutation_response = (obj?: { __typename?: any } | null): obj is goals_rituals_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoals_rituals_mutation_response"')
      return goals_rituals_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const goals_rituals_stddev_fields_possibleTypes: string[] = ['goals_rituals_stddev_fields']
    export const isgoals_rituals_stddev_fields = (obj?: { __typename?: any } | null): obj is goals_rituals_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoals_rituals_stddev_fields"')
      return goals_rituals_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const goals_rituals_stddev_pop_fields_possibleTypes: string[] = ['goals_rituals_stddev_pop_fields']
    export const isgoals_rituals_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is goals_rituals_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoals_rituals_stddev_pop_fields"')
      return goals_rituals_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const goals_rituals_stddev_samp_fields_possibleTypes: string[] = ['goals_rituals_stddev_samp_fields']
    export const isgoals_rituals_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is goals_rituals_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoals_rituals_stddev_samp_fields"')
      return goals_rituals_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const goals_rituals_sum_fields_possibleTypes: string[] = ['goals_rituals_sum_fields']
    export const isgoals_rituals_sum_fields = (obj?: { __typename?: any } | null): obj is goals_rituals_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoals_rituals_sum_fields"')
      return goals_rituals_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const goals_rituals_var_pop_fields_possibleTypes: string[] = ['goals_rituals_var_pop_fields']
    export const isgoals_rituals_var_pop_fields = (obj?: { __typename?: any } | null): obj is goals_rituals_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoals_rituals_var_pop_fields"')
      return goals_rituals_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const goals_rituals_var_samp_fields_possibleTypes: string[] = ['goals_rituals_var_samp_fields']
    export const isgoals_rituals_var_samp_fields = (obj?: { __typename?: any } | null): obj is goals_rituals_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoals_rituals_var_samp_fields"')
      return goals_rituals_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const goals_rituals_variance_fields_possibleTypes: string[] = ['goals_rituals_variance_fields']
    export const isgoals_rituals_variance_fields = (obj?: { __typename?: any } | null): obj is goals_rituals_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoals_rituals_variance_fields"')
      return goals_rituals_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const goals_slides_possibleTypes: string[] = ['goals_slides']
    export const isgoals_slides = (obj?: { __typename?: any } | null): obj is goals_slides => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoals_slides"')
      return goals_slides_possibleTypes.includes(obj.__typename)
    }
    


    const goals_slides_aggregate_possibleTypes: string[] = ['goals_slides_aggregate']
    export const isgoals_slides_aggregate = (obj?: { __typename?: any } | null): obj is goals_slides_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoals_slides_aggregate"')
      return goals_slides_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const goals_slides_aggregate_fields_possibleTypes: string[] = ['goals_slides_aggregate_fields']
    export const isgoals_slides_aggregate_fields = (obj?: { __typename?: any } | null): obj is goals_slides_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoals_slides_aggregate_fields"')
      return goals_slides_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const goals_slides_max_fields_possibleTypes: string[] = ['goals_slides_max_fields']
    export const isgoals_slides_max_fields = (obj?: { __typename?: any } | null): obj is goals_slides_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoals_slides_max_fields"')
      return goals_slides_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const goals_slides_min_fields_possibleTypes: string[] = ['goals_slides_min_fields']
    export const isgoals_slides_min_fields = (obj?: { __typename?: any } | null): obj is goals_slides_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoals_slides_min_fields"')
      return goals_slides_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const goals_slides_mutation_response_possibleTypes: string[] = ['goals_slides_mutation_response']
    export const isgoals_slides_mutation_response = (obj?: { __typename?: any } | null): obj is goals_slides_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isgoals_slides_mutation_response"')
      return goals_slides_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const heroes_possibleTypes: string[] = ['heroes']
    export const isheroes = (obj?: { __typename?: any } | null): obj is heroes => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isheroes"')
      return heroes_possibleTypes.includes(obj.__typename)
    }
    


    const heroes_aggregate_possibleTypes: string[] = ['heroes_aggregate']
    export const isheroes_aggregate = (obj?: { __typename?: any } | null): obj is heroes_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isheroes_aggregate"')
      return heroes_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const heroes_aggregate_fields_possibleTypes: string[] = ['heroes_aggregate_fields']
    export const isheroes_aggregate_fields = (obj?: { __typename?: any } | null): obj is heroes_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isheroes_aggregate_fields"')
      return heroes_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const heroes_avg_fields_possibleTypes: string[] = ['heroes_avg_fields']
    export const isheroes_avg_fields = (obj?: { __typename?: any } | null): obj is heroes_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isheroes_avg_fields"')
      return heroes_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const heroes_max_fields_possibleTypes: string[] = ['heroes_max_fields']
    export const isheroes_max_fields = (obj?: { __typename?: any } | null): obj is heroes_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isheroes_max_fields"')
      return heroes_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const heroes_min_fields_possibleTypes: string[] = ['heroes_min_fields']
    export const isheroes_min_fields = (obj?: { __typename?: any } | null): obj is heroes_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isheroes_min_fields"')
      return heroes_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const heroes_mutation_response_possibleTypes: string[] = ['heroes_mutation_response']
    export const isheroes_mutation_response = (obj?: { __typename?: any } | null): obj is heroes_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isheroes_mutation_response"')
      return heroes_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const heroes_stddev_fields_possibleTypes: string[] = ['heroes_stddev_fields']
    export const isheroes_stddev_fields = (obj?: { __typename?: any } | null): obj is heroes_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isheroes_stddev_fields"')
      return heroes_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const heroes_stddev_pop_fields_possibleTypes: string[] = ['heroes_stddev_pop_fields']
    export const isheroes_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is heroes_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isheroes_stddev_pop_fields"')
      return heroes_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const heroes_stddev_samp_fields_possibleTypes: string[] = ['heroes_stddev_samp_fields']
    export const isheroes_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is heroes_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isheroes_stddev_samp_fields"')
      return heroes_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const heroes_sum_fields_possibleTypes: string[] = ['heroes_sum_fields']
    export const isheroes_sum_fields = (obj?: { __typename?: any } | null): obj is heroes_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isheroes_sum_fields"')
      return heroes_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const heroes_var_pop_fields_possibleTypes: string[] = ['heroes_var_pop_fields']
    export const isheroes_var_pop_fields = (obj?: { __typename?: any } | null): obj is heroes_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isheroes_var_pop_fields"')
      return heroes_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const heroes_var_samp_fields_possibleTypes: string[] = ['heroes_var_samp_fields']
    export const isheroes_var_samp_fields = (obj?: { __typename?: any } | null): obj is heroes_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isheroes_var_samp_fields"')
      return heroes_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const heroes_variance_fields_possibleTypes: string[] = ['heroes_variance_fields']
    export const isheroes_variance_fields = (obj?: { __typename?: any } | null): obj is heroes_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isheroes_variance_fields"')
      return heroes_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const mutation_root_possibleTypes: string[] = ['mutation_root']
    export const ismutation_root = (obj?: { __typename?: any } | null): obj is mutation_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismutation_root"')
      return mutation_root_possibleTypes.includes(obj.__typename)
    }
    


    const notes_possibleTypes: string[] = ['notes']
    export const isnotes = (obj?: { __typename?: any } | null): obj is notes => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnotes"')
      return notes_possibleTypes.includes(obj.__typename)
    }
    


    const notes_aggregate_possibleTypes: string[] = ['notes_aggregate']
    export const isnotes_aggregate = (obj?: { __typename?: any } | null): obj is notes_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnotes_aggregate"')
      return notes_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const notes_aggregate_fields_possibleTypes: string[] = ['notes_aggregate_fields']
    export const isnotes_aggregate_fields = (obj?: { __typename?: any } | null): obj is notes_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnotes_aggregate_fields"')
      return notes_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const notes_max_fields_possibleTypes: string[] = ['notes_max_fields']
    export const isnotes_max_fields = (obj?: { __typename?: any } | null): obj is notes_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnotes_max_fields"')
      return notes_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const notes_min_fields_possibleTypes: string[] = ['notes_min_fields']
    export const isnotes_min_fields = (obj?: { __typename?: any } | null): obj is notes_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnotes_min_fields"')
      return notes_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const notes_mutation_response_possibleTypes: string[] = ['notes_mutation_response']
    export const isnotes_mutation_response = (obj?: { __typename?: any } | null): obj is notes_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnotes_mutation_response"')
      return notes_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const privacy_enum_possibleTypes: string[] = ['privacy_enum']
    export const isprivacy_enum = (obj?: { __typename?: any } | null): obj is privacy_enum => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprivacy_enum"')
      return privacy_enum_possibleTypes.includes(obj.__typename)
    }
    


    const privacy_enum_aggregate_possibleTypes: string[] = ['privacy_enum_aggregate']
    export const isprivacy_enum_aggregate = (obj?: { __typename?: any } | null): obj is privacy_enum_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprivacy_enum_aggregate"')
      return privacy_enum_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const privacy_enum_aggregate_fields_possibleTypes: string[] = ['privacy_enum_aggregate_fields']
    export const isprivacy_enum_aggregate_fields = (obj?: { __typename?: any } | null): obj is privacy_enum_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprivacy_enum_aggregate_fields"')
      return privacy_enum_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const privacy_enum_max_fields_possibleTypes: string[] = ['privacy_enum_max_fields']
    export const isprivacy_enum_max_fields = (obj?: { __typename?: any } | null): obj is privacy_enum_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprivacy_enum_max_fields"')
      return privacy_enum_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const privacy_enum_min_fields_possibleTypes: string[] = ['privacy_enum_min_fields']
    export const isprivacy_enum_min_fields = (obj?: { __typename?: any } | null): obj is privacy_enum_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprivacy_enum_min_fields"')
      return privacy_enum_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const privacy_enum_mutation_response_possibleTypes: string[] = ['privacy_enum_mutation_response']
    export const isprivacy_enum_mutation_response = (obj?: { __typename?: any } | null): obj is privacy_enum_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprivacy_enum_mutation_response"')
      return privacy_enum_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const query_root_possibleTypes: string[] = ['query_root']
    export const isquery_root = (obj?: { __typename?: any } | null): obj is query_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isquery_root"')
      return query_root_possibleTypes.includes(obj.__typename)
    }
    


    const restore_codes_possibleTypes: string[] = ['restore_codes']
    export const isrestore_codes = (obj?: { __typename?: any } | null): obj is restore_codes => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isrestore_codes"')
      return restore_codes_possibleTypes.includes(obj.__typename)
    }
    


    const restore_codes_aggregate_possibleTypes: string[] = ['restore_codes_aggregate']
    export const isrestore_codes_aggregate = (obj?: { __typename?: any } | null): obj is restore_codes_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isrestore_codes_aggregate"')
      return restore_codes_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const restore_codes_aggregate_fields_possibleTypes: string[] = ['restore_codes_aggregate_fields']
    export const isrestore_codes_aggregate_fields = (obj?: { __typename?: any } | null): obj is restore_codes_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isrestore_codes_aggregate_fields"')
      return restore_codes_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const restore_codes_max_fields_possibleTypes: string[] = ['restore_codes_max_fields']
    export const isrestore_codes_max_fields = (obj?: { __typename?: any } | null): obj is restore_codes_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isrestore_codes_max_fields"')
      return restore_codes_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const restore_codes_min_fields_possibleTypes: string[] = ['restore_codes_min_fields']
    export const isrestore_codes_min_fields = (obj?: { __typename?: any } | null): obj is restore_codes_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isrestore_codes_min_fields"')
      return restore_codes_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const restore_codes_mutation_response_possibleTypes: string[] = ['restore_codes_mutation_response']
    export const isrestore_codes_mutation_response = (obj?: { __typename?: any } | null): obj is restore_codes_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isrestore_codes_mutation_response"')
      return restore_codes_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const ritual_type_enum_possibleTypes: string[] = ['ritual_type_enum']
    export const isritual_type_enum = (obj?: { __typename?: any } | null): obj is ritual_type_enum => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isritual_type_enum"')
      return ritual_type_enum_possibleTypes.includes(obj.__typename)
    }
    


    const ritual_type_enum_aggregate_possibleTypes: string[] = ['ritual_type_enum_aggregate']
    export const isritual_type_enum_aggregate = (obj?: { __typename?: any } | null): obj is ritual_type_enum_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isritual_type_enum_aggregate"')
      return ritual_type_enum_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const ritual_type_enum_aggregate_fields_possibleTypes: string[] = ['ritual_type_enum_aggregate_fields']
    export const isritual_type_enum_aggregate_fields = (obj?: { __typename?: any } | null): obj is ritual_type_enum_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isritual_type_enum_aggregate_fields"')
      return ritual_type_enum_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const ritual_type_enum_max_fields_possibleTypes: string[] = ['ritual_type_enum_max_fields']
    export const isritual_type_enum_max_fields = (obj?: { __typename?: any } | null): obj is ritual_type_enum_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isritual_type_enum_max_fields"')
      return ritual_type_enum_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const ritual_type_enum_min_fields_possibleTypes: string[] = ['ritual_type_enum_min_fields']
    export const isritual_type_enum_min_fields = (obj?: { __typename?: any } | null): obj is ritual_type_enum_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isritual_type_enum_min_fields"')
      return ritual_type_enum_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const ritual_type_enum_mutation_response_possibleTypes: string[] = ['ritual_type_enum_mutation_response']
    export const isritual_type_enum_mutation_response = (obj?: { __typename?: any } | null): obj is ritual_type_enum_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isritual_type_enum_mutation_response"')
      return ritual_type_enum_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const sprints_possibleTypes: string[] = ['sprints']
    export const issprints = (obj?: { __typename?: any } | null): obj is sprints => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issprints"')
      return sprints_possibleTypes.includes(obj.__typename)
    }
    


    const sprints_aggregate_possibleTypes: string[] = ['sprints_aggregate']
    export const issprints_aggregate = (obj?: { __typename?: any } | null): obj is sprints_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issprints_aggregate"')
      return sprints_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const sprints_aggregate_fields_possibleTypes: string[] = ['sprints_aggregate_fields']
    export const issprints_aggregate_fields = (obj?: { __typename?: any } | null): obj is sprints_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issprints_aggregate_fields"')
      return sprints_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const sprints_avg_fields_possibleTypes: string[] = ['sprints_avg_fields']
    export const issprints_avg_fields = (obj?: { __typename?: any } | null): obj is sprints_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issprints_avg_fields"')
      return sprints_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const sprints_max_fields_possibleTypes: string[] = ['sprints_max_fields']
    export const issprints_max_fields = (obj?: { __typename?: any } | null): obj is sprints_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issprints_max_fields"')
      return sprints_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const sprints_min_fields_possibleTypes: string[] = ['sprints_min_fields']
    export const issprints_min_fields = (obj?: { __typename?: any } | null): obj is sprints_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issprints_min_fields"')
      return sprints_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const sprints_mutation_response_possibleTypes: string[] = ['sprints_mutation_response']
    export const issprints_mutation_response = (obj?: { __typename?: any } | null): obj is sprints_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issprints_mutation_response"')
      return sprints_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const sprints_stddev_fields_possibleTypes: string[] = ['sprints_stddev_fields']
    export const issprints_stddev_fields = (obj?: { __typename?: any } | null): obj is sprints_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issprints_stddev_fields"')
      return sprints_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const sprints_stddev_pop_fields_possibleTypes: string[] = ['sprints_stddev_pop_fields']
    export const issprints_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is sprints_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issprints_stddev_pop_fields"')
      return sprints_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const sprints_stddev_samp_fields_possibleTypes: string[] = ['sprints_stddev_samp_fields']
    export const issprints_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is sprints_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issprints_stddev_samp_fields"')
      return sprints_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const sprints_sum_fields_possibleTypes: string[] = ['sprints_sum_fields']
    export const issprints_sum_fields = (obj?: { __typename?: any } | null): obj is sprints_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issprints_sum_fields"')
      return sprints_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const sprints_var_pop_fields_possibleTypes: string[] = ['sprints_var_pop_fields']
    export const issprints_var_pop_fields = (obj?: { __typename?: any } | null): obj is sprints_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issprints_var_pop_fields"')
      return sprints_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const sprints_var_samp_fields_possibleTypes: string[] = ['sprints_var_samp_fields']
    export const issprints_var_samp_fields = (obj?: { __typename?: any } | null): obj is sprints_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issprints_var_samp_fields"')
      return sprints_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const sprints_variance_fields_possibleTypes: string[] = ['sprints_variance_fields']
    export const issprints_variance_fields = (obj?: { __typename?: any } | null): obj is sprints_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issprints_variance_fields"')
      return sprints_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const subscription_root_possibleTypes: string[] = ['subscription_root']
    export const issubscription_root = (obj?: { __typename?: any } | null): obj is subscription_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issubscription_root"')
      return subscription_root_possibleTypes.includes(obj.__typename)
    }
    

export const enumAchievementsConstraint = {
   achievements_id_key: 'achievements_id_key' as const,
   achievements_pkey: 'achievements_pkey' as const
}

export const enumAchievementsSelectColumn = {
   created_at: 'created_at' as const,
   description: 'description' as const,
   id: 'id' as const,
   img_path: 'img_path' as const,
   owner_id: 'owner_id' as const,
   title: 'title' as const,
   visible: 'visible' as const
}

export const enumAchievementsUpdateColumn = {
   created_at: 'created_at' as const,
   description: 'description' as const,
   id: 'id' as const,
   img_path: 'img_path' as const,
   owner_id: 'owner_id' as const,
   title: 'title' as const,
   visible: 'visible' as const
}

export const enumAddonsConstraint = {
   addons_pkey: 'addons_pkey' as const
}

export const enumAddonsEnumConstraint = {
   addons_enum_pkey: 'addons_enum_pkey' as const
}

export const enumAddonsEnumEnum = {
   goals_of_week: 'goals_of_week' as const
}

export const enumAddonsEnumSelectColumn = {
   addon: 'addon' as const,
   description: 'description' as const
}

export const enumAddonsEnumUpdateColumn = {
   addon: 'addon' as const,
   description: 'description' as const
}

export const enumAddonsSelectColumn = {
   addon: 'addon' as const,
   owner_id: 'owner_id' as const
}

export const enumAddonsUpdateColumn = {
   addon: 'addon' as const,
   owner_id: 'owner_id' as const
}

export const enumGoalDifficultyEnumConstraint = {
   goal_difficulty_enum_pkey: 'goal_difficulty_enum_pkey' as const
}

export const enumGoalDifficultyEnumEnum = {
   epic: 'epic' as const,
   friend_of_death: 'friend_of_death' as const,
   immortal: 'immortal' as const,
   legend: 'legend' as const,
   light: 'light' as const,
   medium: 'medium' as const,
   star: 'star' as const
}

export const enumGoalDifficultyEnumSelectColumn = {
   description: 'description' as const,
   difficulty: 'difficulty' as const
}

export const enumGoalDifficultyEnumUpdateColumn = {
   description: 'description' as const,
   difficulty: 'difficulty' as const
}

export const enumGoalLogsEnumConstraint = {
   goal_logs_enum_pkey: 'goal_logs_enum_pkey' as const
}

export const enumGoalLogsEnumEnum = {
   completed: 'completed' as const,
   created: 'created' as const,
   deprecated: 'deprecated' as const,
   failed: 'failed' as const,
   ritualized: 'ritualized' as const
}

export const enumGoalLogsEnumSelectColumn = {
   description: 'description' as const,
   log_type: 'log_type' as const
}

export const enumGoalLogsEnumUpdateColumn = {
   description: 'description' as const,
   log_type: 'log_type' as const
}

export const enumGoalStatusEnumConstraint = {
   goal_status_enum_pkey: 'goal_status_enum_pkey' as const
}

export const enumGoalStatusEnumEnum = {
   abstract: 'abstract' as const,
   active: 'active' as const,
   completed: 'completed' as const,
   deprecated: 'deprecated' as const,
   failed: 'failed' as const,
   finished: 'finished' as const,
   frozen: 'frozen' as const
}

export const enumGoalStatusEnumSelectColumn = {
   description: 'description' as const,
   status: 'status' as const
}

export const enumGoalStatusEnumUpdateColumn = {
   description: 'description' as const,
   status: 'status' as const
}

export const enumGoalsConstraint = {
   goals_pkey: 'goals_pkey' as const
}

export const enumGoalsLogsConstraint = {
   goals_logs_pkey: 'goals_logs_pkey' as const
}

export const enumGoalsLogsSelectColumn = {
   created_at: 'created_at' as const,
   goal_id: 'goal_id' as const,
   log_description: 'log_description' as const,
   log_id: 'log_id' as const
}

export const enumGoalsLogsUpdateColumn = {
   created_at: 'created_at' as const,
   goal_id: 'goal_id' as const,
   log_description: 'log_description' as const,
   log_id: 'log_id' as const
}

export const enumGoalsRitualsConstraint = {
   goals_rituals_pkey: 'goals_rituals_pkey' as const
}

export const enumGoalsRitualsSelectColumn = {
   created_at: 'created_at' as const,
   goal_id: 'goal_id' as const,
   ritual_id: 'ritual_id' as const,
   ritual_interval: 'ritual_interval' as const,
   ritual_power: 'ritual_power' as const,
   ritual_type: 'ritual_type' as const
}

export const enumGoalsRitualsUpdateColumn = {
   created_at: 'created_at' as const,
   goal_id: 'goal_id' as const,
   ritual_id: 'ritual_id' as const,
   ritual_interval: 'ritual_interval' as const,
   ritual_power: 'ritual_power' as const,
   ritual_type: 'ritual_type' as const
}

export const enumGoalsSelectColumn = {
   created_at: 'created_at' as const,
   deleted_at: 'deleted_at' as const,
   description: 'description' as const,
   difficulty: 'difficulty' as const,
   finished_at: 'finished_at' as const,
   id: 'id' as const,
   is_favorite: 'is_favorite' as const,
   owner_id: 'owner_id' as const,
   parent_goal_id: 'parent_goal_id' as const,
   privacy: 'privacy' as const,
   slogan: 'slogan' as const,
   status: 'status' as const,
   title: 'title' as const,
   updated_at: 'updated_at' as const
}

export const enumGoalsSlidesConstraint = {
   goals_slides_pkey: 'goals_slides_pkey' as const
}

export const enumGoalsSlidesSelectColumn = {
   active: 'active' as const,
   created_at: 'created_at' as const,
   deleted_at: 'deleted_at' as const,
   id: 'id' as const,
   img_path: 'img_path' as const,
   owner_id: 'owner_id' as const,
   title: 'title' as const,
   updated_at: 'updated_at' as const
}

export const enumGoalsSlidesUpdateColumn = {
   active: 'active' as const,
   created_at: 'created_at' as const,
   deleted_at: 'deleted_at' as const,
   id: 'id' as const,
   img_path: 'img_path' as const,
   owner_id: 'owner_id' as const,
   title: 'title' as const,
   updated_at: 'updated_at' as const
}

export const enumGoalsUpdateColumn = {
   created_at: 'created_at' as const,
   deleted_at: 'deleted_at' as const,
   description: 'description' as const,
   difficulty: 'difficulty' as const,
   finished_at: 'finished_at' as const,
   id: 'id' as const,
   is_favorite: 'is_favorite' as const,
   owner_id: 'owner_id' as const,
   parent_goal_id: 'parent_goal_id' as const,
   privacy: 'privacy' as const,
   slogan: 'slogan' as const,
   status: 'status' as const,
   title: 'title' as const,
   updated_at: 'updated_at' as const
}

export const enumHeroesConstraint = {
   heroes_pkey: 'heroes_pkey' as const
}

export const enumHeroesSelectColumn = {
   avatar: 'avatar' as const,
   birthday: 'birthday' as const,
   coins: 'coins' as const,
   created_at: 'created_at' as const,
   deleted_at: 'deleted_at' as const,
   email: 'email' as const,
   id: 'id' as const,
   name: 'name' as const,
   password: 'password' as const,
   phone: 'phone' as const,
   updated_at: 'updated_at' as const
}

export const enumHeroesUpdateColumn = {
   avatar: 'avatar' as const,
   birthday: 'birthday' as const,
   coins: 'coins' as const,
   created_at: 'created_at' as const,
   deleted_at: 'deleted_at' as const,
   email: 'email' as const,
   id: 'id' as const,
   name: 'name' as const,
   password: 'password' as const,
   phone: 'phone' as const,
   updated_at: 'updated_at' as const
}

export const enumNotesConstraint = {
   tasks_pkey: 'tasks_pkey' as const
}

export const enumNotesSelectColumn = {
   archived: 'archived' as const,
   created_at: 'created_at' as const,
   deleted_at: 'deleted_at' as const,
   description: 'description' as const,
   id: 'id' as const,
   owner_id: 'owner_id' as const,
   tag: 'tag' as const,
   updated_at: 'updated_at' as const
}

export const enumNotesUpdateColumn = {
   archived: 'archived' as const,
   created_at: 'created_at' as const,
   deleted_at: 'deleted_at' as const,
   description: 'description' as const,
   id: 'id' as const,
   owner_id: 'owner_id' as const,
   tag: 'tag' as const,
   updated_at: 'updated_at' as const
}

export const enumOrderBy = {
   asc: 'asc' as const,
   asc_nulls_first: 'asc_nulls_first' as const,
   asc_nulls_last: 'asc_nulls_last' as const,
   desc: 'desc' as const,
   desc_nulls_first: 'desc_nulls_first' as const,
   desc_nulls_last: 'desc_nulls_last' as const
}

export const enumPrivacyEnumConstraint = {
   privacy_enum_pkey: 'privacy_enum_pkey' as const
}

export const enumPrivacyEnumEnum = {
   friendzone: 'friendzone' as const,
   private: 'private' as const,
   public: 'public' as const
}

export const enumPrivacyEnumSelectColumn = {
   description: 'description' as const,
   privacy: 'privacy' as const
}

export const enumPrivacyEnumUpdateColumn = {
   description: 'description' as const,
   privacy: 'privacy' as const
}

export const enumRestoreCodesConstraint = {
   restore_codes_pkey: 'restore_codes_pkey' as const
}

export const enumRestoreCodesSelectColumn = {
   email: 'email' as const,
   id: 'id' as const
}

export const enumRestoreCodesUpdateColumn = {
   email: 'email' as const,
   id: 'id' as const
}

export const enumRitualTypeEnumConstraint = {
   ritual_type_enum_pkey: 'ritual_type_enum_pkey' as const
}

export const enumRitualTypeEnumEnum = {
   days_of_week: 'days_of_week' as const,
   interval_in_days: 'interval_in_days' as const
}

export const enumRitualTypeEnumSelectColumn = {
   description: 'description' as const,
   ritual_type: 'ritual_type' as const
}

export const enumRitualTypeEnumUpdateColumn = {
   description: 'description' as const,
   ritual_type: 'ritual_type' as const
}

export const enumSprintsConstraint = {
   sprints_id_key: 'sprints_id_key' as const,
   sprints_pkey: 'sprints_pkey' as const
}

export const enumSprintsSelectColumn = {
   achievement: 'achievement' as const,
   cached: 'cached' as const,
   created_at: 'created_at' as const,
   deleted_at: 'deleted_at' as const,
   description: 'description' as const,
   duration: 'duration' as const,
   finished_at: 'finished_at' as const,
   id: 'id' as const,
   img_path: 'img_path' as const,
   owner_id: 'owner_id' as const,
   parent_sprint_id: 'parent_sprint_id' as const,
   sprint_days: 'sprint_days' as const,
   sprint_goals: 'sprint_goals' as const,
   started_at: 'started_at' as const,
   title: 'title' as const,
   updated_at: 'updated_at' as const
}

export const enumSprintsUpdateColumn = {
   achievement: 'achievement' as const,
   cached: 'cached' as const,
   created_at: 'created_at' as const,
   deleted_at: 'deleted_at' as const,
   description: 'description' as const,
   duration: 'duration' as const,
   finished_at: 'finished_at' as const,
   id: 'id' as const,
   img_path: 'img_path' as const,
   owner_id: 'owner_id' as const,
   parent_sprint_id: 'parent_sprint_id' as const,
   sprint_days: 'sprint_days' as const,
   sprint_goals: 'sprint_goals' as const,
   started_at: 'started_at' as const,
   title: 'title' as const,
   updated_at: 'updated_at' as const
}
