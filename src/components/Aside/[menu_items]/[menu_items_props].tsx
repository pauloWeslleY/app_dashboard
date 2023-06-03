import { ReactElement } from 'react'
import {
  MdArrowDownward,
  MdArrowUpward,
  MdDashboard,
  MdExitToApp,
} from 'react-icons/md'

interface IMenuItemsProps {
  path: string
  label: string
  icon: ReactElement
}

export const MENU_ITEMS: IMenuItemsProps[] = [
  {
    path: '/dashboard',
    label: 'Dashboard',
    icon: <MdDashboard />,
  },
  {
    path: '/list/entry-balance',
    label: 'Entradas',
    icon: <MdArrowDownward />,
  },
  {
    path: '/list/out-balance',
    label: 'Saídas',
    icon: <MdArrowUpward />,
  },
  {
    path: '#',
    label: 'Sair',
    icon: <MdExitToApp />,
  },
]
