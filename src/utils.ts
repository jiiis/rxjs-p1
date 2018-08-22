export function addItem(item: string) {
    const node = document.createElement('li');
    const textNode = document.createTextNode(item);

    node.appendChild(textNode);
    document.getElementById('output').appendChild(node);
}
