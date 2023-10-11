import clsx from 'clsx'
import { CSSProperties } from 'react'
import {
    ChildrenType,
    EventsType,
    IPosition,
    Middleware,
    PlacesType,
    PositionStrategy,
    Tooltip,
    VariantType,
    WrapperType,
} from 'react-tooltip'

export const XTooltip: React.FC<ITooltipController> = (props) => {
    return (
        <Tooltip
            {...props}
            className={
                props.variant
                    ? props.className
                    : clsx(
                          '!bg-global-bg-plasma !text-cText animate-opacity-3 !rounded-lg font-normal shadow-xl backdrop-blur-lg',
                          props.className ? props.className : 'max-w-[200px]',
                      )
            }
            place={props.place || 'bottom'}
        >
            {props.children}
        </Tooltip>
    )
}

interface ITooltipController {
    className?: string
    classNameArrow?: string
    content?: string
    /**
     * @deprecated Use `children` or `render` instead
     */
    html?: string
    render?: (render: { content: string | null; activeAnchor: HTMLElement | null }) => ChildrenType
    place?: PlacesType
    offset?: number
    id?: string
    variant?: VariantType
    /**
     * @deprecated Use the `data-tooltip-id` attribute, or the `anchorSelect` prop instead.
     * See https://react-tooltip.com/docs/getting-started
     */
    anchorId?: string
    anchorSelect?: string
    wrapper?: WrapperType
    children?: ChildrenType
    /**
     * @deprecated Use `openOnClick` instead.
     */
    events?: EventsType[]
    openOnClick?: boolean
    positionStrategy?: PositionStrategy
    middlewares?: Middleware[]
    delayShow?: number
    delayHide?: number
    float?: boolean
    hidden?: boolean
    noArrow?: boolean
    clickable?: boolean
    /**
     * @todo refactor to `hideOnEsc` for naming consistency
     */
    closeOnEsc?: boolean
    /**
     * @todo refactor to `hideOnScroll` for naming consistency
     */
    closeOnScroll?: boolean
    /**
     * @todo refactor to `hideOnResize` for naming consistency
     */
    closeOnResize?: boolean
    style?: CSSProperties
    position?: IPosition
    isOpen?: boolean
    disableStyleInjection?: boolean | 'core'
    /**
     * @description see https://developer.mozilla.org/en-US/docs/Web/CSS/border.
     *
     * Adding a border with width > 3px, or with `em/cm/rem/...` instead of `px`
     * might break the tooltip arrow positioning.
     */
    border?: CSSProperties['border']
    opacity?: CSSProperties['opacity']
    arrowColor?: CSSProperties['backgroundColor']
    setIsOpen?: (value: boolean) => void
    afterShow?: () => void
    afterHide?: () => void
}
