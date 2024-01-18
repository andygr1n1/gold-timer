export default {
    "scalars": [
        0,
        2,
        3,
        5,
        11,
        19,
        21,
        28,
        33,
        34,
        44,
        46,
        56,
        58,
        63,
        64,
        74,
        76,
        81,
        82,
        92,
        94,
        99,
        100,
        110,
        112,
        119,
        127,
        137,
        139,
        157,
        169,
        179,
        186,
        192,
        200,
        202,
        203,
        209,
        219,
        225,
        229,
        235,
        243,
        245,
        246,
        251,
        252,
        262,
        264,
        269,
        277,
        279,
        284,
        285,
        295,
        297,
        307,
        322,
        332,
        339,
        341
    ],
    "types": {
        "Boolean": {},
        "Boolean_comparison_exp": {
            "_eq": [
                0
            ],
            "_gt": [
                0
            ],
            "_gte": [
                0
            ],
            "_in": [
                0
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                0
            ],
            "_lte": [
                0
            ],
            "_neq": [
                0
            ],
            "_nin": [
                0
            ],
            "__typename": [
                5
            ]
        },
        "Float": {},
        "Int": {},
        "Int_comparison_exp": {
            "_eq": [
                3
            ],
            "_gt": [
                3
            ],
            "_gte": [
                3
            ],
            "_in": [
                3
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                3
            ],
            "_lte": [
                3
            ],
            "_neq": [
                3
            ],
            "_nin": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "String": {},
        "String_comparison_exp": {
            "_eq": [
                5
            ],
            "_gt": [
                5
            ],
            "_gte": [
                5
            ],
            "_ilike": [
                5
            ],
            "_in": [
                5
            ],
            "_iregex": [
                5
            ],
            "_is_null": [
                0
            ],
            "_like": [
                5
            ],
            "_lt": [
                5
            ],
            "_lte": [
                5
            ],
            "_neq": [
                5
            ],
            "_nilike": [
                5
            ],
            "_nin": [
                5
            ],
            "_niregex": [
                5
            ],
            "_nlike": [
                5
            ],
            "_nregex": [
                5
            ],
            "_nsimilar": [
                5
            ],
            "_regex": [
                5
            ],
            "_similar": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "achievements": {
            "created_at": [
                339
            ],
            "description": [
                5
            ],
            "id": [
                341
            ],
            "img_path": [
                5
            ],
            "owner_id": [
                341
            ],
            "title": [
                5
            ],
            "visible": [
                0
            ],
            "__typename": [
                5
            ]
        },
        "achievements_aggregate": {
            "aggregate": [
                9
            ],
            "nodes": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "achievements_aggregate_fields": {
            "count": [
                3,
                {
                    "columns": [
                        19,
                        "[achievements_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                13
            ],
            "min": [
                14
            ],
            "__typename": [
                5
            ]
        },
        "achievements_bool_exp": {
            "_and": [
                10
            ],
            "_not": [
                10
            ],
            "_or": [
                10
            ],
            "created_at": [
                340
            ],
            "description": [
                6
            ],
            "id": [
                342
            ],
            "img_path": [
                6
            ],
            "owner_id": [
                342
            ],
            "title": [
                6
            ],
            "visible": [
                1
            ],
            "__typename": [
                5
            ]
        },
        "achievements_constraint": {},
        "achievements_insert_input": {
            "created_at": [
                339
            ],
            "description": [
                5
            ],
            "id": [
                341
            ],
            "img_path": [
                5
            ],
            "owner_id": [
                341
            ],
            "title": [
                5
            ],
            "visible": [
                0
            ],
            "__typename": [
                5
            ]
        },
        "achievements_max_fields": {
            "created_at": [
                339
            ],
            "description": [
                5
            ],
            "id": [
                341
            ],
            "img_path": [
                5
            ],
            "owner_id": [
                341
            ],
            "title": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "achievements_min_fields": {
            "created_at": [
                339
            ],
            "description": [
                5
            ],
            "id": [
                341
            ],
            "img_path": [
                5
            ],
            "owner_id": [
                341
            ],
            "title": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "achievements_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "achievements_on_conflict": {
            "constraint": [
                11
            ],
            "update_columns": [
                21
            ],
            "where": [
                10
            ],
            "__typename": [
                5
            ]
        },
        "achievements_order_by": {
            "created_at": [
                246
            ],
            "description": [
                246
            ],
            "id": [
                246
            ],
            "img_path": [
                246
            ],
            "owner_id": [
                246
            ],
            "title": [
                246
            ],
            "visible": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "achievements_pk_columns_input": {
            "id": [
                341
            ],
            "__typename": [
                5
            ]
        },
        "achievements_select_column": {},
        "achievements_set_input": {
            "created_at": [
                339
            ],
            "description": [
                5
            ],
            "id": [
                341
            ],
            "img_path": [
                5
            ],
            "owner_id": [
                341
            ],
            "title": [
                5
            ],
            "visible": [
                0
            ],
            "__typename": [
                5
            ]
        },
        "achievements_update_column": {},
        "addons": {
            "addon": [
                34
            ],
            "addons_enum": [
                29
            ],
            "hero": [
                204
            ],
            "owner_id": [
                341
            ],
            "__typename": [
                5
            ]
        },
        "addons_aggregate": {
            "aggregate": [
                24
            ],
            "nodes": [
                22
            ],
            "__typename": [
                5
            ]
        },
        "addons_aggregate_fields": {
            "count": [
                3,
                {
                    "columns": [
                        56,
                        "[addons_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                48
            ],
            "min": [
                50
            ],
            "__typename": [
                5
            ]
        },
        "addons_aggregate_order_by": {
            "count": [
                246
            ],
            "max": [
                49
            ],
            "min": [
                51
            ],
            "__typename": [
                5
            ]
        },
        "addons_arr_rel_insert_input": {
            "data": [
                47
            ],
            "on_conflict": [
                53
            ],
            "__typename": [
                5
            ]
        },
        "addons_bool_exp": {
            "_and": [
                27
            ],
            "_not": [
                27
            ],
            "_or": [
                27
            ],
            "addon": [
                35
            ],
            "addons_enum": [
                32
            ],
            "hero": [
                208
            ],
            "owner_id": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "addons_constraint": {},
        "addons_enum": {
            "addon": [
                5
            ],
            "addons": [
                22,
                {
                    "distinct_on": [
                        56,
                        "[addons_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        54,
                        "[addons_order_by!]"
                    ],
                    "where": [
                        27
                    ]
                }
            ],
            "addons_aggregate": [
                23,
                {
                    "distinct_on": [
                        56,
                        "[addons_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        54,
                        "[addons_order_by!]"
                    ],
                    "where": [
                        27
                    ]
                }
            ],
            "description": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "addons_enum_aggregate": {
            "aggregate": [
                31
            ],
            "nodes": [
                29
            ],
            "__typename": [
                5
            ]
        },
        "addons_enum_aggregate_fields": {
            "count": [
                3,
                {
                    "columns": [
                        44,
                        "[addons_enum_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                37
            ],
            "min": [
                38
            ],
            "__typename": [
                5
            ]
        },
        "addons_enum_bool_exp": {
            "_and": [
                32
            ],
            "_not": [
                32
            ],
            "_or": [
                32
            ],
            "addon": [
                6
            ],
            "addons": [
                27
            ],
            "description": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "addons_enum_constraint": {},
        "addons_enum_enum": {},
        "addons_enum_enum_comparison_exp": {
            "_eq": [
                34
            ],
            "_in": [
                34
            ],
            "_is_null": [
                0
            ],
            "_neq": [
                34
            ],
            "_nin": [
                34
            ],
            "__typename": [
                5
            ]
        },
        "addons_enum_insert_input": {
            "addon": [
                5
            ],
            "addons": [
                26
            ],
            "description": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "addons_enum_max_fields": {
            "addon": [
                5
            ],
            "description": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "addons_enum_min_fields": {
            "addon": [
                5
            ],
            "description": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "addons_enum_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                29
            ],
            "__typename": [
                5
            ]
        },
        "addons_enum_obj_rel_insert_input": {
            "data": [
                36
            ],
            "on_conflict": [
                41
            ],
            "__typename": [
                5
            ]
        },
        "addons_enum_on_conflict": {
            "constraint": [
                33
            ],
            "update_columns": [
                46
            ],
            "where": [
                32
            ],
            "__typename": [
                5
            ]
        },
        "addons_enum_order_by": {
            "addon": [
                246
            ],
            "addons_aggregate": [
                25
            ],
            "description": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "addons_enum_pk_columns_input": {
            "addon": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "addons_enum_select_column": {},
        "addons_enum_set_input": {
            "addon": [
                5
            ],
            "description": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "addons_enum_update_column": {},
        "addons_insert_input": {
            "addon": [
                34
            ],
            "addons_enum": [
                40
            ],
            "hero": [
                215
            ],
            "owner_id": [
                341
            ],
            "__typename": [
                5
            ]
        },
        "addons_max_fields": {
            "owner_id": [
                341
            ],
            "__typename": [
                5
            ]
        },
        "addons_max_order_by": {
            "owner_id": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "addons_min_fields": {
            "owner_id": [
                341
            ],
            "__typename": [
                5
            ]
        },
        "addons_min_order_by": {
            "owner_id": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "addons_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                22
            ],
            "__typename": [
                5
            ]
        },
        "addons_on_conflict": {
            "constraint": [
                28
            ],
            "update_columns": [
                58
            ],
            "where": [
                27
            ],
            "__typename": [
                5
            ]
        },
        "addons_order_by": {
            "addon": [
                246
            ],
            "addons_enum": [
                42
            ],
            "hero": [
                217
            ],
            "owner_id": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "addons_pk_columns_input": {
            "addon": [
                34
            ],
            "owner_id": [
                341
            ],
            "__typename": [
                5
            ]
        },
        "addons_select_column": {},
        "addons_set_input": {
            "addon": [
                34
            ],
            "owner_id": [
                341
            ],
            "__typename": [
                5
            ]
        },
        "addons_update_column": {},
        "goal_difficulty_enum": {
            "description": [
                5
            ],
            "difficulty": [
                5
            ],
            "goals": [
                113,
                {
                    "distinct_on": [
                        186,
                        "[goals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        147,
                        "[goals_order_by!]"
                    ],
                    "where": [
                        118
                    ]
                }
            ],
            "goals_aggregate": [
                114,
                {
                    "distinct_on": [
                        186,
                        "[goals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        147,
                        "[goals_order_by!]"
                    ],
                    "where": [
                        118
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "goal_difficulty_enum_aggregate": {
            "aggregate": [
                61
            ],
            "nodes": [
                59
            ],
            "__typename": [
                5
            ]
        },
        "goal_difficulty_enum_aggregate_fields": {
            "count": [
                3,
                {
                    "columns": [
                        74,
                        "[goal_difficulty_enum_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                67
            ],
            "min": [
                68
            ],
            "__typename": [
                5
            ]
        },
        "goal_difficulty_enum_bool_exp": {
            "_and": [
                62
            ],
            "_not": [
                62
            ],
            "_or": [
                62
            ],
            "description": [
                6
            ],
            "difficulty": [
                6
            ],
            "goals": [
                118
            ],
            "__typename": [
                5
            ]
        },
        "goal_difficulty_enum_constraint": {},
        "goal_difficulty_enum_enum": {},
        "goal_difficulty_enum_enum_comparison_exp": {
            "_eq": [
                64
            ],
            "_in": [
                64
            ],
            "_is_null": [
                0
            ],
            "_neq": [
                64
            ],
            "_nin": [
                64
            ],
            "__typename": [
                5
            ]
        },
        "goal_difficulty_enum_insert_input": {
            "description": [
                5
            ],
            "difficulty": [
                5
            ],
            "goals": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "goal_difficulty_enum_max_fields": {
            "description": [
                5
            ],
            "difficulty": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "goal_difficulty_enum_min_fields": {
            "description": [
                5
            ],
            "difficulty": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "goal_difficulty_enum_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                59
            ],
            "__typename": [
                5
            ]
        },
        "goal_difficulty_enum_obj_rel_insert_input": {
            "data": [
                66
            ],
            "on_conflict": [
                71
            ],
            "__typename": [
                5
            ]
        },
        "goal_difficulty_enum_on_conflict": {
            "constraint": [
                63
            ],
            "update_columns": [
                76
            ],
            "where": [
                62
            ],
            "__typename": [
                5
            ]
        },
        "goal_difficulty_enum_order_by": {
            "description": [
                246
            ],
            "difficulty": [
                246
            ],
            "goals_aggregate": [
                116
            ],
            "__typename": [
                5
            ]
        },
        "goal_difficulty_enum_pk_columns_input": {
            "difficulty": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "goal_difficulty_enum_select_column": {},
        "goal_difficulty_enum_set_input": {
            "description": [
                5
            ],
            "difficulty": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "goal_difficulty_enum_update_column": {},
        "goal_logs_enum": {
            "description": [
                5
            ],
            "goals_logs": [
                121,
                {
                    "distinct_on": [
                        137,
                        "[goals_logs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        135,
                        "[goals_logs_order_by!]"
                    ],
                    "where": [
                        126
                    ]
                }
            ],
            "goals_logs_aggregate": [
                122,
                {
                    "distinct_on": [
                        137,
                        "[goals_logs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        135,
                        "[goals_logs_order_by!]"
                    ],
                    "where": [
                        126
                    ]
                }
            ],
            "log_type": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "goal_logs_enum_aggregate": {
            "aggregate": [
                79
            ],
            "nodes": [
                77
            ],
            "__typename": [
                5
            ]
        },
        "goal_logs_enum_aggregate_fields": {
            "count": [
                3,
                {
                    "columns": [
                        92,
                        "[goal_logs_enum_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                85
            ],
            "min": [
                86
            ],
            "__typename": [
                5
            ]
        },
        "goal_logs_enum_bool_exp": {
            "_and": [
                80
            ],
            "_not": [
                80
            ],
            "_or": [
                80
            ],
            "description": [
                6
            ],
            "goals_logs": [
                126
            ],
            "log_type": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "goal_logs_enum_constraint": {},
        "goal_logs_enum_enum": {},
        "goal_logs_enum_enum_comparison_exp": {
            "_eq": [
                82
            ],
            "_in": [
                82
            ],
            "_is_null": [
                0
            ],
            "_neq": [
                82
            ],
            "_nin": [
                82
            ],
            "__typename": [
                5
            ]
        },
        "goal_logs_enum_insert_input": {
            "description": [
                5
            ],
            "goals_logs": [
                125
            ],
            "log_type": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "goal_logs_enum_max_fields": {
            "description": [
                5
            ],
            "log_type": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "goal_logs_enum_min_fields": {
            "description": [
                5
            ],
            "log_type": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "goal_logs_enum_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                77
            ],
            "__typename": [
                5
            ]
        },
        "goal_logs_enum_obj_rel_insert_input": {
            "data": [
                84
            ],
            "on_conflict": [
                89
            ],
            "__typename": [
                5
            ]
        },
        "goal_logs_enum_on_conflict": {
            "constraint": [
                81
            ],
            "update_columns": [
                94
            ],
            "where": [
                80
            ],
            "__typename": [
                5
            ]
        },
        "goal_logs_enum_order_by": {
            "description": [
                246
            ],
            "goals_logs_aggregate": [
                124
            ],
            "log_type": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "goal_logs_enum_pk_columns_input": {
            "log_type": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "goal_logs_enum_select_column": {},
        "goal_logs_enum_set_input": {
            "description": [
                5
            ],
            "log_type": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "goal_logs_enum_update_column": {},
        "goal_status_enum": {
            "description": [
                5
            ],
            "goals": [
                113,
                {
                    "distinct_on": [
                        186,
                        "[goals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        147,
                        "[goals_order_by!]"
                    ],
                    "where": [
                        118
                    ]
                }
            ],
            "goals_aggregate": [
                114,
                {
                    "distinct_on": [
                        186,
                        "[goals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        147,
                        "[goals_order_by!]"
                    ],
                    "where": [
                        118
                    ]
                }
            ],
            "status": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "goal_status_enum_aggregate": {
            "aggregate": [
                97
            ],
            "nodes": [
                95
            ],
            "__typename": [
                5
            ]
        },
        "goal_status_enum_aggregate_fields": {
            "count": [
                3,
                {
                    "columns": [
                        110,
                        "[goal_status_enum_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                103
            ],
            "min": [
                104
            ],
            "__typename": [
                5
            ]
        },
        "goal_status_enum_bool_exp": {
            "_and": [
                98
            ],
            "_not": [
                98
            ],
            "_or": [
                98
            ],
            "description": [
                6
            ],
            "goals": [
                118
            ],
            "status": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "goal_status_enum_constraint": {},
        "goal_status_enum_enum": {},
        "goal_status_enum_enum_comparison_exp": {
            "_eq": [
                100
            ],
            "_in": [
                100
            ],
            "_is_null": [
                0
            ],
            "_neq": [
                100
            ],
            "_nin": [
                100
            ],
            "__typename": [
                5
            ]
        },
        "goal_status_enum_insert_input": {
            "description": [
                5
            ],
            "goals": [
                117
            ],
            "status": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "goal_status_enum_max_fields": {
            "description": [
                5
            ],
            "status": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "goal_status_enum_min_fields": {
            "description": [
                5
            ],
            "status": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "goal_status_enum_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                95
            ],
            "__typename": [
                5
            ]
        },
        "goal_status_enum_obj_rel_insert_input": {
            "data": [
                102
            ],
            "on_conflict": [
                107
            ],
            "__typename": [
                5
            ]
        },
        "goal_status_enum_on_conflict": {
            "constraint": [
                99
            ],
            "update_columns": [
                112
            ],
            "where": [
                98
            ],
            "__typename": [
                5
            ]
        },
        "goal_status_enum_order_by": {
            "description": [
                246
            ],
            "goals_aggregate": [
                116
            ],
            "status": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "goal_status_enum_pk_columns_input": {
            "status": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "goal_status_enum_select_column": {},
        "goal_status_enum_set_input": {
            "description": [
                5
            ],
            "status": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "goal_status_enum_update_column": {},
        "goals": {
            "child_goals": [
                113,
                {
                    "distinct_on": [
                        186,
                        "[goals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        147,
                        "[goals_order_by!]"
                    ],
                    "where": [
                        118
                    ]
                }
            ],
            "child_goals_aggregate": [
                114,
                {
                    "distinct_on": [
                        186,
                        "[goals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        147,
                        "[goals_order_by!]"
                    ],
                    "where": [
                        118
                    ]
                }
            ],
            "created_at": [
                339
            ],
            "deleted_at": [
                339
            ],
            "description": [
                5
            ],
            "difficulty": [
                64
            ],
            "finished_at": [
                339
            ],
            "goal_difficulty_enum": [
                59
            ],
            "goal_ritual": [
                149
            ],
            "goal_status_enum": [
                95
            ],
            "goals_logs": [
                121,
                {
                    "distinct_on": [
                        137,
                        "[goals_logs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        135,
                        "[goals_logs_order_by!]"
                    ],
                    "where": [
                        126
                    ]
                }
            ],
            "goals_logs_aggregate": [
                122,
                {
                    "distinct_on": [
                        137,
                        "[goals_logs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        135,
                        "[goals_logs_order_by!]"
                    ],
                    "where": [
                        126
                    ]
                }
            ],
            "goals_rituals": [
                149,
                {
                    "distinct_on": [
                        169,
                        "[goals_rituals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        167,
                        "[goals_rituals_order_by!]"
                    ],
                    "where": [
                        156
                    ]
                }
            ],
            "goals_rituals_aggregate": [
                150,
                {
                    "distinct_on": [
                        169,
                        "[goals_rituals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        167,
                        "[goals_rituals_order_by!]"
                    ],
                    "where": [
                        156
                    ]
                }
            ],
            "hero": [
                204
            ],
            "id": [
                341
            ],
            "is_favorite": [
                0
            ],
            "owner_id": [
                341
            ],
            "parent_goal_id": [
                341
            ],
            "privacy": [
                252
            ],
            "privacy_enum": [
                247
            ],
            "slogan": [
                5
            ],
            "status": [
                100
            ],
            "title": [
                5
            ],
            "updated_at": [
                339
            ],
            "__typename": [
                5
            ]
        },
        "goals_aggregate": {
            "aggregate": [
                115
            ],
            "nodes": [
                113
            ],
            "__typename": [
                5
            ]
        },
        "goals_aggregate_fields": {
            "count": [
                3,
                {
                    "columns": [
                        186,
                        "[goals_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                140
            ],
            "min": [
                142
            ],
            "__typename": [
                5
            ]
        },
        "goals_aggregate_order_by": {
            "count": [
                246
            ],
            "max": [
                141
            ],
            "min": [
                143
            ],
            "__typename": [
                5
            ]
        },
        "goals_arr_rel_insert_input": {
            "data": [
                120
            ],
            "on_conflict": [
                146
            ],
            "__typename": [
                5
            ]
        },
        "goals_bool_exp": {
            "_and": [
                118
            ],
            "_not": [
                118
            ],
            "_or": [
                118
            ],
            "child_goals": [
                118
            ],
            "created_at": [
                340
            ],
            "deleted_at": [
                340
            ],
            "description": [
                6
            ],
            "difficulty": [
                65
            ],
            "finished_at": [
                340
            ],
            "goal_difficulty_enum": [
                62
            ],
            "goal_ritual": [
                156
            ],
            "goal_status_enum": [
                98
            ],
            "goals_logs": [
                126
            ],
            "goals_rituals": [
                156
            ],
            "hero": [
                208
            ],
            "id": [
                342
            ],
            "is_favorite": [
                1
            ],
            "owner_id": [
                342
            ],
            "parent_goal_id": [
                342
            ],
            "privacy": [
                253
            ],
            "privacy_enum": [
                250
            ],
            "slogan": [
                6
            ],
            "status": [
                101
            ],
            "title": [
                6
            ],
            "updated_at": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "goals_constraint": {},
        "goals_insert_input": {
            "child_goals": [
                117
            ],
            "created_at": [
                339
            ],
            "deleted_at": [
                339
            ],
            "description": [
                5
            ],
            "difficulty": [
                64
            ],
            "finished_at": [
                339
            ],
            "goal_difficulty_enum": [
                70
            ],
            "goal_ritual": [
                165
            ],
            "goal_status_enum": [
                106
            ],
            "goals_logs": [
                125
            ],
            "goals_rituals": [
                153
            ],
            "hero": [
                215
            ],
            "id": [
                341
            ],
            "is_favorite": [
                0
            ],
            "owner_id": [
                341
            ],
            "parent_goal_id": [
                341
            ],
            "privacy": [
                252
            ],
            "privacy_enum": [
                258
            ],
            "slogan": [
                5
            ],
            "status": [
                100
            ],
            "title": [
                5
            ],
            "updated_at": [
                339
            ],
            "__typename": [
                5
            ]
        },
        "goals_logs": {
            "created_at": [
                339
            ],
            "goal": [
                113
            ],
            "goal_id": [
                341
            ],
            "goal_logs_enum": [
                77
            ],
            "log_description": [
                82
            ],
            "log_id": [
                341
            ],
            "__typename": [
                5
            ]
        },
        "goals_logs_aggregate": {
            "aggregate": [
                123
            ],
            "nodes": [
                121
            ],
            "__typename": [
                5
            ]
        },
        "goals_logs_aggregate_fields": {
            "count": [
                3,
                {
                    "columns": [
                        137,
                        "[goals_logs_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                129
            ],
            "min": [
                131
            ],
            "__typename": [
                5
            ]
        },
        "goals_logs_aggregate_order_by": {
            "count": [
                246
            ],
            "max": [
                130
            ],
            "min": [
                132
            ],
            "__typename": [
                5
            ]
        },
        "goals_logs_arr_rel_insert_input": {
            "data": [
                128
            ],
            "on_conflict": [
                134
            ],
            "__typename": [
                5
            ]
        },
        "goals_logs_bool_exp": {
            "_and": [
                126
            ],
            "_not": [
                126
            ],
            "_or": [
                126
            ],
            "created_at": [
                340
            ],
            "goal": [
                118
            ],
            "goal_id": [
                342
            ],
            "goal_logs_enum": [
                80
            ],
            "log_description": [
                83
            ],
            "log_id": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "goals_logs_constraint": {},
        "goals_logs_insert_input": {
            "created_at": [
                339
            ],
            "goal": [
                145
            ],
            "goal_id": [
                341
            ],
            "goal_logs_enum": [
                88
            ],
            "log_description": [
                82
            ],
            "log_id": [
                341
            ],
            "__typename": [
                5
            ]
        },
        "goals_logs_max_fields": {
            "created_at": [
                339
            ],
            "goal_id": [
                341
            ],
            "log_id": [
                341
            ],
            "__typename": [
                5
            ]
        },
        "goals_logs_max_order_by": {
            "created_at": [
                246
            ],
            "goal_id": [
                246
            ],
            "log_id": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "goals_logs_min_fields": {
            "created_at": [
                339
            ],
            "goal_id": [
                341
            ],
            "log_id": [
                341
            ],
            "__typename": [
                5
            ]
        },
        "goals_logs_min_order_by": {
            "created_at": [
                246
            ],
            "goal_id": [
                246
            ],
            "log_id": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "goals_logs_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                121
            ],
            "__typename": [
                5
            ]
        },
        "goals_logs_on_conflict": {
            "constraint": [
                127
            ],
            "update_columns": [
                139
            ],
            "where": [
                126
            ],
            "__typename": [
                5
            ]
        },
        "goals_logs_order_by": {
            "created_at": [
                246
            ],
            "goal": [
                147
            ],
            "goal_id": [
                246
            ],
            "goal_logs_enum": [
                90
            ],
            "log_description": [
                246
            ],
            "log_id": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "goals_logs_pk_columns_input": {
            "goal_id": [
                341
            ],
            "log_id": [
                341
            ],
            "__typename": [
                5
            ]
        },
        "goals_logs_select_column": {},
        "goals_logs_set_input": {
            "created_at": [
                339
            ],
            "goal_id": [
                341
            ],
            "log_description": [
                82
            ],
            "log_id": [
                341
            ],
            "__typename": [
                5
            ]
        },
        "goals_logs_update_column": {},
        "goals_max_fields": {
            "created_at": [
                339
            ],
            "deleted_at": [
                339
            ],
            "description": [
                5
            ],
            "finished_at": [
                339
            ],
            "id": [
                341
            ],
            "owner_id": [
                341
            ],
            "parent_goal_id": [
                341
            ],
            "slogan": [
                5
            ],
            "title": [
                5
            ],
            "updated_at": [
                339
            ],
            "__typename": [
                5
            ]
        },
        "goals_max_order_by": {
            "created_at": [
                246
            ],
            "deleted_at": [
                246
            ],
            "description": [
                246
            ],
            "finished_at": [
                246
            ],
            "id": [
                246
            ],
            "owner_id": [
                246
            ],
            "parent_goal_id": [
                246
            ],
            "slogan": [
                246
            ],
            "title": [
                246
            ],
            "updated_at": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "goals_min_fields": {
            "created_at": [
                339
            ],
            "deleted_at": [
                339
            ],
            "description": [
                5
            ],
            "finished_at": [
                339
            ],
            "id": [
                341
            ],
            "owner_id": [
                341
            ],
            "parent_goal_id": [
                341
            ],
            "slogan": [
                5
            ],
            "title": [
                5
            ],
            "updated_at": [
                339
            ],
            "__typename": [
                5
            ]
        },
        "goals_min_order_by": {
            "created_at": [
                246
            ],
            "deleted_at": [
                246
            ],
            "description": [
                246
            ],
            "finished_at": [
                246
            ],
            "id": [
                246
            ],
            "owner_id": [
                246
            ],
            "parent_goal_id": [
                246
            ],
            "slogan": [
                246
            ],
            "title": [
                246
            ],
            "updated_at": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "goals_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                113
            ],
            "__typename": [
                5
            ]
        },
        "goals_obj_rel_insert_input": {
            "data": [
                120
            ],
            "on_conflict": [
                146
            ],
            "__typename": [
                5
            ]
        },
        "goals_on_conflict": {
            "constraint": [
                119
            ],
            "update_columns": [
                203
            ],
            "where": [
                118
            ],
            "__typename": [
                5
            ]
        },
        "goals_order_by": {
            "child_goals_aggregate": [
                116
            ],
            "created_at": [
                246
            ],
            "deleted_at": [
                246
            ],
            "description": [
                246
            ],
            "difficulty": [
                246
            ],
            "finished_at": [
                246
            ],
            "goal_difficulty_enum": [
                72
            ],
            "goal_ritual": [
                167
            ],
            "goal_status_enum": [
                108
            ],
            "goals_logs_aggregate": [
                124
            ],
            "goals_rituals_aggregate": [
                152
            ],
            "hero": [
                217
            ],
            "id": [
                246
            ],
            "is_favorite": [
                246
            ],
            "owner_id": [
                246
            ],
            "parent_goal_id": [
                246
            ],
            "privacy": [
                246
            ],
            "privacy_enum": [
                260
            ],
            "slogan": [
                246
            ],
            "status": [
                246
            ],
            "title": [
                246
            ],
            "updated_at": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "goals_pk_columns_input": {
            "id": [
                341
            ],
            "__typename": [
                5
            ]
        },
        "goals_rituals": {
            "created_at": [
                339
            ],
            "goal": [
                113
            ],
            "goal_id": [
                341
            ],
            "ritual_id": [
                341
            ],
            "ritual_interval": [
                3
            ],
            "ritual_power": [
                3
            ],
            "ritual_type": [
                285
            ],
            "ritual_type_enum": [
                280
            ],
            "__typename": [
                5
            ]
        },
        "goals_rituals_aggregate": {
            "aggregate": [
                151
            ],
            "nodes": [
                149
            ],
            "__typename": [
                5
            ]
        },
        "goals_rituals_aggregate_fields": {
            "avg": [
                154
            ],
            "count": [
                3,
                {
                    "columns": [
                        169,
                        "[goals_rituals_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                160
            ],
            "min": [
                162
            ],
            "stddev": [
                171
            ],
            "stddev_pop": [
                173
            ],
            "stddev_samp": [
                175
            ],
            "sum": [
                177
            ],
            "var_pop": [
                180
            ],
            "var_samp": [
                182
            ],
            "variance": [
                184
            ],
            "__typename": [
                5
            ]
        },
        "goals_rituals_aggregate_order_by": {
            "avg": [
                155
            ],
            "count": [
                246
            ],
            "max": [
                161
            ],
            "min": [
                163
            ],
            "stddev": [
                172
            ],
            "stddev_pop": [
                174
            ],
            "stddev_samp": [
                176
            ],
            "sum": [
                178
            ],
            "var_pop": [
                181
            ],
            "var_samp": [
                183
            ],
            "variance": [
                185
            ],
            "__typename": [
                5
            ]
        },
        "goals_rituals_arr_rel_insert_input": {
            "data": [
                159
            ],
            "on_conflict": [
                166
            ],
            "__typename": [
                5
            ]
        },
        "goals_rituals_avg_fields": {
            "ritual_interval": [
                2
            ],
            "ritual_power": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "goals_rituals_avg_order_by": {
            "ritual_interval": [
                246
            ],
            "ritual_power": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "goals_rituals_bool_exp": {
            "_and": [
                156
            ],
            "_not": [
                156
            ],
            "_or": [
                156
            ],
            "created_at": [
                340
            ],
            "goal": [
                118
            ],
            "goal_id": [
                342
            ],
            "ritual_id": [
                342
            ],
            "ritual_interval": [
                4
            ],
            "ritual_power": [
                4
            ],
            "ritual_type": [
                286
            ],
            "ritual_type_enum": [
                283
            ],
            "__typename": [
                5
            ]
        },
        "goals_rituals_constraint": {},
        "goals_rituals_inc_input": {
            "ritual_interval": [
                3
            ],
            "ritual_power": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "goals_rituals_insert_input": {
            "created_at": [
                339
            ],
            "goal": [
                145
            ],
            "goal_id": [
                341
            ],
            "ritual_id": [
                341
            ],
            "ritual_interval": [
                3
            ],
            "ritual_power": [
                3
            ],
            "ritual_type": [
                285
            ],
            "ritual_type_enum": [
                291
            ],
            "__typename": [
                5
            ]
        },
        "goals_rituals_max_fields": {
            "created_at": [
                339
            ],
            "goal_id": [
                341
            ],
            "ritual_id": [
                341
            ],
            "ritual_interval": [
                3
            ],
            "ritual_power": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "goals_rituals_max_order_by": {
            "created_at": [
                246
            ],
            "goal_id": [
                246
            ],
            "ritual_id": [
                246
            ],
            "ritual_interval": [
                246
            ],
            "ritual_power": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "goals_rituals_min_fields": {
            "created_at": [
                339
            ],
            "goal_id": [
                341
            ],
            "ritual_id": [
                341
            ],
            "ritual_interval": [
                3
            ],
            "ritual_power": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "goals_rituals_min_order_by": {
            "created_at": [
                246
            ],
            "goal_id": [
                246
            ],
            "ritual_id": [
                246
            ],
            "ritual_interval": [
                246
            ],
            "ritual_power": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "goals_rituals_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                149
            ],
            "__typename": [
                5
            ]
        },
        "goals_rituals_obj_rel_insert_input": {
            "data": [
                159
            ],
            "on_conflict": [
                166
            ],
            "__typename": [
                5
            ]
        },
        "goals_rituals_on_conflict": {
            "constraint": [
                157
            ],
            "update_columns": [
                179
            ],
            "where": [
                156
            ],
            "__typename": [
                5
            ]
        },
        "goals_rituals_order_by": {
            "created_at": [
                246
            ],
            "goal": [
                147
            ],
            "goal_id": [
                246
            ],
            "ritual_id": [
                246
            ],
            "ritual_interval": [
                246
            ],
            "ritual_power": [
                246
            ],
            "ritual_type": [
                246
            ],
            "ritual_type_enum": [
                293
            ],
            "__typename": [
                5
            ]
        },
        "goals_rituals_pk_columns_input": {
            "goal_id": [
                341
            ],
            "ritual_id": [
                341
            ],
            "__typename": [
                5
            ]
        },
        "goals_rituals_select_column": {},
        "goals_rituals_set_input": {
            "created_at": [
                339
            ],
            "goal_id": [
                341
            ],
            "ritual_id": [
                341
            ],
            "ritual_interval": [
                3
            ],
            "ritual_power": [
                3
            ],
            "ritual_type": [
                285
            ],
            "__typename": [
                5
            ]
        },
        "goals_rituals_stddev_fields": {
            "ritual_interval": [
                2
            ],
            "ritual_power": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "goals_rituals_stddev_order_by": {
            "ritual_interval": [
                246
            ],
            "ritual_power": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "goals_rituals_stddev_pop_fields": {
            "ritual_interval": [
                2
            ],
            "ritual_power": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "goals_rituals_stddev_pop_order_by": {
            "ritual_interval": [
                246
            ],
            "ritual_power": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "goals_rituals_stddev_samp_fields": {
            "ritual_interval": [
                2
            ],
            "ritual_power": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "goals_rituals_stddev_samp_order_by": {
            "ritual_interval": [
                246
            ],
            "ritual_power": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "goals_rituals_sum_fields": {
            "ritual_interval": [
                3
            ],
            "ritual_power": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "goals_rituals_sum_order_by": {
            "ritual_interval": [
                246
            ],
            "ritual_power": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "goals_rituals_update_column": {},
        "goals_rituals_var_pop_fields": {
            "ritual_interval": [
                2
            ],
            "ritual_power": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "goals_rituals_var_pop_order_by": {
            "ritual_interval": [
                246
            ],
            "ritual_power": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "goals_rituals_var_samp_fields": {
            "ritual_interval": [
                2
            ],
            "ritual_power": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "goals_rituals_var_samp_order_by": {
            "ritual_interval": [
                246
            ],
            "ritual_power": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "goals_rituals_variance_fields": {
            "ritual_interval": [
                2
            ],
            "ritual_power": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "goals_rituals_variance_order_by": {
            "ritual_interval": [
                246
            ],
            "ritual_power": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "goals_select_column": {},
        "goals_set_input": {
            "created_at": [
                339
            ],
            "deleted_at": [
                339
            ],
            "description": [
                5
            ],
            "difficulty": [
                64
            ],
            "finished_at": [
                339
            ],
            "id": [
                341
            ],
            "is_favorite": [
                0
            ],
            "owner_id": [
                341
            ],
            "parent_goal_id": [
                341
            ],
            "privacy": [
                252
            ],
            "slogan": [
                5
            ],
            "status": [
                100
            ],
            "title": [
                5
            ],
            "updated_at": [
                339
            ],
            "__typename": [
                5
            ]
        },
        "goals_slides": {
            "active": [
                0
            ],
            "created_at": [
                339
            ],
            "deleted_at": [
                339
            ],
            "id": [
                341
            ],
            "img_path": [
                5
            ],
            "owner_id": [
                341
            ],
            "title": [
                5
            ],
            "updated_at": [
                339
            ],
            "__typename": [
                5
            ]
        },
        "goals_slides_aggregate": {
            "aggregate": [
                190
            ],
            "nodes": [
                188
            ],
            "__typename": [
                5
            ]
        },
        "goals_slides_aggregate_fields": {
            "count": [
                3,
                {
                    "columns": [
                        200,
                        "[goals_slides_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                194
            ],
            "min": [
                195
            ],
            "__typename": [
                5
            ]
        },
        "goals_slides_bool_exp": {
            "_and": [
                191
            ],
            "_not": [
                191
            ],
            "_or": [
                191
            ],
            "active": [
                1
            ],
            "created_at": [
                340
            ],
            "deleted_at": [
                340
            ],
            "id": [
                342
            ],
            "img_path": [
                6
            ],
            "owner_id": [
                342
            ],
            "title": [
                6
            ],
            "updated_at": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "goals_slides_constraint": {},
        "goals_slides_insert_input": {
            "active": [
                0
            ],
            "created_at": [
                339
            ],
            "deleted_at": [
                339
            ],
            "id": [
                341
            ],
            "img_path": [
                5
            ],
            "owner_id": [
                341
            ],
            "title": [
                5
            ],
            "updated_at": [
                339
            ],
            "__typename": [
                5
            ]
        },
        "goals_slides_max_fields": {
            "created_at": [
                339
            ],
            "deleted_at": [
                339
            ],
            "id": [
                341
            ],
            "img_path": [
                5
            ],
            "owner_id": [
                341
            ],
            "title": [
                5
            ],
            "updated_at": [
                339
            ],
            "__typename": [
                5
            ]
        },
        "goals_slides_min_fields": {
            "created_at": [
                339
            ],
            "deleted_at": [
                339
            ],
            "id": [
                341
            ],
            "img_path": [
                5
            ],
            "owner_id": [
                341
            ],
            "title": [
                5
            ],
            "updated_at": [
                339
            ],
            "__typename": [
                5
            ]
        },
        "goals_slides_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                188
            ],
            "__typename": [
                5
            ]
        },
        "goals_slides_on_conflict": {
            "constraint": [
                192
            ],
            "update_columns": [
                202
            ],
            "where": [
                191
            ],
            "__typename": [
                5
            ]
        },
        "goals_slides_order_by": {
            "active": [
                246
            ],
            "created_at": [
                246
            ],
            "deleted_at": [
                246
            ],
            "id": [
                246
            ],
            "img_path": [
                246
            ],
            "owner_id": [
                246
            ],
            "title": [
                246
            ],
            "updated_at": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "goals_slides_pk_columns_input": {
            "id": [
                341
            ],
            "__typename": [
                5
            ]
        },
        "goals_slides_select_column": {},
        "goals_slides_set_input": {
            "active": [
                0
            ],
            "created_at": [
                339
            ],
            "deleted_at": [
                339
            ],
            "id": [
                341
            ],
            "img_path": [
                5
            ],
            "owner_id": [
                341
            ],
            "title": [
                5
            ],
            "updated_at": [
                339
            ],
            "__typename": [
                5
            ]
        },
        "goals_slides_update_column": {},
        "goals_update_column": {},
        "heroes": {
            "addons": [
                22,
                {
                    "distinct_on": [
                        56,
                        "[addons_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        54,
                        "[addons_order_by!]"
                    ],
                    "where": [
                        27
                    ]
                }
            ],
            "addons_aggregate": [
                23,
                {
                    "distinct_on": [
                        56,
                        "[addons_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        54,
                        "[addons_order_by!]"
                    ],
                    "where": [
                        27
                    ]
                }
            ],
            "avatar": [
                5
            ],
            "birthday": [
                339
            ],
            "coins": [
                3
            ],
            "created_at": [
                339
            ],
            "deleted_at": [
                339
            ],
            "email": [
                5
            ],
            "goals": [
                113,
                {
                    "distinct_on": [
                        186,
                        "[goals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        147,
                        "[goals_order_by!]"
                    ],
                    "where": [
                        118
                    ]
                }
            ],
            "goals_aggregate": [
                114,
                {
                    "distinct_on": [
                        186,
                        "[goals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        147,
                        "[goals_order_by!]"
                    ],
                    "where": [
                        118
                    ]
                }
            ],
            "id": [
                341
            ],
            "name": [
                5
            ],
            "password": [
                5
            ],
            "phone": [
                5
            ],
            "updated_at": [
                339
            ],
            "__typename": [
                5
            ]
        },
        "heroes_aggregate": {
            "aggregate": [
                206
            ],
            "nodes": [
                204
            ],
            "__typename": [
                5
            ]
        },
        "heroes_aggregate_fields": {
            "avg": [
                207
            ],
            "count": [
                3,
                {
                    "columns": [
                        219,
                        "[heroes_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                212
            ],
            "min": [
                213
            ],
            "stddev": [
                221
            ],
            "stddev_pop": [
                222
            ],
            "stddev_samp": [
                223
            ],
            "sum": [
                224
            ],
            "var_pop": [
                226
            ],
            "var_samp": [
                227
            ],
            "variance": [
                228
            ],
            "__typename": [
                5
            ]
        },
        "heroes_avg_fields": {
            "coins": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "heroes_bool_exp": {
            "_and": [
                208
            ],
            "_not": [
                208
            ],
            "_or": [
                208
            ],
            "addons": [
                27
            ],
            "avatar": [
                6
            ],
            "birthday": [
                340
            ],
            "coins": [
                4
            ],
            "created_at": [
                340
            ],
            "deleted_at": [
                340
            ],
            "email": [
                6
            ],
            "goals": [
                118
            ],
            "id": [
                342
            ],
            "name": [
                6
            ],
            "password": [
                6
            ],
            "phone": [
                6
            ],
            "updated_at": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "heroes_constraint": {},
        "heroes_inc_input": {
            "coins": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "heroes_insert_input": {
            "addons": [
                26
            ],
            "avatar": [
                5
            ],
            "birthday": [
                339
            ],
            "coins": [
                3
            ],
            "created_at": [
                339
            ],
            "deleted_at": [
                339
            ],
            "email": [
                5
            ],
            "goals": [
                117
            ],
            "id": [
                341
            ],
            "name": [
                5
            ],
            "password": [
                5
            ],
            "phone": [
                5
            ],
            "updated_at": [
                339
            ],
            "__typename": [
                5
            ]
        },
        "heroes_max_fields": {
            "avatar": [
                5
            ],
            "birthday": [
                339
            ],
            "coins": [
                3
            ],
            "created_at": [
                339
            ],
            "deleted_at": [
                339
            ],
            "email": [
                5
            ],
            "id": [
                341
            ],
            "name": [
                5
            ],
            "password": [
                5
            ],
            "phone": [
                5
            ],
            "updated_at": [
                339
            ],
            "__typename": [
                5
            ]
        },
        "heroes_min_fields": {
            "avatar": [
                5
            ],
            "birthday": [
                339
            ],
            "coins": [
                3
            ],
            "created_at": [
                339
            ],
            "deleted_at": [
                339
            ],
            "email": [
                5
            ],
            "id": [
                341
            ],
            "name": [
                5
            ],
            "password": [
                5
            ],
            "phone": [
                5
            ],
            "updated_at": [
                339
            ],
            "__typename": [
                5
            ]
        },
        "heroes_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                204
            ],
            "__typename": [
                5
            ]
        },
        "heroes_obj_rel_insert_input": {
            "data": [
                211
            ],
            "on_conflict": [
                216
            ],
            "__typename": [
                5
            ]
        },
        "heroes_on_conflict": {
            "constraint": [
                209
            ],
            "update_columns": [
                225
            ],
            "where": [
                208
            ],
            "__typename": [
                5
            ]
        },
        "heroes_order_by": {
            "addons_aggregate": [
                25
            ],
            "avatar": [
                246
            ],
            "birthday": [
                246
            ],
            "coins": [
                246
            ],
            "created_at": [
                246
            ],
            "deleted_at": [
                246
            ],
            "email": [
                246
            ],
            "goals_aggregate": [
                116
            ],
            "id": [
                246
            ],
            "name": [
                246
            ],
            "password": [
                246
            ],
            "phone": [
                246
            ],
            "updated_at": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "heroes_pk_columns_input": {
            "id": [
                341
            ],
            "__typename": [
                5
            ]
        },
        "heroes_select_column": {},
        "heroes_set_input": {
            "avatar": [
                5
            ],
            "birthday": [
                339
            ],
            "coins": [
                3
            ],
            "created_at": [
                339
            ],
            "deleted_at": [
                339
            ],
            "email": [
                5
            ],
            "id": [
                341
            ],
            "name": [
                5
            ],
            "password": [
                5
            ],
            "phone": [
                5
            ],
            "updated_at": [
                339
            ],
            "__typename": [
                5
            ]
        },
        "heroes_stddev_fields": {
            "coins": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "heroes_stddev_pop_fields": {
            "coins": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "heroes_stddev_samp_fields": {
            "coins": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "heroes_sum_fields": {
            "coins": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "heroes_update_column": {},
        "heroes_var_pop_fields": {
            "coins": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "heroes_var_samp_fields": {
            "coins": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "heroes_variance_fields": {
            "coins": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "jsonb": {},
        "jsonb_comparison_exp": {
            "_contained_in": [
                229
            ],
            "_contains": [
                229
            ],
            "_eq": [
                229
            ],
            "_gt": [
                229
            ],
            "_gte": [
                229
            ],
            "_has_key": [
                5
            ],
            "_has_keys_all": [
                5
            ],
            "_has_keys_any": [
                5
            ],
            "_in": [
                229
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                229
            ],
            "_lte": [
                229
            ],
            "_neq": [
                229
            ],
            "_nin": [
                229
            ],
            "__typename": [
                5
            ]
        },
        "notes": {
            "archived": [
                0
            ],
            "created_at": [
                339
            ],
            "deleted_at": [
                339
            ],
            "description": [
                5
            ],
            "id": [
                341
            ],
            "owner_id": [
                341
            ],
            "tag": [
                5
            ],
            "updated_at": [
                339
            ],
            "__typename": [
                5
            ]
        },
        "notes_aggregate": {
            "aggregate": [
                233
            ],
            "nodes": [
                231
            ],
            "__typename": [
                5
            ]
        },
        "notes_aggregate_fields": {
            "count": [
                3,
                {
                    "columns": [
                        243,
                        "[notes_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                237
            ],
            "min": [
                238
            ],
            "__typename": [
                5
            ]
        },
        "notes_bool_exp": {
            "_and": [
                234
            ],
            "_not": [
                234
            ],
            "_or": [
                234
            ],
            "archived": [
                1
            ],
            "created_at": [
                340
            ],
            "deleted_at": [
                340
            ],
            "description": [
                6
            ],
            "id": [
                342
            ],
            "owner_id": [
                342
            ],
            "tag": [
                6
            ],
            "updated_at": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "notes_constraint": {},
        "notes_insert_input": {
            "archived": [
                0
            ],
            "created_at": [
                339
            ],
            "deleted_at": [
                339
            ],
            "description": [
                5
            ],
            "id": [
                341
            ],
            "owner_id": [
                341
            ],
            "tag": [
                5
            ],
            "updated_at": [
                339
            ],
            "__typename": [
                5
            ]
        },
        "notes_max_fields": {
            "created_at": [
                339
            ],
            "deleted_at": [
                339
            ],
            "description": [
                5
            ],
            "id": [
                341
            ],
            "owner_id": [
                341
            ],
            "tag": [
                5
            ],
            "updated_at": [
                339
            ],
            "__typename": [
                5
            ]
        },
        "notes_min_fields": {
            "created_at": [
                339
            ],
            "deleted_at": [
                339
            ],
            "description": [
                5
            ],
            "id": [
                341
            ],
            "owner_id": [
                341
            ],
            "tag": [
                5
            ],
            "updated_at": [
                339
            ],
            "__typename": [
                5
            ]
        },
        "notes_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                231
            ],
            "__typename": [
                5
            ]
        },
        "notes_on_conflict": {
            "constraint": [
                235
            ],
            "update_columns": [
                245
            ],
            "where": [
                234
            ],
            "__typename": [
                5
            ]
        },
        "notes_order_by": {
            "archived": [
                246
            ],
            "created_at": [
                246
            ],
            "deleted_at": [
                246
            ],
            "description": [
                246
            ],
            "id": [
                246
            ],
            "owner_id": [
                246
            ],
            "tag": [
                246
            ],
            "updated_at": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "notes_pk_columns_input": {
            "id": [
                341
            ],
            "__typename": [
                5
            ]
        },
        "notes_select_column": {},
        "notes_set_input": {
            "archived": [
                0
            ],
            "created_at": [
                339
            ],
            "deleted_at": [
                339
            ],
            "description": [
                5
            ],
            "id": [
                341
            ],
            "owner_id": [
                341
            ],
            "tag": [
                5
            ],
            "updated_at": [
                339
            ],
            "__typename": [
                5
            ]
        },
        "notes_update_column": {},
        "order_by": {},
        "privacy_enum": {
            "description": [
                5
            ],
            "goals": [
                113,
                {
                    "distinct_on": [
                        186,
                        "[goals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        147,
                        "[goals_order_by!]"
                    ],
                    "where": [
                        118
                    ]
                }
            ],
            "goals_aggregate": [
                114,
                {
                    "distinct_on": [
                        186,
                        "[goals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        147,
                        "[goals_order_by!]"
                    ],
                    "where": [
                        118
                    ]
                }
            ],
            "privacy": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "privacy_enum_aggregate": {
            "aggregate": [
                249
            ],
            "nodes": [
                247
            ],
            "__typename": [
                5
            ]
        },
        "privacy_enum_aggregate_fields": {
            "count": [
                3,
                {
                    "columns": [
                        262,
                        "[privacy_enum_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                255
            ],
            "min": [
                256
            ],
            "__typename": [
                5
            ]
        },
        "privacy_enum_bool_exp": {
            "_and": [
                250
            ],
            "_not": [
                250
            ],
            "_or": [
                250
            ],
            "description": [
                6
            ],
            "goals": [
                118
            ],
            "privacy": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "privacy_enum_constraint": {},
        "privacy_enum_enum": {},
        "privacy_enum_enum_comparison_exp": {
            "_eq": [
                252
            ],
            "_in": [
                252
            ],
            "_is_null": [
                0
            ],
            "_neq": [
                252
            ],
            "_nin": [
                252
            ],
            "__typename": [
                5
            ]
        },
        "privacy_enum_insert_input": {
            "description": [
                5
            ],
            "goals": [
                117
            ],
            "privacy": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "privacy_enum_max_fields": {
            "description": [
                5
            ],
            "privacy": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "privacy_enum_min_fields": {
            "description": [
                5
            ],
            "privacy": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "privacy_enum_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                247
            ],
            "__typename": [
                5
            ]
        },
        "privacy_enum_obj_rel_insert_input": {
            "data": [
                254
            ],
            "on_conflict": [
                259
            ],
            "__typename": [
                5
            ]
        },
        "privacy_enum_on_conflict": {
            "constraint": [
                251
            ],
            "update_columns": [
                264
            ],
            "where": [
                250
            ],
            "__typename": [
                5
            ]
        },
        "privacy_enum_order_by": {
            "description": [
                246
            ],
            "goals_aggregate": [
                116
            ],
            "privacy": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "privacy_enum_pk_columns_input": {
            "privacy": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "privacy_enum_select_column": {},
        "privacy_enum_set_input": {
            "description": [
                5
            ],
            "privacy": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "privacy_enum_update_column": {},
        "restore_codes": {
            "email": [
                5
            ],
            "id": [
                341
            ],
            "__typename": [
                5
            ]
        },
        "restore_codes_aggregate": {
            "aggregate": [
                267
            ],
            "nodes": [
                265
            ],
            "__typename": [
                5
            ]
        },
        "restore_codes_aggregate_fields": {
            "count": [
                3,
                {
                    "columns": [
                        277,
                        "[restore_codes_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                271
            ],
            "min": [
                272
            ],
            "__typename": [
                5
            ]
        },
        "restore_codes_bool_exp": {
            "_and": [
                268
            ],
            "_not": [
                268
            ],
            "_or": [
                268
            ],
            "email": [
                6
            ],
            "id": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "restore_codes_constraint": {},
        "restore_codes_insert_input": {
            "email": [
                5
            ],
            "id": [
                341
            ],
            "__typename": [
                5
            ]
        },
        "restore_codes_max_fields": {
            "email": [
                5
            ],
            "id": [
                341
            ],
            "__typename": [
                5
            ]
        },
        "restore_codes_min_fields": {
            "email": [
                5
            ],
            "id": [
                341
            ],
            "__typename": [
                5
            ]
        },
        "restore_codes_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                265
            ],
            "__typename": [
                5
            ]
        },
        "restore_codes_on_conflict": {
            "constraint": [
                269
            ],
            "update_columns": [
                279
            ],
            "where": [
                268
            ],
            "__typename": [
                5
            ]
        },
        "restore_codes_order_by": {
            "email": [
                246
            ],
            "id": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "restore_codes_pk_columns_input": {
            "id": [
                341
            ],
            "__typename": [
                5
            ]
        },
        "restore_codes_select_column": {},
        "restore_codes_set_input": {
            "email": [
                5
            ],
            "id": [
                341
            ],
            "__typename": [
                5
            ]
        },
        "restore_codes_update_column": {},
        "ritual_type_enum": {
            "description": [
                5
            ],
            "goals_rituals": [
                149,
                {
                    "distinct_on": [
                        169,
                        "[goals_rituals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        167,
                        "[goals_rituals_order_by!]"
                    ],
                    "where": [
                        156
                    ]
                }
            ],
            "goals_rituals_aggregate": [
                150,
                {
                    "distinct_on": [
                        169,
                        "[goals_rituals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        167,
                        "[goals_rituals_order_by!]"
                    ],
                    "where": [
                        156
                    ]
                }
            ],
            "ritual_type": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "ritual_type_enum_aggregate": {
            "aggregate": [
                282
            ],
            "nodes": [
                280
            ],
            "__typename": [
                5
            ]
        },
        "ritual_type_enum_aggregate_fields": {
            "count": [
                3,
                {
                    "columns": [
                        295,
                        "[ritual_type_enum_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                288
            ],
            "min": [
                289
            ],
            "__typename": [
                5
            ]
        },
        "ritual_type_enum_bool_exp": {
            "_and": [
                283
            ],
            "_not": [
                283
            ],
            "_or": [
                283
            ],
            "description": [
                6
            ],
            "goals_rituals": [
                156
            ],
            "ritual_type": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "ritual_type_enum_constraint": {},
        "ritual_type_enum_enum": {},
        "ritual_type_enum_enum_comparison_exp": {
            "_eq": [
                285
            ],
            "_in": [
                285
            ],
            "_is_null": [
                0
            ],
            "_neq": [
                285
            ],
            "_nin": [
                285
            ],
            "__typename": [
                5
            ]
        },
        "ritual_type_enum_insert_input": {
            "description": [
                5
            ],
            "goals_rituals": [
                153
            ],
            "ritual_type": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "ritual_type_enum_max_fields": {
            "description": [
                5
            ],
            "ritual_type": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "ritual_type_enum_min_fields": {
            "description": [
                5
            ],
            "ritual_type": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "ritual_type_enum_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                280
            ],
            "__typename": [
                5
            ]
        },
        "ritual_type_enum_obj_rel_insert_input": {
            "data": [
                287
            ],
            "on_conflict": [
                292
            ],
            "__typename": [
                5
            ]
        },
        "ritual_type_enum_on_conflict": {
            "constraint": [
                284
            ],
            "update_columns": [
                297
            ],
            "where": [
                283
            ],
            "__typename": [
                5
            ]
        },
        "ritual_type_enum_order_by": {
            "description": [
                246
            ],
            "goals_rituals_aggregate": [
                152
            ],
            "ritual_type": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "ritual_type_enum_pk_columns_input": {
            "ritual_type": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "ritual_type_enum_select_column": {},
        "ritual_type_enum_set_input": {
            "description": [
                5
            ],
            "ritual_type": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "ritual_type_enum_update_column": {},
        "sprints": {
            "achievement": [
                5
            ],
            "cached": [
                0
            ],
            "child_sprints": [
                298,
                {
                    "distinct_on": [
                        322,
                        "[sprints_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        319,
                        "[sprints_order_by!]"
                    ],
                    "where": [
                        306
                    ]
                }
            ],
            "child_sprints_aggregate": [
                299,
                {
                    "distinct_on": [
                        322,
                        "[sprints_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        319,
                        "[sprints_order_by!]"
                    ],
                    "where": [
                        306
                    ]
                }
            ],
            "created_at": [
                339
            ],
            "deleted_at": [
                339
            ],
            "description": [
                5
            ],
            "duration": [
                3
            ],
            "finished_at": [
                339
            ],
            "id": [
                341
            ],
            "img_path": [
                5
            ],
            "owner_id": [
                341
            ],
            "parent_sprint_id": [
                341
            ],
            "sprint_days": [
                229,
                {
                    "path": [
                        5
                    ]
                }
            ],
            "sprint_goals": [
                5
            ],
            "started_at": [
                339
            ],
            "title": [
                5
            ],
            "updated_at": [
                339
            ],
            "__typename": [
                5
            ]
        },
        "sprints_aggregate": {
            "aggregate": [
                300
            ],
            "nodes": [
                298
            ],
            "__typename": [
                5
            ]
        },
        "sprints_aggregate_fields": {
            "avg": [
                304
            ],
            "count": [
                3,
                {
                    "columns": [
                        322,
                        "[sprints_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                313
            ],
            "min": [
                315
            ],
            "stddev": [
                324
            ],
            "stddev_pop": [
                326
            ],
            "stddev_samp": [
                328
            ],
            "sum": [
                330
            ],
            "var_pop": [
                333
            ],
            "var_samp": [
                335
            ],
            "variance": [
                337
            ],
            "__typename": [
                5
            ]
        },
        "sprints_aggregate_order_by": {
            "avg": [
                305
            ],
            "count": [
                246
            ],
            "max": [
                314
            ],
            "min": [
                316
            ],
            "stddev": [
                325
            ],
            "stddev_pop": [
                327
            ],
            "stddev_samp": [
                329
            ],
            "sum": [
                331
            ],
            "var_pop": [
                334
            ],
            "var_samp": [
                336
            ],
            "variance": [
                338
            ],
            "__typename": [
                5
            ]
        },
        "sprints_append_input": {
            "sprint_days": [
                229
            ],
            "__typename": [
                5
            ]
        },
        "sprints_arr_rel_insert_input": {
            "data": [
                312
            ],
            "on_conflict": [
                318
            ],
            "__typename": [
                5
            ]
        },
        "sprints_avg_fields": {
            "duration": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "sprints_avg_order_by": {
            "duration": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "sprints_bool_exp": {
            "_and": [
                306
            ],
            "_not": [
                306
            ],
            "_or": [
                306
            ],
            "achievement": [
                6
            ],
            "cached": [
                1
            ],
            "child_sprints": [
                306
            ],
            "created_at": [
                340
            ],
            "deleted_at": [
                340
            ],
            "description": [
                6
            ],
            "duration": [
                4
            ],
            "finished_at": [
                340
            ],
            "id": [
                342
            ],
            "img_path": [
                6
            ],
            "owner_id": [
                342
            ],
            "parent_sprint_id": [
                342
            ],
            "sprint_days": [
                230
            ],
            "sprint_goals": [
                6
            ],
            "started_at": [
                340
            ],
            "title": [
                6
            ],
            "updated_at": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "sprints_constraint": {},
        "sprints_delete_at_path_input": {
            "sprint_days": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "sprints_delete_elem_input": {
            "sprint_days": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "sprints_delete_key_input": {
            "sprint_days": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "sprints_inc_input": {
            "duration": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "sprints_insert_input": {
            "achievement": [
                5
            ],
            "cached": [
                0
            ],
            "child_sprints": [
                303
            ],
            "created_at": [
                339
            ],
            "deleted_at": [
                339
            ],
            "description": [
                5
            ],
            "duration": [
                3
            ],
            "finished_at": [
                339
            ],
            "id": [
                341
            ],
            "img_path": [
                5
            ],
            "owner_id": [
                341
            ],
            "parent_sprint_id": [
                341
            ],
            "sprint_days": [
                229
            ],
            "sprint_goals": [
                5
            ],
            "started_at": [
                339
            ],
            "title": [
                5
            ],
            "updated_at": [
                339
            ],
            "__typename": [
                5
            ]
        },
        "sprints_max_fields": {
            "achievement": [
                5
            ],
            "created_at": [
                339
            ],
            "deleted_at": [
                339
            ],
            "description": [
                5
            ],
            "duration": [
                3
            ],
            "finished_at": [
                339
            ],
            "id": [
                341
            ],
            "img_path": [
                5
            ],
            "owner_id": [
                341
            ],
            "parent_sprint_id": [
                341
            ],
            "sprint_goals": [
                5
            ],
            "started_at": [
                339
            ],
            "title": [
                5
            ],
            "updated_at": [
                339
            ],
            "__typename": [
                5
            ]
        },
        "sprints_max_order_by": {
            "achievement": [
                246
            ],
            "created_at": [
                246
            ],
            "deleted_at": [
                246
            ],
            "description": [
                246
            ],
            "duration": [
                246
            ],
            "finished_at": [
                246
            ],
            "id": [
                246
            ],
            "img_path": [
                246
            ],
            "owner_id": [
                246
            ],
            "parent_sprint_id": [
                246
            ],
            "sprint_goals": [
                246
            ],
            "started_at": [
                246
            ],
            "title": [
                246
            ],
            "updated_at": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "sprints_min_fields": {
            "achievement": [
                5
            ],
            "created_at": [
                339
            ],
            "deleted_at": [
                339
            ],
            "description": [
                5
            ],
            "duration": [
                3
            ],
            "finished_at": [
                339
            ],
            "id": [
                341
            ],
            "img_path": [
                5
            ],
            "owner_id": [
                341
            ],
            "parent_sprint_id": [
                341
            ],
            "sprint_goals": [
                5
            ],
            "started_at": [
                339
            ],
            "title": [
                5
            ],
            "updated_at": [
                339
            ],
            "__typename": [
                5
            ]
        },
        "sprints_min_order_by": {
            "achievement": [
                246
            ],
            "created_at": [
                246
            ],
            "deleted_at": [
                246
            ],
            "description": [
                246
            ],
            "duration": [
                246
            ],
            "finished_at": [
                246
            ],
            "id": [
                246
            ],
            "img_path": [
                246
            ],
            "owner_id": [
                246
            ],
            "parent_sprint_id": [
                246
            ],
            "sprint_goals": [
                246
            ],
            "started_at": [
                246
            ],
            "title": [
                246
            ],
            "updated_at": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "sprints_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                298
            ],
            "__typename": [
                5
            ]
        },
        "sprints_on_conflict": {
            "constraint": [
                307
            ],
            "update_columns": [
                332
            ],
            "where": [
                306
            ],
            "__typename": [
                5
            ]
        },
        "sprints_order_by": {
            "achievement": [
                246
            ],
            "cached": [
                246
            ],
            "child_sprints_aggregate": [
                301
            ],
            "created_at": [
                246
            ],
            "deleted_at": [
                246
            ],
            "description": [
                246
            ],
            "duration": [
                246
            ],
            "finished_at": [
                246
            ],
            "id": [
                246
            ],
            "img_path": [
                246
            ],
            "owner_id": [
                246
            ],
            "parent_sprint_id": [
                246
            ],
            "sprint_days": [
                246
            ],
            "sprint_goals": [
                246
            ],
            "started_at": [
                246
            ],
            "title": [
                246
            ],
            "updated_at": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "sprints_pk_columns_input": {
            "id": [
                341
            ],
            "__typename": [
                5
            ]
        },
        "sprints_prepend_input": {
            "sprint_days": [
                229
            ],
            "__typename": [
                5
            ]
        },
        "sprints_select_column": {},
        "sprints_set_input": {
            "achievement": [
                5
            ],
            "cached": [
                0
            ],
            "created_at": [
                339
            ],
            "deleted_at": [
                339
            ],
            "description": [
                5
            ],
            "duration": [
                3
            ],
            "finished_at": [
                339
            ],
            "id": [
                341
            ],
            "img_path": [
                5
            ],
            "owner_id": [
                341
            ],
            "parent_sprint_id": [
                341
            ],
            "sprint_days": [
                229
            ],
            "sprint_goals": [
                5
            ],
            "started_at": [
                339
            ],
            "title": [
                5
            ],
            "updated_at": [
                339
            ],
            "__typename": [
                5
            ]
        },
        "sprints_stddev_fields": {
            "duration": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "sprints_stddev_order_by": {
            "duration": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "sprints_stddev_pop_fields": {
            "duration": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "sprints_stddev_pop_order_by": {
            "duration": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "sprints_stddev_samp_fields": {
            "duration": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "sprints_stddev_samp_order_by": {
            "duration": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "sprints_sum_fields": {
            "duration": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "sprints_sum_order_by": {
            "duration": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "sprints_update_column": {},
        "sprints_var_pop_fields": {
            "duration": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "sprints_var_pop_order_by": {
            "duration": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "sprints_var_samp_fields": {
            "duration": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "sprints_var_samp_order_by": {
            "duration": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "sprints_variance_fields": {
            "duration": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "sprints_variance_order_by": {
            "duration": [
                246
            ],
            "__typename": [
                5
            ]
        },
        "timestamptz": {},
        "timestamptz_comparison_exp": {
            "_eq": [
                339
            ],
            "_gt": [
                339
            ],
            "_gte": [
                339
            ],
            "_in": [
                339
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                339
            ],
            "_lte": [
                339
            ],
            "_neq": [
                339
            ],
            "_nin": [
                339
            ],
            "__typename": [
                5
            ]
        },
        "uuid": {},
        "uuid_comparison_exp": {
            "_eq": [
                341
            ],
            "_gt": [
                341
            ],
            "_gte": [
                341
            ],
            "_in": [
                341
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                341
            ],
            "_lte": [
                341
            ],
            "_neq": [
                341
            ],
            "_nin": [
                341
            ],
            "__typename": [
                5
            ]
        },
        "Query": {
            "achievements": [
                7,
                {
                    "distinct_on": [
                        19,
                        "[achievements_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        17,
                        "[achievements_order_by!]"
                    ],
                    "where": [
                        10
                    ]
                }
            ],
            "achievements_aggregate": [
                8,
                {
                    "distinct_on": [
                        19,
                        "[achievements_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        17,
                        "[achievements_order_by!]"
                    ],
                    "where": [
                        10
                    ]
                }
            ],
            "achievements_by_pk": [
                7,
                {
                    "id": [
                        341,
                        "uuid!"
                    ]
                }
            ],
            "addons": [
                22,
                {
                    "distinct_on": [
                        56,
                        "[addons_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        54,
                        "[addons_order_by!]"
                    ],
                    "where": [
                        27
                    ]
                }
            ],
            "addons_aggregate": [
                23,
                {
                    "distinct_on": [
                        56,
                        "[addons_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        54,
                        "[addons_order_by!]"
                    ],
                    "where": [
                        27
                    ]
                }
            ],
            "addons_by_pk": [
                22,
                {
                    "addon": [
                        34,
                        "addons_enum_enum!"
                    ],
                    "owner_id": [
                        341,
                        "uuid!"
                    ]
                }
            ],
            "addons_enum": [
                29,
                {
                    "distinct_on": [
                        44,
                        "[addons_enum_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        42,
                        "[addons_enum_order_by!]"
                    ],
                    "where": [
                        32
                    ]
                }
            ],
            "addons_enum_aggregate": [
                30,
                {
                    "distinct_on": [
                        44,
                        "[addons_enum_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        42,
                        "[addons_enum_order_by!]"
                    ],
                    "where": [
                        32
                    ]
                }
            ],
            "addons_enum_by_pk": [
                29,
                {
                    "addon": [
                        5,
                        "String!"
                    ]
                }
            ],
            "goal_difficulty_enum": [
                59,
                {
                    "distinct_on": [
                        74,
                        "[goal_difficulty_enum_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        72,
                        "[goal_difficulty_enum_order_by!]"
                    ],
                    "where": [
                        62
                    ]
                }
            ],
            "goal_difficulty_enum_aggregate": [
                60,
                {
                    "distinct_on": [
                        74,
                        "[goal_difficulty_enum_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        72,
                        "[goal_difficulty_enum_order_by!]"
                    ],
                    "where": [
                        62
                    ]
                }
            ],
            "goal_difficulty_enum_by_pk": [
                59,
                {
                    "difficulty": [
                        5,
                        "String!"
                    ]
                }
            ],
            "goal_logs_enum": [
                77,
                {
                    "distinct_on": [
                        92,
                        "[goal_logs_enum_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        90,
                        "[goal_logs_enum_order_by!]"
                    ],
                    "where": [
                        80
                    ]
                }
            ],
            "goal_logs_enum_aggregate": [
                78,
                {
                    "distinct_on": [
                        92,
                        "[goal_logs_enum_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        90,
                        "[goal_logs_enum_order_by!]"
                    ],
                    "where": [
                        80
                    ]
                }
            ],
            "goal_logs_enum_by_pk": [
                77,
                {
                    "log_type": [
                        5,
                        "String!"
                    ]
                }
            ],
            "goal_status_enum": [
                95,
                {
                    "distinct_on": [
                        110,
                        "[goal_status_enum_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        108,
                        "[goal_status_enum_order_by!]"
                    ],
                    "where": [
                        98
                    ]
                }
            ],
            "goal_status_enum_aggregate": [
                96,
                {
                    "distinct_on": [
                        110,
                        "[goal_status_enum_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        108,
                        "[goal_status_enum_order_by!]"
                    ],
                    "where": [
                        98
                    ]
                }
            ],
            "goal_status_enum_by_pk": [
                95,
                {
                    "status": [
                        5,
                        "String!"
                    ]
                }
            ],
            "goals": [
                113,
                {
                    "distinct_on": [
                        186,
                        "[goals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        147,
                        "[goals_order_by!]"
                    ],
                    "where": [
                        118
                    ]
                }
            ],
            "goals_aggregate": [
                114,
                {
                    "distinct_on": [
                        186,
                        "[goals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        147,
                        "[goals_order_by!]"
                    ],
                    "where": [
                        118
                    ]
                }
            ],
            "goals_by_pk": [
                113,
                {
                    "id": [
                        341,
                        "uuid!"
                    ]
                }
            ],
            "goals_logs": [
                121,
                {
                    "distinct_on": [
                        137,
                        "[goals_logs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        135,
                        "[goals_logs_order_by!]"
                    ],
                    "where": [
                        126
                    ]
                }
            ],
            "goals_logs_aggregate": [
                122,
                {
                    "distinct_on": [
                        137,
                        "[goals_logs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        135,
                        "[goals_logs_order_by!]"
                    ],
                    "where": [
                        126
                    ]
                }
            ],
            "goals_logs_by_pk": [
                121,
                {
                    "goal_id": [
                        341,
                        "uuid!"
                    ],
                    "log_id": [
                        341,
                        "uuid!"
                    ]
                }
            ],
            "goals_rituals": [
                149,
                {
                    "distinct_on": [
                        169,
                        "[goals_rituals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        167,
                        "[goals_rituals_order_by!]"
                    ],
                    "where": [
                        156
                    ]
                }
            ],
            "goals_rituals_aggregate": [
                150,
                {
                    "distinct_on": [
                        169,
                        "[goals_rituals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        167,
                        "[goals_rituals_order_by!]"
                    ],
                    "where": [
                        156
                    ]
                }
            ],
            "goals_rituals_by_pk": [
                149,
                {
                    "goal_id": [
                        341,
                        "uuid!"
                    ],
                    "ritual_id": [
                        341,
                        "uuid!"
                    ]
                }
            ],
            "goals_slides": [
                188,
                {
                    "distinct_on": [
                        200,
                        "[goals_slides_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        198,
                        "[goals_slides_order_by!]"
                    ],
                    "where": [
                        191
                    ]
                }
            ],
            "goals_slides_aggregate": [
                189,
                {
                    "distinct_on": [
                        200,
                        "[goals_slides_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        198,
                        "[goals_slides_order_by!]"
                    ],
                    "where": [
                        191
                    ]
                }
            ],
            "goals_slides_by_pk": [
                188,
                {
                    "id": [
                        341,
                        "uuid!"
                    ]
                }
            ],
            "heroes": [
                204,
                {
                    "distinct_on": [
                        219,
                        "[heroes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        217,
                        "[heroes_order_by!]"
                    ],
                    "where": [
                        208
                    ]
                }
            ],
            "heroes_aggregate": [
                205,
                {
                    "distinct_on": [
                        219,
                        "[heroes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        217,
                        "[heroes_order_by!]"
                    ],
                    "where": [
                        208
                    ]
                }
            ],
            "heroes_by_pk": [
                204,
                {
                    "id": [
                        341,
                        "uuid!"
                    ]
                }
            ],
            "notes": [
                231,
                {
                    "distinct_on": [
                        243,
                        "[notes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        241,
                        "[notes_order_by!]"
                    ],
                    "where": [
                        234
                    ]
                }
            ],
            "notes_aggregate": [
                232,
                {
                    "distinct_on": [
                        243,
                        "[notes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        241,
                        "[notes_order_by!]"
                    ],
                    "where": [
                        234
                    ]
                }
            ],
            "notes_by_pk": [
                231,
                {
                    "id": [
                        341,
                        "uuid!"
                    ]
                }
            ],
            "privacy_enum": [
                247,
                {
                    "distinct_on": [
                        262,
                        "[privacy_enum_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        260,
                        "[privacy_enum_order_by!]"
                    ],
                    "where": [
                        250
                    ]
                }
            ],
            "privacy_enum_aggregate": [
                248,
                {
                    "distinct_on": [
                        262,
                        "[privacy_enum_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        260,
                        "[privacy_enum_order_by!]"
                    ],
                    "where": [
                        250
                    ]
                }
            ],
            "privacy_enum_by_pk": [
                247,
                {
                    "privacy": [
                        5,
                        "String!"
                    ]
                }
            ],
            "restore_codes": [
                265,
                {
                    "distinct_on": [
                        277,
                        "[restore_codes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        275,
                        "[restore_codes_order_by!]"
                    ],
                    "where": [
                        268
                    ]
                }
            ],
            "restore_codes_aggregate": [
                266,
                {
                    "distinct_on": [
                        277,
                        "[restore_codes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        275,
                        "[restore_codes_order_by!]"
                    ],
                    "where": [
                        268
                    ]
                }
            ],
            "restore_codes_by_pk": [
                265,
                {
                    "id": [
                        341,
                        "uuid!"
                    ]
                }
            ],
            "ritual_type_enum": [
                280,
                {
                    "distinct_on": [
                        295,
                        "[ritual_type_enum_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        293,
                        "[ritual_type_enum_order_by!]"
                    ],
                    "where": [
                        283
                    ]
                }
            ],
            "ritual_type_enum_aggregate": [
                281,
                {
                    "distinct_on": [
                        295,
                        "[ritual_type_enum_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        293,
                        "[ritual_type_enum_order_by!]"
                    ],
                    "where": [
                        283
                    ]
                }
            ],
            "ritual_type_enum_by_pk": [
                280,
                {
                    "ritual_type": [
                        5,
                        "String!"
                    ]
                }
            ],
            "sprints": [
                298,
                {
                    "distinct_on": [
                        322,
                        "[sprints_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        319,
                        "[sprints_order_by!]"
                    ],
                    "where": [
                        306
                    ]
                }
            ],
            "sprints_aggregate": [
                299,
                {
                    "distinct_on": [
                        322,
                        "[sprints_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        319,
                        "[sprints_order_by!]"
                    ],
                    "where": [
                        306
                    ]
                }
            ],
            "sprints_by_pk": [
                298,
                {
                    "id": [
                        341,
                        "uuid!"
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "Mutation": {
            "delete_achievements": [
                15,
                {
                    "where": [
                        10,
                        "achievements_bool_exp!"
                    ]
                }
            ],
            "delete_achievements_by_pk": [
                7,
                {
                    "id": [
                        341,
                        "uuid!"
                    ]
                }
            ],
            "delete_addons": [
                52,
                {
                    "where": [
                        27,
                        "addons_bool_exp!"
                    ]
                }
            ],
            "delete_addons_by_pk": [
                22,
                {
                    "addon": [
                        34,
                        "addons_enum_enum!"
                    ],
                    "owner_id": [
                        341,
                        "uuid!"
                    ]
                }
            ],
            "delete_addons_enum": [
                39,
                {
                    "where": [
                        32,
                        "addons_enum_bool_exp!"
                    ]
                }
            ],
            "delete_addons_enum_by_pk": [
                29,
                {
                    "addon": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_goal_difficulty_enum": [
                69,
                {
                    "where": [
                        62,
                        "goal_difficulty_enum_bool_exp!"
                    ]
                }
            ],
            "delete_goal_difficulty_enum_by_pk": [
                59,
                {
                    "difficulty": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_goal_logs_enum": [
                87,
                {
                    "where": [
                        80,
                        "goal_logs_enum_bool_exp!"
                    ]
                }
            ],
            "delete_goal_logs_enum_by_pk": [
                77,
                {
                    "log_type": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_goal_status_enum": [
                105,
                {
                    "where": [
                        98,
                        "goal_status_enum_bool_exp!"
                    ]
                }
            ],
            "delete_goal_status_enum_by_pk": [
                95,
                {
                    "status": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_goals": [
                144,
                {
                    "where": [
                        118,
                        "goals_bool_exp!"
                    ]
                }
            ],
            "delete_goals_by_pk": [
                113,
                {
                    "id": [
                        341,
                        "uuid!"
                    ]
                }
            ],
            "delete_goals_logs": [
                133,
                {
                    "where": [
                        126,
                        "goals_logs_bool_exp!"
                    ]
                }
            ],
            "delete_goals_logs_by_pk": [
                121,
                {
                    "goal_id": [
                        341,
                        "uuid!"
                    ],
                    "log_id": [
                        341,
                        "uuid!"
                    ]
                }
            ],
            "delete_goals_rituals": [
                164,
                {
                    "where": [
                        156,
                        "goals_rituals_bool_exp!"
                    ]
                }
            ],
            "delete_goals_rituals_by_pk": [
                149,
                {
                    "goal_id": [
                        341,
                        "uuid!"
                    ],
                    "ritual_id": [
                        341,
                        "uuid!"
                    ]
                }
            ],
            "delete_goals_slides": [
                196,
                {
                    "where": [
                        191,
                        "goals_slides_bool_exp!"
                    ]
                }
            ],
            "delete_goals_slides_by_pk": [
                188,
                {
                    "id": [
                        341,
                        "uuid!"
                    ]
                }
            ],
            "delete_heroes": [
                214,
                {
                    "where": [
                        208,
                        "heroes_bool_exp!"
                    ]
                }
            ],
            "delete_heroes_by_pk": [
                204,
                {
                    "id": [
                        341,
                        "uuid!"
                    ]
                }
            ],
            "delete_notes": [
                239,
                {
                    "where": [
                        234,
                        "notes_bool_exp!"
                    ]
                }
            ],
            "delete_notes_by_pk": [
                231,
                {
                    "id": [
                        341,
                        "uuid!"
                    ]
                }
            ],
            "delete_privacy_enum": [
                257,
                {
                    "where": [
                        250,
                        "privacy_enum_bool_exp!"
                    ]
                }
            ],
            "delete_privacy_enum_by_pk": [
                247,
                {
                    "privacy": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_restore_codes": [
                273,
                {
                    "where": [
                        268,
                        "restore_codes_bool_exp!"
                    ]
                }
            ],
            "delete_restore_codes_by_pk": [
                265,
                {
                    "id": [
                        341,
                        "uuid!"
                    ]
                }
            ],
            "delete_ritual_type_enum": [
                290,
                {
                    "where": [
                        283,
                        "ritual_type_enum_bool_exp!"
                    ]
                }
            ],
            "delete_ritual_type_enum_by_pk": [
                280,
                {
                    "ritual_type": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_sprints": [
                317,
                {
                    "where": [
                        306,
                        "sprints_bool_exp!"
                    ]
                }
            ],
            "delete_sprints_by_pk": [
                298,
                {
                    "id": [
                        341,
                        "uuid!"
                    ]
                }
            ],
            "insert_achievements": [
                15,
                {
                    "objects": [
                        12,
                        "[achievements_insert_input!]!"
                    ],
                    "on_conflict": [
                        16
                    ]
                }
            ],
            "insert_achievements_one": [
                7,
                {
                    "object": [
                        12,
                        "achievements_insert_input!"
                    ],
                    "on_conflict": [
                        16
                    ]
                }
            ],
            "insert_addons": [
                52,
                {
                    "objects": [
                        47,
                        "[addons_insert_input!]!"
                    ],
                    "on_conflict": [
                        53
                    ]
                }
            ],
            "insert_addons_enum": [
                39,
                {
                    "objects": [
                        36,
                        "[addons_enum_insert_input!]!"
                    ],
                    "on_conflict": [
                        41
                    ]
                }
            ],
            "insert_addons_enum_one": [
                29,
                {
                    "object": [
                        36,
                        "addons_enum_insert_input!"
                    ],
                    "on_conflict": [
                        41
                    ]
                }
            ],
            "insert_addons_one": [
                22,
                {
                    "object": [
                        47,
                        "addons_insert_input!"
                    ],
                    "on_conflict": [
                        53
                    ]
                }
            ],
            "insert_goal_difficulty_enum": [
                69,
                {
                    "objects": [
                        66,
                        "[goal_difficulty_enum_insert_input!]!"
                    ],
                    "on_conflict": [
                        71
                    ]
                }
            ],
            "insert_goal_difficulty_enum_one": [
                59,
                {
                    "object": [
                        66,
                        "goal_difficulty_enum_insert_input!"
                    ],
                    "on_conflict": [
                        71
                    ]
                }
            ],
            "insert_goal_logs_enum": [
                87,
                {
                    "objects": [
                        84,
                        "[goal_logs_enum_insert_input!]!"
                    ],
                    "on_conflict": [
                        89
                    ]
                }
            ],
            "insert_goal_logs_enum_one": [
                77,
                {
                    "object": [
                        84,
                        "goal_logs_enum_insert_input!"
                    ],
                    "on_conflict": [
                        89
                    ]
                }
            ],
            "insert_goal_status_enum": [
                105,
                {
                    "objects": [
                        102,
                        "[goal_status_enum_insert_input!]!"
                    ],
                    "on_conflict": [
                        107
                    ]
                }
            ],
            "insert_goal_status_enum_one": [
                95,
                {
                    "object": [
                        102,
                        "goal_status_enum_insert_input!"
                    ],
                    "on_conflict": [
                        107
                    ]
                }
            ],
            "insert_goals": [
                144,
                {
                    "objects": [
                        120,
                        "[goals_insert_input!]!"
                    ],
                    "on_conflict": [
                        146
                    ]
                }
            ],
            "insert_goals_logs": [
                133,
                {
                    "objects": [
                        128,
                        "[goals_logs_insert_input!]!"
                    ],
                    "on_conflict": [
                        134
                    ]
                }
            ],
            "insert_goals_logs_one": [
                121,
                {
                    "object": [
                        128,
                        "goals_logs_insert_input!"
                    ],
                    "on_conflict": [
                        134
                    ]
                }
            ],
            "insert_goals_one": [
                113,
                {
                    "object": [
                        120,
                        "goals_insert_input!"
                    ],
                    "on_conflict": [
                        146
                    ]
                }
            ],
            "insert_goals_rituals": [
                164,
                {
                    "objects": [
                        159,
                        "[goals_rituals_insert_input!]!"
                    ],
                    "on_conflict": [
                        166
                    ]
                }
            ],
            "insert_goals_rituals_one": [
                149,
                {
                    "object": [
                        159,
                        "goals_rituals_insert_input!"
                    ],
                    "on_conflict": [
                        166
                    ]
                }
            ],
            "insert_goals_slides": [
                196,
                {
                    "objects": [
                        193,
                        "[goals_slides_insert_input!]!"
                    ],
                    "on_conflict": [
                        197
                    ]
                }
            ],
            "insert_goals_slides_one": [
                188,
                {
                    "object": [
                        193,
                        "goals_slides_insert_input!"
                    ],
                    "on_conflict": [
                        197
                    ]
                }
            ],
            "insert_heroes": [
                214,
                {
                    "objects": [
                        211,
                        "[heroes_insert_input!]!"
                    ],
                    "on_conflict": [
                        216
                    ]
                }
            ],
            "insert_heroes_one": [
                204,
                {
                    "object": [
                        211,
                        "heroes_insert_input!"
                    ],
                    "on_conflict": [
                        216
                    ]
                }
            ],
            "insert_notes": [
                239,
                {
                    "objects": [
                        236,
                        "[notes_insert_input!]!"
                    ],
                    "on_conflict": [
                        240
                    ]
                }
            ],
            "insert_notes_one": [
                231,
                {
                    "object": [
                        236,
                        "notes_insert_input!"
                    ],
                    "on_conflict": [
                        240
                    ]
                }
            ],
            "insert_privacy_enum": [
                257,
                {
                    "objects": [
                        254,
                        "[privacy_enum_insert_input!]!"
                    ],
                    "on_conflict": [
                        259
                    ]
                }
            ],
            "insert_privacy_enum_one": [
                247,
                {
                    "object": [
                        254,
                        "privacy_enum_insert_input!"
                    ],
                    "on_conflict": [
                        259
                    ]
                }
            ],
            "insert_restore_codes": [
                273,
                {
                    "objects": [
                        270,
                        "[restore_codes_insert_input!]!"
                    ],
                    "on_conflict": [
                        274
                    ]
                }
            ],
            "insert_restore_codes_one": [
                265,
                {
                    "object": [
                        270,
                        "restore_codes_insert_input!"
                    ],
                    "on_conflict": [
                        274
                    ]
                }
            ],
            "insert_ritual_type_enum": [
                290,
                {
                    "objects": [
                        287,
                        "[ritual_type_enum_insert_input!]!"
                    ],
                    "on_conflict": [
                        292
                    ]
                }
            ],
            "insert_ritual_type_enum_one": [
                280,
                {
                    "object": [
                        287,
                        "ritual_type_enum_insert_input!"
                    ],
                    "on_conflict": [
                        292
                    ]
                }
            ],
            "insert_sprints": [
                317,
                {
                    "objects": [
                        312,
                        "[sprints_insert_input!]!"
                    ],
                    "on_conflict": [
                        318
                    ]
                }
            ],
            "insert_sprints_one": [
                298,
                {
                    "object": [
                        312,
                        "sprints_insert_input!"
                    ],
                    "on_conflict": [
                        318
                    ]
                }
            ],
            "update_achievements": [
                15,
                {
                    "_set": [
                        20
                    ],
                    "where": [
                        10,
                        "achievements_bool_exp!"
                    ]
                }
            ],
            "update_achievements_by_pk": [
                7,
                {
                    "_set": [
                        20
                    ],
                    "pk_columns": [
                        18,
                        "achievements_pk_columns_input!"
                    ]
                }
            ],
            "update_addons": [
                52,
                {
                    "_set": [
                        57
                    ],
                    "where": [
                        27,
                        "addons_bool_exp!"
                    ]
                }
            ],
            "update_addons_by_pk": [
                22,
                {
                    "_set": [
                        57
                    ],
                    "pk_columns": [
                        55,
                        "addons_pk_columns_input!"
                    ]
                }
            ],
            "update_addons_enum": [
                39,
                {
                    "_set": [
                        45
                    ],
                    "where": [
                        32,
                        "addons_enum_bool_exp!"
                    ]
                }
            ],
            "update_addons_enum_by_pk": [
                29,
                {
                    "_set": [
                        45
                    ],
                    "pk_columns": [
                        43,
                        "addons_enum_pk_columns_input!"
                    ]
                }
            ],
            "update_goal_difficulty_enum": [
                69,
                {
                    "_set": [
                        75
                    ],
                    "where": [
                        62,
                        "goal_difficulty_enum_bool_exp!"
                    ]
                }
            ],
            "update_goal_difficulty_enum_by_pk": [
                59,
                {
                    "_set": [
                        75
                    ],
                    "pk_columns": [
                        73,
                        "goal_difficulty_enum_pk_columns_input!"
                    ]
                }
            ],
            "update_goal_logs_enum": [
                87,
                {
                    "_set": [
                        93
                    ],
                    "where": [
                        80,
                        "goal_logs_enum_bool_exp!"
                    ]
                }
            ],
            "update_goal_logs_enum_by_pk": [
                77,
                {
                    "_set": [
                        93
                    ],
                    "pk_columns": [
                        91,
                        "goal_logs_enum_pk_columns_input!"
                    ]
                }
            ],
            "update_goal_status_enum": [
                105,
                {
                    "_set": [
                        111
                    ],
                    "where": [
                        98,
                        "goal_status_enum_bool_exp!"
                    ]
                }
            ],
            "update_goal_status_enum_by_pk": [
                95,
                {
                    "_set": [
                        111
                    ],
                    "pk_columns": [
                        109,
                        "goal_status_enum_pk_columns_input!"
                    ]
                }
            ],
            "update_goals": [
                144,
                {
                    "_set": [
                        187
                    ],
                    "where": [
                        118,
                        "goals_bool_exp!"
                    ]
                }
            ],
            "update_goals_by_pk": [
                113,
                {
                    "_set": [
                        187
                    ],
                    "pk_columns": [
                        148,
                        "goals_pk_columns_input!"
                    ]
                }
            ],
            "update_goals_logs": [
                133,
                {
                    "_set": [
                        138
                    ],
                    "where": [
                        126,
                        "goals_logs_bool_exp!"
                    ]
                }
            ],
            "update_goals_logs_by_pk": [
                121,
                {
                    "_set": [
                        138
                    ],
                    "pk_columns": [
                        136,
                        "goals_logs_pk_columns_input!"
                    ]
                }
            ],
            "update_goals_rituals": [
                164,
                {
                    "_inc": [
                        158
                    ],
                    "_set": [
                        170
                    ],
                    "where": [
                        156,
                        "goals_rituals_bool_exp!"
                    ]
                }
            ],
            "update_goals_rituals_by_pk": [
                149,
                {
                    "_inc": [
                        158
                    ],
                    "_set": [
                        170
                    ],
                    "pk_columns": [
                        168,
                        "goals_rituals_pk_columns_input!"
                    ]
                }
            ],
            "update_goals_slides": [
                196,
                {
                    "_set": [
                        201
                    ],
                    "where": [
                        191,
                        "goals_slides_bool_exp!"
                    ]
                }
            ],
            "update_goals_slides_by_pk": [
                188,
                {
                    "_set": [
                        201
                    ],
                    "pk_columns": [
                        199,
                        "goals_slides_pk_columns_input!"
                    ]
                }
            ],
            "update_heroes": [
                214,
                {
                    "_inc": [
                        210
                    ],
                    "_set": [
                        220
                    ],
                    "where": [
                        208,
                        "heroes_bool_exp!"
                    ]
                }
            ],
            "update_heroes_by_pk": [
                204,
                {
                    "_inc": [
                        210
                    ],
                    "_set": [
                        220
                    ],
                    "pk_columns": [
                        218,
                        "heroes_pk_columns_input!"
                    ]
                }
            ],
            "update_notes": [
                239,
                {
                    "_set": [
                        244
                    ],
                    "where": [
                        234,
                        "notes_bool_exp!"
                    ]
                }
            ],
            "update_notes_by_pk": [
                231,
                {
                    "_set": [
                        244
                    ],
                    "pk_columns": [
                        242,
                        "notes_pk_columns_input!"
                    ]
                }
            ],
            "update_privacy_enum": [
                257,
                {
                    "_set": [
                        263
                    ],
                    "where": [
                        250,
                        "privacy_enum_bool_exp!"
                    ]
                }
            ],
            "update_privacy_enum_by_pk": [
                247,
                {
                    "_set": [
                        263
                    ],
                    "pk_columns": [
                        261,
                        "privacy_enum_pk_columns_input!"
                    ]
                }
            ],
            "update_restore_codes": [
                273,
                {
                    "_set": [
                        278
                    ],
                    "where": [
                        268,
                        "restore_codes_bool_exp!"
                    ]
                }
            ],
            "update_restore_codes_by_pk": [
                265,
                {
                    "_set": [
                        278
                    ],
                    "pk_columns": [
                        276,
                        "restore_codes_pk_columns_input!"
                    ]
                }
            ],
            "update_ritual_type_enum": [
                290,
                {
                    "_set": [
                        296
                    ],
                    "where": [
                        283,
                        "ritual_type_enum_bool_exp!"
                    ]
                }
            ],
            "update_ritual_type_enum_by_pk": [
                280,
                {
                    "_set": [
                        296
                    ],
                    "pk_columns": [
                        294,
                        "ritual_type_enum_pk_columns_input!"
                    ]
                }
            ],
            "update_sprints": [
                317,
                {
                    "_append": [
                        302
                    ],
                    "_delete_at_path": [
                        308
                    ],
                    "_delete_elem": [
                        309
                    ],
                    "_delete_key": [
                        310
                    ],
                    "_inc": [
                        311
                    ],
                    "_prepend": [
                        321
                    ],
                    "_set": [
                        323
                    ],
                    "where": [
                        306,
                        "sprints_bool_exp!"
                    ]
                }
            ],
            "update_sprints_by_pk": [
                298,
                {
                    "_append": [
                        302
                    ],
                    "_delete_at_path": [
                        308
                    ],
                    "_delete_elem": [
                        309
                    ],
                    "_delete_key": [
                        310
                    ],
                    "_inc": [
                        311
                    ],
                    "_prepend": [
                        321
                    ],
                    "_set": [
                        323
                    ],
                    "pk_columns": [
                        320,
                        "sprints_pk_columns_input!"
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "Subscription": {
            "achievements": [
                7,
                {
                    "distinct_on": [
                        19,
                        "[achievements_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        17,
                        "[achievements_order_by!]"
                    ],
                    "where": [
                        10
                    ]
                }
            ],
            "achievements_aggregate": [
                8,
                {
                    "distinct_on": [
                        19,
                        "[achievements_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        17,
                        "[achievements_order_by!]"
                    ],
                    "where": [
                        10
                    ]
                }
            ],
            "achievements_by_pk": [
                7,
                {
                    "id": [
                        341,
                        "uuid!"
                    ]
                }
            ],
            "addons": [
                22,
                {
                    "distinct_on": [
                        56,
                        "[addons_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        54,
                        "[addons_order_by!]"
                    ],
                    "where": [
                        27
                    ]
                }
            ],
            "addons_aggregate": [
                23,
                {
                    "distinct_on": [
                        56,
                        "[addons_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        54,
                        "[addons_order_by!]"
                    ],
                    "where": [
                        27
                    ]
                }
            ],
            "addons_by_pk": [
                22,
                {
                    "addon": [
                        34,
                        "addons_enum_enum!"
                    ],
                    "owner_id": [
                        341,
                        "uuid!"
                    ]
                }
            ],
            "addons_enum": [
                29,
                {
                    "distinct_on": [
                        44,
                        "[addons_enum_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        42,
                        "[addons_enum_order_by!]"
                    ],
                    "where": [
                        32
                    ]
                }
            ],
            "addons_enum_aggregate": [
                30,
                {
                    "distinct_on": [
                        44,
                        "[addons_enum_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        42,
                        "[addons_enum_order_by!]"
                    ],
                    "where": [
                        32
                    ]
                }
            ],
            "addons_enum_by_pk": [
                29,
                {
                    "addon": [
                        5,
                        "String!"
                    ]
                }
            ],
            "goal_difficulty_enum": [
                59,
                {
                    "distinct_on": [
                        74,
                        "[goal_difficulty_enum_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        72,
                        "[goal_difficulty_enum_order_by!]"
                    ],
                    "where": [
                        62
                    ]
                }
            ],
            "goal_difficulty_enum_aggregate": [
                60,
                {
                    "distinct_on": [
                        74,
                        "[goal_difficulty_enum_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        72,
                        "[goal_difficulty_enum_order_by!]"
                    ],
                    "where": [
                        62
                    ]
                }
            ],
            "goal_difficulty_enum_by_pk": [
                59,
                {
                    "difficulty": [
                        5,
                        "String!"
                    ]
                }
            ],
            "goal_logs_enum": [
                77,
                {
                    "distinct_on": [
                        92,
                        "[goal_logs_enum_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        90,
                        "[goal_logs_enum_order_by!]"
                    ],
                    "where": [
                        80
                    ]
                }
            ],
            "goal_logs_enum_aggregate": [
                78,
                {
                    "distinct_on": [
                        92,
                        "[goal_logs_enum_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        90,
                        "[goal_logs_enum_order_by!]"
                    ],
                    "where": [
                        80
                    ]
                }
            ],
            "goal_logs_enum_by_pk": [
                77,
                {
                    "log_type": [
                        5,
                        "String!"
                    ]
                }
            ],
            "goal_status_enum": [
                95,
                {
                    "distinct_on": [
                        110,
                        "[goal_status_enum_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        108,
                        "[goal_status_enum_order_by!]"
                    ],
                    "where": [
                        98
                    ]
                }
            ],
            "goal_status_enum_aggregate": [
                96,
                {
                    "distinct_on": [
                        110,
                        "[goal_status_enum_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        108,
                        "[goal_status_enum_order_by!]"
                    ],
                    "where": [
                        98
                    ]
                }
            ],
            "goal_status_enum_by_pk": [
                95,
                {
                    "status": [
                        5,
                        "String!"
                    ]
                }
            ],
            "goals": [
                113,
                {
                    "distinct_on": [
                        186,
                        "[goals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        147,
                        "[goals_order_by!]"
                    ],
                    "where": [
                        118
                    ]
                }
            ],
            "goals_aggregate": [
                114,
                {
                    "distinct_on": [
                        186,
                        "[goals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        147,
                        "[goals_order_by!]"
                    ],
                    "where": [
                        118
                    ]
                }
            ],
            "goals_by_pk": [
                113,
                {
                    "id": [
                        341,
                        "uuid!"
                    ]
                }
            ],
            "goals_logs": [
                121,
                {
                    "distinct_on": [
                        137,
                        "[goals_logs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        135,
                        "[goals_logs_order_by!]"
                    ],
                    "where": [
                        126
                    ]
                }
            ],
            "goals_logs_aggregate": [
                122,
                {
                    "distinct_on": [
                        137,
                        "[goals_logs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        135,
                        "[goals_logs_order_by!]"
                    ],
                    "where": [
                        126
                    ]
                }
            ],
            "goals_logs_by_pk": [
                121,
                {
                    "goal_id": [
                        341,
                        "uuid!"
                    ],
                    "log_id": [
                        341,
                        "uuid!"
                    ]
                }
            ],
            "goals_rituals": [
                149,
                {
                    "distinct_on": [
                        169,
                        "[goals_rituals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        167,
                        "[goals_rituals_order_by!]"
                    ],
                    "where": [
                        156
                    ]
                }
            ],
            "goals_rituals_aggregate": [
                150,
                {
                    "distinct_on": [
                        169,
                        "[goals_rituals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        167,
                        "[goals_rituals_order_by!]"
                    ],
                    "where": [
                        156
                    ]
                }
            ],
            "goals_rituals_by_pk": [
                149,
                {
                    "goal_id": [
                        341,
                        "uuid!"
                    ],
                    "ritual_id": [
                        341,
                        "uuid!"
                    ]
                }
            ],
            "goals_slides": [
                188,
                {
                    "distinct_on": [
                        200,
                        "[goals_slides_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        198,
                        "[goals_slides_order_by!]"
                    ],
                    "where": [
                        191
                    ]
                }
            ],
            "goals_slides_aggregate": [
                189,
                {
                    "distinct_on": [
                        200,
                        "[goals_slides_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        198,
                        "[goals_slides_order_by!]"
                    ],
                    "where": [
                        191
                    ]
                }
            ],
            "goals_slides_by_pk": [
                188,
                {
                    "id": [
                        341,
                        "uuid!"
                    ]
                }
            ],
            "heroes": [
                204,
                {
                    "distinct_on": [
                        219,
                        "[heroes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        217,
                        "[heroes_order_by!]"
                    ],
                    "where": [
                        208
                    ]
                }
            ],
            "heroes_aggregate": [
                205,
                {
                    "distinct_on": [
                        219,
                        "[heroes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        217,
                        "[heroes_order_by!]"
                    ],
                    "where": [
                        208
                    ]
                }
            ],
            "heroes_by_pk": [
                204,
                {
                    "id": [
                        341,
                        "uuid!"
                    ]
                }
            ],
            "notes": [
                231,
                {
                    "distinct_on": [
                        243,
                        "[notes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        241,
                        "[notes_order_by!]"
                    ],
                    "where": [
                        234
                    ]
                }
            ],
            "notes_aggregate": [
                232,
                {
                    "distinct_on": [
                        243,
                        "[notes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        241,
                        "[notes_order_by!]"
                    ],
                    "where": [
                        234
                    ]
                }
            ],
            "notes_by_pk": [
                231,
                {
                    "id": [
                        341,
                        "uuid!"
                    ]
                }
            ],
            "privacy_enum": [
                247,
                {
                    "distinct_on": [
                        262,
                        "[privacy_enum_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        260,
                        "[privacy_enum_order_by!]"
                    ],
                    "where": [
                        250
                    ]
                }
            ],
            "privacy_enum_aggregate": [
                248,
                {
                    "distinct_on": [
                        262,
                        "[privacy_enum_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        260,
                        "[privacy_enum_order_by!]"
                    ],
                    "where": [
                        250
                    ]
                }
            ],
            "privacy_enum_by_pk": [
                247,
                {
                    "privacy": [
                        5,
                        "String!"
                    ]
                }
            ],
            "restore_codes": [
                265,
                {
                    "distinct_on": [
                        277,
                        "[restore_codes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        275,
                        "[restore_codes_order_by!]"
                    ],
                    "where": [
                        268
                    ]
                }
            ],
            "restore_codes_aggregate": [
                266,
                {
                    "distinct_on": [
                        277,
                        "[restore_codes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        275,
                        "[restore_codes_order_by!]"
                    ],
                    "where": [
                        268
                    ]
                }
            ],
            "restore_codes_by_pk": [
                265,
                {
                    "id": [
                        341,
                        "uuid!"
                    ]
                }
            ],
            "ritual_type_enum": [
                280,
                {
                    "distinct_on": [
                        295,
                        "[ritual_type_enum_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        293,
                        "[ritual_type_enum_order_by!]"
                    ],
                    "where": [
                        283
                    ]
                }
            ],
            "ritual_type_enum_aggregate": [
                281,
                {
                    "distinct_on": [
                        295,
                        "[ritual_type_enum_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        293,
                        "[ritual_type_enum_order_by!]"
                    ],
                    "where": [
                        283
                    ]
                }
            ],
            "ritual_type_enum_by_pk": [
                280,
                {
                    "ritual_type": [
                        5,
                        "String!"
                    ]
                }
            ],
            "sprints": [
                298,
                {
                    "distinct_on": [
                        322,
                        "[sprints_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        319,
                        "[sprints_order_by!]"
                    ],
                    "where": [
                        306
                    ]
                }
            ],
            "sprints_aggregate": [
                299,
                {
                    "distinct_on": [
                        322,
                        "[sprints_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        319,
                        "[sprints_order_by!]"
                    ],
                    "where": [
                        306
                    ]
                }
            ],
            "sprints_by_pk": [
                298,
                {
                    "id": [
                        341,
                        "uuid!"
                    ]
                }
            ],
            "__typename": [
                5
            ]
        }
    }
}