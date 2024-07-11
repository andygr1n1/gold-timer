import React, { useMemo } from 'react'

import { IKzenEditor } from './types'
import { EditorCore } from './EditorCore'
import { Skeleton } from 'antd'

export const KzenEditor: React.FC<IKzenEditor> = ({ isLoading, content, ...props }) => {
    const memoContent = useMemo(() => content, [isLoading])

    return isLoading ? (
        <Skeleton loading={isLoading} title={{ width: '100%' }} paragraph={{ rows: 2, width: '100%' }} />
    ) : (
        <EditorCore {...props} content={memoContent} />
    )
}
