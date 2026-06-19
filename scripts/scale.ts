import * as fs from 'fs';
import * as path from 'path';

const docPath = path.join(process.cwd(), 'scripts', 'generate-questions.ts');
let content = fs.readFileSync(docPath, 'utf8');

// Replace target count metrics
content = content.replace(/830/g, '1130');
content = content.replace(/5800\+/g, '7900+');

fs.writeFileSync(docPath, content, 'utf8');
console.log("Upgraded generate-questions.ts target limit from 530 to 630 systematically!");
