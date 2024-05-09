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
            value: 'https://github.com/izhou/mimi-plumb',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://mimi-plumb.netlify.app', category: 'apps'}
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
