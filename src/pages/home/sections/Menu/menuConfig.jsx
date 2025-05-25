import {
  HomeIcon,
  CubeIcon,
  ExclamationTriangleIcon,
  ArchiveBoxArrowDownIcon,
  ArchiveBoxXMarkIcon,
  UsersIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  ClipboardDocumentListIcon,
  BuildingStorefrontIcon,
  DocumentChartBarIcon,
  UserGroupIcon,
  PlusCircleIcon,
  ListBulletIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";

export const menu = [
  {
    label: "Dashboard",
    icon: HomeIcon,
    to: "/dashboard",
  },
  {
    label: "Visão geral do estoque",
    icon: CubeIcon,
    to: "/estoque",
  },
  {
    label: "Alertas",
    icon: ExclamationTriangleIcon,
    to: "/alertas",
  },
  {
    label: "Produtos",
    icon: ArchiveBoxArrowDownIcon,
    children: [
      { label: "Listar produtos", icon: ListBulletIcon, to: "/produtos" },
      { label: "Cadastrar novo produto", icon: PlusCircleIcon, to: "/produtos/novo" },
    ],
  },
  {
    label: "Entradas",
    icon: ArchiveBoxArrowDownIcon,
    children: [
      { label: "Registrar entrada", icon: PlusCircleIcon, to: "/entradas/nova" },
      { label: "Histórico de entradas", icon: ListBulletIcon, to: "/entradas" },
    ],
  },
  {
    label: "Saídas",
    icon: ArchiveBoxXMarkIcon,
    children: [
      { label: "Registrar saída", icon: PlusCircleIcon, to: "/saidas/nova" },
      { label: "Histórico de saídas", icon: ListBulletIcon, to: "/saidas" },
    ],
  },
  {
    label: "Fornecedores",
    icon: BuildingStorefrontIcon,
    children: [
      { label: "Listar fornecedores", icon: ListBulletIcon, to: "/fornecedores" },
      { label: "Cadastrar fornecedor", icon: PlusCircleIcon, to: "/fornecedores/novo" },
    ],
  },
  {
    label: "Relatórios",
    icon: DocumentChartBarIcon,
    children: [
      { label: "Estoque atual", icon: CubeIcon, to: "/relatorios/estoque" },
      { label: "Entradas e saídas por período", icon: ClipboardDocumentListIcon, to: "/relatorios/movimentacoes" },
      { label: "Produtos com estoque crítico", icon: ExclamationTriangleIcon, to: "/relatorios/criticos" },
    ],
  },
  {
    label: "Usuários",
    icon: UserGroupIcon,
    children: [
      { label: "Listar usuários", icon: ListBulletIcon, to: "/usuarios" },
      { label: "Permissões", icon: Cog6ToothIcon, to: "/usuarios/permissoes" },
    ],
  },
  {
    label: "Configurações",
    icon: Cog6ToothIcon,
    to: "/configuracoes",
  },
  {
    label: "Sair",
    icon: ArrowRightOnRectangleIcon,
    to: "/Login",
  },
];