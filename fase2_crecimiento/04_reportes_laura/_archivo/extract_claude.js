const fs = require('fs');

const inputFile = 'h:/Mi unidad/Clientes/incunabula/Proyecto/fase2_crecimiento/04_reportes_laura/_archivo/claude_messages.json';
const outputFile = 'h:/Mi unidad/Clientes/incunabula/Proyecto/fase2_crecimiento/04_reportes_laura/_archivo/claude_output_extracted.md';

console.log('Reading JSON file...');
const rawData = fs.readFileSync(inputFile, 'utf8');

console.log('Parsing JSON...');
const messages = JSON.parse(rawData);

let markdown = '# Extracción de la Auditoría de Claude (Cline)\n\n';

for (const msg of messages.messages) {
    if (msg.role === 'assistant' && msg.content) {
        for (const block of msg.content) {
            if (block.type === 'text' && block.text) {
                markdown += `\n\n${block.text}\n\n---`;
            }
        }
    }
}

fs.writeFileSync(outputFile, markdown, 'utf8');
console.log('Extraction complete. Saved to ' + outputFile);
