import {BaseSyntheticEvent} from 'react'

export type ClassNameProps = { className?: string }
export type NotChildrenProps = { children?: never }
export type ClickProps<T = unknown, E extends Event = BaseSyntheticEvent> = { onClick: (e: E) => T }
