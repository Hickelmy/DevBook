export const items = [
  {
    label: "Arquivo",
    icon: "pi pi-fw pi-file",
    items: [
      {
        label: "Novo",
        icon: "pi pi-fw pi-plus",
        items: [
          {
            label: "Anotacoes",
            icon: "pi pi-fw pi-bookmark",
          },
          {
            label: "Capturas",
            icon: "pi pi-fw pi-video",
          },
        ],
      },
      {
        label: "Deletar",
        icon: "pi pi-fw pi-trash",
      },
      {
        separator: true,
      },
      {
        label: "Exportar",
        icon: "pi pi-fw pi-external-link",
      },
    ],
  },
  {
    label: "Editar",
    icon: "pi pi-fw pi-pencil",
    items: [
      {
        label: "Esquerda",
        icon: "pi pi-fw pi-align-left",
      },
      {
        label: "Direita",
        icon: "pi pi-fw pi-align-right",
      },
      {
        label: "Centro",
        icon: "pi pi-fw pi-align-center",
      },
      {
        label: "Justify",
        icon: "pi pi-fw pi-align-justify",
      },
    ],
  },
  {
    label: "Usuario",
    icon: "pi pi-fw pi-user",
    items: [
      {
        label: "Novo",
        icon: "pi pi-fw pi-user-plus",
      },
      {
        label: "Deletar",
        icon: "pi pi-fw pi-user-minus",
      },
      {
        label: "Pesquisar",
        icon: "pi pi-fw pi-users",
        items: [
          {
            label: "Filtrar",
            icon: "pi pi-fw pi-filter",
            items: [
              {
                label: "Imprimir",
                icon: "pi pi-fw pi-print",
              },
            ],
          },
          {
            icon: "pi pi-fw pi-bars",
            label: "List",
          },
        ],
      },
    ],
  },
];
