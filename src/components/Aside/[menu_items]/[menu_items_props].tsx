import { ReactElement } from 'react'
import { MdArrowDownward, MdArrowUpward, MdDashboard } from 'react-icons/md'

interface IMenuItemsProps {
  path: string
  label: string
  icon: ReactElement
}

export const MENU_ITEMS: IMenuItemsProps[] = [
  {
    path: '/',
    label: 'Dashboard',
    icon: <MdDashboard />,
  },
  {
    path: '/list/entry-balance',
    label: 'Entradas',
    icon: <MdArrowUpward />,
  },
  {
    path: '/list/out-balance',
    label: 'Saídas',
    icon: <MdArrowDownward />,
  },
]
