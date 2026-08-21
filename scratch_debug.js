import http from 'http';
import WebSocket from 'ws';

async function debugChrome() {
  http.get('http://127.0.0.1:9222/json', (res) => {
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => {
      try {
        const targets = JSON.parse(body);
        const pageTarget = targets.find(t => t.type === 'page');
        if (!pageTarget) {
          console.error('No page target found in Chrome remote debugging');
          return;
        }
        
        console.log('Connecting to Chrome CDP:', pageTarget.webSocketDebuggerUrl);
        const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);

        ws.on('open', () => {
          console.log('CDP WebSocket Connected!');
          ws.send(JSON.stringify({ id: 1, method: 'Console.enable' }));
          ws.send(JSON.stringify({ id: 2, method: 'Runtime.enable' }));
          ws.send(JSON.stringify({ id: 3, method: 'Page.enable' }));
          ws.send(JSON.stringify({ id: 4, method: 'Page.navigate', params: { url: 'http://127.0.0.1:5173/' } }));
        });

        ws.on('message', (data) => {
          const msg = JSON.parse(data.toString());
          
          if (msg.method === 'Runtime.consoleAPICalled') {
            console.log('BROWSER CONSOLE:', msg.params.type, msg.params.args.map(a => a.value || a.description).join(' '));
          }
          if (msg.method === 'Runtime.exceptionThrown') {
            console.error('BROWSER EXCEPTION:', JSON.stringify(msg.params.exceptionDetails, null, 2));
          }
          if (msg.method === 'Console.messageAdded') {
            console.log('CONSOLE MSG:', msg.params.message.level, msg.params.message.text);
          }
        });

      } catch (err) {
        console.error('Failed to parse CDP JSON:', err);
      }
    });
  }).on('error', err => {
    console.error('CDP HTTP Error:', err.message);
  });
}

debugChrome();
