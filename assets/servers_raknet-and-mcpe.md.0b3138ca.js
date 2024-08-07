import{_ as i,c as o,a as s,w as a,e as n,r as c,o as l,b as e,d as t}from"./404.md.520a668d.js";const b=JSON.parse('{"title":"RakNet and MCPE","description":"","frontmatter":{"title":"RakNet and MCPE","mentions":["ZestiiSpaghett","MedicalJewel105","SmokeyStack","ThomasOrs","Adrian8115","ismaileke"]},"headers":[{"level":2,"title":"RakNet Notes","slug":"raknet-notes","link":"#raknet-notes","children":[]},{"level":2,"title":"Data Types","slug":"data-types","link":"#data-types","children":[]},{"level":2,"title":"Contents","slug":"contents","link":"#contents","children":[{"level":3,"title":"Unconnected Pings","slug":"unconnected-pings","link":"#unconnected-pings","children":[]},{"level":3,"title":"Unconnected Pongs","slug":"unconnected-pongs","link":"#unconnected-pongs","children":[]},{"level":3,"title":"Open Connection Request 1        |\u2192 Client\u2192Server","slug":"open-connection-request-1-\u2192-client\u2192server","link":"#open-connection-request-1-\u2192-client\u2192server","children":[]},{"level":3,"title":"Open Connection Reply 1        |\u2192 Server\u2192Client","slug":"open-connection-reply-1-\u2192-server\u2192client","link":"#open-connection-reply-1-\u2192-server\u2192client","children":[]},{"level":3,"title":"Open Connection Request 2        |\u2192 Client\u2192Server","slug":"open-connection-request-2-\u2192-client\u2192server","link":"#open-connection-request-2-\u2192-client\u2192server","children":[]},{"level":3,"title":"Open Connection Reply 2        |\u2192 Server\u2192Client","slug":"open-connection-reply-2-\u2192-server\u2192client","link":"#open-connection-reply-2-\u2192-server\u2192client","children":[]},{"level":3,"title":"Connection Request        |\u2192 Client\u2192Server","slug":"connection-request-\u2192-client\u2192server","link":"#connection-request-\u2192-client\u2192server","children":[]},{"level":3,"title":"Connection Request Accepted        |\u2192 Server\u2192Client","slug":"connection-request-accepted-\u2192-server\u2192client","link":"#connection-request-accepted-\u2192-server\u2192client","children":[]},{"level":3,"title":"New Incoming Connection        |\u2192 Client\u2192Server","slug":"new-incoming-connection-\u2192-client\u2192server","link":"#new-incoming-connection-\u2192-client\u2192server","children":[]}]},{"level":2,"title":"Sources","slug":"sources","link":"#sources","children":[]}],"relativePath":"servers/raknet-and-mcpe.md"}'),d={name:"servers/raknet-and-mcpe.md"},h=n('<p>Minecraft Bedrock uses a protocol known as <a href="http://www.jenkinssoftware.com/" target="_blank" rel="noreferrer">RakNet</a> Unlike Minecraft Java edition, Bedrock uses UDP on the port 19132</p><p>You can find a list of Minecraft Bedrock server softwares <a href="/servers/server-software.html#active-software">here</a>.</p><h2 id="raknet-notes" tabindex="-1">RakNet Notes <a class="header-anchor" href="#raknet-notes" aria-hidden="true">#</a></h2><ul><li>All strings are prefixed with an unsigned short depicting their length.</li><li>The offline message id will always be: 00ffff00fefefefefdfdfdfd12345678 (hex) - this series of bytes will be referred to as <em>Magic</em></li><li>The offline message id is sent with unconnected messages such as unconnected pings and pongs.</li><li>The GUIDS used by RakNet are 8 bytes long.</li><li>The first byte is used to identify the type of message.</li></ul><h2 id="data-types" tabindex="-1">Data Types <a class="header-anchor" href="#data-types" aria-hidden="true">#</a></h2><table><thead><tr><th>Type</th><th>Size</th><th>Range</th><th>Notes</th></tr></thead><tbody><tr><td>Byte</td><td>1</td><td>0-255</td><td>An unsigned integer</td></tr><tr><td>Long</td><td>8</td><td>-2^63 to 2^63-1</td><td>Signed 64 bit integer</td></tr><tr><td>Magic</td><td>16</td><td></td><td>00ffff00fefefefefdfdfdfd12345678 - Will always be those bytes</td></tr><tr><td>Short</td><td>2</td><td>-32768 to 32767</td><td></td></tr><tr><td>Unsigned Short</td><td>2</td><td>0 to 65535</td><td></td></tr><tr><td>String</td><td>N/A</td><td>N/A</td><td>A string prefixed by a short which depicts the length.</td></tr><tr><td>Boolean</td><td>1</td><td>0-1</td><td>0x00 is False while 0x01 is True</td></tr><tr><td>Address</td><td>7</td><td></td><td>1 byte for the ip version 4/6, 4 for the IP and 2 for the port</td></tr><tr><td>uint24le</td><td>3</td><td></td><td>3-byte little-endian unsigned integer</td></tr></tbody></table><h2 id="contents" tabindex="-1">Contents <a class="header-anchor" href="#contents" aria-hidden="true">#</a></h2>',7),p=e("ul",null,[e("li",null,"[x] Unconnected Pings"),e("li",null,"[x] Unconnected Pongs"),e("li",null,"[x] Open Connection Request 1"),e("li",null,"[x] Open Connection Reply 1"),e("li",null,"[x] Open Connection Request 2"),e("li",null,"[x] Open Connection Reply 2"),e("li",null,[e("strong",null,[t("From here on, the RakNet connection is established and all RakNet messages are contained in a "),e("a",{href:"https://wiki.vg/Raknet_Protocol#Frame_Set_Packet",target:"_blank",rel:"noreferrer"},"Frame Set Packet"),t(".")])]),e("li",null,"[x] Connection Request"),e("li",null,"[x] Connection Request Accepted"),e("li",null,"[x] New Incoming Connection")],-1),u=n('<h3 id="unconnected-pings" tabindex="-1">Unconnected Pings <a class="header-anchor" href="#unconnected-pings" aria-hidden="true">#</a></h3><p>Minecraft Bedrock will send out a message to all listed servers (and the local network) to check if any games are available and retrieve the MOTD from the game. These messages are known as unconnected pings and are structured in this format:</p><p><code>0x01 | client alive time in ms (unsigned long long) | magic | client GUID</code></p><h3 id="unconnected-pongs" tabindex="-1">Unconnected Pongs <a class="header-anchor" href="#unconnected-pongs" aria-hidden="true">#</a></h3><p>After this message, the server will respond with something called an unconnected pong. The reason these messages are unconnected is because the client has not established a connection to the server. This is the format of an unconnected pong:</p><p><code>0x1c | client alive time in ms (recorded from previous ping) | server GUID | Magic | string length | Edition (MCPE or MCEE for Education Edition);MOTD line 1;Protocol Version;Version Name;Player Count;Max Player Count;Server Unique ID;MOTD line 2;Game mode;Game mode (numeric);Port (IPv4);Port (IPv6);</code></p><p>Example:</p><p><code>MCPE;Dedicated Server;527;1.19.1;0;10;13253860892328930865;Bedrock level;Survival;1;19132;19133;</code></p><p>The client doesn&#39;t seem to use the gamemode or the numeric value for the gamemode.</p><h3 id="open-connection-request-1-\u2192-client\u2192server" tabindex="-1">Open Connection Request 1 |\u2192 Client\u2192Server <a class="header-anchor" href="#open-connection-request-1-\u2192-client\u2192server" aria-hidden="true">#</a></h3><p>The client sends this when attempting to join the server</p><p><code>0x05 | Magic | Protocol version (currently 11 or 0x0b) | RakNet Null Padding</code></p><p>The null padding seems to be used to discover the maximum packet size the network can handle.</p><p>The client will send this to the server with decreasing null padding until the server responds with a</p><h3 id="open-connection-reply-1-\u2192-server\u2192client" tabindex="-1">Open Connection Reply 1 |\u2192 Server\u2192Client <a class="header-anchor" href="#open-connection-reply-1-\u2192-server\u2192client" aria-hidden="true">#</a></h3><p>The server responds with this once the client attempts to join</p><p><code>0x06 | magic | server GUID | ServerHasSecurity (boolean) | Cookie (uint32, if server has security) | MTU Size (Unsigned short)</code></p><p>This is the first half of the handshake between the client and the server.</p><h3 id="open-connection-request-2-\u2192-client\u2192server" tabindex="-1">Open Connection Request 2 |\u2192 Client\u2192Server <a class="header-anchor" href="#open-connection-request-2-\u2192-client\u2192server" aria-hidden="true">#</a></h3><p>The client responds with this after they receive the open connection reply 1 packet.</p><p><code>0x07 | magic | Cookie (uint32, if server has security) | Client supports security (Boolean(false), always false for the vanilla client, if server has security) | server Address | MTU Size (Unsigned short) | client GUID (Long)</code></p><h3 id="open-connection-reply-2-\u2192-server\u2192client" tabindex="-1">Open Connection Reply 2 |\u2192 Server\u2192Client <a class="header-anchor" href="#open-connection-reply-2-\u2192-server\u2192client" aria-hidden="true">#</a></h3><p>This is the last part of the handshake between the client and the server.</p><p><code>0x08 | magic | server GUID (Long) | client Address | MTU Size | security(Boolean)</code></p><p><strong>From here on, all RakNet messages are contained in a <a href="https://wiki.vg/Raknet_Protocol#Frame_Set_Packet" target="_blank" rel="noreferrer">Frame Set Packet</a>.</strong></p><h3 id="connection-request-\u2192-client\u2192server" tabindex="-1">Connection Request |\u2192 Client\u2192Server <a class="header-anchor" href="#connection-request-\u2192-client\u2192server" aria-hidden="true">#</a></h3><p>This is the part where the client sends the connection request.</p><p><code>0x09 | client GUID (Long) | Request timestamp (Long) | Secure (Boolean)</code></p><h3 id="connection-request-accepted-\u2192-server\u2192client" tabindex="-1">Connection Request Accepted |\u2192 Server\u2192Client <a class="header-anchor" href="#connection-request-accepted-\u2192-server\u2192client" aria-hidden="true">#</a></h3><p>The server sends this packet in response to the incoming connection request.</p><p><code>0x10 | client Address | System index (Short, unknown what this does. 0 works as a value (Minecraft client sends 47)) | System adresses ([]Address) | Ping time (Long) | Pong Time (Long)</code></p><h3 id="new-incoming-connection-\u2192-client\u2192server" tabindex="-1">New Incoming Connection |\u2192 Client\u2192Server <a class="header-anchor" href="#new-incoming-connection-\u2192-client\u2192server" aria-hidden="true">#</a></h3><p>Our RakNet connection is now fully successful.</p><p><code>0x13 | server Address | internal Adress ([20(maybe 10)]Address) (i use 255.255.255.255:0) | Ping time (Long) | Pong Time (Long)</code></p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you are interested and want to read more about it here is the documentation for the Bedrock Protocol and RakNet:</p><p><a href="https://github.com/Mojang/bedrock-protocol-docs" target="_blank" rel="noreferrer">Mojang&#39;s Official Protocol Documentation</a></p><p><a href="https://wiki.vg/Raknet_Protocol" target="_blank" rel="noreferrer">RakNet Protocol Documentation</a></p></div><p>This page is a WIP, feel free to contribute as it is still being worked on.</p>',37);function g(f,v,m,k,_,y){const r=c("Checklist");return l(),o("div",null,[h,s(r,null,{default:a(()=>[p]),_:1}),u])}const w=i(d,[["render",g]]);export{b as __pageData,w as default};
