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
                  buildHookId: '6639426a2e90953abd9f9469',
                  title: 'Blog Website',
                  name: 'mimi-plumb',
                  apiId: 'a0c6a20e-b34e-4f93-b3c7-86924ea4f236'
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
