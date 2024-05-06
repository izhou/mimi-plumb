export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  // buildHookId: '60ff170740e50447eab28d32',
                  // title: 'Sanity Studio',
                  // name: 'lucas-foglia-studio',
                  // apiId: '96803e2b-d02e-4917-85cc-86eabcc4c993'
                },
                {
                  // buildHookId: '60ff17077ab5eb4a0dfd6934',
                  // title: 'Blog Website',
                  // name: 'lucas-foglia-web',
                  // apiId: 'ea180fab-82aa-4e4f-8b13-4790de74201c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/izhou/lucas-foglia',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://lucas-foglia-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Projects', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
