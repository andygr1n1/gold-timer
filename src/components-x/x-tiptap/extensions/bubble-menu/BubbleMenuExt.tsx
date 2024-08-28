import { IconBold } from '@/assets/icons/IconBold'
import { IconItalic } from '@/assets/icons/IconItalic'
import { IconStrikeThrough } from '@/assets/icons/IconStrikeThrough'
import { IconUnderline } from '@/assets/icons/IconUnderline'
import { StyledButton } from '@/components/buttons/StyledButton'
import { cn } from '@/helpers/cn'
import { useCurrentEditor } from '@tiptap/react'
import { BubbleMenu } from '@tiptap/react'
import { editorHeadingsOptions, getHeadingValue } from './components/editorHeadingOptions'
import { Select } from 'antd'
import './components/BubbleMenuSelect.scss'
import { IconChevronDown } from '@/assets/icons/IconChevronDown'
import { isArray } from 'lodash-es'
import { editorColorsOptions, getCurrentColor } from './components/editorColorsOptions'
import { IconCircle } from '@/assets/icons/IconCircle'
import { useCallback } from 'react'

export const BubbleMenuExt: React.FC = () => {
    const { editor } = useCurrentEditor()

    if (!editor) return null

    const setLink = useCallback(() => {
        const previousUrl = editor.getAttributes('link')['href']
        const url = window.prompt('URL', previousUrl)

        // cancelled
        if (url === null) {
            return
        }

        // empty
        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run()

            return
        }

        // update link
        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
    }, [editor])

    return (
        <div className={'key-1'}>
            {editor && (
                <BubbleMenu editor={editor}>
                    <div className='bubble-menu bg-global-bg items-center rounded-md flex shadow-xl p-[1px]'>
                        <Select
                            value={getHeadingValue(editor)}
                            onChange={(_value, option) => {
                                if (!option || isArray(option)) return
                                option.id === 6
                                    ? editor.chain().focus().setParagraph().run()
                                    : editor.chain().focus().toggleHeading({ level: option.id }).run()
                            }}
                            size='small'
                            popupClassName='min-w-[100px]'
                            options={editorHeadingsOptions}
                            suffixIcon={<IconChevronDown className='text-cText w-4 h-4' />}
                            rootClassName='bubble-menu-select'
                        />
                        <StyledButton
                            variant='text'
                            size='small'
                            onClick={() => editor.chain().focus().toggleBold().run()}
                            className={editor.isActive('bold') ? 'is-active !text-blue-500' : ''}
                        >
                            <IconBold
                                className={cn(
                                    'cursor-pointer hover:text-blue-500 min-h-[14px] h-[14px] w-[14px] min-w-[14px]',
                                )}
                            />
                        </StyledButton>
                        <StyledButton
                            variant='text'
                            size='small'
                            onClick={() => editor.chain().focus().toggleItalic().run()}
                            className={editor.isActive('italic') ? 'is-active !text-blue-500' : ''}
                        >
                            <IconItalic
                                className={cn(
                                    'cursor-pointer hover:text-blue-500 min-h-[14px] h-[14px] w-[14px] min-w-[14px]',
                                )}
                            />
                        </StyledButton>
                        <StyledButton
                            variant='text'
                            size='small'
                            onClick={() => editor.chain().focus().toggleUnderline().run()}
                            className={editor.isActive('underline') ? 'is-active !text-blue-500' : ''}
                        >
                            <IconUnderline
                                className={cn(
                                    'cursor-pointer hover:text-blue-500 min-h-[14px] h-[14px] w-[14px] min-w-[14px]',
                                )}
                            />
                        </StyledButton>
                        <StyledButton
                            variant='text'
                            size='small'
                            onClick={() => editor.chain().focus().toggleStrike().run()}
                            className={editor.isActive('strike') ? 'is-active !text-blue-500' : ''}
                        >
                            <IconStrikeThrough
                                className={cn(
                                    'cursor-pointer hover:text-blue-500 min-h-[14px] h-[14px] w-[14px] min-w-[14px]',
                                )}
                            />
                        </StyledButton>

                        <Select
                            labelRender={(data) => (
                                <IconCircle style={{ color: data.value as string }} className='w-2 h-2' />
                            )}
                            value={getCurrentColor(editor)}
                            onChange={(_value, option) => {
                                if (!option || isArray(option)) return
                                editor.chain().focus().setColor(option.id).run()
                            }}
                            size='small'
                            popupClassName='min-w-[100px]'
                            options={editorColorsOptions}
                            suffixIcon={<IconChevronDown className='text-cText w-4 h-4' />}
                            rootClassName='bubble-menu-select'
                        />
                        <StyledButton
                            variant='text'
                            size='small'
                            onClick={() =>
                                editor.isActive('link') ? editor.chain().focus().unsetLink().run() : setLink()
                            }
                            className={cn('text-xs', editor.isActive('link') ? 'is-active !text-blue-500' : '')}
                        >
                            Link
                        </StyledButton>
                    </div>
                </BubbleMenu>
            )}
        </div>
    )
}
