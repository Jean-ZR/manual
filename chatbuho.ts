import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const chatbuhoSidebar: SidebarsConfig = {
  docs: [
    {
      type: 'autogenerated',
      dirName: '.' // Usa '.' para generar sidebar desde la estructura de directorios actual
    }
  ]
};

export default chatbuhoSidebar;