import { CompositeDecorator, ContentBlock, ContentState } from "draft-js"

// Image component for rendering
const Image = (props: any) => {
    const { src } = props.contentState.getEntity(props.entityKey).getData()
    return <img src={src} alt='' style={{ maxWidth: '100%' }} />
}

// Strategy for finding image entities in the content
const findImageEntities = (contentBlock: ContentBlock, callback: any, contentState: ContentState) => {
    contentBlock.findEntityRanges((character) => {
        const entityKey = character.getEntity()
        return entityKey !== null && contentState.getEntity(entityKey).getType() === 'IMAGE'
    }, callback)
}

// Decorator for rendering image entities
export const decorator = new CompositeDecorator([
    {
        strategy: findImageEntities,
        component: Image,
    },
])
