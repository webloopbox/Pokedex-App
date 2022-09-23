export interface Modal {
    id?: number,
    open: boolean
}

export interface ModalStyledProps {
    transition?: boolean,
    darkTheme?: boolean
    className?: string
}