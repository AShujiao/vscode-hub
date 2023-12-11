import { workspace } from 'vscode';

const configState = {
  get scale() {
    return getConfig('vscodehub.scale') as number;
  },
};

function getConfig(key: string) {
  return workspace.getConfiguration().get(key);
}

export { configState };
