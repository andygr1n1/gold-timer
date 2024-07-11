// import { SketchPicker } from 'react-color'
import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { Editor, EditorState } from 'draft-js'
import { Dispatch, RefObject, SetStateAction } from 'react'
import { cn } from '@/helpers/cn'
import { handleColor } from '../../../utility/handleColor'
import { IColorStyleMap } from '../../../types'
import { baseColorKeys, secondaryColorKeys } from './colorsStyleMap'
import { IconPalette } from '@/components-x/x-rte/icons/IconPalette'

export const ColorMenu: React.FC<{
    editorState: EditorState
    setEditorState: Dispatch<SetStateAction<EditorState>>
    editorRef: RefObject<Editor>
    colorStyleMap: IColorStyleMap
    setCustomStyleMap: Dispatch<SetStateAction<IColorStyleMap>>
}> = ({ setEditorState, editorState, editorRef, colorStyleMap /* , setCustomStyleMap */ }) => {
    // const [currentColor, setCurrentColor] = useState('#000')

    return (
        <XDropdown
            // onOpenChange={() => {
            //     setPopoverState(!popoverState)
            // }}
            placement='bottom'
            overlayStyle={{ zIndex: 9999 }}
            trigger={['hover']}
            dropdownRender={() => (
                <XMenuDropdown>
                    <XMenuItem className='!opacity-100 max-w-[270px] items-center my-2 justify-center gap-5 flex flex-wrap'>
                        {baseColorKeys().map((colorObj) => (
                            <button
                                type='button'
                                key={colorObj.color}
                                className='w-5 h-5 rounded-md m-1 cursor-pointer'
                                onClick={() =>
                                    handleColor({
                                        color: colorObj.color,
                                        editorState,
                                        setEditorState,
                                        editorRef,
                                        colorStyleMap,
                                    })
                                }
                                style={{ background: colorObj.hex }}
                            />
                        ))}
                    </XMenuItem>
                    <XMenuItem className='!opacity-100 max-w-[270px] items-center my-2 justify-center gap-5 flex flex-wrap'>
                        {secondaryColorKeys().map((colorObj) => (
                            <button
                                type='button'
                                key={colorObj.color}
                                className='w-5 h-5 rounded-md m-1 cursor-pointer'
                                onClick={() =>
                                    handleColor({
                                        color: colorObj.color,
                                        editorState,
                                        setEditorState,
                                        editorRef,
                                        colorStyleMap,
                                    })
                                }
                                style={{ background: colorObj.hex }}
                            />
                        ))}
                    </XMenuItem>
                    <XMenuItem
                        onClick={() =>
                            handleColor({ color: 'DEFAULT', editorState, setEditorState, editorRef, colorStyleMap })
                        }
                    >
                        <button type='button' className='text-cText cursor-pointer'>
                            Default
                        </button>
                    </XMenuItem>
                    {/* <XMenuItem>
                        <SketchPicker
                            color={currentColor}
                            onChangeComplete={(color) =>
                                handleColorChange({
                                    editorState,
                                    setEditorState,
                                    setCurrentColor,
                                    color,
                                    editorRef,
                                    colorStyleMap,
                                    setCustomStyleMap,
                                })
                            }
                            styles={{
                                default: {
                                    picker: {
                                        boxShadow: '0 0 10px rgba(0,0,0,0.2)',
                                        borderRadius: '4px',
                                        background: 'transparent',
                                    },
                                    alpha: {
                                        display: 'none',
                                    },
                                },
                            }}
                        />
                    </XMenuItem> */}
                </XMenuDropdown>
            )}
        >
            <button type='button'>
                <IconPalette
                    className={cn(
                        'cursor-pointer text-cText opacity-80 hover:opacity-100 hover:text-blue-500 min-h-[18px] min-w-[18px]',
                    )}
                />
            </button>
        </XDropdown>
    )
}
