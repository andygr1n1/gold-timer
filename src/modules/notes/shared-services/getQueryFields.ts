export const getQueryFields = () => ({
    id: true,
    description: true,
    tag: true,
    created_at: true,
    deleted_at: true,
    is_favorite: true,
    archived: true,
    label_id: true,
    label: {
        name: true,
    },
})
