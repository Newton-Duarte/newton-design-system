export default function plop(
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator('component', {
    description: 'Create a new UI component',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
      },
    ],

    actions: [
      {
        type: 'add',
        path: './src/components/{{ lowerCase name }}/index.tsx',
        templateFile: './plop-templates/component.tsx.hbs',
      },
      {
        type: 'add',
        path: './src/components/{{ lowerCase name }}/{{ lowerCase name }}.stories.tsx',
        templateFile: './plop-templates/story.tsx.hbs',
      },
      {
        type: 'append',
        path: './src/components/index.ts',
        template: "export * from './{{ lowerCase name }}'",
      },
    ],
  })
}
